# 🧑‍💻 개발 도구·코드 리뷰 (71)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20168 | 2341 | **무엇** 개발자가 터미널 환경에서 여러 코딩 에이전트 세션을 실행할 수 있도록 RAM 효율성과 성능을 극대화한 러스트 기반 코딩 에이전트 하네스 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 로컬 임베딩 비활성화 시 단일 세션 27.8MB 수준의 낮은 메모리 점유율을 제공하며, TUI 내 세션 유지 업데이트 등 다중 세션 확장성에 집중했다. | 🆕 | 2026-09-27 |
| [Effect-TS/effect](https://github.com/Effect-TS/effect) | 16239 | 775 | **무엇** TypeScript 개발자가 타입 안전한 에러 처리, 의존성 주입, 구조적 동시성 등을 구현하는 데 사용하는 표준 라이브러리 모노레포다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 코어 로직뿐만 아니라 런타임 플랫폼 추상화, 각종 SQL 클라이언트, AI 제공자 연동 모듈을 모노레포 패키지로 함께 제공한다. | 🆕 | 2026-09-27 |
| [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) | 8656 | 925 | **무엇** 원격 리포지토리 푸시 전에 일회용 워크트리에서 AI 검증 파이프라인을 실행해 주는 로컬 Git 프록시 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 푸시 시점에 별도 워크트리에서 리뷰, 테스트, 린트를 수행하고 안전한 수정은 자동 적용하며 통과 시에만 PR을 연다. | 🆕 | 2026-09-27 |
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 2274 | 131 | **무엇** TypeSafe API 연동 코드를 생성할 수 있도록 Claude Code 등의 AI 에이전트에 추가하는 개발용 스킬 모음이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Claude Code 플러그인과 skills.sh 배포 방식을 지원하여 에이전트가 TypeSafe 워크플로를 설계하고 문서를 참조할 수 있게 한다. | 🆕 | 2026-09-12 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 625 | 41 | **무엇** Git diff나 전체 코드베이스를 단계별로 검토하고 결과를 로컬 대시보드에 시각화하는 코드 리뷰 워크플로 도구다.<br>**판단** 위험 매트릭스(Noul), 파일 프로파일(Choice/Score), 증거 선택 및 메커니즘 분류(Choice), 심각도(Score), 리뷰어 라우팅(Choice)을 판단시킨다.<br>**포인트** 오케스트레이션과 임계값 정책은 코드로 관리하며, Jev를 단계별 모델 판단에만 제한적으로 사용하고 단방향 계층 아키텍처를 강제한다. | ✅ 🆕 | 2026-09-17 |
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
| [raihankhan-rk/diffjury](https://github.com/raihankhan-rk/diffjury) | 8 | 1 | **무엇** 공개 깃허브 풀 리퀘스트 URL을 입력받아 diff와 정보를 분석하고 병합 위험도 및 코드 리뷰 방향을 판정하는 웹 도구다.<br>**판단** PR의 병합 위험도·리뷰 깊이·설계나 보안 검토 필요 여부·병합 차단 여부·테스트 누락 및 최종 승인 여부(verdict)를 한 번의 호출로 묻는다.<br>**포인트** Next.js 15 기반 서버 API에서 @typesafe-ai/sdk를 호출하며, 대형 PR은 토큰 한도에 맞춰 diff를 로컬에서 잘라내 전송한다. | ✅ 🆕 | 2026-09-22 |
| [compozy/yoshi](https://github.com/compozy/yoshi) | 25 | 2 | **무엇** Claude Code와 Codex 사용자가 대화 기록의 불필요한 컨텍스트를 줄여 API 비용을 절감하도록 돕는 로컬 프록시 도구다.<br>**판단** 도구 입출력 등 대화 기록 구간마다 필수 사실이나 구속력 있는 사용자 제약이 유실될 확률이 있는지 판단시킨다.<br>**포인트** Anthropic·OpenAI 프로토콜을 그대로 중계하며, 요청 경로에서 최대 8개 구간을 동시 평가해 지연 시간이 늘어나는 한계가 있다. | 🆕 | 2026-09-18 |
| [Kelbie/hunch](https://github.com/Kelbie/hunch) | 5 | 2 | **무엇** 자연어 질문과 규칙으로 코드베이스와 diff를 검색하고 리뷰하는 개발 도구다.<br>**판단** 코드 청크가 주어진 자연어 질문이나 규칙 조건에 부합하는지 평가하여 관련도 점수(score)를 산출한다.<br>**포인트** 정확한 키워드 대신 의미 기반 검색을 지원하며 Jev 외에도 로컬 모델인 SemIf를 프로바이더로 교체해 쓸 수 있다. | ✅ 🆕 `choice` `noul` `score` | 2026-09-23 |
| [valentynkit/jev-commit](https://github.com/valentynkit/jev-commit) | 13 | 0 | **무엇** 커밋 메시지와 스테이징된 git diff를 비교해 일치 여부와 잔여 디버그 코드 등을 검사하는 pre-commit 훅 도구다.<br>**판단** Jev 모델에 무의미한 커밋 메시지 여부, diff와의 모순, 디버그 코드 잔여, 언급되지 않은 작업, 비밀정보 포함 여부의 5가지 질문을 noul 확률값으로 요청한다.<br>**포인트** API 한 번의 호출로 5개 항목을 평가하며, 정규식 기반 비밀정보 검출 시에만 커밋을 차단하고 API 장애 시에는 항상 커밋을 허용(fail-open)하도록 설계되었다. | 🆕 | 2026-09-19 |
| [doeixd/jev-pref](https://github.com/doeixd/jev-pref) | 11 | 0 | **무엇** AGENTS.md나 CLAUDE.md의 프로젝트 규칙을 Jev 기반의 시맨틱 린터 규칙으로 변환해 코딩 에이전트의 코드 변경점을 검증하는 도구다.<br>**판단** 코드 diff가 가변 모듈 상태를 추가하는지, API 영향도 레이블(none·additive·behavioral·breaking)이 무엇인지 등 관찰 가능한 의미적 기준을 분류하도록 묻는다.<br>**포인트** 정적 분석 도구가 잡기 어려운 의미론적 규칙을 이항 확률(p(true))이나 고정 레이블 분류로 처리하고, 이를 코딩 에이전트의 워크플로에 피드백하도록 설계했다. | 🆕 | 2026-09-18 |
| [frostney/clean-code-review](https://github.com/frostney/clean-code-review) | 11 | 1 | **무엇** 깃허브 풀 리퀘스트나 코드 diff의 변경 파일을 Clean Code 원칙 기준으로 채점하고 리뷰를 생성하는 도구<br>**판단** 각 코드 파일에 대해 로버트 C. 마틴의 Clean Code 관련 질문 세트를 확률 및 점수(확률/점수 형태)로 판단<br>**포인트** Jev를 eve 에이전트 모델 어댑터로 연결해 병렬 평가하고, 해당 수치 결과를 바탕으로 Luna가 요약 리뷰를 작성 | 🆕 | 2026-09-23 |
| [Eriskii/ErisLint](https://github.com/Eriskii/ErisLint) | 20 | 0 | 요약 대기 · Rust linter powered by configurable Jev rules, with a VS Code extension. | 🆕 | 2026-09-18 |
| [cline/plugins](https://github.com/cline/plugins) | 31 | 13 | **무엇** Cline CLI 사용자가 추가 도구와 훅, 스킬을 확장할 수 있도록 제공되는 공식 큐레이션 플러그인 모음집이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** jev-browser를 통한 브라우저 작업 실행을 비롯해 서브에이전트 오케스트레이션, 파일 접근 제어 훅 등이 디렉터리별로 모듈화되어 있다. | 🆕 | 2026-09-18 |
| [tyler-dot-earth/patdown](https://github.com/tyler-dot-earth/patdown) | 15 | 2 | 요약 대기 · Block, steer, and "fuzzy lint" with Jev to make agents follow your rules and conventions. CLI, github action, pi package, claude extension, and more. Built with Effect + TypeScript. | 🆕 | 2026-09-24 |
| [virolea/lintus](https://github.com/virolea/lintus) | 13 | 0 | 요약 대기 · A linter whose rules are written in plain language. | 🆕 | 2026-09-23 |
| [iamtoomas/JevLint](https://github.com/iamtoomas/JevLint) | 12 | 0 | 요약 대기 · Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin. | 🆕 | 2026-09-20 |
| [nozomi-koborinai/jev-spec](https://github.com/nozomi-koborinai/jev-spec) | 9 | 1 | 요약 대기 · ⚡ Catch spec drift on every commit: check your code against your Markdown specs with TypeSafe AI's Jev model. | 🆕 | 2026-09-21 |
| [endomorphosis/JevOps](https://github.com/endomorphosis/JevOps) | 8 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [metalbear-co/jev-auto-approve](https://github.com/metalbear-co/jev-auto-approve) | 8 | 2 | 요약 대기 · Jev PR auto approver | 🆕 | 2026-09-27 |
| [cephalization/jev-triage](https://github.com/cephalization/jev-triage) | 4 | 0 | **무엇** 오픈소스 GitHub 리포지토리의 이슈와 PR을 동기화하여 분류하고 처리 방향을 협업 검토하는 멀티플레이어 트라이아지 대시보드다.<br>**판단** 이슈 유형, 심각도, 시급성, 중복 여부, 그리고 메인테이너가 취해야 할 다음 조치(질문, 답변, 조사, 결정 필요, 등록, 종료 등)를 고정된 질의로 판단시킨다.<br>**포인트** GitHub에 직접 쓰지 않는 읽기 전용 대시보드이며, 사람의 수정 내역을 보존해 추후 모델 실행에 반영하고 Rocicorp Zero로 상태를 실시간 복제한다. | 🆕 | 2026-09-26 |
| [mblode/taste-lint](https://github.com/mblode/taste-lint) | 5 | 1 | 요약 대기 · Catch AI slop before you ship. | 🆕 | 2026-09-27 |
| [AlexBabescu/ActionJev](https://github.com/AlexBabescu/ActionJev) | 2 | 0 | 요약 대기 · Structured code review for GitHub and Gitea Actions, powered by TypeSafe Jev and written in Rust. | 🆕 | 2026-09-17 |
| [guilhem/jev-ci-selector](https://github.com/guilhem/jev-ci-selector) | 2 | 0 | 요약 대기 · Conservative CI task selection for GitHub Actions with Jev, a pure policy engine, and shadow mode by default. | 🆕 | 2026-09-27 |
| [juanegido/jev-pr-judge](https://github.com/juanegido/jev-pr-judge) | 2 | 0 | 요약 대기 · Typed verdicts on pull requests with TypeSafe System One (Jev): one parallel call, policy in code, usable as a GitHub Action | 🆕 | 2026-09-17 |
| [Bnymn1306/jev-github-quality-gate](https://github.com/Bnymn1306/jev-github-quality-gate) | 1 | 0 | 요약 대기 · A Jev-powered quality gate for GitHub issues, pull requests, and commits. | 🆕 | 2026-09-20 |
| [groktopus/codereview](https://github.com/groktopus/codereview) | 1 | 0 | 요약 대기 · Deterministic, bounded AI code review harness with CLI and GitHub Actions integration | 🆕 | 2026-09-27 |
| [phuthuycoding/jev-audit](https://github.com/phuthuycoding/jev-audit) | 1 | 0 | 요약 대기 · AI-powered pre-commit auditor backed by TypeSafe System One (Jev) — blocks secrets, vulns &amp; low-quality code in ~300ms. 79-case test corpus at 100% accuracy. | 🆕 | 2026-09-18 |
| [Ripwords/agent-gate-loop](https://github.com/Ripwords/agent-gate-loop) | 1 | 0 | 요약 대기 · Reusable GitHub Action: agent fix loop gated by checks, an AI reviewer, and TypeSafe Jev | 🆕 | 2026-09-17 |
| [sathariels/jevtriage](https://github.com/sathariels/jevtriage) | 1 | 0 | 요약 대기 · GitHub Action + CLI: triage PRs with TypeSafe Jev (ready / needs review / risky) with confidence gates and jevcheck-friendly contracts. | 🆕 | 2026-09-21 |
| [silicon-sbt/pkmn-brain](https://github.com/silicon-sbt/pkmn-brain) | 1 | 0 | 요약 대기 · 宝可梦外置大脑：Showdown 实时决策面板（代码算事实、小模型做判断）+ 决策日志与自检 | 🆕 | 2026-09-27 |
| [Thestral12/pr-sieve](https://github.com/Thestral12/pr-sieve) | 1 | 0 | 요약 대기 · Semantic PR gate: .jev.yml rules as TypeSafe Jev questions. Not a review bot. | 🆕 | 2026-09-18 |
| [turenlabs/lisa](https://github.com/turenlabs/lisa) | 1 | 0 | 요약 대기 · LISA: Leak, Injection &amp; Simplicity Auditor. GitHub Action that uses TypeSafe Jev (a system one model) to flag secrets, security vulnerabilities, and unneeded complexity in pull requests | 🆕 | 2026-09-25 |
| [tyler-james-bridges/qai-cli](https://github.com/tyler-james-bridges/qai-cli) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [BestNathan/system-one-code-explore](https://github.com/BestNathan/system-one-code-explore) | 0 | 0 | **무엇** 제약된 하네스 안에서 System One 모델을 활용해 엔지니어링 작업에 필요한 파일과 소스 코드 증거 범위를 빠르게 탐색·특정하는 연구용 런타임이다.<br>**판단** 각 파일 메타데이터가 주어진 작업과 관련 있는지 여부를 Noul(예/아니오 확률)로 평가하고 점수화하여 탐색 대상 파일을 선택하도록 판단시킨다.<br>**포인트** 무제한 ReAct 루프 대신 하네스가 상태와 행동 공간을 단계적으로 공개하고 제어하며, 디렉터리 기반 가지치기를 배제하고 전수 메타데이터 평가 방식을 채택했다. | 🆕 | 2026-09-27 |
| [NourEldinShobier/claude-tuning](https://github.com/NourEldinShobier/claude-tuning) | 0 | 0 | **무엇** Claude Code의 토큰 소비를 줄이고 응답 속도를 개선하기 위해 셸 압축, 검색 인덱스, 모델 라우팅 도구를 일괄 설치·구성하는 튜닝 플러그인이다.<br>**판단** 사용자 요청에 적합한 Claude 스킬 추천, 고난도 코딩 서브에이전트 작업의 Opus 모델 라우팅 여부, 컴팩션 시 원문 보존할 메시지 선별 및 검색 결과 순위를 판단시킨다.<br>**포인트** Bun 런타임 기반으로 rtk, stash 등 여러 최적화 도구를 묶어 제공하며, TypeSafe API 키가 없어도 기본 기능으로 폴백되어 작동한다. | 🆕 | 2026-09-25 |
| [PedroAlvarado/jev-scout](https://github.com/PedroAlvarado/jev-scout) | 0 | 0 | **무엇** 코드베이스를 분석하여 TypeSafe Jev 결정 모델을 적용할 최적의 위치와 설계를 찾아주는 에이전트 스킬<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Jev API 키나 코드 수정 없이 정적 스캐너와 git 기록 분석만으로 대체 및 확장 후보를 발굴하고 shadow-mode 실험을 설계함 | 🆕 | 2026-09-25 |
| [WesleySmits/codex-triage](https://github.com/WesleySmits/codex-triage) | 0 | 0 | **무엇** 로컬 Codex 작업 및 자동화 실행을 조회하고 아카이브 처리를 검토할 수 있는 TypeScript 기반 로컬 대시보드 도구다.<br>**판단** 선택한 Codex 작업 텍스트를 바탕으로 작업을 유지(Keep), 재검토(Review), 아카이브(Archive) 중 어떤 조치를 취할지 판단한다.<br>**포인트** 자동 아카이브를 방지하고 사용자 확인 절차를 두었으며 외부 API 전송 전 식별자 제거 필터링 및 로컬 파일 캐싱을 적용했다. | 🆕 | 2026-09-26 |
| [actions-marketplace-validations/sumant1122_jevci](https://github.com/actions-marketplace-validations/sumant1122_jevci) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [alam0rt/mergegate](https://github.com/alam0rt/mergegate) | 0 | 0 | 요약 대기 · Decide whether a PR is safe to auto-merge: path rules first, TypeSafe Jev for the rest | 🆕 | 2026-09-27 |
| [andesdevroot/rasante](https://github.com/andesdevroot/rasante) | 0 | 0 | 요약 대기 · Motor determinista de normas urbanisticas chilenas (OGUC + PRC) para revisores independientes y DOM. El LLM clasifica y redacta; nunca calcula ni dictamina. | 🆕 | 2026-09-27 |
| [autotelic/joggle](https://github.com/autotelic/joggle) | 0 | 0 | 요약 대기 · Cross-file judgements for a TypeScript codebase, enforced like a linter. | 🆕 | 2026-09-27 |
| [autotelic/joggle-action](https://github.com/autotelic/joggle-action) | 0 | 0 | 요약 대기 · Run joggle in GitHub Actions: cross-file judgements for a TypeScript codebase, reported as annotations. | 🆕 | 2026-09-27 |
| [diffpal/lintpal](https://github.com/diffpal/lintpal) | 0 | 0 | 요약 대기 · Turn plain-English engineering rules into pull-request checks | 🆕 | 2026-09-26 |
| [diffpal/lintpal-demo](https://github.com/diffpal/lintpal-demo) | 0 | 0 | 요약 대기 · Demo repository for LintPal: PR review checks and inline findings on committed code | 🆕 | 2026-09-25 |
| [gbesse/jev-marianne](https://github.com/gbesse/jev-marianne) | 0 | 0 | 요약 대기 · Version political commitments and detect how sourced promises change over time. | 🆕 | 2026-09-21 |
| [JevForge/jev-pr-profiler](https://github.com/JevForge/jev-pr-profiler) | 0 | 0 | 요약 대기 · Evaluate pull request risk with Jev and expose review depth plus recommended checks to CI. | 🆕 | 2026-09-24 |
| [JevForge/jev-reviewer-navigator](https://github.com/JevForge/jev-reviewer-navigator) | 0 | 0 | 요약 대기 · Suggest PR reviewers from CODEOWNERS, history, paths, labels, and teams. Jev decides; assignment stays explicit. | 🆕 | 2026-09-24 |
| [jonloucks/contracts-ts](https://github.com/jonloucks/contracts-ts) | 0 | 0 | 요약 대기 · Typescript Dependency Contracts for dependency inversion | 🆕 | 2026-09-25 |
| [konegipei/fast-bousai-translator](https://github.com/konegipei/fast-bousai-translator) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [mattyv/skope](https://github.com/mattyv/skope) | 0 | 0 | 요약 대기 · skill op | 🆕 | 2026-09-27 |
| [midhunkrishna-ops/terrajev](https://github.com/midhunkrishna-ops/terrajev) | 0 | 0 | 요약 대기 · terraform-jev: AI-powered Terraform plan analysis using TypeSafe's System One model Automatically classify, categorize, and extract structured insights from Terraform plans. Fast, cost-efficient risk detection for CI/CD pipelines. | 🆕 | 2026-09-26 |
| [neozhu/jev-audit](https://github.com/neozhu/jev-audit) | 0 | 0 | 요약 대기 · AI-powered contract comparison with Jev atomic evaluations—spot substantive changes, filter OCR noise, and generate reviewable audit reports. | 🆕 | 2026-09-25 |
| [schalkneethling/jev-lint](https://github.com/schalkneethling/jev-lint) | 0 | 0 | 요약 대기 · An experiment with semantic code linting using Jev from TypeSafe AI | 🆕 | 2026-09-21 |
| [Sixeight/karu](https://github.com/Sixeight/karu) | 0 | 0 | 요약 대기 · Clean up local Git branches and worktrees after the work is done. | 🆕 | 2026-09-27 |
| [sshariqali/jev-abstentionbench](https://github.com/sshariqali/jev-abstentionbench) | 0 | 0 | 요약 대기 · Meta's AbstentionBench run against Jev (TypeSafe). Cached responses committed, so the analysis reproduces offline. | 🆕 | 2026-09-20 |
| [stefafafan/setup-jev](https://github.com/stefafafan/setup-jev) | 0 | 0 | 요약 대기 · Unofficial GitHub Action that installs stefafafan/jev | 🆕 | 2026-09-26 |
| [Stephane-Dedu/jev-tactics](https://github.com/Stephane-Dedu/jev-tactics) | 0 | 0 | 요약 대기 · Perception par vision et decision tactique confiee a Jev (TypeSafe AI) sur un combat isometrique au tour par tour. Recherche. | 🆕 | 2026-09-27 |
| [sumant1122/jevci](https://github.com/sumant1122/jevci) | 0 | 0 | 요약 대기 · Sub-second code diff, commit, and doc quality gate powered by TypeSafe AI Jev SystemOne | 🆕 | 2026-09-26 |
| [surbhit20/jev-on-yt](https://github.com/surbhit20/jev-on-yt) | 0 | 0 | 요약 대기 · Using jev to skip to relevant parts of the video | 🆕 | 2026-09-27 |
| [uasier/pi-auto](https://github.com/uasier/pi-auto) | 0 | 0 | 요약 대기 · 通过 Herdr 管理 Pi / Claude / Codex / Grok：空闲后自动发送下一轮任务 | 🆕 | 2026-09-26 |
| [yosit/dot-pi](https://github.com/yosit/dot-pi) | 0 | 0 | 요약 대기 · Pi coding-agent extensions: Claude-Code-style statusline, plus TypeSafe Jev guardrails — auto thinking level, verify-before-done gate, AskUserQuestion enforcer, retry-loop detector | 🆕 | 2026-09-25 |

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

### raihankhan-rk/diffjury

<details><summary>README 발췌</summary>

Jev decides if this PR is risky or not.

</details>

### compozy/yoshi

<details><summary>README 발췌</summary>

A local context-pruning proxy for Claude Code and Codex.

</details>

### Kelbie/hunch

<details><summary>README 발췌</summary>

Ask a plain-English question across a repository without guessing which words the code uses. Hunch sends each in-scope chunk to Jev and returns scored source locations for a person or coding agent to investigate. It also runs recurring review rules on diffs.

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

### Eriskii/ErisLint

<details><summary>README 발췌</summary>

ErisLint is a Rust linter for code-quality rules you define in JSON. Ask whether a function is needlessly complicated, a name is misleading, or a comment adds anything useful, then map Jev's answers to warnings or errors.

</details>

### cline/plugins

<details><summary>README 발췌</summary>

Official curated plugins for Cline. This repository is the default collection behind Cline CLI slug installs, e.g.:

</details>

### tyler-dot-earth/patdown

<details><summary>README 발췌</summary>

Standalone CLI that lints a tree against fuzzy rules in one markdown file. Wrap it as a hook, plugin, or extension.

</details>

### virolea/lintus

<details><summary>README 발췌</summary>

A linter whose rules are written in plain language.

</details>

### iamtoomas/JevLint

<details><summary>README 발췌</summary>

Slop happens. Don’t ship it.

</details>

### nozomi-koborinai/jev-spec

<details><summary>README 발췌</summary>

Catch spec drift on every commit. jev-spec checks your code against the requirements in your Markdown specification and fails the build when they drift apart. It asks TypeSafe AI's Jev model one focused question per requirement, gets a probability back, and compares it with a threshold you set. That

</details>

### endomorphosis/JevOps

<details><summary>README 발췌</summary>

TypeSafe / Jev kernel, split from Lean Refactor Arena and other papers.

</details>

### metalbear-co/jev-auto-approve

<details><summary>README 발췌</summary>

A GitHub Action that asks Jev whether a pull request needs a human reviewer, and approves it when the answer is confidently no.

</details>

### cephalization/jev-triage

<details><summary>README 발췌</summary>

A multiplayer triage dashboard for public GitHub repositories. Issues and pull requests sync into Postgres, Rocicorp Zero replicates them live to every browser, and a TypeSafe System One model answers a fixed set of typed questions about each one: what kind of issue it is, how severe, how urgent, wh

</details>

### mblode/taste-lint

<details><summary>README 발췌</summary>

Catch AI slop before you ship.

</details>

### AlexBabescu/ActionJev

<details><summary>README 발췌</summary>

Code review for GitHub Actions and Gitea Actions, written in Rust and powered by TypeSafe Jev.

</details>

### guilhem/jev-ci-selector

<details><summary>README 발췌</summary>

Run the checks your pull request needs.

</details>

### juanegido/jev-pr-judge

<details><summary>README 발췌</summary>

A demo of TypeSafe's System One primitives (the Jev model) judging whether a GitHub pull request actually does what it claims — a fast, cheap, typed verdict for developers running coding agents, instead of a slow LLM-as-judge prompt chain.

</details>

### Bnymn1306/jev-github-quality-gate

<details><summary>README 발췌</summary>

A Jev-powered quality gate for GitHub issues, pull requests, and commits.

</details>

### groktopus/codereview

<details><summary>README 발췌</summary>

A reusable, read-only code review CLI with deterministic planning, bounded specialist reviews, immutable Git evidence, reconciliation, and auditable reports. Its publish command currently validates and renders a read-only review preview; live publication is unavailable. It is still an experimental c

</details>

### phuthuycoding/jev-audit

<details><summary>README 발췌</summary>

AI-powered pre-commit auditor backed by TypeSafe System One (Jev). Sends your code changes to Jev as a State and evaluates 4 atomic questions in a single API call — no text generation, no parsing — typically ~300ms.

</details>

### Ripwords/agent-gate-loop

<details><summary>README 발췌</summary>

A GitHub Action that turns an issue into a pull request. An AI agent writes the change, and a gate checks it before a human sees it. The gate has four parts:

</details>

### sathariels/jevtriage

<details><summary>README 발췌</summary>

Triage gate for pull requests. A GitHub Action and small Python CLI that asks TypeSafe Jev (System One) one Choice question:

</details>

### silicon-sbt/pkmn-brain

<details><summary>README 발췌</summary>

打 Pokémon Showdown 天梯时的实时决策面板 —— 对战页左下角直接告诉你「这回合点啥 / 换谁 / 用不用太晶」。

</details>

### Thestral12/pr-sieve

<details><summary>README 발췌</summary>

A GitHub Action that treats .jev.yml as a semantic linter for pull requests.

</details>

### turenlabs/lisa

<details><summary>README 발췌</summary>

Leak, Injection &amp; Simplicity Auditor.

</details>

### tyler-james-bridges/qai-cli

<details><summary>README 발췌</summary>

Evidence-based QA checks from your terminal. The default path fetches a URL, records what came back, and grades it. No API key.

</details>

### BestNathan/system-one-code-explore

<details><summary>README 발췌</summary>

Researching whether a System One model, when placed inside a constrained harness, can replace or approximate System Two code search/localization well enough to find the files and concrete source evidence required by an engineering task — at materially lower latency and cost.

</details>

### NourEldinShobier/claude-tuning

<details><summary>README 발췌</summary>

Claude Code uses fewer tokens and answers faster. One install, about 5 minutes.

</details>

### PedroAlvarado/jev-scout

<details><summary>README 발췌</summary>

Jev Scout is an Agent Skill that reads your repository and tells you where TypeSafe Jev decision models would create the most value. It looks for three kinds of opportunity:

</details>

### WesleySmits/codex-triage

<details><summary>README 발췌</summary>

Codex Triage is a local dashboard for reviewing your Codex tasks. It reads the Codex app-server on your computer, helps you find tasks and automation runs, and makes archiving a deliberate, reviewable action. Optional Jev analysis offers advice for tasks you select.

</details>

### actions-marketplace-validations/sumant1122_jevci

<details><summary>README 발췌</summary>

&gt; Sub-second code diff, commit message, and documentation quality gate powered by TypeSafe AI Jev SystemOne.

</details>

### alam0rt/mergegate

<details><summary>README 발췌</summary>

Decides whether a pull request is safe to merge without a human looking at it. Documentation-only changes and patch/minor dependency bumps pass. Everything else is sent for review.

</details>

### andesdevroot/rasante

<details><summary>README 발췌</summary>

Copiloto open source para revisores independientes y Direcciones de Obras Municipales (DOM).

</details>

### autotelic/joggle

<details><summary>README 발췌</summary>

Cross-file judgements for a TypeScript codebase, enforced like a linter.

</details>

### autotelic/joggle-action

<details><summary>README 발췌</summary>

Run joggle in GitHub Actions. Findings arrive as workflow annotations, and a pull request is checked for its own work only.

</details>

### diffpal/lintpal

<details><summary>README 발췌</summary>

Turn plain-English engineering rules into pull-request checks.

</details>

### diffpal/lintpal-demo

<details><summary>README 발췌</summary>

This repository demonstrates LintPal on a small Go HTTP service. The default branch is a passing baseline. The canonical pull request intentionally introduces authorization and input-validation violations so LintPal can publish inline findings and a deterministic gate result.

</details>

### gbesse/jev-marianne

<details><summary>README 발췌</summary>

Version political commitments and detect how sourced promises change over time.

</details>

### JevForge/jev-pr-profiler

<details><summary>README 발췌</summary>

Evaluate pull request complexity and blast radius using TypeSafe Jev as a typed decision layer inside GitHub Actions.

</details>

### JevForge/jev-reviewer-navigator

<details><summary>README 발췌</summary>

Suggest the right pull request reviewers from CODEOWNERS, commit history, changed paths, components, labels, and teams — using TypeSafe Jev as a typed decision layer inside GitHub Actions.

</details>

### jonloucks/contracts-ts

<details><summary>README 발췌</summary>

Typescript Dependency Contracts for dependency inversion

</details>

### konegipei/fast-bousai-translator

<details><summary>README 발췌</summary>

&gt; 難解な災害リスクと個人の備蓄状況を、超低遅延AIで「今とるべき備えのアクション」へ即時翻訳する日本特化型オープン防災マップ基盤

</details>

### mattyv/skope

<details><summary>README 발췌</summary>

Let agents act on production without handing them a shell.

</details>

### midhunkrishna-ops/terrajev

<details><summary>README 발췌</summary>

&gt; AI-assisted Terraform plan risk and security analyzer

</details>

### neozhu/jev-audit

<details><summary>README 발췌</summary>

See what changed. Understand what matters. Review with confidence.

</details>

### schalkneethling/jev-lint

<details><summary>README 발췌</summary>

A spike exploring semantic linting with Jev, TypeSafe's System One model. It reports problems that depend on what words mean, which pattern-matching linters cannot see:

</details>

### Sixeight/karu

<details><summary>README 발췌</summary>

Clean up local Git branches and worktrees after the work is done.

</details>

### sshariqali/jev-abstentionbench

<details><summary>README 발췌</summary>

Meta's AbstentionBench tests whether a model declines to answer questions that have no answer. This repository runs it against Jev, a model from TypeSafe that returns probabilities for typed questions instead of text, and compares the result against the twenty systems Meta published numbers for.

</details>

### stefafafan/setup-jev

<details><summary>README 발췌</summary>

GitHub Action that installs a released stefafafan/jev binary and adds it to the PATH for later usage.

</details>

### Stephane-Dedu/jev-tactics

<details><summary>README 발췌</summary>

Perception par vision d'un jeu isometrique au tour par tour, et decision confiee a Jev — le modele « System One » de TypeSafe AI, qui rend des sorties typees (choix, score, probabilite) plutot que du texte.

</details>

### sumant1122/jevci

<details><summary>README 발췌</summary>

&gt; Sub-second code diff, commit message, and documentation quality gate powered by TypeSafe AI Jev SystemOne.

</details>

### surbhit20/jev-on-yt

<details><summary>README 발췌</summary>

Ask a YouTube video a question and jump to the answer. Hold Control and say "skip to where he talks about caffeine", and the video jumps there. If the answer isn't clear, the progress bar lights up where the topic is discussed instead.

</details>

### uasier/pi-auto

<details><summary>README 발췌</summary>

通过 Herdr 接管 Pi / Claude / Codex / Grok 的 pane：读终端、看 idle / working，空闲后发送下一轮。计划绑在当前窗口上，换会话不会把任务带走。

</details>

### yosit/dot-pi

<details><summary>README 발췌</summary>

My pi setup as a pi package: a Claude-Code-style statusline, and a set of guardrails for the coding loop powered by TypeSafe Jev — a fast classifier that returns typed decisions with calibrated probabilities in ~70-500ms for a fraction of a cent.

</details>
