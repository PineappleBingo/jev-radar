#!/usr/bin/env node
// run — 수집 → 보강 → 요약 → 확인 → 순위 → 문서 감시 → 스키마 검사 → 쓰기. 스키마를 통과 못 하면 아무것도 쓰지 않는다.
//   node src/run.mjs [--date YYYY-MM-DD] [--backfill FROM[:TO]] [--no-summarize] [--budget-summaries N] [--budget-verify N] [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sha256 } from './lib/text.mjs';
import { validate } from './lib/schema.mjs';
import { makeGithub } from './github.mjs';
import { collectCatalogs, collectSearch, collectSeeds, mergeFound, dropRedFlags } from './collect.mjs';
import { toItem, hasEvidence, keep } from './enrich.mjs';
import { summarizeAll } from './summarize.mjs';
import { verifyAll } from './verify.mjs';
import { recordStars, delta7, isNew, rising, score } from './rank.mjs';
import { watchDocs } from './docs-watch.mjs';
import { renderReadme, renderCategory, renderChanges } from './render.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (root, p, fallback) => { try { return JSON.parse(fs.readFileSync(path.join(root, p), 'utf8')); } catch { return fallback; } };
const addDays = (date, n) => new Date(Date.parse(`${date}T00:00:00Z`) + n * 864e5).toISOString().slice(0, 10);

