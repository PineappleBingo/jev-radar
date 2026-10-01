# 🛰️ Jev Radar — TypeSafe Jev 오픈소스 구현 모음

> Jev(System One)를 쓰는 공개 리포를 매일 모아 한국어로 소개합니다. 프로그램이 읽는 데이터는 [`data/index.json`](data/index.json)에 있습니다(`radar-index/1` 형식).

**마지막 업데이트: 2026-10-01 09:20 KST** · 리포 5,672개 · 🆕 24시간 439 · 7일 1299 · 📚 문서 변경 6

코드 확인: ✅ 85 · ❌ 22 · ⏳ 5,565 · 한국어 요약을 기다리는 리포 5,169개

<a id="legend"></a>
## 표 보는 법

태그에 마우스를 올려도 설명이 나옵니다.

- ✅ 코드에서 Jev를 실제로 부르는 것을 확인했습니다. 따라 해 볼 구현을 찾는다면 이 표시부터 보세요.
- ❌ 코드 검색으로는 Jev 호출을 찾지 못했습니다. 문서에서만 언급했을 수 있습니다.
- ⏳ 아직 코드를 확인하지 않았습니다. 하루에 확인할 수 있는 양이 적어 대부분이 여기에 해당합니다. ⏳ 표시가 붙었다고 Jev를 안 쓴다는 뜻은 아닙니다.
- 🆕 최근 7일 안에 처음 발견한 리포, 🔥 최근 7일 동안 별이 5개 이상 늘어난 리포입니다.
- `choice` `score` `noul`은 그 코드가 Jev에 묻는 질문의 종류입니다. 차례로 선택지 고르기, 등급 매기기, 예/아니오 확률입니다.
- 요약 칸이 영어면 아직 한국어 요약이 없어 GitHub 설명을 그대로 보여 주는 것입니다.

