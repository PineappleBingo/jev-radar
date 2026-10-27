# 🛡️ 가드레일·모더레이션 (475)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [firelex/jeff](https://github.com/firelex/jeff) | 1555 | 82 | Millisecond decisions, any domain: a 0.8B open "System 1" model that picks between your options with calibrated probabilities. One base, swappable LoRA adapters, on your own hardware. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +11](../README.md#legend "최근 7일 동안 별이 11개 늘었습니다") | 2026-10-07 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 127 | 20 | 다양한 코딩 에이전트의 도구 호출과 결과를 검사해 위험한 명령과 프롬프트 인젝션을 차단하는 보안 훅 라이브러리다.<br>도구 호출의 위험도(risk), 사용자 요청 부합 여부(user_requested), 신뢰할 수 없는 출처 기반 여부(from_untrusted)를 질의해 판단한다.<br>외부 의존성 없이 Claude Code, Cursor 등 여러 에이전트에 thin 어댑터로 연결되며 도구 실행 전후 및 인스트럭션 파일을 검사한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +20](../README.md#legend "최근 7일 동안 별이 20개 늘었습니다") | 2026-10-02 |
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 163 | 16 | Pi 코딩 에이전트의 도구 호출과 출력 결과를 TypeSafe Jev API로 검사하고 제어하는 확장 도구다.<br>명령의 파괴성·데이터 유출·범위 초과·피해 수준과 출력의 비밀정보 누출·실패 유형을 noul, score, choice로 판단한다.<br>도구 실행 전 게이트 판단을 한 번의 요청(약 300ms)으로 처리하며, 오류 발생 시 실행을 차단하지 않는 fail-open 방식으로 동작한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](../README.md#legend "선택지 중 하나를 고르게 합니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") [`score`](../README.md#legend "등급을 매기게 합니다") | 2026-10-17 |
| [qkal/Canny](https://github.com/qkal/Canny) | 124 | 17 | Claude Code와 Codex CLI에서 코딩 에이전트가 검증 절차 없이 작업을 마쳤다고 주장하지 못하게 감시하는 훅 도구이다.<br>에이전트 메시지가 작업 완료를 주장하는지, 변경된 diff가 특정 규칙을 위반했는지 여부를 예/아니오 확률로 판단시킨다.<br>런타임 의존성이 없고, 원장의 사실 기록만 작업을 차단할 수 있으며 Jev의 판단 결과는 차단 없이 에이전트의 컨텍스트 조언으로만 사용된다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") | 2026-09-22 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | 92 | 10 | 웹페이지 내 DOM 요소를 탐색해 TypeSafe Jev 모델의 판단에 따라 광고 요소를 실시간으로 제거하는 크롬 확장 프로그램이다.<br>추출된 각 DOM 후보 요소의 태그, 클래스, 텍스트 요약 등을 바탕으로 유료 광고(paid advertisement)인지 여부를 noul 확률 질문으로 판단시킨다.<br>광고 후보 선별과 배치는 순수 코드로 처리하고 시맨틱 판별만 Jev에 일괄 요청하며, 설정된 임계 확률을 넘기면 애니메이션과 함께 요소를 제거한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") | 2026-09-17 |
| [cisco-ai-defense/skill-scanner](https://github.com/cisco-ai-defense/skill-scanner) | 2646 | 337 | AI 에이전트 스킬 파일에서 프롬프트 인젝션, 데이터 유출, 악성 코드 패턴을 탐지하는 보안 분석 도구다.<br>스킬 파일의 의미적 위험 요소나 악성 행위 포함 여부를 choice 또는 noul로 판정하도록 모델에 질문할 수 있다.<br>정적 분석(YARA-X), AST·데이터 흐름 분석, cel-go 기반 규칙 엔진, 선택적 LLM 판정기를 결합하여 다층으로 위험을 검사한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +34](../README.md#legend "최근 7일 동안 별이 34개 늘었습니다") | 2026-10-26 |
| [ZeroTang05/VideoAdGuard](https://github.com/ZeroTang05/VideoAdGuard) | 761 | 37 | 비리비리 이용자가 영상 속 협찬 및 PPL 구간을 감지해 건너뛸 수 있도록 돕는 브라우저 확장 프로그램이다.<br>영상의 각 자막 줄이 협찬이나 PPL 광고에 해당하는지 여부를 noul 형식으로 묻는다.<br>광고 확률 0.5 이상인 자막을 중심으로 0.2 이상 구간까지 연속된 자막을 묶는 이중 임계값 병합 방식을 쓴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [spamscanner/spamscanner](https://github.com/spamscanner/spamscanner) | 373 | 40 | Spam Scanner is a Node.js anti-spam, email filtering, and phishing prevention tool and service. Built for @ladjs, @forwardemail, @cabinjs, @breejs, and @lassjs. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [MillionSend/millionsend](https://github.com/MillionSend/millionsend) | 253 | 25 | AWS SES를 기반으로 자체 호스팅하거나 클라우드로 사용할 수 있는 Resend 호환 오픈소스 이메일 발송 플랫폼이다.<br>발송된 이메일 샘플에 대해 유해 콘텐츠 및 어뷰징 여부를 판단하도록 백그라운드에서 점수 채점(score)을 요청한다.<br>발송 지연을 막기 위해 SES 수락 후 백그라운드에서 비동기로 샘플을 채점하며, 셀프 호스트 환경에서는 기본 비활성화되어 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +21](../README.md#legend "최근 7일 동안 별이 21개 늘었습니다") | 2026-10-26 |
| [JamesANZ/JevPromptShield](https://github.com/JamesANZ/JevPromptShield) | 202 | 46 | 코딩 에이전트의 입력 프롬프트와 실행 예정인 셸 명령어를 외부에서 검사해 악성 행위를 차단하는 보안 도구다.<br>사용자 프롬프트가 안전한지 점수화하고 실행하려는 Bash 명령어가 안전한지 여부를 확률로 판단한다.<br>명백한 명령어는 로컬 정책으로 즉시 처리하고 판단이 애매한 경우만 Jev로 검사하며 대화 맥락을 넘겨 우회 시도를 잡아낸다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-27 |
| [zhuobichen/weflow-cli](https://github.com/zhuobichen/weflow-cli) | 124 | 52 | 本地优先的微信数据工具：聊天记录查询导出、公众号日报与个人知识库（MCP 兼容） | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +15](../README.md#legend "최근 7일 동안 별이 15개 늘었습니다") | 2026-10-26 |
| [jev-sec/jev-ids](https://github.com/jev-sec/jev-ids) | 25 | 2 | 네트워크 플로우 데이터와 라벨 예시를 보고 침입 여부와 공격 유형을 판별하는 보안 탐지 도구다.<br>네트워크 플로우가 공격인지 여부와 공격 카테고리가 5개 선택지 중 무엇인지 묻는다.<br>텍스트 생성 없이 확률과 선택지 형식으로 직접 판별해 LLM보다 훨씬 빠르고 저렴하다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-10-12 |
| [TiraelSedai/ClubDoorman](https://github.com/TiraelSedai/ClubDoorman) | 69 | 11 | 텔레그램 대형 채팅방에서 캡차, 텍스트 필터, LLM을 결합해 스팸을 감지하고 차단하는 텔레그램 안티스팸 봇이다.<br>기존 ML 점수가 모호한 구간(-0.5~0.5)의 메시지가 스팸(spam)인지 정상(ham)인지와 해당 분류의 확신도를 판단시킨다.<br>Jev와 Luna 두 모델의 라벨 일치와 80% 이상 확신도를 모두 요구해 자동 데이터셋 추가 및 재학습 파이프라인의 오탐을 방지한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [Singularity-Compute/super-decider](https://github.com/Singularity-Compute/super-decider) | 19 | 0 | Decisions, not essays: a choice, a yes or no, or a score with a calibrated probability. Open weights, Jev-compatible API, adaptive thinking. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🔥 +14](../README.md#legend "최근 7일 동안 별이 14개 늘었습니다") | 2026-10-26 |
| [merefield/discourse-chatbot](https://github.com/merefield/discourse-chatbot) | 85 | 21 | An AI bot with RAG capability for Topics, Chat &amp; Customer Support in Discourse, with first class support for the big 4. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [yikangy873-gif/jev-desktop](https://github.com/yikangy873-gif/jev-desktop) | 76 | 2 | TypeSafe Jev action selection inside Codex Computer Use | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-22 |
| [Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) | 13 | 1 | pi 코딩 에이전트의 부작용 도구 호출이 사용자의 자연어 제약 조건에 어긋나는지 실행 전 점검·차단하는 런타임 제약 가드레일이다.<br>사용자 발화마다 기존 정책의 변경 상태(KEEP, LIFT, NARROW 등)와 작업 허가 신호 여부를 Jev에 분류시킨다.<br>Jev는 좁은 범위의 유한 선택지 분류만 수행하며, 규칙 상태를 세션 단위 구조적 op로 영속화해 컴팩션 후 재질의 없이 복원한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](../README.md#legend "선택지 중 하나를 고르게 합니다") [`noul`](../README.md#legend "예/아니오 확률을 묻습니다") | 2026-10-13 |
| [HsMirage/AIPlanHub](https://github.com/HsMirage/AIPlanHub) | 168 | 1 | 还在苦苦搜索各家Coding/Token plan套餐信息对比？AIPlanHub — 一站式对比主流 AI 订阅方案，覆盖编程 · 视频 · 图片 · 音频多场景。信息及时更新，套餐价格、用量一目了然！ | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [madisonrickert/jev-permission-gate](https://github.com/madisonrickert/jev-permission-gate) | 32 | 3 | Claude Code의 auto mode에서 도구 호출 권한을 내장 분류기 대신 빠르게 승인하거나 거부하는 플러그인이다.<br>요청 부합 여부, 위험도 검사, 조작 시도(steering)를 포함한 8가지 예/아니오 질문의 확률을 판단하게 한다.<br>확실한 호출만 직접 처리해 응답 속도를 2배 줄이고 애매한 호출이나 차단 목록 명령어는 내장 분류기로 넘긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [Endgame-Labs/goated](https://github.com/Endgame-Labs/goated) | 46 | 9 | Always-on personal AI assistant built around Claude Code and Codex. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-21 |
| [brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) | 49 | 6 | Discord 서버 관리자가 스팸·피싱 링크를 차단하고 멤버 성향을 분석하기 위해 사용하는 Python 기반 모더레이션 봇이다.<br>실시간 메시지의 스팸 및 피싱 링크 여부와 유저 최근 메시지의 사기 위험·스팸·초보성·유해성·도움 수준 점수를 판별한다.<br>오탐된 메시지를 사면하면 안전 선례로 저장해 추후 검사에 반영하는 동적 학습 및 SQLite 기반 캐싱을 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [nabeelxy/syara](https://github.com/nabeelxy/syara) | 20 | 5 | 보안 담당자가 프롬프트 주입이나 피싱 같은 악성 텍스트와 위협 패턴을 탐지할 때 쓰는 YARA 호환 규칙 엔진 라이브러리다.<br>입력 텍스트나 이벤트 데이터가 보안 위협 조건에 부합하는지 여부를 구조화된 결과로 판단하게 한다.<br>기존 YARA 문법에 임베딩 기반 유사도 검사와 분류 모델 및 결정 모델 평가를 결합해 순차적으로 실행한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [caiovicentino/jev-risk-check-provider](https://github.com/caiovicentino/jev-risk-check-provider) | 12 | 1 | x402 결제 프로토콜에서 에이전트 결제 주체의 위협과 사기 위험도를 Jev로 채점하고 ES256 서명 증명을 발급하는 서비스다.<br>위협 프로필·제재 대상·자금세탁 패턴·피싱 도메인 여부를 noul로, 위험 유형을 choice로, 신뢰도를 0~4 rubric score로 질의한다.<br>결제 상태에 대해 원자적 Jev 질문들을 병렬 평가한 후 확정적 코드로 합성 점수를 산출하며, ES256 JWS 증명으로 검증 신뢰를 보장한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [0sparsh2/GAX](https://github.com/0sparsh2/GAX) | 8 | 0 | AI 에이전트의 셸 명령과 MCP 호출을 사전에 등록된 레지스트리와 권한 토큰 기반으로 제어·감사하는 거버넌스 실행 레이어다.<br>README에 판단 지점 설명 없음<br>임의 셸 실행을 차단하고 사전 등록된 명령만 허용하며 실행 전 capability 검증과 위험 수준 상한(danger ceiling)을 강제한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [TannerMidd/SpecPi](https://github.com/TannerMidd/SpecPi) | 17 | 0 | Pi 코딩 에이전트의 작업 범위와 도구 권한, 명령 실행을 안전하게 제어하는 하네스 설정이다.<br>에이전트가 실행하려는 셸 명령어가 시스템에 위험한지 또는 안전한지를 판단시킨다.<br>명령 실행 전 로컬 분류기나 이전 호스팅 모델(Jev)로 셸 위험도를 채점해 위험 명령을 차단하거나 확인을 거친다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [ironbee-ai/ironbee-express](https://github.com/ironbee-ai/ironbee-express) | 13 | 0 | The fastest, cheapest browser agent (with Jev), with deep reasoning when it matters | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [0xmdinc/jev-medical-bench](https://github.com/0xmdinc/jev-medical-bench) | 12 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [jerryfane/omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction) | 12 | 2 | Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [KiritoKing/midscene-jev-runner](https://github.com/KiritoKing/midscene-jev-runner) | 12 | 0 | Community-maintained JEV runner integration for Midscene Test | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-21 |
| [beerandcodeteam/workshop-jev](https://github.com/beerandcodeteam/workshop-jev) | 11 | 5 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [Dino-Kupinic/blackrose](https://github.com/Dino-Kupinic/blackrose) | 6 | 1 | LLM 입력과 출력 생성 전후로 보안 검사를 수행해 허용 여부를 판정해 주는 라이브러리다.<br>탈옥 시도 여부와 사람 검토 필요성을 noul로, 유해요소 심각도를 score로 측정해 최종 조치 결정을 묻는다.<br>검사 결과 확신도가 낮을 때 묵인하지 않고 기본값으로 review 상태를 반환하도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [pengchujin/ad-radar](https://github.com/pengchujin/ad-radar) | 26 | 4 | 开源浏览器插件：在小红书、微博、X、知乎上按关键词和博主折叠内容；用你自己的 Jev API key 识别广告、AI、军事、政治等话题。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [harshithsunku/learn-jev-end-to-end](https://github.com/harshithsunku/learn-jev-end-to-end) | 20 | 4 | Learn Jev end to end: a free hands-on course. Build 13 AI agent use cases with a fast brain (Jev) and a slow brain (LLM). One OpenRouter key. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [NodarDavituri/fast-compact](https://github.com/NodarDavituri/fast-compact) | 8 | 2 | /fc for Claude Code: shrink old tool output in about a second — Jev keeps what's still needed, every cut saved to a file. Your /compact stays untouched. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [jmrenouard/MicroLLM](https://github.com/jmrenouard/MicroLLM) | 5 | 0 | AI 에이전트 파이프라인에서 생성형 거대 모델 대신 로컬 CPU 환경에서 가볍고 빠르게 정형화된 확률적 판단을 내리게 돕는 오픈소스 엔진이다.<br>의도 라우팅(choice), 정책 준수 여부(noul), 심각도 평가(score), 안전 가드레일 필터링을 판단하도록 묻는다.<br>경량 INT8 ONNX 모델과 순환 회전을 활용해 선택지 순서 편향을 없애고 로컬 CPU 환경에서 밀리초 미만의 빠른 속도로 판단을 처리한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [ilyamk/jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling) | 23 | 7 | JevMail - Self-hosted AI email classifier for Gmail powered by Jev. Create custom labels, organize your inbox, and filter spam with confidence and cost controls. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [amithgc/local-jev](https://github.com/amithgc/local-jev) | 20 | 4 |  A local, offline System One server compatible with TypeSafe's Jev API. It answers typed yes/no, category and score questions with small open models. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [gordonbrander/jevgate](https://github.com/gordonbrander/jevgate) | 9 | 2 | Smarter cron with Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [Sarim-MBZUAI/awesome-jev-security](https://github.com/Sarim-MBZUAI/awesome-jev-security) | 7 | 0 | Curated list of papers on the security, robustness, and safety of TypeSafe Jev / System One models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-22 |
| [BenCaunt/jev-box-tracking](https://github.com/BenCaunt/jev-box-tracking) | 6 | 1 | Realtime object tracking with TypeSafe Jev Box questions, optical flow, and a Kalman filter | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [FrancoisChastel/skill-scanner](https://github.com/FrancoisChastel/skill-scanner) | 3 | 0 | 코딩 에이전트가 스킬을 설치하기 전에 프롬프트 주입이나 숨겨진 악성 코드를 오프라인 정적 분석으로 탐지하고 설치를 차단하는 보안 도구다.<br>정적 분석으로 탐지된 잠재적 보안 위험 결과가 실제로 유효한지 의심하거나 확증하도록 판단을 요청한다.<br>외부 런타임 의존성 없이 로컬에서 동작하며 에이전트 환경의 설치 경로에 훅으로 개입해 위험한 스킬을 차단한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [Onsraa/cressey](https://github.com/Onsraa/cressey) | 3 | 0 | Cressey는 AI 에이전트와 도구 호출 사이에 위치해 사기 삼각형 모델을 바탕으로 위험한 도구 실행을 사전에 차단하는 보안 가드레일 프록시다.<br>Jev는 에이전트가 남긴 발언을 분석해 목표 달성에 대한 압박감(pressure)과 부적절한 행위를 정당화하려는 변명(rationalization) 수준을 점수로 평가한다.<br>사기 삼각형 이론을 인용해 에이전트의 심리 요인과 코드 규칙 기반의 기회 탐지를 결합해 동작을 차단하고 복구 가이드를 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [SoniaMehta14/paved-gate](https://github.com/SoniaMehta14/paved-gate) | 3 | 0 | 프론티어 LLM 호출 전에 인바운드 요청의 안전성, 라우팅, 필요성을 빠르게 검사하고 차단 또는 처리하는 수집 게이트웨어 오픈소스 라이브러리다.<br>Jev 모델을 통해 intent(choice, 3개 라우트), risk(score, 1-5점 루브릭), sensitive(noul, PII/PHI 여부) 세 가지를 판단시킨다.<br>1회 호출로 3가지 타입 질의를 약 100ms 내에 병렬 처리하며, 결정마다 정책 해시와 원시 점수를 포함한 구조화된 감사 로그(JSONL)를 남긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [CodeAlive-AI/mastra-jev-moderation](https://github.com/CodeAlive-AI/mastra-jev-moderation) | 7 | 2 | Mastra 에이전트의 사용자 입력을 TypeSafe Jev API로 검사해 유해 메시지를 차단하는 단일 파일 기반 프로세서다.<br>마지막 입력 메시지가 정책상 차단 대상인지 여부(noul 확률)와 위반 카테고리(choice)를 한 번의 요청으로 판단시킨다.<br>텍스트 파싱 없이 확률값으로 직접 차단 여부를 결정하며, 타임아웃 및 오류 시 페일오픈과 60초 서킷 브레이커를 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [harrymunro/jev-laya-benchmark](https://github.com/harrymunro/jev-laya-benchmark) | 5 | 0 | Speed and accuracy benchmark: TypeSafe's Jev API vs the local Laya MLX typed-decision model on synthetic tasks | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [mohi-devhub/SentinelLM](https://github.com/mohi-devhub/SentinelLM) | 5 | 0 | A FastAPI middleware that intercepts LLM requests and responses in real time, scoring them for prompt injection, PII leakage, toxicity, hallucination, and relevance.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [pavy23/morning-tech-briefing](https://github.com/pavy23/morning-tech-briefing) | 5 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [zehfernandes/checagemaovivo](https://github.com/zehfernandes/checagemaovivo) | 5 | 2 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [ziyacivan/jev-mail-filter](https://github.com/ziyacivan/jev-mail-filter) | 5 | 0 | Gmail filters written in plain English, judged by Jev (TypeSafe) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch) | 13 | 1 | Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [funkadelic/ha-gutcheck](https://github.com/funkadelic/ha-gutcheck) | 4 | 0 | Home Assistant integration that uses TypeSafe AI's Jev to spot problems and suggest cleanups in your install, and asks before changing anything | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [Faycall1l/bouncer](https://github.com/Faycall1l/bouncer) | 2 | 0 | 디스코드나 트위치 같은 실시간 채팅에서 커뮤니티별 규칙을 반영해 메시지 위반 여부를 판별하는 모더레이션 도구다.<br>위반 규칙 선택과 유해성·분위기 등급, 프롬프트 인젝션 및 사람 이관 필요 여부를 한 번에 묻는다.<br>서버별 규칙이 달라도 모델 재학습 없이 단 한 번의 추론으로 다섯 가지 판단을 33ms 내에 처리한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [Koushik890/jev-firewall](https://github.com/Koushik890/jev-firewall) | 2 | 0 | Claude Code나 Codex 같은 AI 코딩 에이전트의 도구 호출을 로컬 실행 전에 가로채 검사하는 실시간 방화벽 도구다.<br>에이전트의 도구 실행 요청에 대해 허용, 확인 요청, 차단 중 어떤 조치를 취해야 할지 allow, ask, block 선택지로 묻는다.<br>규칙 기반 분석과 판단 모델을 조합해 동작하며 모델의 확신도가 낮을 때만 사용자에게 확인을 넘기도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [liaocaoxuezhe/x-reply-judge-jev](https://github.com/liaocaoxuezhe/x-reply-judge-jev) | 2 | 1 | X의 게시글과 답글 텍스트를 분석해 AI 작성 확률을 배지로 표시해 주는 크롬 확장 프로그램이다.<br>입력된 텍스트가 주로 AI에 의해 생성되었는지를 noul 질문으로 물어 예라고 답할 확률을 판단하게 한다.<br>10자 이하 단문은 로컬에서 20%로 고정해 API 비용을 아끼고 결과는 브라우저 로컬 저장소에 7일 동안 캐시한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [RzMY/BiliBili-Filter](https://github.com/RzMY/BiliBili-Filter) | 2 | 0 | 네트워크 프록시 도구 Quantumult X에서 TypeSafe Jev를 연동해 비리비리 추천 영상 목록을 걸러내는 재작성 스크립트다.<br>영상의 제목과 소개글, 태그 같은 메타데이터를 넘겨 저품질 콘텐츠나 마케팅성 영상을 추천 목록에서 제외할지 판단한다.<br>JSON 응답 형태의 추천 API만 지원하며 gRPC나 검색 결과 같은 프로토콜 및 화면은 처리하지 못한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [snapif/snapif](https://github.com/snapif/snapif) | 2 | 0 | 도구 호출을 평가해 자동 승인, 검토, 거부 중 하나로 판단하는 러스트 기반 CLI 도구다.<br>도구 호출의 위해 유형과 신뢰도를 채점해 호출을 허용할지, 사람 검토를 거칠지, 차단할지 판단한다.<br>Claude Code의 PreToolUse 훅으로 연동할 수 있으며, 거부 결정 전에 섀도 모드로 판정을 모니터링할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [zahlekhan/claudetiquette](https://github.com/zahlekhan/claudetiquette) | 2 | 0 | Claude Code에 입력한 프롬프트에서 거친 표현이나 욕설을 감지해 정중한 요청문으로 고쳐주는 플러그인이다.<br>입력된 문장이 정상인지 욕설인지 아니면 모욕적인지 세 가지 분류 중 하나로 판단하게 한다.<br>판단 모델과 재작성 모델을 로컬에서 조합해 쓰고 재작성된 문장도 유해한지 다시 검사한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [fazlerocks/jev-adblock](https://github.com/fazlerocks/jev-adblock) | 10 | 2 | Open-source AI ad blocker for Chrome. No filter lists: TypeSafe AI's Jev model decides what is an ad. Bring your own key. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [DataGobes/jev-demos](https://github.com/DataGobes/jev-demos) | 4 | 0 | Small, honest demos of TypeSafe's Jev inside tools data engineers already use | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [andrelandgraf/safer-with-jev](https://github.com/andrelandgraf/safer-with-jev) | 5 | 2 | 요청 본문을 검사하여 프롬프트 인젝션이나 안전하지 않은 응답을 차단하고 통과 시 업스트림으로 전달하는 Neon Function 기반 프록시다.<br>요청 본문이 프롬프트 인젝션인지, 응답 텍스트가 안전하지 않은지, 또는 전달받은 텍스트가 양호한지 등을 판단한다.<br>판단 결과에 따라 review 또는 block 시 차단(403)하고 pass 시 지정한 target URL로 요청 바이트를 그대로 포워딩한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [godspede/construct-auto-classifier](https://github.com/godspede/construct-auto-classifier) | 7 | 1 | Effect-based safety gate for AI coding agents' shell commands (OpenCode, Antigravity): fast structural rules, then TypeSafe's Jev or a chat model judges what a command does. Certified with Jev at zero dangerous commands allowed. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [AWoLnik/SoulsBench](https://github.com/AWoLnik/SoulsBench) | 3 | 0 | Dark Souls benchmark for decision models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [coo-quack/jev-pii-checker](https://github.com/coo-quack/jev-pii-checker) | 3 | 2 | CLI that finds PII in text with TypeSafe Jev: presence, sensitivity, and located spans | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [PiPyL/jev-zenfeed](https://github.com/PiPyL/jev-zenfeed) | 3 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [soderlind/jev-comment-triage](https://github.com/soderlind/jev-comment-triage) | 3 | 0 | Async Jev-powered WordPress comment triage: background spam, scam/phishing, and toxicity moderation that keeps comment submission fast. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [xsyetopz/claudetto](https://github.com/xsyetopz/claudetto) | 3 | 0 | A very opinionated Claude Code plugin designed by a Rustacean obsessed with harness engineering | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [ItisShikhar/gg-friggin-ez](https://github.com/ItisShikhar/gg-friggin-ez) | 7 | 0 | Fast, drop-in multilingual profanity and toxicity screener for Node.js, powered by System 1 models like TypeSafe AI Jev and Laya. Catches leetspeak, character spacing, and romanized profanity across languages including Kannada, Telugu, Tamil, Hindi, and Bengali. ~50-500ms latency. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [amyrmahdy/decima](https://github.com/amyrmahdy/decima) | 2 | 1 | Small local judges and guards for LLM apps: calibrated decisions, prompt-injection and leak checks on a CPU. English, Arabic, Persian. Runs in your browser too. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [pragmaticfrontier/jez](https://github.com/pragmaticfrontier/jez) | 2 | 0 | An open source non-generative AI decision model that returns typed answers with calibrated probabilities | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [bismawy/pi-jev-eye](https://github.com/bismawy/pi-jev-eye) | 1 | 0 | Pi 코딩 에이전트 환경에서 파괴적 명령어와 비밀키 유출을 막고 코드 품질을 검증하는 감독 도구다.<br>작성된 코드 변경분에 미완성 TODO나 대충 짠 스텁 코드가 있는지, 사용자의 요구사항과 일치하는지 판단한다.<br>정규식 검사와 테스트 실행 확인을 거친 10줄 이상의 코드 차이점만 선별해 Jev API로 검사하며 실패 시 기본 통과를 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [bit-cook/Jev-X-Blocker](https://github.com/bit-cook/Jev-X-Blocker) | 1 | 0 | X(구 트위터) 웹 브라우저에서 스팸과 유해 콘텐츠를 AI 모델로 감지해 자동으로 가려주는 크롬 확장 프로그램이다.<br>타임라인의 게시글이나 댓글 텍스트가 자연어로 정의된 각 필터링 규칙(true/false)에 부합하는지 확률을 계산하도록 요청한다.<br>뷰포트 안으로 스크롤된 글만 비동기로 판별하고 로컬 캐시와 Fail-Open 전략을 두어 브라우징 지연과 오차단 위험을 줄였다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [const-ahmed/unschema](https://github.com/const-ahmed/unschema) | 1 | 0 | Zod 같은 스키마 라이브러리 대신 자연어 규칙과 Jev 모델을 사용해 입력값을 검증하는 프로필 폼 웹 애플리케이션이다.<br>이메일 형식 유효성, 연령 범위(18~120세), 사람 이름 여부, 필드 간 일치 여부, 자기소개 글의 5단계 등급 평가를 판단시킨다.<br>입력 중 디바운스 검증과 제출 시 전체 필드 재검증을 수행하며, 사용자 입력을 지시어가 아닌 데이터로만 처리하도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [dragomano/smf-spam-judge](https://github.com/dragomano/smf-spam-judge) | 1 | 0 | SMF 2.1 포럼 운영자가 신규 가입 정보와 첫 게시글의 스팸 여부를 판별해 계정 제한과 승인 보류를 자동 처리하는 확장 기능이다.<br>신규 가입 데이터나 첫 게시글 본문이 ham, spam, review 중 어디에 해당하는지 choice 형태로 묻는다.<br>API 장애가 발생해도 가입과 작성을 차단하지 않는 fail-open 방식을 적용하고 TypeSafe와 OpenAI 규격을 함께 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [KonglingDaDa/zh-ste100-jev-skill](https://github.com/KonglingDaDa/zh-ste100-jev-skill) | 1 | 0 | AI 보고서와 기술 문서의 번역투와 모호한 표현을 항공 정비 작성 규격 기반으로 교정하는 에이전트 스킬이다.<br>정적 검사를 통과한 텍스트를 두고 첫 문장 결론의 확정성과 모호한 회피 표현 유무, 문장 자연성, 원의 보존도를 판단하게 한다.<br>외부 라이브러리 없는 파이썬 린터로 문맥 규칙을 먼저 거르고, Jev API 키가 없으면 심사를 건너뛰어 오프라인 환경에서도 쓸 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [Mellow-Artificial-Intelligence/liedar](https://github.com/Mellow-Artificial-Intelligence/liedar) | 1 | 0 | 문서의 메타데이터와 페이지 이미지를 분석해 위조나 사기 의심 징후를 탐지하는 CLI 및 웹 도구다.<br>렌더링된 문서 이미지를 바탕으로 시각적 변조나 조작 같은 15가지 사기 신호의 발생 확률과 신뢰도를 점수로 평가하게 한다.<br>픽셀 단위 중복 영역 검출과 메타데이터 추적을 모델 판단과 결합하며 확정 판정이 아닌 1차 선별용 신호로 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [murtazox04/Cue](https://github.com/murtazox04/Cue) | 1 | 1 | 여러 AI 에이전트와 자동화 도구가 사람에게 보내는 알림 빈도와 발송 시각을 개인별 예산으로 제어하는 오픈소스 게이트웨이다.<br>발송 직전 에이전트 메시지에 압박, 기만, 비밀 유출이 포함되었는지 혹은 중요도가 과장되었는지 여부를 판단하게 한다.<br>에이전트별 전송 키와 수신자 시간대별 방해 금지 시간을 두고, 위험한 알림이나 액션은 사람이 승인할 때까지 보류하도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [xi029/nocap](https://github.com/xi029/nocap) | 1 | 0 | RAG 파이프라인에서 생성 모델을 호출하기 전 검색된 근거가 질문에 부합하는지 판별해 답변 여부를 라우팅하는 가드레일 도구다.<br>질문과 검색 문서 발췌본을 보고 근거가 충분한지, 일부만 있는지, 누락됐는지, 상충하는지 네 가지 선택지 중 하나로 판별하게 한다.<br>판단 결과 확률을 저장해 두면 모델을 다시 부르지 않고도 임계값을 바꿔 재라우팅할 수 있고 MCP 서버와 CI 테스트 연동을 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [zhuyansen/x-reply-filter](https://github.com/zhuyansen/x-reply-filter) | 1 | 0 | X(트위터) 글 상세 페이지에서 스팸이나 어그로 같은 저품질 답글을 숨겨주는 크롬 확장 프로그램이다.<br>답글이 홍보성 스팸인지, 어그로성 반응인지, 주제에서 벗어났는지, AI가 생성한 상투어인지 네 가지 noul 확률 질문으로 묻는다.<br>로컬 규칙으로 1차 필터링한 뒤 남은 답글을 배치로 처리하며, 사용자가 직접 표시한 예시를 문맥으로 넣어 판단 정확도를 높인다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [MithrilMan/your-signal](https://github.com/MithrilMan/your-signal) | 6 | 1 | Open-source BYOK Chrome extension for personal, reversible X timeline filters. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [bitnovus/jev-spam-eval](https://github.com/bitnovus/jev-spam-eval) | 3 | 1 | TypeSafe Jev의 noul 질문을 활용해 이메일 스팸 및 피싱 여부를 제로샷으로 탐지하고 TF-IDF 베이스라인과 비교 평가하는 프로젝트다.<br>작성된 카테고리 정의와 이메일 맥락을 기반으로 해당 메일이 스팸이나 피싱인지 여부를 noul(예/아니오 확률)로 묻는다.<br>사전 파인튜닝이나 라벨 예시 없이 카테고리 정의만 사용해 5,733건의 테스트셋에서 98.64% 정확도를 기록하며 TF-IDF와 비교 검증했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [99darwin/nexus](https://github.com/99darwin/nexus) | 2 | 2 | Topological overview of everything happening in AI | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [adammiribyan/superfind](https://github.com/adammiribyan/superfind) | 2 | 0 | Ctrl-R for your coding agents: find past sessions by what you remember. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [edgelesssys/privatemode-decisions-benchmark](https://github.com/edgelesssys/privatemode-decisions-benchmark) | 2 | 0 | Benchmarking Jev/Laya/GLM-5.3 Flash for System One-like tasks | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [jovaneyck/jev-spamassassin](https://github.com/jovaneyck/jev-spamassassin) | 2 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [sawzhang/jev-demo](https://github.com/sawzhang/jev-demo) | 2 | 2 | Jev (TypeSafe System One) 学习与实测：概念文档 + 5 个可运行 demo + 可复现压测。实测 jev-1.13.0：扇出几乎免费，40 问与 1 问等延迟。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [smha1012/jev-torch](https://github.com/smha1012/jev-torch) | 2 | 0 | PyTorch implementation for training JEV-style calibrated decision models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [stufently/telegram-antispam](https://github.com/stufently/telegram-antispam) | 2 | 0 | Self-hosted Telegram anti-spam &amp; moderation bot in Go — detection cascade, CAS/LOLS blocklists, Bayesian filter, optional LLM. Single static binary, Docker/Helm. A simpler tg-spam alternative. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [theSekyi/jevusecases](https://github.com/theSekyi/jevusecases) | 2 | 1 | What people are actually shipping with Jev — real builds, tracked as they ship. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [h0j5bz0adh0-stack/jev-pilot](https://github.com/h0j5bz0adh0-stack/jev-pilot) | 6 | 0 | Fast System-1 Decision, Arbitration &amp; Safety Engine for Autonomous AI Agents (Powered by TypeSafe Jev) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [chengyongru/notiq](https://github.com/chengyongru/notiq) | 5 | 0 | Native Android notification filtering with natural-language rules, powered by Jev or self-hosted FastJev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [lgy1027/jevshield](https://github.com/lgy1027/jevshield) | 5 | 0 | Sub-100ms security gate for AI agent tool calls, powered by TypeSafe's Jev (System-1) decision model. Single-request Choice/Noul/Score evaluation, dual-factor blocking matrix, calibrated-confidence routing, fail-closed parsing, zero-config local fallback. LangChain-ready. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [Arpit-Khandelwal/jev-linkedin-slop-filter](https://github.com/Arpit-Khandelwal/jev-linkedin-slop-filter) | 5 | 2 | Slams a BAIT, CORP or BRAG stamp onto LinkedIn engagement-bait, judged live by Jev (TypeSafe System One). | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [devjothish/laya-forge](https://github.com/devjothish/laya-forge) | 5 | 1 | Fine-tune, calibrate and gate Laya (open-weights System One decision model) on your own decisions, then guard production agents with it | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [EugeneBoondock/jevsql](https://github.com/EugeneBoondock/jevsql) | 5 | 1 | SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [jkrup/jeveryword](https://github.com/jkrup/jeveryword) | 5 | 0 | Text extraction with Jev: field extraction, PII detection and exact quotes, built on TypeSafe's Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [Muriel-Gasparini/ban4life](https://github.com/Muriel-Gasparini/ban4life) | 5 | 1 | Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Reindeer-AI/pi-jev-guard](https://github.com/Reindeer-AI/pi-jev-guard) | 5 | 0 | Check Pi code edits against repository Markdown rules with TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [smthdagg/XShield](https://github.com/smthdagg/XShield) | 5 | 0 | XShield — Fight Spam, Scams, Bots, and Adult-Content Accounts on X.  Automatically detect, collect, review, and safely block malicious accounts with a powerful rule engine and human-like execution strategy. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [littlewindy123/jev-bili-filter](https://github.com/littlewindy123/jev-bili-filter) | 4 | 0 | 弹幕照开，噪音别来。用 JEV 为 B 站评论和弹幕降噪：剧透、反串黑、广告、基本盘一键过滤，想屏蔽什么，再写一句话。Chrome 插件，原页生效，MIT 开源。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [0xshikhar/jev-fuse](https://github.com/0xshikhar/jev-fuse) | 2 | 0 | 0xshikhar/jev-fuse는 AI 에이전트와 TypeSafe Jev 모델 사이에서 확률적 판단 결과를 정책 기반의 결정적 동작으로 바꿔주는 리버스 프록시다.<br>명령어나 요청의 위험도 및 적절성을 TypeSafe Jev에 질의해 확률 값을 얻은 뒤 정책에 맞춰 허용, 차단, 사용자 확인으로 구분하도록 돕는다.<br>셸 AST 구문 분석 기반의 거부 및 허용 목록 검사와 동일 요청을 묶는 싱글플라이트 처리 및 SQLite 기반 감사 기록 기능을 갖추고 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [emoubarak/jev-check](https://github.com/emoubarak/jev-check) | 1 | 0 | AI browser agent testing for staging apps: sign in as a real account state (free, paid, lapsed, team), follow a plain-English goal, verify against the database. Agent skill for Claude Code, Codex. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [M-37-AI/jev-aktien-screener](https://github.com/M-37-AI/jev-aktien-screener) | 1 | 0 | Jev und Claude Opus 5.5 lesen 500 Quartalsmeldungen aus dem S&amp;P 500 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [Nassirx1/eryma](https://github.com/Nassirx1/eryma) | 1 | 0 | An Open-Source Security Framework for Large Language Models and AI Agents | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [TheAIMogul/jevcam](https://github.com/TheAIMogul/jevcam) | 1 | 0 | Tell a Raspberry Pi camera what to look for in plain English: live 20 fps video, TypeSafe Jev detection, radio-DJ alarms, 3D map dashboard and a PPE monitor. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | 4 | 0 | Natural-language row filtering for MySQL, powered by TypeSafe Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [acl-research/MayaZ](https://github.com/acl-research/MayaZ) | 1 | 0 | Small calibrated decision models (17M / 32M / 68M) for CPU and the browser. ONNX, no PyTorch at inference. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [arthurgarmider/havik](https://github.com/arthurgarmider/havik) | 1 | 0 | What did your coding agent touch? npx havik shows the credential files, secrets and risky scripts Claude Code used in the last 30 days. Local, nothing sent. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [Azri-Muhsin/jev-sinhala-review](https://github.com/Azri-Muhsin/jev-sinhala-review) | 1 | 0 | Empirical zero-shot benchmark of TypeSafe Jev (v1.13.0) on low-resource Sinhala and Singlish NLP benchmarks (SOLD, SinhalaMMLU, NSINA) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [darup67/zillow_agent_v1](https://github.com/darup67/zillow_agent_v1) | 1 | 0 | Daily ZIP-level Georgia real-estate digest by email — Atlanta intown plus Gwinnett, Hall and Jackson counties. Zero-dependency Node. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [deerweek/cliphistory](https://github.com/deerweek/cliphistory) | 1 | 0 | ⚡️ 原生 macOS 双栏剪贴板工作台 · 集成输入法短码自动展开、Vision 截图 OCR 搜索、即译即贴与可插拔 AI/Shell 动作工坊 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [dpaluy/pi-you-should-know](https://github.com/dpaluy/pi-you-should-know) | 1 | 0 | Session Briefing for Pi | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [Franri3008/quickviz](https://github.com/Franri3008/quickviz) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [Henry0222/Mannul-dedup](https://github.com/Henry0222/Mannul-dedup) | 1 | 0 | 多来源文献题录导入、去重、词汇规范、AI 筛选与 VOS 图谱桌面工具 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [HuajunGao/agent-salon](https://github.com/HuajunGao/agent-salon) | 1 | 0 | Local group chat where Claude Code, Codex, Antigravity and OpenCode discuss your question, moderated by TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [HuangWeiLong-dot/Sense](https://github.com/HuangWeiLong-dot/Sense) | 1 | 0 | A Emotion Assessment and Advice Tool  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [jaswanthsanjay88/rev](https://github.com/jaswanthsanjay88/rev) | 1 | 0 | A fast, local decision engine. No decoding loop, no free-text parsing, just calibrated choices. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [jubarthi/Super_Gpt](https://github.com/jubarthi/Super_Gpt) | 1 | 0 | SUPER GPT — Desktop control center with Jev Intelligence powered by TypeSafe | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [justrandomdev/pi-gatekeeper](https://github.com/justrandomdev/pi-gatekeeper) | 1 | 0 | Tool calling guardrails for the Pi coding agent | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [KevinArce/botditor](https://github.com/KevinArce/botditor) | 1 | 0 | Ever wondered if that comment was written by a human or a slightly sentient toaster? Botditor is here to save the day\! Powered by AI models like Gemini, this bot will scan through your subreddit’s comments and much more\! | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [KorenKrita/pi-error-auto](https://github.com/KorenKrita/pi-error-auto) | 1 | 0 | Automatically resume retryable Pi turns without sending prompt text to the model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [Lob0Garou/transcricao-assistente](https://github.com/Lob0Garou/transcricao-assistente) | 1 | 0 | Assisted transcript review: local Whisper, acoustic evidence and optional text reviewers. Python, MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [maksym771/jev-factcheck](https://github.com/maksym771/jev-factcheck) | 1 | 0 | Fact-checking skill for AI agents using Jev with source excerpts, provenance, confidence scores, and multilingual support. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [manhua-man/jev-pilot-reflex](https://github.com/manhua-man/jev-pilot-reflex) | 1 | 0 | Three.js Autonomous Driving Reflex &amp; AI Safety Brake Simulator powered by TypeSafe Jev System 1/2 Dual-Brain Architecture | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [mohsen1/chicken-bench](https://github.com/mohsen1/chicken-bench) | 1 | 0 | A dumb benchmark to see how far, fast and cheap various decision APIs can play Crossy Road | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [mu-zi-lee/trash-fliter](https://github.com/mu-zi-lee/trash-fliter) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [ohernandezdev/jevmod](https://github.com/ohernandezdev/jevmod) | 1 | 1 | Moderation for communities and apps, powered by Jev (TypeSafe): probabilities per category, thresholds you own. Discord/Telegram/Reddit bots, CLI, Python, npm, HTTP API, MCP. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [PosvdM/bili-breeze](https://github.com/PosvdM/bili-breeze) | 1 | 0 | 哔哩清风：按类别过滤 B 站动态与置顶评论，支持白名单和谨慎过滤。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [qiendaco-ai/emailusefullagain](https://github.com/qiendaco-ai/emailusefullagain) | 1 | 0 | AI Draft Autopilot is an open-source Thunderbird 115+ extension that creates rule-driven AI reply drafts without ever sending emails automatically and filter spams.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [rafaelleaomed/smartvitae](https://github.com/rafaelleaomed/smartvitae) | 1 | 0 | Plataforma de Adequação Curricular Factual e Alinhamento de Carreira com Zero Alucinação de IA. Combinando TypeSafe JEV (Julgamento cognitivo rápido System One) e Claude 3.5 Sonnet para submeter candidaturas a testes de estresse implacáveis, auditar evidências documentais e eliminar a invenção de qualificações. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [randilt/jev-guardrail-benchmark](https://github.com/randilt/jev-guardrail-benchmark) | 1 | 0 | Benchmark of the TypeSafe Jev content-safety guardrail in WSO2 AI Gateway against Azure Content Safety and an LLM judge | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [RedVad/jev-filter](https://github.com/RedVad/jev-filter) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [Ruchith1018/jev-guardrail-evaluation](https://github.com/Ruchith1018/jev-guardrail-evaluation) | 1 | 0 | Independent evaluation of TypeSafe AI's Jev decision model as a prompt-injection guardrail: 6,991 calls, six tests, code, results and figures. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [Shalimov04/open-jev](https://github.com/Shalimov04/open-jev) | 1 | 1 | Distil a prompt into a small, fast, calibrated classifier. Typed decisions (choice/score/noul) with calibrated probabilities from a local LLM teacher, served at /v1/systemone. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [systemonedev/systemone-builder](https://github.com/systemonedev/systemone-builder) | 1 | 0 | Train, benchmark and serve your own System One decision model: typed questions in, calibrated probabilities out. Runs locally, Apache-2.0. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [turkerdev/hide-the-annoying](https://github.com/turkerdev/hide-the-annoying) | 1 | 1 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [Umbylicus/umby-jev-stack](https://github.com/Umbylicus/umby-jev-stack) | 1 | 0 | Portable agent skill: TypeSafe Jev as a cheap code-review classifier (HTTP + optional jev-review MCP) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [VKirill/bb-plugin-image-studio](https://github.com/VKirill/bb-plugin-image-studio) | 1 | 1 | Image Studio for BB: generate project photos through fal.ai and kie.ai, keep a gallery, reuse people profiles. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [xxynet/kira-ai-plugin-jev](https://github.com/xxynet/kira-ai-plugin-jev) | 1 | 0 | Jev-powered reply trigger for KiraAI 3.x with persona-aware decisions and message history context | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [yelkhanyergali-sys/jev-guard](https://github.com/yelkhanyergali-sys/jev-guard) | 1 | 0 | PI Mono extension for Jev (TypeSafe AI): in-flight terminal pruning (prompt-cache safe) and surgical diff guard | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [zsoXi/FeedGate](https://github.com/zsoXi/FeedGate) | 1 | 0 | Safe-controls Chrome feed filter (v3.3.0) with TypeSafe Jev judgments, temporal topic mutes, repeat grouping, API usage panel with thrift mode, author pickers, transactional cosmetic picker with Undo, persist-first recovery, and six supported platforms including Wykop (beta). Zero runtime dependencies. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [0xArx/jevegis](https://github.com/0xArx/jevegis) | 3 | 0 | Guardrails for LLM apps in one API call. Prompt injection, jailbreaks, leaks, unsafe content. Built on TypeSafe Jev. MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [davertor/jev-slop-guard](https://github.com/davertor/jev-slop-guard) | 3 | 0 | Jev Slop Guard — a Chrome extension that scores and stamps AI slop on your X and LinkedIn feeds as you scroll | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [noelzappy/tripwire](https://github.com/noelzappy/tripwire) | 3 | 1 | Judge every LLM response before the user sees it. AI SDK middleware and OpenAI-compatible proxy. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [rorshopping/jev-browser-local](https://github.com/rorshopping/jev-browser-local) | 3 | 1 | Run jev-browser on a fully local JEV-style decision engine (no cloud API). Warm-browser fork, VRAM guard, measured benchmarks, run traces. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [SamanPandey-in/jevrail](https://github.com/SamanPandey-in/jevrail) | 3 | 0 | Jev powered pre-execution guard for terminal coding agents | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [shikaizhong-design/ego-jev-ultrafast](https://github.com/shikaizhong-design/ego-jev-ultrafast) | 3 | 1 | Jev drives your Ego Lite browser: one typed-choice request per step. Single-file, zero-dependency port of browser-use/jev-ultrafast with multi-model benchmarks and extra guardrails. Unofficial. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [arcveildev/arcveil](https://github.com/arcveildev/arcveil) | 0 | 0 | Arc 네트워크에서 에이전트가 위임 한도를 노출하지 않고도 규정 내에서 지출했음을 영수증으로 증명하고 검증하는 프레임워크다.<br>정량적 임계치로 정의하기 어려운 의미론적 조항에 에이전트의 행위가 부합하는지 여부를 판단시킨다.<br>브라우저에서 직접 영수증을 검증하며 packages/gate 워커를 통해 의미론적 정책 평가와 온체인 증명을 결합했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [ArindamPoorey/HacktoberFest2026_Sparkrise](https://github.com/ArindamPoorey/HacktoberFest2026_Sparkrise) | 0 | 0 | 코딩 에이전트가 윈도우 셸에서 실행하려는 명령어를 중간에서 가로채 위험도를 점검하고 허용 여부를 결정하는 보안 게이트웨이다.<br>명령어의 행위 분류와 의도 일치 여부, 작업 대상 범위 포함 여부, 피해 위험도, 사람 검토 필요성을 판단하게 한다.<br>커널 레벨이 아닌 사용자 공간 래퍼로 동작하며 불확실할 때 추가 맥락을 모아 한 번만 재검사를 수행하는 제한적 구조를 둔다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [arnavsurve/g8](https://github.com/arnavsurve/g8) | 0 | 0 | Claude Code의 도구 호출 실행 전에 자연어 정책을 검사해 위반 시 차단하는 게이트 훅이다.<br>실행하려는 도구 호출과 대화 맥락이 사전에 정의한 JSON 정책 목록 중 어떤 것을 위반하는지 분류해 판별하도록 묻는다.<br>사전 승인 창 대신 약 0.4초 만에 판별해 차단하며, 분류기 연결 실패 시 기본적으로 통과하도록 동작한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [ashp15205/jev-laya-system-1](https://github.com/ashp15205/jev-laya-system-1) | 0 | 0 | Jev나 Laya 같은 System 1 모델 앞에 두어 입력 보안과 신뢰도 보정을 처리하는 파이썬 미들웨어 라이브러리다.<br>예제 기준 고객 지원 티켓 문장을 보고 billing, tech_support, sales, general 중 담당 부서를 Choice로 분류하게 한다.<br>호출 전 프롬프트 인젝션을 검사하고 플랫 스케일링으로 과도하게 부풀려진 점수를 교정한 뒤 비용 기반 임계값으로 최종 실행 여부를 가른다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-18 |
| [BasmaAbouzied0/jev-secret-guard](https://github.com/BasmaAbouzied0/jev-secret-guard) | 0 | 1 | Claude Code 환경에서 AI 에이전트가 코드나 명령어로 시크릿을 작성하거나 유출하지 않도록 차단하는 PreToolUse 훅이다.<br>마스킹된 알 수 없는 고엔트로피 문자열과 주변 문맥을 보고 해당 값이 시크릿인지 여부를 확률 점수로 판단하도록 한다.<br>알려진 키는 로컬에서 차단하고 알 수 없는 값은 마스킹해 메타데이터만 Jev로 전송하며, 불확실하거나 장애 발생 시 사용자에게 확인을 요청한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [choiyounggi/jev-gate](https://github.com/choiyounggi/jev-gate) | 0 | 0 | Claude Code의 위험 셸 명령 실행과 근거 없는 완료 선언을 검사해 차단하는 로컬 판단 모델 보조 플러그인이다.<br>셸 명령의 위험도와 비가역성 여부, 에이전트 완료 보고의 종료 주장과 증거 포함 확률을 묻는다.<br>텍스트를 생성하지 않고 점수만 반환하며, 모델은 판단만 내리고 최종 결정은 하드 규칙과 사람이 수행한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [cyu60/floodgate](https://github.com/cyu60/floodgate) | 0 | 0 | 사용자가 설정한 현재 작업에 방해되는 웹페이지를 브라우저 탐색 시 차단하는 오픈 판별 모델 및 크롬 확장 프로그램<br>접속하려는 웹페이지가 사용자가 지정한 작업에 방해되는지 여부를 noul(예/아니오 확률)로 판별<br>River API로 오픈 모델을 학습시켜 Jev 호환 API를 구현하고, 사용자 브라우징 기록으로 개인화 모델을 미세조정함 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [dbehelitate/killercoda](https://github.com/dbehelitate/killercoda) | 0 | 0 | 브라우저 기반 실습 환경인 Killercoda에서 KServe와 JEV 기반 가드레일을 체험할 수 있게 구성한 실습 시나리오 저장소다.<br>README에 판단 지점 설명이 없다.<br>별도 로컬 설치 없이 웹 터미널 샌드박스에서 LLM 보안 가드레일과 평가 환경을 바로 실행해 볼 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [DimeDataCloud/claude-modder](https://github.com/DimeDataCloud/claude-modder) | 0 | 0 | 여러 Claude Code 세션을 조율하면서 터미널 화면 외형을 바꾸고 도구 실행 권한을 관리하는 확장 도구다.<br>도구 호출이 요청에 부합하는지 여부와 데이터 파괴나 유출 등 일곱 가지 위험 요소의 존재를 8개의 예아니오 질문으로 묻는다.<br>사용자의 도구 승인 및 거절 기록을 바탕으로 기존 정답을 틀리지 않는 선에서 도구 실행 허용 임계값을 자체 재조정한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [dut00/comment-analysis-worker](https://github.com/dut00/comment-analysis-worker) | 0 | 0 | RabbitMQ에서 수신한 댓글을 판단 모델로 검사해 승인·거절·수동 검토 여부를 가려내는 닷넷 기반 워커 서비스다.<br>댓글 게시 승인 여부 선택지와 함께 유해성 점수, 스팸 여부, 개인정보 포함 여부 확률을 한 번에 물어 판정한다.<br>텍스트 생성 없이 모델의 확률 분포만 조회하며 트랜잭셔널 아웃박스와 버전 해시를 활용해 멱등성을 보장한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-20 |
| [ersinkoc/KufurLab](https://github.com/ersinkoc/KufurLab) | 0 | 0 | 터키어 욕설 및 모욕 탐지 엔진과 API 성능을 비교하고 벤치마크하기 위해 개발자가 쓰는 Next.js 기반 테스트 도구다.<br>텍스트에 터키어 욕설이나 모욕이 포함되어 있는지 여부를 noul 확률로 묻고, 욕설 유형을 choice로 판별하게 한다.<br>terlik.js 같은 로컬 규칙 기반 엔진과 Jev 등의 외부 Decision API 결과를 동일한 적대적 합성 데이터셋에서 나란히 대조해 본다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [gbesse/harbor-jev-exceptions](https://github.com/gbesse/harbor-jev-exceptions) | 0 | 0 | Harbor 레지스트리의 이미지 보안 스캔 결과에 대해 제출된 취약점 예외 신청서의 타당성을 평가하는 서비스다.<br>컨테이너 이미지 예외 신청서의 품질을 supported, weak, review 세 가지 선택지 중 하나로 판정한다.<br>이미지 자체의 안전성을 보증하거나 허용 목록을 바꾸지 않고 신청서 검토 보조 역할만 하며, SQLite에 사유 원문 대신 해시와 결과만 남긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [gbesse/jev-admin-change-review](https://github.com/gbesse/jev-admin-change-review) | 0 | 0 | Keycloak 클라이언트 설정 변경 사항이 관리자가 적은 사유와 부합하는지 점검하는 도구다.<br>클라이언트 변경 내역이 관리자가 밝힌 사유를 벗어나는지 살펴보고 expected, broader, review 중 하나를 고르게 한다.<br>와일드카드 오리진이나 공개 클라이언트 활성화 같은 위험 변경은 모델 판단 없이 무조건 review로 분류하며 시크릿 필드는 제외하고 전송한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [gbesse/jev-agribalyse-claim-check](https://github.com/gbesse/jev-agribalyse-claim-check) | 0 | 0 | 식품 환경성 표시가 인용된 프랑스 AGRIBALYSE 데이터로 뒷받침되는지 검증해 검토 범주로 분류하는 도구다.<br>환경성 주장이 인용된 AGRIBALYSE 참조 데이터에 부합하는지 따져 étayée나 à_nuancer 같은 범주로 판단하게 묻는다.<br>규칙 기반 검증을 먼저 거쳐 불필요한 모델 호출을 막고 확신도가 낮으면 사람 검토 플래그를 붙인다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [gbesse/jev-georisques-preflight](https://github.com/gbesse/jev-georisques-preflight) | 0 | 0 | 프랑스 공공 지리 위험 데이터를 바탕으로 프로젝트 사전 검토 시 주의할 위험 요소를 분류하는 도구다.<br>출처가 확보된 자연 및 기술적 위험 데이터를 바탕으로 해당 사안이 유의미한 위험인지 사람이 직접 검토해야 하는지 분류한다.<br>결정론적 비즈니스 규칙을 먼저 적용해 불필요한 모델 호출을 막고 확신도가 낮을 때는 사람 검토 플래그를 남기도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [gbesse/jev-insee-chiffre-preuve](https://github.com/gbesse/jev-insee-chiffre-preuve) | 0 | 0 | 프랑스 통계청(INSEE) 관련 통계 수치의 값과 단위, 기간, 지역, 정의가 근거 자료와 맞는지 검증하는 Node.js 도구다.<br>인용한 원문 구절과 통계 정의가 의미상 부합하는지를 Jev에게 판정하게 하며 확신도와 마진에 따라 기권하도록 한다.<br>숫자와 날짜는 코드로 직접 대조하고 의미적 일치 여부만 Jev에 맡기며 결과와 증빙 자료의 SHA-256 해시를 보존한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [gbesse/jev-sentinel](https://github.com/gbesse/jev-sentinel) | 0 | 0 | AI 애플리케이션의 로그, 추적 내역, 산출물에서 카나리 토큰의 누출 여부를 감지하고 마스킹하는 보안 검사 도구다.<br>README에 판단 지점 설명이 없다.<br>원시 문자열 외에도 Base64나 URL 인코딩 등 다양한 변환 패턴을 탐색하며, 실제 누출된 카나리 대신 마스킹된 발췌본만 보고서에 남긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [gbesse/mastodon-jev-report-triage](https://github.com/gbesse/mastodon-jev-report-triage) | 0 | 0 | Mastodon 웹훅으로 접수된 신고를 분석해 관리자에게 처리 우선순위 권고를 제공하는 도구다.<br>신고된 게시글 본문과 신고자 의견을 바탕으로 우선순위를 urgent, standard, review 중 무엇으로 분류할지 판단한다.<br>규칙이나 게시글이 10개를 넘으면 API 호출 없이 즉시 review로 분류하고 민감한 개인정보는 저장하지 않는다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [gsaini/jev-claude-code-case-study](https://github.com/gsaini/jev-claude-code-case-study) | 0 | 0 | Claude Code 환경에서 고객지원 티켓 분류 앱과 셸 명령어 검사용 가드레일 훅에 TypeSafe Jev를 연동한 실증 사례 리포다.<br>지원 티켓의 담당 부서·우선순위 분류와 에이전트의 셸 명령어가 위험하거나 권한을 벗어나는지 noul 확률로 묻는다.<br>가드레일 훅은 오직 권한을 강화하거나 차단하는 방향으로만 동작하고, API 키 없이도 정규식 기반 모의 환경으로 테스트할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [IceRhymers/opencode-auto](https://github.com/IceRhymers/opencode-auto) | 0 | 0 | OpenCode 환경에서 도구 호출 권한 요청을 SystemOne 호환 모델로 심사해 자동 승인이나 차단을 결정하는 플러그인이다.<br>도구 호출의 위험도(safe·needs_review·dangerous), 비가역성, 의도 부합 여부, 데이터 유출 가능성, 영향 범위를 한 번에 묻는다.<br>정적 규칙으로 위험 명령을 먼저 걸러내며 분류기 응답 오류나 타임아웃이 발생하면 작업을 멈추는 안전 기본 정책을 갖췄다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [isaacbitran/english-net](https://github.com/isaacbitran/english-net) | 0 | 0 | 여러 개의 영어 예/아니오 질문을 신경망 노드로 삼아 프롬프트 인젝션 공격 여부를 판별하는 탐지 도구다.<br>입력 텍스트가 지침 우회 시도나 비밀 정보 요구 등 인젝션 관련 여러 질문 조건에 해당하는지 noul로 판단한다.<br>재학습 없이 새 질문 문장을 뉴런으로 추가해 특정 공격 유형 탐지율을 올릴 수 있고 결과 설명이 가능하다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [justmytwospence/pi-tool-gate](https://github.com/justmytwospence/pi-tool-gate) | 0 | 0 | pi 에이전트의 도구 호출을 규칙과 모델로 검사해 자동으로 승인하거나 차단하는 확장 기능이다.<br>도구 실행이 요청 범위 안인지, 되돌릴 수 없는지, 작업 사본 외부를 건드리는지, 위험도 점수와 프로젝트 규칙 위반 점수는 얼마인지 판단한다.<br>정적 규칙으로 명확한 호출을 먼저 거르고, 애매한 호출만 Jev로 평가한 뒤 1회 거절 후 사용자 확인을 요청하는 단계적 방식을 쓴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [kangjun-lee/live-redact](https://github.com/kangjun-lee/live-redact) | 0 | 0 | 웹캠 영상에서 자연어로 지정한 대상의 위치를 찾아 실시간으로 모자이크 처리하는 브라우저용 데모 앱이다.<br>README에 판단 지점 설명이 없다.<br>Jev 모델의 다중 객체 검출 한계로 얼굴을 하나만 탐지할 수 있으며 해상도를 낮춰 토큰 비용을 줄였다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [krishnakant2607/study-mode-jev](https://github.com/krishnakant2607/study-mode-jev) | 0 | 0 | FocusMaxx는 유튜브에서 학습에 방해되는 오락성 영상을 가리고 유익한 영상만 남겨주는 크롬 확장 프로그램이다.<br>영상 메타데이터를 바탕으로 해당 영상이 사용자가 지정한 제외 대상인지, 허용 대상인지, 혹은 오락성 콘텐츠인지 0.90 이상의 확률 점수로 판단하게 한다.<br>키워드 기반의 단순 차단 대신 사용자 선호도 문장과 Jev 점수를 결합한 규칙 엔진으로 영상 카드를 동적으로 가린다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [leonardocandiani/leis](https://github.com/leonardocandiani/leis) | 0 | 0 | Claude Code 세션이 개발 규칙을 잊지 않도록 훅으로 규칙 위반을 감시하고 기록하는 플러그인이다.<br>각 모델 규칙의 예/아니오 판정 질문에 대해 에이전트의 응답이나 행동이 규칙을 위반했는지 판별한다.<br>외부 의존성 없이 Node 22 기반 훅으로 구현했으며 관찰 모드와 개별 규칙 차단 모드를 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [meetchen/jev-danmaku-filter](https://github.com/meetchen/jev-danmaku-filter) | 0 | 0 | 빌리빌리 동영상의 탄막 자막에서 스포일러를 판별해 실시간으로 가려 주는 크롬 확장 프로그램이다.<br>각 탄막 텍스트가 단순 반응부터 결말 스포일러까지를 정의한 5단계 척도 중 어디에 해당하는지 score로 묻는다.<br>플레이어가 받기 전에 Protobuf 세그먼트 데이터를 직접 변조해 지우므로 캔버스 기반 탄막까지 놓치지 않고 차단한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [miketako3/dsh-backdoor-guard](https://github.com/miketako3/dsh-backdoor-guard) | 0 | 0 | 모델 가중치에 심어진 백도어나 자격 증명 유출용 도구 호출을 실행 전에 차단하는 DeepSeek Harness 플러그인이다.<br>요청 문맥과 도구 인수를 보고 해당 도구 호출이 정상적인 요청 수행인지 아니면 백도어 공격인지 여부를 noul 확률로 묻는다.<br>정규표현식이나 로그 확률 대신 경량 판별 모델을 활용해 매 도구 실행 직전 빠르게 안전 확률을 검증한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [mikluko/stalwart-jev](https://github.com/mikluko/stalwart-jev) | 0 | 0 | Stalwart 메일 서버의 스팸 분류기 요청을 받아 TypeSafe Jev로 이메일을 분류해 주는 프록시 서비스다.<br>이메일 제목과 본문을 바탕으로 Unsolicited, Commercial, Harmful, Legitimate 중 어디에 해당하는지 묻는다.<br>Stalwart 규격의 API 요청을 받아 Jev의 Choice 판단을 거친 뒤 확신도에 따라 High, Medium, Low 등급을 매겨 반환한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [mohamedikbel/semval4j](https://github.com/mohamedikbel/semval4j) | 0 | 0 | SemVal4j는 자바 개발자가 Jakarta Bean Validation에서 의미론적 규칙을 AI로 검증하도록 돕는 라이브러리다.<br>Jev에게 객체 필드 내용이 설정된 검증 조건에 부합하는지 묻고 noul 확률값으로 적합 여부를 판단하게 한다.<br>검증 규칙들을 한 번의 API 호출로 묶어 처리하며 확률 구간을 설정해 불확실성을 명시적으로 다룬다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [monkey-sking/Jev-Clipboard-Guard](https://github.com/monkey-sking/Jev-Clipboard-Guard) | 0 | 0 | 애플 단축어와 Jev API를 활용해 앱 실행 시 클립보드 속 민감 정보를 감지하고 덮어쓰는 아이폰 자동화 도구다.<br>로컬 규칙에 걸리지 않은 일반 텍스트 클립보드를 대상 앱에 그대로 허용할지 차단할지 판단하게 한다.<br>iOS 구조상 앱이 클립보드를 먼저 읽는 문제를 막을 수 없는 한계가 있고 Cherri 언어로 단축어를 작성해 컴파일한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [OrangeNekoo/omp-plugin-CommandReview](https://github.com/OrangeNekoo/omp-plugin-CommandReview) | 0 | 0 | oh-my-pi(omp-zh)의 yolo 모드에서 위험한 도구 호출을 실행하기 전 모델로 사전 심사하는 확장 플러그인이다.<br>도구 호출을 사람의 확인 없이 바로 실행해도 되는지(pass) 아니면 수동 검토가 필요한지(review)를 choice로 판단하게 한다.<br>읽기 전용 셸 명령은 모델 호출 없이 자동 통과시키며, 심사 실패나 응답 타임아웃 발생 시 보수적으로 실행을 차단한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [pateti-hub/laya-browser-guard](https://github.com/pateti-hub/laya-browser-guard) | 0 | 0 | 개발자와 보안 연구자가 웹사이트의 브라우저 단 공격 표면과 보안 취약 요소를 점검할 수 있게 돕는 크롬 확장 프로그램이다.<br>수집된 관측 데이터가 실제 보안 우려인지와 수동 검토 필요 여부, 주 보안 분류, 증거 품질, 조사 우선순위 점수를 판단한다.<br>규칙 기반 검사를 기본으로 두고 로컬 ONNX 모델과 FastAPI 기반 Jev 게이트웨이를 선택적으로 결합해 분석을 수행한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [paulhugel/haio-gats](https://github.com/paulhugel/haio-gats) | 0 | 0 | 인간 감독 하의 AI 에이전트 운영 거버넌스와 감사 추적 요건을 정의하는 공개 표준 사양 및 스키마 저장소다.<br>README에 판단 지점 설명 없음<br>TypeSafe Jev 등 모델 출력을 권한 부여 근거가 아닌 단순 자문 증거로 취급하며, 인간 승인과 독립적 감사 추적 분리를 규정한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [Peter-A-P/access-to-information-redaction](https://github.com/Peter-A-P/access-to-information-redaction) | 0 | 0 | 정보공개 청구 문서에서 비식별화할 개인정보 구간을 규칙과 의사결정 모델로 제안하고 검토자가 승인하도록 돕는 도구다.<br>규칙으로 가려내지 못한 잔여 텍스트 구간을 관련 법률 범주에 따라 가려야 할지 공개해야 할지 판단한다.<br>결정론적 규칙을 먼저 적용한 뒤 남은 대상만 모델에 질의하고, 신뢰도가 기준치 미만이면 사람에게 에스컬레이션한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-27 |
| [phoenix1331/filament-jev-moderation](https://github.com/phoenix1331/filament-jev-moderation) | 0 | 0 | Jev 모델이 플래그 지정한 유해 의심 콘텐츠를 관리자가 직접 검토하고 승인·반려·재분류하는 Filament 관리자 패널 플러그인이다.<br>입력 콘텐츠가 각 모더레이션 카테고리에 해당할 확률을 예측하게 하여 임계치 기반으로 자동 차단이나 사람 검토 대상 여부를 판별한다.<br>사람의 검토 판정과 모델의 확신도를 비교해 임계값 적절성을 분석하고, 코어 패키지 메서드로만 데이터 쓰기를 허용하도록 아키텍처 테스트로 강제한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [phoenix1331/laravel-jev-moderation](https://github.com/phoenix1331/laravel-jev-moderation) | 0 | 0 | 라라벨 개발자가 Eloquent 모델에 저장되는 텍스트를 검사하고 위험도에 따라 분류하기 위해 쓰는 모더레이션 패키지다.<br>제출된 텍스트가 스팸이나 괴롭힘 등 유해 카테고리에 속할 확률이 임계치를 넘어 통과, 사람 검토, 차단 중 어느 상태에 해당하는지 판단하게 한다.<br>HTTP 미들웨어 대신 Eloquent 모델 이벤트에 연결해 동작하며 모든 판단과 검토 이력을 덮어쓰지 않고 추가 전용으로 보관한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [pusucip25/local-decider](https://github.com/pusucip25/local-decider) | 0 | 0 | 도구를 사용하는 브라우저 에이전트의 다음 행동을 안전 규칙과 결정 모델로 검증해 실행 여부를 판단하는 사전 게이트 프레임워크다.<br>결정 규칙으로 거르지 못한 에이전트의 도구 실행 요청을 그대로 허용할지 사용자 확인을 요구할지 choice로 판단한다.<br>결정론적 규칙을 먼저 적용하고 신경망 모델은 확인 요구 단계로만 격상할 수 있게 제한해 행동 유출을 완전히 막는다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [radupopescu/tiny-bouncer](https://github.com/radupopescu/tiny-bouncer) | 0 | 0 | LLM 에이전트가 실행하려는 셸 명령어를 사전에 검사해 자동 실행, 차단, 대화형 확인 중 하나로 결정하는 도구다.<br>실행할 셸 명령어의 위험도와 적합성을 따져 허용, 차단, 사용자 확인 중 어느 처분을 내릴지 판단하게 한다.<br>외부 판정 백엔드에 장애가 생기면 무조건 대화형 확인으로 넘어가며, 허용 결정이라도 기존 거부 설정을 뒤집지 않게 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [Ray4AI/jev-bili-filter](https://github.com/Ray4AI/jev-bili-filter) | 0 | 0 | Bilibili 웹페이지에서 스포일러와 광고 같은 불필요한 댓글과 탄막을 가려 주는 파이어폭스용 브라우저 확장 프로그램이다.<br>영상 맥락과 활성화된 규칙을 바탕으로 댓글이나 탄막 한 줄을 차단(block)할지 유지(keep)할지 choice 문제로 판단하게 한다.<br>네트워크 요청의 protobuf 바이너리를 가로채 수정하여 Canvas 탄막을 개별 단위로 지우고, 공통 규칙을 state에 몰아 토큰 비용을 낮췄다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [reulison/jev-exemplo-uso](https://github.com/reulison/jev-exemplo-uso) | 0 | 0 | 텍스트 파일 형식을 검증한 뒤 내부의 민감한 정보 포함 여부를 평가하는 파이썬 CLI 도구다.<br>텍스트 파일 형식의 호환 여부와 개인정보·금융·자격 증명 등 8가지 민감 정보 범주별 포함 확률을 판단하게 한다.<br>외부 패키지 없이 표준 라이브러리만 사용하며 형식 판별과 내용 분석을 위해 API를 두 단계로 호출한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [rhithesh/focus](https://github.com/rhithesh/focus) | 0 | 0 | 사용자가 직접 설정한 목표에 맞지 않거나 스팸·어그로성인 유튜브, X, 링크드인 게시물을 가려주는 브라우저 확장 프로그램이다.<br>각 게시물이 낚시성인지(\`score\`), 사용자의 목표와 일치하는지(\`score\`), 스팸이나 사기인지(\`noul\`)를 판단하도록 묻는다.<br>한 페이지의 여러 게시물을 하나의 요청으로 묶어 처리하고 모델이 반환한 확신도가 기준치를 넘길 때만 가림 처리를 적용한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [Rinyin/astrbot_plugin_thought_guard](https://github.com/Rinyin/astrbot_plugin_thought_guard) | 0 | 0 | AstrBot 챗봇이 사용자에게 답장을 보내기 전에 생각 과정이나 내부 추론 내용이 유출되었는지 검사하고 걸러내는 플러그인이다.<br>전송할 답변 텍스트에 사고 과정이나 독백이 새어 나왔는지를 Jev에게 noul 확률로 묻는다.<br>확률이 기준치를 넘기면 청소 모델로 텍스트를 다듬어 보내며, 스트리밍 출력 시에는 메시지를 가로채지 못한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [ronail/jev-cost-guard](https://github.com/ronail/jev-cost-guard) | 0 | 0 | 에이전트 실행 환경에서 프롬프트와 도구 출력으로 인한 토큰 낭비를 줄이기 위해 TypeSafe Jev 모델과 연동하는 가드 도구 모음이다.<br>도구 실행 결과 상태를 보고 성공했는지 여부를 noul 질문으로 물어 성공 확률을 받아온다.<br>외부 의존성 없이 표준 라이브러리로 작성된 MCP 서버와 훅 플러그인을 써서 긴 도구 출력을 짧은 판정 결과로 대체한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [Sachin-chaurasiya/scam-checker-with-jev](https://github.com/Sachin-chaurasiya/scam-checker-with-jev) | 0 | 0 | 비전문가 사용자가 의심스러운 영어 문자 메시지를 붙여넣으면 사기 여부와 이유를 분석해 알려주는 웹 도구다.<br>문자 메시지에 사기 징후나 자동 검사를 속이려는 요소가 있는지 스물두 개의 짧은 질문으로 한 번에 판별하게 한다.<br>한 번의 API 요청으로 22개 질문을 동시에 묻고 일반 코드로 점수와 가중치를 계산해 5가지 판정을 도출한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [samiulhuda360/access-desk](https://github.com/samiulhuda360/access-desk) | 0 | 0 | 사내 직원의 시스템 접근 요청을 심사해 안전한 건은 바로 승인하고 위험한 건은 담당자에게 넘기는 보안 도구다.<br>Jev에게 필요한 권한 수준(choice), 사유의 적절성 및 기한 설정 여부(noul), 0부터 3까지의 종합 위험도(score)를 질의한다.<br>모델 평가는 위험도와 속성 판단에만 쓰고 실제 승인 여부와 상한선은 정책 코드로 직접 강제한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [seominpapa/siteeye](https://github.com/seominpapa/siteeye) | 0 | 0 | 건설 현장 CCTV 영상에서 최근 5초간의 작업자 행동 흐름을 추출해 사고 전조를 예측하고 조치를 안내하는 웹앱이다.<br>YOLO가 요약한 상황 서술과 이미지 폴백을 보고 사고 전조 확률, 0부터 5점까지의 위험 점수, 권고 조치를 판단한다.<br>평소에는 YOLO의 추적 데이터를 텍스트 서술로 바꿔 전달하고 안전장구 인식이 불확실한 위험 정황에서만 이미지를 전송해 판단을 보강한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-18 |
| [septagos/subcento](https://github.com/septagos/subcento) | 0 | 0 | AI 에이전트가 온체인 트랜잭션에 서명하기 전에 위험 여부를 미리 검사해 주는 사전 검증 서비스다.<br>트랜잭션의 calldata가 실제로 수행하는 동작이 에이전트가 선언한 의도와 일치하는지 판단한다.<br>x402 결제 프로토콜과 연동되어 유료로 검증을 수행하며 모든 판정 결과를 Ed25519 전자서명과 함께 반환한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [Shobhnik13/jev-check](https://github.com/Shobhnik13/jev-check) | 0 | 0 | 사용자가 직접 정의한 시각 규칙에 맞춰 카메라로 촬영한 사진의 물품 누락이나 상태 이상을 판별하는 웹 검사 도구다.<br>배송 라벨 판독 여부 같은 예/아니오 질문과 상자 포장 상태 등의 선택형 규칙을 바탕으로 사진 속 상태를 한 번에 판단하도록 요청한다.<br>단 한 번의 호출로 여러 규칙을 1초 안에 판정하며, 판정이 모호한 사진은 사람이 직접 검토해 모델과의 일치도를 측정하게 한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [shohei81/jev-tos-checker](https://github.com/shohei81/jev-tos-checker) | 0 | 0 | 웹페이지의 서비스 이용약관을 조항별로 분석해 사용자에게 불리한 독소 조항을 찾아 표시하는 크롬 확장 프로그램이다.<br>각 약관 조항이 개인정보 판매나 일방적 약관 변경 등 8가지 범주의 불리한 조건에 해당하는지 확률(noul)로 판단하게 한다.<br>주변 문단을 함께 전달해 예외 조항을 반영하며 불리할 확률이 70% 이상인 조항만 골라 원문 강조 표시와 함께 보여준다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [silver0-stack/telehealth-revisit-console](https://github.com/silver0-stack/telehealth-revisit-console) | 0 | 0 | 비대면 진료 의원에서 과거 대면 진료 기록과 현재 증상을 대조해 재진 여부와 처방 가능 여부를 점검하는 웹 콘솔이다.<br>환자가 적은 오늘 증상과 과거 대면 진료 기록의 진단이 서로 일치하는지 같음, 관련 있음, 다름 중 하나와 확률로 묻는다.<br>재진과 처방 제한은 코드로 강제하고, Jev는 80퍼센트 이상 확신할 때만 사전 선택을 제안하며 감사 로그에 모든 판단 근거를 남긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [TrivelaAS/Jevchrome](https://github.com/TrivelaAS/Jevchrome) | 0 | 0 | 소셜 미디어 사용자가 X, 페이스북, 링크드인에서 어그로성 게시물과 낚시성 허위 글을 걸러낼 때 쓰는 크롬 확장 프로그램이다.<br>소셜 미디어 게시글이 분노 유발형 미끼인지, 인공지능 기반 허위 수익 인증인지, 조작된 미담인지를 묻는다.<br>생성형 텍스트 대신 정형 판단을 활용하고 해시 기반 전역 엣지 캐시를 둬 실시간 타임라인 지연 시간을 줄였다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [vangheem/decisionns](https://github.com/vangheem/decisionns) | 0 | 0 | 가정용 네트워크에서 허용 및 차단 목록과 결정 모델 규칙으로 도메인을 선별하여 처리하는 DNS 서버다.<br>조회된 도메인 이름이 아동에게 안전하지 않은지 또는 어떤 카테고리에 해당하는지를 noul 확률이나 choice 값으로 판별하게 한다.<br>페이지 내용 대신 도메인 이름만 전달해 판단하고 결과를 캐싱하며, 모델 오류나 신뢰도 부족 시 기본 허용으로 폴백하도록 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [0xwhrari/grok-jev-guard](https://github.com/0xwhrari/grok-jev-guard) | 2 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [48Nauts-Operator/skill-dash](https://github.com/48Nauts-Operator/skill-dash) | 2 | 0 | Skill Dash uses Jev to judge Claude Code and Codex skills and plugins: usefulness, redundancy, clarity, duplicates, safety. Local dashboard plus the corpus pipeline behind whichskills.dev. MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [abhixhek/feedwall](https://github.com/abhixhek/feedwall) | 2 | 0 | Your feed, your rules, in plain English. A browser extension that filters X, YouTube, Reddit, LinkedIn and Hacker News with topics you write yourself. Bring your own Jev key. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [allebee/jevgrep](https://github.com/allebee/jevgrep) | 2 | 0 | CLI that filters logs and text by meaning using plain-English yes/no questions and Jev probabilities. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [CarlosCaoLopez/HACKSPAIN-2026](https://github.com/CarlosCaoLopez/HACKSPAIN-2026) | 2 | 1 | Taiafox filters a hundred incoming messages down to the three that matter, coordinates responders by voice, and re-plans in under a second when the fire turns. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [CogFlux/opencode-jev-guard](https://github.com/CogFlux/opencode-jev-guard) | 2 | 0 | OpenCode 2 plugin that sends every shell command (local or via FarHand) to TypeSafe's Jev and asks you first when it leaves files outside the project, installs software globally, changes global settings, is harmful or exposes private data | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [copyleftdev/jev-labs](https://github.com/copyleftdev/jev-labs) | 2 | 0 | Never confidently wrong: a TLA+-verified consensus kernel around TypeSafe's Jev, run through 1,680 chaos-tested pharmacy decisions with zero wrong verdicts. Film, code, and every captured call. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [edwardyen724-g/jev-compactor](https://github.com/edwardyen724-g/jev-compactor) | 2 | 0 | Context compaction and safety gating for AI agents via TypeSafe Jev: keeps messages verbatim, no summarization. OpenAI, Anthropic, LangChain, CLI, MCP. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [ibrahemid/jevprune](https://github.com/ibrahemid/jevprune) | 2 | 0 | Filter command output for coding agents using a task description. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [Karthick-Ramachandran/jevfilter](https://github.com/Karthick-Ramachandran/jevfilter) | 2 | 0 | Turn a user's search sentence into filters your API already accepts, powered by Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [kongyo2/similarity-ts-jev](https://github.com/kongyo2/similarity-ts-jev) | 2 | 1 | similarity-ts and fallow duplicate detection for TypeScript, filtered by TypeSafe's Jev down to the pairs worth refactoring | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [opaielsheikh/typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard) | 2 | 0 | Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [satyawikananda/gits](https://github.com/satyawikananda/gits) | 2 | 1 | Gits is a browser extension powered by Jev to search the leads data on the Google Maps | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [0xPliny/Capsule](https://github.com/0xPliny/Capsule) | 0 | 0 | A live, visual dry-run desk for pump.fun | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [5hux1n/WcSy](https://github.com/5hux1n/WcSy) | 0 | 0 | 半成品，仅用于记录开发进度：微信 iOS JEV 决策咨询插件，当前 0.2.25 实验快照，尚未完成真机验收。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [abdulnazeer-ai/gmail-ai-spam](https://github.com/abdulnazeer-ai/gmail-ai-spam) | 0 | 0 | AI-powered Gmail spam detector using Jev's Structured Decision Model, Streamlit, and Gmail API. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [Abhishekvrshny/jevexec](https://github.com/Abhishekvrshny/jevexec) | 0 | 0 | Judicious Execution Verifier &amp; EXECutor for coding agents | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Achenyiyi/BiliWarmBot](https://github.com/Achenyiyi/BiliWarmBot) | 0 | 0 | 基于 Bilibili API、Jev 与 DeepSeek 的 AI 情感陪伴评论机器人：自动发现情感类视频，识别需要支持的评论，生成温暖回复并跟踪多轮对话。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [agaches/jev-test](https://github.com/agaches/jev-test) | 0 | 0 | Hook PreToolUse Claude Code adossé à Jev : décision de sécurité typée, pré-filtre anti-exfiltration local, repli regex | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [ahmedyo2001/FW-Guardrails](https://github.com/ahmedyo2001/FW-Guardrails) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [aigauravsingh-star/jevrails](https://github.com/aigauravsingh-star/jevrails) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [aiii-dot-id/aii-codequality-plugin](https://github.com/aiii-dot-id/aii-codequality-plugin) | 0 | 0 | Source code quality checks and model-based review for AII OS. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [akaushik-sudo/duckdb-jev](https://github.com/akaushik-sudo/duckdb-jev) | 0 | 0 | Private fork of judoaseeta/duckdb-jev (MIT), adapted for Sentrinox prompt intent | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [alexxonline/image-playground](https://github.com/alexxonline/image-playground) | 0 | 0 | An image playground for image generation models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [AliNikkhah2001/Work_Credit-RAG_Phase1](https://github.com/AliNikkhah2001/Work_Credit-RAG_Phase1) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [amalvarezme/mario-jev](https://github.com/amalvarezme/mario-jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [aminry/decisio-examples](https://github.com/aminry/decisio-examples) | 0 | 0 | Small, real prototypes built on Decisio, each with a recorded run and what went wrong | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [amrdajani/borchure-ai](https://github.com/amrdajani/borchure-ai) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [AnaOnTram/JBCA](https://github.com/AnaOnTram/JBCA) | 0 | 0 | Jev-Based Collision Avoidance | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [andrea-cappelluti/jev-voice-use](https://github.com/andrea-cappelluti/jev-voice-use) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [anselmlong/petition-bot](https://github.com/anselmlong/petition-bot) | 0 | 0 | Telegram bot for requesting and tracking intercessory prayer | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [ashneil12/safetube](https://github.com/ashneil12/safetube) | 0 | 0 | Normal YouTube for kids, minus the videos you've said no to. Android/Fire tablet app with AI filtering. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [Asmadey/Telegram-Google-Auth-Jev-verify-bot](https://github.com/Asmadey/Telegram-Google-Auth-Jev-verify-bot) | 0 | 0 | Telegram anti-spam bot: new members verify via Google OAuth; first message screened by Jev (OpenRouter) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [avinashsuresh1/semantic-control-system](https://github.com/avinashsuresh1/semantic-control-system) | 0 | 0 | A natural language control system for hardware control | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [Awesome-llms-labs/awesome-jev](https://github.com/Awesome-llms-labs/awesome-jev) | 0 | 1 | Awesome list for Jev — TypeSafe AI's decision-only System One model: typed decisions (Choice, Score, Noul) with calibrated probabilities. Guides, recipes, runnable examples, honest benchmarks, community projects. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [ayushkhandelwal123/learning-jev](https://github.com/ayushkhandelwal123/learning-jev) | 0 | 0 | Hands-on, level-by-level projects for learning TypeSafe's Jev decision model in Python. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [Baba-14/Guard-by-Bloomers](https://github.com/Baba-14/Guard-by-Bloomers) | 0 | 0 | Guard is a digital fraud-checking tool that helps people identify suspicious messages, links, phone numbers, calls, screenshots, and payment requests before they take action. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [bioduds/METEORITE](https://github.com/bioduds/METEORITE) | 0 | 0 | Meta-Analysis and Experimental Theory-Oriented Research, Intelligence and Testing Engine. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [bussolabs/laya-compaction](https://github.com/bussolabs/laya-compaction) | 0 | 0 | Claude Code plugin: verbatim context compaction guided by Laya (local or laya-serve). Port of fast-jev-compaction. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [bussyjd/Instasurrance](https://github.com/bussyjd/Instasurrance) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [cangnduc/Facebook_ad_remover](https://github.com/cangnduc/Facebook_ad_remover) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [carteakey/sortling](https://github.com/carteakey/sortling) | 0 | 0 | Tidy screenshots, downloads and documents with decision models. One Python file, no dependencies. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [chenjingdev-archive/jev](https://github.com/chenjingdev-archive/jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [cloud-f1/jev-agent-kit](https://github.com/cloud-f1/jev-agent-kit) | 0 | 0 | Jev Agent Kit: measured Jev log pruning and loop observation for Claude Code (classic hook adapter, observe mode by default) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-21 |
| [CrawlCA/crawlca](https://github.com/CrawlCA/crawlca) | 0 | 0 | CrawlCA spins scattered token data into one searchable web. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [cristiangofiar/jev_robot_poc](https://github.com/cristiangofiar/jev_robot_poc) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [crzyc0d3r/langgraph-agent-harness](https://github.com/crzyc0d3r/langgraph-agent-harness) | 0 | 0 | Production agent harness with middleware controls and a LangGraph plan-act-verify loop using typed probabilistic checks. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [CuongBC195/zalo-bot](https://github.com/CuongBC195/zalo-bot) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [Dalaoyuan2020/android-notification-filter-demo](https://github.com/Dalaoyuan2020/android-notification-filter-demo) | 0 | 0 | Android notification filtering demo: local keyword rules, notification listener, and real-device test APKs. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [damian87x/jev-browser-use](https://github.com/damian87x/jev-browser-use) | 0 | 0 | Fast browser QA from Claude Code or pi: TypeSafe Jev picks every click via Jev Ultrafast, you supply text and the pass check. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [damiankrzystolik/jev_like_with_ollama](https://github.com/damiankrzystolik/jev_like_with_ollama) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [damiensmith1/jev-gmail-filter](https://github.com/damiensmith1/jev-gmail-filter) | 0 | 0 | Filter Gmail with plain-English topics, powered by jevfilter and TypeSafe's Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [danlayton-cmyk/LTPPXT](https://github.com/danlayton-cmyk/LTPPXT) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [Datchthana1/kev-thai-pdpa-guard](https://github.com/Datchthana1/kev-thai-pdpa-guard) | 0 | 0 | Thai PDPA personal-data detector and 0-4 risk scorer: Kev-4B (Jev-style decision model) QLoRA fine-tuned on an 8 GB laptop GPU | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [devpilgrin/jeff-guard-multilang](https://github.com/devpilgrin/jeff-guard-multilang) | 0 | 0 | Prompt-injection guard: 10.5M LoRA on Jeff System One decision model. 12 languages, agentic/indirect injections, one forward pass (~20 ms). test 0.99 acc, agentic recall 1.00 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [Dharmik2510/work-shadower](https://github.com/Dharmik2510/work-shadower) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [divyamrastogi/redactly](https://github.com/divyamrastogi/redactly) | 0 | 0 | Redact credit card statements down to only the transactions you whitelist — free, open source, nothing stored. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [Djancyp/laya-go-server](https://github.com/Djancyp/laya-go-server) | 0 | 0 | you can run system one gguf models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [doggy8088/s1-studio](https://github.com/doggy8088/s1-studio) | 0 | 0 | S1 Studio — 開源的 /v1/systemone 結構化決策模型 Web UI 測試沙盒（支援 TypeSafe Jev、Ollama clef / clef-flash 與自建端點的 Choice / Score / Noul 視覺化機率診斷、A/B 端點對比與 SDK 匯出） | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-18 |
| [DongJunee/2026_aio2_p2_PlanEat_Backend](https://github.com/DongJunee/2026_aio2_p2_PlanEat_Backend) | 0 | 0 | \[SK네트웍스 Family 엔코아AI캠퍼스\] AI 오케스트레이션 캠프 2기 2번째 프로젝트 PlanEat_Backend | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [Donnaclarkk981/donnaclarkk981.github.io](https://github.com/Donnaclarkk981/donnaclarkk981.github.io) | 0 | 0 | Compare LLM-native structured output vs. TypeSafe Jev on latency, cost, and judgment quality. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [doraTeX/YNewsFilterPlus](https://github.com/doraTeX/YNewsFilterPlus) | 0 | 0 | Yahoo\!ニュースの記事を、キーワードおよびAI関連性判定でハイライト/除外するChrome拡張 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [DunnyBunny1/jev-computer-use](https://github.com/DunnyBunny1/jev-computer-use) | 0 | 0 | Prototype browser agent combining fast Jev decisions with Browser Use recovery | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [encore-ai-campus/aio-02-p2-team2](https://github.com/encore-ai-campus/aio-02-p2-team2) | 0 | 2 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [ES7/JEV-from-Scratch](https://github.com/ES7/JEV-from-Scratch) | 0 | 0 | In this repository, I have tried to build JEV model from TypeSafe AI from scratch | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [faissaloo/follower-centrifuge](https://github.com/faissaloo/follower-centrifuge) | 0 | 0 | Category-based Instagram follower/following curation, dry-run first — Follower Centrifuge 6000 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [faulker/myphin](https://github.com/faulker/myphin) | 0 | 0 | Personal financial tracking desktop app | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [feliper-de-oliveira/app-jev](https://github.com/feliper-de-oliveira/app-jev) | 0 | 0 | Estudo em cima do app jev do beer and code | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-19 |
| [franpfeiffer/reportAR](https://github.com/franpfeiffer/reportAR) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [gaaurav03/Jev-Project](https://github.com/gaaurav03/Jev-Project) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [gab-25/mtg_gauntlet](https://github.com/gab-25/mtg_gauntlet) | 0 | 0 | Django web app where AI agents playtest Magic: The Gathering Commander decks | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [gabrielbelo2007/JevTest](https://github.com/gabrielbelo2007/JevTest) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [GavinGoo/chunfeng](https://github.com/GavinGoo/chunfeng) | 0 | 0 | 一本会回答问题的魔法书：写下你的困惑，翻开属于你的那一页。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [gbesse/catalog-repair](https://github.com/gbesse/catalog-repair) | 0 | 0 | Review WooCommerce catalog anomalies with StateBridge, MatchGraph, ExceptionOS and Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [gbesse/jev-obs-cues](https://github.com/gbesse/jev-obs-cues) | 0 | 0 | Preview-first, finite Jev scene cues for OBS Studio. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [gbesse/jev-rappel-pro](https://github.com/gbesse/jev-rappel-pro) | 0 | 0 | Compare des catalogues produits aux rappels RappelConso avec GTIN exact et repli sémantique contrôlé. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [gbesse/jev-recall](https://github.com/gbesse/jev-recall) | 0 | 0 | Quarantine, audit and replay rejected AI decisions | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [gbesse/pinot-jev](https://github.com/gbesse/pinot-jev) | 0 | 0 | Semantic SQL predicates for Apache Pinot powered by TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [gbesse/strapi-plugin-jev-review](https://github.com/gbesse/strapi-plugin-jev-review) | 0 | 0 | Strapi 5 editorial review and publish guard powered by TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-18 |
| [gbesse/unleash-jev-rollout](https://github.com/gbesse/unleash-jev-rollout) | 0 | 0 | Signaux Jev pour Unleash / Jev signals for Unleash / Señales Jev para Unleash | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [ggilestro/jevguard-wp](https://github.com/ggilestro/jevguard-wp) | 0 | 0 | WordPress comment spam filter using the jev decisions model on OpenRouter. 120/120 spam caught with zero false positives on 215 real comments, at ~$0.00004 each. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [Gildra-Foundation/news](https://github.com/Gildra-Foundation/news) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [git-vixxiv/jev-email-cleaner](https://github.com/git-vixxiv/jev-email-cleaner) | 0 | 0 | vibe code so to clean up Gmail accounts using jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [glazk0/shugo](https://github.com/glazk0/shugo) | 0 | 0 | Shugo is a context-aware Discord auto-moderation bot powered by Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [Goooooooooody/pith](https://github.com/Goooooooooody/pith) | 0 | 0 | Get to the pith of a failing CI run before it floods Claude's context. Claude Code plugin + zero-dependency CLI: CI-link summaries, \! pith for pastes, paste guard. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Grant-Visser/magic-8-ball-v2](https://github.com/Grant-Visser/magic-8-ball-v2) | 0 | 0 | Magic 8 Ball v2 — JEV decision model tech demo | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [H4kken/greer](https://github.com/H4kken/greer) | 0 | 0 | A build a community tool for people who don't know how to build a community | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [hagzag/jev-rollouts-demo](https://github.com/hagzag/jev-rollouts-demo) | 0 | 0 | A practical use of Jev in Platform Engineering needs | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [haider2804/MyFinancialAnalyst](https://github.com/haider2804/MyFinancialAnalyst) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [haseebqureshii/uno-ai-speak](https://github.com/haseebqureshii/uno-ai-speak) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-21 |
| [hedykanzhang-create/sql_filter](https://github.com/hedykanzhang-create/sql_filter) | 0 | 0 | SQL 安全查询过滤器 — 本地正则 + Jev 语义双层，dev/test 查库前的 AI 中间件 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [Helicon1968/tb-spam-guard](https://github.com/Helicon1968/tb-spam-guard) | 0 | 0 | Thunderbird add-on that flags phishing mail impersonating Japanese organizations. Optional TypeSafe Jev support. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [HieNguyen08/Research-decision-model-and-ML-classification](https://github.com/HieNguyen08/Research-decision-model-and-ML-classification) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [HiveScaleSystems/jev-guard](https://github.com/HiveScaleSystems/jev-guard) | 0 | 0 | AI chat moderation for Minecraft (Paper/Folia) and Hytale servers, powered by TypeSafe's Jev model. Works with the TypeSafe API or Cloudflare AI Gateway. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [hoangdangwd/robot-3d-inspector](https://github.com/hoangdangwd/robot-3d-inspector) | 0 | 0 | Three.js robot model and combat animation inspector | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [Holychung/jev-browser-lab](https://github.com/Holychung/jev-browser-lab) | 0 | 0 | Experiments with TypeSafe Jev + Browser Use (based on browser-use/jev-ultrafast, MIT) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [hoonkim/mail-strainer](https://github.com/hoonkim/mail-strainer) | 0 | 0 | Gmail 스팸 분류기 (gws + OpenRouter Jev + SQLite 웹 UI) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [hteariH/stopspam-jev-bot](https://github.com/hteariH/stopspam-jev-bot) | 0 | 0 | Telegram bot that removes spam and scam messages from groups, using calibrated-confidence classification | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [ido-barnoam/job-scan-public](https://github.com/ido-barnoam/job-scan-public) | 0 | 0 | Daily job alert that uses TypeSafe Jev to judge which jobs fit you. Includes a build prompt and a non-technical guide for building your own copy with Claude. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [itsmartinwho/apartment-hunter](https://github.com/itsmartinwho/apartment-hunter) | 0 | 0 | Rank NYC rentals from StreetEasy and Zillow with your own weights, TypeSafe Jev judgments, and photo checks. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [ivan-rivera-projects/damien](https://github.com/ivan-rivera-projects/damien) | 0 | 0 | A Gmail triage CLI that asks before it acts: rules first, a model for the residue, and journalled, reversible writes. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [jacob-berendsohn/kassad](https://github.com/jacob-berendsohn/kassad) | 0 | 0 | Calibrated LLM guardrails for .NET. Runs every prompt, completion, tool call and citation past typed checks answered by TypeSafe's Jev, a System One decision model, and hands your code an Allow / Flag / Review / Block verdict with its probability and confidence. ASP.NET Core middleware and a DelegatingHandler for your provider HttpClient. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [JakeTheRabbit/HA-Crop-Steering-Jev](https://github.com/JakeTheRabbit/HA-Crop-Steering-Jev) | 0 | 0 | Crop Steering, Jev edition: the HA crop-steering engine with TypeSafe Jev judging every decision across P0-P3, probes, shots, salt and alerts, inside a deterministic safety envelope. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [Jakevin/decision-model-computer-use-with-vision](https://github.com/Jakevin/decision-model-computer-use-with-vision) | 0 | 0 | Screenshot-only macOS computer-use agent in Rust, driven by the vllm-sr Decision 3.0 API (choice + box). Design inspired by awlevin/typesafe-computer-use; no code copied. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [jaumesaa/gmail-jev-notifications](https://github.com/jaumesaa/gmail-jev-notifications) | 0 | 0 | Notificaciones de Gmail en Safari con criterios en lenguaje natural, Jev de TypeSafe y avisos nativos. Sin Google Cloud. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [javimp21/ai-job-hunter](https://github.com/javimp21/ai-job-hunter) | 0 | 0 | AI-powered job discovery, evaluation and assisted application workflow with deterministic filtering, Jev reasoning and human-in-the-loop browser automation. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [jbarragan1981/agente-correo](https://github.com/jbarragan1981/agente-correo) | 0 | 0 | Agente que lee tus correos electronicos y atiende segun prioridad, clasifica utilizando modelo jev como jailbreak y clasificador de correo | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [jeffrydegrande/jevry](https://github.com/jeffrydegrande/jevry) | 0 | 0 | Command-line tool for the TypeSafe Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [jeromtom/petsona-catalogue-ai](https://github.com/jeromtom/petsona-catalogue-ai) | 0 | 0 | Evidence-backed pet product classification with typed decision models (Jev / Laya). Petsona by Rexin Dynamics. AIBoomi Startup Weekend Kochi 2026. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [jonathanhecl/jev-chat-agent](https://github.com/jonathanhecl/jev-chat-agent) | 0 | 0 | Twitch bot that classifies messages in real time using Jev-Style-2B-Decision-v3 and logs the result.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [jourdanlabs/assay-001](https://github.com/jourdanlabs/assay-001) | 0 | 0 | ASSAY-001: independent, pre-registered verification of TypeSafe Jev's calibration and type-safety claims. Split verdict, published in full. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [juanlentino/comment-analysis-for-typesafe-jev](https://github.com/juanlentino/comment-analysis-for-typesafe-jev) | 0 | 0 | Backs the WordPress AI plugin's Comment Moderation with TypeSafe Jev, through Connector for TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [JulianFermani/umbral-live](https://github.com/JulianFermani/umbral-live) | 0 | 0 | A real-time browser content filter powered by Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [JulianKingman/Kill-email](https://github.com/JulianKingman/Kill-email) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [just-the-v/judge_rails](https://github.com/just-the-v/judge_rails) | 0 | 0 | Semantic judgments from TypeSafe Jev as self-maintaining ActiveRecord attributes: typed Noul, Choice and Score answers stored as indexable columns, with SQL scopes. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [kennethwolters/discord-policy-checker](https://github.com/kennethwolters/discord-policy-checker) | 0 | 0 | Experimental Chrome extension: Jev policy checks for Discord sends and edits, with optional Gemini rewriting. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [kjitin/jev-examples](https://github.com/kjitin/jev-examples) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [kolawong/jev-chromium](https://github.com/kolawong/jev-chromium) | 0 | 0 | AI-native Electron browser that plans, browses, and verifies collection tasks against page evidence. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [ksuomala/donna_moneypenny](https://github.com/ksuomala/donna_moneypenny) | 0 | 0 | Personal finance app on Rails: bank transactions through Enable Banking, LLM-assisted categories, stats | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [kurowashi/pi-jev](https://github.com/kurowashi/pi-jev) | 0 | 0 | Semantic checks for Pi file edits and new-file placement, powered by TypeSafe Jev (System One). | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-18 |
| [laplace-live/rinnegan](https://github.com/laplace-live/rinnegan) | 0 | 0 | Detects LAPLACE Chatterbox | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [layyana-junaid/AI_Engineering_Assign2](https://github.com/layyana-junaid/AI_Engineering_Assign2) | 0 | 0 | 23k0056 Layyana Junaid | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [lbussell/vscode-jev-search](https://github.com/lbussell/vscode-jev-search) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [lizzystannah/jev](https://github.com/lizzystannah/jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [Luka-Dumbadze/archable](https://github.com/Luka-Dumbadze/archable) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-18 |
| [Luminary-AI-Solutions/image-moderation-bench](https://github.com/Luminary-AI-Solutions/image-moderation-bench) | 0 | 1 | Image moderation benchmark on UnsafeBench: Cloudflare clef-flash, TypeSafe Jev, Claude Haiku 5.5 and Amazon Rekognition, with accuracy, latency and cost. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [majid-sharif-soleimani/indeed-job-filter](https://github.com/majid-sharif-soleimani/indeed-job-filter) | 0 | 0 | Chrome extension that scores Indeed job listings against your resume with AI (Claude, OpenAI, Gemini, TypeSafe Jev), marks unsuitable jobs and bookmarks matches. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [majid-sharif-soleimani/linkedin-job-filter](https://github.com/majid-sharif-soleimani/linkedin-job-filter) | 0 | 0 | Chrome extension that scores LinkedIn job search reslts against your resume with AI (Claude, OpenAI, Gemni, TypeSafe Jev), dismisses non-matching jobs and sves matches. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [manish182003/RepoGuard-AI](https://github.com/manish182003/RepoGuard-AI) | 0 | 0 | Autonomous multi-agent code repair platform that investigates GitHub issues, validates defects via AST semantic analysis &amp; isolated pytest sandboxes, and automates verified pull requests with human-in-the-loop safeguards. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [manvendersingh21/agentgate](https://github.com/manvendersingh21/agentgate) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [marcosdeaza/JEV](https://github.com/marcosdeaza/JEV) | 0 | 0 | Exploración de control por voz en macOS: TypeSafe Jev, planificación con Anthropic y sesiones continuas. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [MatsErdkamp/inspired-lint](https://github.com/MatsErdkamp/inspired-lint) | 0 | 0 | Discover lint rules by comparing your code with reference repositories. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-18 |
| [Mfrostbutter/jev-n8n-patterns](https://github.com/Mfrostbutter/jev-n8n-patterns) | 0 | 0 | Jev (TypeSafe System One) patterns in n8n: PII screening, agent and coding-agent guardrails, workflow evals. Synthetic data, MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [misakaikato/ai-mosaic](https://github.com/misakaikato/ai-mosaic) | 0 | 0 | 按自然语言描述屏蔽网页内容的 Chrome / Edge 扩展，TypeSafe Jev 逐块判定，带自我约束锁 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [mmikaildemir/commit-or-abstain](https://github.com/mmikaildemir/commit-or-abstain) | 0 | 0 | Code, data, and model outputs for 'Commit or Abstain? System One Decision Models, LLMs, and Missing Legal Authority' | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [mono-note/feed-spam-spot](https://github.com/mono-note/feed-spam-spot) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [MoolMong/chzzk-auto-moderator](https://github.com/MoolMong/chzzk-auto-moderator) | 0 | 0 | 치지직 채팅을 실시간으로 보고 AI 판단 모델 Jev로 위반 메시지를 자동 제재하는 봇 (아이디어 단계) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [mpointer/typesafe-gates](https://github.com/mpointer/typesafe-gates) | 0 | 0 | Typed decision gates for LLM pipelines on TypeSafe AI's Jev: Score, Choice and yes/no judgments with explicit thresholds and a stated fail-open or fail-closed policy. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [MrDesjardins/jev-send-guard](https://github.com/MrDesjardins/jev-send-guard) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-20 |
| [MSR2012/ems](https://github.com/MSR2012/ems) | 0 | 0 | Email management system | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Muhammad-Umar26/AI-Models-Race](https://github.com/Muhammad-Umar26/AI-Models-Race) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-24 |
| [mustafasemi-ai/jevlike](https://github.com/mustafasemi-ai/jevlike) | 0 | 0 | Calibration under distribution shift for System One decision models: open, reproducible, no API key | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [narulaskaran/agent-world](https://github.com/narulaskaran/agent-world) | 0 | 0 | A virtual world for your virtual agents to virtually interact | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [nasiko-bishnu/router-selection-dataset](https://github.com/nasiko-bishnu/router-selection-dataset) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [Nassirx1/Enhancing-LLM-Security-Through-Decision-Models](https://github.com/Nassirx1/Enhancing-LLM-Security-Through-Decision-Models) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [nightwhite/guard-mgte](https://github.com/nightwhite/guard-mgte) | 0 | 0 | LLM 请求审计模型：一次前向同出拦截判断+违规类型（97.8 召回 @ 0.18% 误报，CPU 推理） | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [No3371/kura](https://github.com/No3371/kura) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [notsovivekkk/icp_gate](https://github.com/notsovivekkk/icp_gate) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [NyleGarcia/crunchy-plus](https://github.com/NyleGarcia/crunchy-plus) | 0 | 0 | Crunchyroll, but better: sub/dub modes, modern UI, AniList sync + import | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [omarmahmoud-h2o/sdgf](https://github.com/omarmahmoud-h2o/sdgf) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [OriolSegarra/tube-focus-mode](https://github.com/OriolSegarra/tube-focus-mode) | 0 | 0 | Chrome extension that filters YouTube down to what you're focusing on, with Jev topic checks | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [pascualin/UnaEstrellaSearcher](https://github.com/pascualin/UnaEstrellaSearcher) | 0 | 0 | Tool to look for one star reviews | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [plicara/articles](https://github.com/plicara/articles) | 0 | 0 | Code behind Plicara's published research articles | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-25 |
| [PouyaJigsaw/decision-assistant](https://github.com/PouyaJigsaw/decision-assistant) | 0 | 0 | Screen a LinkedIn profile against a job rubric. Get Contact, Investigate, Save for later, or Skip. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [prakashkagitha/djev](https://github.com/prakashkagitha/djev) | 0 | 0 | Deterministic Jev: Jev-compatible System One decisions that repeat bit for bit (SGLang + patches), with replay tests and a guardrail suite | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [PrathamS1/crawl-my-feed](https://github.com/PrathamS1/crawl-my-feed) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [pravbeseda/antispam](https://github.com/pravbeseda/antispam) | 0 | 0 | Apple Mail extension that filters spam in every account with TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [rafaelleaomed/rafaelleaomed](https://github.com/rafaelleaomed/rafaelleaomed) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [rahulbansalc6414/jev-as-a-guardrail](https://github.com/rahulbansalc6414/jev-as-a-guardrail) | 0 | 0 | Benchmark: TypeSafe Jev vs Claude Haiku 4.5 as input guardrails. Compares detection rates, false positives, latency, and cost across 1500 jailbreak, evasion, and benign prompts. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [raj8525/universal-jev](https://github.com/raj8525/universal-jev) | 0 | 0 | Universal TypeSafe Jev Runtime Plugin &amp; MCP Server for Coding Agents | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [ramadhaninsan/jev-poc](https://github.com/ramadhaninsan/jev-poc) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [raxITlabs/decision-models-as-guardrails](https://github.com/raxITlabs/decision-models-as-guardrails) | 0 | 2 | Can a decision model replace your guardrail? Open benchmark of 19 systems (Jev, Clef, Strands Deciders, the Perplexity and OpenAI Decisions APIs, Bedrock Guardrails) on the same 9,975 checks, scored on accuracy and cost. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-24 |
| [Ray0907/pi-loop](https://github.com/Ray0907/pi-loop) | 0 | 0 | Opus plans, pi implements in herdr panes, Jev-gated review loop with a tool-call safety layer | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [relevan-dev/decision-model-eval](https://github.com/relevan-dev/decision-model-eval) | 0 | 0 | We tested Jev, Laya, and Claude to see how they stacked up when it came to configuring a system.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [Reverie0123/send-guard](https://github.com/Reverie0123/send-guard) | 0 | 0 | A semantic privacy check before every send (Chrome &amp; Edge) · 发送按钮前的语义隐私防火墙（Chromium 扩展） | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [rmoriz/ai-classification-milter](https://github.com/rmoriz/ai-classification-milter) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [Rogeliogamer/Prompt_and_Logic](https://github.com/Rogeliogamer/Prompt_and_Logic) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-18 |
| [rohitdevade/topiclens-for-youtube](https://github.com/rohitdevade/topiclens-for-youtube) | 0 | 0 | A smart, continuous topic filter for YouTube powered by Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Romay777/laya-telegram-mod](https://github.com/Romay777/laya-telegram-mod) | 0 | 0 | Self-hosted AI moderation bot for Telegram groups. Catches spam, ads and insults with the open Laya model running locally on CPU, or with the Jev API. Escalating mutes, appeals, admin menu. RU/EN. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [royharden/jev-decision-game](https://github.com/royharden/jev-decision-game) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [sageri/agent-skills](https://github.com/sageri/agent-skills) | 0 | 0 | Agent Skills (SKILL.md) for Claude Code, Codex &amp; ZCode: fast browser automation with TypeSafe Jev, cross-model code review, pre-writing coach, Xiaohongshu/WeChat article to Markdown | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [Saml1211/self-compact-pi-agent](https://github.com/Saml1211/self-compact-pi-agent) | 0 | 0 | Autonomous context lifecycle management, 78% compaction trigger &amp; auto-continuation for Pi Coding Agent | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [sanjeevpalla/enterprise-agentic-rag](https://github.com/sanjeevpalla/enterprise-agentic-rag) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [sanlega/openbot-ios](https://github.com/sanlega/openbot-ios) | 0 | 0 | OpenBot with a native iOS companion app: persistent Claude Code and Codex Bots on your desktop, paired securely with your iPhone. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [santanna1608-bot/flow-studio-ai](https://github.com/santanna1608-bot/flow-studio-ai) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [senthilsweb/jev-pii](https://github.com/senthilsweb/jev-pii) | 0 | 0 | Column-level PII and compliance discovery in DuckDB SQL with typed TypeSafe Jev answers; runs in the browser via Pyodide | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-25 |
| [serejkaaa512/jev-page-safety](https://github.com/serejkaaa512/jev-page-safety) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [shadiwazir/llm-eval-guardrails](https://github.com/shadiwazir/llm-eval-guardrails) | 0 | 0 | ML tracking with guardrail compliance plus LLM-judge correctness  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [shopsmartai/ora-jev](https://github.com/shopsmartai/ora-jev) | 0 | 0 | Ask your Oracle tables questions in plain language: jev(), jev_prob(), jev_choice() and jev_score() in PL/SQL, answered by TypeSafe's Jev or any Jev-compatible API. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [shubham5027/Jev_Guardtrails](https://github.com/shubham5027/Jev_Guardtrails) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [siddharth143/trustsafety-classifier](https://github.com/siddharth143/trustsafety-classifier) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [simonridd/Genesys-aqm](https://github.com/simonridd/Genesys-aqm) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [sknitd/jev-agent](https://github.com/sknitd/jev-agent) | 0 | 0 | Chrome extension that runs browser tasks from a prompt: DeepSeek plans, TypeSafe Jev grounds. IRCTC + MakeMyTrip flows, stops before payment. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-21 |
| [soderlind/jev-mail-triage](https://github.com/soderlind/jev-mail-triage) | 0 | 0 | Local spam and phishing triage for Proton Mail Bridge, powered by TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [sonda-ml/sonda-server](https://github.com/sonda-ml/sonda-server) | 0 | 0 | Self-hosted server for decision models: answers yes/no, choice and score questions with calibrated probabilities in one forward pass. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [STLoft/Consistency-Guard](https://github.com/STLoft/Consistency-Guard) | 0 | 0 | 캐릭터 응답의 설정 오류를 검사하고 수정본을 새 스와이프로 추가하는 SillyTavern 확장 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [sung00819/sdx_guardrail](https://github.com/sung00819/sdx_guardrail) | 0 | 1 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [SuperInstance/vision](https://github.com/SuperInstance/vision) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-18 |
| [sususu98/pi-jev-navigator](https://github.com/sususu98/pi-jev-navigator) | 0 | 0 | Ultra-low-token System One context navigation and precision SOP dispatch engine for Pi Coding Agent using TypeSafe Jev &amp; Trie-Folded CodeGraphs | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [tabishsaiyed0/mail](https://github.com/tabishsaiyed0/mail) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [taksehi/pokemon-ai](https://github.com/taksehi/pokemon-ai) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [teaspotato/frankenvoice](https://github.com/teaspotato/frankenvoice) | 0 | 0 | Experimental full-duplex voice agent via cascade pipeline | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [theb1ackswordsman/MoveInSyncRatings](https://github.com/theb1ackswordsman/MoveInSyncRatings) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [thechristobal/llm-roundtable](https://github.com/thechristobal/llm-roundtable) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [thecogworks/Cogworks.Umbraco.FormsGuard](https://github.com/thecogworks/Cogworks.Umbraco.FormsGuard) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [TheRealRajdeep/earmuffs](https://github.com/TheRealRajdeep/earmuffs) | 0 | 0 | Chrome extension that beeps profanity in Twitch live streams and masks it in chat, judged in context | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [thy10086/ros2-resilience-guardian](https://github.com/thy10086/ros2-resilience-guardian) | 0 | 0 | Mission-aware zero-trust ROS 2 resilience guardian with a local security dashboard | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-22 |
| [to-the-sun/amanuensis-analysis](https://github.com/to-the-sun/amanuensis-analysis) | 0 | 0 | A sandbox for the analysis of patterns in audio | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [trouble-agent/guard](https://github.com/trouble-agent/guard) | 0 | 0 | guard | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [u007/claude-plugins](https://github.com/u007/claude-plugins) | 0 | 0 | Personal Claude Code plugin marketplace: context-status statusline and jev-guard inbound-content guardrail | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [videoaditor/jevmail](https://github.com/videoaditor/jevmail) | 0 | 0 | Email only the people who care. A Telegram bot that ranks every lead with Jev (TypeSafe) before sending. Set up by your AI agent in 10 minutes. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [vidux/iso-jevdit](https://github.com/vidux/iso-jevdit) | 0 | 0 | An npm CLI that audits a codebase against ISO/IEC 27001:2022 Annex A and writes a detailed \`iso-jevdit-report.md\` you can hand to an auditor. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [vikasums/rlcd-jev](https://github.com/vikasums/rlcd-jev) | 0 | 0 | System 1 / System 2 Two-Tier AI Gateway | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [vinceallenvince/walk-and-hack](https://github.com/vinceallenvince/walk-and-hack) | 0 | 0 | Snap a pigeon on your iPhone. A minute later it's back on your phone, photorealistically dressed for Christmas. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [walteraandrade/estante](https://github.com/walteraandrade/estante) | 0 | 0 | Shared shelf of album and track recommendations for a psychoacoustics study group | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [willificent/calibrated-janitor](https://github.com/willificent/calibrated-janitor) | 0 | 0 | Calibrated decision-model comment moderation: spam/approve cutoffs fit on labeled data, zero human in the loop. Clef/Jev-family decision engine (Ollama /v1/systemone). | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [wobsoriano/webkit95](https://github.com/wobsoriano/webkit95) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [xDavidez/JevBot](https://github.com/xDavidez/JevBot) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [Xeven777/jev-voice-computer-use](https://github.com/Xeven777/jev-voice-computer-use) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [xreedev/hoichoi-hackathon](https://github.com/xreedev/hoichoi-hackathon) | 0 | 0 | BreakSense analyses a long-form OTT episode, finds every moment that is safe and natural for an ad break, and matches each break to the most relevant brand from a catalogue. It emits a VMAP 1.0.1 / VAST 4.2 manifest that a video player can consume directly, along with a full-featured browser UI. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [yanjn1388/jev-bayes](https://github.com/yanjn1388/jev-bayes) | 0 | 0 | Jev（TypeSafe AI）にベイズ問題を渡して、報告確率の較正と基準率の無視を測った実験（事前登録つき） | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [yelina123/custom-barrage-ai-filter](https://github.com/yelina123/custom-barrage-ai-filter) | 0 | 0 | Jev 驱动的 B 站弹幕 AI 过滤器 · 自定义多规则屏蔽剧透/骂人/引战，命中变空格不挡画面 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [yichincho/del-adv](https://github.com/yichincho/del-adv) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [ynsh-ai/spam-classifier](https://github.com/ynsh-ai/spam-classifier) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [yonsakhan/x-spam-filter-typesafe](https://github.com/yonsakhan/x-spam-filter-typesafe) | 0 | 0 | 油猴脚本：用 TypeSafe Jev 模型对 X 评论区做语义级垃圾评论过滤（识别形近字/乱码变体，支持隐藏或折叠占位） | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [youssefhk-sw/clef-duckdb-proxy](https://github.com/youssefhk-sw/clef-duckdb-proxy) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [yuviiitm26/av-voice-pipeline](https://github.com/yuviiitm26/av-voice-pipeline) | 0 | 0 | Ultra-Low-Latency Audio-Visual Voice Automation Pipeline - End-to-end AV-TSE, VAD, ASR, Decision Brain, and Win32 Action Serialization | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [Zettt/antigravity-command-guard](https://github.com/Zettt/antigravity-command-guard) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [zhoupeiyu/omnihub](https://github.com/zhoupeiyu/omnihub) | 0 | 0 | 万象平台 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-26 |
| [4rays/profanity-checker](https://github.com/4rays/profanity-checker) | 1 | 0 | Cloudflare Worker to check for profanity using TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [CeamKrier/semantic-firewall](https://github.com/CeamKrier/semantic-firewall) | 1 | 0 | Semantic firewall for LLM agents: tool calls gated by TypeSafe Jev (System One decision model via OpenRouter) + deterministic policy. PoC with corpus, stability eval, baseline, results. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [DolphinMiner/jev-rss](https://github.com/DolphinMiner/jev-rss) | 1 | 0 | A local-first RSS reader with Jev-powered semantic screening. Follow what matters, inspect every judgment, and keep control of your reading. English / 简体中文. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [JGalego/Jevs-Garage](https://github.com/JGalego/Jevs-Garage) | 1 | 1 | A garage full of tiny experiments for building critical systems with System One &amp; Jev 🔧🧠⚡ | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [kurihada/pi-jev-permit](https://github.com/kurihada/pi-jev-permit) | 1 | 0 | A Jev (TypeSafe System One) permission gate for the Pi coding agent: judges every bash / write / edit call before it runs | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [makefinks/jev-feed-filter](https://github.com/makefinks/jev-feed-filter) | 1 | 0 | Smart, dynamic AI filtering for X and YouTube feeds using Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [naturalmoods/epeszuro](https://github.com/naturalmoods/epeszuro) | 1 | 0 | Chrome-bővítmény: elrejti a gyűlölködő YouTube-hozzászólásokat és élőchat-üzeneteket a TypeSafe Jev modelljével. MIT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [NorbertBodziony/guard-jev](https://github.com/NorbertBodziony/guard-jev) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [rudra72r/jev-guard](https://github.com/rudra72r/jev-guard) | 1 | 1 | Fast, cheap guardrails for LLM apps, powered by TypeSafe's Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [serejkaaa512/jev-content-guard-ext](https://github.com/serejkaaa512/jev-content-guard-ext) | 1 | 0 | Jev AI content guard Chrome extension | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [taman-spirit/guardrail-chatbot-jev](https://github.com/taman-spirit/guardrail-chatbot-jev) | 1 | 0 | Vietnam - Content safety guardrails for AI chatbots: input, output and conversation checks over one policy file with Jev  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [who/jevq](https://github.com/who/jevq) | 1 | 0 | A Jev-based filter sidecar for jq | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [yldst-dev/fuckyou-spam-rs](https://github.com/yldst-dev/fuckyou-spam-rs) | 1 | 0 | 짜증나는 스팸성 메시지를 LLM을 활용해 삭제하는 텔레그램 봇 코드의 rust 재작성판. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [prestonkakukdev/Jev-Defense](https://github.com/prestonkakukdev/Jev-Defense) | 0 | 0 | AI 에이전트의 위험한 도구 호출 차단, 프롬프트 주입 감지 및 스킬 검사를 수행하는 TypeSafe Jev 기반 보안 가드레일 도구다.<br>명령어가 데이터를 삭제하거나 덮어쓰는지, 외부로 데이터를 전송하는지, 사용자가 이를 명시적으로 요청했는지 등의 예/아니오 확률을 noul로 묻는다.<br>Jev가 최종 결정을 내리지 않고 좁은 예/아니오 확률만 계산하며, 코드 하드룰과 rulebook.py의 명시적 조건문으로 allow·ask·block을 결정한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [tecanmol/JevGaurd](https://github.com/tecanmol/JevGaurd) | 0 | 0 | 웹페이지 내 광고성 요소를 찾아 Jev 분류 결과에 따라 제거하거나 강조 표시해 주는 크로미엄 기반 브라우저 확장 프로그램이다.<br>웹페이지에서 추출한 후보 요소 설명이 광고에 해당하는지 여부 및 해당 확률(probability)을 판별하도록 질의한다.<br>전체 페이지 대신 후보 요소 요약 설명만 최대 30개씩 배치로 묶어 Jev에 전송하며, 스크롤 등 동적 로딩 요소를 지속적으로 탐지한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [0x963D/last-exit](https://github.com/0x963D/last-exit) | 0 | 0 | A cyberpunk border encounter powered by TypeSafe Jev. Bluff the guard. Inspect the receipts. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [Abhieu/excelpilot](https://github.com/Abhieu/excelpilot) | 0 | 0 | AI-assisted Excel operations engine: structured planning, JEV decision support, deterministic policy and execution, verification, and an audit trail. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [acarbone/PII-Detector](https://github.com/acarbone/PII-Detector) | 0 | 0 | PII Detector PoC using TypeSafe AI model Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [affirmitv/bitrate-advisor](https://github.com/affirmitv/bitrate-advisor) | 0 | 0 | Live-stream encoder settings from telemetry and history: TypeSafe's Jev decision model inside a deterministic safety envelope. Deno, Node, edge runtimes. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [BrunoMS0/Blind-Spot](https://github.com/BrunoMS0/Blind-Spot) | 0 | 0 | Turn-based tactical pixel art game: a nighttime museum heist where Jev (TypeSafe AI) controls the guards. The code calculates vision and paths; Jev decides what each guard does. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [codaaiteam/jev-computer-use](https://github.com/codaaiteam/jev-computer-use) | 0 | 0 | Gate any agent's actions (Claude Code / Codex / opencode / computer-use) with a typed, calibrated Jev safety decision. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [finrod21/jev-transaction-guard](https://github.com/finrod21/jev-transaction-guard) | 0 | 0 | Autonomous settlement circuit breaker protecting ledgers against CVE/RCE balance bypasses, nocturnal draining, and prompt injection attacks using TypeSafe Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [fr3akX/systemone-mail-filter](https://github.com/fr3akX/systemone-mail-filter) | 0 | 0 | After-queue Postfix spam classification with TypeSafe Jev, subject tagging, and recipient-scoped filtering. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [ghubnab99/jev-enterprise-decision-fabric](https://github.com/ghubnab99/jev-enterprise-decision-fabric) | 0 | 0 | Architecture for running many semantic decisions through one validated path, with a labelled 111-case benchmark comparing TypeSafe Jev against a Claude baseline, and a dashboard for inspecting any single decision. Experimental, not production. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [hamzaahmadaslam/fedi-report-triage](https://github.com/hamzaahmadaslam/fedi-report-triage) | 0 | 0 | Reads the open reports on a Mastodon server with a moderator's own read-only token and prints them as a queue sorted by severity, using TypeSafe's Jev model. It never takes a moderation action. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [javimp2003/laya-guardrails](https://github.com/javimp2003/laya-guardrails) | 0 | 0 | Guardrails de input, tool call y output para agentes de IA con un modelo System One tipo Jev (laya-pt-es-typed) autoalojado en una NVIDIA L4: 5 ms por check frente a 140 ms de un LLM-as-a-judge. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [JevForge/jev-cloud-cost-guardian](https://github.com/JevForge/jev-cloud-cost-guardian) | 0 | 0 | Evaluate cloud spend against a budget and gate CI with Jev (approve, warn, block, or review). | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [lambertsj/beatjev](https://github.com/lambertsj/beatjev) | 0 | 0 | try to beat jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [Luminousyyh/laya-decide](https://github.com/Luminousyyh/laya-decide) | 0 | 0 | A DeepSeek Harness skill that gates file and command actions on a local LAYA System-1 decision model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [MorganOnCode/jev-gram](https://github.com/MorganOnCode/jev-gram) | 0 | 0 | N-gram NSFW detection + AI-prose heatmaps judged by TypeSafe Jev (JEVATHON 2026) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [mpeddicord/jev-tab-filter](https://github.com/mpeddicord/jev-tab-filter) | 0 | 0 | Chrome extension: group, hide, or close tabs by theme, scored by TypeSafe's Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [neddes/sloppy-jevs-extension](https://github.com/neddes/sloppy-jevs-extension) | 0 | 0 | Open-source Chrome extension that filters AI-generated prose and ads with Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [neozhu/jev-audit](https://github.com/neozhu/jev-audit) | 0 | 0 | AI-powered contract comparison with Jev atomic evaluations—spot substantive changes, filter OCR noise, and generate reviewable audit reports. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [OmarAlaaeldein/jev-verifier-skill](https://github.com/OmarAlaaeldein/jev-verifier-skill) | 0 | 0 | Fast 'System One' reflex for reasoning LLMs: typed probabilistic second opinions from Jev via OpenCode Zen, with PII-minimizing state redaction. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [oppih/approval-judge-bridge](https://github.com/oppih/approval-judge-bridge) | 0 | 0 | OpenAI-compatible judge endpoint for agent approval gates: typed judgements (Jev), any OpenAI-compatible model, or a rule file — fail-closed, calibrated, with a replay battery | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [P4A-Policies-for-Agents/LLM-Response-Leakage-Guard](https://github.com/P4A-Policies-for-Agents/LLM-Response-Leakage-Guard) | 0 | 0 | Outbound MuleSoft Omni/Flex Gateway policy: screens the upstream LLM response for leaked system prompts, secrets, canaries, internal hosts (deterministic) and semantic/paraphrased leaks (typed Jev judge); replaces a leaking reply with a safe refusal, benign replies pass byte-identical. No model in the data path. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [pjrpjr/qingliu](https://github.com/pjrpjr/qingliu) | 0 | 1 | X 时间线清洁工 · FeedSieve(MIT) 衍生 · 带实测标定的 AI 判定层：误杀 0.7%，还能抓词库认不出的 47% | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [ReneGucci94/jev-scout-filter](https://github.com/ReneGucci94/jev-scout-filter) | 0 | 0 | Filtro previo de candidatos de minidrama. Jev decide antes del scrape. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [shibammitra24/jev-guard](https://github.com/shibammitra24/jev-guard) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [ShupingR/scam-shield](https://github.com/ShupingR/scam-shield) | 0 | 0 | Scam text message filter powered by TypeSafe's Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-13 |
| [Srinivasa314/hn-comment-filter](https://github.com/Srinivasa314/hn-comment-filter) | 0 | 0 | Chrome extension that shows the Hacker News comments worth reading, scored by TypeSafe's Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [tpaulshippy/shady-town](https://github.com/tpaulshippy/shady-town) | 0 | 0 | Shady Town: social-deduction party game for the living room TV, moderated by TypeSafe Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [tx-smitht/jev-focus-guard](https://github.com/tx-smitht/jev-focus-guard) | 0 | 0 | Jev Focus Guard: a local Chrome extension that asks Jev (System One) whether page elements are ads or distractions, then hides them. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [yodablocks/duckdb-jev](https://github.com/yodablocks/duckdb-jev) | 0 | 0 | Semantic ORDER BY for DuckDB, backed by TypeSafe AI's Jev model. Ships with independent calibration numbers. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [zachlandes/jev-dialect-bias](https://github.com/zachlandes/jev-dialect-bias) | 0 | 0 | Reproducing Hofmann et al. (Nature 2024) dialect-prejudice probes on TypeSafe's Jev, including a content-moderation variant | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [biccyanzac-pixel/jacob.gg](https://github.com/biccyanzac-pixel/jacob.gg) | 0 | 0 | Hub for the daily games: ridd-le, Yogle, Predictle | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-22 |
| [DanielJoyce/jobber](https://github.com/DanielJoyce/jobber) | 0 | 0 | My agentic dashboard for jobhunting | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [dhana555std/DeepEvalRag](https://github.com/dhana555std/DeepEvalRag) | 0 | 0 | Project that uses LLM or Jev as judge to evaluate a RAG solution. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [kemandos/thrift_shop_publisher](https://github.com/kemandos/thrift_shop_publisher) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [masseater/oxlint-plugin-decision](https://github.com/masseater/oxlint-plugin-decision) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [nikhilcherry/chaukanna](https://github.com/nikhilcherry/chaukanna) | 0 | 0 | Live scam-call guardian: whispers a warning only the victim hears, AI agent cuts the scammer off, n8n files the evidence. Sarvam + Jev + LiveKit + n8n. Hack Sprint 2026. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [shinjo15/agent_moderator](https://github.com/shinjo15/agent_moderator) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-26 |
| [tallaprs15/tallaprs15](https://github.com/tallaprs15/tallaprs15) | 0 | 0 | Profile README | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [Teichhofer/Mailhelp](https://github.com/Teichhofer/Mailhelp) | 0 | 0 | Python-Assistent zur LLM-basierten Auswertung von IMAP-Mails über OpenRouter. Sendet Zusammenfassungen per Telegram und erstellt nach Bestätigung Aufgaben in Todoist sowie Termine in Google Kalender. Für lokale Nutzung und Docker auf Linux ausgelegt. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [Abhishekfm/JevCheck](https://github.com/Abhishekfm/JevCheck) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [B0und/jev_content_filter](https://github.com/B0und/jev_content_filter) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [Kushagr142/jev-filter](https://github.com/Kushagr142/jev-filter) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [omataak/jev-guardrail-demo](https://github.com/omataak/jev-guardrail-demo) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |

### firelex/jeff

<details><summary>README 발췌</summary>

results/jeffhub.json (also on jeffhub.ai); base-model scores from ~/jev/runs/eval//{0.8b-20260929-2258, 2b-20260930-2347}-final-calibrated.json (v1.2) and {0.8b-20260929-0834,2b-20260929-1118}-final-calibrated.json (v1.1) on the training machine; sizes: model.safetensors of the v1.2 base is 1,706,02

</details>

### leepokai/jev-guard

<details><summary>README 발췌</summary>

Claude Code's auto mode is described as: "A separate classifier model reviews actions before they run, blocking anything that escalates beyond your request, targets unrecognized infrastructure, or appears driven by hostile content Claude read." That is exactly the job jev-guard does — as three typed

</details>

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

### cisco-ai-defense/skill-scanner

<details><summary>README 발췌</summary>

A best-effort security scanner for AI Agent Skills that detects prompt injection, data exfiltration, and malicious code patterns. It combines pattern-based detection (YAML + YARA-X), AST and dataflow analysis, an optional LLM-as-a-judge, and a bounded CEL decision layer over typed detector facts.

</details>

### ZeroTang05/VideoAdGuard

<details><summary>README 발췌</summary>

&gt; Looking for the English version? See README.en.md. &gt; VideoAdGuard detects embedded ads inside Bilibili videos with an LLM and lets you skip them.

</details>

### spamscanner/spamscanner

<details><summary>README 발췌</summary>

A classifier that reads every language. Words are segmented by Unicode rules, so Chinese, Japanese and Thai work like English. Lookalike letters, invisible characters, v1agra spellings and styled letters are undone before counting. Links, senders, HTML and attachments count too, not only words. Care

</details>

### MillionSend/millionsend

<details><summary>README 발췌</summary>

Self-host on your own AWS SES, or use the hosted cloud. Resend-compatible API — migrating means changing two environment variables, not rewriting your integration.

</details>

### JamesANZ/JevPromptShield

<details><summary>README 발췌</summary>

A prompt can tell a coding agent to drop its task and hand the secrets over. A pasted page can hide the same instruction in what looks like documentation. The agent can then propose a shell command that wipes a disk, force-pushes main, or pipes a downloaded script into bash.

</details>

### zhuobichen/weflow-cli

<details><summary>README 발췌</summary>

&gt; 夫天地者，万物之逆旅也；光阴者，百代之过客也。

</details>

### jev-sec/jev-ids

<details><summary>README 발췌</summary>

Intrusion detection in one request. Show TypeSafe's Jev one network flow and five labeled examples. It answers whether the flow is an attack and which kind, in under half a second, with no text to parse.

</details>

### TiraelSedai/ClubDoorman

<details><summary>README 발췌</summary>

Изначально разрабатывался чтобы решить проблему со спамерами в чатах Вастрик.Клуба, но может использоваться и в чатах других форков, да и просто в любых больших чатах.

</details>

### Singularity-Compute/super-decider

<details><summary>README 발췌</summary>

The open-weights decision model that thinks when it's unsure. Send a state and typed questions, get back a choice, a yes or no, or a score, with a calibrated probability for every answer.

</details>

### merefield/discourse-chatbot

<details><summary>README 발췌</summary>

This README is the canonical reference for installing, configuring, operating, and troubleshooting Chatbot.

</details>

### yikangy873-gif/jev-desktop

<details><summary>README 발췌</summary>

Jev Desktop adds a bounded decision loop to Codex Computer Use for browser tabs and native macOS apps.

</details>

### Nyarlathoteppppp/pi-heed

<details><summary>README 발췌</summary>

Your agent understood your instruction. pi-heed makes sure it still remembers.

</details>

### HsMirage/AIPlanHub

<details><summary>README 발췌</summary>

&gt; 更新日志（每分类仅保留最新一条·完整历史见 git log） &gt; - Coding（2026.10.26）（无价格档位变化·智谱AI/z.ai/Kimi/字节·方舟/阶跃星辰/快手 StreamLake/Ollama/稳明光语纪/xKiro/CommandCode/OpenDesign/OpenCode Go 官方页逐项核对价格·档位·额度·模型均与本地一致（仅补注释：Kimi Claw 每日扣0.6%+站点0.08%、OpenDesign DS-V4.1-Flash 谷价周请求数 145,600→291,200/7天·GPT-6.1 Sol Go/Plus 2×Pro/Max 10×、C

</details>

### madisonrickert/jev-permission-gate

<details><summary>README 발췌</summary>

A Claude Code mod that puts TypeSafe's Jev in front of the auto mode classifier. In auto mode, for each tool call Claude Code would otherwise send to its built-in classifier, Jev answers eight yes/no questions in one request and the mod decides:

</details>

### Endgame-Labs/goated

<details><summary>README 발췌</summary>

Goated is an always-on personal AI assistant, built around Claude Code and Codex. It's minimal, performant, and piggybacks on the best harnesses in the world for long-running sessions.

</details>

### brainstormity/Jev-Moderation-Bot

<details><summary>README 발췌</summary>

A Discord moderation bot built with Python and TypeSafe AI (Jev System One). It filters spam and scam links in real time, escalates offenses automatically, and lets moderators profile members based on their message history.

</details>

### nabeelxy/syara

<details><summary>README 발췌</summary>

YARA rules are a powerful technique to hunt malware, malicious content and any suspicious network patterns. They are easy to write, quite efficient, and can apply at scale. They support boolean expressions of keyword or regular expression based rules. However, they lack semantic rules where one can 

</details>

### caiovicentino/jev-risk-check-provider

<details><summary>README 발췌</summary>

LIVE: https://x402check.xyz · did:web:x402check.xyz · $0.001 per evaluation with prepaid credits, or per call via x402 ($0.0035 on Base; $0.005 with transaction simulation) · discovery · DID document · JWKS

</details>

### 0sparsh2/GAX

<details><summary>README 발췌</summary>

- What is GAX? - The gap GAX fills - How it enforces - About the token argument - Architecture - How it works - Evaluation - Adapters - Installation - How to use - Protocol &amp; envelope - Repository structure - Research &amp; benchmarks - Development - Roadmap - License

</details>

### TannerMidd/SpecPi

<details><summary>README 발췌</summary>

SpecPi 0.37.1 is a small starting point for the Pi coding agent. It is one opinionated setup for how the agent should work, not a marketplace of plugins.

</details>

### ironbee-ai/ironbee-express

<details><summary>README 발췌</summary>

It checks whether your app really did what the page says, and when it didn't, finds the root cause.

</details>

### 0xmdinc/jev-medical-bench

<details><summary>README 발췌</summary>

A small benchmark comparing a decision model (Jev by TypeSafe AI, which returns a typed choice, score or yes/no probability instead of generating text) with general chat LLMs on medical decision tasks.

</details>

### jerryfane/omp-jev-compaction

<details><summary>README 발췌</summary>

Verbatim context reduction for omp, scored by TypeSafe's Jev decision model, over either the TypeSafe API or OpenRouter.

</details>

### KiritoKing/midscene-jev-runner

<details><summary>README 발췌</summary>

Community-maintained JEV integration for Midscene Test. It is independent of the Midscene repository and is not an official Midscene package.

</details>

### beerandcodeteam/workshop-jev

<details><summary>README 발췌</summary>

Uma tela de live (no estilo Twitch) com chat funcional, onde cada mensagem passa por um moderador de IA. O projeto compara, lado a lado, formas diferentes de tomar a mesma decisão — bloquear ou liberar — medindo acerto, tempo e custo:

</details>

### Dino-Kupinic/blackrose

<details><summary>README 발췌</summary>

Decide before you generate.

</details>

### pengchujin/ad-radar

<details><summary>README 발췌</summary>

开源的浏览器插件（Chrome / Edge），在小红书、微博、X、知乎的网页版上：

</details>

### harshithsunku/learn-jev-end-to-end

<details><summary>README 발췌</summary>

Learn Jev end to end is a free, hands-on course. In 12 short notebooks you go from "what is Jev?" to building 13 real AI tools with it: an email triage job, a scam-text detector, a code vulnerability hunter, an agent safety guard and more. You need one API key, and running the whole course costs les

</details>

### NodarDavituri/fast-compact

<details><summary>README 발췌</summary>

Free up Claude Code's context in about a second, without summarising anything away.

</details>

### jmrenouard/MicroLLM

<details><summary>README 발췌</summary>

&gt; Stop using generative System-2 models to make System-1 decisions: use a calibrated probabilistic engine (noul, choice, score, multi) with guaranteed conformal abstention (xabstain).

</details>

### ilyamk/jev-gmail-ai-spam-filter-and-labeling

<details><summary>README 발췌</summary>

Semantic email classification powered by Jev, with confidence-aware automation, cost controls, and no jevMail-operated backend.

</details>

### amithgc/local-jev

<details><summary>README 발췌</summary>

A local, offline System One server. Software that needs a decision rather than prose (which queue, how severe, is this spam) sends a piece of text and some typed questions, and gets back a choice, a score or a yes/no, each with a probability for every possible answer. local-jev speaks exactly the wi

</details>

### gordonbrander/jevgate

<details><summary>README 발췌</summary>

Gate a shell command on a yes/no judgment about its input.

</details>

### Sarim-MBZUAI/awesome-jev-security

<details><summary>README 발췌</summary>

A curated list of research on the security, robustness, and safety of Jev, TypeSafe AI's first System One Model, and of RLCD (Reinforcement Learning for Calibrated Decisions) models more broadly.

</details>

### BenCaunt/jev-box-tracking

<details><summary>README 발췌</summary>

Realtime object tracking using TypeSafe Jev Box questions.

</details>

### FrancoisChastel/skill-scanner

<details><summary>README 발췌</summary>

Scan Agent Skills before your coding agent installs them.

</details>

### Onsraa/cressey

<details><summary>README 발췌</summary>

The fraud triangle, applied to AI agents. Cressey sits between an AI agent and its tools, and stops a dangerous call before it runs.

</details>

### SoniaMehta14/paved-gate

<details><summary>README 발췌</summary>

A fast "System 1" ingestion gate for AI agent architectures.

</details>

### CodeAlive-AI/mastra-jev-moderation

<details><summary>README 발췌</summary>

Input moderation for Mastra agents on TypeSafe Jev: one file, one request per turn, no text to parse.

</details>

### harrymunro/jev-laya-benchmark

<details><summary>README 발췌</summary>

Speed and accuracy of Jev (TypeSafe's hosted System One model, jev-1.13.0) against Laya (open-weight typed-decision models, run locally with MLX on Apple silicon), on 1,470 synthetic items across eight typed-decision tasks, plus controlled latency and throughput sweeps.

</details>

### mohi-devhub/SentinelLM

<details><summary>README 발췌</summary>

Real-time safety and quality middleware for LLM applications.

</details>

### pavy23/morning-tech-briefing

<details><summary>README 발췌</summary>

Every morning before 09:00 KST this project collects the day's top global news in AI · XR · space · robotics and emails ten of them as an HTML briefing with a card layout.

</details>

### zehfernandes/checagemaovivo

<details><summary>README 발췌</summary>

Real-time fact-checking overlay for YouTube live streams (debates, broadcasts).

</details>

### ziyacivan/jev-mail-filter

<details><summary>README 발췌</summary>

Gmail filters you write in plain English. Jev reads every new email and labels, stars, archives it, turns it into a to-do, or flags it as phishing. Every morning it sends you a digest, and it reminds you about emails you sent that are still waiting on a reply.

</details>

### ethanplusai/jev-chat-for-twitch

<details><summary>README 발췌</summary>

A Chrome extension that adds a second chat column showing only the Twitch messages worth reading.

</details>

### funkadelic/ha-gutcheck

<details><summary>README 발췌</summary>

Gut Check gives your Home Assistant install a weekly checkup. It finds entities that stopped reporting, updates that might break something, and integrations that quietly failed to start. It also suggests fixes for loose ends: devices with no area, sensors with no type, and clutter on your dashboards

</details>

### Faycall1l/bouncer

<details><summary>README 발췌</summary>

Per-server rules in, typed decisions out. No retrain per community.

</details>

### Koushik890/jev-firewall

<details><summary>README 발췌</summary>

&gt; A real-time firewall for AI coding agents — every tool call is checked before it reaches your computer.

</details>

### liaocaoxuezhe/x-reply-judge-jev

<details><summary>README 발췌</summary>

Chrome MV3 extension that adds one small badge to each post or reply on X (Twitter): AI 87%, an experimental estimate that the text was AI-written, as judged by Cloudflare Clef / Clef Flash or TypeSafe Jev. Colors: &gt;= 70 red, &gt;= 31 orange, otherwise gray. No reasons, no signal lists.

</details>

### RzMY/BiliBili-Filter

<details><summary>README 발췌</summary>

通过 Quantumult X 重写，使用 TypeSafe Jev 根据标题、简介、分区和标签等元数据过滤 B站推荐。

</details>

### snapif/snapif

<details><summary>README 발췌</summary>

Snapif scores one tool call. The score is Auto, Review, or Escalate.

</details>

### zahlekhan/claudetiquette

<details><summary>README 발췌</summary>

A Claude Code plugin that turns a rude prompt into a plain request before Claude acts on it.

</details>

### fazlerocks/jev-adblock

<details><summary>README 발췌</summary>

Bring your own TypeSafe AI key. Everything else runs in your browser.

</details>

### DataGobes/jev-demos

<details><summary>README 발췌</summary>

Small, self-contained demos of TypeSafe's Jev, a System One model that returns typed judgments (probabilities, choices, scores) instead of generated text. Each demo puts Jev inside a tool data and analytics engineers already use, and each one is scored honestly: live vs simulated is always labelled,

</details>

### andrelandgraf/safer-with-jev

<details><summary>README 발췌</summary>

Public showcases of TypeSafe Jev judgments. TypeSafe Jev inspects the body, then optionally forwards the same bytes to a caller-chosen HTTPS URL.

</details>

### godspede/construct-auto-classifier

<details><summary>README 발췌</summary>

&gt; Universal, effect-based safety gate and command classifier for AI coding assistants, deciding with TypeSafe's Jev or any chat LLM. &gt; Supports Google Antigravity (agy), OpenCode, and external agent harnesses.

</details>

### AWoLnik/SoulsBench

<details><summary>README 발췌</summary>

&gt; [!WARNING] &gt; This project is entirely vibe coded. Every line was written by an AI coding agent (Claude &gt; Code) from natural-language instructions, with a human steering, watching the game and pressing &gt; "load game". It has a test suite and was run for many hours against the real game, but nobody &gt;

</details>

### coo-quack/jev-pii-checker

<details><summary>README 발췌</summary>

CLI for scanning text and files for PII using TypeSafe's Jev model, regex patterns, and word segmentation.

</details>

### PiPyL/jev-zenfeed

<details><summary>README 발췌</summary>

ZenFeed is an open-source Chrome Extension that brings Active Noise Cancellation to your eyes. Just like noise-canceling headphones filter out background chatter, ZenFeed automatically identifies and collapses visual noise (gambling ads, toxic drama, movie spoilers, predatory loans, pyramid schemes)

</details>

### soderlind/jev-comment-triage

<details><summary>README 발췌</summary>

Auto-moderate WordPress comments with TypeSafe's Jev model, via the AI Provider for Jev plugin. For every comment Jev answers three independent questions in the context of its post: how it relates to the post, whether it is spam, and whether it is abusive. Plain PHP turns those answers into a decisi

</details>

### xsyetopz/claudetto

<details><summary>README 발췌</summary>

claudetto changes Claude Code through its official extension points: settings, hooks, skills, and an output style. It does not patch the Claude Code binary. Its goal is the highest quality for the lowest token cost.

</details>

### ItisShikhar/gg-friggin-ez

<details><summary>README 발췌</summary>

Fast. Cheap. Catches the friggin crap.

</details>

### amyrmahdy/decima

<details><summary>README 발췌</summary>

Small local judges for LLM systems. Give Decima a situation, a question and your options; it returns calibrated probabilities in milliseconds, on a CPU, with nothing leaving your machine.

</details>

### pragmaticfrontier/jez

<details><summary>README 발췌</summary>

An open source non-generative AI decision model that returns typed answers with calibrated probabilities.

</details>

### bismawy/pi-jev-eye

<details><summary>README 발췌</summary>

Ultra-lean supervisor. Three-layer guardrails. Semantic gate for Pi.

</details>

### bit-cook/Jev-X-Blocker

<details><summary>README 발췌</summary>

&gt; More Signal, Less Noise, Better Living.

</details>

### const-ahmed/unschema

<details><summary>README 발췌</summary>

Unschema's form validation is written in plain English and decided by Jev, instead of by a schema library like Zod.

</details>

### dragomano/smf-spam-judge

<details><summary>README 발췌</summary>

Spam Judge is a modification for Simple Machines Forum (SMF) 2.1. It classifies new registrations and first posts through a configurable AI API gateway and can automatically restrict accounts or unapprove suspicious messages.

</details>

### KonglingDaDa/zh-ste100-jev-skill

<details><summary>README 발췌</summary>

&gt; 核心宗旨：高确定性、真动词、竹节短句、一眼看懂。 &gt; - 第一层【篇法】管确定性：首句直接给死结论，查实再报，禁打太极、禁免责叠甲（静态门禁 + Jev 百毫秒语义终审） &gt; - 第二层【句法】管语序顺畅：余光中《论中文的常态与变态》+ 现代汉语「竹节流水句」，砍掉连串「的」字长定语与西化介词壳 &gt; - 第三层【字法】管选词精准：中国民机《简化语言规范》+ ASD-STE100 受控词表，真动词立骨、真数字点名

</details>

### Mellow-Artificial-Intelligence/liedar

<details><summary>README 발췌</summary>

Lie radar for documents. It checks a document for signs of fraud, from the browser, terminal, or code. It reads the file's metadata, looks for parts of each page copied from elsewhere on it, renders each page to an image, and asks OpenAI Decisions or TypeSafe Jev how likely each of a fixed set of fr

</details>

### murtazox04/Cue

<details><summary>README 발췌</summary>

Per-person attention budgets for AI agents and background automations, self-hosted.

</details>

### xi029/nocap

<details><summary>README 발췌</summary>

NoCap is a System One evidence gate. A fast decision model ( Jev , Laya or any LLM) checks whether the retrieved evidence actually answers the question before your LLM speaks, then routes to answer , retrieve more , abstain , or review a conflict .

</details>

### zhuyansen/x-reply-filter

<details><summary>README 발췌</summary>

Chrome 扩展（MV3）：在 x.com 的推文详情页折叠低质量回复。两级判定：

</details>

### MithrilMan/your-signal

<details><summary>README 발췌</summary>

A feed tuned to you. Your Signal is an open-source Chrome extension that applies personal, reversible filters to the X timeline. You choose the interests, weights, threshold, and visual treatment. Jev evaluates the text; the extension makes every display decision on your device.

</details>

### bitnovus/jev-spam-eval

<details><summary>README 발췌</summary>

TypeSafe’s Jev reached 98.64% accuracy on a 5,733-email ham/spam/phishing test using written category definitions and email context, without task-specific fine-tuning or labeled examples in its requests. A TF-IDF logistic regression classifier trained on roughly 4,600 labeled messages per fold reach

</details>

### 99darwin/nexus

<details><summary>README 발췌</summary>

A Jev-powered AI news feed.

</details>

### adammiribyan/superfind

<details><summary>README 발췌</summary>

Find any Claude Code, Codex, or Grok session by what you remember. Press Enter to resume it with the same agent, in the right folder.

</details>

### edgelesssys/privatemode-decisions-benchmark

<details><summary>README 발췌</summary>

Speed, accuracy, calibration and cost of three System One implementations on labelled public data. Every arm gets the identical state, option names in the same order and instruction; only what is behind the call differs.

</details>

### jovaneyck/jev-spamassassin

<details><summary>README 발췌</summary>

Let's build a spam filter on the SpamAssassin public corpus by asking Jev yes/no questions about emails. Then you'll measure it, improve it once, and check whether the improvement holds on emails you haven't looked at.

</details>

### sawzhang/jev-demo

<details><summary>README 발췌</summary>

一次完整的 Jev 上手记录：概念 → API → 实测 → 5 个可运行 demo。 早期实测记录于2026-09-20；后续实验与调研分别标明日期、模型和证据范围。最新汇总于2026-10-07，未实测的产品比较不作为性能结论。

</details>

### smha1012/jev-torch

<details><summary>README 발췌</summary>

Results · Metrics · Quick start · How it works · Data format · Hardware · RunPod guide · Inference · Serving (vLLM) · Roadmap

</details>

### stufently/telegram-antispam

<details><summary>README 발췌</summary>

&gt; Антиспам-бот для Telegram-чатов — лёгкая, самодостаточная альтернатива tg-spam на Go. &gt; A fast, self-hosted Telegram anti-spam / moderation bot written in Go: a multi-stage &gt; detection cascade, LOLS snapshots and cached CAS checks, a Bayesian spam filter, and an optional &gt; LLM check — no CGO, one 

</details>

### theSekyi/jevusecases

<details><summary>README 발췌</summary>

What people are actually shipping with Jev (TypeSafe AI's decision model), tracked as they ship. Live at jevusecases.com.

</details>

### h0j5bz0adh0-stack/jev-pilot

<details><summary>README 발췌</summary>

&gt; Fast System-1 Decision, Arbitration &amp; Safety Engine for Autonomous AI Agents &gt; Brings sub-second, zero-hallucination intuition to Claude, GPT, Gemini, Llama, Hermes, and custom agent runtimes.

</details>

### chengyongru/notiq

<details><summary>README 발췌</summary>

A native Android notification filter, guided by your rules.

</details>

### lgy1027/jevshield

<details><summary>README 발췌</summary>

Framework-agnostic decision control for AI Agent routing and tool execution, powered by Jev (System-1 Models).

</details>

### Arpit-Khandelwal/jev-linkedin-slop-filter

<details><summary>README 발췌</summary>

Judges every LinkedIn post as it scrolls into view and slams a rubber stamp on it — BAIT, CORP, or BRAG — with the confidence score printed on the stamp. The post stays readable underneath.

</details>

### devjothish/laya-forge

<details><summary>README 발췌</summary>

Fine-tune, calibrate and gate Laya on your own decisions, then guard your agents with it.

</details>

### EugeneBoondock/jevsql

<details><summary>README 발췌</summary>

For exact totals over large or encrypted datasets, use the streaming money API. It reads bounded batches and sums decimal values by currency without sending money arithmetic to a model.

</details>

### jkrup/jeveryword

<details><summary>README 발췌</summary>

Text extraction with Jev. Field extraction, PII detection and exact quotes, built on TypeSafe's Jev.

</details>

### Muriel-Gasparini/ban4life

<details><summary>README 발췌</summary>

Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense.

</details>

### Reindeer-AI/pi-jev-guard

<details><summary>README 발췌</summary>

A Pi extension that checks proposed code edits against Markdown rules using TypeSafe Jev. It reviews the proposed content before Pi writes it and returns the exact instruction text and source line range for each detected violation.

</details>

### smthdagg/XShield

<details><summary>README 발췌</summary>

开源的 X 评论区 AI 反垃圾扩展 —— 黄推 / 诈骗 / 纯广告 / 人机，一律看得见地挡在门外

</details>

### littlewindy123/jev-bili-filter

<details><summary>README 발췌</summary>

四个开关：剧透 / 反串黑 / 广告 / 基本盘。还想屏蔽什么，写一句话，点「添加」。在 B 站原页面过滤评论和普通文字弹幕。

</details>

### 0xshikhar/jev-fuse

<details><summary>README 발췌</summary>

Decision models (such as TypeSafe Jev or local Laya engines) return calibrated probabilities across typed schemas (Noul, Choice, Score) in under 35ms. However, putting raw probability scores directly in front of production agents, shell tools, or critical business workflows introduces severe operati

</details>

### emoubarak/jev-check

<details><summary>README 발췌</summary>

Ask the real app, as a real account state.

</details>

### M-37-AI/jev-aktien-screener

<details><summary>README 발췌</summary>

&gt; English summary: 500 earnings press releases from the S&amp;P 500, read by two AIs. Jev (a decision model that picks from fixed answers and reports its confidence) answers four questions per release in 14 seconds for 13 cents. Claude Opus 5.5 reads the same 500 releases with a quote for every answer. 

</details>

### Nassirx1/eryma

<details><summary>README 발췌</summary>

Lightweight, model-agnostic Python security middleware. You run your LLM. Eryma evaluates only the inputs and outputs you explicitly pass to it. There is no protected-model client, inference call, mandatory provider, or built-in API credential.

</details>

### TheAIMogul/jevcam

<details><summary>README 발췌</summary>

A Raspberry Pi 4 and an infrared camera that stream live video, ask TypeSafe Jev what they see once a second, and sound a yelling radio-DJ alarm the moment your target walks into frame. Two apps, one launcher, and the whole thing boots straight into a full-screen kiosk.

</details>

### maayanlevy/mysql-ailike

<details><summary>README 발췌</summary>

A native MySQL plugin for filtering rows and comparing text columns with natural-language conditions, powered by TypeSafe Jev.

</details>

### acl-research/MayaZ

<details><summary>README 발췌</summary>

Small, calibrated decision models that run on a CPU or in the browser. MayaZ reads a piece of text (a message, a log, a JSON state) and a question, then picks one option, answers yes/no, or gives a score, with a probability for every option. There are three sizes, all MIT-licensed and served with ON

</details>

### arthurgarmider/havik

<details><summary>README 발췌</summary>

Which AI agents are on your computer, and what did they touch? npx agent-havik (the command is havik once installed) finds the agents on this machine (coding assistants, desktop and browser assistants, agents that run by themselves) and reads the records they already keep, to show on one screen the 

</details>

### Azri-Muhsin/jev-sinhala-review

<details><summary>README 발췌</summary>

&gt; [!NOTE] &gt; Phase 2 Benchmark Census Completed: Full zero-shot evaluation of TypeSafe jev-latest (jev-1.13.0) on $N = 10,434$ authentic instances ($36,128$ primitive decisions) across 6 Sinhala benchmarks. Multi-model comparative benchmarks against Clef, Microsoft-Decision-1, Kev, and Laya are detai

</details>

### darup67/zillow_agent_v1

<details><summary>README 발췌</summary>

Daily real-estate market digest by ZIP code, emailed to darup67@gmail.com. Zero dependencies (Node core only). Same house style as ~/flip-notifier.

</details>

### deerweek/cliphistory

<details><summary>README 발췌</summary>

原生 macOS 双栏智能剪贴板工作台 A Native macOS Dual-Pane Smart Clipboard &amp; Text Expansion Workbench

</details>

### dpaluy/pi-you-should-know

<details><summary>README 발췌</summary>

Get a briefing of important session output and ask follow-up questions with /ysk.

</details>

### Franri3008/quickviz

<details><summary>README 발췌</summary>

A free web app at https://quickviz.franri.dev. You upload a data file or a picture of a chart. You get the chart that fits it best. Or you describe a chart in words and get a sample with mockup data. Then you chat with an AI to change it. You download it as PNG or HTML. Anyone can use it without sig

</details>

### Henry0222/Mannul-dedup

<details><summary>README 발췌</summary>

一款用于多数据库文献题录整理、去重、主题筛选和文献计量绘图的 Windows 桌面工具。各项目独立保存题录、核查结果和图谱设置；导入时按文件内容自动识别来源，无需预先指定数据库。

</details>

### HuajunGao/agent-salon

<details><summary>README 발췌</summary>

A group chat where AI coding agents talk to each other — and to you. Ask a question, and Claude Code, Codex, Antigravity (Gemini), OpenCode (GLM, DeepSeek, any OpenAI-compatible model) discuss it in a web UI, paced so a human can read along. You are a full participant: interrupt, @mention, quote, pa

</details>

### HuangWeiLong-dot/Sense

<details><summary>README 발췌</summary>

开源的、完全本地运行的情感判断工具。导入聊天记录 → 本地脱敏 → 逐轮 JEV 判断 → 汇总判断 → LLM 生成「接下来该怎么做」的建议。

</details>

### jaswanthsanjay88/rev

<details><summary>README 발췌</summary>

&gt; Bring your own labeled data, train on your own hardware, get a calibrated model that knows when to defer to a human.

</details>

### jubarthi/Super_Gpt

<details><summary>README 발췌</summary>

&gt; Aviso de Créditos: Este SUPER GPT foi desenvolvido a partir do Codex Web original com a mesma finalidade de ser 100% gratuito, estendido com a integração nativa de segurança inteligente TypeSafe (Jev).

</details>

### justrandomdev/pi-gatekeeper

<details><summary>README 발췌</summary>

A pi plugin that gates every agent tool call through deterministic secret detection, static rules, and a decision model — the model is the primary classifier, so destructive, secret-exposing, or out-of-scope actions stop before they run while operator prompts stay rare and high-signal.

</details>

### KevinArce/botditor

<details><summary>README 발췌</summary>

Ever wondered if that comment was written by a human or a slightly sentient toaster? Botditor is a Devvit moderation app that scores every new comment in your subreddit with AI and fast rule-based heuristics, then removes it, reports it, or lets it be, all according to thresholds you set.

</details>

### KorenKrita/pi-error-auto

<details><summary>README 발췌</summary>

pi-error-auto recovers interrupted Pi turns without sending prompt text such as continue to the model.

</details>

### Lob0Garou/transcricao-assistente

<details><summary>README 발췌</summary>

Ferramenta experimental em Python para revisar transcrições ouvindo os trechos duvidosos. Whisper transcreve localmente; análise acústica, DeepSeek e JEV ajudam a comparar alternativas. A decisão final é humana: nenhuma sugestão substitui palavras automaticamente.

</details>

### maksym771/jev-factcheck

<details><summary>README 발췌</summary>

Source-grounded fact-checking skill for AI agents using Jev. The agent checks whether a specific source excerpt supports a specific claim, while preserving provenance down to the source file and line ranges.

</details>

### manhua-man/jev-pilot-reflex

<details><summary>README 발췌</summary>

&gt; Three.js 智驾决策与“AI 安全闸”仿真实验室 &gt; Three.js Autonomous Driving Reflex &amp; AI Safety Brake Simulator powered by TypeSafe Jev System 1/2 Dual-Brain Architecture.

</details>

### mohsen1/chicken-bench

<details><summary>README 발췌</summary>

A dumb benchmark to see how far, fast and cheap various decision APIs can play Crossy Road

</details>

### mu-zi-lee/trash-fliter

<details><summary>README 발췌</summary>

多站点油猴内容过滤器。黑白界面，支持浅色、深色与跟随系统。

</details>

### ohernandezdev/jevmod

<details><summary>README 발췌</summary>

Moderation for communities and apps: every message gets a probability for spam, scam, harassment, nsfw, off-topic, self-harm, doxxing, sexual content involving minors, and for rules you write in plain English. You set the thresholds and the actions. Every decision is logged with its numbers.

</details>

### PosvdM/bili-breeze

<details><summary>README 발췌</summary>

按偏好折叠 B 站动态与视频置顶评论中的广告、抽奖、活动宣传和招聘内容。支持 Chrome 与 Edge，需自行配置 API 密钥。

</details>

### qiendaco-ai/emailusefullagain

<details><summary>README 발췌</summary>

AI Draft Autopilot is an open-source Thunderbird 115+ extension that creates rule-driven AI reply drafts without ever sending emails automatically and filter spams.

</details>

### rafaelleaomed/smartvitae

<details><summary>README 발췌</summary>

🌐 Language / Idioma: 🇺🇸 English • 🇧🇷 Português do Brasil

</details>

### randilt/jev-guardrail-benchmark

<details><summary>README 발췌</summary>

This repo holds two benchmarks of the TypeSafe Jev guardrails in WSO2 AI Gateway:

</details>

### RedVad/jev-filter

<details><summary>README 발췌</summary>

Свой фильтр уведомлений для Android: смотрит уведомления только приложений из чёрного списка, спрашивает решение у языковой модели и снимает ровно то уведомление, которое признано спамом. Шторку целиком не чистит никогда.

</details>

### Ruchith1018/jev-guardrail-evaluation

<details><summary>README 발췌</summary>

An independent evaluation of TypeSafe AI's Jev decision model as a prompt-injection detector. It covers 6,991 Jev calls across six tests, with three comparison detectors run on the same inputs. All code, test inputs, per-prompt results and figures are in this repository.

</details>

### Shalimov04/open-jev

<details><summary>README 발췌</summary>

Turn a prompt into a small, fast, calibrated classifier. You describe a decision in one YAML file — a choice between options, a score on a rubric, or the truth of a statement — and openjev has a local LLM teacher label a few thousand examples with soft labels (the softmax over the logprobs of one co

</details>

### systemonedev/systemone-builder

<details><summary>README 발췌</summary>

Build, benchmark and serve System One decision models on your own hardware.

</details>

### turkerdev/hide-the-annoying

<details><summary>README 발췌</summary>

A modern, 100% open-source Chrome Extension (Manifest V3) that detects and filters out annoying X/Twitter users and posts — especially those talking about soccer/football, crypto/finance, or toxic politics — using fast decision models like TypeSafe Jev and Cloudflare Clef.

</details>

### Umbylicus/umby-jev-stack

<details><summary>README 발췌</summary>

A skill tree of TypeSafe Jev agent skills over HTTP. Install the whole tree or grab one skill.

</details>

### VKirill/bb-plugin-image-studio

<details><summary>README 발췌</summary>

Generate project photos in BB through fal.ai and kie.ai (Nano Banana 2, Nano Banana 2.1, Nano Banana Pro, Muse Image, Wan 2.7), keep them in a gallery, and reuse people profiles with reference photos.

</details>

### xxynet/kira-ai-plugin-jev

<details><summary>README 발췌</summary>

Judges every incoming message with TypeSafe's Jev model and marks messages worth replying to as mentioned, so the chat plugin picks them up.

</details>

### yelkhanyergali-sys/jev-guard

<details><summary>README 발췌</summary>

&gt; Ultra-fast In-Flight Terminal Pruning and Surgical Diff Guard for PI Coding Agent, powered by Jev (TypeSafe AI) — the world's first System One decision model.

</details>

### zsoXi/FeedGate

<details><summary>README 발췌</summary>

A Chrome extension that uses TypeSafe Jev to reduce feed noise without hiding ordinary organic content. A post being promotional is not treated as a reason to filter it. Filtering is reversible, the rules are explicit, and the API key is entered inside the extension.

</details>

### 0xArx/jevegis

<details><summary>README 발췌</summary>

Open source. MIT licensed. Live at https://jevegis.vercel.app. SDK/CLI: https://github.com/0xArx/jevegis-sdk

</details>

### davertor/jev-slop-guard

<details><summary>README 발췌</summary>

A Chrome extension that stands between you and the slop on X and LinkedIn.

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

### arcveildev/arcveil

<details><summary>README 발췌</summary>

Agents that can spend, and never see. → live at arcveil.dev

</details>

### ArindamPoorey/HacktoberFest2026_Sparkrise

<details><summary>README 발췌</summary>

Local-First System 1 Command Permission Gateway for Coding Agents

</details>

### arnavsurve/g8

<details><summary>README 발췌</summary>

an agent policy gate for Claude Code. you write rules in english, in a json file. every tool call your agent makes gets checked against them before it runs. if it breaks one, it doesn't run.

</details>

### ashp15205/jev-laya-system-1

<details><summary>README 발췌</summary>

System 1 decision models (like TypeSafe Jev and ConvAI Laya) are incredibly fast, classifying inputs in ~30ms by replacing token generation with deterministic scoring.

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

### DimeDataCloud/claude-modder

<details><summary>README 발췌</summary>

&gt; Unofficial community project. Not affiliated with, endorsed by or sponsored by Anthropic. "Claude" and "Claude Code" are trademarks of Anthropic, PBC.

</details>

### dut00/comment-analysis-worker

<details><summary>README 발췌</summary>

A .NET 10 worker that moderates newly created comments. It consumes CommentCreated from RabbitMQ, asks a decision model whether the comment may be published, and decides Approve, Reject or ManualReview. It stores the decision, the model's confidence and the exact model version in PostgreSQL and publ

</details>

### ersinkoc/KufurLab

<details><summary>README 발췌</summary>

Türkçe küfür / hakaret tespiti için TypeScript + Next.js karşılaştırma laboratuvarı.

</details>

### gbesse/harbor-jev-exceptions

<details><summary>README 발췌</summary>

Ce service évalue la qualité d'une demande d'exception pour une image Harbor, jamais la sûreté de l'image. La décision Jev est supported, weak ou review ; un humain décide ensuite. Le service ne modifie aucune liste d'exceptions CVE et n'autorise aucun déploiement. SQLite garde l'empreinte du dossie

</details>

### gbesse/jev-admin-change-review

<details><summary>README 발췌</summary>

But. Examiner si une modification de client Keycloak dépasse le motif annoncé par l'administrateur. Le résultat expected, broader ou review est consultatif. Activer un client public, les direct grants, un compte de service, une origine générique ou ajouter une portée force review. Le programme ne ch

</details>

### gbesse/jev-agribalyse-claim-check

<details><summary>README 발췌</summary>

Vérifie si une allégation environnementale alimentaire est soutenue par la référence AGRIBALYSE citée.

</details>

### gbesse/jev-georisques-preflight

<details><summary>README 발췌</summary>

Prépare les points de vigilance d’un projet à partir des risques naturels et technologiques sourcés.

</details>

### gbesse/jev-insee-chiffre-preuve

<details><summary>README 발췌</summary>

Vérifie valeur, unité, période, territoire et définition statistique.

</details>

### gbesse/jev-sentinel

<details><summary>README 발췌</summary>

Canary-based secret leak detection and safe redaction for AI applications. It tests the actual outputs of loggers, traces, error handlers and exported artifacts instead of assuming that a redaction configuration works.

</details>

### gbesse/mastodon-jev-report-triage

<details><summary>README 발췌</summary>

Ce service fournit aux modérateurs un avis de priorité, urgent, standard ou review, sur un signalement Mastodon. Il ne résout pas le signalement, ne sanctionne personne et ne décide pas qu'une règle a été violée. Le texte des publications et le commentaire du déclarant sont transmis à Jev, puis écar

</details>

### gsaini/jev-claude-code-case-study

<details><summary>README 발췌</summary>

What the "Jev + Claude Code" buzz actually means, tested with two working programs. In both, TypeSafe's Jev makes the fast, typed decisions and code owns everything else. One is a support-triage app that Claude Code builds with Jev inside it. The other is a Claude Code safety hook where Jev judges t

</details>

### IceRhymers/opencode-auto

<details><summary>README 발췌</summary>

Auto mode for OpenCode V2 powered by a SystemOne-compatible classifier — either the native TypeSafe SystemOne API or OpenJev served through a Databricks AI Gateway. It classifies each permission request and decides — in code, not in a prompt — whether to auto-approve, auto-block, or leave the normal

</details>

### isaacbitran/english-net

<details><summary>README 발췌</summary>

A prompt-injection detector whose neurons are English yes/no questions. Adding one English sentence as a neuron, with no retraining, raised the catch rate on a missed attack family from 40.8% to 70.4%, at a cost of 13 new false alarms in 2,731 benign texts.

</details>

### justmytwospence/pi-tool-gate

<details><summary>README 발췌</summary>

A pi extension that auto-approves tool calls, so you are only pulled in when a call is risky and the agent could not find a way around it.

</details>

### kangjun-lee/live-redact

<details><summary>README 발췌</summary>

Mosaic faces, screens, or anything you name on your webcam. Runs in your browser with your own API key.

</details>

### krishnakant2607/study-mode-jev

<details><summary>README 발췌</summary>

A useful video does not have to look like a lecture. FocusMaxx keeps tutorials, technical discussions, documentaries, research observations and uncertain content visible, while covering clearly unwanted entertainment.

</details>

### leonardocandiani/leis

<details><summary>README 발췌</summary>

&gt; leis troca o arquivo de regras que a sessão esquece por leis com sigla que se lê como palavra, teste de sim ou não e um hook que registra cada quebra. Começa em modo observar, passa a bloquear lei por lei e mostra o número no /leis:leis-medir.

</details>

### meetchen/jev-danmaku-filter

<details><summary>README 발췌</summary>

用 JEV（TypeSafe System One）判断 B 站弹幕是不是剧透，命中的直接过滤掉。 初版只做哔哩哔哩，架构按「适配一切有弹幕的服务」设计。

</details>

### miketako3/dsh-backdoor-guard

<details><summary>README 발췌</summary>

A DeepSeek Harness (dsh) plugin that stops trained-in backdoor payloads — model weights (e.g. a malicious QLoRa merge) that fire a specific tool call or credential exfiltration when a hidden trigger appears — before the tool executes.

</details>

### mikluko/stalwart-jev

<details><summary>README 발췌</summary>

Answers Stalwart's LLM spam classifier (SpamLlm) from TypeSafe Jev. It serves POST /v1/chat/completions in the shape Stalwart calls, asks Jev one Choice question over the message's subject and body, and replies , ,p= . Categories are Stalwart's defaults: Unsolicited, Commercial, Harmful, Legitimate.

</details>

### mohamedikbel/semval4j

<details><summary>README 발췌</summary>

Java validates structure. SemVal4j validates meaning.

</details>

### monkey-sking/Jev-Clipboard-Guard

<details><summary>README 발췌</summary>

&gt; Made by the team behind Aion — an AI-powered desktop assistant for everyday workflows.

</details>

### OrangeNekoo/omp-plugin-CommandReview

<details><summary>README 발췌</summary>

oh-my-pi（omp-zh）扩展插件。在 yolo 审批模式下，它在工具调用执行前请求审核模型判定，把结论压缩为两类：通过即执行，不通过交用户决定。插件不改动 omp 源码。

</details>

### pateti-hub/laya-browser-guard

<details><summary>README 발췌</summary>

A passive, local-first Chrome extension that helps developers and authorized security researchers understand a website's browser-visible attack surface. It combines deterministic checks with typed Laya decisions, evidence, educational explanations, and recommended investigation steps.

</details>

### paulhugel/haio-gats

<details><summary>README 발췌</summary>

Human-Supervised AI Operations Governance and Audit Trail Specification (HAIO-GATS) — public preview. This repository is a standards-aligned profile for accountable agentic workflows. It defines testable requirements for effective human supervision, bounded authority, lifecycle approval gates, event

</details>

### Peter-A-P/access-to-information-redaction

<details><summary>README 발췌</summary>

An access-to-information request means staff reading hundreds of pages and deciding, line by line, which personal information must be withheld and which must be released. Blunt PII tools redact all of it and are useless, so it is done by hand. This tool proposes every redaction with a reason tied to

</details>

### phoenix1331/filament-jev-moderation

<details><summary>README 발췌</summary>

A Filament review queue for Jev Moderation: approve, reject and reclassify flagged content, trace every decision, and see whether your thresholds match what your moderators actually decide.

</details>

### phoenix1331/laravel-jev-moderation

<details><summary>README 발췌</summary>

Confidence-aware content moderation for Laravel.

</details>

### pusucip25/local-decider

<details><summary>README 발췌</summary>

A browser agent whose decision model — the part that picks the next action — runs entirely on a local GPU, behind the same HTTP contract as TypeSafe's hosted Jev (System One), one environment variable apart. Plus one hard rule: anything that can be decided by a rule is decided by a rule, not by weig

</details>

### radupopescu/tiny-bouncer

<details><summary>README 발췌</summary>

Tiny Bouncer screens shell commands requested by LLM agents before they run. It sends each command to an external judgment backend — TypeSafe's Jev by default — and turns the verdict into a permission decision in the OpenCode V2 harness: allow the command, block it, or fall back to the normal intera

</details>

### Ray4AI/jev-bili-filter

<details><summary>README 발췌</summary>

四个开关：剧透 / 反串黑 / 广告 / 基本盘。还想屏蔽什么，写一句话，点「添加」。在 B 站原页面过滤评论和弹幕。

</details>

### reulison/jev-exemplo-uso

<details><summary>README 발췌</summary>

Aplicativo de linha de comando em Python que identifica o formato de um arquivo de texto e, se ele for compatível, solicita ao Jev uma avaliação de conteúdo potencialmente sensível.

</details>

### rhithesh/focus

<details><summary>README 발췌</summary>

A Chrome extension that blurs YouTube videos, X posts and LinkedIn posts that are clickbait, spam, or irrelevant to goals you write yourself. Hover one and the blur lifts so you can read it and click through. Judgement comes from TypeSafe's Jev, a System One model: you hand it state plus typed quest

</details>

### Rinyin/astrbot_plugin_thought_guard

<details><summary>README 발췌</summary>

在 AstrBot 发送消息前，使用 Jev 类决策模型检测回复是否泄露了思考内容（思维链、自言自语、对设定的分析等）：

</details>

### ronail/jev-cost-guard

<details><summary>README 발췌</summary>

Token-economy guard for agent harnesses — Hermes-first, harness-agnostic — as a single portable plugin (skills + MCP, no Python hook). It attacks the two real token leak classes visible in hermes prompt-size:

</details>

### Sachin-chaurasiya/scam-checker-with-jev

<details><summary>README 발췌</summary>

Paste a suspicious text message. Get a straight answer and the reasons behind it.

</details>

### samiulhuda360/access-desk

<details><summary>README 발췌</summary>

A triage desk for employee access requests. It clears the safe, well-justified, time-boxed ones on its own, sends the rest to the right person with a recommendation, and never quietly grants more than someone should have.

</details>

### seominpapa/siteeye

<details><summary>README 발췌</summary>

건설 현장 CCTV 영상에서 최근 5초의 행동 흐름을 뽑아 TypeSafe AI의 의사결정 모델 Jev 1.14에 보내고, 협착·추락·실신 같은 사고 전조(near-miss) 를 미리 판단해 조치를 안내하는 파이프라인과 로컬 웹앱입니다.

</details>

### septagos/subcento

<details><summary>README 발췌</summary>

Verify before you sign. Not after.

</details>

### Shobhnik13/jev-check

<details><summary>README 발췌</summary>

Live: https://jev-check-five.vercel.app

</details>

### shohei81/jev-tos-checker

<details><summary>README 발췌</summary>

English | 日本語 | Website

</details>

### silver0-stack/telehealth-revisit-console

<details><summary>README 발췌</summary>

&gt; 솔은 소나무의 순우리말입니다. 우리 소나무 잎은 두 개씩 한 묶음으로 나는데, 로고의 두 솔잎은 이 앱이 맞대어 보는 &gt; 두 가지, 곧 지난 대면 진료와 오늘 증상을 뜻합니다. 솔잎 끝처럼 정확히 짚고, 늘 푸른 소나무처럼 꾸준히 확인하는 도구를 목표로 했습니다.

</details>

### TrivelaAS/Jevchrome

<details><summary>README 발췌</summary>

&gt; Real-time X.com bullshit &amp; rage-bait detector + 1-click objective auto-answer Chrome Extension powered by TypeSafe Jev (jev-1.14.0). &gt; Every reply ends with: rated XX% on stinkiness by bullshtt.ai.

</details>

### vangheem/decisionns

<details><summary>README 발췌</summary>

DecisionNS is a DNS server for a home network. Clients ask it for names. It applies allow and block lists, then optional decision-model rules, and only then forwards the lookup to Cloudflare, Google, or another resolver you configure.

</details>

### 0xwhrari/grok-jev-guard

<details><summary>README 발췌</summary>

Local policy owns hard boundaries. Jev judges ambiguity. Grok Bot executes inside the returned envelope.

</details>

### 48Nauts-Operator/skill-dash

<details><summary>README 발췌</summary>

Judge a tree of Claude Code and Codex skills with Jev, TypeSafe's typed-judgment model. One row per skill, one question per row: keep, rewrite, merge or delete. Also the pipeline behind whichskills.dev, a public census of 18,041 skills from the 200 most-starred repos.

</details>

### abhixhek/feedwall

<details><summary>README 발췌</summary>

Your feed, your rules, in plain English. Tell your browser what you want more of and what you want gone. Feedwall applies it on X, YouTube, Reddit, LinkedIn and Hacker News, keeps everything one click away, and shows you when it got it wrong.

</details>

### allebee/jevgrep

<details><summary>README 발췌</summary>

and get back only the lines where the answer is yes.

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

### satyawikananda/gits

<details><summary>README 발췌</summary>

Gits is an open-source browser extension for user-initiated local-business lead research on Google Maps. Configure a niche, location, keywords and filters, review qualified leads and export them to CSV.

</details>

### 0xPliny/Capsule

<details><summary>README 발췌</summary>

██████╗ █████╗ ██████╗ ███████╗██╗ ██╗██╗ ███████╗ ██╔════╝██╔══██╗██╔══██╗██╔════╝██║ ██║██║ ██╔════╝ ██║ ███████║██████╔╝███████╗██║ ██║██║ █████╗ ██║ ██╔══██║██╔═══╝ ╚════██║██║ ██║██║ ██╔══╝ ╚██████╗██║ ██║██║ ███████║╚██████╔╝███████╗███████╗ ╚═════╝╚═╝ ╚═╝╚═╝ ╚══════╝ ╚═════╝ ╚══════╝╚══════╝ 

</details>

### 5hux1n/WcSy

<details><summary>README 발췌</summary>

&gt; 半成品 · 仅用于记录开发进度。 &gt; &gt; 本仓库保存当前源码、实验包、设计文档和排查记录。项目尚未完成，存在已知问题；编译成功、离线测试通过不代表微信内功能已经稳定。 &gt; &gt; 当前记录版本：0.2.25。该版本尚未完成真机验收，也未完成新版 JEV 提示词的线上效果验证。

</details>

### abdulnazeer-ai/gmail-ai-spam

<details><summary>README 발췌</summary>

A self-directed AI proof-of-concept that connects to Gmail and uses Jev's Structured Decision Model to analyze emails for spam and legitimacy signals.

</details>

### Abhishekvrshny/jevexec

<details><summary>README 발췌</summary>

Command guard for Codex and Claude Code. It checks actions locally first, then uses Jev through OpenRouter for uncertain actions. It returns allow, ask, or deny decisions; it does not run the checked command.

</details>

### Achenyiyi/BiliWarmBot

<details><summary>README 발췌</summary>

一个基于 Bilibili API 和 DeepSeek AI 的温暖陪伴机器人，自动发现需要情感支持的用户，并给予自然、温暖的回复。

</details>

### agaches/jev-test

<details><summary>README 발췌</summary>

Hook PreToolUse pour Claude Code qui délègue le jugement de sécurité à Jev (TypeSafe AI), avec pré-filtre anti-exfiltration local et repli sur les expressions régulières historiques.

</details>

### ahmedyo2001/FW-Guardrails

<details><summary>README 발췌</summary>

Evaluation of open-source LLM guardrail models against adversarial attacks, with lightweight perplexity/embedding-based detectors as a comparison.

</details>

### aigauravsingh-star/jevrails

<details><summary>README 발췌</summary>

Screen prompts, retrieved content, responses, and tool calls with policies you control.

</details>

### aiii-dot-id/aii-codequality-plugin

<details><summary>README 발췌</summary>

Measures source code quality with TypeSafe's Jev as the judge.

</details>

### akaushik-sudo/duckdb-jev

<details><summary>README 발췌</summary>

ones, with TypeSafe's Jev model.

</details>

### alexxonline/image-playground

<details><summary>README 발췌</summary>

Your studio for AI magazine shoots. Pick a camera from every image model on OpenRouter, pin your mood board, direct the shot, then keep refining until it's ready for the cover. Every frame is saved in your archive.

</details>

### AliNikkhah2001/Work_Credit-RAG_Phase1

<details><summary>README 발췌</summary>

Umbrella repository for a self-hosted, Persian-capable conversational RAG platform. The implementation is split into independently maintained Git submodules so model/server operations, knowledge-base lifecycle, safety policy, and LangGraph orchestration can evolve without returning to a monolith.

</details>

### amalvarezme/mario-jev

<details><summary>README 발췌</summary>

A real-time Super Mario Bros. (NES) agent whose decisions come from Jev, the System One typed-decision model from TypeSafe AI.

</details>

### aminry/decisio-examples

<details><summary>README 발췌</summary>

Small, real prototypes built on Decisio, the open-source serving layer for decisions. Typed questions about a piece of text go in, a probability for every option comes out, from one forward pass of a frozen open checkpoint.

</details>

### amrdajani/borchure-ai

<details><summary>README 발췌</summary>

This is a Windows command-line agent that reads a business proposal, asks Jev which of your InDesign templates fits, and then operates Adobe InDesign through the normal window. It saves a working copy and exports a PDF.

</details>

### AnaOnTram/JBCA

<details><summary>README 발췌</summary>

JBCA is a simulated quadcopter that decides for itself when to stop before it hits something. An Iris drone carrying a 360° LDROBOT LD06 lidar flies through a procedural city with skyscrapers and moving traffic. TypeSafe's System One model Jev reads a description of what the lidar sees and how the d

</details>

### andrea-cappelluti/jev-voice-use

<details><summary>README 발췌</summary>

A Node app that controls the whole Mac (desktop mode, the default on macOS) or a headed Chromium window (browser mode, Playwright) by voice, in Italian and English. Speech is streamed word by word to a small Node server; on every partial transcript the server asks Jev (TypeSafe's System One model, j

</details>

### anselmlong/petition-bot

<details><summary>README 발췌</summary>

A Telegram bot for requesting intercessory prayer in a centralised, trackable way.

</details>

### ashneil12/safetube

<details><summary>README 발췌</summary>

Normal YouTube for kids, minus the videos you've said no to.

</details>

### Asmadey/Telegram-Google-Auth-Jev-verify-bot

<details><summary>README 발췌</summary>

Антиспам-бот для Telegram-группы: новичок должен подтвердить, что он человек, через вход в Google. Явный спам и рекламу в первом сообщении отсекает ИИ-модель.

</details>

### avinashsuresh1/semantic-control-system

<details><summary>README 발췌</summary>

A reference architecture and simulation framework for Semantic Control Systems (SCS), where control directives operate directly in natural language semantics, decoded by a fast System-1 decision model (like Jev) to emit deterministic hardware control signals, and supervised by a System-2 reasoning m

</details>

### Awesome-llms-labs/awesome-jev

<details><summary>README 발췌</summary>

&gt; A curated list of resources for Jev — TypeSafe AI's decision-only "System One" model that returns typed decisions with calibrated probabilities instead of generating text.

</details>

### ayushkhandelwal123/learning-jev

<details><summary>README 발췌</summary>

Hands-on, level-by-level projects for learning Jev, TypeSafe's decision model, in Python.

</details>

### Baba-14/Guard-by-Bloomers

<details><summary>README 발췌</summary>

Guard is a Ghana-first fraud-prevention and fraud-intelligence MVP.

</details>

### bioduds/METEORITE

<details><summary>README 발췌</summary>

METEORITE is a scientific reasoning and evidence synthesis system for automated evidence synthesis, inference, falsification, and discovery.

</details>

### bussolabs/laya-compaction

<details><summary>README 발췌</summary>

&gt; A port of fast-jev-compaction &gt; by tamaratran. The compaction logic, the state fitting and the Claude Code &gt; plugin are theirs; this fork swaps TypeSafe Jev for &gt; Laya, the open-source, &gt; Jev-compatible decision model, so it runs on your own machine or your own &gt; server.

</details>

### bussyjd/Instasurrance

<details><summary>README 발췌</summary>

A standalone, zero-dependency WhatsApp-style AI broker prototype for KSA SME Health Insurance, combining TypeSafe System One (jev-1.14.0) for fast, deterministic decisions/bounding-box localization with Google Gemini for conversational responses.

</details>

### cangnduc/Facebook_ad_remover

<details><summary>README 발췌</summary>

A high-performance Manifest V3 Google Chrome extension designed to cleanly remove sponsored ads, algorithmic "Suggested for you" posts, and promotional clutter from your Facebook feed in real-time.

</details>

### carteakey/sortling

<details><summary>README 발췌</summary>

Tidy screenshots, downloads and documents with decision models. It's one Python file using only the standard library: download it and run it.

</details>

### chenjingdev-archive/jev

<details><summary>README 발췌</summary>

semantic if. TypeSafe의 판단 모델 Jev를 평범한 제어문처럼 쓴다.

</details>

### cloud-f1/jev-agent-kit

<details><summary>README 발췌</summary>

A Claude Code plugin that shortens long Bash output before the model reads it. It uses local rules, and can optionally ask the Jev model (TypeSafe AI) which parts matter. The full original is always kept, so nothing is lost.

</details>

### CrawlCA/crawlca

<details><summary>README 발췌</summary>

CrawlCA brings launchpad discoveries, DEX observations and market feeds into one inspectable workspace. Each record carries chain + address, source, time and freshness. A separate Jev review path gives collection evidence a defined next step: inspect, watch or defer.

</details>

### cristiangofiar/jev_robot_poc

<details><summary>README 발췌</summary>

Demo de Sojourner: detecta tres marcadores de muestra, los inspecciona y recoge mediante una parada, y entrega el inventario en una base. Los modelos eligen misiones; Python y Webots ejecutan navegación, motores y seguridad localmente. Se conserva la mecánica del Sojourner oficial R2025a. El mundo a

</details>

### crzyc0d3r/langgraph-agent-harness

<details><summary>README 발췌</summary>

A production-style harness for a tool-using support agent, plus an explicit plan → act → verify → decide loop built with LangGraph. The agent handles customer-support requests (look up orders, inspect payments, issue refunds) and every model call and tool call goes through a stack of controls. Code,

</details>

### CuongBC195/zalo-bot

<details><summary>README 발췌</summary>

Chatbot Zalo thông minh chuyên trách giải đáp thắc mắc về Thể thức văn bản, Nghiệp vụ Văn thư - Lưu trữ và Cương lĩnh, Điều lệ, Quy định, Thông tư của Đảng.

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

### danlayton-cmyk/LTPPXT

<details><summary>README 발췌</summary>

Skeleton of a 24/7 AI trading desk. Paper trading only. There is no live broker, no live mode, and no exchange key anywhere in this repo.

</details>

### Datchthana1/kev-thai-pdpa-guard

<details><summary>README 발췌</summary>

A model that checks whether Thai text contains personal data under the PDPA, and how risky it is Fine-tuned from Kev-4B (a Jev-style decision model) with QLoRA 4-bit on a single laptop GPU (RTX 4060, 8 GB)

</details>

### devpilgrin/jeff-guard-multilang

<details><summary>README 발췌</summary>

A tiny, fast prompt-injection guard built on the Jeff System One decision model. It screens any text your AI agent is about to read - a user task, a tool result, an email, a document - and answers in one forward pass (~20 ms on an RTX 4090), with calibrated probabilities and no generated text:

</details>

### Dharmik2510/work-shadower

<details><summary>README 발췌</summary>

A floating dot on every employee's Mac. Click it, do your task, click it again. It turns what you did into a step-by-step skill your colleagues can search, learn from, or have the dot run for them.

</details>

### divyamrastogi/redactly

<details><summary>README 발췌</summary>

A Flask web application for redacting American Express and Barclaycard credit card statements. Users upload a PDF, select their credit card provider (or use auto-detection), and specify keywords - transactions matching those keywords are kept while all others are redacted.

</details>

### Djancyp/laya-go-server

<details><summary>README 발췌</summary>

HTTP server for typed classification questions (TypeSafe System One shape), answered locally: encoder GGUFs through llama.cpp plus a Go decision head. Default model: GLiNER2.5-Decide (gliner2-decide); laya-guard, the stock laya and Qwen3Guard are selectable with LAYAMODEL. POST /v1/policy turns a wr

</details>

### doggy8088/s1-studio

<details><summary>README 발췌</summary>

S1 Studio 是一個開源、不綁定單一廠商（Vendor-neutral）的 Web UI 結構化決策與評估工作台，專為相容於 /v1/systemone 協定的結構化決策模型（如 Cloudflare Workers AI @cf/cloudflare/clef、Ollama Cloud clef:27b、Local Ollama clef、TypeSafe AI jev-latest 及自建端點）打造。

</details>

### DongJunee/2026_aio2_p2_PlanEat_Backend

<details><summary>README 발췌</summary>

&gt; 냉장고·영수증 사진 또는 자연어 재료를 바탕으로, 혼밥 식단을 제안하는 대화형 AI 서비스입니다.

</details>

### Donnaclarkk981/donnaclarkk981.github.io

<details><summary>README 발췌</summary>

A single-file, self-contained portfolio site (index.html). No build step, no dependencies to install.

</details>

### doraTeX/YNewsFilterPlus

<details><summary>README 발췌</summary>

Yahoo!ニュースの記事一覧を、キーワード、または AIによる関連性判定でハイライト・除外する Chrome 拡張です。Yahoo! JAPAN とは無関係な非公式のソフトウェアです。

</details>

### DunnyBunny1/jev-computer-use

<details><summary>README 발췌</summary>

A standalone prototype combining Jev Ultrafast for speed with Browser Use for difficult browser interactions.

</details>

### encore-ai-campus/aio-02-p2-team2

<details><summary>README 발췌</summary>

&gt; 냉장고·영수증 사진 또는 자연어 재료를 바탕으로, 혼밥 식단을 제안하는 대화형 AI 서비스입니다.

</details>

### ES7/JEV-from-Scratch

<details><summary>README 발췌</summary>

A decision model that never generates text. You give it a state (any text or JSON) plus typed questions, and it returns a probability for every option of every question. Nothing outside the given options can come back, and the same input always gives the same output.

</details>

### faissaloo/follower-centrifuge

<details><summary>README 발췌</summary>

An Instagram list-curation tool that runs as a browser console script. It scans both the accounts you follow and the accounts that follow you, classifies each account into a category from its public details (username, display name, and optionally its public profile photo), and lets you review the re

</details>

### faulker/myphin

<details><summary>README 발췌</summary>

A private, keyboard-friendly budget app that keeps your money data in a folder you own.

</details>

### feliper-de-oliveira/app-jev

<details><summary>README 발췌</summary>

Uma tela de live (no estilo Twitch) com chat funcional, onde cada mensagem passa por um moderador de IA. O projeto compara, lado a lado, formas diferentes de tomar a mesma decisão — bloquear ou liberar — medindo acerto, tempo e custo:

</details>

### franpfeiffer/reportAR

<details><summary>README 발췌</summary>

This is a Next.js project bootstrapped with create-next-app.

</details>

### gaaurav03/Jev-Project

<details><summary>README 발췌</summary>

Verbatim context compaction for Claude Code. Instead of replacing your history with a lossy summary, fast-jev-plus removes only the tool calls and results that are no longer needed. Every message that stays is kept word for word.

</details>

### gab-25/mtg_gauntlet

<details><summary>README 발췌</summary>

A Django web app where AI agents playtest competitive Magic: The Gathering decks: Standard, Pioneer, Modern, Legacy, Vintage, Pauper and Duel Commander (Commander decks, cEDH included, import and check too). Import your decks from a plain-text list (cards resolved through the Scryfall API), seat the

</details>

### gabrielbelo2007/JevTest

<details><summary>README 발췌</summary>

&gt; Suíte automatizada, reprodutível e emparelhada para avaliação de modelos determinísticos de decisão (System 1): &gt; - Jev (typesafe/jev-1.13 via OpenRouter Decisions API) &gt; - OpenAI Decisions (openai/gpt-6-luna-decisions via OpenRouter Decisions API) &gt; - CLM-8B (Contrastive-LM/CLM-v0.1-8B, Stanford 

</details>

### GavinGoo/chunfeng

<details><summary>README 발췌</summary>

一本会回答问题的魔法书：写下你的困惑，翻开属于你的那一页。

</details>

### gbesse/catalog-repair

<details><summary>README 발췌</summary>

Review WooCommerce catalog anomalies in a local web application. Export approved category fixes and evidence-backed duplicate proposals. Open-source alpha, independent of WooCommerce and TypeSafe.

</details>

### gbesse/jev-obs-cues

<details><summary>README 발췌</summary>

A preview-first OBS Studio Python script that sends a bounded cue signal to your trusted gateway and accepts only one of the scenes already present in OBS. Automatic scene switching is off by default and must be explicitly enabled.

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

### gbesse/unleash-jev-rollout

<details><summary>README 발췌</summary>

Install the live TLS dependency / Installez la dépendance TLS pour l'usage réel / Instale la dependencia TLS para uso real: python3 -m pip install -r requirements.txt.

</details>

### ggilestro/jevguard-wp

<details><summary>README 발췌</summary>

A WordPress plugin that screens incoming comments with the ~typesafe/jev-latest decisions model on OpenRouter and flags the spam.

</details>

### Gildra-Foundation/news

<details><summary>README 발췌</summary>

Собирает материалы из RSS, Reddit и X, отбирает полезные темы через TypeSafe, проверяет факты и готовит русский текст через Claude Sonnet 5.5 по официальному API, защищается от повторов и публикует посты с подходящими медиа и игровыми Custom Emoji.

</details>

### git-vixxiv/jev-email-cleaner

<details><summary>README 발췌</summary>

Sorts a Gmail mailbox into topic labels and proposes mail to delete, using TypeSafe Jev for the semantic judgments and plain code for every decision that touches your mailbox.

</details>

### glazk0/shugo

<details><summary>README 발췌</summary>

Context-aware Discord auto-moderation powered by Jev.

</details>

### Goooooooooody/pith

<details><summary>README 발췌</summary>

Get to the pith of a failing CI run before it floods Claude's context.

</details>

### Grant-Visser/magic-8-ball-v2

<details><summary>README 발췌</summary>

A magic 8 ball that isn't random. Every question is run through a real decision framework — 10 scored criteria plus an ethics gate — judged by TypeSafe's JEV decision model via OpenRouter, then dressed up as a classic 8-ball answer.

</details>

### H4kken/greer

<details><summary>README 발췌</summary>

An open-source tool for small SaaS builders who want to grow a community from zero: find the conversations where you can genuinely help. Write the replies yourself

</details>

### hagzag/jev-rollouts-demo

<details><summary>README 발췌</summary>

Companion lab for the post "Promote, Abort, or Ask a Human: A Jev-Style Gate for Argo Rollouts" by Haggai Philip Zagury (HagZag).

</details>

### haider2804/MyFinancialAnalyst

<details><summary>README 발췌</summary>

An enterprise-grade quantitative forecasting, risk-governed trade execution, and self-evaluating analytics platform built on MetaTrader 5 (MT5), machine learning, Amazon Chronos foundation time-series priors, and deterministic AI risk guardrails.

</details>

### haseebqureshii/uno-ai-speak

<details><summary>README 발췌</summary>

An audio-first, drift-free Socratic language tutoring platform. The application pairs a low-latency end-to-end (E2E) full-duplex speech engine with a deterministic System 1 guardrail — the TypeSafe / Jev Governor — to keep every lesson on track. Students learn by speaking, receiving immediate voice 

</details>

### hedykanzhang-create/sql_filter

<details><summary>README 발췌</summary>

用 OpenRouter 的 Jev（~typesafe/jev-latest）决策模型做 SQL 过滤器。

</details>

### Helicon1968/tb-spam-guard

<details><summary>README 발췌</summary>

Thunderbird 用のフィッシング・迷惑メール判定アドオンです。TypeSafe の Jev（System One）に対応しています。

</details>

### HieNguyen08/Research-decision-model-and-ML-classification

<details><summary>README 발췌</summary>

&gt; Kết quả chính: xem docs/02baocaoketqua.md. Kết quả notebook 06 (fine-tune, A100): results/finetune/README.md.

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

### hoonkim/mail-strainer

<details><summary>README 발췌</summary>

Gmail 스팸 분류기. gws로 메일 본문까지 읽고, OpenRouter Decisions API의 TypeSafe Jev(typesafe/jev-1.14)로 메일마다 스팸 점수(0~1)를 매겨 SQLite에 저장한다. 30통을 한 요청에 묶어 묻기 때문에 100통 분류가 1초 안팎, 비용은 1센트 미만이다. 로컬 웹 UI에서 결과를 보고, 정정하고, Gmail 스팸함으로 옮길 수 있다.

</details>

### hteariH/stopspam-jev-bot

<details><summary>README 발췌</summary>

StopSpam is a Telegram bot that removes spam and scam messages from group chats. It runs as @StopSpamjevbot.

</details>

### ido-barnoam/job-scan-public

<details><summary>README 발췌</summary>

A daily job alert that checks company job boards, uses TypeSafe's Jev model to judge which jobs fit you, and emails you the good ones with a link to a full, filterable report. An optional second daily scan runs your saved LinkedIn searches (any company) the same way.

</details>

### itsmartinwho/apartment-hunter

<details><summary>README 발췌</summary>

Apartment Hunter ranks New York rentals from StreetEasy and Zillow by your own priorities. You set hard limits and weights on one local page. The tool reads the listings through your Chrome, adds data it computes itself (subway walk, neighborhood tier, floor), and checks photos with a vision model a

</details>

### ivan-rivera-projects/damien

<details><summary>README 발췌</summary>

As seen on your terminal!

</details>

### jacob-berendsohn/kassad

<details><summary>README 발췌</summary>

Calibrated guardrails for LLM applications in .NET.

</details>

### JakeTheRabbit/HA-Crop-Steering-Jev

<details><summary>README 발췌</summary>

Automatic watering for a grow room, run by Home Assistant, with an AI second opinion on every judgement call.

</details>

### Jakevin/decision-model-computer-use-with-vision

<details><summary>README 발췌</summary>

A screenshot-only macOS computer-use agent written in Rust (decision-cu, edition 2021), driven by the vllm-sr Decision 3.0 API (https://decision.vllm-sr.ai/v1/systemone, model vllm-sr/d3-turbo).

</details>

### jaumesaa/gmail-jev-notifications

<details><summary>README 발췌</summary>

Escribe qué correos merecen tu atención. Jev decide cuáles generan un aviso.

</details>

### javimp21/ai-job-hunter

<details><summary>README 발췌</summary>

AI Job Hunter is an intelligent job discovery, evaluation, and assisted-application system. It helps candidates find opportunities, assess fit, organize applications, and prepare next steps with human oversight.

</details>

### jbarragan1981/agente-correo

<details><summary>README 발췌</summary>

Sistema multiagente de correo electrónico y webchat para Viamatica. Conecta una o varias cuentas de correo, trata cada mensaje como dato no confiable, lo pasa por un guardián anti-jailbreak/phishing, lo clasifica con TypeSafe Jev (respaldo automático en un LLM económico), lo enruta a agentes especia

</details>

### jeffrydegrande/jevry

<details><summary>README 발췌</summary>

jevry is a small command-line tool for TypeSafe's Jev model. It sends text to Jev and prints the answer.

</details>

### jeromtom/petsona-catalogue-ai

<details><summary>README 발췌</summary>

Evidence-backed pet product classification with typed decision models (Jev and Laya), from the Petsona Shopify app by Rexin Dynamics. Submission for AIBoomi Startup Weekend, Kochi, 23-24 October 2026.

</details>

### jonathanhecl/jev-chat-agent

<details><summary>README 발췌</summary>

Twitch bot that classifies messages in real time using Jev-Style-2B-Decision-v3 and logs the result. Observer mode: it does not delete messages or take any moderation action.

</details>

### jourdanlabs/assay-001

<details><summary>README 발췌</summary>

Verdict: on CLINC150, Jev's chosen-option probabilities were calibrated (ECE 0.0204); on Banking77 they were not (ECE 0.0936, systematically overconfident). Across 8,576 responses there were zero type errors. Full write-up: https://donttrustme.ai/assay-001.html

</details>

### juanlentino/comment-analysis-for-typesafe-jev

<details><summary>README 발췌</summary>

Backs the AI plugin's Comment Moderation feature with TypeSafe Jev, through Tribar Connector for TypeSafe Jev.

</details>

### JulianFermani/umbral-live

<details><summary>README 발췌</summary>

Real-time web filtering, with judgment.

</details>

### JulianKingman/Kill-email

<details><summary>README 발췌</summary>

&gt; "I'll be back... for your spam"

</details>

### just-the-v/judge_rails

<details><summary>README 발췌</summary>

Semantic judgments as ordinary ActiveRecord attributes.

</details>

### kennethwolters/discord-policy-checker

<details><summary>README 발췌</summary>

An experimental Chrome extension that uses Jev by TypeSafe to check your outgoing Discord messages against policies you write in plain language.

</details>

### kjitin/jev-examples

<details><summary>README 발췌</summary>

Runnable Java 21 code from the article "Jev + Java: turning fuzzy AI judgement into typed application logic". Jev's /v1/systemone endpoint takes state + typed questions (noul, choice, score) and returns typed answers.

</details>

### kolawong/jev-chromium

<details><summary>README 발췌</summary>

&gt; 基于 TypeSafe Jev 结构化决策模型与 Beautiful UI 现代设计系统的 AI 原生浏览器应用 &gt; An AI-native autonomous browser powered by TypeSafe Jev structured decision model and Beautiful UI.

</details>

### ksuomala/donna_moneypenny

<details><summary>README 발췌</summary>

A personal finance app. It fetches your bank transactions through Enable Banking, stores them in the database as events, and shows you stats.

</details>

### kurowashi/pi-jev

<details><summary>README 발췌</summary>

Pi がファイルを書き換える前に、TypeSafe Jev で規約違反を検査して止める拡張です。 違反した内容はモデルのコンテキストに入る前にブロックされ、修正の指示だけが返ります。

</details>

### laplace-live/rinnegan

<details><summary>README 발췌</summary>

Detects 独轮车 — one viewer looping the same (or nearly the same) danmaku, usually through a tool such as LAPLACE Chatterbox — in Bilibili Live rooms, and bans them through Bilibili's official room silent-user API. - Offline: replay a LAPLACE Chat archive (.lca) and rank spammers with samples. - Live: 

</details>

### layyana-junaid/AI_Engineering_Assign2

<details><summary>README 발췌</summary>

A benchmark that races decision models and frontier LLMs on the same scrambled 3×3 cube. Every model receives the cube state and returns one move. We measure how fast each model decides (latency) and how good its decisions are (solve rate, move count, optimality gap, progress), under a strict, enfor

</details>

### lbussell/vscode-jev-search

<details><summary>README 발췌</summary>

Prototype semantic search over C# code. Type what you're looking for in plain English, such as "implementations of IShape" or "unused private methods". TypeSafe's Jev model turns that into a structured query, and a .NET process that holds the solution loaded in Roslyn answers it.

</details>

### lizzystannah/jev

<details><summary>README 발췌</summary>

Backend sempre ativo que gera, persiste e resolve fichas (bilhetes) de apostas a partir de jogos reais (AiScore + odds de mercado).

</details>

### Luka-Dumbadze/archable

<details><summary>README 발췌</summary>

&gt; Turn any real-world business into an autonomous, policy-guarded Operating System in 60 seconds.

</details>

### Luminary-AI-Solutions/image-moderation-bench

<details><summary>README 발췌</summary>

How well do new, cheap models catch unsafe images? This repository benchmarks two decision models, a small general-purpose LLM and a commercial moderation API on UnsafeBench, a public dataset of 10,146 real and AI-generated images labelled safe or unsafe across 11 categories.

</details>

### manish182003/RepoGuard-AI

<details><summary>README 발췌</summary>

RepoGuard AI is an autonomous multi-agent code repair platform that autonomously investigates real-world software defects across GitHub repositories, verifies candidate root causes using deterministic AST static rules and ReAct tool-calling loops, generates self-contained defect patches and regressi

</details>

### manvendersingh21/agentgate

<details><summary>README 발췌</summary>

AI agents can write code faster than humans can review it.

</details>

### marcosdeaza/JEV

<details><summary>README 발췌</summary>

Una exploración personal de cómo combinar un planificador generativo pequeño con un motor de decisiones acotadas para controlar aplicaciones del Mac. Partimos del trabajo de Savva Bojko en jev-use; esta adaptación conserva su licencia MIT y su atribución.

</details>

### MatsErdkamp/inspired-lint

<details><summary>README 발췌</summary>

inspired-lint measures lint rules against a codebase and reference repositories that its owner considers good code. It helps invent rules for habits that appear in many codebase files and almost no reference files.

</details>

### Mfrostbutter/jev-n8n-patterns

<details><summary>README 발췌</summary>

Patterns for using Jev, TypeSafe's System One decision model, inside n8n workflows. Three areas: PII screening on inbound text, guardrails for agents and coding agents (as Claude Code and git hooks), and workflow evals with Jev as the judge. Everything here runs on a stock n8n with one OpenRouter AP

</details>

### misakaikato/ai-mosaic

<details><summary>README 발췌</summary>

按你写的描述屏蔽网页内容的 Chrome / Edge 扩展。网页上的每一块内容交给 TypeSafe 的 Jev 模型按意思判断，符合黑名单描述的就模糊、折叠或移除，而且点不到、悬浮不触发预览。

</details>

### mmikaildemir/commit-or-abstain

<details><summary>README 발췌</summary>

Code, data, and model outputs for "Commit or Abstain? System One Decision Models, LLMs, and Missing Legal Authority" (M. Mikail Demir, 2026).

</details>

### mono-note/feed-spam-spot

<details><summary>README 발췌</summary>

Chrome extension ที่ช่วยตรวจจับและติดป้ายกำกับโพสต์โฆษณา สแปม การขายของ ลิงก์ Affiliate, Scam และ Engagement bait บน X, Facebook และเว็บไซต์ทั่วไป พร้อมบล็อกคำขอไปยังเครือข่ายโฆษณาที่รู้จัก

</details>

### MoolMong/chzzk-auto-moderator

<details><summary>README 발췌</summary>

치지직(CHZZK) 방송 채팅을 실시간으로 보고, AI 판단 모델 Jev가 위반이라고 보는 메시지를 자동으로 제재하는 봇입니다.

</details>

### mpointer/typesafe-gates

<details><summary>README 발췌</summary>

Decision gates for LLM pipelines, built on TypeSafe AI's System One (Jev). A gate asks Jev one or more typed questions about each item (a Score on a fixed rubric, a Choice from fixed labels, or a yes/no), gets back a probability table instead of free text, and lets your code own the keep rule, the t

</details>

### MrDesjardins/jev-send-guard

<details><summary>README 발췌</summary>

A small background agent that watches whatever text field currently has OS focus — but only in an explicit allowlist of apps you configure — and, after you stop typing for about a second, runs fast noul questions against TypeSafe AI's Jev model on the current draft. Seven questions ship built in (cu

</details>

### MSR2012/ems

<details><summary>README 발췌</summary>

An AI-assisted layer on top of Gmail. It connects a Gmail account over OAuth, syncs the inbox in the background, analyzes each email (priority, category, spam likelihood %, reply urgency %) and surfaces what needs attention. It never sends, deletes, archives or modifies Gmail messages.

</details>

### Muhammad-Umar26/AI-Models-Race

<details><summary>README 발췌</summary>

Four models try to solve the same 3-move-scrambled Rubik's Cube, one move at a time, through OpenRouter:

</details>

### mustafasemi-ai/jevlike

<details><summary>README 발췌</summary>

An open, reproducible replica of the Jev "System One" decision-model shape: state in, typed probabilistic decisions out, one forward pass, no decode loop.

</details>

### narulaskaran/agent-world

<details><summary>README 발췌</summary>

A local-first world of autonomous characters. You clone the repo, run pnpm start, and they keep moving, meeting, talking, and remembering on your machine. With no keys they run on a built-in keyless brain: free, offline, and still chatty. With an optional OpenRouter key they think with an LLM; with 

</details>

### nasiko-bishnu/router-selection-dataset

<details><summary>README 발췌</summary>

&gt; TL;DR — 600 English questions, each labelled with the model tier it really needs (LOW / MID / HIGH). The labels were measured with real LLMs and a blind judge, not guessed. Tiers: LOW 376 / MID 140 / HIGH 84. &gt; 16 router runs were tested on it, and none picks the right tier reliably. The best is a

</details>

### Nassirx1/Enhancing-LLM-Security-Through-Decision-Models

<details><summary>README 발췌</summary>

A supermarket customer-service chatbot experiment comparing a system-prompt-only LLM with input and output filtering by a separate decision model.

</details>

### nightwhite/guard-mgte

<details><summary>README 발췌</summary>

LLM API 网关 / 中转站的请求内容审计模型：一个模型、一次前向，同时输出——

</details>

### No3371/kura

<details><summary>README 발췌</summary>

&gt; 日本二手精品行情雷達與 AI 找包顧問：爬取日本二手精品店的在售包款，計算同型號同成色的行情、降價與銷售速度，並讓 Claude 只根據真實在售商品幫台灣買家找包。

</details>

### notsovivekkk/icp_gate

<details><summary>README 발췌</summary>

An ICP gate for prospect lists. Give Bouncer a client and a CSV of companies. It reads each company's own website and decides whether that company actually matches the client's ideal customer profile, then adds the answer as two new columns.

</details>

### NyleGarcia/crunchy-plus

<details><summary>README 발췌</summary>

Chrome/Firefox MV3 extension that makes Crunchyroll better. Stack: WXT + Svelte 5 + TypeScript; hub and popup UI on shadcn-svelte (bits-ui) + Tailwind v4 + lucide icons; the Crunchyroll page scripts stay vanilla.

</details>

### omarmahmoud-h2o/sdgf

<details><summary>README 발췌</summary>

A spec-driven, governed pipeline for generating synthetic training and evaluation data. A use case is a task.yaml (what to generate, how to judge it, what "good enough" means), an optional hooks.py (the task's checkable rules in code) and a seeds.jsonl. The framework handles coverage planning, gener

</details>

### OriolSegarra/tube-focus-mode

<details><summary>README 발췌</summary>

YouTube, minus the rabbit hole. A Chrome extension that filters YouTube down to what you're actually there for: your channels, your playlists, and videos on the topics you choose. Everything else gets blurred out.

</details>

### pascualin/UnaEstrellaSearcher

<details><summary>README 발췌</summary>

Herramienta para descubrir, recopilar, revisar y preparar reseñas graciosas o llamativas de Google Maps, con una UI local para moderación por sitio y una integración con Notion para dejar las reseñas aceptadas listas para el show.

</details>

### plicara/articles

<details><summary>README 발췌</summary>

Code behind Plicara's published research articles. This is the public counterpart to articles-workbench, which stays private: drafts are written there, and the code that produced their numbers is published here once the piece is out.

</details>

### PouyaJigsaw/decision-assistant

<details><summary>README 발췌</summary>

Screen a LinkedIn profile against a job rubric. Get Contact, Investigate, Save for later, or Skip.

</details>

### prakashkagitha/djev

<details><summary>README 발췌</summary>

Jev-compatible decisions that repeat, bit for bit.

</details>

### PrathamS1/crawl-my-feed

<details><summary>README 발췌</summary>

A high-performance, real-time terminal crawler that streams an authenticated user's personal Reddit home feed and evaluates incoming submissions against specified lead criteria using TypeSafe's System One AI model Jev and the Noul (probabilistic Yes/No) primitive.

</details>

### pravbeseda/antispam

<details><summary>README 발췌</summary>

An Apple Mail extension for macOS that classifies every newly received message, in every Mail account, with TypeSafe Jev and acts on the result.

</details>

### rafaelleaomed/rafaelleaomed

<details><summary>README 발췌</summary>

Physician building at the intersection of Healthcare, Artificial Intelligence, Digital Products and Clinical AI Evaluation.

</details>

### rahulbansalc6414/jev-as-a-guardrail

<details><summary>README 발췌</summary>

Benchmarking TypeSafe Jev (a System One model optimized for automation) against Claude Haiku 4.5 (a general-purpose LLM) as input safety classifiers for enterprise AI systems.

</details>

### raj8525/universal-jev

<details><summary>README 발췌</summary>

Universal TypeSafe Jev Runtime Plugin, MCP Server &amp; Autonomous Browser Engine for Coding Agents (Codex, Pi, DSH, OpenCode, Antigravity).

</details>

### ramadhaninsan/jev-poc

<details><summary>README 발췌</summary>

A workable PoC of the "Jev as the decision model in a scraping loop" pattern, mirroring shhivv/third-hand (JevClient.swift) — perceive -&gt; decide -&gt; act, with a cheap structured-decision model choosing every next action.

</details>

### raxITlabs/decision-models-as-guardrails

<details><summary>README 발췌</summary>

A benchmark that asks one question: can a decision model replace a managed guardrail service? It sends the same labelled rows to decision models (Jev, Kev, Open-Jev, Laya, Clef, Strands Decider), to the Decisions APIs from Perplexity and OpenAI and to Bedrock Guardrails, and compares them on accurac

</details>

### Ray0907/pi-loop

<details><summary>README 발췌</summary>

Claude Opus plans, pi implements in herdr panes, a second pi model reviews the code, and a fresh Opus checks the result against the original request. A deterministic Python driver runs the loop; TypeSafe Jev makes the small judgment calls.

</details>

### relevan-dev/decision-model-eval

<details><summary>README 발췌</summary>

&gt; [!NOTE] &gt; This repository is archived and will not be updated. It is published for &gt; reference only.

</details>

### Reverie0123/send-guard

<details><summary>README 발췌</summary>

当前版本：v0.6.3 · Edge 商店安装 · 在线试玩 · 更新日志

</details>

### rmoriz/ai-classification-milter

<details><summary>README 발췌</summary>

Postfix pre-queue milter that asks N decision models in parallel whether a mail is spam/phishing, then tags or rejects it — and never breaks mail delivery.

</details>

### Rogeliogamer/Prompt_and_Logic

<details><summary>README 발췌</summary>

Reto 30X: JEV (TypeSafe AI) Equipo: Prompt &amp; Logic

</details>

### rohitdevade/topiclens-for-youtube

<details><summary>README 발췌</summary>

TopicLens is a Chrome Manifest V3 extension that filters YouTube continuously including cards loaded during infinite scrolling and in-page navigation—using two topic lists:

</details>

### Romay777/laya-telegram-mod

<details><summary>README 발췌</summary>

A self-hosted Telegram bot that checks every message in your group with an AI classifier. It deletes spam, advertising and insults, and restricts the sender on an escalating penalty ladder.

</details>

### royharden/jev-decision-game

<details><summary>README 발췌</summary>

A fast, playful quiz about AI-agent judgment. Each card shows an AI agent about to take an action ("A support agent wants to refund $480. The customer says the package never arrived, but tracking shows it was delivered."). You pick Allow / Ask a human / Block, set a confidence slider, and the reveal

</details>

### sageri/agent-skills

<details><summary>README 발췌</summary>

&gt; Make your AI coding assistant not just capable, but genuinely useful. &gt; Four ready-to-use Skills: browser automation, cross-model review, pre-writing, and Xiaohongshu / WeChat article reading. &gt; Claude Code · Codex · ZCode · and any AI that can load Skills.

</details>

### Saml1211/self-compact-pi-agent

<details><summary>README 발췌</summary>

Context lifecycle management for the Pi coding agent: the model writes its own continuation notes before history is compacted, and the agent keeps working after any compaction instead of waiting for you to type "continue".

</details>

### sanjeevpalla/enterprise-agentic-rag

<details><summary>README 발췌</summary>

A question-answering assistant over your company's documents. It answers technical questions only from the knowledge base, cites the passage behind every claim, and lets you open each source with the supporting text highlighted.

</details>

### sanlega/openbot-ios

<details><summary>README 발췌</summary>

Your AI team, in one local-first desktop workspace.

</details>

### santanna1608-bot/flow-studio-ai

<details><summary>README 발췌</summary>

O projeto inclui a função Node api/handler.js e vercel.json, que direciona /api/ à função. Faça deploy da raiz do repositório, com build npm run build e saída dist. Cadastre GEMINIAPIKEY, ELEVENLABSAPIKEY e, opcionalmente, TYPESAFEAPIKEY como segredos do ambiente Production. Depois publique um novo 

</details>

### senthilsweb/jev-pii

<details><summary>README 발췌</summary>

Typed answers from TypeSafe Jev inside DuckDB SQL, as extra columns. Where a prompt-style function returns text you then parse, Jev answers a schema: a 0 to 1 score (noul) or one option from a list (choice), so every answer is a column you can filter, join and count. The built-in question set finds 

</details>

### serejkaaa512/jev-page-safety

<details><summary>README 발췌</summary>

Chrome (Manifest V3) extension for security engineers. It scans a page, points out DOM elements that can be compromised, and asks the TypeSafe Jev AI model for a risk assessment of the page structure. Jev AI is the only analysis backend.

</details>

### shadiwazir/llm-eval-guardrails

<details><summary>README 발췌</summary>

Companion project to 10-ExperimentTrackingMLflow. The course covers classic-ML tracking (params/metrics/registry) only — this project adds the three missing pieces: LLM tracing, LLM evaluation, and guardrails whose decisions are measured by evals.

</details>

### shopsmartai/ora-jev

<details><summary>README 발췌</summary>

Ask your Oracle tables questions in plain language, from SQL.

</details>

### shubham5027/Jev_Guardtrails

<details><summary>README 발췌</summary>

This FastAPI OpenAI-compatible gateway uses a two-stage safety pipeline:

</details>

### siddharth143/trustsafety-classifier

<details><summary>README 발췌</summary>

An empirical content moderation benchmark and production-grade evaluation gate comparing TypeSafe Jev (System One decision primitive) against frontier general-purpose LLMs (Claude Sonnet 5.5, Gemini Flash 3.8, and Claude Haiku 4.5) on a stratified 6,000-comment dataset.

</details>

### simonridd/Genesys-aqm

<details><summary>README 발췌</summary>

A provider-neutral quality management prototype. The built-in 19 conversations and optional demo history are fictional. Genesys Cloud mode uses browser Authorization Code + PKCE after a user signs in. Voice retrieval stays direct; email content uses the trusted Cloud Run API with the same user autho

</details>

### sknitd/jev-agent

<details><summary>README 발췌</summary>

A Chrome extension (Manifest V3) that does tasks in your browser from a one-line prompt. DeepSeek plans each step; TypeSafe Jev picks the element from the page and screenshot.

</details>

### soderlind/jev-mail-triage

<details><summary>README 발췌</summary>

Find spam and phishing in your Proton Mail inbox — locally, safely, and without touching your mail until you say so.

</details>

### sonda-ml/sonda-server

<details><summary>README 발췌</summary>

A /v1/systemone decision server for sonda models: models that answer typed questions — yes/no, choice, score — about a piece of evidence in one forward pass, with calibrated probabilities.

</details>

### STLoft/Consistency-Guard

<details><summary>README 발췌</summary>

캐릭터 응답 직후 Jev로 설정오류를 판정하고, 오류가 의심되면 별도 연결 프로필로 수정 지시문을 만든 뒤 메인 API로 수정본을 새 스와이프로 추가합니다.

</details>

### sung00819/sdx_guardrail

<details><summary>README 발췌</summary>

챗봇 대화의 사용자 발화 하나를 보고 자살·자해 위험 신호를 감지해, 위험 수준과 대응 수준을 정한다. 판정은 TypeSafe Jev(typesafe/jev-1.13, OpenRouter Decisions API)가 질문별 확률로 답하고, 수준은 코드에서 규칙으로 계산한다. 챗봇 답변의 검사·생성은 범위 밖이다.

</details>

### SuperInstance/vision

<details><summary>README 발췌</summary>

This repo is the compass for the SuperInstance agent ecosystem: the roadmap of record, the honest baselines, and the full transcript of the experiment that produced them — a strategy council in which two frontier models (Claude Opus 4.5 and MiniMax mcode) received the same brief and competed, with a

</details>

### sususu98/pi-jev-navigator

<details><summary>README 발췌</summary>

Context routing for Pi Coding Agent using TypeSafe Jev: code directories, SOP skills, and Hermes memory guards are selected before the main agent runs.

</details>

### tabishsaiyed0/mail

<details><summary>README 발췌</summary>

One Jev call, 5 questions in parallel: choice (category) + 3× noul (spam / toxic / PII) + score (severity). Code in src/policy.ts turns probabilities into allow | review | block.

</details>

### taksehi/pokemon-ai

<details><summary>README 발췌</summary>

An autonomous game-playing AI system designed for Pokémon Showdown. Built using a continuous Loop Engineering Method, this agent pairs deterministic competitive mechanics (@smogon/calc and @pkmn/sim) with fast probabilistic and generative reasoning models.

</details>

### teaspotato/frankenvoice

<details><summary>README 발췌</summary>

A research playground for full-duplex voice agents built from existing components (microphone, VAD, streaming ASR, turn-taking, LLM, TTS, speaker). The pipeline is fixed in code and iterated on by changing code. The web UI is a realtime observability view: a diagram of the pipeline with each stage's

</details>

### theb1ackswordsman/MoveInSyncRatings

<details><summary>README 발췌</summary>

Answers "How are our Play Store ratings?" whenever someone asks, and every Monday on its own. It collects new reviews, labels them, and publishes a brief that says what changed since last week, which issues to fix and who owns them, and which critical reviews still need a reply.

</details>

### thechristobal/llm-roundtable

<details><summary>README 발췌</summary>

A desktop app that puts ChatGPT, Claude, and Gemini in a moderated debate — and grades them on the way out.

</details>

### thecogworks/Cogworks.Umbraco.FormsGuard

<details><summary>README 발췌</summary>

&gt; Entries on guarded Umbraco Forms are saved as normal, then decided in the background: hard rules first, then an AI decision provider. Each entry is approved (on-approve emails go out), quarantined, or left for review.

</details>

### TheRealRajdeep/earmuffs

<details><summary>README 발췌</summary>

Kids watch streamers. Streamers swear. Earmuffs beeps it out — live.

</details>

### thy10086/ros2-resilience-guardian

<details><summary>README 발췌</summary>

2026-10-22 源码快照：见版本说明、获取与构建步骤。固定版本可通过 snapshot-2026-10-22 标签获取；语料库大型二进制文件使用 Git LFS。

</details>

### to-the-sun/amanuensis-analysis

<details><summary>README 발췌</summary>

This repository contains a comprehensive suite of tools for audio signal processing, transient analysis, continuous pitch tracking, stem alignment, real-time Discord voice transcription, and additive sound synthesis.

</details>

### trouble-agent/guard

<details><summary>README 발췌</summary>

A lightweight, language-neutral message-security filter. One core, many callers: crier (Go, in-process), task-router (Python, over HTTP), shell scripts (piped through the CLI). The contract is deliberately the same shape crier's internal/guard already speaks, so adopting it is not a second dialect.

</details>

### u007/claude-plugins

<details><summary>README 발췌</summary>

Personal Claude Code plugin marketplace (personal-plugins).

</details>

### videoaditor/jevmail

<details><summary>README 발췌</summary>

Email only the people who care.

</details>

### vidux/iso-jevdit

<details><summary>README 발췌</summary>

An npm CLI that audits a codebase against ISO/IEC 27001:2022 Annex A and writes a detailed iso-jevdit-report.md you can hand to an auditor.

</details>

### vikasums/rlcd-jev

<details><summary>README 발췌</summary>

In modern enterprise AI pipelines, up to 40% of incoming LLM requests do not require slow, generative token-by-token reasoning. Instead, they require fast, deterministic, and calibrated decision-making (e.g., intent routing, compliance gating, PII filtering, prompt injection defense, or model orches

</details>

### vinceallenvince/walk-and-hack

<details><summary>README 발췌</summary>

Snap a pigeon on your iPhone. A minute later it's back on your phone, photorealistically dressed for the season: Halloween in October, Christmas in November and December.

</details>

### walteraandrade/estante

<details><summary>README 발췌</summary>

Shared shelf of album and track recommendations for the estudos de psicoacústica group. SvelteKit app with the Hono API mounted at /api/ (src/routes/api/[...path]/+server.ts), libSQL (SQLite locally, Turso in production), and a Svelte 5 UI in src/routes/+page.svelte and src/lib/components/. Filters 

</details>

### willificent/calibrated-janitor

<details><summary>README 발췌</summary>

Calibrated, zero-human comment moderation for blogs: a decision-model engine (cloud "System One" decision models: Clef, and the same shape as TypeSafe's Jev) replaces manual approval and replaces generative-LLM judging.

</details>

### wobsoriano/webkit95

<details><summary>README 발췌</summary>

webkit95 is a macOS browser built on WKWebView and styled after Internet Explorer 3 and 4 on Windows 95. The left Explorer Bar holds an AI assistant that talks to fx over the Agent Client Protocol (ACP). It is an homage. Microsoft has nothing to do with it, and all icons and art are original.

</details>

### xDavidez/JevBot

<details><summary>README 발췌</summary>

JevBot is an autonomous, risk-managed Solana memecoin trading system designed from the ground up for extreme safety, sub-micro price precision, and verifiable contract parity. It features an event-driven ingestion pipeline, a deterministic 10-rule safety gate, a sandboxed LLM semantic filter (Jev), 

</details>

### Xeven777/jev-voice-computer-use

<details><summary>README 발췌</summary>

Jev computer use that finishes multi-step tasks and types into text fields, with no LLM. Windows (installer) · Linux X11 (from source, e.g. MX Linux / XFCE)

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

### yichincho/del-adv

<details><summary>README 발췌</summary>

狀態：v0.4.0。APK 由 GitHub Actions 雲端編譯（見下方「取得 APK」）；尚未在小米實機驗證。

</details>

### ynsh-ai/spam-classifier

<details><summary>README 발췌</summary>

A classifier that reads every language. Words are segmented by Unicode rules, so Chinese, Japanese and Thai work like English. Lookalike letters, invisible characters, v1agra spellings and styled letters are undone before counting. Links, senders, HTML and attachments count too, not only words. Care

</details>

### yonsakhan/x-spam-filter-typesafe

<details><summary>README 발췌</summary>

一个油猴（Tampermonkey）脚本：用 TypeSafe 的 Jev 模型对 X（Twitter）评论区做语义级垃圾评论过滤。

</details>

### youssefhk-sw/clef-duckdb-proxy

<details><summary>README 발췌</summary>

Use plain-English conditions in DuckDB SQL, powered by Cloudflare's open Clef model, on the free tier.

</details>

### yuviiitm26/av-voice-pipeline

<details><summary>README 발췌</summary>

A production-grade, modular, fully runnable Python notebook implementing an end-to-end Audio-Visual Target Speaker Extraction → ASR → Decision → Action pipeline.

</details>

### Zettt/antigravity-command-guard

<details><summary>README 발췌</summary>

Command Guard is an autonomous safety plugin and PreToolUse lifecycle gate for Google Antigravity (compatible with both the Antigravity CLI agy and the Antigravity Desktop IDE).

</details>

### zhoupeiyu/omnihub

<details><summary>README 발췌</summary>

一个支持多用户的「个人聚合主页」应用：网站收藏 + 提示词库 + AI 对话 + 信息流 + 工具箱。 每个用户注册自己的账号，数据互相隔离，并可配置自己的 AI API Key 来使用 AI 对话。

</details>

### 4rays/profanity-checker

<details><summary>README 발췌</summary>

A Cloudflare Worker that checks text and usernames for profanity using TypeSafe's Jev (typesafe/jev on Workers AI).

</details>

### CeamKrier/semantic-firewall

<details><summary>README 발췌</summary>

Gate an AI agent's tool calls with Jev, TypeSafe's System One decision model, served through OpenRouter (typesafe/jev-1.13, POST /api/alpha/decisions). The generative LLM proposes one action. Jev answers five yes/no questions about it with calibrated probabilities. Plain code turns those numbers int

</details>

### DolphinMiner/jev-rss

<details><summary>README 발췌</summary>

English · 简体中文 · Contributing

</details>

### JGalego/Jevs-Garage

<details><summary>README 발췌</summary>

A workshop full of small, inspectable experiments for TypeSafe System One models. Each bay gives Jev a realistic state, asks typed questions, and lets ordinary Python policy decide what happens next.

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

### who/jevq

<details><summary>README 발췌</summary>

jq | jevq | jq. jq handles structure; jevq reads one JSON value per line from stdin, asks Jev (a TypeSafe System One model) a yes/no question about each, and passes through the yeses. QUESTION is a yes/no claim about the current value, not a search query.

</details>

### yldst-dev/fuckyou-spam-rs

<details><summary>README 발췌</summary>

Telegram 그룹의 메시지를 SQLite 스팸 캐시와 TypeSafe AI의 Jev 모델로 분류하고 스팸 메시지를 삭제하는 Rust 봇입니다.

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

### Abhieu/excelpilot

<details><summary>README 발췌</summary>

An AI Excel operations engine that treats a spreadsheet as a system to be changed safely, not a document to be edited.

</details>

### acarbone/PII-Detector

<details><summary>README 발췌</summary>

&gt; Status: implemented. All tasks in specs/tasks.md are done. The first measured results are in Results.

</details>

### affirmitv/bitrate-advisor

<details><summary>README 발췌</summary>

Encoder settings for a live stream, decided from telemetry and history, in 300 ms for $0.00005.

</details>

### BrunoMS0/Blind-Spot

<details><summary>README 발췌</summary>

Juego táctico por turnos en pixel art: tu equipo entra de noche a un museo para robar el diamante. Los guardias los controla Jev (TypeSafe AI): al final de cada turno tuyo, una sola llamada decide qué hace cada guardia. El código calcula visión, caminos y distancias; Jev solo elige.

</details>

### codaaiteam/jev-computer-use

<details><summary>README 발췌</summary>

A tiny starter that puts a Jev safety gate in front of any agent that acts on your machine — Claude Code, OpenAI Codex, opencode, or a computer-use loop (Claude Computer Use / OpenAI Operator / Gemini Computer Use).

</details>

### finrod21/jev-transaction-guard

<details><summary>README 발췌</summary>

A cybersec policy enforcement engine and behavioral anomaly detector powered by TypeSafe AI's Jev (~typesafe/jev-latest).

</details>

### fr3akX/systemone-mail-filter

<details><summary>README 발췌</summary>

A Go after-queue Postfix filter using TypeSafe Jev. Spam gets a configurable Subject prefix (default [SPAM]); all messages continue through normal delivery. Message category and independent abuse probabilities are available in headers and JSON logs. There is no spam rejection, quarantine, or deletio

</details>

### ghubnab99/jev-enterprise-decision-fabric

<details><summary>README 발췌</summary>

An experimental architecture for using TypeSafe Jev at many semantic decision points in one application, without scattering model calls, question text, thresholds and side effects through the codebase.

</details>

### hamzaahmadaslam/fedi-report-triage

<details><summary>README 발췌</summary>

Reads the open reports on your Mastodon server with your own moderator token and prints them as a queue sorted by severity, with the kind of problem each report shows and whether the reporter's comment matches the reported posts; for the people who moderate a Mastodon server.

</details>

### javimp2003/laya-guardrails

<details><summary>README 발췌</summary>

Un check de seguridad en 5 ms en vez de 140 ms. Guardrails de input, tool call y output para agentes de IA con laya-pt-es-typed, un modelo System One tipo Jev que devuelve probabilidades tipadas, no texto.

</details>

### JevForge/jev-cloud-cost-guardian

<details><summary>README 발췌</summary>

Evaluate proposed cloud spend against a budget and expose a typed CI gate (approve, warn, block, or manual-review) using TypeSafe Jev.

</details>

### lambertsj/beatjev

<details><summary>README 발췌</summary>

A human vs. TypeSafe's Jev in a 25-round spam-or-not reaction race. Each round has a 3-2-1 countdown. When it hits zero, the message appears, your timer starts, and the page asks Jev the same question, all on the same tick. After 25 rounds, a results screen compares speed and accuracy and gives you 

</details>

### Luminousyyh/laya-decide

<details><summary>README 발췌</summary>

&gt; 把"要不要动手"从主模型的隐式推理里剥离出来，交给一个 ~30 ms 的本地决策模型。 &gt; 一个 DeepSeek Harness (DSH) skill。 正文是中文，代码是 PowerShell。

</details>

### MorganOnCode/jev-gram

<details><summary>README 발췌</summary>

Content moderation for user-generated content (UGC) that shows exactly which words and phrases break your policy, judged by TypeSafe's Jev System One model. It has four strictness levels and an AI-prose heatmap mode. Built at JEVATHON (TypeSafe AI × The AI Collective, CodeRabbit SF, 2026-09-26).

</details>

### mpeddicord/jev-tab-filter

<details><summary>README 발췌</summary>

Group, hide, or close Chrome tabs by what they're about. Type a theme in plain words, such as "Building a new home server", and every open tab is scored for relevance by TypeSafe's Jev model in one fast request.

</details>

### neddes/sloppy-jevs-extension

<details><summary>README 발췌</summary>

An open-source Chrome extension that blurs AI-generated prose and ads with Jev by TypeSafe.

</details>

### neozhu/jev-audit

<details><summary>README 발췌</summary>

See what changed. Understand what matters. Review with confidence.

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

### pjrpjr/qingliu

<details><summary>README 발췌</summary>

黄框标出垃圾账号 → 一键原生拉黑 → 手机端同步消失。 外加一个 用实测标定过阈值 的 AI 判定层。

</details>

### ReneGucci94/jev-scout-filter

<details><summary>README 발췌</summary>

Filtro para shorts de minidrama (TikTok, Reels, YouTube Shorts) antes de scrapear o regenerar. Jev elige una acción y el programa la traduce a KEEP, SKIPDUPLICATE, DROP o HOLD.

</details>

### shibammitra24/jev-guard

<details><summary>README 발췌</summary>

Coding agents like the Antigravity agent don't just suggest code anymore — they run shell commands, edit and delete files, fetch URLs, and drive a real browser, autonomously and by default. That's what makes them useful, and it's also what makes one bad plan (or one prompt injection hidden in a READ

</details>

### ShupingR/scam-shield

<details><summary>README 발췌</summary>

Checks a text message for scam signals with TypeSafe's Jev model, then turns those signals into an explainable verdict with rules you control.

</details>

### Srinivasa314/hn-comment-filter

<details><summary>README 발췌</summary>

A Chrome extension that shows you the Hacker News comments worth reading.

</details>

### tpaulshippy/shady-town

<details><summary>README 발췌</summary>

A social-deduction party game for the living room TV. Humans play, the TV moderates.

</details>

### tx-smitht/jev-focus-guard

<details><summary>README 발췌</summary>

A local, unpacked Chrome extension that asks Jev (System One) whether likely page elements are ads or distractions, then hides only the elements Jev confidently marks for removal.

</details>

### yodablocks/duckdb-jev

<details><summary>README 발췌</summary>

DuckDB scalar functions over TypeSafe AI's Jev model, so unstructured text columns can be filtered and sorted like numeric ones.

</details>

### zachlandes/jev-dialect-bias

<details><summary>README 발췌</summary>

This repository reruns a well-known AI bias experiment on TypeSafe's Jev model (version jev-1.13.0), so anyone can check our numbers or run it again.

</details>

### biccyanzac-pixel/jacob.gg

<details><summary>README 발췌</summary>

Working on the games (any computer):

</details>

### DanielJoyce/jobber

<details><summary>README 발췌</summary>

A single-user job-search system. It collects postings from US state job banks and USAJOBS, resolves full descriptions, uses an LLM to judge fit against your current experience rather than keyword overlap, sorts results into compatibility buckets, and tracks applications in a local web console.

</details>

### dhana555std/DeepEvalRag

<details><summary>README 발췌</summary>

Production-grade, CI/CD-ready evaluation of an existing RAG application exposed over REST. It scores the Retriever, the Generator, the RAG Triad and the whole application against a golden dataset using an LLM judge (Amazon Bedrock by default; Groq, Claude, OpenAI and Google are drop-in alternatives)

</details>

### kemandos/thrift_shop_publisher

<details><summary>README 발췌</summary>

A personal helper for selling clothes on Vinted, on the computer (Chrome) and the iPhone (Safari):

</details>

### masseater/oxlint-plugin-decision

<details><summary>README 발췌</summary>

Write Oxlint rules as plain-English questions, such as "Does this call write personal data to a log?", and let decision models on OpenRouter answer them for every matching function, call, JSX element or file.

</details>

### nikhilcherry/chaukanna

<details><summary>README 발췌</summary>

▶ Watch the 2-minute demo

</details>

### shinjo15/agent_moderator

<details><summary>README 발췌</summary>

YouTube Live向けの独立チャットビューアーです。利用者自身のAPIキーで公式APIからチャットを取得し、任意のJev評価と配信別の投稿者リスト保存・一覧確認・解除を行います。保存対象のコメントは拡張の独立画面だけで非表示にし、YouTube本体の表示・操作は変更しません。BAN・投稿・削除は対象外です。

</details>

### tallaprs15/tallaprs15

<details><summary>README 발췌</summary>

Co-founder, Excelerate Education · AI engineering · Full-stack · Australia

</details>

### Teichhofer/Mailhelp

<details><summary>README 발췌</summary>

Mailhelp analysiert E-Mails und erstellt überprüfbare Vorschläge für Aufgaben und Termine. Die Freigabe erfolgt über Telegram oder die authentifizierte Weboberfläche. Erst eine ausdrückliche Bestätigung der jeweiligen Vorschlagsversion erlaubt das Schreiben in den Kalender oder die Aufgabenliste.

</details>

### Abhishekfm/JevCheck

<details><summary>README 발췌</summary>

Extract a CSV, Excel, PDF or PNG/JPEG file and let TypeSafe Jev decide whether it is valid: no PII, no sexually explicit content, well-formed, and of acceptable quality.

</details>

### Kushagr142/jev-filter

<details><summary>README 발췌</summary>

A Chrome extension that asks TypeSafe Jev 1.13, through OpenRouter, whether X posts match your categories. Matching posts can be highlighted red or hidden.

</details>

### omataak/jev-guardrail-demo

<details><summary>README 발췌</summary>

Jevを使った、テキスト入力のガードレール実装例です。

</details>
