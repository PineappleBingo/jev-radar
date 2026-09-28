// render — 사람이 보는 README · 분야별 목록 · 일일 변경. 데이터는 data/*.json이 정본이고 여기는 보기만 만든다.
import { isNew, rising as risingOf } from './rank.mjs';
import { VERIFY_QUERIES } from './verify.mjs';

export function kst(iso) {
  const d = new Date(Date.parse(iso) + 9 * 36e5).toISOString();
  return `${d.slice(0, 10)} ${d.slice(11, 16)} KST`;
}
const cell = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/[`|[\]!]/g, '\\$&').replace(/\n/g, ' ');
const KIND = { changed: '변경', 'new-page': '새 페이지', 'removed-page': '페이지 삭제', 'new-model': '새 모델', 'new-version': '새 버전', 'new-commit': '새 커밋' };
const HEAD = '| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |\n|---|---:|---:|---|---|---|';
// 태그는 이모지만 보이고 뜻은 마우스를 올리면 나온다. GitHub는 <abbr>를 지우지만 링크 title은 남기므로
// 범례로 가는 링크에 title을 단다. 휴대폰용 설명은 README 범례(#legend)에 따로 둔다.
export const LEGEND = '#legend';
const tip = (title, label, legend) => `[${label}](${legend} "${title}")`;
const CODE_MARK = {
  code: ['✅', '코드 확인: 코드에서 Jev API 호출을 찾았습니다'],
  none: ['❌', '코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다'],
  queued: ['⏳', '확인 대기: 아직 코드를 확인하지 않았습니다'],
};
const TYPE_TIP = { choice: '선택지 중 하나를 고르게 합니다', score: '등급을 매기게 합니다', noul: '예/아니오 확률을 묻습니다' };

// checked = state.verify(리포 → 마지막 코드 확인 날짜). 확인했는데 code가 아니면 ❌, 확인한 적 없으면 ⏳.
export const codeMark = (it, checked = {}) => (it.verified === 'code' ? 'code' : checked[it.full_name] ? 'none' : 'queued');

export function row(it, date, baseline = null, checked = {}, legend = LEGEND) {
  const s = it.summary_ko;
  const summary = s ? `${cell(s.what)}<br>${cell(s.decision)}<br>${cell(s.point)}` : it.description ? cell(it.description) : '—';
  const tags = [
    tip(CODE_MARK[codeMark(it, checked)][1], CODE_MARK[codeMark(it, checked)][0], legend),
    isNew(it, date, 7, baseline) ? tip('최근 7일 안에 처음 발견했습니다', '🆕', legend) : null,
    (it.stars_7d_delta ?? 0) >= 5 ? tip(`최근 7일 동안 별이 ${it.stars_7d_delta}개 늘었습니다`, `🔥 +${it.stars_7d_delta}`, legend) : null,
    ...(it.decision_types || []).map((t) => tip(TYPE_TIP[t] || '코드에서 본 질문 유형', `\`${t}\``, legend)),
  ].filter(Boolean).join(' ');
  return `| [${it.full_name}](${it.url}) | ${it.stars} | ${it.forks} | ${summary} | ${tags} | ${String(it.pushed_at).slice(0, 10)} |`;
}

const table = (items, date, baseline, checked, legend) => (items.length ? `${HEAD}\n${items.map((i) => row(i, date, baseline, checked, legend)).join('\n')}` : '없음');
const docLine = (c) => `- ${KIND[c.kind] || c.kind} \`${c.detail}\` — [${c.id}](${c.url})`;
const num = (n) => Number(n ?? 0).toLocaleString('en-US');
const byScore = (a, b) => b.score - a.score || b.stars - a.stars || a.full_name.localeCompare(b.full_name);

