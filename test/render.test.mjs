import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { ROOT } from './_offline.mjs';
import { kst, row, renderReadme, renderCategory, renderChanges } from '../src/render.mjs';

const cats = JSON.parse(fs.readFileSync(`${ROOT}/config/categories.json`, 'utf8'));
const it = (o) => ({ full_name: 'o/r', url: 'https://github.com/o/r', description: 'Router | with pipe', readme_excerpt: null, summary_ko: { what: '프롬프트 라우터입니다 정말로', decision: '의도를 choice로 고른다 정말', point: '해당 없음 선택지가 있다 정말' }, category: { slug: 'routing', label: '라우팅·의도 분류', emoji: '🔀', confidence: 0.8 }, stars: 120, forks: 9, stars_7d_delta: 40, pushed_at: '2026-09-25T10:00:00Z', first_seen: '2026-09-25', verified: 'code', decision_types: ['choice', 'noul'], flags: [], score: 8, sources: ['github-search'], ...o });
const meta = { schema: 'radar-index/1', topic: 'jev', generated_at: '2026-09-26T21:00:00Z', counts: { total: 2, new_24h: 1, new_7d: 2, verified: 1 }, sources: [], queue: { summaries_pending: 1, verification_pending: 3 } };

test('kst formats generation time in Korea time', () => {
  assert.equal(kst('2026-09-26T21:00:00Z'), '2026-09-27 06:00 KST');
});

test('row: stars, forks, three-line summary, tags, pipes escaped', () => {
  const r = row(it({}), '2026-09-26');
  assert.match(r, /^\| \[o\/r\]\(https:\/\/github\.com\/o\/r\) \| 120 \| 9 \|/);
  assert.match(r, /\*\*무엇\*\* 프롬프트 라우터입니다 정말로<br>\*\*판단\*\* /);
  assert.match(r, /✅ 🆕 🔥 \+40 `choice` `noul`/);
  const waiting = row(it({ summary_ko: null, verified: 'pending', stars_7d_delta: null, first_seen: '2026-09-01', decision_types: [] }), '2026-09-26');
  assert.match(waiting, /요약 대기 · Router \\\| with pipe/);
  assert.doesNotMatch(waiting, /✅|🆕|🔥/);
  // HTML and backtick escaping
  const dangerous = row(it({ summary_ko: null, description: '<img src=x onerror=1> a|b `c' }), '2026-09-26');
  assert.ok(dangerous.includes('&lt;img src=x onerror=1&gt;'));
  assert.ok(dangerous.includes('a\\|b'));
  assert.ok(dangerous.includes('\\`c'));
  assert.doesNotMatch(dangerous, /<img/);
  // markdown link/image syntax from untrusted text is escaped
  const linky = row(it({ summary_ko: null, description: 'see ![x](https://evil/p.png) [click](https://evil)' }), '2026-09-26');
  assert.ok(linky.includes(String.raw`\!\[x\](https://evil/p.png) \[click\](https://evil)`), linky);
  // baseline: first seen on or before the backfill day is not new
  assert.doesNotMatch(row(it({ first_seen: '2026-09-25' }), '2026-09-26', '2026-09-25'), /🆕/);
});

test('README: header date, counts, sections, category anchors, copyright note', () => {
  const md = renderReadme({ meta, items: [it({}), it({ full_name: 'o/s', category: { slug: 'other', label: '기타', emoji: '🧩', confidence: null }, stars_7d_delta: 1 })], docChanges: [{ id: 'docs-models', url: 'https://docs.typesafe.ai/models.md', kind: 'new-model', detail: 'jev-1.14.0' }], categories: cats, date: '2026-09-27' });
  assert.match(md, /\*\*마지막 업데이트: 2026-09-27 06:00 KST\*\* · 리포 2 · 🆕 24시간 1 · 7일 2 · ✅ 코드 확인 1 · 📚 문서 변경 1 · 요약 대기 1 · 코드 확인 대기 3/);
  const base = renderReadme({ meta: { ...meta, baseline_date: '2026-09-25' }, items: [it({})], docChanges: [], categories: cats, date: '2026-09-27' });
  assert.match(base, /## 🆕 새로 발견 \(7일\)\n\n없음/, 'baseline items are not listed as new');
  for (const h of ['## 🆕 새로 발견 (7일)', '## 🔥 급상승 (7일)', '## 📚 문서·모델 변경 (7일)', '### 🔀 라우팅·의도 분류 (1)', '### 🧩 기타 (1)', '## 이 리포는']) assert.ok(md.includes(h), h);
  assert.match(md, /새 모델 `jev-1\.14\.0`/);
  assert.match(md, /원저작자/);
  assert.doesNotMatch(md, /### 🛡️/, 'empty categories are omitted');
  // explicit anchors
  assert.ok(md.includes('<a id="cat-routing"></a>\n### 🔀 라우팅·의도 분류 (1)'));
  assert.ok(md.includes('<a id="cat-other"></a>\n### 🧩 기타 (1)'));
  assert.ok(md.includes('[🔀 라우팅·의도 분류 (1)](#cat-routing)'));
  assert.ok(md.includes('[🧩 기타 (1)](#cat-other)'));
});

test('category page lists all items with README excerpt; changes page lists vanished repos', () => {
  const cat = renderCategory(cats[0], [it({ readme_excerpt: 'Routes prompts.' })], '2026-09-27');
  assert.match(cat, /^# 🔀 라우팅·의도 분류 \(1\)/);
  assert.match(cat, /<details><summary>README 발췌<\/summary>\n\nRoutes prompts\.\n\n<\/details>/);
  // excerpt escaping
  const catDangerous = renderCategory(cats[0], [it({ readme_excerpt: '<b>hi</b> | `x`' })], '2026-09-27');
  assert.ok(catDangerous.includes('&lt;b&gt;hi&lt;/b&gt;'));
  assert.ok(catDangerous.includes('\\`x\\`'));
  assert.doesNotMatch(catDangerous, /<b>/);
  const ch = renderChanges({ date: '2026-09-27', added: [it({})], vanished: ['x/gone'], rising: [], docChanges: [] });
  assert.match(ch, /^# 2026-09-27 변경/);
  assert.match(ch, /## 사라짐\n\n- x\/gone/);
});
