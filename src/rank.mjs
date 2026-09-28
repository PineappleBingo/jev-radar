// rank — 별 이력을 날짜별로 쌓아 7일 증가를 내고, 신규 · 급상승 · 정렬 점수를 계산한다(결정적, 모델 없음).
const DAY = 864e5;
const days = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / DAY);

export function recordStars(history, items, date) {
  const out = { ...history };
  for (const it of items) {
    const series = (out[it.full_name] || []).filter(([d]) => d !== date);
    series.push([date, it.stars]);
    series.sort((a, b) => a[0].localeCompare(b[0]));
    out[it.full_name] = series.slice(-35);
  }
  return out;
}

export function delta7(series = [], date) {
  const today = series.find(([d]) => d === date);
  const old = [...series].reverse().find(([d]) => days(d, date) >= 7);
  return today && old ? today[1] - old[1] : null;
}

// baseline(백필한 날) 이전 · 당일에 처음 본 항목은 새것이 아니다.
export const isNew = (item, date, n = 7, baseline = null) => (!baseline || item.first_seen > baseline) && days(item.first_seen, date) < n;

export const rising = (items, n = 10) => items.filter((i) => (i.stars_7d_delta ?? 0) >= 5).sort((a, b) => b.stars_7d_delta - a.stars_7d_delta || a.full_name.localeCompare(b.full_name)).slice(0, n);

export function score(item, date) {
  const age = days(String(item.pushed_at).slice(0, 10), date);
  const s = 2 * Math.log10((item.stars || 0) + 1)
    + ({ code: 2, docs: 1 }[item.verified] || 0)
    + (item.summary_ko ? 0.5 : 0)
    + (age <= 30 ? 1.5 : age <= 90 ? 0.75 : 0)
    + Math.min(2, Math.max(0, item.stars_7d_delta || 0) / 10);
  // 코드로 확인된 구현이 별만 많은 미확인 리포보다 위에 오도록 미확인은 7에서 자른다.
  const capped = (item.flags || []).includes('spam-suspect') ? Math.min(s, 0.5) : Math.min(s, item.verified === 'code' ? 10 : 7);
  return Math.round(capped * 10) / 10;
}
