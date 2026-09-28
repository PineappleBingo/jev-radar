# 남은 일 (2026-09-28 기준)

## 사람이 해야 할 것
- [ ] **`RADAR_GH_TOKEN` 설정(권장)** — Actions 기본 토큰은 코드 검색이 자주 한도에 걸려 하루 약 2개만 확인됨. 공개 리포 읽기 전용 fine-grained 토큰을 만들어 `gh secret set RADAR_GH_TOKEN -R PineappleBingo/jev-radar`로 등록하면 워크플로가 이 토큰을 먼저 씀
- [ ] `data/index.json`의 `summary_ko`를 몇 개 읽고 Gemini 모델(`gemini-3.8-flash`)의 요약 품질 확인
- [ ] 대기열 추이 확인. 요약은 약 3,900개를 하루 40개씩, 코드 확인은 약 4,300개를 하루 15개씩 처리함. `daily.yml`의 `--budget-summaries`와 `--budget-verify` 예산을 늘릴지 결정

## 미룬 개선 (최종 리뷰 Minor)
- M5 목록에 오른 뒤 레드 플래그가 추가돼도 기존 항목이 빠지지 않음
- M8 `typesafe SDK`(띄어쓰기) 같은 TypeScript 도구 설명은 다시 확인 필요. 현재 규칙은 `typesafe[_-]sdk`만 인정함
- M9 비게 된 분야의 `categories/<slug>.md`가 지워지지 않음
- M10 `data/extra/state.json`의 README 해시에 거절된 후보가 남음
- 목록(catalog) 출신 약 1,300개는 `verified: docs`가 예전 규칙으로 계산된 채 고정됨. 푸시될 때만 재계산됨
- 같은 이름으로 이미 있는 리포가 옛 이름으로 다시 발견되는 경우는 테스트가 없음
- README를 못 받아 그대로 넘어간 항목은 그날 점수를 다시 계산하지 않아 하루 늦게 반영됨
- `--dry-run`은 메타 조회에 실패하면 종료 코드 1을, 요약만 실패하면 0을 냄. 의도한 동작임
