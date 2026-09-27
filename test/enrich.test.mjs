import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { ROOT } from './_offline.mjs';
import { readmeExcerpt, hasEvidence, classifyRules, spamFlags, keep, toItem } from '../src/enrich.mjs';

const cats = JSON.parse(fs.readFileSync(`${ROOT}/config/categories.json`, 'utf8'));
const meta = { full_name: 'o/r', url: 'https://github.com/o/r', description: 'Intent router on TypeSafe', stars: 12, forks: 2, pushed_at: '2026-09-25T00:00:00Z', created_at: '2026-09-01T00:00:00Z', archived: false, fork: false, language: 'Go', license: 'MIT', topics: ['jev'] };

test('readme excerpt skips badges, headings, html and code; caps at 300', () => {
  const md = '# Title\n\n[![ci](https://x/b.svg)](https://x)\n<p align="center"><img src="a.png"></p>\n\n```js\ncode\n```\n\nThis tool **routes** prompts with [Jev](https://docs.typesafe.ai).\nSecond line.\n\nMore.';
  assert.equal(readmeExcerpt(md), 'This tool routes prompts with Jev. Second line.');
  assert.equal(readmeExcerpt('x'.repeat(400)).length, 300);
  assert.equal(readmeExcerpt(null), null);
});

test('homonym filter: search-only hits need Jev evidence, catalog hits are kept', () => {
  assert.equal(hasEvidence({ description: 'Jev the rabbit game', topics: ['jev'], readme: 'A game about Jev.' }), false);
  assert.equal(hasEvidence({ description: 'x', topics: [], readme: 'calls api.typesafe.ai' }), true);
  assert.equal(hasEvidence({ description: 'uses jev-1.13.0', topics: [], readme: '' }), true);
  assert.equal(keep(new Set(['github-search']), false), false);
  assert.equal(keep(new Set(['github-search', 'awesome:md']), false), true);
  assert.equal(keep(new Set(['github-search']), true), true);
});

test('rules classification: registry category wins, else keyword count, else other', () => {
  assert.equal(classifyRules('anything', cats, 'guardrail').slug, 'guardrail');
  assert.equal(classifyRules('anything', cats, 'reference').slug, 'catalog');
  assert.equal(classifyRules('An intent router that can triage and route tickets', cats).slug, 'routing');
  assert.equal(classifyRules('nothing matches here', cats).slug, 'other');
  assert.equal(classifyRules('x', cats).confidence, null);
});

test('spam flags', () => {
  assert.deepEqual(spamFlags({ ...meta, archived: true, fork: true }, 'long enough readme '.repeat(20)), ['archived', 'fork']);
  assert.deepEqual(spamFlags({ ...meta, stars: 0, description: null }, ''), ['empty', 'spam-suspect']);
});

test('toItem keeps first_seen, summary and verification from the previous run', () => {
  const prev = { first_seen: '2026-09-02', summary_ko: { what: '가', decision: '나', point: '다' }, verified: 'code', decision_types: ['choice'], category: { slug: 'agent', label: 'x', emoji: 'y', confidence: 0.9 } };
  const it = toItem(meta, { sources: new Set(['github-search']), readme: 'Routes with api.typesafe.ai', firstSeen: '2026-09-26', categories: cats, prev });
  assert.equal(it.full_name, 'o/r');
  assert.equal(it.first_seen, '2026-09-02');
  assert.equal(it.verified, 'code');
  assert.equal(it.category.slug, 'agent', 'model category from a previous run is kept');
  assert.deepEqual(it.sources, ['github-search']);
  const fresh = toItem(meta, { sources: new Set(['seed:registry']), readme: '', firstSeen: '2026-09-26', categories: cats, registryCat: 'routing' });
  assert.deepEqual([fresh.first_seen, fresh.verified, fresh.summary_ko, fresh.category.slug], ['2026-09-26', 'docs', null, 'routing']);
});
