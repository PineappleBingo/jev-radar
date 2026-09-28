import { test } from 'node:test';
import assert from 'node:assert/strict';
import { decisionTypes, verifyRepo, verifyAll } from '../src/verify.mjs';

test('decisionTypes reads question types from code', () => {
  assert.deepEqual(decisionTypes(`q = { intent: { type: "choice" }, ok: { 'type': 'noul' } }\nscore_it = {"type": "score"}`), ['choice', 'noul', 'score']);
  assert.deepEqual(decisionTypes('type: "chooser"'), []);
});

test('verifyRepo: code hit outside docs → code + decision types; docs-only hit → null', async () => {
  const slept = [];
  const gh = {
    codeSearch: async (q) => (q.startsWith('repo:o/code "api.typesafe.ai"') ? [{ path: 'README.md' }, { path: 'src/jev.ts' }] : q.startsWith('repo:o/docs') ? [{ path: 'docs/intro.md' }] : []),
    fileText: async (fn, p) => (p === 'src/jev.ts' ? 'const q = { type: "score" }' : ''),
  };
  const a = await verifyRepo(gh, 'o/code', { sleep: async (ms) => slept.push(ms) });
  assert.deepEqual(a, { verified: 'code', decision_types: ['score'], queries: 1 });
  const b = await verifyRepo(gh, 'o/docs', { sleep: async (ms) => slept.push(ms) });
  assert.deepEqual([b.verified, b.queries], [null, 4]);
  assert.ok(slept.every((ms) => ms === 6500));
});

test('verifyAll: never-checked first by score, re-check only when pushed since the last check, state stamps', async () => {
  const gh = { codeSearch: async () => [], fileText: async () => '' };
  const state = { verify: { 'o/quiet': '2026-09-01', 'o/pushed': '2026-09-01' } };
  const items = [
    { full_name: 'o/code', verified: 'code', score: 9, pushed_at: '2026-09-25T00:00:00Z' },
    { full_name: 'o/quiet', verified: 'docs', score: 8, pushed_at: '2026-08-20T00:00:00Z' },
    { full_name: 'o/pushed', verified: 'docs', score: 8, pushed_at: '2026-09-10T00:00:00Z' },
    { full_name: 'o/new-low', verified: 'pending', score: 1, pushed_at: '2026-09-25T00:00:00Z' },
    { full_name: 'o/new-high', verified: 'pending', score: 5, pushed_at: '2026-09-25T00:00:00Z' },
  ];
  const r = await verifyAll(items, gh, { budget: 2, sleep: async () => {}, state, today: '2026-09-26' });
  assert.deepEqual(r.checked, ['o/new-high', 'o/new-low']);
  assert.deepEqual(r.pending, ['o/pushed'], 'quiet repo is not due; pushed one waits behind never-checked ones');
  assert.equal(state.verify['o/new-high'], '2026-09-26');
  assert.equal(state.verify['o/quiet'], '2026-09-01');
  assert.equal(r.error, null);
});

test('verifyAll stops on a code-search error and keeps the rest pending', async () => {
  const gh = { codeSearch: async (q) => { if (q.includes('o/b')) throw new Error('GitHub 403 search/code'); return []; }, fileText: async () => '' };
  const state = {};
  const r = await verifyAll([{ full_name: 'o/a', verified: 'docs' }, { full_name: 'o/b', verified: 'docs' }, { full_name: 'o/c', verified: 'docs' }], gh, { budget: 5, sleep: async () => {}, state, today: '2026-09-26' });
  assert.deepEqual(r.checked, ['o/a']);
  assert.deepEqual(r.pending, ['o/b', 'o/c']);
  assert.match(r.error, /403/);
  assert.equal(state.verify['o/b'], undefined);
});

test('decisionTypes: case-insensitive pattern, enum-style constants', () => {
  assert.deepEqual(decisionTypes('QuestionType.CHOICE, QuestionType.NOUL'), ['choice', 'noul']);
  assert.deepEqual(decisionTypes('{ "TYPE": "Score" }'), ['score']);
  assert.deepEqual(decisionTypes('result.score and response.choices'), []);
  assert.deepEqual(decisionTypes('JevType.choice'), ['choice']);
  assert.deepEqual(decisionTypes('type: "NOUL"'), ['noul']);
});

test('verifyAll: maxQueries budget stops early, rest stay pending', async () => {
  let searchCount = 0;
  const gh = {
    codeSearch: async () => { searchCount++; return []; },
    fileText: async () => ''
  };
  const state = {};
  const items = Array.from({ length: 20 }, (_, i) => ({ full_name: `o/repo${i}`, verified: 'docs' }));
  const r = await verifyAll(items, gh, { budget: 15, maxQueries: 45, sleep: async () => {}, state, today: '2026-09-26' });
  assert.equal(r.checked.length, 11);
  assert.equal(r.pending.length, 9);
  assert.equal(searchCount, 44);
  assert.equal(r.error, null);
});
