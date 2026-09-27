// enrich — GitHub 메타를 레이더 항목으로. 근거 없는 동음이의 리포를 거르고, 규칙으로 분야를 정한다(모델 분류는 summarize).
export const EVIDENCE = /typesafe|systemone|system one|api\.typesafe\.ai|@typesafe-ai|\bjev-\d+\.\d+/i;

export function readmeExcerpt(md) {
  if (!md) return null;
  let text = String(md).replace(/```[\s\S]*?```/g, '\n\n');
  // Drop HTML block lines (lines starting with < after trim) before stripping tags
  text = text.split('\n').filter((l) => !/^</.test(l.trim())).join('\n');
  text = text.replace(/<[^>]+>/g, ' ');
  for (const para of text.split(/\n\s*\n/)) {
    const lines = para.split('\n').map((l) => l.trim()).filter((l) => l && !/^#{1,6}\s/.test(l) && !/^(\[!\[|!\[)/.test(l) && !/^[-=]{3,}$/.test(l));
    if (!lines.length) continue;
    const plain = lines.join(' ').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();
    if (plain.length >= 20 || plain.length === String(md).trim().length) return plain.slice(0, 300);
  }
  return null;
}

export const hasEvidence = ({ description, topics = [], readme }) => EVIDENCE.test([description || '', topics.join(' '), readme || ''].join('\n'));
export const keep = (sources, evidence) => evidence || [...sources].some((s) => s !== 'github-search');

export function classifyRules(text, categories, registryCat = null) {
  const pick = (c) => ({ slug: c.slug, label: c.label, emoji: c.emoji, confidence: null });
  if (registryCat) {
    const byReg = categories.find((c) => c.from_registry.includes(registryCat));
    if (byReg) return pick(byReg);
  }
  const t = String(text).toLowerCase();
  let best = null;
  let bestHits = 0;
  for (const c of categories) {
    let hits = 0;
    for (const k of c.keywords) {
      const isPrefix = k.endsWith('*');
      const kw = isPrefix ? k.slice(0, -1) : k;
      const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = isPrefix ? `(^|[^a-z0-9])${escaped}` : `(^|[^a-z0-9])${escaped}($|[^a-z0-9])`;
      const regex = new RegExp(pattern, 'g');
      if (regex.test(t)) hits++;
    }
    if (hits > bestHits) { best = c; bestHits = hits; }
  }
  return pick(best || categories.find((c) => c.slug === 'other'));
}

export function spamFlags(meta, readme) {
  const flags = [];
  if (meta.archived) flags.push('archived');
  if (meta.fork) flags.push('fork');
  const empty = !meta.description && String(readme || '').trim().length < 200;
  if (empty) flags.push('empty');
  if (empty && meta.stars === 0) flags.push('spam-suspect');
  return flags;
}

export function toItem(meta, { sources, readme, firstSeen, categories, registryCat = null, prev = null }) {
  const evidence = hasEvidence({ description: meta.description, topics: meta.topics, readme });
  const text = [meta.full_name, meta.description, meta.topics.join(' '), readme || ''].join(' ');
  return {
    full_name: meta.full_name,
    url: meta.url,
    description: meta.description,
    readme_excerpt: readmeExcerpt(readme),
    summary_ko: prev?.summary_ko ?? null,
    category: prev?.category?.confidence != null ? prev.category : classifyRules(text, categories, registryCat),
    keywords: [...new Set((meta.description || '').toLowerCase().match(/[a-z][a-z-]{3,}/g) || [])].slice(0, 8),
    topics: meta.topics,
    language: meta.language,
    license: meta.license,
    stars: meta.stars,
    forks: meta.forks,
    stars_7d_delta: prev?.stars_7d_delta ?? null,
    pushed_at: meta.pushed_at,
    created_at: meta.created_at,
    first_seen: prev?.first_seen ?? firstSeen,
    sources: [...sources].sort(),
    verified: prev?.verified === 'code' ? 'code' : evidence ? 'docs' : 'pending',
    decision_types: prev?.decision_types ?? [],
    flags: spamFlags(meta, readme),
    score: prev?.score ?? 0,
  };
}
