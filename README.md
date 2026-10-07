# 🛰️ Jev Radar — TypeSafe Jev 오픈소스 구현 모음

> Jev(System One)를 쓰는 공개 리포를 매일 모아 한국어로 소개합니다. 프로그램이 읽는 데이터는 [`data/index.json`](data/index.json)에 있습니다(`radar-index/1` 형식).

**마지막 업데이트: 2026-10-07 09:21 KST** · 리포 7,590개 · 🆕 24시간 566 · 7일 2415 · 📚 문서 변경 63

코드 확인: ✅ 119 · ❌ 25 · ⏳ 7,446 · 한국어 요약을 기다리는 리포 6,935개

<a id="legend"></a>
## 표 보는 법

태그에 마우스를 올려도 설명이 나옵니다.

- ✅ 코드에서 Jev를 실제로 부르는 것을 확인했습니다. 따라 해 볼 구현을 찾는다면 이 표시부터 보세요.
- ❌ 코드 검색으로는 Jev 호출을 찾지 못했습니다. 문서에서만 언급했을 수 있습니다.
- ⏳ 아직 코드를 확인하지 않았습니다. 하루에 확인할 수 있는 양이 적어 대부분이 여기에 해당합니다. ⏳ 표시가 붙었다고 Jev를 안 쓴다는 뜻은 아닙니다.
- 🆕 최근 7일 안에 처음 발견한 리포, 🔥 최근 7일 동안 별이 5개 이상 늘어난 리포입니다.
- `choice` `score` `noul`은 그 코드가 Jev에 묻는 질문의 종류입니다. 차례로 선택지 고르기, 등급 매기기, 예/아니오 확률입니다.
- 요약 칸이 영어면 아직 한국어 요약이 없어 GitHub 설명을 그대로 보여 주는 것입니다.

