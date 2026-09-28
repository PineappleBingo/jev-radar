# 🛡️ 가드레일·모더레이션 (185)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 149 | 11 | **무엇** Pi 코딩 에이전트의 도구 호출과 출력 결과를 TypeSafe Jev API로 검사하고 제어하는 확장 도구다.<br>**판단** 명령의 파괴성·데이터 유출·범위 초과·피해 수준과 출력의 비밀정보 누출·실패 유형을 noul, score, choice로 판단한다.<br>**포인트** 도구 실행 전 게이트 판단을 한 번의 요청(약 300ms)으로 처리하며, 오류 발생 시 실행을 차단하지 않는 fail-open 방식으로 동작한다. | ✅ 🆕 `choice` `noul` `score` | 2026-09-25 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | 85 | 7 | **무엇** 웹페이지 내 DOM 요소를 탐색해 TypeSafe Jev 모델의 판단에 따라 광고 요소를 실시간으로 제거하는 크롬 확장 프로그램이다.<br>**판단** 추출된 각 DOM 후보 요소의 태그, 클래스, 텍스트 요약 등을 바탕으로 유료 광고(paid advertisement)인지 여부를 noul 확률 질문으로 판단시킨다.<br>**포인트** 광고 후보 선별과 배치는 순수 코드로 처리하고 시맨틱 판별만 Jev에 일괄 요청하며, 설정된 임계 확률을 넘기면 애니메이션과 함께 요소를 제거한다. | ✅ 🆕 `noul` | 2026-09-17 |
| [MillionSend/millionsend](https://github.com/MillionSend/millionsend) | 170 | 12 | **무엇** AWS SES를 기반으로 자체 호스팅하거나 클라우드로 사용할 수 있는 Resend 호환 오픈소스 이메일 발송 플랫폼이다.<br>**판단** 발송된 이메일 샘플에 대해 유해 콘텐츠 및 어뷰징 여부를 판단하도록 백그라운드에서 점수 채점(score)을 요청한다.<br>**포인트** 발송 지연을 막기 위해 SES 수락 후 백그라운드에서 비동기로 샘플을 채점하며, 셀프 호스트 환경에서는 기본 비활성화되어 있다. | 🆕 | 2026-09-26 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 43 | 5 | **무엇** 다양한 코딩 에이전트의 도구 호출과 결과를 검사해 위험한 명령과 프롬프트 인젝션을 차단하는 보안 훅 라이브러리다.<br>**판단** 도구 호출의 위험도(risk), 사용자 요청 부합 여부(user_requested), 신뢰할 수 없는 출처 기반 여부(from_untrusted)를 질의해 판단한다.<br>**포인트** 외부 의존성 없이 Claude Code, Cursor 등 여러 에이전트에 thin 어댑터로 연결되며 도구 실행 전후 및 인스트럭션 파일을 검사한다. | ✅ 🆕 | 2026-09-24 |
| [qkal/Canny](https://github.com/qkal/Canny) | 99 | 11 | **무엇** Claude Code와 Codex CLI에서 코딩 에이전트가 검증 절차 없이 작업을 마쳤다고 주장하지 못하게 감시하는 훅 도구이다.<br>**판단** 에이전트 메시지가 작업 완료를 주장하는지, 변경된 diff가 특정 규칙을 위반했는지 여부를 예/아니오 확률로 판단시킨다.<br>**포인트** 런타임 의존성이 없고, 원장의 사실 기록만 작업을 차단할 수 있으며 Jev의 판단 결과는 차단 없이 에이전트의 컨텍스트 조언으로만 사용된다. | 🆕 | 2026-09-22 |
| [keltokhy/jgrep](https://github.com/keltokhy/jgrep) | 127 | 3 | 요약 대기 · grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line. | 🆕 | 2026-09-25 |
| [brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) | 48 | 6 | **무엇** Discord 서버 관리자가 스팸·피싱 링크를 차단하고 멤버 성향을 분석하기 위해 사용하는 Python 기반 모더레이션 봇이다.<br>**판단** 실시간 메시지의 스팸 및 피싱 링크 여부와 유저 최근 메시지의 사기 위험·스팸·초보성·유해성·도움 수준 점수를 판별한다.<br>**포인트** 오탐된 메시지를 사면하면 안전 선례로 저장해 추후 검사에 반영하는 동적 학습 및 SQLite 기반 캐싱을 지원한다. | 🆕 | 2026-09-22 |
| [Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) | 9 | 1 | **무엇** pi 코딩 에이전트의 부작용 도구 호출이 사용자의 자연어 제약 조건에 어긋나는지 실행 전 점검·차단하는 런타임 제약 가드레일이다.<br>**판단** 사용자 발화마다 기존 정책의 변경 상태(KEEP, LIFT, NARROW 등)와 작업 허가 신호 여부를 Jev에 분류시킨다.<br>**포인트** Jev는 좁은 범위의 유한 선택지 분류만 수행하며, 규칙 상태를 세션 단위 구조적 op로 영속화해 컴팩션 후 재질의 없이 복원한다. | ✅ 🆕 `choice` `noul` | 2026-09-19 |
| [aurorainfra/grev](https://github.com/aurorainfra/grev) | 39 | 1 | 요약 대기 · Thinking coreutils | 🆕 | 2026-09-24 |
| [kiwi0719/jev-edge](https://github.com/kiwi0719/jev-edge) | 37 | 1 | 요약 대기 · Typed-judgment admission control at the traffic edge: three-layer prompt-injection and abuse filter for nginx/OpenResty, powered by TypeSafe Jev. Fail-open, cached, hot-reloadable. | 🆕 | 2026-09-27 |
| [zhangcy122/OpenJev](https://github.com/zhangcy122/OpenJev) | 33 | 4 | 요약 대기 · Self-evolving cognitive decision engine &amp; TypeSafe Jev alternative. Deliberative decision flywheel ('explore first, crystallize later' System 2→1) with 100% option-order invariance. Typed probabilistic API (Choice, Noul, Score) for Open LLMs, Laya (ModernBERT), &amp; commercial Jev with calibrated logprobs and adaptive safety guards. | 🆕 | 2026-09-26 |
| [mizchi/jev-test-filter](https://github.com/mizchi/jev-test-filter) | 29 | 1 | 요약 대기 · Score every test against a git diff with Jev, and emit the filter arguments vitest, node:test, Playwright, cargo test and go test already understand | 🆕 | 2026-09-24 |
| [shiftynick/jev-axi](https://github.com/shiftynick/jev-axi) | 24 | 4 | 요약 대기 · Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell | 🆕 | 2026-09-24 |
| [adamnroman/slop-filter](https://github.com/adamnroman/slop-filter) | 21 | 1 | 요약 대기 · Chrome extension that hides AI-generated posts and comments on X, LinkedIn, and Reddit. Scored by TypeSafe Jev. | 🆕 | 2026-09-27 |
| [AskTheWay/dsh-jev-interceptor](https://github.com/AskTheWay/dsh-jev-interceptor) | 21 | 1 | 요약 대기 · ⚡ Millisecond System-1 judgement for every tool call in DeepSeek Harness — Jev-powered risk classification &amp; evidence-gated auto-approval. Fail-closed by construction. dsh 生态第一个 System-1 决策插件 | 🆕 | 2026-09-25 |
| [ilyamk/jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling) | 21 | 4 | 요약 대기 · Self-hosted AI email classifier for Gmail powered by Jev. Create custom labels, organize your inbox, and filter spam with confidence and cost controls. | 🆕 | 2026-09-19 |
| [TypeSafeAI/jev-harness](https://github.com/TypeSafeAI/jev-harness) | 21 | 5 | 요약 대기 · A custom coding harness for TypeSafe AI's Jev: an LLM proposes, Jev answers narrow questions, code decides, every step leaves a receipt. | 🆕 | 2026-09-26 |
| [pengchujin/ad-radar](https://github.com/pengchujin/ad-radar) | 20 | 4 | 요약 대기 · 开源浏览器插件：在小红书、微博、X、知乎上按关键词和博主折叠内容；用你自己的 Jev API key 识别广告、AI、军事、政治等话题。 | 🆕 | 2026-09-22 |
| [ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch) | 13 | 0 | 요약 대기 · Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension | 🆕 | 2026-09-19 |
| [behavioral-sh/behavioral](https://github.com/behavioral-sh/behavioral) | 11 | 1 | 요약 대기 · Behavioral agent harness — a neuro-symbolic, self-improving agent built on the behavioral-programming runtime. | 🆕 | 2026-09-26 |
| [harshithsunku/learn-jev-end-to-end](https://github.com/harshithsunku/learn-jev-end-to-end) | 11 | 3 | 요약 대기 · Learn Jev end to end: a free hands-on course. Build 13 AI agent use cases with a fast brain (Jev) and a slow brain (LLM). One OpenRouter key. | 🆕 | 2026-09-23 |
| [andrelandgraf/safer-with-jev](https://github.com/andrelandgraf/safer-with-jev) | 6 | 0 | **무엇** 요청 본문을 검사하여 프롬프트 인젝션이나 안전하지 않은 응답을 차단하고 통과 시 업스트림으로 전달하는 Neon Function 기반 프록시다.<br>**판단** 요청 본문이 프롬프트 인젝션인지, 응답 텍스트가 안전하지 않은지, 또는 전달받은 텍스트가 양호한지 등을 판단한다.<br>**포인트** 판단 결과에 따라 review 또는 block 시 차단(403)하고 pass 시 지정한 target URL로 요청 바이트를 그대로 포워딩한다. | 🆕 | 2026-09-18 |
| [amithgc/local-jev](https://github.com/amithgc/local-jev) | 10 | 1 | 요약 대기 ·  A local, offline System One server compatible with TypeSafe's Jev API. It answers typed yes/no, category and score questions with small open models. | 🆕 | 2026-09-21 |
| [dark-hxx/jev-safety-gateway](https://github.com/dark-hxx/jev-safety-gateway) | 10 | 1 | 요약 대기 · 位于 nginx 与大模型后端之间的前置过滤反向代理：逐请求提取用户输入交给 JEV 判定，有害拦截、正常透明放行 | 🆕 | 2026-09-24 |
| [jesset/pi-verdict](https://github.com/jesset/pi-verdict) | 10 | 4 | 요약 대기 · A minimal  permission gate for Pi in the style of Claude Code's auto mode | 🆕 | 2026-09-27 |
| [AkashPriyadarshii/jev-git](https://github.com/AkashPriyadarshii/jev-git) | 5 | 0 | **무엇** 개발자가 커밋 및 푸시 시점에 스테이징된 git diff의 보안 문제를 빠르게 검사할 수 있도록 돕는 Rust 기반 Git 확장 도구다.<br>**판단** Jev의 noul 결정을 활용해 스테이징된 diff에 노출된 시크릿, 프롬프트 주입 공격, 파괴적 명령어가 포함되어 있는지 여부를 판단한다.<br>**포인트** 정규식 검사의 한계와 LLM의 지연 시간 문제를 피하기 위해 단일 Rust 바이너리와 Jev API를 통해 100ms 미만 지연 시간을 목표로 구현했다. | 🆕 | 2026-09-25 |
| [CodeAlive-AI/mastra-jev-moderation](https://github.com/CodeAlive-AI/mastra-jev-moderation) | 5 | 2 | **무엇** Mastra 에이전트의 사용자 입력을 TypeSafe Jev API로 검사해 유해 메시지를 차단하는 단일 파일 기반 프로세서다.<br>**판단** 마지막 입력 메시지가 정책상 차단 대상인지 여부(noul 확률)와 위반 카테고리(choice)를 한 번의 요청으로 판단시킨다.<br>**포인트** 텍스트 파싱 없이 확률값으로 직접 차단 여부를 결정하며, 타임아웃 및 오류 시 페일오픈과 60초 서킷 브레이커를 지원한다. | 🆕 | 2026-09-18 |
| [qs-lll/twitter-jev-guard](https://github.com/qs-lll/twitter-jev-guard) | 9 | 2 | 요약 대기 · 使用 TypeSafe Jev 在 X/Twitter 时间线上识别低质量、垃圾和广告帖子，并在文字区域显示醒目的半透明水印。 | 🆕 | 2026-09-21 |
| [ranjan2829/AskJev](https://github.com/ranjan2829/AskJev) | 9 | 3 | 요약 대기 · AskJev — Jev autopilot for any website + guard on irreversible clicks (TypeSafe System One, not Claude) | 🆕 | 2026-09-18 |
| [AbdelStark/heist-one](https://github.com/AbdelStark/heist-one) | 8 | 1 | 요약 대기 · Observable browser stealth game: Jev makes typed guard judgments while deterministic code owns the world. | 🆕 | 2026-09-17 |
| [jackie-cqz/dsh-jev-plugin](https://github.com/jackie-cqz/dsh-jev-plugin) | 8 | 1 | 요약 대기 · DeepSeek Harness plugin for TypeSafe Jev: typed decisions, configurable guardrails, and Web UI result cards. | 🆕 | 2026-09-26 |
| [Nyarlathoteppppp/pi-jev-context](https://github.com/Nyarlathoteppppp/pi-jev-context) | 8 | 0 | 요약 대기 · Model performance first. Token savings second. A Pi extension with freshness-aware read dedupe, Jev log filtering, and searchable verbatim recall. Keeps existing message history intact. | 🆕 | 2026-09-22 |
| [ItisShikhar/gg-friggin-ez](https://github.com/ItisShikhar/gg-friggin-ez) | 7 | 0 | 요약 대기 · Fast, drop-in multilingual profanity and toxicity screener for Node.js, powered by System 1 models like TypeSafe AI Jev and Laya. Catches leetspeak, character spacing, and romanized profanity across languages including Kannada, Telugu, Tamil, Hindi, and Bengali. ~50-500ms latency. | 🆕 | 2026-09-22 |
| [ufec/jev-block-android-ad](https://github.com/ufec/jev-block-android-ad) | 7 | 0 | 요약 대기 · JevNoiseGate filters unwanted notifications and SMS on Android. Rather than   matching keywords, an LLM decides what's noise — and only what it explicitly   flags is blocked. Verification codes are matched on-device and never uploaded;   anything uncertain passes through. | 🆕 | 2026-09-19 |
| [EugeneBoondock/jevsql](https://github.com/EugeneBoondock/jevsql) | 6 | 1 | 요약 대기 · SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded. | 🆕 | 2026-09-19 |
| [Arpit-Khandelwal/jev-linkedin-slop-filter](https://github.com/Arpit-Khandelwal/jev-linkedin-slop-filter) | 5 | 1 | 요약 대기 · Slams a BAIT, CORP or BRAG stamp onto LinkedIn engagement-bait, judged live by Jev (TypeSafe System One). | 🆕 | 2026-09-22 |
| [h0j5bz0adh0-stack/jev-pilot](https://github.com/h0j5bz0adh0-stack/jev-pilot) | 5 | 0 | 요약 대기 · Fast System-1 Decision, Arbitration &amp; Safety Engine for Autonomous AI Agents (Powered by TypeSafe Jev) | 🆕 | 2026-09-23 |
| [maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | 5 | 0 | 요약 대기 · Natural-language row filtering for MySQL, powered by TypeSafe Jev. | 🆕 | 2026-09-20 |
| [pavy23/morning-tech-briefing](https://github.com/pavy23/morning-tech-briefing) | 5 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [Reindeer-AI/pi-jev-guard](https://github.com/Reindeer-AI/pi-jev-guard) | 5 | 0 | 요약 대기 · Check Pi code edits against repository Markdown rules with TypeSafe Jev | 🆕 | 2026-09-24 |
| [smthdagg/XShield](https://github.com/smthdagg/XShield) | 5 | 0 | 요약 대기 · XShield — Fight Spam, Scams, Bots, and Adult-Content Accounts on X.  Automatically detect, collect, review, and safely block malicious accounts with a powerful rule engine and human-like execution strategy. | 🆕 | 2026-09-25 |
| [transitive-bullshit/doom-or-bloom](https://github.com/transitive-bullshit/doom-or-bloom) | 5 | 0 | 요약 대기 · Doom or Bloom: map your AI worldview and compare it to others. | 🆕 | 2026-09-27 |
| [VeridicalTech/Edward](https://github.com/VeridicalTech/Edward) | 5 | 2 | 요약 대기 · The supervisor for coding agents that run when nobody's watching — deterministic guardrails + local semantic scorer + resumable interventions, every decision signed. | 🆕 | 2026-09-27 |
| [chengyongru/notiq](https://github.com/chengyongru/notiq) | 4 | 0 | 요약 대기 · Native Android notification filtering with natural-language rules, powered by Jev or self-hosted FastJev. | 🆕 | 2026-09-23 |
| [fazlerocks/jev-adblock](https://github.com/fazlerocks/jev-adblock) | 4 | 0 | 요약 대기 · Open-source AI ad blocker for Chrome. No filter lists: TypeSafe AI's Jev model decides what is an ad. Bring your own key. | 🆕 | 2026-09-22 |
| [godspede/construct-auto-classifier](https://github.com/godspede/construct-auto-classifier) | 4 | 0 | 요약 대기 · Effect-based safety gate for AI coding agents' shell commands (OpenCode, Antigravity): fast structural rules, then TypeSafe's Jev or a chat model judges what a command does. Certified with Jev at zero dangerous commands allowed. | 🆕 | 2026-09-25 |
| [jiangkoumo/ego-decision-layer](https://github.com/jiangkoumo/ego-decision-layer) | 4 | 0 | 요약 대기 · Pluggable decision layer for the ego lite browser: one System One (Jev) call per step replaces the per-step LLM turn, and the backend can be swapped for a local OpenAI-compatible model. Fail-closed execution guards. The measured one — raw bench data, 16 suites, changelog with corrections. | 🆕 | 2026-09-27 |
| [jkrup/jeveryword](https://github.com/jkrup/jeveryword) | 4 | 0 | 요약 대기 · Text extraction with Jev: field extraction, PII detection and exact quotes, built on TypeSafe's Jev. | 🆕 | 2026-09-20 |
| [MithrilMan/your-signal](https://github.com/MithrilMan/your-signal) | 4 | 1 | 요약 대기 · Open-source BYOK Chrome extension for personal, reversible X timeline filters. | 🆕 | 2026-09-18 |
| [noelzappy/tripwire](https://github.com/noelzappy/tripwire) | 4 | 0 | 요약 대기 · Judge every LLM response before the user sees it. AI SDK middleware and OpenAI-compatible proxy. | 🆕 | 2026-09-18 |
| [ziyacivan/jev-mail-filter](https://github.com/ziyacivan/jev-mail-filter) | 4 | 0 | 요약 대기 · Gmail filters written in plain English, judged by Jev (TypeSafe) | 🆕 | 2026-09-27 |
| [0xArx/jevegis](https://github.com/0xArx/jevegis) | 3 | 0 | 요약 대기 · Guardrails for LLM apps in one API call. Prompt injection, jailbreaks, leaks, unsafe content. Built on TypeSafe Jev. MIT. | 🆕 | 2026-09-18 |
| [24601/rh-guard](https://github.com/24601/rh-guard) | 3 | 0 | 요약 대기 · Reward-hack radar for coding agents: structural denies + TypeSafe Jev System One sidecar for Claude Code &amp; Cursor hooks | 🆕 | 2026-09-25 |
| [bitnovus/jev-spam-eval](https://github.com/bitnovus/jev-spam-eval) | 3 | 0 | 요약 대기 · Zero-shot spam filtering with TypeSafe Jev Noul questions, compared with TF-IDF baselines | 🆕 | 2026-09-18 |
| [ClemensSchartmueller/jev-guard](https://github.com/ClemensSchartmueller/jev-guard) | 3 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [davertor/jev-slop-guard](https://github.com/davertor/jev-slop-guard) | 3 | 0 | 요약 대기 · Jev Slop Guard — a Chrome extension that scores and stamps AI slop on your X and LinkedIn feeds as you scroll | 🆕 | 2026-09-22 |
| [lgy1027/jevshield](https://github.com/lgy1027/jevshield) | 3 | 0 | 요약 대기 · Sub-100ms security gate for AI agent tool calls, powered by TypeSafe's Jev (System-1) decision model. Single-request Choice/Noul/Score evaluation, dual-factor blocking matrix, calibrated-confidence routing, fail-closed parsing, zero-config local fallback. LangChain-ready. | 🆕 | 2026-09-24 |
| [littlewindy123/jev-bili-filter](https://github.com/littlewindy123/jev-bili-filter) | 3 | 0 | 요약 대기 · 弹幕照开，噪音别来。用 JEV 为 B 站评论和弹幕降噪：剧透、反串黑、广告、基本盘一键过滤，想屏蔽什么，再写一句话。Chrome 插件，原页生效，MIT 开源。 | 🆕 | 2026-09-21 |
| [opaielsheikh/typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard) | 3 | 0 | 요약 대기 · Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model) | 🆕 | 2026-09-17 |
| [rorshopping/jev-browser-local](https://github.com/rorshopping/jev-browser-local) | 3 | 1 | 요약 대기 · Run jev-browser on a fully local JEV-style decision engine (no cloud API). Warm-browser fork, VRAM guard, measured benchmarks, run traces. | 🆕 | 2026-09-19 |
| [SamanPandey-in/jevrail](https://github.com/SamanPandey-in/jevrail) | 3 | 0 | 요약 대기 · Jev powered pre-execution guard for terminal coding agents | 🆕 | 2026-09-25 |
| [shikaizhong-design/ego-jev-ultrafast](https://github.com/shikaizhong-design/ego-jev-ultrafast) | 3 | 0 | 요약 대기 · Jev drives your Ego Lite browser: one typed-choice request per step. Single-file, zero-dependency port of browser-use/jev-ultrafast with multi-model benchmarks and extra guardrails. Unofficial. | 🆕 | 2026-09-22 |
| [0xwhrari/grok-jev-guard](https://github.com/0xwhrari/grok-jev-guard) | 2 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-23 |
| [abhixhek/feedwall](https://github.com/abhixhek/feedwall) | 2 | 0 | 요약 대기 · Your feed, your rules, in plain English. A browser extension that filters X, YouTube, Reddit, LinkedIn and Hacker News with topics you write yourself. Bring your own Jev key. | 🆕 | 2026-09-19 |
| [CarlosCaoLopez/HACKSPAIN-2026](https://github.com/CarlosCaoLopez/HACKSPAIN-2026) | 2 | 1 | 요약 대기 · Taiafox filters a hundred incoming messages down to the three that matter, coordinates responders by voice, and re-plans in under a second when the fire turns. | 🆕 | 2026-09-22 |
| [CogFlux/opencode-jev-guard](https://github.com/CogFlux/opencode-jev-guard) | 2 | 0 | 요약 대기 · OpenCode 2 plugin that sends every shell command (local or via FarHand) to TypeSafe's Jev and asks you first when it leaves files outside the project, installs software globally, changes global settings, is harmful or exposes private data | 🆕 | 2026-09-25 |
| [coo-quack/jev-pii-checker](https://github.com/coo-quack/jev-pii-checker) | 2 | 1 | 요약 대기 · CLI that finds PII in text with TypeSafe Jev: presence, sensitivity, and located spans | 🆕 | 2026-09-26 |
| [dr-dimitru/claude-jev-plugin](https://github.com/dr-dimitru/claude-jev-plugin) | 2 | 0 | 요약 대기 · TypeSafe Jev semantic guardrails for Claude Code | 🆕 | 2026-09-22 |
| [ibrahemid/jevprune](https://github.com/ibrahemid/jevprune) | 2 | 0 | 요약 대기 · Filter command output for coding agents using a task description. | 🆕 | 2026-09-20 |
| [Karthick-Ramachandran/jevfilter](https://github.com/Karthick-Ramachandran/jevfilter) | 2 | 0 | 요약 대기 · Turn a user's search sentence into filters your API already accepts, powered by Jev | 🆕 | 2026-09-24 |
| [kongyo2/similarity-ts-jev](https://github.com/kongyo2/similarity-ts-jev) | 2 | 1 | 요약 대기 · similarity-ts and fallow duplicate detection for TypeScript, filtered by TypeSafe's Jev down to the pairs worth refactoring | 🆕 | 2026-09-23 |
| [NorbertBodziony/guard-jev](https://github.com/NorbertBodziony/guard-jev) | 2 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-17 |
| [satyawikananda/gits](https://github.com/satyawikananda/gits) | 2 | 1 | 요약 대기 · Gits is a browser extension powered by Jev to search the leads data on the Google Maps | 🆕 | 2026-09-21 |
| [tinystruct/tinystruct-typesafe-sdk](https://github.com/tinystruct/tinystruct-typesafe-sdk) | 2 | 0 | 요약 대기 · A tinystruct-based TypeSafe SDK with JEV model. | 🆕 | 2026-09-24 |
| [Tom-R-Main/Footwork](https://github.com/Tom-R-Main/Footwork) | 2 | 1 | 요약 대기 · A verified browser agent: a cheap Jev guard (evidence-checked completions, a destructive gate) in front of any LLM browser driver, with Jev taking the mechanical steps in dual mode. Built on browser-use; every number pre-registered and measured. | 🆕 | 2026-09-26 |
| [0x963D/last-exit](https://github.com/0x963D/last-exit) | 1 | 0 | 요약 대기 · A cyberpunk border encounter powered by TypeSafe Jev. Bluff the guard. Inspect the receipts. | 🆕 | 2026-09-17 |
| [48Nauts-Operator/skill-dash](https://github.com/48Nauts-Operator/skill-dash) | 1 | 0 | 요약 대기 · Skill Dash uses Jev to judge Claude Code and Codex skills and plugins: usefulness, redundancy, clarity, duplicates, safety. Local dashboard plus the corpus pipeline behind whichskills.dev. MIT. | 🆕 | 2026-09-20 |
| [4rays/profanity-checker](https://github.com/4rays/profanity-checker) | 1 | 0 | 요약 대기 · Cloudflare Worker to check for profanity using TypeSafe Jev | 🆕 | 2026-09-20 |
| [abhaybhargav/juardrails](https://github.com/abhaybhargav/juardrails) | 1 | 0 | 요약 대기 · Go guardrail management for Jev with YAML policies, namespaces, access control, audit logging, and a REST API | 🆕 | 2026-09-27 |
| [allebee/jevgrep](https://github.com/allebee/jevgrep) | 1 | 0 | 요약 대기 · CLI that filters logs and text by meaning using plain-English yes/no questions and Jev probabilities. | 🆕 | 2026-09-21 |
| [bojansandhaus/jev-home-assistant-sentinel](https://github.com/bojansandhaus/jev-home-assistant-sentinel) | 1 | 0 | 요약 대기 · A safety boundary for AI-assisted Home Assistant decisions, with explicit policy checks and deterministic state verification. | 🆕 | 2026-09-26 |
| [CeamKrier/semantic-firewall](https://github.com/CeamKrier/semantic-firewall) | 1 | 0 | 요약 대기 · Semantic firewall for LLM agents: tool calls gated by TypeSafe Jev (System One decision model via OpenRouter) + deterministic policy. PoC with corpus, stability eval, baseline, results. | 🆕 | 2026-09-18 |
| [copyleftdev/jev-labs](https://github.com/copyleftdev/jev-labs) | 1 | 0 | 요약 대기 · Never confidently wrong: a TLA+-verified consensus kernel around TypeSafe's Jev, run through 1,680 chaos-tested pharmacy decisions with zero wrong verdicts. Film, code, and every captured call. | 🆕 | 2026-09-19 |
| [DolphinMiner/jev-rss](https://github.com/DolphinMiner/jev-rss) | 1 | 0 | 요약 대기 · A local-first RSS reader with Jev-powered semantic screening. Follow what matters, inspect every judgment, and keep control of your reading. English / 简体中文. | 🆕 | 2026-09-21 |
| [edwardyen724-g/jev-compactor](https://github.com/edwardyen724-g/jev-compactor) | 1 | 0 | 요약 대기 · Context compaction and safety gating for AI agents via TypeSafe Jev: keeps messages verbatim, no summarization. OpenAI, Anthropic, LangChain, CLI, MCP. | 🆕 | 2026-09-19 |
| [FrancyJGLisboa/decision-system-forge](https://github.com/FrancyJGLisboa/decision-system-forge) | 1 | 1 | 요약 대기 · Compile documents, code, SOPs, and resolved cases into evidence-backed JEV judgments, legal actions, guarded adapters, and measured decision systems. | 🆕 | 2026-09-25 |
| [h1code2/jev-x-blocker](https://github.com/h1code2/jev-x-blocker) | 1 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-20 |
| [JGalego/Jevs-Garage](https://github.com/JGalego/Jevs-Garage) | 1 | 1 | 요약 대기 · A garage full of tiny experiments for building critical systems with System One &amp; Jev 🔧🧠⚡ | 🆕 | 2026-09-19 |
| [JH3lou/GridCue](https://github.com/JH3lou/GridCue) | 1 | 0 | 요약 대기 · Ask a dense data grid in plain language; get a previewed, undoable view change. Headless TypeScript, React, TanStack Table, shadcn. MIT. | 🆕 | 2026-09-25 |
| [jiawei686/jev-screen-mcp](https://github.com/jiawei686/jev-screen-mcp) | 1 | 0 | 요약 대기 · Single-purpose MCP server (one tool, one job): a content-moderation gate powered by TypeSafe Jev (System One decision model). | 🆕 | 2026-09-21 |
| [kiarina/labs](https://github.com/kiarina/labs) | 1 | 0 | 요약 대기 · Small, independent projects for experiments, research, and investigations. | 🆕 | 2026-09-28 |
| [kurihada/pi-jev-permit](https://github.com/kurihada/pi-jev-permit) | 1 | 0 | 요약 대기 · A Jev (TypeSafe System One) permission gate for the Pi coding agent: judges every bash / write / edit call before it runs | 🆕 | 2026-09-22 |
| [lambertsj/beatjev](https://github.com/lambertsj/beatjev) | 1 | 0 | 요약 대기 · try to beat jev | 🆕 | 2026-09-17 |
| [makefinks/jev-feed-filter](https://github.com/makefinks/jev-feed-filter) | 1 | 0 | 요약 대기 · Smart, dynamic AI filtering for X and YouTube feeds using Jev | 🆕 | 2026-09-19 |
| [naturalmoods/epeszuro](https://github.com/naturalmoods/epeszuro) | 1 | 0 | 요약 대기 · Chrome-bővítmény: elrejti a gyűlölködő YouTube-hozzászólásokat és élőchat-üzeneteket a TypeSafe Jev modelljével. MIT. | 🆕 | 2026-09-26 |
| [neddes/sloppy-jevs-extension](https://github.com/neddes/sloppy-jevs-extension) | 1 | 0 | 요약 대기 · Open-source Chrome extension that filters AI-generated prose and ads with Jev | 🆕 | 2026-09-17 |
| [ohernandezdev/jevmod](https://github.com/ohernandezdev/jevmod) | 1 | 1 | 요약 대기 · Moderation for communities and apps, powered by Jev (TypeSafe): probabilities per category, thresholds you own. Discord/Telegram/Reddit bots, CLI, Python, npm, HTTP API, MCP. | 🆕 | 2026-09-27 |
| [pjrpjr/qingliu](https://github.com/pjrpjr/qingliu) | 1 | 1 | 요약 대기 · X 时间线清洁工 · FeedSieve(MIT) 衍生 · 带实测标定的 AI 判定层：误杀 0.7%，还能抓词库认不出的 47% | 🆕 | 2026-09-19 |
| [rudra72r/jev-guard](https://github.com/rudra72r/jev-guard) | 1 | 0 | 요약 대기 · Fast, cheap guardrails for LLM apps, powered by TypeSafe's Jev model | 🆕 | 2026-09-26 |
| [serejkaaa512/jev-content-guard-ext](https://github.com/serejkaaa512/jev-content-guard-ext) | 1 | 0 | 요약 대기 · Jev AI content guard Chrome extension | 🆕 | 2026-09-25 |
| [ShupingR/scam-shield](https://github.com/ShupingR/scam-shield) | 1 | 0 | 요약 대기 · Scam text message filter powered by TypeSafe's Jev model | 🆕 | 2026-09-13 |
| [sperictao/dsh-auto-review-jev](https://github.com/sperictao/dsh-auto-review-jev) | 1 | 0 | 요약 대기 · DeepSeek Harness plugin: per-tool-call Auto-permission review powered by TypeSafe Jev, with account usage and API-key management inline on its settings page | 🆕 | 2026-09-23 |
| [taman-spirit/guardrail-chatbot-jev](https://github.com/taman-spirit/guardrail-chatbot-jev) | 1 | 0 | 요약 대기 · Vietnam - Content safety guardrails for AI chatbots: input, output and conversation checks over one policy file with Jev  | 🆕 | 2026-09-26 |
| [tpaulshippy/shady-town](https://github.com/tpaulshippy/shady-town) | 1 | 0 | 요약 대기 · Shady Town: social-deduction party game for the living room TV, moderated by TypeSafe Jev | 🆕 | 2026-09-17 |
| [vkpdeveloper/mrsecret](https://github.com/vkpdeveloper/mrsecret) | 1 | 0 | 요약 대기 · Mr. Secret — blurs secrets &amp; PII on any page using TypeSafe AI Jev | 🆕 | 2026-09-17 |
| [who/jevq](https://github.com/who/jevq) | 1 | 0 | 요약 대기 · A Jev-based filter sidecar for jq | 🆕 | 2026-09-26 |
| [yelkhanyergali-sys/jev-guard](https://github.com/yelkhanyergali-sys/jev-guard) | 1 | 0 | 요약 대기 · PI Mono extension for Jev (TypeSafe AI): in-flight terminal pruning (prompt-cache safe) and surgical diff guard | 🆕 | 2026-09-27 |
| [yldst-dev/fuckyou-spam-rs](https://github.com/yldst-dev/fuckyou-spam-rs) | 1 | 0 | 요약 대기 · 짜증나는 스팸성 메시지를 LLM을 활용해 삭제하는 텔레그램 봇 코드의 rust 재작성판. | 🆕 | 2026-09-25 |
| [BasmaAbouzied0/jev-secret-guard](https://github.com/BasmaAbouzied0/jev-secret-guard) | 0 | 0 | **무엇** Claude Code 환경에서 AI 에이전트가 코드나 명령어로 시크릿을 작성하거나 유출하지 않도록 차단하는 PreToolUse 훅이다.<br>**판단** 마스킹된 알 수 없는 고엔트로피 문자열과 주변 문맥을 보고 해당 값이 시크릿인지 여부를 확률 점수로 판단하도록 한다.<br>**포인트** 알려진 키는 로컬에서 차단하고 알 수 없는 값은 마스킹해 메타데이터만 Jev로 전송하며, 불확실하거나 장애 발생 시 사용자에게 확인을 요청한다. | 🆕 | 2026-09-27 |
| [caiovicentino/jev-risk-check-provider](https://github.com/caiovicentino/jev-risk-check-provider) | 0 | 0 | **무엇** x402 결제 프로토콜에서 에이전트 결제 주체의 위협과 사기 위험도를 Jev로 채점하고 ES256 서명 증명을 발급하는 서비스다.<br>**판단** 위협 프로필·제재 대상·자금세탁 패턴·피싱 도메인 여부를 noul로, 위험 유형을 choice로, 신뢰도를 0~4 rubric score로 질의한다.<br>**포인트** 결제 상태에 대해 원자적 Jev 질문들을 병렬 평가한 후 확정적 코드로 합성 점수를 산출하며, ES256 JWS 증명으로 검증 신뢰를 보장한다. | 🆕 | 2026-09-27 |
| [cyu60/floodgate](https://github.com/cyu60/floodgate) | 0 | 0 | **무엇** 사용자가 설정한 현재 작업에 방해되는 웹페이지를 브라우저 탐색 시 차단하는 오픈 판별 모델 및 크롬 확장 프로그램<br>**판단** 접속하려는 웹페이지가 사용자가 지정한 작업에 방해되는지 여부를 noul(예/아니오 확률)로 판별<br>**포인트** River API로 오픈 모델을 학습시켜 Jev 호환 API를 구현하고, 사용자 브라우징 기록으로 개인화 모델을 미세조정함 | 🆕 | 2026-09-28 |
| [prestonkakukdev/Jev-Defense](https://github.com/prestonkakukdev/Jev-Defense) | 0 | 0 | **무엇** AI 에이전트의 위험한 도구 호출 차단, 프롬프트 주입 감지 및 스킬 검사를 수행하는 TypeSafe Jev 기반 보안 가드레일 도구다.<br>**판단** 명령어가 데이터를 삭제하거나 덮어쓰는지, 외부로 데이터를 전송하는지, 사용자가 이를 명시적으로 요청했는지 등의 예/아니오 확률을 noul로 묻는다.<br>**포인트** Jev가 최종 결정을 내리지 않고 좁은 예/아니오 확률만 계산하며, 코드 하드룰과 rulebook.py의 명시적 조건문으로 allow·ask·block을 결정한다. | 🆕 | 2026-09-26 |
| [SoniaMehta14/paved-gate](https://github.com/SoniaMehta14/paved-gate) | 0 | 0 | **무엇** 프론티어 LLM 호출 전에 인바운드 요청의 안전성, 라우팅, 필요성을 빠르게 검사하고 차단 또는 처리하는 수집 게이트웨어 오픈소스 라이브러리다.<br>**판단** Jev 모델을 통해 intent(choice, 3개 라우트), risk(score, 1-5점 루브릭), sensitive(noul, PII/PHI 여부) 세 가지를 판단시킨다.<br>**포인트** 1회 호출로 3가지 타입 질의를 약 100ms 내에 병렬 처리하며, 결정마다 정책 해시와 원시 점수를 포함한 구조화된 감사 로그(JSONL)를 남긴다. | 🆕 | 2026-09-27 |
| [7starsseeker/dsh-jev-guard](https://github.com/7starsseeker/dsh-jev-guard) | 0 | 0 | 요약 대기 · DeepSeek Harness (DSH) 执行前安全阀门:bash/pwsh 真正执行前先经静态规则 + TypeSafe Jev 语义判定,破坏性操作按 允许/修正/拦截/上报人工 四态处置,含额度降级与审计日志。 | 🆕 | 2026-09-24 |
| [Abhieu/excelpilot](https://github.com/Abhieu/excelpilot) | 0 | 0 | 요약 대기 · AI-assisted Excel operations engine: structured planning, JEV decision support, deterministic policy and execution, verification, and an audit trail. | 🆕 | 2026-09-26 |
| [Abhishekfm/JevCheck](https://github.com/Abhishekfm/JevCheck) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [Abhishekvrshny/jevexec](https://github.com/Abhishekvrshny/jevexec) | 0 | 0 | 요약 대기 · Judicious Execution Verifier &amp; EXECutor for coding agents | 🆕 | 2026-09-27 |
| [acarbone/PII-Detector](https://github.com/acarbone/PII-Detector) | 0 | 0 | 요약 대기 · PII Detector PoC using TypeSafe AI model Jev | 🆕 | 2026-09-26 |
| [affirmitv/bitrate-advisor](https://github.com/affirmitv/bitrate-advisor) | 0 | 0 | 요약 대기 · Live-stream encoder settings from telemetry and history: TypeSafe's Jev decision model inside a deterministic safety envelope. Deno, Node, edge runtimes. | 🆕 | 2026-09-18 |
| [Argona7/vibecoding-god-setup](https://github.com/Argona7/vibecoding-god-setup) | 0 | 0 | 요약 대기 · One message to Grok Bot sets up Claude Code with Opus 5.5 and Jev on Lead's cloud computer | 🆕 | 2026-09-25 |
| [AryanVerma-av/resume-analyser-upgraded](https://github.com/AryanVerma-av/resume-analyser-upgraded) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [atomicpages/sensored](https://github.com/atomicpages/sensored) | 0 | 0 | 요약 대기 · A free streaming-first open-source redaction toolit | 🆕 | 2026-09-27 |
| [chenjingdev/jev](https://github.com/chenjingdev/jev) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [codaaiteam/jev-computer-use](https://github.com/codaaiteam/jev-computer-use) | 0 | 0 | 요약 대기 · Gate any agent's actions (Claude Code / Codex / opencode / computer-use) with a typed, calibrated Jev safety decision. | 🆕 | 2026-09-26 |
| [conan-8/crazyAgent](https://github.com/conan-8/crazyAgent) | 0 | 1 | 요약 대기 · AI browser agent in a Chromium sidebar — full-CDP browser control, chat UI with markdown, safety gates, streaming agent loop | 🆕 | 2026-09-26 |
| [Dalaoyuan2020/android-notification-filter-demo](https://github.com/Dalaoyuan2020/android-notification-filter-demo) | 0 | 0 | 요약 대기 · Android notification filtering demo: local keyword rules, notification listener, and real-device test APKs. | 🆕 | 2026-09-27 |
| [deepansh-saxena/jev-voice-guardrail](https://github.com/deepansh-saxena/jev-voice-guardrail) | 0 | 0 | 요약 대기 · Relay Guardrail Lab: a local Azure Realtime voice guardrail prototype comparing TypeSafe Jev and structured-output LLM judges. | 🆕 | 2026-09-25 |
| [Donnaclarkk981/donnaclarkk981.github.io](https://github.com/Donnaclarkk981/donnaclarkk981.github.io) | 0 | 0 | 요약 대기 · Compare LLM-native structured output vs. TypeSafe Jev on latency, cost, and judgment quality. | 🆕 | 2026-09-27 |
| [eddiedunn/jev-feed-filter](https://github.com/eddiedunn/jev-feed-filter) | 0 | 0 | 요약 대기 · Filter news and YouTube feeds: drop paywalls, strong slant, Shorts and livestreams, using the Jev model | 🆕 | 2026-09-27 |
| [Enhso/iw](https://github.com/Enhso/iw) | 0 | 0 | 요약 대기 · Intelligence Workbench: as-of evidence corpus and analytical briefings | 🆕 | 2026-09-25 |
| [finrod21/jev-transaction-guard](https://github.com/finrod21/jev-transaction-guard) | 0 | 0 | 요약 대기 · Autonomous settlement circuit breaker protecting ledgers against CVE/RCE balance bypasses, nocturnal draining, and prompt injection attacks using TypeSafe Jev. | 🆕 | 2026-09-20 |
| [fr3akX/systemone-mail-filter](https://github.com/fr3akX/systemone-mail-filter) | 0 | 0 | 요약 대기 · After-queue Postfix spam classification with TypeSafe Jev, subject tagging, and recipient-scoped filtering. | 🆕 | 2026-09-26 |
| [gbesse/jev-bocc-impact](https://github.com/gbesse/jev-bocc-impact) | 0 | 0 | 요약 대기 · Map French collective-agreement changes to reviewable payroll and HR impacts, filtered by exact IDCC. | 🆕 | 2026-09-27 |
| [gbesse/jev-rappel-pro](https://github.com/gbesse/jev-rappel-pro) | 0 | 0 | 요약 대기 · Screen product catalogs against French RappelConso recalls with exact GTIN matching and reviewable semantic fallbacks. | 🆕 | 2026-09-27 |
| [gbesse/jev-workflow](https://github.com/gbesse/jev-workflow) | 0 | 0 | 요약 대기 · Decision contracts, adversarial testing, tracing, stability, and privacy controls for TypeSafe Jev | 🆕 | 2026-09-25 |
| [gbesse/mariadb-jev](https://github.com/gbesse/mariadb-jev) | 0 | 0 | 요약 대기 · Semantic SQL predicates for MariaDB powered by TypeSafe Jev | 🆕 | 2026-09-26 |
| [gbesse/pinot-jev](https://github.com/gbesse/pinot-jev) | 0 | 0 | 요약 대기 · Semantic SQL predicates for Apache Pinot powered by TypeSafe Jev | 🆕 | 2026-09-26 |
| [gbesse/strapi-plugin-jev-review](https://github.com/gbesse/strapi-plugin-jev-review) | 0 | 0 | 요약 대기 · Strapi 5 editorial review and publish guard powered by TypeSafe Jev | 🆕 | 2026-09-26 |
| [ghubnab99/jev-enterprise-decision-fabric](https://github.com/ghubnab99/jev-enterprise-decision-fabric) | 0 | 0 | 요약 대기 · Architecture for running many semantic decisions through one validated path, with a labelled 111-case benchmark comparing TypeSafe Jev against a Claude baseline, and a dashboard for inspecting any single decision. Experimental, not production. | 🆕 | 2026-09-20 |
| [gomasy/mastodon-spam-checker](https://github.com/gomasy/mastodon-spam-checker) | 0 | 0 | 요약 대기 · LLM-powered Mastodon spam detector with Redis cursor tracking and interactive Slack moderation | 🆕 | 2026-09-27 |
| [Goooooooooody/pith](https://github.com/Goooooooooody/pith) | 0 | 0 | 요약 대기 · Get to the pith of a failing CI run before it floods Claude's context. Claude Code plugin + zero-dependency CLI: CI-link summaries, ! pith for pastes, paste guard. | 🆕 | 2026-09-27 |
| [hamzaahmadaslam/fedi-report-triage](https://github.com/hamzaahmadaslam/fedi-report-triage) | 0 | 0 | 요약 대기 · Reads the open reports on a Mastodon server with a moderator's own read-only token and prints them as a queue sorted by severity, using TypeSafe's Jev model. It never takes a moderation action. | 🆕 | 2026-09-26 |
| [Helicon1968/tb-spam-guard](https://github.com/Helicon1968/tb-spam-guard) | 0 | 0 | 요약 대기 · Thunderbird add-on that flags phishing mail impersonating Japanese organizations. Optional TypeSafe Jev support. | 🆕 | 2026-09-26 |
| [HiveScaleSystems/jev-guard](https://github.com/HiveScaleSystems/jev-guard) | 0 | 0 | 요약 대기 · AI chat moderation for Minecraft (Paper/Folia) and Hytale servers, powered by TypeSafe's Jev model. Works with the TypeSafe API or Cloudflare AI Gateway. | 🆕 | 2026-09-26 |
| [JakeTheRabbit/HA-Crop-Steering-Jev](https://github.com/JakeTheRabbit/HA-Crop-Steering-Jev) | 0 | 0 | 요약 대기 · Crop Steering, Jev edition: the HA crop-steering engine with TypeSafe Jev judging every decision across P0-P3, probes, shots, salt and alerts, inside a deterministic safety envelope. | 🆕 | 2026-09-27 |
| [javimp2003/laya-guardrails](https://github.com/javimp2003/laya-guardrails) | 0 | 0 | 요약 대기 · Guardrails de input, tool call y output para agentes de IA con un modelo System One tipo Jev (laya-pt-es-typed) autoalojado en una NVIDIA L4: 5 ms por check frente a 140 ms de un LLM-as-a-judge. | 🆕 | 2026-09-26 |
| [jourdanlabs/assay-001](https://github.com/jourdanlabs/assay-001) | 0 | 0 | 요약 대기 · ASSAY-001: independent, pre-registered verification of TypeSafe Jev's calibration and type-safety claims. Split verdict, published in full. | 🆕 | 2026-09-21 |
| [JovenWu/JejakPeluang](https://github.com/JovenWu/JejakPeluang) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [koller-nexus/invoice-ocr-front](https://github.com/koller-nexus/invoice-ocr-front) | 0 | 0 | 요약 대기 · Invoice OCR Nextjs | 🆕 | 2026-09-25 |
| [Luminousyyh/laya-decide](https://github.com/Luminousyyh/laya-decide) | 0 | 0 | 요약 대기 · A DeepSeek Harness skill that gates file and command actions on a local LAYA System-1 decision model. | 🆕 | 2026-09-25 |
| [manhua-man/jev-pilot-reflex](https://github.com/manhua-man/jev-pilot-reflex) | 0 | 0 | 요약 대기 · Three.js Autonomous Driving Reflex &amp; AI Safety Brake Simulator powered by TypeSafe Jev System 1/2 Dual-Brain Architecture | 🆕 | 2026-09-24 |
| [manish-9245/Wayfinder](https://github.com/manish-9245/Wayfinder) | 0 | 0 | 요약 대기 · Doubt, as a service: one HTTP call turns any text in 100+ languages into a calibrated act/review/escalate/block verdict. Stateless gateway over laya. | 🆕 | 2026-09-27 |
| [mjyoke1111/jev-lab](https://github.com/mjyoke1111/jev-lab) | 0 | 0 | 요약 대기 · Real browser-agent safety evaluation: Jev versus a baseline on benign and injected tasks | 🆕 | 2026-09-26 |
| [MorganOnCode/jev-gram](https://github.com/MorganOnCode/jev-gram) | 0 | 0 | 요약 대기 · N-gram NSFW detection + AI-prose heatmaps judged by TypeSafe Jev (JEVATHON 2026) | 🆕 | 2026-09-26 |
| [mpeddicord/jev-tab-filter](https://github.com/mpeddicord/jev-tab-filter) | 0 | 0 | 요약 대기 · Chrome extension: group, hide, or close tabs by theme, scored by TypeSafe's Jev model | 🆕 | 2026-09-26 |
| [MSR2012/ems](https://github.com/MSR2012/ems) | 0 | 0 | 요약 대기 · Email management system | 🆕 | 2026-09-27 |
| [Muriel-Gasparini/ban4life](https://github.com/Muriel-Gasparini/ban4life) | 0 | 0 | 요약 대기 · Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense. | 🆕 | 2026-09-25 |
| [naufalhilmiaji/sooth](https://github.com/naufalhilmiaji/sooth) | 0 | 0 | 요약 대기 · Claim-by-claim fact-checking for AI output, designed for CI. PASS/FAIL/REVIEW with calibrated probabilities and source evidence. | 🆕 | 2026-09-26 |
| [neostryder/mercury](https://github.com/neostryder/mercury) | 0 | 0 | 요약 대기 · Semantic email filtering for rpgm.tools - Loremaster-reviewed spam/phishing triage via ForwardEmail webhooks | 🆕 | 2026-09-27 |
| [neozhu/jev-audit](https://github.com/neozhu/jev-audit) | 0 | 0 | 요약 대기 · AI-powered contract comparison with Jev atomic evaluations—spot substantive changes, filter OCR noise, and generate reviewable audit reports. | 🆕 | 2026-09-25 |
| [NISH1001/reflex-guard](https://github.com/NISH1001/reflex-guard) | 0 | 0 | 요약 대기 · Guardrails built with jev-like models (jev, laya, etc.) | 🆕 | 2026-09-26 |
| [oppih/approval-judge-bridge](https://github.com/oppih/approval-judge-bridge) | 0 | 0 | 요약 대기 · OpenAI-compatible judge endpoint for agent approval gates: typed judgements (Jev), any OpenAI-compatible model, or a rule file — fail-closed, calibrated, with a replay battery | 🆕 | 2026-09-21 |
| [pratikpakhale/jevx](https://github.com/pratikpakhale/jevx) | 0 | 0 | 요약 대기 · Bring-your-own-key Chrome extension that filters your X timeline with TypeSafe Jev | 🆕 | 2026-09-25 |
| [ReneGucci94/jev-scout-filter](https://github.com/ReneGucci94/jev-scout-filter) | 0 | 0 | 요약 대기 · Filtro previo de candidatos de minidrama. Jev decide antes del scrape. | 🆕 | 2026-09-26 |
| [rhithesh/youtube-focus](https://github.com/rhithesh/youtube-focus) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [rohitdevade/topiclens-for-youtube](https://github.com/rohitdevade/topiclens-for-youtube) | 0 | 0 | 요약 대기 · A smart, continuous topic filter for YouTube powered by Jev. | 🆕 | 2026-09-27 |
| [romannekrasovaillm/qwen-code-jev-gate](https://github.com/romannekrasovaillm/qwen-code-jev-gate) | 0 | 0 | 요약 대기 · Jev-class decision model as stage-0 gate in the Qwen Code permission flow: ADRs, architecture spine, delta spec, pilot results | 🆕 | 2026-09-27 |
| [s-0-a-r/typesafe-eval](https://github.com/s-0-a-r/typesafe-eval) | 0 | 0 | 요약 대기 · Fast, typed multi-dimensional document evaluation CLI powered by TypeSafe System One (Jev). | 🆕 | 2026-09-28 |
| [semanticpolicy/semantic-policy](https://github.com/semanticpolicy/semantic-policy) | 0 | 0 | 요약 대기 · SemanticPolicy adds testable semantic decisions to .NET applications: rules a decision model answers, measured on labelled examples, for business logic and AI agents, with no lock-in to one provider. | 🆕 | 2026-09-27 |
| [shibammitra24/jev-guard](https://github.com/shibammitra24/jev-guard) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [Shivamowo/tug-of-words](https://github.com/Shivamowo/tug-of-words) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [Swanand58/session-guard](https://github.com/Swanand58/session-guard) | 0 | 0 | 요약 대기 · Warn before Claude Code sessions get expensive; hand over to a fresh session | 🆕 | 2026-09-27 |
| [thesyedyahya/llev](https://github.com/thesyedyahya/llev) | 0 | 0 | 요약 대기 · Open-source Jev alternative: self-hosted System One decision engine. Typed answers (choice / score / yes-no / multi) with calibrated confidence from a small local LLM via llama.cpp. | 🆕 | 2026-09-26 |
| [thy10086/ros2-resilience-guardian](https://github.com/thy10086/ros2-resilience-guardian) | 0 | 0 | 요약 대기 · Mission-aware zero-trust ROS 2 resilience guardian with a local security dashboard | 🆕 | 2026-09-27 |
| [tx-smitht/jev-focus-guard](https://github.com/tx-smitht/jev-focus-guard) | 0 | 0 | 요약 대기 · Jev Focus Guard: a local Chrome extension that asks Jev (System One) whether page elements are ads or distractions, then hides them. | 🆕 | 2026-09-26 |
| [uditakankananonononono/meemee](https://github.com/uditakankananonononono/meemee) | 0 | 0 | 요약 대기 · Meemee: Udita's own autonomous agent platform | 🆕 | 2026-09-27 |
| [uditakankananonononono/sugarcode-ai](https://github.com/uditakankananonononono/sugarcode-ai) | 0 | 0 | 요약 대기 · Sugarcode AI | 🆕 | 2026-09-27 |
| [VaibhavBhandari2999/jev-plays-snake](https://github.com/VaibhavBhandari2999/jev-plays-snake) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [vstrofago/vigia](https://github.com/vstrofago/vigia) | 0 | 0 | 요약 대기 · Moderating live-stream chat in real time (ES/EN) | 🆕 | 2026-09-26 |
| [xreedev/hoichoi-hackathon](https://github.com/xreedev/hoichoi-hackathon) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [yodablocks/duckdb-jev](https://github.com/yodablocks/duckdb-jev) | 0 | 0 | 요약 대기 · Semantic ORDER BY for DuckDB, backed by TypeSafe AI's Jev model. Ships with independent calibration numbers. | 🆕 | 2026-09-22 |
| [Zapaia/que-modelo-uso](https://github.com/Zapaia/que-modelo-uso) | 0 | 0 | 요약 대기 · Type what you want to build; Jev picks the AI models that fit, from a 3D pile of 186. Webflow × Nerdearla App Showcase 2026. | 🆕 | 2026-09-28 |
| [aigauravsingh-star/jevrails](https://github.com/aigauravsingh-star/jevrails) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [omataak/jev-guardrail-demo](https://github.com/omataak/jev-guardrail-demo) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [thechristobal/llm-roundtable](https://github.com/thechristobal/llm-roundtable) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |

### y0usaf/pi-jev

<details><summary>README 발췌</summary>

TypeSafe Jev as a decision layer for the Pi coding agent.

</details>

### realZachi/typesafe-adblock

<details><summary>README 발췌</summary>

A Chrome extension (Manifest V3) that spots ads on any website in real time and pops their DOM elements out of the page. The semantic call, "is this element an ad?", is made by TypeSafe AI's System One model Jev. Everything else is plain code.

</details>

### MillionSend/millionsend

<details><summary>README 발췌</summary>

Self-host on your own AWS SES, or use the hosted cloud. Resend-compatible API — migrating means changing two environment variables, not rewriting your integration.

</details>

### leepokai/jev-guard

<details><summary>README 발췌</summary>

Claude Code's auto mode is described as: "A separate classifier model reviews actions before they run, blocking anything that escalates beyond your request, targets unrecognized infrastructure, or appears driven by hostile content Claude read." That is exactly the job jev-guard does — as three typed

</details>

### qkal/Canny

<details><summary>README 발췌</summary>

A supervision layer for AI coding agents. It hooks into Claude Code and Codex CLI, keeps a ledger of what the agent actually did, and will not let it finish on a claim.

</details>

### keltokhy/jgrep

<details><summary>README 발췌</summary>

grep, but the pattern is a description.

</details>

### brainstormity/Jev-Moderation-Bot

<details><summary>README 발췌</summary>

A Discord moderation bot built with Python and TypeSafe AI (Jev System One). It filters spam and scam links in real time, escalates offenses automatically, and lets moderators profile members based on their message history.

</details>

### Nyarlathoteppppp/pi-heed

<details><summary>README 발췌</summary>

Your agent understood your instruction. pi-heed makes sure it still remembers.

</details>

### aurorainfra/grev

<details><summary>README 발췌</summary>

Unix filters that ask questions instead of matching patterns.

</details>

### kiwi0719/jev-edge

<details><summary>README 발췌</summary>

Typed-judgment admission control at the traffic edge.

</details>

### zhangcy122/OpenJev

<details><summary>README 발췌</summary>

&gt; The High-Throughput Deterministic Decision Engine for AI Agents &gt; Turn slow, expensive, prompt-biased LLM calls (&gt;1.5s, $0.02/call) into sub-35ms, strictly typed, calibrated, 100% order-invariant decision primitives (Choice , Noul, Score). Features a self-evolving "Explore First, Crystallize Later

</details>

### mizchi/jev-test-filter

<details><summary>README 발췌</summary>

jev-test-filter reads a git diff, asks a model how much that change can alter the outcome of every single test in the repository, and prints the filter arguments your test runner already understands. It hands those arguments to the runner you already use — vitest, jest, node --test, bun test, Playwr

</details>

### shiftynick/jev-axi

<details><summary>README 발췌</summary>

A second opinion for coding agents, in half a second. jev-axi is a CLI for TypeSafe's Jev, a model that never writes text — it answers typed questions with calibrated probabilities, in about 400ms for a few thousandths of a cent. That makes it cheap enough to put in front of every command your agent

</details>

### adamnroman/slop-filter

<details><summary>README 발췌</summary>

The goal of this project is to collectively pursue an internet without having to sift through slop. It doesn't end at posts on X or comments on Reddit. It also means blocking bot accounts, YouTube and TikTok videos with AI-generated scripts, and whatever comes next.

</details>

### AskTheWay/dsh-jev-interceptor

<details><summary>README 발췌</summary>

&gt; ⚡ Millisecond judgement for every tool call and every recalled message — for about two millionths of a dollar each. &gt; &gt; Your agent's most expensive habits: asking a poetry-writing LLM yes/no questions, and amputating your context by age. This plugin wires Jev — the non-generative "System One" mode

</details>

### ilyamk/jev-gmail-ai-spam-filter-and-labeling

<details><summary>README 발췌</summary>

Semantic email classification powered by Jev, with confidence-aware automation, cost controls, and no jevMail-operated backend.

</details>

### TypeSafeAI/jev-harness

<details><summary>README 발췌</summary>

A research-stage proposal-review contract: an LLM proposes one action, Jev answers four narrow questions, and code produces evidence for a host to consider. Nothing here applies a patch, executes proposed code, or grants permission.

</details>

### pengchujin/ad-radar

<details><summary>README 발췌</summary>

开源的浏览器插件（Chrome / Edge），在小红书、微博、X、知乎的网页版上：

</details>

### ethanplusai/jev-chat-for-twitch

<details><summary>README 발췌</summary>

A Chrome extension that adds a second chat column showing only the Twitch messages worth reading.

</details>

### behavioral-sh/behavioral

<details><summary>README 발췌</summary>

A behavioral agent harness. The engine is an in-process behavioral-programming interpreter; capability faculties run as processes behind one faculty event wire; hosts drive the runtime through a ui egress/ingress vocabulary; and validation lives in guard threads whose rejects are visible in the trac

</details>

### harshithsunku/learn-jev-end-to-end

<details><summary>README 발췌</summary>

Learn Jev end to end is a free, hands-on course. In 12 short notebooks you go from "what is Jev?" to building 13 real AI tools with it: an email triage job, a scam-text detector, a code vulnerability hunter, an agent safety guard and more. You need one API key, and running the whole course costs les

</details>

### andrelandgraf/safer-with-jev

<details><summary>README 발췌</summary>

Public showcases of TypeSafe Jev judgments. TypeSafe Jev inspects the body, then optionally forwards the same bytes to a caller-chosen HTTPS URL.

</details>

### amithgc/local-jev

<details><summary>README 발췌</summary>

A local, offline System One server. Software that needs a decision rather than prose (which queue, how severe, is this spam) sends a piece of text and some typed questions, and gets back a choice, a score or a yes/no, each with a probability for every possible answer. local-jev speaks exactly the wi

</details>

### dark-hxx/jev-safety-gateway

<details><summary>README 발췌</summary>

&gt; 语言 / Language：简体中文 ｜ English

</details>

### jesset/pi-verdict

<details><summary>README 발췌</summary>

pi-verdict is a minimal permission gate for pi, inspired by Claude Code's auto mode: every tool call gets checked before it runs — allow, deny, or ask you first.

</details>

### AkashPriyadarshii/jev-git

<details><summary>README 발췌</summary>

Support: fuel the next build — [](https://buymeacoffee.com/AkashPriyadarshi)

</details>

### CodeAlive-AI/mastra-jev-moderation

<details><summary>README 발췌</summary>

Input moderation for Mastra agents on TypeSafe Jev: one file, one request per turn, no text to parse.

</details>

### qs-lll/twitter-jev-guard

<details><summary>README 발췌</summary>

使用 TypeSafe Jev 在 X/Twitter 时间线上识别低质量、垃圾和推广帖子，并在帖子文字区域显示醒目的半透明水印。

</details>

### ranjan2829/AskJev

<details><summary>README 발췌</summary>

Talk to Claude in plain English. AskJev drives Brave/Chrome. TypeSafe Jev decides on-page. Guard freezes irreversible clicks.

</details>

### AbdelStark/heist-one

<details><summary>README 발췌</summary>

An observable stealth game where Jev supplies guards' split-second judgments while deterministic code remains in control of the world.

</details>

### jackie-cqz/dsh-jev-plugin

<details><summary>README 발췌</summary>

A plugin that lets DeepSeek Harness (DSH) agents use TypeSafe Jev (System One) for typed decisions.

</details>

### Nyarlathoteppppp/pi-jev-context

<details><summary>README 발췌</summary>

Less noise. Original evidence within reach.

</details>

### ItisShikhar/gg-friggin-ez

<details><summary>README 발췌</summary>

Fast. Cheap. Catches the friggin crap.

</details>

### ufec/jev-block-android-ad

<details><summary>README 발췌</summary>

An Android noise gate for notifications and SMS.

</details>

### EugeneBoondock/jevsql

<details><summary>README 발췌</summary>

For exact totals over large or encrypted datasets, use the streaming money API. It reads bounded batches and sums decimal values by currency without sending money arithmetic to a model.

</details>

### Arpit-Khandelwal/jev-linkedin-slop-filter

<details><summary>README 발췌</summary>

Judges every LinkedIn post as it scrolls into view and slams a rubber stamp on it — BAIT, CORP, or BRAG — with the confidence score printed on the stamp. The post stays readable underneath.

</details>

### h0j5bz0adh0-stack/jev-pilot

<details><summary>README 발췌</summary>

&gt; Fast System-1 Decision, Arbitration &amp; Safety Engine for Autonomous AI Agents &gt; Brings sub-second, zero-hallucination intuition to Claude, GPT, Gemini, Llama, Hermes, and custom agent runtimes.

</details>

### maayanlevy/mysql-ailike

<details><summary>README 발췌</summary>

A native MySQL plugin for filtering rows and comparing text columns with natural-language conditions, powered by TypeSafe Jev.

</details>

### pavy23/morning-tech-briefing

<details><summary>README 발췌</summary>

Every morning at 08:00 KST this project collects the day's top global news in AI · XR · space · robotics and emails ten of them as an HTML briefing with a card layout.

</details>

### Reindeer-AI/pi-jev-guard

<details><summary>README 발췌</summary>

A Pi extension that checks proposed code edits against Markdown rules using TypeSafe Jev. It reviews the proposed content before Pi writes it and returns the exact instruction text and source line range for each detected violation.

</details>

### smthdagg/XShield

<details><summary>README 발췌</summary>

开源的 X 评论区 AI 反垃圾扩展 —— 黄推 / 诈骗 / 纯广告 / 人机，一律看得见地挡在门外

</details>

### transitive-bullshit/doom-or-bloom

<details><summary>README 발췌</summary>

How will AI change our future? Explore the range of views on AI, then map your own thoughts through a few open-ended questions. No specialist knowledge or account required. All free and open source.

</details>

### VeridicalTech/Edward

<details><summary>README 발췌</summary>

The supervisor for coding agents that run when nobody's watching.

</details>

### chengyongru/notiq

<details><summary>README 발췌</summary>

A native Android notification filter, guided by your rules.

</details>

### fazlerocks/jev-adblock

<details><summary>README 발췌</summary>

Bring your own TypeSafe AI key. Everything else runs in your browser.

</details>

### godspede/construct-auto-classifier

<details><summary>README 발췌</summary>

&gt; Universal, effect-based safety gate and command classifier for AI coding assistants, deciding with TypeSafe's Jev or any chat LLM. &gt; Supports Google Antigravity (agy), OpenCode, and external agent harnesses.

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

### noelzappy/tripwire

<details><summary>README 발췌</summary>

Judge every LLM response before the user sees it. Seven checks in one ~100 ms call to TypeSafe's Jev, cheap enough to run on 100% of traffic instead of sampling 1% with a frontier judge.

</details>

### ziyacivan/jev-mail-filter

<details><summary>README 발췌</summary>

Gmail filters you write in plain English. Jev reads every new email and labels, stars, archives it, turns it into a to-do, or flags it as phishing. Every morning it sends you a digest, and it reminds you about emails you sent that are still waiting on a reply.

</details>

### 0xArx/jevegis

<details><summary>README 발췌</summary>

Open source. MIT licensed. Live at https://jevegis.vercel.app. SDK/CLI: https://github.com/0xArx/jevegis-sdk

</details>

### 24601/rh-guard

<details><summary>README 발췌</summary>

RH Guard (rh-guard) sits in coding-agent hooks (Claude Code, Cursor, Codex, Grok Build, Pi, Amp, Prime Agent, DeepSeek Harness) and blocks reward-hacking tool use—tampering with graders, hidden tests, or the eval process—while steering toward checks the agent cannot game. Exo is support via ToolRunt

</details>

### bitnovus/jev-spam-eval

<details><summary>README 발췌</summary>

TypeSafe’s Jev reached 98.64% accuracy on a 5,733-email ham/spam/phishing test using written category definitions and email context, without task-specific fine-tuning or labeled examples in its requests. A TF-IDF logistic regression classifier trained on roughly 4,600 labeled messages per fold reach

</details>

### ClemensSchartmueller/jev-guard

<details><summary>README 발췌</summary>

High-speed, cross-agent safety gate plugin for Claude Code, Codex CLI, and Antigravity.

</details>

### davertor/jev-slop-guard

<details><summary>README 발췌</summary>

A Chrome extension that stands between you and the slop on X and LinkedIn.

</details>

### lgy1027/jevshield

<details><summary>README 발췌</summary>

Framework-agnostic decision control for AI Agent routing and tool execution, powered by Jev (System-1 Models).

</details>

### littlewindy123/jev-bili-filter

<details><summary>README 발췌</summary>

四个开关：剧透 / 反串黑 / 广告 / 基本盘。还想屏蔽什么，写一句话，点「添加」。在 B 站原页面过滤评论和普通文字弹幕。

</details>

### opaielsheikh/typesafe-migration-guard

<details><summary>README 발췌</summary>

&gt; "Built for production workflows, not just toy demos."

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

### coo-quack/jev-pii-checker

<details><summary>README 발췌</summary>

CLI for scanning text and files for PII using TypeSafe's Jev model, regex patterns, and word segmentation.

</details>

### dr-dimitru/claude-jev-plugin

<details><summary>README 발췌</summary>

claude-jev adds TypeSafe Jev semantic judgments to Claude Code tool execution.

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

### NorbertBodziony/guard-jev

<details><summary>README 발췌</summary>

Text moderation demo: one TypeSafe systemOne call screens 7 Noul hazards + 1 severity Score in parallel. Verdict computed in code via policy thresholds.

</details>

### satyawikananda/gits

<details><summary>README 발췌</summary>

Gits is an open-source browser extension for user-initiated local-business lead research on Google Maps. Configure a niche, location, keywords and filters, review qualified leads and export them to CSV.

</details>

### tinystruct/tinystruct-typesafe-sdk

<details><summary>README 발췌</summary>

Language: English | Português (Brasil) | 简体中文 | 繁體中文 | 日本語 | 한국어 | Türkçe | Русский | Tiếng Việt | ไทย | Deutsch | Español

</details>

### Tom-R-Main/Footwork

<details><summary>README 발췌</summary>

A verified computer-use agent, for the browser and for native macOS apps. Footwork puts a cheap, calibrated guard from TypeSafe Jev in front of whoever drives: every claimed completion is checked against observed state and the trajectory before it counts, every irreversible action passes a gate, and

</details>

### 0x963D/last-exit

<details><summary>README 발췌</summary>

One gate. One good lie. There is something alive in your cargo. Convince the inspector there isn't.

</details>

### 48Nauts-Operator/skill-dash

<details><summary>README 발췌</summary>

Judge a tree of Claude Code and Codex skills with Jev, TypeSafe's typed-judgment model. One row per skill, one question per row: keep, rewrite, merge or delete. Also the pipeline behind whichskills.dev, a public census of 18,041 skills from the 200 most-starred repos.

</details>

### 4rays/profanity-checker

<details><summary>README 발췌</summary>

A Cloudflare Worker that checks text and usernames for profanity using TypeSafe's Jev (typesafe/jev on Workers AI).

</details>

### abhaybhargav/juardrails

<details><summary>README 발췌</summary>

A Go guardrails management service for TypeSafe Jev. Jev produces typed, probabilistic decisions quickly, and Juardrails batches a policy's questions into one provider call before applying explicit rules. Define Choice, Score, and Noul questions in a visual builder or YAML, then use the same policie

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

### copyleftdev/jev-labs

<details><summary>README 발췌</summary>

Never confidently wrong. A consensus kernel around a probabilistic oracle, tested the way you would test a database: model-checked in TLA+, contract-generated into Rust, and run through 1,680 simulated pharmacy decisions under seeded chaos against the live Jev API.

</details>

### DolphinMiner/jev-rss

<details><summary>README 발췌</summary>

English · 简体中文 · Contributing

</details>

### edwardyen724-g/jev-compactor

<details><summary>README 발췌</summary>

jev-compactor is an open-source TypeScript library, CLI and MCP server that reduces an AI agent's context window without summarizing it. It keeps the original messages byte for byte, drops the ones TypeSafe's Jev judges irrelevant to the current goal, and catches destructive commands such as rm -rf 

</details>

### FrancyJGLisboa/decision-system-forge

<details><summary>README 발췌</summary>

One-page explainer (PDF, editable SVG). The Forge compiles source material into evidence-backed semantic judgments, legal action surfaces, and an evaluated runtime. Semantic judgments inform action selection but never authorize actions; deterministic code owns legality, policy, and execution.

</details>

### h1code2/jev-x-blocker

<details><summary>README 발췌</summary>

&gt; A Chrome extension that detects and blocks porn tweets (黄推) on Twitter / X with &gt; TypeSafe's Jev model — narrow-question rubric, code-composed score, local cache.

</details>

### JGalego/Jevs-Garage

<details><summary>README 발췌</summary>

A workshop full of small, inspectable experiments for TypeSafe System One models. Each bay gives Jev a realistic state, asks typed questions, and lets ordinary Python policy decide what happens next.

</details>

### JH3lou/GridCue

<details><summary>README 발췌</summary>

&gt; Ask a dense grid a plain question. See the view that answers it.

</details>

### jiawei686/jev-screen-mcp

<details><summary>README 발췌</summary>

&gt; Content-moderation gate as a single-purpose MCP tool, powered by Jev (TypeSafe's System One decision model). One MCP, one job.

</details>

### kiarina/labs

<details><summary>README 발췌</summary>

Small, independent projects for experiments, research, and investigations.

</details>

### kurihada/pi-jev-permit

<details><summary>README 발췌</summary>

The single place in pi where Jev (TypeSafe's System One decision model) is used: one core and one consumer — a permission gate that judges every bash / write / edit call before it runs.

</details>

### lambertsj/beatjev

<details><summary>README 발췌</summary>

A human vs. TypeSafe's Jev in a 25-round spam-or-not reaction race. Each round has a 3-2-1 countdown. When it hits zero, the message appears, your timer starts, and the page asks Jev the same question, all on the same tick. After 25 rounds, a results screen compares speed and accuracy and gives you 

</details>

### makefinks/jev-feed-filter

<details><summary>README 발췌</summary>

https://github.com/user-attachments/assets/8faee26b-6bc4-4f80-a820-e11cedfeb643

</details>

### naturalmoods/epeszuro

<details><summary>README 발췌</summary>

Chrome-bővítmény, amely a TypeSafe Jev modelljével átnézi a YouTube-hozzászólásokat és az élő chat üzeneteit. A súlyos gyűlölködést iratmegsemmisítő animációval eltünteti, a trágár vagy sértő szöveget elhomályosítja, a gúnyt pedig megjelöli. Az eredeti hozzászólás kattintással bármikor megnézhető.

</details>

### neddes/sloppy-jevs-extension

<details><summary>README 발췌</summary>

An open-source Chrome extension that blurs AI-generated prose and ads with Jev by TypeSafe.

</details>

### ohernandezdev/jevmod

<details><summary>README 발췌</summary>

Moderation for communities and apps: every message gets a probability for spam, scam, harassment, nsfw, off-topic, self-harm, doxxing, sexual content involving minors, and for rules you write in plain English. You set the thresholds and the actions. Every decision is logged with its numbers.

</details>

### pjrpjr/qingliu

<details><summary>README 발췌</summary>

黄框标出垃圾账号 → 一键原生拉黑 → 手机端同步消失。 外加一个 用实测标定过阈值 的 AI 判定层。

</details>

### rudra72r/jev-guard

<details><summary>README 발췌</summary>

alt="jev-guard — guardrails for LLM apps, every input and output checked in 70–500 ms" width="100%"&gt;

</details>

### serejkaaa512/jev-content-guard-ext

<details><summary>README 발췌</summary>

A Manifest V3 browser extension that filters out fraud, advertising, AI slop, spam, clickbait, "info-gypsy" schemes, and toxicity on any web page, and extracts &amp; highlights core key words from selections or whole pages — powered by the TypeSafe Jev AI content analysis API.

</details>

### ShupingR/scam-shield

<details><summary>README 발췌</summary>

Checks a text message for scam signals with TypeSafe's Jev model, then turns those signals into an explainable verdict with rules you control.

</details>

### sperictao/dsh-auto-review-jev

<details><summary>README 발췌</summary>

@dsh-external/dsh-auto-review-jev gives DeepSeek Harness's Auto permission preset a per-tool-call authorization review powered by TypeSafe Jev.

</details>

### taman-spirit/guardrail-chatbot-jev

<details><summary>README 발췌</summary>

Content safety for AI chatbots: check what the user sends, check what your bot replies, and get back one clear decision you can act on.

</details>

### tpaulshippy/shady-town

<details><summary>README 발췌</summary>

A social-deduction party game for the living room TV. Humans play, the TV moderates.

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

### BasmaAbouzied0/jev-secret-guard

<details><summary>README 발췌</summary>

A Claude Code hook that stops your agent from writing, committing or sending secrets. Known key formats are blocked instantly on your machine. Unknown ones go to Jev (TypeSafe's System One model), masked, so checking for a leak never causes one.

</details>

### caiovicentino/jev-risk-check-provider

<details><summary>README 발췌</summary>

An x402 risk-check provider that scores agent counterparties with Jev — TypeSafe AI's System One model for typed decisions — and issues ES256-signed attestations that facilitators and resource servers can verify independently.

</details>

### cyu60/floodgate

<details><summary>README 발췌</summary>

You decide what flows in. An open Jev, trained on River AI, that stands between you and every page you open

</details>

### prestonkakukdev/Jev-Defense

<details><summary>README 발췌</summary>

A security guard for AI agents, powered by Jev. It stops dangerous tool calls before they run, strips prompt injection out of what agents read, and checks skills and rule files for hidden instructions.

</details>

### SoniaMehta14/paved-gate

<details><summary>README 발췌</summary>

A fast "System 1" ingestion gate for AI agent architectures.

</details>

### 7starsseeker/dsh-jev-guard

<details><summary>README 발췌</summary>

&gt; English | 简体中文 | Changelog | Design decisions | Measurements

</details>

### Abhieu/excelpilot

<details><summary>README 발췌</summary>

An AI Excel operations engine that treats a spreadsheet as a system to be changed safely, not a document to be edited.

</details>

### Abhishekfm/JevCheck

<details><summary>README 발췌</summary>

Extract a CSV, Excel, PDF or PNG/JPEG file and let TypeSafe Jev decide whether it is valid: no PII, no sexually explicit content, well-formed, and of acceptable quality.

</details>

### Abhishekvrshny/jevexec

<details><summary>README 발췌</summary>

Command guard for Codex and Claude Code. It checks actions locally first, then uses Jev through OpenRouter for uncertain actions. It returns allow, ask, or deny decisions; it does not run the checked command.

</details>

### acarbone/PII-Detector

<details><summary>README 발췌</summary>

&gt; Status: implemented. All tasks in specs/tasks.md are done. The first measured results are in Results.

</details>

### affirmitv/bitrate-advisor

<details><summary>README 발췌</summary>

Encoder settings for a live stream, decided from telemetry and history, in 300 ms for $0.00005.

</details>

### Argona7/vibecoding-god-setup

<details><summary>README 발췌</summary>

One chat runs the whole setup. You talk only to your Grok Bot Lead. Lead plans and tests, Claude Code with Opus 5.5 writes the code on Lead's cloud computer, and Jev makes the small yes-or-no decisions.

</details>

### AryanVerma-av/resume-analyser-upgraded

<details><summary>README 발췌</summary>

A fast, cost-effective two-stage Resume Analyzer built with TypeSafe System One (Jev) for low-latency candidate screening and Groq for in-depth job-resume fit analysis.

</details>

### atomicpages/sensored

<details><summary>README 발췌</summary>

A streaming-first PII redaction library for TypeScript. Detects and redacts sensitive data with 129 regex detectors, optional NER, and AI-powered semantic confirmation.

</details>

### chenjingdev/jev

<details><summary>README 발췌</summary>

semantic if. TypeSafe의 판단 모델 Jev를 평범한 제어문처럼 쓴다.

</details>

### codaaiteam/jev-computer-use

<details><summary>README 발췌</summary>

A tiny starter that puts a Jev safety gate in front of any agent that acts on your machine — Claude Code, OpenAI Codex, opencode, or a computer-use loop (Claude Computer Use / OpenAI Operator / Gemini Computer Use).

</details>

### conan-8/crazyAgent

<details><summary>README 발췌</summary>

A Chromium (Manifest V3) extension whose side panel hosts an AI agent that operates your real browser to complete web tasks ("find the cheapest X and add it to cart", "fill this form", "summarize my open tabs"). It runs in two control modes behind one adapter interface:

</details>

### Dalaoyuan2020/android-notification-filter-demo

<details><summary>README 발췌</summary>

后端 Jev 管长期判断，手机本地管短时注意力。 当前主程序 v0.4.0 提供首页、消息、智能判断、我的四页纸面界面，以及四幕首次使用教程；沿用 v0.3.0 的 SystemOne 概率判断、本地衰减记忆和最多三路对照：先获得模型保留概率 pjev，再用近期真实行为计算 pfinal。

</details>

### deepansh-saxena/jev-voice-guardrail

<details><summary>README 발췌</summary>

A real-provider voice guardrail lab for fictional Relay subscription support. React/TypeScript/Vite frontend, Node/TypeScript backend, native Azure OpenAI Realtime speech-to-speech, TypeSafe Jev and a separately configured structured-output LLM judge. There is no simulated session mode or production

</details>

### Donnaclarkk981/donnaclarkk981.github.io

<details><summary>README 발췌</summary>

A single-file, self-contained portfolio site (index.html). No build step, no dependencies to install.

</details>

### eddiedunn/jev-feed-filter

<details><summary>README 발췌</summary>

Filters news and YouTube feeds and writes one static page, out/index.html, with a News tab and a YouTube tab.

</details>

### Enhso/iw

<details><summary>README 발췌</summary>

Given a research question, the system fetches source documents, filters and extracts a structured research graph from them, stores that graph in a bitemporal (as-of-queryable) corpus, and renders an 11-section analytical briefing from it. See docs/prd.md (Section 9, Knowledge Representation, and Sec

</details>

### finrod21/jev-transaction-guard

<details><summary>README 발췌</summary>

A cybersec policy enforcement engine and behavioral anomaly detector powered by TypeSafe AI's Jev (~typesafe/jev-latest).

</details>

### fr3akX/systemone-mail-filter

<details><summary>README 발췌</summary>

A Go after-queue Postfix filter using TypeSafe Jev. Spam gets a configurable Subject prefix (default [SPAM]); all messages continue through normal delivery. Message category and independent abuse probabilities are available in headers and JSON logs. There is no spam rejection, quarantine, or deletio

</details>

### gbesse/jev-bocc-impact

<details><summary>README 발췌</summary>

Map French collective-agreement changes to reviewable payroll and HR impacts, filtered by exact IDCC.

</details>

### gbesse/jev-rappel-pro

<details><summary>README 발췌</summary>

Screen product catalogs against French RappelConso recalls with exact GTIN matching and reviewable semantic fallbacks.

</details>

### gbesse/jev-workflow

<details><summary>README 발췌</summary>

Decision contracts, adversarial testing, flight recording, temporal stability, and privacy controls for TypeSafe Jev.

</details>

### gbesse/mariadb-jev

<details><summary>README 발췌</summary>

Native MariaDB functions for semantic predicates backed by TypeSafe Jev. One row can carry up to eight natural-language conditions in one Jev request. This is an initial open-source release, not a claim of state-of-the-art throughput or accuracy.

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

### gomasy/mastodon-spam-checker

<details><summary>README 발췌</summary>

An LLM-powered spam detector for Mastodon instances. It fetches newly federated remote accounts through the Mastodon Admin API, asks an OpenAI-compatible LLM whether each account looks like spam, and reports detections to Slack. Each notification carries a Suspend button so a moderator can act strai

</details>

### Goooooooooody/pith

<details><summary>README 발췌</summary>

Get to the pith of a failing CI run before it floods Claude's context.

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

### JakeTheRabbit/HA-Crop-Steering-Jev

<details><summary>README 발췌</summary>

Automatic watering for a grow room, run by Home Assistant, with an AI second opinion on every judgement call.

</details>

### javimp2003/laya-guardrails

<details><summary>README 발췌</summary>

Un check de seguridad en 5 ms en vez de 140 ms. Guardrails de input, tool call y output para agentes de IA con laya-pt-es-typed, un modelo System One tipo Jev que devuelve probabilidades tipadas, no texto.

</details>

### jourdanlabs/assay-001

<details><summary>README 발췌</summary>

Verdict: on CLINC150, Jev's chosen-option probabilities were calibrated (ECE 0.0204); on Banking77 they were not (ECE 0.0936, systematically overconfident). Across 8,576 responses there were zero type errors. Full write-up: https://donttrustme.ai/assay-001.html

</details>

### JovenWu/JejakPeluang

<details><summary>README 발췌</summary>

JejakPeluang adalah pemeriksa sumber berbasis AI dan katalog peluang beasiswa, magang, serta lomba untuk pelajar Indonesia. Tempel tautan atau unggah poster, lalu dalam kurang dari semenit JejakPeluang mencari halaman resmi penerbit dan menunjukkan data mana yang cocok dan mana yang berbeda, lengkap

</details>

### koller-nexus/invoice-ocr-front

<details><summary>README 발췌</summary>

This is a Next.js project bootstrapped with create-next-app.

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

### mjyoke1111/jev-lab

<details><summary>README 발췌</summary>

A small, reproducible browser-agent safety harness. A configurable generative model proposes actions. Jev (typesafe-ai/jev through Vercel AI Gateway) selects the next action and makes a separate typed safety judgment. Playwright supplies fixed benign and prompt-injected pages. The dashboard reads on

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

### Muriel-Gasparini/ban4life

<details><summary>README 발췌</summary>

Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense.

</details>

### naufalhilmiaji/sooth

<details><summary>README 발췌</summary>

LLMs generate. Sooth verifies.

</details>

### neostryder/mercury

<details><summary>README 발췌</summary>

Mercury is an intelligent email-filtering pipeline that sits in front of a mailbox. Authenticated deterministic sender lists make final accept, defer, or bounce decisions for known senders without a model call. All other messages receive a semantic spam/phishing/legitimacy verdict from an LLM. The p

</details>

### neozhu/jev-audit

<details><summary>README 발췌</summary>

See what changed. Understand what matters. Review with confidence.

</details>

### NISH1001/reflex-guard

<details><summary>README 발췌</summary>

Multi-label guardrails on "System One" decision models (Laya and GLiNER2.5-Decide today; Von and TypeSafe Jev planned). Each category gets its own score in [0, 1]; modes can be combined with | (any), &amp; (all) or votes=k.

</details>

### oppih/approval-judge-bridge

<details><summary>README 발췌</summary>

An OpenAI-compatible endpoint that answers an agent's approval-guardian call with a judged verdict — APPROVE, DENY, or ESCALATE. Four judges behind one interface: a typed judgement model (Jev), any OpenAI-compatible chat model, a self-hosted Jev-style classify judge, or a deterministic rule file. It

</details>

### pratikpakhale/jevx

<details><summary>README 발췌</summary>

A Chrome extension that cleans up your X timeline. You describe what you don't want to see in plain English, and TypeSafe's Jev model checks each post against your rules. You use your own API key, and nothing goes through a JevX server.

</details>

### ReneGucci94/jev-scout-filter

<details><summary>README 발췌</summary>

Filtro para shorts de minidrama (TikTok, Reels, YouTube Shorts) antes de scrapear o regenerar. Jev elige una acción y el programa la traduce a KEEP, SKIPDUPLICATE, DROP o HOLD.

</details>

### rhithesh/youtube-focus

<details><summary>README 발췌</summary>

A Chrome extension that blurs YouTube videos, X posts and LinkedIn posts that are clickbait, spam, or irrelevant to goals you write yourself. Hover one and the blur lifts so you can read it and click through. Judgement comes from TypeSafe's Jev, a System One model: you hand it state plus typed quest

</details>

### rohitdevade/topiclens-for-youtube

<details><summary>README 발췌</summary>

TopicLens is a Chrome Manifest V3 extension that filters YouTube continuously including cards loaded during infinite scrolling and in-page navigation—using two topic lists:

</details>

### romannekrasovaillm/qwen-code-jev-gate

<details><summary>README 발췌</summary>

Исследовательский проект: дискриминативная decision-модель (класс Jev / System One) как stage-0 в гейте разрешений кодинг-агента — вместо дорогой генеративной модели на каждом решении «можно ли выполнить этот вызов инструмента».

</details>

### s-0-a-r/typesafe-eval

<details><summary>README 발췌</summary>

Fast, typed, multi-dimensional document evaluation CLI powered by the TypeSafe System One API (model: jev-1.13.0).

</details>

### semanticpolicy/semantic-policy

<details><summary>README 발췌</summary>

SemanticPolicy adds testable semantic decisions to .NET applications.

</details>

### shibammitra24/jev-guard

<details><summary>README 발췌</summary>

Coding agents like the Antigravity agent don't just suggest code anymore — they run shell commands, edit and delete files, fetch URLs, and drive a real browser, autonomously and by default. That's what makes them useful, and it's also what makes one bad plan (or one prompt injection hidden in a READ

</details>

### Shivamowo/tug-of-words

<details><summary>README 발췌</summary>

A 2-minute tug of war played in chat. Every message is a move, and TypeSafe Jev judges each one live (~100ms). Pixel/synthwave look, chiptune music and sound effects, room codes, 1v1 up to 5v5.

</details>

### Swanand58/session-guard

<details><summary>README 발췌</summary>

Stops Claude Code sessions from quietly getting expensive.

</details>

### thesyedyahya/llev

<details><summary>README 발췌</summary>

Self-hosted "System One" decision engine. Send any text or JSON plus typed questions, and get back typed answers with probabilities and a calibrated confidence score in about 150–500 ms, from a small LLM running on your own hardware.

</details>

### thy10086/ros2-resilience-guardian

<details><summary>README 발췌</summary>

面向 Webots/ROS 2 机器人的任务感知零信任安全韧性守护器。项目基于 RobResilience 的实验思想，加入攻击事件验证、攻击生命周期、动态风险评估、缓解重规划和独立安全状态机。

</details>

### tx-smitht/jev-focus-guard

<details><summary>README 발췌</summary>

A local, unpacked Chrome extension that asks Jev (System One) whether likely page elements are ads or distractions, then hides only the elements Jev confidently marks for removal.

</details>

### uditakankananonononono/meemee

<details><summary>README 발췌</summary>

Monitor deadline guard (2026-09-27): explicit timezone and positive fire budgets are validated, and both stores normalize evaluation timestamps to UTC; 5 targeted SQLite monitor tests passed. PostgreSQL live behavior and the full suite were not rerun. See monitor time guards.

</details>

### uditakankananonononono/sugarcode-ai

<details><summary>README 발췌</summary>

Current honest status: see STATUS.md - what is verified, thin, and Missing, updated each push. The latest prior full-suite result was 2,279 passed / 1 failed; a narrow guard fix now passes 39 targeted tests, but a fresh full-suite result is pending.

</details>

### VaibhavBhandari2999/jev-plays-snake

<details><summary>README 발췌</summary>

An experimental HTML5 Canvas implementation of Snake driven entirely by TypeSafe's JEV System One decision model via OpenRouter.

</details>

### vstrofago/vigia

<details><summary>README 발췌</summary>

Español · Website · Docs · Playground

</details>

### xreedev/hoichoi-hackathon

<details><summary>README 발췌</summary>

BreakSense analyses a long-form OTT episode, finds every moment that is safe and natural for an ad break, and matches each break to the most relevant brand from a catalogue. It emits a VMAP 1.0.1 / VAST 4.2 manifest that a video player can consume directly, along with a full-featured browser UI.

</details>

### yodablocks/duckdb-jev

<details><summary>README 발췌</summary>

DuckDB scalar functions over TypeSafe AI's Jev model, so unstructured text columns can be filtered and sorted like numeric ones.

</details>

### Zapaia/que-modelo-uso

<details><summary>README 발췌</summary>

Type what you want to build. From a pile of 243 AI models, the ones that fit rise and line up in a row, classified in a couple of seconds by Jev, TypeSafe's System One model.

</details>

### aigauravsingh-star/jevrails

<details><summary>README 발췌</summary>

JevRails is a hybrid security guardrails library for LLM applications.

</details>

### omataak/jev-guardrail-demo

<details><summary>README 발췌</summary>

Jevを使った、テキスト入力のガードレール実装例です。

</details>

### thechristobal/llm-roundtable

<details><summary>README 발췌</summary>

A desktop app that puts ChatGPT, Claude, and Gemini in a moderated debate — and grades them on the way out.

</details>
