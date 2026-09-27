// collect — 목록(awesome · 카탈로그) · GitHub 검색 · 시드에서 후보 리포를 모은다. 판단은 하지 않는다(거르기는 enrich).
import { PARSERS, githubRepoOf } from './lib/parsers.mjs';
import { RateLimited, dateWindows } from './github.mjs';

const SHORT = /^[\w.-]+\/[\w.-]+$/;

export function reposIn(parsed) {
  const out = new Set();
  const walk = (v, key) => {
    if (typeof v === 'string') {
      for (const m of v.matchAll(/https?:\/\/(?:www\.)?github\.com\/[^\s"'<>)\]]+/g)) {
        const g = githubRepoOf(m[0]);
        if (g) out.add(`${g.owner}/${g.repo}`.toLowerCase());
      }
      if (key === 'repo' && SHORT.test(v)) out.add(v.toLowerCase());
    } else if (Array.isArray(v)) v.forEach((x) => walk(x));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, k);
  };
  walk(parsed);
  return [...out];
}

const add = (found, name, source) => { if (!found.has(name)) found.set(name, new Set()); found.get(name).add(source); };

export async function collectCatalogs(catalogs, { fetchText, checkedAt }) {
  const found = new Map();
  const status = [];
  for (const s of catalogs) {
    let body = null;
    try { body = await fetchText(s.url); } catch { body = null; }
    if (body == null) { status.push({ id: s.id, url: s.url, status: 'unavailable', count: 0, checked_at: checkedAt }); continue; }
    let names = [];
    try { names = reposIn(PARSERS[s.method](body)); } catch { names = []; }
    for (const n of names) add(found, n, `awesome:${s.id}`);
    status.push({ id: s.id, url: s.url, status: names.length ? 'ok' : 'parse-suspect', count: names.length, checked_at: checkedAt });
  }
  return { found, status };
}

export async function collectSearch(queries, gh, { since, backfill, checkedAt }) {
  const found = new Map();
  const status = [];
  const expanded = backfill
    ? queries.flatMap((q) => dateWindows(backfill.from, backfill.to, backfill.days || 30).map(([a, b]) => `${q} created:${a}..${b}`))
    : queries.map((q) => `${q} pushed:>=${since}`);
  let limited = false;
  for (const q of expanded) {
    if (limited) { status.push({ id: 'github-search', url: q, status: 'rate-limited', count: 0, checked_at: checkedAt }); continue; }
    try {
      const items = await gh.searchRepos(q);
      for (const r of items) add(found, r.full_name.toLowerCase(), 'github-search');
      status.push({ id: 'github-search', url: q, status: 'ok', count: items.length, checked_at: checkedAt });
    } catch (e) {
      if (!(e instanceof RateLimited)) throw e;
      limited = true;
      status.push({ id: 'github-search', url: q, status: 'rate-limited', count: 0, checked_at: checkedAt });
    }
  }
  return { found, status };
}

export function collectSeeds(seeds) {
  const found = new Map();
  for (const s of seeds) add(found, s.full_name.toLowerCase(), 'seed:registry');
  return { found };
}

export function mergeFound(...maps) {
  const out = new Map();
  for (const m of maps) for (const [k, v] of m) for (const s of v) add(out, k, s);
  return out;
}

export function dropRedFlags(found, redFlags) {
  const dropped = [];
  for (const f of redFlags) {
    const k = f.full_name.toLowerCase();
    if (found.delete(k)) dropped.push(k);
  }
  return dropped;
}
