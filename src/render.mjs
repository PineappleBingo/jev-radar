// render — 사람이 보는 README · 분야별 목록 · 일일 변경. 데이터는 data/*.json이 정본이고 여기는 보기만 만든다.
import { isNew, rising as risingOf } from './rank.mjs';

export function kst(iso) {
  const d = new Date(Date.parse(iso) + 9 * 36e5).toISOString();
  return `${d.slice(0, 10)} ${d.slice(11, 16)} KST`;
}
const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const anchor = (c) => `#${`${c.emoji} ${c.label}`.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s/g, '-')}`;
const KIND = { changed: '변경', 'new-page': '새 페이지', 'removed-page': '페이지 삭제', 'new-model': '새 모델', 'new-version': '새 버전', 'new-commit': '새 커밋' };
const HEAD = '| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |\n|---|---:|---:|---|---|---|';

export function row(it, date) {
  const s = it.summary_ko;
  const glance = s ? `**무엇** ${cell(s.what)}<br>**판단** ${cell(s.decision)}<br>**포인트** ${cell(s.point)}` : `요약 대기 · ${cell(it.description || '설명 없음')}`;
  const tags = [it.verified === 'code' ? '✅' : null, isNew(it, date) ? '🆕' : null, (it.stars_7d_delta ?? 0) >= 5 ? `🔥 +${it.stars_7d_delta}` : null, ...(it.decision_types || []).map((t) => `\`${t}\``)].filter(Boolean).join(' ');
  return `| [${it.full_name}](${it.url}) | ${it.stars} | ${it.forks} | ${glance} | ${tags} | ${String(it.pushed_at).slice(0, 10)} |`;
}

const table = (items, date) => (items.length ? `${HEAD}\n${items.map((i) => row(i, date)).join('\n')}` : '없음');
const docLine = (c) => `- ${KIND[c.kind] || c.kind} \`${c.detail}\` — [${c.id}](${c.url})`;
const byScore = (a, b) => b.score - a.score || b.stars - a.stars || a.full_name.localeCompare(b.full_name);

export function renderReadme({ meta, items, docChanges, categories, date }) {
  const groups = categories.map((c) => ({ c, list: items.filter((i) => i.category.slug === c.slug).sort(byScore) })).filter((g) => g.list.length);
  const fresh = items.filter((i) => isNew(i, date)).sort(byScore).slice(0, 15);
  return [
    '# 🛰️ Jev Radar — TypeSafe Jev 오픈소스 구현 모음',
    '',
    '> Jev(System One)를 쓰는 공개 리포를 매일 모아 한국어로 정리합니다. 기계용 데이터: [`data/index.json`](data/index.json) (`radar-index/1`)',
    '',
    `**마지막 업데이트: ${kst(meta.generated_at)}** · 리포 ${meta.counts.total} · 🆕 24시간 ${meta.counts.new_24h} · 7일 ${meta.counts.new_7d} · ✅ 코드 확인 ${meta.counts.verified} · 📚 문서 변경 ${docChanges.length}`,
    '',
    '범례: ⭐ 별 · 🍴 포크 · ✅ 코드에서 호출 확인 · 🆕 7일 안에 처음 발견 · 🔥 7일 별 증가 상위 · `choice` `score` `noul` 코드에서 본 질문 유형',
    '',
    `분야: ${groups.map((g) => `[${g.c.emoji} ${g.c.label} (${g.list.length})](${anchor(g.c)})`).join(' · ')}`,
    '',
    '## 🆕 새로 발견 (7일)', '', table(fresh, date), '',
    '## 🔥 급상승 (7일)', '', table(risingOf(items), date), '',
    '## 📚 문서·모델 변경 (7일)', '', docChanges.length ? docChanges.map(docLine).join('\n') : '없음', '',
    '## 분야별', '',
    ...groups.flatMap((g) => [`### ${g.c.emoji} ${g.c.label} (${g.list.length})`, '', table(g.list.slice(0, 10), date), '', `전체 ${g.list.length}개 → [categories/${g.c.slug}.md](categories/${g.c.slug}.md)`, '']),
    '## 이 리포는', '',
    '- 매일 06:00 KST에 GitHub 검색 · awesome 목록 · 시드 목록에서 모으고, 이름만 같은 리포는 TypeSafe 근거(설명 · 토픽 · README)가 없으면 뺍니다.',
    '- 요약은 README를 바탕으로 Gemini가 쓰고 형식 검사를 통과한 것만 싣습니다. 요약이 없으면 "요약 대기"로 둡니다.',
    '- ✅는 코드 검색으로 `api.typesafe.ai` · `systemone` · `@typesafe-ai/sdk` 호출을 본 리포입니다.',
    '- 각 리포와 README의 저작권은 원저작자에게 있습니다. 요약은 소개 목적의 발췌입니다.',
    '- 형식: [radar-index/1](https://github.com/PineappleBingo/upgrade-scout/blob/main/skills/upgrade-scout/references/radar-format.md) — upgrade-scout 플러그인이 이 데이터를 읽습니다.',
    '',
  ].join('\n');
}

export function renderCategory(c, items, date) {
  const list = [...items].sort(byScore);
  return [
    `# ${c.emoji} ${c.label} (${list.length})`, '', `[← README](../README.md)`, '', HEAD,
    ...list.map((i) => row(i, date)), '',
    ...list.filter((i) => i.readme_excerpt).flatMap((i) => [`### ${i.full_name}`, '', `<details><summary>README 발췌</summary>\n\n${i.readme_excerpt}\n\n</details>`, '']),
  ].join('\n');
}

export function renderChanges({ date, added, vanished, rising, docChanges }) {
  return [
    `# ${date} 변경`, '',
    `## 새로 발견 (${added.length})`, '', table(added, date), '',
    `## 급상승 (${rising.length})`, '', table(rising, date), '',
    '## 사라짐', '', vanished.length ? vanished.map((v) => `- ${v}`).join('\n') : '없음', '',
    '## 문서·모델 변경', '', docChanges.length ? docChanges.map(docLine).join('\n') : '없음', '',
  ].join('\n');
}
