# 🛡️ 가드레일·모더레이션 (85)

[← README](../README.md)

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
| [Alurith/jeff](https://github.com/Alurith/jeff) | 38 | 3 | 요약 대기 · Catch code issues before they catch you. | 🆕 | 2026-09-20 |
| [pengchujin/ad-radar](https://github.com/pengchujin/ad-radar) | 20 | 4 | 요약 대기 · 开源浏览器插件：在小红书、微博、X、知乎上按关键词和博主折叠内容；用你自己的 Jev API key 识别广告、AI、军事、政治等话题。 | 🆕 | 2026-09-22 |
| [bugkiwi/elons-job](https://github.com/bugkiwi/elons-job) | 17 | 1 | 요약 대기 · 用“Elon的工作”，享无福X！ | 🆕 | 2026-09-22 |
| [Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) | 9 | 1 | **무엇** pi 코딩 에이전트의 부작용 도구 호출이 사용자의 자연어 제약 조건에 어긋나는지 실행 전 점검·차단하는 런타임 제약 가드레일이다.<br>**판단** 사용자 발화마다 기존 정책의 변경 상태(KEEP, LIFT, NARROW 등)와 작업 허가 신호 여부를 Jev에 분류시킨다.<br>**포인트** Jev는 좁은 범위의 유한 선택지 분류만 수행하며, 규칙 상태를 세션 단위 구조적 op로 영속화해 컴팩션 후 재질의 없이 복원한다. | 🆕 | 2026-09-19 |
| [arielweinberger/jev-autopilot](https://github.com/arielweinberger/jev-autopilot) | 11 | 2 | 요약 대기 · This demo uses Jev from TypeSafe AI to autonomously fly a drone in a random city from point A to point B, avoiding obstacles along the way. A trip costs $0.01. | 🆕 | 2026-09-17 |
| [kenhuangus/jev-usecases](https://github.com/kenhuangus/jev-usecases) | 11 | 5 | 요약 대기 · Production TypeSafe Jev (System One) use-case harnesses with confidence-gated decision logic | 🆕 | 2026-09-21 |
| [andrelandgraf/safer-with-jev](https://github.com/andrelandgraf/safer-with-jev) | 6 | 0 | **무엇** 요청 본문을 검사하여 프롬프트 인젝션이나 안전하지 않은 응답을 차단하고 통과 시 업스트림으로 전달하는 Neon Function 기반 프록시다.<br>**판단** 요청 본문이 프롬프트 인젝션인지, 응답 텍스트가 안전하지 않은지, 또는 전달받은 텍스트가 양호한지 등을 판단한다.<br>**포인트** 판단 결과에 따라 review 또는 block 시 차단(403)하고 pass 시 지정한 target URL로 요청 바이트를 그대로 포워딩한다. | 🆕 | 2026-09-18 |
| [AkashPriyadarshii/jev-git](https://github.com/AkashPriyadarshii/jev-git) | 5 | 0 | **무엇** 개발자가 커밋 및 푸시 시점에 스테이징된 git diff의 보안 문제를 빠르게 검사할 수 있도록 돕는 Rust 기반 Git 확장 도구다.<br>**판단** Jev의 noul 결정을 활용해 스테이징된 diff에 노출된 시크릿, 프롬프트 주입 공격, 파괴적 명령어가 포함되어 있는지 여부를 판단한다.<br>**포인트** 정규식 검사의 한계와 LLM의 지연 시간 문제를 피하기 위해 단일 Rust 바이너리와 Jev API를 통해 100ms 미만 지연 시간을 목표로 구현했다. | 🆕 | 2026-09-25 |
| [CodeAlive-AI/mastra-jev-moderation](https://github.com/CodeAlive-AI/mastra-jev-moderation) | 5 | 2 | **무엇** Mastra 에이전트의 사용자 입력을 TypeSafe Jev API로 검사해 유해 메시지를 차단하는 단일 파일 기반 프로세서다.<br>**판단** 마지막 입력 메시지가 정책상 차단 대상인지 여부(noul 확률)와 위반 카테고리(choice)를 한 번의 요청으로 판단시킨다.<br>**포인트** 텍스트 파싱 없이 확률값으로 직접 차단 여부를 결정하며, 타임아웃 및 오류 시 페일오픈과 60초 서킷 브레이커를 지원한다. | 🆕 | 2026-09-18 |
| [jerryfane/omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction) | 9 | 1 | 요약 대기 · Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter | 🆕 | 2026-09-19 |
| [Nancy-Chauhan/hearth-jev-rental-search](https://github.com/Nancy-Chauhan/hearth-jev-rental-search) | 9 | 4 | 요약 대기 · Autonomous multi-source rental search powered by TypeSafe Jev | 🆕 | 2026-09-21 |
| [enoyola/jev-grand-prix](https://github.com/enoyola/jev-grand-prix) | 7 | 0 | 요약 대기 · An F1 racing game where TypeSafe's Jev picks the racing line and the pedals, and learns each corner's limit between laps | 🆕 | 2026-09-21 |
| [harshil1712/slidepilot](https://github.com/harshil1712/slidepilot) | 7 | 0 | 요약 대기 · Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev | 🆕 | 2026-09-22 |
| [lbotinelly/jev-little-airways](https://github.com/lbotinelly/jev-little-airways) | 6 | 0 | 요약 대기 · A show-and-tell capability study for Jev, TypeSafe's System One decision model. | 🆕 | 2026-09-17 |
| [maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | 5 | 0 | 요약 대기 · Natural-language row filtering for MySQL, powered by TypeSafe Jev. | 🆕 | 2026-09-20 |
| [Peu77/JevFind](https://github.com/Peu77/JevFind) | 5 | 0 | 요약 대기 · Fast semantic code search powered by Jev. Find the relevant files, line ranges, and snippets | 🆕 | 2026-09-20 |
| [CoderInPajamas/JEV-MLX](https://github.com/CoderInPajamas/JEV-MLX) | 4 | 1 | 요약 대기 · JEV-inspired local decisions for Apple Silicon, powered by MLX. | 🆕 | 2026-09-20 |
| [Gaurav-Gosain/jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench) | 4 | 0 | 요약 대기 · Blind security benchmarks for Jev, TypeSafe's System One model: prompt injection and vulnerable code detection, built on jev-go | 🆕 | 2026-09-16 |
| [harrymunro/jev-laya-benchmark](https://github.com/harrymunro/jev-laya-benchmark) | 4 | 0 | 요약 대기 · Speed and accuracy benchmark: TypeSafe's Jev API vs the local Laya MLX typed-decision model on synthetic tasks | 🆕 | 2026-09-21 |
| [muhammedilyasy/jev-mail](https://github.com/muhammedilyasy/jev-mail) | 4 | 0 | 요약 대기 · Chrome extension that triages Gmail with TypeSafe's Jev model: category, priority, spam % and reply % on every email. | 🆕 | 2026-09-20 |
| [NodarDavituri/fast-compact](https://github.com/NodarDavituri/fast-compact) | 4 | 0 | 요약 대기 · /fc for Claude Code: shrink old tool output in about a second — Jev keeps what's still needed, every cut saved to a file. Your /compact stays untouched. | 🆕 | 2026-09-26 |
| [Thanh-Mathieu95/jev-model-tokengate](https://github.com/Thanh-Mathieu95/jev-model-tokengate) | 4 | 0 | 요약 대기 · An OpenAI-compatible proxy that sits between your LLM and your users. It evaluates each sliding window of tokens while the response is still streaming and cuts the stream before a violating token can reach the screen. | 🆕 | 2026-09-23 |
| [0xArx/jevegis](https://github.com/0xArx/jevegis) | 3 | 0 | 요약 대기 · Guardrails for LLM apps in one API call. Prompt injection, jailbreaks, leaks, unsafe content. Built on TypeSafe Jev. MIT. | 🆕 | 2026-09-18 |
| [ClemensSchartmueller/jev-guard](https://github.com/ClemensSchartmueller/jev-guard) | 3 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [littlewindy123/jev-bili-filter](https://github.com/littlewindy123/jev-bili-filter) | 3 | 0 | 요약 대기 · 弹幕照开，噪音别来。用 JEV 为 B 站评论和弹幕降噪：剧透、反串黑、广告、基本盘一键过滤，想屏蔽什么，再写一句话。Chrome 插件，原页生效，MIT 开源。 | 🆕 | 2026-09-21 |
| [4anti/jev-broadcast-lab](https://github.com/4anti/jev-broadcast-lab) | 2 | 0 | 요약 대기 · Testing Lab for Jev AI | 🆕 | 2026-09-20 |
| [Ayushmaniar/jev-voice-computer-use](https://github.com/Ayushmaniar/jev-voice-computer-use) | 2 | 0 | 요약 대기 · Jev voice-controlled computer use: hold a key, speak, and Jev operates your apps. Windows today; macOS, Linux and Android ports welcome. | 🆕 | 2026-09-26 |
| [coo-quack/jev-pii-checker](https://github.com/coo-quack/jev-pii-checker) | 2 | 1 | 요약 대기 · CLI that finds PII in text with TypeSafe Jev: presence, sensitivity, and located spans | 🆕 | 2026-09-26 |
| [KamilPostrozny/pi-fast-jev-compaction](https://github.com/KamilPostrozny/pi-fast-jev-compaction) | 2 | 0 | 요약 대기 · Fast JEV compaction extension for pi | 🆕 | 2026-09-20 |
| [lavallee/mk-jev-fly-brain](https://github.com/lavallee/mk-jev-fly-brain) | 2 | 1 | 요약 대기 · A maleCNS fly-brain connectome fights a language model in mk.js — spiking simulation, dopamine learning, and the controls that say what each side contributes | 🆕 | 2026-09-18 |
| [NorbertBodziony/guard-jev](https://github.com/NorbertBodziony/guard-jev) | 2 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-17 |
| [rythmn1111/doom-war](https://github.com/rythmn1111/doom-war) | 2 | 0 | 요약 대기 · Two System One models fight a real Doom deathmatch. Laya (322M, open weights, local MLX) vs Jev (TypeSafe hosted). Same state, same typed questions, same shield — only the model differs. | 🆕 | 2026-09-21 |
| [theSekyi/jevusecases](https://github.com/theSekyi/jevusecases) | 2 | 1 | 요약 대기 · What people are actually shipping with Jev — real builds, tracked as they ship. | 🆕 | 2026-09-20 |
| [XYenon/ajevt-browser](https://github.com/XYenon/ajevt-browser) | 2 | 1 | 요약 대기 · A bounded Jev System-1 browser tool for Pi, OpenCode V2, Amp, and MCP, powered by agent-browser | 🆕 | 2026-09-27 |
| [Gaurav-Gosain/jev-headline-bench](https://github.com/Gaurav-Gosain/jev-headline-bench) | 1 | 0 | 요약 대기 · Can Jev pick the winner of a real headline A/B test? 64.5% across 10,984 Upworthy randomized experiments, 74.7% when the difference was decisive. | 🆕 | 2026-09-16 |
| [Hldwsd/minesweeper-jev](https://github.com/Hldwsd/minesweeper-jev) | 1 | 0 | 요약 대기 · Minesweeper where deterministic logic does the provable work and TypeSafe Jev is consulted only when the board forces a guess. | 🆕 | 2026-09-20 |
| [jaswanthsanjay88/rev](https://github.com/jaswanthsanjay88/rev) | 1 | 0 | 요약 대기 · Fast, prefill-only decision model. Typed questions in, calibrated probabilities out, single forward pass with TypeSafe System One API. inspired from jev | 🆕 | 2026-09-23 |
| [jiawei686/jev-screen-mcp](https://github.com/jiawei686/jev-screen-mcp) | 1 | 0 | 요약 대기 · Single-purpose MCP server (one tool, one job): a content-moderation gate powered by TypeSafe Jev (System One decision model). | 🆕 | 2026-09-21 |
| [KesavanKing/jev-browser](https://github.com/KesavanKing/jev-browser) | 1 | 0 | 요약 대기 · Local browser automation UI that uses TypeSafe Jev to choose bounded page actions and a text model only for field values. | 🆕 | 2026-09-17 |
| [kiarina/labs](https://github.com/kiarina/labs) | 1 | 0 | 요약 대기 · Small, independent projects for experiments, research, and investigations. | 🆕 | 2026-09-27 |
| [ndolinschi/trustgate](https://github.com/ndolinschi/trustgate) | 1 | 0 | 요약 대기 · TrustGate — indie media T&amp;S gate via TypeSafe Jev | 🆕 | 2026-09-17 |
| [nexibeo/jev-organize](https://github.com/nexibeo/jev-organize) | 1 | 0 | 요약 대기 · Throw in a pile of company files and get them classified and organized by department, type, sensitivity, date, counterparty and PII, with an index for AI agents. Powered by TypeSafe's Jev on OpenRouter (17¢ per 1,000 files). Zero-dependency Node CLI + Claude skill + Codex agent. | 🆕 | 2026-09-19 |
| [ohernandezdev/jevmod](https://github.com/ohernandezdev/jevmod) | 1 | 1 | 요약 대기 · Moderation for communities and apps, powered by Jev (TypeSafe): probabilities per category, thresholds you own. Discord/Telegram/Reddit bots, CLI, Python, npm, HTTP API, MCP. | 🆕 | 2026-09-25 |
| [onionminionops-beep/pdoom-protocol](https://github.com/onionminionops-beep/pdoom-protocol) | 1 | 0 | 요약 대기 · USER + JEV: P(DOOM) PROTOCOL — co-op platform shooter where TypeSafe Jev plays alongside you | 🆕 | 2026-09-17 |
| [PhilippElhaus/Codex-Jev](https://github.com/PhilippElhaus/Codex-Jev) | 1 | 0 | 요약 대기 · VS Code Codex Plugin for Jev-gated tool output integration | 🆕 | 2026-09-27 |
| [pjrpjr/qingliu](https://github.com/pjrpjr/qingliu) | 1 | 1 | 요약 대기 · X 时间线清洁工 · FeedSieve(MIT) 衍生 · 带实测标定的 AI 判定层：误杀 0.7%，还能抓词库认不出的 47% | 🆕 | 2026-09-19 |
| [sawzhang/jev-demo](https://github.com/sawzhang/jev-demo) | 1 | 1 | 요약 대기 · Jev (TypeSafe System One) 学习与实测：概念文档 + 5 个可运行 demo + 可复现压测。实测 jev-1.13.0：扇出几乎免费，40 问与 1 问等延迟。 | 🆕 | 2026-09-22 |
| [trycatchkamal/typesafe-jev-traffic-demo](https://github.com/trycatchkamal/typesafe-jev-traffic-demo) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [zsoXi/FeedGate](https://github.com/zsoXi/FeedGate) | 1 | 0 | 요약 대기 · Safe-controls Chrome feed filter (v3.3.0) with TypeSafe Jev judgments, temporal topic mutes, repeat grouping, API usage panel with thrift mode, author pickers, transactional cosmetic picker with Undo, persist-first recovery, and six supported platforms including Wykop (beta). Zero runtime dependencies. | 🆕 | 2026-09-19 |
| [affirmitv/bitrate-advisor](https://github.com/affirmitv/bitrate-advisor) | 0 | 0 | 요약 대기 · Live-stream encoder settings from telemetry and history: TypeSafe's Jev decision model inside a deterministic safety envelope. Deno, Node, edge runtimes. | 🆕 | 2026-09-18 |
| [antigravitysoham-eng/esg-brsr-solar-desk](https://github.com/antigravitysoham-eng/esg-brsr-solar-desk) | 0 | 0 | 요약 대기 · [SUPERSEDED] Split into esg-disclosure-desk (framework-agnostic ESG core). Archived, read-only, link kept alive. | 🆕 | 2026-09-24 |
| [antigravitysoham-eng/esg-disclosure-desk](https://github.com/antigravitysoham-eng/esg-disclosure-desk) | 0 | 0 | 요약 대기 · A framework-agnostic Jev decision layer for ESG reporting — reads every claim in a sustainability report against the evidence behind it. Works over GRI, ESRS, BRSR or ISSB. Zero dependencies, 22 tests. | 🆕 | 2026-09-24 |
| [Biztactix/n8n-nodes-typesafe](https://github.com/Biztactix/n8n-nodes-typesafe) | 0 | 0 | 요약 대기 · Typesafe AI Node for N8N | 🆕 | 2026-09-22 |
| [contacto939/kit-jev](https://github.com/contacto939/kit-jev) | 0 | 0 | 요약 대기 · Kit gratuito para probar Jev (TypeSafe) con tus datos: clasificador, test de indexación, las pruebas del vídeo y habilidad para Claude Code. Por Centry. | 🆕 | 2026-09-26 |
| [dakotac1994/awesome-jev](https://github.com/dakotac1994/awesome-jev) | 0 | 0 | 요약 대기 · Awesome list for Jev — TypeSafe AI's decision-only System One model: typed decisions (Choice, Score, Noul) with calibrated probabilities. Guides, recipes, runnable examples, honest benchmarks, community projects. | 🆕 | 2026-09-25 |
| [gbesse/pinot-jev](https://github.com/gbesse/pinot-jev) | 0 | 0 | 요약 대기 · Semantic SQL predicates for Apache Pinot powered by TypeSafe Jev | 🆕 | 2026-09-26 |
| [gbesse/strapi-plugin-jev-review](https://github.com/gbesse/strapi-plugin-jev-review) | 0 | 0 | 요약 대기 · Strapi 5 editorial review and publish guard powered by TypeSafe Jev | 🆕 | 2026-09-26 |
| [hamzaahmadaslam/fedi-report-triage](https://github.com/hamzaahmadaslam/fedi-report-triage) | 0 | 0 | 요약 대기 · Reads the open reports on a Mastodon server with a moderator's own read-only token and prints them as a queue sorted by severity, using TypeSafe's Jev model. It never takes a moderation action. | 🆕 | 2026-09-26 |
| [HiveScaleSystems/jev-guard](https://github.com/HiveScaleSystems/jev-guard) | 0 | 0 | 요약 대기 · AI chat moderation for Minecraft (Paper/Folia) and Hytale servers, powered by TypeSafe's Jev model. Works with the TypeSafe API or Cloudflare AI Gateway. | 🆕 | 2026-09-26 |
| [javimp2003/laya-guardrails](https://github.com/javimp2003/laya-guardrails) | 0 | 0 | 요약 대기 · Guardrails de input, tool call y output para agentes de IA con un modelo System One tipo Jev (laya-pt-es-typed) autoalojado en una NVIDIA L4: 5 ms por check frente a 140 ms de un LLM-as-a-judge. | 🆕 | 2026-09-26 |
| [jourdanlabs/assay-001](https://github.com/jourdanlabs/assay-001) | 0 | 0 | 요약 대기 · ASSAY-001: independent, pre-registered verification of TypeSafe Jev's calibration and type-safety claims. Split verdict, published in full. | 🆕 | 2026-09-21 |
| [kinfi4/jev-fast-jumping-slow](https://github.com/kinfi4/jev-fast-jumping-slow) | 0 | 0 | 요약 대기 · Add Jev platformer: System 1 model plays a pygame game | 🆕 | 2026-09-27 |
| [kurowashi/pi-jev](https://github.com/kurowashi/pi-jev) | 0 | 0 | 요약 대기 · Semantic checks for Pi file edits and new-file placement, powered by TypeSafe Jev (System One). | 🆕 | 2026-09-27 |
| [manhua-man/jev-pilot-reflex](https://github.com/manhua-man/jev-pilot-reflex) | 0 | 0 | 요약 대기 · Three.js Autonomous Driving Reflex &amp; AI Safety Brake Simulator powered by TypeSafe Jev System 1/2 Dual-Brain Architecture | 🆕 | 2026-09-24 |
| [mhoenes/sortroom](https://github.com/mhoenes/sortroom) | 0 | 0 | 요약 대기 · Self-hosted IMAP mail sorter: a classification model (any TypeSafe API service, e.g. Jev) files new mail into your folders, stars what needs action and tracks expiring offers. Docker image with a web admin UI. | 🆕 | 2026-09-27 |
| [mpeddicord/jev-tab-filter](https://github.com/mpeddicord/jev-tab-filter) | 0 | 0 | 요약 대기 · Chrome extension: group, hide, or close tabs by theme, scored by TypeSafe's Jev model | 🆕 | 2026-09-26 |
| [Muriel-Gasparini/ban4life](https://github.com/Muriel-Gasparini/ban4life) | 0 | 0 | 요약 대기 · Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense. | 🆕 | 2026-09-25 |
| [oppih/approval-judge-bridge](https://github.com/oppih/approval-judge-bridge) | 0 | 0 | 요약 대기 · OpenAI-compatible judge endpoint for agent approval gates: typed judgements (Jev), any OpenAI-compatible model, or a rule file — fail-closed, calibrated, with a replay battery | 🆕 | 2026-09-21 |
| [thesyedyahya/llev](https://github.com/thesyedyahya/llev) | 0 | 0 | 요약 대기 · Open-source Jev alternative: self-hosted System One decision engine. Typed answers (choice / score / yes-no / multi) with calibrated confidence from a small local LLM via llama.cpp. | 🆕 | 2026-09-26 |
| [varunlohade/fastBrowserTool](https://github.com/varunlohade/fastBrowserTool) | 0 | 0 | 요약 대기 · Claude thinks, jev clicks: a two-way loop between Claude Code and jev-ultrafast. 5-6x faster browser tasks, with before/after benchmarks. | 🆕 | 2026-09-27 |
| [vidux/iso-jevdit](https://github.com/vidux/iso-jevdit) | 0 | 0 | 요약 대기 · An npm CLI that audits a codebase against ISO/IEC 27001:2022 Annex A and writes a detailed \`iso-jevdit-report.md\` you can hand to an auditor. | 🆕 | 2026-09-20 |
| [vstrofago/vigia](https://github.com/vstrofago/vigia) | 0 | 0 | 요약 대기 · Moderating live-stream chat in real time (ES/EN) | 🆕 | 2026-09-26 |
| [yousudip/lizard-agent](https://github.com/yousudip/lizard-agent) | 0 | 0 | 요약 대기 · A browser agent with no LLM in the loop — deterministic code plus Jev, a System One model. ~118ms per decision, typed and auditable. | 🆕 | 2026-09-18 |
| [zhizunbao-studio/between-chat-insight](https://github.com/zhizunbao-studio/between-chat-insight) | 0 | 0 | 요약 대기 · 仅供娱乐的 Jev 双人聊天关系观察应用：逐条读取文字消息，展示爱与不爱迹象百分比。 | 🆕 | 2026-09-27 |
| [aqzi/SettingsLoader](https://github.com/aqzi/SettingsLoader) | 0 | 0 | 요약 대기 · Type safe settings loader for python - support for env, args, secrets, app setttings and more | 🆕 | 2025-09-17 |

### y0usaf/pi-jev

<details><summary>README 발췌</summary>

TypeSafe Jev as a decision layer for the Pi coding agent.

</details>

### realZachi/typesafe-adblock

<details><summary>README 발췌</summary>

A Chrome extension (Manifest V3) that spots ads on any website in real time and pops their DOM elements out of the page. The semantic call, "is this element an ad?", is made by TypeSafe AI's System One model Jev. Everything else is plain code.

</details>

### ipenywis/laya-ultrafast

<details><summary>README 발췌</summary>

A local, open-weight port of browser-use/jev-ultrafast.

</details>

### hellogumbo/awesome-jev

<details><summary>README 발췌</summary>

&gt; Directory of projects built on Jev, TypeSafe AI's System One model.

</details>

### qkal/Canny

<details><summary>README 발췌</summary>

A supervision layer for AI coding agents. It hooks into Claude Code and Codex CLI, keeps a ledger of what the agent actually did, and will not let it finish on a claim.

</details>

### brainstormity/Jev-Moderation-Bot

<details><summary>README 발췌</summary>

A Discord moderation bot built with Python and TypeSafe AI (Jev System One). It filters spam and scam links in real time, escalates offenses automatically, and lets moderators profile members based on their message history.

</details>

### leepokai/jev-guard

<details><summary>README 발췌</summary>

Claude Code's auto mode is described as: "A separate classifier model reviews actions before they run, blocking anything that escalates beyond your request, targets unrecognized infrastructure, or appears driven by hostile content Claude read." That is exactly the job jev-guard does — as three typed

</details>

### yikangy873-gif/jev-desktop

<details><summary>README 발췌</summary>

Jev Desktop adds a bounded decision loop to Codex Computer Use for browser tabs and native macOS apps.

</details>

### mizchi/jev-playground

<details><summary>README 발췌</summary>

TypeSafe AI の System One モデル Jev を MoonBit から触るためのプレイグラウンド。 Jev は「文字列ではなく型付きの確率判断を返す」意思決定専用モデルです(unstructured state in, typed probabilistic decisions out)。

</details>

### kyu1204/jgrep

<details><summary>README 발췌</summary>

grep for what code does, not what it's called.

</details>

### Alurith/jeff

<details><summary>README 발췌</summary>

Catch code issues before they catch you.

</details>

### pengchujin/ad-radar

<details><summary>README 발췌</summary>

开源的浏览器插件（Chrome / Edge），在小红书、微博、X、知乎的网页版上：

</details>

### bugkiwi/elons-job

<details><summary>README 발췌</summary>

一个本地优先的 Chrome Manifest V3 扩展：只处理 X (x.com/{user}/status/{id}) 详情页的回复，使用用户自己的 TypeSafe Jev API Key，对高置信度的色情、性暗示和色情引流评论显示可恢复的隐藏占位符。

</details>

### Nyarlathoteppppp/pi-heed

<details><summary>README 발췌</summary>

Your agent understood your instruction. pi-heed makes sure it still remembers.

</details>

### arielweinberger/jev-autopilot

<details><summary>README 발췌</summary>

A 3D drone simulator built with Three.js, flown autonomously by TypeSafe's Jev model through the AI SDK's @ai-sdk/typesafe-ai provider.

</details>

### kenhuangus/jev-usecases

<details><summary>README 발췌</summary>

Jev returns Choice, Score, and Noul probabilities in 70 to 500 ms. This repository is the initial implementation of most of the decisions TypeSafe lists for that model.

</details>

### andrelandgraf/safer-with-jev

<details><summary>README 발췌</summary>

Public showcases of TypeSafe Jev judgments. TypeSafe Jev inspects the body, then optionally forwards the same bytes to a caller-chosen HTTPS URL.

</details>

### AkashPriyadarshii/jev-git

<details><summary>README 발췌</summary>

Support: fuel the next build — [](https://buymeacoffee.com/AkashPriyadarshi)

</details>

### CodeAlive-AI/mastra-jev-moderation

<details><summary>README 발췌</summary>

Input moderation for Mastra agents on TypeSafe Jev: one file, one request per turn, no text to parse.

</details>

### jerryfane/omp-jev-compaction

<details><summary>README 발췌</summary>

Verbatim context reduction for omp, scored by TypeSafe's Jev decision model, over either the TypeSafe API or OpenRouter.

</details>

### Nancy-Chauhan/hearth-jev-rental-search

<details><summary>README 발췌</summary>

Hearth drives a real Chrome browser to search Craigslist, Facebook Marketplace, Redfin and Zillow from one plain-language request, and returns a single shortlist of matching rentals. You watch every click it makes as it goes.

</details>

### enoyola/jev-grand-prix

<details><summary>README 발췌</summary>

A racing game where TypeSafe's Jev drives an F1 car live, and you can race it.

</details>

### harshil1712/slidepilot

<details><summary>README 발췌</summary>

&gt; Experimental: SlidePilot is an early proof of concept built on experimental voice APIs. Rehearse with it before using it in a live presentation, and always keep manual navigation available.

</details>

### lbotinelly/jev-little-airways

<details><summary>README 발췌</summary>

A toy archipelago where the planes actually think.

</details>

### maayanlevy/mysql-ailike

<details><summary>README 발췌</summary>

A native MySQL plugin for filtering rows and comparing text columns with natural-language conditions, powered by TypeSafe Jev.

</details>

### Peu77/JevFind

<details><summary>README 발췌</summary>

Fast semantic code search powered by TypeSafe Jev. Describe a concept in plain English and get the relevant files, line ranges, confidence scores, and source snippets.

</details>

### CoderInPajamas/JEV-MLX

<details><summary>README 발췌</summary>

Qwen3.5-9B · 20 model-selected placements · 4 cleared rows · 400 points. The recording retains the former MLXJ name. The GIF shows the entire second development run at 4× playback, including inference waits. The model chooses from every legal vertical-drop placement using structured board data and r

</details>

### Gaurav-Gosain/jev-sec-bench

<details><summary>README 발췌</summary>

Blind security benchmarks for Jev, TypeSafe's System One model, built on jev-go.

</details>

### harrymunro/jev-laya-benchmark

<details><summary>README 발췌</summary>

Speed and accuracy of Jev (TypeSafe's hosted System One model, jev-1.13.0) against Laya (open-weight typed-decision models, run locally with MLX on Apple silicon), on 1,470 synthetic items across eight typed-decision tasks, plus controlled latency and throughput sweeps.

</details>

### muhammedilyasy/jev-mail

<details><summary>README 발췌</summary>

A Chrome extension that scores every message in your Gmail with TypeSafe's Jev model — category, priority, spam % and reply % (how much the message needs an answer from you).

</details>

### NodarDavituri/fast-compact

<details><summary>README 발췌</summary>

A second, fast compaction command for Claude Code.

</details>

### Thanh-Mathieu95/jev-model-tokengate

<details><summary>README 발췌</summary>

&gt; Every token passes the gate before the screen.

</details>

### 0xArx/jevegis

<details><summary>README 발췌</summary>

Open source. MIT licensed. Live at https://jevegis.vercel.app. SDK/CLI: https://github.com/0xArx/jevegis-sdk

</details>

### ClemensSchartmueller/jev-guard

<details><summary>README 발췌</summary>

High-speed, cross-agent safety gate plugin for Claude Code, Codex CLI, and Antigravity.

</details>

### littlewindy123/jev-bili-filter

<details><summary>README 발췌</summary>

四个开关：剧透 / 反串黑 / 广告 / 基本盘。还想屏蔽什么，写一句话，点「添加」。在 B 站原页面过滤评论和普通文字弹幕。

</details>

### 4anti/jev-broadcast-lab

<details><summary>README 발췌</summary>

Public operator lab for TypeSafe Jev (System One). Live site: 4anti.github.io/jev-broadcast-lab.

</details>

### Ayushmaniar/jev-voice-computer-use

<details><summary>README 발췌</summary>

Jev computer use that finishes multi-step tasks and types into text fields, with no LLM.

</details>

### coo-quack/jev-pii-checker

<details><summary>README 발췌</summary>

CLI for scanning text and files for PII using TypeSafe's Jev model, regex patterns, and word segmentation.

</details>

### KamilPostrozny/pi-fast-jev-compaction

<details><summary>README 발췌</summary>

A Pi package port of tamaratran/fast-jev-compaction, adapted to Pi's non-destructive context hook.

</details>

### lavallee/mk-jev-fly-brain

<details><summary>README 발췌</summary>

A fly brain fights a language model in a 1990s arcade fighter, and the fight is instrumented well enough to say what each side is contributing.

</details>

### NorbertBodziony/guard-jev

<details><summary>README 발췌</summary>

Text moderation demo: one TypeSafe systemOne call screens 7 Noul hazards + 1 severity Score in parallel. Verdict computed in code via policy thresholds.

</details>

### rythmn1111/doom-war

<details><summary>README 발췌</summary>

Two System One models fight a real Doom deathmatch. Same state. Same questions. Same shield. Only the model differs.

</details>

### theSekyi/jevusecases

<details><summary>README 발췌</summary>

What people are actually shipping with Jev (TypeSafe AI's decision model), tracked as they ship. Live at jevusecases.com.

</details>

### XYenon/ajevt-browser

<details><summary>README 발췌</summary>

A bounded Jev System-1 browser tool for Pi, OpenCode V2, Amp, and MCP. A single ajevtbrowser call runs an observe/decide/validate/act loop using Vercel agent-browser.

</details>

### Gaurav-Gosain/jev-headline-bench

<details><summary>README 발췌</summary>

Can Jev pick the winner of a real headline A/B test? Built on jev-go.

</details>

### Hldwsd/minesweeper-jev

<details><summary>README 발췌</summary>

&gt; 中文版: README.zh-CN.md

</details>

### jaswanthsanjay88/rev

<details><summary>README 발췌</summary>

&gt; Typed questions in, mathematically calibrated probabilities out — single prefill pass, zero token generation.

</details>

### jiawei686/jev-screen-mcp

<details><summary>README 발췌</summary>

&gt; Content-moderation gate as a single-purpose MCP tool, powered by Jev (TypeSafe's System One decision model). One MCP, one job.

</details>

### KesavanKing/jev-browser

<details><summary>README 발췌</summary>

Jev Browser is a local browser automation UI that turns a URL and a plain-language goal into safe, bounded browser actions.

</details>

### kiarina/labs

<details><summary>README 발췌</summary>

Small, independent projects for experiments, research, and investigations.

</details>

### nexibeo/jev-organize

<details><summary>README 발췌</summary>

Throw in a pile of company files. Get them classified, organized and indexed for people and AI agents.

</details>

### ohernandezdev/jevmod

<details><summary>README 발췌</summary>

Moderation for communities and apps: every message gets a probability for spam, scam, harassment, nsfw, off-topic, self-harm, doxxing, sexual content involving minors, and for rules you write in plain English. You set the thresholds and the actions. Every decision is logged with its numbers.

</details>

### onionminionops-beep/pdoom-protocol

<details><summary>README 발췌</summary>

This is a Next.js project bootstrapped with create-next-app.

</details>

### PhilippElhaus/Codex-Jev

<details><summary>README 발췌</summary>

Codex Jev shortens noisy tool results before Codex reads them. It keeps selected evidence and a path to the exact original. Uncertain results stay intact.

</details>

### pjrpjr/qingliu

<details><summary>README 발췌</summary>

黄框标出垃圾账号 → 一键原生拉黑 → 手机端同步消失。 外加一个 用实测标定过阈值 的 AI 判定层。

</details>

### sawzhang/jev-demo

<details><summary>README 발췌</summary>

一次完整的 Jev 上手记录：概念 → API → 实测 → 5 个可运行 demo。 所有数字都是 2026-09-20 在 jev-1.13.0 上跑出来的，脚本可复现。

</details>

### trycatchkamal/typesafe-jev-traffic-demo

<details><summary>README 발췌</summary>

A local proof of concept that has Jev — TypeSafe's typed decision model — pick which of two conflicting signal phases gets the green light at a real Hong Kong intersection, using near real-time open-data traffic sensors.

</details>

### zsoXi/FeedGate

<details><summary>README 발췌</summary>

A Chrome extension that uses TypeSafe Jev to reduce feed noise without hiding ordinary organic content. A post being promotional is not treated as a reason to filter it. Filtering is reversible, the rules are explicit, and the API key is entered inside the extension.

</details>

### affirmitv/bitrate-advisor

<details><summary>README 발췌</summary>

Encoder settings for a live stream, decided from telemetry and history, in 300 ms for $0.00005.

</details>

### antigravitysoham-eng/esg-brsr-solar-desk

<details><summary>README 발췌</summary>

&gt; ## ⚠️ Superseded — this repository is archived &gt; &gt; This build fused three separate things: ESG (the domain), BRSR (one filing &gt; regime), and solar (an asset class). They are independent axes, and combining them &gt; made a tool that only worked for Indian solar operators. &gt; &gt; It has been split. The f

</details>

### antigravitysoham-eng/esg-disclosure-desk

<details><summary>README 발췌</summary>

Reads every claim in a draft sustainability report against the evidence records behind it, and reports where the two disagree. Works the same over a GRI report, an ESRS filing, a BRSR or an internal draft — the regime is a mapping on top, not a dependency.

</details>

### Biztactix/n8n-nodes-typesafe

<details><summary>README 발췌</summary>

An n8n community node for TypeSafe AI. Ask yes/no (noul), choice and score questions about any text or JSON from a workflow and route on the typed answers.

</details>

### contacto939/kit-jev

<details><summary>README 발췌</summary>

Todo lo que sale en el vídeo, para que lo corras con tus datos.

</details>

### dakotac1994/awesome-jev

<details><summary>README 발췌</summary>

&gt; A curated list of resources for Jev — TypeSafe AI's decision-only "System One" model that returns typed decisions with calibrated probabilities instead of generating text.

</details>

### gbesse/pinot-jev

<details><summary>README 발췌</summary>

An Apache Pinot scalar-function extension for semantic predicates backed by TypeSafe Jev. It fuses up to eight conditions over one row into one request, caches identical judgments on each Pinot server, and coalesces simultaneous identical calls. This initial release makes no state-of-the-art perform

</details>

### gbesse/strapi-plugin-jev-review

<details><summary>README 발췌</summary>

Plugin serveur de revue éditoriale avec les décisions typées de TypeSafe Jev. Il évalue un brouillon, renvoie approve, escalate ou revise avec sa confiance, et peut empêcher une publication non validée. Le contenu n'est jamais inclus dans le résultat de la décision.

</details>

### hamzaahmadaslam/fedi-report-triage

<details><summary>README 발췌</summary>

Reads the open reports on your Mastodon server with your own moderator token and prints them as a queue sorted by severity, with the kind of problem each report shows and whether the reporter's comment matches the reported posts; for the people who moderate a Mastodon server.

</details>

### HiveScaleSystems/jev-guard

<details><summary>README 발췌</summary>

AI chat moderation for Minecraft (Paper/Folia) and Hytale servers, powered by TypeSafe 's Jev model.

</details>

### javimp2003/laya-guardrails

<details><summary>README 발췌</summary>

Un check de seguridad en 5 ms en vez de 140 ms. Guardrails de input, tool call y output para agentes de IA con laya-pt-es-typed, un modelo System One tipo Jev que devuelve probabilidades tipadas, no texto.

</details>

### jourdanlabs/assay-001

<details><summary>README 발췌</summary>

Verdict: on CLINC150, Jev's chosen-option probabilities were calibrated (ECE 0.0204); on Banking77 they were not (ECE 0.0936, systematically overconfident). Across 8,576 responses there were zero type errors. Full write-up: https://donttrustme.ai/assay-001.html

</details>

### kinfi4/jev-fast-jumping-slow

<details><summary>README 발췌</summary>

A tiny fun project: Jev - TypeSafe AI's "System One" model that answers with calibrated numbers instead of text - plays a pygame platformer. Fast gut decisions, no chat, no reasoning chains.

</details>

### kurowashi/pi-jev

<details><summary>README 발췌</summary>

TypeSafe Jev（System One）で Pi のファイル操作を意味的にチェックする拡張のモノレポです。 編集内容のチェックと、新規ファイルの配置チェックを別プラグインとして提供します。

</details>

### manhua-man/jev-pilot-reflex

<details><summary>README 발췌</summary>

&gt; Three.js 智驾决策与“AI 安全闸”仿真实验室 &gt; Three.js Autonomous Driving Reflex &amp; AI Safety Brake Simulator powered by TypeSafe Jev System 1/2 Dual-Brain Architecture.

</details>

### mhoenes/sortroom

<details><summary>README 발췌</summary>

Sortroom sorts your IMAP inbox into folders. A classification model reads each new mail and picks one of your categories – it doesn't generate text, so it can never invent a folder. It runs as one Docker container with a web admin UI and works with any IMAP server (Gmail, Outlook/Microsoft 365, your

</details>

### mpeddicord/jev-tab-filter

<details><summary>README 발췌</summary>

Group, hide, or close Chrome tabs by what they're about. Type a theme in plain words, such as "Building a new home server", and every open tab is scored for relevance by TypeSafe's Jev model in one fast request.

</details>

### Muriel-Gasparini/ban4life

<details><summary>README 발췌</summary>

Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense.

</details>

### oppih/approval-judge-bridge

<details><summary>README 발췌</summary>

An OpenAI-compatible endpoint that answers an agent's approval-guardian call with a judged verdict — APPROVE, DENY, or ESCALATE. Four judges behind one interface: a typed judgement model (Jev), any OpenAI-compatible chat model, a self-hosted Jev-style classify judge, or a deterministic rule file. It

</details>

### thesyedyahya/llev

<details><summary>README 발췌</summary>

Self-hosted "System One" decision engine. Send any text or JSON plus typed questions, and get back typed answers with probabilities and a calibrated confidence score in about 150–500 ms, from a small LLM running on your own hardware.

</details>

### varunlohade/fastBrowserTool

<details><summary>README 발췌</summary>

Claude thinks. jev clicks. A two-way loop between Claude Code and jev-ultrafast, so browser work stops costing a screenshot and a full model turn per click.

</details>

### vidux/iso-jevdit

<details><summary>README 발췌</summary>

An npm CLI that audits a codebase against ISO/IEC 27001:2022 Annex A and writes a detailed iso-jevdit-report.md you can hand to an auditor.

</details>

### vstrofago/vigia

<details><summary>README 발췌</summary>

Español · Website · Docs · Playground

</details>

### yousudip/lizard-agent

<details><summary>README 발췌</summary>

A browser agent driven by deterministic code and Jev (TypeSafe's System One model) — with zero LLM calls in the loop.

</details>

### zhizunbao-studio/between-chat-insight

<details><summary>README 발췌</summary>

仅供娱乐。 导入两个人的文字聊天，让 TypeSafe Jev 逐段阅读全部已导入的双人消息，观察对方是否表现出爱意、主动交流、具体关心、未来计划与明确表达。简洁的 Mac 风格界面使用衬线字体，并在结果中保留不确定性。

</details>

### aqzi/SettingsLoader

<details><summary>README 발췌</summary>

SettingsLoader is a component to load env, args, secrets and app settings into one type safe object. It's especially valuable if you need to pull settings from multiple sources. By default, it supports YAML, JSON, .env files, and command-line arguments. Additionally, you can extend it with custom so

</details>
