// docs-watch — TypeSafe 문서 · 모델 목록 · SDK 버전 · 공식 리포 커밋 변화를 잡는다(📚). 첫 실행은 기준선.
import { parseSitemap, parseLlmsTxt, parseNpm, parsePypi, githubRepoOf } from './lib/parsers.mjs';
import { sha256, stripHtml } from './lib/text.mjs';

const MODEL = /\bjev-\d+\.\d+(?:\.\d+)?\b/g;
const normalize = (t) => stripHtml(t).replace(/(last\s+updated|updated)\s*:?\s*[\w ,.-]{0,40}\d{4}/gi, '').replace(/\s+/g, ' ').trim();

async function snapshot(s, { fetchText, gh }) {
  if (s.method === 'git-head') {
    const g = githubRepoOf(s.url);
    const head = g && gh.latestCommit ? await gh.latestCommit(`${g.owner}/${g.repo}`) : null;
    return head ? { head } : null;
  }
  const body = await fetchText(s.url);
  if (body == null) return null;
  if (s.method === 'sitemap') return { pages: Object.fromEntries(parseSitemap(body).map((p) => [p.loc, p.lastmod])) };
  if (s.method === 'llms-txt') return { links: parseLlmsTxt(body).map((l) => l.url).sort() };
  if (s.method === 'npm') return { version: parseNpm(body).latest };
  if (s.method === 'pypi') return { version: parsePypi(body).latest };
  return { hash: sha256(normalize(body)), models: [...new Set(body.match(MODEL) || [])].sort() };
}

function diff(id, url, a, b) {
  const out = [];
  const c = (kind, detail) => out.push({ id, url, kind, detail });
  if (b.pages) {
    for (const [loc, mod] of Object.entries(b.pages)) {
      if (!(loc in (a.pages || {}))) c('new-page', loc);
      else if (a.pages[loc] !== mod) c('changed', loc);
    }
    for (const loc of Object.keys(a.pages || {})) if (!(loc in b.pages)) c('removed-page', loc);
  }
  if (b.links) {
    for (const l of b.links) if (!(a.links || []).includes(l)) c('new-page', l);
    for (const l of a.links || []) if (!b.links.includes(l)) c('removed-page', l);
  }
  if (b.version && a.version && b.version !== a.version) c('new-version', b.version);
  if (b.head && a.head && b.head !== a.head) c('new-commit', b.head);
  if (b.hash && a.hash && b.hash !== a.hash) c('changed', '내용 변경');
  for (const m of b.models || []) if (a.models && !a.models.includes(m)) c('new-model', m);
  return out;
}

export async function watchDocs(sources, prev = {}, { fetchText, gh, checkedAt }) {
  const state = { ...prev };
  const changes = [];
  const status = [];
  for (const s of sources) {
    let snap = null;
    try { snap = await snapshot(s, { fetchText, gh }); } catch { snap = null; }
    status.push({ id: s.id, url: s.url, status: snap ? 'ok' : 'unavailable', count: snap ? 1 : 0, checked_at: checkedAt });
    if (!snap) continue;
    if (prev[s.id]) changes.push(...diff(s.id, s.url, prev[s.id], snap));
    state[s.id] = snap;
  }
  return { state, changes, status };
}