export async function run({ root = ROOT, date, now, env = process.env, fetchImpl = globalThis.fetch, sleep, backfill = null, budgets = {}, summarize = true, dryRun = false }) {
  const errors = [];
  const cfg = { sources: readJson(root, 'config/sources.json'), categories: readJson(root, 'config/categories.json'), queries: readJson(root, 'config/queries.json') };
  const schema = readJson(root, 'schema/radar-index.schema.json');
  const prevItems = new Map(readJson(root, 'data/index.json', []).map((i) => [i.full_name.toLowerCase(), i]));
  const state = readJson(root, 'data/extra/state.json', { docs: {}, readme: {}, verify: {} });
  let history = readJson(root, 'data/history/stars.json', {});
  const gh = makeGithub({ token: env.GITHUB_TOKEN, fetchImpl, ...(sleep ? { sleep } : {}) });
  const fetchText = async (url) => { const res = await fetchImpl(url, { headers: { 'User-Agent': 'jev-radar' } }); return res.ok ? res.text() : null; };

  // 1) 수집
  const cat = await collectCatalogs(cfg.sources.catalogs, { fetchText, checkedAt: now });
  const search = await collectSearch(cfg.queries, gh, { since: addDays(date, -3), backfill, checkedAt: now });
  const found = mergeFound(collectSeeds(cfg.sources.seeds).found, cat.found, search.found);
  for (const k of prevItems.keys()) if (!found.has(k)) found.set(k, new Set(prevItems.get(k).sources));
  dropRedFlags(found, cfg.sources.red_flags);
  const regCat = new Map(cfg.sources.seeds.map((s) => [s.full_name.toLowerCase(), s.cat]));

  // 2) 메타 · README · 거르기
  const meta = await gh.repoMeta([...found.keys()]);
  const vanished = [...prevItems.keys()].filter((k) => meta.get(k) === null).map((k) => prevItems.get(k).full_name);
  const items = [];
  const readmes = new Map();
  const changedReadme = new Set();
  for (const [key, sources] of found) {
    const m = meta.get(key);
    if (!m) continue;
    const prev = prevItems.get(key) || null;
    let readme = null;
    if (!prev || prev.pushed_at !== m.pushed_at) {
      readme = await gh.readme(m.full_name).catch(() => null);
      const h = readme ? sha256(readme).slice(0, 16) : null;
      if (prev && h !== state.readme[m.full_name]) changedReadme.add(m.full_name);
      state.readme[m.full_name] = h;
    }
    // 한 번 들어온 항목은 거르지 않는다(README를 다시 받지 않은 날 근거가 발췌 밖에 있어 빠지는 일을 막는다).
    if (!prev && !keep(sources, hasEvidence({ description: m.description, topics: m.topics, readme }))) continue;
    const item = toItem(m, { sources, readme: readme ?? prev?.readme_excerpt ?? null, firstSeen: date, categories: cfg.categories, registryCat: regCat.get(key) || null, prev });
    if (readme === null && prev) { item.readme_excerpt = prev.readme_excerpt ?? null; item.verified = prev.verified; }
    readmes.set(item.full_name, readme ?? prev?.readme_excerpt ?? '');
    items.push(item);
  }

  // 3) 요약
  const order = [
    ...items.filter((i) => !prevItems.has(i.full_name.toLowerCase())),
    ...items.filter((i) => changedReadme.has(i.full_name)),
    ...items.filter((i) => !i.summary_ko).sort((a, b) => a.first_seen.localeCompare(b.first_seen)),
  ].map((i) => i.full_name).filter((n, i, a) => a.indexOf(n) === i);
  const sum = summarize ? await summarizeAll(items, { apiKey: env.GEMINI_API_KEY, model: env.GEMINI_MODEL || undefined, fetchImpl, budget: budgets.summaries ?? 40, readmes, categories: cfg.categories, order }) : { results: new Map(), pending: order, errors: [] };
  for (const it of items) {
    const s = sum.results.get(it.full_name);
    if (s) { it.summary_ko = s.summary_ko; it.category = s.category; }
  }

  // 4) 코드 확인
  const ver = await verifyAll(items, gh, { budget: budgets.verify ?? 15, sleep: sleep || ((ms) => new Promise((r) => setTimeout(r, ms))), state, today: date });
  for (const it of items) { const u = ver.updates.get(it.full_name); if (u) Object.assign(it, u); }

  // 5) 순위
  history = recordStars(Object.fromEntries(Object.entries(history).filter(([k]) => !vanished.includes(k))), items, date);
  for (const it of items) { it.stars_7d_delta = delta7(history[it.full_name], date); it.score = score(it, date); }
  items.sort((a, b) => b.score - a.score || a.full_name.localeCompare(b.full_name));

  // 6) 문서 감시
  const docs = await watchDocs(cfg.sources.docs, state.docs, { fetchText, gh, checkedAt: now });
  state.docs = docs.state;
  state.doc_changes = [...(state.doc_changes || []).filter((c) => c.date >= addDays(date, -6)), ...docs.changes.map((c) => ({ ...c, date }))];

  // 7) meta · 검사
  const out = {
    schema: 'radar-index/1', topic: 'jev', generated_at: now,
    counts: { total: items.length, new_24h: items.filter((i) => isNew(i, date, 1)).length, new_7d: items.filter((i) => isNew(i, date)).length, verified: items.filter((i) => i.verified === 'code').length },
    sources: [...cat.status, ...search.status, ...docs.status, { id: 'code-search', url: 'https://api.github.com/search/code', status: ver.error ? (/한도|429|rate/i.test(ver.error) ? 'rate-limited' : 'unavailable') : 'ok', count: ver.checked.length, checked_at: now }],
    queue: { summaries_pending: sum.pending.length, verification_pending: ver.pending.length },
  };
  const schemaErrors = [
    ...validate({ ...schema.$defs.meta, $defs: schema.$defs }, out),
    ...items.flatMap((it, i) => validate({ ...schema.$defs.item, $defs: schema.$defs }, it, undefined, `$[${i}]`)),
  ];
  if (schemaErrors.length) { errors.push(`스키마 검사 실패 ${schemaErrors.length}건: ${schemaErrors.slice(0, 5).join(' · ')}`); return { meta: out, items, written: [], errors }; }
  errors.push(...sum.errors.map((e) => `요약 ${e.full_name}: ${e.message}`));
  if (ver.error) errors.push(`코드 확인 중단: ${ver.error}`);

  // 8) 쓰기
  if (dryRun) return { meta: out, items, written: [], errors };
  const written = [];
  const w = (rel, text) => { fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true }); fs.writeFileSync(path.join(root, rel), text); written.push(rel); };
  const added = items.filter((i) => !prevItems.has(i.full_name.toLowerCase()));
  w('data/index.json', JSON.stringify(items, null, 2) + '\n');
  w('data/meta.json', JSON.stringify(out, null, 2) + '\n');
  w('data/history/stars.json', JSON.stringify(history) + '\n');
  w('data/extra/state.json', JSON.stringify(state, null, 2) + '\n');
  w('README.md', renderReadme({ meta: out, items, docChanges: state.doc_changes, categories: cfg.categories, date }));
  for (const c of cfg.categories) { const list = items.filter((i) => i.category.slug === c.slug); if (list.length) w(`categories/${c.slug}.md`, renderCategory(c, list, date)); }
  w(`changes/${date}.md`, renderChanges({ date, added, vanished, rising: rising(items), docChanges: docs.changes }));
  return { meta: out, items, written, errors };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const val = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  if (args.includes('--help')) { console.log('run.mjs [--date YYYY-MM-DD] [--backfill FROM[:TO]] [--no-summarize] [--budget-summaries N] [--budget-verify N] [--dry-run]'); process.exit(0); }
  const kstDate = (iso) => new Date(Date.parse(iso) + 9 * 36e5).toISOString().slice(0, 10);
  const nowIso = val('--date') ? new Date(`${val('--date')}T06:00:00+09:00`).toISOString() : new Date().toISOString();
  const date = val('--date') || kstDate(nowIso);
  const bf = val('--backfill');
  const backfill = bf ? { from: bf.split(':')[0], to: bf.split(':')[1] || date, days: 30 } : null;
  const r = await run({ date, now: nowIso, backfill, summarize: !args.includes('--no-summarize'), dryRun: args.includes('--dry-run'), budgets: { summaries: val('--budget-summaries') ? Number(val('--budget-summaries')) : undefined, verify: val('--budget-verify') ? Number(val('--budget-verify')) : undefined } });
  console.log(JSON.stringify({ counts: r.meta.counts, queue: r.meta.queue, written: r.written.length, errors: r.errors }, null, 2));
  process.exit(r.written.length || args.includes('--dry-run') ? 0 : 1);
}
