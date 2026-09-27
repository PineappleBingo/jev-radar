# 🧑‍💻 개발 도구·코드 리뷰 (57)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20168 | 2341 | **무엇** 개발자가 터미널 환경에서 여러 코딩 에이전트 세션을 실행할 수 있도록 RAM 효율성과 성능을 극대화한 러스트 기반 코딩 에이전트 하네스 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 로컬 임베딩 비활성화 시 단일 세션 27.8MB 수준의 낮은 메모리 점유율을 제공하며, TUI 내 세션 유지 업데이트 등 다중 세션 확장성에 집중했다. | 🆕 | 2026-09-27 |
| [Effect-TS/effect](https://github.com/Effect-TS/effect) | 16239 | 775 | **무엇** TypeScript 개발자가 타입 안전한 에러 처리, 의존성 주입, 구조적 동시성 등을 구현하는 데 사용하는 표준 라이브러리 모노레포다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 코어 로직뿐만 아니라 런타임 플랫폼 추상화, 각종 SQL 클라이언트, AI 제공자 연동 모듈을 모노레포 패키지로 함께 제공한다. | 🆕 | 2026-09-27 |
| [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) | 8656 | 925 | **무엇** 원격 리포지토리 푸시 전에 일회용 워크트리에서 AI 검증 파이프라인을 실행해 주는 로컬 Git 프록시 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 푸시 시점에 별도 워크트리에서 리뷰, 테스트, 린트를 수행하고 안전한 수정은 자동 적용하며 통과 시에만 PR을 연다. | 🆕 | 2026-09-27 |
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 2273 | 131 | **무엇** TypeSafe API 연동 코드를 생성할 수 있도록 Claude Code 등의 AI 에이전트에 추가하는 개발용 스킬 모음이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Claude Code 플러그인과 skills.sh 배포 방식을 지원하여 에이전트가 TypeSafe 워크플로를 설계하고 문서를 참조할 수 있게 한다. | 🆕 | 2026-09-12 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 626 | 41 | **무엇** Git diff나 전체 코드베이스를 단계별로 검토하고 결과를 로컬 대시보드에 시각화하는 코드 리뷰 워크플로 도구다.<br>**판단** 위험 매트릭스(Noul), 파일 프로파일(Choice/Score), 증거 선택 및 메커니즘 분류(Choice), 심각도(Score), 리뷰어 라우팅(Choice)을 판단시킨다.<br>**포인트** 오케스트레이션과 임계값 정책은 코드로 관리하며, Jev를 단계별 모델 판단에만 제한적으로 사용하고 단방향 계층 아키텍처를 강제한다. | ✅ 🆕 | 2026-09-17 |
| [samchon/typia](https://github.com/samchon/typia) | 5921 | 226 | **무엇** TypeScript 타입을 컴파일 타임에 분석해 런타임 유효성 검증기, JSON 직렬화 코드, LLM 함수 호출 하네스를 생성하는 변환 라이브러리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 별도 스키마 정의나 런타임 리플렉션 없이 순수 TypeScript 타입을 빌드 단계(ttsc)에서 전용 검증 코드로 직접 컴파일한다. | 🆕 | 2026-09-27 |
| [vercel-labs/ai-cli](https://github.com/vercel-labs/ai-cli) | 817 | 65 | **무엇** 터미널에서 텍스트·미디어 생성과 정형 평가(evaluate)를 수행할 수 있게 하는 Vercel AI SDK 기반 CLI 도구다.<br>**판단** 티켓 등 입력 데이터에 대해 환불 요청 여부(boolean), 담당 팀 분류(choice), 문제 영향도나 어조(score) 등을 질문해 판단시킨다.<br>**포인트** stdin 파이프 입력을 지원하며 Jev 모델을 기본 평가 모델로 사용해 boolean, choice, score 플래그 및 JSON 스키마로 질문을 일괄 채점한다. | 🆕 | 2026-09-23 |
| [coldteadotai/abide](https://github.com/coldteadotai/abide) | 363 | 33 | **무엇** 코딩 에이전트(Claude Code, Codex 등)가 코드 수정 시 AGENTS.md 등의 프로젝트 규칙을 위반했는지 검사하고 수정을 유도하는 도구<br>**판단** 각 프로젝트 규칙과 코드 diff를 보고, 해당 수정 사항이 규칙을 위반했는지 여부를 규칙별 확률(noul)로 판별<br>**포인트** 대화 기록 없이 diff와 규칙만 Jev로 전송해 빠른 레이턴시(약 300ms)와 저렴한 비용으로 검사하며 린터가 잡지 못하는 규칙을 감지 | 🆕 | 2026-09-25 |
| [sutro-sh/jev-align](https://github.com/sutro-sh/jev-align) | 297 | 23 | **무엇** Jev와 GEPA를 사용해 불확실한 데이터에 대한 인간 피드백을 수집하고 AI Functions를 최적화하는 CLI 도구<br>**판단** 이진 분류, 다중 클래스, 다중 라벨, 루브릭 기반 점수 평가 등 사용자가 정의한 질문을 데이터셋에 적용해 판단<br>**포인트** 불확실성 높은 데이터를 능동 학습으로 골라내 라벨링을 유도하고, GEPA를 통해 프롬프트 정의를 지속 개선하며 공개 레지스트리에 공유할 수 있음 | 🆕 | 2026-09-20 |
| [lakeday-org/perch](https://github.com/lakeday-org/perch) | 284 | 18 | **무엇** 개발자가 자연어 규칙 기반으로 코드 결함과 스타일 위반을 검사하기 위해 사용하는 시맨틱 코드 린터 CLI 도구다.<br>**판단** 주어진 코드 단위가 YAML에 정의된 자연어 규칙(ensure)을 준수하는지, 또는 결함(defect)이 존재하는지 확률로 판단한다.<br>**포인트** 자연어로 린트 규칙을 작성할 수 있으며, Tree-sitter 기반 구조 탐색과 Jev의 확률적 판단을 결합해 이슈 심각도를 매긴다. | 🆕 | 2026-09-27 |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 230 | 20 | **무엇** AI 코딩 에이전트가 코드 품질을 지속적으로 점검하도록 지원하는 로컬 기반 MCP 서버 플러그인이다.<br>**판단** 코드 diff와 컨텍스트를 바탕으로 정확성·복잡도·변경용이성·모듈성·테스트·보안 등의 품질 지표를 Score·Choice·Noul로 평가한다.<br>**포인트** 긴 서술형 리뷰 텍스트 대신 정형화된 점수와 신뢰도 시그널을 반환하며, 원인 진단과 코드 수정은 메인 에이전트에게 맡긴다. | 🆕 | 2026-09-17 |
| [supercorp-ai/supercov](https://github.com/supercorp-ai/supercov) | 132 | 5 | **무엇** 코딩 에이전트와 개발자가 코드 커버리지, 품질 점수, 보안 취약점을 측정하고 개선할 수 있게 돕는 CLI 도구다.<br>**판단** 각 소스 파일에 대해 복잡도 및 코드 냄새(long_method, deep_nesting 등)와 인젝션·시크릿 노출 등 12가지 보안 위험 여부를 예/아니오 형태로 판단시킨다.<br>**포인트** Jev 모델 질의 결과를 파일 내용 기반으로 캐싱하며, 커버리지 측정은 외부 계정이나 설정 없이 기존 테스트 러너 출력을 감싸 동작하도록 구현되었다. | 🆕 | 2026-09-27 |
| [luantak/is-malicious](https://github.com/luantak/is-malicious) | 29 | 4 | **무엇** 개발자가 낯선 코드를 실행하거나 PR을 병합하기 전에 악의적인 동작이나 보안 위협이 있는지 검사하는 CLI 도구다.<br>**판단** 소스코드와 설정 파일에 데이터 탈취, 비정상적 네트워크 활동, 권한 남용, 난독화 등 악성 행위가 존재하는지 여부와 확률을 판단시킨다.<br>**포인트** 바이너리나 실행 프로세스는 점검하지 않고 400KB 이하 텍스트 파일만 분석하며, GitHub Actions 및 Agent skill 연동을 지원한다. | ✅ 🆕 | 2026-09-23 |
| [AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo) | 79 | 8 | **무엇** 개발자와 코딩 에이전트가 웹사이트의 SEO 및 GEO 준비 상태를 검사하고 크롤링할 수 있도록 돕는 Rust 기반 오픈소스 CLI이자 MCP 도구다.<br>**판단** README 본문에서 Jev의 Choice, Score, Noul 기본형으로 웹페이지를 평가하고 신뢰도를 제어한다고 언급하나 구체적인 질문 내용은 설명되어 있지 않다.<br>**포인트** 58가지 규칙 기반 감사, GEO 인용 점수 측정 등을 단일 바이너리로 제공하며, 15개 도구를 갖춘 MCP 서버 형태로 에이전트와 연동할 수 있다. | 🆕 | 2026-09-26 |
| [sharziki/semdecide](https://github.com/sharziki/semdecide) | 67 | 9 | **무엇** Unix 파이프라인과 CI 환경에서 텍스트 및 JSONL 데이터를 대상으로 시맨틱 판단을 수행하는 CLI 도구<br>**판단** 자연어 명제 참/거짓 판단(is), 다중 보기 라우팅(choose), 루브릭 기반 단계별 평가(score), 안전성 판별(guard) 등을 질의<br>**포인트** grep/jq처럼 파이프라인 입출력을 지원하며, 모호한 결과(종료 코드 3)나 API 오류(종료 코드 4)를 분리해 안정적인 프로세스 종료 코드를 제공함 | 🆕 | 2026-09-16 |
| [achimala/jev-paint](https://github.com/achimala/jev-paint) | 60 | 6 | 요약 대기 · Use Jev to make art! | 🆕 | 2026-09-19 |
| [raihankhan-rk/diffjury](https://github.com/raihankhan-rk/diffjury) | 8 | 1 | **무엇** 공개 깃허브 풀 리퀘스트 URL을 입력받아 diff와 정보를 분석하고 병합 위험도 및 코드 리뷰 방향을 판정하는 웹 도구다.<br>**판단** PR의 병합 위험도·리뷰 깊이·설계나 보안 검토 필요 여부·병합 차단 여부·테스트 누락 및 최종 승인 여부(verdict)를 한 번의 호출로 묻는다.<br>**포인트** Next.js 15 기반 서버 API에서 @typesafe-ai/sdk를 호출하며, 대형 PR은 토큰 한도에 맞춰 diff를 로컬에서 잘라내 전송한다. | ✅ 🆕 | 2026-09-22 |
| [byalex33/changelog.earth](https://github.com/byalex33/changelog.earth) | 139 | 2 | 요약 대기 · Your planet. The release notes. An unofficial changelog for Earth, built from real reporting. | 🆕 | 2026-09-27 |
| [compozy/yoshi](https://github.com/compozy/yoshi) | 25 | 2 | **무엇** Claude Code와 Codex 사용자가 대화 기록의 불필요한 컨텍스트를 줄여 API 비용을 절감하도록 돕는 로컬 프록시 도구다.<br>**판단** 도구 입출력 등 대화 기록 구간마다 필수 사실이나 구속력 있는 사용자 제약이 유실될 확률이 있는지 판단시킨다.<br>**포인트** Anthropic·OpenAI 프로토콜을 그대로 중계하며, 요청 경로에서 최대 8개 구간을 동시 평가해 지연 시간이 늘어나는 한계가 있다. | 🆕 | 2026-09-18 |
| [lukstei/slop-grader](https://github.com/lukstei/slop-grader) | 30 | 2 | 요약 대기 · Jev-powered, rule-based grader for text files. Runs every rule against every line in parallel. No skimming, no missed lines. | 🆕 | 2026-09-24 |
| [valentynkit/jev-commit](https://github.com/valentynkit/jev-commit) | 13 | 0 | **무엇** 커밋 메시지와 스테이징된 git diff를 비교해 일치 여부와 잔여 디버그 코드 등을 검사하는 pre-commit 훅 도구다.<br>**판단** Jev 모델에 무의미한 커밋 메시지 여부, diff와의 모순, 디버그 코드 잔여, 언급되지 않은 작업, 비밀정보 포함 여부의 5가지 질문을 noul 확률값으로 요청한다.<br>**포인트** API 한 번의 호출로 5개 항목을 평가하며, 정규식 기반 비밀정보 검출 시에만 커밋을 차단하고 API 장애 시에는 항상 커밋을 허용(fail-open)하도록 설계되었다. | 🆕 | 2026-09-19 |
| [doeixd/jev-pref](https://github.com/doeixd/jev-pref) | 11 | 0 | **무엇** AGENTS.md나 CLAUDE.md의 프로젝트 규칙을 Jev 기반의 시맨틱 린터 규칙으로 변환해 코딩 에이전트의 코드 변경점을 검증하는 도구다.<br>**판단** 코드 diff가 가변 모듈 상태를 추가하는지, API 영향도 레이블(none·additive·behavioral·breaking)이 무엇인지 등 관찰 가능한 의미적 기준을 분류하도록 묻는다.<br>**포인트** 정적 분석 도구가 잡기 어려운 의미론적 규칙을 이항 확률(p(true))이나 고정 레이블 분류로 처리하고, 이를 코딩 에이전트의 워크플로에 피드백하도록 설계했다. | 🆕 | 2026-09-18 |
| [frostney/clean-code-review](https://github.com/frostney/clean-code-review) | 11 | 1 | **무엇** 깃허브 풀 리퀘스트나 코드 diff의 변경 파일을 Clean Code 원칙 기준으로 채점하고 리뷰를 생성하는 도구<br>**판단** 각 코드 파일에 대해 로버트 C. 마틴의 Clean Code 관련 질문 세트를 확률 및 점수(확률/점수 형태)로 판단<br>**포인트** Jev를 eve 에이전트 모델 어댑터로 연결해 병렬 평가하고, 해당 수치 결과를 바탕으로 Luna가 요약 리뷰를 작성 | 🆕 | 2026-09-23 |
| [cline/plugins](https://github.com/cline/plugins) | 31 | 13 | **무엇** Cline CLI 사용자가 추가 도구와 훅, 스킬을 확장할 수 있도록 제공되는 공식 큐레이션 플러그인 모음집이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** jev-browser를 통한 브라우저 작업 실행을 비롯해 서브에이전트 오케스트레이션, 파일 접근 제어 훅 등이 디렉터리별로 모듈화되어 있다. | 🆕 | 2026-09-18 |
| [virolea/lintus](https://github.com/virolea/lintus) | 13 | 0 | 요약 대기 · A linter whose rules are written in plain language. | 🆕 | 2026-09-23 |
| [Kelbie/hunch](https://github.com/Kelbie/hunch) | 5 | 2 | **무엇** 자연어 질문과 규칙으로 코드베이스와 diff를 검색하고 리뷰하는 개발 도구다.<br>**판단** 코드 청크가 주어진 자연어 질문이나 규칙 조건에 부합하는지 평가하여 관련도 점수(score)를 산출한다.<br>**포인트** 정확한 키워드 대신 의미 기반 검색을 지원하며 Jev 외에도 로컬 모델인 SemIf를 프로바이더로 교체해 쓸 수 있다. | 🆕 | 2026-09-23 |
| [nozomi-koborinai/jev-spec](https://github.com/nozomi-koborinai/jev-spec) | 9 | 1 | 요약 대기 · ⚡ Catch spec drift on every commit: check your code against your Markdown specs with TypeSafe AI's Jev model. | 🆕 | 2026-09-21 |
| [metalbear-co/jev-auto-approve](https://github.com/metalbear-co/jev-auto-approve) | 8 | 2 | 요약 대기 · Jev PR auto approver | 🆕 | 2026-09-27 |
| [cephalization/jev-triage](https://github.com/cephalization/jev-triage) | 3 | 0 | **무엇** 오픈소스 GitHub 리포지토리의 이슈와 PR을 동기화하여 분류하고 처리 방향을 협업 검토하는 멀티플레이어 트라이아지 대시보드다.<br>**판단** 이슈 유형, 심각도, 시급성, 중복 여부, 그리고 메인테이너가 취해야 할 다음 조치(질문, 답변, 조사, 결정 필요, 등록, 종료 등)를 고정된 질의로 판단시킨다.<br>**포인트** GitHub에 직접 쓰지 않는 읽기 전용 대시보드이며, 사람의 수정 내역을 보존해 추후 모델 실행에 반영하고 Rocicorp Zero로 상태를 실시간 복제한다. | 🆕 | 2026-09-26 |
| [baronunread/leanest](https://github.com/baronunread/leanest) | 5 | 0 | 요약 대기 · Local-first test selector using Jev judgments to determine which tests are affected by a code change | 🆕 | 2026-09-27 |
| [gemanor/jev-code-review-benchmark](https://github.com/gemanor/jev-code-review-benchmark) | 5 | 0 | 요약 대기 · Comparing Jev, Gemini Flash, and Claude Fable on Python code review rules: cost, speed, accuracy, and consistency. Includes results, charts, and reproducible experiments. | 🆕 | 2026-09-17 |
| [mblode/taste-lint](https://github.com/mblode/taste-lint) | 5 | 1 | 요약 대기 · Catch AI slop before you ship. | 🆕 | 2026-09-27 |
| [sametcn99/my-stars-atlas](https://github.com/sametcn99/my-stars-atlas) | 5 | 1 | 요약 대기 · A generated catalog of starred GitHub repositories, grouped into stable categories. | 🆕 | 2026-09-19 |
| [hosseintoussi/jev-flappy-bird](https://github.com/hosseintoussi/jev-flappy-bird) | 4 | 0 | 요약 대기 · A live demo of TypeSafe's Jev model playing Flappy Bird, one flap-or-wait decision at a time. | 🆕 | 2026-09-20 |
| [DhanushNehru/jev-sec-audit](https://github.com/DhanushNehru/jev-sec-audit) | 3 | 1 | 요약 대기 · Lightning-fast AI supply chain security auditor using Jev (System 1 models). Catch typosquatting and malicious scripts in milliseconds. | 🆕 | 2026-09-24 |
| [opaielsheikh/typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard) | 3 | 0 | 요약 대기 · Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model) | 🆕 | 2026-09-17 |
| [AlexBabescu/ActionJev](https://github.com/AlexBabescu/ActionJev) | 2 | 0 | 요약 대기 · Structured code review for GitHub and Gitea Actions, powered by TypeSafe Jev and written in Rust. | 🆕 | 2026-09-17 |
| [emreozyoruk/hush](https://github.com/emreozyoruk/hush) | 2 | 1 | 요약 대기 · Issue triage that stays quiet when it isn't sure. Calibrated labels, spam and duplicate detection — with abstention. | 🆕 | 2026-09-20 |
| [guilhem/jev-ci-selector](https://github.com/guilhem/jev-ci-selector) | 2 | 0 | 요약 대기 · Conservative CI task selection for GitHub Actions with Jev, a pure policy engine, and shadow mode by default. | 🆕 | 2026-09-27 |
| [holasoymalva/jev-test-impact](https://github.com/holasoymalva/jev-test-impact) | 2 | 0 | 요약 대기 · Ultra-fast test impact analysis powered by Jev. Run only the tests that matter. | 🆕 | 2026-09-25 |
| [youkiti/tiab-review-plugin](https://github.com/youkiti/tiab-review-plugin) | 2 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [Hexdigest123/typesafe-comment](https://github.com/Hexdigest123/typesafe-comment) | 1 | 0 | 요약 대기 · Small Python package that uses typesafe.ai to evaluate code comments on certain heuristics | 🆕 | 2026-09-17 |
| [khaledsAlshibani/jev-ci-classifier](https://github.com/khaledsAlshibani/jev-ci-classifier) | 1 | 0 | 요약 대기 · CI example using Jev to classify failed PR checks and return structured decisions with probabilities. | 🆕 | 2026-09-20 |
| [Ripwords/agent-gate-loop](https://github.com/Ripwords/agent-gate-loop) | 1 | 0 | 요약 대기 · Reusable GitHub Action: agent fix loop gated by checks, an AI reviewer, and TypeSafe Jev | 🆕 | 2026-09-17 |
| [thejoeejoee/git-judge-commits](https://github.com/thejoeejoee/git-judge-commits) | 1 | 0 | 요약 대기 · ⚖️  Judge git commits with Jev: is it breaking, does it deserve attention, and does its message tell the truth? | 🆕 | 2026-09-20 |
| [Thestral12/pr-sieve](https://github.com/Thestral12/pr-sieve) | 1 | 0 | 요약 대기 · Semantic PR gate: .jev.yml rules as TypeSafe Jev questions. Not a review bot. | 🆕 | 2026-09-18 |
| [andesdevroot/rasante](https://github.com/andesdevroot/rasante) | 0 | 0 | 요약 대기 · Motor determinista de normas urbanisticas chilenas (OGUC + PRC) para revisores independientes y DOM. El LLM clasifica y redacta; nunca calcula ni dictamina. | 🆕 | 2026-09-27 |
| [criguex/jev-test-impact](https://github.com/criguex/jev-test-impact) | 0 | 0 | 요약 대기 · Run only the tests your change touched: import graph + ownership rules first, Jev decides the ambiguous rest, fail-safe to the full suite. Replay benchmark with real ground truth. | 🆕 | 2026-09-26 |
| [diffpal/lintpal-demo](https://github.com/diffpal/lintpal-demo) | 0 | 0 | 요약 대기 · Demo repository for LintPal: PR review checks and inline findings on committed code | 🆕 | 2026-09-25 |
| [JevForge/jev-pr-profiler](https://github.com/JevForge/jev-pr-profiler) | 0 | 0 | 요약 대기 · Evaluate pull request risk with Jev and expose review depth plus recommended checks to CI. | 🆕 | 2026-09-24 |
| [meetr1912/jev-arena](https://github.com/meetr1912/jev-arena) | 0 | 0 | 요약 대기 · A calibration arena for TypeSafe Jev: reliability, Brier/ECE, and confidence-gated risk-coverage on analytically-known random worlds. | 🆕 | 2026-09-19 |
| [Neoo-Blue/jev-gate](https://github.com/Neoo-Blue/jev-gate) | 0 | 0 | 요약 대기 · Claude Code plugin: Jev (TypeSafe) checks Claude's plan against your request before it builds, and its final summary before it stops; gaps go back to Claude until Jev passes it. | 🆕 | 2026-09-26 |
| [stefafafan/setup-jev](https://github.com/stefafafan/setup-jev) | 0 | 0 | 요약 대기 · Unofficial GitHub Action that installs stefafafan/jev | 🆕 | 2026-09-26 |
| [sumant1122/jevci](https://github.com/sumant1122/jevci) | 0 | 0 | 요약 대기 · Sub-second code diff, commit, and doc quality gate powered by TypeSafe AI Jev SystemOne | 🆕 | 2026-09-26 |
| [yamadashy/jev-labeler-action](https://github.com/yamadashy/jev-labeler-action) | 0 | 0 | 요약 대기 · Zero-config AI issue labeling with TypeSafe's Jev. No generated text. Unofficial. | 🆕 | 2026-09-23 |
| [yottayoshida/jevfuzz](https://github.com/yottayoshida/jevfuzz) | 0 | 0 | 요약 대기 · Metamorphic stability testing for Jev decision functions | 🆕 | 2026-09-24 |
| [rolki-png/JevArena](https://github.com/rolki-png/JevArena) | 1 | 0 | 요약 대기 · Two Jev agents duel at Snake via Vercel AI Gateway. | 🆕 | 2026-09-18 |

### 1jehuang/jcode

<details><summary>README 발췌</summary>

The most RAM efficient harness The most intelligent harness

</details>

### Effect-TS/effect

<details><summary>README 발췌</summary>

Effect is a library for building robust, maintainable, type-safe, and production grade applications in TypeScript. It helps you handle the hard problems at scale: typed errors, dependency injection, structured concurrency, scheduling, tracing, and unified schema validation.

</details>

### kunchenguid/no-mistakes

<details><summary>README 발췌</summary>

no-mistakes puts a local git proxy in front of your real remote. Push to no-mistakes instead of origin, and it spins up a disposable worktree, runs an AI-driven validation pipeline, forwards the branch to the configured push target only after every check passes, and opens a clean PR automatically.

</details>

### typesafe-ai/skills

<details><summary>README 발췌</summary>

Agent skills for building with TypeSafe: typed decisions and probabilities from System One models.

</details>

### devagrawal09/jev-review

<details><summary>README 발췌</summary>

A small code-review workflow built with TypeSafe Jev. It can review a Git diff or scan a complete codebase, follows the strongest structured signals through focused model calls, and presents the result in a quiet local dashboard.

</details>

### samchon/typia

<details><summary>README 발췌</summary>

typia is a transformer library supporting below features:

</details>

### vercel-labs/ai-cli

<details><summary>README 발췌</summary>

The Vercel AI SDK in your terminal. Generate text, images, video, and audio, and evaluate typed questions with composable commands, stdin support, and predictable outputs. Uses AI Gateway for unified access to hundreds of models.

</details>

### coldteadotai/abide

<details><summary>README 발췌</summary>

Then start claude, codex or opencode as usual. That is the whole setup.

</details>

### sutro-sh/jev-align

<details><summary>README 발췌</summary>

jev-align is an experimental CLI from Sutro for building AI Functions with TypeSafe's Jev.

</details>

### lakeday-org/perch

<details><summary>README 발췌</summary>

Semantic code linting with Jev.

</details>

### NiazMorshed2007/jev-review

<details><summary>README 발췌</summary>

Continuous software-quality review for AI coding agents, powered by Jev.

</details>

### supercorp-ai/supercov

<details><summary>README 발췌</summary>

Coverage, security and code quality for coding agents

</details>

### luantak/is-malicious

<details><summary>README 발췌</summary>

Scan a codebase for hidden, deceptive, or data-stealing behavior with TypeSafe Jev. The CLI sends source, configuration, build, and CI files to Jev for review, then points you to suspicious files and lines.

</details>

### AkashPriyadarshii/jev-seo

<details><summary>README 발췌</summary>

title: "jev-seo: Free Rust SEO &amp; GEO CLI + MCP for Devs and Agents" description: "Free Rust SEO and GEO toolkit powered by TypeSafe Jev: 58-rule audits, site crawls, AI citation checks, rank drift, CI gates, 15-tool MCP. Zero cost." canonical: "https://github.com/AkashPriyadarshii/jev-seo" image: "h

</details>

### sharziki/semdecide

<details><summary>README 발췌</summary>

Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev.

</details>

### achimala/jev-paint

<details><summary>README 발췌</summary>

A small local app that turns Jev's pixel probability distributions into paintings.

</details>

### raihankhan-rk/diffjury

<details><summary>README 발췌</summary>

Jev decides if this PR is risky or not.

</details>

### byalex33/changelog.earth

<details><summary>README 발췌</summary>

New species. Balance changes. Unresolved bugs. A few good things on Earth, one patch at a time.

</details>

### compozy/yoshi

<details><summary>README 발췌</summary>

A local context-pruning proxy for Claude Code and Codex.

</details>

### lukstei/slop-grader

<details><summary>README 발췌</summary>

Rule-based slop grader for text files, powered by Jev. Runs every rule against every line in parallel. No skimming, no missed lines.

</details>

### valentynkit/jev-commit

<details><summary>README 발췌</summary>

Your agent writes the code, then writes the commit message about the code. Nothing checks that the two agree. This does, in one call to Jev, before the commit lands.

</details>

### doeixd/jev-pref

<details><summary>README 발췌</summary>

Turn your preferences from AGENTS.md into a fast, Jev-powered AI linter.

</details>

### frostney/clean-code-review

<details><summary>README 발췌</summary>

Point it at a public GitHub pull request, a diff or a file. Jev, TypeSafe's evaluation model, answers a question set drawn from Robert C. Martin's Clean Code for every code file in the change, and Luna writes the review from those answers. It runs on eve and deploys as one Next.js project.

</details>

### cline/plugins

<details><summary>README 발췌</summary>

Official curated plugins for Cline. This repository is the default collection behind Cline CLI slug installs, e.g.:

</details>

### virolea/lintus

<details><summary>README 발췌</summary>

A linter whose rules are written in plain language.

</details>

### Kelbie/hunch

<details><summary>README 발췌</summary>

Ask a plain-English question across a repository without guessing which words the code uses. Hunch sends each in-scope chunk to Jev and returns scored source locations for a person or coding agent to investigate. It also runs recurring review rules on diffs.

</details>

### nozomi-koborinai/jev-spec

<details><summary>README 발췌</summary>

Catch spec drift on every commit. jev-spec checks your code against the requirements in your Markdown specification and fails the build when they drift apart. It asks TypeSafe AI's Jev model one focused question per requirement, gets a probability back, and compares it with a threshold you set. That

</details>

### metalbear-co/jev-auto-approve

<details><summary>README 발췌</summary>

A GitHub Action that asks Jev whether a pull request needs a human reviewer, and approves it when the answer is confidently no.

</details>

### cephalization/jev-triage

<details><summary>README 발췌</summary>

A multiplayer triage dashboard for public GitHub repositories. Issues and pull requests sync into Postgres, Rocicorp Zero replicates them live to every browser, and a TypeSafe System One model answers a fixed set of typed questions about each one: what kind of issue it is, how severe, how urgent, wh

</details>

### baronunread/leanest

<details><summary>README 발췌</summary>

&gt; Leanest does not predict which tests will fail. It determines which tests are safe enough not to run.

</details>

### gemanor/jev-code-review-benchmark

<details><summary>README 발췌</summary>

Jev takes context and questions, then returns structured answers. TypeSafe calls it a System One model. This repo tests a practical use: give it Python code and four rules, and ask whether the code follows each rule.

</details>

### mblode/taste-lint

<details><summary>README 발췌</summary>

Catch AI slop before you ship.

</details>

### sametcn99/my-stars-atlas

<details><summary>README 발췌</summary>

A browsable catalog of my starred GitHub repositories, categorized end to end by a decision model. No keyword rules, no manual category assignments, no hand-tuned scores.

</details>

### hosseintoussi/jev-flappy-bird

<details><summary>README 발췌</summary>

A live demo of TypeSafe's Jev model playing Flappy Bird.

</details>

### DhanushNehru/jev-sec-audit

<details><summary>README 발췌</summary>

Catch supply-chain attacks, typosquatting, and malicious post-install scripts in milliseconds using System 1 AI.

</details>

### opaielsheikh/typesafe-migration-guard

<details><summary>README 발췌</summary>

&gt; "Built for production workflows, not just toy demos."

</details>

### AlexBabescu/ActionJev

<details><summary>README 발췌</summary>

Code review for GitHub Actions and Gitea Actions, written in Rust and powered by TypeSafe Jev.

</details>

### emreozyoruk/hush

<details><summary>README 발췌</summary>

Issue and pull request triage that stays quiet when it isn't sure.

</details>

### guilhem/jev-ci-selector

<details><summary>README 발췌</summary>

Run the checks your pull request needs.

</details>

### holasoymalva/jev-test-impact

<details><summary>README 발췌</summary>

&gt; Run only the tests that matter.

</details>

### youkiti/tiab-review-plugin

<details><summary>README 발췌</summary>

Chrome拡張機能 - Systematic Reviewのタイトル・抄録スクリーニングを効率化するツール

</details>

### Hexdigest123/typesafe-comment

<details><summary>README 발췌</summary>

Lint code comments with TypeSafe AI's System One model. Comments are scored on five heuristics (usefulness, readability, accuracy, redundancy, coverage); those below thresholds emit linter warnings and exit non-zero so pipelines block.

</details>

### khaledsAlshibani/jev-ci-classifier

<details><summary>README 발췌</summary>

This repo was created for an article Using Jev for Structured Decisions in Software Development , where I wanted to test Jev with a real technical example instead of only explaining how it works. The example uses Jev to classify failed PR checks and adds the result as extra diagnostic information wi

</details>

### Ripwords/agent-gate-loop

<details><summary>README 발췌</summary>

A GitHub Action that turns an issue into a pull request. An AI agent writes the change, and a gate checks it before a human sees it. The gate has four parts:

</details>

### thejoeejoee/git-judge-commits

<details><summary>README 발췌</summary>

Judge every commit in a range — and catch the ones whose message lies about the diff.

</details>

### Thestral12/pr-sieve

<details><summary>README 발췌</summary>

A GitHub Action that treats .jev.yml as a semantic linter for pull requests.

</details>

### andesdevroot/rasante

<details><summary>README 발췌</summary>

Copiloto open source para revisores independientes y Direcciones de Obras Municipales (DOM).

</details>

### criguex/jev-test-impact

<details><summary>README 발췌</summary>

Run only the tests your change touched, without betting your release on a guess.

</details>

### diffpal/lintpal-demo

<details><summary>README 발췌</summary>

This repository demonstrates LintPal on a small Go HTTP service. The default branch is a passing baseline. The canonical pull request intentionally introduces authorization and input-validation violations so LintPal can publish inline findings and a deterministic gate result.

</details>

### JevForge/jev-pr-profiler

<details><summary>README 발췌</summary>

Evaluate pull request complexity and blast radius using TypeSafe Jev as a typed decision layer inside GitHub Actions.

</details>

### meetr1912/jev-arena

<details><summary>README 발췌</summary>

A calibration arena for TypeSafe Jev: pose many questions about hidden stochastic processes whose exact probabilities are analytically known, collect Jev's native probability for every event in one fan-out request, and measure how honest those probabilities are (Brier, log loss, ECE, a reliability c

</details>

### Neoo-Blue/jev-gate

<details><summary>README 발췌</summary>

A Claude Code plugin that makes Claude build what you asked, all of it, with Jev as the referee.

</details>

### stefafafan/setup-jev

<details><summary>README 발췌</summary>

GitHub Action that installs a released stefafafan/jev binary and adds it to the PATH for later usage.

</details>

### sumant1122/jevci

<details><summary>README 발췌</summary>

&gt; Sub-second code diff, commit message, and documentation quality gate powered by TypeSafe AI Jev SystemOne.

</details>

### yamadashy/jev-labeler-action

<details><summary>README 발췌</summary>

Asks Jev one yes/no question per repository label, built from the description the label already has in GitHub (or from its name alone), and adds the labels that clear a threshold.

</details>

### yottayoshida/jevfuzz

<details><summary>README 발췌</summary>

Find the input that changes the decision. Shrink it. Keep it.

</details>

### rolki-png/JevArena

<details><summary>README 발췌</summary>

A spectator arena where two independent Jev Agents play Snake against each other.

</details>
