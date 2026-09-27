# 🛰️ Jev Radar — TypeSafe Jev 오픈소스 구현 모음

> Jev(System One)를 쓰는 공개 리포를 매일 모아 한국어로 정리합니다. 기계용 데이터: [`data/index.json`](data/index.json) (`radar-index/1`)

**마지막 업데이트: 2026-09-28 04:32 KST** · 리포 2534 · 🆕 24시간 2534 · 7일 2534 · ✅ 코드 확인 15 · 📚 문서 변경 0

범례: ⭐ 별 · 🍴 포크 · ✅ 코드에서 호출 확인 · 🆕 7일 안에 처음 발견 · 🔥 7일 별 증가 상위 · `choice` `score` `noul` 코드에서 본 질문 유형

분야: [🔀 라우팅·의도 분류 (560)](#cat-routing) · [🛡️ 가드레일·모더레이션 (85)](#cat-guardrail) · [🏆 랭킹·검색·추천 (118)](#cat-ranking) · [🤖 에이전트·도구 선택 (662)](#cat-agent) · [🧰 SDK·인프라·통합 (505)](#cat-infra) · [📏 평가·채점 (223)](#cat-eval) · [🧪 견고성·감사 연구 (33)](#cat-robustness) · [💹 금융·트레이딩 (38)](#cat-finance) · [🎮 게임·인터랙티브 (22)](#cat-games) · [📝 콘텐츠·글쓰기 (124)](#cat-content) · [🗂️ 데이터 정제·라벨링 (38)](#cat-data) · [🎧 고객지원·CRM (25)](#cat-support) · [🧑‍💻 개발 도구·코드 리뷰 (57)](#cat-devtools) · [📚 목록·레퍼런스 (26)](#cat-catalog) · [🧩 기타 (18)](#cat-other)

## 🆕 새로 발견 (7일)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 249459 | 53031 | **무엇** Nous Research가 개발한 자가 학습 루프 및 멀티 플랫폼 연동 기능을 갖춘 오픈소스 AI 에이전트 프레임워크<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 경험 기반 자율 스킬 생성, FTS5 세션 검색, Honcho 사용자 모델링, 다양한 샌드박스 백엔드 및 메신저 연동을 지원한다. | 🆕 | 2026-09-27 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 210399 | 27832 | **무엇** 개발자가 터미널이나 데스크톱 환경에서 코드 분석 및 개발 작업을 자동화하기 위해 사용하는 오픈소스 AI 코딩 에이전트 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 개발용 build 에이전트와 파일 수정을 제한하는 읽기 전용 plan 에이전트 및 하위 general 에이전트를 내장해 작업 목적별로 전환할 수 있다. | 🆕 | 2026-09-27 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187589 | 45983 | **무엇** 자연어 지시나 시각적 빌더를 통해 자동화된 AI 에이전트 워크플로를 제작하고 실행하는 오픈소스 플랫폼이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 자연어 대화형 생성 도구(AutoPilot)와 노드 기반 시각적 빌더(Build)를 제공하여 에이전트의 세부 실행 단계를 제어할 수 있다. | 🆕 | 2026-09-27 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147155 | 24630 | 요약 대기 · The agent engineering platform. | 🆕 | 2026-09-27 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 121845 | 11733 | 요약 대기 · Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store. | 🆕 | 2026-09-27 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 108895 | 20888 | 요약 대기 · TradingAgents: Multi-Agents LLM Financial Trading Framework | 🆕 | 2026-09-25 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87470 | 13333 | **무엇** 뉴스 수집, 지정학적 위험 모니터링, 인프라 추적 정보를 통합 지도 및 패널로 시각화하는 실시간 글로벌 인텔리전스 대시보드다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** globe.gl과 deck.gl 기반의 듀얼 지도 엔진을 지원하며, 단일 코드베이스에서 여러 변형 사이트와 Tauri 2 기반 데스크톱 앱을 제공한다. | 🆕 | 2026-09-27 |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 63770 | 11187 | 요약 대기 · An AI Hedge Fund Team | 🆕 | 2026-09-26 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 59727 | 11826 | 요약 대기 · The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging [Bedrock, Azure, OpenAI, Anthropic, OpenAI, VertexAI, vLLM, Nvidia NIM] | 🆕 | 2026-09-27 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 46533 | 3029 | 요약 대기 · An open-source, privacy-first, self-hosted knowledge workspace where humans and AI agents work together 开源、隐私优先、自托管的知识工作空间，让人与智能体在此协作 | 🆕 | 2026-09-27 |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 42915 | 9163 | **무엇** Claude, OpenAI, Gemini 등 AI 구독 할당량을 통합 관리하고 공유할 수 있게 중계하는 API 게이트웨이 서비스다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Go 백엔드, Vue 프론트엔드, Redis, PostgreSQL 스택을 활용하여 계정 공유 및 비용 분담 중계 플랫폼을 구현했다. | 🆕 | 2026-09-27 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39374 | 3520 | 요약 대기 · Teams-first Multi-agent orchestration for Claude Code | 🆕 | 2026-09-27 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 38788 | 3027 | **무엇** AI 에이전트의 지식, 메모리, 스킬을 가상 파일 시스템 형태로 일원화해 탐색·관리할 수 있게 돕는 컨텍스트 데이터베이스다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** viking:// 가상 파일 시스템 구조와 L0~L2 계층 요약을 통해 전체 본문 로드 전 관련성을 검토하고 세션을 마크다운 파일로 기록한다. | 🆕 | 2026-09-27 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 33477 | 3577 | 요약 대기 · ⌥ Coding agent with the IDE wired in. Built by Stencil Labs. | 🆕 | 2026-09-27 |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | 32454 | 3568 | 요약 대기 · Build and run agents you can see, understand and trust. | 🆕 | 2026-09-24 |

## 🔥 급상승 (7일)

없음

## 📚 문서·모델 변경 (7일)

없음

## 분야별

<a id="cat-routing"></a>
### 🔀 라우팅·의도 분류 (560)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 26595 | 2316 | **무엇** 100개 이상의 언어로 텍스트를 분석해 단일 순방향 패스에서 선택, 점수, 참/거짓 판단을 도출하는 비자기회귀 의사결정 엔진<br>**판단** 담당 부서(choice), 긴급도 수준(score), 이탈 위험 여부(noul) 등 입력 텍스트에 대한 구조화된 질문을 판단시킴<br>**포인트** 비자기회귀 단일 패스로 처리하며 언어별 체크포인트 자동 라우팅 및 RLCD 학습을 거치고 최대 8,192 토큰 컨텍스트를 지원함 | 🆕 | 2026-09-27 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 444 | 54 | **무엇** Claude Code와 OpenAI Codex CLI에서 사용자 프롬프트 난이도에 따라 모델을 턴 단위로 자동 라우팅해 주는 CLI 도구다.<br>**판단** 사용자 프롬프트의 복잡도, 추론 필요성, 도구 복잡도, 컨텍스트 크기 등을 평가해 빠른 티어(저비용)와 강력한 티어 중 적절한 모델 티어를 선택하도록 판단시킨다.<br>**포인트** 루프백 프록시 방식으로 원본 CLI의 로그인 세션과 권한을 그대로 유지하며, /jev-explain 커맨드로 판단 근거 지표와 신뢰도를 확인할 수 있다. | ✅ 🆕 | 2026-09-19 |
| [kunchenguid/firstmate](https://github.com/kunchenguid/firstmate) | 7238 | 2287 | 요약 대기 · Talk to one agent. Ship with a crew. | 🆕 | 2026-09-27 |
| [mizorewww/laya-mlx](https://github.com/mizorewww/laya-mlx) | 6472 | 510 | 요약 대기 · Native MLX runtime for Laya typed decision models — 7–14 ms short decisions on M3 Max. No text generation, PyTorch, or cloud API. | 🆕 | 2026-09-22 |
| [agentconnect-md/agentconnect](https://github.com/agentconnect-md/agentconnect) | 1436 | 62 | 요약 대기 · The open-source, multi-agent alternative to Claude Tag.  @ any agent, wherever work happens, they work alongside your team, learning as they go. | 🆕 | 2026-09-27 |
| [deepopen-com/deepopen](https://github.com/deepopen-com/deepopen) | 1044 | 112 | 요약 대기 · 非自回归System 1决策引擎，专为结构化类型决策场景设计  DeepOpen Multilingual, non-autoregressive System 1 decision engine.  | 🆕 | 2026-09-25 |
| [nokia-applied-research/AnyJev](https://github.com/nokia-applied-research/AnyJev) | 818 | 110 | 요약 대기 · Turn any LLM into a Jev-style decision model: typed decisions, real probabilities, no training. (continue updating, welcome any issue and PR request) | 🆕 | 2026-09-26 |
| [v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools) | 727 | 36 | 요약 대기 · A curated list of tools  built for Jev — TypeSafe AI's System One model for typed decisions. | 🆕 | 2026-09-24 |
| [wfzyx/von](https://github.com/wfzyx/von) | 723 | 54 | 요약 대기 · The open-source System One decision model. Sub-15ms, non-autoregressive, local drop-in alternative to TypeSafe Jev. | 🆕 | 2026-09-26 |
| [anishfn/shapeshift](https://github.com/anishfn/shapeshift) | 702 | 78 | 요약 대기 · An input that becomes what you mean: one text box that morphs into the right UI as you type. Powered by TypeSafe Jev, works offline. | 🆕 | 2026-09-23 |

전체 560개 → [categories/routing.md](categories/routing.md)

<a id="cat-guardrail"></a>
### 🛡️ 가드레일·모더레이션 (85)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 148 | 11 | **무엇** Pi 코딩 에이전트의 도구 호출과 출력 결과를 TypeSafe Jev API로 검사하고 제어하는 확장 도구다.<br>**판단** 명령의 파괴성·데이터 유출·범위 초과·피해 수준과 출력의 비밀정보 누출·실패 유형을 noul, score, choice로 판단한다.<br>**포인트** 도구 실행 전 게이트 판단을 한 번의 요청(약 300ms)으로 처리하며, 오류 발생 시 실행을 차단하지 않는 fail-open 방식으로 동작한다. | ✅ 🆕 `choice` `noul` `score` | 2026-09-25 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | 85 | 7 | **무엇** 웹페이지 내 DOM 요소를 탐색해 TypeSafe Jev 모델의 판단에 따라 광고 요소를 실시간으로 제거하는 크롬 확장 프로그램이다.<br>**판단** 추출된 각 DOM 후보 요소의 태그, 클래스, 텍스트 요약 등을 바탕으로 유료 광고(paid advertisement)인지 여부를 noul 확률 질문으로 판단시킨다.<br>**포인트** 광고 후보 선별과 배치는 순수 코드로 처리하고 시맨틱 판별만 Jev에 일괄 요청하며, 설정된 임계 확률을 넘기면 애니메이션과 함께 요소를 제거한다. | ✅ 🆕 `noul` | 2026-09-17 |
| [ipenywis/laya-ultrafast](https://github.com/ipenywis/laya-ultrafast) | 216 | 31 | 요약 대기 · Same as jev-ultrafast but using Laya | 🆕 | 2026-09-22 |
| [hellogumbo/awesome-jev](https://github.com/hellogumbo/awesome-jev) | 198 | 64 | 요약 대기 · A community directory of projects built on Jev, TypeSafe AI's System One model. | 🆕 | 2026-09-24 |
| [qkal/Canny](https://github.com/qkal/Canny) | 97 | 11 | **무엇** Claude Code와 Codex CLI에서 코딩 에이전트가 검증 절차 없이 작업을 마쳤다고 주장하지 못하게 감시하는 훅 도구이다.<br>**판단** 에이전트 메시지가 작업 완료를 주장하는지, 변경된 diff가 특정 규칙을 위반했는지 여부를 예/아니오 확률로 판단시킨다.<br>**포인트** 런타임 의존성이 없고, 원장의 사실 기록만 작업을 차단할 수 있으며 Jev의 판단 결과는 차단 없이 에이전트의 컨텍스트 조언으로만 사용된다. | 🆕 | 2026-09-22 |
| [brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) | 48 | 6 | **무엇** Discord 서버 관리자가 스팸·피싱 링크를 차단하고 멤버 성향을 분석하기 위해 사용하는 Python 기반 모더레이션 봇이다.<br>**판단** 실시간 메시지의 스팸 및 피싱 링크 여부와 유저 최근 메시지의 사기 위험·스팸·초보성·유해성·도움 수준 점수를 판별한다.<br>**포인트** 오탐된 메시지를 사면하면 안전 선례로 저장해 추후 검사에 반영하는 동적 학습 및 SQLite 기반 캐싱을 지원한다. | 🆕 | 2026-09-22 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 42 | 5 | **무엇** 다양한 코딩 에이전트의 도구 호출과 결과를 검사해 위험한 명령과 프롬프트 인젝션을 차단하는 보안 훅 라이브러리다.<br>**판단** 도구 호출의 위험도(risk), 사용자 요청 부합 여부(user_requested), 신뢰할 수 없는 출처 기반 여부(from_untrusted)를 질의해 판단한다.<br>**포인트** 외부 의존성 없이 Claude Code, Cursor 등 여러 에이전트에 thin 어댑터로 연결되며 도구 실행 전후 및 인스트럭션 파일을 검사한다. | 🆕 | 2026-09-24 |
| [yikangy873-gif/jev-desktop](https://github.com/yikangy873-gif/jev-desktop) | 72 | 2 | 요약 대기 · TypeSafe Jev action selection inside Codex Computer Use | 🆕 | 2026-09-19 |
| [mizchi/jev-playground](https://github.com/mizchi/jev-playground) | 70 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [kyu1204/jgrep](https://github.com/kyu1204/jgrep) | 44 | 4 | 요약 대기 · grep for what code does, not what it's called. Semantic code search powered by TypeSafe Jev. | 🆕 | 2026-09-27 |

전체 85개 → [categories/guardrail.md](categories/guardrail.md)

<a id="cat-ranking"></a>
### 🏆 랭킹·검색·추천 (118)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [dubinc/dub](https://github.com/dubinc/dub) | 24834 | 3308 | 요약 대기 · The modern link attribution platform. Loved by world-class marketing teams like Framer, Perplexity, Superhuman, Twilio, Buffer and more. | 🆕 | 2026-09-27 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 7978 | 1039 | 요약 대기 · Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML editors with a built-in AI agent, plus a \`genoffice\` CLI and agent skill so Claude Code, Codex and Cursor can create and edit real .docx/.xlsx/.pptx files locally. Bring your own key. macOS, Windows &amp; Linux. | 🆕 | 2026-09-27 |
| [SamurAIGPT/llm-wiki-agent](https://github.com/SamurAIGPT/llm-wiki-agent) | 3582 | 413 | 요약 대기 · A personal knowledge base that builds and maintains itself. Drop in sources — Claude (or Codex/Gemini) reads them, extracts knowledge, and maintains a persistent interlinked wiki. Works with Claude Code, Codex, OpenCode, Gemini CLI. No API key needed. | 🆕 | 2026-09-21 |
| [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | 2664 | 260 | 요약 대기 · A persistent, unified memory layer for all your AI agents (e.g. Claude Code, Codex, DSH), backed by Markdown and Milvus. | 🆕 | 2026-09-24 |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 473 | 57 | **무엇** 자연어 질의를 바탕으로 검색 소스·기간을 결정하고 검색 결과의 관련도를 채점하여 순위를 매기는 웹 검색 애플리케이션이다.<br>**판단** 사용자 질의에 적합한 검색어·소스·기간 선택과 검색된 결과 항목별 관련도 점수 평가를 수행하도록 한다.<br>**포인트** 생성형 답변 없이 결과별 관련도 점수와 링크를 노출하며, Cloudflare Workers 기반으로 다중 엔진 병렬 검색과 결과 스트리밍을 처리한다. | 🆕 | 2026-09-20 |
| [milvus-io/bootcamp](https://github.com/milvus-io/bootcamp) | 2446 | 683 | 요약 대기 · Dealing with all unstructured data, such as reverse image search, audio search, molecular search, video analysis, question and answer systems, NLP, etc. | 🆕 | 2026-09-24 |
| [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | 763 | 44 | 요약 대기 · Biologically-inspired memory for AI agents. Decay, retrieval strengthening, consolidation. Zero runtime deps, SQLite, MCP. Benchmarked retrieval with an opt-in hosted TypeSafe Jev reranker. | 🆕 | 2026-09-27 |
| [Zefan-Cai/Open-Jev](https://github.com/Zefan-Cai/Open-Jev) | 347 | 46 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-23 |
| [Oqura-ai/deepdoc](https://github.com/Oqura-ai/deepdoc) | 305 | 47 | 요약 대기 · Deep research tool for local knowledge base. | 🆕 | 2026-09-26 |
| [martinopiaggi/summarize](https://github.com/martinopiaggi/summarize) | 225 | 30 | 요약 대기 · Video AI summarization from multiple sources (YouTube, X, Instagram, TikTok, Reddit, Facebook, Google Drive, Dropbox, and local files). | 🆕 | 2026-09-27 |

전체 118개 → [categories/ranking.md](categories/ranking.md)

<a id="cat-agent"></a>
### 🤖 에이전트·도구 선택 (662)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 249459 | 53031 | **무엇** Nous Research가 개발한 자가 학습 루프 및 멀티 플랫폼 연동 기능을 갖춘 오픈소스 AI 에이전트 프레임워크<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 경험 기반 자율 스킬 생성, FTS5 세션 검색, Honcho 사용자 모델링, 다양한 샌드박스 백엔드 및 메신저 연동을 지원한다. | 🆕 | 2026-09-27 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 210399 | 27832 | **무엇** 개발자가 터미널이나 데스크톱 환경에서 코드 분석 및 개발 작업을 자동화하기 위해 사용하는 오픈소스 AI 코딩 에이전트 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 개발용 build 에이전트와 파일 수정을 제한하는 읽기 전용 plan 에이전트 및 하위 general 에이전트를 내장해 작업 목적별로 전환할 수 있다. | 🆕 | 2026-09-27 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187589 | 45983 | **무엇** 자연어 지시나 시각적 빌더를 통해 자동화된 AI 에이전트 워크플로를 제작하고 실행하는 오픈소스 플랫폼이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 자연어 대화형 생성 도구(AutoPilot)와 노드 기반 시각적 빌더(Build)를 제공하여 에이전트의 세부 실행 단계를 제어할 수 있다. | 🆕 | 2026-09-27 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147155 | 24630 | 요약 대기 · The agent engineering platform. | 🆕 | 2026-09-27 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 38788 | 3027 | **무엇** AI 에이전트의 지식, 메모리, 스킬을 가상 파일 시스템 형태로 일원화해 탐색·관리할 수 있게 돕는 컨텍스트 데이터베이스다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** viking:// 가상 파일 시스템 구조와 L0~L2 계층 요약을 통해 전체 본문 로드 전 관련성을 검토하고 세션을 마크다운 파일로 기록한다. | 🆕 | 2026-09-27 |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | 32454 | 3568 | 요약 대기 · Build and run agents you can see, understand and trust. | 🆕 | 2026-09-24 |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | 30336 | 4829 | **무엇** AI 에이전트가 외부 앱과 연동할 수 있도록 인증, 세션 관리, 도구 검색을 제공하는 SDK 모노리포다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 모든 도구를 컨텍스트에 올리지 않고 런타임 메타 도구로 탐색·실행하며, 호스팅된 MCP 엔드포인트 생성을 지원한다. | 🆕 | 2026-09-27 |
| [simstudioai/sim](https://github.com/simstudioai/sim) | 29741 | 3843 | 요약 대기 · Sim is the collaborative workspace to build, deploy, and monitor AI agents and workflows. Used by 100,000+ builders. | 🆕 | 2026-09-27 |
| [trycua/cua](https://github.com/trycua/cua) | 26641 | 1848 | **무엇** AI 에이전트가 멀티 OS 환경에서 데스크톱 GUI 및 앱을 조작하고 평가할 수 있도록 격리 인프라와 드라이버를 제공하는 프레임워크다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** macOS, Windows, Linux 환경을 지원하며 애플 실리콘용 로컬 VM(Lume)과 클라우드 샌드박스(Fleet), 백그라운드 UI 조작 기능을 제공한다. | 🆕 | 2026-09-27 |
| [different-ai/openwork](https://github.com/different-ai/openwork) | 23758 | 2392 | **무엇** 로컬 파일 기반으로 AI 에이전트와 협업하며 스킬 및 MCP 서버를 관리·공유하는 오픈소스 크로스플랫폼 데스크톱 앱이자 컨트롤 플레인이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** OpenCode 기반으로 동작하며 외부 에이전트가 사용할 수 있는 전용 MCP 서버를 제공하고 코어는 MIT, 엔터프라이즈 제어부는 별도 소스 공개 라이선스로 분리되어 있다. | 🆕 | 2026-09-27 |

전체 662개 → [categories/agent.md](categories/agent.md)

<a id="cat-infra"></a>
### 🧰 SDK·인프라·통합 (505)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 121845 | 11733 | 요약 대기 · Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store. | 🆕 | 2026-09-27 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 59727 | 11826 | 요약 대기 · The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging [Bedrock, Azure, OpenAI, Anthropic, OpenAI, VertexAI, vLLM, Nvidia NIM] | 🆕 | 2026-09-27 |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 42915 | 9163 | **무엇** Claude, OpenAI, Gemini 등 AI 구독 할당량을 통합 관리하고 공유할 수 있게 중계하는 API 게이트웨이 서비스다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Go 백엔드, Vue 프론트엔드, Redis, PostgreSQL 스택을 활용하여 계정 공유 및 비용 분담 중계 플랫폼을 구현했다. | 🆕 | 2026-09-27 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 39374 | 3520 | 요약 대기 · Teams-first Multi-agent orchestration for Claude Code | 🆕 | 2026-09-27 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 33477 | 3577 | 요약 대기 · ⌥ Coding agent with the IDE wired in. Built by Stencil Labs. | 🆕 | 2026-09-27 |
| [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) | 27910 | 2405 | **무엇** LLM과 도구·데이터를 연결하는 Model Context Protocol(MCP) 서버와 클라이언트를 파이썬으로 손쉽게 개발하도록 돕는 프레임워크다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 데코레이터 기반으로 파이썬 함수를 감싸 스키마 생성, 입력 검증, 프로토콜 수명주기 관리를 자동화하여 MCP 구축을 단순화했다. | 🆕 | 2026-09-27 |
| [vercel/ai](https://github.com/vercel/ai) | 26992 | 5204 | 요약 대기 · The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents  | 🆕 | 2026-09-27 |
| [pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai) | 20214 | 2795 | 요약 대기 · How Python does AI. Agents, realtime voice, image generation, embeddings. Every model, every interface, typed end to end. | 🆕 | 2026-09-27 |
| [vercel-labs/json-render](https://github.com/vercel-labs/json-render) | 18333 | 971 | **무엇** 사전 정의된 컴포넌트 카탈로그와 스키마를 바탕으로 AI가 생성한 JSON 스펙을 UI로 렌더링하는 프레임워크다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** AI 생성을 사전에 정의한 컴포넌트 목록과 Zod 스키마로 제한해 안전성을 확보하며 React, Vue, React Native 등 다양한 플랫폼을 지원한다. | 🆕 | 2026-09-25 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 11540 | 1074 | **무엇** 멀티모달 AI 애플리케이션을 위해 벡터 유사도 검색과 SQL 쿼리를 제공하는 오픈소스 임베디드 검색 데이터베이스 라이브러리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Lance 컬럼형 포맷을 기반으로 구축되어 대규모 벡터 및 멀티모달 데이터의 무복사(Zero-copy) 처리와 자동 버전 관리를 지원한다. | 🆕 | 2026-09-27 |

전체 505개 → [categories/infra.md](categories/infra.md)

<a id="cat-eval"></a>
### 📏 평가·채점 (223)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [comet-ml/opik](https://github.com/comet-ml/opik) | 22259 | 1829 | **무엇** LLM 앱 및 AI 에이전트의 실행 트레이싱, 성능 평가, 모니터링을 제공하는 오픈소스 옵저버빌리티 플랫폼이다.<br>**판단** LLM 생성 결과에 대해 환각 여부(noul), 유해성 분류(choice), RAG 응답 품질 점수(score) 등을 판별하도록 요청한다.<br>**포인트** LLM-as-a-judge 평가 메트릭, 트레이스 트리 추적, PyTest 기반 CI/CD 연동 및 자체 호스팅 환경을 지원한다. | 🆕 | 2026-09-27 |
| [Kiln-AI/Kiln](https://github.com/Kiln-AI/Kiln) | 5109 | 379 | **무엇** 평가, 프롬프트 최적화, RAG, 에이전트 구축 및 파인튜닝을 지원하는 AI 개발 워크벤치 데스크톱 앱 겸 Python 라이브러리다.<br>**판단** 생성된 출력물이 선호 기준이나 평가 지표에 부합하는지 여부(noul)와 모델 응답 품질 등급(score)을 판정한다.<br>**포인트** 노코드 데스크톱 앱과 오픈소스 Python 라이브러리를 연계해 비개발자와 협업하고, Git 동기화 및 로컬 Ollama 실행을 지원한다. | 🆕 | 2026-09-26 |
| [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 1865 | 147 | 요약 대기 · Local typed decisions, contrastive data curation, and model evaluation. | 🆕 | 2026-09-24 |
| [TypeLLM/TypeLLM](https://github.com/TypeLLM/TypeLLM) | 801 | 53 | 요약 대기 · TypeLLM: LLMs with type-safe generation | 🆕 | 2026-09-27 |
| [dzhng/jevgrep](https://github.com/dzhng/jevgrep) | 648 | 39 | 요약 대기 · Find code by asking what it does. A CLI for coding agents that uses Jev to discover relevant files and source context. | 🆕 | 2026-09-27 |
| [monteduro/killmyidea](https://github.com/monteduro/killmyidea) | 231 | 30 | **무엇** 스타트업 아이디어를 입력하면 질문 10개에 대한 평가 점수를 종합해 진행 여부(KILL, FIX, SHIP)를 판정해 주는 웹 서비스<br>**판단** 아이디어의 카테고리, 이해도(understandability), 그리고 문제 정의·수익성·도달력 등 8개 항목에 대한 0-4점 척도 평가<br>**포인트** 생성형 LLM 텍스트 생성 대신 10개 평가 질문을 병렬로 점수화하고 가중 평균 및 명확성 게이트를 거쳐 3단계 판정을 도출하는 구조 | 🆕 | 2026-09-24 |
| [Yinsongxu/LLM2Jev](https://github.com/Yinsongxu/LLM2Jev) | 344 | 35 | 요약 대기 · Turn local language models into Jev-style structured decision models. Get results from text and images with prefill alone—no token-by-token decoding required. | 🆕 | 2026-09-26 |
| [Liuziyu77/Valen](https://github.com/Liuziyu77/Valen) | 324 | 39 | 요약 대기 · Train a Jev-like multimodal model by yourself. System One Model, now with vision. | 🆕 | 2026-09-25 |
| [malevrigns/agent-jev](https://github.com/malevrigns/agent-jev) | 312 | 29 | 요약 대기 · AgentJev-0.6B - a fast 'System One' decision model for AI Agents: feed it any unstructured state (diffs, traces, logs) and structured questions, get calibrated probability distributions back in one ~50ms forward pass. Zero output-token decoding. | 🆕 | 2026-09-23 |
| [hr98w/jev-visual](https://github.com/hr98w/jev-visual) | 288 | 26 | 요약 대기 · An educational Jev-like visual inference experiment on Apple Silicon: shared context, direct candidate scoring, and local visual demos. | 🆕 | 2026-09-21 |

전체 223개 → [categories/eval.md](categories/eval.md)

<a id="cat-robustness"></a>
### 🧪 견고성·감사 연구 (33)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [openroboto-ai/jev-robot-control](https://github.com/openroboto-ai/jev-robot-control) | 49 | 2 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-19 |
| [bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev) | 33 | 12 | 요약 대기 · A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state | 🆕 | 2026-09-21 |
| [Yifan-Lan/awesome-jev-robustness](https://github.com/Yifan-Lan/awesome-jev-robustness) | 5 | 2 | **무엇** TypeSafe Jev 모델의 답변 일관성, 보정 오차, 프롬프트 주입 취약점 등 견고성을 독립적으로 검증한 연구와 감사 결과를 모아둔 큐레이션 리포지토리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 단순 작업 정확도 대신 옵션 순서나 이름, 부정문 표현 등에 따라 확률값과 선택 결과가 어떻게 흔들리는지 속성별 독립 테스트 결과를 목록과 요약표로 정리했다. | 🆕 | 2026-09-26 |
| [KantaHayashiAI/jev-does-not-play-dice](https://github.com/KantaHayashiAI/jev-does-not-play-dice) | 4 | 1 | **무엇** Jev 모델의 확률 보정, 불확실성 표현, 예측 문서 보존력을 측정하고 분석하는 실험 코드 및 데이터 세트다.<br>**판단** 주사위 눈 맞히기나 동전 던지기 등 무작위 사건의 결과 및 예측 문서 속 사건 발생 여부를 choice나 noul로 묻는다.<br>**포인트** 무작위 사건에서 실제 정확도는 무작위 수준(19%)임에도 Choice 출력이 82.9% 등 높은 확신도를 부여하는 보정 실패 현상을 분석했다. | 🆕 | 2026-09-25 |
| [RINNECODER/jev-behavior-study](https://github.com/RINNECODER/jev-behavior-study) | 4 | 0 | **무엇** Jev 1.13.0 모델의 성능과 신뢰성을 파악하기 위해 프롬프트 제어 실험과 게임 실증 결과를 기록한 독립 연구 리포지토리다.<br>**판단** Snake 게임 이동 방향, 3D 주행 조향 선택, 그리고 문맥 및 선지 순서 변화에 따른 객관식 문항 정답 선택을 판단시킨다.<br>**포인트** Snake 및 3D City 조작과 11,621건의 텍스트 실험을 통해 선지 배치 순서와 서술 방식 등 프롬프트 변화에 따른 취약점을 분석했다. | 🆕 | 2026-09-17 |
| [SamuelSacco/jev-exploration](https://github.com/SamuelSacco/jev-exploration) | 4 | 0 | **무엇** TypeSafe Jev API의 확률 보정 상태와 성능 주장을 감사하고 실측 실험 코드를 기록한 분석 저장소<br>**판단** 난이도별 800개 문항 데이터셋과 외부 벤치마크 데이터에 대해 Noul, Choice, Score 원시 타입으로 판단 질문을 수행<br>**포인트** Jev의 확률값이 중간값으로 압축 왜곡되어 실제 보정(calibration)되지 않음을 ECE로 증명하고 플랫 스케일링을 통한 보정 한계를 검증함 | 🆕 | 2026-09-25 |
| [dani1005/book-aurora](https://github.com/dani1005/book-aurora) | 6 | 0 | 요약 대기 · Jev reads a whole novel in seconds. Every passage becomes a row of colour. | 🆕 | 2026-09-23 |
| [Amrit-Nigam/jev-royal](https://github.com/Amrit-Nigam/jev-royal) | 4 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-18 |
| [AnshChoudhary/typesafe-ai-firewall](https://github.com/AnshChoudhary/typesafe-ai-firewall) | 3 | 0 | 요약 대기 · Shadow-mode validation harness for a pre-execution firewall on AI agent tool calls (TypeSafe/Jev). Real run, findings in report.md. | 🆕 | 2026-09-17 |
| [jujumilk3/jev-calibration-audit](https://github.com/jujumilk3/jev-calibration-audit) | 1 | 0 | **무엇** 공개 API 호출만을 사용해 TypeSafe AI의 Jev 모델 확률 캘리브레이션과 신뢰도 정확성을 독립적으로 검증·감사하는 벤치마크 도구다.<br>**판단** MMLU-ProX와 KoBBQ 문항을 Choice 다지선다와 Noul 예/아니오 질의 형태로 모델에 전달해 정답 여부와 예측 확률 분포를 판단시킨다.<br>**포인트** 기권 옵션 제거 시 오답률 및 편향 급증, Noul과 Choice 간 확률 불일치, 선택지 순서 편향 부재, 한국어 성능 변화 등 7개 실험 결과를 측정한다. | 🆕 | 2026-09-18 |

전체 33개 → [categories/robustness.md](categories/robustness.md)

<a id="cat-finance"></a>
### 💹 금융·트레이딩 (38)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 108895 | 20888 | 요약 대기 · TradingAgents: Multi-Agents LLM Financial Trading Framework | 🆕 | 2026-09-25 |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 63770 | 11187 | 요약 대기 · An AI Hedge Fund Team | 🆕 | 2026-09-26 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12230 | 2504 | **무엇** 트레이더와 개발자를 위해 암호화폐, 주식, 외환의 리서치부터 백테스트와 실거래를 지원하는 자체 호스팅 AI 트레이딩 OS다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Python 전략 개발 및 백테스트뿐 아니라 에이전트 연동용 MCP, 자체 결제 및 정산 기능까지 결합한 올인원 스택을 제공한다. | 🆕 | 2026-09-26 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 2593 | 490 | **무엇** Monad 블록체인 상의 Kuru MON-USDC 오더북을 감시하여 매 블록마다 Jev 모델의 예측에 맞춰 post-only 지정가 주문을 갱신하는 트레이딩 봇이다.<br>**판단** 지정된 블록 구간(기본 100블록, 약 30초) 동안의 가격 변동 방향에 대해 buy 또는 sell 중 하나를 선택하도록 판단시킨다.<br>**포인트** 약 300ms의 블록 주기에 맞추기 위해 RPC 호출을 2회로 최소화하고 기존 주문 취소와 신규 주문을 batchUpdate 단일 트랜잭션으로 처리한다. | 🆕 | 2026-09-17 |
| [aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade) | 158 | 28 | **무엇** Hyperliquid 오더북 데이터를 바탕으로 TypeSafe Jev를 호출해 암호화폐 5종의 매매 주문을 자동 집행하는 트레이딩 봇 및 대시보드다.<br>**판단** 오더북 데이터를 기반으로 틱마다 포지션 방향(long 또는 short)과 실행 액션(open, close, hold)을 선택하도록 질의한다.<br>**포인트** 코인별 독립 지갑 구조를 적용하고, 진입 시 ALO 메이커 주문과 청산 시 IOC 테이커 주문을 분기하며 Bun과 Next 대시보드를 SSE로 연결했다. | 🆕 | 2026-09-21 |
| [brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis) | 170 | 34 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-22 |
| [arimanyus/warrenduffer](https://github.com/arimanyus/warrenduffer) | 93 | 27 | 요약 대기 · AI-driven intraday trading bot for Indian stocks. Jev ranks the Nifty 50 every 15s; code sizes each trade and places the stop; orders go live through Zerodha Kite or Kotak Neo. Day replay, kill switch, daily loss halt, terminal dashboard. | 🆕 | 2026-09-23 |
| [irfndi/prism-liquidity-agent](https://github.com/irfndi/prism-liquidity-agent) | 113 | 19 | **무엇** Solana의 Meteora DLMM 유동성 풀 상태를 주기적으로 감시하고 포지션 리밸런싱과 진입·청산을 자동 수행하는 자율 LP 에이전트다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** sqlite-vec 기반 벡터 메모리로 과거 손익 이력을 축적해 자가 개선하며 0~1 거래량 진위 점수와 위험 게이트로 온체인 실행을 차단한다. | 🆕 | 2026-09-23 |
| [myc0576/SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub) | 27 | 0 | **무엇** 트레이더와 에이전트가 실행 권한 없이 매매 기록과 증거를 검토하고 재현 가능한 아티팩트로 보관하는 로컬 기반 저널링 하네스다.<br>**판단** 매매 복기, 기업 공시, 산업 뉴스, 거시 정책 텍스트를 바탕으로 사실 부합 여부와 영향도를 choice, score, noul 형식으로 판정한다.<br>**포인트** 주문 권한을 차단한 읽기 전용 구조이며, 산술 계산과 시점 경계 검증은 파이썬이 강제하고 Jev는 구조화된 판단 레이어로만 활용된다. | 🆕 | 2026-09-25 |
| [zadescoxp/Jev-Trades](https://github.com/zadescoxp/Jev-Trades) | 34 | 10 | 요약 대기 · Trading bot with the all new TypeSafe AI's first system one model named as Jev | 🆕 | 2026-09-25 |

전체 38개 → [categories/finance.md](categories/finance.md)

<a id="cat-games"></a>
### 🎮 게임·인터랙티브 (22)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2342 | 244 | **무엇** Qwen3-0.6B 백본 기반으로 토큰 디코딩 없이 병렬 판단 확률 분포를 출력하도록 구현된 오픈소스 Jev 복제 모델 및 훈련 파이프라인이다.<br>**판단** 게임 상태와 질문이 주어졌을 때 동적 선택지 중 최적 행동 확률(Choice), 명제 참/거짓 확률(Boolean), 정렬 등급 점수(Score)를 판단시킨다.<br>**포인트** 텍스트 토큰 생성 대신 상태·질문·후보군을 한 번의 포워드로 인코딩하고 전용 헤드로 확률 분포를 직접 출력해 4개 게임 제어에 적용했다. | 🆕 | 2026-09-21 |
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 406 | 46 | **무엇** 구조화된 에뮬레이터 RAM 상태 데이터를 바탕으로 Super Mario Bros. 게임 컨트롤러 입력을 직접 결정하는 Jev 기반 에이전트 실험 프로젝트다.<br>**판단** 게임 상태 JSON을 입력받아 컨트롤러 매크로 선택(Choice), 현재 전방 점프의 유용성 여부(Noul), 즉각적인 위험도 등급(Score)을 판단한다.<br>**포인트** 스크린샷 대신 에뮬레이터 RAM과 텔레메트리를 구조화된 JSON으로 파싱해 전달하며, 타이밍 계산은 코드가 수행하고 Jev가 직접 입력을 결정한다. | 🆕 | 2026-09-16 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 192 | 36 | **무엇** TypeSafe Jev 모델을 사용해 자율주행(오토파일럿) 행동을 시뮬레이션하는 Three.js 기반의 드라이빙 시뮬레이터 데모다.<br>**판단** 주변 교통, 도로 경계, 신호, 정지선 및 목표 경로 정보를 바탕으로 샘플링된 주행 경로 후보(조향 및 속도 조합)와 정지 여부 중 최적의 행동을 선택하도록 묻는다.<br>**포인트** 후보 경로 생성과 기하학적 제어 연산은 로컬 웹 워커에서 처리하고, 컴팩트한 상태 테이블만 서버를 통해 Jev API로 전달해 초당 1.5~4회 주행 경로를 선택한다. | 🆕 | 2026-09-17 |
| [emrickgarrett/OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 39 | 9 | **무엇** Three.js와 Node.js 기반 브라우저 1v1 FPS 환경에서 TypeSafe System One 기반 AI 봇과 스나이퍼 대결을 펼치는 게임이다.<br>**판단** 서버가 약 9Hz 주기로 구조화된 게임 상태를 바탕으로 이동, 조준각(yaw, pitch), ADS, 발사, 점프 여부를 Choice와 Noul로 질의한다.<br>**포인트** API 장애 시 매치가 멈추지 않도록 동일한 액션 인터페이스를 공유하는 휴리스틱 로직을 폴백으로 구현했다. | 🆕 | 2026-09-18 |
| [phyous/tsai-sc](https://github.com/phyous/tsai-sc) | 27 | 2 | **무엇** 구조화된 스타크래프트 셰어웨어 게임 상태를 관찰하고 TypeSafe Jev 모델의 판단으로 키보드와 마우스 입력을 제어하는 하네스 리포지토리다.<br>**판단** 정리된 아군 및 시야 상태를 바탕으로 유닛 생산, 자원 채취, 탐색, 업그레이드, 전투 등 어떤 명령을 실행할지 choice 형태로 선택하게 한다.<br>**포인트** 화면 캡처가 아닌 구조화된 게임 데이터를 사용하며, 상태 읽기와 추론 중 게임을 일시정지하고 경제와 군사 결정을 분리해 원본 미션 승리를 달성했다. | 🆕 | 2026-09-16 |
| [NevaMind-AI/JevTown](https://github.com/NevaMind-AI/JevTown) | 40 | 6 | 요약 대기 · jev based AI town simulation | 🆕 | 2026-09-23 |
| [milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon) | 6 | 1 | **무엇** RAM과 타일맵으로 추출한 게임 상태를 텍스트로 읽고 TypeSafe Jev의 판단을 거쳐 Game Boy 에뮬레이터(PyBoy)로 포켓몬스터 레드를 자동 플레이하는 자율 에이전트다.<br>**판단** 대화와 맵 정보로 구성된 텍스트 스냅샷을 기반으로 현재 턴의 상위 목표(Choice)와 각 버튼 입력/이동이 최적인지 여부(Noul 예/아니오)를 판단시킨다.<br>**포인트** 비전 모델이나 대화 기록 없이 텍스트 스냅샷과 자체 단기 메모리 주입으로 동작하며, Jev의 결정을 A* 경로 탐색과 결정론적 안전 규칙으로 보정해 실행한다. | 🆕 | 2026-09-18 |
| [jammaru/jev-lab](https://github.com/jammaru/jev-lab) | 7 | 0 | 요약 대기 · 100 AI NPCs live in a tiny town. Jev chooses the next action; the world writes the story. | 🆕 | 2026-09-24 |
| [joshlarsen/jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner) | 7 | 3 | 요약 대기 · Chrome dino game played by Typesafe AI Jev model | 🆕 | 2026-09-17 |
| [anxkhn/JevPlaysPokemon](https://github.com/anxkhn/JevPlaysPokemon) | 6 | 2 | 요약 대기 · Jev plays Generation 3 Pokémon via Showdown and a real FireRed ROM. | 🆕 | 2026-09-18 |

전체 22개 → [categories/games.md](categories/games.md)

<a id="cat-content"></a>
### 📝 콘텐츠·글쓰기 (124)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 46533 | 3029 | 요약 대기 · An open-source, privacy-first, self-hosted knowledge workspace where humans and AI agents work together 开源、隐私优先、自托管的知识工作空间，让人与智能体在此协作 | 🆕 | 2026-09-27 |
| [Anil-matcha/awesome-generative-ai-apps](https://github.com/Anil-matcha/awesome-generative-ai-apps) | 3336 | 489 | 요약 대기 · 50+ open-source generative AI apps you can clone, deploy, and monetize — image generators, video tools, virtual try-ons, AI SaaS templates, and platform integrations. One-click Vercel deploy on every template. | 🆕 | 2026-09-17 |
| [Paca-AI/paca](https://github.com/Paca-AI/paca) | 1865 | 157 | 요약 대기 · AI-native, free, open-source alternative to Jira, Trello, ClickUp &amp; Monday. Built for Scrum teams where humans and AI agents collaborate as equals — on the same board, the same sprints, the same goals. Self-hosted. Fully customizable via config and plugins. | 🆕 | 2026-09-27 |
| [kitze/unclutter](https://github.com/kitze/unclutter) | 318 | 34 | **무엇** WXT 기반의 브라우저 확장 프로그램으로 웹페이지 내 불필요한 요소를 판별해 가려주는 도구다.<br>**판단** 웹페이지 내 요소들이 가려야 할 불필요한 요소(nonessential element)인지 여부를 분류하도록 요청한다.<br>**포인트** Vercel AI Gateway 또는 TypeSafe AI를 직접 활용하며, 템플릿별로 숨김 규칙을 로컬에 저장해 재적용한다. | ✅ 🆕 `choice` | 2026-09-18 |
| [feder-cr/jev](https://github.com/feder-cr/jev) | 1053 | 122 | 요약 대기 · jevos is an open-source alternative to Jev for yes/no decisions that runs on your laptop. | 🆕 | 2026-09-27 |
| [razorback16/openjev](https://github.com/razorback16/openjev) | 459 | 37 | 요약 대기 · Open, Jev-compatible System One decision server on DiffusionGemma | 🆕 | 2026-09-27 |
| [shhivv/third-hand](https://github.com/shhivv/third-hand) | 299 | 23 | 요약 대기 · computer-use assistant w/ decision models | 🆕 | 2026-09-19 |
| [socai-io/socai](https://github.com/socai-io/socai) | 220 | 25 | 요약 대기 · A Browser Use Agent that actually reads social media. Fast. Precise. Deep. | 🆕 | 2026-09-27 |
| [ChetasLua/jevmeter](https://github.com/ChetasLua/jevmeter) | 99 | 12 | **무엇** 동영상 속 모든 문장을 음성 인식 후 분석하여 실시간 지표 오버레이가 들어간 16:9 편집본 영상을 생성하는 CLI 도구<br>**판단** 각 문장에 대해 회피 여부, 감정적 호소, 근거 없는 주장, 과장 등 프리셋별 5가지 예/아니오 항목의 확률(noul)을 판단<br>**포인트** Whisper 음성 인식 및 ffmpeg 렌더링을 Jev의 예/아니오 확률 추론과 결합해 영상 하이라이트와 스코어보드를 자동 생성함 | 🆕 | 2026-09-17 |
| [SiliconLabAI/OpenJev](https://github.com/SiliconLabAI/OpenJev) | 146 | 34 | 요약 대기 · OpenSource Jev | 🆕 | 2026-09-22 |

전체 124개 → [categories/content.md](categories/content.md)

<a id="cat-data"></a>
### 🗂️ 데이터 정제·라벨링 (38)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate) | 85 | 11 | **무엇** 합성 데이터 및 사전학습용 Parquet·JSONL 대규모 데이터셋을 TypeSafe Jev API로 고속 정제·필터링하는 Rust/Python 도구다.<br>**판단** 각 행 데이터에 대해 수학적 추론 결함, 코드 정확성, 아첨(sycophancy) 여부 등을 프리셋 루브릭 기반의 Choice, Score, Noul로 평가한다.<br>**포인트** Rust 스트리밍 코어로 단일 HTTP 요청 내 다중 질문을 병렬 처리하며, CLI 및 PyO3 기반 Python 바인딩을 함께 제공한다. | 🆕 | 2026-09-25 |
| [keltokhy/jgrep](https://github.com/keltokhy/jgrep) | 125 | 3 | 요약 대기 · grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line. | 🆕 | 2026-09-25 |
| [RenaGao/jev-dataops](https://github.com/RenaGao/jev-dataops) | 60 | 6 | 요약 대기 · An open-source JEV-powered workbench for streaming data selection, quality evaluation, automatic LoRA training and held-out model evaluation. | 🆕 | 2026-09-23 |
| [r-ms/mini-jev](https://github.com/r-ms/mini-jev) | 57 | 5 | 요약 대기 · mini-Jev: what a Jev-style typed-decision interface looks like on a frozen Qwen3-4B — read the option letter's logits instead of generating JSON. Preregistered experiment, results, teaching bench. | 🆕 | 2026-09-18 |
| [ikermoel/open-alternative-jev](https://github.com/ikermoel/open-alternative-jev) | 56 | 11 | 요약 대기 · Open-source alternative to TypeSafe's Jev: a System One style model layer that gives typed, calibrated decisions from any open-weights LLM in one forward pass (HF + vLLM), with honest benchmarks | 🆕 | 2026-09-25 |
| [ZeroGold/call-coach-ai](https://github.com/ZeroGold/call-coach-ai) | 44 | 10 | 요약 대기 · Jev powered call coach | 🆕 | 2026-09-20 |
| [choxos/jev-reviewer](https://github.com/choxos/jev-reviewer) | 35 | 6 | 요약 대기 · Data extraction for systematic reviews, quoted from the papers. Ask a trial report and its supplements your extraction form or a RoB 2, ROBINS-I, QUADAS-2 or TIDieR template; Jev points at the lines, every answer is a verbatim quote with its page, you check it and export the table. Files stay in your browser. | 🆕 | 2026-09-19 |
| [AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | 19 | 3 | 요약 대기 · Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks. | 🆕 | 2026-09-17 |
| [QuicqDev/Jev-vs-ML](https://github.com/QuicqDev/Jev-vs-ML) | 17 | 0 | 요약 대기 · Jev-vs-ML | 🆕 | 2026-09-22 |
| [goodrahstar/pdf-race](https://github.com/goodrahstar/pdf-race) | 12 | 5 | 요약 대기 · Docling → Jev vs Docling → Gemini 3.8 Flash vs Gemini reading the PDF: same documents, one clock, scored against arXiv's own metadata | 🆕 | 2026-09-22 |

전체 38개 → [categories/data.md](categories/data.md)

<a id="cat-support"></a>
### 🎧 고객지원·CRM (25)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [Anil-matcha/awesome-muse-connectors](https://github.com/Anil-matcha/awesome-muse-connectors) | 1094 | 279 | 요약 대기 · A source-backed catalog of Meta Muse integrations and community connector skills, with capability, authentication, and permission notes. | 🆕 | 2026-09-24 |
| [taeold/djev-run](https://github.com/taeold/djev-run) | 559 | 34 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-24 |
| [receptron/laya](https://github.com/receptron/laya) | 509 | 46 | 요약 대기 · Run Laya, the open-source Jev-compatible System-1 decision model, from Node.js / TypeScript via ONNX Runtime | 🆕 | 2026-09-21 |
| [typesafeainate/dspy-typesafeify](https://github.com/typesafeainate/dspy-typesafeify) | 63 | 2 | 요약 대기 · Add a decorator for dspy Signatures that automatically uses TypeSafe where relevant | 🆕 | 2026-09-22 |
| [nico-martin/open-jev](https://github.com/nico-martin/open-jev) | 37 | 8 | 요약 대기 · open-jev is a browser-focused TypeScript library for typed decisions: one piece of text (the state) plus any number of typed questions go in, and one forward pass returns a calibrated probability distribution per question. Nothing is generated, so an answer is always one of the options you provided. | 🆕 | 2026-09-21 |
| [afshinm/laya-mps](https://github.com/afshinm/laya-mps) | 22 | 3 | 요약 대기 · Run Jev-style typed decisions locally on your Mac with low RAM usage and fast responses | 🆕 | 2026-09-21 |
| [ilyamk/jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling) | 21 | 4 | 요약 대기 · Self-hosted AI email classifier for Gmail powered by Jev. Create custom labels, organize your inbox, and filter spam with confidence and cost controls. | 🆕 | 2026-09-19 |
| [Qew7/jev-feels](https://github.com/Qew7/jev-feels) | 17 | 1 | 요약 대기 · Semantic decisions as ordinary Ruby #feels?, #decide, #score, Rails validations and pattern matching powered by Jev | 🆕 | 2026-09-22 |
| [KranzL/Jevflake](https://github.com/KranzL/Jevflake) | 16 | 1 | 요약 대기 · Ask TypeSafe's Jev decision model questions about your data from inside Snowflake. dbt package plus a Terraform module. | 🆕 | 2026-09-27 |
| [vinibrsl/gut](https://github.com/vinibrsl/gut) | 15 | 0 | 요약 대기 · Use LLM judgment in regular Elixir control flow. | 🆕 | 2026-09-27 |

전체 25개 → [categories/support.md](categories/support.md)

<a id="cat-devtools"></a>
### 🧑‍💻 개발 도구·코드 리뷰 (57)

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

전체 57개 → [categories/devtools.md](categories/devtools.md)

<a id="cat-catalog"></a>
### 📚 목록·레퍼런스 (26)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | 31983 | 3641 | **무엇** Anthropic Claude Code의 AI 에이전트, 슬래시 커맨드, MCP 연동, 훅 설정을 검색하고 설치할 수 있는 CLI 도구이자 템플릿 모음이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** npx 명령어를 통해 웹 카탈로그(aitmpl.com)에 등록된 다양한 MCP, 커맨드, 훅 설정을 로컬 환경에 대화형 또는 플래그 기반으로 주입할 수 있다. | 🆕 | 2026-09-27 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 1832 | 268 | **무엇** TypeSafe AI의 의사결정 모델 Jev를 활용한 공개 프로젝트, 연동 사례, 실무 논의를 분야별로 정리한 큐레이션 목록이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 카테고리별 파일을 scripts/build-readme.py로 취합해 README를 생성하며, 추천이나 품질 보증 대신 엄격한 수록 기준과 직접 검증용 체크리스트를 제시한다. | 🆕 | 2026-09-27 |
| [realpython/materials](https://github.com/realpython/materials) | 5208 | 5275 | **무엇** Real Python 튜토리얼 및 강의와 연계된 보너스 자료, 연습 문제, 예제 코드 프로젝트를 모아둔 저장소다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 튜토리얼용 샘플 코드를 아카이빙하며, 일관된 코드 스타일 유지를 위해 CI 단계에서 Ruff 포매터와 린터 검사를 적용한다. | 🆕 | 2026-09-26 |
| [daveebbelaar/ai-cookbook](https://github.com/daveebbelaar/ai-cookbook) | 4595 | 1597 | **무엇** AI 시스템 구축을 돕기 위해 복사해 붙여넣을 수 있는 코드 예제와 튜토리얼을 제공하는 개발자용 레퍼런스 리포지토리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 프로젝트에 바로 통합할 수 있는 실용적인 코드 조각과 튜토리얼 위주로 구성된 것이 특징이다. | 🆕 | 2026-09-21 |
| [heyjunpenn/awesome-jev](https://github.com/heyjunpenn/awesome-jev) | 866 | 62 | **무엇** TypeSafe Jev를 활용해 구축된 오픈소스 프로젝트들을 분야별로 모아 정리한 커뮤니티 큐레이션 카탈로그 리포지토리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 916개 프로젝트를 11개 카테고리로 정리하고 단순 주장이 아닌 실제 구현된 판단 내용과 증거 링크를 함께 기록했다. | 🆕 | 2026-09-25 |
| [Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) | 864 | 181 | **무엇** TypeSafe Jev를 활용한 분류, 라우팅, 가드레일 등 다양한 활용 사례, 프롬프트, 패턴, 스타터 코드를 정리한 큐레이션 리포지토리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 단일 애플리케이션이 아니라 Jev를 활용하는 여러 패턴, 연계 프로젝트, 커뮤니티 디렉터리 및 관련 생태계 자료를 집약한 리스트다. | 🆕 | 2026-09-23 |
| [logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) | 581 | 51 | **무엇** 커밋에 고정된 오픈소스 코드 기반으로 TypeSafe Jev 생태계 프로젝트를 정리하고 탐색할 수 있게 지원하는 큐레이션 레이더 리포지토리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** PR 대신 GitHub Issues로만 프로젝트 등록을 받으며, 웹 기반 가챠 탐색 기능 및 에이전트 연동용 Agent Skill과 llms.txt를 제공한다. | 🆕 | 2026-09-27 |
| [AbdelStark/awesome-typesafe-jev](https://github.com/AbdelStark/awesome-typesafe-jev) | 532 | 125 | **무엇** TypeSafe Jev 모델 생태계의 SDK, 데모, 에이전트 도구, 평가 자료 등을 큐레이션한 개발자용 레퍼런스 목록이다.<br>**판단** 고객지원 문의 텍스트를 바탕으로 유형(choice: technical), 불만 척도(score: 1), 긴급 여부(noul: 1.0)를 예시로 판단한다.<br>**포인트** 단순 링크 목록을 넘어 독립 벤치마크 결과, 프로젝트별 제약 사항, coding agent용 스킬 명세(SKILL.md)까지 체계적으로 제공한다. | 🆕 | 2026-09-27 |
| [wuyoscar/jev-skill](https://github.com/wuyoscar/jev-skill) | 507 | 41 | **무엇** Jev를 활용한 커뮤니티 프로젝트, 코딩 에이전트 스킬, 사용 시나리오 및 예제를 모아둔 큐레이션 리포지토리다.<br>**판단** 브라우저 액션, 모델 라우팅, 코드 리뷰 검토 대상 플래그 등 각 시나리오별 판단을 choice, score, noul로 처리한다.<br>**포인트** 브라우저 제어, 게임, 에이전트 라우팅, 컨텍스트 압축 등 108개 시나리오와 65개 관련 프로젝트를 분류해 제공한다. | 🆕 | 2026-09-27 |
| [kydlikebtc/awesome-jev](https://github.com/kydlikebtc/awesome-jev) | 499 | 11 | **무엇** TypeSafe AI의 Jev 모델을 사용하는 공개 리소스와 사례를 결정 패턴별로 분류해 정리한 큐레이션 카탈로그 리포지토리다.<br>**판단** 이 리포 자체는 목록이며, 수록된 사례들은 상태에 대한 choice, score, noul 프리미티브 기반 결정을 Jev에게 요청한다.<br>**포인트** 링크 상태와 호출부 인용을 추적하며, 홍보성 추천이 아닌 독립적 벤치마크 및 부정적 평가 결과까지 포함해 검증 기록을 제공한다. | 🆕 | 2026-09-25 |

전체 26개 → [categories/catalog.md](categories/catalog.md)

<a id="cat-other"></a>
### 🧩 기타 (18)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87470 | 13333 | **무엇** 뉴스 수집, 지정학적 위험 모니터링, 인프라 추적 정보를 통합 지도 및 패널로 시각화하는 실시간 글로벌 인텔리전스 대시보드다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** globe.gl과 deck.gl 기반의 듀얼 지도 엔진을 지원하며, 단일 코드베이스에서 여러 변형 사이트와 Tauri 2 기반 데스크톱 앱을 제공한다. | 🆕 | 2026-09-27 |
| [dabit3/jev-experiments](https://github.com/dabit3/jev-experiments) | 392 | 31 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [wobsoriano/is-jeven](https://github.com/wobsoriano/is-jeven) | 33 | 1 | 요약 대기 · Is it even? Ask Jev. | 🆕 | 2026-09-23 |
| [jon-devlapaz/jev-me](https://github.com/jon-devlapaz/jev-me) | 14 | 1 | 요약 대기 · Grill-me with Jev optional each turn | 🆕 | 2026-09-19 |
| [littlewindy123/jev-weekend-shopping-chrome](https://github.com/littlewindy123/jev-weekend-shopping-chrome) | 8 | 1 | 요약 대기 · 把对双休的支持，带进每一次购物。逛淘宝、京东时，JEV 实时猜测商品背后的工作制，疑似非双休直接盖上 PASS。原页生效，边逛边选。 | 🆕 | 2026-09-21 |
| [mstf-svndk/jev-windows-voice](https://github.com/mstf-svndk/jev-windows-voice) | 4 | 0 | 요약 대기 · Türkçe ve İngilizce doğal konuşmayla Windows 10/11 bilgisayar kontrolü: OpenAI Realtime, local Whisper, Jev, UI Automation ve Playwright. | 🆕 | 2026-09-20 |
| [cardotrejos/jev-should-i-apply](https://github.com/cardotrejos/jev-should-i-apply) | 2 | 0 | 요약 대기 · Typesafe/Jev public X demo | 🆕 | 2026-09-17 |
| [carlsonchik/judging-with-typesafe](https://github.com/carlsonchik/judging-with-typesafe) | 2 | 0 | 요약 대기 · Скилл для агентов Letta: суждения по критериям через TypeSafe System One (Jev) | 🆕 | 2026-09-17 |
| [yanglei070-ux/bili-hardcore-jev](https://github.com/yanglei070-ux/bili-hardcore-jev) | 2 | 0 | 요약 대기 · 用 JEV（TypeSafe System One 判断模型）自动完成 B 站「硬核会员试炼」的单文件 Python 脚本：手机只扫码登录一次，100 题在电脑上自动答完，零第三方依赖。 | 🆕 | 2026-09-23 |
| [cardotrejos/jev-ad-preflight](https://github.com/cardotrejos/jev-ad-preflight) | 1 | 0 | 요약 대기 · Typesafe/Jev public X demo | 🆕 | 2026-09-17 |

전체 18개 → [categories/other.md](categories/other.md)

## 이 리포는

- 매일 06:00 KST에 GitHub 검색 · awesome 목록 · 시드 목록에서 모으고, 이름만 같은 리포는 TypeSafe 근거(설명 · 토픽 · README)가 없으면 뺍니다.
- 요약은 README를 바탕으로 Gemini가 쓰고 형식 검사를 통과한 것만 싣습니다. 요약이 없으면 "요약 대기"로 둡니다.
- ✅는 코드 검색으로 `api.typesafe.ai` · `systemone` · `@typesafe-ai/sdk` 호출을 본 리포입니다.
- 각 리포와 README의 저작권은 원저작자에게 있습니다. 요약은 소개 목적의 발췌입니다.
- 형식: [radar-index/1](https://github.com/PineappleBingo/upgrade-scout/blob/main/skills/upgrade-scout/references/radar-format.md) — upgrade-scout 플러그인이 이 데이터를 읽습니다.
