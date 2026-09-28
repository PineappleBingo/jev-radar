import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { ROOT, fakeFetch } from './_offline.mjs';
import { run, exitCode } from '../src/run.mjs';
import { validate } from '../src/lib/schema.mjs';

function tmpRoot() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'radar-'));
  fs.cpSync(path.join(ROOT, 'config'), path.join(dir, 'config'), { recursive: true });
  fs.cpSync(path.join(ROOT, 'schema'), path.join(dir, 'schema'), { recursive: true });
  const src = JSON.parse(fs.readFileSync(path.join(dir, 'config/sources.json'), 'utf8'));
  src.catalogs = [{ id: 'md', method: 'markdown-links', url: 'https://cat/list.md' }];
  src.docs = [{ id: 'docs-models', method: 'page-hash', url: 'https://docs.typesafe.ai/models.md' }];
  src.seeds = [{ full_name: 'seed/one', cat: 'routing' }];
  src.red_flags = [{ full_name: 'bad/actor', note_ko: 'x' }];
  fs.writeFileSync(path.join(dir, 'config/sources.json'), JSON.stringify(src));
  fs.writeFileSync(path.join(dir, 'config/queries.json'), JSON.stringify(['topic:jev']));
  return dir;
}
const node = (fn, stars, extra = {}) => ({ nameWithOwner: fn, url: `https://github.com/${fn}`, description: extra.description ?? 'Uses TypeSafe Jev', stargazerCount: stars, forkCount: 1, pushedAt: extra.pushedAt ?? '2026-09-25T00:00:00Z', createdAt: '2026-09-01T00:00:00Z', isArchived: false, isFork: false, primaryLanguage: null, licenseInfo: null, repositoryTopics: { nodes: [] } });
function table({ stars = 10, gone = [], pushed = {}, desc = {}, extraHits = [] } = {}) {
  return {
    'https://cat/list.md': '- [x](https://github.com/cat/two)\n- [bad](https://github.com/bad/actor)',
    'https://api.github.com/search/repositories': { total_count: 2 + extraHits.length, items: [{ full_name: 'hit/three' }, { full_name: 'homonym/jev' }, ...extraHits.map((full_name) => ({ full_name }))] },
    'https://api.github.com/graphql': (u, init) => {
      const q = JSON.parse(init.body).query;
      const data = {};
      const errors = [];
      for (const [, alias, owner, name] of q.matchAll(/(r\d+): repository\(owner: "([^"]+)", name: "([^"]+)"\)/g)) {
        const fn = `${owner}/${name}`;
        if (gone.includes(fn)) { data[alias] = null; errors.push({ type: 'NOT_FOUND', path: [alias] }); continue; }
        data[alias] = node(fn, stars, { pushedAt: pushed[fn], description: desc[fn] ?? (fn === 'homonym/jev' ? 'Jev the cat' : fn === 'homonym/lib' ? 'A homonym library, unrelated' : fn === 'hit/three' ? 'A tool for handling things' : undefined) });
      }
      return { data, errors };
    },
    'https://api.github.com/repos/homonym/jev/readme': 'A cat named Jev.',
    'https://api.github.com/repos/homonym/lib/readme': 'Just a coincidentally named library, nothing about the model.',
    'https://api.github.com/repos/': 'This project calls api.typesafe.ai to route prompts with choice questions.',
    'https://api.github.com/search/code': { items: [] },
    'https://generativelanguage.googleapis.com/': { candidates: [{ content: { parts: [{ text: JSON.stringify({ what: '프롬프트를 의도별로 보내는 라우터', decision: '요청 의도를 choice로 고른다', point: '해당 없음 선택지를 둬 억지 분류를 막는다', category: 'routing', confidence: 0.8 }) }] } }] },
    'https://docs.typesafe.ai/models.md': '- jev-1.13.0',
  };
}
const opts = (dir, date, t) => ({ root: dir, date, now: new Date(`${date}T06:00:00+09:00`).toISOString(), env: { GITHUB_TOKEN: 't', GEMINI_API_KEY: 'k' }, fetchImpl: fakeFetch(t), sleep: async () => {} });

