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

test('verifyAll: budget, 14-day recheck, state stamps', async () => {
  const gh = { codeSearch: async () => [], fileText: async () => '' };
  const state = { verify: { 'o/recent': '2026-09-20', 'o/old': '2026-09-01' } };
  const items = [
    { full_name: 'o/code', verified: 'code' },
    { full_name: 'o/recent', verified: 'docs' },
    { full_name: 'o/old', verified: 'docs' },
    { full_name: 'o/new1', verified: 'pending' },
    { full_name: 'o/new2', verified: 'pending' },
  ];
  const r = await verifyAll(items, gh, { budget: 2, sleep: async () => {}, state, today: '2026-09-26' });
  assert.deepEqual(r.checked, ['o/old', 'o/new1']);
  assert.deepEqual(r.pending, ['o/new2']);
  assert.equal(state.verify['o/old'], '2026-09-26');
  assert.equal(state.verify['o/recent'], '2026-09-20');
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