분야: [🔀 라우팅·의도 분류 (1110)](#cat-routing) · [🛡️ 가드레일·모더레이션 (226)](#cat-guardrail) · [🏆 랭킹·검색·추천 (281)](#cat-ranking) · [🤖 에이전트·도구 선택 (1528)](#cat-agent) · [🧰 SDK·인프라·통합 (768)](#cat-infra) · [📏 평가·채점 (395)](#cat-eval) · [🧪 견고성·감사 연구 (99)](#cat-robustness) · [💹 금융·트레이딩 (102)](#cat-finance) · [🎮 게임·인터랙티브 (91)](#cat-games) · [📝 콘텐츠·글쓰기 (182)](#cat-content) · [🗂️ 데이터 정제·라벨링 (76)](#cat-data) · [🎧 고객지원·CRM (45)](#cat-support) · [🧑‍💻 개발 도구·코드 리뷰 (108)](#cat-devtools) · [📚 목록·레퍼런스 (80)](#cat-catalog) · [🧩 기타 (581)](#cat-other)

## 🆕 새로 발견 (7일)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 35074 | 3762 | A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | 3842 | 651 | Open Source Alternative to Grok Bot with a virtual machine that bots can use | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [CopilotKit/openmuse](https://github.com/CopilotKit/openmuse) | 3462 | 451 | A personal agent with a browser, terminal, files, and work that keeps going built with CopilotKit and AG-UI. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [TokenRhythm/NeoHorse](https://github.com/TokenRhythm/NeoHorse) | 1347 | 17 | 에이전트 워크플로와 의사결정 제어를 위해 개발자가 활용하는 오픈 가중치 언어 모델 제품군이다.<br>애플리케이션 상태를 바탕으로 취할 행동을 고르거나 조건 충족 여부 및 점수 평가를 판단하게 한다.<br>사전 채움(prefill) 전용 추론 방식을 써서 생성 지연 없이 구조화된 판단 결과와 확률을 산출한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-26 |
| [firelex/jeff](https://github.com/firelex/jeff) | 1191 | 49 | Fine-tunes of Qwen3.5 and Gemma 4 for zero-shot classification | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [dais-polymtl/flock](https://github.com/dais-polymtl/flock) | 359 | 23 | Beyond Quacking: Deep Integration of Language Models and RAG into DuckDB (VLDB Demo 2025) | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [PostHog/jeeves](https://github.com/PostHog/jeeves) | 338 | 16 | Jeeves – Reasoning improves Jev-like decision models | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [qybaihe/mu](https://github.com/qybaihe/mu) | 331 | 32 | 코딩 과정에서 발생하는 컨텍스트 관리와 도구 실행 승인 같은 반복 결정을 작은 판사 모델에 맡기는 코딩 에이전트다.<br>입력 메시지 유형 파악, 도구 출력의 컨텍스트 반영 여부, 위험 명령 승인 등 매 턴마다 발생하는 세부 질문을 판단하게 한다.<br>무거운 주 모델 대신 Jev 같은 경량 판사 모델이 서른다섯 개 분기 지점을 choice나 noul 형태로 빠르게 평가하도록 설계했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [InternLM/Intern-Decision](https://github.com/InternLM/Intern-Decision) | 330 | 22 | 상태와 이미지 및 여러 유형화된 질문을 받아 확률이 포함된 결정을 출력하는 멀티모달 의사결정 모델이다.<br>마리오나 둠 같은 게임 제어와 브라우저 조작 상황에서 choice, score, noul 형식의 질문으로 다음 행동을 묻는다.<br>Qwen3.5 언어 백본만 미세조정하고 비전 타워는 동결하며 단일 순방향 패스에서 유효 토큰 로짓만 softmax하여 결과를 얻는다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [codejunkie99/keel](https://github.com/codejunkie99/keel) | 318 | 42 | macOS 환경에서 여러 코딩 에이전트를 연결해 작업을 실행하고 라우팅을 제어하는 로컬 중심의 개발 작업 공간이다.<br>새로 등록된 작업에 호스트가 준비한 후보군 중 적합한 실행 경로를 선택하거나 기권할지 판단을 맡긴다.<br>Rust와 GPUI 기반으로 작성되었으며 호스트가 선택 결과를 검증해 만료되거나 거부된 경우 기본 경로로 되돌린다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-25 |
| [Protocol-Lattice/go-agent](https://github.com/Protocol-Lattice/go-agent) | 257 | 33 | An agent framework for Go with graph-aware memory, UTCP-native tools, and multi-agent orchestration. Built for production. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [Sidiora-Labs/codify](https://github.com/Sidiora-Labs/codify) | 226 | 27 | The ai agent workflow tool that scales from small, simple projects to large, complex codebases. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [liuyanghejerry/Clausura](https://github.com/liuyanghejerry/Clausura) | 203 | 29 | CI-native agent CLI tool for deterministic pipeline gating. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [amirfish1/claude-command-center](https://github.com/amirfish1/claude-command-center) | 175 | 20 | Manage and orchestrate your Claude Code, Codex, Cursor, Antigravity, Kimi, Grok, Devin, Droid sessions on your Machine. Spawn in parallel, ship in parallel. Open source. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [uehaj/sys1grep](https://github.com/uehaj/sys1grep) | 144 | 9 | 텍스트 파일에서 정규표현식 대신 의미를 기준으로 각 줄을 다국어로 검색하는 명령줄 도구다.<br>파일의 각 줄이 사용자가 지정한 명제나 의미에 부합하는지 여부를 확률값으로 묻고 판단한다.<br>외부 의존성 없이 단일 파일로 동작하며 여러 줄을 묶어 병렬 처리하고 AND나 NOT 같은 논리 연산을 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |

## 🔥 급상승 (7일)

없음

## 📚 문서·모델 변경 (7일)

- 변경 `https://docs.typesafe.ai/sdk/python/usage` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `내용 변경` — [docs-models](https://docs.typesafe.ai/models.md)
- 변경 `내용 변경` — [docs-jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)
- 변경 `내용 변경` — [docs-api](https://docs.typesafe.ai/api.md)
- 변경 `https://docs.typesafe.ai/models` — [docs-sitemap](https://docs.typesafe.ai/sitemap.xml)
- 변경 `내용 변경` — [docs-models](https://docs.typesafe.ai/models.md)

## 분야별

<a id="cat-routing"></a>
### 🔀 라우팅·의도 분류 (1110)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 29279 | 2544 | 100개 이상의 언어로 텍스트를 분석해 단일 순방향 패스에서 선택, 점수, 참/거짓 판단을 도출하는 비자기회귀 의사결정 엔진<br>담당 부서(choice), 긴급도 수준(score), 이탈 위험 여부(noul) 등 입력 텍스트에 대한 구조화된 질문을 판단시킴<br>비자기회귀 단일 패스로 처리하며 언어별 체크포인트 자동 라우팅 및 RLCD 학습을 거치고 최대 8,192 토큰 컨텍스트를 지원함 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-29 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 506 | 66 | Claude Code와 OpenAI Codex CLI에서 사용자 프롬프트 난이도에 따라 모델을 턴 단위로 자동 라우팅해 주는 CLI 도구다.<br>사용자 프롬프트의 복잡도, 추론 필요성, 도구 복잡도, 컨텍스트 크기 등을 평가해 빠른 티어(저비용)와 강력한 티어 중 적절한 모델 티어를 선택하도록 판단시킨다.<br>루프백 프록시 방식으로 원본 CLI의 로그인 세션과 권한을 그대로 유지하며, /jev-explain 커맨드로 판단 근거 지표와 신뢰도를 확인할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-19 |
| [yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router) | 51 | 2 | Hono 프레임워크에서 메서드나 경로 대신 자연어 설명으로 들어오는 HTTP 요청을 분류해 처리하는 시맨틱 라우터다.<br>요청의 메서드·URL·헤더·본문이 등록된 각 라우트 설명과 일치하는지 여부를 Noul(예/아니오) 확률로 병렬 판별시킨다.<br>HTTP 요청마다 모델 호출 비용과 지연이 발생하며, 등록 순서대로 확률이 임계값을 넘는 첫 번째 라우트가 매칭된다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-18 |
| [kunchenguid/firstmate](https://github.com/kunchenguid/firstmate) | 7374 | 2347 | Talk to one agent. Ship with a crew. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [milvus-io/bootcamp](https://github.com/milvus-io/bootcamp) | 2445 | 683 | Dealing with all unstructured data, such as reverse image search, audio search, molecular search, video analysis, question and answer systems, NLP, etc. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [deepopen-com/deepopen](https://github.com/deepopen-com/deepopen) | 1623 | 211 | 100개 이상의 언어를 지원하며 분류와 라우팅 등 구조화된 의사결정을 단일 전방 전달로 수행하는 비자귀적 System 1 결정 엔진이다.<br>이메일이나 텍스트 입력을 바탕으로 담당 부서(choice), 긴급도(score), 이탈 위험 여부(noul) 등의 구조화된 결정을 내린다.<br>텍스트 생성을 배제한 비자귀 구조로 33ms 수준의 저지연을 구현하고, 입력 언어를 감지해 최적 체크포인트로 분기하는 내장 라우터를 제공한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | 1035 | 52 | Run open decision models locally: pull and serve Laya, decider, NLI and GLiClass behind a TypeSafe-compatible API. Ollama for decision models. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [nokia-applied-research/AnyJev](https://github.com/nokia-applied-research/AnyJev) | 988 | 126 | Turn any LLM into a Jev-style decision model: typed decisions, real probabilities, no training. (continue updating, welcome any issue and PR request) | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [anishfn/shapeshift](https://github.com/anishfn/shapeshift) | 757 | 84 | 사용자가 입력하는 텍스트 의도에 맞춰 이벤트 카드, 체크리스트, 타이머 등 알맞은 UI로 실시간 전환되는 입력 인터페이스다.<br>입력 텍스트가 어떤 카드 유형에 속하는지 분류하고 비디오 통화 여부나 긴급도 등 14개 신호 질문을 병렬로 판단시킨다.<br>의도 분류 외 파싱과 연산은 결정론적 코드로 처리하며, UI 깜빡임을 방지하는 상태 머신과 자체 오프라인 키워드 분류기 폴백을 구현했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools) | 739 | 42 | A curated list of tools  built for Jev — TypeSafe AI's System One model for typed decisions. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |

1110개 모두 보기 → [categories/routing.md](categories/routing.md)

<a id="cat-guardrail"></a>
### 🛡️ 가드레일·모더레이션 (226)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 150 | 13 | Pi 코딩 에이전트의 도구 호출과 출력 결과를 TypeSafe Jev API로 검사하고 제어하는 확장 도구다.<br>명령의 파괴성·데이터 유출·범위 초과·피해 수준과 출력의 비밀정보 누출·실패 유형을 noul, score, choice로 판단한다.<br>도구 실행 전 게이트 판단을 한 번의 요청(약 300ms)으로 처리하며, 오류 발생 시 실행을 차단하지 않는 fail-open 방식으로 동작한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-25 |
| [qkal/Canny](https://github.com/qkal/Canny) | 106 | 12 | Claude Code와 Codex CLI에서 코딩 에이전트가 검증 절차 없이 작업을 마쳤다고 주장하지 못하게 감시하는 훅 도구이다.<br>에이전트 메시지가 작업 완료를 주장하는지, 변경된 diff가 특정 규칙을 위반했는지 여부를 예/아니오 확률로 판단시킨다.<br>런타임 의존성이 없고, 원장의 사실 기록만 작업을 차단할 수 있으며 Jev의 판단 결과는 차단 없이 에이전트의 컨텍스트 조언으로만 사용된다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-22 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | 87 | 7 | 웹페이지 내 DOM 요소를 탐색해 TypeSafe Jev 모델의 판단에 따라 광고 요소를 실시간으로 제거하는 크롬 확장 프로그램이다.<br>추출된 각 DOM 후보 요소의 태그, 클래스, 텍스트 요약 등을 바탕으로 유료 광고(paid advertisement)인지 여부를 noul 확률 질문으로 판단시킨다.<br>광고 후보 선별과 배치는 순수 코드로 처리하고 시맨틱 판별만 Jev에 일괄 요청하며, 설정된 임계 확률을 넘기면 애니메이션과 함께 요소를 제거한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-17 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 48 | 7 | 다양한 코딩 에이전트의 도구 호출과 결과를 검사해 위험한 명령과 프롬프트 인젝션을 차단하는 보안 훅 라이브러리다.<br>도구 호출의 위험도(risk), 사용자 요청 부합 여부(user_requested), 신뢰할 수 없는 출처 기반 여부(from_untrusted)를 질의해 판단한다.<br>외부 의존성 없이 Claude Code, Cursor 등 여러 에이전트에 thin 어댑터로 연결되며 도구 실행 전후 및 인스트럭션 파일을 검사한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-28 |
| [MillionSend/millionsend](https://github.com/MillionSend/millionsend) | 171 | 12 | AWS SES를 기반으로 자체 호스팅하거나 클라우드로 사용할 수 있는 Resend 호환 오픈소스 이메일 발송 플랫폼이다.<br>발송된 이메일 샘플에 대해 유해 콘텐츠 및 어뷰징 여부를 판단하도록 백그라운드에서 점수 채점(score)을 요청한다.<br>발송 지연을 막기 위해 SES 수락 후 백그라운드에서 비동기로 샘플을 채점하며, 셀프 호스트 환경에서는 기본 비활성화되어 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [TiraelSedai/ClubDoorman](https://github.com/TiraelSedai/ClubDoorman) | 69 | 11 | 텔레그램 대형 채팅방에서 캡차, 텍스트 필터, LLM을 결합해 스팸을 감지하고 차단하는 텔레그램 안티스팸 봇이다.<br>기존 ML 점수가 모호한 구간(-0.5~0.5)의 메시지가 스팸(spam)인지 정상(ham)인지와 해당 분류의 확신도를 판단시킨다.<br>Jev와 Luna 두 모델의 라벨 일치와 80% 이상 확신도를 모두 요구해 자동 데이터셋 추가 및 재학습 파이프라인의 오탐을 방지한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [merefield/discourse-chatbot](https://github.com/merefield/discourse-chatbot) | 84 | 20 | An AI bot with RAG capability for Topics, Chat &amp; Customer Support in Discourse, currently powered by OpenAI | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) | 47 | 6 | Discord 서버 관리자가 스팸·피싱 링크를 차단하고 멤버 성향을 분석하기 위해 사용하는 Python 기반 모더레이션 봇이다.<br>실시간 메시지의 스팸 및 피싱 링크 여부와 유저 최근 메시지의 사기 위험·스팸·초보성·유해성·도움 수준 점수를 판별한다.<br>오탐된 메시지를 사면하면 안전 선례로 저장해 추후 검사에 반영하는 동적 학습 및 SQLite 기반 캐싱을 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) | 10 | 1 | pi 코딩 에이전트의 부작용 도구 호출이 사용자의 자연어 제약 조건에 어긋나는지 실행 전 점검·차단하는 런타임 제약 가드레일이다.<br>사용자 발화마다 기존 정책의 변경 상태(KEEP, LIFT, NARROW 등)와 작업 허가 신호 여부를 Jev에 분류시킨다.<br>Jev는 좁은 범위의 유한 선택지 분류만 수행하며, 규칙 상태를 세션 단위 구조적 op로 영속화해 컴팩션 후 재질의 없이 복원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-19 |
| [mizchi/jev-test-filter](https://github.com/mizchi/jev-test-filter) | 30 | 2 | Score every test against a git diff with Jev, and emit the filter arguments vitest, node:test, Playwright, cargo test and go test already understand | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |

226개 모두 보기 → [categories/guardrail.md](categories/guardrail.md)

<a id="cat-ranking"></a>
### 🏆 랭킹·검색·추천 (281)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 495 | 59 | 자연어 질의를 바탕으로 검색 소스·기간을 결정하고 검색 결과의 관련도를 채점하여 순위를 매기는 웹 검색 애플리케이션이다.<br>사용자 질의에 적합한 검색어·소스·기간 선택과 검색된 결과 항목별 관련도 점수 평가를 수행하도록 한다.<br>생성형 답변 없이 결과별 관련도 점수와 링크를 노출하며, Cloudflare Workers 기반으로 다중 엔진 병렬 검색과 결과 스트리밍을 처리한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-20 |
| [zilliztech/deep-searcher](https://github.com/zilliztech/deep-searcher) | 8292 | 804 | Open Source Deep Research Alternative to Reason and Search on Private Data. Written in Python. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | 8267 | 1075 | Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML editors with a built-in AI agent, plus a \`genoffice\` CLI and agent skill so Claude Code, Codex and Cursor can create and edit real .docx/.xlsx/.pptx files locally. Bring your own key. macOS, Windows &amp; Linux. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [zilliztech/GPTCache](https://github.com/zilliztech/GPTCache) | 8206 | 594 | Semantic cache for LLMs. Fully integrated with LangChain and llama_index.  | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [SamurAIGPT/llm-wiki-agent](https://github.com/SamurAIGPT/llm-wiki-agent) | 3591 | 413 | A personal knowledge base that builds and maintains itself. Drop in sources — Claude (or Codex/Gemini) reads them, extracts knowledge, and maintains a persistent interlinked wiki. Works with Claude Code, Codex, OpenCode, Gemini CLI. No API key needed. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | 2686 | 264 | A persistent, unified memory layer for all your AI agents (e.g. Claude Code, Codex, DSH), backed by Markdown and Milvus. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | 767 | 44 | Memory for AI agents that learns what is wrong and stops repeating it. Mark a memory wrong and it stops coming back; newer facts replace old ones. Local SQLite store and MCP server, persistent across sessions; hippo init wires it into Claude Code, Codex, Cursor, OpenClaw, OpenCode and Pi. Zero runtime deps, MIT, opt-in hosted TypeSafe Jev reranker. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [AgriciDaniel/jev-seo](https://github.com/AgriciDaniel/jev-seo) | 367 | 65 | Live SEO audit for any website from one homepage URL, judged by Jev. PDF, XLSX and Markdown reports. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [martinopiaggi/summarize](https://github.com/martinopiaggi/summarize) | 225 | 30 | Video AI summarization from multiple sources (YouTube, X, Instagram, TikTok, Reddit, Facebook, Google Drive, Dropbox, and local files). | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [mrnugget/jev-shell-history](https://github.com/mrnugget/jev-shell-history) | 115 | 10 | zsh 환경에서 사용자가 입력 중인 명령어에 적합한 완성을 최근 히스토리에서 찾아 fish 스타일로 보여주는 자동완성 플러그인이다.<br>현재 입력 내용을 완성할 가능성이 가장 높은 히스토리 후보(Choice)와 어떤 후보라도 입력을 완성하는지 여부(Noul)를 질의한다.<br>zle 백그라운드 비동기 처리로 프롬프트를 차단하지 않으며 접두사 모드 및 퍼지 모드 게이팅을 적용해 호출 지연 시간은 약 0.7~0.9초다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |

281개 모두 보기 → [categories/ranking.md](categories/ranking.md)

<a id="cat-agent"></a>
### 🤖 에이전트·도구 선택 (1528)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 250349 | 53490 | Nous Research가 개발한 자가 학습 루프 및 멀티 플랫폼 연동 기능을 갖춘 오픈소스 AI 에이전트 프레임워크<br>README에 판단 지점 설명 없음<br>경험 기반 자율 스킬 생성, FTS5 세션 검색, Honcho 사용자 모델링, 다양한 샌드박스 백엔드 및 메신저 연동을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-01 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187631 | 45981 | 자연어 지시나 시각적 빌더를 통해 자동화된 AI 에이전트 워크플로를 제작하고 실행하는 오픈소스 플랫폼이다.<br>README에 판단 지점 설명 없음<br>자연어 대화형 생성 도구(AutoPilot)와 노드 기반 시각적 빌더(Build)를 제공하여 에이전트의 세부 실행 단계를 제어할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-01 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 39056 | 3063 | AI 에이전트의 지식, 메모리, 스킬을 가상 파일 시스템 형태로 일원화해 탐색·관리할 수 있게 돕는 컨텍스트 데이터베이스다.<br>README에 판단 지점 설명 없음<br>viking:// 가상 파일 시스템 구조와 L0~L2 계층 요약을 통해 전체 본문 로드 전 관련성을 검토하고 세션을 마크다운 파일로 기록한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-30 |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | 30376 | 4835 | AI 에이전트가 외부 앱과 연동할 수 있도록 인증, 세션 관리, 도구 검색을 제공하는 SDK 모노리포다.<br>README에 판단 지점 설명 없음<br>모든 도구를 컨텍스트에 올리지 않고 런타임 메타 도구로 탐색·실행하며, 호스팅된 MCP 엔드포인트 생성을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-01 |
| [trycua/cua](https://github.com/trycua/cua) | 27567 | 1939 | AI 에이전트가 멀티 OS 환경에서 데스크톱 GUI 및 앱을 조작하고 평가할 수 있도록 격리 인프라와 드라이버를 제공하는 프레임워크다.<br>README에 판단 지점 설명 없음<br>macOS, Windows, Linux 환경을 지원하며 애플 실리콘용 로컬 VM(Lume)과 클라우드 샌드박스(Fleet), 백그라운드 UI 조작 기능을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 21576 | 1511 | 동적 인덱싱된 요소 목록을 기반으로 웹 작업을 고속으로 수행하도록 돕는 브라우저 에이전트 라이브러리다.<br>현재 관찰된 요소 테이블에서 수행할 동작(CLICK, TYPE_TEXT 등)과 대상 요소를 단일 요청으로 선택한다.<br>스크린샷 없이 구조화된 텍스트 상태만 전달하며, 동작과 대상 선택을 1회 네트워크 요청으로 묶어 처리 속도를 높였다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-30 |
| [elie222/inbox-zero](https://github.com/elie222/inbox-zero) | 12380 | 1556 | 이메일 정리, 답장 초안 작성, 콜드 메일 차단 등을 자동화하는 오픈소스 AI 개인 이메일 어시스턴트 애플리케이션이다.<br>README에 판단 지점 설명 없음<br>Next.js와 Prisma 기반 풀스택 구조이며, 로컬 개발을 위해 Google 및 Microsoft 에뮬레이터 Docker 프로필을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-30 |
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 7257 | 469 | Claude Code 및 npm 환경에서 대화 요약 대신 불필요한 도구 호출과 결과를 제거해 컨텍스트를 압축하는 도구다.<br>각 도구 호출에 대해 호출 기록 자체를 유지할지와 실행 결과를 그대로 유지할지를 noul(예/아니오 확률)로 묻는다.<br>텍스트 요약 없이 원본 텍스트를 유지하며 Jev 판정에 따라 도구 호출과 결과를 유지·잘라내기·삭제하는 방식으로 동작한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-18 |
| [vercel-labs/fx](https://github.com/vercel-labs/fx) | 3234 | 363 | 개발자가 터미널 환경이나 시스템 임베딩용으로 사용하는 Zig 기반의 네이티브 코딩 에이전트 CLI<br>README에 판단 지점 설명 없음<br>Zig로 작성되어 가벼운 네이티브 바이너리로 실행되며 WebAssembly 빌드 및 libfx SDK로 다른 호스트에 임베딩할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-10-01 |
| [lahfir/agent-desktop](https://github.com/lahfir/agent-desktop) | 1733 | 121 | AI 에이전트가 픽셀 추정 대신 OS 접근성 트리를 기반으로 데스크톱 앱을 관찰하고 조작할 수 있게 돕는 Rust 기반 CLI 및 FFI 라이브러리다.<br>README에 판단 지점 설명 없음<br>스켈레톤 순회로 토큰 소비를 줄이고 화면 좌표 대신 고유 식별자(ref)를 통해 안정적으로 요소를 제어하며 C-ABI 동적 라이브러리도 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-29 |

1528개 모두 보기 → [categories/agent.md](categories/agent.md)

<a id="cat-infra"></a>
### 🧰 SDK·인프라·통합 (768)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 43144 | 9224 | Claude, OpenAI, Gemini 등 AI 구독 할당량을 통합 관리하고 공유할 수 있게 중계하는 API 게이트웨이 서비스다.<br>README에 판단 지점 설명 없음<br>Go 백엔드, Vue 프론트엔드, Redis, PostgreSQL 스택을 활용하여 계정 공유 및 비용 분담 중계 플랫폼을 구현했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) | 27945 | 2411 | LLM과 도구·데이터를 연결하는 Model Context Protocol(MCP) 서버와 클라이언트를 파이썬으로 손쉽게 개발하도록 돕는 프레임워크다.<br>README에 판단 지점 설명 없음<br>데코레이터 기반으로 파이썬 함수를 감싸 스키마 생성, 입력 검증, 프로토콜 수명주기 관리를 자동화하여 MCP 구축을 단순화했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-30 |
| [vercel/ai](https://github.com/vercel/ai) | 27059 | 5230 | The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents  | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-30 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 11566 | 1079 | 멀티모달 AI 애플리케이션을 위해 벡터 유사도 검색과 SQL 쿼리를 제공하는 오픈소스 임베디드 검색 데이터베이스 라이브러리다.<br>README에 판단 지점 설명 없음<br>Lance 컬럼형 포맷을 기반으로 구축되어 대규모 벡터 및 멀티모달 데이터의 무복사(Zero-copy) 처리와 자동 버전 관리를 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-30 |
| [maximhq/bifrost](https://github.com/maximhq/bifrost) | 8479 | 1316 | 여러 AI 프로바이더를 OpenAI 호환 단일 API로 연결하고 로드 밸런싱과 장애 복구를 지원하는 AI 게이트웨이다.<br>README에 판단 지점 설명 없음<br>MCP(Model Context Protocol) 게이트웨이 기능과 시맨틱 캐싱, 웹 UI 및 Go SDK를 기본 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 8063 | 511 | Qwen 기반으로 직접 학습하고 자체 호스팅할 수 있도록 TypeSafe Jev 호환 API를 제공하는 경량 의사결정 모델 제품군<br>주어진 텍스트에 대해 choice(다중 선택), noul(예/아니오), score(평가 등급) 형태의 질문들을 한 번의 요청으로 동시에 판단<br>TypeSafe Python SDK와 호환되는 드롭인 대체재이며 0.8B부터 27B까지 제공되어 로컬 머신부터 GPU 서버까지 배포 가능 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-01 |
| [agentgateway/agentgateway](https://github.com/agentgateway/agentgateway) | 5110 | 896 | AI 에이전트와 LLM, MCP 도구 간의 통신에 보안·관측성·거버넌스를 제공하는 오픈소스 프록시 게이트웨이다.<br>README에 판단 지점 설명 없음<br>MCP와 A2A 프로토콜을 지원하며 쿠버네티스 Gateway API 확장 및 CEL 기반 정책 엔진을 통합해 인프라 레벨에서 라우팅과 제어를 수행한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [ax-llm/ax](https://github.com/ax-llm/ax) | 2956 | 194 | TypeScript를 기반으로 다양한 언어 환경에서 DSPy 스타일의 구조화된 LLM 생성과 에이전트 파이프라인을 구축하는 프레임워크다.<br>README에 판단 지점 설명 없음<br>단일 시그니처와 프로그래밍 모델을 Python, Java, C++, Go, Rust 라이브러리로 컴파일하여 다국어 환경에서 동일한 추론 계약을 유지한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [CelestoAI/celesto](https://github.com/CelestoAI/celesto) | 991 | 79 | AI 에이전트가 코드 실행, 웹 탐색, 데스크톱 앱 사용 등을 안전하게 수행할 수 있도록 격리된 지속성 가상 머신 샌드박스를 제공하는 도구다.<br>README에 판단 지점 설명 없음<br>약 500ms의 빠른 부팅 속도를 가진 경량 가상 머신을 로컬 환경(QEMU 등) 또는 클라우드에서 일관된 Python SDK와 CLI로 제어할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-29 |
| [jkudish/jev-mcp](https://github.com/jkudish/jev-mcp) | 471 | 54 | TypeSafe Jev 모델의 판단 기능을 에이전트가 호출할 수 있도록 11종의 도구로 감싼 MCP 서버 구현체다.<br>주장 진위 검증, 프롬프트 주입 스크리닝, 명제 발생 확률, 후보 재순위화, 코드 diff 품질 점수화 등을 묻는다.<br>stdio 및 무상태 HTTP 전송을 지원하며, 약 150~500ms 이내에 확률과 신뢰도 점수를 담은 정형 출력을 반환한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-30 |

768개 모두 보기 → [categories/infra.md](categories/infra.md)

<a id="cat-eval"></a>
### 📏 평가·채점 (395)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [comet-ml/opik](https://github.com/comet-ml/opik) | 22312 | 1833 | LLM 앱 및 AI 에이전트의 실행 트레이싱, 성능 평가, 모니터링을 제공하는 오픈소스 옵저버빌리티 플랫폼이다.<br>LLM 생성 결과에 대해 환각 여부(noul), 유해성 분류(choice), RAG 응답 품질 점수(score) 등을 판별하도록 요청한다.<br>LLM-as-a-judge 평가 메트릭, 트레이스 트리 추적, PyTest 기반 CI/CD 연동 및 자체 호스팅 환경을 지원한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-10-01 |
| [Kiln-AI/Kiln](https://github.com/Kiln-AI/Kiln) | 5135 | 381 | 평가, 프롬프트 최적화, RAG, 에이전트 구축 및 파인튜닝을 지원하는 AI 개발 워크벤치 데스크톱 앱 겸 Python 라이브러리다.<br>생성된 출력물이 선호 기준이나 평가 지표에 부합하는지 여부(noul)와 모델 응답 품질 등급(score)을 판정한다.<br>노코드 데스크톱 앱과 오픈소스 Python 라이브러리를 연계해 비개발자와 협업하고, Git 동기화 및 로컬 Ollama 실행을 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [langwatch/langwatch](https://github.com/langwatch/langwatch) | 4891 | 402 | LLM 호출 추적과 에이전트 시뮬레이션 테스트, 비용 및 거버넌스 관리를 지원하는 오픈소스 운영 플랫폼이다.<br>README에 판단 지점 설명이 없다.<br>Node.js 환경에서 바로 자체 호스팅할 수 있고 주요 코딩 에이전트의 PR당 비용까지 추적한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [firelex/jeff](https://github.com/firelex/jeff) | 1191 | 49 | Fine-tunes of Qwen3.5 and Gemma 4 for zero-shot classification | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [feder-cr/jev](https://github.com/feder-cr/jev) | 1138 | 129 | jevos is an open-source alternative to Jev for yes/no decisions that runs on your laptop. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [TypeLLM/TypeLLM](https://github.com/TypeLLM/TypeLLM) | 898 | 58 | TypeLLM: LLMs with type-safe generation | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [Liuziyu77/Valen](https://github.com/Liuziyu77/Valen) | 577 | 58 | Train a Jev-like multimodal model by yourself. System One Model, now with vision. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [PostHog/jeeves](https://github.com/PostHog/jeeves) | 338 | 16 | Jeeves – Reasoning improves Jev-like decision models | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [monteduro/killmyidea](https://github.com/monteduro/killmyidea) | 244 | 32 | 스타트업 아이디어를 입력하면 질문 10개에 대한 평가 점수를 종합해 진행 여부(KILL, FIX, SHIP)를 판정해 주는 웹 서비스<br>아이디어의 카테고리, 이해도(understandability), 그리고 문제 정의·수익성·도달력 등 8개 항목에 대한 0-4점 척도 평가<br>생성형 LLM 텍스트 생성 대신 10개 평가 질문을 병렬로 점수화하고 가중 평균 및 명확성 게이트를 거쳐 3단계 판정을 도출하는 구조 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [sileod/tasksource](https://github.com/sileod/tasksource) | 197 | 11 | Datasets collection and preprocessings framework for NLP extreme multitask learning | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |

395개 모두 보기 → [categories/eval.md](categories/eval.md)

<a id="cat-robustness"></a>
### 🧪 견고성·감사 연구 (99)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [chainreactors/fingers](https://github.com/chainreactors/fingers) | 271 | 40 | 보안 스캐너 등에서 대상 웹 기술 및 프레임워크를 식별하기 위해 여러 지문 라이브러리를 통합 분석하는 Go 엔진이다.<br>규칙 엔진이 매칭한 제품명과 버전 결과가 실제 웹 응답 증거에 의해 성립하는지(holds, refuted, insufficient) 판단한다.<br>Jev를 심사기(Judge)로 활용해 규칙 기반 결과의 오탐과 중복을 줄이고 버전을 보완하며, 실패 시 순수 규칙 결과로 폴백한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [kshetrajna12/reflex](https://github.com/kshetrajna12/reflex) | 159 | 18 | A small open decision model: state + typed questions -&gt; calibrated probabilities. A Jev / System One re-creation on Qwen3.5. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [cobusgreyling/Jev](https://github.com/cobusgreyling/Jev) | 129 | 27 | Unofficial TypeSafe Jev showcase — System One decisions, not chat. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [iapp-technology/openthai-systemone](https://github.com/iapp-technology/openthai-systemone) | 65 | 22 | OpenThai-SystemOne: open Thai + English System One decision model (0.8B, 256-way slot head, Apache-2.0) | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [mithalouni/system-one-open](https://github.com/mithalouni/system-one-open) | 38 | 6 | Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal) | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [MoLeMo-Lab/mojev](https://github.com/MoLeMo-Lab/mojev) | 29 | 3 | MoJev: typed, calibrated decisions in one forward pass. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [ankit-aglawe/tinyjev](https://github.com/ankit-aglawe/tinyjev) | 26 | 4 | A tiny jev-like model that answers Choice, Score and Noul questions in one forward pass and returns calibrated probabilities. MLX or PyTorch, fully offline, System One compatible. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [yzfly/edgejev](https://github.com/yzfly/edgejev) | 15 | 2 | 离线可用的本地类型化决策：4 核 CPU 单题 15.6ms。Local &amp; offline Jev / System One inference on CPU — ONNX + INT8, no torch at runtime. 支持 laya / kev / PlayJev | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [genai-craft/openvons](https://github.com/genai-craft/openvons) | 13 | 0 | openvons (open-Jev): 有限選択肢に確率で答える判断層 — テキスト / 画像 / 日本語音声コマンド | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [Yifan-Lan/awesome-jev-robustness](https://github.com/Yifan-Lan/awesome-jev-robustness) | 5 | 3 | TypeSafe Jev 모델의 답변 일관성, 보정 오차, 프롬프트 주입 취약점 등 견고성을 독립적으로 검증한 연구와 감사 결과를 모아둔 큐레이션 리포지토리다.<br>README에 판단 지점 설명 없음<br>단순 작업 정확도 대신 옵션 순서나 이름, 부정문 표현 등에 따라 확률값과 선택 결과가 어떻게 흔들리는지 속성별 독립 테스트 결과를 목록과 요약표로 정리했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |

99개 모두 보기 → [categories/robustness.md](categories/robustness.md)

<a id="cat-finance"></a>
### 💹 금융·트레이딩 (102)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 63812 | 11213 | An AI Hedge Fund Team | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-26 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12346 | 2525 | 트레이더와 개발자를 위해 암호화폐, 주식, 외환의 리서치부터 백테스트와 실거래를 지원하는 자체 호스팅 AI 트레이딩 OS다.<br>README에 판단 지점 설명 없음<br>Python 전략 개발 및 백테스트뿐 아니라 에이전트 연동용 MCP, 자체 결제 및 정산 기능까지 결합한 올인원 스택을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade) | 171 | 31 | Hyperliquid 오더북 데이터를 바탕으로 TypeSafe Jev를 호출해 암호화폐 5종의 매매 주문을 자동 집행하는 트레이딩 봇 및 대시보드다.<br>오더북 데이터를 기반으로 틱마다 포지션 방향(long 또는 short)과 실행 액션(open, close, hold)을 선택하도록 질의한다.<br>코인별 독립 지갑 구조를 적용하고, 진입 시 ALO 메이커 주문과 청산 시 IOC 테이커 주문을 분기하며 Bun과 Next 대시보드를 SSE로 연결했다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-21 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 109380 | 21003 | TradingAgents: Multi-Agents LLM Financial Trading Framework | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 2709 | 509 | Monad 블록체인 상의 Kuru MON-USDC 오더북을 감시하여 매 블록마다 Jev 모델의 예측에 맞춰 post-only 지정가 주문을 갱신하는 트레이딩 봇이다.<br>지정된 블록 구간(기본 100블록, 약 30초) 동안의 가격 변동 방향에 대해 buy 또는 sell 중 하나를 선택하도록 판단시킨다.<br>약 300ms의 블록 주기에 맞추기 위해 RPC 호출을 2회로 최소화하고 기존 주문 취소와 신규 주문을 batchUpdate 단일 트랜잭션으로 처리한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 483 | 59 | Jev API를 활용하여 261종의 IRS 세무 서식 페이지를 식별하고 분류하는 문서 분류 도구다.<br>입력된 세무 문서 페이지가 261종의 IRS 서식 중 어떤 양식에 해당하는지 선택하도록 묻는다.<br>261개 서식에 걸쳐 100% 엄격한 정확도를 보이며 페이지당 약 0.001달러의 처리 비용을 제시한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [EthanAlgoX/AIStock](https://github.com/EthanAlgoX/AIStock) | 339 | 88 | One person can become their own super-analyst. Try it online: https://myaistock.top | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [imikerussell/beebots](https://github.com/imikerussell/beebots) | 185 | 94 | OKX 무기한 선물 시장에서 세 마리의 AI 봇이 모의 거래 경쟁을 벌이도록 설계한 시스템이다.<br>각 거래 봇의 매매와 관련된 판단을 내린다.<br>기본적으로 모의 거래로 작동하며 모든 주문이 코드로 작성된 위험 관리 계층을 거치도록 설계했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis) | 173 | 34 | 실시간 암호화폐 시장 지표와 트위터 여론을 수집·통계 분석하여 매매 의사결정 카드를 생성해 주는 터미널 애플리케이션이다.<br>실시간 시장 지표와 트윗 요약 데이터를 바탕으로 매매 액션(Choice), 감성 스펙트럼(Score), 숏 스퀴즈 위험 확률(Noul), 촉매 중요도(Score)를 판단시킨다.<br>트위터 API 비용을 줄이기 위해 SQLite 기반 조기 종료 중복 제거 파이프라인을 거친 후 정제된 대표 트윗과 통계치만 Jev에게 전달해 추론 비용과 지연 시간을 낮췄다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [arimanyus/warrenduffer](https://github.com/arimanyus/warrenduffer) | 93 | 28 | AI-driven intraday trading bot for Indian stocks. Jev ranks the Nifty 50 every 15s; code sizes each trade and places the stop; orders go live through Zerodha Kite or Kotak Neo. Day replay, kill switch, daily loss halt, terminal dashboard. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |

102개 모두 보기 → [categories/finance.md](categories/finance.md)

<a id="cat-games"></a>
### 🎮 게임·인터랙티브 (91)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 422 | 48 | 구조화된 에뮬레이터 RAM 상태 데이터를 바탕으로 Super Mario Bros. 게임 컨트롤러 입력을 직접 결정하는 Jev 기반 에이전트 실험 프로젝트다.<br>게임 상태 JSON을 입력받아 컨트롤러 매크로 선택(Choice), 현재 전방 점프의 유용성 여부(Noul), 즉각적인 위험도 등급(Score)을 판단한다.<br>스크린샷 대신 에뮬레이터 RAM과 텔레메트리를 구조화된 JSON으로 파싱해 전달하며, 타이밍 계산은 코드가 수행하고 Jev가 직접 입력을 결정한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-16 |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2452 | 252 | Qwen3-0.6B 백본 기반으로 토큰 디코딩 없이 병렬 판단 확률 분포를 출력하도록 구현된 오픈소스 Jev 복제 모델 및 훈련 파이프라인이다.<br>게임 상태와 질문이 주어졌을 때 동적 선택지 중 최적 행동 확률(Choice), 명제 참/거짓 확률(Boolean), 정렬 등급 점수(Score)를 판단시킨다.<br>텍스트 토큰 생성 대신 상태·질문·후보군을 한 번의 포워드로 인코딩하고 전용 헤드로 확률 분포를 직접 출력해 4개 게임 제어에 적용했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 204 | 37 | TypeSafe Jev 모델을 사용해 자율주행(오토파일럿) 행동을 시뮬레이션하는 Three.js 기반의 드라이빙 시뮬레이터 데모다.<br>주변 교통, 도로 경계, 신호, 정지선 및 목표 경로 정보를 바탕으로 샘플링된 주행 경로 후보(조향 및 속도 조합)와 정지 여부 중 최적의 행동을 선택하도록 묻는다.<br>후보 경로 생성과 기하학적 제어 연산은 로컬 웹 워커에서 처리하고, 컴팩트한 상태 테이블만 서버를 통해 Jev API로 전달해 초당 1.5~4회 주행 경로를 선택한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [christianmat/jev-pokemon](https://github.com/christianmat/jev-pokemon) | 114 | 7 | 인공지능 모델 Jev가 포켓몬스터 레드를 직접 플레이하도록 에뮬레이터와 연동해 의사결정을 수행하는 프로젝트다.<br>이동 목적지, 대화 상대, 전투 기술, 포켓몬 교체, 메뉴 선택 등 게임 내 가능한 행동 목록 중에서 하나를 고른다.<br>하네스가 메모리를 읽어 규칙상 가능한 선택지와 정보를 구성하고, 길 찾기 같은 단순 조작만 처리하며 진행을 전적으로 모델 판단에 맡긴다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [wingedsheep/argentum-engine](https://github.com/wingedsheep/argentum-engine) | 69 | 33 | Kotlin 기반으로 MTG(Magic: The Gathering) 규칙을 구현한 게임 엔진이자 온라인 멀티플레이 플랫폼이다.<br>게임 내 AI 상대 모드(GAME_AI_MODE=jev)에서 게임 액션 및 플레이 선택지를 판단한다.<br>결정론적 룰 엔진, RL/MCTS 학습용 Gym 환경, 오라클 텍스트 파서 Assay와 함께 트리 탐색·LLM·Jev AI 컨트롤러를 제공한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev) | 109 | 11 | Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [emrickgarrett/OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 40 | 9 | Three.js와 Node.js 기반 브라우저 1v1 FPS 환경에서 TypeSafe System One 기반 AI 봇과 스나이퍼 대결을 펼치는 게임이다.<br>서버가 약 9Hz 주기로 구조화된 게임 상태를 바탕으로 이동, 조준각(yaw, pitch), ADS, 발사, 점프 여부를 Choice와 Noul로 질의한다.<br>API 장애 시 매치가 멈추지 않도록 동일한 액션 인터페이스를 공유하는 휴리스틱 로직을 폴백으로 구현했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [phyous/tsai-sc](https://github.com/phyous/tsai-sc) | 27 | 2 | 구조화된 스타크래프트 셰어웨어 게임 상태를 관찰하고 TypeSafe Jev 모델의 판단으로 키보드와 마우스 입력을 제어하는 하네스 리포지토리다.<br>정리된 아군 및 시야 상태를 바탕으로 유닛 생산, 자원 채취, 탐색, 업그레이드, 전투 등 어떤 명령을 실행할지 choice 형태로 선택하게 한다.<br>화면 캡처가 아닌 구조화된 게임 데이터를 사용하며, 상태 읽기와 추론 중 게임을 일시정지하고 경제와 군사 결정을 분리해 원본 미션 승리를 달성했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [NevaMind-AI/JevTown](https://github.com/NevaMind-AI/JevTown) | 41 | 5 | jev based AI town simulation | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev) | 35 | 12 | A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |

91개 모두 보기 → [categories/games.md](categories/games.md)

<a id="cat-content"></a>
### 📝 콘텐츠·글쓰기 (182)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [kitze/unclutter](https://github.com/kitze/unclutter) | 343 | 35 | WXT 기반의 브라우저 확장 프로그램으로 웹페이지 내 불필요한 요소를 판별해 가려주는 도구다.<br>웹페이지 내 요소들이 가려야 할 불필요한 요소(nonessential element)인지 여부를 분류하도록 요청한다.<br>Vercel AI Gateway 또는 TypeSafe AI를 직접 활용하며, 템플릿별로 숨김 규칙을 로컬에 저장해 재적용한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") | 2026-09-18 |
| [artemnovitckii/creator-lab](https://github.com/artemnovitckii/creator-lab) | 108 | 26 | 인스타그램 릴스 영상을 스크랩하고 전사한 뒤 스크립트 구조와 훅 패턴을 분석해 주는 로컬 웹 도구다.<br>릴스 스크립트를 보고 주제, 오프닝 방식, 훅 메커니즘, 대본 구조, 근거, 감정적 소구, 조언 구체성, CTA 등 8가지 항목을 분류하도록 판단시킨다.<br>npm 의존성이나 빌드 단계 없이 순수 Node.js로 동작하며, Apify 수집 및 음성 전사 후 성과 지표와 무관하게 순수 스크립트 텍스트만을 Jev에 전달해 캐싱·분류한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-24 |
| [DanRWilloughby/snifftest](https://github.com/DanRWilloughby/snifftest) | 33 | 1 | Markdown과 텍스트 문서를 검사해 AI 특유의 문체와 하우스 룰 위반을 잡아내는 산문 린터 도구다.<br>단락을 단순 반복하는 결문, 과도한 유보 표현, 수사적 도입부 등 문맥 판단이 필요한 규칙의 해당 확률을 질문한다.<br>정규식 기반 로컬 규칙과 호스팅 판단 모델 규칙을 분리하며, 텍스트를 재작성하지 않고 문제 위치와 확률 플래그만 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-18 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 46581 | 3030 | An open-source, privacy-first, self-hosted knowledge workspace where humans and AI agents work together 开源、隐私优先、自托管的知识工作空间，让人与智能体在此协作 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 35074 | 3762 | A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [HarleyCoops/Math-To-Manim](https://github.com/HarleyCoops/Math-To-Manim) | 2680 | 293 | 텍스트와 이미지를 기반으로 Manim 수학 및 물리 애니메이션과 학습 노트를 제작하는 멀티에이전트 파이프라인 도구다.<br>각 단계의 산출물(학습 요약, 수학 검증, 씬 구성 등)이 기준을 만족하는지 score로 평가하고 통과 여부를 판단한다.<br>Jev 평가는 기본적으로 권고(advisory) 수준으로 점수만 기록되지만, gated 옵션으로 엄격한 품질 게이트로 전환할 수 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Paca-AI/paca](https://github.com/Paca-AI/paca) | 1874 | 158 | AI-native, free, open-source alternative to Jira, Trello, ClickUp &amp; Monday. Built for Scrum teams where humans and AI agents collaborate as equals — on the same board, the same sprints, the same goals. Self-hosted. Fully customizable via config and plugins. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [githubnext/localjev](https://github.com/githubnext/localjev) | 803 | 55 | — | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [ttlequals0/MinusPod](https://github.com/ttlequals0/MinusPod) | 459 | 44 | 팟캐스트를 Whisper로 전사하고 LLM으로 광고 구간을 탐지 및 잘라내어 무광고 RSS 피드로 서빙하는 셀프 호스팅 서버다.<br>README에 판단 지점 설명 없음<br>Whisper 전사와 슬라이딩 윈도우 LLM 탐지 외에도 음향 분석 신호 및 사용자 수정 기반의 크로스 에피소드 패턴 학습을 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot) | 354 | 41 | Curated bilingual list of Grok Bot resources — always-on AI teammates with their own cloud computer. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |

182개 모두 보기 → [categories/content.md](categories/content.md)

<a id="cat-data"></a>
### 🗂️ 데이터 정제·라벨링 (76)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate) | 92 | 12 | 합성 데이터 및 사전학습용 Parquet·JSONL 대규모 데이터셋을 TypeSafe Jev API로 고속 정제·필터링하는 Rust/Python 도구다.<br>각 행 데이터에 대해 수학적 추론 결함, 코드 정확성, 아첨(sycophancy) 여부 등을 프리셋 루브릭 기반의 Choice, Score, Noul로 평가한다.<br>Rust 스트리밍 코어로 단일 HTTP 요청 내 다중 질문을 병렬 처리하며, CLI 및 PyO3 기반 Python 바인딩을 함께 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [amponce/archive-movie-browser](https://github.com/amponce/archive-movie-browser) | 146 | 32 | Internet Archive에 등록된 퍼블릭 도메인 영화를 TMDB 메타데이터와 연동해 탐색하고 가상 채널로 시청하는 웹 플레이어다.<br>Archive.org의 특정 업로드 영상이 실제 TMDB의 어떤 영화에 해당하는지 여부를 식별한다.<br>Jev로 오프라인 식별한 인덱스를 활용하며, 동기화된 가상 TV 채널, M3U 및 XMLTV 피드, MCP 서버 인터페이스를 지원한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [keltokhy/jgrep](https://github.com/keltokhy/jgrep) | 131 | 5 | grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [nomanjack/smart-paste](https://github.com/nomanjack/smart-paste) | 42 | 6 | A little less copy-paste | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook) | 34 | 1 | Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [chenmingtang830/jevgraph](https://github.com/chenmingtang830/jevgraph) | 31 | 5 | Evidence-backed knowledge graph construction with typed Jev relation decisions | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [equationalapplications/curated-thoughts](https://github.com/equationalapplications/curated-thoughts) | 16 | 3 | 로컬 문서를 감시·색인해 위키 형태의 지식 베이스를 구축하는 Tauri 기반 로컬 우선 데스크톱 세컨드 브레인 앱<br>축적된 비정형 팩트 데이터를 더 빠르고 저렴하게 분류하기 위해 사실 유형(fact-typing)을 판별하도록 요청함<br>작업·에피소드·의미 기억의 3단계 구조와 사람 검토 큐를 결합했으며, Jev 엔드포인트를 전용 팩트 분류기로 옵션 지원함 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [goodrahstar/jev-column-race](https://github.com/goodrahstar/jev-column-race) | 23 | 3 | Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [dark-hxx/jev-safety-gateway](https://github.com/dark-hxx/jev-safety-gateway) | 13 | 1 | 位于 nginx 与大模型后端之间的前置过滤反向代理：逐请求提取用户输入交给 JEV 判定，有害拦截、正常透明放行 | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [lzq-0529/jev-span](https://github.com/lzq-0529/jev-span) | 5 | 0 | 텍스트를 구두점으로 분할해 후보 구간을 만들고 Jev API에 객관식 질문을 던져 개체명 경계와 유형을 판별하는 제로샷 개체명 인식 도구다.<br>텍스트의 각 후보 구간이 지정된 개체 유형에 해당하는지 여부와 정확한 경계 및 유형을 다지선다 choice와 확률로 판단하게 한다.<br>추가 학습이나 GPU 없이 텍스트 분할과 다지선다 질문 조합만으로 개체 구간을 추출하며 결정 과정을 트리 형태로 추적할 수 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |

76개 모두 보기 → [categories/data.md](categories/data.md)

<a id="cat-support"></a>
### 🎧 고객지원·CRM (45)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [mohit67890/imajev](https://github.com/mohit67890/imajev) | 167 | 20 | Open Jev-style typed-decision model that also takes images: photo + app state + typed questions in, calibrated probabilities out, locally. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [typesafeainate/dspy-typesafeify](https://github.com/typesafeainate/dspy-typesafeify) | 64 | 2 | Add a decorator for dspy Signatures that automatically uses TypeSafe where relevant | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [Abhinavexists/lev](https://github.com/Abhinavexists/lev) | 43 | 2 | An open System One decision model | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [sqliteai/blink](https://github.com/sqliteai/blink) | 19 | 0 | An open-source, high-performance System One Model for one-pass typed decisions, with an embeddable C runtime and WebAssembly support. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [InterfazeAI/lev](https://github.com/InterfazeAI/lev) | 14 | 1 | An open System One decision model | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [mattt/AnyDecisionModel](https://github.com/mattt/AnyDecisionModel) | 12 | 2 | A Swift package for typed decisions from language models (probabilities, choices, and scores), with support for local MLX models and the TypeSafe Jev API. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [jeffonelson/jev-bigquery-cloudrun](https://github.com/jeffonelson/jev-bigquery-cloudrun) | 9 | 0 | Classify support tickets in BigQuery with Jev and Cloud Run | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [scienthoon/jev-ood-calibration](https://github.com/scienthoon/jev-ood-calibration) | 6 | 0 | Independent calibration test of TypeSafe's Jev on a task it cannot have seen: 900 rule-generated support tickets (choice / score / boolean) plus 3 public benchmarks via Vercel AI Gateway. Raw responses, ECE with noise floor, temperature refit, per-type sign of miscalibration. Reproducible for ~$0.06. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [EmiRoberti77/jev-py-integration](https://github.com/EmiRoberti77/jev-py-integration) | 2 | 0 | 고객지원 티켓을 Jev로 먼저 분류하고 필요한 경우에만 LLM 답장을 생성하도록 연동한 파이썬 파이프라인 예제다.<br>티켓의 긴급 여부(is_urgent), 분노 여부(is_angry), 상담원 필요성(needs_a_human) 확률과 문의 의도(intent) 선택지를 판단하게 한다.<br>Jev 호출 한 번으로 복수 판단을 얻어 파이썬 조건문으로 스팸 제거와 LLM 에스컬레이션을 제어한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [KineiChou/obsidian-homing](https://github.com/KineiChou/obsidian-homing) | 3 | 0 | Homing (归位) — an Obsidian plugin that files inbox notes into existing folders and links mentions to the right notes, with your confirmation, right in the editor. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |

45개 모두 보기 → [categories/support.md](categories/support.md)

<a id="cat-devtools"></a>
### 🧑‍💻 개발 도구·코드 리뷰 (108)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [samchon/typia](https://github.com/samchon/typia) | 5926 | 227 | TypeScript 타입을 컴파일 타임에 분석해 런타임 유효성 검증기, JSON 직렬화 코드, LLM 함수 호출 하네스를 생성하는 변환 라이브러리다.<br>README에 판단 지점 설명 없음<br>별도 스키마 정의나 런타임 리플렉션 없이 순수 TypeScript 타입을 빌드 단계(ttsc)에서 전용 검증 코드로 직접 컴파일한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-10-01 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 646 | 43 | Git diff나 전체 코드베이스를 단계별로 검토하고 결과를 로컬 대시보드에 시각화하는 코드 리뷰 워크플로 도구다.<br>위험 매트릭스(Noul), 파일 프로파일(Choice/Score), 증거 선택 및 메커니즘 분류(Choice), 심각도(Score), 리뷰어 라우팅(Choice)을 판단시킨다.<br>오케스트레이션과 임계값 정책은 코드로 관리하며, Jev를 단계별 모델 판단에만 제한적으로 사용하고 단방향 계층 아키텍처를 강제한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-17 |
| [sutro-sh/jev-align](https://github.com/sutro-sh/jev-align) | 301 | 23 | Jev와 GEPA를 사용해 불확실한 데이터에 대한 인간 피드백을 수집하고 AI Functions를 최적화하는 CLI 도구<br>이진 분류, 다중 클래스, 다중 라벨, 루브릭 기반 점수 평가 등 사용자가 정의한 질문을 데이터셋에 적용해 판단<br>불확실성 높은 데이터를 능동 학습으로 골라내 라벨링을 유도하고, GEPA를 통해 프롬프트 정의를 지속 개선하며 공개 레지스트리에 공유할 수 있음 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-20 |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 230 | 20 | AI 코딩 에이전트가 코드 품질을 지속적으로 점검하도록 지원하는 로컬 기반 MCP 서버 플러그인이다.<br>코드 diff와 컨텍스트를 바탕으로 정확성·복잡도·변경용이성·모듈성·테스트·보안 등의 품질 지표를 Score·Choice·Noul로 평가한다.<br>긴 서술형 리뷰 텍스트 대신 정형화된 점수와 신뢰도 시그널을 반환하며, 원인 진단과 코드 수정은 메인 에이전트에게 맡긴다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-17 |
| [AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo) | 89 | 9 | 개발자와 코딩 에이전트가 웹사이트의 SEO 및 GEO 준비 상태를 검사하고 크롤링할 수 있도록 돕는 Rust 기반 오픈소스 CLI이자 MCP 도구다.<br>README 본문에서 Jev의 Choice, Score, Noul 기본형으로 웹페이지를 평가하고 신뢰도를 제어한다고 언급하나 구체적인 질문 내용은 설명되어 있지 않다.<br>58가지 규칙 기반 감사, GEO 인용 점수 측정 등을 단일 바이너리로 제공하며, 15개 도구를 갖춘 MCP 서버 형태로 에이전트와 연동할 수 있다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-30 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | 20246 | 2345 | 개발자가 터미널 환경에서 여러 코딩 에이전트 세션을 실행할 수 있도록 RAM 효율성과 성능을 극대화한 러스트 기반 코딩 에이전트 하네스 도구다.<br>README에 판단 지점 설명 없음<br>로컬 임베딩 비활성화 시 단일 세션 27.8MB 수준의 낮은 메모리 점유율을 제공하며, TUI 내 세션 유지 업데이트 등 다중 세션 확장성에 집중했다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [Effect-TS/effect](https://github.com/Effect-TS/effect) | 16261 | 786 | TypeScript 개발자가 타입 안전한 에러 처리, 의존성 주입, 구조적 동시성 등을 구현하는 데 사용하는 표준 라이브러리 모노레포다.<br>README에 판단 지점 설명 없음<br>코어 로직뿐만 아니라 런타임 플랫폼 추상화, 각종 SQL 클라이언트, AI 제공자 연동 모듈을 모노레포 패키지로 함께 제공한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) | 8701 | 930 | 원격 리포지토리 푸시 전에 일회용 워크트리에서 AI 검증 파이프라인을 실행해 주는 로컬 Git 프록시 도구다.<br>README에 판단 지점 설명 없음<br>푸시 시점에 별도 워크트리에서 리뷰, 테스트, 린트를 수행하고 안전한 수정은 자동 적용하며 통과 시에만 PR을 연다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 2495 | 148 | TypeSafe API 연동 코드를 생성할 수 있도록 Claude Code 등의 AI 에이전트에 추가하는 개발용 스킬 모음이다.<br>README에 판단 지점 설명 없음<br>Claude Code 플러그인과 skills.sh 배포 방식을 지원하여 에이전트가 TypeSafe 워크플로를 설계하고 문서를 참조할 수 있게 한다. | [❌](#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") | 2026-09-12 |
| [dzhng/jevgrep](https://github.com/dzhng/jevgrep) | 1906 | 126 | 코딩 에이전트가 리포지토리 동작 관련 질문을 던져 필요한 파일과 소스 코드 맥락을 빠르게 찾도록 돕는 CLI 도구다.<br>사용자의 동작 관련 질의에 대해 폴더, 파일, 선언부 단위의 코드 내용이 유의미하게 연관되어 있는지 여부를 판단시킨다.<br>저장소 계층을 탐색해 관련 파일과 소스 발췌문을 표준 출력으로 제공하며 코딩 에이전트의 탐색 비용을 약 30% 절감하도록 설계되었다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |

108개 모두 보기 → [categories/devtools.md](categories/devtools.md)

<a id="cat-catalog"></a>
### 📚 목록·레퍼런스 (80)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [daveebbelaar/ai-cookbook](https://github.com/daveebbelaar/ai-cookbook) | 4607 | 1600 | AI 시스템 구축을 돕기 위해 복사해 붙여넣을 수 있는 코드 예제와 튜토리얼을 제공하는 개발자용 레퍼런스 리포지토리다.<br>README에 판단 지점 설명 없음<br>프로젝트에 바로 통합할 수 있는 실용적인 코드 조각과 튜토리얼 위주로 구성된 것이 특징이다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-21 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 2029 | 302 | TypeSafe AI의 의사결정 모델 Jev를 활용한 공개 프로젝트, 연동 사례, 실무 논의를 분야별로 정리한 큐레이션 목록이다.<br>README에 판단 지점 설명 없음<br>카테고리별 파일을 scripts/build-readme.py로 취합해 README를 생성하며, 추천이나 품질 보증 대신 엄격한 수록 기준과 직접 검증용 체크리스트를 제시한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-30 |
| [Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) | 887 | 192 | TypeSafe Jev를 활용한 분류, 라우팅, 가드레일 등 다양한 활용 사례, 프롬프트, 패턴, 스타터 코드를 정리한 큐레이션 리포지토리다.<br>README에 판단 지점 설명 없음<br>단일 애플리케이션이 아니라 Jev를 활용하는 여러 패턴, 연계 프로젝트, 커뮤니티 디렉터리 및 관련 생태계 자료를 집약한 리스트다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-23 |
| [logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) | 636 | 56 | 커밋에 고정된 오픈소스 코드 기반으로 TypeSafe Jev 생태계 프로젝트를 정리하고 탐색할 수 있게 지원하는 큐레이션 레이더 리포지토리다.<br>README에 판단 지점 설명 없음<br>PR 대신 GitHub Issues로만 프로젝트 등록을 받으며, 웹 기반 가챠 탐색 기능 및 에이전트 연동용 Agent Skill과 llms.txt를 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [kydlikebtc/awesome-jev](https://github.com/kydlikebtc/awesome-jev) | 588 | 16 | TypeSafe AI의 Jev 모델을 사용하는 공개 리소스와 사례를 결정 패턴별로 분류해 정리한 큐레이션 카탈로그 리포지토리다.<br>이 리포 자체는 목록이며, 수록된 사례들은 상태에 대한 choice, score, noul 프리미티브 기반 결정을 Jev에게 요청한다.<br>링크 상태와 호출부 인용을 추적하며, 홍보성 추천이 아닌 독립적 벤치마크 및 부정적 평가 결과까지 포함해 검증 기록을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [AbdelStark/awesome-typesafe-jev](https://github.com/AbdelStark/awesome-typesafe-jev) | 550 | 137 | TypeSafe Jev 모델 생태계의 SDK, 데모, 에이전트 도구, 평가 자료 등을 큐레이션한 개발자용 레퍼런스 목록이다.<br>고객지원 문의 텍스트를 바탕으로 유형(choice: technical), 불만 척도(score: 1), 긴급 여부(noul: 1.0)를 예시로 판단한다.<br>단순 링크 목록을 넘어 독립 벤치마크 결과, 프로젝트별 제약 사항, coding agent용 스킬 명세(SKILL.md)까지 체계적으로 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-30 |
| [walidboulanouar/awesome-jev-use-cases](https://github.com/walidboulanouar/awesome-jev-use-cases) | 353 | 49 | TypeSafe Jev 모델을 활용한 오픈소스 프로젝트, 데모, API 예제 및 사용 사례를 정리한 큐레이션 목록 저장소다.<br>README에 판단 지점 설명 없음<br>70개 이상의 Jev 구현 데모를 좋아요와 도달률 등 소셜 지표로 순위화하고 원문 포스트 및 저장소 링크를 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-26 |
| [fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev) | 217 | 52 | TypeSafe Jev를 기반으로 구축된 다양한 오픈소스 프로젝트를 카테고리별로 모아 정리한 큐레이션 저장소다.<br>저장소에 새로 제출된 프로젝트 풀 리퀘스트의 적합성과 기준 충족 여부를 Jev 워크플로를 통해 심사한다.<br>단순한 프로젝트 목록 관리에 그치지 않고 jev-review-action을 연동해 제출된 프로젝트를 자동 심사하는 워크플로를 운영한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-24 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 140398 | 20628 | 다양한 LLM 기반 에이전트, 스킬, RAG 앱 템플릿과 예제 코드를 모아둔 오픈소스 카탈로그다.<br>README에 판단 지점 설명 없음<br>Claude, Gemini, GPT 등 여러 LLM을 활용한 다양한 도메인의 단일 및 멀티 에이전트 템플릿을 실행 가능한 예제로 제공한다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | 32239 | 3662 | Anthropic Claude Code의 AI 에이전트, 슬래시 커맨드, MCP 연동, 훅 설정을 검색하고 설치할 수 있는 CLI 도구이자 템플릿 모음이다.<br>README에 판단 지점 설명 없음<br>npx 명령어를 통해 웹 카탈로그(aitmpl.com)에 등록된 다양한 MCP, 커맨드, 훅 설정을 로컬 환경에 대화형 또는 플래그 기반으로 주입할 수 있다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |

80개 모두 보기 → [categories/catalog.md](categories/catalog.md)

<a id="cat-other"></a>
### 🧩 기타 (581)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87631 | 13369 | 뉴스 수집, 지정학적 위험 모니터링, 인프라 추적 정보를 통합 지도 및 패널로 시각화하는 실시간 글로벌 인텔리전스 대시보드다.<br>README에 판단 지점 설명 없음<br>globe.gl과 deck.gl 기반의 듀얼 지도 엔진을 지원하며, 단일 코드베이스에서 여러 변형 사이트와 Tauri 2 기반 데스크톱 앱을 제공한다. | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](#legend "선택지 중 하나를 고르게 합니다") [`noul`](#legend "예/아니오 확률을 묻습니다") | 2026-09-30 |
| [uezo/aiavatarkit](https://github.com/uezo/aiavatarkit) | 682 | 67 | 🥰 Building AI-based conversational avatars lightning fast ⚡️💬 | [✅](#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](#legend "예/아니오 확률을 묻습니다") [`score`](#legend "등급을 매기게 합니다") | 2026-09-27 |
| [dubinc/dub](https://github.com/dubinc/dub) | 24847 | 3312 | 단축 링크 관리, 전환 추적 및 제휴 프로그램을 구축하려는 마케팅 팀과 개발자를 위한 오픈소스 링크 어트리뷰션 플랫폼이다.<br>README에 판단 지점 설명 없음<br>Next.js, Prisma, Tinybird 기반의 오픈 코어 구조로, 핵심 코드는 AGPLv3 라이선스이며 엔터프라이즈 기능은 상용 라이선스로 구분된다. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [guidance-ai/guidance](https://github.com/guidance-ai/guidance) | 21782 | 1212 | A guidance language for controlling large language models. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-05-21 |
| [mizorewww/laya-mlx](https://github.com/mizorewww/laya-mlx) | 6658 | 523 | Native MLX runtime for Laya typed decision models — 7–14 ms short decisions on M3 Max. No text generation, PyTorch, or cloud API. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [Rizzo-AI-Academy/rizzo-flow](https://github.com/Rizzo-AI-Academy/rizzo-flow) | 772 | 52 | The open, local take on Jev: typed decisions from an LLM, without generating a single token | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [milind-soni/tiptour-macos](https://github.com/milind-soni/tiptour-macos) | 669 | 104 | Open-Source fast local computer use | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [receptron/laya](https://github.com/receptron/laya) | 664 | 60 | Run Laya, the open-source Jev-compatible System-1 decision model, from Node.js / TypeScript via ONNX Runtime | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [taeold/djev-run](https://github.com/taeold/djev-run) | 574 | 36 | — | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [TianyuCodings/JevHarness](https://github.com/TianyuCodings/JevHarness) | 418 | 17 | LLM-authored task-specific Jev harnesses with optional full-trajectory reward reflection and GEPA evolution. | [⏳](#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |

581개 모두 보기 → [categories/other.md](categories/other.md)

## 이 리포에 대해

- 매일 오전 6시(한국 시간)에 GitHub 검색, awesome 목록, 직접 넣어 둔 시드 목록에서 리포를 모읍니다. 검색으로만 걸린 리포는 설명·토픽·README에 TypeSafe Jev를 쓴다는 근거가 있어야 남깁니다. 이름만 같은 리포를 걸러 내기 위해서입니다.
- 한국어 요약은 README를 읽고 Gemini가 씁니다. 형식 검사를 통과한 요약만 싣습니다.
- 코드 확인은 GitHub 코드 검색으로 합니다. `api.typesafe.ai` · `systemone` · `@typesafe-ai/sdk` · `typesafe_sdk` 가운데 하나가 문서가 아닌 코드 파일에서 나오면 ✅를 붙입니다.
- 리포와 README의 저작권은 각 원저작자에게 있습니다. 요약은 소개하려고 옮긴 발췌입니다.
- 데이터 형식은 [radar-index/1](https://github.com/PineappleBingo/upgrade-scout/blob/main/skills/upgrade-scout/references/radar-format.md)입니다. upgrade-scout 플러그인이 이 데이터를 읽어 갑니다.
