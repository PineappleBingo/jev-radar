#!/usr/bin/env node
// import-registry — upgrade-scout Jev 팩 레지스트리(packs/jev/registry.json) → config/sources.json
//   node scripts/import-registry.mjs <registry.json> [--out config/sources.json]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { githubRepoOf } from '../src/lib/parsers.mjs';

const CATALOG = new Set(['markdown-links', 'catalog-json', 'csv', 'tsv', 'html-numbered-list', 'llms-txt']);
const DOCS = new Set(['sitemap', 'llms-txt', 'npm', 'pypi', 'git-head']);
const fullName = (x) => {
  if (x.repo && /^[\w.-]+\/[\w.-]+$/.test(x.repo)) return x.repo;
  const g = x.url ? githubRepoOf(x.url) : null;
  return g ? `${g.owner}/${g.repo}` : null;
};

export function importRegistry(reg) {
  const isDocsHost = (u) => /(^|\.)typesafe\.ai$/.test(new URL(u).hostname);
  const catalogs = [];
  const docs = [];
  for (const s of reg.sources || []) {
    const entry = { id: s.id, method: s.method, url: s.url };
    if (s.method === 'llms-txt' || DOCS.has(s.method) || (s.method === 'page-hash' && isDocsHost(s.url))) docs.push(entry);
    else if (CATALOG.has(s.method)) catalogs.push(entry);
  }
  const seeds = (reg.repos || []).map((r) => ({ full_name: fullName(r), cat: r.cat || null })).filter((r) => r.full_name);
  const red_flags = (reg.red_flags || []).map((f) => ({ full_name: fullName(f), note_ko: f.note_ko || '' })).filter((f) => f.full_name);
  return { catalogs, docs, seeds, red_flags };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [file] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  if (!file || process.argv.includes('--help')) { console.log('import-registry.mjs <registry.json> [--out config/sources.json]'); process.exit(file ? 0 : 2); }
  const outIdx = process.argv.indexOf('--out');
  const out = outIdx > 0 ? process.argv[outIdx + 1] : 'config/sources.json';
  const reg = JSON.parse(fs.readFileSync(file, 'utf8'));
  fs.writeFileSync(out, JSON.stringify({ from: `upgrade-scout packs/jev/registry.json (updated ${reg.updated || '?'})`, ...importRegistry(reg) }, null, 2) + '\n');
  console.log(`wrote ${out}`);
}
