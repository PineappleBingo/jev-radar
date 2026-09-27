import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { ROOT, fakeFetch } from './_offline.mjs';
import { run } from '../src/run.mjs';
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
const node = (fn, stars, extra = {}) => ({ nameWithOwner: fn, url: `https://github.com/${fn}`, description: extra.description ?? 'Uses TypeSafe Jev', stargazerCount: stars, forkCount: 1, pushedAt: '2026-09-25T00:00:00Z', createdAt: '2026-09-01T00:00:00Z', isArchived: false, isFork: false, primaryLanguage: null, licenseInfo: null, repositoryTopics: { nodes: [] } });
function table({ stars = 10, gone = [] } = {}) {
  return {
    'https://cat/list.md': '- [x](https://github.com/cat/two)\n- [bad](https://github.com/bad/actor)',
    'https://api.github.com/search/repositories': { total_count: 2, items: [{ full_name: 'hit/three' }, { full_name: 'homonym/jev' }] },
    'https://api.github.com/graphql': (u, init) => {
      const q = JSON.parse(init.body).query;
      const data = {};
      for (const [, alias, owner, name] of q.matchAll(/(r\d+): repository\(owner: "([^"]+)", name: "([^"]+)"\)/g)) {
        const fn = `${owner}/${name}`;
        data[alias] = gone.includes(fn) ? null : node(fn, stars, fn === 'homonym/jev' ? { description: 'Jev the cat' } : {});
      }
      return { data };
    },
    'https://api.github.com/repos/homonym/jev/readme': 'A cat named Jev.',
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
