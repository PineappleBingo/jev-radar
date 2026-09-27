import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fixture } from './_offline.mjs';
import { reposIn, collectCatalogs, collectSearch, collectSeeds, mergeFound, dropRedFlags } from '../src/collect.mjs';

const text = (f) => fs.readFileSync(fixture(f), 'utf8');

test('reposIn finds github repos anywhere in parser output, lowercased and deduped', () => {
  assert.deepEqual(reposIn([{ url: 'https://github.com/A/B/tree/x' }, { fields: { repo: 'c/d' } }, { links: [{ url: 'https://github.com/a/b' }] }, { url: 'https://github.com/topics/jev' }]), ['a/b', 'c/d']);
});

test('collectCatalogs parses each method and records status per source', async () => {
  const pages = { 'https://x/catalog.md': text('catalog.md'), 'https://x/catalog.csv': text('catalog.csv'), 'https://x/empty.md': '# nothing here' };
  const fetchText = async (url) => pages[url] ?? null;
  const { found, status } = await collectCatalogs([
    { id: 'md', method: 'markdown-links', url: 'https://x/catalog.md' },
    { id: 'csv', method: 'csv', url: 'https://x/catalog.csv' },
    { id: 'empty', method: 'markdown-links', url: 'https://x/empty.md' },
    { id: 'down', method: 'markdown-links', url: 'https://x/down.md' },
  ], { fetchText, checkedAt: '2026-09-26T21:00:00Z' });
  assert.deepEqual([...found.keys()].sort(), ['gargpratyush/jev-router', 'some/agent-kit']);
  assert.deepEqual([...found.get('some/agent-kit')].sort(), ['awesome:csv', 'awesome:md']);
  assert.deepEqual(status.map((s) => [s.id, s.status, s.count]), [['md', 'ok', 2], ['csv', 'ok', 1], ['empty', 'parse-suspect', 0], ['down', 'unavailable', 0]]);
});

test('collectSearch: daily mode adds pushed window, backfill mode splits created windows', async () => {
  const qs = [];
  const gh = { searchRepos: async (q) => { qs.push(q); return [{ full_name: 'O/New' }]; } };
  const daily = await collectSearch(['topic:jev'], gh, { since: '2026-09-23', checkedAt: 't' });
  assert.deepEqual(qs, ['topic:jev pushed:>=2026-09-23']);
  assert.deepEqual([...daily.found.get('o/new')], ['github-search']);
  qs.length = 0;
  await collectSearch(['topic:jev'], gh, { backfill: { from: '2026-01-01', to: '2026-02-15', days: 31 }, checkedAt: 't' });
  assert.deepEqual(qs, ['topic:jev created:2026-01-01..2026-01-31', 'topic:jev created:2026-02-01..2026-02-15']);
});

test('collectSearch keeps partial results when rate limited', async () => {
  const { RateLimited } = await import('../src/github.mjs');
  let n = 0;
  const gh = { searchRepos: async () => { if (n++) throw new RateLimited('x'); return [{ full_name: 'a/b' }]; } };
  const r = await collectSearch(['q1', 'q2'], gh, { since: '2026-09-23', checkedAt: 't' });
  assert.deepEqual([...r.found.keys()], ['a/b']);
  assert.deepEqual(r.status.map((s) => s.status), ['ok', 'rate-limited']);
});

test('seeds, merge and red flags', () => {
  const merged = mergeFound(collectSeeds([{ full_name: 'A/B', cat: 'routing' }]).found, new Map([['a/b', new Set(['github-search'])], ['bad/x', new Set(['github-search'])]]));
  assert.deepEqual([...merged.get('a/b')].sort(), ['github-search', 'seed:registry']);
  assert.deepEqual(dropRedFlags(merged, [{ full_name: 'Bad/X' }]), ['bad/x']);
  assert.equal(merged.has('bad/x'), false);
});
