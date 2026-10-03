# 🛡️ 가드레일·모더레이션 (263)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 155 | 13 | Pi 코딩 에이전트의 도구 호출과 출력 결과를 TypeSafe Jev API로 검사하고 제어하는 확장 도구다.<br>명령의 파괴성·데이터 유출·범위 초과·피해 수준과 출력의 비밀정보 누출·실패 유형을 noul, score, choice로 판단한다.<br>도구 실행 전 게이트 판단을 한 번의 요청(약 300ms)으로 처리하며, 오류 발생 시 실행을 차단하지 않는 fail-open 방식으로 동작한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](../README.md#legend "선택지 중 하나를 고르게 합니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") [`score`](../README.md#legend "등급을 매기게 합니다") | 2026-10-01 |
| [qkal/Canny](https://github.com/qkal/Canny) | 106 | 13 | Claude Code와 Codex CLI에서 코딩 에이전트가 검증 절차 없이 작업을 마쳤다고 주장하지 못하게 감시하는 훅 도구이다.<br>에이전트 메시지가 작업 완료를 주장하는지, 변경된 diff가 특정 규칙을 위반했는지 여부를 예/아니오 확률로 판단시킨다.<br>런타임 의존성이 없고, 원장의 사실 기록만 작업을 차단할 수 있으며 Jev의 판단 결과는 차단 없이 에이전트의 컨텍스트 조언으로만 사용된다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") | 2026-09-22 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | 89 | 7 | 웹페이지 내 DOM 요소를 탐색해 TypeSafe Jev 모델의 판단에 따라 광고 요소를 실시간으로 제거하는 크롬 확장 프로그램이다.<br>추출된 각 DOM 후보 요소의 태그, 클래스, 텍스트 요약 등을 바탕으로 유료 광고(paid advertisement)인지 여부를 noul 확률 질문으로 판단시킨다.<br>광고 후보 선별과 배치는 순수 코드로 처리하고 시맨틱 판별만 Jev에 일괄 요청하며, 설정된 임계 확률을 넘기면 애니메이션과 함께 요소를 제거한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") | 2026-09-17 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 56 | 8 | 다양한 코딩 에이전트의 도구 호출과 결과를 검사해 위험한 명령과 프롬프트 인젝션을 차단하는 보안 훅 라이브러리다.<br>도구 호출의 위험도(risk), 사용자 요청 부합 여부(user_requested), 신뢰할 수 없는 출처 기반 여부(from_untrusted)를 질의해 판단한다.<br>외부 의존성 없이 Claude Code, Cursor 등 여러 에이전트에 thin 어댑터로 연결되며 도구 실행 전후 및 인스트럭션 파일을 검사한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-02 |
| [cisco-ai-defense/skill-scanner](https://github.com/cisco-ai-defense/skill-scanner) | 2572 | 329 | AI 에이전트 스킬 파일에서 프롬프트 인젝션, 데이터 유출, 악성 코드 패턴을 탐지하는 보안 분석 도구다.<br>스킬 파일의 의미적 위험 요소나 악성 행위 포함 여부를 choice 또는 noul로 판정하도록 모델에 질문할 수 있다.<br>정적 분석(YARA-X), AST·데이터 흐름 분석, cel-go 기반 규칙 엔진, 선택적 LLM 판정기를 결합하여 다층으로 위험을 검사한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [firelex/jeff](https://github.com/firelex/jeff) | 1349 | 65 | Millisecond decisions, any domain: a 0.8B open "System 1" model that picks between your options with calibrated probabilities. One base, swappable LoRA adapters, on your own hardware. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [MillionSend/millionsend](https://github.com/MillionSend/millionsend) | 173 | 13 | AWS SES를 기반으로 자체 호스팅하거나 클라우드로 사용할 수 있는 Resend 호환 오픈소스 이메일 발송 플랫폼이다.<br>발송된 이메일 샘플에 대해 유해 콘텐츠 및 어뷰징 여부를 판단하도록 백그라운드에서 점수 채점(score)을 요청한다.<br>발송 지연을 막기 위해 SES 수락 후 백그라운드에서 비동기로 샘플을 채점하며, 셀프 호스트 환경에서는 기본 비활성화되어 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [TiraelSedai/ClubDoorman](https://github.com/TiraelSedai/ClubDoorman) | 69 | 11 | 텔레그램 대형 채팅방에서 캡차, 텍스트 필터, LLM을 결합해 스팸을 감지하고 차단하는 텔레그램 안티스팸 봇이다.<br>기존 ML 점수가 모호한 구간(-0.5~0.5)의 메시지가 스팸(spam)인지 정상(ham)인지와 해당 분류의 확신도를 판단시킨다.<br>Jev와 Luna 두 모델의 라벨 일치와 80% 이상 확신도를 모두 요구해 자동 데이터셋 추가 및 재학습 파이프라인의 오탐을 방지한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [merefield/discourse-chatbot](https://github.com/merefield/discourse-chatbot) | 84 | 20 | An AI bot with RAG capability for Topics, Chat &amp; Customer Support in Discourse, currently powered by OpenAI | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [zhuobichen/weflow-cli](https://github.com/zhuobichen/weflow-cli) | 75 | 32 | 本地优先的微信数据工具：聊天记录查询导出、公众号日报与个人知识库（MCP 兼容） | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) | 46 | 5 | Discord 서버 관리자가 스팸·피싱 링크를 차단하고 멤버 성향을 분석하기 위해 사용하는 Python 기반 모더레이션 봇이다.<br>실시간 메시지의 스팸 및 피싱 링크 여부와 유저 최근 메시지의 사기 위험·스팸·초보성·유해성·도움 수준 점수를 판별한다.<br>오탐된 메시지를 사면하면 안전 선례로 저장해 추후 검사에 반영하는 동적 학습 및 SQLite 기반 캐싱을 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) | 12 | 1 | pi 코딩 에이전트의 부작용 도구 호출이 사용자의 자연어 제약 조건에 어긋나는지 실행 전 점검·차단하는 런타임 제약 가드레일이다.<br>사용자 발화마다 기존 정책의 변경 상태(KEEP, LIFT, NARROW 등)와 작업 허가 신호 여부를 Jev에 분류시킨다.<br>Jev는 좁은 범위의 유한 선택지 분류만 수행하며, 규칙 상태를 세션 단위 구조적 op로 영속화해 컴팩션 후 재질의 없이 복원한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](../README.md#legend "선택지 중 하나를 고르게 합니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") | 2026-10-01 |
| [madisonrickert/jev-permission-gate](https://github.com/madisonrickert/jev-permission-gate) | 21 | 0 | Claude Code의 auto mode에서 도구 호출 권한을 내장 분류기 대신 빠르게 승인하거나 거부하는 플러그인이다.<br>요청 부합 여부, 위험도 검사, 조작 시도(steering)를 포함한 8가지 예/아니오 질문의 확률을 판단하게 한다.<br>확실한 호출만 직접 처리해 응답 속도를 2배 줄이고 애매한 호출이나 차단 목록 명령어는 내장 분류기로 넘긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [mizchi/jev-test-filter](https://github.com/mizchi/jev-test-filter) | 33 | 2 | Score every test against a git diff with Jev, and emit the filter arguments vitest, node:test, Playwright, cargo test and go test already understand | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [AskTheWay/dsh-jev-interceptor](https://github.com/AskTheWay/dsh-jev-interceptor) | 23 | 1 | ⚡ Millisecond System-1 judgement for every tool call in DeepSeek Harness — Jev-powered risk classification &amp; evidence-gated auto-approval. Fail-closed by construction. dsh 生态第一个 System-1 决策插件 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [pengchujin/ad-radar](https://github.com/pengchujin/ad-radar) | 23 | 4 | 开源浏览器插件：在小红书、微博、X、知乎上按关键词和博主折叠内容；用你自己的 Jev API key 识别广告、AI、军事、政治等话题。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [ilyamk/jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling) | 22 | 6 | JevMail - Self-hosted AI email classifier for Gmail powered by Jev. Create custom labels, organize your inbox, and filter spam with confidence and cost controls. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [caiovicentino/jev-risk-check-provider](https://github.com/caiovicentino/jev-risk-check-provider) | 9 | 1 | x402 결제 프로토콜에서 에이전트 결제 주체의 위협과 사기 위험도를 Jev로 채점하고 ES256 서명 증명을 발급하는 서비스다.<br>위협 프로필·제재 대상·자금세탁 패턴·피싱 도메인 여부를 noul로, 위험 유형을 choice로, 신뢰도를 0~4 rubric score로 질의한다.<br>결제 상태에 대해 원자적 Jev 질문들을 병렬 평가한 후 확정적 코드로 합성 점수를 산출하며, ES256 JWS 증명으로 검증 신뢰를 보장한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [harshithsunku/learn-jev-end-to-end](https://github.com/harshithsunku/learn-jev-end-to-end) | 14 | 3 | Learn Jev end to end: a free hands-on course. Build 13 AI agent use cases with a fast brain (Jev) and a slow brain (LLM). One OpenRouter key. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [0sparsh2/GAX](https://github.com/0sparsh2/GAX) | 8 | 0 | AI 에이전트의 셸 명령과 MCP 호출을 사전에 등록된 레지스트리와 권한 토큰 기반으로 제어·감사하는 거버넌스 실행 레이어다.<br>README에 판단 지점 설명 없음<br>임의 셸 실행을 차단하고 사전 등록된 명령만 허용하며 실행 전 capability 검증과 위험 수준 상한(danger ceiling)을 강제한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [amithgc/local-jev](https://github.com/amithgc/local-jev) | 13 | 2 |  A local, offline System One server compatible with TypeSafe's Jev API. It answers typed yes/no, category and score questions with small open models. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch) | 13 | 1 | Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [CodeAlive-AI/mastra-jev-moderation](https://github.com/CodeAlive-AI/mastra-jev-moderation) | 7 | 2 | Mastra 에이전트의 사용자 입력을 TypeSafe Jev API로 검사해 유해 메시지를 차단하는 단일 파일 기반 프로세서다.<br>마지막 입력 메시지가 정책상 차단 대상인지 여부(noul 확률)와 위반 카테고리(choice)를 한 번의 요청으로 판단시킨다.<br>텍스트 파싱 없이 확률값으로 직접 차단 여부를 결정하며, 타임아웃 및 오류 시 페일오픈과 60초 서킷 브레이커를 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [ironbee-ai/ironbee-express](https://github.com/ironbee-ai/ironbee-express) | 11 | 0 | The fastest, cheapest browser agent (with Jev), with deep reasoning when it matters | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [jerryfane/omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction) | 11 | 2 | Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [Dino-Kupinic/blackrose](https://github.com/Dino-Kupinic/blackrose) | 6 | 1 | LLM 입력과 출력 생성 전후로 보안 검사를 수행해 허용 여부를 판정해 주는 라이브러리다.<br>탈옥 시도 여부와 사람 검토 필요성을 noul로, 유해요소 심각도를 score로 측정해 최종 조치 결정을 묻는다.<br>검사 결과 확신도가 낮을 때 묵인하지 않고 기본값으로 review 상태를 반환하도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [andrelandgraf/safer-with-jev](https://github.com/andrelandgraf/safer-with-jev) | 5 | 1 | 요청 본문을 검사하여 프롬프트 인젝션이나 안전하지 않은 응답을 차단하고 통과 시 업스트림으로 전달하는 Neon Function 기반 프록시다.<br>요청 본문이 프롬프트 인젝션인지, 응답 텍스트가 안전하지 않은지, 또는 전달받은 텍스트가 양호한지 등을 판단한다.<br>판단 결과에 따라 review 또는 block 시 차단(403)하고 pass 시 지정한 target URL로 요청 바이트를 그대로 포워딩한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [jev-sec/jev-ids](https://github.com/jev-sec/jev-ids) | 5 | 1 | 네트워크 플로우 데이터와 라벨 예시를 보고 침입 여부와 공격 유형을 판별하는 보안 탐지 도구다.<br>네트워크 플로우가 공격인지 여부와 공격 카테고리가 5개 선택지 중 무엇인지 묻는다.<br>텍스트 생성 없이 확률과 선택지 형식으로 직접 판별해 LLM보다 훨씬 빠르고 저렴하다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [qs-lll/twitter-jev-guard](https://github.com/qs-lll/twitter-jev-guard) | 9 | 2 | 使用 TypeSafe Jev 在 X/Twitter 时间线上识别低质量、垃圾和广告帖子，并在文字区域显示醒目的半透明水印。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [harshil1712/slidepilot](https://github.com/harshil1712/slidepilot) | 8 | 0 | Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [ranjan2829/AskJev](https://github.com/ranjan2829/AskJev) | 8 | 3 | AskJev — Jev autopilot for any website + guard on irreversible clicks (TypeSafe System One, not Claude) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [AkashPriyadarshii/jev-git](https://github.com/AkashPriyadarshii/jev-git) | 4 | 0 | 개발자가 커밋 및 푸시 시점에 스테이징된 git diff의 보안 문제를 빠르게 검사할 수 있도록 돕는 Rust 기반 Git 확장 도구다.<br>Jev의 noul 결정을 활용해 스테이징된 diff에 노출된 시크릿, 프롬프트 주입 공격, 파괴적 명령어가 포함되어 있는지 여부를 판단한다.<br>정규식 검사의 한계와 LLM의 지연 시간 문제를 피하기 위해 단일 Rust 바이너리와 Jev API를 통해 100ms 미만 지연 시간을 목표로 구현했다. | [❌](../README.md#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") | 2026-09-30 |
| [fazlerocks/jev-adblock](https://github.com/fazlerocks/jev-adblock) | 7 | 0 | Open-source AI ad blocker for Chrome. No filter lists: TypeSafe AI's Jev model decides what is an ad. Bring your own key. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [ItisShikhar/gg-friggin-ez](https://github.com/ItisShikhar/gg-friggin-ez) | 7 | 0 | Fast, drop-in multilingual profanity and toxicity screener for Node.js, powered by System 1 models like TypeSafe AI Jev and Laya. Catches leetspeak, character spacing, and romanized profanity across languages including Kannada, Telugu, Tamil, Hindi, and Bengali. ~50-500ms latency. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [Nyarlathoteppppp/pi-jev-context](https://github.com/Nyarlathoteppppp/pi-jev-context) | 7 | 0 | Model performance first. Token savings second. A Pi extension with freshness-aware read dedupe, Jev log filtering, and searchable verbatim recall. Keeps existing message history intact. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [TannerMidd/SpecPi](https://github.com/TannerMidd/SpecPi) | 11 | 0 | Pi 코딩 에이전트의 작업 범위와 도구 권한, 명령 실행을 안전하게 제어하는 하네스 설정이다.<br>에이전트가 실행하려는 셸 명령어가 시스템에 위험한지 또는 안전한지를 판단시킨다.<br>명령 실행 전 로컬 분류기나 이전 호스팅 모델(Jev)로 셸 위험도를 채점해 위험 명령을 차단하거나 확인을 거친다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [0xmdinc/jev-medical-bench](https://github.com/0xmdinc/jev-medical-bench) | 6 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [h0j5bz0adh0-stack/jev-pilot](https://github.com/h0j5bz0adh0-stack/jev-pilot) | 6 | 0 | Fast System-1 Decision, Arbitration &amp; Safety Engine for Autonomous AI Agents (Powered by TypeSafe Jev) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [SoniaMehta14/paved-gate](https://github.com/SoniaMehta14/paved-gate) | 3 | 0 | 프론티어 LLM 호출 전에 인바운드 요청의 안전성, 라우팅, 필요성을 빠르게 검사하고 차단 또는 처리하는 수집 게이트웨어 오픈소스 라이브러리다.<br>Jev 모델을 통해 intent(choice, 3개 라우트), risk(score, 1-5점 루브릭), sensitive(noul, PII/PHI 여부) 세 가지를 판단시킨다.<br>1회 호출로 3가지 타입 질의를 약 100ms 내에 병렬 처리하며, 결정마다 정책 해시와 원시 점수를 포함한 구조화된 감사 로그(JSONL)를 남긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [Arpit-Khandelwal/jev-linkedin-slop-filter](https://github.com/Arpit-Khandelwal/jev-linkedin-slop-filter) | 5 | 2 | Slams a BAIT, CORP or BRAG stamp onto LinkedIn engagement-bait, judged live by Jev (TypeSafe System One). | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [EugeneBoondock/jevsql](https://github.com/EugeneBoondock/jevsql) | 5 | 1 | SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [jiangkoumo/ego-decision-layer](https://github.com/jiangkoumo/ego-decision-layer) | 5 | 0 | Pluggable decision layer for the ego lite browser: one System One (Jev) call per step replaces the per-step LLM turn, and the backend can be swapped for a local OpenAI-compatible model. Fail-closed execution guards. The measured one — raw bench data, 16 suites, changelog with corrections. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [jkrup/jeveryword](https://github.com/jkrup/jeveryword) | 5 | 0 | Text extraction with Jev: field extraction, PII detection and exact quotes, built on TypeSafe's Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [MithrilMan/your-signal](https://github.com/MithrilMan/your-signal) | 5 | 1 | Open-source BYOK Chrome extension for personal, reversible X timeline filters. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [mohi-devhub/SentinelLM](https://github.com/mohi-devhub/SentinelLM) | 5 | 0 | A FastAPI middleware that intercepts LLM requests and responses in real time, scoring them for prompt injection, PII leakage, toxicity, hallucination, and relevance.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-27 |
| [Reindeer-AI/pi-jev-guard](https://github.com/Reindeer-AI/pi-jev-guard) | 5 | 0 | Check Pi code edits against repository Markdown rules with TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [smthdagg/XShield](https://github.com/smthdagg/XShield) | 5 | 0 | XShield — Fight Spam, Scams, Bots, and Adult-Content Accounts on X.  Automatically detect, collect, review, and safely block malicious accounts with a powerful rule engine and human-like execution strategy. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [ziyacivan/jev-mail-filter](https://github.com/ziyacivan/jev-mail-filter) | 5 | 0 | Gmail filters written in plain English, judged by Jev (TypeSafe) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [0xshikhar/jev-fuse](https://github.com/0xshikhar/jev-fuse) | 2 | 0 | 0xshikhar/jev-fuse는 AI 에이전트와 TypeSafe Jev 모델 사이에서 확률적 판단 결과를 정책 기반의 결정적 동작으로 바꿔주는 리버스 프록시다.<br>명령어나 요청의 위험도 및 적절성을 TypeSafe Jev에 질의해 확률 값을 얻은 뒤 정책에 맞춰 허용, 차단, 사용자 확인으로 구분하도록 돕는다.<br>셸 AST 구문 분석 기반의 거부 및 허용 목록 검사와 동일 요청을 묶는 싱글플라이트 처리 및 SQLite 기반 감사 기록 기능을 갖추고 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-24 |
| [bitnovus/jev-spam-eval](https://github.com/bitnovus/jev-spam-eval) | 2 | 1 | TypeSafe Jev의 noul 질문을 활용해 이메일 스팸 및 피싱 여부를 제로샷으로 탐지하고 TF-IDF 베이스라인과 비교 평가하는 프로젝트다.<br>작성된 카테고리 정의와 이메일 맥락을 기반으로 해당 메일이 스팸이나 피싱인지 여부를 noul(예/아니오 확률)로 묻는다.<br>사전 파인튜닝이나 라벨 예시 없이 카테고리 정의만 사용해 5,733건의 테스트셋에서 98.64% 정확도를 기록하며 TF-IDF와 비교 검증했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [FrancoisChastel/skill-scanner](https://github.com/FrancoisChastel/skill-scanner) | 2 | 0 | 코딩 에이전트가 스킬을 설치하기 전에 프롬프트 주입이나 숨겨진 악성 코드를 오프라인 정적 분석으로 탐지하고 설치를 차단하는 보안 도구다.<br>정적 분석으로 탐지된 잠재적 보안 위험 결과가 실제로 유효한지 의심하거나 확증하도록 판단을 요청한다.<br>외부 런타임 의존성 없이 로컬에서 동작하며 에이전트 환경의 설치 경로에 훅으로 개입해 위험한 스킬을 차단한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [RzMY/BiliBili-Filter](https://github.com/RzMY/BiliBili-Filter) | 2 | 0 | 네트워크 프록시 도구 Quantumult X에서 TypeSafe Jev를 연동해 비리비리 추천 영상 목록을 걸러내는 재작성 스크립트다.<br>영상의 제목과 소개글, 태그 같은 메타데이터를 넘겨 저품질 콘텐츠나 마케팅성 영상을 추천 목록에서 제외할지 판단한다.<br>JSON 응답 형태의 추천 API만 지원하며 gRPC나 검색 결과 같은 프로토콜 및 화면은 처리하지 못한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [chengyongru/notiq](https://github.com/chengyongru/notiq) | 4 | 0 | Native Android notification filtering with natural-language rules, powered by Jev or self-hosted FastJev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [DataGobes/jev-demos](https://github.com/DataGobes/jev-demos) | 4 | 0 | Small, honest demos of TypeSafe's Jev inside tools data engineers already use | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [devjothish/laya-forge](https://github.com/devjothish/laya-forge) | 4 | 1 | Fine-tune, calibrate and gate Laya (open-weights System One decision model) on your own decisions, then guard production agents with it | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [godspede/construct-auto-classifier](https://github.com/godspede/construct-auto-classifier) | 4 | 0 | Effect-based safety gate for AI coding agents' shell commands (OpenCode, Antigravity): fast structural rules, then TypeSafe's Jev or a chat model judges what a command does. Certified with Jev at zero dangerous commands allowed. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [harrymunro/jev-laya-benchmark](https://github.com/harrymunro/jev-laya-benchmark) | 4 | 0 | Speed and accuracy benchmark: TypeSafe's Jev API vs the local Laya MLX typed-decision model on synthetic tasks | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [ItsOdeLeo/JEV-MLX](https://github.com/ItsOdeLeo/JEV-MLX) | 4 | 1 | JEV-inspired local decisions for Apple Silicon, powered by MLX. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-20 |
| [lgy1027/jevshield](https://github.com/lgy1027/jevshield) | 4 | 0 | Sub-100ms security gate for AI agent tool calls, powered by TypeSafe's Jev (System-1) decision model. Single-request Choice/Noul/Score evaluation, dual-factor blocking matrix, calibrated-confidence routing, fail-closed parsing, zero-config local fallback. LangChain-ready. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | 4 | 0 | Natural-language row filtering for MySQL, powered by TypeSafe Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [Muriel-Gasparini/ban4life](https://github.com/Muriel-Gasparini/ban4life) | 4 | 1 | Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [ClemensSchartmueller/jev-guard](https://github.com/ClemensSchartmueller/jev-guard) | 3 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [coo-quack/jev-pii-checker](https://github.com/coo-quack/jev-pii-checker) | 3 | 2 | CLI that finds PII in text with TypeSafe Jev: presence, sensitivity, and located spans | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [davertor/jev-slop-guard](https://github.com/davertor/jev-slop-guard) | 3 | 0 | Jev Slop Guard — a Chrome extension that scores and stamps AI slop on your X and LinkedIn feeds as you scroll | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [littlewindy123/jev-bili-filter](https://github.com/littlewindy123/jev-bili-filter) | 3 | 0 | 弹幕照开，噪音别来。用 JEV 为 B 站评论和弹幕降噪：剧透、反串黑、广告、基本盘一键过滤，想屏蔽什么，再写一句话。Chrome 插件，原页生效，MIT 开源。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [noelzappy/tripwire](https://github.com/noelzappy/tripwire) | 3 | 0 | Judge every LLM response before the user sees it. AI SDK middleware and OpenAI-compatible proxy. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [rorshopping/jev-browser-local](https://github.com/rorshopping/jev-browser-local) | 3 | 1 | Run jev-browser on a fully local JEV-style decision engine (no cloud API). Warm-browser fork, VRAM guard, measured benchmarks, run traces. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [SamanPandey-in/jevrail](https://github.com/SamanPandey-in/jevrail) | 3 | 0 | Jev powered pre-execution guard for terminal coding agents | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [shikaizhong-design/ego-jev-ultrafast](https://github.com/shikaizhong-design/ego-jev-ultrafast) | 3 | 1 | Jev drives your Ego Lite browser: one typed-choice request per step. Single-file, zero-dependency port of browser-use/jev-ultrafast with multi-model benchmarks and extra guardrails. Unofficial. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [bismawy/pi-jev-eye](https://github.com/bismawy/pi-jev-eye) | 1 | 0 | Pi 코딩 에이전트 환경에서 파괴적 명령어와 비밀키 유출을 막고 코드 품질을 검증하는 감독 도구다.<br>작성된 코드 변경분에 미완성 TODO나 대충 짠 스텁 코드가 있는지, 사용자의 요구사항과 일치하는지 판단한다.<br>정규식 검사와 테스트 실행 확인을 거친 10줄 이상의 코드 차이점만 선별해 Jev API로 검사하며 실패 시 기본 통과를 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [const-ahmed/unschema](https://github.com/const-ahmed/unschema) | 1 | 0 | Zod 같은 스키마 라이브러리 대신 자연어 규칙과 Jev 모델을 사용해 입력값을 검증하는 프로필 폼 웹 애플리케이션이다.<br>이메일 형식 유효성, 연령 범위(18~120세), 사람 이름 여부, 필드 간 일치 여부, 자기소개 글의 5단계 등급 평가를 판단시킨다.<br>입력 중 디바운스 검증과 제출 시 전체 필드 재검증을 수행하며, 사용자 입력을 지시어가 아닌 데이터로만 처리하도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [snapif/snapif](https://github.com/snapif/snapif) | 1 | 0 | 도구 호출을 평가해 자동 승인, 검토, 거부 중 하나로 판단하는 러스트 기반 CLI 도구다.<br>도구 호출의 위해 유형과 신뢰도를 채점해 호출을 허용할지, 사람 검토를 거칠지, 차단할지 판단한다.<br>Claude Code의 PreToolUse 훅으로 연동할 수 있으며, 거부 결정 전에 섀도 모드로 판정을 모니터링할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [0xArx/jevegis](https://github.com/0xArx/jevegis) | 2 | 0 | Guardrails for LLM apps in one API call. Prompt injection, jailbreaks, leaks, unsafe content. Built on TypeSafe Jev. MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [0xwhrari/grok-jev-guard](https://github.com/0xwhrari/grok-jev-guard) | 2 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [abhixhek/feedwall](https://github.com/abhixhek/feedwall) | 2 | 0 | Your feed, your rules, in plain English. A browser extension that filters X, YouTube, Reddit, LinkedIn and Hacker News with topics you write yourself. Bring your own Jev key. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [CarlosCaoLopez/HACKSPAIN-2026](https://github.com/CarlosCaoLopez/HACKSPAIN-2026) | 2 | 1 | Taiafox filters a hundred incoming messages down to the three that matter, coordinates responders by voice, and re-plans in under a second when the fire turns. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [CogFlux/opencode-jev-guard](https://github.com/CogFlux/opencode-jev-guard) | 2 | 0 | OpenCode 2 plugin that sends every shell command (local or via FarHand) to TypeSafe's Jev and asks you first when it leaves files outside the project, installs software globally, changes global settings, is harmful or exposes private data | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [copyleftdev/jev-labs](https://github.com/copyleftdev/jev-labs) | 2 | 0 | Never confidently wrong: a TLA+-verified consensus kernel around TypeSafe's Jev, run through 1,680 chaos-tested pharmacy decisions with zero wrong verdicts. Film, code, and every captured call. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [edwardyen724-g/jev-compactor](https://github.com/edwardyen724-g/jev-compactor) | 2 | 0 | Context compaction and safety gating for AI agents via TypeSafe Jev: keeps messages verbatim, no summarization. OpenAI, Anthropic, LangChain, CLI, MCP. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [funkadelic/ha-gutcheck](https://github.com/funkadelic/ha-gutcheck) | 2 | 0 | Home Assistant integration that uses TypeSafe AI's Jev to spot problems and suggest cleanups in your install, and asks before changing anything | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [ibrahemid/jevprune](https://github.com/ibrahemid/jevprune) | 2 | 0 | Filter command output for coding agents using a task description. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [Karthick-Ramachandran/jevfilter](https://github.com/Karthick-Ramachandran/jevfilter) | 2 | 0 | Turn a user's search sentence into filters your API already accepts, powered by Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [kongyo2/similarity-ts-jev](https://github.com/kongyo2/similarity-ts-jev) | 2 | 1 | similarity-ts and fallow duplicate detection for TypeScript, filtered by TypeSafe's Jev down to the pairs worth refactoring | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [opaielsheikh/typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard) | 2 | 0 | Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [PenDraga/paperless-jev](https://github.com/PenDraga/paperless-jev) | 2 | 0 | Klassifiziert den Paperless-NGX-Posteingang mit TypeSafe Jev - Docker-Dienst mit Web-UI, Webhook/Polling und Review-Queue | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [PhilippElhaus/Codex-Jev](https://github.com/PhilippElhaus/Codex-Jev) | 2 | 1 | VS Code Codex Plugin for Jev-gated tool output integration | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [satyawikananda/gits](https://github.com/satyawikananda/gits) | 2 | 1 | Gits is a browser extension powered by Jev to search the leads data on the Google Maps | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [theSekyi/jevusecases](https://github.com/theSekyi/jevusecases) | 2 | 1 | What people are actually shipping with Jev — real builds, tracked as they ship. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [Tom-R-Main/Footwork](https://github.com/Tom-R-Main/Footwork) | 2 | 1 | A verified browser agent: a cheap Jev guard (evidence-checked completions, a destructive gate) in front of any LLM browser driver, with Jev taking the mechanical steps in dual mode. Built on browser-use; every number pre-registered and measured. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [XYenon/ajevt-browser](https://github.com/XYenon/ajevt-browser) | 2 | 1 | A bounded Jev System-1 browser tool for Pi, OpenCode V2, Amp, and MCP, powered by agent-browser | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [48Nauts-Operator/skill-dash](https://github.com/48Nauts-Operator/skill-dash) | 1 | 0 | Skill Dash uses Jev to judge Claude Code and Codex skills and plugins: usefulness, redundancy, clarity, duplicates, safety. Local dashboard plus the corpus pipeline behind whichskills.dev. MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [4rays/profanity-checker](https://github.com/4rays/profanity-checker) | 1 | 0 | Cloudflare Worker to check for profanity using TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [allebee/jevgrep](https://github.com/allebee/jevgrep) | 1 | 0 | CLI that filters logs and text by meaning using plain-English yes/no questions and Jev probabilities. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [bojansandhaus/jev-home-assistant-sentinel](https://github.com/bojansandhaus/jev-home-assistant-sentinel) | 1 | 0 | A safety boundary for AI-assisted Home Assistant decisions, with explicit policy checks and deterministic state verification. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [CeamKrier/semantic-firewall](https://github.com/CeamKrier/semantic-firewall) | 1 | 0 | Semantic firewall for LLM agents: tool calls gated by TypeSafe Jev (System One decision model via OpenRouter) + deterministic policy. PoC with corpus, stability eval, baseline, results. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [Computational-social-science/JevRSI](https://github.com/Computational-social-science/JevRSI) | 1 | 0 | Reproducing the RSI-Jev self-improvement curve on a Qwen3-0.6B backbone | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [DolphinMiner/jev-rss](https://github.com/DolphinMiner/jev-rss) | 1 | 0 | A local-first RSS reader with Jev-powered semantic screening. Follow what matters, inspect every judgment, and keep control of your reading. English / 简体中文. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [h1code2/jev-x-blocker](https://github.com/h1code2/jev-x-blocker) | 1 | 1 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [HuangWeiLong-dot/Sense](https://github.com/HuangWeiLong-dot/Sense) | 1 | 0 | A Emotion Assessment and Advice Tool  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [JGalego/Jevs-Garage](https://github.com/JGalego/Jevs-Garage) | 1 | 1 | A garage full of tiny experiments for building critical systems with System One &amp; Jev 🔧🧠⚡ | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [JH3lou/GridCue](https://github.com/JH3lou/GridCue) | 1 | 0 | Ask a dense data grid in plain language; get a previewed, undoable view change. Headless TypeScript, React, TanStack Table, shadcn. MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [jubarthi/Super_Gpt](https://github.com/jubarthi/Super_Gpt) | 1 | 0 | SUPER GPT — Desktop control center with Jev Intelligence powered by TypeSafe | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [kurihada/pi-jev-permit](https://github.com/kurihada/pi-jev-permit) | 1 | 0 | A Jev (TypeSafe System One) permission gate for the Pi coding agent: judges every bash / write / edit call before it runs | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [makefinks/jev-feed-filter](https://github.com/makefinks/jev-feed-filter) | 1 | 0 | Smart, dynamic AI filtering for X and YouTube feeds using Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [naturalmoods/epeszuro](https://github.com/naturalmoods/epeszuro) | 1 | 0 | Chrome-bővítmény: elrejti a gyűlölködő YouTube-hozzászólásokat és élőchat-üzeneteket a TypeSafe Jev modelljével. MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [NorbertBodziony/guard-jev](https://github.com/NorbertBodziony/guard-jev) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [ohernandezdev/jevmod](https://github.com/ohernandezdev/jevmod) | 1 | 1 | Moderation for communities and apps, powered by Jev (TypeSafe): probabilities per category, thresholds you own. Discord/Telegram/Reddit bots, CLI, Python, npm, HTTP API, MCP. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [pjrpjr/qingliu](https://github.com/pjrpjr/qingliu) | 1 | 1 | X 时间线清洁工 · FeedSieve(MIT) 衍生 · 带实测标定的 AI 判定层：误杀 0.7%，还能抓词库认不出的 47% | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [rafaelleaomed/smartvitae](https://github.com/rafaelleaomed/smartvitae) | 1 | 0 | Plataforma de Adequação Curricular Factual e Alinhamento de Carreira com Zero Alucinação de IA. Combinando TypeSafe JEV (Julgamento cognitivo rápido System One) e Claude 3.5 Sonnet para submeter candidaturas a testes de estresse implacáveis, auditar evidências documentais e eliminar a invenção de qualificações. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [rudra72r/jev-guard](https://github.com/rudra72r/jev-guard) | 1 | 0 | Fast, cheap guardrails for LLM apps, powered by TypeSafe's Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [serejkaaa512/jev-content-guard-ext](https://github.com/serejkaaa512/jev-content-guard-ext) | 1 | 0 | Jev AI content guard Chrome extension | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [taman-spirit/guardrail-chatbot-jev](https://github.com/taman-spirit/guardrail-chatbot-jev) | 1 | 0 | Vietnam - Content safety guardrails for AI chatbots: input, output and conversation checks over one policy file with Jev  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [vkpdeveloper/mrsecret](https://github.com/vkpdeveloper/mrsecret) | 1 | 0 | Mr. Secret — blurs secrets &amp; PII on any page using TypeSafe AI Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [who/jevq](https://github.com/who/jevq) | 1 | 0 | A Jev-based filter sidecar for jq | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [yelkhanyergali-sys/jev-guard](https://github.com/yelkhanyergali-sys/jev-guard) | 1 | 0 | PI Mono extension for Jev (TypeSafe AI): in-flight terminal pruning (prompt-cache safe) and surgical diff guard | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [yldst-dev/fuckyou-spam-rs](https://github.com/yldst-dev/fuckyou-spam-rs) | 1 | 0 | 짜증나는 스팸성 메시지를 LLM을 활용해 삭제하는 텔레그램 봇 코드의 rust 재작성판. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [youshinh/md-memo](https://github.com/youshinh/md-memo) | 1 | 1 | A zero-latency, local-first Markdown scratchpad with offline AI (Ollama/vLLM) and autonomous IME control. Built with Go and OS-native webviews. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [arcveildev/arcveil](https://github.com/arcveildev/arcveil) | 0 | 0 | Arc 네트워크에서 에이전트가 위임 한도를 노출하지 않고도 규정 내에서 지출했음을 영수증으로 증명하고 검증하는 프레임워크다.<br>정량적 임계치로 정의하기 어려운 의미론적 조항에 에이전트의 행위가 부합하는지 여부를 판단시킨다.<br>브라우저에서 직접 영수증을 검증하며 packages/gate 워커를 통해 의미론적 정책 평가와 온체인 증명을 결합했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [arnavsurve/g8](https://github.com/arnavsurve/g8) | 0 | 0 | Claude Code의 도구 호출 실행 전에 자연어 정책을 검사해 위반 시 차단하는 게이트 훅이다.<br>실행하려는 도구 호출과 대화 맥락이 사전에 정의한 JSON 정책 목록 중 어떤 것을 위반하는지 분류해 판별하도록 묻는다.<br>사전 승인 창 대신 약 0.4초 만에 판별해 차단하며, 분류기 연결 실패 시 기본적으로 통과하도록 동작한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [BasmaAbouzied0/jev-secret-guard](https://github.com/BasmaAbouzied0/jev-secret-guard) | 0 | 1 | Claude Code 환경에서 AI 에이전트가 코드나 명령어로 시크릿을 작성하거나 유출하지 않도록 차단하는 PreToolUse 훅이다.<br>마스킹된 알 수 없는 고엔트로피 문자열과 주변 문맥을 보고 해당 값이 시크릿인지 여부를 확률 점수로 판단하도록 한다.<br>알려진 키는 로컬에서 차단하고 알 수 없는 값은 마스킹해 메타데이터만 Jev로 전송하며, 불확실하거나 장애 발생 시 사용자에게 확인을 요청한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [choiyounggi/jev-gate](https://github.com/choiyounggi/jev-gate) | 0 | 0 | Claude Code의 위험 셸 명령 실행과 근거 없는 완료 선언을 검사해 차단하는 로컬 판단 모델 보조 플러그인이다.<br>셸 명령의 위험도와 비가역성 여부, 에이전트 완료 보고의 종료 주장과 증거 포함 확률을 묻는다.<br>텍스트를 생성하지 않고 점수만 반환하며, 모델은 판단만 내리고 최종 결정은 하드 규칙과 사람이 수행한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [cyu60/floodgate](https://github.com/cyu60/floodgate) | 0 | 0 | 사용자가 설정한 현재 작업에 방해되는 웹페이지를 브라우저 탐색 시 차단하는 오픈 판별 모델 및 크롬 확장 프로그램<br>접속하려는 웹페이지가 사용자가 지정한 작업에 방해되는지 여부를 noul(예/아니오 확률)로 판별<br>River API로 오픈 모델을 학습시켜 Jev 호환 API를 구현하고, 사용자 브라우징 기록으로 개인화 모델을 미세조정함 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [gbesse/jev-agribalyse-claim-check](https://github.com/gbesse/jev-agribalyse-claim-check) | 0 | 0 | 식품 환경성 표시가 인용된 프랑스 AGRIBALYSE 데이터로 뒷받침되는지 검증해 검토 범주로 분류하는 도구다.<br>환경성 주장이 인용된 AGRIBALYSE 참조 데이터에 부합하는지 따져 étayée나 à_nuancer 같은 범주로 판단하게 묻는다.<br>규칙 기반 검증을 먼저 거쳐 불필요한 모델 호출을 막고 확신도가 낮으면 사람 검토 플래그를 붙인다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [gbesse/jev-georisques-preflight](https://github.com/gbesse/jev-georisques-preflight) | 0 | 0 | 프랑스 공공 지리 위험 데이터를 바탕으로 프로젝트 사전 검토 시 주의할 위험 요소를 분류하는 도구다.<br>출처가 확보된 자연 및 기술적 위험 데이터를 바탕으로 해당 사안이 유의미한 위험인지 사람이 직접 검토해야 하는지 분류한다.<br>결정론적 비즈니스 규칙을 먼저 적용해 불필요한 모델 호출을 막고 확신도가 낮을 때는 사람 검토 플래그를 남기도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [gbesse/jev-sentinel](https://github.com/gbesse/jev-sentinel) | 0 | 0 | AI 애플리케이션의 로그, 추적 내역, 산출물에서 카나리 토큰의 누출 여부를 감지하고 마스킹하는 보안 검사 도구다.<br>README에 판단 지점 설명이 없다.<br>원시 문자열 외에도 Base64나 URL 인코딩 등 다양한 변환 패턴을 탐색하며, 실제 누출된 카나리 대신 마스킹된 발췌본만 보고서에 남긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [pateti-hub/laya-browser-guard](https://github.com/pateti-hub/laya-browser-guard) | 0 | 0 | 개발자와 보안 연구자가 웹사이트의 브라우저 단 공격 표면과 보안 취약 요소를 점검할 수 있게 돕는 크롬 확장 프로그램이다.<br>수집된 관측 데이터가 실제 보안 우려인지와 수동 검토 필요 여부, 주 보안 분류, 증거 품질, 조사 우선순위 점수를 판단한다.<br>규칙 기반 검사를 기본으로 두고 로컬 ONNX 모델과 FastAPI 기반 Jev 게이트웨이를 선택적으로 결합해 분석을 수행한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [paulhugel/haio-gats](https://github.com/paulhugel/haio-gats) | 0 | 0 | 인간 감독 하의 AI 에이전트 운영 거버넌스와 감사 추적 요건을 정의하는 공개 표준 사양 및 스키마 저장소다.<br>README에 판단 지점 설명 없음<br>TypeSafe Jev 등 모델 출력을 권한 부여 근거가 아닌 단순 자문 증거로 취급하며, 인간 승인과 독립적 감사 추적 분리를 규정한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [prestonkakukdev/Jev-Defense](https://github.com/prestonkakukdev/Jev-Defense) | 0 | 0 | AI 에이전트의 위험한 도구 호출 차단, 프롬프트 주입 감지 및 스킬 검사를 수행하는 TypeSafe Jev 기반 보안 가드레일 도구다.<br>명령어가 데이터를 삭제하거나 덮어쓰는지, 외부로 데이터를 전송하는지, 사용자가 이를 명시적으로 요청했는지 등의 예/아니오 확률을 noul로 묻는다.<br>Jev가 최종 결정을 내리지 않고 좁은 예/아니오 확률만 계산하며, 코드 하드룰과 rulebook.py의 명시적 조건문으로 allow·ask·block을 결정한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [tecanmol/JevGaurd](https://github.com/tecanmol/JevGaurd) | 0 | 0 | 웹페이지 내 광고성 요소를 찾아 Jev 분류 결과에 따라 제거하거나 강조 표시해 주는 크로미엄 기반 브라우저 확장 프로그램이다.<br>웹페이지에서 추출한 후보 요소 설명이 광고에 해당하는지 여부 및 해당 확률(probability)을 판별하도록 질의한다.<br>전체 페이지 대신 후보 요소 요약 설명만 최대 30개씩 배치로 묶어 Jev에 전송하며, 스크롤 등 동적 로딩 요소를 지속적으로 탐지한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [0x963D/last-exit](https://github.com/0x963D/last-exit) | 0 | 0 | A cyberpunk border encounter powered by TypeSafe Jev. Bluff the guard. Inspect the receipts. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [5hux1n/WcSy](https://github.com/5hux1n/WcSy) | 0 | 0 | 半成品，仅用于记录开发进度：微信 iOS JEV 决策咨询插件，当前 0.2.25 实验快照，尚未完成真机验收。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [abdulnazeer-ai/gmail-ai-spam](https://github.com/abdulnazeer-ai/gmail-ai-spam) | 0 | 0 | AI-powered Gmail spam detector using Jev's Structured Decision Model, Streamlit, and Gmail API. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [Abhieu/excelpilot](https://github.com/Abhieu/excelpilot) | 0 | 0 | AI-assisted Excel operations engine: structured planning, JEV decision support, deterministic policy and execution, verification, and an audit trail. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [Abhishekvrshny/jevexec](https://github.com/Abhishekvrshny/jevexec) | 0 | 0 | Judicious Execution Verifier &amp; EXECutor for coding agents | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [acarbone/PII-Detector](https://github.com/acarbone/PII-Detector) | 0 | 0 | PII Detector PoC using TypeSafe AI model Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [Achenyiyi/BiliWarmBot](https://github.com/Achenyiyi/BiliWarmBot) | 0 | 0 | 基于 Bilibili API、Jev 与 DeepSeek 的 AI 情感陪伴评论机器人：自动发现情感类视频，识别需要支持的评论，生成温暖回复并跟踪多轮对话。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [adelvillar1/dev-decisions](https://github.com/adelvillar1/dev-decisions) | 0 | 0 | Decision-model gates for git + ZCode workflows: scan secrets/PII, classify diffs with Jev/GLiNER/Decide, and log every decision to JSONL for calibration | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [adrocic/Jad-Block](https://github.com/adrocic/Jad-Block) | 0 | 0 | Blocks the ads filter lists can't see. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [affirmitv/bitrate-advisor](https://github.com/affirmitv/bitrate-advisor) | 0 | 0 | Live-stream encoder settings from telemetry and history: TypeSafe's Jev decision model inside a deterministic safety envelope. Deno, Node, edge runtimes. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [agaches/jev-test](https://github.com/agaches/jev-test) | 0 | 0 | Hook PreToolUse Claude Code adossé à Jev : décision de sécurité typée, pré-filtre anti-exfiltration local, repli regex | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [aidai524/float](https://github.com/aidai524/float) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [akaushik-sudo/duckdb-jev](https://github.com/akaushik-sudo/duckdb-jev) | 0 | 0 | Private fork of judoaseeta/duckdb-jev (MIT), adapted for Sentrinox prompt intent | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [amalvarezme/mario-jev](https://github.com/amalvarezme/mario-jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [AnaOnTram/JBCA](https://github.com/AnaOnTram/JBCA) | 0 | 0 | Jev-Based Collision Avoidance | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [auggie246/dsh-jev](https://github.com/auggie246/dsh-jev) | 0 | 0 | Jev in Deepseek Harness | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [avinashsuresh1/semantic-control-system](https://github.com/avinashsuresh1/semantic-control-system) | 0 | 0 | A natural language control system for hardware control | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [Awesome-llms-labs/awesome-jev](https://github.com/Awesome-llms-labs/awesome-jev) | 0 | 1 | Awesome list for Jev — TypeSafe AI's decision-only System One model: typed decisions (Choice, Score, Noul) with calibrated probabilities. Guides, recipes, runnable examples, honest benchmarks, community projects. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [benikigai/JEVgotiator](https://github.com/benikigai/JEVgotiator) | 0 | 0 | AI Collective JEVathon Hackathon project | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [bioduds/METEORITE](https://github.com/bioduds/METEORITE) | 0 | 0 | Meta-Analysis and Experimental Theory-Oriented Research, Intelligence and Testing Engine. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [BrunoMS0/Blind-Spot](https://github.com/BrunoMS0/Blind-Spot) | 0 | 0 | Turn-based tactical pixel art game: a nighttime museum heist where Jev (TypeSafe AI) controls the guards. The code calculates vision and paths; Jev decides what each guard does. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [bryangarces-ai/quant-engine-releases](https://github.com/bryangarces-ai/quant-engine-releases) | 0 | 0 | Official releases and distribution packages for Zenthea Quant Engine | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [codaaiteam/jev-computer-use](https://github.com/codaaiteam/jev-computer-use) | 0 | 0 | Gate any agent's actions (Claude Code / Codex / opencode / computer-use) with a typed, calibrated Jev safety decision. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [crzyc0d3r/langgraph-agent-harness](https://github.com/crzyc0d3r/langgraph-agent-harness) | 0 | 0 | Production agent harness with middleware controls and a LangGraph plan-act-verify loop using typed probabilistic checks. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [Dalaoyuan2020/android-notification-filter-demo](https://github.com/Dalaoyuan2020/android-notification-filter-demo) | 0 | 0 | Android notification filtering demo: local keyword rules, notification listener, and real-device test APKs. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [damian87x/jev-browser-use](https://github.com/damian87x/jev-browser-use) | 0 | 0 | Fast browser QA from Claude Code or pi: TypeSafe Jev picks every click via Jev Ultrafast, you supply text and the pass check. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [damiankrzystolik/jev_like_with_ollama](https://github.com/damiankrzystolik/jev_like_with_ollama) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [damiensmith1/jev-gmail-filter](https://github.com/damiensmith1/jev-gmail-filter) | 0 | 0 | Filter Gmail with plain-English topics, powered by jevfilter and TypeSafe's Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [damiensmith1/jevfilter](https://github.com/damiensmith1/jevfilter) | 0 | 0 | Filter anything with plain-English rules, powered by TypeSafe's Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [devpilgrin/jeff-guard-multilang](https://github.com/devpilgrin/jeff-guard-multilang) | 0 | 0 | Prompt-injection guard: 10.5M LoRA on Jeff System One decision model. 12 languages, agentic/indirect injections, one forward pass (~20 ms). test 0.99 acc, agentic recall 1.00 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [Djancyp/laya-go-server](https://github.com/Djancyp/laya-go-server) | 0 | 0 | you can run system one gguf models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [Donnaclarkk981/donnaclarkk981.github.io](https://github.com/Donnaclarkk981/donnaclarkk981.github.io) | 0 | 0 | Compare LLM-native structured output vs. TypeSafe Jev on latency, cost, and judgment quality. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [DunnyBunny1/jev-computer-use](https://github.com/DunnyBunny1/jev-computer-use) | 0 | 0 | Prototype browser agent combining fast Jev decisions with Browser Use recovery | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [f4r6d/divar-housing-finder](https://github.com/f4r6d/divar-housing-finder) | 0 | 0 | Divar.ir housing scraper with AI-powered fake price detection | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [faulker/myphin](https://github.com/faulker/myphin) | 0 | 0 | Personal financial tracking desktop app | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [finrod21/jev-transaction-guard](https://github.com/finrod21/jev-transaction-guard) | 0 | 0 | Autonomous settlement circuit breaker protecting ledgers against CVE/RCE balance bypasses, nocturnal draining, and prompt injection attacks using TypeSafe Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [fr3akX/systemone-mail-filter](https://github.com/fr3akX/systemone-mail-filter) | 0 | 0 | After-queue Postfix spam classification with TypeSafe Jev, subject tagging, and recipient-scoped filtering. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [gaaurav03/Jev-Project](https://github.com/gaaurav03/Jev-Project) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [gbesse/jev-obs-cues](https://github.com/gbesse/jev-obs-cues) | 0 | 0 | Preview-first, finite Jev scene cues for OBS Studio. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [gbesse/jev-premiere-markers](https://github.com/gbesse/jev-premiere-markers) | 0 | 0 | Turn typed Jev review findings into exact, undoable Premiere timeline markers. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [gbesse/jev-rappel-pro](https://github.com/gbesse/jev-rappel-pro) | 0 | 0 | Compare des catalogues produits aux rappels RappelConso avec GTIN exact et repli sémantique contrôlé. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [gbesse/jev-recall](https://github.com/gbesse/jev-recall) | 0 | 0 | Quarantine, audit and replay rejected AI decisions | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [gbesse/pinot-jev](https://github.com/gbesse/pinot-jev) | 0 | 0 | Semantic SQL predicates for Apache Pinot powered by TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [gbesse/strapi-plugin-jev-review](https://github.com/gbesse/strapi-plugin-jev-review) | 0 | 0 | Strapi 5 editorial review and publish guard powered by TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [ghubnab99/jev-enterprise-decision-fabric](https://github.com/ghubnab99/jev-enterprise-decision-fabric) | 0 | 0 | Architecture for running many semantic decisions through one validated path, with a labelled 111-case benchmark comparing TypeSafe Jev against a Claude baseline, and a dashboard for inspecting any single decision. Experimental, not production. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [glazk0/shugo](https://github.com/glazk0/shugo) | 0 | 0 | Shugo is a context-aware Discord auto-moderation bot powered by Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [Goooooooooody/pith](https://github.com/Goooooooooody/pith) | 0 | 0 | Get to the pith of a failing CI run before it floods Claude's context. Claude Code plugin + zero-dependency CLI: CI-link summaries, \! pith for pastes, paste guard. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [H4kken/greer](https://github.com/H4kken/greer) | 0 | 0 | A build a community tool for people who don't know how to build a community | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [haider2804/MyFinancialAnalyst](https://github.com/haider2804/MyFinancialAnalyst) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [hamzaahmadaslam/fedi-report-triage](https://github.com/hamzaahmadaslam/fedi-report-triage) | 0 | 0 | Reads the open reports on a Mastodon server with a moderator's own read-only token and prints them as a queue sorted by severity, using TypeSafe's Jev model. It never takes a moderation action. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [Helicon1968/tb-spam-guard](https://github.com/Helicon1968/tb-spam-guard) | 0 | 0 | Thunderbird add-on that flags phishing mail impersonating Japanese organizations. Optional TypeSafe Jev support. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [HiveScaleSystems/jev-guard](https://github.com/HiveScaleSystems/jev-guard) | 0 | 0 | AI chat moderation for Minecraft (Paper/Folia) and Hytale servers, powered by TypeSafe's Jev model. Works with the TypeSafe API or Cloudflare AI Gateway. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [hoangdangwd/robot-3d-inspector](https://github.com/hoangdangwd/robot-3d-inspector) | 0 | 0 | Three.js robot model and combat animation inspector | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [Holychung/jev-browser-lab](https://github.com/Holychung/jev-browser-lab) | 0 | 0 | Experiments with TypeSafe Jev + Browser Use (based on browser-use/jev-ultrafast, MIT) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [infoharshitksingh-afk/jev-close-template](https://github.com/infoharshitksingh-afk/jev-close-template) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [jacob-berendsohn/kassad](https://github.com/jacob-berendsohn/kassad) | 0 | 0 | Calibrated LLM guardrails for .NET. Runs every prompt, completion, tool call and citation past typed checks answered by TypeSafe's Jev, a System One decision model, and hands your code an Allow / Flag / Review / Block verdict with its probability and confidence. ASP.NET Core middleware and a DelegatingHandler for your provider HttpClient. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [JakeTheRabbit/HA-Crop-Steering-Jev](https://github.com/JakeTheRabbit/HA-Crop-Steering-Jev) | 0 | 0 | Crop Steering, Jev edition: the HA crop-steering engine with TypeSafe Jev judging every decision across P0-P3, probes, shots, salt and alerts, inside a deterministic safety envelope. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [javimp2003/laya-guardrails](https://github.com/javimp2003/laya-guardrails) | 0 | 0 | Guardrails de input, tool call y output para agentes de IA con un modelo System One tipo Jev (laya-pt-es-typed) autoalojado en una NVIDIA L4: 5 ms por check frente a 140 ms de un LLM-as-a-judge. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [javimp21/ai-job-hunter](https://github.com/javimp21/ai-job-hunter) | 0 | 0 | AI-powered job discovery, evaluation and assisted application workflow with deterministic filtering, Jev reasoning and human-in-the-loop browser automation. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [jbarragan1981/agente-correo](https://github.com/jbarragan1981/agente-correo) | 0 | 0 | Agente que lee tus correos electronicos y atiende segun prioridad, clasifica utilizando modelo jev como jailbreak y clasificador de correo | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [JevForge/jev-cloud-cost-guardian](https://github.com/JevForge/jev-cloud-cost-guardian) | 0 | 0 | Evaluate cloud spend against a budget and gate CI with Jev (approve, warn, block, or review). | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [jonathanhecl/jev-chat-agent](https://github.com/jonathanhecl/jev-chat-agent) | 0 | 0 | Twitch bot that classifies messages in real time using Jev-Style-2B-Decision-v3 and logs the result.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [jourdanlabs/assay-001](https://github.com/jourdanlabs/assay-001) | 0 | 0 | ASSAY-001: independent, pre-registered verification of TypeSafe Jev's calibration and type-safety claims. Split verdict, published in full. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [JulianFermani/umbral-live](https://github.com/JulianFermani/umbral-live) | 0 | 0 | A real-time browser content filter powered by Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [JulianKingman/Kill-email](https://github.com/JulianKingman/Kill-email) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [kiarina/labs](https://github.com/kiarina/labs) | 0 | 0 | Small, independent projects for experiments, research, and investigations. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [kitatelier/ST-Consistency-Guard](https://github.com/kitatelier/ST-Consistency-Guard) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [kjitin/jev-examples](https://github.com/kjitin/jev-examples) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [lambertsj/beatjev](https://github.com/lambertsj/beatjev) | 0 | 0 | try to beat jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [Luminousyyh/laya-decide](https://github.com/Luminousyyh/laya-decide) | 0 | 0 | A DeepSeek Harness skill that gates file and command actions on a local LAYA System-1 decision model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [manhua-man/jev-pilot-reflex](https://github.com/manhua-man/jev-pilot-reflex) | 0 | 0 | Three.js Autonomous Driving Reflex &amp; AI Safety Brake Simulator powered by TypeSafe Jev System 1/2 Dual-Brain Architecture | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [manish-9245/Wayfinder](https://github.com/manish-9245/Wayfinder) | 0 | 0 | Doubt, as a service: one HTTP call turns any text in 100+ languages into a calibrated act/review/escalate/block verdict. Stateless gateway over laya. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [manvendersingh21/agentgate](https://github.com/manvendersingh21/agentgate) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [Mfrostbutter/jev-n8n-patterns](https://github.com/Mfrostbutter/jev-n8n-patterns) | 0 | 0 | Jev (TypeSafe System One) patterns in n8n: PII screening, agent and coding-agent guardrails, workflow evals. Synthetic data, MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [Mikformatycy/hushgate](https://github.com/Mikformatycy/hushgate) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [MorganOnCode/jev-gram](https://github.com/MorganOnCode/jev-gram) | 0 | 0 | N-gram NSFW detection + AI-prose heatmaps judged by TypeSafe Jev (JEVATHON 2026) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [mpeddicord/jev-tab-filter](https://github.com/mpeddicord/jev-tab-filter) | 0 | 0 | Chrome extension: group, hide, or close tabs by theme, scored by TypeSafe's Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [MSR2012/ems](https://github.com/MSR2012/ems) | 0 | 0 | Email management system | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [mustafasemi-ai/jevlike](https://github.com/mustafasemi-ai/jevlike) | 0 | 0 | Calibration under distribution shift for System One decision models: open, reproducible, no API key | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [narulaskaran/agent-world](https://github.com/narulaskaran/agent-world) | 0 | 0 | A virtual world for your virtual agents to virtually interact | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [neddes/sloppy-jevs-extension](https://github.com/neddes/sloppy-jevs-extension) | 0 | 0 | Open-source Chrome extension that filters AI-generated prose and ads with Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [neozhu/jev-audit](https://github.com/neozhu/jev-audit) | 0 | 0 | AI-powered contract comparison with Jev atomic evaluations—spot substantive changes, filter OCR noise, and generate reviewable audit reports. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [NISH1001/reflex-guard](https://github.com/NISH1001/reflex-guard) | 0 | 0 | Guardrails built with jev-like models (jev, laya, etc.) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [OmarAlaaeldein/jev-verifier-skill](https://github.com/OmarAlaaeldein/jev-verifier-skill) | 0 | 0 | Fast 'System One' reflex for reasoning LLMs: typed probabilistic second opinions from Jev via OpenCode Zen, with PII-minimizing state redaction. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [oppih/approval-judge-bridge](https://github.com/oppih/approval-judge-bridge) | 0 | 0 | OpenAI-compatible judge endpoint for agent approval gates: typed judgements (Jev), any OpenAI-compatible model, or a rule file — fail-closed, calibrated, with a replay battery | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [P4A-Policies-for-Agents/LLM-Response-Leakage-Guard](https://github.com/P4A-Policies-for-Agents/LLM-Response-Leakage-Guard) | 0 | 0 | Outbound MuleSoft Omni/Flex Gateway policy: screens the upstream LLM response for leaked system prompts, secrets, canaries, internal hosts (deterministic) and semantic/paraphrased leaks (typed Jev judge); replaces a leaking reply with a safe refusal, benign replies pass byte-identical. No model in the data path. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [parkthomp/jevs-mailroom](https://github.com/parkthomp/jevs-mailroom) | 0 | 0 | A repository for catch-jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [pascualin/UnaEstrellaSearcher](https://github.com/pascualin/UnaEstrellaSearcher) | 0 | 0 | Tool to look for one star reviews | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [plicara/articles](https://github.com/plicara/articles) | 0 | 0 | Code behind Plicara's published research articles | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [prakashkagitha/djev](https://github.com/prakashkagitha/djev) | 0 | 0 | Deterministic Jev: Jev-compatible System One decisions that repeat bit for bit (SGLang + patches), with replay tests and a guardrail suite | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [PrathamS1/crawl-my-feed](https://github.com/PrathamS1/crawl-my-feed) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [pratikpakhale/jevx](https://github.com/pratikpakhale/jevx) | 0 | 0 | Bring-your-own-key Chrome extension that filters your X timeline with TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [rafaelleaomed/rafaelleaomed](https://github.com/rafaelleaomed/rafaelleaomed) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [ramadhaninsan/jev-poc](https://github.com/ramadhaninsan/jev-poc) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [randilt/jev-guardrail-benchmark](https://github.com/randilt/jev-guardrail-benchmark) | 0 | 0 | Benchmark of the TypeSafe Jev content-safety guardrail in WSO2 AI Gateway against Azure Content Safety and an LLM judge | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [Ray0907/pi-loop](https://github.com/Ray0907/pi-loop) | 0 | 0 | Opus plans, pi implements in herdr panes, Jev-gated review loop with a tool-call safety layer | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [relevan-dev/decision-model-eval](https://github.com/relevan-dev/decision-model-eval) | 0 | 0 | We tested Jev, Laya, and Claude to see how they stacked up when it came to configuring a system.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [ReneGucci94/jev-scout-filter](https://github.com/ReneGucci94/jev-scout-filter) | 0 | 0 | Filtro previo de candidatos de minidrama. Jev decide antes del scrape. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [Reverie0123/send-guard](https://github.com/Reverie0123/send-guard) | 0 | 0 | A semantic privacy check before every send (Chrome &amp; Edge) · 发送按钮前的语义隐私防火墙（Chromium 扩展） | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [rhithesh/youtube-focus](https://github.com/rhithesh/youtube-focus) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [rohitdevade/topiclens-for-youtube](https://github.com/rohitdevade/topiclens-for-youtube) | 0 | 0 | A smart, continuous topic filter for YouTube powered by Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Romay777/laya-telegram-mod](https://github.com/Romay777/laya-telegram-mod) | 0 | 0 | Self-hosted AI moderation bot for Telegram groups. Catches spam, ads and insults with the open Laya model running locally on CPU, or with the Jev API. Escalating mutes, appeals, admin menu. RU/EN. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [sanlega/openbot-ios](https://github.com/sanlega/openbot-ios) | 0 | 0 | OpenBot with a native iOS companion app: persistent Claude Code and Codex Bots on your desktop, paired securely with your iPhone. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [shibammitra24/jev-guard](https://github.com/shibammitra24/jev-guard) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [shubham5027/Jev_Guardtrails](https://github.com/shubham5027/Jev_Guardtrails) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [ShupingR/scam-shield](https://github.com/ShupingR/scam-shield) | 0 | 0 | Scam text message filter powered by TypeSafe's Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-13 |
| [siddharth143/trustsafety-classifier](https://github.com/siddharth143/trustsafety-classifier) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [simonridd/Genesys-aqm](https://github.com/simonridd/Genesys-aqm) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [smha1012/jev-torch](https://github.com/smha1012/jev-torch) | 0 | 0 | PyTorch implementation for training JEV-style calibrated decision models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [sonda-ml/sonda-server](https://github.com/sonda-ml/sonda-server) | 0 | 0 | Self-hosted server for decision models: answers yes/no, choice and score questions with calibrated probabilities in one forward pass. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [Srinivasa314/hn-comment-filter](https://github.com/Srinivasa314/hn-comment-filter) | 0 | 0 | Chrome extension that shows the Hacker News comments worth reading, scored by TypeSafe's Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [sususu98/pi-jev-navigator](https://github.com/sususu98/pi-jev-navigator) | 0 | 0 | Ultra-low-token System One context navigation and precision SOP dispatch engine for Pi Coding Agent using TypeSafe Jev &amp; Trie-Folded CodeGraphs | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [thechristobal/llm-roundtable](https://github.com/thechristobal/llm-roundtable) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [thy10086/ros2-resilience-guardian](https://github.com/thy10086/ros2-resilience-guardian) | 0 | 0 | Mission-aware zero-trust ROS 2 resilience guardian with a local security dashboard | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [tpaulshippy/shady-town](https://github.com/tpaulshippy/shady-town) | 0 | 0 | Shady Town: social-deduction party game for the living room TV, moderated by TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [trouble-agent/guard](https://github.com/trouble-agent/guard) | 0 | 0 | guard | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-03 |
| [tx-smitht/jev-focus-guard](https://github.com/tx-smitht/jev-focus-guard) | 0 | 0 | Jev Focus Guard: a local Chrome extension that asks Jev (System One) whether page elements are ads or distractions, then hides them. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [uditakankananonononono/sugarcode-ai](https://github.com/uditakankananonononono/sugarcode-ai) | 0 | 0 | Sugarcode AI | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [undeemed/jev-mod](https://github.com/undeemed/jev-mod) | 0 | 0 | Jev-powered Discord moderation bot. Configure TypeSafe Jev rules, bring your own API key, and self-host on Cloudflare or Docker. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [vidux/iso-jevdit](https://github.com/vidux/iso-jevdit) | 0 | 0 | An npm CLI that audits a codebase against ISO/IEC 27001:2022 Annex A and writes a detailed \`iso-jevdit-report.md\` you can hand to an auditor. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [vstrofago/vigia](https://github.com/vstrofago/vigia) | 0 | 0 | Moderating live-stream chat in real time (ES/EN) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [walteraandrade/estante](https://github.com/walteraandrade/estante) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [wobsoriano/webkit95](https://github.com/wobsoriano/webkit95) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [wtcooper/ai-security-guardrails](https://github.com/wtcooper/ai-security-guardrails) | 0 | 0 | low cost low latency guardrails | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [xreedev/hoichoi-hackathon](https://github.com/xreedev/hoichoi-hackathon) | 0 | 0 | BreakSense analyses a long-form OTT episode, finds every moment that is safe and natural for an ad break, and matches each break to the most relevant brand from a catalogue. It emits a VMAP 1.0.1 / VAST 4.2 manifest that a video player can consume directly, along with a full-featured browser UI. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [yanjn1388/jev-bayes](https://github.com/yanjn1388/jev-bayes) | 0 | 0 | Jev（TypeSafe AI）にベイズ問題を渡して、報告確率の較正と基準率の無視を測った実験（事前登録つき） | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [yelina123/custom-barrage-ai-filter](https://github.com/yelina123/custom-barrage-ai-filter) | 0 | 0 | Jev 驱动的 B 站弹幕 AI 过滤器 · 自定义多规则屏蔽剧透/骂人/引战，命中变空格不挡画面 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-02 |
| [yodablocks/duckdb-jev](https://github.com/yodablocks/duckdb-jev) | 0 | 0 | Semantic ORDER BY for DuckDB, backed by TypeSafe AI's Jev model. Ships with independent calibration numbers. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [yuviiitm26/av-voice-pipeline](https://github.com/yuviiitm26/av-voice-pipeline) | 0 | 0 | Ultra-Low-Latency Audio-Visual Voice Automation Pipeline - End-to-end AV-TSE, VAD, ASR, Decision Brain, and Win32 Action Serialization | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [zachlandes/jev-dialect-bias](https://github.com/zachlandes/jev-dialect-bias) | 0 | 0 | Reproducing Hofmann et al. (Nature 2024) dialect-prejudice probes on TypeSafe's Jev, including a content-moderation variant | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Abhishekfm/JevCheck](https://github.com/Abhishekfm/JevCheck) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [aigauravsingh-star/jevrails](https://github.com/aigauravsingh-star/jevrails) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Kushagr142/jev-filter](https://github.com/Kushagr142/jev-filter) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [omataak/jev-guardrail-demo](https://github.com/omataak/jev-guardrail-demo) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |

### y0usaf/pi-jev

<details><summary>README 발췌</summary>

TypeSafe Jev as a decision layer for the Pi coding agent.

</details>

### qkal/Canny

<details><summary>README 발췌</summary>

A supervision layer for AI coding agents. It hooks into Claude Code and Codex CLI, keeps a ledger of what the agent actually did, and will not let it finish on a claim.

</details>

### realZachi/typesafe-adblock

<details><summary>README 발췌</summary>

A Chrome extension (Manifest V3) that spots ads on any website in real time and pops their DOM elements out of the page. The semantic call, "is this element an ad?", is made by TypeSafe AI's System One model Jev. Everything else is plain code.

</details>

### leepokai/jev-guard

<details><summary>README 발췌</summary>

Claude Code's auto mode is described as: "A separate classifier model reviews actions before they run, blocking anything that escalates beyond your request, targets unrecognized infrastructure, or appears driven by hostile content Claude read." That is exactly the job jev-guard does — as three typed

</details>

### cisco-ai-defense/skill-scanner

<details><summary>README 발췌</summary>

A best-effort security scanner for AI Agent Skills that detects prompt injection, data exfiltration, and malicious code patterns. It combines pattern-based detection (YAML + YARA-X), AST and dataflow analysis, an optional LLM-as-a-judge, and a bounded CEL decision layer over typed detector facts.

</details>

### firelex/jeff

<details><summary>README 발췌</summary>

results/jeffhub.json (also on jeffhub.ai); base-model scores from ~/jev/runs/eval//{0.8b-20260929-2258, 2b-20260930-2347}-final-calibrated.json (v1.2) and {0.8b-20260929-0834,2b-20260929-1118}-final-calibrated.json (v1.1) on the training machine; sizes: model.safetensors of the v1.2 base is 1,706,02

</details>

### MillionSend/millionsend

<details><summary>README 발췌</summary>

Self-host on your own AWS SES, or use the hosted cloud. Resend-compatible API — migrating means changing two environment variables, not rewriting your integration.

</details>

### TiraelSedai/ClubDoorman

<details><summary>README 발췌</summary>

Изначально разрабатывался чтобы решить проблему со спамерами в чатах Вастрик.Клуба, но может использоваться и в чатах других форков, да и просто в любых больших чатах.

</details>

### merefield/discourse-chatbot

<details><summary>README 발췌</summary>

This README is the canonical reference for installing, configuring, operating, and troubleshooting Chatbot.

</details>

### zhuobichen/weflow-cli

<details><summary>README 발췌</summary>

&gt; 夫天地者，万物之逆旅也；光阴者，百代之过客也。

</details>

### brainstormity/Jev-Moderation-Bot

<details><summary>README 발췌</summary>

A Discord moderation bot built with Python and TypeSafe AI (Jev System One). It filters spam and scam links in real time, escalates offenses automatically, and lets moderators profile members based on their message history.

</details>

### Nyarlathoteppppp/pi-heed

<details><summary>README 발췌</summary>

Your agent understood your instruction. pi-heed makes sure it still remembers.

</details>

### madisonrickert/jev-permission-gate

<details><summary>README 발췌</summary>

A Claude Code mod that puts TypeSafe's Jev in front of the auto mode classifier. In auto mode, for each tool call Claude Code would otherwise send to its built-in classifier, Jev answers eight yes/no questions in one request and the mod decides:

</details>

### mizchi/jev-test-filter

<details><summary>README 발췌</summary>

jev-test-filter reads a git diff, asks a model how much that change can alter the outcome of every single test in the repository, and prints the filter arguments your test runner already understands. It hands those arguments to the runner you already use — vitest, jest, node --test, bun test, Playwr

</details>

### AskTheWay/dsh-jev-interceptor

<details><summary>README 발췌</summary>

&gt; ⚡ Millisecond judgement for every tool call and every recalled message — for about two millionths of a dollar each. &gt; &gt; Your agent's most expensive habits: asking a poetry-writing LLM yes/no questions, and amputating your context by age. This plugin wires Jev — the non-generative "System One" mode

</details>

### pengchujin/ad-radar

<details><summary>README 발췌</summary>

开源的浏览器插件（Chrome / Edge），在小红书、微博、X、知乎的网页版上：

</details>

### ilyamk/jev-gmail-ai-spam-filter-and-labeling

<details><summary>README 발췌</summary>

Semantic email classification powered by Jev, with confidence-aware automation, cost controls, and no jevMail-operated backend.

</details>

### caiovicentino/jev-risk-check-provider

<details><summary>README 발췌</summary>

LIVE: https://x402check.xyz · did:web:x402check.xyz · $0.001 per evaluation with prepaid credits, or per call via x402 ($0.0035 on Base; $0.005 with transaction simulation) · discovery · DID document · JWKS

</details>

### harshithsunku/learn-jev-end-to-end

<details><summary>README 발췌</summary>

Learn Jev end to end is a free, hands-on course. In 12 short notebooks you go from "what is Jev?" to building 13 real AI tools with it: an email triage job, a scam-text detector, a code vulnerability hunter, an agent safety guard and more. You need one API key, and running the whole course costs les

</details>

### 0sparsh2/GAX

<details><summary>README 발췌</summary>

- What is GAX? - The gap GAX fills - How it enforces - About the token argument - Architecture - How it works - Evaluation - Adapters - Installation - How to use - Protocol &amp; envelope - Repository structure - Research &amp; benchmarks - Development - Roadmap - License

</details>

### amithgc/local-jev

<details><summary>README 발췌</summary>

A local, offline System One server. Software that needs a decision rather than prose (which queue, how severe, is this spam) sends a piece of text and some typed questions, and gets back a choice, a score or a yes/no, each with a probability for every possible answer. local-jev speaks exactly the wi

</details>

### ethanplusai/jev-chat-for-twitch

<details><summary>README 발췌</summary>

A Chrome extension that adds a second chat column showing only the Twitch messages worth reading.

</details>

### CodeAlive-AI/mastra-jev-moderation

<details><summary>README 발췌</summary>

Input moderation for Mastra agents on TypeSafe Jev: one file, one request per turn, no text to parse.

</details>

### ironbee-ai/ironbee-express

<details><summary>README 발췌</summary>

It checks whether your app really did what the page says, and when it didn't, finds the root cause.

</details>

### jerryfane/omp-jev-compaction

<details><summary>README 발췌</summary>

Verbatim context reduction for omp, scored by TypeSafe's Jev decision model, over either the TypeSafe API or OpenRouter.

</details>

### Dino-Kupinic/blackrose

<details><summary>README 발췌</summary>

Decide before you generate.

</details>

### andrelandgraf/safer-with-jev

<details><summary>README 발췌</summary>

Public showcases of TypeSafe Jev judgments. TypeSafe Jev inspects the body, then optionally forwards the same bytes to a caller-chosen HTTPS URL.

</details>

### jev-sec/jev-ids

<details><summary>README 발췌</summary>

Intrusion detection in one request. Show TypeSafe's Jev one network flow and five labeled examples. It answers whether the flow is an attack and which kind, in half a second, with no text to parse.

</details>

### qs-lll/twitter-jev-guard

<details><summary>README 발췌</summary>

使用 TypeSafe Jev 在 X/Twitter 时间线上识别低质量、垃圾和推广帖子，并在帖子文字区域显示醒目的半透明水印。

</details>

### harshil1712/slidepilot

<details><summary>README 발췌</summary>

&gt; Experimental: SlidePilot is an early proof of concept built on experimental voice APIs. Rehearse with it before using it in a live presentation, and always keep manual navigation available.

</details>

### ranjan2829/AskJev

<details><summary>README 발췌</summary>

Talk to Claude in plain English. AskJev drives Brave/Chrome. TypeSafe Jev decides on-page. Guard freezes irreversible clicks.

</details>

### AkashPriyadarshii/jev-git

<details><summary>README 발췌</summary>

Support: fuel the next build — [](https://buymeacoffee.com/AkashPriyadarshi)

</details>

### fazlerocks/jev-adblock

<details><summary>README 발췌</summary>

Bring your own TypeSafe AI key. Everything else runs in your browser.

</details>

### ItisShikhar/gg-friggin-ez

<details><summary>README 발췌</summary>

Fast. Cheap. Catches the friggin crap.

</details>

### Nyarlathoteppppp/pi-jev-context

<details><summary>README 발췌</summary>

Less noise. Original evidence within reach.

</details>

### TannerMidd/SpecPi

<details><summary>README 발췌</summary>

SpecPi 0.37.1 is a small starting point for the Pi coding agent. It is one opinionated setup for how the agent should work, not a marketplace of plugins.

</details>

### 0xmdinc/jev-medical-bench

<details><summary>README 발췌</summary>

A small benchmark comparing a decision model (Jev by TypeSafe AI, which returns a typed choice, score or yes/no probability instead of generating text) with general chat LLMs on medical decision tasks.

</details>

### h0j5bz0adh0-stack/jev-pilot

<details><summary>README 발췌</summary>

&gt; Fast System-1 Decision, Arbitration &amp; Safety Engine for Autonomous AI Agents &gt; Brings sub-second, zero-hallucination intuition to Claude, GPT, Gemini, Llama, Hermes, and custom agent runtimes.

</details>

### SoniaMehta14/paved-gate

<details><summary>README 발췌</summary>

A fast "System 1" ingestion gate for AI agent architectures.

</details>

### Arpit-Khandelwal/jev-linkedin-slop-filter

<details><summary>README 발췌</summary>

Judges every LinkedIn post as it scrolls into view and slams a rubber stamp on it — BAIT, CORP, or BRAG — with the confidence score printed on the stamp. The post stays readable underneath.

</details>

### EugeneBoondock/jevsql

<details><summary>README 발췌</summary>

For exact totals over large or encrypted datasets, use the streaming money API. It reads bounded batches and sums decimal values by currency without sending money arithmetic to a model.

</details>

### jiangkoumo/ego-decision-layer

<details><summary>README 발췌</summary>

给 ego lite 的可插拔决策层：默认 System One（Jev），可换本地 / 其他 OpenAI 兼容后端；执行层带 fail-closed 护栏。

</details>

### jkrup/jeveryword

<details><summary>README 발췌</summary>

Text extraction with Jev. Field extraction, PII detection and exact quotes, built on TypeSafe's Jev.

</details>

### MithrilMan/your-signal

<details><summary>README 발췌</summary>

A feed tuned to you. Your Signal is an open-source Chrome extension that applies personal, reversible filters to the X timeline. You choose the interests, weights, threshold, and visual treatment. Jev evaluates the text; the extension makes every display decision on your device.

</details>

### mohi-devhub/SentinelLM

<details><summary>README 발췌</summary>

Real-time safety and quality middleware for LLM applications.

</details>

### Reindeer-AI/pi-jev-guard

<details><summary>README 발췌</summary>

A Pi extension that checks proposed code edits against Markdown rules using TypeSafe Jev. It reviews the proposed content before Pi writes it and returns the exact instruction text and source line range for each detected violation.

</details>

### smthdagg/XShield

<details><summary>README 발췌</summary>

开源的 X 评论区 AI 反垃圾扩展 —— 黄推 / 诈骗 / 纯广告 / 人机，一律看得见地挡在门外

</details>

### ziyacivan/jev-mail-filter

<details><summary>README 발췌</summary>

Gmail filters you write in plain English. Jev reads every new email and labels, stars, archives it, turns it into a to-do, or flags it as phishing. Every morning it sends you a digest, and it reminds you about emails you sent that are still waiting on a reply.

</details>

### 0xshikhar/jev-fuse

<details><summary>README 발췌</summary>

Decision models (such as TypeSafe Jev or local Laya engines) return calibrated probabilities across typed schemas (Noul, Choice, Score) in under 35ms. However, putting raw probability scores directly in front of production agents, shell tools, or critical business workflows introduces severe operati

</details>

### bitnovus/jev-spam-eval

<details><summary>README 발췌</summary>

TypeSafe’s Jev reached 98.64% accuracy on a 5,733-email ham/spam/phishing test using written category definitions and email context, without task-specific fine-tuning or labeled examples in its requests. A TF-IDF logistic regression classifier trained on roughly 4,600 labeled messages per fold reach

</details>

### FrancoisChastel/skill-scanner

<details><summary>README 발췌</summary>

Scan Agent Skills before your coding agent installs them.

</details>

### RzMY/BiliBili-Filter

<details><summary>README 발췌</summary>

通过 Quantumult X 重写，使用 TypeSafe Jev 根据标题、简介、分区和标签等元数据过滤 B站推荐。

</details>

### chengyongru/notiq

<details><summary>README 발췌</summary>

A native Android notification filter, guided by your rules.

</details>

### DataGobes/jev-demos

<details><summary>README 발췌</summary>

Small, self-contained demos of TypeSafe's Jev, a System One model that returns typed judgments (probabilities, choices, scores) instead of generated text. Each demo puts Jev inside a tool data and analytics engineers already use, and each one is scored honestly: live vs simulated is always labelled,

</details>

### devjothish/laya-forge

<details><summary>README 발췌</summary>

Fine-tune, calibrate and gate Laya on your own decisions, then guard your agents with it.

</details>

### godspede/construct-auto-classifier

<details><summary>README 발췌</summary>

&gt; Universal, effect-based safety gate and command classifier for AI coding assistants, deciding with TypeSafe's Jev or any chat LLM. &gt; Supports Google Antigravity (agy), OpenCode, and external agent harnesses.

</details>

### harrymunro/jev-laya-benchmark

<details><summary>README 발췌</summary>

Speed and accuracy of Jev (TypeSafe's hosted System One model, jev-1.13.0) against Laya (open-weight typed-decision models, run locally with MLX on Apple silicon), on 1,470 synthetic items across eight typed-decision tasks, plus controlled latency and throughput sweeps.

</details>

### ItsOdeLeo/JEV-MLX

<details><summary>README 발췌</summary>

Qwen3.5-9B · 20 model-selected placements · 4 cleared rows · 400 points. The recording retains the former MLXJ name. The GIF shows the entire second development run at 4× playback, including inference waits. The model chooses from every legal vertical-drop placement using structured board data and r

</details>

### lgy1027/jevshield

<details><summary>README 발췌</summary>

Framework-agnostic decision control for AI Agent routing and tool execution, powered by Jev (System-1 Models).

</details>

### maayanlevy/mysql-ailike

<details><summary>README 발췌</summary>

A native MySQL plugin for filtering rows and comparing text columns with natural-language conditions, powered by TypeSafe Jev.

</details>

### Muriel-Gasparini/ban4life

<details><summary>README 발췌</summary>

Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense.

</details>

### ClemensSchartmueller/jev-guard

<details><summary>README 발췌</summary>

High-speed, cross-agent safety gate plugin for Claude Code, Codex CLI, and Antigravity.

</details>

### coo-quack/jev-pii-checker

<details><summary>README 발췌</summary>

CLI for scanning text and files for PII using TypeSafe's Jev model, regex patterns, and word segmentation.

</details>

### davertor/jev-slop-guard

<details><summary>README 발췌</summary>

A Chrome extension that stands between you and the slop on X and LinkedIn.

</details>

### littlewindy123/jev-bili-filter

<details><summary>README 발췌</summary>

四个开关：剧透 / 反串黑 / 广告 / 基本盘。还想屏蔽什么，写一句话，点「添加」。在 B 站原页面过滤评论和普通文字弹幕。

</details>

### noelzappy/tripwire

<details><summary>README 발췌</summary>

Judge every LLM response before the user sees it. Seven checks in one ~100 ms call to TypeSafe's Jev, cheap enough to run on 100% of traffic instead of sampling 1% with a frontier judge.

</details>

### rorshopping/jev-browser-local

<details><summary>README 발췌</summary>

&gt; Based on jkudish/jev-browser v0.4.0 (MIT). &gt; The local fork in jev-browser-fork/ adds warm-browser/CDP mode — see &gt; jev-browser-fork/LOCALCHANGES.md. &gt; Engine: parallel-decisions — &gt; local Jev-style parallel constrained decoding, no cloud API, $0 per decision. &gt; Independent project, not affiliated

</details>

### SamanPandey-in/jevrail

<details><summary>README 발췌</summary>

A probability-scored pre-execution guard for terminal coding agents.

</details>

### shikaizhong-design/ego-jev-ultrafast

<details><summary>README 발췌</summary>

ego-jev-ultrafast: Jev drives your Ego Lite browser. A single-file, zero-dependency port of browser-use/jev-ultrafast with multi-model benchmarks and extra guardrails. You give it a goal in plain language ("find one-way flights from Zurich to London on October 20"), and it clicks, types, and scrolls

</details>

### bismawy/pi-jev-eye

<details><summary>README 발췌</summary>

Ultra-lean supervisor. Three-layer guardrails. Semantic gate for Pi.

</details>

### const-ahmed/unschema

<details><summary>README 발췌</summary>

Unschema's form validation is written in plain English and decided by Jev, instead of by a schema library like Zod.

</details>

### snapif/snapif

<details><summary>README 발췌</summary>

Snapif scores one tool call. The score is Auto, Review, or Escalate.

</details>

### 0xArx/jevegis

<details><summary>README 발췌</summary>

Open source. MIT licensed. Live at https://jevegis.vercel.app. SDK/CLI: https://github.com/0xArx/jevegis-sdk

</details>

### 0xwhrari/grok-jev-guard

<details><summary>README 발췌</summary>

Local policy owns hard boundaries. Jev judges ambiguity. Grok Bot executes inside the returned envelope.

</details>

### abhixhek/feedwall

<details><summary>README 발췌</summary>

Your feed, your rules, in plain English. Tell your browser what you want more of and what you want gone. Feedwall applies it on X, YouTube, Reddit, LinkedIn and Hacker News, keeps everything one click away, and shows you when it got it wrong.

</details>

### CarlosCaoLopez/HACKSPAIN-2026

<details><summary>README 발췌</summary>

🚀 ¡Estamos en Product Hunt! Apóyanos en nuestro lanzamiento.

</details>

### CogFlux/opencode-jev-guard

<details><summary>README 발췌</summary>

An OpenCode 2 plugin that sends every shell command the agent wants to run to TypeSafe's Jev decision model first: local shell commands, and FarHand's farhandremoteshell commands on a remote host. Jev answers six typed questions about the command:

</details>

### copyleftdev/jev-labs

<details><summary>README 발췌</summary>

Never confidently wrong. A consensus kernel around a probabilistic oracle, tested the way you would test a database: model-checked in TLA+, contract-generated into Rust, and run through 1,680 simulated pharmacy decisions under seeded chaos against the live Jev API.

</details>

### edwardyen724-g/jev-compactor

<details><summary>README 발췌</summary>

jev-compactor is an open-source TypeScript library, CLI and MCP server that reduces an AI agent's context window without summarizing it. It keeps the original messages byte for byte, drops the ones TypeSafe's Jev judges irrelevant to the current goal, and catches destructive commands such as rm -rf 

</details>

### funkadelic/ha-gutcheck

<details><summary>README 발췌</summary>

Gut Check gives your Home Assistant install a weekly checkup. It finds entities that stopped reporting, updates that might break something, and integrations that quietly failed to start. It also suggests fixes for loose ends: devices with no area, sensors with no type, and clutter on your dashboards

</details>

### ibrahemid/jevprune

<details><summary>README 발췌</summary>

jevprune filters long command output for coding agents using a task description. Retained lines keep their original text and order.

</details>

### Karthick-Ramachandran/jevfilter

<details><summary>README 발췌</summary>

Turn a user's search sentence into filters your API already accepts.

</details>

### kongyo2/similarity-ts-jev

<details><summary>README 발췌</summary>

@kongyo2/similarity-ts and fallow find code that looks alike. This CLI runs both, has TypeSafe's Jev judge every reported pair the way a code reviewer would, and prints only the pairs worth merging, each with the change the reviewer would ask for.

</details>

### opaielsheikh/typesafe-migration-guard

<details><summary>README 발췌</summary>

&gt; "Built for production workflows, not just toy demos."

</details>

### PenDraga/paperless-jev

<details><summary>README 발췌</summary>

Klassifiziert neue Dokumente im Paperless-ngx-Posteingang mit TypeSafe Jev: Dokumenttyp, Korrespondent, Speicherpfad, Ausstellungsdatum und Tags – oder lokal mit clef über Ollama. Läuft als Docker-Container und wird komplett über eine Web-UI eingerichtet.

</details>

### PhilippElhaus/Codex-Jev

<details><summary>README 발췌</summary>

Codex Jev cuts repetitive lines from local tool output before Codex reads them. It keeps errors and useful details, and every shortened result points to a private copy of the complete original.

</details>

### satyawikananda/gits

<details><summary>README 발췌</summary>

Gits is an open-source browser extension for user-initiated local-business lead research on Google Maps. Configure a niche, location, keywords and filters, review qualified leads and export them to CSV.

</details>

### theSekyi/jevusecases

<details><summary>README 발췌</summary>

What people are actually shipping with Jev (TypeSafe AI's decision model), tracked as they ship. Live at jevusecases.com.

</details>

### Tom-R-Main/Footwork

<details><summary>README 발췌</summary>

A verified computer-use agent, for the browser and for native macOS apps. Footwork puts a cheap, calibrated guard from TypeSafe Jev in front of whoever drives: every claimed completion is checked against observed state and the trajectory before it counts, every irreversible action passes a gate, and

</details>

### XYenon/ajevt-browser

<details><summary>README 발췌</summary>

A bounded Jev System-1 browser tool for Pi, OpenCode V2, Amp, and MCP. A single ajevtbrowser call runs an observe/decide/validate/act loop using Vercel agent-browser.

</details>

### 48Nauts-Operator/skill-dash

<details><summary>README 발췌</summary>

Judge a tree of Claude Code and Codex skills with Jev, TypeSafe's typed-judgment model. One row per skill, one question per row: keep, rewrite, merge or delete. Also the pipeline behind whichskills.dev, a public census of 18,041 skills from the 200 most-starred repos.

</details>

### 4rays/profanity-checker

<details><summary>README 발췌</summary>

A Cloudflare Worker that checks text and usernames for profanity using TypeSafe's Jev (typesafe/jev on Workers AI).

</details>

### allebee/jevgrep

<details><summary>README 발췌</summary>

and get back only the lines where the answer is yes.

</details>

### bojansandhaus/jev-home-assistant-sentinel

<details><summary>README 발췌</summary>

A safety boundary for AI-assisted Home Assistant decisions.

</details>

### CeamKrier/semantic-firewall

<details><summary>README 발췌</summary>

Gate an AI agent's tool calls with Jev, TypeSafe's System One decision model, served through OpenRouter (typesafe/jev-1.13, POST /api/alpha/decisions). The generative LLM proposes one action. Jev answers five yes/no questions about it with calibrated probabilities. Plain code turns those numbers int

</details>

### Computational-social-science/JevRSI

<details><summary>README 발췌</summary>

&gt; Reproduce the RSI-Jev self-improvement loop on a Qwen3-0.6B backbone. The deliverable is the &gt; curve, not a score.

</details>

### DolphinMiner/jev-rss

<details><summary>README 발췌</summary>

English · 简体中文 · Contributing

</details>

### h1code2/jev-x-blocker

<details><summary>README 발췌</summary>

&gt; A Chrome extension that detects and blocks porn tweets (黄推) on Twitter / X with &gt; TypeSafe's Jev model — narrow-question rubric, code-composed score, local cache.

</details>

### HuangWeiLong-dot/Sense

<details><summary>README 발췌</summary>

开源的、完全本地运行的情感判断工具。导入聊天记录 → 本地脱敏 → 逐轮 JEV 判断 → 汇总判断 → LLM 生成「接下来该怎么做」的建议。

</details>

### JGalego/Jevs-Garage

<details><summary>README 발췌</summary>

A workshop full of small, inspectable experiments for TypeSafe System One models. Each bay gives Jev a realistic state, asks typed questions, and lets ordinary Python policy decide what happens next.

</details>

### JH3lou/GridCue

<details><summary>README 발췌</summary>

&gt; Ask a dense grid a plain question. See the view that answers it.

</details>

### jubarthi/Super_Gpt

<details><summary>README 발췌</summary>

&gt; Aviso de Créditos: Este SUPER GPT foi desenvolvido a partir do Codex Web original com a mesma finalidade de ser 100% gratuito, estendido com a integração nativa de segurança inteligente TypeSafe (Jev).

</details>

### kurihada/pi-jev-permit

<details><summary>README 발췌</summary>

The single place in pi where Jev (TypeSafe's System One decision model) is used: one core and one consumer — a permission gate that judges every bash / write / edit call before it runs.

</details>

### makefinks/jev-feed-filter

<details><summary>README 발췌</summary>

https://github.com/user-attachments/assets/8faee26b-6bc4-4f80-a820-e11cedfeb643

</details>

### naturalmoods/epeszuro

<details><summary>README 발췌</summary>

Chrome-bővítmény, amely a TypeSafe Jev modelljével átnézi a YouTube-hozzászólásokat és az élő chat üzeneteit. A súlyos gyűlölködést iratmegsemmisítő animációval eltünteti, a trágár vagy sértő szöveget elhomályosítja, a gúnyt pedig megjelöli. Az eredeti hozzászólás kattintással bármikor megnézhető.

</details>

### NorbertBodziony/guard-jev

<details><summary>README 발췌</summary>

Text moderation demo: one TypeSafe systemOne call screens 7 Noul hazards + 1 severity Score in parallel. Verdict computed in code via policy thresholds.

</details>

### ohernandezdev/jevmod

<details><summary>README 발췌</summary>

Moderation for communities and apps: every message gets a probability for spam, scam, harassment, nsfw, off-topic, self-harm, doxxing, sexual content involving minors, and for rules you write in plain English. You set the thresholds and the actions. Every decision is logged with its numbers.

</details>

### pjrpjr/qingliu

<details><summary>README 발췌</summary>

黄框标出垃圾账号 → 一键原生拉黑 → 手机端同步消失。 外加一个 用实测标定过阈值 的 AI 判定层。

</details>

### rafaelleaomed/smartvitae

<details><summary>README 발췌</summary>

🌐 Language / Idioma: 🇺🇸 English • 🇧🇷 Português do Brasil

</details>

### rudra72r/jev-guard

<details><summary>README 발췌</summary>

alt="jev-guard — guardrails for LLM apps, every input and output checked in 70–500 ms" width="100%"&gt;

</details>

### serejkaaa512/jev-content-guard-ext

<details><summary>README 발췌</summary>

A Manifest V3 browser extension that filters out fraud, advertising, AI slop, spam, clickbait, "info-gypsy" schemes, and toxicity on any web page, and extracts &amp; highlights core key words from selections or whole pages — powered by the TypeSafe Jev AI content analysis API.

</details>

### taman-spirit/guardrail-chatbot-jev

<details><summary>README 발췌</summary>

Content safety for AI chatbots: check what the user sends, check what your bot replies, and get back one clear decision you can act on.

</details>

### vkpdeveloper/mrsecret

<details><summary>README 발췌</summary>

A Chrome MV3 extension that blurs secrets and PII on any web page — useful when screen sharing, streaming, or recording demos.

</details>

### who/jevq

<details><summary>README 발췌</summary>

jq | jevq | jq. jq handles structure; jevq reads one JSON value per line from stdin, asks Jev (a TypeSafe System One model) a yes/no question about each, and passes through the yeses. QUESTION is a yes/no claim about the current value, not a search query.

</details>

### yelkhanyergali-sys/jev-guard

<details><summary>README 발췌</summary>

&gt; Ultra-fast In-Flight Terminal Pruning and Surgical Diff Guard for PI Coding Agent, powered by Jev (TypeSafe AI) — the world's first System One decision model.

</details>

### yldst-dev/fuckyou-spam-rs

<details><summary>README 발췌</summary>

Telegram 그룹의 메시지를 SQLite 스팸 캐시와 TypeSafe AI의 Jev 모델로 분류하고 스팸 메시지를 삭제하는 Rust 봇입니다.

</details>

### youshinh/md-memo

<details><summary>README 발췌</summary>

A Markdown scratchpad with AI at the cursor. It is already open when the thought arrives.

</details>

### arcveildev/arcveil

<details><summary>README 발췌</summary>

Agents that can spend, and never see. → live at arcveil.dev

</details>

### arnavsurve/g8

<details><summary>README 발췌</summary>

an agent policy gate for Claude Code. you write rules in english, in a json file. every tool call your agent makes gets checked against them before it runs. if it breaks one, it doesn't run.

</details>

### BasmaAbouzied0/jev-secret-guard

<details><summary>README 발췌</summary>

A Claude Code hook that stops your agent from writing, committing or sending secrets. Known key formats are blocked instantly on your machine. Unknown ones go to Jev (TypeSafe's System One model), masked, so checking for a leak never causes one.

</details>

### choiyounggi/jev-gate

<details><summary>README 발췌</summary>

A local Jev-compatible decision model as an assistant for Claude Code, never the decider. 로컬 판단 모델(ollaya가 서빙하는 winnow:e4b)이 Claude Code의 세 지점을 보조한다. 텍스트를 생성하지 않고 "선택지 중 어느 것인가, 확률은 얼마인가"만 답하므로 토큰 0, 호출당 약 0.75초, 비용 0이다. 모델은 판단만 하고, 결정은 결정론 규칙·Claude Code 권한 흐름·사람이 내린다.

</details>

### cyu60/floodgate

<details><summary>README 발췌</summary>

You decide what flows in. An open Jev, trained on River AI, that stands between you and every page you open

</details>

### gbesse/jev-agribalyse-claim-check

<details><summary>README 발췌</summary>

Vérifie si une allégation environnementale alimentaire est soutenue par la référence AGRIBALYSE citée.

</details>

### gbesse/jev-georisques-preflight

<details><summary>README 발췌</summary>

Prépare les points de vigilance d’un projet à partir des risques naturels et technologiques sourcés.

</details>

### gbesse/jev-sentinel

<details><summary>README 발췌</summary>

Canary-based secret leak detection and safe redaction for AI applications. It tests the actual outputs of loggers, traces, error handlers and exported artifacts instead of assuming that a redaction configuration works.

</details>

### pateti-hub/laya-browser-guard

<details><summary>README 발췌</summary>

A passive, local-first Chrome extension that helps developers and authorized security researchers understand a website's browser-visible attack surface. It combines deterministic checks with typed Laya decisions, evidence, educational explanations, and recommended investigation steps.

</details>

### paulhugel/haio-gats

<details><summary>README 발췌</summary>

Human-Supervised AI Operations Governance and Audit Trail Specification (HAIO-GATS) — public preview. This repository is a standards-aligned profile for accountable agentic workflows. It defines testable requirements for effective human supervision, bounded authority, lifecycle approval gates, event

</details>

### prestonkakukdev/Jev-Defense

<details><summary>README 발췌</summary>

A security guard for AI agents, powered by Jev. It stops dangerous tool calls before they run, strips prompt injection out of what agents read, and checks skills and rule files for hidden instructions.

</details>

### tecanmol/JevGaurd

<details><summary>README 발췌</summary>

JevGuard is a browser extension that detects and removes ads from webpages using Jev semantic classification.

</details>

### 0x963D/last-exit

<details><summary>README 발췌</summary>

One gate. One good lie. There is something alive in your cargo. Convince the inspector there isn't.

</details>

### 5hux1n/WcSy

<details><summary>README 발췌</summary>

&gt; 半成品 · 仅用于记录开发进度。 &gt; &gt; 本仓库保存当前源码、实验包、设计文档和排查记录。项目尚未完成，存在已知问题；编译成功、离线测试通过不代表微信内功能已经稳定。 &gt; &gt; 当前记录版本：0.2.25。该版本尚未完成真机验收，也未完成新版 JEV 提示词的线上效果验证。

</details>

### abdulnazeer-ai/gmail-ai-spam

<details><summary>README 발췌</summary>

A self-directed AI proof-of-concept that connects to Gmail and uses Jev's Structured Decision Model to analyze emails for spam and legitimacy signals.

</details>

### Abhieu/excelpilot

<details><summary>README 발췌</summary>

An AI Excel operations engine that treats a spreadsheet as a system to be changed safely, not a document to be edited.

</details>

### Abhishekvrshny/jevexec

<details><summary>README 발췌</summary>

Command guard for Codex and Claude Code. It checks actions locally first, then uses Jev through OpenRouter for uncertain actions. It returns allow, ask, or deny decisions; it does not run the checked command.

</details>

### acarbone/PII-Detector

<details><summary>README 발췌</summary>

&gt; Status: implemented. All tasks in specs/tasks.md are done. The first measured results are in Results.

</details>

### Achenyiyi/BiliWarmBot

<details><summary>README 발췌</summary>

一个基于 Bilibili API 和 DeepSeek AI 的温暖陪伴机器人，自动发现需要情感支持的用户，并给予自然、温暖的回复。

</details>

### adelvillar1/dev-decisions

<details><summary>README 발췌</summary>

Decision-model gates for git + ZCode workflows. Scans secrets/PII from commits, classifies diffs using multiple providers, and logs every decision to JSONL for calibration.

</details>

### adrocic/Jad-Block

<details><summary>README 발췌</summary>

Blocks the ads filter lists can't see.

</details>

### affirmitv/bitrate-advisor

<details><summary>README 발췌</summary>

Encoder settings for a live stream, decided from telemetry and history, in 300 ms for $0.00005.

</details>

### agaches/jev-test

<details><summary>README 발췌</summary>

Hook PreToolUse pour Claude Code qui délègue le jugement de sécurité à Jev (TypeSafe AI), avec pré-filtre anti-exfiltration local et repli sur les expressions régulières historiques.

</details>

### aidai524/float

<details><summary>README 발췌</summary>

&gt; 加密供给侧事件的实测反应参考层 · The measured reaction layer for crypto supply events

</details>

### akaushik-sudo/duckdb-jev

<details><summary>README 발췌</summary>

ones, with TypeSafe's Jev model.

</details>

### amalvarezme/mario-jev

<details><summary>README 발췌</summary>

A real-time Super Mario Bros. (NES) agent whose decisions come from Jev, the System One typed-decision model from TypeSafe AI.

</details>

### AnaOnTram/JBCA

<details><summary>README 발췌</summary>

JBCA is a simulated quadcopter that decides for itself when to stop before it hits something. An Iris drone carrying a 360° LDROBOT LD06 lidar flies through a procedural city with skyscrapers and moving traffic. TypeSafe's System One model Jev reads a description of what the lidar sees and how the d

</details>

### auggie246/dsh-jev

<details><summary>README 발췌</summary>

A Jev decision layer for DeepSeek Harness (DSH). DeepSeek still writes the code; Jev only answers small typed Judgments (Noul / Choice / Score). See CONTEXT.md and docs/adr/.

</details>

### avinashsuresh1/semantic-control-system

<details><summary>README 발췌</summary>

A reference architecture and simulation framework for Semantic Control Systems (SCS), where control directives operate directly in natural language semantics, decoded by a fast System-1 decision model (like Jev) to emit deterministic hardware control signals, and supervised by a System-2 reasoning m

</details>

### Awesome-llms-labs/awesome-jev

<details><summary>README 발췌</summary>

&gt; A curated list of resources for Jev — TypeSafe AI's decision-only "System One" model that returns typed decisions with calibrated probabilities instead of generating text.

</details>

### benikigai/JEVgotiator

<details><summary>README 발췌</summary>

Buyers text Eve about a Tesla in San Francisco. Eve clarifies the request, our API applies hard filters, TypeSafe Jev scores the evidence for up to 30 candidates, and the buyer gets five options. After the buyer picks one to three, Dara's weighted rules prepare a nonbinding deal plan. The web dashbo

</details>

### bioduds/METEORITE

<details><summary>README 발췌</summary>

METEORITE is a scientific reasoning and evidence synthesis system for automated evidence synthesis, inference, falsification, and discovery.

</details>

### BrunoMS0/Blind-Spot

<details><summary>README 발췌</summary>

Juego táctico por turnos en pixel art: tu equipo entra de noche a un museo para robar el diamante. Los guardias los controla Jev (TypeSafe AI): al final de cada turno tuyo, una sola llamada decide qué hace cada guardia. El código calcula visión, caminos y distancias; Jev solo elige.

</details>

### bryangarces-ai/quant-engine-releases

<details><summary>README 발췌</summary>

Principal: Puzzled Programmer License: Commercial Proprietary — Verified via Cloud Licensing System

</details>

### codaaiteam/jev-computer-use

<details><summary>README 발췌</summary>

A tiny starter that puts a Jev safety gate in front of any agent that acts on your machine — Claude Code, OpenAI Codex, opencode, or a computer-use loop (Claude Computer Use / OpenAI Operator / Gemini Computer Use).

</details>

### crzyc0d3r/langgraph-agent-harness

<details><summary>README 발췌</summary>

A production-style harness for a tool-using support agent, plus an explicit plan → act → verify → decide loop built with LangGraph. The agent handles customer-support requests (look up orders, inspect payments, issue refunds) and every model call and tool call goes through a stack of controls. Code,

</details>

### Dalaoyuan2020/android-notification-filter-demo

<details><summary>README 발췌</summary>

后端 Jev 管长期判断，手机本地管短时注意力。 当前主程序 v0.4.0 提供首页、消息、智能判断、我的四页纸面界面，以及四幕首次使用教程；沿用 v0.3.0 的 SystemOne 概率判断、本地衰减记忆和最多三路对照：先获得模型保留概率 pjev，再用近期真实行为计算 pfinal。

</details>

### damian87x/jev-browser-use

<details><summary>README 발췌</summary>

Fast browser QA from Claude Code or pi. You write the goal, the text to type and what counts as a pass. TypeSafe Jev picks every click through Jev Ultrafast. The runner checks the final page itself, because the agent saying DONE proves nothing.

</details>

### damiankrzystolik/jev_like_with_ollama

<details><summary>README 발췌</summary>

Nauka użycia Ollama v0.35.0+ z endpointem /v1/systemone do szybkich, typizowanych decyzji. Implementacja TypeSafe Jev API — bardziej efektywna niż LLM do pytań z zamkniętym zbiorem odpowiedzi.

</details>

### damiensmith1/jev-gmail-filter

<details><summary>README 발췌</summary>

Filter Gmail with plain-English topics. Describe what you care about ("receipts for things I bought", "recruiters contacting me about a role") and the app labels matching emails, groups them into tracked items (a job application, an order) with a status, and flags anything that has gone quiet. Judgi

</details>

### damiensmith1/jevfilter

<details><summary>README 발췌</summary>

Judge content against plain-English definitions with TypeSafe's Jev. Describe what you care about in a few words; get back typed answers with calibrated probabilities: which topics match, which category, which company, how urgent.

</details>

### devpilgrin/jeff-guard-multilang

<details><summary>README 발췌</summary>

A tiny, fast prompt-injection guard built on the Jeff System One decision model. It screens any text your AI agent is about to read - a user task, a tool result, an email, a document - and answers in one forward pass (~20 ms on an RTX 4090), with calibrated probabilities and no generated text:

</details>

### Djancyp/laya-go-server

<details><summary>README 발췌</summary>

HTTP server for typed classification questions (TypeSafe System One shape), answered locally: encoder GGUFs through llama.cpp plus a Go decision head. Default model: GLiNER2.5-Decide (gliner2-decide); laya-guard, the stock laya and Qwen3Guard are selectable with LAYAMODEL. POST /v1/policy turns a wr

</details>

### Donnaclarkk981/donnaclarkk981.github.io

<details><summary>README 발췌</summary>

A single-file, self-contained portfolio site (index.html). No build step, no dependencies to install.

</details>

### DunnyBunny1/jev-computer-use

<details><summary>README 발췌</summary>

A standalone prototype combining Jev Ultrafast for speed with Browser Use for difficult browser interactions.

</details>

### f4r6d/divar-housing-finder

<details><summary>README 발췌</summary>

A Cloudflare Workers application that samples public Tehran rental listings on Divar.ir, extracts structured rental details with Workers AI, and flags unusually low or potentially misleading prices. The admin dashboard and API are rendered/served by the Worker; the database is Cloudflare D1.

</details>

### faulker/myphin

<details><summary>README 발췌</summary>

A private, keyboard-friendly budget app that keeps your money data in a folder you own.

</details>

### finrod21/jev-transaction-guard

<details><summary>README 발췌</summary>

A cybersec policy enforcement engine and behavioral anomaly detector powered by TypeSafe AI's Jev (~typesafe/jev-latest).

</details>

### fr3akX/systemone-mail-filter

<details><summary>README 발췌</summary>

A Go after-queue Postfix filter using TypeSafe Jev. Spam gets a configurable Subject prefix (default [SPAM]); all messages continue through normal delivery. Message category and independent abuse probabilities are available in headers and JSON logs. There is no spam rejection, quarantine, or deletio

</details>

### gaaurav03/Jev-Project

<details><summary>README 발췌</summary>

Verbatim context compaction for Claude Code. Instead of replacing your history with a lossy summary, fast-jev-plus removes only the tool calls and results that are no longer needed. Every message that stays is kept word for word.

</details>

### gbesse/jev-obs-cues

<details><summary>README 발췌</summary>

A preview-first OBS Studio Python script that sends a bounded cue signal to your trusted gateway and accepts only one of the scenes already present in OBS. Automatic scene switching is off by default and must be explicitly enabled.

</details>

### gbesse/jev-premiere-markers

<details><summary>README 발췌</summary>

A Premiere UXP panel that turns typed Jev review findings into timeline markers. Paste an SRT export, choose a declared review pack, inspect the exact-caption findings, then add every marker to the active sequence in one undoable transaction.

</details>

### gbesse/jev-rappel-pro

<details><summary>README 발췌</summary>

Compare des catalogues produits aux rappels RappelConso avec GTIN exact et repli sémantique contrôlé.

</details>

### gbesse/jev-recall

<details><summary>README 발췌</summary>

Quarantine, audit and replay rejected AI decisions before evidence is lost. Recall addresses the asymmetric failure where a false negative disappears from memory, retrieval or an operational queue and can no longer be corrected later.

</details>

### gbesse/pinot-jev

<details><summary>README 발췌</summary>

An Apache Pinot scalar-function extension for semantic predicates backed by TypeSafe Jev. It fuses up to eight conditions over one row into one request, caches identical judgments on each Pinot server, and coalesces simultaneous identical calls. This initial release makes no state-of-the-art perform

</details>

### gbesse/strapi-plugin-jev-review

<details><summary>README 발췌</summary>

Plugin serveur de revue éditoriale avec les décisions typées de TypeSafe Jev. Il évalue un brouillon, renvoie approve, escalate ou revise avec sa confiance, et peut empêcher une publication non validée. Le contenu n'est jamais inclus dans le résultat de la décision.

</details>

### ghubnab99/jev-enterprise-decision-fabric

<details><summary>README 발췌</summary>

An experimental architecture for using TypeSafe Jev at many semantic decision points in one application, without scattering model calls, question text, thresholds and side effects through the codebase.

</details>

### glazk0/shugo

<details><summary>README 발췌</summary>

Context-aware Discord auto-moderation powered by Jev.

</details>

### Goooooooooody/pith

<details><summary>README 발췌</summary>

Get to the pith of a failing CI run before it floods Claude's context.

</details>

### H4kken/greer

<details><summary>README 발췌</summary>

An open-source tool for small SaaS builders who want to grow a community from zero: find the conversations where you can genuinely help. Write the replies yourself

</details>

### haider2804/MyFinancialAnalyst

<details><summary>README 발췌</summary>

An enterprise-grade quantitative forecasting, risk-governed trade execution, and self-evaluating analytics platform built on MetaTrader 5 (MT5), machine learning, Amazon Chronos foundation time-series priors, and deterministic AI risk guardrails.

</details>

### hamzaahmadaslam/fedi-report-triage

<details><summary>README 발췌</summary>

Reads the open reports on your Mastodon server with your own moderator token and prints them as a queue sorted by severity, with the kind of problem each report shows and whether the reporter's comment matches the reported posts; for the people who moderate a Mastodon server.

</details>

### Helicon1968/tb-spam-guard

<details><summary>README 발췌</summary>

Thunderbird 用のフィッシング・迷惑メール判定アドオンです。TypeSafe の Jev（System One）に対応しています。

</details>

### HiveScaleSystems/jev-guard

<details><summary>README 발췌</summary>

AI chat moderation for Minecraft (Paper/Folia) and Hytale servers, powered by TypeSafe 's Jev model.

</details>

### hoangdangwd/robot-3d-inspector

<details><summary>README 발췌</summary>

A Three.js showcase for original robot fighters assembled from an R15-like contract of exactly 15 rigid body parts. Every animation rotates or translates discrete objects; the project does not use bones, skinning, or character rigs.

</details>

### Holychung/jev-browser-lab

<details><summary>README 발췌</summary>

&gt; [!IMPORTANT] &gt; The Browser Use Cloud waitlist is open. Get early access to ultrafast browser agents in the cloud. &gt; Join the waitlist →

</details>

### infoharshitksingh-afk/jev-close-template

<details><summary>README 발췌</summary>

&gt; Independent work sample, not affiliated with or endorsed by TypeSafe AI. All data in this repository is synthetic.

</details>

### jacob-berendsohn/kassad

<details><summary>README 발췌</summary>

Calibrated guardrails for LLM applications in .NET.

</details>

### JakeTheRabbit/HA-Crop-Steering-Jev

<details><summary>README 발췌</summary>

Automatic watering for a grow room, run by Home Assistant, with an AI second opinion on every judgement call.

</details>

### javimp2003/laya-guardrails

<details><summary>README 발췌</summary>

Un check de seguridad en 5 ms en vez de 140 ms. Guardrails de input, tool call y output para agentes de IA con laya-pt-es-typed, un modelo System One tipo Jev que devuelve probabilidades tipadas, no texto.

</details>

### javimp21/ai-job-hunter

<details><summary>README 발췌</summary>

AI Job Hunter is an intelligent job discovery, evaluation, and assisted-application system. It helps candidates find opportunities, assess fit, organize applications, and prepare next steps with human oversight.

</details>

### jbarragan1981/agente-correo

<details><summary>README 발췌</summary>

Sistema multiagente de correo electrónico y webchat para Viamatica. Conecta una o varias cuentas de correo, trata cada mensaje como dato no confiable, lo pasa por un guardián anti-jailbreak/phishing, lo clasifica con TypeSafe Jev (respaldo automático en un LLM económico), lo enruta a agentes especia

</details>

### JevForge/jev-cloud-cost-guardian

<details><summary>README 발췌</summary>

Evaluate proposed cloud spend against a budget and expose a typed CI gate (approve, warn, block, or manual-review) using TypeSafe Jev.

</details>

### jonathanhecl/jev-chat-agent

<details><summary>README 발췌</summary>

Twitch bot that classifies messages in real time using Jev-Style-2B-Decision-v3 and logs the result. Observer mode: it does not delete messages or take any moderation action.

</details>

### jourdanlabs/assay-001

<details><summary>README 발췌</summary>

Verdict: on CLINC150, Jev's chosen-option probabilities were calibrated (ECE 0.0204); on Banking77 they were not (ECE 0.0936, systematically overconfident). Across 8,576 responses there were zero type errors. Full write-up: https://donttrustme.ai/assay-001.html

</details>

### JulianFermani/umbral-live

<details><summary>README 발췌</summary>

Real-time web filtering, with judgment.

</details>

### JulianKingman/Kill-email

<details><summary>README 발췌</summary>

&gt; "I'll be back... for your spam"

</details>

### kiarina/labs

<details><summary>README 발췌</summary>

Small, independent projects for experiments, research, and investigations.

</details>

### kitatelier/ST-Consistency-Guard

<details><summary>README 발췌</summary>

캐릭터 응답 직후 Jev로 설정오류를 판정하고, 오류가 의심되면 별도 연결 프로필로 수정 지시문을 만든 뒤 메인 API로 수정본을 새 스와이프로 추가합니다.

</details>

### kjitin/jev-examples

<details><summary>README 발췌</summary>

Runnable Java 21 code from the article "Jev + Java: turning fuzzy AI judgement into typed application logic". Jev's /v1/systemone endpoint takes state + typed questions (noul, choice, score) and returns typed answers.

</details>

### lambertsj/beatjev

<details><summary>README 발췌</summary>

A human vs. TypeSafe's Jev in a 25-round spam-or-not reaction race. Each round has a 3-2-1 countdown. When it hits zero, the message appears, your timer starts, and the page asks Jev the same question, all on the same tick. After 25 rounds, a results screen compares speed and accuracy and gives you 

</details>

### Luminousyyh/laya-decide

<details><summary>README 발췌</summary>

&gt; 把"要不要动手"从主模型的隐式推理里剥离出来，交给一个 ~30 ms 的本地决策模型。 &gt; 一个 DeepSeek Harness (DSH) skill。 正文是中文，代码是 PowerShell。

</details>

### manhua-man/jev-pilot-reflex

<details><summary>README 발췌</summary>

&gt; Three.js 智驾决策与“AI 安全闸”仿真实验室 &gt; Three.js Autonomous Driving Reflex &amp; AI Safety Brake Simulator powered by TypeSafe Jev System 1/2 Dual-Brain Architecture.

</details>

### manish-9245/Wayfinder

<details><summary>README 발췌</summary>

One HTTP call turns any text, in 100+ languages, into a calibrated act / review / escalate / block verdict. About 33ms per decision, $0 self-hosted, no hallucination, nothing to parse.

</details>

### manvendersingh21/agentgate

<details><summary>README 발췌</summary>

AI agents can write code faster than humans can review it.

</details>

### Mfrostbutter/jev-n8n-patterns

<details><summary>README 발췌</summary>

Patterns for using Jev, TypeSafe's System One decision model, inside n8n workflows. Three areas: PII screening on inbound text, guardrails for agents and coding agents (as Claude Code and git hooks), and workflow evals with Jev as the judge. Everything here runs on a stock n8n with one OpenRouter AP

</details>

### Mikformatycy/hushgate

<details><summary>README 발췌</summary>

An AI control layer that sits between AI agents and LLM providers. Every request and every tool call an agent makes goes through it, so the organization can keep secrets and personal data away from the model, stop agents from taking actions they shouldn't, catch unapproved AI use, and cap spend. A d

</details>

### MorganOnCode/jev-gram

<details><summary>README 발췌</summary>

Content moderation for user-generated content (UGC) that shows exactly which words and phrases break your policy, judged by TypeSafe's Jev System One model. It has four strictness levels and an AI-prose heatmap mode. Built at JEVATHON (TypeSafe AI × The AI Collective, CodeRabbit SF, 2026-09-26).

</details>

### mpeddicord/jev-tab-filter

<details><summary>README 발췌</summary>

Group, hide, or close Chrome tabs by what they're about. Type a theme in plain words, such as "Building a new home server", and every open tab is scored for relevance by TypeSafe's Jev model in one fast request.

</details>

### MSR2012/ems

<details><summary>README 발췌</summary>

An AI-assisted layer on top of Gmail. It connects a Gmail account over OAuth, syncs the inbox in the background, analyzes each email (priority, category, spam likelihood %, reply urgency %) and surfaces what needs attention. It never sends, deletes, archives or modifies Gmail messages.

</details>

### mustafasemi-ai/jevlike

<details><summary>README 발췌</summary>

An open, reproducible replica of the Jev "System One" decision-model shape: state in, typed probabilistic decisions out, one forward pass, no decode loop.

</details>

### narulaskaran/agent-world

<details><summary>README 발췌</summary>

A local-first world of autonomous characters. You clone the repo, run pnpm start, and they keep moving, meeting, talking, and remembering on your machine. With no keys they run on a built-in keyless brain: free, offline, and still chatty. With an optional OpenRouter key they think with an LLM; with 

</details>

### neddes/sloppy-jevs-extension

<details><summary>README 발췌</summary>

An open-source Chrome extension that blurs AI-generated prose and ads with Jev by TypeSafe.

</details>

### neozhu/jev-audit

<details><summary>README 발췌</summary>

See what changed. Understand what matters. Review with confidence.

</details>

### NISH1001/reflex-guard

<details><summary>README 발췌</summary>

Multi-label guardrails on "System One" decision models (Laya and GLiNER2.5-Decide today; Von and TypeSafe Jev planned). Each category gets its own score in [0, 1]; modes can be combined with | (any), &amp; (all) or votes=k.

</details>

### OmarAlaaeldein/jev-verifier-skill

<details><summary>README 발췌</summary>

A reasoning-loop skill that gives LLM agents a fast "System One" reflex: cheap, typed, probabilistic second opinions from TypeSafe AI's Jev, served through OpenCode Zen.

</details>

### oppih/approval-judge-bridge

<details><summary>README 발췌</summary>

An OpenAI-compatible endpoint that answers an agent's approval-guardian call with a judged verdict — APPROVE, DENY, or ESCALATE. Four judges behind one interface: a typed judgement model (Jev), any OpenAI-compatible chat model, a self-hosted Jev-style classify judge, or a deterministic rule file. It

</details>

### P4A-Policies-for-Agents/LLM-Response-Leakage-Guard

<details><summary>README 발췌</summary>

An outbound (response-leg) guard for the MuleSoft Omni/Flex Gateway that reads an LLM's reply before it reaches the user and replaces it when it leaks the system prompt, a secret, or an internal detail. A benign reply passes through byte-for-byte, and a blocked reply is rewritten schema-preserving s

</details>

### parkthomp/jevs-mailroom

<details><summary>README 발췌</summary>

A shared pixel-art mailroom that fills the screen and that you walk around in. Jev is the mailroom’s little robot, and every visitor gets a little character of their own: walk with the arrow keys or WASD (or the on-screen pad and A button on touch screens, or by clicking where to go). Walk up to the

</details>

### pascualin/UnaEstrellaSearcher

<details><summary>README 발췌</summary>

Herramienta para descubrir, recopilar, revisar y preparar reseñas graciosas o llamativas de Google Maps, con una UI local para moderación y una integración con Notion para dejar cada reseña aceptada lista para el show.

</details>

### plicara/articles

<details><summary>README 발췌</summary>

Code behind Plicara's published research articles. This is the public counterpart to articles-workbench, which stays private: drafts are written there, and the code that produced their numbers is published here once the piece is out.

</details>

### prakashkagitha/djev

<details><summary>README 발췌</summary>

Jev-compatible decisions that repeat, bit for bit.

</details>

### PrathamS1/crawl-my-feed

<details><summary>README 발췌</summary>

A high-performance, real-time terminal crawler that streams an authenticated user's personal Reddit home feed and evaluates incoming submissions against specified lead criteria using TypeSafe's System One AI model Jev and the Noul (probabilistic Yes/No) primitive.

</details>

### pratikpakhale/jevx

<details><summary>README 발췌</summary>

A Chrome extension that cleans up your X timeline. You describe what you don't want to see in plain English, and TypeSafe's Jev model checks each post against your rules. You use your own API key, and nothing goes through a JevX server.

</details>

### rafaelleaomed/rafaelleaomed

<details><summary>README 발췌</summary>

Physician building at the intersection of Healthcare, Artificial Intelligence, Digital Products and Clinical AI Evaluation.

</details>

### ramadhaninsan/jev-poc

<details><summary>README 발췌</summary>

A workable PoC of the "Jev as the decision model in a scraping loop" pattern, mirroring shhivv/third-hand (JevClient.swift) — perceive -&gt; decide -&gt; act, with a cheap structured-decision model choosing every next action.

</details>

### randilt/jev-guardrail-benchmark

<details><summary>README 발췌</summary>

This repo holds two benchmarks of the TypeSafe Jev guardrails in WSO2 AI Gateway:

</details>

### Ray0907/pi-loop

<details><summary>README 발췌</summary>

Claude Opus plans, pi implements in herdr panes, a second pi model reviews the code, and a fresh Opus checks the result against the original request. A deterministic Python driver runs the loop; TypeSafe Jev makes the small judgment calls.

</details>

### relevan-dev/decision-model-eval

<details><summary>README 발췌</summary>

&gt; [!NOTE] &gt; This repository is archived and will not be updated. It is published for &gt; reference only.

</details>

### ReneGucci94/jev-scout-filter

<details><summary>README 발췌</summary>

Filtro para shorts de minidrama (TikTok, Reels, YouTube Shorts) antes de scrapear o regenerar. Jev elige una acción y el programa la traduce a KEEP, SKIPDUPLICATE, DROP o HOLD.

</details>

### Reverie0123/send-guard

<details><summary>README 발췌</summary>

当前版本：v0.6.3 · Edge 商店安装 · 在线试玩 · 更新日志

</details>

### rhithesh/youtube-focus

<details><summary>README 발췌</summary>

A Chrome extension that blurs YouTube videos, X posts and LinkedIn posts that are clickbait, spam, or irrelevant to goals you write yourself. Hover one and the blur lifts so you can read it and click through. Judgement comes from TypeSafe's Jev, a System One model: you hand it state plus typed quest

</details>

### rohitdevade/topiclens-for-youtube

<details><summary>README 발췌</summary>

TopicLens is a Chrome Manifest V3 extension that filters YouTube continuously including cards loaded during infinite scrolling and in-page navigation—using two topic lists:

</details>

### Romay777/laya-telegram-mod

<details><summary>README 발췌</summary>

A self-hosted Telegram bot that checks every message in your group with an AI classifier. It deletes spam, advertising and insults, and restricts the sender on an escalating penalty ladder.

</details>

### sanlega/openbot-ios

<details><summary>README 발췌</summary>

Your AI team, in one local-first desktop workspace.

</details>

### shibammitra24/jev-guard

<details><summary>README 발췌</summary>

Coding agents like the Antigravity agent don't just suggest code anymore — they run shell commands, edit and delete files, fetch URLs, and drive a real browser, autonomously and by default. That's what makes them useful, and it's also what makes one bad plan (or one prompt injection hidden in a READ

</details>

### shubham5027/Jev_Guardtrails

<details><summary>README 발췌</summary>

This FastAPI OpenAI-compatible gateway uses a two-stage safety pipeline:

</details>

### ShupingR/scam-shield

<details><summary>README 발췌</summary>

Checks a text message for scam signals with TypeSafe's Jev model, then turns those signals into an explainable verdict with rules you control.

</details>

### siddharth143/trustsafety-classifier

<details><summary>README 발췌</summary>

An empirical content moderation benchmark and production-grade evaluation gate comparing TypeSafe Jev (System One decision primitive) against frontier general-purpose LLMs (Claude Sonnet 5.5, Gemini Flash 3.8, and Claude Haiku 4.5) on a stratified 6,000-comment dataset.

</details>

### simonridd/Genesys-aqm

<details><summary>README 발췌</summary>

A provider-neutral quality management prototype. The built-in 19 conversations and optional demo history are fictional. Genesys Cloud mode uses browser Authorization Code + PKCE after a user signs in. Voice retrieval stays direct; email content uses the trusted Cloud Run API with the same user autho

</details>

### smha1012/jev-torch

<details><summary>README 발췌</summary>

Results · Metrics · Quick start · How it works · Data format · Hardware · RunPod guide · Inference · Roadmap

</details>

### sonda-ml/sonda-server

<details><summary>README 발췌</summary>

A /v1/systemone decision server for sonda models: models that answer typed questions — yes/no, choice, score — about a piece of evidence in one forward pass, with calibrated probabilities.

</details>

### Srinivasa314/hn-comment-filter

<details><summary>README 발췌</summary>

A Chrome extension that shows you the Hacker News comments worth reading.

</details>

### sususu98/pi-jev-navigator

<details><summary>README 발췌</summary>

Context routing for Pi Coding Agent using TypeSafe Jev: code directories, SOP skills, and Hermes memory guards are selected before the main agent runs.

</details>

### thechristobal/llm-roundtable

<details><summary>README 발췌</summary>

A desktop app that puts ChatGPT, Claude, and Gemini in a moderated debate — and grades them on the way out.

</details>

### thy10086/ros2-resilience-guardian

<details><summary>README 발췌</summary>

面向 Webots/ROS 2 机器人的任务感知零信任安全韧性守护器。项目基于 RobResilience 的实验思想，加入攻击事件验证、攻击生命周期、动态风险评估、缓解重规划和独立安全状态机。

</details>

### tpaulshippy/shady-town

<details><summary>README 발췌</summary>

A social-deduction party game for the living room TV. Humans play, the TV moderates.

</details>

### trouble-agent/guard

<details><summary>README 발췌</summary>

A lightweight, language-neutral message-security filter. One core, many callers: crier (Go, in-process), task-router (Python, over HTTP), shell scripts (piped through the CLI). The contract is deliberately the same shape crier's internal/guard already speaks, so adopting it is not a second dialect.

</details>

### tx-smitht/jev-focus-guard

<details><summary>README 발췌</summary>

A local, unpacked Chrome extension that asks Jev (System One) whether likely page elements are ads or distractions, then hides only the elements Jev confidently marks for removal.

</details>

### uditakankananonononono/sugarcode-ai

<details><summary>README 발췌</summary>

Current honest status: see STATUS.md - what is verified, thin, and Missing, updated each push. The latest prior full-suite result was 2,279 passed / 1 failed; a narrow guard fix now passes 39 targeted tests, but a fresh full-suite result is pending.

</details>

### undeemed/jev-mod

<details><summary>README 발췌</summary>

Open-source Discord moderation bot powered by Jev, TypeSafe’s decision model.

</details>

### vidux/iso-jevdit

<details><summary>README 발췌</summary>

An npm CLI that audits a codebase against ISO/IEC 27001:2022 Annex A and writes a detailed iso-jevdit-report.md you can hand to an auditor.

</details>

### vstrofago/vigia

<details><summary>README 발췌</summary>

Español · Website · Docs · Playground

</details>

### walteraandrade/estante

<details><summary>README 발췌</summary>

Shared shelf of album and track recommendations for the estudos de psicoacústica group. SvelteKit app with the Hono API mounted at /api/ (src/routes/api/[...path]/+server.ts), libSQL (SQLite locally, Turso in production), and a Svelte 5 UI in src/routes/+page.svelte and src/lib/components/. Filters 

</details>

### wobsoriano/webkit95

<details><summary>README 발췌</summary>

webkit95 is a macOS browser built on WKWebView and styled after Internet Explorer 3 and 4 on Windows 95. The left Explorer Bar holds an AI assistant that talks to fx over the Agent Client Protocol (ACP). It is an homage. Microsoft has nothing to do with it, and all icons and art are original.

</details>

### wtcooper/ai-security-guardrails

<details><summary>README 발췌</summary>

A low-latency, low-cost runtime guardrail classifier built on System One models, meaning non-generative models that answer typed questions with calibrated probabilities in a single forward pass. It screens LLM and agent traffic for risks from the OWASP Top 10 for LLM Applications 2026, OWASP MCP Top

</details>

### xreedev/hoichoi-hackathon

<details><summary>README 발췌</summary>

BreakSense analyses a long-form OTT episode, finds every moment that is safe and natural for an ad break, and matches each break to the most relevant brand from a catalogue. It emits a VMAP 1.0.1 / VAST 4.2 manifest that a video player can consume directly, along with a full-featured browser UI.

</details>

### yanjn1388/jev-bayes

<details><summary>README 발췌</summary>

判断特化モデル Jev（TypeSafe AI）に、真の確率がベイズの定理で厳密に求まる問題を渡し、返ってくる確率の較正と「基準率の無視」を測った実験のコードとデータです。

</details>

### yelina123/custom-barrage-ai-filter

<details><summary>README 발췌</summary>

一个运行在 Chrome / Edge 浏览器（其它浏览器未测试）中的 B 站弹幕过滤扩展，使用 TypeSafe Jev 按你自定义的规则分析弹幕，帮助屏蔽不想看到的内容（剧透、骂人、引战等均可）。

</details>

### yodablocks/duckdb-jev

<details><summary>README 발췌</summary>

DuckDB scalar functions over TypeSafe AI's Jev model, so unstructured text columns can be filtered and sorted like numeric ones.

</details>

### yuviiitm26/av-voice-pipeline

<details><summary>README 발췌</summary>

A production-grade, modular, fully runnable Python notebook implementing an end-to-end Audio-Visual Target Speaker Extraction → ASR → Decision → Action pipeline.

</details>

### zachlandes/jev-dialect-bias

<details><summary>README 발췌</summary>

This repository reruns a well-known AI bias experiment on TypeSafe's Jev model (version jev-1.13.0), so anyone can check our numbers or run it again.

</details>

### Abhishekfm/JevCheck

<details><summary>README 발췌</summary>

Extract a CSV, Excel, PDF or PNG/JPEG file and let TypeSafe Jev decide whether it is valid: no PII, no sexually explicit content, well-formed, and of acceptable quality.

</details>

### aigauravsingh-star/jevrails

<details><summary>README 발췌</summary>

JevRails is a hybrid security guardrails library for LLM applications.

</details>

### Kushagr142/jev-filter

<details><summary>README 발췌</summary>

A Chrome extension that asks TypeSafe Jev 1.13, through OpenRouter, whether X posts match your categories. Matching posts can be highlighted red or hidden.

</details>

### omataak/jev-guardrail-demo

<details><summary>README 발췌</summary>

Jevを使った、テキスト入力のガードレール実装例です。

</details>
