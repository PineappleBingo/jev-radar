import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fakeFetch } from './_offline.mjs';
import { makeGithub, dateWindows, RateLimited } from '../src/github.mjs';

const repoNode = (o, n, extra = {}) => ({ nameWithOwner: `${o}/${n}`, url: `https://github.com/${o}/${n}`, description: 'd', stargazerCount: 5, forkCount: 1, pushedAt: '2026-09-25T00:00:00Z', createdAt: '2026-09-01T00:00:00Z', isArchived: false, isFork: false, primaryLanguage: { name: 'TypeScript' }, licenseInfo: { spdxId: 'MIT' }, repositoryTopics: { nodes: [{ topic: { name: 'jev' } }] }, ...extra });

test('dateWindows splits an inclusive range', () => {
  assert.deepEqual(dateWindows('2026-01-01', '2026-01-10', 4), [['2026-01-01', '2026-01-04'], ['2026-01-05', '2026-01-08'], ['2026-01-09', '2026-01-10']]);
});

test('searchRepos pages until a short page', async () => {
  const calls = [];
  const gh = makeGithub({ token: 't', fetchImpl: fakeFetch({ 'https://api.github.com/search/repositories': (u) => ({ total_count: 150, items: Array.from({ length: u.includes('page=1&') || u.endsWith('page=1') ? 100 : 50 }, (_, i) => ({ full_name: `o/r${u.includes('page=2') ? 100 + i : i}` })) }) }, calls) });
  const items = await gh.searchRepos('topic:jev');
  assert.equal(items.length, 150);
  assert.equal(calls.length, 2);
  assert.match(calls[0].init.headers.Authorization, /^Bearer t$/);
  assert.match(decodeURIComponent(calls[0].url), /q=topic:jev/);
});

test('repoMeta batches GraphQL by 50 and maps missing repos to null', async () => {
  const calls = [];
  const names = Array.from({ length: 51 }, (_, i) => `o/r${i}`);
  const gh = makeGithub({ token: 't', fetchImpl: fakeFetch({ 'https://api.github.com/graphql': (u, init) => {
    const q = JSON.parse(init.body).query;
    const aliases = [...q.matchAll(/(r\d+): repository\(owner: "o", name: "(r\d+)"\)/g)];
    return { data: Object.fromEntries(aliases.map(([, alias, name]) => [alias, name === 'r3' ? null : repoNode('o', name)])), errors: [{ type: 'NOT_FOUND', path: ['r3'] }] };
  } }, calls) });
  const meta = await gh.repoMeta(names);
  assert.equal(calls.length, 2);
  assert.equal(meta.get('o/r3'), null);
  assert.deepEqual(meta.get('o/r0'), { full_name: 'o/r0', url: 'https://github.com/o/r0', description: 'd', stars: 5, forks: 1, pushed_at: '2026-09-25T00:00:00Z', created_at: '2026-09-01T00:00:00Z', archived: false, fork: false, language: 'TypeScript', license: 'MIT', topics: ['jev'] });
});

test('repoMeta: data: null rejects instead of mass-nulling the chunk', async () => {
  const gh = makeGithub({ fetchImpl: fakeFetch({ 'https://api.github.com/graphql': { data: null, errors: [{ message: 'timeout' }] } }) });
  await assert.rejects(() => gh.repoMeta(['o/r0']), /GitHub GraphQL: timeout/);
});

test('repoMeta: NOT_FOUND error nulls only that alias', async () => {
  const gh = makeGithub({ fetchImpl: fakeFetch({ 'https://api.github.com/graphql': { data: { r0: null, r1: repoNode('o', 'r1') }, errors: [{ type: 'NOT_FOUND', path: ['r0'] }] } }) });
  const meta = await gh.repoMeta(['o/r0', 'o/r1']);
  assert.equal(meta.get('o/r0'), null);
  assert.ok(meta.get('o/r1'));
});

test('repoMeta: a non-NOT_FOUND error leaves the alias out of the map (unknown, not gone)', async () => {
  const gh = makeGithub({ fetchImpl: fakeFetch({ 'https://api.github.com/graphql': { data: { r0: null, r1: repoNode('o', 'r1') }, errors: [{ type: 'FORBIDDEN', path: ['r0'] }] } }) });
  const meta = await gh.repoMeta(['o/r0', 'o/r1']);
  assert.equal(meta.has('o/r0'), false);
  assert.ok(meta.get('o/r1'));
});

test('rate limit: short reset waits and retries, long reset throws RateLimited', async () => {
  let n = 0;
  const slept = [];
  const limited = { status: 403, body: { message: 'rate limit' }, headers: { 'x-ratelimit-remaining': '0', 'x-ratelimit-reset': '1000030' } };
  const gh = makeGithub({ now: () => 1_000_000_000, sleep: async (ms) => { slept.push(ms); }, fetchImpl: fakeFetch({ 'https://api.github.com/repos/o/r/readme': () => (n++ === 0 ? limited : '# hi') }) });
  assert.equal(await gh.readme('o/r'), '# hi');
  assert.deepEqual(slept, [30000]);
  const gh2 = makeGithub({ now: () => 1_000_000_000, sleep: async () => {}, fetchImpl: fakeFetch({ 'https://api.github.com/repos/o/r/readme': { ...limited, headers: { ...limited.headers, 'x-ratelimit-reset': '1009999' } } }) });
  await assert.rejects(() => gh2.readme('o/r'), RateLimited);
});

test('404 is null, other errors throw', async () => {
  const gh = makeGithub({ fetchImpl: fakeFetch({ 'https://api.github.com/repos/o/gone/readme': { status: 404, body: '' }, 'https://api.github.com/repos/o/boom/readme': { status: 500, body: '' } }) });
  assert.equal(await gh.readme('o/gone'), null);
  await assert.rejects(() => gh.readme('o/boom'), /GitHub 500/);
});

test('secondary rate limit: 403 with retry-after waits and retries', async () => {
  let n = 0;
  const slept = [];
  const gh = makeGithub({ sleep: async (ms) => { slept.push(ms); }, fetchImpl: fakeFetch({ 'https://api.github.com/repos/o/r/readme': () => (n++ === 0 ? { status: 403, body: '', headers: { 'retry-after': '5' } } : '# hi') }) });
  assert.equal(await gh.readme('o/r'), '# hi');
  assert.deepEqual(slept, [5000]);
});

test('secondary rate limit: 429 with long retry-after throws RateLimited', async () => {
  const gh = makeGithub({ fetchImpl: fakeFetch({ 'https://api.github.com/repos/o/r/readme': { status: 429, body: '', headers: { 'retry-after': '120' } } }) });
  await assert.rejects(() => gh.readme('o/r'), RateLimited);
});

test('plain 403 with no rate-limit headers throws GitHub 403', async () => {
  const gh = makeGithub({ fetchImpl: fakeFetch({ 'https://api.github.com/repos/o/r/readme': { status: 403, body: '', headers: {} } }) });
  await assert.rejects(() => gh.readme('o/r'), /GitHub 403/);
});
