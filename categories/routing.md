# 🔀 라우팅·의도 분류 (560)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 26712 | 2334 | **무엇** 100개 이상의 언어로 텍스트를 분석해 단일 순방향 패스에서 선택, 점수, 참/거짓 판단을 도출하는 비자기회귀 의사결정 엔진<br>**판단** 담당 부서(choice), 긴급도 수준(score), 이탈 위험 여부(noul) 등 입력 텍스트에 대한 구조화된 질문을 판단시킴<br>**포인트** 비자기회귀 단일 패스로 처리하며 언어별 체크포인트 자동 라우팅 및 RLCD 학습을 거치고 최대 8,192 토큰 컨텍스트를 지원함 | 🆕 | 2026-09-27 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 448 | 54 | **무엇** Claude Code와 OpenAI Codex CLI에서 사용자 프롬프트 난이도에 따라 모델을 턴 단위로 자동 라우팅해 주는 CLI 도구다.<br>**판단** 사용자 프롬프트의 복잡도, 추론 필요성, 도구 복잡도, 컨텍스트 크기 등을 평가해 빠른 티어(저비용)와 강력한 티어 중 적절한 모델 티어를 선택하도록 판단시킨다.<br>**포인트** 루프백 프록시 방식으로 원본 CLI의 로그인 세션과 권한을 그대로 유지하며, /jev-explain 커맨드로 판단 근거 지표와 신뢰도를 확인할 수 있다. | ✅ 🆕 | 2026-09-19 |
| [agentconnect-md/agentconnect](https://github.com/agentconnect-md/agentconnect) | 1437 | 62 | 요약 대기 · The open-source, multi-agent alternative to Claude Tag.  @ any agent, wherever work happens, they work alongside your team, learning as they go. | 🆕 | 2026-09-28 |
| [feder-cr/jev](https://github.com/feder-cr/jev) | 1057 | 122 | 요약 대기 · jevos is an open-source alternative to Jev for yes/no decisions that runs on your laptop. | 🆕 | 2026-09-27 |
| [alisaitteke/photoshop-mcp](https://github.com/alisaitteke/photoshop-mcp) | 526 | 60 | **무엇** 자연어 프롬프트로 Adobe Photoshop 작업을 제어할 수 있도록 120여 개 도구를 제공하는 Model Context Protocol 서버 및 독립형 UI 도구<br>**판단** 사용자 프롬프트가 즉시 실행 가능한 16개 안전 단일 명령인지, 아니면 LLM 호출이나 Action Plan 생성이 필요한 복합 요청인지 라우팅 여부 판단<br>**포인트** 안전하고 명확한 명령에 대해 Jev 기반 사전 의도 라우팅을 거쳐 LLM 토큰 소모 없이 Photoshop에 직접 단일 명령을 전달하는 옵트인 방식을 지원함 | 🆕 | 2026-09-28 |
| [milvus-io/bootcamp](https://github.com/milvus-io/bootcamp) | 2446 | 683 | 요약 대기 · Dealing with all unstructured data, such as reverse image search, audio search, molecular search, video analysis, question and answer systems, NLP, etc. | 🆕 | 2026-09-24 |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | 692 | 30 | 요약 대기 · Run open decision models locally: pull and serve Laya, decider, NLI and GLiClass behind a TypeSafe-compatible API. Ollama for decision models. | 🆕 | 2026-09-28 |
| [jerryjliu/docjev](https://github.com/jerryjliu/docjev) | 468 | 32 | 요약 대기 · A very fast document classifier/splitter using Jev  | 🆕 | 2026-09-26 |
| [mrmps/classifier-dev](https://github.com/mrmps/classifier-dev) | 423 | 34 | 요약 대기 · Zero-shot text classification over plain HTTP — no API key, no account. One Cloudflare Worker, a CLI, and an MCP server. https://classifier.dev | 🆕 | 2026-09-27 |
| [BillionsBobby/JevRouter](https://github.com/BillionsBobby/JevRouter) | 258 | 17 | **무엇** 모델, 서브에이전트, MCP 툴, CLI 등 다양한 후보군 중 다음에 실행할 역량을 Jev 기반으로 빠르게 선택해주는 경량 라우터 도구다.<br>**판단** 주어진 요청 상태에서 후보군(모델, 서브에이전트, 툴 등) 중 어떤 역량이 다음 단계를 처리해야 하는지 choice 형태로 질문한다.<br>**포인트** Jev 모델의 확률 판단 결과를 유지한 채 가용성, 권한, 위험도, 사용자 확인 단계를 덧붙여 실행하며 단일 호출(route) 및 다단계 계획(plan)을 지원한다. | 🆕 | 2026-09-26 |
| [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) | 353 | 182 | 요약 대기 · A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators &amp; UIs for DeepSeek Harness (DSH). Visualization · PPT · Coding · Agents · Loops (auto-research) and more. #dsh | 🆕 | 2026-09-28 |
| [Heman10x-NGU/openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0) | 291 | 43 | 요약 대기 · Calibrated 151M Non-Autoregressive Decision Engine beating TypeSafe Jev &amp; Laya on LocalLLaMA/typed-decisions (77.10% acc, 0.0636 Brier, 0.0144 ECE) | 🆕 | 2026-09-20 |
| [yonatangross/orchestkit](https://github.com/yonatangross/orchestkit) | 284 | 35 | 요약 대기 · The Complete AI Development Toolkit for Claude Code. 106 skills, 36 agents, 171 hooks. Install \`ork\` for stable (v9.x), or \`ork-alpha\` for the v10 line, which ships daily. | 🆕 | 2026-09-28 |
| [yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router) | 51 | 2 | **무엇** Hono 프레임워크에서 메서드나 경로 대신 자연어 설명으로 들어오는 HTTP 요청을 분류해 처리하는 시맨틱 라우터다.<br>**판단** 요청의 메서드·URL·헤더·본문이 등록된 각 라우트 설명과 일치하는지 여부를 Noul(예/아니오) 확률로 병렬 판별시킨다.<br>**포인트** HTTP 요청마다 모델 호출 비용과 지연이 발생하며, 등록 순서대로 확률이 임계값을 넘는 첫 번째 라우트가 매칭된다. | ✅ 🆕 `noul` | 2026-09-18 |
| [logan-markewich/jeff](https://github.com/logan-markewich/jeff) | 256 | 20 | 요약 대기 · A self-hosted drop-in replacement for TypeSafe's jev, powered by GliFormer. | 🆕 | 2026-09-20 |
| [kentcdodds/kody](https://github.com/kentcdodds/kody) | 684 | 66 | 요약 대기 · 🐨 Your assistant's home — the memory, keys, code, and automations your AI agent keeps, portable across every MCP host. Built on Cloudflare Workers. | 🆕 | 2026-09-28 |
| [angel291592/Intent-Router](https://github.com/angel291592/Intent-Router) | 171 | 18 | 요약 대기 · Intent compiler for AI agents — converges vague requests into typed IntentSpec contracts (probe, ask, or halt before routing), the input layer for routers and typed-decision models like Jev &amp; Laya | 🆕 | 2026-09-27 |
| [timpratim/macbrow](https://github.com/timpratim/macbrow) | 154 | 16 | 요약 대기 · Hands free Mac and Browser control powered by Gradium | 🆕 | 2026-09-21 |
| [Heman10x-NGU/Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev) | 107 | 13 | 요약 대기 · Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground | 🆕 | 2026-09-28 |
| [tuxevil/tuxevil-rotator](https://github.com/tuxevil/tuxevil-rotator) | 64 | 12 | **무엇** 여러 LLM 무료 티어 계정과 프로바이더를 묶어 쿼터 관리, 계정 헬스 체크, 로드 밸런싱을 제공하는 OpenAI 호환 게이트웨이 프록시다.<br>**판단** 요청에 \`model: "auto"\`가 지정되었을 때 TypeSafe Jev를 사용해 최적의 대상 모델과 동적 effort 수준을 판단시킨다.<br>**포인트** 새 프로바이더를 확장하기 쉬운 구조이며 Jev 판단을 검증하기 위한 섀도 모드와 비텍스트 데이터 마스킹 로직을 지원한다. | 🆕 | 2026-09-28 |
| [egma-ai/jev-code-reviewer](https://github.com/egma-ai/jev-code-reviewer) | 88 | 0 | 요약 대기 · Review behavior, not just diffs. Jev prioritizes human attention; OpenAI explains the changes. Local CLI + agent skill + GitHub extension. | 🆕 | 2026-09-25 |
| [mizchi/jev-lint](https://github.com/mizchi/jev-lint) | 88 | 0 | 요약 대기 · lint text in code by jev scorerer | 🆕 | 2026-09-24 |
| [Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev) | 87 | 9 | 요약 대기 · Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples | 🆕 | 2026-09-26 |
| [nidhi-singh02/agent-router](https://github.com/nidhi-singh02/agent-router) | 87 | 8 | 요약 대기 · CLI that picks Cursor, Claude Code, Codex, or OpenCode + model/effort for a task, then launches it. Powered by Jev and Herdr | 🆕 | 2026-09-27 |
| [fazlerocks/jevmail](https://github.com/fazlerocks/jevmail) | 86 | 4 | 요약 대기 · Open-source AI email triage for Gmail. Sorts your inbox into Needs reply, Updates, Promos, Sales and Spam with Jev, TypeSafe AI's decision model, via Vercel AI Gateway. Read-only, runs locally, 1,000 emails in about a minute for 3 cents. | 🆕 | 2026-09-19 |
| [prismhq/jev-router](https://github.com/prismhq/jev-router) | 14 | 1 | **무엇** LiteLLM 프록시 위에서 TypeSafe Jev를 활용해 들어온 요청을 최적의 LLM으로 라우팅해 주는 오픈소스 도구다.<br>**판단** 축약된 요청 요약본과 모델 후보군 설명을 바탕으로 요청을 처리할 최적의 후보 모델 하나를 choice 방식으로 선택시킨다.<br>**포인트** 요구 역량으로 후보를 1차 필터링하며, API 키가 없으면 규칙 기반 최저가 모델로, 에러 발생 시 지정된 fallback으로 대체된다. | ✅ 🆕 `choice` | 2026-09-17 |
| [AndrewPrifer/jimothy](https://github.com/AndrewPrifer/jimothy) | 75 | 3 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [GiesN/typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow) | 12 | 3 | **무엇** LangGraph 기반으로 가상 수신 이메일을 분류하여 알맞은 핸들러로 라우팅하는 비동기 워크플로 예제다.<br>**판단** 이메일 본문과 제목을 바탕으로 의도가 'invoice'인지 'general'인지 choice로 분류하도록 요청한다.<br>**포인트** API 오류 시 임의 라벨을 할당하지 않고 중단하며, 테스트 코드에서는 SDK 응답을 모킹해 네트워크 없이 그래프 라우팅을 검증한다. | ✅ 🆕 | 2026-09-16 |
| [iamaamir/system-one](https://github.com/iamaamir/system-one) | 62 | 3 | 요약 대기 · Provider-neutral System One runtime for TypeScript and Pi | 🆕 | 2026-09-27 |
| [Nisaka520/JevIntent](https://github.com/Nisaka520/JevIntent) | 59 | 6 | 요약 대기 · 微信（FkWeChat 插件）：长按消息分析意图 / 情绪 / 回复姿态，只在本机弹提示，对方无感知 | 🆕 | 2026-09-23 |
| [r-ms/mini-jev](https://github.com/r-ms/mini-jev) | 57 | 5 | 요약 대기 · mini-Jev: what a Jev-style typed-decision interface looks like on a frozen Qwen3-4B — read the option letter's logits instead of generating JSON. Preregistered experiment, results, teaching bench. | 🆕 | 2026-09-18 |
| [ikermoel/open-alternative-jev](https://github.com/ikermoel/open-alternative-jev) | 56 | 11 | 요약 대기 · Open-source alternative to TypeSafe's Jev: a System One style model layer that gives typed, calibrated decisions from any open-weights LLM in one forward pass (HF + vLLM), with honest benchmarks | 🆕 | 2026-09-25 |
| [lykycy123/RoboJEV](https://github.com/lykycy123/RoboJEV) | 49 | 2 | 요약 대기 · Two-stage JEV control of a Franka Panda in MuJoCo | 🆕 | 2026-09-27 |
| [intikhab49/open-jev-typed-decision-engine](https://github.com/intikhab49/open-jev-typed-decision-engine) | 44 | 2 | 요약 대기 · Open reproduction of TypeSafe Jev: a 150M typed decision engine (noul/choice/score in one non-autoregressive pass, calibrated confidence). 0.697 vs Jev's 0.727, 2.5x better calibrated, 4x faster, free. Trains on a Colab T4 in 30 min. | 🆕 | 2026-09-21 |
| [klauswg/jev-guard](https://github.com/klauswg/jev-guard) | 37 | 0 | 요약 대기 · Real-time risk triage gateway for exchange deposits and withdrawals — Jev (TypeSafe System One) handles triage only; adjudication stays in deterministic code. | 🆕 | 2026-09-22 |
| [higress-group/HiRoute](https://github.com/higress-group/HiRoute) | 22 | 3 | **무엇** 장기 실행 에이전트 작업에서 단계별 모델 라우팅과 조율을 로컬 환경에서 수행하는 엔진<br>**판단** 다음 라운드에 사용할 실행 브랜치 ID를 선택하고 직전 모델의 단계 수행 능력을 평가하도록 요구함<br>**포인트** 도구 호출마다 모델을 바꾸지 않고 단계를 유지해 공급자 KV 캐시를 보존하며 단일 요청으로 라우팅과 평가를 동시 처리함 | 🆕 | 2026-09-27 |
| [adarshmishra07/jcm-router](https://github.com/adarshmishra07/jcm-router) | 6 | 0 | **무엇** Claude Code와 Anthropic API 사이에서 TypeSafe Jev를 이용해 메시지별 모델과 effort 수준을 결정하는 로컬 프록시다.<br>**판단** 들어오는 요청에 대해 어떤 Claude 모델(Haiku, Sonnet, Opus 등)을 쓸지와 어느 정도의 effort 수준을 부여할지 판단시킨다.<br>**포인트** 프롬프트 캐시 파기 비용 손실을 막기 위해 메인 채팅은 가급적 유지하고 콜드 상태인 서브에이전트 위주로 라우팅을 수행한다. | ✅ 🆕 | 2026-09-17 |
| [devanshbatham/commit-miner](https://github.com/devanshbatham/commit-miner) | 36 | 6 | 요약 대기 · Classify Git commit diffs and messages with Jev. Bug fixes, security fixes/CWEs, and change types. | 🆕 | 2026-09-17 |
| [sgoedecke/system-one](https://github.com/sgoedecke/system-one) | 35 | 4 | 요약 대기 · Batched single-token choice inference for open language models, compatible with TypeSafe | 🆕 | 2026-09-18 |
| [sugarforever/yummy-pi-extensions](https://github.com/sugarforever/yummy-pi-extensions) | 20 | 2 | **무엇** 코딩 에이전트 Pi용 확장 기능 모음으로 세션 분기 라우터, 시맨틱 검색 도구, 처리량 측정기를 포함한다.<br>**판단** 프롬프트 입력 전 세션을 continue할지, fork할지, new session으로 새로 시작할지 Jev에게 선택(choice)하도록 질의한다.<br>**포인트** pi-jev-router는 컨텍스트 오염을 막기 위해 프롬프트 진입 전 세션 제어 결정을 질의하며 TypeSafe, OpenRouter, Vercel AI Gateway 엔진을 지원한다. | 🆕 | 2026-09-27 |
| [tshmieldev/sharp](https://github.com/tshmieldev/sharp) | 31 | 0 | 요약 대기 · Filter your X.com feed with Jev or any LLM | 🆕 | 2026-09-23 |
| [misbahsy/doc-router](https://github.com/misbahsy/doc-router) | 29 | 6 | 요약 대기 · A Document OCR Router to help route pages based on content.  | 🆕 | 2026-09-18 |
| [hivellm/rulebook](https://github.com/hivellm/rulebook) | 15 | 2 | **무엇** AI 코딩 에이전트의 규칙과 작업 표준을 AGENTS.md, 퀄리티 게이트, MCP 도구 등으로 통일해 주는 개발 프레임워크 CLI 도구<br>**판단** 매 프롬프트 인입 시 엔트리 게이트에서 적절한 모델 및 서브에이전트로의 라우팅 여부와 대상을 판단시킴<br>**포인트** 프롬프트를 TypeSafe(Jev) 엔트리 게이트로 라우팅한 뒤 오케스트레이터가 하위 에이전트에게 작업을 위임하는 구조 | 🆕 | 2026-09-26 |
| [mejiasd3v/pi-jev-router](https://github.com/mejiasd3v/pi-jev-router) | 15 | 0 | **무엇** Vercel AI Gateway의 TypeSafe Jev를 활용해 Pi 코딩 에이전트 세션에 적합한 모델과 추론 강도를 자동으로 선택해 주는 라우터 확장 도구다.<br>**판단** 작업 내용과 모델별 설명 루브릭을 바탕으로 세션에 배정할 최적의 모델과 최소 추론 강도(thinking level)를 choice로 판단시킨다.<br>**포인트** 모델과 추론 노력을 한 번 평가해 세션 동안 고정(pin)하며, Astra 모델의 경우 단계별 적응형 추론 강도(adaptive effort) 조절을 지원한다. | 🆕 | 2026-09-22 |
| [reachjalil/jevlogs](https://github.com/reachjalil/jevlogs) | 14 | 2 | **무엇** OpenTelemetry 로그를 고비용 LLM으로 분석하기 전에 신호를 점수화하고 선별하는 오픈소스 로그 트리아지 도구이다.<br>**판단** 로그의 진단적 가치(diagnostic value), 처리 우선순위, 적절한 분석 경로로의 라우팅 대상을 판단한다.<br>**포인트** 모든 로그 레코드를 아카이브에 그대로 유지하면서 고비용 LLM 분석을 거치기 전 로그 시그널의 우선순위를 평가한다. | 🆕 | 2026-09-22 |
| [FeiLiuEM/open-medical-jev](https://github.com/FeiLiuEM/open-medical-jev) | 23 | 1 | 요약 대기 · Jev-level results from frozen open models: within ~2 pts of Jev on national medical exams (≈3× Laya; level with OpenJev). No fine-tuning, no distillation, no corpus and high compatibility with new models. Three modes: fast runs at ≈0.076s per question; general and high cascades cut compute ≈63%/49% at 93%/97% released precision. | 🆕 | 2026-09-27 |
| [Bodila51/muse-jev-playbook](https://github.com/Bodila51/muse-jev-playbook) | 21 | 3 | 요약 대기 · Jev decision layer for Muse: a fast, cheap TypeSafe AI gate before expensive agent work — confidence policy, recipes, reference router, honest measurement. | 🆕 | 2026-09-22 |
| [rlaope/jeval](https://github.com/rlaope/jeval) | 21 | 1 | 요약 대기 · Measures what your Jev classifier's confidence is really worth, and sets the human hand-off line from what a mistake costs. | 🆕 | 2026-09-26 |
| [TypeSafeAI/typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground) | 21 | 6 | 요약 대기 · Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI. | 🆕 | 2026-09-26 |
| [vinilana/live-jev](https://github.com/vinilana/live-jev) | 21 | 9 | 요약 대기 · 2D autonomous car simulation in the browser, driven by TypeSafe's Jev decision model | 🆕 | 2026-09-18 |
| [0x7067/claude-jev](https://github.com/0x7067/claude-jev) | 19 | 4 | 요약 대기 · Claude Code plugin: Jev for rule checks, verbatim compaction, and prompt routing | 🆕 | 2026-09-27 |
| [anandi1989/awesome-jev-usecases](https://github.com/anandi1989/awesome-jev-usecases) | 19 | 6 | 요약 대기 · Evidence-backed index of real-world Jev (TypeSafe AI System One) use cases: repos, patterns, benchmarks, and measured results | 🆕 | 2026-09-26 |
| [ktaletsk/jevframe](https://github.com/ktaletsk/jevframe) | 19 | 1 | 요약 대기 · Semantic AI for pandas and Polars: classify text, analyze sentiment, and score DataFrame rows with natural-language questions and full probabilities using TypeSafe Jev. | 🆕 | 2026-09-24 |
| [leesk212/JEV-CPU](https://github.com/leesk212/JEV-CPU) | 19 | 2 | 요약 대기 · Run SemIf (Jev-style semantic-if decisions) on a CPU — no GPU. Reads typed option probabilities straight from an open model in one forward pass, plus a web UI. | 🆕 | 2026-09-19 |
| [parth-kp/jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier) | 19 | 2 | 요약 대기 · Classify your inbox with Jev (TypeSafe's System One model) — tag, move, flag, and notify, all config-driven. | 🆕 | 2026-09-20 |
| [AgriciDaniel/gatekeeper](https://github.com/AgriciDaniel/gatekeeper) | 18 | 2 | 요약 대기 · Routes each request to the right AI agent or skill before your AI picks one. Your rules decide what code can; Jev (TypeSafe) makes the typed call. Installs as Claude Code hooks. | 🆕 | 2026-09-23 |
| [Das-rebel/a3m-router](https://github.com/Das-rebel/a3m-router) | 17 | 5 | 요약 대기 · ⚡ Adaptive multi-model LLM router — 80+ providers, Jev System One single-pass routing (model=jev-auto), pheromone-trail failover, parallel ensemble merge. npm: adaptive-memory-multi-model-router | 🆕 | 2026-09-24 |
| [syumai/jevyoumean](https://github.com/syumai/jevyoumean) | 17 | 1 | 요약 대기 · Semantic "Did you mean?" for any CLI — wraps commands and uses TypeSafe's Jev to match subcommand typos by intent, not edit distance. | 🆕 | 2026-09-23 |
| [thusinh1969/BrighTO_Router](https://github.com/thusinh1969/BrighTO_Router) | 17 | 3 | 요약 대기 · BrighTO LLM Router: free open-source, ultra-fast self-hosted Rust LLM gateway for OpenAI/Anthropic APIs, SystemOne/JEV/DJEV decisions, Ollaya/Laya, load balancing, fallback routing, team keys and token budgets. | 🆕 | 2026-09-27 |
| [reachjalil/jev-tree](https://github.com/reachjalil/jev-tree) | 9 | 0 | **무엇** TypeSafe Jev의 255개 선택지 제한을 넘어 계층형 분류 체계를 재귀 탐색하여 수천 개 후보 중 하나를 선택하는 도구다.<br>**판단** 계층형 트리의 각 레벨 또는 파티션에서 다음으로 이동할 하위 노드가 무엇인지 choice로 판단한다.<br>**포인트** 단일 질문당 255개인 Jev choice 호출 제한을 JSON 트리 형태를 단계별로 재귀 순회 호출하는 방식으로 우회한다. | 🆕 | 2026-09-18 |
| [DECRUX9812/typesafe-skill-router](https://github.com/DECRUX9812/typesafe-skill-router) | 15 | 5 | 요약 대기 · TypeSafe (Jev) skill routing for Hermes Agent: names the one skill worth loading, before the model call. Opt-in, stdlib only, ~$0.001 per routed turn. | 🆕 | 2026-09-21 |
| [simonw/llm-typesafe](https://github.com/simonw/llm-typesafe) | 15 | 2 | 요약 대기 · LLM plugin for accessing Jev and other TypeSafe AI models | 🆕 | 2026-09-22 |
| [aio-proxy/aio-proxy](https://github.com/aio-proxy/aio-proxy) | 14 | 5 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [Jimuelle07/Helm](https://github.com/Jimuelle07/Helm) | 14 | 1 | 요약 대기 · Route every coding task to the best AI agent on your machine — Claude Code, Codex, Cursor, Gemini CLI, Aider, OpenCode. Installs as a Claude Code plugin, Gemini extension, or Agent Skill. | 🆕 | 2026-09-27 |
| [kavehmz/typesafe-playground](https://github.com/kavehmz/typesafe-playground) | 14 | 4 | 요약 대기 · Interactive experiments with TypeSafe Jev, from support routing to 3D driving simulations with real AI decisions and visible sensor inputs. | 🆕 | 2026-09-22 |
| [Micha0827/snapjudge](https://github.com/Micha0827/snapjudge) | 14 | 0 | 요약 대기 · Typed decisions (choice / score / yes-no) from local Qwen models on Apple Silicon. Probabilities come straight from the logits, no text generation. TypeSafe-compatible HTTP API, runs on MLX. | 🆕 | 2026-09-21 |
| [rayanweragala/jev-call-router](https://github.com/rayanweragala/jev-call-router) | 14 | 3 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [philippdubach/pi-jev-router](https://github.com/philippdubach/pi-jev-router) | 13 | 1 | 요약 대기 · A minimal Pareto-optimal OpenRouter model router for pi, based on Jev | 🆕 | 2026-09-27 |
| [collapseindex/jev-ultralightspeed](https://github.com/collapseindex/jev-ultralightspeed) | 12 | 0 | 요약 대기 · BRRRRRRRRRRRRRRRRRRRRRR | 🆕 | 2026-09-22 |
| [kushals256/jevcache](https://github.com/kushals256/jevcache) | 12 | 0 | 요약 대기 · MorrowCache — skip the chat call when the question is the same. OpenAI-compatible proxy. npm: @kushalicious/jevcache | 🆕 | 2026-09-26 |
| [leonardovida/duckdb-ai](https://github.com/leonardovida/duckdb-ai) | 12 | 0 | 요약 대기 · Enhance DuckDB with AI functions, supporting all providers as well as local models | 🆕 | 2026-09-26 |
| [win4r/pi-jev-router](https://github.com/win4r/pi-jev-router) | 12 | 2 | 요약 대기 · Task-boundary model routing for Pi Coding Agent, powered by TypeSafe Jev. Conservative policies, exact caching, and observable failover. | 🆕 | 2026-09-20 |
| [matthewp/flue-jev-demo](https://github.com/matthewp/flue-jev-demo) | 11 | 0 | 요약 대기 · Flue agent routing with TypeSafe Jev through Cloudflare AI Gateway | 🆕 | 2026-09-18 |
| [ruban-24/switchboard](https://github.com/ruban-24/switchboard) | 11 | 1 | 요약 대기 · An open-source, model-agnostic decision router for Claude Code and Codex. | 🆕 | 2026-09-27 |
| [AronAxe/Token-Terminator](https://github.com/AronAxe/Token-Terminator) | 10 | 0 | 요약 대기 · Agent-agnostic token reduction with exact recovery and fail-open guarantees. First-party Hermes Agent adapter; RTK terminal rewriting optional. | 🆕 | 2026-09-28 |
| [iefnaf/pi-jev](https://github.com/iefnaf/pi-jev) | 10 | 1 | 요약 대기 · Pi extension suite powered by Jev: selective context compaction and model routing | 🆕 | 2026-09-20 |
| [okooo5km/jev](https://github.com/okooo5km/jev) | 10 | 1 | 요약 대기 · Typed decisions from the shell: an unofficial stdlib-Python CLI and Agent Skill for TypeSafe's Jev model, via the TypeSafe API (default) or OpenRouter. Yes/no, choice and ordinal scores with calibrated probabilities, semantic grep and batch mode. | 🆕 | 2026-09-19 |
| [rajdhakad9826/jev-router](https://github.com/rajdhakad9826/jev-router) | 10 | 1 | 요약 대기 · LLM router that picks the cheapest model capable of handling a query, using TypeSafe's Jev for fast classification instead of an LLM call. | 🆕 | 2026-09-21 |
| [rupeshpoojary9/poorjev](https://github.com/rupeshpoojary9/poorjev) | 10 | 0 | 요약 대기 · Open-source, local Jev alternative: a System One decision layer with provably calibrated confidence (ECE 0.170→0.071). Typed decisions, runs offline, no API key, no waitlist. | 🆕 | 2026-09-21 |
| [HexyeDEV/JevPR](https://github.com/HexyeDEV/JevPR) | 9 | 2 | 요약 대기 · PR Risk review, automated by Jev | 🆕 | 2026-09-25 |
| [imMamdouhaboammar/fable-jev](https://github.com/imMamdouhaboammar/fable-jev) | 9 | 9 | 요약 대기 · ⚡ Sub-100ms cognitive reflexes for autonomous coding agents. Powered by TypeSafe AI's Jev &amp; get-fable. | 🆕 | 2026-09-19 |
| [neurono-ml/typed-lm](https://github.com/neurono-ml/typed-lm) | 9 | 0 | 요약 대기 · Single-forward-pass semantic routing in Rust: turn dense LLMs (Llama, Qwen, Mistral, Gemma) into a typed decision API with LoRA/QLoRA training and FP8/FP4 quantization, built on Candle. | 🆕 | 2026-09-25 |
| [saibimajdi/typesafeai-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk) | 9 | 0 | 요약 대기 · Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI. | 🆕 | 2026-09-26 |
| [vercel-labs/jev-ai-sdk-form-router](https://github.com/vercel-labs/jev-ai-sdk-form-router) | 9 | 3 | 요약 대기 · Route form submissions to the right people with Jev and AI SDK. | 🆕 | 2026-09-22 |
| [vynnlee/jev-mail](https://github.com/vynnlee/jev-mail) | 9 | 1 | 요약 대기 · Autonomous 24/7 Zero-Inbox triage for Gmail powered by TypeSafe Jev System One | 🆕 | 2026-09-20 |
| [zeeshan8281/slo-router](https://github.com/zeeshan8281/slo-router) | 9 | 1 | 요약 대기 · SLO-aware LLM inference router with Jev decisions, live queue metrics, counterfactual evaluation, and reproducible latency/cost benchmarks | 🆕 | 2026-09-23 |
| [Emenowicz/jev-sap-commerce](https://github.com/Emenowicz/jev-sap-commerce) | 8 | 0 | 요약 대기 · SAP Commerce extension using TypeSafe's Jev to moderate product reviews and suggest product categories and classification attribute values: dry runs on your own data first, an audit record per decision. Plus a Claude Code skill. | 🆕 | 2026-09-25 |
| [green-dalii/pi-shift-router](https://github.com/green-dalii/pi-shift-router) | 8 | 3 | 요약 대기 · Per-turn model routing for the Pi coding agent: a small judge picks the cheap or the strong tier for each message, with multi-model failover, task-level orchestration, and an optional decision-model judge (Jev) that answers with a calibrated probability instead of prose. | 🆕 | 2026-09-26 |
| [miniLV/Jev-Auto-Router](https://github.com/miniLV/Jev-Auto-Router) | 8 | 0 | 요약 대기 · Jev Auto Router (Jev Router): experimental per-call GPT model routing for Codex via TypeSafe Jev and a local Responses proxy, with independent task verification. | 🆕 | 2026-09-23 |
| [rawwerks/one-system](https://github.com/rawwerks/one-system) | 8 | 0 | 요약 대기 · Use local and hosted classifiers aka decision models aka Jev-like models, all through a single TypeSafe API | 🆕 | 2026-09-25 |
| [valentynkit/jev-plays-pokemon-red](https://github.com/valentynkit/jev-plays-pokemon-red) | 8 | 1 | 요약 대기 · Pokemon Red on PyBoy: code owns the route and the arithmetic, Jev picks at branches in about 100 ms, calibration measured instead of assumed | 🆕 | 2026-09-19 |
| [zzhdbw/laya-Ascend](https://github.com/zzhdbw/laya-Ascend) | 8 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-23 |
| [AIGNLAI/ReflexRoute](https://github.com/AIGNLAI/ReflexRoute) | 7 | 0 | 요약 대기 · Fast zero-shot and few-shot LLM routing powered by Jev. | 🆕 | 2026-09-20 |
| [backant-io/jevelry](https://github.com/backant-io/jevelry) | 7 | 0 | 요약 대기 · Use Jev everywhere to make &amp; track decisions | 🆕 | 2026-09-23 |
| [docxology/daf-jev](https://github.com/docxology/daf-jev) | 7 | 1 | 요약 대기 · daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill | 🆕 | 2026-09-28 |
| [kyle-chalmers/typesafe-jev-incident-router](https://github.com/kyle-chalmers/typesafe-jev-incident-router) | 7 | 1 | 요약 대기 · Confidence-gated incident routing with TypeSafe Jev | 🆕 | 2026-09-21 |
| [muratcakmak/jev-guard](https://github.com/muratcakmak/jev-guard) | 7 | 0 | 요약 대기 · Probability-scored guardrails for Claude Code: deny rule-breaking edits and unasked-for deploys, route your docs into each prompt, and check the final answer against the turn's own evidence. | 🆕 | 2026-09-22 |
| [shimo4228/jev-skill-router](https://github.com/shimo4228/jev-skill-router) | 7 | 1 | 요약 대기 · Claude Code plugin: asks TypeSafe Jev which installed skill fits each prompt and logs the answer (shadow-first). A working reference for the skill-suggestion cookbook on Claude Code — the README records why it is unlikely to help a strong model as a router. | 🆕 | 2026-09-24 |
| [Akramovic1/jev-pilot](https://github.com/Akramovic1/jev-pilot) | 6 | 1 | 요약 대기 · Let Jev steer Claude Code: the right reasoning effort, subagent model and skill for every prompt. A Claude Code plugin powered by TypeSafe's Jev (OpenRouter / TypeSafe). | 🆕 | 2026-09-26 |
| [ansidium/jev-codex-bridge](https://github.com/ansidium/jev-codex-bridge) | 6 | 0 | 요약 대기 · Model and reasoning routing for Codex Desktop and CLI, with a Windows service and validated updates | 🆕 | 2026-09-26 |
| [Charlyhno-eng/jev-document-classification](https://github.com/Charlyhno-eng/jev-document-classification) | 6 | 0 | 요약 대기 · JEV Document Classification enables the rapid and cost-effective classification of text-based documents using AI, leveraging TypeSafe's "System One" model. | 🆕 | 2026-09-19 |
| [franckverrot/lev](https://github.com/franckverrot/lev) | 6 | 0 | 요약 대기 · Jev-style decision model based on LFM2.5-350M | 🆕 | 2026-09-21 |
| [prasanthj/duckdb-jev](https://github.com/prasanthj/duckdb-jev) | 6 | 2 | 요약 대기 · High-throughput, robust native DuckDB extension for batched and streaming TypeSafe/Jev classification, scoring, and semantic predicates from SQL. | 🆕 | 2026-09-21 |
| [stas4000/jev-papers](https://github.com/stas4000/jev-papers) | 6 | 3 | 요약 대기 · 1,000 arXiv AI papers classified with one Jev decision each, checked against an LLM judge. Open rebuild, MIT. | 🆕 | 2026-09-21 |
| [xingwudao/OpenJev](https://github.com/xingwudao/OpenJev) | 6 | 0 | 요약 대기 · OpenJev: an independent Jev-inspired System One decision API based on TypeSafe.ai concepts. Choice, score and noul primitives, local mock server, Python and TypeScript SDKs. Real inference planned; not affiliated with TypeSafe AI. | 🆕 | 2026-09-18 |
| [zurk/hekajev](https://github.com/zurk/hekajev) | 6 | 2 | 요약 대기 · A hundred hands through Git history — reproducible commit analytics powered by Jev. | 🆕 | 2026-09-24 |
| [bcharleson/jev-gtm-cookbook](https://github.com/bcharleson/jev-gtm-cookbook) | 5 | 0 | 요약 대기 · 15 open-source outbound recipes on TypeSafe Jev. Score your LinkedIn network or any lead list against your ICP, catch job changes, triage replies. Local, zero dependencies. 16,711 connections scored for $0.73. | 🆕 | 2026-09-22 |
| [Foadsf/jev-for-engineers](https://github.com/Foadsf/jev-for-engineers) | 5 | 0 | 요약 대기 · Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies. | 🆕 | 2026-09-16 |
| [glamboyosa/docket](https://github.com/glamboyosa/docket) | 5 | 0 | 요약 대기 · A Go TUI that uses Jev to classify documents, assess sensitivity and urgency, and determine whether action is required. | 🆕 | 2026-09-20 |
| [khmuhtadin/n8n-nodes-jev-classification](https://github.com/khmuhtadin/n8n-nodes-jev-classification) | 5 | 1 | 요약 대기 · n8n community node for Jev by TypeSafe AI: classify, score and check text with calibrated probabilities. Parallel requests and multi-item batching. | 🆕 | 2026-09-26 |
| [Li-Evan/awesome-jev](https://github.com/Li-Evan/awesome-jev) | 5 | 4 | 요약 대기 · The most complete gallery of what people build with Jev, TypeSafe's System One model: 3,400+ projects, demos, and write-ups by scenario, each with its original link, image, and description. | 🆕 | 2026-09-27 |
| [reinhard-z/vision-jev](https://github.com/reinhard-z/vision-jev) | 5 | 0 | 요약 대기 · An experiment with Jev, a fast classification model from TypeSafe, to see what it can do when decisions have to happen in real time. I built a browser game where it drives a car. You drag pedestrians, obstacles, or traffic signs onto the road. A vision model in your browser writes a short caption for each image, and Jev decides. | 🆕 | 2026-09-27 |
| [sumanmichael/jevlang](https://github.com/sumanmichael/jevlang) | 5 | 0 | 요약 대기 · The simplest way to write decision workflows in Python. Python with a smart if. | 🆕 | 2026-09-20 |
| [wiatrM/jevtpp](https://github.com/wiatrM/jevtpp) | 5 | 0 | 요약 대기 · Jev-like decisions. Strong C++ types. | 🆕 | 2026-09-27 |
| [vizuh/sabi](https://github.com/vizuh/sabi) | 15 | 1 | 요약 대기 · Adaptive inference scheduling for AI agents — per-round model, effort and provider routing for coding harnesses: a Command Code mod or a local OpenAI-compatible proxy. | 🆕 | 2026-09-27 |
| [Adkid-Zephyr/work-with-jev](https://github.com/Adkid-Zephyr/work-with-jev) | 4 | 3 | 요약 대기 · 用 Jev 把飞书工作消息分成四类：紧急、待办、值得看、暂时略过。A minimal, local-first message classifier with extensible workspace adapters. | 🆕 | 2026-09-20 |
| [alexei-led/pi-model-router](https://github.com/alexei-led/pi-model-router) | 4 | 0 | 요약 대기 · Independent Pi extension for four-tier model routing with optional privacy-gated Jev advice, deterministic baselines, budget controls, and safe fallbacks. | 🆕 | 2026-09-25 |
| [BeLazy167/typesafe-mod](https://github.com/BeLazy167/typesafe-mod) | 4 | 0 | 요약 대기 · Claude Code mod that routes decisions to TypeSafe's Jev model: ranks installed skills per prompt, and answers the agent's own this-or-that questions when confident. | 🆕 | 2026-09-17 |
| [CoderInPajamas/JEV-MLX](https://github.com/CoderInPajamas/JEV-MLX) | 4 | 1 | 요약 대기 · JEV-inspired local decisions for Apple Silicon, powered by MLX. | 🆕 | 2026-09-20 |
| [DeepBlueDynamics/typesafe-arena](https://github.com/DeepBlueDynamics/typesafe-arena) | 4 | 0 | 요약 대기 · A playground for TypeSafeAI's Jev Model | 🆕 | 2026-09-17 |
| [deyna256/langchain-skill-router](https://github.com/deyna256/langchain-skill-router) | 4 | 4 | 요약 대기 · Per-turn skill selection for LangChain and deepagents agents: a fast judge picks the few skills a turn needs, so a catalog of hundreds stays out of the prompt. | 🆕 | 2026-09-24 |
| [Embodied-AI-System/Qwen3.5-OneForward](https://github.com/Embodied-AI-System/Qwen3.5-OneForward) | 4 | 1 | 요약 대기 · Jev-style typed decisions from Qwen3.5-2B logits — one forward pass, zero decoding, zero fine-tuning. | 🆕 | 2026-09-22 |
| [fajarhide/askgrep](https://github.com/fajarhide/askgrep) | 4 | 0 | 요약 대기 · grep for the questions you cannot write as a pattern. Reads every function instead of sampling a few. Powered by Jev, TypeSafe AI's System One model. | 🆕 | 2026-09-22 |
| [gitchw/LCT](https://github.com/gitchw/LCT) | 4 | 0 | 요약 대기 · Jev-LCT: Open System-One Decision Engine with Free Calibrated Confidence from Recurrent Trajectories | 🆕 | 2026-09-26 |
| [iamvatsalpatel/tiershift](https://github.com/iamvatsalpatel/tiershift) | 4 | 1 | 요약 대기 · Shift every LLM call to the cheapest model that can handle it. Routing decided by TypeSafe Jev in ~180 ms. No training data. Policy in plain YAML. TypeScript and Python. | 🆕 | 2026-09-21 |
| [ickma2311/jev-baselines-eval](https://github.com/ickma2311/jev-baselines-eval) | 4 | 0 | 요약 대기 · Pre-registered independent eval of TypeSafe Jev against a nano-class LLM, a frontier LLM, and a supervised encoder (Banking77 + CLINC150 zero-shot) | 🆕 | 2026-09-25 |
| [jon-devlapaz/tink-route](https://github.com/jon-devlapaz/tink-route) | 4 | 0 | 요약 대기 · Dynamic, confidence-aware Agent Skill routing with TypeSafe Jev and Tink | 🆕 | 2026-09-26 |
| [jorgefspereira/opencode-auto-jev](https://github.com/jorgefspereira/opencode-auto-jev) | 4 | 0 | 요약 대기 · OpenCode plugin that adds an Auto (Jev) virtual model which routes each prompt to a configured real model using TypeSafe AI (Jev). | 🆕 | 2026-09-26 |
| [lirantal/discoprint](https://github.com/lirantal/discoprint) | 4 | 0 | 요약 대기 · Classify an artist's discography by theme, mood, and lyrical complexity with Jev (TypeSafe AI), and view it as a colorful terminal dashboard | 🆕 | 2026-09-27 |
| [maker-KK/todo-jev](https://github.com/maker-KK/todo-jev) | 4 | 1 | 요약 대기 · ⚡ Ultra-fast, low-cost intelligent task classifier and 3-tier routing engine powered by TypeSafe Jev (System One) | 🆕 | 2026-09-18 |
| [MongLong0214/jev-gate](https://github.com/MongLong0214/jev-gate) | 4 | 0 | 요약 대기 · Not every coding task needs your best model. Experimental Jev-powered model routing for Claude Code — V3 prototype runs today, V4 routes at the task boundary. | 🆕 | 2026-09-27 |
| [muhammedilyasy/jev-mail](https://github.com/muhammedilyasy/jev-mail) | 4 | 0 | 요약 대기 · Chrome extension that triages Gmail with TypeSafe's Jev model: category, priority, spam % and reply % on every email. | 🆕 | 2026-09-20 |
| [newfull5/malkuth](https://github.com/newfull5/malkuth) | 4 | 0 | 요약 대기 · Jev like System One decision models for multilingual | 🆕 | 2026-09-25 |
| [obetomuniz/auto-mode-for-paseo](https://github.com/obetomuniz/auto-mode-for-paseo) | 4 | 2 | 요약 대기 · Paseo plugin that routes each message to a persona on Codex, Claude, OpenCode, or any other installed provider. | 🆕 | 2026-09-26 |
| [pCwOrM/werr](https://github.com/pCwOrM/werr) | 4 | 0 | 요약 대기 · Zero-memory System-1 decision engine &amp; TypeSafe Jev wire-compatible runtime powered by Mandelbrot wave dynamics (The Zero-VRAM Gauntlet). | 🆕 | 2026-09-28 |
| [Query-farm/vgi-typesafe](https://github.com/Query-farm/vgi-typesafe) | 4 | 0 | 요약 대기 · A VGI worker exposing TypeSafe System One questions (choice, noul, score) to DuckDB/SQL as LATERAL-joinable table functions | 🆕 | 2026-09-19 |
| [Ravinder82/jev-flash-router](https://github.com/Ravinder82/jev-flash-router) | 4 | 1 | 요약 대기 · open-sourced jev-flash-router: an MCP server for TypeSafe's new Jev model.  AI coding agents waste hundreds of reasoning tokens just deciding which file to edit, which route to pick, or whether a diff breaks tests.  Jev evaluates state and outputs calibrated probabilities.  Works with Cursor, Windsurf, &amp; Claude Code | 🆕 | 2026-09-20 |
| [rmosleydb/jev-smart-router](https://github.com/rmosleydb/jev-smart-router) | 4 | 2 | 요약 대기 · JEV Smart Router — a Databricks App that uses TypeSafe JEV to pick which model answers each message, then runs inference on the chosen Databricks Foundation Model API endpoint. | 🆕 | 2026-09-22 |
| [satviksinha/jev-model-router](https://github.com/satviksinha/jev-model-router) | 4 | 0 | 요약 대기 · Model router for Claude Code using Jev | 🆕 | 2026-09-23 |
| [selcukusta/jev-mailroom](https://github.com/selcukusta/jev-mailroom) | 4 | 0 | 요약 대기 · Email triage PoC: reads a mailbox over IMAP and classifies each message by what it is and what it's about, using TypeSafe System One (Jev) — 11 questions in a single call, decided in Python. | 🆕 | 2026-09-20 |
| [SoundBlaster/Jev4Mellea](https://github.com/SoundBlaster/Jev4Mellea) | 4 | 0 | 요약 대기 · Jev adapter for Mellea | 🆕 | 2026-09-22 |
| [steven-shoemaker/hunch](https://github.com/steven-shoemaker/hunch) | 4 | 0 | 요약 대기 · Ask Jev over columns of data: closed-set questions, cached and joined back. | 🆕 | 2026-09-22 |
| [trietphan/jev-claw](https://github.com/trietphan/jev-claw) | 4 | 0 | 요약 대기 · Typed model routing for OpenClaw agents, powered by TypeSafe Jev | 🆕 | 2026-09-27 |
| [vibe-with-me-tools/n8n-nodes-jev](https://github.com/vibe-with-me-tools/n8n-nodes-jev) | 4 | 1 | 요약 대기 · Helper n8n community node for Jev by TypeSafe. Classify, route, and score text with questions you define, and get a probability for every answer so unsure items can go to review. | 🆕 | 2026-09-19 |
| [wayne930242/weihung-agent-root](https://github.com/wayne930242/weihung-agent-root) | 4 | 3 | 요약 대기 · Personal global PI agent system | 🆕 | 2026-09-27 |
| [xucian/talktojev](https://github.com/xucian/talktojev) | 4 | 2 | 요약 대기 · Generation is Classification: a chatbot with no language model in it. Every word is chosen by a classifier. Code for the paper and the demo at talktojev.com | 🆕 | 2026-09-24 |
| [AboveColin/jevclient](https://github.com/AboveColin/jevclient) | 3 | 0 | 요약 대기 · Async Python client for TypeSafe Jev. Typed questions in, probabilities and choices out, no prose to parse. | 🆕 | 2026-09-21 |
| [boldbug1/jev-triage](https://github.com/boldbug1/jev-triage) | 3 | 0 | 요약 대기 · Message triage CLI in Go, built on the Jev decision model from TypeSafe AI. Categorizes messages, scores urgency, and flags low-confidence ones for human review. | 🆕 | 2026-09-20 |
| [carlaiau/read-with-jev](https://github.com/carlaiau/read-with-jev) | 3 | 0 | 요약 대기 · A Demo of using JEV to classify various attributes of a book, and present that to the reader to augment the reading experience | 🆕 | 2026-09-24 |
| [Chandler-Sun/chat2jev](https://github.com/Chandler-Sun/chat2jev) | 3 | 0 | 요약 대기 · Convert legacy chat completion API request to Typesafe jev API | 🆕 | 2026-09-23 |
| [Charlyhno-eng/jev-codex-pilot](https://github.com/Charlyhno-eng/jev-codex-pilot) | 3 | 0 | 요약 대기 · Smart Codex overlay featuring JEV-model-based routing, contextual optimization, and Kanban automation. Reduce token consumption by up to 70% while maintaining control | 🆕 | 2026-09-27 |
| [collapseindex/jev-builder](https://github.com/collapseindex/jev-builder) | 3 | 0 | 요약 대기 · A browser form for building requests to TypeSafe's Jev: pick a template, fill in the blanks, copy the request. No JSON, no install, runs locally. | 🆕 | 2026-09-20 |
| [FirasSX914/Janus](https://github.com/FirasSX914/Janus) | 3 | 0 | 요약 대기 · Measure when to use Jev and other models on your data, then route accordingly. | 🆕 | 2026-09-18 |
| [flaviusapop/jev-router](https://github.com/flaviusapop/jev-router) | 3 | 1 | 요약 대기 · Routes each turn in Claude Code, Codex, Grok and opencode to the cheapest model and reasoning depth that can finish it, using TypeSafe Jev | 🆕 | 2026-09-18 |
| [gholtzap/jev-codex-model-and-effort-router](https://github.com/gholtzap/jev-codex-model-and-effort-router) | 3 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-23 |
| [islee23520/omo-jevlike-router](https://github.com/islee23520/omo-jevlike-router) | 3 | 0 | 요약 대기 · Jev-style one-pass skill router for OmO: shrink the skill catalog in your system prompt with one forward pass (frozen Qwen2.5-0.5B + jevlike head, fail-open extension) | 🆕 | 2026-09-18 |
| [jabr/classifier-benchmark](https://github.com/jabr/classifier-benchmark) | 3 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [JoacoMarc/jev-harness-router](https://github.com/JoacoMarc/jev-harness-router) | 3 | 1 | 요약 대기 · Per-turn router for agent harnesses: one 350ms Jev call picks the model tier, effort, tools and skill, behind a hard deadline with a regex fallback. Claude Agent SDK adapter included. | 🆕 | 2026-09-21 |
| [lexingtonhibiki/judgekit](https://github.com/lexingtonhibiki/judgekit) | 3 | 0 | 요약 대기 · Runtime judgment engine for System One (judge) models — YAML tasks, classify/score/route/verify, provider-agnostic, cost-accuracy benchmark (判官工具箱) | 🆕 | 2026-09-24 |
| [lomeshdutta/skill-router](https://github.com/lomeshdutta/skill-router) | 3 | 2 | 요약 대기 · Tell Claude Code which installed skill a session needs, using Jev (TypeSafe AI) for the decision and skills.sh for discovery. | 🆕 | 2026-09-18 |
| [luxus/ha-conversation-jev](https://github.com/luxus/ha-conversation-jev) | 3 | 1 | 요약 대기 · Home Assistant custom component: Conversation agent with Jev fast-path + Grok fallback | 🆕 | 2026-09-19 |
| [Manavarya09/verdict](https://github.com/Manavarya09/verdict) | 3 | 1 | 요약 대기 · Small, fast, honest decision models. Open alternative to Jev: zero-shot, fit on your labels in seconds, calibrated with a coverage guarantee, Jev wire-compatible. | 🆕 | 2026-09-24 |
| [manjunathshiva/opendecider](https://github.com/manjunathshiva/opendecider) | 3 | 0 | 요약 대기 · Small open decision models (System One): typed choice / score / yes-no questions with calibrated probabilities. Beats Laya on typed-decisions; runs on CPU, NVIDIA and Apple Silicon. | 🆕 | 2026-09-27 |
| [marcreichel/laya-php](https://github.com/marcreichel/laya-php) | 3 | 0 | 요약 대기 · Classify text in PHP without an LLM bill: typed decisions in 100+ languages, self-hosted. Laravel-ready SDK for Laya, a Jev AI alternative. | 🆕 | 2026-09-27 |
| [mcftira/jev-route](https://github.com/mcftira/jev-route) | 3 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [nanami-0713/dsh-jev-decide](https://github.com/nanami-0713/dsh-jev-decide) | 3 | 2 | 요약 대기 · DSH plugin: register TypeSafe Jev (System One decision model) as an agent tool — jev_decide returns calibrated probabilities (noul/choice/score) for routing/triage/guardrail judgments, no text generation. 把 TypeSafe Jev 决策模型注册为 DSH agent 工具 | 🆕 | 2026-09-24 |
| [pewriebontal/typesafe-sdk-cpp](https://github.com/pewriebontal/typesafe-sdk-cpp) | 3 | 0 | 요약 대기 · An unofficial CPP 20 SDK for the TypeSafe API | 🆕 | 2026-09-24 |
| [qddegtya/qualm](https://github.com/qddegtya/qualm) | 3 | 1 | 요약 대기 · Typed decisions from a System One model, where uncertainty is something you have to handle. | 🆕 | 2026-09-18 |
| [steven-shoemaker/hunch-js](https://github.com/steven-shoemaker/hunch-js) | 3 | 0 | 요약 대기 · Jev judgments as TypeScript functions over arrays: classify, score, check, where, extract, pick, rank, verify. LLMs propose, Jev decides. | 🆕 | 2026-09-22 |
| [symfony/ai-type-safe-platform](https://github.com/symfony/ai-type-safe-platform) | 3 | 0 | 요약 대기 · TypeSafe platform bridge for Symfony AI | 🆕 | 2026-09-25 |
| [TokenTrim/jev-routing-experiment](https://github.com/TokenTrim/jev-routing-experiment) | 3 | 2 | 요약 대기 · Benchmarking TypeSafe's Jev decision model as a cost-efficient LLM router on RouterArena | 🆕 | 2026-09-17 |
| [tylerjharden/ailerix](https://github.com/tylerjharden/ailerix) | 3 | 0 | 요약 대기 · Type-safe model router. Jev (System One) banks each request to a typed catalog route. | 🆕 | 2026-09-20 |
| [walidboulanouar/jev-agent-kit](https://github.com/walidboulanouar/jev-agent-kit) | 3 | 0 | 요약 대기 · jevkit: fast typed decisions for agents. CLI and MCP tools (route, triage, guard, grep, rank, compact, judge) on TypeSafe Jev. Zero dependencies. | 🆕 | 2026-09-21 |
| [wangkuangkuang/jev-mcp-server](https://github.com/wangkuangkuang/jev-mcp-server) | 3 | 0 | 요약 대기 · MCP server for Jev (TypeSafe System One): the three official question types — choice, score, noul — plus batch classify. Calibrated probabilities, ~0.5s, &lt;$0.001/call. | 🆕 | 2026-09-22 |
| [xafold/jev-router](https://github.com/xafold/jev-router) | 3 | 0 | 요약 대기 · jev-router: automatic model and effort switching for Claude Code | 🆕 | 2026-09-26 |
| [ziyacivan/reflex-router](https://github.com/ziyacivan/reflex-router) | 3 | 1 | 요약 대기 · Loopback proxy for Claude Code: judges each task's reasoning demand, optionally routes to a cheaper model, and records the outcome. | 🆕 | 2026-09-26 |
| [FaqFirebase/Nexus-Orchestrator](https://github.com/FaqFirebase/Nexus-Orchestrator) | 1 | 0 | **무엇** 사용자 프롬프트의 의도를 분석해 로컬 또는 클라우드 LLM으로 적절히 분기해 주는 셀프 호스팅 오케스트레이션 계층이다.<br>**판단** 입력 프롬프트의 의도를 CODING, REASONING, CREATIVE, VISION, DOCUMENT, GENERAL, FAST, SECURITY 중 하나로 분류(choice)한다.<br>**포인트** ROUTER_ENGINE 설정으로 일반 LLM 외에 TypeSafe Jev 라우터를 직접 지원하며, MCP 서버 연동 및 SearXNG 도구 호출을 지원한다. | 🆕 | 2026-09-28 |
| [FrancoisChastel/jev-router](https://github.com/FrancoisChastel/jev-router) | 1 | 0 | **무엇** Claude Code, Codex 등 코딩 에이전트의 매 턴을 완료 가능한 가장 저렴한 모델로 동적 라우팅하는 프록시 릴레이 도구다.<br>**판단** 작업 상황이 모호할 때 제한된 요약을 바탕으로 5가지 태스크 질문 또는 3가지 실행 질문을 질의해 난이도와 상태를 판단시킨다.<br>**포인트** 도구 실행 신호 기반 휴리스틱과 jev 판단을 결합하며, 전체 대화 대신 요약본만 전달하고 판사 장애 시 기본 모델로 fail-open된다. | 🆕 | 2026-09-28 |
| [455-dIAO/jev-codex-router-skill](https://github.com/455-dIAO/jev-codex-router-skill) | 2 | 0 | 요약 대기 · Portable Codex Skill for Jev model and reasoning-effort routing, with safe installation and Chinese usage guides | 🆕 | 2026-09-22 |
| [a-mad-av8r/demerzel](https://github.com/a-mad-av8r/demerzel) | 2 | 0 | 요약 대기 · Local-first AI gateway for encrypted provider accounts, model routing, usage management and failover. | 🆕 | 2026-09-27 |
| [AABBAASS1/jev-router](https://github.com/AABBAASS1/jev-router) | 2 | 1 | 요약 대기 · Route any task to the right AI agent in under 1 second using Jev (TypeSafe System One). Supports Claude, ChatGPT, Cursor, and Antigravity with auto-launch on macOS, Windows, and Linux. | 🆕 | 2026-09-21 |
| [aitofy-dev/jev-awesome-skills](https://github.com/aitofy-dev/jev-awesome-skills) | 2 | 1 | 요약 대기 · Open-source Jev skills for Claude Code, Codex, Cursor, and Grok. TypeSafe System One: choice, noul, score. Proceed, ask, or stop. | 🆕 | 2026-09-21 |
| [az9713/jev-model-router](https://github.com/az9713/jev-model-router) | 2 | 0 | 요약 대기 · Jev (TypeSafe) model router on the Vercel AI Gateway | 🆕 | 2026-09-20 |
| [Bodila51/Jev-chooses-a-LLM](https://github.com/Bodila51/Jev-chooses-a-LLM) | 2 | 0 | 요약 대기 · Jev Router for Cursor - TypeSafe Jev picks COST/BALANCED/INTELLIGENCE, Cursor executes | 🆕 | 2026-09-20 |
| [briwilcox/quiet-feed](https://github.com/briwilcox/quiet-feed) | 2 | 0 | 요약 대기 · Chrome extension that filters X timelines with your own TypeSafe Jev API key, or GLiNER-Decide locally | 🆕 | 2026-09-25 |
| [ddfeyes/jev-mode](https://github.com/ddfeyes/jev-mode) | 2 | 0 | 요약 대기 · I kept watching coding agents burn context on decisions that aren't hard - triage 400 tickets, tag 600 files, route to one of six teams. jev-mode moves those verdicts to a typed-judgment model. I A/B'd it: 78% fewer tokens, 16x less work-attributable input, accuracy 96.1% vs 93.7%. Python, no deps, MIT. | 🆕 | 2026-09-18 |
| [DoGMaTiiC/hermes-jev](https://github.com/DoGMaTiiC/hermes-jev) | 2 | 2 | 요약 대기 · Hermes Agent plugin: route each turn to the one skill that fits, via TypeSafe Jev on the Vercel AI Gateway. Fail-open, opt-in, stdlib only. | 🆕 | 2026-09-25 |
| [emreozyoruk/hush](https://github.com/emreozyoruk/hush) | 2 | 1 | 요약 대기 · Issue triage that stays quiet when it isn't sure. Calibrated labels, spam and duplicate detection — with abstention. | 🆕 | 2026-09-20 |
| [fatwang2/jev-review-action](https://github.com/fatwang2/jev-review-action) | 2 | 1 | 요약 대기 · Configurable GitHub submission review and PR classification with TypeSafe Jev. No text-generation model. | 🆕 | 2026-09-20 |
| [ferraroroberto/local-llm-hub](https://github.com/ferraroroberto/local-llm-hub) | 2 | 0 | 요약 대기 · playground to use different local LLM models as a API hub | 🆕 | 2026-09-27 |
| [Flam1ngFir3ball/jev-claude-router](https://github.com/Flam1ngFir3ball/jev-claude-router) | 2 | 0 | 요약 대기 · Model router for Claude Code using Jev | 🆕 | 2026-09-25 |
| [gazelle93/decision-models-under-pressure](https://github.com/gazelle93/decision-models-under-pressure) | 2 | 0 | 요약 대기 · Seven decision models, measured as the candidate list grows, the option order changes, and the wrong answers stop being obvious. | 🆕 | 2026-09-25 |
| [gualican/jev-model-router](https://github.com/gualican/jev-model-router) | 2 | 1 | 요약 대기 · Routes prompts to the right Claude tier (Haiku/Sonnet/Opus) using TypeSafe's Jev model | 🆕 | 2026-09-21 |
| [hamakyo/jev-starter](https://github.com/hamakyo/jev-starter) | 2 | 1 | 요약 대기 · Typed, policy-driven decision workflows on top of TypeSafe AI Jev: confidence routing, fallbacks, evaluation, and RAG patterns for TypeScript apps. | 🆕 | 2026-09-18 |
| [hemanth/hfjev](https://github.com/hemanth/hfjev) | 2 | 1 | 요약 대기 · Classify Hugging Face datasets across typed semantic dimensions with TypeSafe Jev System One. | 🆕 | 2026-09-21 |
| [hemanth/jev-chess](https://github.com/hemanth/jev-chess) | 2 | 0 | 요약 대기 · Chess moves, evaluations, persona opponents, and game classification with TypeSafe AI System One | 🆕 | 2026-09-21 |
| [hugo-alves/jev-router-playground](https://github.com/hugo-alves/jev-router-playground) | 2 | 0 | 요약 대기 · Interactive playground for testing Jev model-routing decisions against OpenRouter models | 🆕 | 2026-09-18 |
| [ibrahemid/git-jev-stage](https://github.com/ibrahemid/git-jev-stage) | 2 | 0 | 요약 대기 · Select Git changes for staging with a plain-language description. | 🆕 | 2026-09-20 |
| [ikashana/jev-dingtalk](https://github.com/ikashana/jev-dingtalk) | 2 | 0 | 요약 대기 · 钉钉信息 Jev 分拣器（jev-dingtalk）：把钉钉邮件与聊天分拣成 Now / Today / Queue / Ignore 清单——谁在等回复、谁需要人看一眼。dws 取数、Jev 分类、报告本地渲染，可直接作为 Agent 技能使用。\| DingTalk mail &amp; chat triage with Jev. | 🆕 | 2026-09-23 |
| [INEEDBUG/hermes-adaptive-model-router](https://github.com/INEEDBUG/hermes-adaptive-model-router) | 2 | 0 | 요약 대기 · Privacy-preserving adaptive LLM routing layer for Hermes Agent: shadow-first multi-model routing with a minimal redacted Routing Dossier, fail-open error handling, a file-based runtime kill switch and content-free production telemetry. | 🆕 | 2026-09-26 |
| [ItBayMax/typesafe-ai-jev-example](https://github.com/ItBayMax/typesafe-ai-jev-example) | 2 | 0 | 요약 대기 · Hands-on demos for TypeSafe's Jev (System One) model: six runnable examples and four field notes. Runs offline with no API key; samples/ holds real measured output from jev-1.13.0. | 🆕 | 2026-09-21 |
| [itscloud0/codex-jev-native-router](https://github.com/itscloud0/codex-jev-native-router) | 2 | 0 | 요약 대기 · Experimental native Codex Desktop and CLI model routing with Jev and a configurable allowlist | 🆕 | 2026-09-26 |
| [jangtrinh/design-os-generative-ui](https://github.com/jangtrinh/design-os-generative-ui) | 2 | 0 | 요약 대기 · Sub-50ms Real-Time Generative UI engine powered by Laya-MLX and TypeSafe JEV Cascade Router | 🆕 | 2026-09-26 |
| [JedimEmO/typesafe-client](https://github.com/JedimEmO/typesafe-client) | 2 | 0 | 요약 대기 · Unofficial typed async Rust client for the TypeSafe System One API | 🆕 | 2026-09-16 |
| [Jessie-QingYu/jev-in-the-wild](https://github.com/Jessie-QingYu/jev-in-the-wild) | 2 | 2 | 요약 대기 · Real-world Jev use cases, open-source projects, benchmarks and criticism — what people actually build with TypeSafe AI's Jev, and where it fails. Machine-readable, updated daily. | 🆕 | 2026-09-27 |
| [jexp/watfile](https://github.com/jexp/watfile) | 2 | 0 | 요약 대기 · Text/PDF - File categorization and sorting with Typesafe AI Jev or local calibrated decision model | 🆕 | 2026-09-21 |
| [juanlentino/jev-connector](https://github.com/juanlentino/jev-connector) | 2 | 0 | 요약 대기 · WordPress connector for TypeSafe Jev: typed, confidence-scored answers your code can branch on. | 🆕 | 2026-09-23 |
| [lazniak/jevskill](https://github.com/lazniak/jevskill) | 2 | 1 | 요약 대기 · Teach your coding agent to stop burning context. Jev (System One) via OpenRouter or TypeSafe: 325ms, 0.000013 USD per decision. A/B tested 99.3% fewer input tokens with accuracy up. Ships a reversible reduce and a ledger that learns when Jev pays off. | 🆕 | 2026-09-27 |
| [lucianfialho/jev-model-router](https://github.com/lucianfialho/jev-model-router) | 2 | 0 | 요약 대기 · Cost-optimized OpenRouter model router using TypeSafe's Jev, with a live full-catalog scorer instead of a hardcoded model list | 🆕 | 2026-09-19 |
| [LXBWOW/dsh-completion-supervisor](https://github.com/LXBWOW/dsh-completion-supervisor) | 2 | 0 | 요약 대기 · Checks whether a coding agent completion claim is actually true: deterministic evidence gathered in code, one batched Jev assessment, and a pure policy. DSH plugin. | 🆕 | 2026-09-23 |
| [m0rphtail/triagedy](https://github.com/m0rphtail/triagedy) | 2 | 1 | 요약 대기 · Alert triage as a UNIX filter: JSONL security alerts in, typed decisions out. Runs on TypeSafe Jev or a local model; policy routing stays in code. | 🆕 | 2026-09-22 |
| [mingleiw/jev-oncall](https://github.com/mingleiw/jev-oncall) | 2 | 0 | 요약 대기 · Incident triage on TypeSafe Jev — the model judges, plain code decides. Routing on probability distributions with a human-review middle band and fail-open defaults. | 🆕 | 2026-09-28 |
| [MrCipherSmith/keryx](https://github.com/MrCipherSmith/keryx) | 2 | 0 | 요약 대기 · CLI-first metaproject toolkit — a versioned .metaproject/ workspace giving AI agents and developers one shared, structured project context. | 🆕 | 2026-09-28 |
| [oleg-koval/veto](https://github.com/oleg-koval/veto) | 2 | 0 | 요약 대기 · Model router with self-admitting receivers — tasks require explicit model acceptance before execution | 🆕 | 2026-09-27 |
| [oluies/jev-vs-spacy](https://github.com/oluies/jev-vs-spacy) | 2 | 0 | 요약 대기 · spaCy vs TypeSafe Jev on English spam, support routing and Swedish routing, evaluated in Braintrust | 🆕 | 2026-09-27 |
| [onlyjq04/jev-agent-hooks](https://github.com/onlyjq04/jev-agent-hooks) | 2 | 1 | 요약 대기 · TypeSafe Jev hooks for Claude Code, Codex and pi: per-turn skill suggestion and subagent model routing | 🆕 | 2026-09-23 |
| [Partysun/jigor](https://github.com/Partysun/jigor) | 2 | 0 | 요약 대기 ·  zero-shot classifier models gateway and runner | 🆕 | 2026-09-26 |
| [pekth/draftpulse](https://github.com/pekth/draftpulse) | 2 | 0 | 요약 대기 · Experimental: live X draft viral scorer powered by TypeSafe Jev | 🆕 | 2026-09-27 |
| [PistachioAIHQ/jev-synergy-screening](https://github.com/PistachioAIHQ/jev-synergy-screening) | 2 | 1 | 요약 대기 · Jev (TypeSafe System One) × ASReview SYNERGY abstract screening demo — Choice/Noul vs gold labels | 🆕 | 2026-09-16 |
| [PraveenAShukla/polyjev](https://github.com/PraveenAShukla/polyjev) | 2 | 0 | 요약 대기 · Typed, calibrated decisions from any LLM: yes/no, choice, rating and grounded extraction with honest probabilities. Claude, GPT, Gemini, vLLM, Ollama or Hugging Face. Jev-compatible API server. | 🆕 | 2026-09-27 |
| [psyb0t/decidealot](https://github.com/psyb0t/decidealot) | 2 | 0 | 요약 대기 · Your hardware. Local decision models. Turn messy state into typed choices, scores, and yes-no calls over TypeSafe-compatible HTTP and MCP. No cloud bill. | 🆕 | 2026-09-24 |
| [Quintui/jev-use-cases](https://github.com/Quintui/jev-use-cases) | 2 | 2 | 요약 대기 · Demo app: Jev (TypeSafe System One) use cases with the AI SDK and shadcn/ui | 🆕 | 2026-09-25 |
| [siiick/pi-pignon](https://github.com/siiick/pi-pignon) | 2 | 0 | 요약 대기 · Pi coding agent extension that shifts to the right LLM for each prompt, using a local (Laya) or remote (Jev) decision model to judge task difficulty. | 🆕 | 2026-09-24 |
| [silvariasereneblossom/jeverifier](https://github.com/silvariasereneblossom/jeverifier) | 2 | 1 | 요약 대기 · JeVerifier: cheap Jev (TypeSafe) checks that keep code maintainable and docs consistent, plus context retrieval — modest token savings | 🆕 | 2026-09-25 |
| [suidouble/let-jev-speak](https://github.com/suidouble/let-jev-speak) | 2 | 0 | 요약 대기 · Experiment to trick Typesafe’s Jev, aka “the language model that won’t talk” into actually talking.  | 🆕 | 2026-09-20 |
| [tomek7667/cbjev](https://github.com/tomek7667/cbjev) | 2 | 0 | 요약 대기 · Typed decisions (choice/score/noul) from one encoder pass - faster, better-calibrated successor to Laya, Jev wire compatible | 🆕 | 2026-09-24 |
| [tomerglick57/Jevstiller](https://github.com/tomerglick57/Jevstiller) | 2 | 0 | 요약 대기 · Distill a repeated Jev classification task into a local model, on the fly — same answers, your hardware. | 🆕 | 2026-09-27 |
| [ussyverse/hermes-jev-router](https://github.com/ussyverse/hermes-jev-router) | 2 | 0 | 요약 대기 · Experimental Hermes plugin: Jev-assisted model routing plans with budget and capability constraints. API access pending. | 🆕 | 2026-09-16 |
| [wellkilo/codex-jev-preflight](https://github.com/wellkilo/codex-jev-preflight) | 2 | 1 | 요약 대기 · Fail-open Codex UserPromptSubmit hook that injects TypeSafe Jev pre-task routing metadata. | 🆕 | 2026-09-22 |
| [yutkat/github-star-organizer-jev](https://github.com/yutkat/github-star-organizer-jev) | 2 | 0 | 요약 대기 · Python tool that classifies GitHub stars into existing GitHub Lists using TypeSafe Jev | 🆕 | 2026-09-18 |
| [Z761293629/pi-jev-helm](https://github.com/Z761293629/pi-jev-helm) | 2 | 0 | 요약 대기 · Pi extension that uses Jev task classification (via OpenRouter) to route each run to explicitly configured models with fail-open policy. Public Preview. | 🆕 | 2026-09-21 |
| [ZHUBoer/ego-jev](https://github.com/ZHUBoer/ego-jev) | 2 | 0 | 요약 대기 · Complete browser tasks with Ego Lite and actively call Jev for semantic target selection, filtering, ranking, classification and text evidence judgments. | 🆕 | 2026-09-19 |
| [zkjoie/jevbus](https://github.com/zkjoie/jevbus) | 2 | 1 | 요약 대기 · A streaming event bus whose routing, subscription and consumption are decided by a probabilistic judge. The reference judge is TypeSafe AI's Jev (System One) model: send it a payload and a set of typed questions, get back calibrated probabilities instead of prose. | 🆕 | 2026-09-21 |
| [Zuhair-01/laya-windows](https://github.com/Zuhair-01/laya-windows) | 2 | 0 | 요약 대기 · Windows port of Laya typed-decision AI (ONNX Runtime + DirectML) — Core ML/Apple Neural Engine alternative with first-class Arabic support. No text generation, no hallucination, runs on any DX12 GPU. | 🆕 | 2026-09-22 |
| [100yenadmin/agent-skill-debloater](https://github.com/100yenadmin/agent-skill-debloater) | 1 | 0 | 요약 대기 · Installing packs of skills bloats context and waste tokens. Turn them into searchable skill libraries! | 🆕 | 2026-09-27 |
| [aj604/jev-chain](https://github.com/aj604/jev-chain) | 1 | 0 | 요약 대기 · jev-jev-jev-jev | 🆕 | 2026-09-28 |
| [akanksha-rajhans-ai/diffguard](https://github.com/akanksha-rajhans-ai/diffguard) | 1 | 0 | 요약 대기 · Probabilistic pull-request risk triage using Jev and deterministic review policy. | 🆕 | 2026-09-24 |
| [allenporter/home-assistant-typesafe](https://github.com/allenporter/home-assistant-typesafe) | 1 | 2 | 요약 대기 · Home Assistant conversation integration powered by the Jev / TypeSafe AI API for fast, structured intent routing and device control | 🆕 | 2026-09-21 |
| [androiddrew/whatdo](https://github.com/androiddrew/whatdo) | 1 | 0 | 요약 대기 · What Do is a Zeroshot classifier service for System One style models. | 🆕 | 2026-09-25 |
| [andyrewlee/awesome-system-one](https://github.com/andyrewlee/awesome-system-one) | 1 | 1 | 요약 대기 · A curated list of System One models, open implementations, agents, SDKs, and benchmarks | 🆕 | 2026-09-27 |
| [aniruddh-krovvidi/switchboard](https://github.com/aniruddh-krovvidi/switchboard) | 1 | 0 | 요약 대기 · Guardrail + model router for LLM gateways on TypeSafe's Jev (System One model), with an independent accuracy/calibration/latency evaluation. Stdlib Python. | 🆕 | 2026-09-20 |
| [ARCJ137442/jev-switch](https://github.com/ARCJ137442/jev-switch) | 1 | 0 | 요약 대기 · A fast, local-first gateway for aggregating and routing TypeSafe Jev model endpoints \| 一款快速、本地优先的网关，用于聚合与路由 TypeSafe Jev 模型入口 | 🆕 | 2026-09-27 |
| [arnab621/typesafe-jev-plugin](https://github.com/arnab621/typesafe-jev-plugin) | 1 | 1 | 요약 대기 · A plugin that lets you build reusable **solution signatures** for any classification or scoring problem, then run CSV, Excel, or text file datasets through the [TypeSafe Jev](https://docs.typesafe.ai) API and export structured results to Excel. | 🆕 | 2026-09-25 |
| [baize7815/jev-mcp-open-source](https://github.com/baize7815/jev-mcp-open-source) | 1 | 0 | 요약 대기 · Self-hosted Jev MCP on Cloudflare Workers with intent routing, retrieval reranking and batch judgments | 🆕 | 2026-09-22 |
| [bvicsay/adaptmypage](https://github.com/bvicsay/adaptmypage) | 1 | 1 | 요약 대기 · IntentFlags — semantic feature flags for websites, powered by Jev. Infers what a visitor is trying to do and hands it to your React code as a flag. | 🆕 | 2026-09-21 |
| [Cab14bacc/jev-sheets](https://github.com/Cab14bacc/jev-sheets) | 1 | 1 | 요약 대기 · Jev for Google Sheets | 🆕 | 2026-09-25 |
| [cdubiel08/jev-ercot](https://github.com/cdubiel08/jev-ercot) | 1 | 0 | 요약 대기 · Texas retail electric plan shopper: Power to Choose corpus, Jev (TypeSafe System One) classifier, Next.js app | 🆕 | 2026-09-26 |
| [Chorylee7/JEV](https://github.com/Chorylee7/JEV) | 1 | 0 | 요약 대기 · JEV 调研报告：TypeSafe System One 决策模型与开源对标（含原始核实记录） | 🆕 | 2026-09-21 |
| [CMaintz/jev-triage](https://github.com/CMaintz/jev-triage) | 1 | 1 | 요약 대기 · Near-free GitHub issue triage powered by TypeSafe AI's Jev - typed, confidence-gated labels that escalate only the uncertain cases. | 🆕 | 2026-09-24 |
| [creativoma/here-we-go-jev](https://github.com/creativoma/here-we-go-jev) | 1 | 0 | 요약 대기 · Local playground and test bench for TypeSafe's Jev System One model: typed questions, calibrated-probability answers, and side-by-side comparison with an LLM baseline. | 🆕 | 2026-09-26 |
| [d0nj/opencode-smart-reasoning](https://github.com/d0nj/opencode-smart-reasoning) | 1 | 0 | 요약 대기 · OpenCode plugin that routes per-request reasoning effort for agents via Jev (TypeSafe SystemOne) — cheap prompts stay cheap, hard ones get full reasoning | 🆕 | 2026-09-22 |
| [dashbi1/jev-sim](https://github.com/dashbi1/jev-sim) | 1 | 0 | 요약 대기 · Jev-compatible /v1/systemone server reading typed decisions from LLM logits, benchmarked against TypeSafe's Jev on the same items via JevBench | 🆕 | 2026-09-21 |
| [ddlaws0n/jevportfolio](https://github.com/ddlaws0n/jevportfolio) | 1 | 0 | 요약 대기 · 1,000 synthetic SaaS accounts, 6,000 constrained judgments from TypeSafe's Jev, and ordinary TypeScript deciding who needs a human today. TanStack Start on Bun. | 🆕 | 2026-09-20 |
| [de-niji/jev-hermes](https://github.com/de-niji/jev-hermes) | 1 | 0 | 요약 대기 · Jev for Hermes Agent: cheap typed decisions via TypeSafe Jev on OpenRouter. Routes turns, gates risky commands, compacts tool history, triages mail. | 🆕 | 2026-09-24 |
| [dshakes/firstpass](https://github.com/dshakes/firstpass) | 1 | 1 | 요약 대기 · The verification layer for LLM serving — your check runs on every answer before it ships, with a signed, tamper-evident receipt for each decision and a distribution-free bound on wrong answers served. Proof over prediction. | 🆕 | 2026-09-25 |
| [EnesDemir143/jev-laya-benchmark](https://github.com/EnesDemir143/jev-laya-benchmark) | 1 | 0 | 요약 대기 · Local benchmark comparing TypeSafe Jev and Laya-MLX for structured issue classification | 🆕 | 2026-09-22 |
| [forestwas/gmail-jev](https://github.com/forestwas/gmail-jev) | 1 | 0 | 요약 대기 · Gmail inbox triage with TypeSafe Jev — workflow labels, archive decisions, and optional live/backfill workers. | 🆕 | 2026-09-22 |
| [G0-0000/pi-subagent-jev](https://github.com/G0-0000/pi-subagent-jev) | 1 | 0 | 요약 대기 · A pi package that gates subagent dispatches through a JEV System One decision model, plus general-purpose tools to query that model. | 🆕 | 2026-09-27 |
| [gentslava/pr-scout](https://github.com/gentslava/pr-scout) | 1 | 0 | 요약 대기 · Triage every open pull request of a GitHub repo in minutes: Jev typed questions, local Ollama descriptions, git test-merge, take / consider / skip board | 🆕 | 2026-09-27 |
| [GitHub30/OpenJev](https://github.com/GitHub30/OpenJev) | 1 | 0 | 요약 대기 · Open-weight System One model (Jev-compatible): calibrated noul / choice / score decisions in one forward pass, no text generation. Works with TypeSafe's typesafe-sdk unchanged. | 🆕 | 2026-09-20 |
| [gmaxxxie/jev-router](https://github.com/gmaxxxie/jev-router) | 1 | 0 | 요약 대기 · Per-prompt model routing for Pi, driven by Jev (TypeSafe System One) | 🆕 | 2026-09-19 |
| [goodruizhan/pi-jev-control](https://github.com/goodruizhan/pi-jev-control) | 1 | 0 | 요약 대기 · System-One control plane for Pi Coding Agent powered by TypeSafe Jev. | 🆕 | 2026-09-26 |
| [gopaljigaur/decide](https://github.com/gopaljigaur/decide) | 1 | 0 | 요약 대기 · One client for every decision model: Choice, Score and Noul over Jev, OpenRouter, laya, MLX, CrossEncoders and LLM fallback | 🆕 | 2026-09-23 |
| [gregb100/gavel](https://github.com/gregb100/gavel) | 1 | 0 | 요약 대기 · For OpenClaw users, Gavel is a new plugin and skill that connects to OpenRouter so you can use the power of Jev.  Route bugs, triage failures, and gate PRs in 200ms for $0.00002. OpenClaw plugin for TypeSafe Jev structured decisions. | 🆕 | 2026-09-26 |
| [GTC6244/Laya-Decision](https://github.com/GTC6244/Laya-Decision) | 1 | 1 | 요약 대기 · Pure-Rust port of the Laya non-autoregressive System-1 decision engine — native candle inference (ModernBERT/mmBERT), Router, HTTP server, CLI. Matches PyTorch to 1e-4. | 🆕 | 2026-09-27 |
| [guchengod/typesafe-sdk-go](https://github.com/guchengod/typesafe-sdk-go) | 1 | 0 | 요약 대기 · Go SDK for TypeSafe AI — classification and rating primitives over text and JSON | 🆕 | 2026-09-26 |
| [guchi-apps/ops-dashboard](https://github.com/guchi-apps/ops-dashboard) | 1 | 0 | 요약 대기 · VPS稼働状況・UptimeRobot・Uptime Kuma監視ダッシュボード | 🆕 | 2026-09-27 |
| [hemanth/traffic-guard](https://github.com/hemanth/traffic-guard) | 1 | 0 | 요약 대기 · Empirical, zero-dependency reverse-proxy traffic classifier and bot mitigator in &lt;100μs | 🆕 | 2026-09-21 |
| [hoangngochuong24947-gif/jev-figure-router](https://github.com/hoangngochuong24947-gif/jev-figure-router) | 1 | 0 | 요약 대기 · Universal Figure &amp; Diagram Router for AI Agents powered by TypeSafe Jev / Jeb System-1 | 🆕 | 2026-09-20 |
| [hoshinodis/opencode-intent-gate](https://github.com/hoshinodis/opencode-intent-gate) | 1 | 0 | 요약 대기 · TypeSafe Jev-powered intent gate for OpenCode: confirm intent before the agent dives into underspecified requests. | 🆕 | 2026-09-27 |
| [huzeyfe07/jev-route](https://github.com/huzeyfe07/jev-route) | 1 | 0 | 요약 대기 · Async, typed intent &amp; tool routing for Python agents: Jev decides, a confidence gate stops weak decisions before they reach a privileged tool. | 🆕 | 2026-09-26 |
| [initrd/himalaya-jev-mail-classify](https://github.com/initrd/himalaya-jev-mail-classify) | 1 | 0 | 요약 대기 · Label and prioritise Gmail with a language model. Reads mail through himalaya, classifies each thread with Jev (TypeSafe) over OpenRouter, and applies Gmail labels and colours. Dry run by default, idempotent, no state file. | 🆕 | 2026-09-25 |
| [jammaru/jev-affected](https://github.com/jammaru/jev-affected) | 1 | 0 | 요약 대기 · Semantic task routing for software development, powered by Jev. | 🆕 | 2026-09-20 |
| [jangtrinh/design-os-system-one](https://github.com/jangtrinh/design-os-system-one) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [Jason-Doyle/jev-parallel-dispatch](https://github.com/Jason-Doyle/jev-parallel-dispatch) | 1 | 0 | 요약 대기 · Browser simulation for parallel Jev decisions with capacity-constrained assignment and retained evidence | 🆕 | 2026-09-27 |
| [joaoantoniocoelho/tech-digest](https://github.com/joaoantoniocoelho/tech-digest) | 1 | 0 | 요약 대기 · A daily technology digest powered by AI classification, deterministic ranking, and semantic deduplication. | 🆕 | 2026-09-25 |
| [keithmackay/modelrouter](https://github.com/keithmackay/modelrouter) | 1 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [khaledsAlshibani/jev-ci-classifier](https://github.com/khaledsAlshibani/jev-ci-classifier) | 1 | 0 | 요약 대기 · CI example using Jev to classify failed PR checks and return structured decisions with probabilities. | 🆕 | 2026-09-20 |
| [lawrence3699/Jev-Style-0.8B-Decision-v3-GGUF](https://github.com/lawrence3699/Jev-Style-0.8B-Decision-v3-GGUF) | 1 | 0 | 요약 대기 · GitHub mirror of the chaoliangUNSW/Jev-Style-0.8B-Decision-v3-GGUF Hugging Face model | 🆕 | 2026-09-26 |
| [levi-qiao/SemaLoom](https://github.com/levi-qiao/SemaLoom) | 1 | 0 | 요약 대기 · Ontology-driven business layer for serious AI Q&amp;A over existing data sources, with deterministic semantics, evidence, and optional Jev routing. | 🆕 | 2026-09-25 |
| [Madikhan33/jev_codex](https://github.com/Madikhan33/jev_codex) | 1 | 0 | 요약 대기 · Context-aware routing for Codex: classify prompts, choose agent profiles, coordinate subagents, and verify results. | 🆕 | 2026-09-22 |
| [marcus/frost](https://github.com/marcus/frost) | 1 | 0 | 요약 대기 · A flexible and configurable CLI model router using TypeSafe Jev. | 🆕 | 2026-09-17 |
| [mhoenes/sortroom](https://github.com/mhoenes/sortroom) | 1 | 0 | 요약 대기 · Self-hosted IMAP mail sorter: a classification model (any TypeSafe API service, e.g. Jev) files new mail into your folders, stars what needs action and tracks expiring offers. Docker image with a web admin UI. | 🆕 | 2026-09-27 |
| [misaalya/snbt-jev-bench](https://github.com/misaalya/snbt-jev-bench) | 1 | 0 | 요약 대기 ·  Jev on Indonesia's SNBT 2025 university entrance test: 159 questions, seven subtests, audited answer keys. | 🆕 | 2026-09-24 |
| [NAME0x0/Jevlet](https://github.com/NAME0x0/Jevlet) | 1 | 0 | 요약 대기 · Jevlet: a small, calibrated System-One decision model (typed Noul/Choice/Score questions in, probabilities over live options out, no text generation) driving an always-on Windows command palette. Research reconstruction of TypeSafe's Jev idea. | 🆕 | 2026-09-26 |
| [ndolinschi/pulselane](https://github.com/ndolinschi/pulselane) | 1 | 0 | 요약 대기 · PulseLane — clinic triage decisions via TypeSafe Jev | 🆕 | 2026-09-17 |
| [ndolinschi/swarmrouter](https://github.com/ndolinschi/swarmrouter) | 1 | 0 | 요약 대기 · Route tasks to research/code/browser/support/writer agents via TypeSafe Jev | 🆕 | 2026-09-17 |
| [nikkoxgonzales/jev-certify](https://github.com/nikkoxgonzales/jev-certify) | 1 | 0 | 요약 대기 · Finite-sample guarantees for Jev (TypeSafe's System One). Conformal risk control turns calibrated probabilities into certified routing thresholds; prediction-powered inference audits them. 2,412 decisions on CLINC150 for $0.23 — including the shift and prevalence cases where the guarantee breaks. | 🆕 | 2026-09-21 |
| [onlyoneaman/jev-eval](https://github.com/onlyoneaman/jev-eval) | 1 | 0 | 요약 대기 · TypeSafe's Jev vs gpt-5.4-mini and gpt-5.6-luna on four public classification sets: cases, per-item answers, scoring, charts | 🆕 | 2026-09-18 |
| [osrim/readwise-jev-classifier](https://github.com/osrim/readwise-jev-classifier) | 1 | 0 | 요약 대기 · Proof of concept: auto-tagging and triage of Readwise Reader articles using TypeSafe AI's Jev | 🆕 | 2026-09-21 |
| [osuki-dev/opencode-osuki-agent](https://github.com/osuki-dev/opencode-osuki-agent) | 1 | 0 | 요약 대기 · Effect-native OpenCode coordinator with Jev routing and persistent goals | 🆕 | 2026-09-27 |
| [pareshbhangale/docweave](https://github.com/pareshbhangale/docweave) | 1 | 0 | 요약 대기 · AI-Supervised PDF-to-Markdown engine with intelligent ambiguity routing and in-flight table QA. Pairs PyMuPDF and Docling TableFormer with TypeSafe (Jev/Laya) and local LLMs (Ollama, vLLM) to resolve borderline layouts and catch corrupted financial tables. | 🆕 | 2026-09-26 |
| [Pasblinn/jev-lab](https://github.com/Pasblinn/jev-lab) | 1 | 0 | 요약 대기 · Open lab: Jev (TypeSafe System One) routing in front of Claude Code - measured bugs, patch, and a hard fallback with alerts | 🆕 | 2026-09-22 |
| [Patrick-SCH03/jev-issue-radar](https://github.com/Patrick-SCH03/jev-issue-radar) | 1 | 0 | 요약 대기 · GitHub issue triage with side-by-side evidence. Try the public sample without setup, or run the local app with TypeSafe Jev via OpenRouter. | 🆕 | 2026-09-20 |
| [pc418/jev-calculator](https://github.com/pc418/jev-calculator) | 1 | 0 | 요약 대기 · It's the result, correct. *probably. - A probabilistic AI calculator powered by Jev. | 🆕 | 2026-09-23 |
| [pjmenon45/Jev-IOT](https://github.com/pjmenon45/Jev-IOT) | 1 | 0 | 요약 대기 · In a 10-million smart meter deployment, using generative LLMs (like GPT-4 or Claude) is economically impossible  and operationally impractical due to token generation latency. Enter Jev - zero output token fees and ultra-low input cost ($0.042/M tokens), you achieve massive scale at negligible compute expense. | 🆕 | 2026-09-22 |
| [poponline63/north-star](https://github.com/poponline63/north-star) | 1 | 1 | 요약 대기 · Hermes Agent skill whose north-star gate is judged by Jev (TypeSafe System One): turn an intention into a checkable finish line, generate the run prompt, and let Jev rank what is still unproven. | 🆕 | 2026-09-27 |
| [potto007/unridden](https://github.com/potto007/unridden) | 1 | 0 | 요약 대기 · Fast, System One-inspired local AI decisions without text generation. One E4B Tetris snapshot game averaged 33.3 ms per request on an RTX 5090. Open source. | 🆕 | 2026-09-27 |
| [PraveenKumarSridhar/jevgauge](https://github.com/PraveenKumarSridhar/jevgauge) | 1 | 0 | 요약 대기 · One-shot model and reasoning routing for Hermes Desktop. Manual control wins. Explicit upstream integration preview. | 🆕 | 2026-09-26 |
| [psyb0t/vibecheck](https://github.com/psyb0t/vibecheck) | 1 | 0 | 요약 대기 · Turn messy state into typed, auditable classifications, scores, and policy decisions over REST and MCP. | 🆕 | 2026-09-23 |
| [punkcanyang/hermes-jev-router](https://github.com/punkcanyang/hermes-jev-router) | 1 | 0 | 요약 대기 · Hermes Agent plugin: TypeSafe Jev model routing + trim-then-compress | 🆕 | 2026-09-25 |
| [q93304989-bit/jev-lab](https://github.com/q93304989-bit/jev-lab) | 1 | 0 | 요약 대기 · 最简 Jev 调用演示器：单页分类器，把请求 JSON、概率分布、confidence、耗时与 token 都摊开给你看 | 🆕 | 2026-09-20 |
| [RavenValentin/TypeSafe.Jev](https://github.com/RavenValentin/TypeSafe.Jev) | 1 | 0 | 요약 대기 · Typed AI decisions for .NET: ask Jev (TypeSafe AI System One) yes/no, choice and score questions and get a C# enum with calibrated probabilities back. | 🆕 | 2026-09-26 |
| [reoring/fern](https://github.com/reoring/fern) | 1 | 0 | 요약 대기 · 4B Jev-compatible decision model distilled from DeepSeek V4 Flash | 🆕 | 2026-09-26 |
| [richardskypixel-max/jevrail](https://github.com/richardskypixel-max/jevrail) | 1 | 0 | 요약 대기 · Auditable Jev decisions through OpenRouter. A macOS-first TypeScript CLI with Keychain credentials, recorded costs, and conservative retries. | 🆕 | 2026-09-25 |
| [robertn702/opencode-jev-router](https://github.com/robertn702/opencode-jev-router) | 1 | 0 | 요약 대기 · Adaptive reasoning effort for OpenCode via Jev, with an in-process plugin and Responses API proxy | 🆕 | 2026-09-27 |
| [ruslanlap/jev-gate](https://github.com/ruslanlap/jev-gate) | 1 | 0 | 요약 대기 · Typed decision model judge for GitHub PRs — sub-second, ~$0.0001 per triage (TypeSafe Jev via OpenRouter) | 🆕 | 2026-09-22 |
| [rustfuture/reflex-control](https://github.com/rustfuture/reflex-control) | 1 | 0 | 요약 대기 · Rust policy engine using TypeSafe Jev and deterministic checks to route AI agent decisions. | 🆕 | 2026-09-27 |
| [sanity-labs/vellum](https://github.com/sanity-labs/vellum) | 1 | 0 | 요약 대기 · Markdown to Sanity documents, with a classifier instead of an LLM. Jev decides, code copies. Experimental. | 🆕 | 2026-09-27 |
| [sypherin/jev-trace-classifier](https://github.com/sypherin/jev-trace-classifier) | 1 | 0 | 요약 대기 · Application of TypeSafe Jev (noul judgment primitive) on the collusion.wiki corpus: agent vs human page authorship, head-to-head vs local Qwen3.8-Flash-Next | 🆕 | 2026-09-17 |
| [taigrr/gojev](https://github.com/taigrr/gojev) | 1 | 0 | 요약 대기 · Go harness for Jev/Kev decision models: TypeSafe, Vercel AI Gateway, and in-process Kev via llama.cpp | 🆕 | 2026-09-22 |
| [Teagar/jev-project-fit-review](https://github.com/Teagar/jev-project-fit-review) | 1 | 0 | 요약 대기 · Review independente sobre a adequação do Jev a produtos e desenvolvimento multiagente | 🆕 | 2026-09-27 |
| [TheEleventhAvatar/triage-bot](https://github.com/TheEleventhAvatar/triage-bot) | 1 | 0 | 요약 대기 · Real-time support triage + response bot      Jev routes the ticket to a specialist agent (general / account / billing / technical) and decides whether a human should take it instead — all as typed data, no text to parse. Cerebras then drafts the reply using whichever agent Jev picked. The script times both calls separately so you can see the split. | 🆕 | 2026-09-19 |
| [thiago-ss/jev-review](https://github.com/thiago-ss/jev-review) | 1 | 0 | 요약 대기 · Autonomous Jev pull-request review with typed decisions, calibrated approval gates, and trusted-owner escalation | 🆕 | 2026-09-16 |
| [TimMikeladze/JevLang](https://github.com/TimMikeladze/JevLang) | 1 | 0 | 요약 대기 · A policy engine for LLM decisions: declare routes, gates and actions once in TypeScript or Python, and every decision comes validated, explainable, replayable and audited. | 🆕 | 2026-09-25 |
| [TOSUKUi/jev-bridge](https://github.com/TOSUKUi/jev-bridge) | 1 | 0 | 요약 대기 · Jev-style /v1/systemone API in front of any OpenAI-compatible LLM server (one-token logprob scoring, MIT) | 🆕 | 2026-09-25 |
| [vagmi/jevlite](https://github.com/vagmi/jevlite) | 1 | 0 | 요약 대기 · An attemt to recreate jev model on top of gemma | 🆕 | 2026-09-20 |
| [viniciusfinger/jev-intent-classification](https://github.com/viniciusfinger/jev-intent-classification) | 1 | 0 | 요약 대기 · JEV intent classification using Python | 🆕 | 2026-09-27 |
| [Wizhill05/typesafe-image-diffusion](https://github.com/Wizhill05/typesafe-image-diffusion) | 1 | 0 | 요약 대기 · Diffusion-style pixel art out of a general classifier (TypeSafe Jev): 256 parallel pixel questions + refinement passes | 🆕 | 2026-09-17 |
| [xergioalex/jev-lab](https://github.com/xergioalex/jev-lab) | 1 | 0 | 요약 대기 · A hands-on lab for Jev, TypeSafe's System One model — AI decision trees, guardrails and routing with typed answers instead of text | 🆕 | 2026-09-19 |
| [Xvectorio/jevit](https://github.com/Xvectorio/jevit) | 1 | 0 | 요약 대기 · JevIt: AI mail triage for Thunderbird with TypeSafe's Jev model. Unofficial. | 🆕 | 2026-09-27 |
| [crazyooo/jev-router-desktop-adapter](https://github.com/crazyooo/jev-router-desktop-adapter) | 0 | 0 | **무엇** macOS Codex 데스크톱 앱에서 매 턴마다 TypeSafe Jev를 호출해 적절한 실행 모델을 동적으로 선택해 주는 로컬 프록시 어댑터다.<br>**판단** 최신 사용자 프롬프트, 컨텍스트 크기, 후보 모델 카탈로그를 바탕으로 이번 턴 처리에 가장 적합한 모델이 무엇인지 선택하도록 요청한다.<br>**포인트** Codex UI 제한을 우회하기 위해 숨겨진 gpt-reserve 식별자를 사용해 라우팅 결과를 치환하며, 실제 반영 없이 평가만 하는 shadow 모드도 제공한다. | 🆕 | 2026-09-26 |
| [dimitrisdais/language-aware-decisions-for-banking](https://github.com/dimitrisdais/language-aware-decisions-for-banking) | 0 | 0 | **무엇** 오픈소스 타입화 결정 모델 Laya를 BANKING77 데이터셋에 맞춰 미세조정하고 고전 ML과 비교 평가하는 금융 의도 분류 실험 프로젝트다.<br>**판단** 고객 발화가 8개 뱅킹 서비스 그룹 중 어디에 속하는지, 그리고 해당 그룹 내 세부 77개 의도 중 무엇인지 계층적으로 선택(choice)하도록 한다.<br>**포인트** 인코더를 고정하고 결정 헤드 2,650만 개 파라미터만 학습해 F1 74.0%를 달성했으나 TF-IDF+로지스틱 회귀(86.0%)에 미치지 못함을 명시했다. | 🆕 | 2026-09-27 |
| [flower-of-the-bridges/opencode-jev-router-plugin](https://github.com/flower-of-the-bridges/opencode-jev-router-plugin) | 0 | 0 | **무엇** OpenCode 사용자가 프롬프트 실행 전 적절한 최적 모델로 전환할 수 있도록 JEV 기반 라우팅을 제공하는 플러그인이다.<br>**판단** 프롬프트에 대해 model_tier, reasoning_complexity, task_scope, ambiguity, task_type, effort의 6가지 분류를 질문한다.<br>**포인트** 단일 호출로 6개 항목을 분류하며, 타임아웃이나 오류 발생 시 작업 차단 없이 지정된 fallback 모델로 안전하게 복구한다. | 🆕 | 2026-09-27 |
| [HuXioAn/jev-telegram-channel-router](https://github.com/HuXioAn/jev-telegram-channel-router) | 0 | 0 | **무엇** 공개 텔레그램 채널의 새 포스트를 Jev 판단 기반으로 필터링하여 개인 DM이나 관리 채널로 라우팅하는 텔레그램 봇이다.<br>**판단** 자연어로 정의된 관심 조건 템플릿에 따라 게시물이 매칭되는지 noul 확률, score 등급, choice 선택지로 판단한다.<br>**포인트** 구독자 수가 많아도 소스 채널당 활성 템플릿 질문을 병합해 게시물당 Jev API를 1회만 호출하도록 최적화했다. | 🆕 | 2026-09-26 |
| [SciScend/system-one-categorizer-demo](https://github.com/SciScend/system-one-categorizer-demo) | 0 | 0 | **무엇** 불가리아어 블로그 글의 카테고리를 추천하는 데모 앱으로, TypeSafe Jev와 Laya 모델의 분류 성능을 비교한다.<br>**판단** 블로그 글 내용을 분석하여 기존 블로그 카테고리 목록 중 하나를 선택하거나 신규 카테고리 필요 여부(друга тема)를 choice로 판단한다.<br>**포인트** 기존 카테고리에 속하지 않을 때 로컬 LLM(BgGPT)으로 새 카테고리명을 생성하며, DigitalOcean 및 OpenRouter API 키의 순차 폴백을 지원한다. | 🆕 | 2026-09-27 |
| [togishima/subagent-dispatcher](https://github.com/togishima/subagent-dispatcher) | 0 | 0 | **무엇** 메인 세션 캐시를 보존하면서 위임된 하위 태스크를 적절한 모델 티어의 워커로 라우팅하고 효율을 측정하는 Claude Code 플러그인이다.<br>**판단** 작업자 티어를 직접 선택하거나 기계적 작업 여부, 교차 추론 필요성 같은 정책 그래프의 의미론적 불리언 조건을 판단시킨다.<br>**포인트** 메인 세션 캐시를 무효화하지 않으며, 판정 신뢰도가 기준치보다 낮으면 더 안전한 상위 티어로 자동 분기하는 오버라우팅 방식을 지원한다. | 🆕 | 2026-09-27 |
| [vitas/dsh-jev-subagent-dispatch](https://github.com/vitas/dsh-jev-subagent-dispatch) | 0 | 0 | **무엇** DeepSeek Harness에서 일상적 작업을 저렴한 서브에이전트 모델로 위임하도록 추천하는 플러그인이다.<br>**판단** 작업의 난이도나 위험도 등 작업 특성에 관한 질문들을 choice/score/noul 형식으로 판단한다.<br>**포인트** 위임을 강제하지 않고 조언으로 주입하며 호출 전 도구와 위임 깊이 등 가용 조건을 검증해 불필요한 호출을 막는다. | 🆕 | 2026-09-27 |
| [WesleySmits/spark-jev-email-triage](https://github.com/WesleySmits/spark-jev-email-triage) | 0 | 0 | **무엇** Spark CLI와 TypeSafe Jev를 연동하여 수신 이메일을 분류하고 인간이 검토할 수 있는 TanStack Start 기반의 이메일 트리아지 웹 앱이다.<br>**판단** 최소화된 이메일 스레드 내용을 바탕으로 이메일의 분류 카테고리와 처리 우선순위 레이블을 판단하도록 요청한다.<br>**포인트** 모델 분류값과 인간의 검토 결정을 SQLite에 분리 저장해 인간의 결정을 우선하며, 명시적 승인 전까지 실제 메일을 변경하지 않는다. | 🆕 | 2026-09-27 |
| [suenot/codex-jev-router](https://github.com/suenot/codex-jev-router) | 4 | 0 | 요약 대기 · Portable JevRouter setup for cost-aware Codex subagent model selection, with English and Russian instructions | 🆕 | 2026-09-27 |
| [david-cermak/jevlike-esp32](https://github.com/david-cermak/jevlike-esp32) | 3 | 0 | 요약 대기 · Jevlike edge router on ESP32 | 🆕 | 2026-09-25 |
| [190ibrahim/jev-graphify](https://github.com/190ibrahim/jev-graphify) | 0 | 0 | 요약 대기 · Name, classify and search graphify communities with TypeSafe Jev | 🆕 | 2026-09-24 |
| [4nt0ineB/jev-from-java](https://github.com/4nt0ineB/jev-from-java) | 0 | 0 | 요약 대기 · Calling TypeSafe's Jev from Java with a hand-typed API contract. Small app to demo triage, zero-shot classification of commands from MASSIVE's 60 intents. And live batch classification with confidence-based routing. | 🆕 | 2026-09-25 |
| [4piu/liametahi](https://github.com/4piu/liametahi) | 0 | 0 | 요약 대기 · Mailbox cleanup CLI with AI — trash/move/label/route mail using Jev or chat model | 🆕 | 2026-09-25 |
| [aaronsoongwork-dev/shipcheck-email-spam-classifier](https://github.com/aaronsoongwork-dev/shipcheck-email-spam-classifier) | 0 | 0 | 요약 대기 · AI-powered shipping document verification platform — classifies emails and cross-checks Shipping Instructions against Bills of Lading using Claude, achieving 100% accuracy across 520 test emails. Built by Team Fortress 3 for the Averis x Monash Datathon 2025. | 🆕 | 2026-09-27 |
| [abdullahaamuda-code/jev-decide](https://github.com/abdullahaamuda-code/jev-decide) | 0 | 0 | 요약 대기 · System One decision layer for browser automation: offload page-state judgments to TypeSafe Jev — element picks, challenge detection, routing. ~1s, ~$0.001/decision. | 🆕 | 2026-09-26 |
| [adelvillar1/dev-decisions](https://github.com/adelvillar1/dev-decisions) | 0 | 0 | 요약 대기 · Decision-model gates for git + ZCode workflows: scan secrets/PII, classify diffs with Jev/GLiNER/Decide, and log every decision to JSONL for calibration | 🆕 | 2026-09-26 |
| [adelvillar1/zcode-router](https://github.com/adelvillar1/zcode-router) | 0 | 0 | 요약 대기 · Jev driven auto-router for Zcode, with MoA, swarm, and adversarial solution capability | 🆕 | 2026-09-27 |
| [adimyth/compass](https://github.com/adimyth/compass) | 0 | 0 | 요약 대기 · A decision model: give it a document and a typed question, get calibrated probabilities for every allowed answer. No text generation. Qwen3.5-4B + LoRA, /v1/systemone wire format. | 🆕 | 2026-09-27 |
| [AHTOOOXA/jev-cyrillic-audit](https://github.com/AHTOOOXA/jev-cyrillic-audit) | 0 | 0 | 요약 대기 · Does TypeSafe's Jev keep its accuracy and calibration on Russian? Independent RU vs EN audit (ECE, reliability diagrams, paired bootstrap) on parallel human-labelled data. | 🆕 | 2026-09-26 |
| [ajstrick81/fast-jev-compaction](https://github.com/ajstrick81/fast-jev-compaction) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [aleksvega/jev-stack](https://github.com/aleksvega/jev-stack) | 0 | 0 | 요약 대기 · One command (npx jev-stack) to install the Jev-powered agent toolset: context compaction, pre-push guardrail, 0.5s browser agent, skill router, CDP launcher | 🆕 | 2026-09-25 |
| [alevtelles/triagem-inteligente-com-jev](https://github.com/alevtelles/triagem-inteligente-com-jev) | 0 | 0 | 요약 대기 · Demo de triagem inteligente de atendimento de cartao de credito: em vez de uma IA generica decidir sozinha em texto livre, o sistema classifica o chamado e aciona regras de negocio auditaveis e controladas, evitando decisoes financeiras regulatorias tomadas as cegas por um LLM. | 🆕 | 2026-09-27 |
| [alex-boop-chasey/auto-router](https://github.com/alex-boop-chasey/auto-router) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [alexei-led/claude-router](https://github.com/alexei-led/claude-router) | 0 | 0 | 요약 대기 · Claude Code plugin that auto-picks the right model for each turn — micro, low, medium, or high tier — using Jev routing. | 🆕 | 2026-09-25 |
| [alexrudloff/wopr](https://github.com/alexrudloff/wopr) | 0 | 0 | 요약 대기 · WOPR: an opinionated coding agent with built-in model routing for the terminal | 🆕 | 2026-09-27 |
| [andyholst/hermes-typesafe-jev](https://github.com/andyholst/hermes-typesafe-jev) | 0 | 1 | 요약 대기 · Documentation hub for Hermes Agent + Jev (TypeSafe System One Model) integration | 🆕 | 2026-09-20 |
| [aniruddha2004/flowrace](https://github.com/aniruddha2004/flowrace) | 0 | 0 | 요약 대기 · A single-page dashboard that races two classification pipelines (pure LLM tool-calling vs. Jev structured evaluation + LLM reply) on the same support ticket, streaming live metrics, cost, and transparency data side-by-side | 🆕 | 2026-09-27 |
| [ankitjawla/regpilot](https://github.com/ankitjawla/regpilot) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [Autom8ly/gutcheck-bench](https://github.com/Autom8ly/gutcheck-bench) | 0 | 0 | 요약 대기 · Run open System 1 decision models on your own 8 GB GPU: benchmarks, quantization patches and adapters for high-compliance teams. Mostly AI-generated. | 🆕 | 2026-09-26 |
| [b0bleet/syn](https://github.com/b0bleet/syn) | 0 | 0 | 요약 대기 · Open-source, Jev-compatible System One API: typed decisions (Noul, Choice, Score) from next-token probabilities in one forward pass. Works with typesafe-sdk. Free hosted at sifty.dev. | 🆕 | 2026-09-27 |
| [badpx/Laya-Vision](https://github.com/badpx/Laya-Vision) | 0 | 0 | 요약 대기 · Vision-modality-capable Laya. | 🆕 | 2026-09-26 |
| [bensheridan/tdd-gate](https://github.com/bensheridan/tdd-gate) | 0 | 0 | 요약 대기 · Keeps a test-writing agent and a code-writing agent on the same plan, using TypeSafe (Jev) judgments: requirement coverage and failing-test blame routing. | 🆕 | 2026-09-27 |
| [bharath-ui1027/laya-ui](https://github.com/bharath-ui1027/laya-ui) | 0 | 0 | 요약 대기 · Laya UI - Fast, non-autoregressive System 1 decision engine with multilingual support and UI components | 🆕 | 2026-09-25 |
| [Biztactix/n8n-nodes-typesafe](https://github.com/Biztactix/n8n-nodes-typesafe) | 0 | 0 | 요약 대기 · Typesafe AI Node for N8N | 🆕 | 2026-09-22 |
| [boriscardano/herdr-jev-router](https://github.com/boriscardano/herdr-jev-router) | 0 | 0 | 요약 대기 · Advisory Jev routing for child agents on stock Herdr: Jev picks the harness, model and effort from the task and your remaining subscription capacity. | 🆕 | 2026-09-24 |
| [BP602/ntfy-hermes-jev-bridge](https://github.com/BP602/ntfy-hermes-jev-bridge) | 0 | 0 | 요약 대기 · Local-first ntfy -&gt; TypeSafe Jev -&gt; Hermes notification gate | 🆕 | 2026-09-25 |
| [brandonrc/jev-bench](https://github.com/brandonrc/jev-bench) | 0 | 0 | 요약 대기 · Jev vs Laya vs Claude Haiku on package-curation triage tasks: speed first, accuracy second | 🆕 | 2026-09-25 |
| [bskkimm/JevSceneMiner](https://github.com/bskkimm/JevSceneMiner) | 0 | 0 | 요약 대기 · Mine driving scenes from logs with Jev: scene text in, scenarios with probabilities and timestamps out. | 🆕 | 2026-09-27 |
| [budityw23/fhir_jev](https://github.com/budityw23/fhir_jev) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [bunkerlab-net/laya-shim](https://github.com/bunkerlab-net/laya-shim) | 0 | 0 | 요약 대기 · A thin shim for Laya/Laya-MLX | 🆕 | 2026-09-25 |
| [carllippert/jev-router](https://github.com/carllippert/jev-router) | 0 | 0 | 요약 대기 · Express with no routes. TypeSafe Jev picks which handler runs. | 🆕 | 2026-09-18 |
| [carlosbasto/joule-studio-jev-invoice-triage](https://github.com/carlosbasto/joule-studio-jev-invoice-triage) | 0 | 0 | 요약 대기 · Example SAP Joule Studio 2.0 agent using JEV to evaluate and control consequential supplier invoice release actions. | 🆕 | 2026-09-25 |
| [charlie128233/claude-context-injection](https://github.com/charlie128233/claude-context-injection) | 0 | 0 | 요약 대기 · Reversible, per-request context injection for Claude Code. A local proxy asks a small classifier (Jev or any Jev-compatible model) which old tool results matter for your current request, hides the rest behind a one-line note, and puts them back in place when they become relevant again. Nothing is lost. | 🆕 | 2026-09-26 |
| [chinmay29/evidence-scope](https://github.com/chinmay29/evidence-scope) | 0 | 0 | 요약 대기 · Version-aware evidence decisions for RAG assistants using Jev, with inspectable routing, bounded recovery, and reproducible evaluation. | 🆕 | 2026-09-26 |
| [cipherTing/sael](https://github.com/cipherTing/sael) | 0 | 0 | 요약 대기 · Go client for the TypeSafe System One API (Jev) — the first piece of sael, a content-safety classifier for an AI request relay | 🆕 | 2026-09-27 |
| [Clawbuilders/web-qa-jev-agent](https://github.com/Clawbuilders/web-qa-jev-agent) | 0 | 0 | 요약 대기 · Crawls a site with Cloudflare Browser Rendering, triages with typesafe/jev, confirms with vision, files deduped GitHub Issues | 🆕 | 2026-09-18 |
| [Cloud-Computing-Oy/cco-llm-router](https://github.com/Cloud-Computing-Oy/cco-llm-router) | 0 | 0 | 요약 대기 · Shared LLM-router package for Cloud-Computing-Oy services (Anthropic / Google / OpenAI / Groq / OpenRouter / Ollama + Cohere rerank) | 🆕 | 2026-09-27 |
| [ColinClark/claude-code-jev-router](https://github.com/ColinClark/claude-code-jev-router) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [coltonspears/JevClassifier](https://github.com/coltonspears/JevClassifier) | 0 | 0 | 요약 대기 · Visual Jev task complexity classifier and GPT-6 model routing demo with live OpenRouter analytics | 🆕 | 2026-09-25 |
| [criguex/jev-ci-triage](https://github.com/criguex/jev-ci-triage) | 0 | 0 | 요약 대기 · Classify every failing CI test as regression, flaky, environment, test-data or unknown. Rules first, Jev (TypeSafe) for the ambiguous ones. Never reruns, never masks. | 🆕 | 2026-09-26 |
| [CSlawyer1985/dsh-jev-router](https://github.com/CSlawyer1985/dsh-jev-router) | 0 | 0 | 요약 대기 · DSH 插件 · 用 Jev（TypeSafe System One）判定推理强度：默认只切思考强度（零缓存代价），自动模型路由出厂关闭 + 硬门禁 + 成本闸。作者 chenshi.ai | 🆕 | 2026-09-25 |
| [cwhy/decision-injection-bench](https://github.com/cwhy/decision-injection-bench) | 0 | 0 | 요약 대기 · Reproducible prompt-injection and jailbreak evaluation for Jev-like structured decision systems | 🆕 | 2026-09-23 |
| [damian87x/jev-claude-orchestrator](https://github.com/damian87x/jev-claude-orchestrator) | 0 | 0 | 요약 대기 · Jev-supervised madmax conductor for Claude Code: tiny slices, parallel subagent workers in worktrees, TypeSafe Jev makes routing/review/QA/supervision decisions. | 🆕 | 2026-09-27 |
| [damian87x/jev-pi-model-router](https://github.com/damian87x/jev-pi-model-router) | 0 | 0 | 요약 대기 · pi extension: TypeSafe Jev picks the model for each turn, only from models pi can use | 🆕 | 2026-09-26 |
| [damian87x/pi-autonoxis-model](https://github.com/damian87x/pi-autonoxis-model) | 0 | 0 | 요약 대기 · Pi plugin: local conductor decisions (STOP/ASK/DISPATCH, ACCEPT/VERIFY/REJECT/REOPEN/ESCALATE) from the autonoxis-conductor-9b model, act at confidence &gt;= 0.8 else escalate. | 🆕 | 2026-09-27 |
| [damiensmith1/semantic-pubsub-jev](https://github.com/damiensmith1/semantic-pubsub-jev) | 0 | 0 | 요약 대기 · Pub/sub that routes messages by what they mean. Subscribers describe their interests in plain language; each message is judged once against all of them with Jev. | 🆕 | 2026-09-26 |
| [dandacompany/jev-gatekeeper](https://github.com/dandacompany/jev-gatekeeper) | 0 | 0 | 요약 대기 · Local judge first, cloud Jev second: a privacy-first request router (llama.cpp + TypeSafe Jev) | 🆕 | 2026-09-25 |
| [daniel-dia/jev-estados-brasileiros](https://github.com/daniel-dia/jev-estados-brasileiros) | 0 | 0 | 요약 대기 · Digite um tema e o mapa do Brasil acende nos estados que combinam — classificado pelo Jev | 🆕 | 2026-09-26 |
| [davesheffer/coding-orchestrator](https://github.com/davesheffer/coding-orchestrator) | 0 | 1 | 요약 대기 · Orchestrator and subagent setups for Claude Code and Codex: routing, verification, and safe global installation. | 🆕 | 2026-09-25 |
| [deepdave98/jev-playground](https://github.com/deepdave98/jev-playground) | 0 | 0 | 요약 대기 · Weekly builds on Jev (TypeSafe AI), benchmarked honestly enough to publish. Week 01: inbound lead triage, 90% routing at 366ms and $0.04 per thousand leads. | 🆕 | 2026-09-25 |
| [dgr8akki/intent-guard](https://github.com/dgr8akki/intent-guard) | 0 | 0 | 요약 대기 · Say what you're working on; get a gentle nudge when you drift to pages that aren't part of it. Chrome extension powered by Jev. | 🆕 | 2026-09-27 |
| [diego-ruas/omp-jev-router](https://github.com/diego-ruas/omp-jev-router) | 0 | 0 | 요약 대기 · Jev Decision Layer for Oh My Pi: per-prompt model + thinking routing via cached Jev triage and config-driven policy | 🆕 | 2026-09-26 |
| [dirnbauer/typo3-webcon-jev](https://github.com/dirnbauer/typo3-webcon-jev) | 0 | 0 | 요약 대기 · Typed decisions from TypeSafe AI's Jev model inside TYPO3: a decision editor and playground in the backend, powermail_cond operators, and submission routing | 🆕 | 2026-09-27 |
| [dmakam/jev-search-intent-classifier](https://github.com/dmakam/jev-search-intent-classifier) | 0 | 0 | 요약 대기 · Sort search queries by intent and product with Jev (TypeSafe AI's System One model), gated on confidence. | 🆕 | 2026-09-25 |
| [dxcently/Canti](https://github.com/dxcently/Canti) | 0 | 0 | 요약 대기 · Bluetooth VOX swipe and cursor control app with a Pico Pi 2w based with a custom System One fine-tuned jevlike classifer model. | 🆕 | 2026-09-27 |
| [eSaadster/jev-effort-router](https://github.com/eSaadster/jev-effort-router) | 0 | 0 | 요약 대기 · Claude Code plugin: per-prompt reasoning-effort routing with TypeSafe Jev | 🆕 | 2026-09-26 |
| [EtienneLescot/jev-router](https://github.com/EtienneLescot/jev-router) | 0 | 0 | 요약 대기 · Typed judgments in, control flow out: two Jev calls route a support ticket to an agent, then pick its model tier and reasoning depth. | 🆕 | 2026-09-23 |
| [f-lombardo/jev-php](https://github.com/f-lombardo/jev-php) | 0 | 0 | 요약 대기 · A PHP library to connect to TypeSafe JEV APIs | 🆕 | 2026-09-27 |
| [FirasB9/jev-community-ops](https://github.com/FirasB9/jev-community-ops) | 0 | 0 | 요약 대기 · Community triage for a developer community, built on TypeSafe's Jev: typed questions, confidence-gated routing, weekly digest. | 🆕 | 2026-09-27 |
| [Foshowithit/jev-rcos-study](https://github.com/Foshowithit/jev-rcos-study) | 0 | 0 | 요약 대기 · Can TypeSafe Jev solve RCOS capability routing at scale? Falsification-first experiment, verdict KEEP EXPERIMENTAL (ranker not brain), full receipts. | 🆕 | 2026-09-19 |
| [foxl-ai/bobcat](https://github.com/foxl-ai/bobcat) | 0 | 0 | 요약 대기 · Bobcat: a typed-decision model. State in, Choice / Noul / Score out, with a probability for every answer you name; no generated text. Compiler, server, training and evaluation code for Bobcat 1.1 and Bobcat Flash 1.1. | 🆕 | 2026-09-27 |
| [gbesse/airbyte-jev](https://github.com/gbesse/airbyte-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for airbyte | 🆕 | 2026-09-26 |
| [gbesse/argo-jev](https://github.com/gbesse/argo-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for argo | 🆕 | 2026-09-26 |
| [gbesse/dagster-jev](https://github.com/gbesse/dagster-jev) | 0 | 0 | 요약 대기 · Dagster asset checks with TypeSafe Jev semantic decisions | 🆕 | 2026-09-26 |
| [gbesse/flink-jev](https://github.com/gbesse/flink-jev) | 0 | 0 | 요약 대기 · Flink SQL ML_PREDICT provider for TypeSafe Jev semantic decisions | 🆕 | 2026-09-26 |
| [gbesse/formbricks-jev](https://github.com/gbesse/formbricks-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for formbricks | 🆕 | 2026-09-26 |
| [gbesse/jev-cada-desk](https://github.com/gbesse/jev-cada-desk) | 0 | 0 | 요약 대기 · Triage French public-document requests against sourced CADA precedents with mandatory human review. | 🆕 | 2026-09-27 |
| [gbesse/kestra-jev](https://github.com/gbesse/kestra-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for kestra | 🆕 | 2026-09-26 |
| [gbesse/meilisearch-jev](https://github.com/gbesse/meilisearch-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for meilisearch | 🆕 | 2026-09-26 |
| [gbesse/nifi-jev](https://github.com/gbesse/nifi-jev) | 0 | 0 | 요약 대기 · Apache NiFi processor for TypeSafe Jev semantic routing with uncertainty lane | 🆕 | 2026-09-26 |
| [gbesse/pulsar-jev](https://github.com/gbesse/pulsar-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for pulsar | 🆕 | 2026-09-26 |
| [gbesse/seatunnel-jev](https://github.com/gbesse/seatunnel-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for seatunnel | 🆕 | 2026-09-26 |
| [gbesse/spark-jev](https://github.com/gbesse/spark-jev) | 0 | 0 | 요약 대기 · PySpark SQL UDF for TypeSafe Jev semantic decisions | 🆕 | 2026-09-26 |
| [goldytech/jev-model-routing](https://github.com/goldytech/jev-model-routing) | 0 | 0 | 요약 대기 · Experiments with TypeSafe Jev for typed, confidence-aware model routing across Claude and Kimi. | 🆕 | 2026-09-25 |
| [gordan-code/jev-entropy-gate](https://github.com/gordan-code/jev-entropy-gate) | 0 | 0 | 요약 대기 · Decide which code-migration sites can be safely auto-rewritten, using Jev's calibrated probability entropy. AST matching, triage, auto-rewrite, self-calibration. | 🆕 | 2026-09-25 |
| [gshost1/nodfirst](https://github.com/gshost1/nodfirst) | 0 | 0 | 요약 대기 · HR onboarding agent that routes new-hire requests with a typed decision model and asks a person before acting. Human approvals, audit trail, evaluated on 259 real HR requests. | 🆕 | 2026-09-27 |
| [hamzaahmadaslam/action-scheduler-triage](https://github.com/hamzaahmadaslam/action-scheduler-triage) | 0 | 0 | 요약 대기 · Group the failed actions of WordPress's Action Scheduler by hook and error, then ask Jev which groups are safe to run again unchanged and which need a fix first. Read-only: it prints WP-CLI commands and never runs them. | 🆕 | 2026-09-26 |
| [hamzaahmadaslam/cache-boundary](https://github.com/hamzaahmadaslam/cache-boundary) | 0 | 0 | 요약 대기 · Decides route by route whether a full-page cache may serve one anonymous visitor's copy of a page to everyone, from response headers, WordPress and WooCommerce markers and TypeSafe's Jev model. | 🆕 | 2026-09-26 |
| [hamzaahmadaslam/woo-note-triage](https://github.com/hamzaahmadaslam/woo-note-triage) | 0 | 0 | 요약 대기 · Note Triage for WooCommerce: a WordPress plugin that sorts customer order notes (gift message, delivery instruction, question, complaint, fraud signal) with TypeSafe's Jev model and flags the urgent ones for staff. | 🆕 | 2026-09-26 |
| [hamzaahmadaslam/wp-debuglog-triage](https://github.com/hamzaahmadaslam/wp-debuglog-triage) | 0 | 0 | 요약 대기 · Group a WordPress debug.log by message, attribute each group to core, a plugin or a theme, and rank the groups by kind and urgency with Jev. | 🆕 | 2026-09-26 |
| [hamzaahmadaslam/wporg-forum-triage](https://github.com/hamzaahmadaslam/wporg-forum-triage) | 0 | 0 | 요약 대기 · Sorts a WordPress.org plugin's support threads into bugs, how-to questions, feature requests, conflicts, praise and spam, and lists the ones waiting for the author's reply, using TypeSafe's Jev model. | 🆕 | 2026-09-26 |
| [Haresh33/Jev-Triage](https://github.com/Haresh33/Jev-Triage) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [HENILCHOPRA/laya](https://github.com/HENILCHOPRA/laya) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [hongdroid94/fab-evidence-gate](https://github.com/hongdroid94/fab-evidence-gate) | 0 | 0 | 요약 대기 · Evidence-aware semiconductor alert triage research demo with TypeSafe Jev, policy guards, and reproducible evaluation | 🆕 | 2026-09-27 |
| [hraness/sys1](https://github.com/hraness/sys1) | 0 | 1 | 요약 대기 · Sys1 lets agents ask yes/no, choice, and score questions and get validated answers with probabilities from hosted Jev, a local model, or your own server. | 🆕 | 2026-09-28 |
| [hrnareshabd/jev-data-incident-triage](https://github.com/hrnareshabd/jev-data-incident-triage) | 0 | 0 | 요약 대기 · Typed AI judgments for routing data-pipeline incidents with TypeSafe Jev and transparent Python rules. | 🆕 | 2026-09-25 |
| [hyspacex/jev-router](https://github.com/hyspacex/jev-router) | 0 | 0 | 요약 대기 · Route OpenAI-style chat requests to a model and reasoning effort, using TypeSafe's Jev decision model as the classifier | 🆕 | 2026-09-24 |
| [ianlintner/bcr-chat-router](https://github.com/ianlintner/bcr-chat-router) | 0 | 0 | 요약 대기 · Bureau of Citizen Response — fictional gov chat routing backend using TypeSafe Jev choice classification + keyword fallback, embeddable widget frontend | 🆕 | 2026-09-27 |
| [ianlintner/jev-router](https://github.com/ianlintner/jev-router) | 0 | 0 | 요약 대기 · Shadow-mode Jev decision adapter for model-routing comparisons, with Prometheus metrics and Grafana dashboards | 🆕 | 2026-09-20 |
| [ianrodrigues/julia-1-api-server](https://github.com/ianrodrigues/julia-1-api-server) | 0 | 0 | 요약 대기 · Self-hosted HTTP API for Julia-1 classification, scoring, and boolean decisions. Built with FastAPI and Docker. | 🆕 | 2026-09-27 |
| [iksnerd/verdict](https://github.com/iksnerd/verdict) | 0 | 0 | 요약 대기 · A System 1 for agents: fast, local typed judgments (yes/no, choice, score) with probabilities, from a fine-tuned Laya encoder on Apple Silicon. Answers, never acts. | 🆕 | 2026-09-27 |
| [inman-sebastian/dispatch](https://github.com/inman-sebastian/dispatch) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [Iskandeur/system1-system2](https://github.com/Iskandeur/system1-system2) | 0 | 0 | 요약 대기 · Hybrid System 1 (TypeSafe Jev decisions) + System 2 (Claude Fable) demo with confidence-gated routing and cost/accuracy benchmarks. | 🆕 | 2026-09-25 |
| [ivancasco/aidlc-plugin-jev](https://github.com/ivancasco/aidlc-plugin-jev) | 0 | 0 | 요약 대기 · AI-DLC plugin: Jev (TypeSafe) document-quality gate checks for planning stages | 🆕 | 2026-09-27 |
| [izam-mohammed/decisionsmith](https://github.com/izam-mohammed/decisionsmith) | 0 | 0 | 요약 대기 · Use and fine-tune System One models (Jev, Laya) on your data, with an LLM as the teacher. | 🆕 | 2026-09-25 |
| [Jac0bJ/jev-worker](https://github.com/Jac0bJ/jev-worker) | 0 | 0 | 요약 대기 · A safe, cacheable TypeSafe Jev decision API on Cloudflare Workers. | 🆕 | 2026-09-25 |
| [jackson7705/jev-seo-skills](https://github.com/jackson7705/jev-seo-skills) | 0 | 0 | 요약 대기 · Five tested SEO workflows powered by TypeSafe's Jev: intent, internal links, cannibalization, brief QA, AI mention tracking | 🆕 | 2026-09-27 |
| [JacobNWolf/opencode-subagent-router](https://github.com/JacobNWolf/opencode-subagent-router) | 0 | 0 | 요약 대기 · An OpenCode plugin that helps intelligently route subagent tasks for improved speed, lower cost, and faster results | 🆕 | 2026-09-28 |
| [Jamesjiwei19981027/Jev-router](https://github.com/Jamesjiwei19981027/Jev-router) | 0 | 0 | 요약 대기 · 为 Claude Code / Codex / Pi / Antigravity 接入 Jev 决策层：智能上下文压缩 + 能力路由。A Jev decision layer for coding agents: context compaction and capability routing. | 🆕 | 2026-09-27 |
| [jason-allen-oneal/openclaw-plugin-typesafe-ai](https://github.com/jason-allen-oneal/openclaw-plugin-typesafe-ai) | 0 | 0 | 요약 대기 · TypeSafe AI (Jev System One) plugin for OpenClaw - sub-100ms group triage, tool safety guardrails, compaction curation, and model routing | 🆕 | 2026-09-18 |
| [Jeeva200620/e-commerce](https://github.com/Jeeva200620/e-commerce) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [jeremymungai/jev-security-playground](https://github.com/jeremymungai/jev-security-playground) | 0 | 0 | 요약 대기 · Fast, calibrated "System 1" AI decision experiments for SOC triage, phishing detection, BEC, and prompt injection defense using TypeSafe Jev. | 🆕 | 2026-09-25 |
| [JevForge/jev-flaky-detective](https://github.com/JevForge/jev-flaky-detective) | 0 | 0 | 요약 대기 · Classify failing tests as regression, flaky, environment, or unknown. Jev decides; results are never masked or auto-rerun. | 🆕 | 2026-09-24 |
| [JevForge/jev-model-navigator](https://github.com/JevForge/jev-model-navigator) | 0 | 0 | 요약 대기 · Route Issues and PRs to the best AI model using typed TypeSafe Jev decisions in GitHub Actions. | 🆕 | 2026-09-24 |
| [JingHao-Leon/awesome-jev-apps](https://github.com/JingHao-Leon/awesome-jev-apps) | 0 | 0 | 요약 대기 · Jev 优质应用与生态精选｜System One 决策模型：开源应用·SDK·平台集成·开源复刻·教程 \| curated apps &amp; SDKs for TypeSafe AI's Jev model | 🆕 | 2026-09-27 |
| [jjjjjjjjjjjjjjjjacob/jev-router](https://github.com/jjjjjjjjjjjjjjjjacob/jev-router) | 0 | 0 | 요약 대기 · Claude Code plugin + skills: Jev picks the effort level for every prompt and the right model for every subagent. Off until you type /jev. | 🆕 | 2026-09-27 |
| [jonikanerva/rss](https://github.com/jonikanerva/rss) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-28 |
| [juanmaagd/yakusoku](https://github.com/juanmaagd/yakusoku) | 0 | 1 | 요약 대기 · Pre-signature firewall for AI agent x402 payments: signs only what the user promised. ETHGlobal Tokyo 2026. | 🆕 | 2026-09-26 |
| [JussCubs/jev-conductor-router](https://github.com/JussCubs/jev-conductor-router) | 0 | 0 | 요약 대기 · Task, quota and outcome-aware Conductor routing with Jev. OpenRouter or TypeSafe; always slow mode. | 🆕 | 2026-09-26 |
| [jvsteiner/jev-mailspring](https://github.com/jvsteiner/jev-mailspring) | 0 | 0 | 요약 대기 · AI-assisted inbox sorting for Mailspring | 🆕 | 2026-09-27 |
| [KalyanM45/GitHub-Issue-Classification-Using-Jev](https://github.com/KalyanM45/GitHub-Issue-Classification-Using-Jev) | 0 | 0 | 요약 대기 · This repository contains a GitHub issue classifier built on Jev, TypeSafe AI's System One model. It labels every new issue with typed values and calibrated confidence in milliseconds, labelling what it is sure about and escalating what it is not. Three guardrail layers guard every write, and a frozen eval suite gates each deploy. | 🆕 | 2026-09-22 |
| [ketakisrao/error-boundary-detector](https://github.com/ketakisrao/error-boundary-detector) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [kijung4290/gmail-mail-triage](https://github.com/kijung4290/gmail-mail-triage) | 0 | 0 | 요약 대기 · 로컬 전용 Gmail 긴급도·광고·답변 필요 여부 분류 대시보드 · TypeSafe AI JEV | 🆕 | 2026-09-19 |
| [KranzL/omni-example](https://github.com/KranzL/omni-example) | 0 | 0 | 요약 대기 · Agentic analytics harness that routes data questions to models of matching strength and measures cost against accuracy | 🆕 | 2026-09-26 |
| [lawrence3699/Jev-Style-0.8B-Decision-v3-MLX](https://github.com/lawrence3699/Jev-Style-0.8B-Decision-v3-MLX) | 0 | 0 | 요약 대기 · GitHub mirror of the chaoliangUNSW/Jev-Style-0.8B-Decision-v3-MLX Hugging Face model | 🆕 | 2026-09-26 |
| [lawrence3699/Jev-Style-2B-Decision-v3](https://github.com/lawrence3699/Jev-Style-2B-Decision-v3) | 0 | 0 | 요약 대기 · GitHub mirror of the chaoliangUNSW/Jev-Style-2B-Decision-v3 Hugging Face model | 🆕 | 2026-09-27 |
| [lawrence3699/Jev-Style-2B-Decision-v3-GGUF](https://github.com/lawrence3699/Jev-Style-2B-Decision-v3-GGUF) | 0 | 0 | 요약 대기 · GitHub mirror of the chaoliangUNSW/Jev-Style-2B-Decision-v3-GGUF Hugging Face model | 🆕 | 2026-09-27 |
| [lawrence3699/Jev-Style-2B-Decision-v3-MLX](https://github.com/lawrence3699/Jev-Style-2B-Decision-v3-MLX) | 0 | 0 | 요약 대기 · GitHub mirror of the chaoliangUNSW/Jev-Style-2B-Decision-v3-MLX Hugging Face model | 🆕 | 2026-09-27 |
| [liyifan2004/obsidian-jev-inbox-router](https://github.com/liyifan2004/obsidian-jev-inbox-router) | 0 | 0 | 요약 대기 · Obsidian plugin: route incoming notes to the right folder using JEV (TypeSafe System One) typed decisions. It never writes your content — it only decides where it belongs. | 🆕 | 2026-09-27 |
| [LongNguyen1984/use-jev](https://github.com/LongNguyen1984/use-jev) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [Loule95450/jev-free-router](https://github.com/Loule95450/jev-free-router) | 0 | 0 | 요약 대기 · Dynamic per-turn model router on free OpenCode Zen + Go models (fork of gargpratyush/jev-router) | 🆕 | 2026-09-27 |
| [lucas-avila/fishy](https://github.com/lucas-avila/fishy) | 0 | 0 | 요약 대기 · Browser extension that checks whether the Gmail email you're reading looks like phishing, powered by TypeSafe Jev | 🆕 | 2026-09-27 |
| [lucasandre-dev/jev-demo](https://github.com/lucasandre-dev/jev-demo) | 0 | 0 | 요약 대기 · Jev vs LLM lado a lado: tempo, custo e resultado numa triagem de chamados. Roda com Docker e uma chave do OpenRouter. | 🆕 | 2026-09-25 |
| [luxinlabs/LiftLine](https://github.com/luxinlabs/LiftLine) | 0 | 0 | 요약 대기 · AI-powered phone intake and dispatch system for elevator service with safety-first routing and automated technician assignment | 🆕 | 2026-09-26 |
| [lwf225-source/jev-codex-router](https://github.com/lwf225-source/jev-codex-router) | 0 | 0 | 요약 대기 · Experimental TypeSafe Jev model routing for Codex Desktop: per-task model and reasoning selection, complex-task planning, subagent dispatch, and fallback. | 🆕 | 2026-09-27 |
| [majoralok/InboxClassifierJev](https://github.com/majoralok/InboxClassifierJev) | 0 | 0 | 요약 대기 · Self-hosted Gmail organizer powered by TypeSafe Jev and LangChain | 🆕 | 2026-09-27 |
| [Marceswan/jevis](https://github.com/Marceswan/jevis) | 0 | 0 | 요약 대기 · Jev-powered intent routing plugin for Hermes Agent — fast conversational model up front, big model in the background | 🆕 | 2026-09-27 |
| [masteris777/dev-double](https://github.com/masteris777/dev-double) | 0 | 0 | 요약 대기 · Local stand-in for System 1 decision models: build routing, guardrails, tool gating, triage, evals, reranking and extraction now, swap the engine later. | 🆕 | 2026-09-27 |
| [MDGChamomile/pi-jev](https://github.com/MDGChamomile/pi-jev) | 0 | 0 | 요약 대기 · Experimental consent-gated Jev routing and public-passage reranking for Pi | 🆕 | 2026-09-27 |
| [mekeren/system-one-benchmark](https://github.com/mekeren/system-one-benchmark) | 0 | 0 | 요약 대기 · Ultra-low latency System One decision routing &amp; 3-way benchmark arena (Rule Engine vs. Local SLM vs. Cloud LLM) inspired by TypeSafe Jev primitives. | 🆕 | 2026-09-25 |
| [mhoefert/resume-match-router](https://github.com/mhoefert/resume-match-router) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [MohtashamMurshid/jev-email](https://github.com/MohtashamMurshid/jev-email) | 0 | 0 | 요약 대기 · Terminal email priority classifier using Jev through OpenRouter | 🆕 | 2026-09-25 |
| [MoonTory/pi-jev-harness](https://github.com/MoonTory/pi-jev-harness) | 0 | 0 | 요약 대기 · Pi extension: TypeSafe Jev routes turns, pre-fetches context, trims tool results, catches loops and guards tool calls | 🆕 | 2026-09-18 |
| [morler/pi-jev-core](https://github.com/morler/pi-jev-core) | 0 | 0 | 요약 대기 · Minimal Jev judgment core for Pi and other TypeScript apps: noul/choice/score across TypeSafe, OpenRouter, Cloudflare, Vercel, and local llama-server (JevK5) | 🆕 | 2026-09-27 |
| [Mr-DS-ML-85/SyFox](https://github.com/Mr-DS-ML-85/SyFox) | 0 | 0 | 요약 대기 ·  The Open System One decision engine | 🆕 | 2026-09-27 |
| [MRKups/jev-usecase-1](https://github.com/MRKups/jev-usecase-1) | 0 | 0 | 요약 대기 · IT helpdesk ticket generator and triage benchmark | 🆕 | 2026-09-27 |
| [mtpatokaitom-commits/classifyNdlRooms](https://github.com/mtpatokaitom-commits/classifyNdlRooms) | 0 | 0 | 요약 대기 · 利用者の質問から、国立国会図書館のどの専門室に振り分けるべきかを判断します。 | 🆕 | 2026-09-27 |
| [nivaslinga2/Resume-analyser](https://github.com/nivaslinga2/Resume-analyser) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [okjpg/jev-hermes-router](https://github.com/okjpg/jev-hermes-router) | 0 | 0 | 요약 대기 · Escolhe o modelo certo pra cada mensagem no Hermes, usando o Jev da TypeSafe. Codex e Claude via assinatura. | 🆕 | 2026-09-27 |
| [orq-ai/jev-judge](https://github.com/orq-ai/jev-judge) | 0 | 0 | 요약 대기 · Judge repeatability study: Jev via Orq classify vs LLM judges on a docs agent. Frozen runs, labels, scripts. | 🆕 | 2026-09-20 |
| [P4A-Policies-for-Agents/A2A-Message-Screening](https://github.com/P4A-Policies-for-Agents/A2A-Message-Screening) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [P4A-Policies-for-Agents/Sensitivity-vs-Clearance-Gate](https://github.com/P4A-Policies-for-Agents/Sensitivity-vs-Clearance-Gate) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [paramiyer/jev-ml-exp](https://github.com/paramiyer/jev-ml-exp) | 0 | 0 | 요약 대기 · Autonomous feature discovery for frozen LLM classifiers across ML benchmark datasets. | 🆕 | 2026-09-26 |
| [peakevergreen/jevidence](https://github.com/peakevergreen/jevidence) | 0 | 0 | 요약 대기 · Let Jev judge. Let your code decide. Python issue-routing sandbox with labeled replay, an offline demo, and Kev support. | 🆕 | 2026-09-22 |
| [PineapplesDev/claude-dev-router](https://github.com/PineapplesDev/claude-dev-router) | 0 | 0 | 요약 대기 · Fastest-confident Claude dev router. Race Opus 5.5 low, Fable 5.1 low, and Haiku against Jev. | 🆕 | 2026-09-26 |
| [prasanthj/duckdb-dual-cognition](https://github.com/prasanthj/duckdb-dual-cognition) | 0 | 0 | 요약 대기 · Native DuckDB extension composing fast System One judgments with selective System Two reasoning, provenance, batching, and caching. | 🆕 | 2026-09-27 |
| [Prateek1771/jev_lab](https://github.com/Prateek1771/jev_lab) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [PromptEngineer48/my-jev](https://github.com/PromptEngineer48/my-jev) | 0 | 1 | 요약 대기 · Build your own Jev-like System One classifier: fine-tune Qwen3.5-4B with Unsloth on RunPod, serve with vLLM, benchmark vs TypeSafe Jev | 🆕 | 2026-09-27 |
| [Pukujan/jev-classifier](https://github.com/Pukujan/jev-classifier) | 0 | 0 | 요약 대기 · Mostly-deterministic JEV-based classifier for epistemic/bitemporal summarization of AI-research transcripts/papers into medium-quality research papers with provenance, lineage, and citations. | 🆕 | 2026-09-27 |
| [punkcanyang/jev-triage](https://github.com/punkcanyang/jev-triage) | 0 | 0 | 요약 대기 · TypeSafe Jev email/ticket triage: queue, urgency, confidence (MIT) | 🆕 | 2026-09-25 |
| [raitoxlol/hermes-slash-router](https://github.com/raitoxlol/hermes-slash-router) | 0 | 1 | 요약 대기 · Unified Hermes Agent + Desktop plugin: TypeSafe Jev routes misspelled, shortened, and meaning-based slash commands to real ones. Advisory memory, fresh Jev decision every time. | 🆕 | 2026-09-27 |
| [rajantripathi/fastgate-jev](https://github.com/rajantripathi/fastgate-jev) | 0 | 0 | 요약 대기 · Jev (TypeSafe AI) as a System One decision layer for a multilingual EN/UZ/RU RAG helpdesk, with an independent benchmark | 🆕 | 2026-09-27 |
| [RastislavDujava/jev-classification-prompting](https://github.com/RastislavDujava/jev-classification-prompting) | 0 | 0 | 요약 대기 · Reproducible experiments on prompting criteria in TypeSafe's Jev — how much of a classifier's behaviour is yours to define | 🆕 | 2026-09-21 |
| [Ray0907/case-review](https://github.com/Ray0907/case-review) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [riishabhz/power-bi-visual-doctor](https://github.com/riishabhz/power-bi-visual-doctor) | 0 | 0 | 요약 대기 · Find broken visuals in published Power BI reports and triage them locally with Laya or Jev | 🆕 | 2026-09-26 |
| [robinwintertaylor/Prompt-Router](https://github.com/robinwintertaylor/Prompt-Router) | 0 | 0 | 요약 대기 · Sub-120ms smart LLM gateway &amp; real-time optics dashboard using TypeSafe Jev System One. Defeats cache thrashing on coding agents (Goose, Cursor, VS Code) with Break-Even Cache Affinity and 0.60 Confidence-Gated Safety. | 🆕 | 2026-09-24 |
| [rocstack/jev-profanity](https://github.com/rocstack/jev-profanity) | 0 | 0 | 요약 대기 · Context-aware profanity detection for JavaScript and TypeScript, powered by Jev AI with optional fast word-list matching. | 🆕 | 2026-09-25 |
| [rominap22/strandsharness-langchain-jev](https://github.com/rominap22/strandsharness-langchain-jev) | 0 | 0 | 요약 대기 · Demo for We Are Developers AI Conference with Strands Harness, LangChain, and Jev | 🆕 | 2026-09-25 |
| [Running-Dolphins/jev-bench](https://github.com/Running-Dolphins/jev-bench) | 0 | 0 | 요약 대기 · Measure accuracy and calibration of Jev (TypeSafe AI's decision model) on public datasets: 12 business-like tasks, 7 experiments, one Python file. | 🆕 | 2026-09-20 |
| [SApplefeld/agent_persona](https://github.com/SApplefeld/agent_persona) | 0 | 0 | 요약 대기 · Claude based Function Hooks implementation of PIANO style loops for goal management, memory curation, redirection, and long-running effort. | 🆕 | 2026-09-28 |
| [sarayutbit58/antigravity-systemone](https://github.com/sarayutbit58/antigravity-systemone) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [secondfret/mailjay](https://github.com/secondfret/mailjay) | 0 | 0 | 요약 대기 · Personal macOS inbox triage app powered by Gmail API and TypeSafe Jev | 🆕 | 2026-09-27 |
| [sengeezer/ai-gateway-routing](https://github.com/sengeezer/ai-gateway-routing) | 0 | 0 | 요약 대기 · Task-type LLM model routing for Vercel AI Gateway (+ OpenRouter hybrid): classify fast/reasoning/vision/coding, deterministic tiers, fallback chains, credit warnings, measured classifier accuracy + CI. | 🆕 | 2026-09-26 |
| [sgaunet/gutcheck](https://github.com/sgaunet/gutcheck) | 0 | 0 | 요약 대기 · Go client for System One typed-decision APIs (TypeSafe Jev and self-hosted Laya): typed noul, choice and score answers. Stdlib only. | 🆕 | 2026-09-27 |
| [Shalimov04/open-jev](https://github.com/Shalimov04/open-jev) | 0 | 0 | 요약 대기 · Distil a prompt into a small, fast, calibrated classifier. Typed decisions (choice/score/noul) with calibrated probabilities from a local LLM teacher, served at /v1/systemone. | 🆕 | 2026-09-27 |
| [Shogo-nfrealmusic/jev-eval](https://github.com/Shogo-nfrealmusic/jev-eval) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-18 |
| [simonholm/jev-lab](https://github.com/simonholm/jev-lab) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [singhpratech/pankhllm](https://github.com/singhpratech/pankhllm) | 0 | 0 | 요약 대기 · The LLM gateway that learns to skip the LLM. Trains its own tiny model on your agent's decisions and makes them in 0.2 ms on a CPU, with no LLM call. OpenAI-compatible, one Rust binary. Teach it with your skills and logs in one command. | 🆕 | 2026-09-26 |
| [singhpratech/sqljev](https://github.com/singhpratech/sqljev) | 0 | 0 | 요약 대기 · Ask your SQL rows questions in plain English. jev() for SQL Server, PostgreSQL, MySQL, Snowflake, Databricks, BigQuery, Redshift &amp; DuckDB, answered by Laya: open weights, runs on your hardware, fine-tunable on your tables. | 🆕 | 2026-09-26 |
| [sispehar/jev-for-splunk](https://github.com/sispehar/jev-for-splunk) | 0 | 0 | 요약 대기 · Splunk app: the \| jev search command asks TypeSafe Jev typed questions about your events and adds calibrated probabilities, choices and scores as fields, cached in the KV store. | 🆕 | 2026-09-26 |
| [sktime303/orjev](https://github.com/sktime303/orjev) | 0 | 0 | 요약 대기 · Validated sequential Jev routing plans for OpenRouter | 🆕 | 2026-09-27 |
| [smolnikov-k/migom](https://github.com/smolnikov-k/migom) | 0 | 0 | 요약 대기 · Мигом 2B: русская модель быстрых решений (typed decisions). Веса: huggingface.co/smolnikov/migom-2b | 🆕 | 2026-09-27 |
| [smolnikov-k/rudecide](https://github.com/smolnikov-k/rudecide) | 0 | 0 | 요약 대기 · RuDecide: Russian benchmark for small typed-decision (System One) models - choice / score / yes-no | 🆕 | 2026-09-27 |
| [Solizardking/jev-trader-solana](https://github.com/Solizardking/jev-trader-solana) | 0 | 0 | 요약 대기 · Dry-run multi-venue JEV trader on Solana: Jupiter + DFlow spot best-price routing, Imperial perps at 1x, CoinGecko regime gate, fail-closed. Built by Clawd. | 🆕 | 2026-09-25 |
| [Soubhagyadev/MergeCalibr-Jev](https://github.com/Soubhagyadev/MergeCalibr-Jev) | 0 | 0 | 요약 대기 · AI powered pull request triage system using DeepSeek for code understanding and TypeSafe Jev for probabilistic risk assessment, helping developers identify PRs that require human review. | 🆕 | 2026-09-27 |
| [soummyaanon/jev-vs-laya](https://github.com/soummyaanon/jev-vs-laya) | 0 | 0 | 요약 대기 · ⚔️ Open-source battleground for AI classifiers: TypeSafe Jev vs Laya on byte-identical inputs. Live games (triage, 7 languages, prompt injection, 50-way intents, Snake, speed race), scored on accuracy, p(true) and Brier, with a report card. | 🆕 | 2026-09-27 |
| [spirit1616/jev-playground](https://github.com/spirit1616/jev-playground) | 0 | 0 | 요약 대기 · Just some playground scripts to find out what I can do with jev. | 🆕 | 2026-09-25 |
| [srknkrbb/jev-ecc](https://github.com/srknkrbb/jev-ecc) | 0 | 0 | 요약 대기 · Jev (TypeSafe AI System One) decision layer for ECC / Claude Code: risk gate, triage &amp; routing, review triage, OTel/Grafana flow | 🆕 | 2026-09-25 |
| [StoneHub/jev-tab-organizer](https://github.com/StoneHub/jev-tab-organizer) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [Sweet-Butters/korea-ai-contest-tracker](https://github.com/Sweet-Butters/korea-ai-contest-tracker) | 0 | 0 | 요약 대기 · Self-updating directory of AI competitions &amp; hackathons in South Korea — with TypeSafe Jev as a classifier. 대한민국 AI 공모전·해커톤 자동 수집 | 🆕 | 2026-09-27 |
| [TareqAlhashash/jev-claude-codereviewer](https://github.com/TareqAlhashash/jev-claude-codereviewer) | 0 | 0 | 요약 대기 · AI code reviewer demo pairing Jev (typesafe.ai) instant triage with an optional Claude deep-dive review. React + Spring Boot. | 🆕 | 2026-09-27 |
| [Tatendaz/model-picker](https://github.com/Tatendaz/model-picker) | 0 | 0 | 요약 대기 · Model Picker: JEV-powered Codex model and effort recommendations as task scope grows. Manual switching, private local state, MIT licensed. | 🆕 | 2026-09-28 |
| [teochenglim/laya-play](https://github.com/teochenglim/laya-play) | 0 | 0 | 요약 대기 · laya dockerbuild for faster ready make container | 🆕 | 2026-09-27 |
| [thefaisalkhan/ticketautopilot](https://github.com/thefaisalkhan/ticketautopilot) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [theogrillat/pi-precision-router](https://github.com/theogrillat/pi-precision-router) | 0 | 0 | 요약 대기 · Quality-first, concrete-model routing before every Pi model step | 🆕 | 2026-09-26 |
| [thomaszta/jev-req-gate](https://github.com/thomaszta/jev-req-gate) | 0 | 0 | 요약 대기 · A quality gate for AI-generated requirements, powered by Jev (TypeSafe System One). Routes each requirement to PASS / REVIEW / BLOCK with calibrated probabilities. Real benchmark vs LLM: 0 false blocks, 9x cheaper. | 🆕 | 2026-09-26 |
| [ThreeLightStudio/jev-laya-local-daemon](https://github.com/ThreeLightStudio/jev-laya-local-daemon) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [ThyFriendlyFox/jev-triage](https://github.com/ThyFriendlyFox/jev-triage) | 0 | 0 | 요약 대기 · Active-learning triage pipeline using TypeSafe Jev — route by confidence, log soft labels for local distillation | 🆕 | 2026-09-19 |
| [tibor-src/jev-site](https://github.com/tibor-src/jev-site) | 0 | 0 | 요약 대기 · Classify a message with Jev: boolean, choice, or score, with a probability. Live site: https://jev.tibor.io. Made by https://tibor.io | 🆕 | 2026-09-27 |
| [tkumata/gh-issues-triage](https://github.com/tkumata/gh-issues-triage) | 0 | 0 | 요약 대기 · プロジェクトの直近10件の Issues をトリアージしてブランチを作成するツール | 🆕 | 2026-09-27 |
| [TobyNoSkillSon/Verdict](https://github.com/TobyNoSkillSon/Verdict) | 0 | 0 | 요약 대기 · A local System One server for your Mac: open decision models on MLX, compatible with the System One API (TypeSafe Jev). | 🆕 | 2026-09-26 |
| [totally-tim/effort-router](https://github.com/totally-tim/effort-router) | 0 | 0 | 요약 대기 · Picks the reasoning effort for each turn of Claude Code with a System One classifier | 🆕 | 2026-09-27 |
| [tuhinmitra888/ai-jev-ticket-triage](https://github.com/tuhinmitra888/ai-jev-ticket-triage) | 0 | 0 | 요약 대기 · Support ticket triage using TypeSafe (Jev) typed AI judgments + plain TypeScript routing rules | 🆕 | 2026-09-25 |
| [twilso24/jev_router](https://github.com/twilso24/jev_router) | 0 | 0 | 요약 대기 · Standalone TypeSafe Jev-based auto-routing for Agent Zero | 🆕 | 2026-09-27 |
| [TyrellD1/typesafe-ai_smoke-test](https://github.com/TyrellD1/typesafe-ai_smoke-test) | 0 | 0 | 요약 대기 · Smoke test: route prompts to a work or life database with TypeSafe AI (Jev), 30-case eval | 🆕 | 2026-09-17 |
| [vinayskasarla/agentroutecomparison](https://github.com/vinayskasarla/agentroutecomparison) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [vishalgwu/jev-review-classifier](https://github.com/vishalgwu/jev-review-classifier) | 0 | 0 | 요약 대기 · Multi-attribute e-commerce review classifier built with Jev (TypeSafe AI) — one review in, five typed judgments out in a single API call. | 🆕 | 2026-09-27 |
| [waLLxAck/mailroom](https://github.com/waLLxAck/mailroom) | 0 | 0 | 요약 대기 · Free, open-source Gmail classifier powered by TypeSafe Jev. Bring your own OpenRouter key. | 🆕 | 2026-09-25 |
| [weiping/jev-claude-code](https://github.com/weiping/jev-claude-code) | 0 | 0 | 요약 대기 · Claude Code plugin that puts TypeSafe Jev in the agent loop: permission gate, output ladder, subagent routing | 🆕 | 2026-09-27 |
| [WhiteDev08/Smart-Router---A-Decision-One-Model-Router](https://github.com/WhiteDev08/Smart-Router---A-Decision-One-Model-Router) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [whosydd/pi-web-toolkit](https://github.com/whosydd/pi-web-toolkit) | 0 | 0 | 요약 대기 · Single pi extension: Context7 library docs + Exa web search + Sourcegraph code search | 🆕 | 2026-09-26 |
| [withoneai/jev-email-classifier](https://github.com/withoneai/jev-email-classifier) | 0 | 0 | 요약 대기 · Sort your Gmail inbox into categories you write in plain English. TypeSafe's Jev makes each call with calibrated probabilities; uncertain mail gets a Review label. Built on One, runs with zero keys. | 🆕 | 2026-09-25 |
| [wonghanz/jev-decisions](https://github.com/wonghanz/jev-decisions) | 0 | 0 | 요약 대기 · Typed decision layer for backend engineering: log triage, incident routing, PR triage, deploy risk. Ships a control-group eval harness so you can test whether a hosted decision model beats a local baseline on your own data. | 🆕 | 2026-09-27 |
| [WorkWeonline/workwe-laya](https://github.com/WorkWeonline/workwe-laya) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [xinian5216/chat-signal-analyzer](https://github.com/xinian5216/chat-signal-analyzer) | 0 | 0 | 요약 대기 · Privacy-conscious Jev-powered chat signal analyzer for observable emotion, intent, engagement, and relationship signals. | 🆕 | 2026-09-27 |
| [yanng981/system-one-benchmark](https://github.com/yanng981/system-one-benchmark) | 0 | 0 | 요약 대기 · Zero-shot accuracy, calibration and latency of Jev, Kev, Laya, Von and GLiNER2.5-Decide on SST-2, TREC, Banking77 and MASSIVE in 8 languages. Code and raw predictions. | 🆕 | 2026-09-26 |
| [yosit/dot-pi](https://github.com/yosit/dot-pi) | 0 | 0 | 요약 대기 · Pi coding-agent extensions: Claude-Code-style statusline, plus TypeSafe Jev guardrails — auto thinking level, verify-before-done gate, AskUserQuestion enforcer, retry-loop detector | 🆕 | 2026-09-25 |
| [yuvrajrox/laya-jev-eval](https://github.com/yuvrajrox/laya-jev-eval) | 0 | 0 | 요약 대기 · Head-to-head evaluation of Laya (open weights) and TypeSafe Jev on email intent classification | 🆕 | 2026-09-22 |
| [yuyang2230/jev-agent-skill](https://github.com/yuyang2230/jev-agent-skill) | 0 | 1 | 요약 대기 · Free typed judgments for AI agents: offload classify/screen/score/verify to Jev (TypeSafe System One) via OpenCode Zen. Claude Code / ZCode skill. 给AI代理省token的免费决策分流技能 | 🆕 | 2026-09-19 |
| [Zapaia/que-modelo-uso](https://github.com/Zapaia/que-modelo-uso) | 0 | 0 | 요약 대기 · Type what you want to build; Jev picks the AI models that fit, from a 3D pile of 186. Webflow × Nerdearla App Showcase 2026. | 🆕 | 2026-09-28 |
| [zhuyansen/jev-zeroshot-vs-bert](https://github.com/zhuyansen/jev-zeroshot-vs-bert) | 0 | 0 | 요약 대기 · Zero-shot text classification: TypeSafe Jev vs BERT-family zero-shot (NLI, embeddings) on 6 public tasks + PAWS pairs, with label-equivalence curves and an arXiv contamination control | 🆕 | 2026-09-19 |
| [zjarlin/qa-intent](https://github.com/zjarlin/qa-intent) | 0 | 0 | 요약 대기 · 把垂直领域 QA 题库编译成 Laya/JEV System One 决策信封的 CLI | 🆕 | 2026-09-26 |
| [zushicat/gliner2-api-jev-schema](https://github.com/zushicat/gliner2-api-jev-schema) | 0 | 0 | 요약 대기 · Local classification API using GLiNER2 with GLiNER2.5-Decide model, serving a Typesafe Jev compatible endpoint. | 🆕 | 2026-09-27 |
| [TexasOct/jev-gateway](https://github.com/TexasOct/jev-gateway) | 0 | 0 | 요약 대기 · Session-aware OpenAI-compatible model-routing gateway powered by JEV | 🆕 | 2026-09-23 |
| [jackchun53/dsh-stage-router](https://github.com/jackchun53/dsh-stage-router) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [jekozyra/pi-typesafe-router](https://github.com/jekozyra/pi-typesafe-router) | 0 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-22 |
| [jonaslinde/hermes-jev-capability-router](https://github.com/jonaslinde/hermes-jev-capability-router) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [JordanKing22/RFQ_Routing](https://github.com/JordanKing22/RFQ_Routing) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [keremmisik/jev-triage](https://github.com/keremmisik/jev-triage) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [Lightupsky/astrbot_plugin_intentiontrigger](https://github.com/Lightupsky/astrbot_plugin_intentiontrigger) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [lucascanna/jev-hackaton](https://github.com/lucascanna/jev-hackaton) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [lukelittle/goofy-ahh-system-one-demo](https://github.com/lukelittle/goofy-ahh-system-one-demo) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [maustin10/System1_classifier_comparisons_transcripts](https://github.com/maustin10/System1_classifier_comparisons_transcripts) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [musashimiyomoto/demo](https://github.com/musashimiyomoto/demo) | 0 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [pcparts001/pi-jev-reasoning-router-lite](https://github.com/pcparts001/pi-jev-reasoning-router-lite) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [piratchai/Jevonian-complete-guide-to-jev-router](https://github.com/piratchai/Jevonian-complete-guide-to-jev-router) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [Ricos33/LLM-Router](https://github.com/Ricos33/LLM-Router) | 0 | 0 | **무엇** 입력 프롬프트의 복잡도와 의도를 분류해 저비용 모델과 고성능 프론티어 LLM으로 분기해 주는 OpenAI 호환 API 게이트웨이다.<br>**판단** 입력 프롬프트의 복잡도와 의도를 분석하여 저비용 계열(cheap)과 고성능 계열(frontier) 중 어느 백엔드로 라우팅할지 점수와 확률로 판단한다.<br>**포인트** FastAPI 기반 역방향 프록시로 TypeSafe Jev 어댑터 및 휴리스틱 분류기를 지원하며 SQLite 및 Streamlit 기반 실시간 비용 절감 대시보드를 제공한다. | 🆕 | 2026-09-27 |
| [t-shiratori/t-shiratori-ai-model-evaluation-router](https://github.com/t-shiratori/t-shiratori-ai-model-evaluation-router) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [xinghai-osc/xinghai-router](https://github.com/xinghai-osc/xinghai-router) | 0 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |

### NandhaKishorM/laya

<details><summary>README 발췌</summary>

Multilingual, non-autoregressive System 1 decision engine. Typed decisions over 100+ languages in a single forward pass — 33 ms — trained with reinforcement learning against strictly proper scoring rules (RLCD), with a router that picks the right checkpoint per request.

</details>

### gargpratyush/jev-router

<details><summary>README 발췌</summary>

Automatic per-turn model routing for Claude Code and OpenAI Codex. Jev sends simple work to the fast tier and difficult work to the strong tier, while preserving each CLI's native interface, tools, sessions, permissions, and authentication.

</details>

### agentconnect-md/agentconnect

<details><summary>README 발췌</summary>

@ any agent. Wherever work happens, your agents work alongside your team and each other, learning as they go.

</details>

### feder-cr/jev

<details><summary>README 발췌</summary>

Yes/no decisions on a laptop CPU in 50–220 ms. Send a text and a yes/no question, get back P(yes).

</details>

### alisaitteke/photoshop-mcp

<details><summary>README 발췌</summary>

Languages: English · 简体中文 · Español · Deutsch · 日本語 · Türkçe · Website

</details>

### milvus-io/bootcamp

<details><summary>README 발췌</summary>

Begin an interactive journey to master Milvus, enhancing your projects with seamless integration and optimization tools.

</details>

### ollaya-dev/ollaya

<details><summary>README 발췌</summary>

A decision model reads a state (a message, an email, a ticket, any JSON) plus typed questions (choice, score, noul) and returns calibrated probabilities in a single forward pass, in milliseconds. It never generates text. Ollaya pulls these models by name, serves them from a local daemon, and speaks 

</details>

### jerryjliu/docjev

<details><summary>README 발췌</summary>

Document classification and splitting with Jev, LiteParse, and optional LlamaParse.

</details>

### mrmps/classifier-dev

<details><summary>README 발췌</summary>

Zero-shot text classification. Plain text in, a label and a calibrated confidence out. No key, no signup. Up to a thousand texts per request.

</details>

### BillionsBobby/JevRouter

<details><summary>README 발췌</summary>

Faster agent decisions. Models, subagents, skills, MCP tools, CLIs and plugins become one candidate set — Jev answers one typed Choice question, JevRouter enforces availability, permissions, risk and confirmation around it.

</details>

### Dominic789654/awesome-deepseek-harness

<details><summary>README 발췌</summary>

&gt; A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators, aggregators &amp; UIs for DeepSeek Harness (DSH) — DeepSeek's official agent runtime built around the idea Model + Harness = Agent.

</details>

### Heman10x-NGU/openJev-verdict-2.0

<details><summary>README 발췌</summary>

This repository contains code and references for two distinct models:

</details>

### yonatangross/orchestkit

<details><summary>README 발췌</summary>

107 skills · 36 agents · 171 hooks

</details>

### yusukebe/hono-jev-router

<details><summary>README 발췌</summary>

Route HTTP requests by meaning.

</details>

### logan-markewich/jeff

<details><summary>README 발췌</summary>

A self-hosted implementation of TypeSafe's jev System One API, powered by GLiFormer (400M parameters). Use the official typesafe-sdk by pointing TYPESAFEBASEURL at jeff.

</details>

### kentcdodds/kody

<details><summary>README 발췌</summary>

Kody is your assistant's home—the memory, keys, code, and automations your AI agent keeps, portable across every MCP host. Built on Cloudflare Workers and the Model Context Protocol (MCP), it ships a Remix UI, Worker-based request routing, package runtime plumbing, and OAuth-protected MCP endpoints.

</details>

### angel291592/Intent-Router

<details><summary>README 발췌</summary>

An intent compiler for AI agents.

</details>

### timpratim/macbrow

<details><summary>README 발췌</summary>

Talk to your Mac. Say a command and it runs as AppleScript; say a web task and it drives your Chrome. Routing takes about 300 ms because a System One model chooses instead of generating.

</details>

### Heman10x-NGU/Verdict-open-jev

<details><summary>README 발췌</summary>

OpenJev (Verdict) is an open-source, post-trained foundational decision model designed for structured software workflows, inspired by TypeSafe AI\'s Jev and Reinforcement Learning for Calibrated Decisions (RLCD).

</details>

### tuxevil/tuxevil-rotator

<details><summary>README 발췌</summary>

View live telemetry stats

</details>

### egma-ai/jev-code-reviewer

<details><summary>README 발췌</summary>

Most PRs that are generated by agents today get YOLO merged because its hard for human mind to comprehend when your agent just suddenly shows up with 230 file changes. This is an attempt to reduce the mental burden by classifying each change in a review to P0, P1, P2. Only P0 are shown by default. T

</details>

### mizchi/jev-lint

<details><summary>README 발췌</summary>

A lint tool that uses Jev -- a fast classifier that answers a natural-language question with a calibrated probability instead of writing text -- to decide what a parser cannot.

</details>

### Bodila51/grok-bot-jev

<details><summary>README 발췌</summary>

Connect TypeSafe Jev to Grok Bot as a cheap decision layer. Jev classifies the request before expensive research, browser, retry, or subagent work, so Grok Bot can reuse a fresh artifact, stop a failing retry, cap research, or ask for approval.

</details>

### nidhi-singh02/agent-router

<details><summary>README 발췌</summary>

Local-first, quota-aware routing for AI coding agents in Herdr.

</details>

### fazlerocks/jevmail

<details><summary>README 발췌</summary>

Open-source AI email triage for Gmail. Reach inbox zero by seeing only the mail that needs a reply. Read-only, local, and sorted by Jev, TypeSafe AI's new decision model, through Vercel AI Gateway.

</details>

### prismhq/jev-router

<details><summary>README 발췌</summary>

Open-source LLM router. Clients send one model id; Jev (TypeSafe's System One model) picks which model serves each request.

</details>

### AndrewPrifer/jimothy

<details><summary>README 발췌</summary>

Train small, insanely fast local classifiers from Jev-compatible examples. Run locally in your browser or Node.js.

</details>

### GiesN/typesafe-jev-workflow

<details><summary>README 발췌</summary>

A small async LangGraph workflow that sends a mocked email to TypeSafe's Jev model, receives a typed Choice (invoice or general), and routes to a demo handler. The handlers only set a destination in graph state; they do not send email or make payments.

</details>

### iamaamir/system-one

<details><summary>README 발췌</summary>

&gt; Write the decision once. Run it on any System One provider.

</details>

### Nisaka520/JevIntent

<details><summary>README 발췌</summary>

一个 FkWeChat 插件：长按任意微信消息 → 调用 TypeSafe Jev 判定模型 → 几秒后在屏幕上弹出结论。不发任何消息、不改聊天记录，对方完全不知道。

</details>

### r-ms/mini-jev

<details><summary>README 발췌</summary>

What a Jev-style interface looks like on a frozen model: classify against a schema that arrives with the request by reading next-token logits, not by generating JSON. Measured on Qwen3-4B.

</details>

### ikermoel/open-alternative-jev

<details><summary>README 발췌</summary>

Open-source System One models: typed, calibrated decisions from any open-weights LLM, in one forward pass. An open alternative to the idea behind TypeSafe's Jev, running on your own GPU with models you already have. Python package open-alternative-jev, import name so1 ("System One"). Also known as: 

</details>

### lykycy123/RoboJEV

<details><summary>README 발췌</summary>

RoboJEV is a small, inspectable robotics laboratory. JEV receives structured simulator state, not images, selects an immediate intent, then selects X/Y/Z directions and a gripper command. A Cartesian controller executes the action using real MuJoCo contacts. Each task has independent physical succes

</details>

### intikhab49/open-jev-typed-decision-engine

<details><summary>README 발췌</summary>

A 150M encoder that answers arbitrary typed questions about a state in one forward pass, with calibrated confidence. 0.03 behind TypeSafe Jev on its own benchmark, 2.5× better calibrated, 4× faster, $0.

</details>

### klauswg/jev-guard

<details><summary>README 발췌</summary>

Real-time risk triage gateway for crypto exchange deposits &amp; withdrawals — Jev (TypeSafe System One) as the triage layer, deterministic code as the judge.

</details>

### higress-group/HiRoute

<details><summary>README 발췌</summary>

A local-first routing and coordination engine for long-running agent work.

</details>

### adarshmishra07/jcm-router

<details><summary>README 발췌</summary>

A local proxy that sits between Claude Code and the Anthropic API and picks the model and effort level per message, using TypeSafe's Jev classifier. Trivial questions go to Haiku, everyday work to Sonnet, hard problems to Opus or Fable, and your Claude subscription login keeps working.

</details>

### devanshbatham/commit-miner

<details><summary>README 발췌</summary>

Classify Git commit diffs and messages with Jev. Bug fixes, security fixes/CWEs, and change types.

</details>

### sgoedecke/system-one

<details><summary>README 발췌</summary>

Turn any LLM into a System One model like Jev: a fast general classifier that you can supply a set of questions to and get an answer in a single forward pass.

</details>

### sugarforever/yummy-pi-extensions

<details><summary>README 발췌</summary>

Extensions for Pi, the coding agent, published under the @sugarforever npm scope. Each one lives in its own folder with its own README, tests and tag-driven release workflow.

</details>

### tshmieldev/sharp

<details><summary>README 발췌</summary>

Filter your X timeline with an AI model you choose and pay for directly. Describe what you want to see — or never see again — in plain language.

</details>

### misbahsy/doc-router

<details><summary>README 발췌</summary>

Don't pay to OCR a page that already has text on it.

</details>

### hivellm/rulebook

<details><summary>README 발췌</summary>

&gt; Tool-agnostic AI development framework. One init generates AGENTS.md — the universal standard every AI coding agent reads — plus Claude Code integration, quality gates, spec-driven task management, and an MCP server. Auto-detects 28 languages.

</details>

### mejiasd3v/pi-jev-router

<details><summary>README 발췌</summary>

Let TypeSafe's Jev choose a model and reasoning effort for Pi. The model stays fixed for the session. Effort stays fixed too, unless you enable adaptive effort for Codex Astra. Generation uses your existing Pi providers and credentials.

</details>

### reachjalil/jevlogs

<details><summary>README 발췌</summary>

Diagnostic value, priority, and routing with TypeSafe's Jev. Every record stays in your archive.

</details>

### FeiLiuEM/open-medical-jev

<details><summary>README 발췌</summary>

Jev-class judgment from frozen open models — computation, not training.

</details>

### Bodila51/muse-jev-playbook

<details><summary>README 발췌</summary>

Use TypeSafe AI's Jev as a cheap, fast decision layer inside an AI agent workflow — triage, classify, score, and gate work before expensive steps (browser, deep research, retries, subagents).

</details>

### rlaope/jeval

<details><summary>README 발췌</summary>

jeval measures how well a classifier's confidence matches reality, and turns what a mistake costs into the threshold where the machine should stop deciding and a human should start.

</details>

### TypeSafeAI/typesafe-playground

<details><summary>README 발췌</summary>

A community playground for TypeSafe AI's Jev: edit classification experiments, compare A/B inputs, route conversations, extract document fields, inspect code-policy decisions, and explore games and simulations built around typed model outputs.

</details>

### vinilana/live-jev

<details><summary>README 발췌</summary>

A 2D, top-down autonomous car that runs in the browser and uses TypeSafe's Jev (a "System One" decision model) as its driving classifier. Every ~200 ms the car turns what its sensors see into a JSON state, sends it to Jev with four typed questions, and executes the answers:

</details>

### 0x7067/claude-jev

<details><summary>README 발췌</summary>

Stop paying frontier-model prices for small judgments.

</details>

### anandi1989/awesome-jev-usecases

<details><summary>README 발췌</summary>

&gt; LLMs write essays. Jev makes the call. This is the community's living index of what people are actually shipping with TypeSafe AI's System One decision model: real repos, real measurements, and the patterns that already work.

</details>

### ktaletsk/jevframe

<details><summary>README 발췌</summary>

jevframe is a Python library for AI text classification, sentiment analysis, and scoring in pandas and Polars DataFrames. Ask natural-language questions about each row using TypeSafe Jev and get structured results with complete probability distributions.

</details>

### leesk212/JEV-CPU

<details><summary>README 발췌</summary>

Semantic ifs from open models — on a laptop CPU, no GPU.

</details>

### parth-kp/jev-mail-classifier

<details><summary>README 발췌</summary>

Your inbox, judged in milliseconds.

</details>

### AgriciDaniel/gatekeeper

<details><summary>README 발췌</summary>

Gatekeeper decides which AI agent or skill should handle a request, before your AI picks one. Commands you type go straight through; the plain requests, where the AI would otherwise guess, get checked by your rules and judged by Jev. Each decision costs a fraction of a cent and takes about half a se

</details>

### Das-rebel/a3m-router

<details><summary>README 발췌</summary>

GPT-4o costs $0.03/run. A3M routes the same request to Groq/Mistral for $0.0001.

</details>

### syumai/jevyoumean

<details><summary>README 발췌</summary>

&gt; [!NOTE] &gt; jym is an experimental project for exploring semantic CLI correction. &gt; Suggestions can be wrong, the interface may change, and it is not intended &gt; for production-critical workflows.

</details>

### thusinh1969/BrighTO_Router

<details><summary>README 발췌</summary>

Million-token AI traffic, simple Rust fast path, one Docker install.

</details>

### reachjalil/jev-tree

<details><summary>README 발췌</summary>

Recursive Jev choice over a taxonomy. TypeSafe’s Jev can only list 255 options in one choice question. Real catalogs are bigger. jev-tree walks a JSON shape and calls Jev once per level (or per partition) so you can select among thousands of leaves.

</details>

### DECRUX9812/typesafe-skill-router

<details><summary>README 발췌</summary>

A Hermes Agent plugin that names the one skill worth loading — before the model call.

</details>

### simonw/llm-typesafe

<details><summary>README 발췌</summary>

Use TypeSafe classification and scoring models with LLM.

</details>

### aio-proxy/aio-proxy

<details><summary>README 발췌</summary>

Connect and manage multiple model providers through one API endpoint. AIO Proxy provides an extensible plugin system, automatic routing and failover, and observability across usage, cost, and end-to-end request traces.

</details>

### Jimuelle07/Helm

<details><summary>README 발췌</summary>

An AI coding-agent orchestrator and model router for Claude Code, Codex, Cursor, Gemini CLI, Aider, OpenCode, Copilot and local models. Installable as a Claude Code plugin, a Gemini CLI extension, or an Agent Skill.

</details>

### kavehmz/typesafe-playground

<details><summary>README 발췌</summary>

Small, interactive experiments with TypeSafe Jev: from understanding a support message to making decisions for a car in a 3D world.

</details>

### Micha0827/snapjudge

<details><summary>README 발췌</summary>

Typed decisions from local Qwen models on your Mac. Ask a question about some text, get back a probability for every allowed answer. No text generation, no JSON parsing: the probabilities are read straight from the model's next-token logits.

</details>

### rayanweragala/jev-call-router

<details><summary>README 발췌</summary>

A small TypeScript service and library that uses Jev by TypeSafe AI as the decision layer for phone calls. It sits between a PBX (such as Asterisk or FreePBX) and your call destinations, classifying caller intent to decide PBX actions.

</details>

### philippdubach/pi-jev-router

<details><summary>README 발췌</summary>

pi-jev-router is a pi extension. It classifies each task with Jev (TypeSafe System One, called through OpenRouter) and routes the task to an OpenRouter model. The pick balances quality, cost and latency, and follows a role policy for planning, code and writing.

</details>

### collapseindex/jev-ultralightspeed

<details><summary>README 발췌</summary>

v0.24.0 · Apache-2.0 · no required dependencies

</details>

### kushals256/jevcache

<details><summary>README 발췌</summary>

MorrowCache — routers pick a model. This proxy decides whether to call one.

</details>

### leonardovida/duckdb-ai

<details><summary>README 발췌</summary>

Run large language models (LLMs) directly from DuckDB SQL. Summarize and classify text, extract structured JSON, generate embeddings for semantic search and RAG, and ask questions about tables with text-to-SQL.

</details>

### win4r/pi-jev-router

<details><summary>README 발췌</summary>

English · 研究与 Bifrost 对比 · 设计与边界 · 验证记录

</details>

### matthewp/flue-jev-demo

<details><summary>README 발췌</summary>

A standalone Cloudflare-targeted Flue example. Application AI requests go through the Worker's AI binding and its default AI Gateway:

</details>

### ruban-24/switchboard

<details><summary>README 발췌</summary>

Automatic model selection for Claude Code and Codex.

</details>

### AronAxe/Token-Terminator

<details><summary>README 발췌</summary>

Portable token reduction for agent runtimes, with a first-party

</details>

### iefnaf/pi-jev

<details><summary>README 발췌</summary>

Selective context compaction and per-turn model routing for pi, powered by Jev.

</details>

### okooo5km/jev

<details><summary>README 발췌</summary>

命令行里的类型化判断：yes/pick/score，每个答案都带校准概率 —— 默认走 TypeSafe 官方 API，也支持 OpenRouter，CLI + Agent Skill。

</details>

### rajdhakad9826/jev-router

<details><summary>README 발췌</summary>

jev-model-router routes each query to the cheapest LLM tier that can actually handle it, using TypeSafe's Jev to classify how demanding a query is — fast and cheap, without spending an LLM call on the routing decision itself.

</details>

### rupeshpoojary9/poorjev

<details><summary>README 발췌</summary>

Your model's 0.9 is a vibe. poorjev's 0.9 is a measurement.

</details>

### HexyeDEV/JevPR

<details><summary>README 발췌</summary>

JevPR is a GitHub App that routes pull-request review work using Jev By TypeSafe as the decision engine.

</details>

### imMamdouhaboammar/fable-jev

<details><summary>README 발췌</summary>

Where TypeSafe AI's System One (Jev) meets get-fable's Deterministic Lifecycle Engine.

</details>

### neurono-ml/typed-lm

<details><summary>README 발췌</summary>

Deterministic inference · Adapter training · Apache-2.0

</details>

### saibimajdi/typesafeai-dotnet-sdk

<details><summary>README 발췌</summary>

Ask typed, answerable questions about any text or JSON state, and get structured, probability-backed answers back: yes/no probabilities, a chosen option out of a set you define, or a position on a rubric you define.

</details>

### vercel-labs/jev-ai-sdk-form-router

<details><summary>README 발췌</summary>

Three forms use Jev to route submissions by context, with openai/gpt-6-luna-fast handling uncertain or failed evaluations. Includes editable samples, routing details, and optional email delivery.

</details>

### vynnlee/jev-mail

<details><summary>README 발췌</summary>

&gt; CLI-installed and CLI-managed Gmail classification that runs continuously on Google Apps Script with the TypeSafe Jev model.

</details>

### zeeshan8281/slo-router

<details><summary>README 발췌</summary>

SLO Router is an OpenAI-compatible proxy that chooses an LLM backend using request semantics, backend quality priors, live queue depth, context capacity, expected prefill/decode time, price, and a caller latency SLO. Jev 1.13 can supply bounded semantic features; the service falls back to determinis

</details>

### Emenowicz/jev-sap-commerce

<details><summary>README 발췌</summary>

jevintegration is an SAP Commerce extension that lets Jev, TypeSafe's typed-decision model, make narrow decisions about shop text. It moderates product reviews, suggests product categories and suggests classification attribute values, and you measure it on your own data before it changes anything.

</details>

### green-dalii/pi-shift-router

<details><summary>README 발췌</summary>

SEO metadata (not user-visible, parsed by crawlers / LLMs): - name: pi-shift-router - type: software / npm package / pi-coding-agent extension / model router / LLM classifier - license: MIT - language: TypeScript - runtime: Node.js &gt;= 24 - dependencies: @earendil-works/pi-tui only (host-provided; de

</details>

### miniLV/Jev-Auto-Router

<details><summary>README 발췌</summary>

一个 Codex 会话，每次模型调用重新选档。 TypeSafe 的 Jev 从当前可用的 GPT 模型与推理档位中做一次选择；任务结束后再独立验收。这是 Jev Auto Router（Jev Router）的验证原型。

</details>

### rawwerks/one-system

<details><summary>README 발췌</summary>

Use local and hosted decision models through one API. One System sits between your application and compatible TypeSafe System One servers. Send your data and questions once; choose a backend directly or let a model help decide where the request should run.

</details>

### valentynkit/jev-plays-pokemon-red

<details><summary>README 발췌</summary>

Pokemon Red played by a model that only outputs probabilities. Code reads the Game Boy's memory into a typed snapshot and hands the model a menu of the moves that are actually legal; it returns a probability for each one. The bars are those probabilities.

</details>

### zzhdbw/laya-Ascend

<details><summary>README 발췌</summary>

Multilingual, non-autoregressive System 1 decision engine. Typed decisions over 100+ languages in a single forward pass — 33 ms — trained with reinforcement learning against strictly proper scoring rules (RLCD), with a router that picks the right checkpoint per request.

</details>

### AIGNLAI/ReflexRoute

<details><summary>README 발췌</summary>

Route on priors. Adapt with examples.

</details>

### backant-io/jevelry

<details><summary>README 발췌</summary>

&gt; [!WARNING] &gt; Early development: jevelry is young and changes fast. Commands, the jevel format and the answer document may change between minor versions until 1.0, so pin the version you depend on.

</details>

### docxology/daf-jev

<details><summary>README 발췌</summary>

Modular, composable Python client and decision toolkit for the TypeSafe Jev (System One) API. One HTTP endpoint, three question primitives, and a set of pure-logic composition patterns built on top of the answers — plus a concurrent batch evaluation harness, an MCP server, a figure registry, and a r

</details>

### kyle-chalmers/typesafe-jev-incident-router

<details><summary>README 발췌</summary>

&gt; Start here: TypeSafe Jev use cases for data teams

</details>

### muratcakmak/jev-guard

<details><summary>README 발췌</summary>

A Claude Code plugin that scores what the model is about to do — and what it just claimed — with a probability model, and denies the call when the score is high enough.

</details>

### shimo4228/jev-skill-router

<details><summary>README 발췌</summary>

A Claude Code hook that asks Jev, TypeSafe's fast probability model, which of your installed skills fits each prompt, and logs the answer; it tells Claude only if you opt in. Published as an experiment: running it showed it is unlikely to help a strong model, and this README says why.

</details>

### Akramovic1/jev-pilot

<details><summary>README 발췌</summary>

jev-pilot is a Claude Code plugin. Before every turn, it asks Jev, TypeSafe's fast decision model, a few typed questions about your prompt and sets the turn up from the answers. You keep Opus for the conversation. Easy work runs at low effort and on cheaper subagents, and hard work gets the thinking

</details>

### ansidium/jev-codex-bridge

<details><summary>README 발췌</summary>

TypeSafe Jev selects a model and reasoning effort for each new message in Codex Desktop or CLI. Codex keeps its existing login. Windows setup includes a background service, daily updates and rollback.

</details>

### Charlyhno-eng/jev-document-classification

<details><summary>README 발췌</summary>

JEV Document Classification is a local-first application that files root-level documents into configured category folders. It extracts readable text locally, then uses typesafe-ai/jev through Vercel AI Gateway for typed category, confidentiality, prompt-injection-risk, and subject decisions.

</details>

### franckverrot/lev

<details><summary>README 발췌</summary>

lev's a clone of kev, Jared Palmer's Jev-style decision model, with the Qwen backbone replaced by LiquidAI's LFM2.5-350M. Mostly a prototype and a fun weekend experiment, though it was more bumpy than I planned...

</details>

### prasanthj/duckdb-jev

<details><summary>README 발췌</summary>

High-throughput, robust native C++ DuckDB extension for semantic predicates, classification and rubric scoring through TypeSafe/Jev. It batches and streams inference directly from SQL without Python UDF registration or a separate inference server.

</details>

### stas4000/jev-papers

<details><summary>README 발췌</summary>

Classifies 1,000 recent arXiv AI papers into 24 topics with one Jev decision per paper, then checks those labels against an LLM judge on the same papers.

</details>

### xingwudao/OpenJev

<details><summary>README 발췌</summary>

OpenJev is an independent project inspired by Jev, the System One model from TypeSafe.ai (TypeSafe AI). It implements a Jev-inspired decision API with choice, score, and noul primitives: state goes in, typed probabilistic decisions come out.

</details>

### zurk/hekajev

<details><summary>README 발췌</summary>

HekaJev answers questions about Git history. It filters and classifies commits, then saves the evidence, decisions, and cost behind the results.

</details>

### bcharleson/jev-gtm-cookbook

<details><summary>README 발췌</summary>

Open-source go-to-market recipes built on TypeSafe's Jev: code does the work, Jev makes the judgment calls, and each recipe runs locally on data you already own.

</details>

### Foadsf/jev-for-engineers

<details><summary>README 발췌</summary>

TypeSafe's Jev is a System One model. It does not write text. You give it a state — any text or JSON — and a map of named, typed questions, and it returns one typed answer per question with a calibrated probability distribution attached.

</details>

### glamboyosa/docket

<details><summary>README 발췌</summary>

Docket is a Go terminal document classifier built around TypeSafe's Jev. It copies a document into a local library, extracts its text, asks Jev for typed classification decisions, and files the copy without moving or editing the source.

</details>

### khmuhtadin/n8n-nodes-jev-classification

<details><summary>README 발췌</summary>

An n8n community node that classifies, scores and checks text with Jev, TypeSafe AI's "System One" model. Jev does not generate text: you send it a piece of state (a ticket, a review, a JSON record) plus typed questions, and it returns typed answers with calibrated probabilities. This node wraps tha

</details>

### Li-Evan/awesome-jev

<details><summary>README 발췌</summary>

&gt; Jev is TypeSafe's System One model. It answers typed questions about text with calibrated probabilities instead of generating prose, so code can branch, sort, and route on its judgments.

</details>

### reinhard-z/vision-jev

<details><summary>README 발췌</summary>

Listed in awesome-jev and awesome-typesafe-jev

</details>

### sumanmichael/jevlang

<details><summary>README 발췌</summary>

~ asks a question about a value and gets back a number or a label, never text. Here it is a probability, and the if fires at &gt;= 0.5. The model answering is TypeSafe's Jev, a hosted classifier that judges instead of writes.

</details>

### wiatrM/jevtpp

<details><summary>README 발췌</summary>

A C++20 library for typed model-backed routing, classification and scoring.

</details>

### vizuh/sabi

<details><summary>README 발췌</summary>

Adaptive routing for coding-agent trajectories.

</details>

### Adkid-Zephyr/work-with-jev

<details><summary>README 발췌</summary>

工作群消息太多？用 Jev 挑出需要你处理的事，整理成一份跨群待办。

</details>

### alexei-led/pi-model-router

<details><summary>README 발췌</summary>

Stop changing models by hand.

</details>

### BeLazy167/typesafe-mod

<details><summary>README 발췌</summary>

A Claude Code function hook that sends two kinds of decision to TypeSafe's Jev model.

</details>

### CoderInPajamas/JEV-MLX

<details><summary>README 발췌</summary>

Qwen3.5-9B · 20 model-selected placements · 4 cleared rows · 400 points. The recording retains the former MLXJ name. The GIF shows the entire second development run at 4× playback, including inference waits. The model chooses from every legal vertical-drop placement using structured board data and r

</details>

### DeepBlueDynamics/typesafe-arena

<details><summary>README 발췌</summary>

Local markdown mirror of docs.typesafe.ai, crawled with grub-crawler on 2026-09-17. Starting page: Intent routing.

</details>

### deyna256/langchain-skill-router

<details><summary>README 발췌</summary>

needed, and only those are loaded, so a catalog of hundreds stays out of the prompt. Bring any judge: a hosted model, a self-hosted one, or plain rules. An adapter for

</details>

### Embodied-AI-System/Qwen3.5-OneForward

<details><summary>README 발췌</summary>

Zero-training, zero-decoding typed decisions from Qwen3.5-2B logits.

</details>

### fajarhide/askgrep

<details><summary>README 발췌</summary>

grep for the questions you cannot write as a pattern.

</details>

### gitchw/LCT

<details><summary>README 발췌</summary>

&gt; "Decisions, Not Strings" meets "Free Calibrated Confidence" &gt; An open-source, ultra-low-latency System-One decision model family that extracts well-calibrated confidence directly from internal recurrent dynamics without reinforcement learning or token overhead.

</details>

### iamvatsalpatel/tiershift

<details><summary>README 발췌</summary>

tiershift reads each request, picks the cheapest model tier that can handle it, and escalates on evidence. The judgment comes from TypeSafe Jev , a calibrated decision model. About 180 ms. Four cents per thousand routes.

</details>

### ickma2311/jev-baselines-eval

<details><summary>README 발췌</summary>

Independent evaluation of TypeSafe's Jev (System One typed-decision model) on intent classification and confidence-gated cascades, run on 2026-09-18, two days after Jev's public launch.

</details>

### jon-devlapaz/tink-route

<details><summary>README 발췌</summary>

&gt; Dynamic, confidence-aware Agent Skill routing powered by TypeSafe Jev and Tink.

</details>

### jorgefspereira/opencode-auto-jev

<details><summary>README 발췌</summary>

An OpenCode plugin that adds an Auto (Jev) virtual model to the normal model picker. When you pick Auto, each of your turns is sent to TypeSafe AI (Jev), which picks one of your configured real models for that prompt. OpenCode then calls that real model as usual — native credentials, auth adapters, 

</details>

### lirantal/discoprint

<details><summary>README 발췌</summary>

Classify an artist's discography by theme, mood, and lyrical complexity with Jev (TypeSafe AI), and view it as a colorful terminal dashboard.

</details>

### maker-KK/todo-jev

<details><summary>README 발췌</summary>

Choose the next step before your AI agent takes it.

</details>

### MongLong0214/jev-gate

<details><summary>README 발췌</summary>

Jev-powered model routing for Claude Code. An experiment in using frontier intelligence for the hard parts—not every part.

</details>

### muhammedilyasy/jev-mail

<details><summary>README 발췌</summary>

A Chrome extension that scores every message in your Gmail with TypeSafe's Jev model — category, priority, spam % and reply % (how much the message needs an answer from you).

</details>

### newfull5/malkuth

<details><summary>README 발췌</summary>

Malkuth is a small multilingual decision model for classification, with a focus on Korean. It returns probabilities over a fixed set of choices rather than generating text. Two sizes: Malkuth-4B and Malkuth-2B.

</details>

### obetomuniz/auto-mode-for-paseo

<details><summary>README 발췌</summary>

&gt; [!NOTE] &gt; This project is an experiment. It explores what System 1 models can do as &gt; message routers. A System 1 model gives a fast, intuitive answer without &gt; step-by-step reasoning. TypeSafe Jev and Laya are System 1 models. &gt; Here, one of them only classifies each message and selects a preset.

</details>

### pCwOrM/werr

<details><summary>README 발췌</summary>

&gt; Motto: "When the Wave meets Error, we Recurse (werr)." &gt; "Werr is the reflex? Ver! (werr)." &gt; "Jev decisions come from 4B-parameter tensors; werr decisions come from infinite geometric waves, Euler thresholds, and recursive subdivision."

</details>

### Query-farm/vgi-typesafe

<details><summary>README 발췌</summary>

A VGI worker, built by 🚜 Query.Farm

</details>

### Ravinder82/jev-flash-router

<details><summary>README 발췌</summary>

Zero-token-output decision router MCP server powered by TypeSafe Jev.

</details>

### rmosleydb/jev-smart-router

<details><summary>README 발췌</summary>

A Databricks App that uses TypeSafe JEV (System One) to decide which model should answer each message, then runs the real inference on the chosen Databricks Foundation Model API (FMAPI) endpoint.

</details>

### satviksinha/jev-model-router

<details><summary>README 발췌</summary>

Picks the model for each turn with Jev, TypeSafe's decision model. Supports both TypeSafe's direct API and the Vercel AI Gateway.

</details>

### selcukusta/jev-mailroom

<details><summary>README 발췌</summary>

A mailbox triage proof-of-concept. A fake IMAP server feeds a listener, the listener asks Jev one batched call per email, and plain Python turns the answers into labels that a dashboard displays.

</details>

### SoundBlaster/Jev4Mellea

<details><summary>README 발췌</summary>

A small Python adapter that brings TypeSafe Jev's semantic checks into Mellea. Use Jev to verify generated text, classify it into your labels, or rate it on a scale. Mellea continues to manage generation and repair.

</details>

### steven-shoemaker/hunch

<details><summary>README 발췌</summary>

Judgment as a Python function. Ask a question about a string, a list, or a whole DataFrame column, and get an answer for every row that your code can branch on.

</details>

### trietphan/jev-claw

<details><summary>README 발췌</summary>

Typed model routing for OpenClaw agents, powered by TypeSafe Jev.

</details>

### vibe-with-me-tools/n8n-nodes-jev

<details><summary>README 발췌</summary>

An n8n community node for Jev, a decision model from TypeSafe.

</details>

### wayne930242/weihung-agent-root

<details><summary>README 발췌</summary>

Personal user-root setup for pi. This repository is the source of truth for pi's user instructions, model routing, packages, skills, rules, and local extensions on every machine. It supports only pi; the last version that also configured Claude Code, Codex, and Gemini is the legacy-claude-codex tag.

</details>

### xucian/talktojev

<details><summary>README 발췌</summary>

A chatbot with no language model in it.

</details>

### AboveColin/jevclient

<details><summary>README 발췌</summary>

Async Python client for TypeSafe Jev, the System One decision model. Jev answers typed questions about a state and returns values, so there is no text to parse.

</details>

### boldbug1/jev-triage

<details><summary>README 발췌</summary>

A small command-line tool, written in Go, that reads a list of messages and sorts them by urgency. It uses Jev, a decision model from TypeSafe AI, to answer three questions about each message:

</details>

### carlaiau/read-with-jev

<details><summary>README 발췌</summary>

A research prototype for reading whole novels alongside a model emotion layer and a character minimap. Built with Next.js and TypeScript.

</details>

### Chandler-Sun/chat2jev

<details><summary>README 발췌</summary>

Convert OpenAI-compatible Chat Completions requests into TypeSafe System One (Jev) State / Questions, compare generated text with structured judgments, and publish reusable question sets as proxy routes.

</details>

### Charlyhno-eng/jev-codex-pilot

<details><summary>README 발췌</summary>

JEV Codex Pilot turns software requests into focused, traceable Codex tickets. It recommends a model and reasoning effort, gives Codex the project instructions, and keeps implementation, checks, usage, and recovery visible in one local workspace.

</details>

### collapseindex/jev-builder

<details><summary>README 발췌</summary>

v1.19.0 · Open the tool · Apache-2.0

</details>

### FirasSX914/Janus

<details><summary>README 발췌</summary>

Janus sends each decision to a small model or to a larger one, according to how confident the small model is. It measures where that line sits on your data before it routes anything. Janus ships no default threshold: it measures one.

</details>

### flaviusapop/jev-router

<details><summary>README 발췌</summary>

Automatic model routing for Claude Code, OpenAI Codex, the Grok CLI and opencode. Each turn goes to the cheapest model and reasoning depth that can actually finish it — a typo to the fast tier, an unknown-cause bug to the strong one — with the decision made by Jev, TypeSafe's System One decision mod

</details>

### gholtzap/jev-codex-model-and-effort-router

<details><summary>README 발췌</summary>

- macos - Jev api key

</details>

### islee23520/omo-jevlike-router

<details><summary>README 발췌</summary>

A Jev-style one-pass skill router for OmO.

</details>

### jabr/classifier-benchmark

<details><summary>README 발췌</summary>

Head-to-head benchmark for "System One"-style classification models — lightweight decision models that answer structured questions (instructions + criteria) on a state:

</details>

### JoacoMarc/jev-harness-router

<details><summary>README 발췌</summary>

One fast call decides how an agent turn should run — then runs it.

</details>

### lexingtonhibiki/judgekit

<details><summary>README 발췌</summary>

&gt; Runtime judgment engine for System One (judge) models. &gt; Define a judgment task once in YAML, execute it natively on TypeSafe Jev's &gt; decisions API or translate it to any OpenAI-compatible LLM, get typed decisions &gt; with calibrated probabilities — and measure what every judgment costs.

</details>

### lomeshdutta/skill-router

<details><summary>README 발췌</summary>

A small command-line tool for Claude Code that picks the right skill for your session.

</details>

### luxus/ha-conversation-jev

<details><summary>README 발췌</summary>

Home Assistant custom conversation agent: Jev (TypeSafe System One, jev-latest) classifies an utterance, then either calls a light / climate / cover service (fast path) or hands off to the SpaceXAI Grok conversation agent.

</details>

### Manavarya09/verdict

<details><summary>README 발췌</summary>

Replace LLM calls for routing, guardrails, triage and policy checks with typed answers in milliseconds, on a CPU, with a probability you can trust.

</details>

### manjunathshiva/opendecider

<details><summary>README 발췌</summary>

Open, calibrated System 1 decision models. Ask typed questions (choice, score, noul) about any state (text, email, ticket or JSON) and get a calibrated probability for every option: 17 ms on an NVIDIA GPU, 18 ms on a Mac. Distilled from open teachers, and benchmarked head to head against TypeSafe Je

</details>

### marcreichel/laya-php

<details><summary>README 발췌</summary>

Classify text in PHP without paying for an LLM API. Route support tickets, spot churn risk and score urgency, in 100+ languages, on your own server, and get the answers back as typed enums, ints and bools.

</details>

### mcftira/jev-route

<details><summary>README 발췌</summary>

BADGE NOTE: the PyPI badge below is commented out until the first release is published. Uncomment it (and delete this comment) once jev-route is on PyPI. --&gt;

</details>

### nanami-0713/dsh-jev-decide

<details><summary>README 발췌</summary>

把 TypeSafe Jev（"System One" 决策模型）接入 DSH：注册一个 agent 工具 jevdecide，让 agent 在需要"快而准的判断"时调用 Jev，而不是让对话模型凭感觉猜。

</details>

### pewriebontal/typesafe-sdk-cpp

<details><summary>README 발췌</summary>

A C++20 SDK for TypeSafe AI.

</details>

### qddegtya/qualm

<details><summary>README 발췌</summary>

Typed decisions from a System One model (TypeSafe's Jev), where uncertainty is something you have to handle.

</details>

### steven-shoemaker/hunch-js

<details><summary>README 발췌</summary>

Judgment as a TypeScript function. Ask a question about a string or a whole array, and get an answer for every item that your code can branch on.

</details>

### symfony/ai-type-safe-platform

<details><summary>README 발췌</summary>

TypeSafe platform bridge for Symfony AI.

</details>

### TokenTrim/jev-routing-experiment

<details><summary>README 발췌</summary>

Can TypeSafe's Jev decision model route queries across a pool of LLMs cost-efficiently? This repo runs Jev as a router on RouterArena (ICLR 2026, arXiv:2510.00202) and scores it with RouterArena's own offline scorer, so the numbers are directly comparable to the public leaderboard.

</details>

### tylerjharden/ailerix

<details><summary>README 발췌</summary>

Type-safe model router. An OpenRouter competitor that uses TypeSafe Jev (System One) to classify every request, then walks an Artificial Analysis cost-per-task Pareto chain to bank a provider. You never name a model. The only public slug is ailerix/auto.

</details>

### walidboulanouar/jev-agent-kit

<details><summary>README 발췌</summary>

Small command line and MCP tools that give agents fast, typed decisions from TypeSafe's Jev model. One binary, no dependencies, Node 18 or newer.

</details>

### wangkuangkuang/jev-mcp-server

<details><summary>README 발췌</summary>

MCP server for Jev, TypeSafe's System One model. It exposes the three official question types (choice, score, noul) plus compare, verify, batch classify, and a one-command installer that writes your client config for you.

</details>

### xafold/jev-router

<details><summary>README 발췌</summary>

Automatic model and effort switching for Claude Code. TypeSafe Jev routes each message you send:

</details>

### ziyacivan/reflex-router

<details><summary>README 발췌</summary>

Model routers ask "which model?" reflex also asks what happened next — and writes it down so the routing can eventually be judged against something.

</details>

### FaqFirebase/Nexus-Orchestrator

<details><summary>README 발췌</summary>

A self-hosted orchestration layer that intelligently routes each request to the best local or cloud model.

</details>

### FrancoisChastel/jev-router

<details><summary>README 발췌</summary>

Route every turn of your coding agent to the cheapest model that can finish it.

</details>

### 455-dIAO/jev-codex-router-skill

<details><summary>README 발췌</summary>

按任务需求选择 模型 × 推理强度，把路由流程装进一个可分享的 Codex Skill。

</details>

### a-mad-av8r/demerzel

<details><summary>README 발췌</summary>

Demerzel runs on your own machine, between your AI harnesses and the model providers you pay for. Point OpenKai, OMP and the many other harnesses you use at one local endpoint. Keep every provider account in one encrypted place, give each harness its own access key, and let Demerzel route each reque

</details>

### AABBAASS1/jev-router

<details><summary>README 발췌</summary>

CLI that asks Jev which agent should handle a task, then opens that app (or the website) and dumps the prompt in.

</details>

### aitofy-dev/jev-awesome-skills

<details><summary>README 발췌</summary>

Open-source TypeSafe Jev skills. One client decides when to proceed, when to ask you, and when to stop — then uses that same judgment to route a skill, guard a command, verify a claim, triage a record, review a diff, or pick the next legal action.

</details>

### az9713/jev-model-router

<details><summary>README 발췌</summary>

A small web chat where Jev, TypeSafe's decision model, picks which LLM should answer each message. The chosen model then replies. Both calls go through the Vercel AI Gateway with one key.

</details>

### Bodila51/Jev-chooses-a-LLM

<details><summary>README 발췌</summary>

Jev Router for Cursor

</details>

### briwilcox/quiet-feed

<details><summary>README 발췌</summary>

Quiet Feed is a browser extension (Chrome Manifest V3, also tested in Brave) that hides rage bait, low-effort filler, and topics you choose from your social feed. It works on the X home timeline today. The classification side knows nothing about X, so other feeds such as Threads or LinkedIn need onl

</details>

### ddfeyes/jev-mode

<details><summary>README 발췌</summary>

Cut your coding agent's token use on bulk semantic judgments.

</details>

### DoGMaTiiC/hermes-jev

<details><summary>README 발췌</summary>

TypeSafe Jev (System One) decision layers for Hermes Agent: typed decisions (boolean / choice / score) with calibrated probabilities and confidence, served over TypeSafe Jev directly (jev-latest), via the Vercel AI Gateway (typesafe-ai/jev), or via OpenRouter (router). Stdlib only — no Node, no SDK.

</details>

### emreozyoruk/hush

<details><summary>README 발췌</summary>

Issue and pull request triage that stays quiet when it isn't sure.

</details>

### fatwang2/jev-review-action

<details><summary>README 발췌</summary>

Review submissions and classify pull requests with TypeSafe Jev. You define the criteria and categories; Jev returns typed judgments; code applies the policy and updates one PR comment. Jev can be reached through TypeSafe, Vercel AI Gateway or Cloudflare Workers AI, with an ordered fallback chain (s

</details>

### ferraroroberto/local-llm-hub

<details><summary>README 발췌</summary>

A tiny local HTTP hub that routes POST /v1/messages (Anthropic shape) and POST /v1/chat/completions (OpenAI shape) to several backends by model name, plus a local whisper.cpp ASR pair and a text-to-speech pair, both reachable through the hub's /v1/audio/ proxy (observable) or directly on their own p

</details>

### Flam1ngFir3ball/jev-claude-router

<details><summary>README 발췌</summary>

A Claude Code plugin that picks the model and effort for every turn with Jev, TypeSafe's decision model, and weighs each switch against what it costs.

</details>

### gazelle93/decision-models-under-pressure

<details><summary>README 발췌</summary>

Seven systems do the same job: take a piece of text, a question, and a list of candidate answers, and return a probability over those candidates. I measured them against each other as that job gets harder in the three ways it gets harder in production. The candidate list grows, the option order chan

</details>

### gualican/jev-model-router

<details><summary>README 발췌</summary>

Selects the right OpenAI model (Luna / Terra / Sol / Astra) using TypeSafe's Jev model to classify request difficulty and stakes. It returns a decision; your application makes the downstream model request.

</details>

### hamakyo/jev-starter

<details><summary>README 발췌</summary>

&gt; Status: jev-starter@0.1.1 is published on npm with provenance, and v0.1.1 is available as a GitHub Release. This repository is also enabled as a GitHub template. The main branch may contain unreleased changes intended for a later version.

</details>

### hemanth/hfjev

<details><summary>README 발췌</summary>

Classify Hugging Face datasets across typed semantic dimensions with TypeSafe Jev System One.

</details>

### hemanth/jev-chess

<details><summary>README 발췌</summary>

Chess moves, evaluations, persona opponents, and game classification using TypeSafe AI System One models.

</details>

### hugo-alves/jev-router-playground

<details><summary>README 발췌</summary>

&gt; Configure the candidates. Let Jev decide. Check whether it was right.

</details>

### ibrahemid/git-jev-stage

<details><summary>README 발췌</summary>

Describe the change to stage in one sentence. git-jev-stage classifies each block of changed lines (a Git hunk), shows the plan, and stages the selected blocks after confirmation in interactive mode. It only stages. Working files stay as they are, and the commit and its message are yours to write.

</details>

### ikashana/jev-dingtalk

<details><summary>README 발췌</summary>

用 Jev 分拣钉钉邮箱和聊天记录：通过 dws 取数，用 jev mail / jev triage 分类，交回一张「谁在等回复、谁需要人看一眼」的清单。

</details>

### INEEDBUG/hermes-adaptive-model-router

<details><summary>README 발췌</summary>

A privacy-preserving adaptive LLM routing layer for Hermes Agent, using a TypeSafe JEV routing service to choose between a fast/cost-efficient model and a high-capability model — while keeping fail-open behaviour, session safety, a runtime kill switch and production observability.

</details>

### ItBayMax/typesafe-ai-jev-example

<details><summary>README 발췌</summary>

一套能直接跑起来的 TypeSafe Jev 教学工程：六个可运行的例子 + 四篇笔记， 覆盖三个原语和六种组合模式，并且接真 key 实跑验证过。

</details>

### itscloud0/codex-jev-native-router

<details><summary>README 발췌</summary>

A small decision layer for Codex Desktop and CLI. Codex still does the coding.

</details>

### jangtrinh/design-os-generative-ui

<details><summary>README 발췌</summary>

&gt; Sub-50ms Real-Time Generative UI Engine &gt; Powered by Laya-MLX (Apple Silicon Local Edge) &amp; TypeSafe JEV (Cloud API) with the Catalog Pattern (Zod).

</details>

### JedimEmO/typesafe-client

<details><summary>README 발췌</summary>

A typed, async Rust client for the TypeSafe System One API.

</details>

### Jessie-QingYu/jev-in-the-wild

<details><summary>README 발췌</summary>

Real-world use cases, open-source projects, benchmarks and criticism of Jev, TypeSafe AI's System One model — what people actually build with it, and where it actually fails.

</details>

### jexp/watfile

<details><summary>README 발췌</summary>

Classify files with a decision-making AI model and sort them into category folders.

</details>

### juanlentino/jev-connector

<details><summary>README 발췌</summary>

A WordPress connector for the TypeSafe System One API. It gives your themes and plugins a typed way to ask questions about content and get back values you can branch on: a probability, a named choice, or a score, each with a confidence figure.

</details>

### lazniak/jevskill

<details><summary>README 발췌</summary>

Main language: Polish · English subtitles

</details>

### lucianfialho/jev-model-router

<details><summary>README 발췌</summary>

A cost-optimized model router for OpenRouter, using TypeSafe's Jev to classify each request and pick the cheapest model that can actually handle it.

</details>

### LXBWOW/dsh-completion-supervisor

<details><summary>README 발췌</summary>

Checks whether an agent's "done" is actually true, using Jev as a fast typed classifier rather than an LLM.

</details>

### m0rphtail/triagedy

<details><summary>README 발췌</summary>

&gt; Because alert triage shouldn't be a tragedy.

</details>

### mingleiw/jev-oncall

<details><summary>README 발췌</summary>

Open-source alert triage with Jev, TypeSafe's System One decision model. Each production alert gets one Jev call with four typed questions. Jev returns probabilities, and plain, auditable code turns them into routing decisions. Jev never pages anyone. It only judges.

</details>

### MrCipherSmith/keryx

<details><summary>README 발췌</summary>

Version-controlled repository context for Codex, Claude, Cursor, and any other AI coding agent.

</details>

### oleg-koval/veto

<details><summary>README 발췌</summary>

Cost-aware AI model routing with explicit model admission.

</details>

### oluies/jev-vs-spacy

<details><summary>README 발췌</summary>

A Braintrust eval that runs three kinds of classifier on the same two email tasks, the same test rows and the same deterministic scorers:

</details>

### onlyjq04/jev-agent-hooks

<details><summary>README 발췌</summary>

Hooks that put TypeSafe Jev in two places in a coding agent's loop: picking which skill to load for a turn, and picking which model a subagent gets. One shared implementation runs on Claude Code, Codex, pi, and Grok Build (subagent routing only; see below).

</details>

### Partysun/jigor

<details><summary>README 발췌</summary>

This is a zero-shot classifier models gateway or runner.

</details>

### pekth/draftpulse

<details><summary>README 발췌</summary>

DraftPulse provides real-time viral-dimension scoring and category classification for social drafts as you type, highlighting structural strengths and AI slop risks before you hit publish.

</details>

### PistachioAIHQ/jev-synergy-screening

<details><summary>README 발췌</summary>

Viral life-sciences demo: screen MEDLINE title + abstract as include vs exclude with TypeSafe Jev (System One), compared to Abstract Triage gold from Cohen et al. 2006.

</details>

### PraveenAShukla/polyjev

<details><summary>README 발췌</summary>

Ask yes/no, multiple-choice, rating and extraction questions; get back typed answers with honest probabilities, from Claude, GPT, Gemini, or open models on your own GPUs.

</details>

### psyb0t/decidealot

<details><summary>README 발췌</summary>

Your hardware. Local decision models. Run Laya and Von through TypeSafe-compatible HTTP or MCP.

</details>

### Quintui/jev-use-cases

<details><summary>README 발췌</summary>

Demo app for a video about Jev, TypeSafe's "System One" decision model. Each page is one segment of the script in idea.md: intent search, small typing interactions, a model picker, response depth, json-render, and Twitch chat moderation.

</details>

### siiick/pi-pignon

<details><summary>README 발췌</summary>

Pi agent extension that shifts to the right LLM for each prompt, the way a bike changes sprocket (pignon): a small decision model judges how hard the prompt is, and pignon looks the answer up in your routing table.

</details>

### silvariasereneblossom/jeverifier

<details><summary>README 발췌</summary>

Keeps a codebase maintainable and its docs consistent while Claude works on it. JeVerifier puts Jev (TypeSafe's fast classifier) beside a Claude coding session to run checks nobody would pay a frontier model to run on every change:

</details>

### suidouble/let-jev-speak

<details><summary>README 발췌</summary>

Coax free-text answers out of TypeSafe's classification API by decoding one word at a time.

</details>

### tomek7667/cbjev

<details><summary>README 발췌</summary>

Every question of a call shares one encoding of the state: 3 ms for one question, 11 ms for ten questions over a 500-token document. A self-hosted, Jev-compatible, faster and better-calibrated successor to Laya .

</details>

### tomerglick57/Jevstiller

<details><summary>README 발췌</summary>

Put Jevstiller in front of a repeated Jev classification call. At first every request still goes to Jev. From Jev's own answers — with their full probability distributions — it trains a small local model on your traffic, checks that the model agrees with Jev within a budget you set, and then answers

</details>

### ussyverse/hermes-jev-router

<details><summary>README 발췌</summary>

An opt-in Hermes plugin that uses TypeSafe Jev to assess task complexity and deterministic policy to select an allowed model within configured cost, token, context, latency-estimate and capability constraints.

</details>

### wellkilo/codex-jev-preflight

<details><summary>README 발췌</summary>

A fail-open preflight hook for every Codex task.

</details>

### yutkat/github-star-organizer-jev

<details><summary>README 발췌</summary>

Use TypeSafe Jev to classify GitHub stars against your existing GitHub Lists. Generate a JSON classification report and optionally apply its assignments to GitHub.

</details>

### Z761293629/pi-jev-helm

<details><summary>README 발췌</summary>

&gt; [!WARNING] &gt; Pi Jev Helm is a Public Preview: pre-stable software with best-effort &gt; support and no response-time commitment. When Automatic Routing is on, &gt; every new unit of work sends your current message — unmodified — to the &gt; selected Jev Client (OpenRouter by default, TypeSafe on explicit s

</details>

### ZHUBoer/ego-jev

<details><summary>README 발췌</summary>

Complete browser tasks with Ego Lite and actively call Jev (TypeSafe) for semantic target selection, filtering, ranking, classification and text evidence judgments.

</details>

### zkjoie/jevbus

<details><summary>README 발췌</summary>

A streaming event bus whose routing, subscription and consumption are decided by a probabilistic judge. The reference judge is TypeSafe AI's Jev (System One) model: send it a payload and a set of typed questions, get back calibrated probabilities instead of prose.

</details>

### Zuhair-01/laya-windows

<details><summary>README 발췌</summary>

&gt; TL;DR: laya-coreml only runs on Apple Silicon Macs. Laya Windows ports the same &gt; Laya typed-decision model (no text generation, just calibrated choice/score/noul &gt; probabilities) onto ONNX Runtime + DirectML, so it runs on any Windows PC with any DX12 &gt; GPU, with a dedicated Arabic evaluation sui

</details>

### 100yenadmin/agent-skill-debloater

<details><summary>README 발췌</summary>

Installing packs of skills bloats context and wastes tokens. AgentSkillDebloater turns large skill packs into hidden/read-on-demand libraries searched by tiny visible router skills.

</details>

### aj604/jev-chain

<details><summary>README 발췌</summary>

chains of thought, minus the thought.

</details>

### akanksha-rajhans-ai/diffguard

<details><summary>README 발췌</summary>

Probabilistic pull-request risk triage for the AI-generated-code era.

</details>

### allenporter/home-assistant-typesafe

<details><summary>README 발췌</summary>

A Home Assistant custom conversation integration powered by TypeSafe AI System One (Jev model family) for fast, structured intent routing, entity resolution, and device control.

</details>

### androiddrew/whatdo

<details><summary>README 발췌</summary>

A Typesafe-compatible API backed by the Laya non-autoregressive System 1 decision engine.

</details>

### andyrewlee/awesome-system-one

<details><summary>README 발췌</summary>

A curated list of System One models and tools.

</details>

### aniruddh-krovvidi/switchboard

<details><summary>README 발췌</summary>

A guardrail and model router for LLM gateways, built on Jev, TypeSafe AI's "System One" model (launched 2026-09-15), plus an independent evaluation of whether Jev's probabilities can be trusted.

</details>

### ARCJ137442/jev-switch

<details><summary>README 발췌</summary>

Jev Switch 是一个轻量的 Jev 协议模型网关：把对外服务入口连接到可复用的上游接入配置，由可编辑路由图决定实际调用路径。Rust/axum daemon 承担协议转换、路由和转发；模型推理由上游服务执行。交付形态包括 React 控制台、Tauri 桌面应用与 Docker 服务。

</details>

### arnab621/typesafe-jev-plugin

<details><summary>README 발췌</summary>

A Claude (Codex to follow soon) plugin that lets you build reusable schemas (solution signatures) for any classification or scoring problem, then run data from CSV, Excel, or text file datasets through the TypeSafe AI API and export structured results to Excel — all from within Claude Code or Cowork

</details>

### baize7815/jev-mcp-open-source

<details><summary>README 발췌</summary>

自部署的 MCP 网关，运行在 Cloudflare Workers 上，把 TypeSafe / Jev 的 System One 模型包装成九个工具，供 AI 助手在本地完成意图路由、检索结果重排、批量语义判断这类"判断但不生成长文"的工作。配套提供一个 Codex Skill，让助手在合适的决策点主动调用它。

</details>

### bvicsay/adaptmypage

<details><summary>README 발췌</summary>

Your site knows what visitors clicked. Now it can know what they’re trying to do.

</details>

### Cab14bacc/jev-sheets

<details><summary>README 발췌</summary>

Classify, tag and score text in Google Sheets by asking plain-language questions in a formula. Answers come from TypeSafe's Jev model in about a tenth of a second per row, as a real value your sheet can use: TRUE/FALSE, one of your categories, or a number. Every answer carries a confidence, so uncer

</details>

### cdubiel08/jev-ercot

<details><summary>README 발췌</summary>

Every English-language electricity offer on Power to Choose (the Public Utility Commission of Texas's comparison site), across all seven utility areas of the competitive ERCOT market, priced for any household from one bill and classified by Jev, TypeSafe's System One model.

</details>

### Chorylee7/JEV

<details><summary>README 발췌</summary>

JEV Research Report: TypeSafe's System One Decision Model and Its Open-Source Alternatives

</details>

### CMaintz/jev-triage

<details><summary>README 발췌</summary>

Fast, near-free GitHub issue triage — powered by TypeSafe AI's Jev.

</details>

### creativoma/here-we-go-jev

<details><summary>README 발췌</summary>

A one-page playground and test bench for Jev, TypeSafe's System One model. Jev evaluates a state against typed questions and returns structured answers with calibrated probabilities instead of text.

</details>

### d0nj/opencode-smart-reasoning

<details><summary>README 발췌</summary>

Per-request smart reasoning routing for OpenCode agents, decided by Jev (TypeSafe SystemOne via OpenCode Zen).

</details>

### dashbi1/jev-sim

<details><summary>README 발췌</summary>

A wire-compatible re-implementation of TypeSafe's Jev (POST /v1/systemone) that reads typed decisions straight out of an LLM's next-token logits — plus a reproducible benchmark of that approach against Jev itself, on the same public items, through the same scorer (JevBench).

</details>

### ddlaws0n/jevportfolio

<details><summary>README 발췌</summary>

A portfolio triage engine built on TypeSafe's Jev.

</details>

### de-niji/jev-hermes

<details><summary>README 발췌</summary>

TypeSafe Jev for Hermes Agent. A drop-in Hermes plugin (and skill) that hands cheap, typed decisions to Jev (System One) through OpenRouter’s Decisions API — so the expensive model only runs when it has to.

</details>

### dshakes/firstpass

<details><summary>README 발췌</summary>

On 974 real coding tasks it recovered +15.2 points of quality over the cheap model alone — and made zero of those 974 tasks worse. At 12–57% lower cost per success, depending on how expensive your top rung is.

</details>

### EnesDemir143/jev-laya-benchmark

<details><summary>README 발췌</summary>

A local benchmark comparing TypeSafe Jev and laya-mlx for structured issue classification.

</details>

### forestwas/gmail-jev

<details><summary>README 발췌</summary>

Gmail inbox helper built around TypeSafe Jev.

</details>

### G0-0000/pi-subagent-jev

<details><summary>README 발췌</summary>

A pi package that gates subagent dispatches through a JEV System One decision model, plus general-purpose tools to query that model.

</details>

### gentslava/pr-scout

<details><summary>README 발췌</summary>

Какие pull request стоит взять — за пару минут и 30 центов вместо дня ревью.

</details>

### GitHub30/OpenJev

<details><summary>README 발췌</summary>

オープンウェイト LLM で動く System One モデル の実装です。TypeSafe AI の Jev と同じ考え方 —「テキストを生成するのではなく、型付きの質問に対して確率分布を返す」— を、 Hugging Face 上の任意の instruct モデル (Qwen, Llama, Gemma, SmolLM など) で再現します。

</details>

### gmaxxxie/jev-router

<details><summary>README 발췌</summary>

Per-prompt model routing for Pi, driven by Jev (TypeSafe System One).

</details>

### goodruizhan/pi-jev-control

<details><summary>README 발췌</summary>

Jev-powered control layer for Pi Coding Agent. Uses TypeSafe System One (Jev) as a low-cost decision control plane — routing, tool gating, failure classification, retry judgment, context filtering, skill selection, memory management, context pruning, compaction epoch, review gate, and GUI action rou

</details>

### gopaljigaur/decide

<details><summary>README 발췌</summary>

decide is one Python client for typed decisions - Choice, Score and Noul - over any "System One" decision model: TypeSafe's hosted Jev, OpenRouter's Decisions endpoint, the open-weight laya family (PyTorch and MLX), any sentence-transformers CrossEncoder, and a JSON-prompted LLM fallback. The core o

</details>

### gregb100/gavel

<details><summary>README 발췌</summary>

Use this new OpenClaw plutin and Skill combo to stop burning LLM calls on classification. Route bugs, triage failures, and gate PRs in 200ms for $0.00002.

</details>

### GTC6244/Laya-Decision

<details><summary>README 발췌</summary>

A pure-Rust port of Laya — a multilingual, non-autoregressive System-1 decision engine. Given a state (text, JSON, or a conversation list) and a set of typed questions, it scores every question in a single forward pass — no text generation, so nothing to parse and nothing to hallucinate.

</details>

### guchengod/typesafe-sdk-go

<details><summary>README 발췌</summary>

Go SDK for TypeSafe AI — deterministic evaluation models that answer classification and rating questions about any text or JSON you already have.

</details>

### guchi-apps/ops-dashboard

<details><summary>README 발췌</summary>

VPS稼働状況・UptimeRobot・Uptime Kuma監視ダッシュボード。Next.js App Router + Supabase Auth（Google認証）で構成。 経緯は portfolio issue #65 を参照。

</details>

### hemanth/traffic-guard

<details><summary>README 발췌</summary>

High-throughput traffic and attack defense gate for incoming web traffic with zero required dependencies, wire-order sequence validation, and TypeSafe System One acceleration.

</details>

### hoangngochuong24947-gif/jev-figure-router

<details><summary>README 발췌</summary>

AI Agent 通用制图与多模态可视化总路由：毫秒级意图决策 + 六大多模态渲染分支 涵盖顶刊学术数据图、系统架构拓扑图、交互式矢量 SVG、演示汇报幻灯片、材料计算 3D 渲染与 AI 概念生成。

</details>

### hoshinodis/opencode-intent-gate

<details><summary>README 발췌</summary>

A TypeSafe Jev powered plugin for OpenCode that makes the agent confirm intent before diving into underspecified requests.

</details>

### huzeyfe07/jev-route

<details><summary>README 발췌</summary>

An AI agent intent &amp; tool router for Python. JevRoute sits in front of your agents, tools and model calls: it asks the Jev decision engine which capability should handle an input, applies a confidence gate, and only then invokes the matching handler.

</details>

### initrd/himalaya-jev-mail-classify

<details><summary>README 발췌</summary>

Label and prioritise Gmail with a language model, from the command line.

</details>

### jammaru/jev-affected

<details><summary>README 발췌</summary>

Run the reproducible offline demonstration with pnpm demo after building. MP4 version.

</details>

### jangtrinh/design-os-system-one

<details><summary>README 발췌</summary>

&gt; Sub-10ms Calibrated Judgments for Autonomous Agents with Zero Cloud Waste. &gt; Powered by on-device Laya-MLX (Apple Silicon) and TypeSafe JEV (Cloud Triage).

</details>

### Jason-Doyle/jev-parallel-dispatch

<details><summary>README 발췌</summary>

Watch the 33-second demo recording.

</details>

### joaoantoniocoelho/tech-digest

<details><summary>README 발췌</summary>

A daily technology digest powered by AI classification, deterministic ranking, and semantic deduplication.

</details>

### keithmackay/modelrouter

<details><summary>README 발췌</summary>

An OpenAI-compatible LLM proxy that routes requests across providers, enforces spend budgets at every scope — global, project, user, and group — and runs configurable hooks, all from a single self-hosted binary.

</details>

### khaledsAlshibani/jev-ci-classifier

<details><summary>README 발췌</summary>

This repo was created for an article Using Jev for Structured Decisions in Software Development , where I wanted to test Jev with a real technical example instead of only explaining how it works. The example uses Jev to classify failed PR checks and adds the result as extra diagnostic information wi

</details>

### lawrence3699/Jev-Style-0.8B-Decision-v3-GGUF

<details><summary>README 발췌</summary>

license: apache-2.0 basemodel: chaoliangUNSW/Jev-Style-0.8B-Decision-v3 basemodelrelation: quantized libraryname: gguf pipelinetag: text-classification language: - en - zh - ar - bg - de - el - es - fr - hi - ja - ko - pt - ru - sw - ta - th - tr - ur - vi tags: - decision-model - jev-style - system

</details>

### levi-qiao/SemaLoom

<details><summary>README 발췌</summary>

An ontology-driven business layer for serious AI questions over existing enterprise data.

</details>

### Madikhan33/jev_codex

<details><summary>README 발췌</summary>

Context-aware task routing and coordinated subagents for local Codex.

</details>

### marcus/frost

<details><summary>README 발췌</summary>

A model router built on TypeSafe. A Haplab project.

</details>

### mhoenes/sortroom

<details><summary>README 발췌</summary>

Sortroom sorts your IMAP inbox into folders. A classification model reads each new mail and picks one of your categories – it doesn't generate text, so it can never invent a folder. It runs as one Docker container with a web admin UI and works with any IMAP server (Gmail, Outlook/Microsoft 365, your

</details>

### misaalya/snbt-jev-bench

<details><summary>README 발췌</summary>

English · Bahasa Indonesia

</details>

### NAME0x0/Jevlet

<details><summary>README 발췌</summary>

Jevlet is a from-scratch research reconstruction of a Jev-like System-One decision model plus a laptop daily driver built on it. It is not TypeSafe's implementation and makes no claim about Jev's unpublished internals; research/decisions.md lists which public facts each design choice rests on.

</details>

### ndolinschi/pulselane

<details><summary>README 발췌</summary>

Clinic triage decisions powered by TypeSafe Jev (System One).

</details>

### ndolinschi/swarmrouter

<details><summary>README 발췌</summary>

Pick which agent/skill handles a task (research / code / browser / support / writer) + confidence — visual swarm map powered by TypeSafe Jev.

</details>

### nikkoxgonzales/jev-certify

<details><summary>README 발췌</summary>

Turning Jev's calibrated probabilities into claims that survive an audit.

</details>

### onlyoneaman/jev-eval

<details><summary>README 발췌</summary>

TypeSafe opened early access to Jev on 15 September. The headline numbers in the launch compare it with a frontier model writing text. Most teams do not run classification on a frontier model. The decisions a pipeline makes thousands of times a day (is this page worth reading, is this email a reques

</details>

### osrim/readwise-jev-classifier

<details><summary>README 발췌</summary>

Proof of concept. Reads the Readwise Reader inbox and asks Jev one question set per article. Two pages ask different questions about the same inbox. Tags scores an article against 23 tags. Triage picks one verdict for it. It never writes back to Readwise.

</details>

### osuki-dev/opencode-osuki-agent

<details><summary>README 발췌</summary>

An Effect-native coordinator with Jev routing, native subagents, project skills, and persistent goals.

</details>

### pareshbhangale/docweave

<details><summary>README 발췌</summary>

AI-Supervised PDF-to-Markdown with TypeSafe (Jev / Laya), Local Contrastive Language Models (CLM-8B), and OpenAI-compatible local models (Ollama, vLLM, LM Studio) for semantic layout routing and financial table QA auditing.

</details>

### Pasblinn/jev-lab

<details><summary>README 발췌</summary>

An open lab for using Jev correctly next to Claude Code.

</details>

### Patrick-SCH03/jev-issue-radar

<details><summary>README 발췌</summary>

Find likely duplicate GitHub issues, with the evidence side by side.

</details>

### pc418/jev-calculator

<details><summary>README 발췌</summary>

A calculator whose answer is produced by TypeSafe's Jev classifier one character at a time. Nothing in this repo evaluates arithmetic: every step Jev is offered the same 13 options (0–9, ., -, END) and the page appends whatever it picks, then shows the full probability distribution it assigned to ea

</details>

### pjmenon45/Jev-IOT

<details><summary>README 발췌</summary>

An end-to-end, carrier-grade edge AI telemetry classification and autonomic remediation dashboard designed for Tier-1 utility and telecom providers managing 10M+ smart utility meters (gas/water/electric).

</details>

### poponline63/north-star

<details><summary>README 발췌</summary>

A Hermes Agent skill that turns an intention into a finish line an agent can be held to, generates the prompt that starts the run, and then lets Jev decide whether the fuzzy requirements are really met.

</details>

### potto007/unridden

<details><summary>README 발췌</summary>

A local decision API that answers structured questions by reading logits, with zero generated tokens. You supply a state and a named map of questions; the service returns one typed answer per question: a Choice, a Score, or a Noul (true/false probability).

</details>

### PraveenKumarSridhar/jevgauge

<details><summary>README 발췌</summary>

One prompt. Two decisions. Your conversation stays yours.

</details>

### psyb0t/vibecheck

<details><summary>README 발췌</summary>

Most software has to make fuzzy calls from messy state. Vibecheck turns those calls into typed answers and deterministic policy outcomes.

</details>

### punkcanyang/hermes-jev-router

<details><summary>README 발췌</summary>

给 Hermes Agent 加两件事：

</details>

### q93304989-bit/jev-lab

<details><summary>README 발췌</summary>

&gt; 一个单页分类器，把 Jev 的调用方式摊开给你看。 &gt; 打开网页、贴上 API Key、点一下，就能看到完整的请求 JSON、每个类别的概率分布、confidence，以及这次调用的耗时和 token 用量。

</details>

### RavenValentin/TypeSafe.Jev

<details><summary>README 발췌</summary>

Ask an AI a typed question. Get an answer your switch statement can use.

</details>

### reoring/fern

<details><summary>README 발췌</summary>

A 4B decision model with a Jev-compatible API. Send a state and up to 50 questions (choice / score / noul); get back probability distributions in one forward pass — no text generation, ~30 ms per request on one GPU.

</details>

### richardskypixel-max/jevrail

<details><summary>README 발췌</summary>

Jev is TypeSafe AI's System One decision model, designed for frequent, low-latency structured judgments: yes/no, classification and scoring, with probability or confidence information. Applications include content triage, text classification, label quality checks and scoring existing textual observa

</details>

### robertn702/opencode-jev-router

<details><summary>README 발췌</summary>

Keep the quality. Spend less reasoning. An OpenCode plugin that asks Jev how much reasoning each step needs, so one model handles quick edits and hard debugging without you switching effort levels by hand.

</details>

### ruslanlap/jev-gate

<details><summary>README 발췌</summary>

Triage any GitHub PR in under a second for ~$0.0001 — a typed decision model judge for PRs, not a chatbot reviewer.

</details>

### rustfuture/reflex-control

<details><summary>README 발췌</summary>

Reflex Control decides whether an AI task can finish on its own, retry, or escalate to an expensive reasoning model.

</details>

### sanity-labs/vellum

<details><summary>README 발췌</summary>

Paste this into vellum.sanity.dev:

</details>

### sypherin/jev-trace-classifier

<details><summary>README 발췌</summary>

An application of TypeSafe Jev (a "System-One" judgment primitive) on the public collusion.wiki corpus: can a small probabilistic judgment primitive tell whether a wiki page was authored by an autonomous AI agent or by a human — and how does it stack up against a local LLM on the same task?

</details>

### taigrr/gojev

<details><summary>README 발췌</summary>

Go harness for System One decision models: TypeSafe's hosted Jev and the open-weight, self-hostable Kev.

</details>

### Teagar/jev-project-fit-review

<details><summary>README 발췌</summary>

&gt; Review independente sobre onde um modelo System One como o Jev agrega valor, onde ele deve permanecer consultivo e onde regras determinísticas continuam sendo a escolha correta.

</details>

### TheEleventhAvatar/triage-bot

<details><summary>README 발췌</summary>

Jev routes the ticket to a specialist agent (general / account / billing / technical) and decides whether a human should take it instead — all as typed data, no text to parse. Cerebras then drafts the reply using whichever agent Jev picked. The script times both calls separately so you can see the s

</details>

### thiago-ss/jev-review

<details><summary>README 발췌</summary>

A small autonomous PR review bot built around TypeSafe's Jev. It consumes structured PR metadata and patches, asks finite typed questions, then applies deterministic approval gates. Uncertain or risky reviews route to trusted owners with a structured explanation. Suggestions are advisory; the bot ne

</details>

### TimMikeladze/JevLang

<details><summary>README 발췌</summary>

Decide once, trust everywhere. JevLang is a policy engine for decisions that used to live inside a prompt: routing, triage, approvals, escalation, guarding an agent's tools. You write the policy once in plain TypeScript (or Python); JevLang asks the model only the questions the policy needs, checks 

</details>

### TOSUKUi/jev-bridge

<details><summary>README 발췌</summary>

A Jev-style /v1/systemone API in front of any OpenAI-compatible LLM server.

</details>

### vagmi/jevlite

<details><summary>README 발췌</summary>

Build a System One decision model: something that reads a state, reads a typed question about it, and returns a calibrated probability distribution over the allowed answers.

</details>

### viniciusfinger/jev-intent-classification

<details><summary>README 발췌</summary>

AI-powered intent classification for customer support conversations. It identifies the customer's primary intent from a free-text message, returning a structured result with confidence scores and probability distributions so downstream systems can route the conversation appropriately.

</details>

### Wizhill05/typesafe-image-diffusion

<details><summary>README 발췌</summary>

A diffusion style image model built out of a general classifier that was never meant to draw.

</details>

### xergioalex/jev-lab

<details><summary>README 발췌</summary>

A hands-on laboratory for Jev, TypeSafe's first "System One" model — the model that doesn't generate text. It answers typed questions against a state and returns typed answers with probability distributions. This lab teaches it the way I learn: by building.

</details>

### Xvectorio/jevit

<details><summary>README 발췌</summary>

A Thunderbird add-on that sorts your mail with recipes: plain-language yes/no questions ("Is this an invoice or receipt?") that TypeSafe's Jev model answers for each email. When a recipe's answer passes its threshold, JevIt tags the mail and can also star it, mark it read, mark it as junk, or move i

</details>

### crazyooo/jev-router-desktop-adapter

<details><summary>README 발췌</summary>

An unofficial, local adapter that brings per-turn Jev Router model selection to the Codex desktop app on macOS.

</details>

### dimitrisdais/language-aware-decisions-for-banking

<details><summary>README 발췌</summary>

Jev made a simple idea interesting again: many software systems do not need an AI model to write a paragraph. They need it to return a constrained decision that another system can use.

</details>

### flower-of-the-bridges/opencode-jev-router-plugin

<details><summary>README 발췌</summary>

Model routing for OpenCode powered by the JEV classifier. Before each prompt is admitted, the plugin asks JEV a handful of small classification questions about it, then switches the session to the cheapest model that is likely to complete the work — and tells you (and the model) exactly why.

</details>

### HuXioAn/jev-telegram-channel-router

<details><summary>README 발췌</summary>

Subscribe to any public Telegram channel, filter every new post with Jev (TypeSafe) judgments, and route the matches to your private chat or channels you manage.

</details>

### SciScend/system-one-categorizer-demo

<details><summary>README 발췌</summary>

&gt; In English. A small demo app and a side-by-side test of two System One &gt; models on Bulgarian text: the closed Jev (TypeSafe API) and the open &gt; Laya multilingual (runs locally on the CPU). The task: suggest a category &gt; for a blog post, either an existing one or "new topic". On 50 labeled Bulgaria

</details>

### togishima/subagent-dispatcher

<details><summary>README 발췌</summary>

A Claude Code plugin that keeps your main session on one frontier model and routes only the delegated subtasks to cheap, normal or frontier workers — then measures whether that actually saved anything.

</details>

### vitas/dsh-jev-subagent-dispatch

<details><summary>README 발췌</summary>

Cut LLM costs: routine tasks go to cheap subagent models; the main model keeps the hard parts.

</details>

### WesleySmits/spark-jev-email-triage

<details><summary>README 발췌</summary>

TanStack Start app with React, Vite, and strict TypeScript.

</details>

### suenot/codex-jev-router

<details><summary>README 발췌</summary>

Русский · 简体中文 · 繁體中文

</details>

### david-cermak/jevlike-esp32

<details><summary>README 발췌</summary>

Jevlike edge router on ESP32

</details>

### 190ibrahim/jev-graphify

<details><summary>README 발췌</summary>

Name, classify and search graphify communities with TypeSafe Jev, without a generative LLM.

</details>

### 4nt0ineB/jev-from-java

<details><summary>README 발췌</summary>

A small web app that calls Jev (TypeSafe's typed decision model) from Java. There is no Java SDK, so the API contract is typed by hand with records and sealed types. Small wrappers such as ApiKey, ModelId and Probability are the kind of type that becomes a Valhalla value class once JEP 401 ships.

</details>

### 4piu/liametahi

<details><summary>README 발췌</summary>

An AI-powered mailbox cleanup tool for IMAP. Point it at an inbox and it can:

</details>

### aaronsoongwork-dev/shipcheck-email-spam-classifier

<details><summary>README 발췌</summary>

AI-powered shipping document verification platform — built for the Averis x Monash Datathon 2025.

</details>

### abdullahaamuda-code/jev-decide

<details><summary>README 발췌</summary>

A "System One" decision layer for browser and desktop automation: offload quick, structured judgments about page state to the TypeSafe Jev API instead of reasoning over long accessibility snapshots in your agent's context.

</details>

### adelvillar1/dev-decisions

<details><summary>README 발췌</summary>

Decision-model gates for git + ZCode workflows. Scans secrets/PII from commits, classifies diffs using multiple providers, and logs every decision to JSONL for calibration.

</details>

### adelvillar1/zcode-router

<details><summary>README 발췌</summary>

Installable, config-controlled model routing and workflow delegation for ZCode.

</details>

### adimyth/compass

<details><summary>README 발췌</summary>

Compass is an open decision model. Give it a document and a typed question with a fixed answer set; it returns a probability for every permitted answer. It does not generate an answer for you to parse.

</details>

### AHTOOOXA/jev-cyrillic-audit

<details><summary>README 발췌</summary>

&gt; Verdict (jev-1.13.0, n=600 paired items per dataset, pre-registered): on XNLI, Jev is measurably worse and less calibrated in Russian — accuracy 88.3% → 77.3% (paired Δ = -11.0 pp, 95% CI [-14.2, -7.8]) and ECE 0.032 → 0.096 (Δ = +0.063 [+0.033, +0.088]); on MASSIVE intent classification there is 

</details>

### ajstrick81/fast-jev-compaction

<details><summary>README 발췌</summary>

&gt; Fork notice. This is a fork of &gt; tamaratran/fast-jev-compaction (MIT). &gt; It routes Jev through the Vercel AI Gateway &gt; (https://ai-gateway.vercel.sh/typesafe/v1/systemone, model typesafe-ai/jev) &gt; instead of native TypeSafe, so TYPESAFEAPIKEY must hold a Vercel AI Gateway &gt; key — a native TypeSafe

</details>

### aleksvega/jev-stack

<details><summary>README 발췌</summary>

One command to install (or hand-pick) the whole Jev-powered agent toolset.

</details>

### alevtelles/triagem-inteligente-com-jev

<details><summary>README 발췌</summary>

&gt; Como o Jev julga, com segurança, o que fazer com um chamado de suporte bancário — e por que a decisão final continua sendo do seu código.

</details>

### alex-boop-chasey/auto-router

<details><summary>README 발췌</summary>

Self-hosted OpenAI-compatible proxy that sits between Hermes and OpenRouter. It classifies each prompt by complexity (simple / medium / complex) via Jev and routes it to the cheapest suitable model, logs every request, and exposes a browser admin UI.

</details>

### alexei-led/claude-router

<details><summary>README 발췌</summary>

jev-router for Claude Code: the right model and effort for each turn.

</details>

### alexrudloff/wopr

<details><summary>README 발췌</summary>

SHALL WE PLAY A GAME?

</details>

### andyholst/hermes-typesafe-jev

<details><summary>README 발췌</summary>

&gt; Typed, probabilistic decisions at 100ms latency — 40-400x cheaper than frontier LLMs for classification, routing, and scoring.

</details>

### aniruddha2004/flowrace

<details><summary>README 발췌</summary>

Race two support-ticket triage pipelines side by side on one pasted input. Paste raw ticket text (an email, chat transcript, complaint…), press Run Race, and watch both columns fill in live over a single NDJSON stream. Every number on screen is real: API-reported token usage, measured milliseconds, 

</details>

### ankitjawla/regpilot

<details><summary>README 발췌</summary>

A working demo of the System One + LLM pattern: TypeSafe's Jev (System One) handles triage, guardrails and confidence scoring with typed judgments, while Azure OpenAI (gpt-5.4) is reserved for heavy drafting. A router picks the path per item, and a confidence gate decides what a human must review. E

</details>

### Autom8ly/gutcheck-bench

<details><summary>README 발췌</summary>

Run open System 1 decision models on your own 8 GB GPU. A tool-neutral scorer, benchmarks, quantization patches and adapters for teams that need Jev-style typed decisions but can't send data to an external API.

</details>

### b0bleet/syn

<details><summary>README 발췌</summary>

Zero-shot option scoring on pretrained Qwen3. No answer generation, no training required. Send a context, a question, and 2-26 options; get back a probability per option, the selected id, and abstention signals.

</details>

### badpx/Laya-Vision

<details><summary>README 발췌</summary>

Multilingual, non-autoregressive System 1 decision engine. Typed decisions over 100+ languages in a single forward pass — 33 ms — trained with reinforcement learning against strictly proper scoring rules (RLCD), with a router that picks the right checkpoint per request.

</details>

### bensheridan/tdd-gate

<details><summary>README 발췌</summary>

Keeps two coding agents on the same plan: one writes the tests (TDD), one writes the code, and neither sees the other's work. tdd-gate sits between them. It does not run tests or judge whether code is correct; the test runner does that. It answers the questions the runner cannot:

</details>

### bharath-ui1027/laya-ui

<details><summary>README 발췌</summary>

Multilingual, non-autoregressive System 1 decision engine. Typed decisions over 100+ languages in a single forward pass — 33 ms — trained with reinforcement learning against strictly proper scoring rules (RLCD), with a router that picks the right checkpoint per request.

</details>

### Biztactix/n8n-nodes-typesafe

<details><summary>README 발췌</summary>

An n8n community node for TypeSafe AI. Ask yes/no (noul), choice and score questions about any text or JSON from a workflow and route on the typed answers.

</details>

### boriscardano/herdr-jev-router

<details><summary>README 발췌</summary>

Herdr Jev Router lets a parent agent describe a task and have Jev choose the harness, model, and effort for the child agent, using the task text and the remaining subscription capacity. It runs on stock Herdr through the stock herdr agent start and herdr agent prompt commands and needs no fork or pa

</details>

### BP602/ntfy-hermes-jev-bridge

<details><summary>README 발췌</summary>

A local-first notification gate. It reads your self-hosted ntfy topics, persists every message in SQLite, applies deterministic safety rules, asks TypeSafe Jev several atomic typed questions, and computes the route (NOTIFYNOW, REVIEW, DIGEST, DROP) in ordinary code. Only relevant work reaches signed

</details>

### brandonrc/jev-bench

<details><summary>README 발췌</summary>

Head-to-head benchmark of "System One" decision engines on package-registry triage tasks: the kind of bounded, typed questions a curation pipeline asks thousands of times a day where a wrong answer costs a queue reorder, not a breach.

</details>

### bskkimm/JevSceneMiner

<details><summary>README 발췌</summary>

Find interesting scenes in driving logs with Jev, a fast general-purpose classifier from TypeSafe AI.

</details>

### budityw23/fhir_jev

<details><summary>README 발췌</summary>

A proof-of-concept decision layer that puts TypeSafe AI's Jev — a non-generative "System 1" decision model — in front of FHIR R4 clinical workflows. It scores resource quality, routes FHIR Bundles, and detects Indonesian notifiable diseases, returning typed decisions with probabilities instead of ge

</details>

### bunkerlab-net/laya-shim

<details><summary>README 발췌</summary>

laya-shim runs a Laya checkpoint behind TypeSafe's System One route, POST /v1/systemone. That route is the one omp calls for its judge model role. Point the role at this server and omp's typed yes/no, choice, and score decisions run on your machine instead of on TypeSafe's Jev.

</details>

### carllippert/jev-router

<details><summary>README 발췌</summary>

Express with no routes. Jev picks which handler runs.

</details>

### carlosbasto/joule-studio-jev-invoice-triage

<details><summary>README 발췌</summary>

Public companion sample for the blocked supplier-invoice scenario described in the SAP Community article “Joule Studio with JEV at the Decision Boundary of the Autonomous Enterprise.”

</details>

### charlie128233/claude-context-injection

<details><summary>README 발췌</summary>

Reversible, per-request context injection for Claude Code.

</details>

### chinmay29/evidence-scope

<details><summary>README 발췌</summary>

An evidence gate for RAG assistants answering questions about versioned software.

</details>

### cipherTing/sael

<details><summary>README 발췌</summary>

按端点和模型配置文本审查，支持前置拦截与非阻塞记录。

</details>

### Clawbuilders/web-qa-jev-agent

<details><summary>README 발췌</summary>

A Cloudflare Worker that crawls a web app like a QA tester, triages what it finds with typesafe/jev (Cloudflare's decision model — fast, cheap, calibrated yes/no, multiple-choice, and score judgments), confirms the real ones with a vision model, and files deduped GitHub Issues. Built as a third bonu

</details>

### Cloud-Computing-Oy/cco-llm-router

<details><summary>README 발췌</summary>

Open-source, provider-neutral LLM router maintained by Cloud-Computing-Oy. Provider-fallback chains over Anthropic / Google / DeepSeek / Moonshot / OpenAI / Groq / OpenRouter / Ollama / DeepInfra / Together, plus a Cohere rerank helper and local monthly budget estimates.

</details>

### ColinClark/claude-code-jev-router

<details><summary>README 발췌</summary>

A global smart router for Claude Code. It sends each bounded engineering task to the cheapest model and effort level that can do it reliably. It escalates to stronger models only on evidence, and it never reports a task complete while a check is failing.

</details>

### coltonspears/JevClassifier

<details><summary>README 발췌</summary>

A visual, interactive demo of using Jev to assess task complexity, then applying a routing policy to recommend GPT-6 Luna, Sol, or Astra and a reasoning effort from low through max.

</details>

### criguex/jev-ci-triage

<details><summary>README 발췌</summary>

CI failure triage for Playwright and JUnit suites. Every failing test is sorted into one of five classes before anyone opens a stack trace:

</details>

### CSlawyer1985/dsh-jev-router

<details><summary>README 발췌</summary>

语义判定 · 缓存安全 · 迟滞防抖 · 成本闸门 · 全链路可回滚

</details>

### cwhy/decision-injection-bench

<details><summary>README 발췌</summary>

Can the text you're classifying tell the classifier what to say?

</details>

### damian87x/jev-claude-orchestrator

<details><summary>README 발췌</summary>

A Claude Code plugin for madmax orchestration: a frontier model splits a goal into many tiny slices, subagents write the code in parallel, and TypeSafe Jev makes every small decision: which model takes a slice, whether a worker is stuck, whether it's really done, and whether the diff should ship.

</details>

### damian87x/jev-pi-model-router

<details><summary>README 발췌</summary>

A pi extension. On every fresh user turn, TypeSafe Jev judges how hard the turn is, what kind of work it is and whether a mistake would be costly. The router then switches pi to the first model in that tier's pool that pi can actually use and that fits the turn (images, context size).

</details>

### damian87x/pi-autonoxis-model

<details><summary>README 발췌</summary>

A Pi extension that gets conductor decisions for autonomous coding lanes from a local model. The recommended model is Polaris 3 (polaris-3, HF damianborek/polaris-3), the autonoxis decision model (a LoRA adapter on Bespoke-Nimble-9B, itself built on Qwen3.5-9B). It runs on your own GPU and costs not

</details>

### damiensmith1/semantic-pubsub-jev

<details><summary>README 발췌</summary>

Pub/sub that routes messages by what they mean, not just which topic they were published to.

</details>

### dandacompany/jev-gatekeeper

<details><summary>README 발췌</summary>

&gt; A local judge looks first; only what passes goes to cloud Jev. Sensitive requests never leave the machine.

</details>

### daniel-dia/jev-estados-brasileiros

<details><summary>README 발췌</summary>

Live: jev-estados-brasileiros.vercel.app

</details>

### davesheffer/coding-orchestrator

<details><summary>README 발췌</summary>

An orchestrator and four reusable subagent roles for Claude Code and Codex. The principle is cheap hands, expensive eyes: delegate bounded reading, command execution, and implementation; keep design, judgment, and verification with the orchestrator.

</details>

### deepdave98/jev-playground

<details><summary>README 발췌</summary>

Every week I build something real with Jev and put the numbers here.

</details>

### dgr8akki/intent-guard

<details><summary>README 발췌</summary>

Say what you're working on. Get a gentle nudge when you drift. Every page you open is judged against your task, not a blocklist, so the tutorial you need stays open and the rabbit hole gets a tap on the shoulder.

</details>

### diego-ruas/omp-jev-router

<details><summary>README 발췌</summary>

Jev for Oh My Pi (omp), in two halves:

</details>

### dirnbauer/typo3-webcon-jev

<details><summary>README 발췌</summary>

Jev is TypeSafe AI's System One model. It does not generate text. It evaluates typed questions against a state and returns a choice, a score or a probability — each with a calibrated confidence — in a single parallel pass, at a latency and a price a chat model cannot reach. That makes it usable some

</details>

### dmakam/jev-search-intent-classifier

<details><summary>README 발췌</summary>

Sort thousands of search queries by intent and product with Jev, TypeSafe AI's "System One" model. Jev doesn't write text. It returns a label, a probability for every option, and a confidence score. Trust the confidence, not the label: anything below your threshold goes to a person, sorted by clicks

</details>

### dxcently/Canti

<details><summary>README 발췌</summary>

A hands-free phone controller driven by non-speech vocal sounds: hums that rise, fall, arch or dip, lip pops, tongue clicks, hisses and whistles, plus your own custom sounds.

</details>

### eSaadster/jev-effort-router

<details><summary>README 발췌</summary>

A Claude Code plugin that picks the reasoning effort for each prompt. It sends the prompt to TypeSafe's Jev decision model, which answers low, medium, high or xhigh, and runs that turn at that effort. The model is never changed.

</details>

### EtienneLescot/jev-router

<details><summary>README 발췌</summary>

Typed judgments in, control flow out. A support ticket goes through two Jev calls, and plain code routes it to an agent, then picks that agent's model tier and reasoning depth. A console next to the pipeline shows the raw requests and responses.

</details>

### f-lombardo/jev-php

<details><summary>README 발췌</summary>

jev-php is a small PHP library extracted from the larger PHP project LLPhant to provide typed access to Jev classification APIs.

</details>

### FirasB9/jev-community-ops

<details><summary>README 발췌</summary>

Community triage for a developer community, built on TypeSafe's Jev.

</details>

### Foshowithit/jev-rcos-study

<details><summary>README 발췌</summary>

Question: Can TypeSafe Jev solve the RCOS capability-routing bottleneck at scale?

</details>

### foxl-ai/bobcat

<details><summary>README 발췌</summary>

State in, typed decisions out: Choice, Noul and Score, with a probability for every answer you name. No generated text, no per-task fine-tuning.

</details>

### gbesse/airbyte-jev

<details><summary>README 발췌</summary>

Transformateur de flux Airbyte Protocol JSONL avec conservation des messages STATE.

</details>

### gbesse/argo-jev

<details><summary>README 발췌</summary>

WorkflowTemplate Kubernetes avec sorties typées pour les branches Argo.

</details>

### gbesse/dagster-jev

<details><summary>README 발췌</summary>

Contrôle bloquant d’asset basé sur une question Jev.

</details>

### gbesse/flink-jev

<details><summary>README 발췌</summary>

Connecteur communautaire pour MLPREDICT d'Apache Flink 2.3. Il pose une question oui/non à TypeSafe Jev pour chaque ligne et renvoie une probabilité, une route (yes, no, review, failure) et l'empreinte SHA-256 du texte. Les réponses incertaines vont vers review ; les erreurs réseau et les réponses i

</details>

### gbesse/formbricks-jev

<details><summary>README 발췌</summary>

Récepteur de webhooks signés avec décisions idempotentes dans SQLite.

</details>

### gbesse/jev-cada-desk

<details><summary>README 발췌</summary>

Triage French public-document requests against sourced CADA precedents with mandatory human review.

</details>

### gbesse/kestra-jev

<details><summary>README 발췌</summary>

Flow importable qui produit route et probability via une tâche Python.

</details>

### gbesse/meilisearch-jev

<details><summary>README 발췌</summary>

Filtre sémantique de recherche sur les meilleurs résultats avec file de révision.

</details>

### gbesse/nifi-jev

<details><summary>README 발췌</summary>

Processeur NiFi 2.12 qui achemine un FlowFile texte selon une question sémantique oui/non posée à TypeSafe Jev. Quatre relations : yes, no, review, failure. Les résultats proches de 0,5 vont vers review, tout comme les entrées vides, trop grandes ou dépassant le budget. Les erreurs API vont vers fai

</details>

### gbesse/pulsar-jev

<details><summary>README 발췌</summary>

Function Python qui enrichit chaque événement JSON avec un verdict Jev.

</details>

### gbesse/seatunnel-jev

<details><summary>README 발췌</summary>

Transform Python par ligne pour ajouter route, probabilité et empreinte SHA-256.

</details>

### gbesse/spark-jev

<details><summary>README 발췌</summary>

UDF SQL PySpark pour décision sémantique structurée.

</details>

### goldytech/jev-model-routing

<details><summary>README 발췌</summary>

A TypeScript demonstration of typed, confidence-aware model routing with Jev.

</details>

### gordan-code/jev-entropy-gate

<details><summary>README 발췌</summary>

Uses Jev's probability entropy to decide which code-migration/refactor sites can be safely auto-rewritten, and which need a human.

</details>

### gshost1/nodfirst

<details><summary>README 발췌</summary>

An HR onboarding agent that sorts new-hire requests and asks a person before it acts.

</details>

### hamzaahmadaslam/action-scheduler-triage

<details><summary>README 발췌</summary>

A command-line tool for WooCommerce and WordPress sites that use Action Scheduler: it reads the failed actions you export with WP-CLI, groups them by hook and error, and sorts the groups into those that are safe to run again unchanged, those that need a fix first, and those a person should look at.

</details>

### hamzaahmadaslam/cache-boundary

<details><summary>README 발췌</summary>

Decides, route by route, whether a full-page cache may serve one anonymous visitor's copy of a page to everyone else; for anyone who runs WordPress, WooCommerce or another site behind a page cache.

</details>

### hamzaahmadaslam/woo-note-triage

<details><summary>README 발췌</summary>

A WooCommerce plugin that sorts the notes customers write at checkout into gift messages, delivery instructions, questions, complaints, fraud signals and everything else, scores how soon each one needs a person, and puts the orders that need attention in front of shop staff.

</details>

### hamzaahmadaslam/wp-debuglog-triage

<details><summary>README 발췌</summary>

A command-line tool for WordPress developers and maintainers that turns a debug.log into a short list of problems, each tied to the plugin, theme or core file behind it and ranked by how soon it needs attention.

</details>

### hamzaahmadaslam/wporg-forum-triage

<details><summary>README 발췌</summary>

Reads a plugin's public support forum on WordPress.org, sorts each thread into bug, how-to, feature request, conflict with another plugin, praise or spam, and lists the threads that are waiting for a reply; for plugin authors who answer their own forum.

</details>

### Haresh33/Jev-Triage

<details><summary>README 발췌</summary>

An adaptive investigation agent for security alerts. Paste or upload an alert and Jev Triage works the case the way an analyst would. It pulls out the indicators, enriches them, weighs competing explanations and keeps asking targeted questions. It stops when it can give a verdict, a confidence level

</details>

### HENILCHOPRA/laya

<details><summary>README 발췌</summary>

Multilingual, non-autoregressive System 1 decision engine. Typed decisions over 100+ languages in a single forward pass — 33 ms — trained with reinforcement learning against strictly proper scoring rules (RLCD), with a router that picks the right checkpoint per request.

</details>

### hongdroid94/fab-evidence-gate

<details><summary>README 발췌</summary>

공정 경보를 보고 엔지니어가 먼저 볼 건과 필요한 증거를 정리하는 데모입니다.

</details>

### hraness/sys1

<details><summary>README 발췌</summary>

Sys1 lets agents ask yes/no, choice, and score questions and get validated answers with probabilities. You choose who answers: TypeSafe's hosted Jev, a local model on your machine, or a compatible server you run.

</details>

### hrnareshabd/jev-data-incident-triage

<details><summary>README 발췌</summary>

A portfolio-ready Python project that uses TypeSafe AI's Jev System One model to turn data-pipeline incidents into typed judgments and transparent operational actions.

</details>

### hyspacex/jev-router

<details><summary>README 발췌</summary>

Choose a model for the task. Keep it for the session.

</details>

### ianlintner/bcr-chat-router

<details><summary>README 발췌</summary>

Customer chat routing backend for the (fictional) Bureau of Citizen Response (BCR) — a federal-style agency handling citizen inquiries across Benefits, Billing/Payments, Technical/Digital Services, and General Affairs.

</details>

### ianlintner/jev-router

<details><summary>README 발췌</summary>

A loopback-only, streaming shadow classifier proxy and explicit opt-in Decisions adapter. It compares Jev feature extraction with Switchyard's codingagent classifier policy; it does not replace the execution router.

</details>

### ianrodrigues/julia-1-api-server

<details><summary>README 발췌</summary>

A self-hosted, Jev-compatible HTTP API for Julia-1. Send text or JSON and typed questions. Get classifications, scores, and yes/no probabilities.

</details>

### iksnerd/verdict

<details><summary>README 발췌</summary>

Fast, local answers to typed questions about text: yes/no, pick one, or a level, each with a probability, in about 30 ms of model time (a tenth of a second a call against a running server) on Apple Silicon. Nothing is generated and nothing is run on your behalf. verdict answers; you, or your agent, 

</details>

### inman-sebastian/dispatch

<details><summary>README 발췌</summary>

Local-first AI dispatcher. You talk in plain English; a decision model (Laya or Jev) routes the work; a small local model writes the execution brief; the right harness does the job. Cloud tokens are spent only on execution — never on deciding.

</details>

### Iskandeur/system1-system2

<details><summary>README 발췌</summary>

A small, fast, very cheap model (TypeSafe Jev) answers first and says how sure it is. When it is not sure enough, a big LLM takes over. On which tasks does that hybrid beat "100% Jev" or "100% LLM"? Pick a task, move the slider, and see: how often each of the three setups is right, what it costs per

</details>

### ivancasco/aidlc-plugin-jev

<details><summary>README 발췌</summary>

An AI-DLC plugin that adds three approval-gate checks to the planning stages, using TypeSafe's Jev classifier. Jev returns typed judgments with calibrated probabilities instead of text, so the checks can score a document piece by piece without asking a large model to read it.

</details>

### izam-mohammed/decisionsmith

<details><summary>README 발췌</summary>

Use and fine-tune System One models (Jev, Laya) on your data. Start with an LLM. End with a fast decision model you trained. One line in between.

</details>

### Jac0bJ/jev-worker

<details><summary>README 발췌</summary>

A Cloudflare Worker that exposes TypeSafe Jev as a small HTTP decision API. It validates requests and model responses, routes answers by confidence, caches successful inference in KV, and includes four editable presets. Node.js 22.13+ is needed for development.

</details>

### jackson7705/jev-seo-skills

<details><summary>README 발췌</summary>

Five tested SEO workflows powered by Jev, TypeSafe's System One model: an AI that returns typed decisions with calibrated probabilities instead of text. Packaged as a Claude Code / Codex skill plus standalone Python scripts.

</details>

### JacobNWolf/opencode-subagent-router

<details><summary>README 발췌</summary>

Route simple OpenCode subagent tasks onto a faster, cheaper model. Hard work stays on the parent.

</details>

### Jamesjiwei19981027/Jev-router

<details><summary>README 발췌</summary>

为编程 Agent 接入一层 Jev 决策能力：通过同一个本地共享运行时，给 Claude Code、Codex、Pi、Antigravity 提供两项功能：由 Jev 决定保留哪些工具结果的上下文压缩，以及只做决策的能力路由。

</details>

### jason-allen-oneal/openclaw-plugin-typesafe-ai

<details><summary>README 발췌</summary>

An official community plugin integrating TypeSafe AI's Jev model into OpenClaw.

</details>

### Jeeva200620/e-commerce

<details><summary>README 발췌</summary>

A lightweight, high-performance web platform demonstrating how to leverage TypeSafe Jev (typesafe/jev-1.13 and ~typesafe/jev-latest) via the OpenRouter Decisions API (https://openrouter.ai/api/alpha/decisions) for real-time e-commerce triage and fraud prevention.

</details>

### jeremymungai/jev-security-playground

<details><summary>README 발췌</summary>

&gt; High-throughput, calibrated "System 1" AI decision experiments for Security Operations (SOC), Phishing Detection, Business Email Compromise (BEC), and Prompt Injection Defense.

</details>

### JevForge/jev-flaky-detective

<details><summary>README 발췌</summary>

Classify CI test failures as regression, flaky, environment, or unknown using TypeSafe Jev as a typed decision layer.

</details>

### JevForge/jev-model-navigator

<details><summary>README 발췌</summary>

Route Issues and Pull Requests to the right AI model using TypeSafe Jev as a typed decision layer inside GitHub Actions.

</details>

### JingHao-Leon/awesome-jev-apps

<details><summary>README 발췌</summary>

Jev（TypeSafe AI「System One」决策模型）优质应用与生态精选 · 持续更新

</details>

### jjjjjjjjjjjjjjjjacob/jev-router

<details><summary>README 발췌</summary>

jev-router picks the effort level for every prompt in Claude Code, and the right model for every subagent. It uses TypeSafe's Jev model, a fast classifier that answers in about 200 ms. It's off until you type /jev, and it only affects that session.

</details>

### jonikanerva/rss

<details><summary>README 발췌</summary>

A chronology-first macOS RSS reader with local or user-selected cloud classification.

</details>

### juanmaagd/yakusoku

<details><summary>README 발췌</summary>

A pre-signature firewall for AI agent payments: it only signs a payment when it matches an intent a human authorized.

</details>

### JussCubs/jev-conductor-router

<details><summary>README 발췌</summary>

Decide with Jev whether a coding task needs a Conductor cloud workspace, how hard it is, and which harness and model should run it. Then call Conductor's public API.

</details>

### jvsteiner/jev-mailspring

<details><summary>README 발췌</summary>

A Mailspring plugin that puts critical threads at the top of the currently loaded thread list. It is based on the Mailspring Plugin Starter and uses the same TypeSafe Jev classification questions as Jev Inbox for Gmail.

</details>

### KalyanM45/GitHub-Issue-Classification-Using-Jev

<details><summary>README 발췌</summary>

&gt; Typed labels with calibrated confidence — it labels what it is sure about, and escalates what it is not.

</details>

### ketakisrao/error-boundary-detector

<details><summary>README 발췌</summary>

An interactive React error-boundary triage demo with a server-side TypeSafe Jev adapter. A captured crash is evaluated through Choice (owner), Noul (host contract), and Score (operational blast radius).

</details>

### kijung4290/gmail-mail-triage

<details><summary>README 발췌</summary>

Gmail의 읽지 않은 메일을 IMAP으로 가져와 답변 긴급도, 광고 여부, 답변 필요 여부를 분류하는 로컬 웹앱입니다. 서버는 127.0.0.1에만 열리며 공개 웹 배포 기능은 없습니다.

</details>

### KranzL/omni-example

<details><summary>README 발췌</summary>

Agentic analytics harness that routes data questions to models of matching strength and measures cost against accuracy. Postgres holds the ecommerce data. Go 1.25, module github.com/KranzL/omni-example. The benchmark has 32 questions in bench/questions.yaml (8 easy, 8 moderate, 8 hard, 8 expert) wit

</details>

### lawrence3699/Jev-Style-0.8B-Decision-v3-MLX

<details><summary>README 발췌</summary>

license: apache-2.0 basemodel: chaoliangUNSW/Jev-Style-0.8B-Decision-v3 basemodelrelation: quantized libraryname: mlx pipelinetag: text-classification language: - en - zh - ar - bg - de - el - es - fr - hi - ja - ko - pt - ru - sw - ta - th - tr - ur - vi tags: - decision-model - jev-style - system-

</details>

### lawrence3699/Jev-Style-2B-Decision-v3

<details><summary>README 발췌</summary>

license: apache-2.0 basemodel: Qwen/Qwen3.5-2B basemodelrelation: finetune libraryname: jev-style pipelinetag: text-classification tags: - decision-model - decision-making - transformers - jev-style - system-one - calibration - classification - long-context - qwen3.5 - on-device - llm-routing - guar

</details>

### lawrence3699/Jev-Style-2B-Decision-v3-GGUF

<details><summary>README 발췌</summary>

license: apache-2.0 basemodel: chaoliangUNSW/Jev-Style-2B-Decision-v3 basemodelrelation: quantized libraryname: gguf pipelinetag: text-classification tags: - decision-model - decision-making - jev-style - system-one - calibration - long-context - qwen3.5 - gguf - llama.cpp - on-device - llm-routing 

</details>

### lawrence3699/Jev-Style-2B-Decision-v3-MLX

<details><summary>README 발췌</summary>

license: apache-2.0 basemodel: chaoliangUNSW/Jev-Style-2B-Decision-v3 basemodelrelation: quantized libraryname: mlx pipelinetag: text-classification tags: - decision-model - decision-making - jev-style - system-one - calibration - long-context - qwen3.5 - mlx - apple-silicon - on-device - llm-routin

</details>

### liyifan2004/obsidian-jev-inbox-router

<details><summary>README 발췌</summary>

用 JEV（TypeSafe 的 System One 模型）判断"这条笔记属于哪一类"，然后把它送到对应的文件夹。

</details>

### LongNguyen1984/use-jev

<details><summary>README 발췌</summary>

TypeScript demos of the Jev routing pattern: use Jev (via Vercel AI Gateway) to classify user messages, then route them to the cheapest option that can handle the job — plain code, a budget LLM, Claude, or a human.

</details>

### Loule95450/jev-free-router

<details><summary>README 발췌</summary>

Pick Jev / jev, jev-free or jev-go in /models, then chat normally. On every new message, TypeSafe Jev estimates a distribution of P(best model for this request) over the exact model IDs in the OpenCode catalogue. The provider shown in the UI stays Jev.

</details>

### lucas-avila/fishy

<details><summary>README 발췌</summary>

&gt; [!WARNING] &gt; Fishy is an experiment. Its verdicts come from an AI model (TypeSafe's Jev) that can misjudge an email in either direction: it can flag a legitimate email as suspicious, and it can miss a real phishing attempt, including one deliberately crafted to fool classifiers like it. Use your o

</details>

### lucasandre-dev/jev-demo

<details><summary>README 발췌</summary>

Demo didática que coloca o Jev (modelo System 1 da TypeSafe AI) e um LLM tradicional para resolver a mesma tarefa, lado a lado, comparando tempo, custo e resultado.

</details>

### luxinlabs/LiftLine

<details><summary>README 발췌</summary>

&gt; AI-powered elevator service dispatch with intelligent routing, voice intake, and automated technician assignment

</details>

### lwf225-source/jev-codex-router

<details><summary>README 발췌</summary>

&gt; An experimental TypeSafe Jev-powered task router for the Codex Desktop app. Choose a model and reasoning effort for each new task, send complex work through stronger planning and optional review, then delegate bounded execution to cost-effective Codex subagents.

</details>

### majoralok/InboxClassifierJev

<details><summary>README 발췌</summary>

A self-hosted Python/FastAPI Gmail organizer that uses TypeSafe Jev through LangChain to apply confidence-gated labels and route uncertain messages to a private review dashboard.

</details>

### Marceswan/jevis

<details><summary>README 발췌</summary>

A Jev-powered intent-routing plugin for Hermes Agent that turns conversational (especially voice/STT) input into a two-tier dispatch: a fast model answers immediately, and heavy work is handed off to a slower, stronger model running in the background.

</details>

### masteris777/dev-double

<details><summary>README 발췌</summary>

A local stand-in for System 1 decision models, so you can build your harness before the real model is approved.

</details>

### MDGChamomile/pi-jev

<details><summary>README 발췌</summary>

&gt; Consent-gated TypeSafe Jev advice for the Pi coding agent: choose a task route or rank public web passages without handing over control.

</details>

### mekeren/system-one-benchmark

<details><summary>README 발췌</summary>

An ultra-low latency, CPU-friendly micro-decision routing engine and benchmarking arena inspired by TypeSafe AI Jev primitives.

</details>

### mhoefert/resume-match-router

<details><summary>README 발췌</summary>

Local triage dashboard that matches incoming job descriptions (JD inbox in an Obsidian career-engine vault) against the existing resume corpus, then lets you route each JD to one of three outcomes: Reuse As-Is, Keyword Pass, or Escalate (full compile).

</details>

### MohtashamMurshid/jev-email

<details><summary>README 발췌</summary>

A small terminal app that classifies pasted email snippets as urgent, high, normal, low, or unclear. It calls TypeSafe's Jev model through OpenRouter using the TypeSafe JavaScript SDK. The TUI shows the chosen level, its probability, and four related signals.

</details>

### MoonTory/pi-jev-harness

<details><summary>README 발췌</summary>

A Pi extension where TypeSafe's Jev does the reasoning around tool calls, so the main model spends its tokens on generation only.

</details>

### morler/pi-jev-core

<details><summary>README 발췌</summary>

A minimal, standalone Pi extension: it connects to a Jev API and registers a jevevaluate tool supporting three structured judgment types — noul, choice, and score. It contains no tool routing, auto mode, skill discovery, or context compaction.

</details>

### Mr-DS-ML-85/SyFox

<details><summary>README 발췌</summary>

State in. Typed decisions out. No text generation. Ever.

</details>

### MRKups/jev-usecase-1

<details><summary>README 발췌</summary>

A small demonstrator project showing how TypeSafe Jev can be used to classify and triage IT helpdesk tickets, comparing its answers and latency side-by-side with general LLMs.

</details>

### mtpatokaitom-commits/classifyNdlRooms

<details><summary>README 발췌</summary>

利用者の相談内容から、国立国会図書館 東京本館の専門室(または総合案内)へ 自動で振り分けるためのCloudflare Workerとフロントエンドです。

</details>

### nivaslinga2/Resume-analyser

<details><summary>README 발췌</summary>

An intelligent AI decision system that pairs candidates with internship opportunities. Powered by TypeSafe Jev — the System One decision model engineered for ultra-fast, non-autoregressive classification, scoring, and missing-skill detection.

</details>

### okjpg/jev-hermes-router

<details><summary>README 발췌</summary>

Seu Hermes manda toda mensagem pro mesmo modelo, mesmo quando é só um "ok". Este plugin escolhe, a cada mensagem, o modelo certo pra ela: leve pro trivial, máximo pro que importa.

</details>

### orq-ai/jev-judge

<details><summary>README 발췌</summary>

A reproduction kit for a small, complete judge-repeatability study.

</details>

### P4A-Policies-for-Agents/A2A-Message-Screening

<details><summary>README 발췌</summary>

An inbound (request-leg) screen for the MuleSoft Omni/Flex Gateway that reads the untrusted text an inbound A2A message/send/message/stream request carries, scores it for instruction override, social engineering, credential/secret requests, and off-role intent, and blocks a malicious message with a 

</details>

### P4A-Policies-for-Agents/Sensitivity-vs-Clearance-Gate

<details><summary>README 발췌</summary>

A response-leg (outbound) gate for the MuleSoft Omni/Flex Gateway that decides, per response, whether what is about to be returned is too sensitive for who is asking. It classifies the response with a typed "System 1" Jev judge — a probability distribution over sensitivity levels plus a personal-dat

</details>

### paramiyer/jev-ml-exp

<details><summary>README 발췌</summary>

Traditional machine learning usually optimizes the model.

</details>

### peakevergreen/jevidence

<details><summary>README 발췌</summary>

Let Jev judge. Let your code decide.

</details>

### PineapplesDev/claude-dev-router

<details><summary>README 발췌</summary>

Fastest confident call wins.

</details>

### prasanthj/duckdb-dual-cognition

<details><summary>README 발췌</summary>

Compose fast, bounded System One judgments with selective System Two reasoning in one native DuckDB SQL pipeline. Classify every row cheaply, escalate only ambiguity, and keep the final value plus its decision provenance in the relation.

</details>

### Prateek1771/jev_lab

<details><summary>README 발췌</summary>

Twenty-four decisions an AI product makes every day (classify, gate, route, filter, verify), each decided three ways: by Jev (typesafe/jev-1.13), by an LLM prompt, and by plain code. Same labelled rows, real API calls, every mistake counted. Two UIs show the results: a Next.js app and the original S

</details>

### PromptEngineer48/my-jev

<details><summary>README 발췌</summary>

Train a Jev-like System One classifier: it takes a state, a question and a list of options, then returns one letter plus a probability for every option. The base model is Qwen3.5-4B, fine-tuned with Unsloth on a RunPod GPU. Once trained, the model is published to Hugging Face, served with vLLM and b

</details>

### Pukujan/jev-classifier

<details><summary>README 발췌</summary>

A researcher comparing AI-written accounts of a paper needs to know which source supports each claim and when that record changed. jev-classifier is a prototype for turning a supplied research fragment into a structured, reviewable claim record.

</details>

### punkcanyang/jev-triage

<details><summary>README 발췌</summary>

本地 MVP：邮件／工单 → 结构化 JSON 分流。只分类，不代写客服回复，不收集买家 LLM Key。

</details>

### raitoxlol/hermes-slash-router

<details><summary>README 발췌</summary>

A standalone Hermes Desktop plugin: TypeSafe Jev routes misspelled, shortened, and meaning-based slash commands against Desktop's live command catalog.

</details>

### rajantripathi/fastgate-jev

<details><summary>README 발췌</summary>

Jev decides. Code routes. The LLM only writes when it should.

</details>

### RastislavDujava/jev-classification-prompting

<details><summary>README 발췌</summary>

A classifier draws a line somewhere. If you don't write that line, someone else did.

</details>

### Ray0907/case-review

<details><summary>README 발췌</summary>

AI-assisted mortgage document review. Uploads are parsed (LlamaParse), classified and scored (TypeSafe Jev), extracted (Claude), then turned into a DTI and a recommendation. A reviewer always makes the decision; every edit and decision is audit-logged.

</details>

### riishabhz/power-bi-visual-doctor

<details><summary>README 발췌</summary>

Find the broken visuals in your published Power BI reports, work out why they broke, and get one health report for every dashboard, without paying a vision LLM to look at hundreds of screenshots.

</details>

### robinwintertaylor/Prompt-Router

<details><summary>README 발췌</summary>

Most LLM routers evaluate every prompt in isolation. For single-turn chat, that works. For coding agents (Goose, Cursor, VS Code Continue), it is economically broken.

</details>

### rocstack/jev-profanity

<details><summary>README 발췌</summary>

Unicode-aware dictionary matching with optional Jev AI classification. The default hybrid strategy returns immediately on a configured word match and asks Jev otherwise. Licensed under MIT. This checkout is prepared for npm publication; the npm installation below becomes available after the first pu

</details>

### rominap22/strandsharness-langchain-jev

<details><summary>README 발췌</summary>

A Strands agent where Jev makes fast, typed routing and guardrail decisions, and LangChain (Bedrock) generates answers only when routing calls for it.

</details>

### Running-Dolphins/jev-bench

<details><summary>README 발췌</summary>

Measure accuracy and calibration of Jev (TypeSafe AI's decision model) on public datasets, on tasks that look like the decisions a business actually automates: route this message, is this a duplicate, is this spam, what kind of clause is this, how unhappy is this customer.

</details>

### SApplefeld/agent_persona

<details><summary>README 발췌</summary>

PIANO-esque cognitive layer on Claude Code's Function Hooks API. One plugin module, one register(on, options) export, no Agent SDK. The plugin needs no supervisor to run one session; bin/supervise.sh is the optional outer loop for runs longer than one session. Modules observe at hook boundaries and 

</details>

### sarayutbit58/antigravity-systemone

<details><summary>README 발췌</summary>

Antigravity System One (agy-smart) is a high-speed, token-efficient intelligence router for the Google Antigravity CLI (agy). Powered by TypeSafe's Jev System 1 model, it classifies and filters specialized skills on-the-fly before delegating tasks to the primary reasoning LLM (System 2).

</details>

### secondfret/mailjay

<details><summary>README 발췌</summary>

A personal macOS inbox triage app powered by Google's Gmail API and TypeSafe's Jev model.

</details>

### sengeezer/ai-gateway-routing

<details><summary>README 발췌</summary>

Application-level, task-type model routing for the Vercel AI Gateway. Classify each request into a tier, then hand the request to a per-tier model — deterministically and auditably.

</details>

### sgaunet/gutcheck

<details><summary>README 발췌</summary>

A Go client for System One typed-decision APIs that speak the POST /v1/systemone protocol:

</details>

### Shalimov04/open-jev

<details><summary>README 발췌</summary>

Turn a prompt into a small, fast, calibrated classifier. You describe a decision in one YAML file — a choice between options, a score on a rubric, or the truth of a statement — and openjev has a local LLM teacher label a few thousand examples with soft labels (the softmax over the logprobs of one co

</details>

### Shogo-nfrealmusic/jev-eval

<details><summary>README 발췌</summary>

A third-party check of Jev (typesafe-ai/jev), TypeSafe AI's judgment-only model, against LLMs (openai/gpt-4o-mini and anthropic/claude-sonnet-4.5) under identical conditions. The task: routing booking inquiries sent to a photo-shoot service for international tourists in Japan (60 synthetic messages 

</details>

### simonholm/jev-lab

<details><summary>README 발췌</summary>

An exploratory Rust evaluation of TypeSafe Jev as a bounded decision layer for classifying and routing project-history records. The motivating question was whether inexpensive, constrained judgments could simplify filtering in a Recall-like history reconstruction pipeline.

</details>

### singhpratech/pankhllm

<details><summary>README 발췌</summary>

Read the launch article: pankhllm: the LLM gateway that learns to skip the LLM, without replacing the stack you already run on The AI Vibe.

</details>

### singhpratech/sqljev

<details><summary>README 발췌</summary>

Ask your SQL rows questions in plain English. Write the condition the way you would say it, and your database does the rest, on SQL Server, PostgreSQL, MySQL / MariaDB, Snowflake, Databricks, BigQuery, Redshift, DuckDB and anything SQLAlchemy can reach.

</details>

### sispehar/jev-for-splunk

<details><summary>README 발췌</summary>

| jev asks TypeSafe Jev typed questions about your events and adds the answers as fields. Jev is a calibrated "System One" model: it returns a probability, one of your options, or a position on levels you describe, never generated text.

</details>

### sktime303/orjev

<details><summary>README 발췌</summary>

Orjev is a Python library and CLI for planning OpenRouter routes with Jev Decisions. It discovers catalog and endpoint metadata, filters hard requirements locally, then asks Jev Decisions two conditioned questions:

</details>

### smolnikov-k/migom

<details><summary>README 발췌</summary>

language: - ru - en license: apache-2.0 libraryname: transformers pipelinetag: text-classification tags: - typed-decisions - system-one - russian - routing - agents - decider basemodel: Mapika/decider-2b datasets: - smolnikov/RuDecide

</details>

### smolnikov-k/rudecide

<details><summary>README 발췌</summary>

language: - ru license: other licensename: mixed-open prettyname: RuDecide sizecategories: - 1K&lt;n&lt;10K taskcategories: - text-classification - multiple-choice tags: - typed-decisions - system-one - russian - benchmark - agents configs: - configname: trackaunseen datafiles: data/trackaunseen.jsonl - c

</details>

### Solizardking/jev-trader-solana

<details><summary>README 발췌</summary>

A dry-run multi-venue JEV taker trader for SOL on Solana, built by Clawd 🦞

</details>

### Soubhagyadev/MergeCalibr-Jev

<details><summary>README 발췌</summary>

&gt; MergeCallibr is a probabilistic pull-request triage pipeline for public GitHub repositories. It uses DeepSeek to explain what a PR changes and Jev to produce calibrated risk and confidence signals. MergeCallibr classifies each PR as Low Risk, Needs Review, or Escalated, helping developers focus hu

</details>

### soummyaanon/jev-vs-laya

<details><summary>README 발췌</summary>

Two AI classifiers. Byte-identical inputs. One answer key. Watch them fight live.

</details>

### spirit1616/jev-playground

<details><summary>README 발췌</summary>

Classifying Swiss news comments on the food initiative (Ernährungsinitiative) with TypeSafe Jev.

</details>

### srknkrbb/jev-ecc

<details><summary>README 발췌</summary>

Jev (TypeSafe AI's System One model) does not write text or code. It answers typed questions — choice, score, noul (yes/no) — with calibrated confidence in 70–500 ms, for a fraction of an LLM call. That makes it a good fit for the decision points inside an agent harness, not for the agent itself.

</details>

### StoneHub/jev-tab-organizer

<details><summary>README 발췌</summary>

A little order. A lot more focus. A dependency-free Manifest V3 Chrome extension that turns open tabs into reviewable groups. Works privately and offline out of the box; optional Jev semantic classification uses a gateway you control.

</details>

### Sweet-Butters/korea-ai-contest-tracker

<details><summary>README 발췌</summary>

A self-updating directory of AI competitions, hackathons, idea contests and startup pitch competitions in South Korea, plus government startup funding programmes — and a real-world test of TypeSafe Jev, a model that returns typed, calibrated decisions instead of text.

</details>

### TareqAlhashash/jev-claude-codereviewer

<details><summary>README 발췌</summary>

Paste a code snippet, get an instant quality/red-flag triage from Jev (typesafe.ai), then optionally click Deep Dive for a detailed markdown review with fixes from Claude (Anthropic). A one-page portfolio/study project pairing a Spring Boot backend with a React frontend, integrating two real AI prov

</details>

### Tatendaz/model-picker

<details><summary>README 발췌</summary>

Model and effort suggestions for Codex and Claude Code that follow your task as it grows.

</details>

### teochenglim/laya-play

<details><summary>README 발췌</summary>

A REST wrapper around Laya, a small "System-1" decision model: one forward pass answers several choice / score / noul questions about a piece of text (routing, urgency, sentiment, etc.) in tens of milliseconds.

</details>

### thefaisalkhan/ticketautopilot

<details><summary>README 발췌</summary>

Support-ticket auto-classifier. Primary decision engine is Jev (~typesafe/jev-latest) via OpenRouter, with a rule-based engine as fallback/baseline and automatic cost-routing fast path. See DecisionEngine for the pluggable interface.

</details>

### theogrillat/pi-precision-router

<details><summary>README 발췌</summary>

A Pi extension that uses TypeSafe Jev to choose a model and thinking level before each agent step, including follow-ups after tool calls.

</details>

### thomaszta/jev-req-gate

<details><summary>README 발췌</summary>

用 Jev（TypeSafe System One）给 LLM 生成的需求做质量门禁。

</details>

### ThreeLightStudio/jev-laya-local-daemon

<details><summary>README 발췌</summary>

&gt; Status (September 2026): typesafe/jev-router is now available for free on OpenRouter. If you only need Jev-style model routing, calling OpenRouter directly is the simpler path and this daemon is no longer required. This project remains useful when you want typed decisions from the local Laya check

</details>

### ThyFriendlyFox/jev-triage

<details><summary>README 발췌</summary>

Route unlabeled training data with TypeSafe Jev: accept cheap high-confidence judgments, queue the rest for a frontier teacher or humans, and log soft labels for optional local distillation.

</details>

### tibor-src/jev-site

<details><summary>README 발췌</summary>

A site for Jev, TypeSafe’s decision model. Jev reads a message and answers a typed question with a probability, instead of writing text.

</details>

### tkumata/gh-issues-triage

<details><summary>README 발췌</summary>

GitHub Issues の最新10件を取得し、Jev で重要度順に並べる CLI ツールです。

</details>

### TobyNoSkillSon/Verdict

<details><summary>README 발췌</summary>

Verdict is a local System One server for your Mac. It is compatible with the System One API (TypeSafe Jev) and runs open decision models natively on MLX, and it works with the TypeSafe SDK: code written for Jev moves to Verdict by changing its base URL and model name. Send a state and typed question

</details>

### totally-tim/effort-router

<details><summary>README 발췌</summary>

effort-router is a Claude Code mod that picks the reasoning effort for each turn of the main conversation. It asks a System One classifier how much reasoning a typed prompt needs, sends that level through the turn.step function hook, and shows the level where Claude Code already reports progress:

</details>

### tuhinmitra888/ai-jev-ticket-triage

<details><summary>README 발췌</summary>

Routes incoming support tickets to the right queue, sets a priority, and flags security incidents, churn risk and refund requests, using TypeSafe typed AI judgments plus plain TypeScript rules.

</details>

### twilso24/jev_router

<details><summary>README 발췌</summary>

Standalone TypeSafe Jev-based auto-routing for Agent Zero. Classifies each incoming chat message (task class, complexity, vision, delegation-worthiness) in one fast Jev batch and routes the LLM call to the best provider/model from your modelconfig presets. An optional mid-chat profile switcher re-ev

</details>

### TyrellD1/typesafe-ai_smoke-test

<details><summary>README 발췌</summary>

We sent 30 test prompts through the router. All 30 went to the right place.

</details>

### vinayskasarla/agentroutecomparison

<details><summary>README 발췌</summary>

A single-page app that sends the same questions through several different ways of calling an LLM and compares them on accuracy, cost, latency, confidence, reliability and governance. It helps you pick the one route every app in the company should go through.

</details>

### vishalgwu/jev-review-classifier

<details><summary>README 발췌</summary>

A hands-on project on Jev by TypeSafe AI — the "System-1" decision model that returns decisions, not text.

</details>

### waLLxAck/mailroom

<details><summary>README 발췌</summary>

Canonical URL: https://mailroom.lakebed.app

</details>

### weiping/jev-claude-code

<details><summary>README 발췌</summary>

A Claude Code plugin that puts TypeSafe Jev in the agent loop to make Claude Code faster and cheaper. Jev answers typed questions (choice / score / yes-no) with probabilities; the plugin keeps every threshold and branch in code.

</details>

### WhiteDev08/Smart-Router---A-Decision-One-Model-Router

<details><summary>README 발췌</summary>

A small task-routing pipeline that classifies an incoming question before generating an answer, so the "thinking about what to do" step is as fast and cheap as possible, before the "actually do it" step runs.

</details>

### whosydd/pi-web-toolkit

<details><summary>README 발췌</summary>

A pi package with four independent extensions (toggle each one via pi config) plus a web-search routing skill:

</details>

### withoneai/jev-email-classifier

<details><summary>README 발췌</summary>

Your inbox, sorted into categories you describe in plain English, with the emails that need a reply today pulled to the top.

</details>

### wonghanz/jev-decisions

<details><summary>README 발췌</summary>

Typed decision layer for backend engineering, plus the harness to prove whether it earns its keep.

</details>

### WorkWeonline/workwe-laya

<details><summary>README 발췌</summary>

Multilingual, non-autoregressive System 1 decision engine. Typed decisions over 100+ languages in a single forward pass — 33 ms — trained with reinforcement learning against strictly proper scoring rules (RLCD), with a router that picks the right checkpoint per request.

</details>

### xinian5216/chat-signal-analyzer

<details><summary>README 발췌</summary>

SignalLens 是一个本地优先的 Streamlit 工具：聊天解析、隐私脱敏、缓存和报告 均在本机完成；脱敏后的必要上下文会发送给 TypeSafe Jev（System One 决策模型）进行结构化判断， 再由本地固定公式聚合出「互动亲近信号指数」。

</details>

### yanng981/system-one-benchmark

<details><summary>README 발췌</summary>

Zero-shot accuracy, calibration and latency of System One decision models: TypeSafe Jev 1.13, Kev-0.8B, Von 1.2, Laya (English, multilingual and its router) and GLiNER2.5-Decide (English and multilingual). Every model gets the same examples and the same typed questions through the same Jev-style POS

</details>

### yosit/dot-pi

<details><summary>README 발췌</summary>

My pi setup as a pi package: a Claude-Code-style statusline, and a set of guardrails for the coding loop powered by TypeSafe Jev — a fast classifier that returns typed decisions with calibrated probabilities in ~70-500ms for a fraction of a cent.

</details>

### yuvrajrox/laya-jev-eval

<details><summary>README 발췌</summary>

Two halves, on the same 150M encoder.

</details>

### yuyang2230/jev-agent-skill

<details><summary>README 발췌</summary>

把高频小判断（分类 / 初筛 / 打分 / 核查）从主模型卸载给 Jev（TypeSafe System One 决策模型，OpenCode Zen 免费档），主模型专心生成，判断走免费通道。适配 Claude Code / ZCode 及任何带 skills 目录的 agent。

</details>

### Zapaia/que-modelo-uso

<details><summary>README 발췌</summary>

Type what you want to build. From a pile of 243 AI models, the ones that fit rise and line up in a row, classified in a couple of seconds by Jev, TypeSafe's System One model.

</details>

### zhuyansen/jev-zeroshot-vs-bert

<details><summary>README 발췌</summary>

Zero-shot text classification: does TypeSafe Jev beat BERT-family zero-shot, and how many labelled examples does a trained BERT need to catch up?

</details>

### zjarlin/qa-intent

<details><summary>README 발췌</summary>

输入自然语言业务场景，批量生成客服问答和意图标签，导出 JSON、JSONL 或 CSV，也可编译为 Laya/JEV 决策请求。Rust + clap 实现，命令名 qai。

</details>

### zushicat/gliner2-api-jev-schema

<details><summary>README 발췌</summary>

Local classification API - using GLiNER2 - backed by GLiNER2.5-Decide model - serving a Typesafe Ai's Jev (System One) compatible endpoint at POST /v1/systemone

</details>

### TexasOct/jev-gateway

<details><summary>README 발췌</summary>

JEV Gateway routes OpenAI-compatible chat requests across model providers using configurable cost, quality, and capability rules. Choose a strategy instead of hard-coding a model, and either keep a session on one route or reconsider it each turn.

</details>

### jackchun53/dsh-stage-router

<details><summary>README 발췌</summary>

DeepSeek Harness（dsh）插件：在同一个对话里，按对话所处的阶段切换模型。阶段划分、阶段之间怎么切换、阶段内的分档都可以自由配置。

</details>

### jekozyra/pi-typesafe-router

<details><summary>README 발췌</summary>

Use Jev to classify requests and route them to the right model for the task.

</details>

### jonaslinde/hermes-jev-capability-router

<details><summary>README 발췌</summary>

An advisory-only Hermes Agent plugin that uses TypeSafe Jev through OpenRouter's Decisions API to recommend:

</details>

### JordanKing22/RFQ_Routing

<details><summary>README 발췌</summary>

A local demo that sorts a CNC shop's shared quoting inbox with Jev, TypeSafe AI's decision model, called through your Vercel AI Gateway key.

</details>

### keremmisik/jev-triage

<details><summary>README 발췌</summary>

Confidence-gated log and alert triage for sysadmins, powered by TypeSafe Jev.

</details>

### Lightupsky/astrbot_plugin_intentiontrigger

<details><summary>README 발췌</summary>

利用 TypeSafe Jev 模型对群聊发言做意图识别：只有当发言表现出"要与机器人互动"的意图时，才把消息交给主 LLM 处理。

</details>

### lucascanna/jev-hackaton

<details><summary>README 발췌</summary>

The landing page links to the full-screen /demo application. Both Jev and Codex classify the same source comments using the categories from the approved mockup:

</details>

### lukelittle/goofy-ahh-system-one-demo

<details><summary>README 발췌</summary>

&gt; Teaching serious AI concepts with extremely unserious classification problems.

</details>

### maustin10/System1_classifier_comparisons_transcripts

<details><summary>README 발췌</summary>

This repository represents an independent comparison of open encoder classifiers, TypeSafe.ai JEV, and frontier LLMs on the same synthetic customer-care transcript classification task.

</details>

### musashimiyomoto/demo

<details><summary>README 발췌</summary>

Stack: Valhalla (routing engine) + Postgres/PostGIS/pgvector (places) + FastAPI agent (free-text Russian → pedestrian route) + Vite webapp (UI).

</details>

### pcparts001/pi-jev-reasoning-router-lite

<details><summary>README 발췌</summary>

Jev decision-based thinking-level routing for Pi Agent.

</details>

### piratchai/Jevonian-complete-guide-to-jev-router

<details><summary>README 발췌</summary>

This guide rebuilds, step by step, a working setup of two open-source projects on one Windows PC:

</details>

### Ricos33/LLM-Router

<details><summary>README 발췌</summary>

Intelligent, OpenAI-Compatible API Gateway with Cost-Optimized Dynamic Routing

</details>

### t-shiratori/t-shiratori-ai-model-evaluation-router

<details><summary>README 발췌</summary>

依頼内容と公式のモデル評価情報を Jev に渡し、その依頼に適した AI モデルを推薦する CLI です。

</details>

### xinghai-osc/xinghai-router

<details><summary>README 발췌</summary>

支持 OpenAI、Anthropic 与 JEV / TypeSafe System One 格式的 LLM 网关与运营后台。管理员可管理用户、密钥、渠道、路由和模型价格；用户通过一个 API Key 调用模型，并获取自己的用量、余额和账本。

</details>
