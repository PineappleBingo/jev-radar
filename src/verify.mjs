// verify — 코드 검색으로 실제 Jev 호출이 있는지(✅)와 어떤 질문 유형을 쓰는지 본다. 코드 검색은 분당 10회라 6.5초 간격.
export const VERIFY_QUERIES = ['"api.typesafe.ai"', 'systemone', '"@typesafe-ai/sdk"', 'typesafe_sdk'];
const DOC_FILE = /\.(md|mdx|txt|rst)$/i;

export function decisionTypes(text) {
  const out = new Set();
  // Match: type/Type: "choice"/"CHOICE" or type='score' etc (case-insensitive, lowercase result)
  for (const m of String(text).matchAll(/['"]?type['"]?\s*[:=]\s*['"](choice|score|noul)['"]/gi)) out.add(m[1].toLowerCase());
  // Match enum-style: QuestionType.CHOICE, JevType.noul etc (case-insensitive)
  for (const m of String(text).matchAll(/\b\w*Type\.(CHOICE|SCORE|NOUL|choice|score|noul)\b/gi)) out.add(m[1].toLowerCase());
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

export async function verifyAll(items, gh, { budget = 15, maxQueries = 45, sleep, state, today }) {
  state.verify ||= {};
  // 한 번도 안 본 리포(점수 순)가 먼저, 다시 보기는 마지막 확인 뒤 푸시된 리포만.
  //   state.verify는 날짜(YYYY-MM-DD)라 확인한 날 푸시도 다음 날 한 번 더 본다(놓치지 않는 쪽).
  const byScore = (a, b) => (b.score ?? 0) - (a.score ?? 0);
  const open = items.filter((i) => i.verified !== 'code');
  const due = [
    ...open.filter((i) => !state.verify[i.full_name]).sort(byScore),
    ...open.filter((i) => state.verify[i.full_name] && String(i.pushed_at) > state.verify[i.full_name]).sort(byScore),
  ].map((i) => i.full_name);
  const updates = new Map();
  const checked = [];
  let error = null;
  let queriesUsed = 0;
  for (const fn of due.slice(0, budget)) {
    // Check if next repo would exceed maxQueries budget
    if (queriesUsed + VERIFY_QUERIES.length > maxQueries) break;
    try {
      const r = await verifyRepo(gh, fn, { sleep });
      queriesUsed += r.queries;
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
