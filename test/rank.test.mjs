import { test } from 'node:test';
import assert from 'node:assert/strict';
import { recordStars, delta7, isNew, rising, score } from '../src/rank.mjs';

test('same day overwrites; history capped at 35', () => {
  let h = recordStars({}, [{ full_name: 'o/r', stars: 1 }], '2026-09-01');
  h = recordStars(h, [{ full_name: 'o/r', stars: 2 }], '2026-09-01');
  assert.deepEqual(h['o/r'], [['2026-09-01', 2]]);
  for (let d = 0; d < 40; d++) h = recordStars(h, [{ full_name: 'o/r', stars: d }], new Date(Date.UTC(2026, 9, 1) + d * 864e5).toISOString().slice(0, 10));
  assert.equal(h['o/r'].length, 35);
});

test('delta7 uses the nearest record at least 7 days old', () => {
  const s = [['2026-09-10', 10], ['2026-09-18', 20], ['2026-09-19', 25], ['2026-09-26', 40]];
  assert.equal(delta7(s, '2026-09-26'), 15, '2026-09-19 (25) is exactly 7 days old → 40 − 25');
  assert.equal(delta7([['2026-09-22', 5], ['2026-09-26', 9]], '2026-09-26'), null);
});

test('new, rising, score', () => {
  assert.equal(isNew({ first_seen: '2026-09-20' }, '2026-09-26'), true);
  assert.equal(isNew({ first_seen: '2026-09-18' }, '2026-09-26'), false);
  const items = [{ full_name: 'a', stars_7d_delta: 3 }, { full_name: 'b', stars_7d_delta: 30 }, { full_name: 'c', stars_7d_delta: null }, { full_name: 'd', stars_7d_delta: 8 }];
  assert.deepEqual(rising(items).map((i) => i.full_name), ['b', 'd']);
  const base = { stars: 99, verified: 'code', summary_ko: { what: 'x' }, pushed_at: '2026-09-20T00:00:00Z', stars_7d_delta: 10, flags: [] };
  assert.equal(score(base, '2026-09-26'), 9, '4 + 2 + 0.5 + 1.5 + 1');
  assert.equal(score({ ...base, flags: ['spam-suspect'] }, '2026-09-26'), 0.5);
  assert.equal(score({ stars: 0, verified: 'pending', summary_ko: null, pushed_at: '2025-01-01T00:00:00Z', stars_7d_delta: null, flags: [] }, '2026-09-26'), 0);
});
