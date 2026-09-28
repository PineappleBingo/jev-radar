#!/usr/bin/env node
// run — 수집 → 보강 → 요약 → 확인 → 순위 → 문서 감시 → 스키마 검사 → 쓰기. 스키마를 통과 못 하면 아무것도 쓰지 않는다.
//   node src/run.mjs [--date YYYY-MM-DD] [--backfill FROM[:TO]] [--no-summarize] [--budget-summaries N] [--budget-verify N] [--dry-run] [--refilter]
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

export async function run({ root = ROOT, date, now, env = process.env, fetchImpl = globalThis.fetch, sleep, backfill = null, budgets = {}, summarize = true, dryRun = false, refilter = false }) {
  const errors = [];
  const cfg = { sources: readJson(root, 'config/sources.json'), categories: readJson(root, 'config/categories.json'), queries: readJson(root, 'config/queries.json') };
  const schema = readJson(root, 'schema/radar-index.schema.json');
  const prevItems = new Map(readJson(root, 'data/index.json', []).map((i) => [i.full_name.toLowerCase(), i]));
  const state = readJson(root, 'data/extra/state.json', { docs: {}, readme: {}, verify: {} });
  // 백필한 날 — 그날까지 처음 본 항목은 새것(🆕)으로 치지 않는다.
  const baseline = readJson(root, 'data/meta.json', {}).baseline_date ?? (backfill ? date : null);
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
  let meta;
  try {
    meta = await gh.repoMeta([...found.keys()]);
  } catch (e) {
    // GraphQL 자체가 실패한 것(예: data:null)이지 리포가 사라진 게 아니다 — 아무것도 쓰지 않는다.
    errors.push(`GitHub 메타 조회 실패: ${String(e.message).slice(0, 200)}`);
    return { meta: null, items: [], written: [], errors };
  }

  // 이름이 바뀐 리포는 GraphQL이 새 이름으로 응답한다 — 정식 이름(lower)으로 묶어 한 항목만 만든다.
  const canonicalSources = new Map(); // canonical(lower) → Set(sources)
  const canonicalMeta = new Map(); // canonical(lower) → Meta
  for (const [key, sources] of found) {
    const m = meta.get(key);
    if (!m) continue; // null(진짜 사라짐) · undefined(이번엔 모름) 둘 다 항목을 만들지 않는다
    const canonical = m.full_name.toLowerCase();
    if (!canonicalSources.has(canonical)) canonicalSources.set(canonical, new Set());
    for (const s of sources) canonicalSources.get(canonical).add(s);
    canonicalMeta.set(canonical, m);
  }

  // 사라짐: 진짜 삭제(null) + 이름이 바뀌어 옛 이름이 더는 정식 이름이 아닌 것. undefined(모름)는 그대로 둔다.
  const vanished = [];
  for (const k of prevItems.keys()) {
    const m = meta.get(k);
    if (m === undefined) continue;
    if (m === null || m.full_name.toLowerCase() !== k) vanished.push(prevItems.get(k).full_name);
  }

  const items = [];
  const readmes = new Map();
  const fetched = new Map(); // 오늘 받은 README — 문자열, 또는 404면 null
  const changedReadme = new Set();
  const unfetched = []; // README를 받다 실패한(한도 · 5xx) 이전 항목 — 오늘은 이전 그대로 둔다
  for (const [canonical, sources] of canonicalSources) {
    const m = canonicalMeta.get(canonical);
    const prev = prevItems.get(canonical) || null;
    const refetch = !prev || prev.pushed_at !== m.pushed_at;
    let readme = null;
    if (refetch) {
      // 실패는 undefined — 404(README 없음, null)와 다르다. 못 받은 날은 판단하지 않고 다음 실행에 다시 받는다.
      readme = await gh.readme(m.full_name).catch(() => undefined);
      if (readme === undefined) { if (prev) unfetched.push(prev); continue; }
      fetched.set(m.full_name, readme);
      const h = readme ? sha256(readme).slice(0, 16) : null;
      if (prev && h !== state.readme[m.full_name]) changedReadme.add(m.full_name);
      state.readme[m.full_name] = h;
    }
    // 한 번 들어온 항목은 거르지 않는다(README를 다시 받지 않은 날 근거가 발췌 밖에 있어 빠지는 일을 막는다).
    if (!prev && !keep(sources, hasEvidence({ description: m.description, topics: m.topics, readme }))) continue;
    const item = toItem(m, { sources, readme: refetch ? readme : prev.readme_excerpt ?? null, firstSeen: date, categories: cfg.categories, registryCat: regCat.get(canonical) || null, prev });
    // README를 다시 받지 않았으면 300자 발췌로 다시 분류하지 않는다 — 분야 · 표시 · 확인은 이전 그대로.
    if (!refetch) Object.assign(item, { readme_excerpt: prev.readme_excerpt ?? null, verified: prev.verified, category: prev.category, flags: prev.flags });
    readmes.set(item.full_name, (refetch ? readme : prev.readme_excerpt) ?? '');
    items.push(item);
  }

  // 2.5) 재선별(--refilter, 일회성): 이전 항목 중 출처가 전부 github-search인 것만 README를 다시 받아 근거를 확인한다.
  //   사라짐(vanished)과는 다르다 — 리포는 살아 있고, 다만 동음이의로 판단해 뺀다.
  let refilteredCount = 0;
  const refilteredNames = [];
  if (refilter) {
    for (const it of [...items]) {
      const prev = prevItems.get(it.full_name.toLowerCase());
      if (!prev || !prev.sources.every((s) => s === 'github-search')) continue;
      const readme = fetched.has(it.full_name) ? fetched.get(it.full_name) : await gh.readme(it.full_name).catch(() => undefined);
      if (readme === undefined) continue; // 못 받았으면 지우지 않는다
      if (!hasEvidence({ description: it.description, topics: it.topics, readme })) {
        items.splice(items.indexOf(it), 1);
        refilteredNames.push(it.full_name);
        refilteredCount++;
      }
    }
  }

  // 메타를 못 받은(undefined) 이전 항목은 그대로 유지 — 사라짐도 아니고 오늘 별을 다시 기록하지도 않는다.
  const carriedOver = [...[...prevItems.keys()].filter((k) => meta.get(k) === undefined).map((k) => prevItems.get(k)), ...unfetched];

  // 3) 요약 — 새 항목 → 한 번도 요약 안 된 것(점수 순) → README가 바뀐 재요약은 마지막.
  const order = [
    ...items.filter((i) => !prevItems.has(i.full_name.toLowerCase())),
    ...items.filter((i) => !i.summary_ko).sort((a, b) => b.score - a.score || a.full_name.localeCompare(b.full_name)),
    ...items.filter((i) => i.summary_ko && changedReadme.has(i.full_name)),
  ].map((i) => i.full_name).filter((n, i, a) => a.indexOf(n) === i);
  const budgetSummaries = budgets.summaries ?? 40;
  if (summarize && env.GEMINI_API_KEY) {
    // 이번에 요약할 항목은 발췌(300자)가 아니라 README 전체로 — 오늘 받지 않았으면 받는다(실패하면 발췌 그대로).
    for (const n of order.slice(0, budgetSummaries)) if (!fetched.has(n)) { const r = await gh.readme(n).catch(() => undefined); if (r) readmes.set(n, r); }
  }
  const sum = summarize ? await summarizeAll(items, { apiKey: env.GEMINI_API_KEY, model: env.GEMINI_MODEL || undefined, fetchImpl, budget: budgetSummaries, readmes, categories: cfg.categories, order }) : { results: new Map(), pending: order, errors: [] };
  for (const it of items) {
    const s = sum.results.get(it.full_name);
    if (s) { it.summary_ko = s.summary_ko; it.category = s.category; }
  }

  // 4) 코드 확인
  const ver = await verifyAll(items, gh, { budget: budgets.verify ?? 15, sleep: sleep || ((ms) => new Promise((r) => setTimeout(r, ms))), state, today: date });
  for (const it of items) { const u = ver.updates.get(it.full_name); if (u) Object.assign(it, u); }

  // 5) 순위 — carriedOver는 오늘 별을 기록하지 않고 이전 값 그대로 합친다.
  history = recordStars(Object.fromEntries(Object.entries(history).filter(([k]) => !vanished.includes(k) && !refilteredNames.includes(k))), items, date);
  for (const it of items) { it.stars_7d_delta = delta7(history[it.full_name], date); it.score = score(it, date); }
  items.push(...carriedOver);
  items.sort((a, b) => b.score - a.score || a.full_name.localeCompare(b.full_name));

  // 6) 문서 감시
  const docs = await watchDocs(cfg.sources.docs, state.docs, { fetchText, gh, checkedAt: now });
  state.docs = docs.state;
  state.doc_changes = [...(state.doc_changes || []).filter((c) => c.date >= addDays(date, -6)), ...docs.changes.map((c) => ({ ...c, date }))];

  // 7) meta · 검사
  const out = {
    schema: 'radar-index/1', topic: 'jev', generated_at: now, ...(baseline ? { baseline_date: baseline } : {}),
    counts: { total: items.length, new_24h: items.filter((i) => isNew(i, date, 1, baseline)).length, new_7d: items.filter((i) => isNew(i, date, 7, baseline)).length, verified: items.filter((i) => i.verified === 'code').length, ...(refilter ? { refiltered: refilteredCount } : {}) },
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
  // 같은 날 다시 돌려도 그날 기록을 지우지 않는다: 새로 발견 = 오늘 처음 본 항목, 사라짐 · 재선별은 state.day에 합친다.
  const added = items.filter((i) => isNew(i, date, 1, baseline));
  const day = state.day?.date === date ? state.day : { date, vanished: [], refiltered: [] };
  day.vanished = [...new Set([...day.vanished, ...vanished])];
  day.refiltered = [...new Set([...day.refiltered, ...refilteredNames])];
  state.day = day;
  w('data/index.json', JSON.stringify(items, null, 2) + '\n');
  w('data/meta.json', JSON.stringify(out, null, 2) + '\n');
  w('data/history/stars.json', JSON.stringify(history) + '\n');
  w('data/extra/state.json', JSON.stringify(state, null, 2) + '\n');
  w('README.md', renderReadme({ meta: out, items, docChanges: state.doc_changes, categories: cfg.categories, date, checked: state.verify }));
  for (const c of cfg.categories) { const list = items.filter((i) => i.category.slug === c.slug); if (list.length) w(`categories/${c.slug}.md`, renderCategory(c, list, date, baseline, state.verify)); }
  w(`changes/${date}.md`, renderChanges({ date, added, vanished: day.vanished, rising: rising(items), docChanges: state.doc_changes.filter((c) => c.date === date), refilteredCount: refilter || day.refiltered.length ? day.refiltered.length : undefined, baseline, checked: state.verify }));
  return { meta: out, items, written, errors };
}

// dry-run은 파일을 쓰지 않는 게 정상이라 written으로 성공을 가릴 수 없다 — 메타 조회 실패(meta: null)와 스키마 검사 실패를 실패로 본다.
export const exitCode = (r, dryRun) => ((dryRun ? !r.meta || r.errors.some((e) => /스키마/.test(e)) : r.written.length === 0) ? 1 : 0);

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const val = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  if (args.includes('--help')) { console.log('run.mjs [--date YYYY-MM-DD] [--backfill FROM[:TO]] [--no-summarize] [--budget-summaries N] [--budget-verify N] [--dry-run] [--refilter]'); process.exit(0); }
  const kstDate = (iso) => new Date(Date.parse(iso) + 9 * 36e5).toISOString().slice(0, 10);
  const nowIso = val('--date') ? new Date(`${val('--date')}T06:00:00+09:00`).toISOString() : new Date().toISOString();
  const date = val('--date') || kstDate(nowIso);
  const bf = val('--backfill');
  const backfill = bf ? { from: bf.split(':')[0], to: bf.split(':')[1] || date, days: 30 } : null;
  const dryRun = args.includes('--dry-run');
  const refilter = args.includes('--refilter');
  const r = await run({ date, now: nowIso, backfill, summarize: !args.includes('--no-summarize'), dryRun, refilter, budgets: { summaries: val('--budget-summaries') ? Number(val('--budget-summaries')) : undefined, verify: val('--budget-verify') ? Number(val('--budget-verify')) : undefined } });
  console.log(JSON.stringify({ counts: r.meta?.counts, queue: r.meta?.queue, written: r.written.length, errors: r.errors }, null, 2));
  process.exit(exitCode(r, dryRun));
}
