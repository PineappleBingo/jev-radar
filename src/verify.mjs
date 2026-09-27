// verify — 코드 검색으로 실제 Jev 호출이 있는지(✅)와 어떤 질문 유형을 쓰는지 본다. 코드 검색은 분당 10회라 6.5초 간격.
export const VERIFY_QUERIES = ['"api.typesafe.ai"', 'systemone', '"@typesafe-ai/sdk"', 'typesafe_sdk'];
const DOC_FILE = /\.(md|mdx|txt|rst)$/i;

export function decisionTypes(text) {
  const out = new Set();
  for (const m of String(text).matchAll(/['"]?type['"]?\s*[:=]\s*['"](choice|score|noul)['"]/g)) out.add(m[1]);
  return [...out].sort();
}

export async function verifyRepo(gh, fullName, { sleep, spacingMs = 6500 }) {
  let queries = 0;
  for (const q of VERIFY_QUERIES) {
    await sleep(spacingMs);
    queries++;
    const hits = (await gh.codeSearch(`repo:${fullName} ${q}`)).filter((h) => !DOC_FILE.test(h.path));
    if (!hits.length) continue;
    const types = new Set();
    for (const h of hits.slice(0, 2)) for (const t of decisionTypes((await gh.fileText(fullName, h.path)) || '')) types.add(t);
    return { verified: 'code', decision_types: [...types].sort(), queries };
  }
  return { verified: null, decision_types: [], queries };
}

const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);

export async function verifyAll(items, gh, { budget = 15, sleep, state, today }) {
  state.verify ||= {};
  const due = items.filter((i) => i.verified !== 'code' && (!state.verify[i.full_name] || daysBetween(state.verify[i.full_name], today) >= 14)).map((i) => i.full_name);
  const updates = new Map();
  const checked = [];
  let error = null;
  for (const fn of due.slice(0, budget)) {
    try {
      const r = await verifyRepo(gh, fn, { sleep });
      if (r.verified) updates.set(fn, { verified: r.verified, decision_types: r.decision_types });
      state.verify[fn] = today;
      checked.push(fn);
    } catch (e) {
      error = String(e.message).slice(0, 200);
      break;
    }
  }
  return { updates, pending: due.filter((fn) => !checked.includes(fn)), checked, error };
}
