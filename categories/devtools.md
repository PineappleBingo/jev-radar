# 🧑‍💻 개발 도구·코드 리뷰 (119)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [samchon/typia](https://github.com/samchon/typia) | 5927 | 227 | TypeScript 타입을 컴파일 타임에 분석해 런타임 유효성 검증기, JSON 직렬화 코드, LLM 함수 호출 하네스를 생성하는 변환 라이브러리다.<br>README에 판단 지점 설명 없음<br>별도 스키마 정의나 런타임 리플렉션 없이 순수 TypeScript 타입을 빌드 단계(ttsc)에서 전용 검증 코드로 직접 컴파일한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") | 2026-10-02 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 658 | 43 | Git diff나 전체 코드베이스를 단계별로 검토하고 결과를 로컬 대시보드에 시각화하는 코드 리뷰 워크플로 도구다.<br>위험 매트릭스(Noul), 파일 프로파일(Choice/Score), 증거 선택 및 메커니즘 분류(Choice), 심각도(Score), 리뷰어 라우팅(Choice)을 판단시킨다.<br>오케스트레이션과 임계값 정책은 코드로 관리하며, Jev를 단계별 모델 판단에만 제한적으로 사용하고 단방향 계층 아키텍처를 강제한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-17 |
| [sutro-sh/jev-align](https://github.com/sutro-sh/jev-align) | 302 | 23 | Jev와 GEPA를 사용해 불확실한 데이터에 대한 인간 피드백을 수집하고 AI Functions를 최적화하는 CLI 도구<br>이진 분류, 다중 클래스, 다중 라벨, 루브릭 기반 점수 평가 등 사용자가 정의한 질문을 데이터셋에 적용해 판단<br>불확실성 높은 데이터를 능동 학습으로 골라내 라벨링을 유도하고, GEPA를 통해 프롬프트 정의를 지속 개선하며 공개 레지스트리에 공유할 수 있음 | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-20 |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 231 | 22 | AI 코딩 에이전트가 코드 품질을 지속적으로 점검하도록 지원하는 로컬 기반 MCP 서버 플러그인이다.<br>코드 diff와 컨텍스트를 바탕으로 정확성·복잡도·변경용이성·모듈성·테스트·보안 등의 품질 지표를 Score·Choice·Noul로 평가한다.<br>긴 서술형 리뷰 텍스트 대신 정형화된 점수와 신뢰도 시그널을 반환하며, 원인 진단과 코드 수정은 메인 에이전트에게 맡긴다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-17 |
| [AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo) | 92 | 11 | 개발자와 코딩 에이전트가 웹사이트의 SEO 및 GEO 준비 상태를 검사하고 크롤링할 수 있도록 돕는 Rust 기반 오픈소스 CLI이자 MCP 도구다.<br>README 본문에서 Jev의 Choice, Score, Noul 기본형으로 웹페이지를 평가하고 신뢰도를 제어한다고 언급하나 구체적인 질문 내용은 설명되어 있지 않다.<br>58가지 규칙 기반 감사, GEO 인용 점수 측정 등을 단일 바이너리로 제공하며, 15개 도구를 갖춘 MCP 서버 형태로 에이전트와 연동할 수 있다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](../README.md#legend "선택지 중 하나를 고르게 합니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") [`score`](../README.md#legend "등급을 매기게 합니다") | 2026-10-02 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20273 | 2350 | 개발자가 터미널 환경에서 여러 코딩 에이전트 세션을 실행할 수 있도록 RAM 효율성과 성능을 극대화한 러스트 기반 코딩 에이전트 하네스 도구다.<br>README에 판단 지점 설명 없음<br>로컬 임베딩 비활성화 시 단일 세션 27.8MB 수준의 낮은 메모리 점유율을 제공하며, TUI 내 세션 유지 업데이트 등 다중 세션 확장성에 집중했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [Effect-TS/effect](https://github.com/Effect-TS/effect) | 16543 | 802 | TypeScript 개발자가 타입 안전한 에러 처리, 의존성 주입, 구조적 동시성 등을 구현하는 데 사용하는 표준 라이브러리 모노레포다.<br>README에 판단 지점 설명 없음<br>코어 로직뿐만 아니라 런타임 플랫폼 추상화, 각종 SQL 클라이언트, AI 제공자 연동 모듈을 모노레포 패키지로 함께 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) | 8722 | 936 | 원격 리포지토리 푸시 전에 일회용 워크트리에서 AI 검증 파이프라인을 실행해 주는 로컬 Git 프록시 도구다.<br>README에 판단 지점 설명 없음<br>푸시 시점에 별도 워크트리에서 리뷰, 테스트, 린트를 수행하고 안전한 수정은 자동 적용하며 통과 시에만 PR을 연다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 2534 | 150 | TypeSafe API 연동 코드를 생성할 수 있도록 Claude Code 등의 AI 에이전트에 추가하는 개발용 스킬 모음이다.<br>README에 판단 지점 설명 없음<br>Claude Code 플러그인과 skills.sh 배포 방식을 지원하여 에이전트가 TypeSafe 워크플로를 설계하고 문서를 참조할 수 있게 한다. | [❌](../README.md#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") | 2026-09-12 |
| [dzhng/jevgrep](https://github.com/dzhng/jevgrep) | 2066 | 133 | 코딩 에이전트가 리포지토리 동작 관련 질문을 던져 필요한 파일과 소스 코드 맥락을 빠르게 찾도록 돕는 CLI 도구다.<br>사용자의 동작 관련 질의에 대해 폴더, 파일, 선언부 단위의 코드 내용이 유의미하게 연관되어 있는지 여부를 판단시킨다.<br>저장소 계층을 탐색해 관련 파일과 소스 발췌문을 표준 출력으로 제공하며 코딩 에이전트의 탐색 비용을 약 30% 절감하도록 설계되었다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [SynaLinks/synalinks-skills](https://github.com/SynaLinks/synalinks-skills) | 907 | 84 | 코딩 에이전트가 Keras 스타일의 Synalinks 프레임워크 코드를 올바르게 작성하도록 안내하는 Agent Skills 저장소다.<br>DecisionModel(TypeSafe jev)을 통해 필드 질의에 대한 판단을 내리고 신뢰도 임계값에 따른 기권 여부를 결정하도록 다룬다.<br>Claude Code, Codex 등 다수의 코딩 에이전트가 공유하는 SKILL.md 표준 포맷을 따르며 실행 스크립트와 로그를 포함한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [vercel-labs/ai-cli](https://github.com/vercel-labs/ai-cli) | 819 | 65 | 터미널에서 텍스트·미디어 생성과 정형 평가(evaluate)를 수행할 수 있게 하는 Vercel AI SDK 기반 CLI 도구다.<br>티켓 등 입력 데이터에 대해 환불 요청 여부(boolean), 담당 팀 분류(choice), 문제 영향도나 어조(score) 등을 질문해 판단시킨다.<br>stdin 파이프 입력을 지원하며 Jev 모델을 기본 평가 모델로 사용해 boolean, choice, score 플래그 및 JSON 스키마로 질문을 일괄 채점한다. | [❌](../README.md#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") | 2026-10-01 |
| [duanebester/gooey](https://github.com/duanebester/gooey) | 635 | 6 | Zig 개발자가 macOS, Linux, 브라우저 환경에서 고성능 GPU 렌더링 애플리케이션을 구축할 때 사용하는 UI 프레임워크이다.<br>README에 판단 지점 설명 없음<br>외부 Zig 패키지 의존성이 전혀 없으며 Metal, Vulkan, WebGPU 백엔드를 직접 지원하고 생성형 UI를 위한 확장 모듈을 포함한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [BennyKok/omg.dev](https://github.com/BennyKok/omg.dev) | 545 | 41 | 다양한 코딩 에이전트를 로컬이나 클라우드 환경에서 병렬 실행하고 통합 웹 및 모바일 UI로 원격 제어하는 오픈소스 하네스 도구다.<br>README에 판단 지점 설명 없음<br>UI 연결이 끊겨도 백그라운드 세션이 유지되며, 로컬 서버에 자체 인증 기능이 없어 외부 접속 시 Tailscale 연동을 권장한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [coldteadotai/abide](https://github.com/coldteadotai/abide) | 511 | 40 | 코딩 에이전트(Claude Code, Codex 등)가 코드 수정 시 AGENTS.md 등의 프로젝트 규칙을 위반했는지 검사하고 수정을 유도하는 도구<br>각 프로젝트 규칙과 코드 diff를 보고, 해당 수정 사항이 규칙을 위반했는지 여부를 규칙별 확률(noul)로 판별<br>대화 기록 없이 diff와 규칙만 Jev로 전송해 빠른 레이턴시(약 300ms)와 저렴한 비용으로 검사하며 린터가 잡지 못하는 규칙을 감지 | [❌](../README.md#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") | 2026-10-02 |
| [delexw/claude-code-trace](https://github.com/delexw/claude-code-trace) | 373 | 23 | Claude Code의 로컬 JSONL 세션 로그를 실시간으로 탐색하고 에이전트 효율성을 분석하는 크로스플랫폼 뷰어 도구다.<br>에이전트 추적 로그를 바탕으로 작업 진행도, 도구 사용, 집중도, 탐색, 오류 복구, 토큰 효율성 등을 확률적으로 채점하도록 판단시킨다.<br>Tauri 기반 데스크톱, 웹, TUI를 지원하며 외부 분석 전 개인정보 마스킹 페이로드를 직접 확인한 뒤 Jev에 전달하도록 구현했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [lakeday-org/perch](https://github.com/lakeday-org/perch) | 345 | 19 | 개발자가 자연어 규칙 기반으로 코드 결함과 스타일 위반을 검사하기 위해 사용하는 시맨틱 코드 린터 CLI 도구다.<br>주어진 코드 단위가 YAML에 정의된 자연어 규칙(ensure)을 준수하는지, 또는 결함(defect)이 존재하는지 확률로 판단한다.<br>자연어로 린트 규칙을 작성할 수 있으며, Tree-sitter 기반 구조 탐색과 Jev의 확률적 판단을 결합해 이슈 심각도를 매긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [codejunkie99/keel](https://github.com/codejunkie99/keel) | 323 | 42 | macOS 환경에서 여러 코딩 에이전트를 연결해 작업을 실행하고 라우팅을 제어하는 로컬 중심의 개발 작업 공간이다.<br>새로 등록된 작업에 호스트가 준비한 후보군 중 적합한 실행 경로를 선택하거나 기권할지 판단을 맡긴다.<br>Rust와 GPUI 기반으로 작성되었으며 호스트가 선택 결과를 검증해 만료되거나 거부된 경우 기본 경로로 되돌린다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-25 |
| [FaqFirebase/pi-desktop](https://github.com/FaqFirebase/pi-desktop) | 274 | 33 | Pi 및 oh-my-pi 코딩 에이전트를 위한 Electron 기반 오픈소스 데스크톱 GUI 환경이다.<br>README에 판단 지점 설명 없음<br>TypeSafe API 키 설정 및 Jev 스킬 연동을 지원하며, Pi RPC 프로토콜을 직접 연동해 다중 워크스페이스와 독립 세션을 구동한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [uehaj/sys1grep](https://github.com/uehaj/sys1grep) | 144 | 9 | 텍스트 파일에서 정규표현식 대신 의미를 기준으로 각 줄을 다국어로 검색하는 명령줄 도구다.<br>파일의 각 줄이 사용자가 지정한 명제나 의미에 부합하는지 여부를 확률값으로 묻고 판단한다.<br>외부 의존성 없이 단일 파일로 동작하며 여러 줄을 묶어 병렬 처리하고 AND나 NOT 같은 논리 연산을 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [supercorp-ai/supercov](https://github.com/supercorp-ai/supercov) | 143 | 5 | 코딩 에이전트와 개발자가 코드 커버리지, 품질 점수, 보안 취약점을 측정하고 개선할 수 있게 돕는 CLI 도구다.<br>각 소스 파일에 대해 복잡도 및 코드 냄새(long_method, deep_nesting 등)와 인젝션·시크릿 노출 등 12가지 보안 위험 여부를 예/아니오 형태로 판단시킨다.<br>Jev 모델 질의 결과를 파일 내용 기반으로 캐싱하며, 커버리지 측정은 외부 계정이나 설정 없이 기존 테스트 러너 출력을 감싸 동작하도록 구현되었다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [luantak/is-malicious](https://github.com/luantak/is-malicious) | 32 | 4 | 개발자가 낯선 코드를 실행하거나 PR을 병합하기 전에 악의적인 동작이나 보안 위협이 있는지 검사하는 CLI 도구다.<br>소스코드와 설정 파일에 데이터 탈취, 비정상적 네트워크 활동, 권한 남용, 난독화 등 악성 행위가 존재하는지 여부와 확률을 판단시킨다.<br>바이너리나 실행 프로세스는 점검하지 않고 400KB 이하 텍스트 파일만 분석하며, GitHub Actions 및 Agent skill 연동을 지원한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-23 |
| [sharziki/semdecide](https://github.com/sharziki/semdecide) | 75 | 10 | Unix 파이프라인과 CI 환경에서 텍스트 및 JSONL 데이터를 대상으로 시맨틱 판단을 수행하는 CLI 도구<br>자연어 명제 참/거짓 판단(is), 다중 보기 라우팅(choose), 루브릭 기반 단계별 평가(score), 안전성 판별(guard) 등을 질의<br>grep/jq처럼 파이프라인 입출력을 지원하며, 모호한 결과(종료 코드 3)나 API 오류(종료 코드 4)를 분리해 안정적인 프로세스 종료 코드를 제공함 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [kyu1204/jgrep](https://github.com/kyu1204/jgrep) | 59 | 5 | grep for what code does, not what it's called. Semantic code search powered by TypeSafe Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [byalex33/changelog.earth](https://github.com/byalex33/changelog.earth) | 160 | 4 | Your planet. The release notes. An unofficial changelog for Earth, built from real reporting. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [compozy/yoshi](https://github.com/compozy/yoshi) | 28 | 2 | Claude Code와 Codex 사용자가 대화 기록의 불필요한 컨텍스트를 줄여 API 비용을 절감하도록 돕는 로컬 프록시 도구다.<br>도구 입출력 등 대화 기록 구간마다 필수 사실이나 구속력 있는 사용자 제약이 유실될 확률이 있는지 판단시킨다.<br>Anthropic·OpenAI 프로토콜을 그대로 중계하며, 요청 경로에서 최대 8개 구간을 동시 평가해 지연 시간이 늘어나는 한계가 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [raihankhan-rk/diffjury](https://github.com/raihankhan-rk/diffjury) | 7 | 1 | 공개 깃허브 풀 리퀘스트 URL을 입력받아 diff와 정보를 분석하고 병합 위험도 및 코드 리뷰 방향을 판정하는 웹 도구다.<br>PR의 병합 위험도·리뷰 깊이·설계나 보안 검토 필요 여부·병합 차단 여부·테스트 누락 및 최종 승인 여부(verdict)를 한 번의 호출로 묻는다.<br>Next.js 15 기반 서버 API에서 @typesafe-ai/sdk를 호출하며, 대형 PR은 토큰 한도에 맞춰 diff를 로컬에서 잘라내 전송한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-22 |
| [Ice-Hazymoon/jevlint](https://github.com/Ice-Hazymoon/jevlint) | 15 | 1 | 구문 기반 린터가 잡아내기 어려운 시맨틱 코드 검사 규칙을 자연어 질문으로 작성해 검사하는 정적 분석 도구다.<br>로그에 비밀번호가 포함되는지나 무한 루프 위험이 있는지 같은 예/아니오 질문을 코드 조각과 함께 던져 규칙 위반 확률을 판단하게 한다.<br>정규표현식 사전 필터와 ast-grep으로 모델에 보낼 대상 노드를 추려내며 각 규칙마다 유효·무효 픽스처 검증을 강제한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-24 |
| [cephalization/jev-triage](https://github.com/cephalization/jev-triage) | 4 | 0 | 오픈소스 GitHub 리포지토리의 이슈와 PR을 동기화하여 분류하고 처리 방향을 협업 검토하는 멀티플레이어 트라이아지 대시보드다.<br>이슈 유형, 심각도, 시급성, 중복 여부, 그리고 메인테이너가 취해야 할 다음 조치(질문, 답변, 조사, 결정 필요, 등록, 종료 등)를 고정된 질의로 판단시킨다.<br>GitHub에 직접 쓰지 않는 읽기 전용 대시보드이며, 사람의 수정 내역을 보존해 추후 모델 실행에 반영하고 Rocicorp Zero로 상태를 실시간 복제한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-29 |
| [Kelbie/hunch](https://github.com/Kelbie/hunch) | 4 | 2 | 자연어 질문과 규칙으로 코드베이스와 diff를 검색하고 리뷰하는 개발 도구다.<br>코드 청크가 주어진 자연어 질문이나 규칙 조건에 부합하는지 평가하여 관련도 점수(score)를 산출한다.<br>정확한 키워드 대신 의미 기반 검색을 지원하며 Jev 외에도 로컬 모델인 SemIf를 프로바이더로 교체해 쓸 수 있다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](../README.md#legend "선택지 중 하나를 고르게 합니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") [`score`](../README.md#legend "등급을 매기게 합니다") | 2026-09-23 |
| [valentynkit/jev-commit](https://github.com/valentynkit/jev-commit) | 12 | 0 | 커밋 메시지와 스테이징된 git diff를 비교해 일치 여부와 잔여 디버그 코드 등을 검사하는 pre-commit 훅 도구다.<br>Jev 모델에 무의미한 커밋 메시지 여부, diff와의 모순, 디버그 코드 잔여, 언급되지 않은 작업, 비밀정보 포함 여부의 5가지 질문을 noul 확률값으로 요청한다.<br>API 한 번의 호출로 5개 항목을 평가하며, 정규식 기반 비밀정보 검출 시에만 커밋을 차단하고 API 장애 시에는 항상 커밋을 허용(fail-open)하도록 설계되었다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [frostney/clean-code-review](https://github.com/frostney/clean-code-review) | 11 | 1 | 깃허브 풀 리퀘스트나 코드 diff의 변경 파일을 Clean Code 원칙 기준으로 채점하고 리뷰를 생성하는 도구<br>각 코드 파일에 대해 로버트 C. 마틴의 Clean Code 관련 질문 세트를 확률 및 점수(확률/점수 형태)로 판단<br>Jev를 eve 에이전트 모델 어댑터로 연결해 병렬 평가하고, 해당 수치 결과를 바탕으로 Luna가 요약 리뷰를 작성 | [❌](../README.md#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") | 2026-09-23 |
| [Eriskii/ErisLint](https://github.com/Eriskii/ErisLint) | 20 | 0 | Rust linter powered by configurable Jev rules, with a VS Code extension. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [doeixd/jev-pref](https://github.com/doeixd/jev-pref) | 10 | 0 | AGENTS.md나 CLAUDE.md의 프로젝트 규칙을 Jev 기반의 시맨틱 린터 규칙으로 변환해 코딩 에이전트의 코드 변경점을 검증하는 도구다.<br>코드 diff가 가변 모듈 상태를 추가하는지, API 영향도 레이블(none·additive·behavioral·breaking)이 무엇인지 등 관찰 가능한 의미적 기준을 분류하도록 묻는다.<br>정적 분석 도구가 잡기 어려운 의미론적 규칙을 이항 확률(p(true))이나 고정 레이블 분류로 처리하고, 이를 코딩 에이전트의 워크플로에 피드백하도록 설계했다. | [❌](../README.md#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") | 2026-09-18 |
| [cline/plugins](https://github.com/cline/plugins) | 32 | 12 | Cline CLI 사용자가 추가 도구와 훅, 스킬을 확장할 수 있도록 제공되는 공식 큐레이션 플러그인 모음집이다.<br>README에 판단 지점 설명 없음<br>jev-browser를 통한 브라우저 작업 실행을 비롯해 서브에이전트 오케스트레이션, 파일 접근 제어 훅 등이 디렉터리별로 모듈화되어 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [tyler-dot-earth/patdown](https://github.com/tyler-dot-earth/patdown) | 14 | 2 | Block, steer, and "fuzzy lint" with Jev to make agents follow your rules and conventions. CLI, github action, pi package, claude extension, and more. Built with Effect + TypeScript. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [virolea/lintus](https://github.com/virolea/lintus) | 12 | 0 | A linter whose rules are written in plain language. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [iamtoomas/JevLint](https://github.com/iamtoomas/JevLint) | 11 | 0 | Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [nozomi-koborinai/jev-spec](https://github.com/nozomi-koborinai/jev-spec) | 10 | 2 | ⚡ Catch spec drift on every commit: check your code against your Markdown specs with TypeSafe AI's Jev model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [HyunjunJeon/jev-context](https://github.com/HyunjunJeon/jev-context) | 5 | 0 | Claude Code와 Codex 환경에서 컨텍스트 창 크기를 관리해 자동 압축을 늦추고 필요한 원문을 보존하는 개발 도구 플러그인이다.<br>100줄 이상의 파일을 읽을 때 이번 단계에 전체 내용이 필요한지와 압축 시 다음 단계에서 편집할 출력인지 등을 판단하게 한다.<br>프롬프트 캐시가 깨지지 않도록 출력 축소 전 원문을 별도 경로에 먼저 저장하고 캐시가 식었을 때만 압축을 유도한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [metalbear-co/jev-auto-approve](https://github.com/metalbear-co/jev-auto-approve) | 9 | 2 | Jev PR auto approver | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [endomorphosis/JevOps](https://github.com/endomorphosis/JevOps) | 8 | 1 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [Jev-Engineering/TypeWright](https://github.com/Jev-Engineering/TypeWright) | 4 | 0 | 선언한 결정 규격과 데이터셋을 컴파일하여 외부 라이브러리 없이 실행 가능한 JSON 프로그램으로 내보내는 도구다.<br>README에 판단 지점 설명이 없다.<br>DSPy와 GEPA는 컴파일 단계에서만 최적화에 사용되며 런타임에는 무거운 의존성 없이 경량 프로그램으로 실행된다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [mblode/taste-lint](https://github.com/mblode/taste-lint) | 7 | 2 | Catch AI slop before you ship. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [123wwwa/JevTrace](https://github.com/123wwwa/JevTrace) | 3 | 0 | 코딩 에이전트가 JS/TS 코드베이스에서 작업에 필요한 코드만 골라 읽도록 돕는 MCP 서버다.<br>컴파일러가 추적한 코드 조각이 주어진 코딩 작업에 실제로 필요한지 연관성을 판단한다.<br>TypeScript 컴파일러로 호출 관계와 타입을 추적해 후보를 넓히며 최대 2만 개 소스 파일까지 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [ariel-frischer/jevkit](https://github.com/ariel-frischer/jevkit) | 3 | 1 | TypeSafe Jev API를 커맨드라인과 AI 에이전트에서 호출하고 질문 세트를 사전 검증하는 Rust 기반 CLI 도구다.<br>주어진 문장의 위험 여부 같은 확률(noul), 심각도 같은 레이블(choice), 긴급도 같은 등급(score)을 판정하도록 질문한다.<br>API 호출 전 잘못되거나 무의미한 질문 구성을 오프라인에서 0.5ms 만에 검사하는 13개 린트 규칙을 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [ismaildasci/claude-referee](https://github.com/ismaildasci/claude-referee) | 3 | 1 | Claude Code에서 작업 완료 주장이나 사소한 판단을 TypeSafe Jev 모델로 교차 검증하고 로컬에 기록하는 비공식 플러그인이다.<br>작업이 실제로 끝났는지 여부나 제시된 여러 선택지 중 내부 규칙에 부합하는 항목이 무엇인지 확률 형태로 판단하게 한다.<br>비밀번호나 개인정보를 먼저 가린 뒤 질의를 일괄 처리하며, 세션 종료 시점에 작업 완료 주장을 자동으로 점검하는 기능을 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [sedum-dev/sedum](https://github.com/sedum-dev/sedum) | 3 | 0 | 자연어 지시문으로 웹 브라우저 E2E 테스트를 작성하고 Playwright로 실행하는 테스트 도구다.<br>자연어 문장이 가리키는 웹 요소를 찾고 특정 상태 주장이 화면에 성립하는지 참과 거짓 확률로 판별한다.<br>텍스트 생성 대신 확률값을 바탕으로 요소를 찾고 검증하며 실제 브라우저 조작은 Playwright로 직접 실행한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [Amine-LG/IntentSQL](https://github.com/Amine-LG/IntentSQL) | 2 | 1 | 자연어로 SQLite 데이터베이스를 조회하고 수정하면서 쿼리 생성 과정을 단계별로 검사하는 도구다.<br>자연어 질의에 알맞은 테이블과 컬럼, 연산자를 선택하고 요청 내용이 빠짐없이 반영되었는지를 판단하게 한다.<br>자유로운 텍스트 생성 대신 작은 단위의 의미 판단과 결정론적 코드를 엮어 안전하게 SQL을 구성한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [dharmeshgurnani/CodeOtter](https://github.com/dharmeshgurnani/CodeOtter) | 2 | 0 | 개발자가 자체 인프라에서 풀 리퀘스트를 자동으로 리뷰하고 점수를 매기도록 돕는 셀프 호스팅 도구다.<br>품질, 위험도, 테스트 등 6가지 루브릭 점수와 8가지 사전 머지 정책 통과 여부를 판단하도록 맡긴다.<br>결정론적인 수치 채점 엔진과 심층 코드 분석 엔진을 병렬로 분리해 실행하는 이중 구조를 채택했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [ashafizullah/jev-triage](https://github.com/ashafizullah/jev-triage) | 1 | 0 | 오픈소스 관리자가 깃허브 이슈와 풀 리퀘스트를 자동으로 검토하고 분류하도록 돕는 Probot 기반 트리아지 도구다.<br>등록된 항목의 카테고리와 영향도 점수, 정보 완성도, 스팸 여부, 기존 이슈와의 중복 확률을 질문해 판단을 구한다.<br>텍스트 생성 없이 타입화된 확률 기반 결정을 한 번에 병렬로 받아오며 신뢰도가 낮으면 사람에게 검토를 넘긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-21 |
| [NourEldinShobier/claude-tuning](https://github.com/NourEldinShobier/claude-tuning) | 1 | 0 | Claude Code의 토큰 소비를 줄이고 응답 속도를 개선하기 위해 셸 압축, 검색 인덱스, 모델 라우팅 도구를 일괄 설치·구성하는 튜닝 플러그인이다.<br>사용자 요청에 적합한 Claude 스킬 추천, 고난도 코딩 서브에이전트 작업의 Opus 모델 라우팅 여부, 컴팩션 시 원문 보존할 메시지 선별 및 검색 결과 순위를 판단시킨다.<br>Bun 런타임 기반으로 rtk, stash 등 여러 최적화 도구를 묶어 제공하며, TypeSafe API 키가 없어도 기본 기능으로 폴백되어 작동한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [PedroAlvarado/jev-scout](https://github.com/PedroAlvarado/jev-scout) | 1 | 0 | 코드베이스를 분석하여 TypeSafe Jev 결정 모델을 적용할 최적의 위치와 설계를 찾아주는 에이전트 스킬<br>README에 판단 지점 설명 없음<br>Jev API 키나 코드 수정 없이 정적 스캐너와 git 기록 분석만으로 대체 및 확장 후보를 발굴하고 shadow-mode 실험을 설계함 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [sable-inc/jev-linter-action](https://github.com/sable-inc/jev-linter-action) | 1 | 0 | 저장소 파일이나 빌드된 에이전트 번들을 사용자 정의 예/아니오 질문으로 검사하는 깃허브 액션이다.<br>작성된 프롬프트나 에이전트 지침이 특정 규칙이나 조건을 만족하는지 예/아니오 확률로 판단하게 한다.<br>검사에 실패하면 규칙 위반의 원인이 된 원본 문단을 추적해 풀 리퀘스트에 주석으로 남긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [Thingscorp/jev-crawlers](https://github.com/Thingscorp/jev-crawlers) | 1 | 1 | 개발자가 코드베이스의 잠재적 버그와 위험 패턴을 탐색하고 검증하기 위해 파이프라인으로 엮어 쓰는 유닉스 스타일 버그 분석 도구 모음이다.<br>각 코드 노드에 대해 취할 조치(choice), 버그 발생 확률(noul), 0에서 3까지의 위험도(score), 반증 가능한 증거 제시 여부를 판정하도록 묻는다.<br>jev-judge로 판정한 뒤 jev-verify 단계에서 인용된 파일과 줄 번호가 실제 디스크에 일치하는지 확인해 허위 보고를 걸러낸다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-26 |
| [AlexBabescu/ActionJev](https://github.com/AlexBabescu/ActionJev) | 2 | 0 | Structured code review for GitHub and Gitea Actions, powered by TypeSafe Jev and written in Rust. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [guilhem/jev-ci-selector](https://github.com/guilhem/jev-ci-selector) | 2 | 0 | Conservative CI task selection for GitHub Actions with Jev, a pure policy engine, and shadow mode by default. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [juanegido/jev-pr-judge](https://github.com/juanegido/jev-pr-judge) | 2 | 0 | Typed verdicts on pull requests with TypeSafe System One (Jev): one parallel call, policy in code, usable as a GitHub Action | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [youkiti/tiab-review-plugin](https://github.com/youkiti/tiab-review-plugin) | 2 | 1 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [Bnymn1306/jev-github-quality-gate](https://github.com/Bnymn1306/jev-github-quality-gate) | 1 | 0 | A Jev-powered quality gate for GitHub issues, pull requests, and commits. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [Fox-Islam/browser-agent](https://github.com/Fox-Islam/browser-agent) | 1 | 0 | Probably the fastest goal-driven browser agent for PHP | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [gentslava/pr-scout](https://github.com/gentslava/pr-scout) | 1 | 1 | Self-hosted triage for GitHub pull requests, issues and forks: which PRs to take into your build, what conflicts, what it costs to maintain. Scores thousands of items with Jev in minutes, for cents. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [groktopus/codereview](https://github.com/groktopus/codereview) | 1 | 0 | Deterministic, bounded AI code review harness with CLI and GitHub Actions integration | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [joacotornello/jev-prompt-enhancer](https://github.com/joacotornello/jev-prompt-enhancer) | 1 | 0 | Enhance your prompts using Jev by giving your coding agent a clearer task before it writes the first line. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [lpliu-art/kestrel](https://github.com/lpliu-art/kestrel) | 1 | 0 | 🦅 AI code review with calibrated, line-anchored findings, not LLM guesswork. TS/JS, Python, Java, Go, Rust, C#. CLI + GitHub Action + agent skill, SARIF &amp; PR gate. 多语言 AI 代码评审 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [phuthuycoding/jev-audit](https://github.com/phuthuycoding/jev-audit) | 1 | 0 | AI-powered pre-commit auditor backed by TypeSafe System One (Jev) — blocks secrets, vulns &amp; low-quality code in ~300ms. 79-case test corpus at 100% accuracy. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [sathariels/jevtriage](https://github.com/sathariels/jevtriage) | 1 | 0 | GitHub Action + CLI: triage PRs with TypeSafe Jev (ready / needs review / risky) with confidence gates and jevcheck-friendly contracts. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [SergeAx/scrutus](https://github.com/SergeAx/scrutus) | 1 | 1 | Linter for source-code comments: grades accuracy and usefulness with TypeSafe Jev and deletes the useless ones | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Thestral12/pr-sieve](https://github.com/Thestral12/pr-sieve) | 1 | 0 | Semantic PR gate: .jev.yml rules as TypeSafe Jev questions. Not a review bot. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [tyler-james-bridges/qai-cli](https://github.com/tyler-james-bridges/qai-cli) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [arturobermejo/semcheck](https://github.com/arturobermejo/semcheck) | 0 | 0 | Go 소스 코드에서 AST로 대상 노드를 찾고 자연어 질문에 대한 언어 모델의 확률 판단으로 위반 사항을 잡는 시맨틱 린터 도구다.<br>로그에 개인정보가 찍히는지, 함수 이름과 달리 상태를 변경하는지 같은 닫힌 질문에 대해 모델이 예 혹은 아니오 확률을 판단하게 한다.<br>정적 분석기로 대상 노드와 타입 정보를 추출한 뒤 모델 답변을 캐싱하여 변경된 코드만 다시 검사하도록 최적화했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [BasmaAbouzied0/jev-auto-approve](https://github.com/BasmaAbouzied0/jev-auto-approve) | 0 | 0 | Claude Code의 PreToolUse 훅에서 읽기 전용 셸 명령어를 자동으로 승인해 주는 개발 도구다.<br>실행하려는 셸 명령어가 읽기 전용인지 여부를 확률(noul)로 판별하여 임계값(0.95) 충족 여부를 확인한다.<br>외부 의존성 없이 표준 라이브러리 기반 단일 파일로 동작하며 위험 명령어나 타임아웃 발생 시 일반 확인 프롬프트로 폴백한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [BestNathan/system-one-code-explore](https://github.com/BestNathan/system-one-code-explore) | 0 | 0 | 제약된 하네스 안에서 System One 모델을 활용해 엔지니어링 작업에 필요한 파일과 소스 코드 증거 범위를 빠르게 탐색·특정하는 연구용 런타임이다.<br>각 파일 메타데이터가 주어진 작업과 관련 있는지 여부를 Noul(예/아니오 확률)로 평가하고 점수화하여 탐색 대상 파일을 선택하도록 판단시킨다.<br>무제한 ReAct 루프 대신 하네스가 상태와 행동 공간을 단계적으로 공개하고 제어하며, 디렉터리 기반 가지치기를 배제하고 전수 메타데이터 평가 방식을 채택했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [gbesse/jev-trace](https://github.com/gbesse/jev-trace) | 0 | 0 | 요구사항과 소스 코드 및 테스트 간의 추적 매트릭스를 생성해 누락된 조항과 변경 영향을 검토하도록 돕는 Node.js 도구다.<br>후보군으로 추려진 소스 코드와 테스트 코드가 특정 요구사항 조항을 구현하거나 검증하는지 여부를 질문해 판단한다.<br>해시 변경으로 재검토 대상 셀만 골라내며, 알파 버전이라 실제 외부 API 어댑터 호출은 연결되지 않은 상태다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [gbesse/meaning-diff](https://github.com/gbesse/meaning-diff) | 0 | 0 | 문서의 두 버전 사이에서 달라진 의미를 감지하고 출처 정보와 함께 변경 유형을 검토하는 Node.js 도구다.<br>변경된 문서 구절이 단순 편집, 의미 강화, 약화, 모순, 동작 변경 중 어디에 해당하는지 선택하게 한다.<br>구조적 차이는 오프라인으로 비교해 변경 구간만 모델에 보내며, SHA-256 지문과 원본 행 번호로 출처를 기록한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [merefield/robotonrails](https://github.com/merefield/robotonrails) | 0 | 0 | Rails 애플리케이션의 스키마와 코드를 파악하여 자연어 질의로 탐색하고 검토 후 코드를 실행하는 대화형 터미널 CLI 도구<br>README에 판단 지점 설명 없음<br>OpenAI Responses API를 사용하며 임의 코드 실행 전 사용자 승인 단계를 거치고 리눅스 Secret Service 등으로 키를 안전하게 보관한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [pkcoulon/jev-for-flutter](https://github.com/pkcoulon/jev-for-flutter) | 0 | 0 | Claude Code에서 Flutter 및 Dart 소스코드를 다룰 때 필요한 구절만 추려 전달하고 자연어로 코드를 찾도록 돕는 플러그인이다.<br>README에 판단 지점 설명이 없다.<br>대형 소스 파일에서 유용한 코드 단락만 골라 Claude의 컨텍스트 토큰 소비와 호출 비용을 줄이도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [ricardo-landim/claude-prompt-map](https://github.com/ricardo-landim/claude-prompt-map) | 0 | 0 | Claude Code 사용자가 자유롭게 입력한 프롬프트를 원문 수정 없이 목표·제약·완료 기준 등으로 구조화해 전달하는 훅 도구다.<br>Jev에게 메시지 구조화 가치(worth_structuring)를 noul로 묻고, 분할된 각 세그먼트의 역할(9가지 선택지)을 choice로 분류하도록 요청한다.<br>텍스트를 재작성하지 않고 원문 그대로 세그먼트를 분류하며, 실패 시 메시지 전송을 차단하지 않고 조용히 통과(fail-open)하도록 단일 파일로 구현되었다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Santhosh-Rubenraj-Solomon/ai-diff-reviewer](https://github.com/Santhosh-Rubenraj-Solomon/ai-diff-reviewer) | 0 | 0 | GitLab 및 GitHub의 PR/MR 또는 로컬 git diff를 분석해 인라인 리뷰 코멘트를 등록하는 TypeScript 기반 자동 코드 리뷰 CLI 도구다.<br>review 단계에서 발견된 개별 finding이 주변 코드 및 규칙에 비추어 실제로 타당한지(게이트 통과 여부)를 판정하도록 묻는다.<br>diff 파싱 및 검증은 결정론적 코드로 처리하고 모델은 순수 판단만 수행하며, 제2 판정 게이트(judge)에 Jev 모델을 직접 연동할 수 있도록 설계되었다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [watanabe3tipapa/phobos](https://github.com/watanabe3tipapa/phobos) | 0 | 0 | 확률 기반 의사결정 모델 laya를 웹 브라우저에서 직접 테스트하고 UI 설계 방식을 살펴보는 플레이그라운드 사이트다.<br>choice로 분류나 가드레일을 묻고 score로 긴급도나 복잡도를 평가하며 noul로 참과 거짓 여부를 판정한다.<br>번들러나 외부 CDN 없이 순수 웹 표준 기술로 구축했으며 내장 가상 터미널과 신뢰도 기준의 자동 분기 기능을 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [WesleySmits/codex-triage](https://github.com/WesleySmits/codex-triage) | 0 | 0 | 로컬 Codex 작업 및 자동화 실행을 조회하고 아카이브 처리를 검토할 수 있는 TypeScript 기반 로컬 대시보드 도구다.<br>선택한 Codex 작업 텍스트를 바탕으로 작업을 유지(Keep), 재검토(Review), 아카이브(Archive) 중 어떤 조치를 취할지 판단한다.<br>자동 아카이브를 방지하고 사용자 확인 절차를 두었으며 외부 API 전송 전 식별자 제거 필터링 및 로컬 파일 캐싱을 적용했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [1hachem/check-agents-md](https://github.com/1hachem/check-agents-md) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [actions-marketplace-validations/RomanXSad_jev-review-gate](https://github.com/actions-marketplace-validations/RomanXSad_jev-review-gate) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [actions-marketplace-validations/tomron_pr-ai-labeler](https://github.com/actions-marketplace-validations/tomron_pr-ai-labeler) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [akeldgord/JEVmail](https://github.com/akeldgord/JEVmail) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [alam0rt/mergegate](https://github.com/alam0rt/mergegate) | 0 | 0 | Decide whether a PR is safe to auto-merge: path rules first, TypeSafe Jev for the rest | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [alexykn/jevscan](https://github.com/alexykn/jevscan) | 0 | 0 | custom linter with treesitter + jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [andesdevroot/rasante](https://github.com/andesdevroot/rasante) | 0 | 0 | Motor determinista de normas urbanisticas chilenas (OGUC + PRC) para revisores independientes y DOM. El LLM clasifica y redacta; nunca calcula ni dictamina. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [autotelic/joggle](https://github.com/autotelic/joggle) | 0 | 0 | Cross-file judgements for a TypeScript codebase, enforced like a linter. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [autotelic/joggle-action](https://github.com/autotelic/joggle-action) | 0 | 0 | Run joggle in GitHub Actions: cross-file judgements for a TypeScript codebase, reported as annotations. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [casperkwok/heihua-translator](https://github.com/casperkwok/heihua-translator) | 0 | 0 | 职场黑话翻译器：贴一句工作消息，先猜，再揭晓 AI 怎么读 + 它有多确定。基于 Jev（TypeSafe System One）的判断工具，含 30 句真实语料评测。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [cdubiel08/jev-test-triage](https://github.com/cdubiel08/jev-test-triage) | 0 | 0 | Rank surviving mutants by whether a test is worth writing, with TypeSafe Jev System One judgments. Pre-commit hooks + GitHub Action (Claude Code / Codex). | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [cephalic-labs/nervon](https://github.com/cephalic-labs/nervon) | 0 | 0 | You will know what to study next. Cephalic Labs submission for BPF 2026 Day 1. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-26 |
| [cornifex/not-so-magic-8-ball](https://github.com/cornifex/not-so-magic-8-ball) | 0 | 0 | A not-so-magic 8 ball leveraging Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [diffpal/lintpal-demo](https://github.com/diffpal/lintpal-demo) | 0 | 0 | Demo repository for LintPal: PR review checks and inline findings on committed code | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Gorpokki/modhopper](https://github.com/Gorpokki/modhopper) | 0 | 0 | Sorts Minecraft mods from Modrinth and CurseForge into categories with Jev. Python and Rust implementations. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [hamzaahmadaslam/capability-diff](https://github.com/hamzaahmadaslam/capability-diff) | 0 | 0 | Compares who can run each WordPress AJAX action, REST route and admin page in two versions, and reports the changes that let more users in. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [Ice-Hazymoon/jevci](https://github.com/Ice-Hazymoon/jevci) | 0 | 0 | Selective CI for GitHub Actions and GitLab CI: run only the jobs a change can affect. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [JevForge/jev-pr-profiler](https://github.com/JevForge/jev-pr-profiler) | 0 | 0 | Evaluate pull request risk with Jev and expose review depth plus recommended checks to CI. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [JevForge/jev-reviewer-navigator](https://github.com/JevForge/jev-reviewer-navigator) | 0 | 0 | Suggest PR reviewers from CODEOWNERS, history, paths, labels, and teams. Jev decides; assignment stays explicit. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [Kotakageyama/triage-policy](https://github.com/Kotakageyama/triage-policy) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [liujunsemail-blip/JevTetris](https://github.com/liujunsemail-blip/JevTetris) | 0 | 0 | Play Tetris using Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [MateusRogien/jev-focus](https://github.com/MateusRogien/jev-focus) | 0 | 0 | Keep YouTube for focus music and learning while it hides everything else. A Chrome extension that classifies feed videos with TypeSafe Jev. Bring your own key. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [mattyv/skope](https://github.com/mattyv/skope) | 0 | 0 | skill op | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [midhunkrishna-ops/terrajev](https://github.com/midhunkrishna-ops/terrajev) | 0 | 0 | terraform-jev: AI-powered Terraform plan analysis using TypeSafe's System One model Automatically classify, categorize, and extract structured insights from Terraform plans. Fast, cost-efficient risk detection for CI/CD pipelines. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [nicolas-found42/prompt-enhancer](https://github.com/nicolas-found42/prompt-enhancer) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [rf-camillo/jev-aplausometro](https://github.com/rf-camillo/jev-aplausometro) | 0 | 0 | Cole seu post e veja uma plateia de leitores reagir em tempo real, com as probabilidades calibradas do Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [Ripwords/agent-gate-loop](https://github.com/Ripwords/agent-gate-loop) | 0 | 0 | Reusable GitHub Action: agent fix loop gated by checks, an AI reviewer, and TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [rmachadosouza/pris-o_preventiva_TYPESAFE](https://github.com/rmachadosouza/pris-o_preventiva_TYPESAFE) | 0 | 0 | APP Google AI Studio de prisão preventiva com Typesafe | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [RomanXSad/jev-review-gate](https://github.com/RomanXSad/jev-review-gate) | 0 | 0 | GitHub Actions gate that asks TypeSafe Jev before a protected job runs. MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [schalkneethling/jev-lint](https://github.com/schalkneethling/jev-lint) | 0 | 0 | An experiment with semantic code linting using Jev from TypeSafe AI | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [Sixeight/karu](https://github.com/Sixeight/karu) | 0 | 0 | Clean up local Git branches and worktrees after the work is done. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [sshariqali/jev-abstentionbench](https://github.com/sshariqali/jev-abstentionbench) | 0 | 0 | Meta's AbstentionBench run against Jev (TypeSafe). Cached responses committed, so the analysis reproduces offline. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [stefafafan/setup-jev](https://github.com/stefafafan/setup-jev) | 0 | 0 | Unofficial GitHub Action that installs stefafafan/jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [sumant1122/jevci](https://github.com/sumant1122/jevci) | 0 | 0 | Sub-second code diff, commit, and doc quality gate powered by TypeSafe AI Jev SystemOne | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [SuperInstance/quilt-arch](https://github.com/SuperInstance/quilt-arch) | 0 | 0 | The Complete Solution conformance core: Q32 bit-exact, JS==Python 0/10000 mismatches (cross-substrate EXECUTED), conservation with exact refusal boundary 6806210843/6806210844, journal exact inversion 1210/1210 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [tomron/pr-ai-labeler](https://github.com/tomron/pr-ai-labeler) | 0 | 0 | Jev-powered GitHub Action for configurable multi-label PR classification | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [vsl/ai-text-enhancer](https://github.com/vsl/ai-text-enhancer) | 0 | 0 | AI Text Enhancer UI and Supabase backend monorepo | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [srodrift/clerk](https://github.com/srodrift/clerk) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |

### samchon/typia

<details><summary>README 발췌</summary>

typia is a transformer library supporting below features:

</details>

### devagrawal09/jev-review

<details><summary>README 발췌</summary>

A small code-review workflow built with TypeSafe Jev. It can review a Git diff or scan a complete codebase, follows the strongest structured signals through focused model calls, and presents the result in a quiet local dashboard.

</details>

### sutro-sh/jev-align

<details><summary>README 발췌</summary>

jev-align is an experimental CLI from Sutro for building AI Functions with TypeSafe's Jev.

</details>

### NiazMorshed2007/jev-review

<details><summary>README 발췌</summary>

Continuous software-quality review for AI coding agents, powered by Jev.

</details>

### AkashPriyadarshii/jev-seo

<details><summary>README 발췌</summary>

title: "jev-seo: Free Rust SEO &amp; GEO CLI + MCP for Devs and Agents" description: "Free Rust SEO and GEO toolkit powered by TypeSafe Jev: 58-rule audits, site crawls, AI citation checks, rank drift, CI gates, 15-tool MCP. Zero cost." canonical: "https://github.com/AkashPriyadarshii/jev-seo" image: "h

</details>

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

### dzhng/jevgrep

<details><summary>README 발췌</summary>

Same intelligence. ~30% lower cost.

</details>

### SynaLinks/synalinks-skills

<details><summary>README 발췌</summary>

This repository contains skills for coding agents that read the open Agent Skills format (SKILL.md): Claude Code, Codex, OpenCode, pi, and others.

</details>

### vercel-labs/ai-cli

<details><summary>README 발췌</summary>

Create text, images, video, and audio, and make typed decisions with composable commands, stdin support, and predictable outputs. Built with the Vercel AI SDK and AI Gateway for access to hundreds of models.

</details>

### duanebester/gooey

<details><summary>README 발췌</summary>

A GPU-accelerated UI framework for Zig, targeting macOS (Metal), Linux (Vulkan/Wayland), and Browser (WASM/WebGPU).

</details>

### BennyKok/omg.dev

<details><summary>README 발췌</summary>

Not 10 interfaces. One portal for all your agents.

</details>

### coldteadotai/abide

<details><summary>README 발췌</summary>

Then start claude, codex, opencode or pi as usual. That is the whole setup.

</details>

### delexw/claude-code-trace

<details><summary>README 발췌</summary>

Claude Code Trace is a Claude Code session log viewer and Jev-powered AI agent efficiency analyzer for local JSONL files stored in ~/.claude/projects/. It combines real-time Claude Code trace observability with structured behavioural analysis from Jev, TypeSafe AI's System One Model.

</details>

### lakeday-org/perch

<details><summary>README 발췌</summary>

Semantic code linting with decision models.

</details>

### codejunkie99/keel

<details><summary>README 발췌</summary>

A local Laya selector or an optional hosted Jev selector chooses a route. The host checks each choice before Keel applies it.

</details>

### FaqFirebase/pi-desktop

<details><summary>README 발췌</summary>

A desktop GUI for the Pi and oh-my-pi coding agents. Chat, manage projects, browse files, run commands, and install packages in one window.

</details>

### uehaj/sys1grep

<details><summary>README 발췌</summary>

Background and design notes (Japanese): Jevのキラーアプリ、「意味で探す grep」を作った on Zenn.

</details>

### supercorp-ai/supercov

<details><summary>README 발췌</summary>

Coverage, security and code quality for coding agents

</details>

### luantak/is-malicious

<details><summary>README 발췌</summary>

Scan a codebase for hidden, deceptive, or data-stealing behavior with TypeSafe Jev. The CLI sends source, configuration, build, and CI files to Jev for review, then points you to suspicious files and lines.

</details>

### sharziki/semdecide

<details><summary>README 발췌</summary>

Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev.

</details>

### kyu1204/jgrep

<details><summary>README 발췌</summary>

grep for what code does, not what it's called. Gate PRs on it. Run only the tests a diff can affect.

</details>

### byalex33/changelog.earth

<details><summary>README 발췌</summary>

New species. Balance changes. Unresolved bugs. A few good things on Earth, one patch at a time.

</details>

### compozy/yoshi

<details><summary>README 발췌</summary>

A local context-pruning proxy for Claude Code and Codex.

</details>

### raihankhan-rk/diffjury

<details><summary>README 발췌</summary>

Jev decides if this PR is risky or not.

</details>

### Ice-Hazymoon/jevlint

<details><summary>README 발췌</summary>

Lint rules for the code-review questions a syntax-based linter can't answer: "is a secret being logged here?", "can this retry loop run forever?", "does this handler leak an internal error message?". You write each rule as a plain-English yes/no question. jevlint picks the code the rule applies to, 

</details>

### cephalization/jev-triage

<details><summary>README 발췌</summary>

A multiplayer triage dashboard for public GitHub repositories. Issues and pull requests sync into Postgres, Rocicorp Zero replicates them live to every browser, and a TypeSafe System One model answers a fixed set of typed questions about each one: what kind of issue it is, how severe, how urgent, wh

</details>

### Kelbie/hunch

<details><summary>README 발췌</summary>

Ask a plain-English question across a repository without guessing which words the code uses. Hunch sends each in-scope chunk to Jev and returns scored source locations for a person or coding agent to investigate. It also runs recurring review rules on diffs.

</details>

### valentynkit/jev-commit

<details><summary>README 발췌</summary>

Your agent writes the code, then writes the commit message about the code. Nothing checks that the two agree. This does, in one call to Jev, before the commit lands.

</details>

### frostney/clean-code-review

<details><summary>README 발췌</summary>

Point it at a public GitHub pull request, a diff or a file. Jev, TypeSafe's evaluation model, answers a question set drawn from Robert C. Martin's Clean Code for every code file in the change, and Luna writes the review from those answers. It runs on eve and deploys as one Next.js project.

</details>

### Eriskii/ErisLint

<details><summary>README 발췌</summary>

ErisLint is a Rust linter for code-quality rules you define in JSON. Ask whether a function is needlessly complicated, a name is misleading, or a comment adds anything useful, then map Jev's answers to warnings or errors.

</details>

### doeixd/jev-pref

<details><summary>README 발췌</summary>

Turn your preferences from AGENTS.md into a fast, Jev-powered AI linter.

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

### HyunjunJeon/jev-context

<details><summary>README 발췌</summary>

Claude Code와 Codex에서 쓰는 플러그인이다. 컨텍스트 창을 가볍게 유지해 압축(compaction)을 최대한 늦추고, 압축이 오더라도 필요한 원문이 살아남게 한다. 판단이 필요한 몇 곳에서만 TypeSafe의 Jev 모델을 부른다.

</details>

### metalbear-co/jev-auto-approve

<details><summary>README 발췌</summary>

A GitHub Action that asks Jev whether a pull request needs a human reviewer, and approves it when the answer is confidently no.

</details>

### endomorphosis/JevOps

<details><summary>README 발췌</summary>

TypeSafe / Jev kernel, split from Lean Refactor Arena and other papers.

</details>

### Jev-Engineering/TypeWright

<details><summary>README 발췌</summary>

Declare a decision. Compile typed Jev questions. Measure them. Ship a JSON program.

</details>

### mblode/taste-lint

<details><summary>README 발췌</summary>

Catch AI slop before you ship.

</details>

### 123wwwa/JevTrace

<details><summary>README 발췌</summary>

▶ See how it works in 30 seconds

</details>

### ariel-frischer/jevkit

<details><summary>README 발췌</summary>

██ ██████ ██ ██ ██ ▄█▀ ██ ██████ ██ ██▄▄ ██▄▄██ ████ ██ ██ ████▀ ██▄▄▄▄ ▀██▀ ██ ▀█▄ ██ ██

</details>

### ismaildasci/claude-referee

<details><summary>README 발췌</summary>

An unofficial Claude Code plugin that checks "done" claims and small judgement calls with TypeSafe Jev, and keeps receipts.

</details>

### sedum-dev/sedum

<details><summary>README 발췌</summary>

Write browser tests in plain English, keep the full power of TypeScript, and run the whole suite on every pull request for dollars a month instead of thousands.

</details>

### Amine-LG/IntentSQL

<details><summary>README 발췌</summary>

Explore a SQLite database in plain English, then inspect how the answer was built.

</details>

### dharmeshgurnani/CodeOtter

<details><summary>README 발췌</summary>

CodeOtter is an open-source, self-hosted pull request review platform built for engineering teams who want calibrated code intelligence without sending private code to third-party SaaS clouds or paying $24–$30/developer/month.

</details>

### ashafizullah/jev-triage

<details><summary>README 발췌</summary>

Automated issue &amp; PR triage for open-source maintainers, powered by Jev (TypeSafe AI).

</details>

### NourEldinShobier/claude-tuning

<details><summary>README 발췌</summary>

Claude Code uses fewer tokens and answers faster. One install, about 5 minutes.

</details>

### PedroAlvarado/jev-scout

<details><summary>README 발췌</summary>

Jev Scout is an Agent Skill that reads your repository and tells you where TypeSafe Jev decision models would create the most value. It looks for three kinds of opportunity:

</details>

### sable-inc/jev-linter-action

<details><summary>README 발췌</summary>

Review repository files using your own yes/no questions. TypeSafe Jev returns probabilities; the action passes only when every expected answer meets its configured threshold. Runs on Node 24 with a checked-in bundle; consumers need no installation step.

</details>

### Thingscorp/jev-crawlers

<details><summary>README 발췌</summary>

Small unix tools for bug-discovery, powered by Jev. One tool, one job, JSON lines on stdin/stdout, composed with pipes.

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

### youkiti/tiab-review-plugin

<details><summary>README 발췌</summary>

Chrome拡張機能 - Systematic Reviewのタイトル・抄録スクリーニングを効率化するツール

</details>

### Bnymn1306/jev-github-quality-gate

<details><summary>README 발췌</summary>

A Jev-powered quality gate for GitHub issues, pull requests, and commits.

</details>

### Fox-Islam/browser-agent

<details><summary>README 발췌</summary>

Probably the fastest goal-driven browser agent for PHP.

</details>

### gentslava/pr-scout

<details><summary>README 발췌</summary>

Which pull requests are worth taking — in minutes and cents, not days of review.

</details>

### groktopus/codereview

<details><summary>README 발췌</summary>

A reusable, read-only code review CLI with deterministic planning, bounded specialist reviews, immutable Git evidence, reconciliation, and auditable reports. Its publish command currently validates and renders a read-only review preview; live publication is unavailable. It is still an experimental c

</details>

### joacotornello/jev-prompt-enhancer

<details><summary>README 발췌</summary>

Less guesswork. Clearer instructions. More room to build.

</details>

### lpliu-art/kestrel

<details><summary>README 발췌</summary>

Multi-language AI code review with calibrated probabilities: fast, testable, and deterministic enough to gate merges. 多语言 AI 代码评审：每条发现都有校准概率，结果可复现，可以直接当合并门禁用。

</details>

### phuthuycoding/jev-audit

<details><summary>README 발췌</summary>

AI-powered pre-commit auditor backed by TypeSafe System One (Jev). Sends your code changes to Jev as a State and evaluates 4 atomic questions in a single API call — no text generation, no parsing — typically ~300ms.

</details>

### sathariels/jevtriage

<details><summary>README 발췌</summary>

Triage gate for pull requests. A GitHub Action and small Python CLI that asks TypeSafe Jev (System One) one Choice question:

</details>

### SergeAx/scrutus

<details><summary>README 발췌</summary>

A linter for source-code comments. scrutus finds comments that are wrong or that say nothing the code does not, reports them like any other linter, and deletes the useless ones.

</details>

### Thestral12/pr-sieve

<details><summary>README 발췌</summary>

A GitHub Action that treats .jev.yml as a semantic linter for pull requests.

</details>

### tyler-james-bridges/qai-cli

<details><summary>README 발췌</summary>

Evidence-based QA checks from your terminal. The default path fetches a URL, records what came back, and grades it. No API key.

</details>

### arturobermejo/semcheck

<details><summary>README 발췌</summary>

A linter for Go whose rules are questions in plain English.

</details>

### BasmaAbouzied0/jev-auto-approve

<details><summary>README 발췌</summary>

Stop clicking "yes" on git status. A Claude Code hook where Jev (TypeSafe's System One model) approves read-only shell commands in a few hundred milliseconds, and everything else still asks you.

</details>

### BestNathan/system-one-code-explore

<details><summary>README 발췌</summary>

Researching whether a System One model, when placed inside a constrained harness, can replace or approximate System Two code search/localization well enough to find the files and concrete source evidence required by an engineering task — at materially lower latency and cost.

</details>

### gbesse/jev-trace

<details><summary>README 발췌</summary>

Generate a reviewable requirements-to-code-and-tests matrix, with uncovered clauses, orphan artifacts and exact change impact.

</details>

### gbesse/meaning-diff

<details><summary>README 발췌</summary>

Review changes in meaning between two document versions, with exact source sections and optional Jev classification.

</details>

### merefield/robotonrails

<details><summary>README 발췌</summary>

An English-first terminal assistant for your Rails application and its installed plugins.

</details>

### pkcoulon/jev-for-flutter

<details><summary>README 발췌</summary>

&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;

</details>

### ricardo-landim/claude-prompt-map

<details><summary>README 발췌</summary>

&gt; claude-prompt-map is a Claude Code hook that reads what you just typed, however loose (ideas thrown in out of order, a goal buried in context, a caution at the end, a question in the middle), and hands Claude a structured prompt map built from your literal words: goal, instructions, constraints, d

</details>

### Santhosh-Rubenraj-Solomon/ai-diff-reviewer

<details><summary>README 발췌</summary>

Reviews a merge request or pull request with Claude and posts inline comments. Deterministic code decides what the model sees; the model only judges. Every finding that gets posted quotes code that exists, at a line that changed.

</details>

### watanabe3tipapa/phobos

<details><summary>README 발췌</summary>

テキストは生成しない。確率と信頼度だけを、ひとつの画面へ。

</details>

### WesleySmits/codex-triage

<details><summary>README 발췌</summary>

Codex Triage is a local dashboard for reviewing your Codex tasks. It reads the Codex app-server on your computer, helps you find tasks and automation runs, and makes archiving a deliberate, reviewable action. Optional Jev analysis offers advice for tasks you select.

</details>

### 1hachem/check-agents-md

<details><summary>README 발췌</summary>

Hold an AGENTS.md to rules that live. Two checks run over what a pull request adds:

</details>

### actions-marketplace-validations/RomanXSad_jev-review-gate

<details><summary>README 발췌</summary>

A GitHub Actions check that reads your diff, applies a few local rules, and asks TypeSafe Jev (POST https://api.typesafe.ai/v1/systemone, model jev-latest) the questions in your rule pack. The action exits 0 or 1. Jev does not merge, tag, or push. Any later job that needs this one stays skipped unti

</details>

### actions-marketplace-validations/tomron_pr-ai-labeler

<details><summary>README 발췌</summary>

A TypeScript GitHub Action that uses TypeSafe AI's Jev to add multiple labels to a pull request. Jev answers one independent yes/no (noul) question per label in a single System One request. This is not a chat-completions classifier.

</details>

### akeldgord/JEVmail

<details><summary>README 발췌</summary>

JEVmail organizes it by what you need to do.

</details>

### alam0rt/mergegate

<details><summary>README 발췌</summary>

Decides whether a pull request is safe to merge without a human looking at it. Documentation-only changes and patch/minor dependency bumps pass. Everything else is sent for review.

</details>

### alexykn/jevscan

<details><summary>README 발췌</summary>

jevscan scans Python, Rust, Perl, TypeScript, and JavaScript source. Tree-sitter establishes syntax facts and source locations; Jev makes the configured semantic judgments. Source is sent to TypeSafe only during a live scan. Offline scans parse files and list discovered units without API calls or ca

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

### casperkwok/heihua-translator

<details><summary>README 발췌</summary>

贴一句看不懂的工作消息 → 先猜它什么意思 → 揭晓 AI 怎么读，以及它有多确定。

</details>

### cdubiel08/jev-test-triage

<details><summary>README 발췌</summary>

Mutation testing finds code changes that no test notices. Most of those "surviving mutants" are noise: equivalent rewrites, log and prompt wording, tuning constants, type annotations. jtt ranks them by whether a test that kills them is worth writing, using TypeSafe Jev judgments composed in ordinary

</details>

### cephalic-labs/nervon

<details><summary>README 발췌</summary>

A self-guided Classical Genetics learning coach. Explain an answer; Nervon asks focused diagnostic questions when needed, teaches from a subject knowledge base, and checks the idea in another question.

</details>

### cornifex/not-so-magic-8-ball

<details><summary>README 발췌</summary>

A Magic 8 Ball built as a React single-page app, served by a Cloudflare Worker. On the decisive ball the answer isn't random: Jev, TypeSafe AI's decision model, weighs every face of the die against your question and picks the best fit.

</details>

### diffpal/lintpal-demo

<details><summary>README 발췌</summary>

This repository demonstrates LintPal on a small Go HTTP service. The default branch is a passing baseline. The canonical pull request intentionally introduces authorization and input-validation violations so LintPal can publish inline findings and a deterministic gate result.

</details>

### Gorpokki/modhopper

<details><summary>README 발췌</summary>

Sort Minecraft mods from Modrinth and CurseForge into categories with Jev, TypeSafe's System One decision model. A proof of concept with Python and Rust implementations.

</details>

### hamzaahmadaslam/capability-diff

<details><summary>README 발췌</summary>

Compares who can run each operation of a WordPress plugin or theme in two versions, and reports the changes that let more users in.

</details>

### Ice-Hazymoon/jevci

<details><summary>README 발췌</summary>

Selective CI for GitHub Actions and GitLab CI. jevci compares a commit range, decides which CI jobs the change can affect, and skips the rest.

</details>

### JevForge/jev-pr-profiler

<details><summary>README 발췌</summary>

Evaluate pull request complexity and blast radius using TypeSafe Jev as a typed decision layer inside GitHub Actions.

</details>

### JevForge/jev-reviewer-navigator

<details><summary>README 발췌</summary>

Suggest the right pull request reviewers from CODEOWNERS, commit history, changed paths, components, labels, and teams — using TypeSafe Jev as a typed decision layer inside GitHub Actions.

</details>

### Kotakageyama/triage-policy

<details><summary>README 발췌</summary>

triage-policy is an OSS-oriented Semantic Security Policy Engine. It sits beside SIEM/XDR products; it does not replace them or modify alerts. It turns a normalized security alert into atomic semantic judgments, then applies a deterministic YAML policy to produce a shadow-mode decision.

</details>

### liujunsemail-blip/JevTetris

<details><summary>README 발췌</summary>

A browser-based Tetris demo with human and AI play modes. The AI layer supports three pluggable backends that all share the same design: the server enumerates every legal placement for the current piece, and the model only has to pick one — it never simulates a drop or reasons about geometry.

</details>

### MateusRogien/jev-focus

<details><summary>README 발췌</summary>

A Chrome extension that keeps YouTube usable for focus music. It hides every video that doesn't fit your current focus profile, before its thumbnail or title is drawn.

</details>

### mattyv/skope

<details><summary>README 발췌</summary>

Let agents act on production without handing them a shell.

</details>

### midhunkrishna-ops/terrajev

<details><summary>README 발췌</summary>

&gt; AI-assisted Terraform plan risk and security analyzer

</details>

### nicolas-found42/prompt-enhancer

<details><summary>README 발췌</summary>

A local prompt workbench that diagnoses a request with Jev, checks proposed success tests, tries bounded rewrites when a material gap is confirmed, and shows the original or selected prompt with its evidence. Runs and feedback are stored in a local SQLite database.

</details>

### rf-camillo/jev-aplausometro

<details><summary>README 발췌</summary>

Cada pessoa na plateia é uma probabilidade calibrada do Jev , da TypeSafe.

</details>

### Ripwords/agent-gate-loop

<details><summary>README 발췌</summary>

A GitHub Action that turns an issue into a pull request. An AI agent writes the change, and a gate checks it before a human sees it. The gate has four parts:

</details>

### rmachadosouza/pris-o_preventiva_TYPESAFE

<details><summary>README 발췌</summary>

Assistente que lê os autos (PDF) de um flagrante ou representação e gera uma minuta de decisão, acompanhada de um painel de sinais objetivos. A decisão é sempre do magistrado.

</details>

### RomanXSad/jev-review-gate

<details><summary>README 발췌</summary>

A GitHub Actions check that reads your diff, applies a few local rules, and asks TypeSafe Jev (POST https://api.typesafe.ai/v1/systemone, model jev-latest) the questions in your rule pack. The action exits 0 or 1. Jev does not merge, tag, or push. Any later job that needs this one stays skipped unti

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

### sumant1122/jevci

<details><summary>README 발췌</summary>

&gt; Sub-second code diff, commit message, and documentation quality gate powered by TypeSafe AI Jev SystemOne.

</details>

### SuperInstance/quilt-arch

<details><summary>README 발췌</summary>

&gt; Spawned by the fleet seedbox. The seed below is the charter of record — &gt; it is versioned in this repo's first commit and never edited afterward. &gt; Every experiment here must carry its decision rules as receipts dated &gt; BEFORE the run that produced the numbers.

</details>

### tomron/pr-ai-labeler

<details><summary>README 발췌</summary>

A TypeScript GitHub Action that uses TypeSafe AI's Jev to add multiple labels to a pull request. Jev answers one independent yes/no (noul) question per label in a single System One request. This is not a chat-completions classifier.

</details>

### vsl/ai-text-enhancer

<details><summary>README 발췌</summary>

A serverless AI application for turning repeated text-editing prompts into reusable multi-model workflows.

</details>

### srodrift/clerk

<details><summary>README 발췌</summary>

Don’t send it yet. Unsent checks the reply you are about to send against the promises you already made. If an earlier commitment becomes impossible, the reply stays unsent.

</details>