export function renderReadme({ meta, items, docChanges, categories, date, checked = {} }) {
  const groups = categories.map((c) => ({ c, list: items.filter((i) => i.category.slug === c.slug).sort(byScore) })).filter((g) => g.list.length);
  const b = meta.baseline_date ?? null;
  const fresh = items.filter((i) => isNew(i, date, 7, b)).sort(byScore).slice(0, 15);
  const marks = { code: 0, none: 0, queued: 0 };
  for (const i of items) marks[codeMark(i, checked)]++;
  return [
    '# 🛰️ Jev Radar — TypeSafe Jev 오픈소스 구현 모음',
    '',
    '> Jev(System One)를 쓰는 공개 리포를 매일 모아 한국어로 소개합니다. 프로그램이 읽는 데이터는 [`data/index.json`](data/index.json)에 있습니다(`radar-index/1` 형식).',
    '',
    `**마지막 업데이트: ${kst(meta.generated_at)}** · 리포 ${num(meta.counts.total)}개 · 🆕 24시간 ${meta.counts.new_24h} · 7일 ${meta.counts.new_7d} · 📚 문서 변경 ${docChanges.length}`,
    '',
    `코드 확인: ✅ ${num(marks.code)} · ❌ ${num(marks.none)} · ⏳ ${num(marks.queued)} · 한국어 요약을 기다리는 리포 ${num(meta.queue?.summaries_pending)}개`,
    '',
    '<a id="legend"></a>',
    '## 표 보는 법',
    '',
    '태그에 마우스를 올려도 설명이 나옵니다.',
    '',
    '- ✅ 코드에서 Jev를 실제로 부르는 것을 확인했습니다. 따라 해 볼 구현을 찾는다면 이 표시부터 보세요.',
    '- ❌ 코드 검색으로는 Jev 호출을 찾지 못했습니다. 문서에서만 언급했을 수 있습니다.',
    '- ⏳ 아직 코드를 확인하지 않았습니다. 하루에 확인할 수 있는 양이 적어 대부분이 여기에 해당합니다. ⏳ 표시가 붙었다고 Jev를 안 쓴다는 뜻은 아닙니다.',
    '- 🆕 최근 7일 안에 처음 발견한 리포, 🔥 최근 7일 동안 별이 5개 이상 늘어난 리포입니다.',
    '- `choice` `score` `noul`은 그 코드가 Jev에 묻는 질문의 종류입니다. 차례로 선택지 고르기, 등급 매기기, 예/아니오 확률입니다.',
    '- 요약 칸이 영어면 아직 한국어 요약이 없어 GitHub 설명을 그대로 보여 주는 것입니다.',
    '',
    `분야: ${groups.map((g) => `[${g.c.emoji} ${g.c.label} (${g.list.length})](#cat-${g.c.slug})`).join(' · ')}`,
    '',
    '## 🆕 새로 발견 (7일)', '', table(fresh, date, b, checked), '',
    '## 🔥 급상승 (7일)', '', table(risingOf(items), date, b, checked), '',
    '## 📚 문서·모델 변경 (7일)', '', docChanges.length ? docChanges.map(docLine).join('\n') : '없음', '',
    '## 분야별', '',
    ...groups.flatMap((g) => [`<a id="cat-${g.c.slug}"></a>`, `### ${g.c.emoji} ${g.c.label} (${g.list.length})`, '', table(g.list.slice(0, 10), date, b, checked), '', `${g.list.length}개 모두 보기 → [categories/${g.c.slug}.md](categories/${g.c.slug}.md)`, '']),
    '## 이 리포에 대해', '',
    '- 매일 오전 6시(한국 시간)에 GitHub 검색, awesome 목록, 직접 넣어 둔 시드 목록에서 리포를 모읍니다. 검색으로만 걸린 리포는 설명·토픽·README에 TypeSafe Jev를 쓴다는 근거가 있어야 남깁니다. 이름만 같은 리포를 걸러 내기 위해서입니다.',
    '- 한국어 요약은 README를 읽고 Gemini가 씁니다. 형식 검사를 통과한 요약만 싣습니다.',
    `- 코드 확인은 GitHub 코드 검색으로 합니다. ${VERIFY_QUERIES.map((q) => `\`${q.replace(/"/g, '')}\``).join(' · ')} 가운데 하나가 문서가 아닌 코드 파일에서 나오면 ✅를 붙입니다.`,
    '- 리포와 README의 저작권은 각 원저작자에게 있습니다. 요약은 소개하려고 옮긴 발췌입니다.',
    '- 데이터 형식은 [radar-index/1](https://github.com/PineappleBingo/upgrade-scout/blob/main/skills/upgrade-scout/references/radar-format.md)입니다. upgrade-scout 플러그인이 이 데이터를 읽어 갑니다.',
    '',
  ].join('\n');
}

export function renderCategory(c, items, date, baseline = null, checked = {}) {
  const list = [...items].sort(byScore);
  const escapeExcerpt = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/`/g, '\\`');
  return [
    `# ${c.emoji} ${c.label} (${list.length})`, '', `[← README](../README.md)`, '', HEAD,
    ...list.map((i) => row(i, date, baseline, checked, `../README.md${LEGEND}`)), '',
    ...list.filter((i) => i.readme_excerpt).flatMap((i) => [`### ${i.full_name}`, '', `<details><summary>README 발췌</summary>\n\n${escapeExcerpt(i.readme_excerpt)}\n\n</details>`, '']),
  ].join('\n');
}

export function renderChanges({ date, added, vanished, rising, docChanges, refilteredCount, baseline = null, checked = {} }) {
  return [
    `# ${date} 변경`, '',
    `## 새로 발견 (${added.length})`, '', table(added, date, baseline, checked, `../README.md${LEGEND}`), '',
    `## 급상승 (${rising.length})`, '', table(rising, date, baseline, checked, `../README.md${LEGEND}`), '',
    '## 사라짐', '', vanished.length ? vanished.map((v) => `- ${v}`).join('\n') : '없음', '',
    '## 문서·모델 변경', '', docChanges.length ? docChanges.map(docLine).join('\n') : '없음', '',
    ...(refilteredCount != null ? [`근거 부족으로 제외: ${refilteredCount}개`, ''] : []),
  ].join('\n');
}
