import { test } from 'node:test';
import assert from 'node:assert/strict';
import { watchDocs } from '../src/docs-watch.mjs';

const SOURCES = [
  { id: 'docs-sitemap', method: 'sitemap', url: 'https://docs.typesafe.ai/sitemap.xml' },
  { id: 'docs-models', method: 'page-hash', url: 'https://docs.typesafe.ai/models.md' },
  { id: 'npm-sdk-js', method: 'npm', url: 'https://registry.npmjs.org/@typesafe-ai/sdk' },
  { id: 'git-typesafe-skills', method: 'git-head', url: 'https://github.com/typesafe-ai/skills' },
];
const sitemap = (locs) => `<urlset>${locs.map(([l, m]) => `<url><loc>${l}</loc><lastmod>${m}</lastmod></url>`).join('')}</urlset>`;
const run = (pages, head, prev) => watchDocs(SOURCES, prev, { fetchText: async (u) => pages[u] ?? null, gh: { latestCommit: async () => head }, checkedAt: 't' });

test('first run is a baseline; second run reports pages, models, versions and commits', async () => {
  const p1 = {
    'https://docs.typesafe.ai/sitemap.xml': sitemap([['https://docs.typesafe.ai/a', '2026-09-01'], ['https://docs.typesafe.ai/b', '2026-09-01']]),
    'https://docs.typesafe.ai/models.md': '# Models\n- jev-1.13.0 (current)',
    'https://registry.npmjs.org/@typesafe-ai/sdk': JSON.stringify({ 'dist-tags': { latest: '1.2.0' }, versions: { '1.2.0': {} } }),
  };
  const first = await run(p1, 'aaa', {});
  assert.equal(first.changes.length, 0);
  const p2 = {
    'https://docs.typesafe.ai/sitemap.xml': sitemap([['https://docs.typesafe.ai/a', '2026-09-20'], ['https://docs.typesafe.ai/c', '2026-09-20']]),
    'https://docs.typesafe.ai/models.md': '# Models\n- jev-1.14.0 (current)\n- jev-1.13.0',
    'https://registry.npmjs.org/@typesafe-ai/sdk': JSON.stringify({ 'dist-tags': { latest: '1.3.0' }, versions: {} }),
  };
  const second = await run(p2, 'bbb', first.state);
  const kinds = second.changes.map((c) => `${c.id}:${c.kind}:${c.detail}`).sort();
  assert.deepEqual(kinds, [
    'docs-models:changed:내용 변경',
    'docs-models:new-model:jev-1.14.0',
    'docs-sitemap:changed:https://docs.typesafe.ai/a',
    'docs-sitemap:new-page:https://docs.typesafe.ai/c',
    'docs-sitemap:removed-page:https://docs.typesafe.ai/b',
    'git-typesafe-skills:new-commit:bbb',
    'npm-sdk-js:new-version:1.3.0',
  ]);
});

test('unavailable source keeps its previous state and reports status', async () => {
  const prev = { 'docs-models': { hash: 'h', models: ['jev-1.13.0'] } };
  const r = await watchDocs([SOURCES[1]], prev, { fetchText: async () => null, gh: {}, checkedAt: 't' });
  assert.deepEqual(r.state['docs-models'], prev['docs-models']);
  assert.equal(r.status[0].status, 'unavailable');
  assert.equal(r.changes.length, 0);
});
