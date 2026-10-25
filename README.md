# 🛰️ Jev Radar — TypeSafe Jev 오픈소스 구현 모음

> Jev(System One)를 쓰는 공개 리포를 매일 모아 한국어로 소개합니다. 프로그램이 읽는 데이터는 [`data/index.json`](data/index.json)에 있습니다(`radar-index/1` 형식).

**마지막 업데이트: 2026-10-26 08:00 KST** · 리포 11,245개 · 🆕 24시간 171 · 7일 1221 · 📚 문서 변경 164

코드 확인: ✅ 165 · ❌ 31 · ⏳ 11,049 · 한국어 요약을 기다리는 리포 9,986개

<a id="legend"></a>
## 표 보는 법

태그에 마우스를 올려도 설명이 나옵니다.

- ✅ 코드에서 Jev를 실제로 부르는 것을 확인했습니다. 따라 해 볼 구현을 찾는다면 이 표시부터 보세요.
- ❌ 코드 검색으로는 Jev 호출을 찾지 못했습니다. 문서에서만 언급했을 수 있습니다.
- ⏳ 아직 코드를 확인하지 않았습니다. 하루에 확인할 수 있는 양이 적어 대부분이 여기에 해당합니다. ⏳ 표시가 붙었다고 Jev를 안 쓴다는 뜻은 아닙니다.
- 🆕 최근 7일 안에 처음 발견한 리포, 🔥 최근 7일 동안 별이 5개 이상 늘어난 리포입니다.
- `choice` `score` `noul`은 그 코드가 Jev에 묻는 질문의 종류입니다. 차례로 선택지 고르기, 등급 매기기, 예/아니오 확률입니다.
- 요약 칸이 영어면 아직 한국어 요약이 없어 GitHub 설명을 그대로 보여 주는 것입니다.

