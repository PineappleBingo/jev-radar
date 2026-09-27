// 테스트 공통 — 네트워크를 막는다. 실수로 요청하면 즉시 실패.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
globalThis.fetch = async (url) => { throw new Error(`테스트 중 네트워크 요청 금지: ${url}`); };
const here = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(here, '..');
export const fixture = (...p) => path.join(here, 'fixtures', ...p);
/** URL 앞부분 → 응답 표로 가짜 fetch를 만든다. 값: 문자열(200 text) · 객체(200 JSON) · { status, body, headers } · 함수(url, init) */
export function fakeFetch(table, calls = []) {
  return async (url, init = {}) => {
    const u = String(url);
    calls.push({ url: u, init });
    const key = Object.keys(table).filter((k) => u.startsWith(k)).sort((a, b) => b.length - a.length)[0];
    if (!key) return new Response('not found', { status: 404 });
    let v = table[key];
    if (typeof v === 'function') v = await v(u, init);
    if (v instanceof Response) return v;
    if (v && typeof v === 'object' && 'status' in v && 'body' in v) return new Response(typeof v.body === 'string' ? v.body : JSON.stringify(v.body), { status: v.status, headers: v.headers || {} });
    return new Response(typeof v === 'string' ? v : JSON.stringify(v), { status: 200 });
  };
}