test('first run writes schema-valid data, README and category pages; homonyms and red flags are out', async () => {
  const dir = tmpRoot();
  const r = await run(opts(dir, '2026-09-27', table()));
  assert.deepEqual(r.errors, []);
  assert.deepEqual(r.items.map((i) => i.full_name).sort(), ['cat/two', 'hit/three', 'seed/one']);
  const schema = JSON.parse(fs.readFileSync(path.join(dir, 'schema/radar-index.schema.json'), 'utf8'));
  const index = JSON.parse(fs.readFileSync(path.join(dir, 'data/index.json'), 'utf8'));
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'data/meta.json'), 'utf8'));
  assert.deepEqual(validate({ ...schema.$defs.meta, $defs: schema.$defs }, meta), []);
  index.forEach((it, i) => assert.deepEqual(validate({ ...schema.$defs.item, $defs: schema.$defs }, it, undefined, `$[${i}]`), []));
  assert.equal(index.find((i) => i.full_name === 'seed/one').category.slug, 'routing');
  assert.ok(index.every((i) => i.summary_ko), 'summaries within budget');
  const readme = fs.readFileSync(path.join(dir, 'README.md'), 'utf8');
  assert.match(readme, /마지막 업데이트: 2026-09-27 06:00 KST/);
  assert.ok(fs.existsSync(path.join(dir, 'categories/routing.md')));
  assert.ok(fs.existsSync(path.join(dir, 'changes/2026-09-27.md')));
  assert.equal(meta.sources.find((s) => s.id === 'code-search').status, 'ok');
});

