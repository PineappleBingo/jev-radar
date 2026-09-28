# 🛰️ Jev Radar — TypeSafe Jev 오픈소스 구현 모음

> Jev(System One)를 쓰는 공개 리포를 매일 모아 한국어로 정리합니다. 기계용 데이터: [`data/index.json`](data/index.json) (`radar-index/1`)

**마지막 업데이트: 2026-09-28 10:07 KST** · 리포 4344 · 🆕 24시간 0 · 7일 0 · ✅ 코드 확인 52 · 📚 문서 변경 0 · 요약 대기 3963 · 코드 확인 대기 4278

범례: ⭐ 별 · 🍴 포크 · ✅ 코드에서 호출 확인 · 🆕 7일 안에 처음 발견 · 🔥 7일 별 증가 상위 · `choice` `score` `noul` 코드에서 본 질문 유형

분야: [🔀 라우팅·의도 분류 (644)](#cat-routing) · [🛡️ 가드레일·모더레이션 (198)](#cat-guardrail) · [🏆 랭킹·검색·추천 (209)](#cat-ranking) · [🤖 에이전트·도구 선택 (1190)](#cat-agent) · [🧰 SDK·인프라·통합 (423)](#cat-infra) · [📏 평가·채점 (284)](#cat-eval) · [🧪 견고성·감사 연구 (109)](#cat-robustness) · [💹 금융·트레이딩 (97)](#cat-finance) · [🎮 게임·인터랙티브 (74)](#cat-games) · [📝 콘텐츠·글쓰기 (100)](#cat-content) · [🗂️ 데이터 정제·라벨링 (36)](#cat-data) · [🎧 고객지원·CRM (38)](#cat-support) · [🧑‍💻 개발 도구·코드 리뷰 (69)](#cat-devtools) · [📚 목록·레퍼런스 (93)](#cat-catalog) · [🧩 기타 (780)](#cat-other)

## 🆕 새로 발견 (7일)

없음

## 🔥 급상승 (7일)

없음

## 📚 문서·모델 변경 (7일)

없음

## 분야별

<a id="cat-routing"></a>
### 🔀 라우팅·의도 분류 (644)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 26722 | 2336 | **무엇** 100개 이상의 언어로 텍스트를 분석해 단일 순방향 패스에서 선택, 점수, 참/거짓 판단을 도출하는 비자기회귀 의사결정 엔진<br>**판단** 담당 부서(choice), 긴급도 수준(score), 이탈 위험 여부(noul) 등 입력 텍스트에 대한 구조화된 질문을 판단시킴<br>**포인트** 비자기회귀 단일 패스로 처리하며 언어별 체크포인트 자동 라우팅 및 RLCD 학습을 거치고 최대 8,192 토큰 컨텍스트를 지원함 | ✅ | 2026-09-27 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 449 | 54 | **무엇** Claude Code와 OpenAI Codex CLI에서 사용자 프롬프트 난이도에 따라 모델을 턴 단위로 자동 라우팅해 주는 CLI 도구다.<br>**판단** 사용자 프롬프트의 복잡도, 추론 필요성, 도구 복잡도, 컨텍스트 크기 등을 평가해 빠른 티어(저비용)와 강력한 티어 중 적절한 모델 티어를 선택하도록 판단시킨다.<br>**포인트** 루프백 프록시 방식으로 원본 CLI의 로그인 세션과 권한을 그대로 유지하며, /jev-explain 커맨드로 판단 근거 지표와 신뢰도를 확인할 수 있다. | ✅ | 2026-09-19 |
| [yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router) | 51 | 2 | **무엇** Hono 프레임워크에서 메서드나 경로 대신 자연어 설명으로 들어오는 HTTP 요청을 분류해 처리하는 시맨틱 라우터다.<br>**판단** 요청의 메서드·URL·헤더·본문이 등록된 각 라우트 설명과 일치하는지 여부를 Noul(예/아니오) 확률로 병렬 판별시킨다.<br>**포인트** HTTP 요청마다 모델 호출 비용과 지연이 발생하며, 등록 순서대로 확률이 임계값을 넘는 첫 번째 라우트가 매칭된다. | ✅ `noul` | 2026-09-18 |
| [milvus-io/bootcamp](https://github.com/milvus-io/bootcamp) | 2446 | 683 | 요약 대기 · Dealing with all unstructured data, such as reverse image search, audio search, molecular search, video analysis, question and answer systems, NLP, etc. |  | 2026-09-24 |
| [agentconnect-md/agentconnect](https://github.com/agentconnect-md/agentconnect) | 1437 | 62 | 요약 대기 · The open-source, multi-agent alternative to Claude Tag.  @ any agent, wherever work happens, they work alongside your team, learning as they go. |  | 2026-09-28 |
| [feder-cr/jev](https://github.com/feder-cr/jev) | 1057 | 122 | 요약 대기 · jevos is an open-source alternative to Jev for yes/no decisions that runs on your laptop. |  | 2026-09-27 |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | 696 | 33 | 요약 대기 · Run open decision models locally: pull and serve Laya, decider, NLI and GLiClass behind a TypeSafe-compatible API. Ollama for decision models. |  | 2026-09-28 |
| [kentcdodds/kody](https://github.com/kentcdodds/kody) | 684 | 66 | 요약 대기 · 🐨 Your assistant's home — the memory, keys, code, and automations your AI agent keeps, portable across every MCP host. Built on Cloudflare Workers. |  | 2026-09-28 |
| [alisaitteke/photoshop-mcp](https://github.com/alisaitteke/photoshop-mcp) | 526 | 60 | **무엇** 자연어 프롬프트로 Adobe Photoshop 작업을 제어할 수 있도록 120여 개 도구를 제공하는 Model Context Protocol 서버 및 독립형 UI 도구<br>**판단** 사용자 프롬프트가 즉시 실행 가능한 16개 안전 단일 명령인지, 아니면 LLM 호출이나 Action Plan 생성이 필요한 복합 요청인지 라우팅 여부 판단<br>**포인트** 안전하고 명확한 명령에 대해 Jev 기반 사전 의도 라우팅을 거쳐 LLM 토큰 소모 없이 Photoshop에 직접 단일 명령을 전달하는 옵트인 방식을 지원함 |  | 2026-09-28 |
| [jerryjliu/docjev](https://github.com/jerryjliu/docjev) | 468 | 32 | 요약 대기 · A very fast document classifier/splitter using Jev  |  | 2026-09-26 |

전체 644개 → [categories/routing.md](categories/routing.md)

<a id="cat-guardrail"></a>
### 🛡️ 가드레일·모더레이션 (198)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 149 | 11 | **무엇** Pi 코딩 에이전트의 도구 호출과 출력 결과를 TypeSafe Jev API로 검사하고 제어하는 확장 도구다.<br>**판단** 명령의 파괴성·데이터 유출·범위 초과·피해 수준과 출력의 비밀정보 누출·실패 유형을 noul, score, choice로 판단한다.<br>**포인트** 도구 실행 전 게이트 판단을 한 번의 요청(약 300ms)으로 처리하며, 오류 발생 시 실행을 차단하지 않는 fail-open 방식으로 동작한다. | ✅ `choice` `noul` `score` | 2026-09-25 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | 85 | 7 | **무엇** 웹페이지 내 DOM 요소를 탐색해 TypeSafe Jev 모델의 판단에 따라 광고 요소를 실시간으로 제거하는 크롬 확장 프로그램이다.<br>**판단** 추출된 각 DOM 후보 요소의 태그, 클래스, 텍스트 요약 등을 바탕으로 유료 광고(paid advertisement)인지 여부를 noul 확률 질문으로 판단시킨다.<br>**포인트** 광고 후보 선별과 배치는 순수 코드로 처리하고 시맨틱 판별만 Jev에 일괄 요청하며, 설정된 임계 확률을 넘기면 애니메이션과 함께 요소를 제거한다. | ✅ `noul` | 2026-09-17 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 43 | 5 | **무엇** 다양한 코딩 에이전트의 도구 호출과 결과를 검사해 위험한 명령과 프롬프트 인젝션을 차단하는 보안 훅 라이브러리다.<br>**판단** 도구 호출의 위험도(risk), 사용자 요청 부합 여부(user_requested), 신뢰할 수 없는 출처 기반 여부(from_untrusted)를 질의해 판단한다.<br>**포인트** 외부 의존성 없이 Claude Code, Cursor 등 여러 에이전트에 thin 어댑터로 연결되며 도구 실행 전후 및 인스트럭션 파일을 검사한다. | ✅ | 2026-09-24 |
| [MillionSend/millionsend](https://github.com/MillionSend/millionsend) | 170 | 12 | **무엇** AWS SES를 기반으로 자체 호스팅하거나 클라우드로 사용할 수 있는 Resend 호환 오픈소스 이메일 발송 플랫폼이다.<br>**판단** 발송된 이메일 샘플에 대해 유해 콘텐츠 및 어뷰징 여부를 판단하도록 백그라운드에서 점수 채점(score)을 요청한다.<br>**포인트** 발송 지연을 막기 위해 SES 수락 후 백그라운드에서 비동기로 샘플을 채점하며, 셀프 호스트 환경에서는 기본 비활성화되어 있다. |  | 2026-09-26 |
| [qkal/Canny](https://github.com/qkal/Canny) | 99 | 11 | **무엇** Claude Code와 Codex CLI에서 코딩 에이전트가 검증 절차 없이 작업을 마쳤다고 주장하지 못하게 감시하는 훅 도구이다.<br>**판단** 에이전트 메시지가 작업 완료를 주장하는지, 변경된 diff가 특정 규칙을 위반했는지 여부를 예/아니오 확률로 판단시킨다.<br>**포인트** 런타임 의존성이 없고, 원장의 사실 기록만 작업을 차단할 수 있으며 Jev의 판단 결과는 차단 없이 에이전트의 컨텍스트 조언으로만 사용된다. |  | 2026-09-22 |
| [keltokhy/jgrep](https://github.com/keltokhy/jgrep) | 127 | 3 | 요약 대기 · grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line. |  | 2026-09-25 |
| [TiraelSedai/ClubDoorman](https://github.com/TiraelSedai/ClubDoorman) | 69 | 11 | **무엇** 텔레그램 대형 채팅방에서 캡차, 텍스트 필터, LLM을 결합해 스팸을 감지하고 차단하는 텔레그램 안티스팸 봇이다.<br>**판단** 기존 ML 점수가 모호한 구간(-0.5~0.5)의 메시지가 스팸(spam)인지 정상(ham)인지와 해당 분류의 확신도를 판단시킨다.<br>**포인트** Jev와 Luna 두 모델의 라벨 일치와 80% 이상 확신도를 모두 요구해 자동 데이터셋 추가 및 재학습 파이프라인의 오탐을 방지한다. |  | 2026-09-27 |
| [brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) | 48 | 6 | **무엇** Discord 서버 관리자가 스팸·피싱 링크를 차단하고 멤버 성향을 분석하기 위해 사용하는 Python 기반 모더레이션 봇이다.<br>**판단** 실시간 메시지의 스팸 및 피싱 링크 여부와 유저 최근 메시지의 사기 위험·스팸·초보성·유해성·도움 수준 점수를 판별한다.<br>**포인트** 오탐된 메시지를 사면하면 안전 선례로 저장해 추후 검사에 반영하는 동적 학습 및 SQLite 기반 캐싱을 지원한다. |  | 2026-09-22 |
| [Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) | 9 | 1 | **무엇** pi 코딩 에이전트의 부작용 도구 호출이 사용자의 자연어 제약 조건에 어긋나는지 실행 전 점검·차단하는 런타임 제약 가드레일이다.<br>**판단** 사용자 발화마다 기존 정책의 변경 상태(KEEP, LIFT, NARROW 등)와 작업 허가 신호 여부를 Jev에 분류시킨다.<br>**포인트** Jev는 좁은 범위의 유한 선택지 분류만 수행하며, 규칙 상태를 세션 단위 구조적 op로 영속화해 컴팩션 후 재질의 없이 복원한다. | ✅ `choice` `noul` | 2026-09-19 |
| [aurorainfra/grev](https://github.com/aurorainfra/grev) | 39 | 1 | 요약 대기 · Thinking coreutils |  | 2026-09-24 |

전체 198개 → [categories/guardrail.md](categories/guardrail.md)

<a id="cat-ranking"></a>
### 🏆 랭킹·검색·추천 (209)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 475 | 57 | **무엇** 자연어 질의를 바탕으로 검색 소스·기간을 결정하고 검색 결과의 관련도를 채점하여 순위를 매기는 웹 검색 애플리케이션이다.<br>**판단** 사용자 질의에 적합한 검색어·소스·기간 선택과 검색된 결과 항목별 관련도 점수 평가를 수행하도록 한다.<br>**포인트** 생성형 답변 없이 결과별 관련도 점수와 링크를 노출하며, Cloudflare Workers 기반으로 다중 엔진 병렬 검색과 결과 스트리밍을 처리한다. | ✅ `choice` `noul` `score` | 2026-09-20 |
| [zilliztech/deep-searcher](https://github.com/zilliztech/deep-searcher) | 8286 | 803 | 요약 대기 · Open Source Deep Research Alternative to Reason and Search on Private Data. Written in Python. |  | 2026-09-22 |
| [zilliztech/GPTCache](https://github.com/zilliztech/GPTCache) | 8204 | 595 | 요약 대기 · Semantic cache for LLMs. Fully integrated with LangChain and llama_index.  |  | 2026-09-22 |
| [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | 2668 | 260 | 요약 대기 · A persistent, unified memory layer for all your AI agents (e.g. Claude Code, Codex, DSH), backed by Markdown and Milvus. |  | 2026-09-24 |
| [dzhng/jevgrep](https://github.com/dzhng/jevgrep) | 774 | 48 | 요약 대기 · Find code by asking what it does. A CLI for coding agents that uses Jev to discover relevant files and source context. |  | 2026-09-28 |
| [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | 764 | 44 | 요약 대기 · Biologically-inspired memory for AI agents. Decay, retrieval strengthening, consolidation. Zero runtime deps, SQLite, MCP. Benchmarked retrieval with an opt-in hosted TypeSafe Jev reranker. |  | 2026-09-27 |
| [valentynkit/awesome-jev-typesafe](https://github.com/valentynkit/awesome-jev-typesafe) | 171 | 43 | 요약 대기 · Typed decisions with TypeSafe's Jev, the first System One model |  | 2026-09-27 |
| [uehaj/jev-semgrep](https://github.com/uehaj/jev-semgrep) | 145 | 9 | **무엇** 텍스트의 각 줄이 특정 의미에 부합하는지 언어의 제약 없이 검색할 수 있게 해 주는 grep 도구이다.<br>**판단** 입력된 각 텍스트 줄이 주어진 의미 조건에 얼마나 부합하는지 Jev를 통해 score로 점수화하여 판단한다.<br>**포인트** 일본어와 영어를 교차 검색할 수 있으며, AND/OR/NOT 논리 연산자를 사용해 여러 의미 조건을 조합할 수 있다. |  | 2026-09-27 |
| [mrnugget/jev-shell-history](https://github.com/mrnugget/jev-shell-history) | 113 | 9 | **무엇** zsh 환경에서 사용자가 입력 중인 명령어에 적합한 완성을 최근 히스토리에서 찾아 fish 스타일로 보여주는 자동완성 플러그인이다.<br>**판단** 현재 입력 내용을 완성할 가능성이 가장 높은 히스토리 후보(Choice)와 어떤 후보라도 입력을 완성하는지 여부(Noul)를 질의한다.<br>**포인트** zle 백그라운드 비동기 처리로 프롬프트를 차단하지 않으며 접두사 모드 및 퍼지 모드 게이팅을 적용해 호출 지연 시간은 약 0.7~0.9초다. |  | 2026-09-18 |
| [getanyapi-com/lurk](https://github.com/getanyapi-com/lurk) | 101 | 21 | **무엇** 제품 URL을 기반으로 잠재 고객의 의도를 분석해 레딧에서 관련 구매 의향 글과 댓글을 발굴하고 점수를 매기는 셀프 호스팅 도구다.<br>**판단** 스캔한 제목, 본문, 댓글이 제품에 적합한지, 구매 의도가 있는지, 판매자인지 여부를 평가하고 점수(0-100)와 의도 단계를 판별하게 한다.<br>**포인트** 댓글 작성이나 자동 응답을 지원하지 않으며, OpenRouter나 Vercel AI Gateway를 통해 TypeSafe Jev 모델을 평가 판단용으로 활용한다. |  | 2026-09-27 |

전체 209개 → [categories/ranking.md](categories/ranking.md)

<a id="cat-agent"></a>
### 🤖 에이전트·도구 선택 (1190)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 249506 | 53064 | **무엇** Nous Research가 개발한 자가 학습 루프 및 멀티 플랫폼 연동 기능을 갖춘 오픈소스 AI 에이전트 프레임워크<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 경험 기반 자율 스킬 생성, FTS5 세션 검색, Honcho 사용자 모델링, 다양한 샌드박스 백엔드 및 메신저 연동을 지원한다. | ✅ | 2026-09-28 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187593 | 45981 | **무엇** 자연어 지시나 시각적 빌더를 통해 자동화된 AI 에이전트 워크플로를 제작하고 실행하는 오픈소스 플랫폼이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 자연어 대화형 생성 도구(AutoPilot)와 노드 기반 시각적 빌더(Build)를 제공하여 에이전트의 세부 실행 단계를 제어할 수 있다. | ✅ `choice` `noul` `score` | 2026-09-28 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 38805 | 3027 | **무엇** AI 에이전트의 지식, 메모리, 스킬을 가상 파일 시스템 형태로 일원화해 탐색·관리할 수 있게 돕는 컨텍스트 데이터베이스다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** viking:// 가상 파일 시스템 구조와 L0~L2 계층 요약을 통해 전체 본문 로드 전 관련성을 검토하고 세션을 마크다운 파일로 기록한다. | ✅ `noul` | 2026-09-27 |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | 30339 | 4830 | **무엇** AI 에이전트가 외부 앱과 연동할 수 있도록 인증, 세션 관리, 도구 검색을 제공하는 SDK 모노리포다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 모든 도구를 컨텍스트에 올리지 않고 런타임 메타 도구로 탐색·실행하며, 호스팅된 MCP 엔드포인트 생성을 지원한다. | ✅ `choice` `noul` | 2026-09-27 |
| [trycua/cua](https://github.com/trycua/cua) | 26661 | 1853 | **무엇** AI 에이전트가 멀티 OS 환경에서 데스크톱 GUI 및 앱을 조작하고 평가할 수 있도록 격리 인프라와 드라이버를 제공하는 프레임워크다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** macOS, Windows, Linux 환경을 지원하며 애플 실리콘용 로컬 VM(Lume)과 클라우드 샌드박스(Fleet), 백그라운드 UI 조작 기능을 제공한다. | ✅ | 2026-09-27 |
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 20817 | 1431 | **무엇** 동적 인덱싱된 요소 목록을 기반으로 웹 작업을 고속으로 수행하도록 돕는 브라우저 에이전트 라이브러리다.<br>**판단** 현재 관찰된 요소 테이블에서 수행할 동작(CLICK, TYPE_TEXT 등)과 대상 요소를 단일 요청으로 선택한다.<br>**포인트** 스크린샷 없이 구조화된 텍스트 상태만 전달하며, 동작과 대상 선택을 1회 네트워크 요청으로 묶어 처리 속도를 높였다. | ✅ `choice` | 2026-09-25 |
| [elie222/inbox-zero](https://github.com/elie222/inbox-zero) | 12357 | 1551 | **무엇** 이메일 정리, 답장 초안 작성, 콜드 메일 차단 등을 자동화하는 오픈소스 AI 개인 이메일 어시스턴트 애플리케이션이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Next.js와 Prisma 기반 풀스택 구조이며, 로컬 개발을 위해 Google 및 Microsoft 에뮬레이터 Docker 프로필을 지원한다. | ✅ `noul` | 2026-09-28 |
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 7024 | 436 | **무엇** Claude Code 및 npm 환경에서 대화 요약 대신 불필요한 도구 호출과 결과를 제거해 컨텍스트를 압축하는 도구다.<br>**판단** 각 도구 호출에 대해 호출 기록 자체를 유지할지와 실행 결과를 그대로 유지할지를 noul(예/아니오 확률)로 묻는다.<br>**포인트** 텍스트 요약 없이 원본 텍스트를 유지하며 Jev 판정에 따라 도구 호출과 결과를 유지·잘라내기·삭제하는 방식으로 동작한다. | ✅ `noul` | 2026-09-18 |
| [vercel-labs/fx](https://github.com/vercel-labs/fx) | 3174 | 359 | **무엇** 개발자가 터미널 환경이나 시스템 임베딩용으로 사용하는 Zig 기반의 네이티브 코딩 에이전트 CLI<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Zig로 작성되어 가벼운 네이티브 바이너리로 실행되며 WebAssembly 빌드 및 libfx SDK로 다른 호스트에 임베딩할 수 있다. | ✅ `choice` | 2026-09-28 |
| [thruwire/foreman](https://github.com/thruwire/foreman) | 592 | 47 | **무엇** Codex나 OpenCode 같은 코딩 에이전트의 개발 작업을 실시간 감독하고 개입하는 Python 비동기 런타임 수퍼바이저다.<br>**판단** 작업 구현 완료 여부, 요구사항 충족도, 테스트 충분성, 작업 진행의 정체(stuck) 및 이탈(off-track) 여부 등을 확률로 판단한다.<br>**포인트** 에이전트 루프와 별개로 백그라운드에서 Jev 기반 판단을 수행하며, App Server 프로토콜로 실행 중인 턴에 실시간 steer나 interrupt를 보낸다. | ✅ | 2026-09-27 |

전체 1190개 → [categories/agent.md](categories/agent.md)

<a id="cat-infra"></a>
### 🧰 SDK·인프라·통합 (423)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 42914 | 9164 | **무엇** Claude, OpenAI, Gemini 등 AI 구독 할당량을 통합 관리하고 공유할 수 있게 중계하는 API 게이트웨이 서비스다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Go 백엔드, Vue 프론트엔드, Redis, PostgreSQL 스택을 활용하여 계정 공유 및 비용 분담 중계 플랫폼을 구현했다. | ✅ | 2026-09-28 |
| [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) | 27913 | 2405 | **무엇** LLM과 도구·데이터를 연결하는 Model Context Protocol(MCP) 서버와 클라이언트를 파이썬으로 손쉽게 개발하도록 돕는 프레임워크다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 데코레이터 기반으로 파이썬 함수를 감싸 스키마 생성, 입력 검증, 프로토콜 수명주기 관리를 자동화하여 MCP 구축을 단순화했다. | ✅ `choice` `noul` | 2026-09-27 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 11542 | 1075 | **무엇** 멀티모달 AI 애플리케이션을 위해 벡터 유사도 검색과 SQL 쿼리를 제공하는 오픈소스 임베디드 검색 데이터베이스 라이브러리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Lance 컬럼형 포맷을 기반으로 구축되어 대규모 벡터 및 멀티모달 데이터의 무복사(Zero-copy) 처리와 자동 버전 관리를 지원한다. | ✅ `noul` | 2026-09-27 |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 7419 | 450 | **무엇** Qwen 기반으로 직접 학습하고 자체 호스팅할 수 있도록 TypeSafe Jev 호환 API를 제공하는 경량 의사결정 모델 제품군<br>**판단** 주어진 텍스트에 대해 choice(다중 선택), noul(예/아니오), score(평가 등급) 형태의 질문들을 한 번의 요청으로 동시에 판단<br>**포인트** TypeSafe Python SDK와 호환되는 드롭인 대체재이며 0.8B부터 27B까지 제공되어 로컬 머신부터 GPU 서버까지 배포 가능 | ✅ `choice` `noul` `score` | 2026-09-28 |
| [jkudish/jev-mcp](https://github.com/jkudish/jev-mcp) | 421 | 51 | **무엇** TypeSafe Jev 모델의 판단 기능을 에이전트가 호출할 수 있도록 11종의 도구로 감싼 MCP 서버 구현체다.<br>**판단** 주장 진위 검증, 프롬프트 주입 스크리닝, 명제 발생 확률, 후보 재순위화, 코드 diff 품질 점수화 등을 묻는다.<br>**포인트** stdio 및 무상태 HTTP 전송을 지원하며, 약 150~500ms 이내에 확률과 신뢰도 점수를 담은 정형 출력을 반환한다. | ✅ `score` | 2026-09-27 |
| [AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev) | 65 | 5 | **무엇** Home Assistant 사용자가 집안 상태를 TypeSafe Jev 모델에 질의하고 그 결과를 센서나 자동화 액션으로 연동하게 해주는 통합 구성요소다.<br>**판단** 세탁기 방치 여부나 난방 중 창문 개방 여부 등 집안 상황을 확률(noul), 선택지(choice), 점수(score)로 판단시킨다.<br>**포인트** Jev의 세 가지 응답 형식을 Home Assistant 엔티티, 자동화 액션, Assist 대화 에이전트로 직접 매핑하며 일일 토큰 비용 추적 기능을 지원한다. | ✅ | 2026-09-27 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 59733 | 11828 | 요약 대기 · The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging \[Bedrock, Azure, OpenAI, Anthropic, OpenAI, VertexAI, vLLM, Nvidia NIM\] |  | 2026-09-28 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 33488 | 3578 | 요약 대기 · ⌥ Coding agent with the IDE wired in. Built by Stencil Labs. |  | 2026-09-28 |
| [vercel/ai](https://github.com/vercel/ai) | 26994 | 5205 | 요약 대기 · The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents  |  | 2026-09-28 |
| [pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai) | 20215 | 2797 | 요약 대기 · How Python does AI. Agents, realtime voice, image generation, embeddings. Every model, every interface, typed end to end. |  | 2026-09-28 |

전체 423개 → [categories/infra.md](categories/infra.md)

<a id="cat-eval"></a>
### 📏 평가·채점 (284)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [comet-ml/opik](https://github.com/comet-ml/opik) | 22261 | 1829 | **무엇** LLM 앱 및 AI 에이전트의 실행 트레이싱, 성능 평가, 모니터링을 제공하는 오픈소스 옵저버빌리티 플랫폼이다.<br>**판단** LLM 생성 결과에 대해 환각 여부(noul), 유해성 분류(choice), RAG 응답 품질 점수(score) 등을 판별하도록 요청한다.<br>**포인트** LLM-as-a-judge 평가 메트릭, 트레이스 트리 추적, PyTest 기반 CI/CD 연동 및 자체 호스팅 환경을 지원한다. | ✅ `choice` `noul` `score` | 2026-09-28 |
| [Kiln-AI/Kiln](https://github.com/Kiln-AI/Kiln) | 5117 | 379 | **무엇** 평가, 프롬프트 최적화, RAG, 에이전트 구축 및 파인튜닝을 지원하는 AI 개발 워크벤치 데스크톱 앱 겸 Python 라이브러리다.<br>**판단** 생성된 출력물이 선호 기준이나 평가 지표에 부합하는지 여부(noul)와 모델 응답 품질 등급(score)을 판정한다.<br>**포인트** 노코드 데스크톱 앱과 오픈소스 Python 라이브러리를 연계해 비개발자와 협업하고, Git 동기화 및 로컬 Ollama 실행을 지원한다. |  | 2026-09-27 |
| [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 1869 | 147 | 요약 대기 · Local typed decisions, contrastive data curation, and model evaluation. |  | 2026-09-24 |
| [SREGym/SREGym](https://github.com/SREGym/SREGym) | 305 | 115 | 요약 대기 · Can AI agents resolve production incidents? |  | 2026-09-26 |
| [monteduro/killmyidea](https://github.com/monteduro/killmyidea) | 233 | 30 | **무엇** 스타트업 아이디어를 입력하면 질문 10개에 대한 평가 점수를 종합해 진행 여부(KILL, FIX, SHIP)를 판정해 주는 웹 서비스<br>**판단** 아이디어의 카테고리, 이해도(understandability), 그리고 문제 정의·수익성·도달력 등 8개 항목에 대한 0-4점 척도 평가<br>**포인트** 생성형 LLM 텍스트 생성 대신 10개 평가 질문을 병렬로 점수화하고 가중 평균 및 명확성 게이트를 거쳐 3단계 판정을 도출하는 구조 |  | 2026-09-24 |
| [sileod/tasksource](https://github.com/sileod/tasksource) | 198 | 11 | 요약 대기 · Datasets collection and preprocessings framework for NLP extreme multitask learning |  | 2026-09-27 |
| [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | 148 | 15 | **무엇** Jev 계열 타입 기반 의사결정 모델의 성능과 신뢰성을 평가하기 위한 벤치마크 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 신뢰도 캐스케이드, 위원회, best-of-n 조합 실험을 수행하고 리더보드 순위 변동 여부를 분석했다. |  | 2026-09-27 |
| [vinilana/jev-eval-agent](https://github.com/vinilana/jev-eval-agent) | 106 | 11 | **무엇** 100개의 가상 도구를 갖춘 비서 에이전트 환경에서 도구 선택을 LLM이 직접 할 때와 Jev 분류기가 할 때의 작업 완료 단계 수를 비교·평가하는 벤치마크 리포지토리다.<br>**판단** 대화 상태를 바탕으로 다음 호출할 도구(100개 도구 및 사용자 응답 중 choice)와 요청된 모든 작업 완료 여부(noul)를 판단한다.<br>**포인트** Jev가 응답 완료를 골라도 done 확률이 임계값(0.5) 미만이면 응답을 차단하고 차선의 도구를 노출하는 신뢰도 기반 게이팅 방식을 적용했다. |  | 2026-09-17 |
| [get-convex/convex-evals](https://github.com/get-convex/convex-evals) | 129 | 10 | 요약 대기 · 설명 없음 |  | 2026-09-27 |
| [cookiespiggy/agentic-rl](https://github.com/cookiespiggy/agentic-rl) | 113 | 13 | 요약 대기 · Agentic RL 中文零基础教程（33 章）：从概念到 GRPO 实战，含 TRL 最小可跑示例；26–33 章附一套可运行的三方判别模型实证工程（encoder vs LLM-LoRA vs 规则基线）。第 25 章讲清 Jev / TypeSafe System One 与 RL 的能力边界 \| Chinese Agentic RL tutorial (33 chapters) + a reproducible discriminative-model benchmark |  | 2026-09-27 |

전체 284개 → [categories/eval.md](categories/eval.md)

<a id="cat-robustness"></a>
### 🧪 견고성·감사 연구 (109)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [nokia-applied-research/AnyJev](https://github.com/nokia-applied-research/AnyJev) | 835 | 110 | 요약 대기 · Turn any LLM into a Jev-style decision model: typed decisions, real probabilities, no training. (continue updating, welcome any issue and PR request) |  | 2026-09-26 |
| [wfzyx/von](https://github.com/wfzyx/von) | 729 | 54 | 요약 대기 · The open-source System One decision model. Sub-15ms, non-autoregressive, local drop-in alternative to TypeSafe Jev. |  | 2026-09-26 |
| [chainreactors/fingers](https://github.com/chainreactors/fingers) | 271 | 40 | **무엇** 보안 스캐너 등에서 대상 웹 기술 및 프레임워크를 식별하기 위해 여러 지문 라이브러리를 통합 분석하는 Go 엔진이다.<br>**판단** 규칙 엔진이 매칭한 제품명과 버전 결과가 실제 웹 응답 증거에 의해 성립하는지(holds, refuted, insufficient) 판단한다.<br>**포인트** Jev를 심사기(Judge)로 활용해 규칙 기반 결과의 오탐과 중복을 줄이고 버전을 보완하며, 실패 시 순수 규칙 결과로 폴백한다. |  | 2026-09-27 |
| [kshetrajna12/reflex](https://github.com/kshetrajna12/reflex) | 153 | 17 | 요약 대기 · A small open decision model: state + typed questions -&gt; calibrated probabilities. A Jev / System One re-creation on Qwen3.5. |  | 2026-09-27 |
| [allebee/jevk5](https://github.com/allebee/jevk5) | 119 | 8 | 요약 대기 · JevK5: open-weight alternative to TypeSafe Jev. Typed decisions with probabilities in one forward pass; Apache-2.0 weights and code. |  | 2026-09-25 |
| [iapp-technology/openthai-systemone](https://github.com/iapp-technology/openthai-systemone) | 63 | 22 | 요약 대기 · OpenThai-SystemOne: open Thai + English System One decision model (0.8B, 256-way slot head, Apache-2.0) |  | 2026-09-21 |
| [mithalouni/system-one-open](https://github.com/mithalouni/system-one-open) | 37 | 5 | 요약 대기 · Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal) |  | 2026-09-17 |
| [MoLeMo-Lab/mojev](https://github.com/MoLeMo-Lab/mojev) | 30 | 3 | 요약 대기 · MoJev: typed, calibrated decisions in one forward pass. |  | 2026-09-23 |
| [ankit-aglawe/tinyjev](https://github.com/ankit-aglawe/tinyjev) | 25 | 4 | 요약 대기 · A tiny jev-like model that answers Choice, Score and Noul questions in one forward pass and returns calibrated probabilities. MLX or PyTorch, fully offline, System One compatible. |  | 2026-09-25 |
| [aliaihub/awesome-jev-usecases](https://github.com/aliaihub/awesome-jev-usecases) | 20 | 7 | 요약 대기 · Evidence-backed use cases, patterns, and guidance for building with Jev, TypeSafe AI's System One model. Every claim is labeled and sourced. |  | 2026-09-25 |

전체 109개 → [categories/robustness.md](categories/robustness.md)

<a id="cat-finance"></a>
### 💹 금융·트레이딩 (97)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12238 | 2506 | **무엇** 트레이더와 개발자를 위해 암호화폐, 주식, 외환의 리서치부터 백테스트와 실거래를 지원하는 자체 호스팅 AI 트레이딩 OS다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Python 전략 개발 및 백테스트뿐 아니라 에이전트 연동용 MCP, 자체 결제 및 정산 기능까지 결합한 올인원 스택을 제공한다. | ✅ | 2026-09-26 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 108916 | 20892 | 요약 대기 · TradingAgents: Multi-Agents LLM Financial Trading Framework |  | 2026-09-25 |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 63772 | 11188 | 요약 대기 · An AI Hedge Fund Team |  | 2026-09-26 |
| [dubinc/dub](https://github.com/dubinc/dub) | 24835 | 3308 | 요약 대기 · The modern link attribution platform. Loved by world-class marketing teams like Framer, Perplexity, Superhuman, Twilio, Buffer and more. |  | 2026-09-27 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 2602 | 491 | **무엇** Monad 블록체인 상의 Kuru MON-USDC 오더북을 감시하여 매 블록마다 Jev 모델의 예측에 맞춰 post-only 지정가 주문을 갱신하는 트레이딩 봇이다.<br>**판단** 지정된 블록 구간(기본 100블록, 약 30초) 동안의 가격 변동 방향에 대해 buy 또는 sell 중 하나를 선택하도록 판단시킨다.<br>**포인트** 약 300ms의 블록 주기에 맞추기 위해 RPC 호출을 2회로 최소화하고 기존 주문 취소와 신규 주문을 batchUpdate 단일 트랜잭션으로 처리한다. |  | 2026-09-17 |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 470 | 60 | **무엇** Jev API를 활용하여 261종의 IRS 세무 서식 페이지를 식별하고 분류하는 문서 분류 도구다.<br>**판단** 입력된 세무 문서 페이지가 261종의 IRS 서식 중 어떤 양식에 해당하는지 선택하도록 묻는다.<br>**포인트** 261개 서식에 걸쳐 100% 엄격한 정확도를 보이며 페이지당 약 0.001달러의 처리 비용을 제시한다. |  | 2026-09-20 |
| [EthanAlgoX/AIStock](https://github.com/EthanAlgoX/AIStock) | 339 | 88 | 요약 대기 · One person can become their own super-analyst. Try it online: https://myaistock.top |  | 2026-09-27 |
| [brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis) | 170 | 34 | 요약 대기 · 설명 없음 |  | 2026-09-22 |
| [aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade) | 159 | 28 | **무엇** Hyperliquid 오더북 데이터를 바탕으로 TypeSafe Jev를 호출해 암호화폐 5종의 매매 주문을 자동 집행하는 트레이딩 봇 및 대시보드다.<br>**판단** 오더북 데이터를 기반으로 틱마다 포지션 방향(long 또는 short)과 실행 액션(open, close, hold)을 선택하도록 질의한다.<br>**포인트** 코인별 독립 지갑 구조를 적용하고, 진입 시 ALO 메이커 주문과 청산 시 IOC 테이커 주문을 분기하며 Bun과 Next 대시보드를 SSE로 연결했다. |  | 2026-09-21 |
| [arimanyus/warrenduffer](https://github.com/arimanyus/warrenduffer) | 93 | 27 | 요약 대기 · AI-driven intraday trading bot for Indian stocks. Jev ranks the Nifty 50 every 15s; code sizes each trade and places the stop; orders go live through Zerodha Kite or Kotak Neo. Day replay, kill switch, daily loss halt, terminal dashboard. |  | 2026-09-23 |

전체 97개 → [categories/finance.md](categories/finance.md)

<a id="cat-games"></a>
### 🎮 게임·인터랙티브 (74)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2348 | 244 | **무엇** Qwen3-0.6B 백본 기반으로 토큰 디코딩 없이 병렬 판단 확률 분포를 출력하도록 구현된 오픈소스 Jev 복제 모델 및 훈련 파이프라인이다.<br>**판단** 게임 상태와 질문이 주어졌을 때 동적 선택지 중 최적 행동 확률(Choice), 명제 참/거짓 확률(Boolean), 정렬 등급 점수(Score)를 판단시킨다.<br>**포인트** 텍스트 토큰 생성 대신 상태·질문·후보군을 한 번의 포워드로 인코딩하고 전용 헤드로 확률 분포를 직접 출력해 4개 게임 제어에 적용했다. |  | 2026-09-21 |
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 408 | 47 | **무엇** 구조화된 에뮬레이터 RAM 상태 데이터를 바탕으로 Super Mario Bros. 게임 컨트롤러 입력을 직접 결정하는 Jev 기반 에이전트 실험 프로젝트다.<br>**판단** 게임 상태 JSON을 입력받아 컨트롤러 매크로 선택(Choice), 현재 전방 점프의 유용성 여부(Noul), 즉각적인 위험도 등급(Score)을 판단한다.<br>**포인트** 스크린샷 대신 에뮬레이터 RAM과 텔레메트리를 구조화된 JSON으로 파싱해 전달하며, 타이밍 계산은 코드가 수행하고 Jev가 직접 입력을 결정한다. |  | 2026-09-16 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 193 | 36 | **무엇** TypeSafe Jev 모델을 사용해 자율주행(오토파일럿) 행동을 시뮬레이션하는 Three.js 기반의 드라이빙 시뮬레이터 데모다.<br>**판단** 주변 교통, 도로 경계, 신호, 정지선 및 목표 경로 정보를 바탕으로 샘플링된 주행 경로 후보(조향 및 속도 조합)와 정지 여부 중 최적의 행동을 선택하도록 묻는다.<br>**포인트** 후보 경로 생성과 기하학적 제어 연산은 로컬 웹 워커에서 처리하고, 컴팩트한 상태 테이블만 서버를 통해 Jev API로 전달해 초당 1.5~4회 주행 경로를 선택한다. |  | 2026-09-17 |
| [wingedsheep/argentum-engine](https://github.com/wingedsheep/argentum-engine) | 68 | 32 | **무엇** Kotlin 기반으로 MTG(Magic: The Gathering) 규칙을 구현한 게임 엔진이자 온라인 멀티플레이 플랫폼이다.<br>**판단** 게임 내 AI 상대 모드(GAME_AI_MODE=jev)에서 게임 액션 및 플레이 선택지를 판단한다.<br>**포인트** 결정론적 룰 엔진, RL/MCTS 학습용 Gym 환경, 오라클 텍스트 파서 Assay와 함께 트리 탐색·LLM·Jev AI 컨트롤러를 제공한다. |  | 2026-09-27 |
| [virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev) | 102 | 11 | 요약 대기 · Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording |  | 2026-09-21 |
| [emrickgarrett/OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 40 | 9 | **무엇** Three.js와 Node.js 기반 브라우저 1v1 FPS 환경에서 TypeSafe System One 기반 AI 봇과 스나이퍼 대결을 펼치는 게임이다.<br>**판단** 서버가 약 9Hz 주기로 구조화된 게임 상태를 바탕으로 이동, 조준각(yaw, pitch), ADS, 발사, 점프 여부를 Choice와 Noul로 질의한다.<br>**포인트** API 장애 시 매치가 멈추지 않도록 동일한 액션 인터페이스를 공유하는 휴리스틱 로직을 폴백으로 구현했다. |  | 2026-09-18 |
| [Baba88611/detroit-ai-player](https://github.com/Baba88611/detroit-ai-player) | 60 | 4 | 요약 대기 · Let Your AI Play Detroit：Become Human |  | 2026-09-22 |
| [phyous/tsai-sc](https://github.com/phyous/tsai-sc) | 27 | 2 | **무엇** 구조화된 스타크래프트 셰어웨어 게임 상태를 관찰하고 TypeSafe Jev 모델의 판단으로 키보드와 마우스 입력을 제어하는 하네스 리포지토리다.<br>**판단** 정리된 아군 및 시야 상태를 바탕으로 유닛 생산, 자원 채취, 탐색, 업그레이드, 전투 등 어떤 명령을 실행할지 choice 형태로 선택하게 한다.<br>**포인트** 화면 캡처가 아닌 구조화된 게임 데이터를 사용하며, 상태 읽기와 추론 중 게임을 일시정지하고 경제와 군사 결정을 분리해 원본 미션 승리를 달성했다. |  | 2026-09-16 |
| [bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev) | 33 | 12 | 요약 대기 · A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state |  | 2026-09-21 |
| [milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon) | 6 | 1 | **무엇** RAM과 타일맵으로 추출한 게임 상태를 텍스트로 읽고 TypeSafe Jev의 판단을 거쳐 Game Boy 에뮬레이터(PyBoy)로 포켓몬스터 레드를 자동 플레이하는 자율 에이전트다.<br>**판단** 대화와 맵 정보로 구성된 텍스트 스냅샷을 기반으로 현재 턴의 상위 목표(Choice)와 각 버튼 입력/이동이 최적인지 여부(Noul 예/아니오)를 판단시킨다.<br>**포인트** 비전 모델이나 대화 기록 없이 텍스트 스냅샷과 자체 단기 메모리 주입으로 동작하며, Jev의 결정을 A* 경로 탐색과 결정론적 안전 규칙으로 보정해 실행한다. |  | 2026-09-18 |

전체 74개 → [categories/games.md](categories/games.md)

<a id="cat-content"></a>
### 📝 콘텐츠·글쓰기 (100)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [kitze/unclutter](https://github.com/kitze/unclutter) | 322 | 35 | **무엇** WXT 기반의 브라우저 확장 프로그램으로 웹페이지 내 불필요한 요소를 판별해 가려주는 도구다.<br>**판단** 웹페이지 내 요소들이 가려야 할 불필요한 요소(nonessential element)인지 여부를 분류하도록 요청한다.<br>**포인트** Vercel AI Gateway 또는 TypeSafe AI를 직접 활용하며, 템플릿별로 숨김 규칙을 로컬에 저장해 재적용한다. | ✅ `choice` | 2026-09-18 |
| [DanRWilloughby/snifftest](https://github.com/DanRWilloughby/snifftest) | 33 | 1 | **무엇** Markdown과 텍스트 문서를 검사해 AI 특유의 문체와 하우스 룰 위반을 잡아내는 산문 린터 도구다.<br>**판단** 단락을 단순 반복하는 결문, 과도한 유보 표현, 수사적 도입부 등 문맥 판단이 필요한 규칙의 해당 확률을 질문한다.<br>**포인트** 정규식 기반 로컬 규칙과 호스팅 판단 모델 규칙을 분리하며, 텍스트를 재작성하지 않고 문제 위치와 확률 플래그만 제공한다. | ✅ `noul` | 2026-09-18 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 46534 | 3029 | 요약 대기 · An open-source, privacy-first, self-hosted knowledge workspace where humans and AI agents work together 开源、隐私优先、自托管的知识工作空间，让人与智能体在此协作 |  | 2026-09-28 |
| [HarleyCoops/Math-To-Manim](https://github.com/HarleyCoops/Math-To-Manim) | 2669 | 290 | **무엇** 텍스트와 이미지를 기반으로 Manim 수학 및 물리 애니메이션과 학습 노트를 제작하는 멀티에이전트 파이프라인 도구다.<br>**판단** 각 단계의 산출물(학습 요약, 수학 검증, 씬 구성 등)이 기준을 만족하는지 score로 평가하고 통과 여부를 판단한다.<br>**포인트** Jev 평가는 기본적으로 권고(advisory) 수준으로 점수만 기록되지만, gated 옵션으로 엄격한 품질 게이트로 전환할 수 있다. |  | 2026-09-25 |
| [TypeLLM/TypeLLM](https://github.com/TypeLLM/TypeLLM) | 806 | 53 | 요약 대기 · TypeLLM: LLMs with type-safe generation |  | 2026-09-27 |
| [githubnext/localjev](https://github.com/githubnext/localjev) | 788 | 52 | 요약 대기 · 설명 없음 |  | 2026-09-18 |
| [ttlequals0/MinusPod](https://github.com/ttlequals0/MinusPod) | 457 | 43 | **무엇** 팟캐스트를 Whisper로 전사하고 LLM으로 광고 구간을 탐지 및 잘라내어 무광고 RSS 피드로 서빙하는 셀프 호스팅 서버다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Whisper 전사와 슬라이딩 윈도우 LLM 탐지 외에도 음향 분석 신호 및 사용자 수정 기반의 크로스 에피소드 패턴 학습을 지원한다. |  | 2026-09-28 |
| [socai-io/socai](https://github.com/socai-io/socai) | 221 | 25 | 요약 대기 · A Browser Use Agent that actually reads social media. Fast. Precise. Deep. |  | 2026-09-27 |
| [shengjidaguai-china/goutoujunshi-jev-chat](https://github.com/shengjidaguai-china/goutoujunshi-jev-chat) | 106 | 8 | **무엇** 위챗 등 메신저 대화 화면을 인식해 상대의 의도를 분석하고 답장 초안과 후보 순위를 띄워주는 데스크톱·모바일 플로팅 윈도우 보조 도구다.<br>**판단** 답장 생성 모델을 호출하기 전 단계에서 대화 맥락에 따라 어떤 대응 전략을 취할지 선택하도록 판단시킨다.<br>**포인트** OCR 인식 후 사용자가 수동 확인하며, 후보별 근거와 대가 제시, 관계 추이를 보여주는 관계 K선 차트 등 통제권과 시각화에 중점을 두었다. |  | 2026-09-26 |
| [ChetasLua/jevmeter](https://github.com/ChetasLua/jevmeter) | 100 | 12 | **무엇** 동영상 속 모든 문장을 음성 인식 후 분석하여 실시간 지표 오버레이가 들어간 16:9 편집본 영상을 생성하는 CLI 도구<br>**판단** 각 문장에 대해 회피 여부, 감정적 호소, 근거 없는 주장, 과장 등 프리셋별 5가지 예/아니오 항목의 확률(noul)을 판단<br>**포인트** Whisper 음성 인식 및 ffmpeg 렌더링을 Jev의 예/아니오 확률 추론과 결합해 영상 하이라이트와 스코어보드를 자동 생성함 |  | 2026-09-17 |

전체 100개 → [categories/content.md](categories/content.md)

<a id="cat-data"></a>
### 🗂️ 데이터 정제·라벨링 (36)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate) | 87 | 11 | **무엇** 합성 데이터 및 사전학습용 Parquet·JSONL 대규모 데이터셋을 TypeSafe Jev API로 고속 정제·필터링하는 Rust/Python 도구다.<br>**판단** 각 행 데이터에 대해 수학적 추론 결함, 코드 정확성, 아첨(sycophancy) 여부 등을 프리셋 루브릭 기반의 Choice, Score, Noul로 평가한다.<br>**포인트** Rust 스트리밍 코어로 단일 HTTP 요청 내 다중 질문을 병렬 처리하며, CLI 및 PyO3 기반 Python 바인딩을 함께 제공한다. | ✅ | 2026-09-25 |
| [amponce/archive-movie-browser](https://github.com/amponce/archive-movie-browser) | 144 | 32 | **무엇** Internet Archive에 등록된 퍼블릭 도메인 영화를 TMDB 메타데이터와 연동해 탐색하고 가상 채널로 시청하는 웹 플레이어다.<br>**판단** Archive.org의 특정 업로드 영상이 실제 TMDB의 어떤 영화에 해당하는지 여부를 식별한다.<br>**포인트** Jev로 오프라인 식별한 인덱스를 활용하며, 동기화된 가상 TV 채널, M3U 및 XMLTV 피드, MCP 서버 인터페이스를 지원한다. |  | 2026-09-27 |
| [nomanjack/smart-paste](https://github.com/nomanjack/smart-paste) | 41 | 6 | 요약 대기 · A little less copy-paste |  | 2026-09-19 |
| [nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook) | 29 | 1 | 요약 대기 · Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent. |  | 2026-09-26 |
| [chenmingtang830/jevgraph](https://github.com/chenmingtang830/jevgraph) | 27 | 5 | 요약 대기 · Evidence-backed knowledge graph construction with typed Jev relation decisions |  | 2026-09-20 |
| [equationalapplications/curated-thoughts](https://github.com/equationalapplications/curated-thoughts) | 15 | 3 | **무엇** 로컬 문서를 감시·색인해 위키 형태의 지식 베이스를 구축하는 Tauri 기반 로컬 우선 데스크톱 세컨드 브레인 앱<br>**판단** 축적된 비정형 팩트 데이터를 더 빠르고 저렴하게 분류하기 위해 사실 유형(fact-typing)을 판별하도록 요청함<br>**포인트** 작업·에피소드·의미 기억의 3단계 구조와 사람 검토 큐를 결합했으며, Jev 엔드포인트를 전용 팩트 분류기로 옵션 지원함 |  | 2026-09-27 |
| [goodrahstar/jev-column-race](https://github.com/goodrahstar/jev-column-race) | 24 | 3 | 요약 대기 · Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper |  | 2026-09-17 |
| [npipeline/NPipeline](https://github.com/npipeline/NPipeline) | 5 | 1 | 요약 대기 · High-performance, streaming data pipelines for .NET |  | 2026-09-27 |
| [1jehuang/jev-pr-labeler](https://github.com/1jehuang/jev-pr-labeler) | 4 | 2 | 요약 대기 · Semantic GitHub PR labels using Jev's typed decisions, with conceptual scope instead of line counts |  | 2026-09-19 |
| [FogMoe/necro](https://github.com/FogMoe/necro) | 4 | 0 | 요약 대기 · Abandoned Qwen3.5-0.8B LoRA fine-tuning experiments for Jev-like typed judgments, with datasets, adapters, evaluations, and a full retrospective. |  | 2026-09-21 |

전체 36개 → [categories/data.md](categories/data.md)

<a id="cat-support"></a>
### 🎧 고객지원·CRM (38)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [merefield/discourse-chatbot](https://github.com/merefield/discourse-chatbot) | 84 | 20 | 요약 대기 · An AI bot with RAG capability for Topics, Chat &amp; Customer Support in Discourse, currently powered by OpenAI |  | 2026-09-25 |
| [Abhinavexists/lev](https://github.com/Abhinavexists/lev) | 28 | 0 | 요약 대기 · An open System One decision model |  | 2026-09-25 |
| [sqliteai/blink](https://github.com/sqliteai/blink) | 20 | 0 | 요약 대기 · An open-source, high-performance System One Model for one-pass typed decisions, with an embeddable C runtime and WebAssembly support. |  | 2026-09-23 |
| [mattt/AnyDecisionModel](https://github.com/mattt/AnyDecisionModel) | 11 | 2 | 요약 대기 · A Swift package for typed decisions from language models (probabilities, choices, and scores), with support for local MLX models and the TypeSafe Jev API. |  | 2026-09-27 |
| [InterfazeAI/lev](https://github.com/InterfazeAI/lev) | 10 | 0 | 요약 대기 · An open System One decision model |  | 2026-09-25 |
| [jeffonelson/jev-bigquery-cloudrun](https://github.com/jeffonelson/jev-bigquery-cloudrun) | 9 | 0 | 요약 대기 · Classify support tickets in BigQuery with Jev and Cloud Run |  | 2026-09-21 |
| [scienthoon/jev-ood-calibration](https://github.com/scienthoon/jev-ood-calibration) | 7 | 0 | 요약 대기 · Independent calibration test of TypeSafe's Jev on a task it cannot have seen: 900 rule-generated support tickets (choice / score / boolean) plus 3 public benchmarks via Vercel AI Gateway. Raw responses, ECE with noise floor, temperature refit, per-type sign of miscalibration. Reproducible for ~$0.06. |  | 2026-09-22 |
| [tamnd/kime](https://github.com/tamnd/kime) | 5 | 0 | 요약 대기 · Typed decisions over text in milliseconds. A Rust inference engine and server that answers choice, score and yes or no questions with calibrated probabilities, compatible with Jev and Laya. The bar is 10x faster on every benchmark at equal or better accuracy. |  | 2026-09-26 |
| [ChunkyPanda29/ComfyUI-Pollinations-BYOP](https://github.com/ChunkyPanda29/ComfyUI-Pollinations-BYOP) | 4 | 2 | 요약 대기 · The latest ComfyUI custom node for Pollinations.ai with BYOP (Bring Your Own Pollen) support for free and paid image, video and text generation. |  | 2026-09-27 |
| [GhrezaKh74/JevTicktRouter](https://github.com/GhrezaKh74/JevTicktRouter) | 3 | 0 | 요약 대기 · A .NET 10 and React 19 application for fast, structured AI-powered ticket triage using TypeSafe Jev. |  | 2026-09-22 |

전체 38개 → [categories/support.md](categories/support.md)

<a id="cat-devtools"></a>
### 🧑‍💻 개발 도구·코드 리뷰 (69)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 626 | 41 | **무엇** Git diff나 전체 코드베이스를 단계별로 검토하고 결과를 로컬 대시보드에 시각화하는 코드 리뷰 워크플로 도구다.<br>**판단** 위험 매트릭스(Noul), 파일 프로파일(Choice/Score), 증거 선택 및 메커니즘 분류(Choice), 심각도(Score), 리뷰어 라우팅(Choice)을 판단시킨다.<br>**포인트** 오케스트레이션과 임계값 정책은 코드로 관리하며, Jev를 단계별 모델 판단에만 제한적으로 사용하고 단방향 계층 아키텍처를 강제한다. | ✅ | 2026-09-17 |
| [AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo) | 80 | 8 | **무엇** 개발자와 코딩 에이전트가 웹사이트의 SEO 및 GEO 준비 상태를 검사하고 크롤링할 수 있도록 돕는 Rust 기반 오픈소스 CLI이자 MCP 도구다.<br>**판단** README 본문에서 Jev의 Choice, Score, Noul 기본형으로 웹페이지를 평가하고 신뢰도를 제어한다고 언급하나 구체적인 질문 내용은 설명되어 있지 않다.<br>**포인트** 58가지 규칙 기반 감사, GEO 인용 점수 측정 등을 단일 바이너리로 제공하며, 15개 도구를 갖춘 MCP 서버 형태로 에이전트와 연동할 수 있다. | ✅ `choice` `noul` `score` | 2026-09-26 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20170 | 2341 | **무엇** 개발자가 터미널 환경에서 여러 코딩 에이전트 세션을 실행할 수 있도록 RAM 효율성과 성능을 극대화한 러스트 기반 코딩 에이전트 하네스 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 로컬 임베딩 비활성화 시 단일 세션 27.8MB 수준의 낮은 메모리 점유율을 제공하며, TUI 내 세션 유지 업데이트 등 다중 세션 확장성에 집중했다. |  | 2026-09-27 |
| [Effect-TS/effect](https://github.com/Effect-TS/effect) | 16240 | 775 | **무엇** TypeScript 개발자가 타입 안전한 에러 처리, 의존성 주입, 구조적 동시성 등을 구현하는 데 사용하는 표준 라이브러리 모노레포다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 코어 로직뿐만 아니라 런타임 플랫폼 추상화, 각종 SQL 클라이언트, AI 제공자 연동 모듈을 모노레포 패키지로 함께 제공한다. |  | 2026-09-27 |
| [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) | 8657 | 925 | **무엇** 원격 리포지토리 푸시 전에 일회용 워크트리에서 AI 검증 파이프라인을 실행해 주는 로컬 Git 프록시 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 푸시 시점에 별도 워크트리에서 리뷰, 테스트, 린트를 수행하고 안전한 수정은 자동 적용하며 통과 시에만 PR을 연다. |  | 2026-09-27 |
| [samchon/typia](https://github.com/samchon/typia) | 5922 | 227 | **무엇** TypeScript 타입을 컴파일 타임에 분석해 런타임 유효성 검증기, JSON 직렬화 코드, LLM 함수 호출 하네스를 생성하는 변환 라이브러리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 별도 스키마 정의나 런타임 리플렉션 없이 순수 TypeScript 타입을 빌드 단계(ttsc)에서 전용 검증 코드로 직접 컴파일한다. |  | 2026-09-27 |
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 2287 | 132 | **무엇** TypeSafe API 연동 코드를 생성할 수 있도록 Claude Code 등의 AI 에이전트에 추가하는 개발용 스킬 모음이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Claude Code 플러그인과 skills.sh 배포 방식을 지원하여 에이전트가 TypeSafe 워크플로를 설계하고 문서를 참조할 수 있게 한다. |  | 2026-09-12 |
| [SynaLinks/synalinks-skills](https://github.com/SynaLinks/synalinks-skills) | 907 | 84 | **무엇** 코딩 에이전트가 Keras 스타일의 Synalinks 프레임워크 코드를 올바르게 작성하도록 안내하는 Agent Skills 저장소다.<br>**판단** DecisionModel(TypeSafe jev)을 통해 필드 질의에 대한 판단을 내리고 신뢰도 임계값에 따른 기권 여부를 결정하도록 다룬다.<br>**포인트** Claude Code, Codex 등 다수의 코딩 에이전트가 공유하는 SKILL.md 표준 포맷을 따르며 실행 스크립트와 로그를 포함한다. |  | 2026-09-26 |
| [vercel-labs/ai-cli](https://github.com/vercel-labs/ai-cli) | 817 | 65 | **무엇** 터미널에서 텍스트·미디어 생성과 정형 평가(evaluate)를 수행할 수 있게 하는 Vercel AI SDK 기반 CLI 도구다.<br>**판단** 티켓 등 입력 데이터에 대해 환불 요청 여부(boolean), 담당 팀 분류(choice), 문제 영향도나 어조(score) 등을 질문해 판단시킨다.<br>**포인트** stdin 파이프 입력을 지원하며 Jev 모델을 기본 평가 모델로 사용해 boolean, choice, score 플래그 및 JSON 스키마로 질문을 일괄 채점한다. |  | 2026-09-23 |
| [coldteadotai/abide](https://github.com/coldteadotai/abide) | 368 | 33 | **무엇** 코딩 에이전트(Claude Code, Codex 등)가 코드 수정 시 AGENTS.md 등의 프로젝트 규칙을 위반했는지 검사하고 수정을 유도하는 도구<br>**판단** 각 프로젝트 규칙과 코드 diff를 보고, 해당 수정 사항이 규칙을 위반했는지 여부를 규칙별 확률(noul)로 판별<br>**포인트** 대화 기록 없이 diff와 규칙만 Jev로 전송해 빠른 레이턴시(약 300ms)와 저렴한 비용으로 검사하며 린터가 잡지 못하는 규칙을 감지 |  | 2026-09-27 |

전체 69개 → [categories/devtools.md](categories/devtools.md)

<a id="cat-catalog"></a>
### 📚 목록·레퍼런스 (93)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 139991 | 20567 | **무엇** 다양한 LLM 기반 에이전트, 스킬, RAG 앱 템플릿과 예제 코드를 모아둔 오픈소스 카탈로그다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Claude, Gemini, GPT 등 여러 LLM을 활용한 다양한 도메인의 단일 및 멀티 에이전트 템플릿을 실행 가능한 예제로 제공한다. |  | 2026-09-26 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | 31992 | 3643 | **무엇** Anthropic Claude Code의 AI 에이전트, 슬래시 커맨드, MCP 연동, 훅 설정을 검색하고 설치할 수 있는 CLI 도구이자 템플릿 모음이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** npx 명령어를 통해 웹 카탈로그(aitmpl.com)에 등록된 다양한 MCP, 커맨드, 훅 설정을 로컬 환경에 대화형 또는 플래그 기반으로 주입할 수 있다. |  | 2026-09-27 |
| [realpython/materials](https://github.com/realpython/materials) | 5208 | 5275 | **무엇** Real Python 튜토리얼 및 강의와 연계된 보너스 자료, 연습 문제, 예제 코드 프로젝트를 모아둔 저장소다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 튜토리얼용 샘플 코드를 아카이빙하며, 일관된 코드 스타일 유지를 위해 CI 단계에서 Ruff 포매터와 린터 검사를 적용한다. |  | 2026-09-26 |
| [daveebbelaar/ai-cookbook](https://github.com/daveebbelaar/ai-cookbook) | 4597 | 1597 | **무엇** AI 시스템 구축을 돕기 위해 복사해 붙여넣을 수 있는 코드 예제와 튜토리얼을 제공하는 개발자용 레퍼런스 리포지토리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 프로젝트에 바로 통합할 수 있는 실용적인 코드 조각과 튜토리얼 위주로 구성된 것이 특징이다. |  | 2026-09-21 |
| [12britz/awesome-free-models](https://github.com/12britz/awesome-free-models) | 2332 | 216 | **무엇** 비용 결제 없이 사용할 수 있는 오픈 가중치 AI 모델, 무료 API 계층, 로컬 추론 및 개발 도구를 큐레이션한 awesome 목록이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 링크 상태와 무료 정책 변경 사항(체험 기간, 유료 전환 여부)을 직접 검증하여 갱신 내역에 명시한다. |  | 2026-09-27 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 1838 | 272 | **무엇** TypeSafe AI의 의사결정 모델 Jev를 활용한 공개 프로젝트, 연동 사례, 실무 논의를 분야별로 정리한 큐레이션 목록이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 카테고리별 파일을 scripts/build-readme.py로 취합해 README를 생성하며, 추천이나 품질 보증 대신 엄격한 수록 기준과 직접 검증용 체크리스트를 제시한다. |  | 2026-09-27 |
| [mohitagw15856/pm-claude-skills](https://github.com/mohitagw15856/pm-claude-skills) | 1407 | 251 | **무엇** Claude, ChatGPT 등 AI 어시스턴트가 전문 업무를 수행하도록 돕는 마크다운 기반 스킬 프롬프트 1170개를 모아둔 라이브러리다.<br>**판단** 사용자 상황에 맞는 스킬 선택, 해당 요청의 안전성 여부, 배포(ship) 또는 연기(slip) 여부를 판단한다.<br>**포인트** 별도의 런타임 없이 마크다운 파일(SKILL.md) 형태로 제공되며 npm 및 Anthropic 플러그인 디렉터리를 통해 설치할 수 있다. |  | 2026-09-27 |
| [taishi-i/awesome-japanese-nlp-resources](https://github.com/taishi-i/awesome-japanese-nlp-resources) | 1014 | 53 | 요약 대기 · A curated list of resources for Japanese natural language processing (NLP): Python libraries, LLMs, dictionaries, corpora, and datasets. Includes Claude Code and Codex skills to search resources. |  | 2026-09-25 |
| [heyjunpenn/awesome-jev](https://github.com/heyjunpenn/awesome-jev) | 867 | 62 | **무엇** TypeSafe Jev를 활용해 구축된 오픈소스 프로젝트들을 분야별로 모아 정리한 커뮤니티 큐레이션 카탈로그 리포지토리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 916개 프로젝트를 11개 카테고리로 정리하고 단순 주장이 아닌 실제 구현된 판단 내용과 증거 링크를 함께 기록했다. |  | 2026-09-25 |
| [Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) | 863 | 182 | **무엇** TypeSafe Jev를 활용한 분류, 라우팅, 가드레일 등 다양한 활용 사례, 프롬프트, 패턴, 스타터 코드를 정리한 큐레이션 리포지토리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 단일 애플리케이션이 아니라 Jev를 활용하는 여러 패턴, 연계 프로젝트, 커뮤니티 디렉터리 및 관련 생태계 자료를 집약한 리스트다. |  | 2026-09-23 |

전체 93개 → [categories/catalog.md](categories/catalog.md)

<a id="cat-other"></a>
### 🧩 기타 (780)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87475 | 13336 | **무엇** 뉴스 수집, 지정학적 위험 모니터링, 인프라 추적 정보를 통합 지도 및 패널로 시각화하는 실시간 글로벌 인텔리전스 대시보드다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** globe.gl과 deck.gl 기반의 듀얼 지도 엔진을 지원하며, 단일 코드베이스에서 여러 변형 사이트와 Tauri 2 기반 데스크톱 앱을 제공한다. | ✅ `choice` `noul` | 2026-09-27 |
| [guidance-ai/guidance](https://github.com/guidance-ai/guidance) | 21779 | 1211 | 요약 대기 · A guidance language for controlling large language models. |  | 2026-05-21 |
| [mizorewww/laya-mlx](https://github.com/mizorewww/laya-mlx) | 6486 | 511 | 요약 대기 · Native MLX runtime for Laya typed decision models — 7–14 ms short decisions on M3 Max. No text generation, PyTorch, or cloud API. |  | 2026-09-22 |
| [Contrastive-LM/CLM](https://github.com/Contrastive-LM/CLM) | 1918 | 171 | 요약 대기 · 설명 없음 |  | 2026-09-24 |
| [deepopen-com/deepopen](https://github.com/deepopen-com/deepopen) | 1044 | 112 | 요약 대기 · 非自回归System 1决策引擎，专为结构化类型决策场景设计  DeepOpen Multilingual, non-autoregressive System 1 decision engine.  |  | 2026-09-25 |
| [anishfn/shapeshift](https://github.com/anishfn/shapeshift) | 709 | 79 | 요약 대기 · An input that becomes what you mean: one text box that morphs into the right UI as you type. Powered by TypeSafe Jev, works offline. |  | 2026-09-23 |
| [Rizzo-AI-Academy/rizzo-flow](https://github.com/Rizzo-AI-Academy/rizzo-flow) | 688 | 41 | 요약 대기 · The open, local take on Jev: typed decisions from an LLM, without generating a single token |  | 2026-09-25 |
| [uezo/aiavatarkit](https://github.com/uezo/aiavatarkit) | 681 | 67 | 요약 대기 · 🥰 Building AI-based conversational avatars lightning fast ⚡️💬 |  | 2026-09-27 |
| [milind-soni/tiptour-macos](https://github.com/milind-soni/tiptour-macos) | 666 | 104 | 요약 대기 · Open-Source fast local computer use |  | 2026-09-19 |
| [duanebester/gooey](https://github.com/duanebester/gooey) | 632 | 6 | 요약 대기 · Gooey is a hybrid immediate/retained mode UI framework designed for building fast, GPU-rendered applications on macOS/Metal, WebAssembly/WebGPU, and Wayland/Vulkan |  | 2026-09-27 |

전체 780개 → [categories/other.md](categories/other.md)

## 이 리포는

- 매일 06:00 KST에 GitHub 검색 · awesome 목록 · 시드 목록에서 모으고, 이름만 같은 리포는 TypeSafe 근거(설명 · 토픽 · README)가 없으면 뺍니다.
- 요약은 README를 바탕으로 Gemini가 쓰고 형식 검사를 통과한 것만 싣습니다. 요약이 없으면 "요약 대기"로 둡니다.
- ✅는 코드 검색으로 `api.typesafe.ai` · `systemone` · `@typesafe-ai/sdk` 호출을 본 리포입니다.
- 각 리포와 README의 저작권은 원저작자에게 있습니다. 요약은 소개 목적의 발췌입니다.
- 형식: [radar-index/1](https://github.com/PineappleBingo/upgrade-scout/blob/main/skills/upgrade-scout/references/radar-format.md) — upgrade-scout 플러그인이 이 데이터를 읽습니다.