분야: [🔀 라우팅·의도 분류 (2417)](#cat-routing) · [🛡️ 가드레일·모더레이션 (468)](#cat-guardrail) · [🏆 랭킹·검색·추천 (620)](#cat-ranking) · [🤖 에이전트·도구 선택 (2971)](#cat-agent) · [🧰 SDK·인프라·통합 (1908)](#cat-infra) · [📏 평가·채점 (770)](#cat-eval) · [🧪 견고성·감사 연구 (121)](#cat-robustness) · [💹 금융·트레이딩 (189)](#cat-finance) · [🎮 게임·인터랙티브 (186)](#cat-games) · [📝 콘텐츠·글쓰기 (466)](#cat-content) · [🗂️ 데이터 정제·라벨링 (203)](#cat-data) · [🎧 고객지원·CRM (97)](#cat-support) · [🧑‍💻 개발 도구·코드 리뷰 (237)](#cat-devtools) · [📚 목록·레퍼런스 (118)](#cat-catalog) · [🧩 기타 (474)](#cat-other)

## 🆕 새로 발견 (7일)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 84415 | 11808 | An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | 20684 | 5303 | A curated list of plugins for DeepSeek Harness (dsh) · DeepSeek Harness 插件精选列表 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [Valen-Team/Valen](https://github.com/Valen-Team/Valen) | 880 | 85 | 텍스트와 이미지, 비디오 입력을 받아 후보 선택지들의 확률을 출력하는 멀티모달 의사결정 모델 오픈소스 프로젝트다.<br>주어진 이미지나 비디오 및 지시 사항을 바탕으로 제시된 후보 행동이나 선택지 중 무엇이 적절한지 확률 분포로 판단한다.<br>Jev 스타일의 System One 구조에 시각 정보를 결합했으며 자체 데이터 SFT와 실험적인 RLCD 학습 파이프라인을 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [YI-LON/ppj-paperjev](https://github.com/YI-LON/ppj-paperjev) | 837 | 13 | Automated perps trader: Jev makes the call, Papertrade fills it at Hyperliquid mid. BTC and SOL on HyperEVM. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [kairunwen/Awesome-Robot-Use-Agent](https://github.com/kairunwen/Awesome-Robot-Use-Agent) | 168 | 8 | A curated collection of papers, research blogs, open-source tools, benchmarks, and community demos for robot-use agents, including demos powered by GPT-6 Astra. —— Explore our searchable website. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [advent259141/Astrbot_plugin_Heartflow](https://github.com/advent259141/Astrbot_plugin_Heartflow) | 89 | 26 | AstrBot 챗봇이 단체 채팅방에서 대화에 자발적으로 끼어들지 판단하고 답변을 생성하는 플러그인이다.<br>Jev에게 현재 메시지에 대해 내용 관련도, 답변 의향, 사회적 적절성, 타이밍, 일관성을 각각 0부터 4까지 5단계 점수로 묻는다.<br>판단 전용 소형 모델로 TypeSafe Jev 네이티브 API를 직접 호출해 5개 점수를 받아 가중 평균을 낸 뒤 회신 여부를 결정한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [olsenbrands/fable-foreman](https://github.com/olsenbrands/fable-foreman) | 148 | 38 | Turn Fable or Opus into your agent orchestrator: plan coding work, assign capable Claude, Codex, or Grok agents, and personally verify the result. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [cuihuan/awesome-ai-gateway](https://github.com/cuihuan/awesome-ai-gateway) | 136 | 113 | ⚡ Awesome AI Gateway — pick an AI gateway from 220+ (LiteLLM, OpenRouter, Portkey, Kong, Higress, new-api, Bifrost) by cost, security &amp; compliance, see what consolidated in 2026, learn how they actually work from an 8-chapter handbook, and verify every number yourself. Reproducible benchmarks, bilingual, updated daily. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [StartLuxLabs/StartLux-Prism](https://github.com/StartLuxLabs/StartLux-Prism) | 71 | 3 | NVIDIA GPU 환경에서 StartLux-Decision 모델의 GGUF 파일을 TypeSafe Jev 규격 API로 빠르게 서빙하는 고성능 추론 엔진이다.<br>각 선택지에 대한 보정된 확률과 none_probability를 산출해 최적 선택을 내리도록 질의한다.<br>int8 및 4비트 가중치를 별도 변환 없이 직접 구동하며 배치 구성과 무관하게 비트 단위로 동일한 연산 결과를 보장한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [advent259141/astrbot_plugin_debounce](https://github.com/advent259141/astrbot_plugin_debounce) | 68 | 10 | 사용자가 끊어서 보낸 여러 메시지를 모아 문장이 끝났는지 판별한 뒤 한 번에 LLM으로 넘기는 AstrBot용 디바운스 플러그인이다.<br>누적된 텍스트와 이미지를 바탕으로 사용자가 말을 온전히 마쳤는지 여부를 noul 확률로 묻는다.<br>로컬 ONNX 추론 외에 TypeSafe Jev 원격 API를 백엔드로 지원하며 이미지 전송과 회신 취소 기능까지 갖추고 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [mustafakendiguzel/aso-workbench](https://github.com/mustafakendiguzel/aso-workbench) | 109 | 1 | App Store Optimization on your Mac, with honest numbers. Rank tracking, Apple popularity, difficulty, AI listing writer and publishing to App Store Connect. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [balcsida/pi-provider-litellm](https://github.com/balcsida/pi-provider-litellm) | 57 | 36 | Pi 에이전트에서 자체 구축한 LiteLLM 프록시의 모델을 자동으로 찾아 공급자로 등록해 주는 확장 프로그램이다.<br>README에 판단 지점 설명이 없다.<br>/model/info 조회를 먼저 시도한 뒤 실패하면 /v1/models로 넘어가며 엔터프라이즈 SSO와 OIDC 인증을 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [nace-ai/drex-decision-models](https://github.com/nace-ai/drex-decision-models) | 45 | 5 | 상태값과 질문을 전달받아 텍스트 생성 없이 선택지별 확률만 반환하는 로컬 추론용 오픈소스 의사결정 모델과 런타임이다.<br>주어진 state를 바탕으로 예/아니오, 객관식 선택지, 점수 척도로 구성된 질문의 각 항목별 확률을 계산하도록 판단을 요청한다.<br>일반적인 텍스트 생성 과정을 거치지 않으며, Python 구현체 외에도 자체 최적화된 llama.cpp, Ollama 포크, Kapitsa로 로컬 구동을 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [mars-tw/jev-trading-command-center](https://github.com/mars-tw/jev-trading-command-center) | 64 | 7 | Open-source paper-trading research app integrating TypeSafe Jev, animated 3D model pets, and a safe offline demo. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-20 |
| [discourse/dv](https://github.com/discourse/dv) | 34 | 6 | AI 에이전트를 활용해 Discourse 코어와 플러그인을 개발하도록 돕는 도커 기반 컨테이너 관리 CLI 도구다.<br>README에 판단 지점 설명이 없다.<br>여러 AI 코딩 도구와 사전 설정된 데이터베이스를 포함한 컨테이너 환경을 Go 기반 CLI로 손쉽게 다룬다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |

## 🔥 급상승 (7일)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [xerj-org/xerj](https://github.com/xerj-org/xerj) | 15554 | 1137 | Local-first search engine and MCP server for AI agents. One Rust binary indexes code, docs, logs, JSONL/CSV and PDFs for BM25 full-text, vector and hybrid search, code search without grep, agent memory and RAG. Elasticsearch-compatible API; Corpus Hub serves hundreds of reference memory corpora. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +7218](#legend "최근 7일 동안 별이 7218개 늘었습니다") | 2026-10-25 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 135188 | 12901 | Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +6801](#legend "최근 7일 동안 별이 6801개 늘었습니다") | 2026-10-23 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 221498 | 29614 | 개발자가 터미널이나 데스크톱 환경에서 코드 분석 및 개발 작업을 자동화하기 위해 사용하는 오픈소스 AI 코딩 에이전트 도구다.<br>README에 판단 지점 설명 없음<br>개발용 build 에이전트와 파일 수정을 제한하는 읽기 전용 plan 에이전트 및 하위 general 에이전트를 내장해 작업 목적별로 전환할 수 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +4994](#legend "최근 7일 동안 별이 4994개 늘었습니다") | 2026-10-25 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 114543 | 22123 | TradingAgents: Multi-Agents LLM Financial Trading Framework | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +2638](#legend "최근 7일 동안 별이 2638개 늘었습니다") | 2026-10-16 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 257047 | 56299 | Nous Research가 개발한 자가 학습 루프 및 멀티 플랫폼 연동 기능을 갖춘 오픈소스 AI 에이전트 프레임워크<br>README에 판단 지점 설명 없음<br>경험 기반 자율 스킬 생성, FTS5 세션 검색, Honcho 사용자 모델링, 다양한 샌드박스 백엔드 및 메신저 연동을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +2109](#legend "최근 7일 동안 별이 2109개 늘었습니다") | 2026-10-25 |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | 43885 | 4981 | Run frontier MoE models on hardware you already own — pure C, zero deps, experts streamed from disk. Tiny engine, immense model. 🐦 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +1146](#legend "최근 7일 동안 별이 1146개 늘었습니다") | 2026-10-25 |
| [deepopen-com/deepopen](https://github.com/deepopen-com/deepopen) | 3055 | 343 | 100개 이상의 언어를 지원하며 분류와 라우팅 등 구조화된 의사결정을 단일 전방 전달로 수행하는 비자귀적 System 1 결정 엔진이다.<br>이메일이나 텍스트 입력을 바탕으로 담당 부서(choice), 긴급도(score), 이탈 위험 여부(noul) 등의 구조화된 결정을 내린다.<br>텍스트 생성을 배제한 비자귀 구조로 33ms 수준의 저지연을 구현하고, 입력 언어를 감지해 최적 체크포인트로 분기하는 내장 라우터를 제공한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +1008](#legend "최근 7일 동안 별이 1008개 늘었습니다") | 2026-10-23 |
| [Asymptote-Labs/agent-beacon](https://github.com/Asymptote-Labs/agent-beacon) | 2808 | 255 | 다양한 AI 코딩 에이전트 하네스의 세션 기록을 수집하고 재사용 가능한 지식으로 축적하는 로컬 우선 메모리 계층 도구다.<br>README에 판단 지점 설명 없음<br>Claude Code, Cursor 등 20개 이상의 하네스 세션 내 프롬프트, 도구, 토큰 활동을 단일 JSONL 트레이스로 기록하고 공유한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +968](#legend "최근 7일 동안 별이 968개 늘었습니다") | 2026-10-25 |
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 34301 | 3077 | 100개 이상의 언어로 텍스트를 분석해 단일 순방향 패스에서 선택, 점수, 참/거짓 판단을 도출하는 비자기회귀 의사결정 엔진<br>담당 부서(choice), 긴급도 수준(score), 이탈 위험 여부(noul) 등 입력 텍스트에 대한 구조화된 질문을 판단시킴<br>비자기회귀 단일 패스로 처리하며 언어별 체크포인트 자동 라우팅 및 RLCD 학습을 거치고 최대 8,192 토큰 컨텍스트를 지원함 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +917](#legend "최근 7일 동안 별이 917개 늘었습니다") | 2026-10-25 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 10824 | 1469 | Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML editors with a built-in AI agent, plus a \`genoffice\` CLI and agent skill so Claude Code, Codex and Cursor can create and edit real .docx/.xlsx/.pptx files locally. Bring your own key. macOS, Windows &amp; Linux. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +872](#legend "최근 7일 동안 별이 872개 늘었습니다") | 2026-10-24 |

## 📚 문서·모델 변경 (7일)

- 새 페이지 `https://docs.typesafe.ai/api/errors` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 새 페이지 `https://docs.typesafe.ai/api/list-models` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 새 페이지 `https://docs.typesafe.ai/api/system-one` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/images` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/models` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/primitives/choice` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/primitives/score` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APIConnectionError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APIError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APIPromise` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APITimeoutError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/APIUserAbortError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/AuthenticationError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/BadRequestError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/Image` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/InternalServerError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/NotFoundError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/PermissionDeniedError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/RateLimitError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/TypeSafeClient` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/TypeSafeError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/UnprocessableEntityError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/functions/box` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/functions/choice` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/functions/image` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/BoxCoordinates` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/BoxQuestion` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/BoxResponse` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
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
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/SystemOneResult` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/TextWithAssets` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/TypeSafeClientConfig` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/Usage` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/WithResponse` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/Asset` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/ChoiceCriteria` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/Compression` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/ContentValue` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
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
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/SentContent` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/ENV` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/LOG_LEVELS` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/VERSION` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/noul` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/score` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/withAssets` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/changelog` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 페이지 삭제 `https://docs.typesafe.ai/api` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 새 페이지 `https://api.typesafe.ai/openapi.json` — [docs-llms](https://docs.typesafe.ai/llms.txt)
- 새 페이지 `https://docs.typesafe.ai/api/errors.md` — [docs-llms](https://docs.typesafe.ai/llms.txt)
- 새 페이지 `https://docs.typesafe.ai/api/list-models.md` — [docs-llms](https://docs.typesafe.ai/llms.txt)
- 새 페이지 `https://docs.typesafe.ai/api/system-one.md` — [docs-llms](https://docs.typesafe.ai/llms.txt)
- 페이지 삭제 `https://docs.typesafe.ai/api.md` — [docs-llms](https://docs.typesafe.ai/llms.txt)
- 변경 `내용 변경` — [docs-models](https://docs.typesafe.ai/models.md)
- 변경 `내용 변경` — [docs-api](https://docs.typesafe.ai/api.md)
- 변경 `https://docs.typesafe.ai/agent-skill` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `내용 변경` — [docs-models](https://docs.typesafe.ai/models.md)
- 변경 `내용 변경` — [docs-jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)
- 변경 `내용 변경` — [docs-agent-skill](https://docs.typesafe.ai/agent-skill.md)
- 변경 `https://docs.typesafe.ai/agent-skill` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
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
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/Image` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/InternalServerError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/NotFoundError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/PermissionDeniedError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/RateLimitError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/TypeSafeClient` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/TypeSafeError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/classes/UnprocessableEntityError` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/functions/box` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/functions/choice` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/functions/image` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/BoxCoordinates` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/BoxQuestion` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/BoxResponse` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
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
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/SystemOneResult` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/TextWithAssets` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/TypeSafeClientConfig` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/Usage` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/interfaces/WithResponse` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/Asset` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/ChoiceCriteria` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/Compression` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/ContentValue` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
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
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/type-aliases/SentContent` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/ENV` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/LOG_LEVELS` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/VERSION` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/noul` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/score` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/api/variables/withAssets` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/sdk/javascript/changelog` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `내용 변경` — [docs-agent-skill](https://docs.typesafe.ai/agent-skill.md)
- 변경 `https://docs.typesafe.ai/concepts/how-to-build-with-system-one` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/confidence` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/primitives/noul` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `내용 변경` — [docs-models](https://docs.typesafe.ai/models.md)
- 변경 `내용 변경` — [docs-jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)
- 변경 `내용 변경` — [docs-agent-skill](https://docs.typesafe.ai/agent-skill.md)
- 변경 `https://docs.typesafe.ai/cookbooks/entity_alignment` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/cookbooks/llm_guardrails` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/models` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `https://docs.typesafe.ai/primitives/box` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `내용 변경` — [docs-models](https://docs.typesafe.ai/models.md)
- 변경 `내용 변경` — [docs-jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)
- 변경 `내용 변경` — [docs-agent-skill](https://docs.typesafe.ai/agent-skill.md)
- 새 커밋 `302eea662c54bca6730873fe245bec1d69ebc23d` — [git-typesafe-skills](https://github.com/typesafe-ai/skills)

## 분야별

<a id="cat-routing"></a>
### 🔀 라우팅·의도 분류 (2417)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 34301 | 3077 | 100개 이상의 언어로 텍스트를 분석해 단일 순방향 패스에서 선택, 점수, 참/거짓 판단을 도출하는 비자기회귀 의사결정 엔진<br>담당 부서(choice), 긴급도 수준(score), 이탈 위험 여부(noul) 등 입력 텍스트에 대한 구조화된 질문을 판단시킴<br>비자기회귀 단일 패스로 처리하며 언어별 체크포인트 자동 라우팅 및 RLCD 학습을 거치고 최대 8,192 토큰 컨텍스트를 지원함 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +917](#legend "최근 7일 동안 별이 917개 늘었습니다") | 2026-10-25 |
| [mizorewww/laya-mlx](https://github.com/mizorewww/laya-mlx) | 7025 | 568 | Native MLX runtime for Laya typed decision models — 7–14 ms short decisions on M3 Max. No text generation, PyTorch, or cloud API. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +55](#legend "최근 7일 동안 별이 55개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-20 |
| [samuelfaj/distill](https://github.com/samuelfaj/distill) | 766 | 51 | Get FAR MORE done with FAR FEWER tokens 🔥 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +38](#legend "최근 7일 동안 별이 38개 늘었습니다") | 2026-10-24 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 624 | 96 | Claude Code와 OpenAI Codex CLI에서 사용자 프롬프트 난이도에 따라 모델을 턴 단위로 자동 라우팅해 주는 CLI 도구다.<br>사용자 프롬프트의 복잡도, 추론 필요성, 도구 복잡도, 컨텍스트 크기 등을 평가해 빠른 티어(저비용)와 강력한 티어 중 적절한 모델 티어를 선택하도록 판단시킨다.<br>루프백 프록시 방식으로 원본 CLI의 로그인 세션과 권한을 그대로 유지하며, /jev-explain 커맨드로 판단 근거 지표와 신뢰도를 확인할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +16](#legend "최근 7일 동안 별이 16개 늘었습니다") | 2026-09-19 |
| [jerryjliu/docjev](https://github.com/jerryjliu/docjev) | 539 | 35 | A very fast document classifier/splitter using Jev  | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +8](#legend "최근 7일 동안 별이 8개 늘었습니다") | 2026-09-26 |
| [BillionsBobby/JevRouter](https://github.com/BillionsBobby/JevRouter) | 467 | 28 | 모델, 서브에이전트, MCP 툴, CLI 등 다양한 후보군 중 다음에 실행할 역량을 Jev 기반으로 빠르게 선택해주는 경량 라우터 도구다.<br>주어진 요청 상태에서 후보군(모델, 서브에이전트, 툴 등) 중 어떤 역량이 다음 단계를 처리해야 하는지 choice 형태로 질문한다.<br>Jev 모델의 확률 판단 결과를 유지한 채 가용성, 권한, 위험도, 사용자 확인 단계를 덧붙여 실행하며 단일 호출(route) 및 다단계 계획(plan)을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-04 |
| [logan-markewich/jeff](https://github.com/logan-markewich/jeff) | 308 | 23 | A self-hosted drop-in replacement for TypeSafe's jev, powered by GliFormer. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-20 |
| [cobusgreyling/Jev](https://github.com/cobusgreyling/Jev) | 140 | 30 | Unofficial TypeSafe Jev showcase — System One decisions, not chat. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-15 |
| [nidhi-singh02/agent-router](https://github.com/nidhi-singh02/agent-router) | 118 | 15 | CLI that picks Cursor, Claude Code, Codex, or OpenCode + model/effort for a task, then launches it. Powered by Jev and Herdr | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-27 |
| [Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev) | 114 | 16 | Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-28 |

2417개 모두 보기 → [categories/routing.md](categories/routing.md)

<a id="cat-guardrail"></a>
### 🛡️ 가드레일·모더레이션 (468)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [firelex/jeff](https://github.com/firelex/jeff) | 1551 | 82 | Millisecond decisions, any domain: a 0.8B open "System 1" model that picks between your options with calibrated probabilities. One base, swappable LoRA adapters, on your own hardware. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +13](#legend "최근 7일 동안 별이 13개 늘었습니다") | 2026-10-07 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 124 | 20 | 다양한 코딩 에이전트의 도구 호출과 결과를 검사해 위험한 명령과 프롬프트 인젝션을 차단하는 보안 훅 라이브러리다.<br>도구 호출의 위험도(risk), 사용자 요청 부합 여부(user_requested), 신뢰할 수 없는 출처 기반 여부(from_untrusted)를 질의해 판단한다.<br>외부 의존성 없이 Claude Code, Cursor 등 여러 에이전트에 thin 어댑터로 연결되며 도구 실행 전후 및 인스트럭션 파일을 검사한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +23](#legend "최근 7일 동안 별이 23개 늘었습니다") | 2026-10-02 |
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 163 | 16 | Pi 코딩 에이전트의 도구 호출과 출력 결과를 TypeSafe Jev API로 검사하고 제어하는 확장 도구다.<br>명령의 파괴성·데이터 유출·범위 초과·피해 수준과 출력의 비밀정보 누출·실패 유형을 noul, score, choice로 판단한다.<br>도구 실행 전 게이트 판단을 한 번의 요청(약 300ms)으로 처리하며, 오류 발생 시 실행을 차단하지 않는 fail-open 방식으로 동작한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-17 |
| [qkal/Canny](https://github.com/qkal/Canny) | 126 | 17 | Claude Code와 Codex CLI에서 코딩 에이전트가 검증 절차 없이 작업을 마쳤다고 주장하지 못하게 감시하는 훅 도구이다.<br>에이전트 메시지가 작업 완료를 주장하는지, 변경된 diff가 특정 규칙을 위반했는지 여부를 예/아니오 확률로 판단시킨다.<br>런타임 의존성이 없고, 원장의 사실 기록만 작업을 차단할 수 있으며 Jev의 판단 결과는 차단 없이 에이전트의 컨텍스트 조언으로만 사용된다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-22 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | 92 | 10 | 웹페이지 내 DOM 요소를 탐색해 TypeSafe Jev 모델의 판단에 따라 광고 요소를 실시간으로 제거하는 크롬 확장 프로그램이다.<br>추출된 각 DOM 후보 요소의 태그, 클래스, 텍스트 요약 등을 바탕으로 유료 광고(paid advertisement)인지 여부를 noul 확률 질문으로 판단시킨다.<br>광고 후보 선별과 배치는 순수 코드로 처리하고 시맨틱 판별만 Jev에 일괄 요청하며, 설정된 임계 확률을 넘기면 애니메이션과 함께 요소를 제거한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-17 |
| [jev-sec/jev-ids](https://github.com/jev-sec/jev-ids) | 25 | 2 | 네트워크 플로우 데이터와 라벨 예시를 보고 침입 여부와 공격 유형을 판별하는 보안 탐지 도구다.<br>네트워크 플로우가 공격인지 여부와 공격 카테고리가 5개 선택지 중 무엇인지 묻는다.<br>텍스트 생성 없이 확률과 선택지 형식으로 직접 판별해 LLM보다 훨씬 빠르고 저렴하다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-12 |
| [cisco-ai-defense/skill-scanner](https://github.com/cisco-ai-defense/skill-scanner) | 2632 | 337 | AI 에이전트 스킬 파일에서 프롬프트 인젝션, 데이터 유출, 악성 코드 패턴을 탐지하는 보안 분석 도구다.<br>스킬 파일의 의미적 위험 요소나 악성 행위 포함 여부를 choice 또는 noul로 판정하도록 모델에 질문할 수 있다.<br>정적 분석(YARA-X), AST·데이터 흐름 분석, cel-go 기반 규칙 엔진, 선택적 LLM 판정기를 결합하여 다층으로 위험을 검사한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +22](#legend "최근 7일 동안 별이 22개 늘었습니다") | 2026-10-22 |
| [spamscanner/spamscanner](https://github.com/spamscanner/spamscanner) | 373 | 40 | Spam Scanner is a Node.js anti-spam, email filtering, and phishing prevention tool and service. Built for @ladjs, @forwardemail, @cabinjs, @breejs, and @lassjs. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [MillionSend/millionsend](https://github.com/MillionSend/millionsend) | 250 | 25 | AWS SES를 기반으로 자체 호스팅하거나 클라우드로 사용할 수 있는 Resend 호환 오픈소스 이메일 발송 플랫폼이다.<br>발송된 이메일 샘플에 대해 유해 콘텐츠 및 어뷰징 여부를 판단하도록 백그라운드에서 점수 채점(score)을 요청한다.<br>발송 지연을 막기 위해 SES 수락 후 백그라운드에서 비동기로 샘플을 채점하며, 셀프 호스트 환경에서는 기본 비활성화되어 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +18](#legend "최근 7일 동안 별이 18개 늘었습니다") | 2026-10-25 |
| [JamesANZ/JevPromptShield](https://github.com/JamesANZ/JevPromptShield) | 202 | 46 | 코딩 에이전트의 입력 프롬프트와 실행 예정인 셸 명령어를 외부에서 검사해 악성 행위를 차단하는 보안 도구다.<br>사용자 프롬프트가 안전한지 점수화하고 실행하려는 Bash 명령어가 안전한지 여부를 확률로 판단한다.<br>명백한 명령어는 로컬 정책으로 즉시 처리하고 판단이 애매한 경우만 Jev로 검사하며 대화 맥락을 넘겨 우회 시도를 잡아낸다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-21 |

468개 모두 보기 → [categories/guardrail.md](categories/guardrail.md)

<a id="cat-ranking"></a>
### 🏆 랭킹·검색·추천 (620)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [zilliztech/deep-searcher](https://github.com/zilliztech/deep-searcher) | 8348 | 815 | Open Source Deep Research Alternative to Reason and Search on Private Data. Written in Python. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-22 |
| [zilliztech/GPTCache](https://github.com/zilliztech/GPTCache) | 8216 | 600 | Semantic cache for LLMs. Fully integrated with LangChain and llama_index.  | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-22 |
| [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | 2792 | 274 | A persistent, unified memory layer for all your AI agents (e.g. Claude Code, Codex, DSH), backed by Markdown and Milvus. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +34](#legend "최근 7일 동안 별이 34개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-23 |
| [AgriciDaniel/jev-seo](https://github.com/AgriciDaniel/jev-seo) | 712 | 111 | Live SEO audit for any website from one homepage URL, judged by Jev. PDF, XLSX and Markdown reports. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +58](#legend "최근 7일 동안 별이 58개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-22 |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 545 | 67 | 자연어 질의를 바탕으로 검색 소스·기간을 결정하고 검색 결과의 관련도를 채점하여 순위를 매기는 웹 검색 애플리케이션이다.<br>사용자 질의에 적합한 검색어·소스·기간 선택과 검색된 결과 항목별 관련도 점수 평가를 수행하도록 한다.<br>생성형 답변 없이 결과별 관련도 점수와 링크를 노출하며, Cloudflare Workers 기반으로 다중 엔진 병렬 검색과 결과 스트리밍을 처리한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +7](#legend "최근 7일 동안 별이 7개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-21 |
| [can1357/jegrep](https://github.com/can1357/jegrep) | 117 | 12 | Semantic grep: find code by describing what you're looking for, powered by Jev. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-26 |
| [mrnugget/jev-shell-history](https://github.com/mrnugget/jev-shell-history) | 120 | 10 | zsh 환경에서 사용자가 입력 중인 명령어에 적합한 완성을 최근 히스토리에서 찾아 fish 스타일로 보여주는 자동완성 플러그인이다.<br>현재 입력 내용을 완성할 가능성이 가장 높은 히스토리 후보(Choice)와 어떤 후보라도 입력을 완성하는지 여부(Noul)를 질의한다.<br>zle 백그라운드 비동기 처리로 프롬프트를 차단하지 않으며 접두사 모드 및 퍼지 모드 게이팅을 적용해 호출 지연 시간은 약 0.7~0.9초다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-18 |
| [ellipsis-dev/blink](https://github.com/ellipsis-dev/blink) | 100 | 11 | 자연어 질의를 기반으로 워커 앙상블이 파일 시스템을 탐색해 관련 파일을 찾아주는 코드베이스 검색 CLI 도구다.<br>자연어 질의에 대해 각 파일 및 폴더 이름이 얼마나 부합하는지 관련도 점수를 매긴다.<br>경로 점수에 비례해 다수의 워커를 확률적으로 분배·이동시키며, 최종 도달한 워커 비율로 검색 결과를 랭킹화한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-16 |
| [kevinbadi/jev-voice](https://github.com/kevinbadi/jev-voice) | 125 | 23 | Talk to your Mac. Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-23 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 10824 | 1469 | Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML editors with a built-in AI agent, plus a \`genoffice\` CLI and agent skill so Claude Code, Codex and Cursor can create and edit real .docx/.xlsx/.pptx files locally. Bring your own key. macOS, Windows &amp; Linux. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +872](#legend "최근 7일 동안 별이 872개 늘었습니다") | 2026-10-24 |

620개 모두 보기 → [categories/ranking.md](categories/ranking.md)

<a id="cat-agent"></a>
### 🤖 에이전트·도구 선택 (2971)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 257047 | 56299 | Nous Research가 개발한 자가 학습 루프 및 멀티 플랫폼 연동 기능을 갖춘 오픈소스 AI 에이전트 프레임워크<br>README에 판단 지점 설명 없음<br>경험 기반 자율 스킬 생성, FTS5 세션 검색, Honcho 사용자 모델링, 다양한 샌드박스 백엔드 및 메신저 연동을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +2109](#legend "최근 7일 동안 별이 2109개 늘었습니다") | 2026-10-25 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187749 | 45895 | 자연어 지시나 시각적 빌더를 통해 자동화된 AI 에이전트 워크플로를 제작하고 실행하는 오픈소스 플랫폼이다.<br>README에 판단 지점 설명 없음<br>자연어 대화형 생성 도구(AutoPilot)와 노드 기반 시각적 빌더(Build)를 제공하여 에이전트의 세부 실행 단계를 제어할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +107](#legend "최근 7일 동안 별이 107개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-25 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148442 | 24915 | The agent engineering platform. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +402](#legend "최근 7일 동안 별이 402개 늘었습니다") | 2026-10-25 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 40796 | 3302 | AI 에이전트의 지식, 메모리, 스킬을 가상 파일 시스템 형태로 일원화해 탐색·관리할 수 있게 돕는 컨텍스트 데이터베이스다.<br>README에 판단 지점 설명 없음<br>viking:// 가상 파일 시스템 구조와 L0~L2 계층 요약을 통해 전체 본문 로드 전 관련성을 검토하고 세션을 마크다운 파일로 기록한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +543](#legend "최근 7일 동안 별이 543개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [trycua/cua](https://github.com/trycua/cua) | 30946 | 2262 | AI 에이전트가 멀티 OS 환경에서 데스크톱 GUI 및 앱을 조작하고 평가할 수 있도록 격리 인프라와 드라이버를 제공하는 프레임워크다.<br>README에 판단 지점 설명 없음<br>macOS, Windows, Linux 환경을 지원하며 애플 실리콘용 로컬 VM(Lume)과 클라우드 샌드박스(Fleet), 백그라운드 UI 조작 기능을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +816](#legend "최근 7일 동안 별이 816개 늘었습니다") | 2026-10-25 |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | 30747 | 4903 | AI 에이전트가 외부 앱과 연동할 수 있도록 인증, 세션 관리, 도구 검색을 제공하는 SDK 모노리포다.<br>README에 판단 지점 설명 없음<br>모든 도구를 컨텍스트에 올리지 않고 런타임 메타 도구로 탐색·실행하며, 호스팅된 MCP 엔드포인트 생성을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +117](#legend "최근 7일 동안 별이 117개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 23648 | 1790 | 동적 인덱싱된 요소 목록을 기반으로 웹 작업을 고속으로 수행하도록 돕는 브라우저 에이전트 라이브러리다.<br>현재 관찰된 요소 테이블에서 수행할 동작(CLICK, TYPE_TEXT 등)과 대상 요소를 단일 요청으로 선택한다.<br>스크린샷 없이 구조화된 텍스트 상태만 전달하며, 동작과 대상 선택을 1회 네트워크 요청으로 묶어 처리 속도를 높였다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +432](#legend "최근 7일 동안 별이 432개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-30 |
| [langchain-ai/langchainjs](https://github.com/langchain-ai/langchainjs) | 18294 | 3457 | JavaScript 및 TypeScript 환경에서 LLM 기반 애플리케이션과 자율 에이전트를 구축하기 위한 프레임워크다.<br>README에 판단 지점 설명 없음<br>Node.js뿐만 아니라 브라우저, Cloudflare Workers, Deno, Bun 등 다양한 JS 런타임을 폭넓게 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +16](#legend "최근 7일 동안 별이 16개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-23 |
| [elie222/inbox-zero](https://github.com/elie222/inbox-zero) | 12808 | 1634 | 이메일 정리, 답장 초안 작성, 콜드 메일 차단 등을 자동화하는 오픈소스 AI 개인 이메일 어시스턴트 애플리케이션이다.<br>README에 판단 지점 설명 없음<br>Next.js와 Prisma 기반 풀스택 구조이며, 로컬 개발을 위해 Google 및 Microsoft 에뮬레이터 Docker 프로필을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +169](#legend "최근 7일 동안 별이 169개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [jev-chat/jev-chat-jarvis](https://github.com/jev-chat/jev-chat-jarvis) | 8099 | 1301 | 안드로이드 메신저 화면을 비침습적으로 읽어 상대방 의도 분석과 답변 후보 작성을 돕는 대화 보조 도구다.<br>상대방의 실제 의도, 위험 등급(1~9), 즉시 답장 여부, 최적 행동을 진단하고 생성된 3개 후보 답장의 적합도를 순위 매긴다.<br>앱 후킹 없이 접근성 서비스와 오프라인 OCR로 화면만 읽으며 자동 발송 대신 입력창 텍스트 삽입까지만 수행한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +216](#legend "최근 7일 동안 별이 216개 늘었습니다") | 2026-10-16 |

2971개 모두 보기 → [categories/agent.md](categories/agent.md)

<a id="cat-infra"></a>
### 🧰 SDK·인프라·통합 (1908)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 62030 | 12669 | 100개 이상의 LLM 공급자 API를 OpenAI 표준 인터페이스로 단일화해 호출하는 오픈소스 AI 게이트웨이 및 SDK<br>README에 판단 지점 설명 없음<br>Rust 코어와 Python SDK를 기반으로 로드 밸런싱, 가상 키 관리, 지출 추적, 가드레일 기능을 프록시 형태로 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +526](#legend "최근 7일 동안 별이 526개 늘었습니다") | 2026-10-25 |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 44813 | 9628 | Claude, OpenAI, Gemini 등 AI 구독 할당량을 통합 관리하고 공유할 수 있게 중계하는 API 게이트웨이 서비스다.<br>README에 판단 지점 설명 없음<br>Go 백엔드, Vue 프론트엔드, Redis, PostgreSQL 스택을 활용하여 계정 공유 및 비용 분담 중계 플랫폼을 구현했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +511](#legend "최근 7일 동안 별이 511개 늘었습니다") | 2026-10-25 |
| [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) | 28198 | 2515 | LLM과 도구·데이터를 연결하는 Model Context Protocol(MCP) 서버와 클라이언트를 파이썬으로 손쉽게 개발하도록 돕는 프레임워크다.<br>README에 판단 지점 설명 없음<br>데코레이터 기반으로 파이썬 함수를 감싸 스키마 생성, 입력 검증, 프로토콜 수명주기 관리를 자동화하여 MCP 구축을 단순화했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +74](#legend "최근 7일 동안 별이 74개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [vercel/ai](https://github.com/vercel/ai) | 27511 | 5440 | The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents  | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +132](#legend "최근 7일 동안 별이 132개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-25 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 11768 | 1133 | 멀티모달 AI 애플리케이션을 위해 벡터 유사도 검색과 SQL 쿼리를 제공하는 오픈소스 임베디드 검색 데이터베이스 라이브러리다.<br>README에 판단 지점 설명 없음<br>Lance 컬럼형 포맷을 기반으로 구축되어 대규모 벡터 및 멀티모달 데이터의 무복사(Zero-copy) 처리와 자동 버전 관리를 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +73](#legend "최근 7일 동안 별이 73개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 9521 | 649 | Qwen 기반으로 직접 학습하고 자체 호스팅할 수 있도록 TypeSafe Jev 호환 API를 제공하는 경량 의사결정 모델 제품군<br>주어진 텍스트에 대해 choice(다중 선택), noul(예/아니오), score(평가 등급) 형태의 질문들을 한 번의 요청으로 동시에 판단<br>TypeSafe Python SDK와 호환되는 드롭인 대체재이며 0.8B부터 27B까지 제공되어 로컬 머신부터 GPU 서버까지 배포 가능 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +231](#legend "최근 7일 동안 별이 231개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-23 |
| [maximhq/bifrost](https://github.com/maximhq/bifrost) | 9100 | 1463 | 여러 AI 프로바이더를 OpenAI 호환 단일 API로 연결하고 로드 밸런싱과 장애 복구를 지원하는 AI 게이트웨이다.<br>README에 판단 지점 설명 없음<br>MCP(Model Context Protocol) 게이트웨이 기능과 시맨틱 캐싱, 웹 UI 및 Go SDK를 기본 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +183](#legend "최근 7일 동안 별이 183개 늘었습니다") | 2026-10-25 |
| [agentgateway/agentgateway](https://github.com/agentgateway/agentgateway) | 5585 | 990 | AI 에이전트와 LLM, MCP 도구 간의 통신에 보안·관측성·거버넌스를 제공하는 오픈소스 프록시 게이트웨이다.<br>README에 판단 지점 설명 없음<br>MCP와 A2A 프로토콜을 지원하며 쿠버네티스 Gateway API 확장 및 CEL 기반 정책 엔진을 통합해 인프라 레벨에서 라우팅과 제어를 수행한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +191](#legend "최근 7일 동안 별이 191개 늘었습니다") | 2026-10-25 |
| [ax-llm/ax](https://github.com/ax-llm/ax) | 2969 | 199 | TypeScript를 기반으로 다양한 언어 환경에서 DSPy 스타일의 구조화된 LLM 생성과 에이전트 파이프라인을 구축하는 프레임워크다.<br>README에 판단 지점 설명 없음<br>단일 시그니처와 프로그래밍 모델을 Python, Java, C++, Go, Rust 라이브러리로 컴파일하여 다국어 환경에서 동일한 추론 계약을 유지한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-21 |
| [Mapika/decider](https://github.com/Mapika/decider) | 1154 | 51 | Qwen3.5 기반으로 텍스트 생성 대신 단일 순전파로 정형 질문의 확률 분포를 반환하는 오픈소스 System One 모델 계열.<br>상태와 함께 전달된 고정 보기 중 하나 선택(Choice), 2~10단계 등급(Score), 예/아니오 확률(Noul)을 판단.<br>텍스트 디코딩이나 파싱 없이 단일 순전파로 로짓 소프트맥스를 계산하며, llama.cpp GGUF 및 vLLM 서빙을 지원함. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-20 |

1908개 모두 보기 → [categories/infra.md](categories/infra.md)

<a id="cat-eval"></a>
### 📏 평가·채점 (770)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [comet-ml/opik](https://github.com/comet-ml/opik) | 22919 | 1892 | LLM 앱 및 AI 에이전트의 실행 트레이싱, 성능 평가, 모니터링을 제공하는 오픈소스 옵저버빌리티 플랫폼이다.<br>LLM 생성 결과에 대해 환각 여부(noul), 유해성 분류(choice), RAG 응답 품질 점수(score) 등을 판별하도록 요청한다.<br>LLM-as-a-judge 평가 메트릭, 트레이스 트리 추적, PyTest 기반 CI/CD 연동 및 자체 호스팅 환경을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +197](#legend "최근 7일 동안 별이 197개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-25 |
| [Kiln-AI/Kiln](https://github.com/Kiln-AI/Kiln) | 5233 | 396 | 평가, 프롬프트 최적화, RAG, 에이전트 구축 및 파인튜닝을 지원하는 AI 개발 워크벤치 데스크톱 앱 겸 Python 라이브러리다.<br>생성된 출력물이 선호 기준이나 평가 지표에 부합하는지 여부(noul)와 모델 응답 품질 등급(score)을 판정한다.<br>노코드 데스크톱 앱과 오픈소스 Python 라이브러리를 연계해 비개발자와 협업하고, Git 동기화 및 로컬 Ollama 실행을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +36](#legend "최근 7일 동안 별이 36개 늘었습니다") | 2026-10-25 |
| [Yinsongxu/LLM2Jev](https://github.com/Yinsongxu/LLM2Jev) | 462 | 50 | Turn local language models into Jev-style structured decision models. Get results from text and images with prefill alone—no token-by-token decoding required. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +13](#legend "최근 7일 동안 별이 13개 늘었습니다") | 2026-10-16 |
| [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | 307 | 29 | Jev 계열 타입 기반 의사결정 모델의 성능과 신뢰성을 평가하기 위한 벤치마크 도구다.<br>README에 판단 지점 설명 없음<br>신뢰도 캐스케이드, 위원회, best-of-n 조합 실험을 수행하고 리더보드 순위 변동 여부를 분석했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +25](#legend "최근 7일 동안 별이 25개 늘었습니다") | 2026-10-15 |
| [libingzheren/Jev-Mem](https://github.com/libingzheren/Jev-Mem) | 238 | 24 | Jev-Mem: System-One Controlled Agentic Memory | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +18](#legend "최근 7일 동안 별이 18개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-28 |
| [PostHog/jeeves](https://github.com/PostHog/jeeves) | 431 | 21 | Jeeves – Reasoning improves Jev-like decision models | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +6](#legend "최근 7일 동안 별이 6개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-16 |
| [monteduro/killmyidea](https://github.com/monteduro/killmyidea) | 270 | 37 | 스타트업 아이디어를 입력하면 질문 10개에 대한 평가 점수를 종합해 진행 여부(KILL, FIX, SHIP)를 판정해 주는 웹 서비스<br>아이디어의 카테고리, 이해도(understandability), 그리고 문제 정의·수익성·도달력 등 8개 항목에 대한 0-4점 척도 평가<br>생성형 LLM 텍스트 생성 대신 10개 평가 질문을 병렬로 점수화하고 가중 평균 및 명확성 게이트를 거쳐 3단계 판정을 도출하는 구조 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +5](#legend "최근 7일 동안 별이 5개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-17 |
| [allebee/jevk5](https://github.com/allebee/jevk5) | 157 | 12 | JevK5: open-weight alternative to TypeSafe Jev. Typed decisions with probabilities in one forward pass; Apache-2.0 weights and code. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-28 |
| [aaddrick/building-with-typesafe-jev](https://github.com/aaddrick/building-with-typesafe-jev) | 148 | 11 | Unofficial skill that teaches coding agents to build with TypeSafe AI's Jev: typed decisions, calibrated confidence, and prior art from 150+ community projects. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-01 |
| [mizchi/jev-lint](https://github.com/mizchi/jev-lint) | 124 | 4 | lint text in code by jev scorerer | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-02 |

770개 모두 보기 → [categories/eval.md](categories/eval.md)

<a id="cat-robustness"></a>
### 🧪 견고성·감사 연구 (121)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [chainreactors/fingers](https://github.com/chainreactors/fingers) | 268 | 40 | 보안 스캐너 등에서 대상 웹 기술 및 프레임워크를 식별하기 위해 여러 지문 라이브러리를 통합 분석하는 Go 엔진이다.<br>규칙 엔진이 매칭한 제품명과 버전 결과가 실제 웹 응답 증거에 의해 성립하는지(holds, refuted, insufficient) 판단한다.<br>Jev를 심사기(Judge)로 활용해 규칙 기반 결과의 오탐과 중복을 줄이고 버전을 보완하며, 실패 시 순수 규칙 결과로 폴백한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [ncchinh/quyet](https://github.com/ncchinh/quyet) | 37 | 6 | Quyet: calibrated decision models | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev) | 35 | 11 | A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [iapp-technology/openthai-systemone](https://github.com/iapp-technology/openthai-systemone) | 68 | 23 | OpenThai-SystemOne: open Thai + English System One decision model (0.8B, 256-way slot head, Apache-2.0) | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [mithalouni/system-one-open](https://github.com/mithalouni/system-one-open) | 41 | 7 | Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal) | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [yzfly/edgejev](https://github.com/yzfly/edgejev) | 33 | 4 | 离线可用的本地类型化决策：4 核 CPU 单题 15.6ms。Local &amp; offline Jev / System One inference on CPU — ONNX + INT8, no torch at runtime. 支持 laya / kev / PlayJev | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [MoLeMo-Lab/mojev](https://github.com/MoLeMo-Lab/mojev) | 30 | 2 | MoJev: typed, calibrated decisions in one forward pass. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [Yifan-Lan/awesome-jev-robustness](https://github.com/Yifan-Lan/awesome-jev-robustness) | 7 | 4 | TypeSafe Jev 모델의 답변 일관성, 보정 오차, 프롬프트 주입 취약점 등 견고성을 독립적으로 검증한 연구와 감사 결과를 모아둔 큐레이션 리포지토리다.<br>README에 판단 지점 설명 없음<br>단순 작업 정확도 대신 옵션 순서나 이름, 부정문 표현 등에 따라 확률값과 선택 결과가 어떻게 흔들리는지 속성별 독립 테스트 결과를 목록과 요약표로 정리했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [Mangaba-ai/brier](https://github.com/Mangaba-ai/brier) | 8 | 0 | Brier, by Mangaba AI: typed, calibrated decisions (choice/score/noul) for Portuguese text, on your own servers. Decisões tipadas e calibradas em português. Brier v5 e Brier-0 (Qwen3-4B + LoRA); API /v1/decide. Licença comercial desde 5.0.0; v2 e v3 seguem Apache-2.0. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [SamuelSacco/jev-exploration](https://github.com/SamuelSacco/jev-exploration) | 3 | 0 | TypeSafe Jev API의 확률 보정 상태와 성능 주장을 감사하고 실측 실험 코드를 기록한 분석 저장소<br>난이도별 800개 문항 데이터셋과 외부 벤치마크 데이터에 대해 Noul, Choice, Score 원시 타입으로 판단 질문을 수행<br>Jev의 확률값이 중간값으로 압축 왜곡되어 실제 보정(calibration)되지 않음을 ECE로 증명하고 플랫 스케일링을 통한 보정 한계를 검증함 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |

121개 모두 보기 → [categories/robustness.md](categories/robustness.md)

<a id="cat-finance"></a>
### 💹 금융·트레이딩 (189)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 64256 | 11276 | An AI Hedge Fund Team | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +182](#legend "최근 7일 동안 별이 182개 늘었습니다") | 2026-10-24 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 13124 | 2668 | 트레이더와 개발자를 위해 암호화폐, 주식, 외환의 리서치부터 백테스트와 실거래를 지원하는 자체 호스팅 AI 트레이딩 OS다.<br>README에 판단 지점 설명 없음<br>Python 전략 개발 및 백테스트뿐 아니라 에이전트 연동용 MCP, 자체 결제 및 정산 기능까지 결합한 올인원 스택을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +229](#legend "최근 7일 동안 별이 229개 늘었습니다") | 2026-10-25 |
| [imikerussell/beebots](https://github.com/imikerussell/beebots) | 327 | 144 | OKX 무기한 선물 시장에서 세 마리의 AI 봇이 모의 거래 경쟁을 벌이도록 설계한 시스템이다.<br>각 거래 봇의 매매와 관련된 판단을 내린다.<br>기본적으로 모의 거래로 작동하며 모든 주문이 코드로 작성된 위험 관리 계층을 거치도록 설계했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +21](#legend "최근 7일 동안 별이 21개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-14 |
| [brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis) | 222 | 48 | 실시간 암호화폐 시장 지표와 트위터 여론을 수집·통계 분석하여 매매 의사결정 카드를 생성해 주는 터미널 애플리케이션이다.<br>실시간 시장 지표와 트윗 요약 데이터를 바탕으로 매매 액션(Choice), 감성 스펙트럼(Score), 숏 스퀴즈 위험 확률(Noul), 촉매 중요도(Score)를 판단시킨다.<br>트위터 API 비용을 줄이기 위해 SQLite 기반 조기 종료 중복 제거 파이프라인을 거친 후 정제된 대표 트윗과 통계치만 Jev에게 전달해 추론 비용과 지연 시간을 낮췄다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-21 |
| [aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade) | 222 | 43 | Hyperliquid 오더북 데이터를 바탕으로 TypeSafe Jev를 호출해 암호화폐 5종의 매매 주문을 자동 집행하는 트레이딩 봇 및 대시보드다.<br>오더북 데이터를 기반으로 틱마다 포지션 방향(long 또는 short)과 실행 액션(open, close, hold)을 선택하도록 질의한다.<br>코인별 독립 지갑 구조를 적용하고, 진입 시 ALO 메이커 주문과 청산 시 IOC 테이커 주문을 분기하며 Bun과 Next 대시보드를 SSE로 연결했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +8](#legend "최근 7일 동안 별이 8개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-21 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 114543 | 22123 | TradingAgents: Multi-Agents LLM Financial Trading Framework | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +2638](#legend "최근 7일 동안 별이 2638개 늘었습니다") | 2026-10-16 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 3085 | 594 | Monad 블록체인 상의 Kuru MON-USDC 오더북을 감시하여 매 블록마다 Jev 모델의 예측에 맞춰 post-only 지정가 주문을 갱신하는 트레이딩 봇이다.<br>지정된 블록 구간(기본 100블록, 약 30초) 동안의 가격 변동 방향에 대해 buy 또는 sell 중 하나를 선택하도록 판단시킨다.<br>약 300ms의 블록 주기에 맞추기 위해 RPC 호출을 2회로 최소화하고 기존 주문 취소와 신규 주문을 batchUpdate 단일 트랜잭션으로 처리한다. | [❌](#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") [🔥 +53](#legend "최근 7일 동안 별이 53개 늘었습니다") | 2026-10-13 |
| [YI-LON/ppj-paperjev](https://github.com/YI-LON/ppj-paperjev) | 837 | 13 | Automated perps trader: Jev makes the call, Papertrade fills it at Hyperliquid mid. BTC and SOL on HyperEVM. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 514 | 65 | Jev API를 활용하여 261종의 IRS 세무 서식 페이지를 식별하고 분류하는 문서 분류 도구다.<br>입력된 세무 문서 페이지가 261종의 IRS 서식 중 어떤 양식에 해당하는지 선택하도록 묻는다.<br>261개 서식에 걸쳐 100% 엄격한 정확도를 보이며 페이지당 약 0.001달러의 처리 비용을 제시한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [initial-d/ml-quant-trading](https://github.com/initial-d/ml-quant-trading) | 97 | 39 | PyTorch를 기반으로 213개 팩터 계산부터 포트폴리오 최적화와 백테스트까지 한 번에 수행하는 퀀트 연구용 파이프라인이다.<br>파이프라인 상태를 바탕으로 정형화된 포트폴리오 의도나 투자 결정을 내리도록 묻는다.<br>상하한가처럼 거래가 불가능한 시점의 데이터를 롤링 윈도 계산 전에 미리 마스킹하여 신호 왜곡을 방지한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +6](#legend "최근 7일 동안 별이 6개 늘었습니다") | 2026-10-25 |

189개 모두 보기 → [categories/finance.md](categories/finance.md)

<a id="cat-games"></a>
### 🎮 게임·인터랙티브 (186)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 455 | 65 | 구조화된 에뮬레이터 RAM 상태 데이터를 바탕으로 Super Mario Bros. 게임 컨트롤러 입력을 직접 결정하는 Jev 기반 에이전트 실험 프로젝트다.<br>게임 상태 JSON을 입력받아 컨트롤러 매크로 선택(Choice), 현재 전방 점프의 유용성 여부(Noul), 즉각적인 위험도 등급(Score)을 판단한다.<br>스크린샷 대신 에뮬레이터 RAM과 텔레메트리를 구조화된 JSON으로 파싱해 전달하며, 타이밍 계산은 코드가 수행하고 Jev가 직접 입력을 결정한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-16 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 229 | 44 | TypeSafe Jev 모델을 사용해 자율주행(오토파일럿) 행동을 시뮬레이션하는 Three.js 기반의 드라이빙 시뮬레이터 데모다.<br>주변 교통, 도로 경계, 신호, 정지선 및 목표 경로 정보를 바탕으로 샘플링된 주행 경로 후보(조향 및 속도 조합)와 정지 여부 중 최적의 행동을 선택하도록 묻는다.<br>후보 경로 생성과 기하학적 제어 연산은 로컬 웹 워커에서 처리하고, 컴팩트한 상태 테이블만 서버를 통해 Jev API로 전달해 초당 1.5~4회 주행 경로를 선택한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +5](#legend "최근 7일 동안 별이 5개 늘었습니다") | 2026-09-17 |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2562 | 264 | Qwen3-0.6B 백본 기반으로 토큰 디코딩 없이 병렬 판단 확률 분포를 출력하도록 구현된 오픈소스 Jev 복제 모델 및 훈련 파이프라인이다.<br>게임 상태와 질문이 주어졌을 때 동적 선택지 중 최적 행동 확률(Choice), 명제 참/거짓 확률(Boolean), 정렬 등급 점수(Score)를 판단시킨다.<br>텍스트 토큰 생성 대신 상태·질문·후보군을 한 번의 포워드로 인코딩하고 전용 헤드로 확률 분포를 직접 출력해 4개 게임 제어에 적용했다. | [❌](#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") | 2026-10-16 |
| [christianmat/jev-pokemon](https://github.com/christianmat/jev-pokemon) | 130 | 10 | 인공지능 모델 Jev가 포켓몬스터 레드를 직접 플레이하도록 에뮬레이터와 연동해 의사결정을 수행하는 프로젝트다.<br>이동 목적지, 대화 상대, 전투 기술, 포켓몬 교체, 메뉴 선택 등 게임 내 가능한 행동 목록 중에서 하나를 고른다.<br>하네스가 메모리를 읽어 규칙상 가능한 선택지와 정보를 구성하고, 길 찾기 같은 단순 조작만 처리하며 진행을 전적으로 모델 판단에 맡긴다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [wingedsheep/argentum-engine](https://github.com/wingedsheep/argentum-engine) | 77 | 42 | Kotlin 기반으로 MTG(Magic: The Gathering) 규칙을 구현한 게임 엔진이자 온라인 멀티플레이 플랫폼이다.<br>게임 내 AI 상대 모드(GAME_AI_MODE=jev)에서 게임 액션 및 플레이 선택지를 판단한다.<br>결정론적 룰 엔진, RL/MCTS 학습용 Gym 환경, 오라클 텍스트 파서 Assay와 함께 트리 탐색·LLM·Jev AI 컨트롤러를 제공한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev) | 114 | 12 | Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [NevaMind-AI/JevTown](https://github.com/NevaMind-AI/JevTown) | 50 | 6 | jev based AI town simulation | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [emrickgarrett/OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 43 | 10 | Three.js와 Node.js 기반 브라우저 1v1 FPS 환경에서 TypeSafe System One 기반 AI 봇과 스나이퍼 대결을 펼치는 게임이다.<br>서버가 약 9Hz 주기로 구조화된 게임 상태를 바탕으로 이동, 조준각(yaw, pitch), ADS, 발사, 점프 여부를 Choice와 Noul로 질의한다.<br>API 장애 시 매치가 멈추지 않도록 동일한 액션 인터페이스를 공유하는 휴리스틱 로직을 폴백으로 구현했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [phyous/tsai-sc](https://github.com/phyous/tsai-sc) | 28 | 4 | 구조화된 스타크래프트 셰어웨어 게임 상태를 관찰하고 TypeSafe Jev 모델의 판단으로 키보드와 마우스 입력을 제어하는 하네스 리포지토리다.<br>정리된 아군 및 시야 상태를 바탕으로 유닛 생산, 자원 채취, 탐색, 업그레이드, 전투 등 어떤 명령을 실행할지 choice 형태로 선택하게 한다.<br>화면 캡처가 아닌 구조화된 게임 데이터를 사용하며, 상태 읽기와 추론 중 게임을 일시정지하고 경제와 군사 결정을 분리해 원본 미션 승리를 달성했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [Somnius/shadowrealms-ai](https://github.com/Somnius/shadowrealms-ai) | 21 | 2 | Self-hosted AI Storyteller for World of Darkness: Classic (oWoD Revised) and V5 rules, dice pools from your character sheet, Discord-style chat with voice (listen and speak, local TTS and Whisper), local LLMs (LM Studio / Ollama) with RAG memory, English and Greek. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-22 |

186개 모두 보기 → [categories/games.md](categories/games.md)

<a id="cat-content"></a>
### 📝 콘텐츠·글쓰기 (466)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [kitze/unclutter](https://github.com/kitze/unclutter) | 385 | 46 | WXT 기반의 브라우저 확장 프로그램으로 웹페이지 내 불필요한 요소를 판별해 가려주는 도구다.<br>웹페이지 내 요소들이 가려야 할 불필요한 요소(nonessential element)인지 여부를 분류하도록 요청한다.<br>Vercel AI Gateway 또는 TypeSafe AI를 직접 활용하며, 템플릿별로 숨김 규칙을 로컬에 저장해 재적용한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +5](#legend "최근 7일 동안 별이 5개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-10-25 |
| [githubnext/localjev](https://github.com/githubnext/localjev) | 831 | 55 | — | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-18 |
| [artemnovitckii/creator-lab](https://github.com/artemnovitckii/creator-lab) | 162 | 40 | 인스타그램 릴스 영상을 스크랩하고 전사한 뒤 스크립트 구조와 훅 패턴을 분석해 주는 로컬 웹 도구다.<br>릴스 스크립트를 보고 주제, 오프닝 방식, 훅 메커니즘, 대본 구조, 근거, 감정적 소구, 조언 구체성, CTA 등 8가지 항목을 분류하도록 판단시킨다.<br>npm 의존성이나 빌드 단계 없이 순수 Node.js로 동작하며, Apify 수집 및 음성 전사 후 성과 지표와 무관하게 순수 스크립트 텍스트만을 Jev에 전달해 캐싱·분류한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +7](#legend "최근 7일 동안 별이 7개 늘었습니다") | 2026-09-24 |
| [kevinbadi/hyperedit](https://github.com/kevinbadi/hyperedit) | 218 | 129 | FFMPEG, Remotion, Obsidian 에이전트 및 Jev를 결합한 AI 기반 영상 편집기 애플리케이션이다.<br>README에 판단 지점 설명 없음<br>getmocha.com으로 생성되었으며 FFMPEG과 Remotion 기반 영상 처리에 Obsidian 에이전트 통합을 표방한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-21 |
| [1Panel-dev/laya-server](https://github.com/1Panel-dev/laya-server) | 108 | 59 | A self-hosted API and web interface for Laya’s structured decision models, compatible with the TypeSafe Jev API format. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-10 |
| [mmastrac/djev](https://github.com/mmastrac/djev) | 115 | 13 | Jev-style structured decisions on DiffusionGemma: the example server from vLLM PR 57250 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-02 |
| [DanRWilloughby/snifftest](https://github.com/DanRWilloughby/snifftest) | 35 | 2 | Markdown과 텍스트 문서를 검사해 AI 특유의 문체와 하우스 룰 위반을 잡아내는 산문 린터 도구다.<br>단락을 단순 반복하는 결문, 과도한 유보 표현, 수사적 도입부 등 문맥 판단이 필요한 규칙의 해당 확률을 질문한다.<br>정규식 기반 로컬 규칙과 호스팅 판단 모델 규칙을 분리하며, 텍스트를 재작성하지 않고 문제 위치와 확률 플래그만 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-23 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 46935 | 3090 | An open-source, privacy-first, self-hosted knowledge workspace where humans and AI agents work together 开源、隐私优先、自托管的知识工作空间，让人与智能体在此协作 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +109](#legend "최근 7일 동안 별이 109개 늘었습니다") | 2026-10-25 |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 36346 | 3966 | A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +392](#legend "최근 7일 동안 별이 392개 늘었습니다") | 2026-10-25 |
| [heilcheng/awesome-agent-skills](https://github.com/heilcheng/awesome-agent-skills) | 6312 | 787 | Tutorials, Guides and Agent Skills Directories | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +25](#legend "최근 7일 동안 별이 25개 늘었습니다") | 2026-10-19 |

466개 모두 보기 → [categories/content.md](categories/content.md)

<a id="cat-data"></a>
### 🗂️ 데이터 정제·라벨링 (203)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [keltokhy/jgrep](https://github.com/keltokhy/jgrep) | 139 | 5 | grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-17 |
| [sileod/tasksource](https://github.com/sileod/tasksource) | 228 | 13 | Datasets collection and preprocessings framework for NLP extreme multitask learning | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [OmniJev/OneJev](https://github.com/OmniJev/OneJev) | 192 | 19 | 🚀🚀 A multimodal System One decision model that gives calibrated answers to typed questions about screens, photos, video and text in one forward pass. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +20](#legend "최근 7일 동안 별이 20개 늘었습니다") | 2026-10-25 |
| [amponce/archive-movie-browser](https://github.com/amponce/archive-movie-browser) | 156 | 42 | Internet Archive에 등록된 퍼블릭 도메인 영화를 TMDB 메타데이터와 연동해 탐색하고 가상 채널로 시청하는 웹 플레이어다.<br>Archive.org의 특정 업로드 영상이 실제 TMDB의 어떤 영화에 해당하는지 여부를 식별한다.<br>Jev로 오프라인 식별한 인덱스를 활용하며, 동기화된 가상 TV 채널, M3U 및 XMLTV 피드, MCP 서버 인터페이스를 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [caiweihan/jev-account-filter](https://github.com/caiweihan/jev-account-filter) | 38 | 0 | 동영상 플랫폼 기반 데이터셋 구축 과정에서 제목과 썸네일 정보만 활용해 특정 도메인 계정을 선별하는 도구다.<br>계정 메타데이터와 영상 썸네일을 바탕으로 해당 계정의 카테고리 분류와 도메인 관련성 확률을 판단하게 한다.<br>영상을 내려받거나 시청하지 않고도 계정을 분류하며, 수집 데이터와 선별 규칙을 분리해 기준을 바꿔가며 재검증할 수 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +34](#legend "최근 7일 동안 별이 34개 늘었습니다") | 2026-10-19 |
| [compozy/kb](https://github.com/compozy/kb) | 112 | 12 | — | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [dark-hxx/jev-safety-gateway](https://github.com/dark-hxx/jev-safety-gateway) | 26 | 2 | 位于 nginx 与大模型后端之间的前置过滤反向代理：逐请求提取用户输入交给 JEV 判定，有害拦截、正常透明放行 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +7](#legend "최근 7일 동안 별이 7개 늘었습니다") | 2026-10-08 |
| [nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook) | 38 | 3 | Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [equationalapplications/curated-thoughts](https://github.com/equationalapplications/curated-thoughts) | 23 | 5 | 로컬 문서를 감시·색인해 위키 형태의 지식 베이스를 구축하는 Tauri 기반 로컬 우선 데스크톱 세컨드 브레인 앱<br>축적된 비정형 팩트 데이터를 더 빠르고 저렴하게 분류하기 위해 사실 유형(fact-typing)을 판별하도록 요청함<br>작업·에피소드·의미 기억의 3단계 구조와 사람 검토 큐를 결합했으며, Jev 엔드포인트를 전용 팩트 분류기로 옵션 지원함 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [lzq-0529/jev-span](https://github.com/lzq-0529/jev-span) | 10 | 2 | 텍스트를 구두점으로 분할해 후보 구간을 만들고 Jev API에 객관식 질문을 던져 개체명 경계와 유형을 판별하는 제로샷 개체명 인식 도구다.<br>텍스트의 각 후보 구간이 지정된 개체 유형에 해당하는지 여부와 정확한 경계 및 유형을 다지선다 choice와 확률로 판단하게 한다.<br>추가 학습이나 GPU 없이 텍스트 분할과 다지선다 질문 조합만으로 개체 구간을 추출하며 결정 과정을 트리 형태로 추적할 수 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |

203개 모두 보기 → [categories/data.md](categories/data.md)

<a id="cat-support"></a>
### 🎧 고객지원·CRM (97)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [receptron/laya](https://github.com/receptron/laya) | 997 | 82 | Run Laya, the open-source Jev-compatible System-1 decision model, from Node.js / TypeScript via ONNX Runtime | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +37](#legend "최근 7일 동안 별이 37개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-17 |
| [mohit67890/imajev](https://github.com/mohit67890/imajev) | 409 | 48 | Open Jev-style typed-decision model that also takes images: photo + app state + typed questions in, calibrated probabilities out, locally. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +13](#legend "최근 7일 동안 별이 13개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-10 |
| [taeold/djev-run](https://github.com/taeold/djev-run) | 586 | 39 | — | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [typesafeainate/dspy-typesafeify](https://github.com/typesafeainate/dspy-typesafeify) | 66 | 3 | Add a decorator for dspy Signatures that automatically uses TypeSafe where relevant | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [Qew7/jev-feels](https://github.com/Qew7/jev-feels) | 21 | 1 | Semantic decisions as ordinary Ruby #feels?, #decide, #score, Rails validations and pattern matching powered by Jev | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [vinibrsl/gut](https://github.com/vinibrsl/gut) | 18 | 1 | Use LLM judgment in regular Elixir control flow. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [lesnolie/magpie-free-gateways](https://github.com/lesnolie/magpie-free-gateways) | 13 | 0 | Magpie plugin with live free-model catalogs for OpenCode Zen and Kilo Gateway, including native Jev System One support. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [sqliteai/blink](https://github.com/sqliteai/blink) | 23 | 1 | An open-source, high-performance System One Model for one-pass typed decisions, with an embeddable C runtime and WebAssembly support. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [AI-Yatra/s1ced-playground](https://github.com/AI-Yatra/s1ced-playground) | 7 | 4 | — | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [EmiRoberti77/jev-py-integration](https://github.com/EmiRoberti77/jev-py-integration) | 2 | 0 | 고객지원 티켓을 Jev로 먼저 분류하고 필요한 경우에만 LLM 답장을 생성하도록 연동한 파이썬 파이프라인 예제다.<br>티켓의 긴급 여부(is_urgent), 분노 여부(is_angry), 상담원 필요성(needs_a_human) 확률과 문의 의도(intent) 선택지를 판단하게 한다.<br>Jev 호출 한 번으로 복수 판단을 얻어 파이썬 조건문으로 스팸 제거와 LLM 에스컬레이션을 제어한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |

97개 모두 보기 → [categories/support.md](categories/support.md)

<a id="cat-devtools"></a>
### 🧑‍💻 개발 도구·코드 리뷰 (237)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 21205 | 2460 | 개발자가 터미널 환경에서 여러 코딩 에이전트 세션을 실행할 수 있도록 RAM 효율성과 성능을 극대화한 러스트 기반 코딩 에이전트 하네스 도구다.<br>README에 판단 지점 설명 없음<br>로컬 임베딩 비활성화 시 단일 세션 27.8MB 수준의 낮은 메모리 점유율을 제공하며, TUI 내 세션 유지 업데이트 등 다중 세션 확장성에 집중했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +195](#legend "최근 7일 동안 별이 195개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [Effect-TS/effect](https://github.com/Effect-TS/effect) | 17384 | 875 | TypeScript 개발자가 타입 안전한 에러 처리, 의존성 주입, 구조적 동시성 등을 구현하는 데 사용하는 표준 라이브러리 모노레포다.<br>README에 판단 지점 설명 없음<br>코어 로직뿐만 아니라 런타임 플랫폼 추상화, 각종 SQL 클라이언트, AI 제공자 연동 모듈을 모노레포 패키지로 함께 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +62](#legend "최근 7일 동안 별이 62개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [samchon/typia](https://github.com/samchon/typia) | 5953 | 231 | TypeScript 타입을 컴파일 타임에 분석해 런타임 유효성 검증기, JSON 직렬화 코드, LLM 함수 호출 하네스를 생성하는 변환 라이브러리다.<br>README에 판단 지점 설명 없음<br>별도 스키마 정의나 런타임 리플렉션 없이 순수 TypeScript 타입을 빌드 단계(ttsc)에서 전용 검증 코드로 직접 컴파일한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +9](#legend "최근 7일 동안 별이 9개 늘었습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-24 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 692 | 46 | Git diff나 전체 코드베이스를 단계별로 검토하고 결과를 로컬 대시보드에 시각화하는 코드 리뷰 워크플로 도구다.<br>위험 매트릭스(Noul), 파일 프로파일(Choice/Score), 증거 선택 및 메커니즘 분류(Choice), 심각도(Score), 리뷰어 라우팅(Choice)을 판단시킨다.<br>오케스트레이션과 임계값 정책은 코드로 관리하며, Jev를 단계별 모델 판단에만 제한적으로 사용하고 단방향 계층 아키텍처를 강제한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +5](#legend "최근 7일 동안 별이 5개 늘었습니다") | 2026-09-17 |
| [sutro-sh/jev-align](https://github.com/sutro-sh/jev-align) | 311 | 25 | Jev와 GEPA를 사용해 불확실한 데이터에 대한 인간 피드백을 수집하고 AI Functions를 최적화하는 CLI 도구<br>이진 분류, 다중 클래스, 다중 라벨, 루브릭 기반 점수 평가 등 사용자가 정의한 질문을 데이터셋에 적용해 판단<br>불확실성 높은 데이터를 능동 학습으로 골라내 라벨링을 유도하고, GEPA를 통해 프롬프트 정의를 지속 개선하며 공개 레지스트리에 공유할 수 있음 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-03 |
| [uehaj/sys1grep](https://github.com/uehaj/sys1grep) | 150 | 10 | 텍스트 파일에서 정규표현식 대신 의미를 기준으로 각 줄을 다국어로 검색하는 명령줄 도구다.<br>파일의 각 줄이 사용자가 지정한 명제나 의미에 부합하는지 여부를 확률값으로 묻고 판단한다.<br>외부 의존성 없이 단일 파일로 동작하며 여러 줄을 묶어 병렬 처리하고 AND나 NOT 같은 논리 연산을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 245 | 25 | AI 코딩 에이전트가 코드 품질을 지속적으로 점검하도록 지원하는 로컬 기반 MCP 서버 플러그인이다.<br>코드 diff와 컨텍스트를 바탕으로 정확성·복잡도·변경용이성·모듈성·테스트·보안 등의 품질 지표를 Score·Choice·Noul로 평가한다.<br>긴 서술형 리뷰 텍스트 대신 정형화된 점수와 신뢰도 시그널을 반환하며, 원인 진단과 코드 수정은 메인 에이전트에게 맡긴다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-17 |
| [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) | 8957 | 930 | 원격 리포지토리 푸시 전에 일회용 워크트리에서 AI 검증 파이프라인을 실행해 주는 로컬 Git 프록시 도구다.<br>README에 판단 지점 설명 없음<br>푸시 시점에 별도 워크트리에서 리뷰, 테스트, 린트를 수행하고 안전한 수정은 자동 적용하며 통과 시에만 PR을 연다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +48](#legend "최근 7일 동안 별이 48개 늘었습니다") | 2026-10-25 |
| [dzhng/jevgrep](https://github.com/dzhng/jevgrep) | 2901 | 220 | 코딩 에이전트가 리포지토리 동작 관련 질문을 던져 필요한 파일과 소스 코드 맥락을 빠르게 찾도록 돕는 CLI 도구다.<br>사용자의 동작 관련 질의에 대해 폴더, 파일, 선언부 단위의 코드 내용이 유의미하게 연관되어 있는지 여부를 판단시킨다.<br>저장소 계층을 탐색해 관련 파일과 소스 발췌문을 표준 출력으로 제공하며 코딩 에이전트의 탐색 비용을 약 30% 절감하도록 설계되었다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +109](#legend "최근 7일 동안 별이 109개 늘었습니다") | 2026-10-21 |
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 2799 | 176 | TypeSafe API 연동 코드를 생성할 수 있도록 Claude Code 등의 AI 에이전트에 추가하는 개발용 스킬 모음이다.<br>README에 판단 지점 설명 없음<br>Claude Code 플러그인과 skills.sh 배포 방식을 지원하여 에이전트가 TypeSafe 워크플로를 설계하고 문서를 참조할 수 있게 한다. | [❌](#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") [🔥 +66](#legend "최근 7일 동안 별이 66개 늘었습니다") | 2026-10-23 |

237개 모두 보기 → [categories/devtools.md](categories/devtools.md)

<a id="cat-catalog"></a>
### 📚 목록·레퍼런스 (118)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | 32894 | 3793 | Anthropic Claude Code의 AI 에이전트, 슬래시 커맨드, MCP 연동, 훅 설정을 검색하고 설치할 수 있는 CLI 도구이자 템플릿 모음이다.<br>README에 판단 지점 설명 없음<br>npx 명령어를 통해 웹 카탈로그(aitmpl.com)에 등록된 다양한 MCP, 커맨드, 훅 설정을 로컬 환경에 대화형 또는 플래그 기반으로 주입할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +157](#legend "최근 7일 동안 별이 157개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-25 |
| [daveebbelaar/ai-cookbook](https://github.com/daveebbelaar/ai-cookbook) | 4672 | 1621 | AI 시스템 구축을 돕기 위해 복사해 붙여넣을 수 있는 코드 예제와 튜토리얼을 제공하는 개발자용 레퍼런스 리포지토리다.<br>README에 판단 지점 설명 없음<br>프로젝트에 바로 통합할 수 있는 실용적인 코드 조각과 튜토리얼 위주로 구성된 것이 특징이다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +20](#legend "최근 7일 동안 별이 20개 늘었습니다") | 2026-09-21 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 2465 | 372 | TypeSafe AI의 의사결정 모델 Jev를 활용한 공개 프로젝트, 연동 사례, 실무 논의를 분야별로 정리한 큐레이션 목록이다.<br>README에 판단 지점 설명 없음<br>카테고리별 파일을 scripts/build-readme.py로 취합해 README를 생성하며, 추천이나 품질 보증 대신 엄격한 수록 기준과 직접 검증용 체크리스트를 제시한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +66](#legend "최근 7일 동안 별이 66개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) | 697 | 60 | 커밋에 고정된 오픈소스 코드 기반으로 TypeSafe Jev 생태계 프로젝트를 정리하고 탐색할 수 있게 지원하는 큐레이션 레이더 리포지토리다.<br>README에 판단 지점 설명 없음<br>PR 대신 GitHub Issues로만 프로젝트 등록을 받으며, 웹 기반 가챠 탐색 기능 및 에이전트 연동용 Agent Skill과 llms.txt를 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +12](#legend "최근 7일 동안 별이 12개 늘었습니다") | 2026-10-24 |
| [AbdelStark/awesome-typesafe-jev](https://github.com/AbdelStark/awesome-typesafe-jev) | 606 | 157 | TypeSafe Jev 모델 생태계의 SDK, 데모, 에이전트 도구, 평가 자료 등을 큐레이션한 개발자용 레퍼런스 목록이다.<br>고객지원 문의 텍스트를 바탕으로 유형(choice: technical), 불만 척도(score: 1), 긴급 여부(noul: 1.0)를 예시로 판단한다.<br>단순 링크 목록을 넘어 독립 벤치마크 결과, 프로젝트별 제약 사항, coding agent용 스킬 명세(SKILL.md)까지 체계적으로 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +11](#legend "최근 7일 동안 별이 11개 늘었습니다") | 2026-10-19 |
| [walidboulanouar/awesome-jev-use-cases](https://github.com/walidboulanouar/awesome-jev-use-cases) | 456 | 73 | TypeSafe Jev 모델을 활용한 오픈소스 프로젝트, 데모, API 예제 및 사용 사례를 정리한 큐레이션 목록 저장소다.<br>README에 판단 지점 설명 없음<br>70개 이상의 Jev 구현 데모를 좋아요와 도달률 등 소셜 지표로 순위화하고 원문 포스트 및 저장소 링크를 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +18](#legend "최근 7일 동안 별이 18개 늘었습니다") | 2026-09-26 |
| [kydlikebtc/awesome-jev](https://github.com/kydlikebtc/awesome-jev) | 593 | 30 | TypeSafe AI의 Jev 모델을 사용하는 공개 리소스와 사례를 결정 패턴별로 분류해 정리한 큐레이션 카탈로그 리포지토리다.<br>이 리포 자체는 목록이며, 수록된 사례들은 상태에 대한 choice, score, noul 프리미티브 기반 결정을 Jev에게 요청한다.<br>링크 상태와 호출부 인용을 추적하며, 홍보성 추천이 아닌 독립적 벤치마크 및 부정적 평가 결과까지 포함해 검증 기록을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-25 |
| [fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev) | 231 | 61 | TypeSafe Jev를 기반으로 구축된 다양한 오픈소스 프로젝트를 카테고리별로 모아 정리한 큐레이션 저장소다.<br>저장소에 새로 제출된 프로젝트 풀 리퀘스트의 적합성과 기준 충족 여부를 Jev 워크플로를 통해 심사한다.<br>단순한 프로젝트 목록 관리에 그치지 않고 jev-review-action을 연동해 제출된 프로젝트를 자동 심사하는 워크플로를 운영한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-21 |
| [dabit3/jev-experiments](https://github.com/dabit3/jev-experiments) | 409 | 32 | TypeSafe Jev 모델의 저지연 특성을 검증하고 시연하기 위해 Devin으로 구축한 실험용 데모 애플리케이션 모음이다.<br>README에 판단 지점 설명 없음<br>각 데모 애플리케이션이 최상위 디렉터리별로 분리되어 개별 README, TESTING.md, 스크린샷과 함께 구성되어 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-21 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 143044 | 21042 | 다양한 LLM 기반 에이전트, 스킬, RAG 앱 템플릿과 예제 코드를 모아둔 오픈소스 카탈로그다.<br>README에 판단 지점 설명 없음<br>Claude, Gemini, GPT 등 여러 LLM을 활용한 다양한 도메인의 단일 및 멀티 에이전트 템플릿을 실행 가능한 예제로 제공한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +827](#legend "최근 7일 동안 별이 827개 늘었습니다") | 2026-10-22 |

118개 모두 보기 → [categories/catalog.md](categories/catalog.md)

<a id="cat-other"></a>
### 🧩 기타 (474)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 89512 | 13752 | 뉴스 수집, 지정학적 위험 모니터링, 인프라 추적 정보를 통합 지도 및 패널로 시각화하는 실시간 글로벌 인텔리전스 대시보드다.<br>README에 판단 지점 설명 없음<br>globe.gl과 deck.gl 기반의 듀얼 지도 엔진을 지원하며, 단일 코드베이스에서 여러 변형 사이트와 Tauri 2 기반 데스크톱 앱을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +783](#legend "최근 7일 동안 별이 783개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-25 |
| [FBddcz/embodied-jev](https://github.com/FBddcz/embodied-jev) | 321 | 14 | EmbodiedJev: MuJoCo robot decision workbench with MiniCPM5-2B, Jev and compatible model APIs | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +12](#legend "최근 7일 동안 별이 12개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-22 |
| [ipenywis/laya-ultrafast](https://github.com/ipenywis/laya-ultrafast) | 264 | 45 | Same as jev-ultrafast but using Laya | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +5](#legend "최근 7일 동안 별이 5개 늘었습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-22 |
| [mmastrac/djev-spark](https://github.com/mmastrac/djev-spark) | 219 | 17 | DiffusionGemma NVFP4 structured decisions on a DGX Spark: container recipe | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-24 |
| [Liyucheng1997/332_lab-jev-chat](https://github.com/Liyucheng1997/332_lab-jev-chat) | 170 | 17 | Jev Chat Assistant for Windows - 电脑版微信意图判断与 DeepSeek 建议回复 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-21 |
| [dubinc/dub](https://github.com/dubinc/dub) | 24945 | 3341 | 단축 링크 관리, 전환 추적 및 제휴 프로그램을 구축하려는 마케팅 팀과 개발자를 위한 오픈소스 링크 어트리뷰션 플랫폼이다.<br>README에 판단 지점 설명 없음<br>Next.js, Prisma, Tinybird 기반의 오픈 코어 구조로, 핵심 코드는 AGPLv3 라이선스이며 엔터프라이즈 기능은 상용 라이선스로 구분된다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +40](#legend "최근 7일 동안 별이 40개 늘었습니다") | 2026-10-25 |
| [guidance-ai/guidance](https://github.com/guidance-ai/guidance) | 21809 | 1219 | A guidance language for controlling large language models. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +6](#legend "최근 7일 동안 별이 6개 늘었습니다") | 2026-05-21 |
| [Rizzo-AI-Academy/rizzo-flow](https://github.com/Rizzo-AI-Academy/rizzo-flow) | 933 | 65 | The open, local take on Jev: typed decisions from an LLM, without generating a single token | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +24](#legend "최근 7일 동안 별이 24개 늘었습니다") | 2026-09-25 |
| [kyegomez/open-jev](https://github.com/kyegomez/open-jev) | 130 | 24 | an open-source, from-first-principles reconstruction of the ideas behind TypeSafe AI's Jev, written in pytorch | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +11](#legend "최근 7일 동안 별이 11개 늘었습니다") | 2026-09-21 |
| [mohsen1/llm-debugger-vscode-extension](https://github.com/mohsen1/llm-debugger-vscode-extension) | 361 | 24 | VSCode extension that demonstrates the use of large language models (LLMs) for active debugging of programs | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |

474개 모두 보기 → [categories/other.md](categories/other.md)

## 이 리포에 대해

- 매일 오전 6시(한국 시간)에 GitHub 검색, awesome 목록, 직접 넣어 둔 시드 목록에서 리포를 모읍니다. 검색으로만 걸린 리포는 설명·토픽·README에 TypeSafe Jev를 쓴다는 근거가 있어야 남깁니다. 이름만 같은 리포를 걸러 내기 위해서입니다.
- 한국어 요약은 README를 읽고 Gemini가 씁니다. 형식 검사를 통과한 요약만 싣습니다.
- 코드 확인은 GitHub 코드 검색으로 합니다. `api.typesafe.ai` · `systemone` · `@typesafe-ai/sdk` · `typesafe_sdk` 가운데 하나가 문서가 아닌 코드 파일에서 나오면 ✅를 붙입니다.
- 리포와 README의 저작권은 각 원저작자에게 있습니다. 요약은 소개하려고 옮긴 발췌입니다.
- 데이터 형식은 [radar-index/1](https://github.com/PineappleBingo/upgrade-scout/blob/main/skills/upgrade-scout/references/radar-format.md)입니다. upgrade-scout 플러그인이 이 데이터를 읽어 갑니다.
