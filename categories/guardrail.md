# 🛡️ 가드레일·모더레이션 (178)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 148 | 11 | **무엇** Pi 코딩 에이전트의 도구 호출과 출력 결과를 TypeSafe Jev API로 검사하고 제어하는 확장 도구다.<br>**판단** 명령의 파괴성·데이터 유출·범위 초과·피해 수준과 출력의 비밀정보 누출·실패 유형을 noul, score, choice로 판단한다.<br>**포인트** 도구 실행 전 게이트 판단을 한 번의 요청(약 300ms)으로 처리하며, 오류 발생 시 실행을 차단하지 않는 fail-open 방식으로 동작한다. | ✅ 🆕 `choice` `noul` `score` | 2026-09-25 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | 85 | 7 | **무엇** 웹페이지 내 DOM 요소를 탐색해 TypeSafe Jev 모델의 판단에 따라 광고 요소를 실시간으로 제거하는 크롬 확장 프로그램이다.<br>**판단** 추출된 각 DOM 후보 요소의 태그, 클래스, 텍스트 요약 등을 바탕으로 유료 광고(paid advertisement)인지 여부를 noul 확률 질문으로 판단시킨다.<br>**포인트** 광고 후보 선별과 배치는 순수 코드로 처리하고 시맨틱 판별만 Jev에 일괄 요청하며, 설정된 임계 확률을 넘기면 애니메이션과 함께 요소를 제거한다. | ✅ 🆕 `noul` | 2026-09-17 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 42 | 5 | **무엇** 다양한 코딩 에이전트의 도구 호출과 결과를 검사해 위험한 명령과 프롬프트 인젝션을 차단하는 보안 훅 라이브러리다.<br>**판단** 도구 호출의 위험도(risk), 사용자 요청 부합 여부(user_requested), 신뢰할 수 없는 출처 기반 여부(from_untrusted)를 질의해 판단한다.<br>**포인트** 외부 의존성 없이 Claude Code, Cursor 등 여러 에이전트에 thin 어댑터로 연결되며 도구 실행 전후 및 인스트럭션 파일을 검사한다. | ✅ 🆕 | 2026-09-24 |
| [qkal/Canny](https://github.com/qkal/Canny) | 98 | 11 | **무엇** Claude Code와 Codex CLI에서 코딩 에이전트가 검증 절차 없이 작업을 마쳤다고 주장하지 못하게 감시하는 훅 도구이다.<br>**판단** 에이전트 메시지가 작업 완료를 주장하는지, 변경된 diff가 특정 규칙을 위반했는지 여부를 예/아니오 확률로 판단시킨다.<br>**포인트** 런타임 의존성이 없고, 원장의 사실 기록만 작업을 차단할 수 있으며 Jev의 판단 결과는 차단 없이 에이전트의 컨텍스트 조언으로만 사용된다. | 🆕 | 2026-09-22 |
| [keltokhy/jgrep](https://github.com/keltokhy/jgrep) | 125 | 3 | 요약 대기 · grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line. | 🆕 | 2026-09-25 |
| [merefield/discourse-chatbot](https://github.com/merefield/discourse-chatbot) | 84 | 20 | 요약 대기 · An AI bot with RAG capability for Topics, Chat &amp; Customer Support in Discourse, currently powered by OpenAI | 🆕 | 2026-09-25 |
| [brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) | 48 | 6 | **무엇** Discord 서버 관리자가 스팸·피싱 링크를 차단하고 멤버 성향을 분석하기 위해 사용하는 Python 기반 모더레이션 봇이다.<br>**판단** 실시간 메시지의 스팸 및 피싱 링크 여부와 유저 최근 메시지의 사기 위험·스팸·초보성·유해성·도움 수준 점수를 판별한다.<br>**포인트** 오탐된 메시지를 사면하면 안전 선례로 저장해 추후 검사에 반영하는 동적 학습 및 SQLite 기반 캐싱을 지원한다. | 🆕 | 2026-09-22 |
| [Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) | 9 | 1 | **무엇** pi 코딩 에이전트의 부작용 도구 호출이 사용자의 자연어 제약 조건에 어긋나는지 실행 전 점검·차단하는 런타임 제약 가드레일이다.<br>**판단** 사용자 발화마다 기존 정책의 변경 상태(KEEP, LIFT, NARROW 등)와 작업 허가 신호 여부를 Jev에 분류시킨다.<br>**포인트** Jev는 좁은 범위의 유한 선택지 분류만 수행하며, 규칙 상태를 세션 단위 구조적 op로 영속화해 컴팩션 후 재질의 없이 복원한다. | ✅ 🆕 `choice` `noul` | 2026-09-19 |
| [aurorainfra/grev](https://github.com/aurorainfra/grev) | 39 | 1 | 요약 대기 · Thinking coreutils | 🆕 | 2026-09-24 |
| [kiwi0719/jev-edge](https://github.com/kiwi0719/jev-edge) | 37 | 1 | 요약 대기 · Typed-judgment admission control at the traffic edge: three-layer prompt-injection and abuse filter for nginx/OpenResty, powered by TypeSafe Jev. Fail-open, cached, hot-reloadable. | 🆕 | 2026-09-27 |
| [zhangcy122/OpenJev](https://github.com/zhangcy122/OpenJev) | 33 | 4 | 요약 대기 · Self-evolving cognitive decision engine &amp; TypeSafe Jev alternative. Deliberative decision flywheel ('explore first, crystallize later' System 2→1) with 100% option-order invariance. Typed probabilistic API (Choice, Noul, Score) for Open LLMs, Laya (ModernBERT), &amp; commercial Jev with calibrated logprobs and adaptive safety guards. | 🆕 | 2026-09-26 |
| [mizchi/jev-test-filter](https://github.com/mizchi/jev-test-filter) | 28 | 1 | 요약 대기 · Score every test against a git diff with Jev, and emit the filter arguments vitest, node:test, Playwright, cargo test and go test already understand | 🆕 | 2026-09-24 |
| [tomascupr/reelql](https://github.com/tomascupr/reelql) | 27 | 1 | 요약 대기 · Give your agent eyes: any video link in, one typed JSON out. A Claude skill + API. | 🆕 | 2026-09-25 |
| [patxibocos/poetimizely](https://github.com/patxibocos/poetimizely) | 23 | 1 | 요약 대기 · Generate Kotlin type safe accessors for Optimizely experiments and features | 🆕 | 2026-09-26 |
| [shiftynick/jev-axi](https://github.com/shiftynick/jev-axi) | 23 | 4 | 요약 대기 · Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell | 🆕 | 2026-09-24 |
| [AskTheWay/dsh-jev-interceptor](https://github.com/AskTheWay/dsh-jev-interceptor) | 21 | 1 | 요약 대기 · ⚡ Millisecond System-1 judgement for every tool call in DeepSeek Harness — Jev-powered risk classification &amp; evidence-gated auto-approval. Fail-closed by construction. dsh 生态第一个 System-1 决策插件 | 🆕 | 2026-09-25 |
| [ilyamk/jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling) | 21 | 4 | 요약 대기 · Self-hosted AI email classifier for Gmail powered by Jev. Create custom labels, organize your inbox, and filter spam with confidence and cost controls. | 🆕 | 2026-09-19 |
| [pengchujin/ad-radar](https://github.com/pengchujin/ad-radar) | 20 | 4 | 요약 대기 · 开源浏览器插件：在小红书、微博、X、知乎上按关键词和博主折叠内容；用你自己的 Jev API key 识别广告、AI、军事、政治等话题。 | 🆕 | 2026-09-22 |
| [TypeSafeAI/jev-harness](https://github.com/TypeSafeAI/jev-harness) | 20 | 5 | 요약 대기 · A custom coding harness for TypeSafe AI's Jev: an LLM proposes, Jev answers narrow questions, code decides, every step leaves a receipt. | 🆕 | 2026-09-26 |
| [ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch) | 13 | 0 | 요약 대기 · Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension | 🆕 | 2026-09-19 |
| [backmeupplz/jev_antispam_bot](https://github.com/backmeupplz/jev_antispam_bot) | 11 | 2 | 요약 대기 · Minimal grammY Telegram anti-spam bot powered by TypeSafe Jev | 🆕 | 2026-09-27 |
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
| [IzumiSatoshi/vox-arcana](https://github.com/IzumiSatoshi/vox-arcana) | 7 | 1 | 요약 대기 · Voice-cast magic arena game. Speak or type incantations, powered by Jev, with local interpretation options. | 🆕 | 2026-09-27 |
| [ufec/jev-block-android-ad](https://github.com/ufec/jev-block-android-ad) | 7 | 0 | 요약 대기 · JevNoiseGate filters unwanted notifications and SMS on Android. Rather than   matching keywords, an LLM decides what's noise — and only what it explicitly   flags is blocked. Verification codes are matched on-device and never uploaded;   anything uncertain passes through. | 🆕 | 2026-09-19 |
| [EugeneBoondock/jevsql](https://github.com/EugeneBoondock/jevsql) | 6 | 1 | 요약 대기 · SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded. | 🆕 | 2026-09-19 |
| [Arpit-Khandelwal/jev-linkedin-slop-filter](https://github.com/Arpit-Khandelwal/jev-linkedin-slop-filter) | 5 | 1 | 요약 대기 · Slams a BAIT, CORP or BRAG stamp onto LinkedIn engagement-bait, judged live by Jev (TypeSafe System One). | 🆕 | 2026-09-22 |
| [h0j5bz0adh0-stack/jev-pilot](https://github.com/h0j5bz0adh0-stack/jev-pilot) | 5 | 0 | 요약 대기 · Fast System-1 Decision, Arbitration &amp; Safety Engine for Autonomous AI Agents (Powered by TypeSafe Jev) | 🆕 | 2026-09-23 |
| [maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | 5 | 0 | 요약 대기 · Natural-language row filtering for MySQL, powered by TypeSafe Jev. | 🆕 | 2026-09-20 |
| [Reindeer-AI/pi-jev-guard](https://github.com/Reindeer-AI/pi-jev-guard) | 5 | 0 | 요약 대기 · Check Pi code edits against repository Markdown rules with TypeSafe Jev | 🆕 | 2026-09-24 |
| [smthdagg/XShield](https://github.com/smthdagg/XShield) | 5 | 0 | 요약 대기 · XShield — Fight Spam, Scams, Bots, and Adult-Content Accounts on X.  Automatically detect, collect, review, and safely block malicious accounts with a powerful rule engine and human-like execution strategy. | 🆕 | 2026-09-25 |
| [transitive-bullshit/doom-or-bloom](https://github.com/transitive-bullshit/doom-or-bloom) | 5 | 0 | 요약 대기 · Doom or Bloom: map your AI worldview and compare it to others. | 🆕 | 2026-09-27 |
| [VeridicalTech/Edward](https://github.com/VeridicalTech/Edward) | 5 | 2 | 요약 대기 · The supervisor for coding agents that run when nobody's watching — deterministic guardrails + local semantic scorer + resumable interventions, every decision signed. | 🆕 | 2026-09-27 |
| [chengyongru/notiq](https://github.com/chengyongru/notiq) | 4 | 0 | 요약 대기 · Native Android notification filtering with natural-language rules, powered by Jev or self-hosted FastJev. | 🆕 | 2026-09-23 |
| [DataGobes/jev-demos](https://github.com/DataGobes/jev-demos) | 4 | 0 | 요약 대기 · Small, honest demos of TypeSafe's Jev inside tools data engineers already use | 🆕 | 2026-09-27 |
| [fazlerocks/jev-adblock](https://github.com/fazlerocks/jev-adblock) | 4 | 0 | 요약 대기 · Open-source AI ad blocker for Chrome. No filter lists: TypeSafe AI's Jev model decides what is an ad. Bring your own key. | 🆕 | 2026-09-22 |
| [godspede/construct-auto-classifier](https://github.com/godspede/construct-auto-classifier) | 4 | 0 | 요약 대기 · Effect-based safety gate for AI coding agents' shell commands (OpenCode, Antigravity): fast structural rules, then TypeSafe's Jev or a chat model judges what a command does. Certified with Jev at zero dangerous commands allowed. | 🆕 | 2026-09-25 |
| [jiangkoumo/ego-decision-layer](https://github.com/jiangkoumo/ego-decision-layer) | 4 | 0 | 요약 대기 · Pluggable decision layer for the ego lite browser: one System One (Jev) call per step replaces the per-step LLM turn, and the backend can be swapped for a local OpenAI-compatible model. Fail-closed execution guards. The measured one — raw bench data, 16 suites, changelog with corrections. | 🆕 | 2026-09-27 |
| [jkrup/jeveryword](https://github.com/jkrup/jeveryword) | 4 | 0 | 요약 대기 · Text extraction with Jev: field extraction, PII detection and exact quotes, built on TypeSafe's Jev. | 🆕 | 2026-09-20 |
| [MithrilMan/your-signal](https://github.com/MithrilMan/your-signal) | 4 | 1 | 요약 대기 · Open-source BYOK Chrome extension for personal, reversible X timeline filters. | 🆕 | 2026-09-18 |
| [noelzappy/tripwire](https://github.com/noelzappy/tripwire) | 4 | 0 | 요약 대기 · Judge every LLM response before the user sees it. AI SDK middleware and OpenAI-compatible proxy. | 🆕 | 2026-09-18 |
| [0xArx/jevegis](https://github.com/0xArx/jevegis) | 3 | 0 | 요약 대기 · Guardrails for LLM apps in one API call. Prompt injection, jailbreaks, leaks, unsafe content. Built on TypeSafe Jev. MIT. | 🆕 | 2026-09-18 |
| [24601/rh-guard](https://github.com/24601/rh-guard) | 3 | 0 | 요약 대기 · Reward-hack radar for coding agents: structural denies + TypeSafe Jev System One sidecar for Claude Code &amp; Cursor hooks | 🆕 | 2026-09-25 |
| [bitnovus/jev-spam-eval](https://github.com/bitnovus/jev-spam-eval) | 3 | 0 | 요약 대기 · Zero-shot spam filtering with TypeSafe Jev Noul questions, compared with TF-IDF baselines | 🆕 | 2026-09-18 |
| [ClemensSchartmueller/jev-guard](https://github.com/ClemensSchartmueller/jev-guard) | 3 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [davertor/jev-slop-guard](https://github.com/davertor/jev-slop-guard) | 3 | 0 | 요약 대기 · Jev Slop Guard — a Chrome extension that scores and stamps AI slop on your X and LinkedIn feeds as you scroll | 🆕 | 2026-09-22 |
| [devjothish/laya-forge](https://github.com/devjothish/laya-forge) | 3 | 0 | 요약 대기 · Fine-tune, calibrate and gate Laya (open-weights System One decision model) on your own decisions, then guard production agents with it | 🆕 | 2026-09-23 |
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
| [org2AI/wald-4b](https://github.com/org2AI/wald-4b) | 2 | 0 | 요약 대기 · Jev alternative &lt;12B SOTA | 🆕 | 2026-09-27 |
| [satyawikananda/gits](https://github.com/satyawikananda/gits) | 2 | 1 | 요약 대기 · Gits is a browser extension powered by Jev to search the leads data on the Google Maps | 🆕 | 2026-09-21 |
| [tinystruct/tinystruct-typesafe-sdk](https://github.com/tinystruct/tinystruct-typesafe-sdk) | 2 | 0 | 요약 대기 · A tinystruct-based TypeSafe SDK with JEV model. | 🆕 | 2026-09-24 |
| [Tom-R-Main/Footwork](https://github.com/Tom-R-Main/Footwork) | 2 | 1 | 요약 대기 · A verified browser agent: a cheap Jev guard (evidence-checked completions, a destructive gate) in front of any LLM browser driver, with Jev taking the mechanical steps in dual mode. Built on browser-use; every number pre-registered and measured. | 🆕 | 2026-09-26 |
| [0x963D/last-exit](https://github.com/0x963D/last-exit) | 1 | 0 | 요약 대기 · A cyberpunk border encounter powered by TypeSafe Jev. Bluff the guard. Inspect the receipts. | 🆕 | 2026-09-17 |
| [48Nauts-Operator/skill-dash](https://github.com/48Nauts-Operator/skill-dash) | 1 | 0 | 요약 대기 · Skill Dash uses Jev to judge Claude Code and Codex skills and plugins: usefulness, redundancy, clarity, duplicates, safety. Local dashboard plus the corpus pipeline behind whichskills.dev. MIT. | 🆕 | 2026-09-20 |
| [4rays/profanity-checker](https://github.com/4rays/profanity-checker) | 1 | 0 | 요약 대기 · Cloudflare Worker to check for profanity using TypeSafe Jev | 🆕 | 2026-09-20 |
| [allebee/jevgrep](https://github.com/allebee/jevgrep) | 1 | 0 | 요약 대기 · CLI that filters logs and text by meaning using plain-English yes/no questions and Jev probabilities. | 🆕 | 2026-09-21 |
| [Barneyjm/circuit](https://github.com/Barneyjm/circuit) | 1 | 1 | 요약 대기 · Open-weights System One models (text, images, audio) and the harness that trains and measures them: LoRA plus a pointer readout head, code-labeled data, calibration on the scoreboard. | 🆕 | 2026-09-25 |
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
| [kurihada/pi-jev-permit](https://github.com/kurihada/pi-jev-permit) | 1 | 0 | 요약 대기 · A Jev (TypeSafe System One) permission gate for the Pi coding agent: judges every bash / write / edit call before it runs | 🆕 | 2026-09-22 |
| [lambertsj/beatjev](https://github.com/lambertsj/beatjev) | 1 | 0 | 요약 대기 · try to beat jev | 🆕 | 2026-09-17 |
| [makefinks/jev-feed-filter](https://github.com/makefinks/jev-feed-filter) | 1 | 0 | 요약 대기 · Smart, dynamic AI filtering for X and YouTube feeds using Jev | 🆕 | 2026-09-19 |
| [mbsatimov/use-filters](https://github.com/mbsatimov/use-filters) | 1 | 0 | 요약 대기 · Headless, type-safe, URL-synced filter state management hook for React, Next.js, and TanStack Query | 🆕 | 2026-09-26 |
| [naturalmoods/epeszuro](https://github.com/naturalmoods/epeszuro) | 1 | 0 | 요약 대기 · Chrome-bővítmény: elrejti a gyűlölködő YouTube-hozzászólásokat és élőchat-üzeneteket a TypeSafe Jev modelljével. MIT. | 🆕 | 2026-09-26 |
| [neddes/sloppy-jevs-extension](https://github.com/neddes/sloppy-jevs-extension) | 1 | 0 | 요약 대기 · Open-source Chrome extension that filters AI-generated prose and ads with Jev | 🆕 | 2026-09-17 |
| [ohernandezdev/jevmod](https://github.com/ohernandezdev/jevmod) | 1 | 1 | 요약 대기 · Moderation for communities and apps, powered by Jev (TypeSafe): probabilities per category, thresholds you own. Discord/Telegram/Reddit bots, CLI, Python, npm, HTTP API, MCP. | 🆕 | 2026-09-25 |
| [pjrpjr/qingliu](https://github.com/pjrpjr/qingliu) | 1 | 1 | 요약 대기 · X 时间线清洁工 · FeedSieve(MIT) 衍生 · 带实测标定的 AI 判定层：误杀 0.7%，还能抓词库认不出的 47% | 🆕 | 2026-09-19 |
| [rick97julho/do-i-have-the-vram](https://github.com/rick97julho/do-i-have-the-vram) | 1 | 0 | 요약 대기 · 🔍 Estimate your VRAM needs for Hugging Face models in seconds without downloading, using only metadata for accurate results. | 🆕 | 2026-09-26 |
| [rudra72r/jev-guard](https://github.com/rudra72r/jev-guard) | 1 | 0 | 요약 대기 · Fast, cheap guardrails for LLM apps, powered by TypeSafe's Jev model | 🆕 | 2026-09-26 |
| [serejkaaa512/jev-content-guard-ext](https://github.com/serejkaaa512/jev-content-guard-ext) | 1 | 0 | 요약 대기 · Jev AI content guard Chrome extension | 🆕 | 2026-09-25 |
| [ShupingR/scam-shield](https://github.com/ShupingR/scam-shield) | 1 | 0 | 요약 대기 · Scam text message filter powered by TypeSafe's Jev model | 🆕 | 2026-09-13 |
| [sperictao/dsh-auto-review-jev](https://github.com/sperictao/dsh-auto-review-jev) | 1 | 0 | 요약 대기 · DeepSeek Harness plugin: per-tool-call Auto-permission review powered by TypeSafe Jev, with account usage and API-key management inline on its settings page | 🆕 | 2026-09-23 |
| [taman-spirit/guardrail-chatbot-jev](https://github.com/taman-spirit/guardrail-chatbot-jev) | 1 | 0 | 요약 대기 · Vietnam - Content safety guardrails for AI chatbots: input, output and conversation checks over one policy file with Jev  | 🆕 | 2026-09-26 |
| [tpaulshippy/shady-town](https://github.com/tpaulshippy/shady-town) | 1 | 0 | 요약 대기 · Shady Town: social-deduction party game for the living room TV, moderated by TypeSafe Jev | 🆕 | 2026-09-17 |
| [Umbylicus/umby-jev-stack](https://github.com/Umbylicus/umby-jev-stack) | 1 | 0 | 요약 대기 · Portable agent skill: TypeSafe Jev as a cheap code-review classifier (HTTP + optional jev-review MCP) | 🆕 | 2026-09-26 |
| [vkpdeveloper/mrsecret](https://github.com/vkpdeveloper/mrsecret) | 1 | 0 | 요약 대기 · Mr. Secret — blurs secrets &amp; PII on any page using TypeSafe AI Jev | 🆕 | 2026-09-17 |
| [prestonkakukdev/Jev-Defense](https://github.com/prestonkakukdev/Jev-Defense) | 0 | 0 | **무엇** AI 에이전트의 위험한 도구 호출 차단, 프롬프트 주입 감지 및 스킬 검사를 수행하는 TypeSafe Jev 기반 보안 가드레일 도구다.<br>**판단** 명령어가 데이터를 삭제하거나 덮어쓰는지, 외부로 데이터를 전송하는지, 사용자가 이를 명시적으로 요청했는지 등의 예/아니오 확률을 noul로 묻는다.<br>**포인트** Jev가 최종 결정을 내리지 않고 좁은 예/아니오 확률만 계산하며, 코드 하드룰과 rulebook.py의 명시적 조건문으로 allow·ask·block을 결정한다. | 🆕 | 2026-09-26 |
| [0xmdinc/jev-medical-bench](https://github.com/0xmdinc/jev-medical-bench) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [7starsseeker/dsh-jev-guard](https://github.com/7starsseeker/dsh-jev-guard) | 0 | 0 | 요약 대기 · DeepSeek Harness (DSH) 执行前安全阀门:bash/pwsh 真正执行前先经静态规则 + TypeSafe Jev 语义判定,破坏性操作按 允许/修正/拦截/上报人工 四态处置,含额度降级与审计日志。 | 🆕 | 2026-09-24 |
| [Abhieu/excelpilot](https://github.com/Abhieu/excelpilot) | 0 | 0 | 요약 대기 · AI-assisted Excel operations engine: structured planning, JEV decision support, deterministic policy and execution, verification, and an audit trail. | 🆕 | 2026-09-26 |
| [adelvillar1/dev-decisions](https://github.com/adelvillar1/dev-decisions) | 0 | 0 | 요약 대기 · Decision-model gates for git + ZCode workflows: scan secrets/PII, classify diffs with Jev/GLiNER/Decide, and log every decision to JSONL for calibration | 🆕 | 2026-09-26 |
| [affirmitv/bitrate-advisor](https://github.com/affirmitv/bitrate-advisor) | 0 | 0 | 요약 대기 · Live-stream encoder settings from telemetry and history: TypeSafe's Jev decision model inside a deterministic safety envelope. Deno, Node, edge runtimes. | 🆕 | 2026-09-18 |
| [Alifdaal/classroom-pulse](https://github.com/Alifdaal/classroom-pulse) | 0 | 0 | 요약 대기 · Live misconception radar for classrooms: students answer on their phones, TypeSafe Jev flags what the room gets wrong. | 🆕 | 2026-09-26 |
| [amazingjoe/pi-saver](https://github.com/amazingjoe/pi-saver) | 0 | 0 | 요약 대기 · Dynamic context filter for Pi Coder using Jev by TypeSafe to save up to 75%+ on context tokens. | 🆕 | 2026-09-20 |
| [AxelVincent/jevlibrary](https://github.com/AxelVincent/jevlibrary) | 0 | 0 | 요약 대기 · A curated directory of the Jev ecosystem — 1,000+ projects and resources | 🆕 | 2026-09-25 |
| [bulldra/google-alert-rss-proxy](https://github.com/bulldra/google-alert-rss-proxy) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [damian87x/jev-browser-use](https://github.com/damian87x/jev-browser-use) | 0 | 0 | 요약 대기 · Fast browser QA from Claude Code or pi: TypeSafe Jev picks every click via Jev Ultrafast, you supply text and the pass check. | 🆕 | 2026-09-27 |
| [damiensmith1/jev-gmail-filter](https://github.com/damiensmith1/jev-gmail-filter) | 0 | 0 | 요약 대기 · Filter Gmail with plain-English topics, powered by jevfilter and TypeSafe's Jev. | 🆕 | 2026-09-27 |
| [ehtan-smaltai/jev-desktop](https://github.com/ehtan-smaltai/jev-desktop) | 0 | 0 | 요약 대기 · Tell your Windows PC what to do in plain language. A fast desktop agent: UI Automation + TypeSafe Jev decisions + a small LLM for text. | 🆕 | 2026-09-26 |
| [finrod21/jev-transaction-guard](https://github.com/finrod21/jev-transaction-guard) | 0 | 0 | 요약 대기 · Autonomous settlement circuit breaker protecting ledgers against CVE/RCE balance bypasses, nocturnal draining, and prompt injection attacks using TypeSafe Jev. | 🆕 | 2026-09-20 |
| [gbesse/jev-bocc-impact](https://github.com/gbesse/jev-bocc-impact) | 0 | 0 | 요약 대기 · Map French collective-agreement changes to reviewable payroll and HR impacts, filtered by exact IDCC. | 🆕 | 2026-09-27 |
| [gbesse/jev-rappel-pro](https://github.com/gbesse/jev-rappel-pro) | 0 | 0 | 요약 대기 · Screen product catalogs against French RappelConso recalls with exact GTIN matching and reviewable semantic fallbacks. | 🆕 | 2026-09-27 |
| [gbesse/jev-workflow](https://github.com/gbesse/jev-workflow) | 0 | 0 | 요약 대기 · Decision contracts, adversarial testing, tracing, stability, and privacy controls for TypeSafe Jev | 🆕 | 2026-09-25 |
| [gbesse/mariadb-jev](https://github.com/gbesse/mariadb-jev) | 0 | 0 | 요약 대기 · Semantic SQL predicates for MariaDB powered by TypeSafe Jev | 🆕 | 2026-09-26 |
| [gbesse/pinot-jev](https://github.com/gbesse/pinot-jev) | 0 | 0 | 요약 대기 · Semantic SQL predicates for Apache Pinot powered by TypeSafe Jev | 🆕 | 2026-09-26 |
| [gbesse/saleor-jev-catalog-review](https://github.com/gbesse/saleor-jev-catalog-review) | 0 | 0 | 요약 대기 · Jev decision review for Saleor product webhooks | 🆕 | 2026-09-27 |
| [gbesse/strapi-plugin-jev-review](https://github.com/gbesse/strapi-plugin-jev-review) | 0 | 0 | 요약 대기 · Strapi 5 editorial review and publish guard powered by TypeSafe Jev | 🆕 | 2026-09-26 |
| [ghubnab99/jev-enterprise-decision-fabric](https://github.com/ghubnab99/jev-enterprise-decision-fabric) | 0 | 0 | 요약 대기 · Architecture for running many semantic decisions through one validated path, with a labelled 111-case benchmark comparing TypeSafe Jev against a Claude baseline, and a dashboard for inspecting any single decision. Experimental, not production. | 🆕 | 2026-09-20 |
| [GunaTeja777/typesafe-mario-ai](https://github.com/GunaTeja777/typesafe-mario-ai) | 0 | 0 | 요약 대기 · Real-time Super Mario game autonomously controlled by TypeSafe AI's "Jev" System One Decision Architecture. Features sub-100ms decision loops, live prompt &amp; probability telemetry, multi-provider support (OpenRouter Jev &amp; Groq LPUs), and an offline neural simulator. | 🆕 | 2026-09-25 |
| [hamzaahmadaslam/fedi-report-triage](https://github.com/hamzaahmadaslam/fedi-report-triage) | 0 | 0 | 요약 대기 · Reads the open reports on a Mastodon server with a moderator's own read-only token and prints them as a queue sorted by severity, using TypeSafe's Jev model. It never takes a moderation action. | 🆕 | 2026-09-26 |
| [Helicon1968/tb-spam-guard](https://github.com/Helicon1968/tb-spam-guard) | 0 | 0 | 요약 대기 · Thunderbird add-on that flags phishing mail impersonating Japanese organizations. Optional TypeSafe Jev support. | 🆕 | 2026-09-26 |
| [HiveScaleSystems/jev-guard](https://github.com/HiveScaleSystems/jev-guard) | 0 | 0 | 요약 대기 · AI chat moderation for Minecraft (Paper/Folia) and Hytale servers, powered by TypeSafe's Jev model. Works with the TypeSafe API or Cloudflare AI Gateway. | 🆕 | 2026-09-26 |
| [Holychung/jev-browser-lab](https://github.com/Holychung/jev-browser-lab) | 0 | 0 | 요약 대기 · Experiments with TypeSafe Jev + Browser Use (based on browser-use/jev-ultrafast, MIT) | 🆕 | 2026-09-25 |
| [iksnerd/verdict](https://github.com/iksnerd/verdict) | 0 | 0 | 요약 대기 · A System 1 for agents: fast, local typed judgments (yes/no, choice, score) with probabilities, from a fine-tuned Laya encoder on Apple Silicon. Answers, never acts. | 🆕 | 2026-09-27 |
| [inoued9d9/nyannyan-x](https://github.com/inoued9d9/nyannyan-x) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [itsmartinwho/apartment-hunter](https://github.com/itsmartinwho/apartment-hunter) | 0 | 0 | 요약 대기 · Rank NYC rentals from StreetEasy and Zillow with your own weights, TypeSafe Jev judgments, and photo checks. | 🆕 | 2026-09-25 |
| [JakeTheRabbit/HA-Crop-Steering-Jev](https://github.com/JakeTheRabbit/HA-Crop-Steering-Jev) | 0 | 0 | 요약 대기 · Crop Steering, Jev edition: the HA crop-steering engine with TypeSafe Jev judging every decision across P0-P3, probes, shots, salt and alerts, inside a deterministic safety envelope. | 🆕 | 2026-09-27 |
| [javimp2003/laya-guardrails](https://github.com/javimp2003/laya-guardrails) | 0 | 0 | 요약 대기 · Guardrails de input, tool call y output para agentes de IA con un modelo System One tipo Jev (laya-pt-es-typed) autoalojado en una NVIDIA L4: 5 ms por check frente a 140 ms de un LLM-as-a-judge. | 🆕 | 2026-09-26 |
| [JevForge/jev-cloud-cost-guardian](https://github.com/JevForge/jev-cloud-cost-guardian) | 0 | 0 | 요약 대기 · Evaluate cloud spend against a budget and gate CI with Jev (approve, warn, block, or review). | 🆕 | 2026-09-24 |
| [jourdanlabs/assay-001](https://github.com/jourdanlabs/assay-001) | 0 | 0 | 요약 대기 · ASSAY-001: independent, pre-registered verification of TypeSafe Jev's calibration and type-safety claims. Split verdict, published in full. | 🆕 | 2026-09-21 |
| [just-the-v/judge_rails](https://github.com/just-the-v/judge_rails) | 0 | 0 | 요약 대기 · Semantic judgments from TypeSafe Jev as self-maintaining ActiveRecord attributes: typed Noul, Choice and Score answers stored as indexable columns, with SQL scopes. | 🆕 | 2026-09-26 |
| [KodarenLinus/realtime-security-analysis-tool](https://github.com/KodarenLinus/realtime-security-analysis-tool) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [loserharsh/axiom](https://github.com/loserharsh/axiom) | 0 | 0 | 요약 대기 · Axiom:  a JEV-powered study planner that turns your syllabus, goals, and deadlines into a personalized, color-coded study schedule. | 🆕 | 2026-09-27 |
| [manhua-man/jev-pilot-reflex](https://github.com/manhua-man/jev-pilot-reflex) | 0 | 0 | 요약 대기 · Three.js Autonomous Driving Reflex &amp; AI Safety Brake Simulator powered by TypeSafe Jev System 1/2 Dual-Brain Architecture | 🆕 | 2026-09-24 |
| [manvendersingh21/agentgate](https://github.com/manvendersingh21/agentgate) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [markylaredo/myPets](https://github.com/markylaredo/myPets) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [max1874/open-computer-use](https://github.com/max1874/open-computer-use) | 0 | 0 | 요약 대기 · A macOS computer-use agent with a dynamic, indexed action space. No screenshots, no coordinates. A macOS port of browser-use/jev-ultrafast. | 🆕 | 2026-09-27 |
| [mdsaad23/llm_speed_test](https://github.com/mdsaad23/llm_speed_test) | 0 | 0 | 요약 대기 · Tests how fast an LLM responds for fast paced use cases | 🆕 | 2026-09-27 |
| [mpeddicord/jev-tab-filter](https://github.com/mpeddicord/jev-tab-filter) | 0 | 0 | 요약 대기 · Chrome extension: group, hide, or close tabs by theme, scored by TypeSafe's Jev model | 🆕 | 2026-09-26 |
| [Muriel-Gasparini/ban4life](https://github.com/Muriel-Gasparini/ban4life) | 0 | 0 | 요약 대기 · Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense. | 🆕 | 2026-09-25 |
| [naufalhilmiaji/sooth](https://github.com/naufalhilmiaji/sooth) | 0 | 0 | 요약 대기 · Claim-by-claim fact-checking for AI output, designed for CI. PASS/FAIL/REVIEW with calibrated probabilities and source evidence. | 🆕 | 2026-09-26 |
| [OmarAlaaeldein/jev-verifier-skill](https://github.com/OmarAlaaeldein/jev-verifier-skill) | 0 | 0 | 요약 대기 · Fast 'System One' reflex for reasoning LLMs: typed probabilistic second opinions from Jev via OpenCode Zen, with PII-minimizing state redaction. | 🆕 | 2026-09-21 |
| [oppih/approval-judge-bridge](https://github.com/oppih/approval-judge-bridge) | 0 | 0 | 요약 대기 · OpenAI-compatible judge endpoint for agent approval gates: typed judgements (Jev), any OpenAI-compatible model, or a rule file — fail-closed, calibrated, with a replay battery | 🆕 | 2026-09-21 |
| [plicara/articles](https://github.com/plicara/articles) | 0 | 0 | 요약 대기 · Code behind Plicara's published research articles | 🆕 | 2026-09-27 |
| [ReneGucci94/jev-scout-filter](https://github.com/ReneGucci94/jev-scout-filter) | 0 | 0 | 요약 대기 · Filtro previo de candidatos de minidrama. Jev decide antes del scrape. | 🆕 | 2026-09-26 |
| [rohitdevade/topiclens-for-youtube](https://github.com/rohitdevade/topiclens-for-youtube) | 0 | 0 | 요약 대기 · A smart, continuous topic filter for YouTube powered by Jev. | 🆕 | 2026-09-27 |
| [s-0-a-r/typesafe-eval](https://github.com/s-0-a-r/typesafe-eval) | 0 | 0 | 요약 대기 · Fast, typed multi-dimensional document evaluation CLI powered by TypeSafe System One (Jev). | 🆕 | 2026-09-27 |
| [sageri/agent-skills](https://github.com/sageri/agent-skills) | 0 | 0 | 요약 대기 · Agent Skills (SKILL.md) for Claude Code, Codex &amp; ZCode: fast browser automation with TypeSafe Jev, cross-model code review, pre-writing coach, Xiaohongshu/WeChat article to Markdown | 🆕 | 2026-09-26 |
| [semanticpolicy/semantic-policy](https://github.com/semanticpolicy/semantic-policy) | 0 | 0 | 요약 대기 · SemanticPolicy adds testable semantic decisions to .NET applications: rules a decision model answers, measured on labelled examples, for business logic and AI agents, with no lock-in to one provider. | 🆕 | 2026-09-27 |
| [serejkaaa512/jev-investment-forecast](https://github.com/serejkaaa512/jev-investment-forecast) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [Shalimov04/open-jev](https://github.com/Shalimov04/open-jev) | 0 | 0 | 요약 대기 · Distil a prompt into a small, fast, calibrated classifier. Typed decisions (choice/score/noul) with calibrated probabilities from a local LLM teacher, served at /v1/systemone. | 🆕 | 2026-09-27 |
| [smolnikov-k/rudecide](https://github.com/smolnikov-k/rudecide) | 0 | 0 | 요약 대기 · RuDecide: Russian benchmark for small typed-decision (System One) models - choice / score / yes-no | 🆕 | 2026-09-27 |
| [sokapil/jev-vs-llm-banking-demo](https://github.com/sokapil/jev-vs-llm-banking-demo) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [Srinivasa314/hn-comment-filter](https://github.com/Srinivasa314/hn-comment-filter) | 0 | 0 | 요약 대기 · Chrome extension that shows the Hacker News comments worth reading, scored by TypeSafe's Jev model | 🆕 | 2026-09-26 |
| [StanleyOneG/pi-jev-any-decision](https://github.com/StanleyOneG/pi-jev-any-decision) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [thechristobal/llm-roundtable](https://github.com/thechristobal/llm-roundtable) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [thesyedyahya/llev](https://github.com/thesyedyahya/llev) | 0 | 0 | 요약 대기 · Open-source Jev alternative: self-hosted System One decision engine. Typed answers (choice / score / yes-no / multi) with calibrated confidence from a small local LLM via llama.cpp. | 🆕 | 2026-09-26 |
| [thy10086/ros2-resilience-guardian](https://github.com/thy10086/ros2-resilience-guardian) | 0 | 0 | 요약 대기 · Mission-aware zero-trust ROS 2 resilience guardian with a local security dashboard | 🆕 | 2026-09-27 |
| [vincentlauriat/MailClassification.jev](https://github.com/vincentlauriat/MailClassification.jev) | 0 | 0 | 요약 대기 · Semantic classification of Outlook, Gmail and IMAP mailboxes with Jev (TypeSafe) — one category per message, preview by default, cost-capped, local. C# / .NET 10, MIT. | 🆕 | 2026-09-27 |
| [vstrofago/vigia](https://github.com/vstrofago/vigia) | 0 | 0 | 요약 대기 · Moderating live-stream chat in real time (ES/EN) | 🆕 | 2026-09-26 |
| [yahyashareef48/jev-shooter](https://github.com/yahyashareef48/jev-shooter) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [yodablocks/duckdb-jev](https://github.com/yodablocks/duckdb-jev) | 0 | 0 | 요약 대기 · Semantic ORDER BY for DuckDB, backed by TypeSafe AI's Jev model. Ships with independent calibration numbers. | 🆕 | 2026-09-22 |
| [zachlandes/jev-dialect-bias](https://github.com/zachlandes/jev-dialect-bias) | 0 | 0 | 요약 대기 · Reproducing Hofmann et al. (Nature 2024) dialect-prejudice probes on TypeSafe's Jev, including a content-moderation variant | 🆕 | 2026-09-25 |
| [Zapaia/que-modelo-uso](https://github.com/Zapaia/que-modelo-uso) | 0 | 0 | 요약 대기 · Type what you want to build; Jev picks the AI models that fit, from a 3D pile of 186. Webflow × Nerdearla App Showcase 2026. | 🆕 | 2026-09-25 |

### y0usaf/pi-jev

<details><summary>README 발췌</summary>

TypeSafe Jev as a decision layer for the Pi coding agent.

</details>

### realZachi/typesafe-adblock

<details><summary>README 발췌</summary>

A Chrome extension (Manifest V3) that spots ads on any website in real time and pops their DOM elements out of the page. The semantic call, "is this element an ad?", is made by TypeSafe AI's System One model Jev. Everything else is plain code.

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

### merefield/discourse-chatbot

<details><summary>README 발췌</summary>

This README is the canonical reference for installing, configuring, operating, and troubleshooting Chatbot.

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

### tomascupr/reelql

<details><summary>README 발췌</summary>

⭐ Star the repo (and Watch → Releases to hear about updates), and follow @tomcupr on X for launch news and tester keys.

</details>

### patxibocos/poetimizely

<details><summary>README 발췌</summary>

poetimizely is a library to generate type safe accessors for Optimizely experiments and features. Given a Project ID and a token it will generate classes for every experiment + variations and features + variables.

</details>

### shiftynick/jev-axi

<details><summary>README 발췌</summary>

A second opinion for coding agents, in half a second. jev-axi is a CLI for TypeSafe's Jev, a model that never writes text — it answers typed questions with calibrated probabilities, in about 400ms for a few thousandths of a cent. That makes it cheap enough to put in front of every command your agent

</details>

### AskTheWay/dsh-jev-interceptor

<details><summary>README 발췌</summary>

&gt; ⚡ Millisecond judgement for every tool call and every recalled message — for about two millionths of a dollar each. &gt; &gt; Your agent's most expensive habits: asking a poetry-writing LLM yes/no questions, and amputating your context by age. This plugin wires Jev — the non-generative "System One" mode

</details>

### ilyamk/jev-gmail-ai-spam-filter-and-labeling

<details><summary>README 발췌</summary>

Semantic email classification powered by Jev, with confidence-aware automation, cost controls, and no jevMail-operated backend.

</details>

### pengchujin/ad-radar

<details><summary>README 발췌</summary>

开源的浏览器插件（Chrome / Edge），在小红书、微博、X、知乎的网页版上：

</details>

### TypeSafeAI/jev-harness

<details><summary>README 발췌</summary>

A research-stage proposal-review contract: an LLM proposes one action, Jev answers four narrow questions, and code produces evidence for a host to consider. Nothing here applies a patch, executes proposed code, or grants permission.

</details>

### ethanplusai/jev-chat-for-twitch

<details><summary>README 발췌</summary>

A Chrome extension that adds a second chat column showing only the Twitch messages worth reading.

</details>

### backmeupplz/jev_antispam_bot

<details><summary>README 발췌</summary>

A minimal grammY Telegram bot that asks TypeSafe's Jev model whether each group message is spam and deletes only high-confidence matches.

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

### IzumiSatoshi/vox-arcana

<details><summary>README 발췌</summary>

A browser FPS magic game where you fight AI opponents or another player by speaking incantations or typing spells. Your words go through the Web Speech API, then Jev (TypeSafe's System One decision model) turns them into a procedurally generated spell: an element, a form, and a dozen continuous para

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

### DataGobes/jev-demos

<details><summary>README 발췌</summary>

Small, self-contained demos of TypeSafe's Jev, a System One model that returns typed judgments (probabilities, choices, scores) instead of generated text. Each demo puts Jev inside a tool data and analytics engineers already use, and each one is scored honestly: live vs simulated is always labelled,

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

### devjothish/laya-forge

<details><summary>README 발췌</summary>

Fine-tune, calibrate and gate Laya on your own decisions, then guard your agents with it.

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

### org2AI/wald-4b

<details><summary>README 발췌</summary>

license: apache-2.0 basemodel: Qwen/Qwen3.5-4B-Base basemodelrelation: finetune language: - en tags: - decision-model - calibration - typesafe - decision-index pipelinetag: text-generation

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

### allebee/jevgrep

<details><summary>README 발췌</summary>

and get back only the lines where the answer is yes.

</details>

### Barneyjm/circuit

<details><summary>README 발췌</summary>

Open-weights System One models and the harness that trains and measures them. A System One model answers typed questions about a state with calibrated probability distributions in one forward pass, no text generation. These are the models behind decision-circuits; they speak TypeSafe's POST /v1/syst

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

### mbsatimov/use-filters

<details><summary>README 발췌</summary>

Monorepo for @mbsatimov/use-filters — headless, URL-synced filter state for React. Declare filters once, get typed params, resolved filter state, and nuqs-backed URL sync back — bring your own UI.

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

### rick97julho/do-i-have-the-vram

<details><summary>README 발췌</summary>

"Can I run this model?" This question often arises when trying to use a new machine learning model. do-i-have-the-vram helps answer it quickly and accurately.

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

### Umbylicus/umby-jev-stack

<details><summary>README 발췌</summary>

A skill tree of TypeSafe Jev agent skills over HTTP. Install the whole tree or grab one skill.

</details>

### vkpdeveloper/mrsecret

<details><summary>README 발췌</summary>

A Chrome MV3 extension that blurs secrets and PII on any web page — useful when screen sharing, streaming, or recording demos.

</details>

### prestonkakukdev/Jev-Defense

<details><summary>README 발췌</summary>

A security guard for AI agents, powered by Jev. It stops dangerous tool calls before they run, strips prompt injection out of what agents read, and checks skills and rule files for hidden instructions.

</details>

### 0xmdinc/jev-medical-bench

<details><summary>README 발췌</summary>

A small benchmark comparing a decision model (Jev by TypeSafe AI, which returns a typed choice, score or yes/no probability instead of generating text) with general chat LLMs on medical decision tasks.

</details>

### 7starsseeker/dsh-jev-guard

<details><summary>README 발췌</summary>

&gt; English | 简体中文 | Changelog | Design decisions | Measurements

</details>

### Abhieu/excelpilot

<details><summary>README 발췌</summary>

An AI Excel operations engine that treats a spreadsheet as a system to be changed safely, not a document to be edited.

</details>

### adelvillar1/dev-decisions

<details><summary>README 발췌</summary>

Decision-model gates for git + ZCode workflows. Scans secrets/PII from commits, classifies diffs using multiple providers, and logs every decision to JSONL for calibration.

</details>

### affirmitv/bitrate-advisor

<details><summary>README 발췌</summary>

Encoder settings for a live stream, decided from telemetry and history, in 300 ms for $0.00005.

</details>

### Alifdaal/classroom-pulse

<details><summary>README 발췌</summary>

A teacher asks one question. Students answer from their phones. Every answer is judged by TypeSafe's Jev in a single typed request, and the room's misconceptions show up live on the teacher's screen.

</details>

### amazingjoe/pi-saver

<details><summary>README 발췌</summary>

Give the next model call the context it needs. Keep the history for later.

</details>

### AxelVincent/jevlibrary

<details><summary>README 발췌</summary>

A curated directory of the Jev ecosystem — 1009 projects and 98 resources, organised by category.

</details>

### bulldra/google-alert-rss-proxy

<details><summary>README 발췌</summary>

Google Alert が生成する RSS フィードを、Slack や RSS リーダー等で扱いやすく最適化して配信する Google Cloud Functions (Gen 2) 向けの変換プロキシです。

</details>

### damian87x/jev-browser-use

<details><summary>README 발췌</summary>

Fast browser QA from Claude Code or pi. You write the goal, the text to type and what counts as a pass. TypeSafe Jev picks every click through Jev Ultrafast. The runner checks the final page itself, because the agent saying DONE proves nothing.

</details>

### damiensmith1/jev-gmail-filter

<details><summary>README 발췌</summary>

Filter Gmail with plain-English topics. Describe what you care about ("receipts for things I bought", "recruiters contacting me about a role") and the app labels matching emails, groups them into tracked items (a job application, an order) with a status, and flags anything that has gone quiet. Judgi

</details>

### ehtan-smaltai/jev-desktop

<details><summary>README 발췌</summary>

Tell your Windows PC what to do in plain language. jev-desktop reads the controls on screen, lets TypeSafe's Jev pick the next action, and uses a small LLM only when something has to be typed.

</details>

### finrod21/jev-transaction-guard

<details><summary>README 발췌</summary>

A cybersec policy enforcement engine and behavioral anomaly detector powered by TypeSafe AI's Jev (~typesafe/jev-latest).

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

### gbesse/saleor-jev-catalog-review

<details><summary>README 발췌</summary>

Experimental community alpha v0.1.0 · MIT.

</details>

### gbesse/strapi-plugin-jev-review

<details><summary>README 발췌</summary>

Plugin serveur de revue éditoriale avec les décisions typées de TypeSafe Jev. Il évalue un brouillon, renvoie approve, escalate ou revise avec sa confiance, et peut empêcher une publication non validée. Le contenu n'est jamais inclus dans le résultat de la décision.

</details>

### ghubnab99/jev-enterprise-decision-fabric

<details><summary>README 발췌</summary>

An experimental architecture for using TypeSafe Jev at many semantic decision points in one application, without scattering model calls, question text, thresholds and side effects through the codebase.

</details>

### GunaTeja777/typesafe-mario-ai

<details><summary>README 발췌</summary>

&gt; A flock of angry birds that evolves to fly through castle towers using neuroevolution and genetic algorithms — with no datasets and no backpropagation. Now featuring Human vs AI Flock Mode, Procedural Web Audio, Hyperparameter Lab, and Model DNA Export/Import.

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

### Holychung/jev-browser-lab

<details><summary>README 발췌</summary>

&gt; [!IMPORTANT] &gt; The Browser Use Cloud waitlist is open. Get early access to ultrafast browser agents in the cloud. &gt; Join the waitlist →

</details>

### iksnerd/verdict

<details><summary>README 발췌</summary>

Fast, local answers to typed questions about text: yes/no, pick one, or a level, each with a probability, in tens of milliseconds on Apple Silicon. Nothing is generated and nothing is run on your behalf. verdict answers; you, or your agent, act.

</details>

### inoued9d9/nyannyan-x

<details><summary>README 발췌</summary>

Xのホーム・リプライ・検索結果で、日本語本文を「読んで嫌な気持ちになる程度」1項目だけでJevに評価させ、高スコアの投稿を小さな猫表示へ置き換えるChrome / Edge拡張です。表示名は「ねこ」、鳴き声は6種類。引用RTの外側本文の評価と、引用RTを端末内だけで一括非表示にする設定を備えます。

</details>

### itsmartinwho/apartment-hunter

<details><summary>README 발췌</summary>

Apartment Hunter ranks New York rentals from StreetEasy and Zillow by your own priorities. You set hard limits and weights on one local page. The tool reads the listings through your Chrome, adds data it computes itself (subway walk, neighborhood tier, floor), and checks photos with a vision model a

</details>

### JakeTheRabbit/HA-Crop-Steering-Jev

<details><summary>README 발췌</summary>

Automatic watering for a grow room, run by Home Assistant, with an AI second opinion on every judgement call.

</details>

### javimp2003/laya-guardrails

<details><summary>README 발췌</summary>

Un check de seguridad en 5 ms en vez de 140 ms. Guardrails de input, tool call y output para agentes de IA con laya-pt-es-typed, un modelo System One tipo Jev que devuelve probabilidades tipadas, no texto.

</details>

### JevForge/jev-cloud-cost-guardian

<details><summary>README 발췌</summary>

Evaluate proposed cloud spend against a budget and expose a typed CI gate (approve, warn, block, or manual-review) using TypeSafe Jev.

</details>

### jourdanlabs/assay-001

<details><summary>README 발췌</summary>

Verdict: on CLINC150, Jev's chosen-option probabilities were calibrated (ECE 0.0204); on Banking77 they were not (ECE 0.0936, systematically overconfident). Across 8,576 responses there were zero type errors. Full write-up: https://donttrustme.ai/assay-001.html

</details>

### just-the-v/judge_rails

<details><summary>README 발췌</summary>

Semantic judgments as ordinary ActiveRecord attributes.

</details>

### KodarenLinus/realtime-security-analysis-tool

<details><summary>README 발췌</summary>

A VS Code plugin that checks your code for potential security risks as you write it.

</details>

### loserharsh/axiom

<details><summary>README 발췌</summary>

A specialized study-focused operating system and countdown planner tailored for serious competitive exams (JEE Main &amp; Advanced, NEET UG, and Class 12 Boards), designed strictly around 4 user-provided UI paradigms and driven by TypeSafe AI's Jev System 1 decision engine.

</details>

### manhua-man/jev-pilot-reflex

<details><summary>README 발췌</summary>

&gt; Three.js 智驾决策与“AI 安全闸”仿真实验室 &gt; Three.js Autonomous Driving Reflex &amp; AI Safety Brake Simulator powered by TypeSafe Jev System 1/2 Dual-Brain Architecture.

</details>

### manvendersingh21/agentgate

<details><summary>README 발췌</summary>

AI agents can write code faster than humans can review it.

</details>

### markylaredo/myPets

<details><summary>README 발췌</summary>

A cat and a dog live on your GNOME desktop. They wander, nap, climb onto your window titlebars, and quietly react to what you are working on.

</details>

### max1874/open-computer-use

<details><summary>README 발췌</summary>

A macOS computer-use agent with interchangeable model backends and a dynamic, indexed action space.

</details>

### mdsaad23/llm_speed_test

<details><summary>README 발췌</summary>

https://github.com/user-attachments/assets/5ffc3654-22b4-4561-93d1-ccd0052f5f5d

</details>

### mpeddicord/jev-tab-filter

<details><summary>README 발췌</summary>

Group, hide, or close Chrome tabs by what they're about. Type a theme in plain words, such as "Building a new home server", and every open tab is scored for relevance by TypeSafe's Jev model in one fast request.

</details>

### Muriel-Gasparini/ban4life

<details><summary>README 발췌</summary>

Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense.

</details>

### naufalhilmiaji/sooth

<details><summary>README 발췌</summary>

LLMs generate. Sooth verifies.

</details>

### OmarAlaaeldein/jev-verifier-skill

<details><summary>README 발췌</summary>

A reasoning-loop skill that gives LLM agents a fast "System One" reflex: cheap, typed, probabilistic second opinions from TypeSafe AI's Jev, served through OpenCode Zen.

</details>

### oppih/approval-judge-bridge

<details><summary>README 발췌</summary>

An OpenAI-compatible endpoint that answers an agent's approval-guardian call with a judged verdict — APPROVE, DENY, or ESCALATE. Four judges behind one interface: a typed judgement model (Jev), any OpenAI-compatible chat model, a self-hosted Jev-style classify judge, or a deterministic rule file. It

</details>

### plicara/articles

<details><summary>README 발췌</summary>

Code behind Plicara's published research articles. This is the public counterpart to articles-workbench, which stays private: drafts are written there, and the code that produced their numbers is published here once the piece is out.

</details>

### ReneGucci94/jev-scout-filter

<details><summary>README 발췌</summary>

Filtro para shorts de minidrama (TikTok, Reels, YouTube Shorts) antes de scrapear o regenerar. Jev elige una acción y el programa la traduce a KEEP, SKIPDUPLICATE, DROP o HOLD.

</details>

### rohitdevade/topiclens-for-youtube

<details><summary>README 발췌</summary>

TopicLens is a Chrome Manifest V3 extension that filters YouTube continuously including cards loaded during infinite scrolling and in-page navigation—using two topic lists:

</details>

### s-0-a-r/typesafe-eval

<details><summary>README 발췌</summary>

Fast, typed, multi-dimensional document evaluation CLI powered by the TypeSafe System One API (model: jev-1.13.0).

</details>

### sageri/agent-skills

<details><summary>README 발췌</summary>

&gt; Make your AI coding assistant not just capable, but genuinely useful. &gt; Four ready-to-use Skills: browser automation, cross-model review, pre-writing, and Xiaohongshu / WeChat article reading. &gt; Claude Code · Codex · ZCode · and any AI that can load Skills.

</details>

### semanticpolicy/semantic-policy

<details><summary>README 발췌</summary>

SemanticPolicy adds testable semantic decisions to .NET applications.

</details>

### serejkaaa512/jev-investment-forecast

<details><summary>README 발췌</summary>

A Chrome extension (Manifest V3) with a single job: inspect the page you are on and forecast its investment potential with a percentage score for every category, powered by the TypeSafe Jev API (https://api.typesafe.ai/v1/systemone).

</details>

### Shalimov04/open-jev

<details><summary>README 발췌</summary>

Turn a prompt into a small, fast, calibrated classifier. You describe a decision in one YAML file — a choice between options, a score on a rubric, or the truth of a statement — and openjev has a local LLM teacher label a few thousand examples with soft labels (the softmax over the logprobs of one co

</details>

### smolnikov-k/rudecide

<details><summary>README 발췌</summary>

language: - ru license: other licensename: mixed-open prettyname: RuDecide sizecategories: - 1K&lt;n&lt;10K taskcategories: - text-classification - multiple-choice tags: - typed-decisions - system-one - russian - benchmark - agents configs: - configname: trackaunseen datafiles: data/trackaunseen.jsonl - c

</details>

### sokapil/jev-vs-llm-banking-demo

<details><summary>README 발췌</summary>

A synthetic enterprise banking demo comparing TypeSafe JEV with GPT-5.6 Terra in Microsoft Foundry / Azure OpenAI.

</details>

### Srinivasa314/hn-comment-filter

<details><summary>README 발췌</summary>

A Chrome extension that shows you the Hacker News comments worth reading.

</details>

### StanleyOneG/pi-jev-any-decision

<details><summary>README 발췌</summary>

A Pi extension that compares bounded dynamic execution options for the main agent's next stage. It never launches children, changes child permissions, loads into children, compacts context, or overrides pi-subagents' authority.

</details>

### thechristobal/llm-roundtable

<details><summary>README 발췌</summary>

A desktop app that puts ChatGPT, Claude, and Gemini in a moderated debate — and grades them on the way out.

</details>

### thesyedyahya/llev

<details><summary>README 발췌</summary>

Self-hosted "System One" decision engine. Send any text or JSON plus typed questions, and get back typed answers with probabilities and a calibrated confidence score in about 150–500 ms, from a small LLM running on your own hardware.

</details>

### thy10086/ros2-resilience-guardian

<details><summary>README 발췌</summary>

面向 Webots/ROS 2 机器人的任务感知零信任安全韧性守护器。项目基于 RobResilience 的实验思想，加入攻击事件验证、攻击生命周期、动态风险评估、缓解重规划和独立安全状态机。

</details>

### vincentlauriat/MailClassification.jev

<details><summary>README 발췌</summary>

Semantic classification of your Outlook, Gmail and IMAP mailboxes with Jev — one category per message, preview by default, a hard cost cap, everything running on your own machine.

</details>

### vstrofago/vigia

<details><summary>README 발췌</summary>

Español · Website · Docs · Playground

</details>

### yahyashareef48/jev-shooter

<details><summary>README 발췌</summary>

A 3D neon arena wave shooter in the browser where every enemy's tactic (chase / flank / retreat) is decided by Jev, TypeSafe's decision model.

</details>

### yodablocks/duckdb-jev

<details><summary>README 발췌</summary>

DuckDB scalar functions over TypeSafe AI's Jev model, so unstructured text columns can be filtered and sorted like numeric ones.

</details>

### zachlandes/jev-dialect-bias

<details><summary>README 발췌</summary>

This repository reruns a well-known AI bias experiment on TypeSafe's Jev model (version jev-1.13.0), so anyone can check our numbers or run it again.

</details>

### Zapaia/que-modelo-uso

<details><summary>README 발췌</summary>

Type what you want to build. From a pile of 243 AI models, the ones that fit rise and line up in a row, classified in a couple of seconds by Jev, TypeSafe's System One model.

</details>
