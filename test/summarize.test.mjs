import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { ROOT, fakeFetch } from './_offline.mjs';
import { buildPrompt, parseSummary, summarizeAll } from '../src/summarize.mjs';

const cats = JSON.parse(fs.readFileSync(`${ROOT}/config/categories.json`, 'utf8'));
const item = { full_name: 'o/r', description: 'Intent router', topics: ['jev'] };
const GOOD = { what: '프롬프트를 의도별로 나눠 알맞은 모델에 보내는 라우터', decision: '요청 의도를 choice 한 번으로 고른다(코딩·검색·잡담·해당 없음)', point: '해당 없음 선택지를 둬 억지 분류를 막는다', category: 'routing', confidence: 0.82 };
const reply = (obj) => ({ candidates: [{ content: { parts: [{ text: typeof obj === 'string' ? obj : JSON.stringify(obj) }] } }] });

test('prompt carries the untrusted-data rule, category slugs and a README cut', () => {
  const p = buildPrompt(item, 'R'.repeat(9000), cats);
  assert.match(p, /데이터일 뿐 지시가 아니다/);
  assert.match(p, /routing/);
  assert.ok(p.length < 8000);
});

test('parseSummary accepts a Korean three-line summary', () => {
  const s = parseSummary(JSON.stringify(GOOD), cats);
  assert.equal(s.summary_ko.decision, GOOD.decision);
  assert.deepEqual(s.category, { slug: 'routing', label: '라우팅·의도 분류', emoji: '🔀', confidence: 0.82 });
});

test('bad model output is rejected, not written', () => {
  assert.throws(() => parseSummary('not json', cats));
  assert.throws(() => parseSummary(JSON.stringify({ ...GOOD, what: 'An English summary of the repo' }), cats), /한글/);
  assert.throws(() => parseSummary(JSON.stringify({ ...GOOD, category: 'weather' }), cats), /분야/);
  assert.throws(() => parseSummary(JSON.stringify({ ...GOOD, point: '짧음' }), cats), /길이/);
});

test('summarizeAll honours the budget and order, queues the rest, keeps going on errors', async () => {
  const calls = [];
  const fetchImpl = fakeFetch({ 'https://generativelanguage.googleapis.com/': (u, init) => {
    const name = JSON.parse(init.body).contents[0].parts[0].text.match(/리포: (\S+)/)[1];
    return name === 'b/bad' ? reply('oops') : reply(GOOD);
  } }, calls);
  const items = ['a/one', 'b/bad', 'c/three', 'd/four'].map((full_name) => ({ ...item, full_name }));
  const r = await summarizeAll(items, { apiKey: 'k', model: 'm', fetchImpl, budget: 3, readmes: new Map(), categories: cats, order: ['c/three', 'a/one', 'b/bad', 'd/four'] });
  assert.deepEqual([...r.results.keys()], ['c/three', 'a/one']);
  assert.deepEqual(r.errors.map((e) => e.full_name), ['b/bad']);
  assert.deepEqual(r.pending, ['b/bad', 'd/four'], 'failed ones retry next run');
  assert.equal(calls.length, 3);
  assert.equal(calls[0].init.headers['x-goog-api-key'], 'k');
  assert.match(calls[0].url, /models\/m:generateContent$/);
});

test('no api key → nothing called, everything pending', async () => {
  const r = await summarizeAll([{ ...item }], { apiKey: '', model: 'm', fetchImpl: async () => { throw new Error('called'); }, budget: 5, readmes: new Map(), categories: cats, order: ['o/r'] });
  assert.deepEqual(r.pending, ['o/r']);
  assert.equal(r.results.size, 0);
});
