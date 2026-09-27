// github — REST 검색 · GraphQL 일괄 메타 · README · 코드 검색. fetch · sleep · now를 주입받아 테스트는 네트워크 없이.
const API = 'https://api.github.com';
const RAW = 'application/vnd.github.raw';
const TEXT_MATCH = 'application/vnd.github.text-match+json';

export class RateLimited extends Error {}

export function dateWindows(from, to, days) {
  const out = [];
  const day = 864e5;
  const end = Date.parse(`${to}T00:00:00Z`);
  for (let t = Date.parse(`${from}T00:00:00Z`); t <= end; t += days * day) {
    const b = Math.min(t + (days - 1) * day, end);
    out.push([new Date(t).toISOString().slice(0, 10), new Date(b).toISOString().slice(0, 10)]);
  }
  return out;
}

const META_FIELDS = 'nameWithOwner url description stargazerCount forkCount pushedAt createdAt isArchived isFork primaryLanguage { name } licenseInfo { spdxId } repositoryTopics(first: 20) { nodes { topic { name } } }';
const toMeta = (n) => ({ full_name: n.nameWithOwner, url: n.url, description: n.description ?? null, stars: n.stargazerCount, forks: n.forkCount, pushed_at: n.pushedAt, created_at: n.createdAt, archived: n.isArchived, fork: n.isFork, language: n.primaryLanguage?.name ?? null, license: n.licenseInfo?.spdxId ?? null, topics: (n.repositoryTopics?.nodes || []).map((x) => x.topic.name) });

export function makeGithub({ token = process.env.GITHUB_TOKEN, fetchImpl = globalThis.fetch, sleep = (ms) => new Promise((r) => setTimeout(r, ms)), now = () => Date.now() } = {}) {
  async function req(url, { accept = 'application/vnd.github+json', body } = {}) {
    for (let attempt = 0; attempt < 3; attempt++) {
      const headers = { Accept: accept, 'User-Agent': 'jev-radar', 'X-GitHub-Api-Version': '2022-11-28', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(body ? { 'Content-Type': 'application/json' } : {}) };
      const res = await fetchImpl(url, { method: body ? 'POST' : 'GET', headers, body: body ? JSON.stringify(body) : undefined });
      if ((res.status === 403 || res.status === 429) && res.headers.get('x-ratelimit-remaining') === '0') {
        const waitMs = Number(res.headers.get('x-ratelimit-reset')) * 1000 - now();
        if (waitMs > 70_000) throw new RateLimited(`한도 소진 — ${Math.round(waitMs / 1000)}초 뒤 재설정: ${url}`);
        await sleep(Math.max(waitMs, 1000));
        continue;
      }
      if ((res.status === 403 || res.status === 429) && res.headers.get('retry-after')) {
        const waitMs = Number(res.headers.get('retry-after')) * 1000;
        if (waitMs > 70_000) throw new RateLimited(`한도 소진 — ${Math.round(waitMs / 1000)}초 뒤 재설정: ${url}`);
        await sleep(waitMs);
        continue;
      }
      if (res.status === 429) {
        await sleep(1000);
        continue;
      }
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`GitHub ${res.status} ${url}`);
      return accept === RAW ? res.text() : res.json();
    }
    throw new RateLimited(`재시도 3회 실패: ${url}`);
  }

  return {
    async searchRepos(q, { maxPages = 10 } = {}) {
      const out = [];
      for (let page = 1; page <= maxPages; page++) {
        const body = await req(`${API}/search/repositories?q=${encodeURIComponent(q)}&per_page=100&page=${page}`);
        const items = body?.items || [];
        out.push(...items);
        if (items.length < 100 || out.length >= Math.min(body.total_count, 1000)) break;
      }
      return out;
    },
    async repoMeta(fullNames) {
      const out = new Map();
      for (let i = 0; i < fullNames.length; i += 50) {
        const chunk = fullNames.slice(i, i + 50);
        const parts = chunk.map((fn, j) => {
          const [owner, name] = fn.split('/');
          return `r${i + j}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { ${META_FIELDS} }`;
        });
        const body = await req(`${API}/graphql`, { body: { query: `query { ${parts.join('\n')} }` } });
        // data가 아예 없으면 전체 요청이 실패한 것 — 청크를 통째로 null로 만들지 않는다.
        if (!body?.data) throw new Error(`GitHub GraphQL: ${body?.errors?.[0]?.message || '응답에 data가 없다'}`);
        const notFound = new Set((body.errors || []).filter((e) => e.type === 'NOT_FOUND').map((e) => e.path?.[0]));
        chunk.forEach((fn, j) => {
          const alias = `r${i + j}`;
          const node = body.data[alias];
          if (node) out.set(fn.toLowerCase(), toMeta(node));
          else if (notFound.has(alias)) out.set(fn.toLowerCase(), null);
          // 그 밖의 이유(FORBIDDEN 등)로 비었으면 맵에 넣지 않는다 — undefined = 모름(삭제로 보지 않는다).
        });
      }
      return out;
    },
    readme: (fn) => req(`${API}/repos/${fn}/readme`, { accept: RAW }),
    async codeSearch(q) { return (await req(`${API}/search/code?q=${encodeURIComponent(q)}&per_page=5`, { accept: TEXT_MATCH }))?.items || []; },
    fileText: (fn, p) => req(`${API}/repos/${fn}/contents/${p.split('/').map(encodeURIComponent).join('/')}`, { accept: RAW }),
    async latestCommit(fn) { const b = await req(`${API}/repos/${fn}/commits?per_page=1`); return Array.isArray(b) && b[0] ? b[0].sha : null; },
  };
}
