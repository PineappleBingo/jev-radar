import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './_offline.mjs';
import { importRegistry } from '../scripts/import-registry.mjs';
import { PARSERS } from '../src/lib/parsers.mjs';

const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));

test('importRegistry splits sources by method and keeps seeds and red flags', () => {
  const reg = {
    sources: [
      { id: 'yibie-readme', method: 'markdown-links', url: 'https://raw.githubusercontent.com/yibie/awesome-jev/main/README.md' },
      { id: 'docs-models', method: 'page-hash', url: 'https://docs.typesafe.ai/models.md' },
      { id: 'gh-topic-jev', method: 'page-hash', url: 'https://github.com/topics/jev' },
      { id: 'npm-sdk-js', method: 'npm', url: 'https://registry.npmjs.org/@typesafe-ai/sdk' },
    ],
    repos: [{ repo: 'gargpratyush/jev-router', cat: 'routing' }, { repo: null, url: 'https://example.com', cat: 'user' }],
    red_flags: [{ url: 'https://github.com/Futureppo/typesafe_register', note_ko: '인용 금지' }],
  };
  const out = importRegistry(reg);
  assert.deepEqual(out.catalogs.map((s) => s.id), ['yibie-readme']);
  assert.deepEqual(out.docs.map((s) => s.id), ['docs-models', 'npm-sdk-js'], 'non-docs page-hash (topic page) is dropped');
  assert.deepEqual(out.seeds, [{ full_name: 'gargpratyush/jev-router', cat: 'routing' }]);
  assert.deepEqual(out.red_flags, [{ full_name: 'Futureppo/typesafe_register', note_ko: '인용 금지' }]);
});

test('config files: 15 categories ending with other, known parser methods, queries', () => {
  const cats = read('config/categories.json');
  assert.equal(cats.length, 15);
  assert.equal(cats.at(-1).slug, 'other');
  assert.equal(new Set(cats.map((c) => c.slug)).size, 15);
  for (const c of cats) assert.ok(c.label && c.emoji && Array.isArray(c.keywords) && Array.isArray(c.from_registry), c.slug);
  const src = read('config/sources.json');
  for (const s of src.catalogs) assert.ok(PARSERS[s.method], `${s.id}: parser ${s.method}`);
  for (const s of src.docs) assert.ok(['sitemap', 'llms-txt', 'page-hash', 'npm', 'pypi', 'git-head'].includes(s.method), s.id);
  assert.ok(src.seeds.length >= 100, 'seeds from the pack registry');
  const regCats = new Set(src.seeds.map((s) => s.cat));
  for (const rc of regCats) assert.ok(cats.some((c) => c.from_registry.includes(rc)), `registry cat ${rc} is mapped`);
  const q = read('config/queries.json');
  assert.ok(Array.isArray(q) && q.length >= 4);
});

test('schema copy is radar-index/1', () => {
  const s = read('schema/radar-index.schema.json');
  assert.equal(s.$defs.meta.properties.schema.const, 'radar-index/1');
});