분야: [🔀 라우팅·의도 분류 (1622)](#cat-routing) · [🛡️ 가드레일·모더레이션 (286)](#cat-guardrail) · [🏆 랭킹·검색·추천 (404)](#cat-ranking) · [🤖 에이전트·도구 선택 (1997)](#cat-agent) · [🧰 SDK·인프라·통합 (1169)](#cat-infra) · [📏 평가·채점 (542)](#cat-eval) · [🧪 견고성·감사 연구 (109)](#cat-robustness) · [💹 금융·트레이딩 (131)](#cat-finance) · [🎮 게임·인터랙티브 (123)](#cat-games) · [📝 콘텐츠·글쓰기 (280)](#cat-content) · [🗂️ 데이터 정제·라벨링 (120)](#cat-data) · [🎧 고객지원·CRM (63)](#cat-support) · [🧑‍💻 개발 도구·코드 리뷰 (134)](#cat-devtools) · [📚 목록·레퍼런스 (88)](#cat-catalog) · [🧩 기타 (522)](#cat-other)

## 🆕 새로 발견 (7일)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | 40038 | 4409 | Run frontier MoE models on hardware you already own — pure C, zero deps, experts streamed from disk. Tiny engine, immense model. 🐦 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-06 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22586 | 1974 | LLM inference server with continuous batching &amp; SSD caching for Apple Silicon — managed from the macOS menu bar | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-06 |
| [duolahypercho/codex-router](https://github.com/duolahypercho/codex-router) | 3919 | 360 | External-model router for Codex with guided Kimi OAuth/API, DeepSeek, safe migration, and rollback. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-06 |
| [samugit83/redamon](https://github.com/samugit83/redamon) | 2943 | 608 | Open-source, self-hosted AI penetration testing framework: maps your attack surface into a graph, autonomously exploits it from a Kali sandbox with human approval gates, and opens PRs that fix what it finds. MCP both ways: plug in any MCP server as a tool, or drive RedAmon from Claude Code or your own agent. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-05 |
| [cisco-ai-defense/skill-scanner](https://github.com/cisco-ai-defense/skill-scanner) | 2578 | 329 | AI 에이전트 스킬 파일에서 프롬프트 인젝션, 데이터 유출, 악성 코드 패턴을 탐지하는 보안 분석 도구다.<br>스킬 파일의 의미적 위험 요소나 악성 행위 포함 여부를 choice 또는 noul로 판정하도록 모델에 질문할 수 있다.<br>정적 분석(YARA-X), AST·데이터 흐름 분석, cel-go 기반 규칙 엔진, 선택적 LLM 판정기를 결합하여 다층으로 위험을 검사한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-05 |
| [AnotiaWang/awesome-decision-models](https://github.com/AnotiaWang/awesome-decision-models) | 615 | 126 | Jev와 같은 System One 판단 모델과 관련 호스팅 API, 오픈 모델, SDK, 벤치마크 정보를 한데 모은 큐레이션 목록이다.<br>README에 판단 지점 설명이 없다.<br>주요 벤더의 상용 API뿐 아니라 Clef 같은 공개 가중치 모델과 오픈소스 런타임 현황까지 폭넓게 정리했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-06 |
| [InternLM/Intern-Decision](https://github.com/InternLM/Intern-Decision) | 609 | 28 | 상태와 이미지 및 여러 유형화된 질문을 받아 확률이 포함된 결정을 출력하는 멀티모달 의사결정 모델이다.<br>마리오나 둠 같은 게임 제어와 브라우저 조작 상황에서 choice, score, noul 형식의 질문으로 다음 행동을 묻는다.<br>Qwen3.5 언어 백본만 미세조정하고 비전 타워는 동결하며 단일 순방향 패스에서 유효 토큰 로짓만 softmax하여 결과를 얻는다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [Trans-N-ai/swama](https://github.com/Trans-N-ai/swama) | 592 | 31 | High-performance MLX-based LLM inference engine for macOS with native Swift implementation | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-05 |
| [himomohi/AirTranslate](https://github.com/himomohi/AirTranslate) | 460 | 51 | AirTranslate macOS app | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-04 |
| [qybaihe/mu](https://github.com/qybaihe/mu) | 404 | 42 | 코딩 과정에서 발생하는 컨텍스트 관리와 도구 실행 승인 같은 반복 결정을 작은 판사 모델에 맡기는 코딩 에이전트다.<br>입력 메시지 유형 파악, 도구 출력의 컨텍스트 반영 여부, 위험 명령 승인 등 매 턴마다 발생하는 세부 질문을 판단하게 한다.<br>무거운 주 모델 대신 Jev 같은 경량 판사 모델이 서른다섯 개 분기 지점을 choice나 noul 형태로 빠르게 평가하도록 설계했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-06 |
| [tinystruct/tinystruct](https://github.com/tinystruct/tinystruct) | 359 | 47 | 웹과 CLI 애플리케이션 개발을 지원하며 AI 통합과 플러그인 구조를 지향하는 경량 자바 프레임워크다.<br>README에 판단 지점 설명이 없다.<br>자바 클래스에 액션 어노테이션을 붙여 CLI 명령과 HTTP 엔드포인트를 동시에 다룬다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [codejunkie99/keel](https://github.com/codejunkie99/keel) | 328 | 44 | macOS 환경에서 여러 코딩 에이전트를 연결해 작업을 실행하고 라우팅을 제어하는 로컬 중심의 개발 작업 공간이다.<br>새로 등록된 작업에 호스트가 준비한 후보군 중 적합한 실행 경로를 선택하거나 기권할지 판단을 맡긴다.<br>Rust와 GPUI 기반으로 작성되었으며 호스트가 선택 결과를 검증해 만료되거나 거부된 경우 기본 경로로 되돌린다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-25 |
| [CharlesFeng0314/JEV_sees](https://github.com/CharlesFeng0314/JEV_sees) | 303 | 11 | 카메라 영상이나 이미지에서 객체를 감지하고 추적해 시각적 판단 질문을 JEV API로 전달하는 도구다.<br>보행자의 사고 위험 여부나 버스 색상처럼 장면 속 객체 상태를 choice 목록, 예/아니오 확률인 noul, 루브릭 점수로 묻는다.<br>로컬에서 객체 인식과 트래킹 및 장면 메모리를 관리하면서 한 번의 API 호출로 프레임 내 여러 객체에 대한 구조화된 판단을 동시에 처리한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [finch-xu/cc-router](https://github.com/finch-xu/cc-router) | 270 | 31 | 本地运行的大模型聚合网关，GUI桌面端app，零代码部署，把Coding Plan、大模型 API 额度聚合成一个虚拟 Plan，一键接入 Claude Code、Claude Desktop App、OpenClaw、OpenCode 等工具。Bundle your scattered Token Plan, Coding Plan, and LLM API quotas into a single virtual Plan, and plug it into Claude Code, Claude Desktop App, OpenClaw, OpenCode, and more. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-06 |
| [Protocol-Lattice/go-agent](https://github.com/Protocol-Lattice/go-agent) | 258 | 33 | An agent framework for Go with graph-aware memory, UTCP-native tools, and multi-agent orchestration. Built for production. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |

## 🔥 급상승 (7일)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 31214 | 2757 | 100개 이상의 언어로 텍스트를 분석해 단일 순방향 패스에서 선택, 점수, 참/거짓 판단을 도출하는 비자기회귀 의사결정 엔진<br>담당 부서(choice), 긴급도 수준(score), 이탈 위험 여부(noul) 등 입력 텍스트에 대한 구조화된 질문을 판단시킴<br>비자기회귀 단일 패스로 처리하며 언어별 체크포인트 자동 라우팅 및 RLCD 학습을 거치고 최대 8,192 토큰 컨텍스트를 지원함 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +2614](#legend "최근 7일 동안 별이 2614개 늘었습니다") | 2026-10-05 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 124417 | 11997 | Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +1946](#legend "최근 7일 동안 별이 1946개 늘었습니다") | 2026-10-06 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 251695 | 54113 | Nous Research가 개발한 자가 학습 루프 및 멀티 플랫폼 연동 기능을 갖춘 오픈소스 AI 에이전트 프레임워크<br>README에 판단 지점 설명 없음<br>경험 기반 자율 스킬 생성, FTS5 세션 검색, Honcho 사용자 모델링, 다양한 샌드박스 백엔드 및 메신저 연동을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +1627](#legend "최근 7일 동안 별이 1627개 늘었습니다") | 2026-10-07 |
| [trycua/cua](https://github.com/trycua/cua) | 28460 | 2024 | AI 에이전트가 멀티 OS 환경에서 데스크톱 GUI 및 앱을 조작하고 평가할 수 있도록 격리 인프라와 드라이버를 제공하는 프레임워크다.<br>README에 판단 지점 설명 없음<br>macOS, Windows, Linux 환경을 지원하며 애플 실리콘용 로컬 VM(Lume)과 클라우드 샌드박스(Fleet), 백그라운드 UI 조작 기능을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +1171](#legend "최근 7일 동안 별이 1171개 늘었습니다") | 2026-10-07 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 212048 | 28229 | 개발자가 터미널이나 데스크톱 환경에서 코드 분석 및 개발 작업을 자동화하기 위해 사용하는 오픈소스 AI 코딩 에이전트 도구다.<br>README에 판단 지점 설명 없음<br>개발용 build 에이전트와 파일 수정을 제한하는 읽기 전용 plan 에이전트 및 하위 general 에이전트를 내장해 작업 목적별로 전환할 수 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +1116](#legend "최근 7일 동안 별이 1116개 늘었습니다") | 2026-10-07 |
| [CopilotKit/openmuse](https://github.com/CopilotKit/openmuse) | 4086 | 565 | A personal agent with a browser, terminal, files, and work that keeps going built with CopilotKit and AG-UI. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +875](#legend "최근 7일 동안 별이 875개 늘었습니다") | 2026-10-06 |
| [Effect-TS/effect](https://github.com/Effect-TS/effect) | 17119 | 835 | TypeScript 개발자가 타입 안전한 에러 처리, 의존성 주입, 구조적 동시성 등을 구현하는 데 사용하는 표준 라이브러리 모노레포다.<br>README에 판단 지점 설명 없음<br>코어 로직뿐만 아니라 런타임 플랫폼 추상화, 각종 SQL 클라이언트, AI 제공자 연동 모듈을 모노레포 패키지로 함께 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +862](#legend "최근 7일 동안 별이 862개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 22198 | 1602 | 동적 인덱싱된 요소 목록을 기반으로 웹 작업을 고속으로 수행하도록 돕는 브라우저 에이전트 라이브러리다.<br>현재 관찰된 요소 테이블에서 수행할 동작(CLICK, TYPE_TEXT 등)과 대상 요소를 단일 요청으로 선택한다.<br>스크린샷 없이 구조화된 텍스트 상태만 전달하며, 동작과 대상 선택을 1회 네트워크 요청으로 묶어 처리 속도를 높였다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +800](#legend "최근 7일 동안 별이 800개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-30 |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 8604 | 564 | Qwen 기반으로 직접 학습하고 자체 호스팅할 수 있도록 TypeSafe Jev 호환 API를 제공하는 경량 의사결정 모델 제품군<br>주어진 텍스트에 대해 choice(다중 선택), noul(예/아니오), score(평가 등급) 형태의 질문들을 한 번의 요청으로 동시에 판단<br>TypeSafe Python SDK와 호환되는 드롭인 대체재이며 0.8B부터 27B까지 제공되어 로컬 머신부터 GPU 서버까지 배포 가능 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +723](#legend "최근 7일 동안 별이 723개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-06 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 109990 | 21141 | TradingAgents: Multi-Agents LLM Financial Trading Framework | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +723](#legend "최근 7일 동안 별이 723개 늘었습니다") | 2026-10-03 |

## 📚 문서·모델 변경 (7일)

- 새 페이지 `https://mintlify.com/` — [docs-llms](https://docs.typesafe.ai/llms.txt)
- 변경 `내용 변경` — [docs-models](https://docs.typesafe.ai/models.md)
- 변경 `내용 변경` — [docs-jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)
- 변경 `내용 변경` — [docs-api](https://docs.typesafe.ai/api.md)
- 변경 `내용 변경` — [docs-agent-skill](https://docs.typesafe.ai/agent-skill.md)
- 변경 `https://docs.typesafe.ai/confidence` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/model-jaggedness/jev-1.13` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/models` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APIConnectionError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APIError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APIPromise` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APITimeoutError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APIUserAbortError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/AuthenticationError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/BadRequestError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/InternalServerError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/NotFoundError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/PermissionDeniedError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/RateLimitError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/TypeSafeClient` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/TypeSafeError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/UnprocessableEntityError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/functions/choice` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/functions/noul` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/functions/score` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/ChoiceQuestion` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/ChoiceResponse` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/Logger` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/ModelCard` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/Models` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/NoulQuestion` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/NoulResponse` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/Questions` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/RequestOptions` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/RetryPolicy` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/ScoreQuestion` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/ScoreResponse` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/SystemOneRequest` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/SystemOneRequestPayload` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/SystemOneResult` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/TypeSafeClientConfig` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/Usage` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/WithResponse` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/ChoiceCriteria` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/Description` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/EntryType` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/EnvVar` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/Fetch` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/JsonValue` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/LogLevel` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/Question` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/ResultFor` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/ScoreCriteria` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/ScoreLegend` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/ScoreOf` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/ENV` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/LOG_LEVELS` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/VERSION` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/changelog` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `내용 변경` — [docs-models](https://docs.typesafe.ai/models.md)
- 변경 `내용 변경` — [docs-jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)

## 분야별

<a id="cat-routing"></a>
### 🔀 라우팅·의도 분류 (1622)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 31214 | 2757 | 100개 이상의 언어로 텍스트를 분석해 단일 순방향 패스에서 선택, 점수, 참/거짓 판단을 도출하는 비자기회귀 의사결정 엔진<br>담당 부서(choice), 긴급도 수준(score), 이탈 위험 여부(noul) 등 입력 텍스트에 대한 구조화된 질문을 판단시킴<br>비자기회귀 단일 패스로 처리하며 언어별 체크포인트 자동 라우팅 및 RLCD 학습을 거치고 최대 8,192 토큰 컨텍스트를 지원함 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +2614](#legend "최근 7일 동안 별이 2614개 늘었습니다") | 2026-10-05 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 560 | 80 | Claude Code와 OpenAI Codex CLI에서 사용자 프롬프트 난이도에 따라 모델을 턴 단위로 자동 라우팅해 주는 CLI 도구다.<br>사용자 프롬프트의 복잡도, 추론 필요성, 도구 복잡도, 컨텍스트 크기 등을 평가해 빠른 티어(저비용)와 강력한 티어 중 적절한 모델 티어를 선택하도록 판단시킨다.<br>루프백 프록시 방식으로 원본 CLI의 로그인 세션과 권한을 그대로 유지하며, /jev-explain 커맨드로 판단 근거 지표와 신뢰도를 확인할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +72](#legend "최근 7일 동안 별이 72개 늘었습니다") | 2026-09-19 |
| [jerryjliu/docjev](https://github.com/jerryjliu/docjev) | 516 | 34 | A very fast document classifier/splitter using Jev  | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +36](#legend "최근 7일 동안 별이 36개 늘었습니다") | 2026-09-26 |
| [logan-markewich/jeff](https://github.com/logan-markewich/jeff) | 295 | 23 | A self-hosted drop-in replacement for TypeSafe's jev, powered by GliFormer. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +28](#legend "최근 7일 동안 별이 28개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-20 |
| [samuelfaj/distill](https://github.com/samuelfaj/distill) | 691 | 44 | Get FAR MORE done with FAR FEWER tokens 🔥 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-06 |
| [nidhi-singh02/agent-router](https://github.com/nidhi-singh02/agent-router) | 110 | 10 | CLI that picks Cursor, Claude Code, Codex, or OpenCode + model/effort for a task, then launches it. Powered by Jev and Herdr | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +13](#legend "최근 7일 동안 별이 13개 늘었습니다") | 2026-09-27 |
| [Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev) | 96 | 10 | Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +7](#legend "최근 7일 동안 별이 7개 늘었습니다") | 2026-09-28 |
| [yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router) | 52 | 4 | Hono 프레임워크에서 메서드나 경로 대신 자연어 설명으로 들어오는 HTTP 요청을 분류해 처리하는 시맨틱 라우터다.<br>요청의 메서드·URL·헤더·본문이 등록된 각 라우트 설명과 일치하는지 여부를 Noul(예/아니오) 확률로 병렬 판별시킨다.<br>HTTP 요청마다 모델 호출 비용과 지연이 발생하며, 등록 순서대로 확률이 임계값을 넘는 첫 번째 라우트가 매칭된다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-18 |
| [kunchenguid/firstmate](https://github.com/kunchenguid/firstmate) | 7615 | 2452 | Talk to one agent. Ship with a crew. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +278](#legend "최근 7일 동안 별이 278개 늘었습니다") | 2026-10-06 |
| [mizorewww/laya-mlx](https://github.com/mizorewww/laya-mlx) | 6795 | 546 | Native MLX runtime for Laya typed decision models — 7–14 ms short decisions on M3 Max. No text generation, PyTorch, or cloud API. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +164](#legend "최근 7일 동안 별이 164개 늘었습니다") | 2026-10-02 |

1622개 모두 보기 → [categories/routing.md](categories/routing.md)

<a id="cat-guardrail"></a>
### 🛡️ 가드레일·모더레이션 (286)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [qkal/Canny](https://github.com/qkal/Canny) | 120 | 14 | Claude Code와 Codex CLI에서 코딩 에이전트가 검증 절차 없이 작업을 마쳤다고 주장하지 못하게 감시하는 훅 도구이다.<br>에이전트 메시지가 작업 완료를 주장하는지, 변경된 diff가 특정 규칙을 위반했는지 여부를 예/아니오 확률로 판단시킨다.<br>런타임 의존성이 없고, 원장의 사실 기록만 작업을 차단할 수 있으며 Jev의 판단 결과는 차단 없이 에이전트의 컨텍스트 조언으로만 사용된다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +15](#legend "최근 7일 동안 별이 15개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-22 |
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 160 | 16 | Pi 코딩 에이전트의 도구 호출과 출력 결과를 TypeSafe Jev API로 검사하고 제어하는 확장 도구다.<br>명령의 파괴성·데이터 유출·범위 초과·피해 수준과 출력의 비밀정보 누출·실패 유형을 noul, score, choice로 판단한다.<br>도구 실행 전 게이트 판단을 한 번의 요청(약 300ms)으로 처리하며, 오류 발생 시 실행을 차단하지 않는 fail-open 방식으로 동작한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +9](#legend "최근 7일 동안 별이 9개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-01 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 62 | 9 | 다양한 코딩 에이전트의 도구 호출과 결과를 검사해 위험한 명령과 프롬프트 인젝션을 차단하는 보안 훅 라이브러리다.<br>도구 호출의 위험도(risk), 사용자 요청 부합 여부(user_requested), 신뢰할 수 없는 출처 기반 여부(from_untrusted)를 질의해 판단한다.<br>외부 의존성 없이 Claude Code, Cursor 등 여러 에이전트에 thin 어댑터로 연결되며 도구 실행 전후 및 인스트럭션 파일을 검사한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +16](#legend "최근 7일 동안 별이 16개 늘었습니다") | 2026-10-02 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | 88 | 9 | 웹페이지 내 DOM 요소를 탐색해 TypeSafe Jev 모델의 판단에 따라 광고 요소를 실시간으로 제거하는 크롬 확장 프로그램이다.<br>추출된 각 DOM 후보 요소의 태그, 클래스, 텍스트 요약 등을 바탕으로 유료 광고(paid advertisement)인지 여부를 noul 확률 질문으로 판단시킨다.<br>광고 후보 선별과 배치는 순수 코드로 처리하고 시맨틱 판별만 Jev에 일괄 요청하며, 설정된 임계 확률을 넘기면 애니메이션과 함께 요소를 제거한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-17 |
| [cisco-ai-defense/skill-scanner](https://github.com/cisco-ai-defense/skill-scanner) | 2578 | 329 | AI 에이전트 스킬 파일에서 프롬프트 인젝션, 데이터 유출, 악성 코드 패턴을 탐지하는 보안 분석 도구다.<br>스킬 파일의 의미적 위험 요소나 악성 행위 포함 여부를 choice 또는 noul로 판정하도록 모델에 질문할 수 있다.<br>정적 분석(YARA-X), AST·데이터 흐름 분석, cel-go 기반 규칙 엔진, 선택적 LLM 판정기를 결합하여 다층으로 위험을 검사한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-05 |
| [firelex/jeff](https://github.com/firelex/jeff) | 1410 | 68 | Millisecond decisions, any domain: a 0.8B open "System 1" model that picks between your options with calibrated probabilities. One base, swappable LoRA adapters, on your own hardware. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +398](#legend "최근 7일 동안 별이 398개 늘었습니다") | 2026-10-06 |
| [hellogumbo/awesome-jev](https://github.com/hellogumbo/awesome-jev) | 215 | 68 | A community directory of projects built on Jev, TypeSafe AI's System One model. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +7](#legend "최근 7일 동안 별이 7개 늘었습니다") | 2026-10-06 |
| [MillionSend/millionsend](https://github.com/MillionSend/millionsend) | 212 | 19 | AWS SES를 기반으로 자체 호스팅하거나 클라우드로 사용할 수 있는 Resend 호환 오픈소스 이메일 발송 플랫폼이다.<br>발송된 이메일 샘플에 대해 유해 콘텐츠 및 어뷰징 여부를 판단하도록 백그라운드에서 점수 채점(score)을 요청한다.<br>발송 지연을 막기 위해 SES 수락 후 백그라운드에서 비동기로 샘플을 채점하며, 셀프 호스트 환경에서는 기본 비활성화되어 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +42](#legend "최근 7일 동안 별이 42개 늘었습니다") | 2026-10-03 |
| [zhuobichen/weflow-cli](https://github.com/zhuobichen/weflow-cli) | 78 | 33 | 本地优先的微信数据工具：聊天记录查询导出、公众号日报与个人知识库（MCP 兼容） | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [TiraelSedai/ClubDoorman](https://github.com/TiraelSedai/ClubDoorman) | 69 | 11 | 텔레그램 대형 채팅방에서 캡차, 텍스트 필터, LLM을 결합해 스팸을 감지하고 차단하는 텔레그램 안티스팸 봇이다.<br>기존 ML 점수가 모호한 구간(-0.5~0.5)의 메시지가 스팸(spam)인지 정상(ham)인지와 해당 분류의 확신도를 판단시킨다.<br>Jev와 Luna 두 모델의 라벨 일치와 80% 이상 확신도를 모두 요구해 자동 데이터셋 추가 및 재학습 파이프라인의 오탐을 방지한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |

286개 모두 보기 → [categories/guardrail.md](categories/guardrail.md)

<a id="cat-ranking"></a>
### 🏆 랭킹·검색·추천 (404)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [zilliztech/deep-searcher](https://github.com/zilliztech/deep-searcher) | 8315 | 809 | Open Source Deep Research Alternative to Reason and Search on Private Data. Written in Python. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +26](#legend "최근 7일 동안 별이 26개 늘었습니다") | 2026-09-22 |
| [zilliztech/GPTCache](https://github.com/zilliztech/GPTCache) | 8208 | 596 | Semantic cache for LLMs. Fully integrated with LangChain and llama_index.  | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-22 |
| [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | 774 | 45 | Stop re-teaching your agent. Make your agent's memory work like a brain. Hippo is long-term memory for coding agents. It's a critical layer for your AI harness that connects across your different tools (Cursor, Claude Code, Codex). It keeps your proprietary data completely local, and it actually learns over time. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +8](#legend "최근 7일 동안 별이 8개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 514 | 62 | 자연어 질의를 바탕으로 검색 소스·기간을 결정하고 검색 결과의 관련도를 채점하여 순위를 매기는 웹 검색 애플리케이션이다.<br>사용자 질의에 적합한 검색어·소스·기간 선택과 검색된 결과 항목별 관련도 점수 평가를 수행하도록 한다.<br>생성형 답변 없이 결과별 관련도 점수와 링크를 노출하며, Cloudflare Workers 기반으로 다중 엔진 병렬 검색과 결과 스트리밍을 처리한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +25](#legend "최근 7일 동안 별이 25개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-02 |
| [can1357/jegrep](https://github.com/can1357/jegrep) | 111 | 9 | Semantic grep: find code by describing what you're looking for, powered by Jev. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +12](#legend "최근 7일 동안 별이 12개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-26 |
| [ellipsis-dev/blink](https://github.com/ellipsis-dev/blink) | 99 | 11 | 자연어 질의를 기반으로 워커 앙상블이 파일 시스템을 탐색해 관련 파일을 찾아주는 코드베이스 검색 CLI 도구다.<br>자연어 질의에 대해 각 파일 및 폴더 이름이 얼마나 부합하는지 관련도 점수를 매긴다.<br>경로 점수에 비례해 다수의 워커를 확률적으로 분배·이동시키며, 최종 도달한 워커 비율로 검색 결과를 랭킹화한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +7](#legend "최근 7일 동안 별이 7개 늘었습니다") | 2026-09-16 |
| [jundot/omlx](https://github.com/jundot/omlx) | 22586 | 1974 | LLM inference server with continuous batching &amp; SSD caching for Apple Silicon — managed from the macOS menu bar | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-06 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 8780 | 1123 | Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML editors with a built-in AI agent, plus a \`genoffice\` CLI and agent skill so Claude Code, Codex and Cursor can create and edit real .docx/.xlsx/.pptx files locally. Bring your own key. macOS, Windows &amp; Linux. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +615](#legend "최근 7일 동안 별이 615개 늘었습니다") | 2026-10-06 |
| [SamurAIGPT/llm-wiki-agent](https://github.com/SamurAIGPT/llm-wiki-agent) | 3601 | 417 | A personal knowledge base that builds and maintains itself. Drop in sources — Claude (or Codex/Gemini) reads them, extracts knowledge, and maintains a persistent interlinked wiki. Works with Claude Code, Codex, OpenCode, Gemini CLI. No API key needed. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +12](#legend "최근 7일 동안 별이 12개 늘었습니다") | 2026-10-05 |
| [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | 2722 | 264 | A persistent, unified memory layer for all your AI agents (e.g. Claude Code, Codex, DSH), backed by Markdown and Milvus. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +40](#legend "최근 7일 동안 별이 40개 늘었습니다") | 2026-09-24 |

404개 모두 보기 → [categories/ranking.md](categories/ranking.md)

<a id="cat-agent"></a>
### 🤖 에이전트·도구 선택 (1997)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 251695 | 54113 | Nous Research가 개발한 자가 학습 루프 및 멀티 플랫폼 연동 기능을 갖춘 오픈소스 AI 에이전트 프레임워크<br>README에 판단 지점 설명 없음<br>경험 기반 자율 스킬 생성, FTS5 세션 검색, Honcho 사용자 모델링, 다양한 샌드박스 백엔드 및 메신저 연동을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +1627](#legend "최근 7일 동안 별이 1627개 늘었습니다") | 2026-10-07 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187673 | 45940 | 자연어 지시나 시각적 빌더를 통해 자동화된 AI 에이전트 워크플로를 제작하고 실행하는 오픈소스 플랫폼이다.<br>README에 판단 지점 설명 없음<br>자연어 대화형 생성 도구(AutoPilot)와 노드 기반 시각적 빌더(Build)를 제공하여 에이전트의 세부 실행 단계를 제어할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +53](#legend "최근 7일 동안 별이 53개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-06 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 39317 | 3100 | AI 에이전트의 지식, 메모리, 스킬을 가상 파일 시스템 형태로 일원화해 탐색·관리할 수 있게 돕는 컨텍스트 데이터베이스다.<br>README에 판단 지점 설명 없음<br>viking:// 가상 파일 시스템 구조와 L0~L2 계층 요약을 통해 전체 본문 로드 전 관련성을 검토하고 세션을 마크다운 파일로 기록한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +338](#legend "최근 7일 동안 별이 338개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | 30452 | 4843 | AI 에이전트가 외부 앱과 연동할 수 있도록 인증, 세션 관리, 도구 검색을 제공하는 SDK 모노리포다.<br>README에 판단 지점 설명 없음<br>모든 도구를 컨텍스트에 올리지 않고 런타임 메타 도구로 탐색·실행하며, 호스팅된 MCP 엔드포인트 생성을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +86](#legend "최근 7일 동안 별이 86개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [trycua/cua](https://github.com/trycua/cua) | 28460 | 2024 | AI 에이전트가 멀티 OS 환경에서 데스크톱 GUI 및 앱을 조작하고 평가할 수 있도록 격리 인프라와 드라이버를 제공하는 프레임워크다.<br>README에 판단 지점 설명 없음<br>macOS, Windows, Linux 환경을 지원하며 애플 실리콘용 로컬 VM(Lume)과 클라우드 샌드박스(Fleet), 백그라운드 UI 조작 기능을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +1171](#legend "최근 7일 동안 별이 1171개 늘었습니다") | 2026-10-07 |
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 22198 | 1602 | 동적 인덱싱된 요소 목록을 기반으로 웹 작업을 고속으로 수행하도록 돕는 브라우저 에이전트 라이브러리다.<br>현재 관찰된 요소 테이블에서 수행할 동작(CLICK, TYPE_TEXT 등)과 대상 요소를 단일 요청으로 선택한다.<br>스크린샷 없이 구조화된 텍스트 상태만 전달하며, 동작과 대상 선택을 1회 네트워크 요청으로 묶어 처리 속도를 높였다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +800](#legend "최근 7일 동안 별이 800개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-30 |
| [elie222/inbox-zero](https://github.com/elie222/inbox-zero) | 12424 | 1563 | 이메일 정리, 답장 초안 작성, 콜드 메일 차단 등을 자동화하는 오픈소스 AI 개인 이메일 어시스턴트 애플리케이션이다.<br>README에 판단 지점 설명 없음<br>Next.js와 Prisma 기반 풀스택 구조이며, 로컬 개발을 위해 Google 및 Microsoft 에뮬레이터 Docker 프로필을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +54](#legend "최근 7일 동안 별이 54개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-07 |
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 7448 | 510 | Claude Code 및 npm 환경에서 대화 요약 대신 불필요한 도구 호출과 결과를 제거해 컨텍스트를 압축하는 도구다.<br>각 도구 호출에 대해 호출 기록 자체를 유지할지와 실행 결과를 그대로 유지할지를 noul(예/아니오 확률)로 묻는다.<br>텍스트 요약 없이 원본 텍스트를 유지하며 Jev 판정에 따라 도구 호출과 결과를 유지·잘라내기·삭제하는 방식으로 동작한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +247](#legend "최근 7일 동안 별이 247개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-18 |
| [jev-chat/jev-chat-jarvis](https://github.com/jev-chat/jev-chat-jarvis) | 7398 | 1225 | 안드로이드 메신저 화면을 비침습적으로 읽어 상대방 의도 분석과 답변 후보 작성을 돕는 대화 보조 도구다.<br>상대방의 실제 의도, 위험 등급(1~9), 즉시 답장 여부, 최적 행동을 진단하고 생성된 3개 후보 답장의 적합도를 순위 매긴다.<br>앱 후킹 없이 접근성 서비스와 오프라인 OCR로 화면만 읽으며 자동 발송 대신 입력창 텍스트 삽입까지만 수행한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +293](#legend "최근 7일 동안 별이 293개 늘었습니다") | 2026-10-06 |
| [ThinkInAIXYZ/deepchat](https://github.com/ThinkInAIXYZ/deepchat) | 6355 | 748 | 로컬 우선(local-first) 오픈소스 AI 데스크톱 클라이언트로, 사용자가 다양한 LLM과 MCP, 에이전트 스킬을 데스크톱 환경에서 실행할 때 쓴다.<br>README에 판단 지점 설명 없음<br>Tape.systems 철학에 기반한 세션 관리와 함께 MCP, ACP 지원 및 메신저 연계 원격 제어 기능을 통합 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-03 |

1997개 모두 보기 → [categories/agent.md](categories/agent.md)

<a id="cat-infra"></a>
### 🧰 SDK·인프라·통합 (1169)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 43354 | 9286 | Claude, OpenAI, Gemini 등 AI 구독 할당량을 통합 관리하고 공유할 수 있게 중계하는 API 게이트웨이 서비스다.<br>README에 판단 지점 설명 없음<br>Go 백엔드, Vue 프론트엔드, Redis, PostgreSQL 스택을 활용하여 계정 공유 및 비용 분담 중계 플랫폼을 구현했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +284](#legend "최근 7일 동안 별이 284개 늘었습니다") | 2026-10-06 |
| [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) | 27988 | 2439 | LLM과 도구·데이터를 연결하는 Model Context Protocol(MCP) 서버와 클라이언트를 파이썬으로 손쉽게 개발하도록 돕는 프레임워크다.<br>README에 판단 지점 설명 없음<br>데코레이터 기반으로 파이썬 함수를 감싸 스키마 생성, 입력 검증, 프로토콜 수명주기 관리를 자동화하여 MCP 구축을 단순화했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +48](#legend "최근 7일 동안 별이 48개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [vercel/ai](https://github.com/vercel/ai) | 27152 | 5271 | The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents  | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +108](#legend "최근 7일 동안 별이 108개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-07 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 11611 | 1089 | 멀티모달 AI 애플리케이션을 위해 벡터 유사도 검색과 SQL 쿼리를 제공하는 오픈소스 임베디드 검색 데이터베이스 라이브러리다.<br>README에 판단 지점 설명 없음<br>Lance 컬럼형 포맷을 기반으로 구축되어 대규모 벡터 및 멀티모달 데이터의 무복사(Zero-copy) 처리와 자동 버전 관리를 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +53](#legend "최근 7일 동안 별이 53개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 8604 | 564 | Qwen 기반으로 직접 학습하고 자체 호스팅할 수 있도록 TypeSafe Jev 호환 API를 제공하는 경량 의사결정 모델 제품군<br>주어진 텍스트에 대해 choice(다중 선택), noul(예/아니오), score(평가 등급) 형태의 질문들을 한 번의 요청으로 동시에 판단<br>TypeSafe Python SDK와 호환되는 드롭인 대체재이며 0.8B부터 27B까지 제공되어 로컬 머신부터 GPU 서버까지 배포 가능 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +723](#legend "최근 7일 동안 별이 723개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-06 |
| [maximhq/bifrost](https://github.com/maximhq/bifrost) | 8586 | 1351 | 여러 AI 프로바이더를 OpenAI 호환 단일 API로 연결하고 로드 밸런싱과 장애 복구를 지원하는 AI 게이트웨이다.<br>README에 판단 지점 설명 없음<br>MCP(Model Context Protocol) 게이트웨이 기능과 시맨틱 캐싱, 웹 UI 및 Go SDK를 기본 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +135](#legend "최근 7일 동안 별이 135개 늘었습니다") | 2026-10-06 |
| [agentgateway/agentgateway](https://github.com/agentgateway/agentgateway) | 5203 | 924 | AI 에이전트와 LLM, MCP 도구 간의 통신에 보안·관측성·거버넌스를 제공하는 오픈소스 프록시 게이트웨이다.<br>README에 판단 지점 설명 없음<br>MCP와 A2A 프로토콜을 지원하며 쿠버네티스 Gateway API 확장 및 CEL 기반 정책 엔진을 통합해 인프라 레벨에서 라우팅과 제어를 수행한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +108](#legend "최근 7일 동안 별이 108개 늘었습니다") | 2026-10-06 |
| [ax-llm/ax](https://github.com/ax-llm/ax) | 2959 | 196 | TypeScript를 기반으로 다양한 언어 환경에서 DSPy 스타일의 구조화된 LLM 생성과 에이전트 파이프라인을 구축하는 프레임워크다.<br>README에 판단 지점 설명 없음<br>단일 시그니처와 프로그래밍 모델을 Python, Java, C++, Go, Rust 라이브러리로 컴파일하여 다국어 환경에서 동일한 추론 계약을 유지한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-06 |
| [Mapika/decider](https://github.com/Mapika/decider) | 1089 | 47 | Qwen3.5 기반으로 텍스트 생성 대신 단일 순전파로 정형 질문의 확률 분포를 반환하는 오픈소스 System One 모델 계열.<br>상태와 함께 전달된 고정 보기 중 하나 선택(Choice), 2~10단계 등급(Score), 예/아니오 확률(Noul)을 판단.<br>텍스트 디코딩이나 파싱 없이 단일 순전파로 로짓 소프트맥스를 계산하며, llama.cpp GGUF 및 vLLM 서빙을 지원함. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +168](#legend "최근 7일 동안 별이 168개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-02 |
| [CelestoAI/celesto](https://github.com/CelestoAI/celesto) | 1015 | 82 | AI 에이전트가 코드 실행, 웹 탐색, 데스크톱 앱 사용 등을 안전하게 수행할 수 있도록 격리된 지속성 가상 머신 샌드박스를 제공하는 도구다.<br>README에 판단 지점 설명 없음<br>약 500ms의 빠른 부팅 속도를 가진 경량 가상 머신을 로컬 환경(QEMU 등) 또는 클라우드에서 일관된 Python SDK와 CLI로 제어할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +24](#legend "최근 7일 동안 별이 24개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-10-06 |

1169개 모두 보기 → [categories/infra.md](categories/infra.md)

<a id="cat-eval"></a>
### 📏 평가·채점 (542)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [comet-ml/opik](https://github.com/comet-ml/opik) | 22409 | 1847 | LLM 앱 및 AI 에이전트의 실행 트레이싱, 성능 평가, 모니터링을 제공하는 오픈소스 옵저버빌리티 플랫폼이다.<br>LLM 생성 결과에 대해 환각 여부(noul), 유해성 분류(choice), RAG 응답 품질 점수(score) 등을 판별하도록 요청한다.<br>LLM-as-a-judge 평가 메트릭, 트레이스 트리 추적, PyTest 기반 CI/CD 연동 및 자체 호스팅 환경을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +117](#legend "최근 7일 동안 별이 117개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-07 |
| [vinilana/jev-eval-agent](https://github.com/vinilana/jev-eval-agent) | 106 | 12 | 100개의 가상 도구를 갖춘 비서 에이전트 환경에서 도구 선택을 LLM이 직접 할 때와 Jev 분류기가 할 때의 작업 완료 단계 수를 비교·평가하는 벤치마크 리포지토리다.<br>대화 상태를 바탕으로 다음 호출할 도구(100개 도구 및 사용자 응답 중 choice)와 요청된 모든 작업 완료 여부(noul)를 판단한다.<br>Jev가 응답 완료를 골라도 done 확률이 임계값(0.5) 미만이면 응답을 차단하고 차선의 도구를 노출하는 신뢰도 기반 게이팅 방식을 적용했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-17 |
| [Kiln-AI/Kiln](https://github.com/Kiln-AI/Kiln) | 5173 | 390 | 평가, 프롬프트 최적화, RAG, 에이전트 구축 및 파인튜닝을 지원하는 AI 개발 워크벤치 데스크톱 앱 겸 Python 라이브러리다.<br>생성된 출력물이 선호 기준이나 평가 지표에 부합하는지 여부(noul)와 모델 응답 품질 등급(score)을 판정한다.<br>노코드 데스크톱 앱과 오픈소스 Python 라이브러리를 연계해 비개발자와 협업하고, Git 동기화 및 로컬 Ollama 실행을 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +43](#legend "최근 7일 동안 별이 43개 늘었습니다") | 2026-10-06 |
| [langwatch/langwatch](https://github.com/langwatch/langwatch) | 4923 | 409 | LLM 호출 추적과 에이전트 시뮬레이션 테스트, 비용 및 거버넌스 관리를 지원하는 오픈소스 운영 플랫폼이다.<br>README에 판단 지점 설명이 없다.<br>Node.js 환경에서 바로 자체 호스팅할 수 있고 주요 코딩 에이전트의 PR당 비용까지 추적한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +33](#legend "최근 7일 동안 별이 33개 늘었습니다") | 2026-10-07 |
| [TypeLLM/TypeLLM](https://github.com/TypeLLM/TypeLLM) | 934 | 58 | TypeLLM: LLMs with type-safe generation | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +67](#legend "최근 7일 동안 별이 67개 늘었습니다") | 2026-10-06 |
| [Liuziyu77/Valen](https://github.com/Liuziyu77/Valen) | 657 | 59 | Train a Jev-like multimodal model by yourself. System One Model, now with vision. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +149](#legend "최근 7일 동안 별이 149개 늘었습니다") | 2026-10-06 |
| [PostHog/jeeves](https://github.com/PostHog/jeeves) | 414 | 21 | Jeeves – Reasoning improves Jev-like decision models | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +146](#legend "최근 7일 동안 별이 146개 늘었습니다") | 2026-10-01 |
| [malevrigns/agent-jev](https://github.com/malevrigns/agent-jev) | 340 | 33 | AgentJev-0.6B - a fast 'System One' decision model for AI Agents: feed it any unstructured state (diffs, traces, logs) and structured questions, get calibrated probability distributions back in one ~50ms forward pass. Zero output-token decoding. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +16](#legend "최근 7일 동안 별이 16개 늘었습니다") | 2026-10-01 |
| [monteduro/killmyidea](https://github.com/monteduro/killmyidea) | 257 | 33 | 스타트업 아이디어를 입력하면 질문 10개에 대한 평가 점수를 종합해 진행 여부(KILL, FIX, SHIP)를 판정해 주는 웹 서비스<br>아이디어의 카테고리, 이해도(understandability), 그리고 문제 정의·수익성·도달력 등 8개 항목에 대한 0-4점 척도 평가<br>생성형 LLM 텍스트 생성 대신 10개 평가 질문을 병렬로 점수화하고 가중 평균 및 명확성 게이트를 거쳐 3단계 판정을 도출하는 구조 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +14](#legend "최근 7일 동안 별이 14개 늘었습니다") | 2026-09-24 |
| [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | 233 | 23 | Jev 계열 타입 기반 의사결정 모델의 성능과 신뢰성을 평가하기 위한 벤치마크 도구다.<br>README에 판단 지점 설명 없음<br>신뢰도 캐스케이드, 위원회, best-of-n 조합 실험을 수행하고 리더보드 순위 변동 여부를 분석했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +50](#legend "최근 7일 동안 별이 50개 늘었습니다") | 2026-09-29 |

542개 모두 보기 → [categories/eval.md](categories/eval.md)

<a id="cat-robustness"></a>
### 🧪 견고성·감사 연구 (109)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [cobusgreyling/Jev](https://github.com/cobusgreyling/Jev) | 133 | 30 | Unofficial TypeSafe Jev showcase — System One decisions, not chat. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +11](#legend "최근 7일 동안 별이 11개 늘었습니다") | 2026-09-20 |
| [chainreactors/fingers](https://github.com/chainreactors/fingers) | 271 | 40 | 보안 스캐너 등에서 대상 웹 기술 및 프레임워크를 식별하기 위해 여러 지문 라이브러리를 통합 분석하는 Go 엔진이다.<br>규칙 엔진이 매칭한 제품명과 버전 결과가 실제 웹 응답 증거에 의해 성립하는지(holds, refuted, insufficient) 판단한다.<br>Jev를 심사기(Judge)로 활용해 규칙 기반 결과의 오탐과 중복을 줄이고 버전을 보완하며, 실패 시 순수 규칙 결과로 폴백한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [iapp-technology/openthai-systemone](https://github.com/iapp-technology/openthai-systemone) | 68 | 22 | OpenThai-SystemOne: open Thai + English System One decision model (0.8B, 256-way slot head, Apache-2.0) | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [mithalouni/system-one-open](https://github.com/mithalouni/system-one-open) | 38 | 6 | Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal) | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [MoLeMo-Lab/mojev](https://github.com/MoLeMo-Lab/mojev) | 29 | 3 | MoJev: typed, calibrated decisions in one forward pass. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [ncchinh/quyet](https://github.com/ncchinh/quyet) | 20 | 4 | Quyet: calibrated decision models | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-04 |
| [yzfly/edgejev](https://github.com/yzfly/edgejev) | 16 | 2 | 离线可用的本地类型化决策：4 核 CPU 单题 15.6ms。Local &amp; offline Jev / System One inference on CPU — ONNX + INT8, no torch at runtime. 支持 laya / kev / PlayJev | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [genai-craft/openvons](https://github.com/genai-craft/openvons) | 13 | 0 | openvons (open-Jev): 有限選択肢に確率で答える判断層 — テキスト / 画像 / 日本語音声コマンド | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [Yifan-Lan/awesome-jev-robustness](https://github.com/Yifan-Lan/awesome-jev-robustness) | 5 | 4 | TypeSafe Jev 모델의 답변 일관성, 보정 오차, 프롬프트 주입 취약점 등 견고성을 독립적으로 검증한 연구와 감사 결과를 모아둔 큐레이션 리포지토리다.<br>README에 판단 지점 설명 없음<br>단순 작업 정확도 대신 옵션 순서나 이름, 부정문 표현 등에 따라 확률값과 선택 결과가 어떻게 흔들리는지 속성별 독립 테스트 결과를 목록과 요약표로 정리했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [aabolfazl/typesafe-local](https://github.com/aabolfazl/typesafe-local) | 8 | 0 | Inspired by TypeSafe Ai, Ask a local LLM typed questions, get calibrated probabilities instead of text. Structured output without generation or parsing. MLX / Apple Silicon. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |

109개 모두 보기 → [categories/robustness.md](categories/robustness.md)

<a id="cat-finance"></a>
### 💹 금융·트레이딩 (131)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 63876 | 11219 | An AI Hedge Fund Team | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +75](#legend "최근 7일 동안 별이 75개 늘었습니다") | 2026-10-02 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12501 | 2541 | 트레이더와 개발자를 위해 암호화폐, 주식, 외환의 리서치부터 백테스트와 실거래를 지원하는 자체 호스팅 AI 트레이딩 OS다.<br>README에 판단 지점 설명 없음<br>Python 전략 개발 및 백테스트뿐 아니라 에이전트 연동용 MCP, 자체 결제 및 정산 기능까지 결합한 올인원 스택을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +182](#legend "최근 7일 동안 별이 182개 늘었습니다") | 2026-10-06 |
| [aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade) | 192 | 39 | Hyperliquid 오더북 데이터를 바탕으로 TypeSafe Jev를 호출해 암호화폐 5종의 매매 주문을 자동 집행하는 트레이딩 봇 및 대시보드다.<br>오더북 데이터를 기반으로 틱마다 포지션 방향(long 또는 short)과 실행 액션(open, close, hold)을 선택하도록 질의한다.<br>코인별 독립 지갑 구조를 적용하고, 진입 시 ALO 메이커 주문과 청산 시 IOC 테이커 주문을 분기하며 Bun과 Next 대시보드를 SSE로 연결했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +24](#legend "최근 7일 동안 별이 24개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-21 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 109990 | 21141 | TradingAgents: Multi-Agents LLM Financial Trading Framework | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +723](#legend "최근 7일 동안 별이 723개 늘었습니다") | 2026-10-03 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 2855 | 539 | Monad 블록체인 상의 Kuru MON-USDC 오더북을 감시하여 매 블록마다 Jev 모델의 예측에 맞춰 post-only 지정가 주문을 갱신하는 트레이딩 봇이다.<br>지정된 블록 구간(기본 100블록, 약 30초) 동안의 가격 변동 방향에 대해 buy 또는 sell 중 하나를 선택하도록 판단시킨다.<br>약 300ms의 블록 주기에 맞추기 위해 RPC 호출을 2회로 최소화하고 기존 주문 취소와 신규 주문을 batchUpdate 단일 트랜잭션으로 처리한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +168](#legend "최근 7일 동안 별이 168개 늘었습니다") | 2026-09-17 |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 498 | 62 | Jev API를 활용하여 261종의 IRS 세무 서식 페이지를 식별하고 분류하는 문서 분류 도구다.<br>입력된 세무 문서 페이지가 261종의 IRS 서식 중 어떤 양식에 해당하는지 선택하도록 묻는다.<br>261개 서식에 걸쳐 100% 엄격한 정확도를 보이며 페이지당 약 0.001달러의 처리 비용을 제시한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +15](#legend "최근 7일 동안 별이 15개 늘었습니다") | 2026-09-29 |
| [imikerussell/beebots](https://github.com/imikerussell/beebots) | 247 | 115 | OKX 무기한 선물 시장에서 세 마리의 AI 봇이 모의 거래 경쟁을 벌이도록 설계한 시스템이다.<br>각 거래 봇의 매매와 관련된 판단을 내린다.<br>기본적으로 모의 거래로 작동하며 모든 주문이 코드로 작성된 위험 관리 계층을 거치도록 설계했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +73](#legend "최근 7일 동안 별이 73개 늘었습니다") | 2026-10-02 |
| [brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis) | 190 | 37 | 실시간 암호화폐 시장 지표와 트위터 여론을 수집·통계 분석하여 매매 의사결정 카드를 생성해 주는 터미널 애플리케이션이다.<br>실시간 시장 지표와 트윗 요약 데이터를 바탕으로 매매 액션(Choice), 감성 스펙트럼(Score), 숏 스퀴즈 위험 확률(Noul), 촉매 중요도(Score)를 판단시킨다.<br>트위터 API 비용을 줄이기 위해 SQLite 기반 조기 종료 중복 제거 파이프라인을 거친 후 정제된 대표 트윗과 통계치만 Jev에게 전달해 추론 비용과 지연 시간을 낮췄다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +16](#legend "최근 7일 동안 별이 16개 늘었습니다") | 2026-09-29 |
| [ruyianry/JevGym](https://github.com/ruyianry/JevGym) | 104 | 1 | JevGym is an open-source platform designed to benchmark and facilitate better probabilistic estimation in Jev-alike models | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +50](#legend "최근 7일 동안 별이 50개 늘었습니다") | 2026-09-23 |
| [arimanyus/warrenduffer](https://github.com/arimanyus/warrenduffer) | 97 | 29 | AI-driven intraday trading bot for Indian stocks. Jev ranks the Nifty 50 every 15s; code sizes each trade and places the stop; orders go live through Zerodha Kite or Kotak Neo. Day replay, kill switch, daily loss halt, terminal dashboard. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +5](#legend "최근 7일 동안 별이 5개 늘었습니다") | 2026-09-23 |

131개 모두 보기 → [categories/finance.md](categories/finance.md)

<a id="cat-games"></a>
### 🎮 게임·인터랙티브 (123)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 434 | 56 | 구조화된 에뮬레이터 RAM 상태 데이터를 바탕으로 Super Mario Bros. 게임 컨트롤러 입력을 직접 결정하는 Jev 기반 에이전트 실험 프로젝트다.<br>게임 상태 JSON을 입력받아 컨트롤러 매크로 선택(Choice), 현재 전방 점프의 유용성 여부(Noul), 즉각적인 위험도 등급(Score)을 판단한다.<br>스크린샷 대신 에뮬레이터 RAM과 텔레메트리를 구조화된 JSON으로 파싱해 전달하며, 타이밍 계산은 코드가 수행하고 Jev가 직접 입력을 결정한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +13](#legend "최근 7일 동안 별이 13개 늘었습니다") | 2026-09-16 |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2503 | 257 | Qwen3-0.6B 백본 기반으로 토큰 디코딩 없이 병렬 판단 확률 분포를 출력하도록 구현된 오픈소스 Jev 복제 모델 및 훈련 파이프라인이다.<br>게임 상태와 질문이 주어졌을 때 동적 선택지 중 최적 행동 확률(Choice), 명제 참/거짓 확률(Boolean), 정렬 등급 점수(Score)를 판단시킨다.<br>텍스트 토큰 생성 대신 상태·질문·후보군을 한 번의 포워드로 인코딩하고 전용 헤드로 확률 분포를 직접 출력해 4개 게임 제어에 적용했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +64](#legend "최근 7일 동안 별이 64개 늘었습니다") | 2026-09-21 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 215 | 40 | TypeSafe Jev 모델을 사용해 자율주행(오토파일럿) 행동을 시뮬레이션하는 Three.js 기반의 드라이빙 시뮬레이터 데모다.<br>주변 교통, 도로 경계, 신호, 정지선 및 목표 경로 정보를 바탕으로 샘플링된 주행 경로 후보(조향 및 속도 조합)와 정지 여부 중 최적의 행동을 선택하도록 묻는다.<br>후보 경로 생성과 기하학적 제어 연산은 로컬 웹 워커에서 처리하고, 컴팩트한 상태 테이블만 서버를 통해 Jev API로 전달해 초당 1.5~4회 주행 경로를 선택한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +14](#legend "최근 7일 동안 별이 14개 늘었습니다") | 2026-09-17 |
| [christianmat/jev-pokemon](https://github.com/christianmat/jev-pokemon) | 123 | 9 | 인공지능 모델 Jev가 포켓몬스터 레드를 직접 플레이하도록 에뮬레이터와 연동해 의사결정을 수행하는 프로젝트다.<br>이동 목적지, 대화 상대, 전투 기술, 포켓몬 교체, 메뉴 선택 등 게임 내 가능한 행동 목록 중에서 하나를 고른다.<br>하네스가 메모리를 읽어 규칙상 가능한 선택지와 정보를 구성하고, 길 찾기 같은 단순 조작만 처리하며 진행을 전적으로 모델 판단에 맡긴다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +17](#legend "최근 7일 동안 별이 17개 늘었습니다") | 2026-09-28 |
| [wingedsheep/argentum-engine](https://github.com/wingedsheep/argentum-engine) | 70 | 33 | Kotlin 기반으로 MTG(Magic: The Gathering) 규칙을 구현한 게임 엔진이자 온라인 멀티플레이 플랫폼이다.<br>게임 내 AI 상대 모드(GAME_AI_MODE=jev)에서 게임 액션 및 플레이 선택지를 판단한다.<br>결정론적 룰 엔진, RL/MCTS 학습용 Gym 환경, 오라클 텍스트 파서 Assay와 함께 트리 탐색·LLM·Jev AI 컨트롤러를 제공한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev) | 111 | 11 | Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [emrickgarrett/OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 41 | 9 | Three.js와 Node.js 기반 브라우저 1v1 FPS 환경에서 TypeSafe System One 기반 AI 봇과 스나이퍼 대결을 펼치는 게임이다.<br>서버가 약 9Hz 주기로 구조화된 게임 상태를 바탕으로 이동, 조준각(yaw, pitch), ADS, 발사, 점프 여부를 Choice와 Noul로 질의한다.<br>API 장애 시 매치가 멈추지 않도록 동일한 액션 인터페이스를 공유하는 휴리스틱 로직을 폴백으로 구현했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [NevaMind-AI/JevTown](https://github.com/NevaMind-AI/JevTown) | 42 | 6 | jev based AI town simulation | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [phyous/tsai-sc](https://github.com/phyous/tsai-sc) | 28 | 4 | 구조화된 스타크래프트 셰어웨어 게임 상태를 관찰하고 TypeSafe Jev 모델의 판단으로 키보드와 마우스 입력을 제어하는 하네스 리포지토리다.<br>정리된 아군 및 시야 상태를 바탕으로 유닛 생산, 자원 채취, 탐색, 업그레이드, 전투 등 어떤 명령을 실행할지 choice 형태로 선택하게 한다.<br>화면 캡처가 아닌 구조화된 게임 데이터를 사용하며, 상태 읽기와 추론 중 게임을 일시정지하고 경제와 군사 결정을 분리해 원본 미션 승리를 달성했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev) | 36 | 12 | A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |

123개 모두 보기 → [categories/games.md](categories/games.md)

<a id="cat-content"></a>
### 📝 콘텐츠·글쓰기 (280)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [kitze/unclutter](https://github.com/kitze/unclutter) | 359 | 41 | WXT 기반의 브라우저 확장 프로그램으로 웹페이지 내 불필요한 요소를 판별해 가려주는 도구다.<br>웹페이지 내 요소들이 가려야 할 불필요한 요소(nonessential element)인지 여부를 분류하도록 요청한다.<br>Vercel AI Gateway 또는 TypeSafe AI를 직접 활용하며, 템플릿별로 숨김 규칙을 로컬에 저장해 재적용한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +20](#legend "최근 7일 동안 별이 20개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-18 |
| [artemnovitckii/creator-lab](https://github.com/artemnovitckii/creator-lab) | 139 | 35 | 인스타그램 릴스 영상을 스크랩하고 전사한 뒤 스크립트 구조와 훅 패턴을 분석해 주는 로컬 웹 도구다.<br>릴스 스크립트를 보고 주제, 오프닝 방식, 훅 메커니즘, 대본 구조, 근거, 감정적 소구, 조언 구체성, CTA 등 8가지 항목을 분류하도록 판단시킨다.<br>npm 의존성이나 빌드 단계 없이 순수 Node.js로 동작하며, Apify 수집 및 음성 전사 후 성과 지표와 무관하게 순수 스크립트 텍스트만을 Jev에 전달해 캐싱·분류한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +42](#legend "최근 7일 동안 별이 42개 늘었습니다") | 2026-09-24 |
| [kevinbadi/hyperedit](https://github.com/kevinbadi/hyperedit) | 209 | 127 | FFMPEG, Remotion, Obsidian 에이전트 및 Jev를 결합한 AI 기반 영상 편집기 애플리케이션이다.<br>README에 판단 지점 설명 없음<br>getmocha.com으로 생성되었으며 FFMPEG과 Remotion 기반 영상 처리에 Obsidian 에이전트 통합을 표방한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-21 |
| [mmastrac/djev](https://github.com/mmastrac/djev) | 113 | 12 | Jev-style structured decisions on DiffusionGemma: the example server from vLLM PR 57250 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-02 |
| [DanRWilloughby/snifftest](https://github.com/DanRWilloughby/snifftest) | 33 | 1 | Markdown과 텍스트 문서를 검사해 AI 특유의 문체와 하우스 룰 위반을 잡아내는 산문 린터 도구다.<br>단락을 단순 반복하는 결문, 과도한 유보 표현, 수사적 도입부 등 문맥 판단이 필요한 규칙의 해당 확률을 질문한다.<br>정규식 기반 로컬 규칙과 호스팅 판단 모델 규칙을 분리하며, 텍스트를 재작성하지 않고 문제 위치와 확률 플래그만 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-18 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 46654 | 3044 | An open-source, privacy-first, self-hosted knowledge workspace where humans and AI agents work together 开源、隐私优先、自托管的知识工作空间，让人与智能体在此协作 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +90](#legend "최근 7일 동안 별이 90개 늘었습니다") | 2026-10-06 |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 35280 | 3791 | A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +250](#legend "최근 7일 동안 별이 250개 늘었습니다") | 2026-10-06 |
| [HarleyCoops/Math-To-Manim](https://github.com/HarleyCoops/Math-To-Manim) | 2699 | 299 | 텍스트와 이미지를 기반으로 Manim 수학 및 물리 애니메이션과 학습 노트를 제작하는 멀티에이전트 파이프라인 도구다.<br>각 단계의 산출물(학습 요약, 수학 검증, 씬 구성 등)이 기준을 만족하는지 score로 평가하고 통과 여부를 판단한다.<br>Jev 평가는 기본적으로 권고(advisory) 수준으로 점수만 기록되지만, gated 옵션으로 엄격한 품질 게이트로 전환할 수 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +24](#legend "최근 7일 동안 별이 24개 늘었습니다") | 2026-10-02 |
| [Paca-AI/paca](https://github.com/Paca-AI/paca) | 1896 | 161 | AI-native, free, open-source alternative to Jira, Trello, ClickUp &amp; Monday. Built for Scrum teams where humans and AI agents collaborate as equals — on the same board, the same sprints, the same goals. Self-hosted. Fully customizable via config and plugins. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +26](#legend "최근 7일 동안 별이 26개 늘었습니다") | 2026-10-06 |
| [githubnext/localjev](https://github.com/githubnext/localjev) | 819 | 54 | — | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +18](#legend "최근 7일 동안 별이 18개 늘었습니다") | 2026-09-18 |

280개 모두 보기 → [categories/content.md](categories/content.md)

<a id="cat-data"></a>
### 🗂️ 데이터 정제·라벨링 (120)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate) | 104 | 16 | 합성 데이터 및 사전학습용 Parquet·JSONL 대규모 데이터셋을 TypeSafe Jev API로 고속 정제·필터링하는 Rust/Python 도구다.<br>각 행 데이터에 대해 수학적 추론 결함, 코드 정확성, 아첨(sycophancy) 여부 등을 프리셋 루브릭 기반의 Choice, Score, Noul로 평가한다.<br>Rust 스트리밍 코어로 단일 HTTP 요청 내 다중 질문을 병렬 처리하며, CLI 및 PyO3 기반 Python 바인딩을 함께 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +13](#legend "최근 7일 동안 별이 13개 늘었습니다") | 2026-10-06 |
| [amponce/archive-movie-browser](https://github.com/amponce/archive-movie-browser) | 148 | 40 | Internet Archive에 등록된 퍼블릭 도메인 영화를 TMDB 메타데이터와 연동해 탐색하고 가상 채널로 시청하는 웹 플레이어다.<br>Archive.org의 특정 업로드 영상이 실제 TMDB의 어떤 영화에 해당하는지 여부를 식별한다.<br>Jev로 오프라인 식별한 인덱스를 활용하며, 동기화된 가상 TV 채널, M3U 및 XMLTV 피드, MCP 서버 인터페이스를 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [keltokhy/jgrep](https://github.com/keltokhy/jgrep) | 136 | 5 | grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +6](#legend "최근 7일 동안 별이 6개 늘었습니다") | 2026-09-28 |
| [chenmingtang830/jevgraph](https://github.com/chenmingtang830/jevgraph) | 36 | 5 | Evidence-backed knowledge graph construction with typed Jev relation decisions | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +5](#legend "최근 7일 동안 별이 5개 늘었습니다") | 2026-09-20 |
| [equationalapplications/curated-thoughts](https://github.com/equationalapplications/curated-thoughts) | 20 | 4 | 로컬 문서를 감시·색인해 위키 형태의 지식 베이스를 구축하는 Tauri 기반 로컬 우선 데스크톱 세컨드 브레인 앱<br>축적된 비정형 팩트 데이터를 더 빠르고 저렴하게 분류하기 위해 사실 유형(fact-typing)을 판별하도록 요청함<br>작업·에피소드·의미 기억의 3단계 구조와 사람 검토 큐를 결합했으며, Jev 엔드포인트를 전용 팩트 분류기로 옵션 지원함 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [nomanjack/smart-paste](https://github.com/nomanjack/smart-paste) | 43 | 6 | A little less copy-paste | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook) | 36 | 2 | Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [goodrahstar/jev-column-race](https://github.com/goodrahstar/jev-column-race) | 23 | 3 | Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [dark-hxx/jev-safety-gateway](https://github.com/dark-hxx/jev-safety-gateway) | 16 | 1 | 位于 nginx 与大模型后端之间的前置过滤反向代理：逐请求提取用户输入交给 JEV 判定，有害拦截、正常透明放行 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [anatems1/TopicJev](https://github.com/anatems1/TopicJev) | 9 | 0 | 기존 토픽 모델이 군집화한 문서가 해당 주제 설명에 실제로 부합하는지 검증하고 이상치를 걸러내는 라이브러리다.<br>문서가 특정 토픽 키워드나 설명 문장을 지지하는지 판별해 해당 주제로 확정할지 기타 항목으로 제외할지 결정한다.<br>제로샷 함의 모델과 토큰 압축 모듈을 결합해 대형 언어 모델 호출 비용 없이 로컬 환경에서도 가볍게 작동한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-06 |

120개 모두 보기 → [categories/data.md](categories/data.md)

<a id="cat-support"></a>
### 🎧 고객지원·CRM (63)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [feder-cr/jev](https://github.com/feder-cr/jev) | 1226 | 139 | jevos is an open-source alternative to Jev for yes/no decisions that runs on your laptop. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +109](#legend "최근 7일 동안 별이 109개 늘었습니다") | 2026-10-05 |
| [mohit67890/imajev](https://github.com/mohit67890/imajev) | 322 | 42 | Open Jev-style typed-decision model that also takes images: photo + app state + typed questions in, calibrated probabilities out, locally. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +188](#legend "최근 7일 동안 별이 188개 늘었습니다") | 2026-10-01 |
| [typesafeainate/dspy-typesafeify](https://github.com/typesafeainate/dspy-typesafeify) | 65 | 2 | Add a decorator for dspy Signatures that automatically uses TypeSafe where relevant | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [vinibrsl/gut](https://github.com/vinibrsl/gut) | 18 | 1 | Use LLM judgment in regular Elixir control flow. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [sqliteai/blink](https://github.com/sqliteai/blink) | 20 | 1 | An open-source, high-performance System One Model for one-pass typed decisions, with an embeddable C runtime and WebAssembly support. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [jeffonelson/jev-bigquery-cloudrun](https://github.com/jeffonelson/jev-bigquery-cloudrun) | 9 | 0 | Classify support tickets in BigQuery with Jev and Cloud Run | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [EmiRoberti77/jev-py-integration](https://github.com/EmiRoberti77/jev-py-integration) | 2 | 0 | 고객지원 티켓을 Jev로 먼저 분류하고 필요한 경우에만 LLM 답장을 생성하도록 연동한 파이썬 파이프라인 예제다.<br>티켓의 긴급 여부(is_urgent), 분노 여부(is_angry), 상담원 필요성(needs_a_human) 확률과 문의 의도(intent) 선택지를 판단하게 한다.<br>Jev 호출 한 번으로 복수 판단을 얻어 파이썬 조건문으로 스팸 제거와 LLM 에스컬레이션을 제어한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [rishi-raj-jain/pg-redact](https://github.com/rishi-raj-jain/pg-redact) | 4 | 0 | Content-aware PII redaction enforced in Neon Postgres: a redact() SQL function reveals or seals each field by your role. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [KineiChou/obsidian-homing](https://github.com/KineiChou/obsidian-homing) | 3 | 0 | Homing (归位) — an Obsidian plugin that files inbox notes into existing folders and links mentions to the right notes, with your confirmation, right in the editor. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [henriquekieckbusch/henriquekieckbusch-module-jev](https://github.com/henriquekieckbusch/henriquekieckbusch-module-jev) | 2 | 2 | AI-powered decisions for Magento 2: Jev analyzes orders, customers, products, reviews and abandoned carts and writes the answer right in your admin. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |

63개 모두 보기 → [categories/support.md](categories/support.md)

<a id="cat-devtools"></a>
### 🧑‍💻 개발 도구·코드 리뷰 (134)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20328 | 2360 | 개발자가 터미널 환경에서 여러 코딩 에이전트 세션을 실행할 수 있도록 RAM 효율성과 성능을 극대화한 러스트 기반 코딩 에이전트 하네스 도구다.<br>README에 판단 지점 설명 없음<br>로컬 임베딩 비활성화 시 단일 세션 27.8MB 수준의 낮은 메모리 점유율을 제공하며, TUI 내 세션 유지 업데이트 등 다중 세션 확장성에 집중했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +109](#legend "최근 7일 동안 별이 109개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [Effect-TS/effect](https://github.com/Effect-TS/effect) | 17119 | 835 | TypeScript 개발자가 타입 안전한 에러 처리, 의존성 주입, 구조적 동시성 등을 구현하는 데 사용하는 표준 라이브러리 모노레포다.<br>README에 판단 지점 설명 없음<br>코어 로직뿐만 아니라 런타임 플랫폼 추상화, 각종 SQL 클라이언트, AI 제공자 연동 모듈을 모노레포 패키지로 함께 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +862](#legend "최근 7일 동안 별이 862개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [samchon/typia](https://github.com/samchon/typia) | 5935 | 227 | TypeScript 타입을 컴파일 타임에 분석해 런타임 유효성 검증기, JSON 직렬화 코드, LLM 함수 호출 하네스를 생성하는 변환 라이브러리다.<br>README에 판단 지점 설명 없음<br>별도 스키마 정의나 런타임 리플렉션 없이 순수 TypeScript 타입을 빌드 단계(ttsc)에서 전용 검증 코드로 직접 컴파일한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +12](#legend "최근 7일 동안 별이 12개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 674 | 44 | Git diff나 전체 코드베이스를 단계별로 검토하고 결과를 로컬 대시보드에 시각화하는 코드 리뷰 워크플로 도구다.<br>위험 매트릭스(Noul), 파일 프로파일(Choice/Score), 증거 선택 및 메커니즘 분류(Choice), 심각도(Score), 리뷰어 라우팅(Choice)을 판단시킨다.<br>오케스트레이션과 임계값 정책은 코드로 관리하며, Jev를 단계별 모델 판단에만 제한적으로 사용하고 단방향 계층 아키텍처를 강제한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +32](#legend "최근 7일 동안 별이 32개 늘었습니다") | 2026-09-17 |
| [sutro-sh/jev-align](https://github.com/sutro-sh/jev-align) | 304 | 24 | Jev와 GEPA를 사용해 불확실한 데이터에 대한 인간 피드백을 수집하고 AI Functions를 최적화하는 CLI 도구<br>이진 분류, 다중 클래스, 다중 라벨, 루브릭 기반 점수 평가 등 사용자가 정의한 질문을 데이터셋에 적용해 판단<br>불확실성 높은 데이터를 능동 학습으로 골라내 라벨링을 유도하고, GEPA를 통해 프롬프트 정의를 지속 개선하며 공개 레지스트리에 공유할 수 있음 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-03 |
| [AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo) | 96 | 14 | 개발자와 코딩 에이전트가 웹사이트의 SEO 및 GEO 준비 상태를 검사하고 크롤링할 수 있도록 돕는 Rust 기반 오픈소스 CLI이자 MCP 도구다.<br>README 본문에서 Jev의 Choice, Score, Noul 기본형으로 웹페이지를 평가하고 신뢰도를 제어한다고 언급하나 구체적인 질문 내용은 설명되어 있지 않다.<br>58가지 규칙 기반 감사, GEO 인용 점수 측정 등을 단일 바이너리로 제공하며, 15개 도구를 갖춘 MCP 서버 형태로 에이전트와 연동할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +11](#legend "최근 7일 동안 별이 11개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-06 |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 234 | 23 | AI 코딩 에이전트가 코드 품질을 지속적으로 점검하도록 지원하는 로컬 기반 MCP 서버 플러그인이다.<br>코드 diff와 컨텍스트를 바탕으로 정확성·복잡도·변경용이성·모듈성·테스트·보안 등의 품질 지표를 Score·Choice·Noul로 평가한다.<br>긴 서술형 리뷰 텍스트 대신 정형화된 점수와 신뢰도 시그널을 반환하며, 원인 진단과 코드 수정은 메인 에이전트에게 맡긴다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-17 |
| [luantak/is-malicious](https://github.com/luantak/is-malicious) | 36 | 4 | 개발자가 낯선 코드를 실행하거나 PR을 병합하기 전에 악의적인 동작이나 보안 위협이 있는지 검사하는 CLI 도구다.<br>소스코드와 설정 파일에 데이터 탈취, 비정상적 네트워크 활동, 권한 남용, 난독화 등 악성 행위가 존재하는지 여부와 확률을 판단시킨다.<br>바이너리나 실행 프로세스는 점검하지 않고 400KB 이하 텍스트 파일만 분석하며, GitHub Actions 및 Agent skill 연동을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-23 |
| [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) | 8756 | 942 | 원격 리포지토리 푸시 전에 일회용 워크트리에서 AI 검증 파이프라인을 실행해 주는 로컬 Git 프록시 도구다.<br>README에 판단 지점 설명 없음<br>푸시 시점에 별도 워크트리에서 리뷰, 테스트, 린트를 수행하고 안전한 수정은 자동 적용하며 통과 시에만 PR을 연다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +70](#legend "최근 7일 동안 별이 70개 늘었습니다") | 2026-10-06 |
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 2607 | 157 | TypeSafe API 연동 코드를 생성할 수 있도록 Claude Code 등의 AI 에이전트에 추가하는 개발용 스킬 모음이다.<br>README에 판단 지점 설명 없음<br>Claude Code 플러그인과 skills.sh 배포 방식을 지원하여 에이전트가 TypeSafe 워크플로를 설계하고 문서를 참조할 수 있게 한다. | [❌](#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") [🔥 +180](#legend "최근 7일 동안 별이 180개 늘었습니다") | 2026-09-12 |

134개 모두 보기 → [categories/devtools.md](categories/devtools.md)

<a id="cat-catalog"></a>
### 📚 목록·레퍼런스 (88)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | 32424 | 3714 | Anthropic Claude Code의 AI 에이전트, 슬래시 커맨드, MCP 연동, 훅 설정을 검색하고 설치할 수 있는 CLI 도구이자 템플릿 모음이다.<br>README에 판단 지점 설명 없음<br>npx 명령어를 통해 웹 카탈로그(aitmpl.com)에 등록된 다양한 MCP, 커맨드, 훅 설정을 로컬 환경에 대화형 또는 플래그 기반으로 주입할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +250](#legend "최근 7일 동안 별이 250개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-06 |
| [daveebbelaar/ai-cookbook](https://github.com/daveebbelaar/ai-cookbook) | 4626 | 1608 | AI 시스템 구축을 돕기 위해 복사해 붙여넣을 수 있는 코드 예제와 튜토리얼을 제공하는 개발자용 레퍼런스 리포지토리다.<br>README에 판단 지점 설명 없음<br>프로젝트에 바로 통합할 수 있는 실용적인 코드 조각과 튜토리얼 위주로 구성된 것이 특징이다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +20](#legend "최근 7일 동안 별이 20개 늘었습니다") | 2026-09-21 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 2180 | 326 | TypeSafe AI의 의사결정 모델 Jev를 활용한 공개 프로젝트, 연동 사례, 실무 논의를 분야별로 정리한 큐레이션 목록이다.<br>README에 판단 지점 설명 없음<br>카테고리별 파일을 scripts/build-readme.py로 취합해 README를 생성하며, 추천이나 품질 보증 대신 엄격한 수록 기준과 직접 검증용 체크리스트를 제시한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +198](#legend "최근 7일 동안 별이 198개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-06 |
| [Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) | 903 | 198 | TypeSafe Jev를 활용한 분류, 라우팅, 가드레일 등 다양한 활용 사례, 프롬프트, 패턴, 스타터 코드를 정리한 큐레이션 리포지토리다.<br>README에 판단 지점 설명 없음<br>단일 애플리케이션이 아니라 Jev를 활용하는 여러 패턴, 연계 프로젝트, 커뮤니티 디렉터리 및 관련 생태계 자료를 집약한 리스트다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +22](#legend "최근 7일 동안 별이 22개 늘었습니다") | 2026-10-03 |
| [logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) | 664 | 55 | 커밋에 고정된 오픈소스 코드 기반으로 TypeSafe Jev 생태계 프로젝트를 정리하고 탐색할 수 있게 지원하는 큐레이션 레이더 리포지토리다.<br>README에 판단 지점 설명 없음<br>PR 대신 GitHub Issues로만 프로젝트 등록을 받으며, 웹 기반 가챠 탐색 기능 및 에이전트 연동용 Agent Skill과 llms.txt를 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +42](#legend "최근 7일 동안 별이 42개 늘었습니다") | 2026-10-03 |
| [kydlikebtc/awesome-jev](https://github.com/kydlikebtc/awesome-jev) | 593 | 20 | TypeSafe AI의 Jev 모델을 사용하는 공개 리소스와 사례를 결정 패턴별로 분류해 정리한 큐레이션 카탈로그 리포지토리다.<br>이 리포 자체는 목록이며, 수록된 사례들은 상태에 대한 choice, score, noul 프리미티브 기반 결정을 Jev에게 요청한다.<br>링크 상태와 호출부 인용을 추적하며, 홍보성 추천이 아닌 독립적 벤치마크 및 부정적 평가 결과까지 포함해 검증 기록을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +7](#legend "최근 7일 동안 별이 7개 늘었습니다") | 2026-10-06 |
| [AbdelStark/awesome-typesafe-jev](https://github.com/AbdelStark/awesome-typesafe-jev) | 570 | 141 | TypeSafe Jev 모델 생태계의 SDK, 데모, 에이전트 도구, 평가 자료 등을 큐레이션한 개발자용 레퍼런스 목록이다.<br>고객지원 문의 텍스트를 바탕으로 유형(choice: technical), 불만 척도(score: 1), 긴급 여부(noul: 1.0)를 예시로 판단한다.<br>단순 링크 목록을 넘어 독립 벤치마크 결과, 프로젝트별 제약 사항, coding agent용 스킬 명세(SKILL.md)까지 체계적으로 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +25](#legend "최근 7일 동안 별이 25개 늘었습니다") | 2026-10-06 |
| [walidboulanouar/awesome-jev-use-cases](https://github.com/walidboulanouar/awesome-jev-use-cases) | 396 | 64 | TypeSafe Jev 모델을 활용한 오픈소스 프로젝트, 데모, API 예제 및 사용 사례를 정리한 큐레이션 목록 저장소다.<br>README에 판단 지점 설명 없음<br>70개 이상의 Jev 구현 데모를 좋아요와 도달률 등 소셜 지표로 순위화하고 원문 포스트 및 저장소 링크를 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +61](#legend "최근 7일 동안 별이 61개 늘었습니다") | 2026-09-26 |
| [dabit3/jev-experiments](https://github.com/dabit3/jev-experiments) | 399 | 31 | TypeSafe Jev 모델의 저지연 특성을 검증하고 시연하기 위해 Devin으로 구축한 실험용 데모 애플리케이션 모음이다.<br>README에 판단 지점 설명 없음<br>각 데모 애플리케이션이 최상위 디렉터리별로 분리되어 개별 README, TESTING.md, 스크린샷과 함께 구성되어 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-21 |
| [fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev) | 220 | 55 | TypeSafe Jev를 기반으로 구축된 다양한 오픈소스 프로젝트를 카테고리별로 모아 정리한 큐레이션 저장소다.<br>저장소에 새로 제출된 프로젝트 풀 리퀘스트의 적합성과 기준 충족 여부를 Jev 워크플로를 통해 심사한다.<br>단순한 프로젝트 목록 관리에 그치지 않고 jev-review-action을 연동해 제출된 프로젝트를 자동 심사하는 워크플로를 운영한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +7](#legend "최근 7일 동안 별이 7개 늘었습니다") | 2026-10-06 |

88개 모두 보기 → [categories/catalog.md](categories/catalog.md)

<a id="cat-other"></a>
### 🧩 기타 (522)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87905 | 13401 | 뉴스 수집, 지정학적 위험 모니터링, 인프라 추적 정보를 통합 지도 및 패널로 시각화하는 실시간 글로벌 인텔리전스 대시보드다.<br>README에 판단 지점 설명 없음<br>globe.gl과 deck.gl 기반의 듀얼 지도 엔진을 지원하며, 단일 코드베이스에서 여러 변형 사이트와 Tauri 2 기반 데스크톱 앱을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +325](#legend "최근 7일 동안 별이 325개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-07 |
| [FBddcz/embodied-jev](https://github.com/FBddcz/embodied-jev) | 257 | 9 | EmbodiedJev: MuJoCo robot decision workbench with MiniCPM5-2B, Jev and compatible model APIs | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +9](#legend "최근 7일 동안 별이 9개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-22 |
| [Liyucheng1997/332_lab-jev-chat](https://github.com/Liyucheng1997/332_lab-jev-chat) | 168 | 18 | Jev Chat Assistant for Windows - 电脑版微信意图判断与 DeepSeek 建议回复 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +10](#legend "최근 7일 동안 별이 10개 늘었습니다") | 2026-09-21 |
| [mmastrac/djev-spark](https://github.com/mmastrac/djev-spark) | 222 | 16 | DiffusionGemma NVFP4 structured decisions on a DGX Spark: container recipe | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-24 |
| [dubinc/dub](https://github.com/dubinc/dub) | 24867 | 3323 | 단축 링크 관리, 전환 추적 및 제휴 프로그램을 구축하려는 마케팅 팀과 개발자를 위한 오픈소스 링크 어트리뷰션 플랫폼이다.<br>README에 판단 지점 설명 없음<br>Next.js, Prisma, Tinybird 기반의 오픈 코어 구조로, 핵심 코드는 AGPLv3 라이선스이며 엔터프라이즈 기능은 상용 라이선스로 구분된다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +23](#legend "최근 7일 동안 별이 23개 늘었습니다") | 2026-10-07 |
| [guidance-ai/guidance](https://github.com/guidance-ai/guidance) | 21789 | 1214 | A guidance language for controlling large language models. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +5](#legend "최근 7일 동안 별이 5개 늘었습니다") | 2026-05-21 |
| [Rizzo-AI-Academy/rizzo-flow](https://github.com/Rizzo-AI-Academy/rizzo-flow) | 834 | 54 | The open, local take on Jev: typed decisions from an LLM, without generating a single token | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +76](#legend "최근 7일 동안 별이 76개 늘었습니다") | 2026-09-25 |
| [receptron/laya](https://github.com/receptron/laya) | 812 | 72 | Run Laya, the open-source Jev-compatible System-1 decision model, from Node.js / TypeScript via ONNX Runtime | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +193](#legend "최근 7일 동안 별이 193개 늘었습니다") | 2026-09-21 |
| [milind-soni/tiptour-macos](https://github.com/milind-soni/tiptour-macos) | 673 | 105 | Open-Source fast local computer use | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [taeold/djev-run](https://github.com/taeold/djev-run) | 579 | 36 | — | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +5](#legend "최근 7일 동안 별이 5개 늘었습니다") | 2026-09-24 |

522개 모두 보기 → [categories/other.md](categories/other.md)

## 이 리포에 대해

- 매일 오전 6시(한국 시간)에 GitHub 검색, awesome 목록, 직접 넣어 둔 시드 목록에서 리포를 모읍니다. 검색으로만 걸린 리포는 설명·토픽·README에 TypeSafe Jev를 쓴다는 근거가 있어야 남깁니다. 이름만 같은 리포를 걸러 내기 위해서입니다.
- 한국어 요약은 README를 읽고 Gemini가 씁니다. 형식 검사를 통과한 요약만 싣습니다.
- 코드 확인은 GitHub 코드 검색으로 합니다. `api.typesafe.ai` · `systemone` · `@typesafe-ai/sdk` · `typesafe_sdk` 가운데 하나가 문서가 아닌 코드 파일에서 나오면 ✅를 붙입니다.
- 리포와 README의 저작권은 각 원저작자에게 있습니다. 요약은 소개하려고 옮긴 발췌입니다.
- 데이터 형식은 [radar-index/1](https://github.com/PineappleBingo/upgrade-scout/blob/main/skills/upgrade-scout/references/radar-format.md)입니다. upgrade-scout 플러그인이 이 데이터를 읽어 갑니다.