test('second run is incremental; vanished repo is removed and reported', async () => {
  const dir = tmpRoot();
  await run(opts(dir, '2026-09-27', table({ stars: 10 })));
  const r = await run(opts(dir, '2026-09-28', table({ stars: 12, gone: ['cat/two'] })));
  assert.deepEqual(r.items.map((i) => i.full_name).sort(), ['hit/three', 'seed/one']);
  const index = JSON.parse(fs.readFileSync(path.join(dir, 'data/index.json'), 'utf8'));
  const hit = index.find((i) => i.full_name === 'hit/three');
  assert.equal(hit.first_seen, '2026-09-27');
  assert.ok(hit.summary_ko, 'summary carried over without a new model call');
  const hist = JSON.parse(fs.readFileSync(path.join(dir, 'data/history/stars.json'), 'utf8'));
  assert.deepEqual(hist['hit/three'], [['2026-09-27', 10], ['2026-09-28', 12]]);
  assert.equal(hist['cat/two'], undefined, 'history of vanished repos is dropped');
  assert.match(fs.readFileSync(path.join(dir, 'changes/2026-09-28.md'), 'utf8'), /## 사라짐\n\n- cat\/two/);
});

test('schema failure writes nothing and reports an error', async () => {
  const dir = tmpRoot();
  const t = table();
  t['https://api.github.com/graphql'] = () => ({ data: { r0: { ...node('x/y', -1) } } });
  const r = await run(opts(dir, '2026-09-27', t));
  assert.ok(r.errors.some((e) => /스키마/.test(e)));
  assert.equal(fs.existsSync(path.join(dir, 'data/index.json')), false);
});

test('renamed repo becomes one row; the old name is reported as vanished and its history dropped', async () => {
  const dir = tmpRoot();
  // 시드로 옛 이름을 먼저 색인해 둔다(검색으로는 재발견되지 않는 이름이라야 한다).
  const srcPath = path.join(dir, 'config/sources.json');
  const src = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
  src.seeds = [{ full_name: 'old/name', cat: 'routing' }];
  fs.writeFileSync(srcPath, JSON.stringify(src));

  await run(opts(dir, '2026-09-27', table()));
  const idx1 = JSON.parse(fs.readFileSync(path.join(dir, 'data/index.json'), 'utf8'));
  assert.ok(idx1.some((i) => i.full_name === 'old/name'));

  // 검색은 이제 새 이름을 찾고, GraphQL은 옛 이름 · 새 이름 질의 둘 다 새 이름으로 응답한다(리네임 추적).
  const t2 = table({ stars: 10 });
  t2['https://api.github.com/search/repositories'] = { total_count: 3, items: [{ full_name: 'hit/three' }, { full_name: 'homonym/jev' }, { full_name: 'new/name' }] };
  t2['https://api.github.com/graphql'] = (u, init) => {
    const q = JSON.parse(init.body).query;
    const data = {};
    for (const [, alias, owner, name] of q.matchAll(/(r\d+): repository\(owner: "([^"]+)", name: "([^"]+)"\)/g)) {
      const queried = `${owner}/${name}`;
      const canonical = queried.toLowerCase() === 'old/name' ? 'new/name' : queried;
      data[alias] = node(canonical, 10, canonical === 'homonym/jev' ? { description: 'Jev the cat' } : {});
    }
    return { data, errors: [] };
  };

  const r2 = await run(opts(dir, '2026-09-28', t2));
  assert.equal(r2.items.filter((i) => i.full_name.toLowerCase() === 'new/name').length, 1, 'exactly one row for the renamed repo');
  assert.ok(!r2.items.some((i) => i.full_name.toLowerCase() === 'old/name'));

  const index2 = JSON.parse(fs.readFileSync(path.join(dir, 'data/index.json'), 'utf8'));
  assert.equal(index2.filter((i) => i.full_name.toLowerCase() === 'new/name').length, 1);
  assert.match(fs.readFileSync(path.join(dir, 'changes/2026-09-28.md'), 'utf8'), /## 사라짐\n\n- old\/name/);
  const hist = JSON.parse(fs.readFileSync(path.join(dir, 'data/history/stars.json'), 'utf8'));
  assert.equal(hist['old/name'], undefined, 'history of the old name is dropped');
});

test('GraphQL data:null is a fetch failure, not a mass-vanish; nothing is written', async () => {
  const dir = tmpRoot();
  await run(opts(dir, '2026-09-27', table()));
  const idxBefore = fs.readFileSync(path.join(dir, 'data/index.json'));
  const histBefore = fs.readFileSync(path.join(dir, 'data/history/stars.json'));

  const t = table();
  t['https://api.github.com/graphql'] = { data: null, errors: [{ message: 'timeout' }] };
  const r = await run(opts(dir, '2026-09-28', t));
  assert.ok(r.errors.some((e) => /메타 조회 실패/.test(e)));
  assert.equal(r.written.length, 0);
  assert.deepEqual(fs.readFileSync(path.join(dir, 'data/index.json')), idxBefore, 'index.json untouched');
  assert.deepEqual(fs.readFileSync(path.join(dir, 'data/history/stars.json')), histBefore, 'star history untouched');
});

test('a non-NOT_FOUND GraphQL error leaves a previously indexed repo unchanged, not vanished', async () => {
  const dir = tmpRoot();
  const r1 = await run(opts(dir, '2026-09-27', table()));
  const before = r1.items.find((i) => i.full_name === 'hit/three');
  assert.ok(before);

  const t2 = table({ stars: 12 });
  t2['https://api.github.com/graphql'] = (u, init) => {
    const q = JSON.parse(init.body).query;
    const data = {};
    const errors = [];
    for (const [, alias, owner, name] of q.matchAll(/(r\d+): repository\(owner: "([^"]+)", name: "([^"]+)"\)/g)) {
      const fn = `${owner}/${name}`;
      if (fn === 'hit/three') { data[alias] = null; errors.push({ type: 'FORBIDDEN', path: [alias] }); continue; }
      data[alias] = node(fn, 12, fn === 'homonym/jev' ? { description: 'Jev the cat' } : {});
    }
    return { data, errors };
  };

  const r2 = await run(opts(dir, '2026-09-28', t2));
  const after = r2.items.find((i) => i.full_name === 'hit/three');
  assert.deepEqual(after, before, 'kept exactly as run 1 left it');
  const index2 = JSON.parse(fs.readFileSync(path.join(dir, 'data/index.json'), 'utf8'));
  assert.ok(index2.some((i) => i.full_name === 'hit/three'));
  const changes = fs.readFileSync(path.join(dir, 'changes/2026-09-28.md'), 'utf8');
  assert.ok(!changes.includes('hit/three'), 'not reported as vanished (or anywhere else)');
  const hist = JSON.parse(fs.readFileSync(path.join(dir, 'data/history/stars.json'), 'utf8'));
  assert.deepEqual(hist['hit/three'], [['2026-09-27', 10]], 'stars not re-recorded today');
});

function seedHomonymLib(dir) {
  const idxPath = path.join(dir, 'data/index.json');
  const index = JSON.parse(fs.readFileSync(idxPath, 'utf8'));
  index.push({
    full_name: 'homonym/lib', url: 'https://github.com/homonym/lib', description: 'A homonym library, unrelated',
    readme_excerpt: null, summary_ko: null, category: { slug: 'other', label: '기타', emoji: '🧩', confidence: null },
    keywords: [], topics: [], language: null, license: null, stars: 5, forks: 0, stars_7d_delta: null,
    pushed_at: '2026-09-25T00:00:00Z', created_at: '2026-09-01T00:00:00Z', first_seen: '2026-09-20',
    sources: ['github-search'], verified: 'pending', decision_types: [], flags: [], score: 0,
  });
  fs.writeFileSync(idxPath, JSON.stringify(index, null, 2));
  const histPath = path.join(dir, 'data/history/stars.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));
  hist['homonym/lib'] = [['2026-09-27', 5]];
  fs.writeFileSync(histPath, JSON.stringify(hist));
}

test('--refilter drops a previously-kept search-only homonym without evidence, keeps evidenced and catalog items', async () => {
  const dir = tmpRoot();
  await run(opts(dir, '2026-09-27', table({ stars: 10 })));
  // 이전 실행의 data/index.json에 근거 없는 동음이의(출처가 오직 github-search)를 직접 심는다 —
  // 새 정규식으로는 이번 실행에서 새로 들어올 수 없는 항목이라, 재선별 대상을 만들려면 직접 넣어야 한다.
  seedHomonymLib(dir);

  const r = await run({ ...opts(dir, '2026-09-28', table({ stars: 12 })), refilter: true });
  assert.deepEqual(r.errors, []);
  assert.ok(!r.items.some((i) => i.full_name === 'homonym/lib'), 'dropped from the run result');
  assert.equal(r.meta.counts.refiltered, 1);

  const idxPath = path.join(dir, 'data/index.json');
  const index2 = JSON.parse(fs.readFileSync(idxPath, 'utf8'));
  assert.ok(!index2.some((i) => i.full_name === 'homonym/lib'), 'dropped from data/index.json');
  assert.ok(index2.some((i) => i.full_name === 'hit/three'), 'search-only item whose README has evidence is kept');
  assert.ok(index2.some((i) => i.full_name === 'cat/two'), 'catalog-sourced item is kept without a refilter check');

  const hist2 = JSON.parse(fs.readFileSync(path.join(dir, 'data/history/stars.json'), 'utf8'));
  assert.equal(hist2['homonym/lib'], undefined, 'star history dropped too');

  const changes = fs.readFileSync(path.join(dir, 'changes/2026-09-28.md'), 'utf8');
  assert.ok(!changes.includes('homonym/lib'), 'not listed under 사라짐 or anywhere else');
  assert.match(changes, /근거 부족으로 제외: 1개/);
});

test('without --refilter a previously-kept homonym is left untouched', async () => {
  const dir = tmpRoot();
  await run(opts(dir, '2026-09-27', table({ stars: 10 })));
  seedHomonymLib(dir);

  const r = await run(opts(dir, '2026-09-28', table({ stars: 12 })));
  assert.equal('refiltered' in r.meta.counts, false, 'refiltered is only written when --refilter ran');
  assert.ok(r.items.some((i) => i.full_name === 'homonym/lib'), 'kept — previously-kept items are never re-filtered by design');
  const changes = fs.readFileSync(path.join(dir, 'changes/2026-09-28.md'), 'utf8');
  assert.ok(!changes.includes('근거 부족으로 제외'), 'no refilter line without the flag');
});

const readJ = (dir, p) => JSON.parse(fs.readFileSync(path.join(dir, p), 'utf8'));
const writeJ = (dir, p, v) => fs.writeFileSync(path.join(dir, p), JSON.stringify(v, null, 2));

test('I4: a failed README fetch leaves an indexed repo exactly as it was, even under --refilter', async () => {
  const dir = tmpRoot();
  const r1 = await run(opts(dir, '2026-09-27', table()));
  const before = r1.items.find((i) => i.full_name === 'hit/three');
  const hashBefore = readJ(dir, 'data/extra/state.json').readme['hit/three'];
  const t = table({ stars: 12, pushed: { 'hit/three': '2026-09-28T00:00:00Z' } });
  t['https://api.github.com/repos/hit/three/readme'] = { status: 500, body: '' };
  const r2 = await run({ ...opts(dir, '2026-09-28', t), refilter: true });
  assert.deepEqual(r2.items.find((i) => i.full_name === 'hit/three'), before, 'kept unchanged, not refiltered');
  assert.equal(readJ(dir, 'data/extra/state.json').readme['hit/three'], hashBefore, 'README hash untouched');
  assert.equal(r2.meta.counts.refiltered, 0);
  // 옛 pushed_at이 남아 있으니 다음 실행이 README를 다시 받는다.
  const calls = [];
  const t3 = table({ stars: 12, pushed: { 'hit/three': '2026-09-28T00:00:00Z' } });
  await run({ ...opts(dir, '2026-09-29', t3), fetchImpl: fakeFetch(t3, calls) });
  assert.ok(calls.some((c) => c.url.endsWith('/repos/hit/three/readme')), 'README retried next run');
});

test('I4: a new search-only candidate whose README fetch failed is skipped today, not rejected', async () => {
  const dir = tmpRoot();
  const cfg = { extraHits: ['new/cand'], desc: { 'new/cand': 'A tool' } };
  const t = table(cfg);
  t['https://api.github.com/repos/new/cand/readme'] = { status: 503, body: '' };
  const r1 = await run(opts(dir, '2026-09-27', t));
  assert.ok(!r1.items.some((i) => i.full_name === 'new/cand'));
  assert.equal(readJ(dir, 'data/extra/state.json').readme['new/cand'], undefined, 'no hash recorded for a failed fetch');
  const r2 = await run(opts(dir, '2026-09-28', table(cfg)));
  assert.ok(r2.items.some((i) => i.full_name === 'new/cand'), 'README with evidence arrives next run → kept');
});

test('I1: category and flags are kept when the README was not re-fetched', async () => {
  const dir = tmpRoot();
  await run(opts(dir, '2026-09-27', table()));
  const index = readJ(dir, 'data/index.json');
  const hit = index.find((i) => i.full_name === 'hit/three');
  hit.category = { slug: 'eval', label: '평가', emoji: '🧪', confidence: null };
  hit.flags = ['empty'];
  writeJ(dir, 'data/index.json', index);
  const r = await run(opts(dir, '2026-09-28', table()));
  const after = r.items.find((i) => i.full_name === 'hit/three');
  assert.equal(after.category.slug, 'eval');
  assert.deepEqual(after.flags, ['empty']);
});

test('I3: summary queue = new, then never-summarized by score, re-summaries last; picked items get their full README', async () => {
  const dir = tmpRoot();
  const long = 'This project calls api.typesafe.ai to route prompts with choice questions.' + ' filler'.repeat(80) + ' TAILMARK';
  const t1 = table();
  t1['https://api.github.com/repos/'] = long;
  await run({ ...opts(dir, '2026-09-27', t1), summarize: false });
  const index = readJ(dir, 'data/index.json');
  const set = (n, o) => Object.assign(index.find((i) => i.full_name === n), o);
  set('seed/one', { score: 9, summary_ko: { what: '이미 요약된 리포입니다 정말로', decision: '의도를 choice로 고른다 정말로', point: '해당 없음 선택지가 있다 정말' } });
  set('hit/three', { score: 5 });
  set('cat/two', { score: 3 });
  writeJ(dir, 'data/index.json', index);
  const calls = [];
  const t2 = table({ pushed: { 'seed/one': '2026-09-28T00:00:00Z' } });
  t2['https://api.github.com/repos/'] = long;
  t2['https://api.github.com/repos/seed/one/readme'] = 'Changed README that calls api.typesafe.ai for routing.';
  const r = await run({ ...opts(dir, '2026-09-28', t2), fetchImpl: fakeFetch(t2, calls), budgets: { summaries: 2 } });
  const prompts = calls.filter((c) => c.url.startsWith('https://generativelanguage')).map((c) => JSON.parse(c.init.body).contents[0].parts[0].text);
  assert.deepEqual(prompts.map((p) => p.match(/리포: (\S+)/)[1]), ['hit/three', 'cat/two']);
  assert.ok(prompts.every((p) => p.includes('TAILMARK')), 'full README, not the 300-char excerpt');
  assert.equal(r.meta.queue.summaries_pending, 1);
  assert.match(fs.readFileSync(path.join(dir, 'README.md'), 'utf8'), /요약 대기 1 · 코드 확인 대기 \d+/);
});

test('I5: baseline_date is carried over; items first seen on or before it are not new', async () => {
  const dir = tmpRoot();
  const r1 = await run({ ...opts(dir, '2026-09-27', table()), backfill: { from: '2026-09-01', to: '2026-09-27', days: 30 } });
  assert.equal(r1.meta.baseline_date, '2026-09-27');
  assert.equal(r1.meta.counts.new_7d, 0);
  const r2 = await run(opts(dir, '2026-09-28', table({ extraHits: ['new/four'] })));
  assert.equal(readJ(dir, 'data/meta.json').baseline_date, '2026-09-27');
  assert.deepEqual([r2.meta.counts.new_24h, r2.meta.counts.new_7d], [1, 1]);
  assert.match(fs.readFileSync(path.join(dir, 'README.md'), 'utf8'), /🆕 24시간 1 · 7일 1/);
});

test('M7: a second run on the same day keeps the day\'s added and vanished lists', async () => {
  const dir = tmpRoot();
  await run(opts(dir, '2026-09-27', table()));
  await run(opts(dir, '2026-09-28', table({ gone: ['cat/two'], extraHits: ['new/four'] })));
  await run(opts(dir, '2026-09-28', table({ gone: ['cat/two'], extraHits: ['new/four'] })));
  const changes = fs.readFileSync(path.join(dir, 'changes/2026-09-28.md'), 'utf8');
  assert.match(changes, /## 새로 발견 \(1\)[\s\S]*new\/four/);
  assert.match(changes, /## 사라짐\n\n- cat\/two/);
});

test('M4: dry-run fails when the meta fetch failed (meta: null) or the schema failed', () => {
  assert.equal(exitCode({ meta: null, written: [], errors: ['GitHub 메타 조회 실패: x'] }, true), 1);
  assert.equal(exitCode({ meta: {}, written: [], errors: ['스키마 검사 실패 1건'] }, true), 1);
  assert.equal(exitCode({ meta: {}, written: [], errors: ['요약 a/b: Gemini 500'] }, true), 0);
  assert.equal(exitCode({ meta: {}, written: [], errors: [] }, false), 1);
  assert.equal(exitCode({ meta: {}, written: ['x'], errors: [] }, false), 0);
});
