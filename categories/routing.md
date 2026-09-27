# 🔀 라우팅·의도 분류 (560)

[← README](../README.md)

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
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | 646 | 28 | 요약 대기 · Run open decision models locally: pull and serve Laya, decider, NLI and GLiClass behind a TypeSafe-compatible API. Ollama for decision models. | 🆕 | 2026-09-27 |
| [rmalde/minecraft-agent](https://github.com/rmalde/minecraft-agent) | 561 | 58 | 요약 대기 · Astra planner and JEV controller for Minecraft, with native recording, tested routes, and run verification. | 🆕 | 2026-09-20 |
| [jerryjliu/docjev](https://github.com/jerryjliu/docjev) | 468 | 32 | 요약 대기 · A very fast document classifier/splitter using Jev  | 🆕 | 2026-09-26 |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 467 | 60 | 요약 대기 · Tax document page classifier built on Jev decisions. 100% strict accuracy across 261 IRS forms, ~$0.001 per page. | 🆕 | 2026-09-20 |
| [notque/vexjoy-agent](https://github.com/notque/vexjoy-agent) | 425 | 48 | 요약 대기 · VexJoy AI Agent with Jev Intelligent Routing - /do routes plain-English requests to the right specialist agent and gates the work with reviews, tests, and a learning loop. | 🆕 | 2026-09-26 |
| [BillionsBobby/JevRouter](https://github.com/BillionsBobby/JevRouter) | 257 | 17 | **무엇** 모델, 서브에이전트, MCP 툴, CLI 등 다양한 후보군 중 다음에 실행할 역량을 Jev 기반으로 빠르게 선택해주는 경량 라우터 도구다.<br>**판단** 주어진 요청 상태에서 후보군(모델, 서브에이전트, 툴 등) 중 어떤 역량이 다음 단계를 처리해야 하는지 choice 형태로 질문한다.<br>**포인트** Jev 모델의 확률 판단 결과를 유지한 채 가용성, 권한, 위험도, 사용자 확인 단계를 덧붙여 실행하며 단일 호출(route) 및 다단계 계획(plan)을 지원한다. | 🆕 | 2026-09-26 |
| [cobanov/awesome-jev](https://github.com/cobanov/awesome-jev) | 418 | 105 | 요약 대기 · A curated, source-backed list of projects built with Jev, TypeSafe AI's System One model for typed decisions. | 🆕 | 2026-09-25 |
| [mohsen1/llm-debugger-vscode-extension](https://github.com/mohsen1/llm-debugger-vscode-extension) | 361 | 24 | 요약 대기 · VSCode extension that demonstrates the use of large language models (LLMs) for active debugging of programs | 🆕 | 2026-09-21 |
| [Heman10x-NGU/openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0) | 290 | 43 | 요약 대기 · Calibrated 151M Non-Autoregressive Decision Engine beating TypeSafe Jev &amp; Laya on LocalLLaMA/typed-decisions (77.10% acc, 0.0636 Brier, 0.0144 ECE) | 🆕 | 2026-09-20 |
| [yonatangross/orchestkit](https://github.com/yonatangross/orchestkit) | 284 | 35 | 요약 대기 · The Complete AI Development Toolkit for Claude Code. 106 skills, 36 agents, 171 hooks. Install \`ork\` for stable (v9.x), or \`ork-alpha\` for the v10 line, which ships daily. | 🆕 | 2026-09-27 |
| [yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router) | 51 | 2 | **무엇** Hono 프레임워크에서 메서드나 경로 대신 자연어 설명으로 들어오는 HTTP 요청을 분류해 처리하는 시맨틱 라우터다.<br>**판단** 요청의 메서드·URL·헤더·본문이 등록된 각 라우트 설명과 일치하는지 여부를 Noul(예/아니오) 확률로 병렬 판별시킨다.<br>**포인트** HTTP 요청마다 모델 호출 비용과 지연이 발생하며, 등록 순서대로 확률이 임계값을 넘는 첫 번째 라우트가 매칭된다. | ✅ 🆕 `noul` | 2026-09-18 |
| [cequence-io/openai-scala-client](https://github.com/cequence-io/openai-scala-client) | 250 | 40 | 요약 대기 · Scala client for OpenAI API and other major LLM providers | 🆕 | 2026-09-27 |
| [samuelfaj/distill](https://github.com/samuelfaj/distill) | 692 | 45 | 요약 대기 · Get FAR MORE done with FAR FEWER tokens 🔥 | 🆕 | 2026-09-27 |
| [kentcdodds/kody](https://github.com/kentcdodds/kody) | 683 | 66 | 요약 대기 · 🐨 Your assistant's home — the memory, keys, code, and automations your AI agent keeps, portable across every MCP host. Built on Cloudflare Workers. | 🆕 | 2026-09-27 |
| [mmastrac/djev-spark](https://github.com/mmastrac/djev-spark) | 217 | 16 | 요약 대기 · DiffusionGemma NVFP4 structured decisions on a DGX Spark: container recipe | 🆕 | 2026-09-24 |
| [kshetrajna12/reflex](https://github.com/kshetrajna12/reflex) | 153 | 17 | 요약 대기 · A small open decision model: state + typed questions -&gt; calibrated probabilities. A Jev / System One re-creation on Qwen3.5. | 🆕 | 2026-09-27 |
| [kraayenjon/awesome-jev](https://github.com/kraayenjon/awesome-jev) | 152 | 34 | 요약 대기 · A curated list of Jev use cases, projects, SDKs, and resources. Jev is TypeSafe AI's System One model for fast, typed decisions in software — Choice, Score, and Noul with calibrated probabilities. | 🆕 | 2026-09-27 |
| [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | 142 | 15 | 요약 대기 · JevBench v1 - a benchmark for Jev-class typed decision models: smart, cheap, fast, reliable, open. | 🆕 | 2026-09-27 |
| [juspay/neurolink](https://github.com/juspay/neurolink) | 142 | 127 | 요약 대기 · The pipe layer of an AI nervous system — one interface connecting provider neurons to your application, across three inference types: generate, stream, and a calibrated decide (via TypeSafe Jev). MCP-native, voice (TTS/STT/realtime), RAG, memory, file processors. Powers Tara, Yama and Clairvoyance at Juspay. | 🆕 | 2026-09-27 |
| [Promethe-us/awesome-jev](https://github.com/Promethe-us/awesome-jev) | 131 | 6 | 요약 대기 · A source-backed Jev / System One knowledge map: projects, papers, evaluations, robotics, and social discovery. | 🆕 | 2026-09-27 |
| [devagrawal09/stanley-code](https://github.com/devagrawal09/stanley-code) | 117 | 6 | 요약 대기 · Bounded TypeSafe Jev workflows for coding agents. | 🆕 | 2026-09-19 |
| [cookiespiggy/agentic-rl](https://github.com/cookiespiggy/agentic-rl) | 113 | 13 | 요약 대기 · Agentic RL 中文零基础教程（33 章）：从概念到 GRPO 实战，含 TRL 最小可跑示例；26–33 章附一套可运行的三方判别模型实证工程（encoder vs LLM-LoRA vs 规则基线）。第 25 章讲清 Jev / TypeSafe System One 与 RL 的能力边界 \| Chinese Agentic RL tutorial (33 chapters) + a reproducible discriminative-model benchmark | 🆕 | 2026-09-27 |
| [Heman10x-NGU/Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev) | 107 | 13 | 요약 대기 · Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground | 🆕 | 2026-09-20 |
| [virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev) | 101 | 10 | 요약 대기 · Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording | 🆕 | 2026-09-21 |
| [AppitStudio/awesome-jev](https://github.com/AppitStudio/awesome-jev) | 87 | 16 | 요약 대기 · Curated Jev resources and runnable examples for typed AI decisions. | 🆕 | 2026-09-27 |
| [Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev) | 87 | 9 | 요약 대기 · Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples | 🆕 | 2026-09-26 |
| [giuliosmall/pg_typesafe](https://github.com/giuliosmall/pg_typesafe) | 87 | 1 | 요약 대기 · Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification | 🆕 | 2026-09-24 |
| [nidhi-singh02/agent-router](https://github.com/nidhi-singh02/agent-router) | 87 | 8 | 요약 대기 · CLI that picks Cursor, Claude Code, Codex, or OpenCode + model/effort for a task, then launches it. Powered by Jev and Herdr | 🆕 | 2026-09-27 |
| [yzfly/awesome-jev-zh](https://github.com/yzfly/awesome-jev-zh) | 75 | 20 | 요약 대기 · Jev / TypeSafe System One 中文精选列表：官方资料、SDK、爆款应用、Agent 工具、开源复现与独立评测，附中文上手指南，每日自动收录 GitHub 热门项目。 | 🆕 | 2026-09-27 |
| [prismhq/jev-router](https://github.com/prismhq/jev-router) | 13 | 1 | **무엇** LiteLLM 프록시 위에서 TypeSafe Jev를 활용해 들어온 요청을 최적의 LLM으로 라우팅해 주는 오픈소스 도구다.<br>**판단** 축약된 요청 요약본과 모델 후보군 설명을 바탕으로 요청을 처리할 최적의 후보 모델 하나를 choice 방식으로 선택시킨다.<br>**포인트** 요구 역량으로 후보를 1차 필터링하며, API 키가 없으면 규칙 기반 최저가 모델로, 에러 발생 시 지정된 fallback으로 대체된다. | ✅ 🆕 `choice` | 2026-09-17 |
| [hyperspaceai/jevcache](https://github.com/hyperspaceai/jevcache) | 73 | 3 | 요약 대기 · A decision cache for TypeSafe Jev-class models — memoize decisions so repeats are free, deterministic, and shareable. One 2 MB binary. | 🆕 | 2026-09-19 |
| [UditAkhourii/quicksilver](https://github.com/UditAkhourii/quicksilver) | 71 | 4 | 요약 대기 · Claude Code skill: hand bulk judgment calls to Jev. 86% fewer Claude tokens on a 12-task benchmark, up to 20x faster. One-line npx install. | 🆕 | 2026-09-25 |
| [kikoncuo/jevfire](https://github.com/kikoncuo/jevfire) | 69 | 5 | 요약 대기 · JEV-inspired parallel decisions for CUDA LLMs. One context, many decisions. vLLM API, game-agent examples, and reproducible benchmarks. | 🆕 | 2026-09-18 |
| [bnsd55/jevmlx](https://github.com/bnsd55/jevmlx) | 68 | 8 | 요약 대기 · Jev-style parallel constrained decisions for any MLX model on Apple Silicon. Typed, schema-valid JSON in one forward pass. | 🆕 | 2026-09-25 |
| [Dimweaker/jev-libero](https://github.com/Dimweaker/jev-libero) | 67 | 2 | 요약 대기 · Fine-grained robot control with Jev, physics previews, and configurable LIBERO tasks. | 🆕 | 2026-09-21 |
| [zwliJay/jev-forge](https://github.com/zwliJay/jev-forge) | 67 | 6 | 요약 대기 · An open training and inference stack for Jev-style decision models.  Train models to score dynamic candidate branches from a shared prefix, with support for high-cardinality choice, calibration, and fast batched inference. | 🆕 | 2026-09-23 |
| [GiesN/typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow) | 12 | 3 | **무엇** LangGraph 기반으로 가상 수신 이메일을 분류하여 알맞은 핸들러로 라우팅하는 비동기 워크플로 예제다.<br>**판단** 이메일 본문과 제목을 바탕으로 의도가 'invoice'인지 'general'인지 choice로 분류하도록 요청한다.<br>**포인트** API 오류 시 임의 라벨을 할당하지 않고 중단하며, 테스트 코드에서는 SDK 응답을 모킹해 네트워크 없이 그래프 라우팅을 검증한다. | ✅ 🆕 | 2026-09-16 |
| [BeatAPI/awesome-jev](https://github.com/BeatAPI/awesome-jev) | 62 | 8 | 요약 대기 · A source-reviewed gallery of JEV-related projects with 50+ GitHub stars — integrations, tools, open models, experiments, and ecosystem resources. Live gallery: beatapi.io/awesome-jev | 🆕 | 2026-09-23 |
| [iamaamir/system-one](https://github.com/iamaamir/system-one) | 61 | 3 | 요약 대기 · Provider-neutral System One runtime for TypeScript and Pi | 🆕 | 2026-09-27 |
| [Nisaka520/JevIntent](https://github.com/Nisaka520/JevIntent) | 59 | 6 | 요약 대기 · 微信（FkWeChat 插件）：长按消息分析意图 / 情绪 / 回复姿态，只在本机弹提示，对方无感知 | 🆕 | 2026-09-23 |
| [EliaAlberti/jev-rules](https://github.com/EliaAlberti/jev-rules) | 58 | 9 | 요약 대기 · Jev picks which of your rules apply to each prompt, so Claude only sees the ones that matter. | 🆕 | 2026-09-27 |
| [TheoOliveira/pi-jev](https://github.com/TheoOliveira/pi-jev) | 56 | 9 | 요약 대기 · Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev | 🆕 | 2026-09-24 |
| [togethercomputer/tev1](https://github.com/togethercomputer/tev1) | 154 | 17 | 요약 대기 · Open-weight, Jev-inspired decision model finetuned on top of Qwen3.5 4B | 🆕 | 2026-09-24 |
| [alvarobartt/sys1](https://github.com/alvarobartt/sys1) | 47 | 2 | 요약 대기 · Fast, self-hosted inference server for open decision models with a System One compatible API, written in Rust. | 🆕 | 2026-09-25 |
| [PerryLink/jevcore](https://github.com/PerryLink/jevcore) | 47 | 0 | 요약 대기 · TypeSafe Jev for DeepSeek Harness, the Model Context Protocol, and plain Node: typed judgments instead of prose, offline by default. | 🆕 | 2026-09-24 |
| [wh000wh000/awesome-jev-live](https://github.com/wh000wh000/awesome-jev-live) | 47 | 3 | 요약 대기 · Awesome Jev — evidence-graded index of TypeSafe System One: SDKs, MCP tools, agents, apps and open models. 20 languages, rebuilt every 2 hours. | 🆕 | 2026-09-27 |
| [hunkim/solar-mini4-jev](https://github.com/hunkim/solar-mini4-jev) | 45 | 7 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-24 |
| [zhengxuyu/litjev](https://github.com/zhengxuyu/litjev) | 45 | 9 | 요약 대기 · Turn any off-the-shelf LLM into a Jev -like decision layer | 🆕 | 2026-09-21 |
| [intikhab49/open-jev-typed-decision-engine](https://github.com/intikhab49/open-jev-typed-decision-engine) | 44 | 2 | 요약 대기 · Open reproduction of TypeSafe Jev: a 150M typed decision engine (noul/choice/score in one non-autoregressive pass, calibrated confidence). 0.697 vs Jev's 0.727, 2.5x better calibrated, 4x faster, free. Trains on a Colab T4 in 30 min. | 🆕 | 2026-09-21 |
| [aurorainfra/grev](https://github.com/aurorainfra/grev) | 39 | 1 | 요약 대기 · Thinking coreutils | 🆕 | 2026-09-24 |
| [bodepudimuneendra-netizen/laya-jev-GraphRAG](https://github.com/bodepudimuneendra-netizen/laya-jev-GraphRAG) | 39 | 1 | 요약 대기 · A database-agnostic Agentic GraphRAG framework using swappable System One models (local Laya / cloud Jev). A plug-and-play intelligence layer featuring a complete 4-phase pipeline, continuous evaluation and custom A* traversal for any graph database. | 🆕 | 2026-09-25 |
| [sabeel111/OpenSourceJev](https://github.com/sabeel111/OpenSourceJev) | 38 | 10 | 요약 대기 · Turning an LLM model into a Jev like System.  | 🆕 | 2026-09-23 |
| [klauswg/jev-guard](https://github.com/klauswg/jev-guard) | 37 | 0 | 요약 대기 · Real-time risk triage gateway for exchange deposits and withdrawals — Jev (TypeSafe System One) handles triage only; adjudication stays in deterministic code. | 🆕 | 2026-09-22 |
| [adarshmishra07/jcm-router](https://github.com/adarshmishra07/jcm-router) | 6 | 0 | **무엇** Claude Code와 Anthropic API 사이에서 TypeSafe Jev를 이용해 메시지별 모델과 effort 수준을 결정하는 로컬 프록시다.<br>**판단** 들어오는 요청에 대해 어떤 Claude 모델(Haiku, Sonnet, Opus 등)을 쓸지와 어느 정도의 effort 수준을 부여할지 판단시킨다.<br>**포인트** 프롬프트 캐시 파기 비용 손실을 막기 위해 메인 채팅은 가급적 유지하고 콜드 상태인 서브에이전트 위주로 라우팅을 수행한다. | ✅ 🆕 | 2026-09-17 |
| [devanshbatham/commit-miner](https://github.com/devanshbatham/commit-miner) | 36 | 6 | 요약 대기 · Classify Git commit diffs and messages with Jev. Bug fixes, security fixes/CWEs, and change types. | 🆕 | 2026-09-17 |
| [zhihz/openjev](https://github.com/zhihz/openjev) | 35 | 3 | 요약 대기 · Local bilingual probability decisions from context, questions, and candidate answers. Independent research preview inspired by TypeSafe Jev. | 🆕 | 2026-09-16 |
| [0xBakeer/arbiter](https://github.com/0xBakeer/arbiter) | 34 | 3 | 요약 대기 · Serve typed-decision (System 1) models — Laya or your own — on NVIDIA GPUs or Apple Silicon, with a Jev-compatible API and coding-agent integrations | 🆕 | 2026-09-24 |
| [JackZeng/Jev_apps](https://github.com/JackZeng/Jev_apps) | 34 | 0 | 요약 대기 · 看看 Jev 能做什么：用中英文讲清热门应用、工作原理和各自优缺点。Explore Jev apps with plain-language examples, explanations, and comparisons. | 🆕 | 2026-09-23 |
| [matrixorigin/Astra](https://github.com/matrixorigin/Astra) | 34 | 9 | 요약 대기 · Astra — The context-to-execution runtime for enterprise agents. https://matrixorigin.io/astra | 🆕 | 2026-09-27 |
| [davila7/jev-explained](https://github.com/davila7/jev-explained) | 33 | 5 | 요약 대기 · Jev Explained | 🆕 | 2026-09-20 |
| [zhangcy122/OpenJev](https://github.com/zhangcy122/OpenJev) | 33 | 4 | 요약 대기 · Self-evolving cognitive decision engine &amp; TypeSafe Jev alternative. Deliberative decision flywheel ('explore first, crystallize later' System 2→1) with 100% option-order invariance. Typed probabilistic API (Choice, Noul, Score) for Open LLMs, Laya (ModernBERT), &amp; commercial Jev with calibrated logprobs and adaptive safety guards. | 🆕 | 2026-09-26 |
| [jlowin/vibecheck](https://github.com/jlowin/vibecheck) | 32 | 1 | 요약 대기 · ✨✅ The easiest decisions your code will ever make. | 🆕 | 2026-09-24 |
| [bladedevoff/stuntd](https://github.com/bladedevoff/stuntd) | 31 | 1 | 요약 대기 · Local proxy that learns your app's typed LLM decisions and answers them with a Laya head. Jev and OpenAI compatible. | 🆕 | 2026-09-25 |
| [chy4pro/jev-for-chrome](https://github.com/chy4pro/jev-for-chrome) | 30 | 4 | 요약 대기 · Jev for Chrome: drives the tab you are looking at with TypeSafe Jev, a sub-second decision model. Community port of browser-use/jev-ultrafast, not affiliated with TypeSafe. | 🆕 | 2026-09-22 |
| [PromptEngineer48/laya-vs-jev-arena](https://github.com/PromptEngineer48/laya-vs-jev-arena) | 30 | 12 | 요약 대기 · Laya (open source, local) vs TypeSafe Jev (API): two AI models race in Snake and fight in a Mortal-Kombat-style arena. Every move is a real model decision. | 🆕 | 2026-09-22 |
| [keeltrace/hermes-nerve](https://github.com/keeltrace/hermes-nerve) | 29 | 8 | 요약 대기 · Nerve is a supervisory nervous system for Hermes agents, adding typed System One decisions, ranking, verification, token-aware oversight, and an opt-in tool gate powered by TypeSafe Jev or Open Source Laya | 🆕 | 2026-09-27 |
| [misbahsy/doc-router](https://github.com/misbahsy/doc-router) | 29 | 6 | 요약 대기 · A Document OCR Router to help route pages based on content.  | 🆕 | 2026-09-18 |
| [nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook) | 29 | 1 | 요약 대기 · Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent. | 🆕 | 2026-09-26 |
| [Abhinavexists/lev](https://github.com/Abhinavexists/lev) | 28 | 0 | 요약 대기 · An open System One decision model | 🆕 | 2026-09-25 |
| [bhaiG-de/jev-design-test](https://github.com/bhaiG-de/jev-design-test) | 28 | 3 | 요약 대기 · Jev shadcn-block generator | 🆕 | 2026-09-21 |
| [mejiasd3v/pi-jev-router](https://github.com/mejiasd3v/pi-jev-router) | 15 | 0 | **무엇** Vercel AI Gateway의 TypeSafe Jev를 활용해 Pi 코딩 에이전트 세션에 적합한 모델과 추론 강도를 자동으로 선택해 주는 라우터 확장 도구다.<br>**판단** 작업 내용과 모델별 설명 루브릭을 바탕으로 세션에 배정할 최적의 모델과 최소 추론 강도(thinking level)를 choice로 판단시킨다.<br>**포인트** 모델과 추론 노력을 한 번 평가해 세션 동안 고정(pin)하며, Astra 모델의 경우 단계별 적응형 추론 강도(adaptive effort) 조절을 지원한다. | 🆕 | 2026-09-22 |
| [ankit-aglawe/tinyjev](https://github.com/ankit-aglawe/tinyjev) | 25 | 4 | 요약 대기 · A tiny jev-like model that answers Choice, Score and Noul questions in one forward pass and returns calibrated probabilities. MLX or PyTorch, fully offline, System One compatible. | 🆕 | 2026-09-25 |
| [buberlo/dsh-jev](https://github.com/buberlo/dsh-jev) | 25 | 6 | 요약 대기 · Jev-powered decision layer for DeepSeek Harness | 🆕 | 2026-09-23 |
| [lukaske/jev-doom-agent](https://github.com/lukaske/jev-doom-agent) | 25 | 6 | 요약 대기 · A browser-native Doom agent experiment with structured spatial state, composable AI controls, live decision telemetry, and a Chocolate Doom WebAssembly runtime. | 🆕 | 2026-09-17 |
| [sandeco/pix-golpe](https://github.com/sandeco/pix-golpe) | 25 | 11 | 요약 대기 · Demo: IA detecta golpe do Pix e rastreia a quadrilha. Rust + Jev vs Python + DeepSeek em tela dividida. | 🆕 | 2026-09-23 |
| [YueBit/robodiag-harness](https://github.com/YueBit/robodiag-harness) | 23 | 0 | 요약 대기 · AI diagnostic agent for ROS 2 robots — evidence-based, tool-calling, safety-gated.  | 🆕 | 2026-09-22 |
| [AskTheWay/dsh-jev-interceptor](https://github.com/AskTheWay/dsh-jev-interceptor) | 21 | 1 | 요약 대기 · ⚡ Millisecond System-1 judgement for every tool call in DeepSeek Harness — Jev-powered risk classification &amp; evidence-gated auto-approval. Fail-closed by construction. dsh 生态第一个 System-1 决策插件 | 🆕 | 2026-09-25 |
| [Bodila51/muse-jev-playbook](https://github.com/Bodila51/muse-jev-playbook) | 21 | 3 | 요약 대기 · Jev decision layer for Muse: a fast, cheap TypeSafe AI gate before expensive agent work — confidence policy, recipes, reference router, honest measurement. | 🆕 | 2026-09-22 |
| [BoundaryML/feelings](https://github.com/BoundaryML/feelings) | 21 | 3 | 요약 대기 · .feels() on anything — the AI if statement as a real, typed method. Jev + BAML. | 🆕 | 2026-09-19 |
| [chengyongru/fastjev](https://github.com/chengyongru/fastjev) | 21 | 0 | 요약 대기 · SDK-first, independently maintained SemIf fork for fast, self-hosted semantic decisions. | 🆕 | 2026-09-24 |
| [emnlmn/snap](https://github.com/emnlmn/snap) | 21 | 0 | 요약 대기 · Typed decisions from unstructured state: one forward pass, zero generated text. Local, deterministic, Jev-compatible. Not affiliated with typesafe.ai. | 🆕 | 2026-09-27 |
| [FeiLiuEM/open-medical-jev](https://github.com/FeiLiuEM/open-medical-jev) | 21 | 1 | 요약 대기 · Jev-level results from frozen open models: within ~2 pts of Jev on national medical exams (≈3× Laya; level with OpenJev). No fine-tuning, no distillation, no corpus and high compatibility with new models. Three modes: fast runs at ≈0.076s per question; general and high cascades cut compute ≈63%/49% at 93%/97% released precision. | 🆕 | 2026-09-27 |
| [TypeSafeAI/typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground) | 21 | 6 | 요약 대기 · Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI. | 🆕 | 2026-09-26 |
| [hraness/algal](https://github.com/hraness/algal) | 20 | 2 | 요약 대기 · ALGAL is a programming language and VM for AI agent programs that wait for approval and leave receipts you can replay. | 🆕 | 2026-09-27 |
| [imohitmayank/jevfill](https://github.com/imohitmayank/jevfill) | 20 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-20 |
| [jsk4581/jev-blindspot](https://github.com/jsk4581/jev-blindspot) | 20 | 0 | 요약 대기 · A side-panel assistant that finds the blind spots in your prompts. For Claude Code and Codex CLI. | 🆕 | 2026-09-24 |
| [lyramakesmusic/jevbot](https://github.com/lyramakesmusic/jevbot) | 20 | 4 | 요약 대기 · discord bot for jev that lets it talk | 🆕 | 2026-09-24 |
| [Ray-Hughes/jevalyn](https://github.com/Ray-Hughes/jevalyn) | 20 | 1 | 요약 대기 · The decision layer for your Rails app. A Rails-native wrapper around TypeSafe's Jev System One API: typed, calibrated decisions in your control flow. | 🆕 | 2026-09-21 |
| [unicodeveloper/jevocks](https://github.com/unicodeveloper/jevocks) | 20 | 5 | 요약 대기 · Everyday Stocks Status with Jev | 🆕 | 2026-09-18 |
| [vinilana/live-jev](https://github.com/vinilana/live-jev) | 20 | 9 | 요약 대기 · 2D autonomous car simulation in the browser, driven by TypeSafe's Jev decision model | 🆕 | 2026-09-18 |
| [0x7067/claude-jev](https://github.com/0x7067/claude-jev) | 19 | 3 | 요약 대기 · Claude Code plugin: Jev for rule checks, verbatim compaction, and prompt routing | 🆕 | 2026-09-27 |
| [evoke-build/evoke](https://github.com/evoke-build/evoke) | 19 | 1 | 요약 대기 · Software, by reflex. Say it, and the right small program runs: chosen by a calibrated classifier, run only when it is sure enough, and it asks before anything that cannot be undone. A CLI, a package manager and a TypeScript SDK: the first implementation of the idea. | 🆕 | 2026-09-27 |
| [leesk212/JEV-CPU](https://github.com/leesk212/JEV-CPU) | 19 | 2 | 요약 대기 · Run SemIf (Jev-style semantic-if decisions) on a CPU — no GPU. Reads typed option probabilities straight from an open model in one forward pass, plus a web UI. | 🆕 | 2026-09-19 |
| [mayank953/Jev](https://github.com/mayank953/Jev) | 19 | 11 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [arjun988/Kev](https://github.com/arjun988/Kev) | 17 | 1 | 요약 대기 · Open-source System One decision engine. Typed choice / score / noul with calibrated probabilities. Self-host with Ollama or any OpenAI-compatible model. Apache-2.0. | 🆕 | 2026-09-23 |
| [carldaws/hunch](https://github.com/carldaws/hunch) | 17 | 0 | 요약 대기 · Probabilistic control flow for Ruby and Rails - powered by TypeSafe's Jev | 🆕 | 2026-09-25 |
| [Das-rebel/a3m-router](https://github.com/Das-rebel/a3m-router) | 17 | 5 | 요약 대기 · ⚡ Adaptive multi-model LLM router — 80+ providers, Jev System One single-pass routing (model=jev-auto), pheromone-trail failover, parallel ensemble merge. npm: adaptive-memory-multi-model-router | 🆕 | 2026-09-24 |
| [thusinh1969/BrighTO_Router](https://github.com/thusinh1969/BrighTO_Router) | 17 | 3 | 요약 대기 · BrighTO LLM Router: free open-source, ultra-fast self-hosted Rust LLM gateway for OpenAI/Anthropic APIs, SystemOne/JEV/DJEV decisions, Ollaya/Laya, load balancing, fallback routing, team keys and token budgets. | 🆕 | 2026-09-27 |
| [liaoyuhua/jev-trip](https://github.com/liaoyuhua/jev-trip) | 16 | 0 | 요약 대기 · Two Minds, One Trip.  https://jev-trip.vercel.app/ | 🆕 | 2026-09-24 |
| [doeixd/discern](https://github.com/doeixd/discern) | 14 | 2 | 요약 대기 · Craft Type-Safe Uncertainty-aware semantic pattern matching, control flow, and smart procedures for Effect DecisionModel and Jev | 🆕 | 2026-09-25 |
| [MrJev/awesome-jev](https://github.com/MrJev/awesome-jev) | 14 | 6 | 요약 대기 · A curated list of projects, integrations, and resources for Jev, TypeSafe AI's System One model.  | 🆕 | 2026-09-27 |
| [Twister915/typesafe-ai](https://github.com/Twister915/typesafe-ai) | 14 | 3 | 요약 대기 · Typed TypeSafe AI clients for Rust, with async and blocking backends and observable retries. | 🆕 | 2026-09-16 |
| [whyashthakker/awesome-jev-use-cases](https://github.com/whyashthakker/awesome-jev-use-cases) | 14 | 0 | 요약 대기 · Awesome list of Jev use cases. Compared with GPT Models (LLMs) across on cost and speed. | 🆕 | 2026-09-20 |
| [dzhng/duet-agent](https://github.com/dzhng/duet-agent) | 46 | 4 | 요약 대기 · An opinionated full-stack agent harness with native memories, long running tasks, and multi-agent relay | 🆕 | 2026-09-25 |
| [ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch) | 13 | 0 | 요약 대기 · Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension | 🆕 | 2026-09-19 |
| [hev/reranker](https://github.com/hev/reranker) | 13 | 0 | 요약 대기 · Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0. | 🆕 | 2026-09-17 |
| [idovmamane/dejevu](https://github.com/idovmamane/dejevu) | 13 | 2 | 요약 대기 · Jev? Déjà vu. Browser agents that run on instinct, no Jev needed. One look at the page, one call to any open model, one action. Faster than the Jev demo on Google Flights. | 🆕 | 2026-09-23 |
| [philippdubach/pi-jev-router](https://github.com/philippdubach/pi-jev-router) | 13 | 1 | 요약 대기 · A minimal Pareto-optimal OpenRouter model router for pi, based on Jev | 🆕 | 2026-09-27 |
| [getsynkora/synkora-ai](https://github.com/getsynkora/synkora-ai) | 38 | 6 | 요약 대기 · Open-source AI agent platform for building, deploying, and managing AI teammates. Role-based agents (PM, Engineer, Support, Marketing) with custom tools, knowledge bases, and 50+ integrations. Self-hosted, multi-provider LLM support, no vendor lock-in. | 🆕 | 2026-09-27 |
| [MichelKerkmeester/skilled-agent-harness_spec-driven-loops](https://github.com/MichelKerkmeester/skilled-agent-harness_spec-driven-loops) | 37 | 3 | 요약 대기 · AI-assisted coding setup that helps you spend less time re-explaining context, and more time shipping with better output. Includes a custom spec kit, memory, agent and skill framework. | 🆕 | 2026-09-27 |
| [ckaraca/awesome-jev](https://github.com/ckaraca/awesome-jev) | 12 | 5 | 요약 대기 · A curated list of tools, integrations, and experiments built on Jev, TypeSafe AI's System One model for fast, typed decisions. | 🆕 | 2026-09-27 |
| [ekizito96/Turn](https://github.com/ekizito96/Turn) | 12 | 0 | 요약 대기 · A compiled programming language and sovereign runtime for building secure, distributed AI agents. | 🆕 | 2026-09-18 |
| [manifoldor/xtags](https://github.com/manifoldor/xtags) | 12 | 3 | 요약 대기 · 在 X 的时间线上，给每条帖子标出它想让你干什么。判断来自 Jev，一个只返回概率、不生成文本的模型。 | 🆕 | 2026-09-27 |
| [win4r/pi-jev-router](https://github.com/win4r/pi-jev-router) | 12 | 2 | 요약 대기 · Task-boundary model routing for Pi Coding Agent, powered by TypeSafe Jev. Conservative policies, exact caching, and observable failover. | 🆕 | 2026-09-20 |
| [xinyao27/jevonian](https://github.com/xinyao27/jevonian) | 12 | 3 | 요약 대기 · One local endpoint. The right model for every turn — enforced in code, not prompts. | 🆕 | 2026-09-27 |
| [matthewp/flue-jev-demo](https://github.com/matthewp/flue-jev-demo) | 11 | 0 | 요약 대기 · Flue agent routing with TypeSafe Jev through Cloudflare AI Gateway | 🆕 | 2026-09-18 |
| [mattt/AnyDecisionModel](https://github.com/mattt/AnyDecisionModel) | 11 | 2 | 요약 대기 · A Swift package for typed decisions from language models (probabilities, choices, and scores), with support for local MLX models and the TypeSafe Jev API. | 🆕 | 2026-09-27 |
| [Mawfyy/jevflow](https://github.com/Mawfyy/jevflow) | 11 | 1 | 요약 대기 · Probabilistic AI decisions as composable backend primitives — typed judgments (noul/score/choice), deterministic thresholds, and explainable workflows. Powered by TypeSafe's Jev, provider-agnostic. | 🆕 | 2026-09-20 |
| [ruban-24/switchboard](https://github.com/ruban-24/switchboard) | 11 | 1 | 요약 대기 · An open-source, model-agnostic decision router for Claude Code and Codex. | 🆕 | 2026-09-27 |
| [komorra/Eugeniusz](https://github.com/komorra/Eugeniusz) | 10 | 0 | 요약 대기 · Local, typed AI decisions for C, C++, C#, Python, Unity and Unreal Engine. | 🆕 | 2026-09-17 |
| [okooo5km/jev](https://github.com/okooo5km/jev) | 10 | 1 | 요약 대기 · Typed decisions from the shell: an unofficial stdlib-Python CLI and Agent Skill for TypeSafe's Jev model, via the TypeSafe API (default) or OpenRouter. Yes/no, choice and ordinal scores with calibrated probabilities, semantic grep and batch mode. | 🆕 | 2026-09-19 |
| [rajdhakad9826/jev-router](https://github.com/rajdhakad9826/jev-router) | 10 | 1 | 요약 대기 · LLM router that picks the cheapest model capable of handling a query, using TypeSafe's Jev for fast classification instead of an LLM call. | 🆕 | 2026-09-21 |
| [rupeshpoojary9/poorjev](https://github.com/rupeshpoojary9/poorjev) | 10 | 0 | 요약 대기 · Open-source, local Jev alternative: a System One decision layer with provably calibrated confidence (ECE 0.170→0.071). Typed decisions, runs offline, no API key, no waitlist. | 🆕 | 2026-09-21 |
| [yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab) | 10 | 3 | 요약 대기 · Independent measurements of typed-decision models: Jev (TypeSafe API) vs Laya (open weights), and a local-first cascade that matches Jev's accuracy at 1.8x the speed | 🆕 | 2026-09-20 |
| [daftAI2026/awesome-jev](https://github.com/daftAI2026/awesome-jev) | 9 | 5 | 요약 대기 · Curated TypeSafe Jev / System One GitHub projects, open-source alternatives, and Jev news | 🆕 | 2026-09-27 |
| [HexyeDEV/JevPR](https://github.com/HexyeDEV/JevPR) | 9 | 2 | 요약 대기 · PR Risk review, automated by Jev | 🆕 | 2026-09-25 |
| [imMamdouhaboammar/fable-jev](https://github.com/imMamdouhaboammar/fable-jev) | 9 | 9 | 요약 대기 · ⚡ Sub-100ms cognitive reflexes for autonomous coding agents. Powered by TypeSafe AI's Jev &amp; get-fable. | 🆕 | 2026-09-19 |
| [jeffonelson/jev-bigquery-cloudrun](https://github.com/jeffonelson/jev-bigquery-cloudrun) | 9 | 0 | 요약 대기 · Classify support tickets in BigQuery with Jev and Cloud Run | 🆕 | 2026-09-21 |
| [lucasmartins-ai/lcc](https://github.com/lucasmartins-ai/lcc) | 9 | 0 | 요약 대기 · Local Context Compiler (lcc): clean, dedupe and compact prompt context before it reaches the model, then report every block dropped, the cache tokens a pass invalidates and when pruning pays off. Runs offline with a local 1K decision model. MIT, no API key, zero telemetry. | 🆕 | 2026-09-24 |
| [poiuyjie/jev_project_context](https://github.com/poiuyjie/jev_project_context) | 9 | 0 | 요약 대기 · Evidence-first long-term experiment memory skill for AI coding agents, with optional Jev decision-model layers | 🆕 | 2026-09-22 |
| [saibimajdi/typesafeai-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk) | 9 | 0 | 요약 대기 · Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI. | 🆕 | 2026-09-26 |
| [vynnlee/jev-mail](https://github.com/vynnlee/jev-mail) | 9 | 1 | 요약 대기 · Autonomous 24/7 Zero-Inbox triage for Gmail powered by TypeSafe Jev System One | 🆕 | 2026-09-20 |
| [yohanargentina-oss/Foq](https://github.com/yohanargentina-oss/Foq) | 9 | 0 | 요약 대기 · ⚡ Foq — the FREE, local, open-source alternative to Jev. Typed System 1 decisions in ~25 ms — no waitlist, no cloud, no per-token cost. foq.fr | 🆕 | 2026-09-20 |
| [zeeshan8281/slo-router](https://github.com/zeeshan8281/slo-router) | 9 | 1 | 요약 대기 · SLO-aware LLM inference router with Jev decisions, live queue metrics, counterfactual evaluation, and reproducible latency/cost benchmarks | 🆕 | 2026-09-23 |
| [ZJU-REAL/CUA-JEV](https://github.com/ZJU-REAL/CUA-JEV) | 9 | 0 | 요약 대기 · Jev for Computer Use | 🆕 | 2026-09-24 |
| [comoc/jev-minesweeper](https://github.com/comoc/jev-minesweeper) | 8 | 1 | 요약 대기 · TypeSafe Jev (System One) にブラウザ上のマインスイーパーを解かせるデモ | 🆕 | 2026-09-20 |
| [Emenowicz/jev-sap-commerce](https://github.com/Emenowicz/jev-sap-commerce) | 8 | 0 | 요약 대기 · SAP Commerce extension using TypeSafe's Jev to moderate product reviews and suggest product categories and classification attribute values: dry runs on your own data first, an audit record per decision. Plus a Claude Code skill. | 🆕 | 2026-09-25 |
| [endomorphosis/JevOps](https://github.com/endomorphosis/JevOps) | 8 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-26 |
| [green-dalii/pi-shift-router](https://github.com/green-dalii/pi-shift-router) | 8 | 3 | 요약 대기 · Per-turn model routing for the Pi coding agent: a small judge picks the cheap or the strong tier for each message, with multi-model failover, task-level orchestration, and an optional decision-model judge (Jev) that answers with a calibrated probability instead of prose. | 🆕 | 2026-09-26 |
| [inanna-malick/jev-dsl](https://github.com/inanna-malick/jev-dsl) | 8 | 0 | 요약 대기 · Agent-first Haskell DSL for TypeSafe's Jev judgment model: typed packets, inferred types, answers under the same labels | 🆕 | 2026-09-18 |
| [joevidev/ui-generator-instinct-jev](https://github.com/joevidev/ui-generator-instinct-jev) | 8 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-18 |
| [kuhung/ask-jev](https://github.com/kuhung/ask-jev) | 8 | 1 | 요약 대기 · 是非选择问Jev | 🆕 | 2026-09-21 |
| [miniLV/Jev-Auto-Router](https://github.com/miniLV/Jev-Auto-Router) | 8 | 0 | 요약 대기 · Jev Auto Router (Jev Router): experimental per-call GPT model routing for Codex via TypeSafe Jev and a local Responses proxy, with independent task verification. | 🆕 | 2026-09-23 |
| [valentynkit/jev-plays-pokemon-red](https://github.com/valentynkit/jev-plays-pokemon-red) | 8 | 1 | 요약 대기 · Pokemon Red on PyBoy: code owns the route and the arithmetic, Jev picks at branches in about 100 ms, calibration measured instead of assumed | 🆕 | 2026-09-19 |
| [vercel-labs/jev-ai-sdk-form-router](https://github.com/vercel-labs/jev-ai-sdk-form-router) | 8 | 3 | 요약 대기 · Route form submissions to the right people with Jev and AI SDK. | 🆕 | 2026-09-22 |
| [zzhdbw/laya-Ascend](https://github.com/zzhdbw/laya-Ascend) | 8 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-23 |
| [AIGNLAI/ReflexRoute](https://github.com/AIGNLAI/ReflexRoute) | 7 | 0 | 요약 대기 · Fast zero-shot and few-shot LLM routing powered by Jev. | 🆕 | 2026-09-20 |
| [backant-io/jevelry](https://github.com/backant-io/jevelry) | 7 | 0 | 요약 대기 · Use Jev everywhere to make &amp; track decisions | 🆕 | 2026-09-23 |
| [docxology/daf-jev](https://github.com/docxology/daf-jev) | 7 | 1 | 요약 대기 · daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill | 🆕 | 2026-09-27 |
| [jaibhasin/jev-yt-time-saver](https://github.com/jaibhasin/jev-yt-time-saver) | 7 | 0 | 요약 대기 · A Chrome extension that covers distracting YouTube videos with Jev. Show anyway whenever you want. | 🆕 | 2026-09-23 |
| [kotoba-lang/typed-decisions](https://github.com/kotoba-lang/typed-decisions) | 7 | 0 | 요약 대기 · Jev-shaped typed-decision model (state + Choice/Score/Noul questions -&gt; calibrated probabilities, one pass) on ModernBERT / DeBERTa / LLaDA-MoE, with measured latency, accuracy, calibration and training cost | 🆕 | 2026-09-22 |
| [kyle-chalmers/typesafe-jev-incident-router](https://github.com/kyle-chalmers/typesafe-jev-incident-router) | 7 | 1 | 요약 대기 · Confidence-gated incident routing with TypeSafe Jev | 🆕 | 2026-09-21 |
| [muratcakmak/jev-guard](https://github.com/muratcakmak/jev-guard) | 7 | 0 | 요약 대기 · Probability-scored guardrails for Claude Code: deny rule-breaking edits and unasked-for deploys, route your docs into each prompt, and check the final answer against the turn's own evidence. | 🆕 | 2026-09-22 |
| [scienthoon/jev-ood-calibration](https://github.com/scienthoon/jev-ood-calibration) | 7 | 0 | 요약 대기 · Independent calibration test of TypeSafe's Jev on a task it cannot have seen: 900 rule-generated support tickets (choice / score / boolean) plus 3 public benchmarks via Vercel AI Gateway. Raw responses, ECE with noise floor, temperature refit, per-type sign of miscalibration. Reproducible for ~$0.06. | 🆕 | 2026-09-22 |
| [shimo4228/jev-skill-router](https://github.com/shimo4228/jev-skill-router) | 7 | 1 | 요약 대기 · Claude Code plugin: asks TypeSafe Jev which installed skill fits each prompt and logs the answer (shadow-first). A working reference for the skill-suggestion cookbook on Claude Code — the README records why it is unlikely to help a strong model as a router. | 🆕 | 2026-09-24 |
| [wondertwins/jev-benchmark](https://github.com/wondertwins/jev-benchmark) | 7 | 1 | 요약 대기 · Benchmarks and a playground for TypeSafe's Jev (System One) model: chess, and who-is-the-player-talking-to for speech-to-text game NPCs | 🆕 | 2026-09-16 |
| [akash-kamat/system-one-gemma](https://github.com/akash-kamat/system-one-gemma) | 6 | 2 | 요약 대기 · Open-source Jev-style System One decision model. Gemma 3 270M with a scoring head — fast, calibrated decisions in a single forward pass. No text generation. Inspired by TypeSafe.ai's Jev. | 🆕 | 2026-09-18 |
| [ansidium/jev-codex-bridge](https://github.com/ansidium/jev-codex-bridge) | 6 | 0 | 요약 대기 · Model and reasoning routing for Codex Desktop and CLI, with a Windows service and validated updates | 🆕 | 2026-09-26 |
| [Charlyhno-eng/jev-document-classification](https://github.com/Charlyhno-eng/jev-document-classification) | 6 | 0 | 요약 대기 · JEV Document Classification enables the rapid and cost-effective classification of text-based documents using AI, leveraging TypeSafe's "System One" model. | 🆕 | 2026-09-19 |
| [doronp/jevc](https://github.com/doronp/jevc) | 6 | 0 | 요약 대기 · Compile agent policy prose into deterministic verdict programs: narrow evidence questions for the model, the verdict computed in code. Install: npm i -g jev-compiler | 🆕 | 2026-09-22 |
| [eran-broder/jev-skills](https://github.com/eran-broder/jev-skills) | 6 | 1 | 요약 대기 · Skills without the context tax. Claude Code and Codex plugin: TypeSafe's Jev decides on every turn which skills the model sees. Always-on context cost: 0 tokens. | 🆕 | 2026-09-23 |
| [EugeneBoondock/jevsql](https://github.com/EugeneBoondock/jevsql) | 6 | 1 | 요약 대기 · SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded. | 🆕 | 2026-09-19 |
| [haseeb-heaven/jev-system-one](https://github.com/haseeb-heaven/jev-system-one) | 6 | 1 | 요약 대기 · A polished OpenAI + TypeSafe Jev terminal interface for answers with transparent decision reports | 🆕 | 2026-09-17 |
| [paramjeetn/jev-cookbook](https://github.com/paramjeetn/jev-cookbook) | 6 | 1 | 요약 대기 · The complete cookbook for Jev by TypeSafe AI — 120+ use cases, 10 runnable examples, 4 composition patterns, and first-principles theory for the world's first System One AI model. | 🆕 | 2026-09-22 |
| [benjamincanac/tia](https://github.com/benjamincanac/tia) | 5 | 0 | 요약 대기 · Triage Issue Agent for GitHub, built with Eve and Jev. | 🆕 | 2026-09-24 |
| [bensyverson/goodall](https://github.com/bensyverson/goodall) | 5 | 0 | 요약 대기 · A simple and extensible agent loop for Golang projects | 🆕 | 2026-09-18 |
| [bestagentkits/jev-skillful](https://github.com/bestagentkits/jev-skillful) | 5 | 3 | 요약 대기 · Per-prompt capability router for coding agents: resolves installed skills, MCP servers, agents and commands against your prompt via TypeSafe Jev, and measures whether the injection actually helps. | 🆕 | 2026-09-17 |
| [Foadsf/jev-for-engineers](https://github.com/Foadsf/jev-for-engineers) | 5 | 0 | 요약 대기 · Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies. | 🆕 | 2026-09-16 |
| [glamboyosa/docket](https://github.com/glamboyosa/docket) | 5 | 0 | 요약 대기 · A Go TUI that uses Jev to classify documents, assess sensitivity and urgency, and determine whether action is required. | 🆕 | 2026-09-20 |
| [h0j5bz0adh0-stack/jev-pilot](https://github.com/h0j5bz0adh0-stack/jev-pilot) | 5 | 0 | 요약 대기 · Fast System-1 Decision, Arbitration &amp; Safety Engine for Autonomous AI Agents (Powered by TypeSafe Jev) | 🆕 | 2026-09-23 |
| [khmuhtadin/n8n-nodes-jev-classification](https://github.com/khmuhtadin/n8n-nodes-jev-classification) | 5 | 1 | 요약 대기 · n8n community node for Jev by TypeSafe AI: classify, score and check text with calibrated probabilities. Parallel requests and multi-item batching. | 🆕 | 2026-09-26 |
| [Li-Evan/awesome-jev](https://github.com/Li-Evan/awesome-jev) | 5 | 3 | 요약 대기 · The most complete gallery of what people build with Jev, TypeSafe's System One model: 3,400+ projects, demos, and write-ups by scenario, each with its original link, image, and description. | 🆕 | 2026-09-27 |
| [mkotlikov/jev-grug](https://github.com/mkotlikov/jev-grug) | 5 | 1 | 요약 대기 · Helping JEV speak &lt;3 | 🆕 | 2026-09-18 |
| [nitoba/questions](https://github.com/nitoba/questions) | 5 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-22 |
| [npipeline/NPipeline](https://github.com/npipeline/NPipeline) | 5 | 1 | 요약 대기 · High-performance, streaming data pipelines for .NET | 🆕 | 2026-09-27 |
| [reinhard-z/vision-jev](https://github.com/reinhard-z/vision-jev) | 5 | 0 | 요약 대기 · An experiment with Jev, a fast classification model from TypeSafe, to see what it can do when decisions have to happen in real time. I built a browser game where it drives a car. You drag pedestrians, obstacles, or traffic signs onto the road. A vision model in your browser writes a short caption for each image, and Jev decides. | 🆕 | 2026-09-27 |
| [sumanmichael/jevlang](https://github.com/sumanmichael/jevlang) | 5 | 0 | 요약 대기 · The simplest way to write decision workflows in Python. Python with a smart if. | 🆕 | 2026-09-20 |
| [sumleo/prompt2jev](https://github.com/sumleo/prompt2jev) | 5 | 2 | 요약 대기 · Agent skill and CLI that turn natural language, an LLM prompt, or the code that runs one into a TypeSafe Jev decision: typed state, Choice/Score/Noul questions, and a runnable script | 🆕 | 2026-09-21 |
| [vizuh/sabi](https://github.com/vizuh/sabi) | 15 | 1 | 요약 대기 · Adaptive inference scheduling for AI agents — per-round model, effort and provider routing for coding harnesses: a Command Code mod or a local OpenAI-compatible proxy. | 🆕 | 2026-09-27 |
| [earlyaidopters/away-together-starter](https://github.com/earlyaidopters/away-together-starter) | 14 | 2 | 요약 대기 · Free Jev-inspired AI starter: visual guide, recorded travel demo, reusable prompt and small training recipe. | 🆕 | 2026-09-23 |
| [1jehuang/jev-pr-labeler](https://github.com/1jehuang/jev-pr-labeler) | 4 | 2 | 요약 대기 · Semantic GitHub PR labels using Jev's typed decisions, with conceptual scope instead of line counts | 🆕 | 2026-09-19 |
| [abhishekashokvkumar/jev-mcp-dispatcher](https://github.com/abhishekashokvkumar/jev-mcp-dispatcher) | 4 | 1 | 요약 대기 · Natural-language MCP tool dispatcher powered entirely by TypeSafe's Jev — no general-purpose LLM. Discovers a simple MCP server's tool signatures at runtime and uses Jev's typed primitives (Choice/Noul) to pick the right tool and extract its arguments straight out of the sentence. | 🆕 | 2026-09-18 |
| [alexei-led/pi-model-router](https://github.com/alexei-led/pi-model-router) | 4 | 0 | 요약 대기 · Independent Pi extension for four-tier model routing with optional privacy-gated Jev advice, deterministic baselines, budget controls, and safe fallbacks. | 🆕 | 2026-09-25 |
| [bcharleson/jev-gtm-cookbook](https://github.com/bcharleson/jev-gtm-cookbook) | 4 | 0 | 요약 대기 · 15 open-source outbound recipes on TypeSafe Jev. Score your LinkedIn network or any lead list against your ICP, catch job changes, triage replies. Local, zero dependencies. 16,711 connections scored for $0.73. | 🆕 | 2026-09-22 |
| [BeLazy167/typesafe-mod](https://github.com/BeLazy167/typesafe-mod) | 4 | 0 | 요약 대기 · Claude Code mod that routes decisions to TypeSafe's Jev model: ranks installed skills per prompt, and answers the agent's own this-or-that questions when confident. | 🆕 | 2026-09-17 |
| [blingdivinity/jevseek](https://github.com/blingdivinity/jevseek) | 4 | 0 | 요약 대기 · DeepSeek proposes the next token, TypeSafe's Jev chooses it: a decision model used as a sampler | 🆕 | 2026-09-22 |
| [carlosedm10/agi-jev-containment](https://github.com/carlosedm10/agi-jev-containment) | 4 | 2 | 요약 대기 · AGI JEV Detection — local AI agent monitor: chain-level malicious-agent detection (TypeSafe Jev + Sentinel), escalate-only L1–L5 containment, Neo4j forensics, AngryRobot dashboard. HackSpain 2026. | 🆕 | 2026-09-21 |
| [cobusgreyling/Jev](https://github.com/cobusgreyling/Jev) | 4 | 0 | 요약 대기 · Unofficial TypeSafe Jev showcase — System One decisions, not chat. | 🆕 | 2026-09-20 |
| [codaaiteam/jev-ai](https://github.com/codaaiteam/jev-ai) | 4 | 0 | 요약 대기 · Jev AI quickstart &amp; FAQ — TypeSafe AI's System One model. Try it free: jevtypesafeai.com | 🆕 | 2026-09-19 |
| [DanielKillenberger/jev-predict-skill](https://github.com/DanielKillenberger/jev-predict-skill) | 4 | 0 | 요약 대기 · Predict another skill's next closed decision with TypeSafe Jev — without running that skill. | 🆕 | 2026-09-16 |
| [DeepBlueDynamics/typesafe-arena](https://github.com/DeepBlueDynamics/typesafe-arena) | 4 | 0 | 요약 대기 · A playground for TypeSafeAI's Jev Model | 🆕 | 2026-09-17 |
| [deyna256/langchain-skill-router](https://github.com/deyna256/langchain-skill-router) | 4 | 4 | 요약 대기 · Per-turn skill selection for LangChain and deepagents agents: a fast judge picks the few skills a turn needs, so a catalog of hundreds stays out of the prompt. | 🆕 | 2026-09-24 |
| [Eurekaleo/awesome-jev-survey](https://github.com/Eurekaleo/awesome-jev-survey) | 4 | 0 | 요약 대기 · Awesome Jev: an evidence survey of Jev and Jev-like typed decision models — calibration, selective control and open implementations, with a searchable literature site. | 🆕 | 2026-09-24 |
| [fazlerocks/jev-adblock](https://github.com/fazlerocks/jev-adblock) | 4 | 0 | 요약 대기 · Open-source AI ad blocker for Chrome. No filter lists: TypeSafe AI's Jev model decides what is an ad. Bring your own key. | 🆕 | 2026-09-22 |
| [geilt/typesafe-cli](https://github.com/geilt/typesafe-cli) | 4 | 0 | 요약 대기 · CLI and agent skill for TypeSafe System One (Jev): typed Choice, Score, and Noul judgments. | 🆕 | 2026-09-17 |
| [GenieRobot/typesafe-ai-rails](https://github.com/GenieRobot/typesafe-ai-rails) | 4 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-16 |
| [gitchw/LCT](https://github.com/gitchw/LCT) | 4 | 0 | 요약 대기 · Jev-LCT: Open System-One Decision Engine with Free Calibrated Confidence from Recurrent Trajectories | 🆕 | 2026-09-26 |
| [Hawxy/TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net) | 4 | 0 | 요약 대기 · .NET SDK for the TypeSafe AI platform | 🆕 | 2026-09-19 |
| [iamvatsalpatel/tiershift](https://github.com/iamvatsalpatel/tiershift) | 4 | 1 | 요약 대기 · Shift every LLM call to the cheapest model that can handle it. Routing decided by TypeSafe Jev in ~180 ms. No training data. Policy in plain YAML. TypeScript and Python. | 🆕 | 2026-09-21 |
| [ickma2311/jev-baselines-eval](https://github.com/ickma2311/jev-baselines-eval) | 4 | 0 | 요약 대기 · Pre-registered independent eval of TypeSafe Jev against a nano-class LLM, a frontier LLM, and a supervised encoder (Banking77 + CLINC150 zero-shot) | 🆕 | 2026-09-25 |
| [instax-dutta/sysone-bench](https://github.com/instax-dutta/sysone-bench) | 4 | 1 | 요약 대기 · First independent head-to-head benchmark of System One decision models (Laya vs Jev) on byte-identical inputs | 🆕 | 2026-09-26 |
| [JabbaKadabra/SystemOneDotNet](https://github.com/JabbaKadabra/SystemOneDotNet) | 4 | 0 | 요약 대기 · .NET client for TypeSafe System One (Jev) — typed questions in, typed answers with probabilities and confidence out. No prompt engineering, no output parsing. | 🆕 | 2026-09-21 |
| [jon-devlapaz/tink-route](https://github.com/jon-devlapaz/tink-route) | 4 | 0 | 요약 대기 · Dynamic, confidence-aware Agent Skill routing with TypeSafe Jev and Tink | 🆕 | 2026-09-26 |
| [kaustav1996/reflex](https://github.com/kaustav1996/reflex) | 4 | 1 | 요약 대기 · A coding agent and personal assistant with System One reflexes (TypeSafe Jev) on top of the Pi coding agent | 🆕 | 2026-09-23 |
| [maker-KK/todo-jev](https://github.com/maker-KK/todo-jev) | 4 | 1 | 요약 대기 · ⚡ Ultra-fast, low-cost intelligent task classifier and 3-tier routing engine powered by TypeSafe Jev (System One) | 🆕 | 2026-09-18 |
| [mateonunez/jod](https://github.com/mateonunez/jod) | 4 | 0 | 요약 대기 · Semantic schemas over TypeSafe's Jev — validate the state locally, then project typed answers. | 🆕 | 2026-09-17 |
| [newuser7171/jev-gamepilot](https://github.com/newuser7171/jev-gamepilot) | 4 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-24 |
| [nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground) | 4 | 2 | 요약 대기 · Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI. | 🆕 | 2026-09-16 |
| [obetomuniz/auto-mode-for-paseo](https://github.com/obetomuniz/auto-mode-for-paseo) | 4 | 2 | 요약 대기 · Paseo plugin that routes each message to a persona on Codex, Claude, OpenCode, or any other installed provider. | 🆕 | 2026-09-26 |
| [pCwOrM/werr](https://github.com/pCwOrM/werr) | 4 | 0 | 요약 대기 · Zero-memory System-1 decision engine &amp; TypeSafe Jev wire-compatible runtime powered by Mandelbrot wave dynamics (The Zero-VRAM Gauntlet). | 🆕 | 2026-09-27 |
| [Protocol-Lattice/harness-router](https://github.com/Protocol-Lattice/harness-router) | 4 | 0 | 요약 대기 · Fast decision routing for agent harnesses — native MCP with Jev for tool selection and MCTS for multi-step decisions. | 🆕 | 2026-09-27 |
| [Query-farm/vgi-typesafe](https://github.com/Query-farm/vgi-typesafe) | 4 | 0 | 요약 대기 · A VGI worker exposing TypeSafe System One questions (choice, noul, score) to DuckDB/SQL as LATERAL-joinable table functions | 🆕 | 2026-09-19 |
| [RahulBalakavi/claude-code-jev](https://github.com/RahulBalakavi/claude-code-jev) | 4 | 2 | 요약 대기 · Experimental Jev permission gate for Claude Code via OpenRouter, with reproducible latency and cost benchmarks | 🆕 | 2026-09-19 |
| [rmosleydb/jev-smart-router](https://github.com/rmosleydb/jev-smart-router) | 4 | 2 | 요약 대기 · JEV Smart Router — a Databricks App that uses TypeSafe JEV to pick which model answers each message, then runs inference on the chosen Databricks Foundation Model API endpoint. | 🆕 | 2026-09-22 |
| [sarathi-aiml/jevsql](https://github.com/sarathi-aiml/jevsql) | 4 | 0 | 요약 대기 · Text-to-SQL where the model never writes SQL — typed, calibrated decisions (TypeSafe Jev) + code-assembled queries | 🆕 | 2026-09-21 |
| [satviksinha/jev-model-router](https://github.com/satviksinha/jev-model-router) | 4 | 0 | 요약 대기 · Model router for Claude Code using Jev | 🆕 | 2026-09-23 |
| [SeeAPI/awesome-jev-use-cases](https://github.com/SeeAPI/awesome-jev-use-cases) | 4 | 1 | 요약 대기 · Explore real-world use cases and projects built with TypeSafe AI's Jev: content moderation, AI agents, model routing, and semantic search. Curated by SeeAPI. | 🆕 | 2026-09-20 |
| [simota/tenbin](https://github.com/simota/tenbin) | 4 | 2 | 요약 대기 · MCP server and agent skill for the TypeSafe AI System One API (Jev): decompose a judgment into Choice / Score / Noul questions, lint them, measure on labelled data, and put calibrated thresholds in code | 🆕 | 2026-09-21 |
| [steven-shoemaker/hunch](https://github.com/steven-shoemaker/hunch) | 4 | 0 | 요약 대기 · Ask Jev over columns of data: closed-set questions, cached and joined back. | 🆕 | 2026-09-22 |
| [trietphan/jev-claw](https://github.com/trietphan/jev-claw) | 4 | 0 | 요약 대기 · Typed model routing for OpenClaw agents, powered by TypeSafe Jev | 🆕 | 2026-09-27 |
| [vibe-with-me-tools/n8n-nodes-jev](https://github.com/vibe-with-me-tools/n8n-nodes-jev) | 4 | 1 | 요약 대기 · Helper n8n community node for Jev by TypeSafe. Classify, route, and score text with questions you define, and get a probability for every answer so unsure items can go to review. | 🆕 | 2026-09-19 |
| [waynesutton/ask-jev-ai](https://github.com/waynesutton/ask-jev-ai) | 4 | 2 | 요약 대기 · A public wall where anyone asks a question in three to fifteen words and Jev, TypeSafe's judgment model, answers yes, no, or it depends in about 100 milliseconds. Every judged ask lands on the wall in realtime, with a running count toward one million, showing cost. | 🆕 | 2026-09-22 |
| [zcoder-run/rust-sysone](https://github.com/zcoder-run/rust-sysone) | 4 | 0 | 요약 대기 · System One TypeSafe AI Rust Client (unofficial) | 🆕 | 2026-09-21 |
| [24601/rh-guard](https://github.com/24601/rh-guard) | 3 | 0 | 요약 대기 · Reward-hack radar for coding agents: structural denies + TypeSafe Jev System One sidecar for Claude Code &amp; Cursor hooks | 🆕 | 2026-09-25 |
| [allenporter/home-assistant-laya](https://github.com/allenporter/home-assistant-laya) | 3 | 0 | 요약 대기 · Conversation agent based on Laya, a multilingual, non-autoregressive System 1 decision model. | 🆕 | 2026-09-27 |
| [AMMIROSOH/jev-2048-selenium](https://github.com/AMMIROSOH/jev-2048-selenium) | 3 | 1 | 요약 대기 · Selenium 2048 player powered by expectimax search and TypeSafe Jev, with portrait FFmpeg recording. | 🆕 | 2026-09-25 |
| [ArmanJR/Jev-Persian-Benchmark](https://github.com/ArmanJR/Jev-Persian-Benchmark) | 3 | 0 | 요약 대기 · A Quick Typesafe's Jev Evaluation on Persian | 🆕 | 2026-09-26 |
| [AstonyCat/jev-tab-grouper](https://github.com/AstonyCat/jev-tab-grouper) | 3 | 0 | 요약 대기 · One-click AI tab grouping for Chrome — Jev typed decisions (~1s, whole window) or any OpenAI-compatible LLM that invents its own group names. Featured in awesome-jev. | 🆕 | 2026-09-27 |
| [atarikcaliskan/jevball](https://github.com/atarikcaliskan/jevball) | 3 | 0 | 요약 대기 · 22 Jev models, one ball: a 3D football match where every player is its own Jev (TypeSafe AI System One) decision. Watch, or take over the number 9. | 🆕 | 2026-09-19 |
| [azterizm/jev-vs-sovereign-benchmark](https://github.com/azterizm/jev-vs-sovereign-benchmark) | 3 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-23 |
| [bojansandhaus/jev-decisions-hermes](https://github.com/bojansandhaus/jev-decisions-hermes) | 3 | 0 | 요약 대기 · Jev Decisions Plugin for Hermes (and other AI Agents): tool risk reviews, human approval recommendations, evidence checks, a local decision journal, local decision supervision, and learned corrections. | 🆕 | 2026-09-27 |
| [Chandler-Sun/chat2jev](https://github.com/Chandler-Sun/chat2jev) | 3 | 0 | 요약 대기 · Convert legacy chat completion API request to Typesafe jev API | 🆕 | 2026-09-23 |
| [Charlyhno-eng/jev-codex-pilot](https://github.com/Charlyhno-eng/jev-codex-pilot) | 3 | 0 | 요약 대기 · Smart Codex overlay with JEV model routing, context optimization &amp; Kanban automation. Reduce tokens, keep control | 🆕 | 2026-09-24 |
| [FirasSX914/Janus](https://github.com/FirasSX914/Janus) | 3 | 0 | 요약 대기 · Measure when to use Jev and other models on your data, then route accordingly. | 🆕 | 2026-09-18 |
| [flaviusapop/jev-router](https://github.com/flaviusapop/jev-router) | 3 | 1 | 요약 대기 · Routes each turn in Claude Code, Codex, Grok and opencode to the cheapest model and reasoning depth that can finish it, using TypeSafe Jev | 🆕 | 2026-09-18 |
| [fritzprix/systemone-lite](https://github.com/fritzprix/systemone-lite) | 3 | 0 | 요약 대기 · Toy local System One–style decision API (Jev-shaped). Not affiliated with TypeSafe. | 🆕 | 2026-09-26 |
| [Gerry9000/awesome-jev](https://github.com/Gerry9000/awesome-jev) | 3 | 0 | 요약 대기 · Curated directory of real-world tools, interactive video teardowns, empirical benchmarks, and fast System One decision models. | 🆕 | 2026-09-27 |
| [gholtzap/jev-codex-model-and-effort-router](https://github.com/gholtzap/jev-codex-model-and-effort-router) | 3 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-23 |
| [harrymunro/decision-first](https://github.com/harrymunro/decision-first) | 3 | 0 | 요약 대기 · Agent skill that spots bounded-judgment steps, tries a typed decision model (TypeSafe's Jev) first, and documents every attempt | 🆕 | 2026-09-18 |
| [ishantanu/jevmetrics](https://github.com/ishantanu/jevmetrics) | 3 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [islee23520/omo-jevlike-router](https://github.com/islee23520/omo-jevlike-router) | 3 | 0 | 요약 대기 · Jev-style one-pass skill router for OmO: shrink the skill catalog in your system prompt with one forward pass (frozen Qwen2.5-0.5B + jevlike head, fail-open extension) | 🆕 | 2026-09-18 |
| [JoacoMarc/jev-harness-router](https://github.com/JoacoMarc/jev-harness-router) | 3 | 1 | 요약 대기 · Per-turn router for agent harnesses: one 350ms Jev call picks the model tier, effort, tools and skill, behind a hard deadline with a regex fallback. Claude Agent SDK adapter included. | 🆕 | 2026-09-21 |
| [JustineDevs/meta-architect](https://github.com/JustineDevs/meta-architect) | 3 | 0 | 요약 대기 · Meta-Architect (MA) is a workflow layer that adds architecture, evidence, and release-gate discipline on top of Codex, MCP, and other 55+ AI coding agents — without replacing them. | 🆕 | 2026-09-27 |
| [laguagu/jev-skills](https://github.com/laguagu/jev-skills) | 3 | 1 | 요약 대기 · Practical agent skills and examples for building with Jev. API setup, routing, ranking, and evidence checks. | 🆕 | 2026-09-27 |
| [lexingtonhibiki/judgekit](https://github.com/lexingtonhibiki/judgekit) | 3 | 0 | 요약 대기 · Runtime judgment engine for System One (judge) models — YAML tasks, classify/score/route/verify, provider-agnostic, cost-accuracy benchmark (判官工具箱) | 🆕 | 2026-09-24 |
| [lgy1027/jevshield](https://github.com/lgy1027/jevshield) | 3 | 0 | 요약 대기 · Sub-100ms security gate for AI agent tool calls, powered by TypeSafe's Jev (System-1) decision model. Single-request Choice/Noul/Score evaluation, dual-factor blocking matrix, calibrated-confidence routing, fail-closed parsing, zero-config local fallback. LangChain-ready. | 🆕 | 2026-09-24 |
| [lomeshdutta/skill-router](https://github.com/lomeshdutta/skill-router) | 3 | 2 | 요약 대기 · Tell Claude Code which installed skill a session needs, using Jev (TypeSafe AI) for the decision and skills.sh for discovery. | 🆕 | 2026-09-18 |
| [Manavarya09/verdict](https://github.com/Manavarya09/verdict) | 3 | 1 | 요약 대기 · Small, fast, honest decision models. Open alternative to Jev: zero-shot, fit on your labels in seconds, calibrated with a coverage guarantee, Jev wire-compatible. | 🆕 | 2026-09-24 |
| [morcoan/JMP](https://github.com/morcoan/JMP) | 3 | 0 | 요약 대기 · JMP — Joint Model Participation. A local coding workspace where Jev routes actions and OpenAI, DeepSeek, or local models generate arguments. | 🆕 | 2026-09-20 |
| [n23eos/jev-skills](https://github.com/n23eos/jev-skills) | 3 | 0 | 요약 대기 · Jev-powered decision skills for Claude Code and Codex. Opt-in, advisory, fail-open. | 🆕 | 2026-09-22 |
| [n4ze3m/hmm](https://github.com/n4ze3m/hmm) | 3 | 1 | 요약 대기 · Open source JEV | 🆕 | 2026-09-20 |
| [OpeOginni/oc-plugins](https://github.com/OpeOginni/oc-plugins) | 3 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [raihankhan-rk/jevarena](https://github.com/raihankhan-rk/jevarena) | 3 | 0 | 요약 대기 · JevArena — two Jev agents duel in click-only browser games (Browser Use + TypeSafe Jev) | 🆕 | 2026-09-18 |
| [replynodes/jev-web-analyzer](https://github.com/replynodes/jev-web-analyzer) | 3 | 0 | 요약 대기 · See what Jev thinks about your SaaS website — powered by ReplyNodes web context and Vercel AI Gateway. | 🆕 | 2026-09-24 |
| [rsdkrasen/hermes-jev-router](https://github.com/rsdkrasen/hermes-jev-router) | 3 | 0 | 요약 대기 · TypeSafe/Jev router plugin for Hermes Agent — compact tool results, suppress duplicate tools, skip unnecessary main-model calls | 🆕 | 2026-09-19 |
| [samtay32/jev-system-architect](https://github.com/samtay32/jev-system-architect) | 3 | 0 | 요약 대기 · System-architecture skill for TypeSafe AI Jev/System One — find fuzzy semantic judgment and turn it into small Choice/Score/Noul primitives. | 🆕 | 2026-09-17 |
| [siroccomask/snake-jev](https://github.com/siroccomask/snake-jev) | 3 | 0 | 요약 대기 · Snake controlled by parallel Jev assessments, with one API call per game tick. | 🆕 | 2026-09-19 |
| [smithclay/dbt_jev](https://github.com/smithclay/dbt_jev) | 3 | 0 | 요약 대기 · use jev in dbt | 🆕 | 2026-09-23 |
| [sontakey/awesome-jev](https://github.com/sontakey/awesome-jev) | 3 | 2 | 요약 대기 · Unofficial list of insanely useful TypeSafe AI Jev / System One projects | 🆕 | 2026-09-27 |
| [symfony/ai-type-safe-platform](https://github.com/symfony/ai-type-safe-platform) | 3 | 0 | 요약 대기 · TypeSafe platform bridge for Symfony AI | 🆕 | 2026-09-25 |
| [tylerjharden/ailerix](https://github.com/tylerjharden/ailerix) | 3 | 0 | 요약 대기 · Type-safe model router. Jev (System One) banks each request to a typed catalog route. | 🆕 | 2026-09-20 |
| [walidboulanouar/jev-agent-kit](https://github.com/walidboulanouar/jev-agent-kit) | 3 | 0 | 요약 대기 · jevkit: fast typed decisions for agents. CLI and MCP tools (route, triage, guard, grep, rank, compact, judge) on TypeSafe Jev. Zero dependencies. | 🆕 | 2026-09-21 |
| [WebGrga/btc-jev-signal](https://github.com/WebGrga/btc-jev-signal) | 3 | 1 | 요약 대기 · Experimental multi-horizon BTC signal generator using TypeSafe Jev probabilities and Binance market data. | 🆕 | 2026-09-16 |
| [0xnairb/research_desk](https://github.com/0xnairb/research_desk) | 2 | 0 | 요약 대기 · TypeSafe Jev demonstration for new analyzation — experimenting with Jev for fast analysis of news and tickers | 🆕 | 2026-09-18 |
| [0xwhrari/grok-jev-guard](https://github.com/0xwhrari/grok-jev-guard) | 2 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-23 |
| [455-dIAO/jev-codex-router-skill](https://github.com/455-dIAO/jev-codex-router-skill) | 2 | 0 | 요약 대기 · Portable Codex Skill for Jev model and reasoning-effort routing, with safe installation and Chinese usage guides | 🆕 | 2026-09-22 |
| [AABBAASS1/jev-router](https://github.com/AABBAASS1/jev-router) | 2 | 1 | 요약 대기 · Route any task to the right AI agent in under 1 second using Jev (TypeSafe System One). Supports Claude, ChatGPT, Cursor, and Antigravity with auto-launch on macOS, Windows, and Linux. | 🆕 | 2026-09-21 |
| [AbdelStark/s1-rs](https://github.com/AbdelStark/s1-rs) | 2 | 0 | 요약 대기 · Typed System One layer for Rust (Choice/Score/Noul).  | 🆕 | 2026-09-16 |
| [AnthusAI/Jev-Calibration](https://github.com/AnthusAI/Jev-Calibration) | 2 | 2 | 요약 대기 · Does Jev's confidence mean what it says? Calibrating Jev (TypeSafe System One) with Platt scaling and isotonic regression. | 🆕 | 2026-09-19 |
| [asfarsadewa/human-compiler](https://github.com/asfarsadewa/human-compiler) | 2 | 0 | 요약 대기 · A compiler for human language. Paste text, get diagnostics. Measured by TypeSafe Jev. | 🆕 | 2026-09-17 |
| [az9713/jev-model-router](https://github.com/az9713/jev-model-router) | 2 | 0 | 요약 대기 · Jev (TypeSafe) model router on the Vercel AI Gateway | 🆕 | 2026-09-20 |
| [bgrablin/hermes-switchyard](https://github.com/bgrablin/hermes-switchyard) | 2 | 0 | 요약 대기 · Jev for Hermes: skill discovery, multi-skill advice, adaptive reasoning effort, model recommendations, typed assessments, session re-ranking, and computer use. | 🆕 | 2026-09-27 |
| [Bodila51/Jev-chooses-a-LLM](https://github.com/Bodila51/Jev-chooses-a-LLM) | 2 | 0 | 요약 대기 · Jev Router for Cursor - TypeSafe Jev picks COST/BALANCED/INTELLIGENCE, Cursor executes | 🆕 | 2026-09-20 |
| [codaaiteam/jev-mcp](https://github.com/codaaiteam/jev-mcp) | 2 | 1 | 요약 대기 · MCP server for Jev (TypeSafe AI's System One model) — give any agent typed, calibrated decisions: classify, score, check, gate risky tool calls. Try free: jevtypesafeai.com | 🆕 | 2026-09-22 |
| [Davidasx/pi-typesafe-approve](https://github.com/Davidasx/pi-typesafe-approve) | 2 | 0 | 요약 대기 · Pi extension: auto-approve routine Bash commands with a System One (Jev) decision model, escalate the rest to a human | 🆕 | 2026-09-26 |
| [ddfeyes/jev-mode](https://github.com/ddfeyes/jev-mode) | 2 | 0 | 요약 대기 · I kept watching coding agents burn context on decisions that aren't hard - triage 400 tickets, tag 600 files, route to one of six teams. jev-mode moves those verdicts to a typed-judgment model. I A/B'd it: 78% fewer tokens, 16x less work-attributable input, accuracy 96.1% vs 93.7%. Python, no deps, MIT. | 🆕 | 2026-09-18 |
| [E-FL/typesafe-as-a-judge](https://github.com/E-FL/typesafe-as-a-judge) | 2 | 0 | 요약 대기 · Unofficial community MCP plugin for Codex and Claude Code using TypeSafe Jev for bounded routing, ranking, extraction, verification, and escalation | 🆕 | 2026-09-21 |
| [gazelle93/decision-models-under-pressure](https://github.com/gazelle93/decision-models-under-pressure) | 2 | 0 | 요약 대기 · Seven decision models, measured as the candidate list grows, the option order changes, and the wrong answers stop being obvious. | 🆕 | 2026-09-25 |
| [getexcited/stepwarden](https://github.com/getexcited/stepwarden) | 2 | 0 | 요약 대기 · Every tool call your agent makes, checked before it runs. A Claude Code plugin that uses TypeSafe AI's Jev to verify each pending tool call against the session plan, then allows it, asks you, or blocks it. Proof of concept | 🆕 | 2026-09-18 |
| [grishahq/decisionbridge](https://github.com/grishahq/decisionbridge) | 2 | 0 | 요약 대기 · A Jev-inspired decision interface for existing LLMs. Explicit choices, scores, calibration, and review thresholds. | 🆕 | 2026-09-17 |
| [gualican/jev-model-router](https://github.com/gualican/jev-model-router) | 2 | 1 | 요약 대기 · Routes prompts to the right Claude tier (Haiku/Sonnet/Opus) using TypeSafe's Jev model | 🆕 | 2026-09-21 |
| [haibt163/jev](https://github.com/haibt163/jev) | 2 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-19 |
| [hemanth/jev-chess](https://github.com/hemanth/jev-chess) | 2 | 0 | 요약 대기 · Chess moves, evaluations, persona opponents, and game classification with TypeSafe AI System One | 🆕 | 2026-09-21 |
| [hugo-alves/jev-router-playground](https://github.com/hugo-alves/jev-router-playground) | 2 | 0 | 요약 대기 · Interactive playground for testing Jev model-routing decisions against OpenRouter models | 🆕 | 2026-09-18 |
| [ibrahemid/git-jev-stage](https://github.com/ibrahemid/git-jev-stage) | 2 | 0 | 요약 대기 · Select Git changes for staging with a plain-language description. | 🆕 | 2026-09-20 |
| [ikashana/jev-dingtalk](https://github.com/ikashana/jev-dingtalk) | 2 | 0 | 요약 대기 · 钉钉信息 Jev 分拣器（jev-dingtalk）：把钉钉邮件与聊天分拣成 Now / Today / Queue / Ignore 清单——谁在等回复、谁需要人看一眼。dws 取数、Jev 分类、报告本地渲染，可直接作为 Agent 技能使用。\| DingTalk mail &amp; chat triage with Jev. | 🆕 | 2026-09-23 |
| [innocentdiaz/s1_ruby](https://github.com/innocentdiaz/s1_ruby) | 2 | 0 | 요약 대기 · Makes S1-model 'measurement' (and the collapse that follows it) a Ruby primitive. | 🆕 | 2026-09-24 |
| [itscloud0/codex-jev-native-router](https://github.com/itscloud0/codex-jev-native-router) | 2 | 0 | 요약 대기 · Experimental native Codex Desktop and CLI model routing with Jev and a configurable allowlist | 🆕 | 2026-09-26 |
| [JedimEmO/typesafe-client](https://github.com/JedimEmO/typesafe-client) | 2 | 0 | 요약 대기 · Unofficial typed async Rust client for the TypeSafe System One API | 🆕 | 2026-09-16 |
| [Jessie-QingYu/jev-in-the-wild](https://github.com/Jessie-QingYu/jev-in-the-wild) | 2 | 2 | 요약 대기 · Real-world Jev use cases, open-source projects, benchmarks and criticism — what people actually build with TypeSafe AI's Jev, and where it fails. Machine-readable, updated daily. | 🆕 | 2026-09-27 |
| [jevaidev/jev-ai-radar](https://github.com/jevaidev/jev-ai-radar) | 2 | 0 | 요약 대기 · Daily curated Jev AI projects, System One community models, and real-world use cases. | 🆕 | 2026-09-27 |
| [JimmyWesley/rlcd-gateway](https://github.com/JimmyWesley/rlcd-gateway) | 2 | 1 | 요약 대기 · Self-hosted gateway for LLMs and decision models. Claude Code, Codex, OpenCode and any OpenAI/Anthropic SDK app reach any provider (OpenRouter, Groq, Ollama…) with context pruning; Jev and open-rlcd System One decisions get audit and calibration. Live dashboard, single Go binary. | 🆕 | 2026-09-24 |
| [JohnDotOwl/awesome-jev](https://github.com/JohnDotOwl/awesome-jev) | 2 | 2 | 요약 대기 · A curated list of projects built on Jev, TypeSafe AI's System One model. | 🆕 | 2026-09-23 |
| [Justmalhar/awesome-jev-apps](https://github.com/Justmalhar/awesome-jev-apps) | 2 | 0 | 요약 대기 · Awesome Collection of apps built with Jev - a System One model | 🆕 | 2026-09-19 |
| [Kunyanli230/jev-clean](https://github.com/Kunyanli230/jev-clean) | 2 | 1 | 요약 대기 · decision-first data cleaning system powered by Jev | 🆕 | 2026-09-23 |
| [Larkspur-Wang/Jev_steer_or_queue](https://github.com/Larkspur-Wang/Jev_steer_or_queue) | 2 | 0 | 요약 대기 · Let TypeSafe Jev decide whether a message you send mid-turn should steer, queue, or interrupt your coding agent. Claude Code plugin; Codex CLI in testing. | 🆕 | 2026-09-24 |
| [lazniak/jevskill](https://github.com/lazniak/jevskill) | 2 | 1 | 요약 대기 · Teach your coding agent to stop burning context. Jev (System One) via OpenRouter or TypeSafe: 325ms, 0.000013 USD per decision. A/B tested 99.3% fewer input tokens with accuracy up. Ships a reversible reduce and a ledger that learns when Jev pays off. | 🆕 | 2026-09-21 |
| [liuhongrui087-art/jev-routed-agent](https://github.com/liuhongrui087-art/jev-routed-agent) | 2 | 0 | 요약 대기 · Multi-step reasoning agent built on LangChain v1 + Jev + Flask + Ollama, with tool calling and local RAG Q&amp;A. | 🆕 | 2026-09-22 |
| [lucianfialho/jev-model-router](https://github.com/lucianfialho/jev-model-router) | 2 | 0 | 요약 대기 · Cost-optimized OpenRouter model router using TypeSafe's Jev, with a live full-catalog scorer instead of a hardcoded model list | 🆕 | 2026-09-19 |
| [m0rphtail/triagedy](https://github.com/m0rphtail/triagedy) | 2 | 1 | 요약 대기 · Alert triage as a UNIX filter: JSONL security alerts in, typed decisions out. Runs on TypeSafe Jev or a local model; policy routing stays in code. | 🆕 | 2026-09-22 |
| [Mandrilsquad1441/jev-model-router](https://github.com/Mandrilsquad1441/jev-model-router) | 2 | 0 | 요약 대기 · Pick the best AI model and reasoning effort for any task in ~1s. Plugin for Claude Code, Claude Desktop and Codex, powered by TypeSafe's Jev decision model and live OpenRouter pricing. Balance intelligence, speed and cost, or choose your priority. | 🆕 | 2026-09-18 |
| [marcreichel/laya-php](https://github.com/marcreichel/laya-php) | 2 | 0 | 요약 대기 · Classify text in PHP without an LLM bill: typed decisions in 100+ languages, self-hosted. Laravel-ready SDK for Laya, a Jev AI alternative. | 🆕 | 2026-09-27 |
| [mingleiw/jev-oncall](https://github.com/mingleiw/jev-oncall) | 2 | 0 | 요약 대기 · Incident triage on TypeSafe Jev — the model judges, plain code decides. Routing on probability distributions with a human-review middle band and fail-open defaults. | 🆕 | 2026-09-27 |
| [minorun365/jev-cloud-quiz](https://github.com/minorun365/jev-cloud-quiz) | 2 | 0 | 요약 대기 · 三大クラウドの機能名を、TypeSafe AI の System One モデル Jev が確率つきで判定するデモ | 🆕 | 2026-09-20 |
| [mzainzulifqar/jev-php-sdk](https://github.com/mzainzulifqar/jev-php-sdk) | 2 | 1 | 요약 대기 · PHP SDK for TypeSafe's Jev: send text and typed questions, get typed answers with calibrated confidence. PHP 8.1+, works with any PSR-18 client, Laravel 8–13. | 🆕 | 2026-09-18 |
| [n3ndor/n8n-nodes-typesafe-jev](https://github.com/n3ndor/n8n-nodes-typesafe-jev) | 2 | 1 | 요약 대기 · n8n community node for TypeSafe Jev structured AI decisions | 🆕 | 2026-09-23 |
| [ojusave/beat-jev](https://github.com/ojusave/beat-jev) | 2 | 1 | 요약 대기 · A penalty shootout powered by Render Workflows, TypeSafe Jev, and Render Postgres. Python and TypeScript examples. | 🆕 | 2026-09-21 |
| [onlyjq04/jev-agent-hooks](https://github.com/onlyjq04/jev-agent-hooks) | 2 | 1 | 요약 대기 · TypeSafe Jev hooks for Claude Code, Codex and pi: per-turn skill suggestion and subagent model routing | 🆕 | 2026-09-23 |
| [Partysun/jigor](https://github.com/Partysun/jigor) | 2 | 0 | 요약 대기 ·  zero-shot classifier models gateway and runner | 🆕 | 2026-09-26 |
| [PistachioAIHQ/jev-synergy-screening](https://github.com/PistachioAIHQ/jev-synergy-screening) | 2 | 1 | 요약 대기 · Jev (TypeSafe System One) × ASReview SYNERGY abstract screening demo — Choice/Noul vs gold labels | 🆕 | 2026-09-16 |
| [pZacca/askjev](https://github.com/pZacca/askjev) | 2 | 0 | 요약 대기 · Unofficial MCP server for Jev (Typesafe AI) | 🆕 | 2026-09-18 |
| [q3learners/jev-demofast](https://github.com/q3learners/jev-demofast) | 2 | 0 | 요약 대기 · One sentence in, a product demo video out. Jev drives your real product in a browser; an index built from your source code guides it. | 🆕 | 2026-09-24 |
| [rahulthakore16/n8n-nodes-jev](https://github.com/rahulthakore16/n8n-nodes-jev) | 2 | 0 | 요약 대기 · Jev by TypeSafe AI for n8n: typed decisions, probabilities, and confidence-aware workflows | 🆕 | 2026-09-20 |
| [rishi-raj-jain/pg-redact](https://github.com/rishi-raj-jain/pg-redact) | 2 | 0 | 요약 대기 · Content-aware PII redaction enforced in Neon Postgres: a redact() SQL function reveals or seals each field by your role. | 🆕 | 2026-09-19 |
| [robokrunch/jev-physical-ai](https://github.com/robokrunch/jev-physical-ai) | 2 | 0 | 요약 대기 · Putting TypeSafe's Jev to work on robots, fleets, and edge hardware — real measured numbers, honestly caveated. | 🆕 | 2026-09-20 |
| [roprgm/tierjev](https://github.com/roprgm/tierjev) | 2 | 1 | 요약 대기 · Pick a set, state a criterion, let Jev sort it into tiers. | 🆕 | 2026-09-23 |
| [rusharlabs/house-party-protocol](https://github.com/rusharlabs/house-party-protocol) | 2 | 2 | 요약 대기 · Evidence-first harness for coding agents across Claude Code and Codex CLI: cross-model review, governed loops, isolated lanes, deterministic evaluation, typed decisions with Jev measured before they are trusted, verified delivery. | 🆕 | 2026-09-27 |
| [sameerkhan24/decidekit](https://github.com/sameerkhan24/decidekit) | 2 | 0 | 요약 대기 · Typed, confidence-aware AI decisions for TypeScript and Python with Jev, OpenRouter, safe fallbacks, and per-call cost tracking. | 🆕 | 2026-09-19 |
| [suidouble/let-jev-speak](https://github.com/suidouble/let-jev-speak) | 2 | 0 | 요약 대기 · Experiment to trick Typesafe’s Jev, aka “the language model that won’t talk” into actually talking.  | 🆕 | 2026-09-20 |
| [thesyedammar/tracky](https://github.com/thesyedammar/tracky) | 2 | 0 | 요약 대기 · Ctrl+F that finds by meaning - highlights the sentence you meant, with receipts. Extension + local helper + playground (early scaffold). | 🆕 | 2026-09-27 |
| [tomek7667/cbjev](https://github.com/tomek7667/cbjev) | 2 | 0 | 요약 대기 · Typed decisions (choice/score/noul) from one encoder pass - faster, better-calibrated successor to Laya, Jev wire compatible | 🆕 | 2026-09-24 |
| [ttlequals0/MinusPodJev](https://github.com/ttlequals0/MinusPodJev) | 2 | 0 | 요약 대기 · MinusPod Jev Proxy | 🆕 | 2026-09-27 |
| [tylerjharden/harden-jev-decides](https://github.com/tylerjharden/harden-jev-decides) | 2 | 0 | 요약 대기 · JEV picks which stream idea becomes the live MVP. TypeSafe System One decision board. | 🆕 | 2026-09-16 |
| [ussyverse/hermes-jev-router](https://github.com/ussyverse/hermes-jev-router) | 2 | 0 | 요약 대기 · Experimental Hermes plugin: Jev-assisted model routing plans with budget and capability constraints. API access pending. | 🆕 | 2026-09-16 |
| [wustep/jev-playground](https://github.com/wustep/jev-playground) | 2 | 1 | 요약 대기 · Can a System One model steer music? Jev picks the plan (enums only); code renders sheet, audio and MIDI. | 🆕 | 2026-09-26 |
| [yairshy/decido](https://github.com/yairshy/decido) | 2 | 0 | 요약 대기 · Probabilistic decisions for Python. Use Jev or bring your own provider; crawl with Playwright. | 🆕 | 2026-09-17 |
| [yutkat/github-star-organizer-jev](https://github.com/yutkat/github-star-organizer-jev) | 2 | 0 | 요약 대기 · Python tool that classifies GitHub stars into existing GitHub Lists using TypeSafe Jev | 🆕 | 2026-09-18 |
| [Z761293629/pi-jev-helm](https://github.com/Z761293629/pi-jev-helm) | 2 | 0 | 요약 대기 · Pi extension that uses Jev task classification (via OpenRouter) to route each run to explicitly configured models with fail-open policy. Public Preview. | 🆕 | 2026-09-21 |
| [ZHUBoer/ego-jev](https://github.com/ZHUBoer/ego-jev) | 2 | 0 | 요약 대기 · Complete browser tasks with Ego Lite and actively call Jev for semantic target selection, filtering, ranking, classification and text evidence judgments. | 🆕 | 2026-09-19 |
| [zkjoie/jevbus](https://github.com/zkjoie/jevbus) | 2 | 1 | 요약 대기 · A streaming event bus whose routing, subscription and consumption are decided by a probabilistic judge. The reference judge is TypeSafe AI's Jev (System One) model: send it a payload and a set of typed questions, get back calibrated probabilities instead of prose. | 🆕 | 2026-09-21 |
| [Zuhair-01/laya-windows](https://github.com/Zuhair-01/laya-windows) | 2 | 0 | 요약 대기 · Windows port of Laya typed-decision AI (ONNX Runtime + DirectML) — Core ML/Apple Neural Engine alternative with first-class Arabic support. No text generation, no hallucination, runs on any DX12 GPU. | 🆕 | 2026-09-22 |
| [0xShin0221/openpoke-meets-jev](https://github.com/0xShin0221/openpoke-meets-jev) | 1 | 0 | 요약 대기 · Open source implementation of Poke  | 🆕 | 2026-09-20 |
| [4esv/jev-eval](https://github.com/4esv/jev-eval) | 1 | 0 | 요약 대기 · Benchmark TypeSafe Jev against any OpenRouter model on your own data. | 🆕 | 2026-09-23 |
| [afurm/typesafe-sdk-ruby](https://github.com/afurm/typesafe-sdk-ruby) | 1 | 0 | 요약 대기 · Unofficial Ruby SDK for the TypeSafe AI API (Jev model) - typed questions, retries, and typed errors. Community port of typesafe-sdk-js. | 🆕 | 2026-09-21 |
| [akanksha-rajhans-ai/diffguard](https://github.com/akanksha-rajhans-ai/diffguard) | 1 | 0 | 요약 대기 · Probabilistic pull-request risk triage using Jev and deterministic review policy. | 🆕 | 2026-09-24 |
| [allenporter/home-assistant-typesafe](https://github.com/allenporter/home-assistant-typesafe) | 1 | 2 | 요약 대기 · Home Assistant conversation integration powered by the Jev / TypeSafe AI API for fast, structured intent routing and device control | 🆕 | 2026-09-21 |
| [aniruddh-krovvidi/switchboard](https://github.com/aniruddh-krovvidi/switchboard) | 1 | 0 | 요약 대기 · Guardrail + model router for LLM gateways on TypeSafe's Jev (System One model), with an independent accuracy/calibration/latency evaluation. Stdlib Python. | 🆕 | 2026-09-20 |
| [ARCJ137442/jev-switch](https://github.com/ARCJ137442/jev-switch) | 1 | 0 | 요약 대기 · A fast, local-first gateway for aggregating and routing TypeSafe Jev model endpoints \| 一款快速、本地优先的网关，用于聚合与路由 TypeSafe Jev 模型入口 | 🆕 | 2026-09-27 |
| [Ashadeepa/typesafe-showcase](https://github.com/Ashadeepa/typesafe-showcase) | 1 | 0 | 요약 대기 · Next.js UI showing off TypeSafe's System One model (Jev) — parallel Noul judgments and a Choice-based citation checker, deployable to Vercel | 🆕 | 2026-09-22 |
| [assistant-ui/jevia](https://github.com/assistant-ui/jevia) | 1 | 0 | 요약 대기 · outcome-aware model routing for coding agents with deterministic cache powered by Jev | 🆕 | 2026-09-27 |
| [baize7815/jev-mcp-open-source](https://github.com/baize7815/jev-mcp-open-source) | 1 | 0 | 요약 대기 · Self-hosted Jev MCP on Cloudflare Workers with intent routing, retrieval reranking and batch judgments | 🆕 | 2026-09-22 |
| [bojansandhaus/jev-home-assistant-sentinel](https://github.com/bojansandhaus/jev-home-assistant-sentinel) | 1 | 0 | 요약 대기 · A safety boundary for AI-assisted Home Assistant decisions, with explicit policy checks and deterministic state verification. | 🆕 | 2026-09-26 |
| [carldaws/hunch-ts](https://github.com/carldaws/hunch-ts) | 1 | 0 | 요약 대기 · Probabilistic control flow for TypeScript - powered by TypeSafe's Jev | 🆕 | 2026-09-25 |
| [cbetz/extremely-specific-council](https://github.com/cbetz/extremely-specific-council) | 1 | 0 | 요약 대기 · Twelve members. Zero qualifications. A playful TypeSafe AI council with animated votes, inspectable decisions, and shareable verdicts. | 🆕 | 2026-09-17 |
| [CMaintz/jev-triage](https://github.com/CMaintz/jev-triage) | 1 | 1 | 요약 대기 · Near-free GitHub issue triage powered by TypeSafe AI's Jev - typed, confidence-gated labels that escalate only the uncertain cases. | 🆕 | 2026-09-24 |
| [codaaiteam/jev-typesafe-ai](https://github.com/codaaiteam/jev-typesafe-ai) | 1 | 1 | 요약 대기 · Unofficial developer notes &amp; examples for Jev, TypeSafe AI's System One model. Try it free: jevtypesafeai.com | 🆕 | 2026-09-19 |
| [copyleftdev/braess-router](https://github.com/copyleftdev/braess-router) | 1 | 1 | 요약 대기 · Bounded semantic routing with Jev and Poise. Rust, single-server, alpha. | 🆕 | 2026-09-27 |
| [copyleftdev/jevlin](https://github.com/copyleftdev/jevlin) | 1 | 1 | 요약 대기 · Zig SDK for TypeSafe AI's Jev decision API. Typed classification, scoring and yes/no probabilities with bounded buffers, retries and deadlines. | 🆕 | 2026-09-26 |
| [creativoma/here-we-go-jev](https://github.com/creativoma/here-we-go-jev) | 1 | 0 | 요약 대기 · Local playground and test bench for TypeSafe's Jev System One model: typed questions, calibrated-probability answers, and side-by-side comparison with an LLM baseline. | 🆕 | 2026-09-26 |
| [cvsgireesh/jev-usher](https://github.com/cvsgireesh/jev-usher) | 1 | 0 | 요약 대기 · The doorman for Claude’s context window. JEV-powered model routing and recoverable context filtering for Claude Code. | 🆕 | 2026-09-20 |
| [d0nj/opencode-smart-reasoning](https://github.com/d0nj/opencode-smart-reasoning) | 1 | 0 | 요약 대기 · OpenCode plugin that routes per-request reasoning effort for agents via Jev (TypeSafe SystemOne) — cheap prompts stay cheap, hard ones get full reasoning | 🆕 | 2026-09-22 |
| [ddlaws0n/jevportfolio](https://github.com/ddlaws0n/jevportfolio) | 1 | 0 | 요약 대기 · 1,000 synthetic SaaS accounts, 6,000 constrained judgments from TypeSafe's Jev, and ordinary TypeScript deciding who needs a human today. TanStack Start on Bun. | 🆕 | 2026-09-20 |
| [de-niji/jev-hermes](https://github.com/de-niji/jev-hermes) | 1 | 0 | 요약 대기 · Jev for Hermes Agent: cheap typed decisions via TypeSafe Jev on OpenRouter. Routes turns, gates risky commands, compacts tool history, triages mail. | 🆕 | 2026-09-24 |
| [DejaAI2/JevNext](https://github.com/DejaAI2/JevNext) | 1 | 0 | 요약 대기 · Decision model on a Qwen3-0.6B backbone with LoRA: fused decision endpoint (/v1/systemone) + OpenAI-compatible chat completions with thinking, SSE streaming and vLLM-style sampling, running on Apple Silicon MPS. | 🆕 | 2026-09-23 |
| [Dililianxice/jev-inner-speech-bci](https://github.com/Dililianxice/jev-inner-speech-bci) | 1 | 0 | 요약 대기 · A reproducible benchmark connecting Jev semantic priors with intracortical inner-speech BCI decoding. | 🆕 | 2026-09-21 |
| [dingw530/playwright-jev](https://github.com/dingw530/playwright-jev) | 1 | 0 | 요약 대기 · 基于 Jev + playwright-cli 的自然语言 Web E2E 测试工具：Jev 负责决策，Playwright 负责执行，代码负责断言与安全边界。Goal-driven web E2E testing with Jev + playwright-cli: bounded AI decisions, real browser execution, and deterministic assertions. | 🆕 | 2026-09-23 |
| [dog-last/awesome-jev](https://github.com/dog-last/awesome-jev) | 1 | 1 | 요약 대기 · A curated guide to Jev, TypeSafe AI's System One decision model — selection advice, API-verified cookbooks, independent evaluations, and 100+ community. 中英双语 | 🆕 | 2026-09-20 |
| [ekil1100/pi-auto](https://github.com/ekil1100/pi-auto) | 1 | 0 | 요약 대기 · Automatically select thinking effort for each task useing Jev | 🆕 | 2026-09-24 |
| [EnesDemir143/jev-laya-benchmark](https://github.com/EnesDemir143/jev-laya-benchmark) | 1 | 0 | 요약 대기 · Local benchmark comparing TypeSafe Jev and Laya-MLX for structured issue classification | 🆕 | 2026-09-22 |
| [epiphany-dynamics/port-cleanup](https://github.com/epiphany-dynamics/port-cleanup) | 1 | 1 | 요약 대기 · A Jev-powered native macOS utility for evidence-backed, human-confirmed cleanup of stale listening ports. | 🆕 | 2026-09-19 |
| [ericmjl/seems-laya](https://github.com/ericmjl/seems-laya) | 1 | 0 | 요약 대기 · Seems: Python, plus judgment, answered locally by Laya. A variant of kavehmz/seems-lang with the open-weight decision model swapped in for TypeSafe Jev. | 🆕 | 2026-09-25 |
| [fabricioctelles/modelsystem](https://github.com/fabricioctelles/modelsystem) | 1 | 0 | 요약 대기 · Curated catalog of System One / Decision Models — contributions for modelsystem.one | 🆕 | 2026-09-19 |
| [FlyPig23/Codex_ChatGPT_JEV_Switch](https://github.com/FlyPig23/Codex_ChatGPT_JEV_Switch) | 1 | 0 | 요약 대기 · Fork of codex-with-chatgpt: TypeSafe Jev + deterministic rules decide when Codex hands work to ChatGPT web (plan, debug, review) and when it switches back. 用 Jev 自动决定 Codex 与网页版 ChatGPT 何时切换。 | 🆕 | 2026-09-24 |
| [forestwas/gmail-jev](https://github.com/forestwas/gmail-jev) | 1 | 0 | 요약 대기 · Gmail inbox triage with TypeSafe Jev — workflow labels, archive decisions, and optional live/backfill workers. | 🆕 | 2026-09-22 |
| [FrancyJGLisboa/decision-system-forge](https://github.com/FrancyJGLisboa/decision-system-forge) | 1 | 1 | 요약 대기 · Compile documents, code, SOPs, and resolved cases into evidence-backed JEV judgments, legal actions, guarded adapters, and measured decision systems. | 🆕 | 2026-09-25 |
| [gentslava/pr-scout](https://github.com/gentslava/pr-scout) | 1 | 0 | 요약 대기 · Triage every open pull request of a GitHub repo in minutes: Jev typed questions, local Ollama descriptions, git test-merge, take / consider / skip board | 🆕 | 2026-09-27 |
| [gmaxxxie/jev-router](https://github.com/gmaxxxie/jev-router) | 1 | 0 | 요약 대기 · Per-prompt model routing for Pi, driven by Jev (TypeSafe System One) | 🆕 | 2026-09-19 |
| [hemanth/jevish](https://github.com/hemanth/jevish) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [hemanth/pkg-gate](https://github.com/hemanth/pkg-gate) | 1 | 0 | 요약 대기 · Pre-install security gate for npm lifecycle scripts using TypeSafe System One. | 🆕 | 2026-09-21 |
| [hemanth/tc39-atlas](https://github.com/hemanth/tc39-atlas) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-17 |
| [hoangngochuong24947-gif/jev-figure-router](https://github.com/hoangngochuong24947-gif/jev-figure-router) | 1 | 0 | 요약 대기 · Universal Figure &amp; Diagram Router for AI Agents powered by TypeSafe Jev / Jeb System-1 | 🆕 | 2026-09-20 |
| [huzeyfe07/jev-route](https://github.com/huzeyfe07/jev-route) | 1 | 0 | 요약 대기 · Async, typed intent &amp; tool routing for Python agents: Jev decides, a confidence gate stops weak decisions before they reach a privileged tool. | 🆕 | 2026-09-26 |
| [ibrahimcesar/jevdev](https://github.com/ibrahimcesar/jevdev) | 1 | 0 | 요약 대기 · Jev code harness | 🆕 | 2026-09-24 |
| [JGalego/Jevs-Garage](https://github.com/JGalego/Jevs-Garage) | 1 | 1 | 요약 대기 · A garage full of tiny experiments for building critical systems with System One &amp; Jev 🔧🧠⚡ | 🆕 | 2026-09-19 |
| [JH3lou/GridCue](https://github.com/JH3lou/GridCue) | 1 | 0 | 요약 대기 · Ask a dense data grid in plain language; get a previewed, undoable view change. Headless TypeScript, React, TanStack Table, shadcn. MIT. | 🆕 | 2026-09-25 |
| [jqueryscript/awesome-jev](https://github.com/jqueryscript/awesome-jev) | 1 | 1 | 요약 대기 · A curated list of TypeSafe Jev resources, SDKs, agents, MCP servers, integrations, benchmarks, examples, and open System One implementations. | 🆕 | 2026-09-27 |
| [juancamiloqhz/roverlab](https://github.com/juancamiloqhz/roverlab) | 1 | 0 | 요약 대기 · A 3D planetary rover sandbox for experimenting with autonomous decisions using TypeSafe AI. | 🆕 | 2026-09-23 |
| [jyatesdotdev/jev-logtriage](https://github.com/jyatesdotdev/jev-logtriage) | 1 | 0 | 요약 대기 · Jev decides whether a batch of logs is worth acting on. Typed questions, confidence gates, nothing executed. | 🆕 | 2026-09-27 |
| [lambertsj/beatjev](https://github.com/lambertsj/beatjev) | 1 | 0 | 요약 대기 · try to beat jev | 🆕 | 2026-09-17 |
| [LamplighterPaul/forma-system1-experiment](https://github.com/LamplighterPaul/forma-system1-experiment) | 1 | 0 | 요약 대기 · Experimental design harness: a small decision model (Jev) picks the design in about a second, a traditional LLM (Luna) only writes the words. With and without it. | 🆕 | 2026-09-18 |
| [mabodx/awesome-jev](https://github.com/mabodx/awesome-jev) | 1 | 1 | 요약 대기 · A community directory of open-source projects built on Jev, TypeSafe AI's System One model. Live index: jevusers.com | 🆕 | 2026-09-20 |
| [Madikhan33/jev_codex](https://github.com/Madikhan33/jev_codex) | 1 | 0 | 요약 대기 · Context-aware routing for Codex: classify prompts, choose agent profiles, coordinate subagents, and verify results. | 🆕 | 2026-09-22 |
| [mameli/jev-vs-luna](https://github.com/mameli/jev-vs-luna) | 1 | 0 | 요약 대기 · Reproducible Jev vs Luna review-classification benchmark with measured accuracy, latency, and costs. | 🆕 | 2026-09-18 |
| [marcus/frost](https://github.com/marcus/frost) | 1 | 0 | 요약 대기 · A flexible and configurable CLI model router using TypeSafe Jev. | 🆕 | 2026-09-17 |
| [MattiooFR/mcp-server-jev](https://github.com/MattiooFR/mcp-server-jev) | 1 | 0 | 요약 대기 · Typed AI decisions for Codex, Claude and any MCP client, powered by TypeSafe Jev. Classify, score and evaluate with one generic tool. | 🆕 | 2026-09-23 |
| [minhgv/jev-mcp](https://github.com/minhgv/jev-mcp) | 1 | 0 | 요약 대기 · TypeSafe Jev MCP decision layer for coding agents and CI | 🆕 | 2026-09-18 |
| [miounet11/jevcode](https://github.com/miounet11/jevcode) | 1 | 0 | 요약 대기 · JevCode — Jev (TypeSafe System One) 技术解决方案与最佳实践 · https://www.jevcode.ai | 🆕 | 2026-09-26 |
| [mkeco/Cerebellum-2B](https://github.com/mkeco/Cerebellum-2B) | 1 | 0 | 요약 대기 · Non-Autoregressive AI Agent Decision Model. Open-source SOTA alternative to TypeSafe Jev. O(1) Tool Routing &amp; DOM Automation on Qwen3.5-2B . | 🆕 | 2026-09-19 |
| [muse0509/jev-preflight](https://github.com/muse0509/jev-preflight) | 1 | 0 | 요약 대기 · A bounded Jev risk check for Claude Code: eight risk axes, one request, one optional reinspection. | 🆕 | 2026-09-20 |
| [nadeemcite/jev-crash-course](https://github.com/nadeemcite/jev-crash-course) | 1 | 0 | 요약 대기 · An 11-level crash course on Jev, TypeSafe AI's System One decision model — runnable examples against the real API, plus a capstone project with unit tests and evals. Works with any LLM provider via LiteLLM. | 🆕 | 2026-09-22 |
| [ndolinschi/pulselane](https://github.com/ndolinschi/pulselane) | 1 | 0 | 요약 대기 · PulseLane — clinic triage decisions via TypeSafe Jev | 🆕 | 2026-09-17 |
| [ndolinschi/swarmrouter](https://github.com/ndolinschi/swarmrouter) | 1 | 0 | 요약 대기 · Route tasks to research/code/browser/support/writer agents via TypeSafe Jev | 🆕 | 2026-09-17 |
| [neo4j-field/jev-graphrag](https://github.com/neo4j-field/jev-graphrag) | 1 | 0 | 요약 대기 · Small demos + use-case backlog: TypeSafe AI's Jev as a calibrated decision layer for GraphRAG pipelines on Neo4j. | 🆕 | 2026-09-21 |
| [nikkoxgonzales/jev-certify](https://github.com/nikkoxgonzales/jev-certify) | 1 | 0 | 요약 대기 · Finite-sample guarantees for Jev (TypeSafe's System One). Conformal risk control turns calibrated probabilities into certified routing thresholds; prediction-powered inference audits them. 2,412 decisions on CLINC150 for $0.23 — including the shift and prevalence cases where the guarantee breaks. | 🆕 | 2026-09-21 |
| [onlyoneaman/jev-eval](https://github.com/onlyoneaman/jev-eval) | 1 | 0 | 요약 대기 · TypeSafe's Jev vs gpt-5.4-mini and gpt-5.6-luna on four public classification sets: cases, per-item answers, scoring, charts | 🆕 | 2026-09-18 |
| [osrim/readwise-jev-classifier](https://github.com/osrim/readwise-jev-classifier) | 1 | 0 | 요약 대기 · Proof of concept: auto-tagging and triage of Readwise Reader articles using TypeSafe AI's Jev | 🆕 | 2026-09-21 |
| [PAI-CUHK/MEDJEV](https://github.com/PAI-CUHK/MEDJEV) | 1 | 0 | 요약 대기 · Independent JEV-inspired System One-style typed decision research for clinical evidence, biomedical NLP, calibrated probabilities, and sleep signals | 🆕 | 2026-09-23 |
| [pambrose/laya-server](https://github.com/pambrose/laya-server) | 1 | 0 | 요약 대기 · A proof of concept implementation of TypeSafe's Jev API, backed by local Laya checkpoints. | 🆕 | 2026-09-21 |
| [Pasblinn/jev-lab](https://github.com/Pasblinn/jev-lab) | 1 | 0 | 요약 대기 · Open lab: Jev (TypeSafe System One) routing in front of Claude Code - measured bugs, patch, and a hard fallback with alerts | 🆕 | 2026-09-22 |
| [pc418/jev-calculator](https://github.com/pc418/jev-calculator) | 1 | 0 | 요약 대기 · It's the result, correct. *probably. - A probabilistic AI calculator powered by Jev. | 🆕 | 2026-09-23 |
| [pjmenon45/Jev-IOT](https://github.com/pjmenon45/Jev-IOT) | 1 | 0 | 요약 대기 · In a 10-million smart meter deployment, using generative LLMs (like GPT-4 or Claude) is economically impossible  and operationally impractical due to token generation latency. Enter Jev - zero output token fees and ultra-low input cost ($0.042/M tokens), you achieve massive scale at negligible compute expense. | 🆕 | 2026-09-22 |
| [poupar-ai/musaranho-cli](https://github.com/poupar-ai/musaranho-cli) | 1 | 0 | 요약 대기 · Typed System 1 decision engine in development. Designed for multilingual, non-autoregressive batch inference. Self-hosted Rust CLI, token-protected API and embedded Swagger. | 🆕 | 2026-09-24 |
| [q93304989-bit/jev-lab](https://github.com/q93304989-bit/jev-lab) | 1 | 0 | 요약 대기 · 最简 Jev 调用演示器：单页分类器，把请求 JSON、概率分布、confidence、耗时与 token 都摊开给你看 | 🆕 | 2026-09-20 |
| [RadRebelSam/awesome-jev](https://github.com/RadRebelSam/awesome-jev) | 1 | 0 | 요약 대기 · A crawler-maintained directory of projects built on Jev, TypeSafe AI's System One model. Daily GitHub + npm sweep, human-merged. | 🆕 | 2026-09-27 |
| [RavenValentin/TypeSafe.Jev](https://github.com/RavenValentin/TypeSafe.Jev) | 1 | 0 | 요약 대기 · Typed AI decisions for .NET: ask Jev (TypeSafe AI System One) yes/no, choice and score questions and get a C# enum with calibrated probabilities back. | 🆕 | 2026-09-26 |
| [reoring/fern](https://github.com/reoring/fern) | 1 | 0 | 요약 대기 · 4B Jev-compatible decision model distilled from DeepSeek V4 Flash | 🆕 | 2026-09-26 |
| [Resadan-dev/jev-zork](https://github.com/Resadan-dev/jev-zork) | 1 | 0 | 요약 대기 · Jev (TypeSafe System One) plays Zork I: one Choice per move over Jericho's valid actions, with its confidence on display. French dashboard. | 🆕 | 2026-09-21 |
| [saembit/jeff](https://github.com/saembit/jeff) | 1 | 0 | 요약 대기 · Jev-routed multi-model orchestration for Claude Code: cheap work to cheap models, hard work to strong ones, verified. | 🆕 | 2026-09-22 |
| [Sanoy24/jevpolicy](https://github.com/Sanoy24/jevpolicy) | 1 | 0 | 요약 대기 · JevPolicy is an open-source TypeScript decision runtime that turns probabilistic judgments from Jev, accessed through Vercel AI Gateway, into versioned, deterministic, replayable, observable application decisions. | 🆕 | 2026-09-24 |
| [sathariels/jevtriage](https://github.com/sathariels/jevtriage) | 1 | 0 | 요약 대기 · GitHub Action + CLI: triage PRs with TypeSafe Jev (ready / needs review / risky) with confidence gates and jevcheck-friendly contracts. | 🆕 | 2026-09-21 |
| [seahsky/kelpie](https://github.com/seahsky/kelpie) | 1 | 0 | 요약 대기 · Delegation policy for Claude Code, cut down to what its own benchmark supports: two pinned roles, and a skill that argues against delegating by default. | 🆕 | 2026-09-23 |
| [sedthh/xjevboost](https://github.com/sedthh/xjevboost) | 1 | 0 | 요약 대기 · Add as much tabular data as you want to Jev models using adaptive ensembles that learn to query only the rows and columns needed. | 🆕 | 2026-09-25 |
| [Shakibuzzaman3104/claude-jev-funnel](https://github.com/Shakibuzzaman3104/claude-jev-funnel) | 1 | 0 | 요약 대기 · Claude Code plugin + zero-dependency CLI for TypeSafe's Jev: judge items in bulk with calibrated yes/no, pick-one and rubric answers; handle the confident ends in code, review only the uncertain band. | 🆕 | 2026-09-25 |
| [sherajdev/jev-research](https://github.com/sherajdev/jev-research) | 1 | 0 | 요약 대기 · Practical guide to using TypeSafe Jev with Herdr and Claude, Codex, Hermes, and browser agents. | 🆕 | 2026-09-18 |
| [shivam2003-dev/typesafe-triage-guard](https://github.com/shivam2003-dev/typesafe-triage-guard) | 1 | 0 | 요약 대기 · Three composable judgment pipelines on TypeSafe's Jev: support-ticket triage, observability alert triage, and a deploy-risk gate. | 🆕 | 2026-09-17 |
| [shkumbinhasani/typedecide](https://github.com/shkumbinhasani/typedecide) | 1 | 0 | 요약 대기 · Provider-agnostic TypeScript SDK for decision models — typed answers with calibrated uncertainty, instead of text you have to parse. Pre-release, not on npm yet. | 🆕 | 2026-09-19 |
| [SupratikB23/JevCanvas](https://github.com/SupratikB23/JevCanvas) | 1 | 0 | 요약 대기 · Jev-driven interfaces with on-demand diffusion visuals and constrained rendering. | 🆕 | 2026-09-21 |
| [Teagar/jev-project-fit-review](https://github.com/Teagar/jev-project-fit-review) | 1 | 0 | 요약 대기 · Review independente sobre a adequação do Jev a produtos e desenvolvimento multiagente | 🆕 | 2026-09-27 |
| [TheEleventhAvatar/triage-bot](https://github.com/TheEleventhAvatar/triage-bot) | 1 | 0 | 요약 대기 · Real-time support triage + response bot      Jev routes the ticket to a specialist agent (general / account / billing / technical) and decides whether a human should take it instead — all as typed data, no text to parse. Cerebras then drafts the reply using whichever agent Jev picked. The script times both calls separately so you can see the split. | 🆕 | 2026-09-19 |
| [thomasbrueggemann/jeffrey](https://github.com/thomasbrueggemann/jeffrey) | 1 | 0 | 요약 대기 · A coding agent CLI where Jev (TypeSafe System One) or Laya decide what to do next and a configurable LLM does the work. | 🆕 | 2026-09-20 |
| [TimMikeladze/JevLang](https://github.com/TimMikeladze/JevLang) | 1 | 0 | 요약 대기 · A policy engine for LLM decisions: declare routes, gates and actions once in TypeScript or Python, and every decision comes validated, explainable, replayable and audited. | 🆕 | 2026-09-25 |
| [tinyhumansai/tinydecisionmodels](https://github.com/tinyhumansai/tinydecisionmodels) | 1 | 1 | 요약 대기 · Integrate decision models (Jev, OpenJev, Sage) in Rust | 🆕 | 2026-09-27 |
| [vbcherepanov/jev-symfony-bundle](https://github.com/vbcherepanov/jev-symfony-bundle) | 1 | 0 | 요약 대기 · Unofficial Symfony bundle for TypeSafe AI's Jev: typed client, validator constraints, Messenger, Workflow guards and profiler panel | 🆕 | 2026-09-21 |
| [viniciusfinger/jev-intent-classification](https://github.com/viniciusfinger/jev-intent-classification) | 1 | 0 | 요약 대기 · JEV intent classification using Python | 🆕 | 2026-09-27 |
| [vkpdeveloper/mrsecret](https://github.com/vkpdeveloper/mrsecret) | 1 | 0 | 요약 대기 · Mr. Secret — blurs secrets &amp; PII on any page using TypeSafe AI Jev | 🆕 | 2026-09-17 |
| [VyetGokyra/jev-codex-factory](https://github.com/VyetGokyra/jev-codex-factory) | 1 | 0 | 요약 대기 · Route smarter. Code in parallel. Resume what breaks. A Jev-powered multi-agent factory for Codex. | 🆕 | 2026-09-27 |
| [wotai-dev/typesafe-jev-tools](https://github.com/wotai-dev/typesafe-jev-tools) | 1 | 0 | 요약 대기 · A Claude Code hook that asks whether the decision you are writing needs a model at all. Includes a measured 149-row comparison of TypeSafe Jev against Claude Haiku 4.5. | 🆕 | 2026-09-22 |
| [xergioalex/jev-lab](https://github.com/xergioalex/jev-lab) | 1 | 0 | 요약 대기 · A hands-on lab for Jev, TypeSafe's System One model — AI decision trees, guardrails and routing with typed answers instead of text | 🆕 | 2026-09-19 |
| [yzbcs/Should-I-Jev](https://github.com/yzbcs/Should-I-Jev) | 1 | 0 | 요약 대기 · Find the LLM calls you should move to JEV — scan logs &amp; code for decision-shaped calls, price the migration, calibrate decision models, generate the migration PR. Zero deps, fully local. | 🆕 | 2026-09-22 |
| [Zahrannnn/zcode-jev](https://github.com/Zahrannnn/zcode-jev) | 1 | 0 | 요약 대기 · Typed judgment layer for coding agents — gates from PRD to ship. Jev-ready, provider-agnostic. | 🆕 | 2026-09-16 |
| [david-cermak/jevlike-esp32](https://github.com/david-cermak/jevlike-esp32) | 3 | 0 | 요약 대기 · Jevlike edge router on ESP32 | 🆕 | 2026-09-25 |
| [NullPo-jp/PocketJev](https://github.com/NullPo-jp/PocketJev) | 2 | 0 | 요약 대기 · On-device iPhone visual decision tool using MLX and Qwen3-VL direct option logits. | 🆕 | 2026-09-17 |
| [4nt0ineB/jev-from-java](https://github.com/4nt0ineB/jev-from-java) | 0 | 0 | 요약 대기 · Calling TypeSafe's Jev from Java with a hand-typed API contract. Small app to demo triage, zero-shot classification of commands from MASSIVE's 60 intents. And live batch classification with confidence-based routing. | 🆕 | 2026-09-25 |
| [4nt0ineB/typed-decision-bench](https://github.com/4nt0ineB/typed-decision-bench) | 0 | 0 | 요약 대기 · Bench of typed decision models: Jev vs OpenJev vs Laya, small local LLMs and cheap hosted LLMs on the same zero-shot classification tasks, in English and French. | 🆕 | 2026-09-27 |
| [4piu/liametahi](https://github.com/4piu/liametahi) | 0 | 0 | 요약 대기 · Mailbox cleanup CLI with AI — trash/move/label/route mail using Jev or chat model | 🆕 | 2026-09-25 |
| [54k41/DarkForest](https://github.com/54k41/DarkForest) | 0 | 0 | 요약 대기 · Chatbot web em um único arquivo HTML com roteamento de modelos via Jev (modos Pro e Lite) e RAG vetorial com embeddings do Google Gemini | 🆕 | 2026-09-25 |
| [Abhyodaya1/Intel_Engine](https://github.com/Abhyodaya1/Intel_Engine) | 0 | 0 | 요약 대기 · Due-diligence engine that uses Jev for probabilistic link routing and Groq for LLM teardowns, cutting token usage by fetching only high-value pages. | 🆕 | 2026-09-24 |
| [agneym/emoji-search](https://github.com/agneym/emoji-search) | 0 | 0 | 요약 대기 · Semantic emoji search - keyword + embedding recall, reranked by TypeSafe Jev. Built with TanStack Start, TanStack Query, and Emoji Mart. | 🆕 | 2026-09-26 |
| [alexei-led/claude-router](https://github.com/alexei-led/claude-router) | 0 | 0 | 요약 대기 · Claude Code plugin that auto-picks the right model for each turn — micro, low, medium, or high tier — using Jev routing. | 🆕 | 2026-09-25 |
| [andyholst/hermes-typesafe-jev](https://github.com/andyholst/hermes-typesafe-jev) | 0 | 1 | 요약 대기 · Documentation hub for Hermes Agent + Jev (TypeSafe System One Model) integration | 🆕 | 2026-09-20 |
| [Ascurse/typed-judge-kit](https://github.com/Ascurse/typed-judge-kit) | 0 | 0 | 요약 대기 · Typed questions to a model, verdict in code, thresholds from your labels | 🆕 | 2026-09-22 |
| [automaticdai/jev-semantic-cost-map](https://github.com/automaticdai/jev-semantic-cost-map) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [Bernardbyy/JevExperiment](https://github.com/Bernardbyy/JevExperiment) | 0 | 0 | 요약 대기 · Jev vs LLMs: benchmarking a decision model against small LLMs on accuracy, latency and cost. | 🆕 | 2026-09-24 |
| [bhushankinge/jev-laya-classification-bench](https://github.com/bhushankinge/jev-laya-classification-bench) | 0 | 0 | 요약 대기 · Typed-decision models (Jev API, Laya 421M) vs Qwen3.5-35B on 12,000 real U.S. federal IT solicitations, graded against actual reseller quotes: accuracy, calibration, Wilson-bounded auto-accept cutoffs, cost. | 🆕 | 2026-09-24 |
| [boriscardano/herdr-jev-router](https://github.com/boriscardano/herdr-jev-router) | 0 | 0 | 요약 대기 · Advisory Jev routing for child agents on stock Herdr: Jev picks the harness, model and effort from the task and your remaining subscription capacity. | 🆕 | 2026-09-24 |
| [brianluby/momus-review](https://github.com/brianluby/momus-review) | 0 | 0 | 요약 대기 · Fast, calibrated, staged code &amp; security review (momus) | 🆕 | 2026-09-27 |
| [bskkimm/JevSceneMiner](https://github.com/bskkimm/JevSceneMiner) | 0 | 0 | 요약 대기 · Mine driving scenes from logs with Jev: scene text in, scenarios with probabilities and timestamps out. | 🆕 | 2026-09-27 |
| [carllippert/jev-router](https://github.com/carllippert/jev-router) | 0 | 0 | 요약 대기 · Express with no routes. TypeSafe Jev picks which handler runs. | 🆕 | 2026-09-18 |
| [Chetax/jev-ecommerce-reviews](https://github.com/Chetax/jev-ecommerce-reviews) | 0 | 0 | 요약 대기 · E-commerce review classification with TypeSafe's Jev: Google Sheets → typed decisions (topic, sentiment, defect/refund flags) with calibrated confidence → BI dashboard. Includes accuracy, calibration and cost benchmarks vs. an LLM. | 🆕 | 2026-09-27 |
| [chinmay29/evidence-scope](https://github.com/chinmay29/evidence-scope) | 0 | 0 | 요약 대기 · Version-aware evidence decisions for RAG assistants using Jev, with inspectable routing, bounded recovery, and reproducible evaluation. | 🆕 | 2026-09-26 |
| [Clawbuilders/web-qa-jev-agent](https://github.com/Clawbuilders/web-qa-jev-agent) | 0 | 0 | 요약 대기 · Crawls a site with Cloudflare Browser Rendering, triages with typesafe/jev, confirms with vision, files deduped GitHub Issues | 🆕 | 2026-09-18 |
| [codaaiteam/jev-skill-router](https://github.com/codaaiteam/jev-skill-router) | 0 | 0 | 요약 대기 · Route each task to the one tool an agent should call, with Jev — with confidence. Single-file, no build. Use free: jevtypesafeai.com/tools/jev-skill-router | 🆕 | 2026-09-24 |
| [CodyQin/zh-decision-bench](https://github.com/CodyQin/zh-decision-bench) | 0 | 0 | 요약 대기 · First Chinese-language calibration benchmark for Jev-class 'System One' decision models: dataset (CC BY 4.0), 5-model eval incl. Jev &amp; NeoHorse, temperature refit, robustness tests | 🆕 | 2026-09-27 |
| [criguex/jev-ci-triage](https://github.com/criguex/jev-ci-triage) | 0 | 0 | 요약 대기 · Classify every failing CI test as regression, flaky, environment, test-data or unknown. Rules first, Jev (TypeSafe) for the ambiguous ones. Never reruns, never masks. | 🆕 | 2026-09-26 |
| [CSlawyer1985/dsh-jev-router](https://github.com/CSlawyer1985/dsh-jev-router) | 0 | 0 | 요약 대기 · DSH 插件 · 用 Jev（TypeSafe System One）判定推理强度：默认只切思考强度（零缓存代价），自动模型路由出厂关闭 + 硬门禁 + 成本闸。作者 chenshi.ai | 🆕 | 2026-09-25 |
| [damian87x/jev-pi-model-router](https://github.com/damian87x/jev-pi-model-router) | 0 | 0 | 요약 대기 · pi extension: TypeSafe Jev picks the model for each turn, only from models pi can use | 🆕 | 2026-09-26 |
| [dandacompany/jev-gatekeeper](https://github.com/dandacompany/jev-gatekeeper) | 0 | 0 | 요약 대기 · Local judge first, cloud Jev second: a privacy-first request router (llama.cpp + TypeSafe Jev) | 🆕 | 2026-09-25 |
| [danieljohnmorris/omp-jev-router](https://github.com/danieljohnmorris/omp-jev-router) | 0 | 0 | 요약 대기 · OMP extension that routes each turn to a model, and each delegated task to an agent, using a Jev capability classification plus live provider quota | 🆕 | 2026-09-25 |
| [danieluszta/jev-company-problem-scoring](https://github.com/danieluszta/jev-company-problem-scoring) | 0 | 0 | 요약 대기 · Agent handoff: score companies against a clear problem using relevant evidence and compact shared-state Jev requests, with explicit cost accounting. | 🆕 | 2026-09-23 |
| [dansya-arsana/jev-harness](https://github.com/dansya-arsana/jev-harness) | 0 | 0 | 요약 대기 · Jev (TypeSafe) as the decision layer for Claude Code: permission gate, skill routing, conditional instructions, effort-tiered subagents, context packs. Tested PoC with evals. | 🆕 | 2026-09-26 |
| [darrenli6/jev-demo](https://github.com/darrenli6/jev-demo) | 0 | 0 | 요약 대기 · JEV Studio is a small Next.js evaluation lab for turning natural-language input into structured signals with the Typesafe SystemOne API. | 🆕 | 2026-09-26 |
| [david96182/cribrix](https://github.com/david96182/cribrix) | 0 | 0 | 요약 대기 · A precision-first RAG orchestrator: filters before it generates, verifies before it answers. | 🆕 | 2026-09-25 |
| [erendikmenn/jev-llm-router-benchmark](https://github.com/erendikmenn/jev-llm-router-benchmark) | 0 | 0 | 요약 대기 · Benchmark-driven Jev router and judge for cost-aware, reliable LLM coding workflows | 🆕 | 2026-09-22 |
| [EthanThatOneKid/zocomputer-jev](https://github.com/EthanThatOneKid/zocomputer-jev) | 0 | 0 | 요약 대기 · A Zo skill for situational script writing and execution using Vercel AI Gateway and TypeSafe AI Jev. | 🆕 | 2026-09-19 |
| [EtienneLescot/jev-router](https://github.com/EtienneLescot/jev-router) | 0 | 0 | 요약 대기 · Typed judgments in, control flow out: two Jev calls route a support ticket to an agent, then pick its model tier and reasoning depth. | 🆕 | 2026-09-23 |
| [FirasB9/jev-community-ops](https://github.com/FirasB9/jev-community-ops) | 0 | 0 | 요약 대기 · Community triage for a developer community, built on TypeSafe's Jev: typed questions, confidence-gated routing, weekly digest. | 🆕 | 2026-09-27 |
| [Foshowithit/jev-rcos-study](https://github.com/Foshowithit/jev-rcos-study) | 0 | 0 | 요약 대기 · Can TypeSafe Jev solve RCOS capability routing at scale? Falsification-first experiment, verdict KEEP EXPERIMENTAL (ranker not brain), full receipts. | 🆕 | 2026-09-19 |
| [gbesse/airbyte-jev](https://github.com/gbesse/airbyte-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for airbyte | 🆕 | 2026-09-26 |
| [gbesse/argo-jev](https://github.com/gbesse/argo-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for argo | 🆕 | 2026-09-26 |
| [gbesse/dagster-jev](https://github.com/gbesse/dagster-jev) | 0 | 0 | 요약 대기 · Dagster asset checks with TypeSafe Jev semantic decisions | 🆕 | 2026-09-26 |
| [gbesse/decision-migrate](https://github.com/gbesse/decision-migrate) | 0 | 0 | 요약 대기 · Reviewable Dify classifier migrations to Jev, with preserved branches and baseline comparisons | 🆕 | 2026-09-21 |
| [gbesse/flink-jev](https://github.com/gbesse/flink-jev) | 0 | 0 | 요약 대기 · Flink SQL ML_PREDICT provider for TypeSafe Jev semantic decisions | 🆕 | 2026-09-26 |
| [gbesse/jev-lifecycle](https://github.com/gbesse/jev-lifecycle) | 0 | 0 | 요약 대기 · Five production tools for the lifecycle of Jev and compatible typed decision models. | 🆕 | 2026-09-25 |
| [gbesse/jev-workflow](https://github.com/gbesse/jev-workflow) | 0 | 0 | 요약 대기 · Decision contracts, adversarial testing, tracing, stability, and privacy controls for TypeSafe Jev | 🆕 | 2026-09-25 |
| [gbesse/kestra-jev](https://github.com/gbesse/kestra-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for kestra | 🆕 | 2026-09-26 |
| [gbesse/mautic-jev-intent](https://github.com/gbesse/mautic-jev-intent) | 0 | 0 | 요약 대기 · Jev intent classification for Mautic form submissions | 🆕 | 2026-09-27 |
| [gbesse/metabase-jev](https://github.com/gbesse/metabase-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for metabase | 🆕 | 2026-09-26 |
| [gbesse/nifi-jev](https://github.com/gbesse/nifi-jev) | 0 | 0 | 요약 대기 · Apache NiFi processor for TypeSafe Jev semantic routing with uncertainty lane | 🆕 | 2026-09-26 |
| [gbesse/pulsar-jev](https://github.com/gbesse/pulsar-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for pulsar | 🆕 | 2026-09-26 |
| [gbesse/redpanda-connect-jev](https://github.com/gbesse/redpanda-connect-jev) | 0 | 0 | 요약 대기 · Typed Jev decisions in Redpanda Connect pipelines | 🆕 | 2026-09-27 |
| [gbesse/seatunnel-jev](https://github.com/gbesse/seatunnel-jev) | 0 | 0 | 요약 대기 · Community TypeSafe Jev semantic decision integration for seatunnel | 🆕 | 2026-09-26 |
| [gbesse/spark-jev](https://github.com/gbesse/spark-jev) | 0 | 0 | 요약 대기 · PySpark SQL UDF for TypeSafe Jev semantic decisions | 🆕 | 2026-09-26 |
| [ghubnab99/jev-enterprise-decision-fabric](https://github.com/ghubnab99/jev-enterprise-decision-fabric) | 0 | 0 | 요약 대기 · Architecture for running many semantic decisions through one validated path, with a labelled 111-case benchmark comparing TypeSafe Jev against a Claude baseline, and a dashboard for inspecting any single decision. Experimental, not production. | 🆕 | 2026-09-20 |
| [godxue1/Jev_in_the_wild](https://github.com/godxue1/Jev_in_the_wild) | 0 | 0 | 요약 대기 · First survey and analysis of Jev's application ecosystem. 首个 Jev 应用生态综述与分析论文 | 🆕 | 2026-09-26 |
| [goodboybeau/system-one-playground](https://github.com/goodboybeau/system-one-playground) | 0 | 0 | 요약 대기 · Run the new wave of decision models (Laya, Decider, Kev, Jev) side by side on your Mac. Structured input in, calibrated probabilities out, with honest accuracy, calibration, latency and memory numbers. | 🆕 | 2026-09-27 |
| [hakantapanyigit/jevascript](https://github.com/hakantapanyigit/jevascript) | 0 | 0 | 요약 대기 · Semantic values for deterministic TypeScript: is, score and choose as ordinary values, backed by a decision model. | 🆕 | 2026-09-23 |
| [hyspacex/jev-router](https://github.com/hyspacex/jev-router) | 0 | 0 | 요약 대기 · Route OpenAI-style chat requests to a model and reasoning effort, using TypeSafe's Jev decision model as the classifier | 🆕 | 2026-09-24 |
| [Iskandeur/system1-system2](https://github.com/Iskandeur/system1-system2) | 0 | 0 | 요약 대기 · Hybrid System 1 (TypeSafe Jev decisions) + System 2 (Claude Fable) demo with confidence-gated routing and cost/accuracy benchmarks. | 🆕 | 2026-09-25 |
| [Jamesjiwei19981027/Jev-router](https://github.com/Jamesjiwei19981027/Jev-router) | 0 | 0 | 요약 대기 · 为 Claude Code / Codex / Pi / Antigravity 接入 Jev 决策层：智能上下文压缩 + 能力路由。A Jev decision layer for coding agents: context compaction and capability routing. | 🆕 | 2026-09-27 |
| [jason-allen-oneal/openclaw-plugin-typesafe-ai](https://github.com/jason-allen-oneal/openclaw-plugin-typesafe-ai) | 0 | 0 | 요약 대기 · TypeSafe AI (Jev System One) plugin for OpenClaw - sub-100ms group triage, tool safety guardrails, compaction curation, and model routing | 🆕 | 2026-09-18 |
| [jaygajera17/JevPulse](https://github.com/jaygajera17/JevPulse) | 0 | 0 | 요약 대기 · Jev-powered consensus engine which Evaluates every YouTube comment individually to measure true audience agreement. | 🆕 | 2026-09-24 |
| [jaysonsantos/sudoku-jev](https://github.com/jaysonsantos/sudoku-jev) | 0 | 0 | 요약 대기 · Sudoku game played by the TypeSafe Jev decision model through OpenRouter | 🆕 | 2026-09-21 |
| [jekozyra/pi-typesafe-router](https://github.com/jekozyra/pi-typesafe-router) | 0 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-22 |
| [JevForge/jev-flaky-detective](https://github.com/JevForge/jev-flaky-detective) | 0 | 0 | 요약 대기 · Classify failing tests as regression, flaky, environment, or unknown. Jev decides; results are never masked or auto-rerun. | 🆕 | 2026-09-24 |
| [JevForge/jev-model-navigator](https://github.com/JevForge/jev-model-navigator) | 0 | 0 | 요약 대기 · Route Issues and PRs to the best AI model using typed TypeSafe Jev decisions in GitHub Actions. | 🆕 | 2026-09-24 |
| [JGalego/J3v](https://github.com/JGalego/J3v) | 0 | 0 | 요약 대기 · J3v is to Jev as k3s is k8s | 🆕 | 2026-09-24 |
| [johanmatsgard/jev-svenska-triage](https://github.com/johanmatsgard/jev-svenska-triage) | 0 | 0 | 요약 대기 · Testing TypeSafe's Jev on 100 Swedish social media comments. | 🆕 | 2026-09-26 |
| [JonnyFi/gute-kaese](https://github.com/JonnyFi/gute-kaese) | 0 | 0 | 요약 대기 · Type anything. Jev decides in ~0.4s whether it's Gute Käse. A gut call, no explanation. | 🆕 | 2026-09-23 |
| [KalyanM45/GitHub-Issue-Classification-Using-Jev](https://github.com/KalyanM45/GitHub-Issue-Classification-Using-Jev) | 0 | 0 | 요약 대기 · This repository contains a GitHub issue classifier built on Jev, TypeSafe AI's System One model. It labels every new issue with typed values and calibrated confidence in milliseconds, labelling what it is sure about and escalating what it is not. Three guardrail layers guard every write, and a frozen eval suite gates each deploy. | 🆕 | 2026-09-22 |
| [kanishka-namdeo/jev-rag](https://github.com/kanishka-namdeo/jev-rag) | 0 | 0 | 요약 대기 · Local-first hybrid RAG: traditional vs Jev-style (System One) pipelines over your own documents — with a built-in benchmark lab (6 scenarios, 48 questions, independent LLM judge). Hybrid won +8.4pp correctness at identical cost. | 🆕 | 2026-09-27 |
| [keysersoft/jev-mcp-server](https://github.com/keysersoft/jev-mcp-server) | 0 | 0 | 요약 대기 · Jev MCP server: use TypeSafe Jev in Claude &amp; ChatGPT. Yes/no, classification and scoring with probabilities, hosted or self-hosted. | 🆕 | 2026-09-27 |
| [kijung4290/gmail-mail-triage](https://github.com/kijung4290/gmail-mail-triage) | 0 | 0 | 요약 대기 · 로컬 전용 Gmail 긴급도·광고·답변 필요 여부 분류 대시보드 · TypeSafe AI JEV | 🆕 | 2026-09-19 |
| [knowlet/agentworld-web-simulator](https://github.com/knowlet/agentworld-web-simulator) | 0 | 0 | 요약 대기 · An entire internet — search, pages &amp; links — hallucinated on the fly by the System One Model. | 🆕 | 2026-09-18 |
| [loopgridio/loopgrid-jev](https://github.com/loopgridio/loopgrid-jev) | 0 | 0 | 요약 대기 · LoopGrid for Jev - Signed, tamper-evident evidence for live TypeSafe AI Jev decisions through Vercel AI Gateway. | 🆕 | 2026-09-25 |
| [madhavmadupu/talos](https://github.com/madhavmadupu/talos) | 0 | 0 | 요약 대기 · Transaction Assessment &amp; Logic Orchestration System | 🆕 | 2026-09-23 |
| [ManankumarThakkar/jev-escalation-gate](https://github.com/ManankumarThakkar/jev-escalation-gate) | 0 | 0 | 요약 대기 · How much traffic can a small calibrated decision model own? 600 measured decisions with Jev on a RAG answerability gate, and why your test set's negatives decide the answer. | 🆕 | 2026-09-24 |
| [matejgordon/ha-jev-conversation](https://github.com/matejgordon/ha-jev-conversation) | 0 | 0 | 요약 대기 · Czech Home Assistant Assist agent on TypeSafe Jev: typed decisions in ~300 ms, confirmations for locks and garage | 🆕 | 2026-09-26 |
| [MaururuTakumi/codex-jev-compaction](https://github.com/MaururuTakumi/codex-jev-compaction) | 0 | 0 | 요약 대기 · Codex plugin that restores Jev-selected tool evidence after context compaction | 🆕 | 2026-09-22 |
| [mcgalleg/grokbot-jev-jobs](https://github.com/mcgalleg/grokbot-jev-jobs) | 0 | 0 | 요약 대기 · Scores public job postings against my resume using TypeSafe's jev via the Vercel AI Gateway. Daily Vercel cron. | 🆕 | 2026-09-19 |
| [MersivMedia/jermes](https://github.com/MersivMedia/jermes) | 0 | 1 | 요약 대기 · Jev decision layer for Hermes Agent | 🆕 | 2026-09-26 |
| [mintannn/jev-asks-until-sure](https://github.com/mintannn/jev-asks-until-sure) | 0 | 0 | 요약 대기 · A twenty-questions guesser that keeps asking until Jev's calibrated confidence crosses a threshold — or gives up and says so | 🆕 | 2026-09-20 |
| [MoonTory/pi-jev-harness](https://github.com/MoonTory/pi-jev-harness) | 0 | 0 | 요약 대기 · Pi extension: TypeSafe Jev routes turns, pre-fetches context, trims tool results, catches loops and guards tool calls | 🆕 | 2026-09-18 |
| [Mr-DS-ML-85/SyFox](https://github.com/Mr-DS-ML-85/SyFox) | 0 | 0 | 요약 대기 ·  The Open System One decision engine | 🆕 | 2026-09-27 |
| [MuleSoft-Forge/mule4-typesafe-connector](https://github.com/MuleSoft-Forge/mule4-typesafe-connector) | 0 | 0 | 요약 대기 · Mule 4 connector for TypeSafe's System One API (Jev decision models): typed yes/no, choice and score answers that drive Mule flows. Think: Smart if-statements. | 🆕 | 2026-09-27 |
| [munod/tachyone](https://github.com/munod/tachyone) | 0 | 0 | 요약 대기 · Local-first, multilingual System One decision engine — ultra-fast, non-autoregressive, calibrated. Speaks the Jev /v1/systemone protocol. | 🆕 | 2026-09-26 |
| [ne0ekspert/messageeval-discord](https://github.com/ne0ekspert/messageeval-discord) | 0 | 0 | 요약 대기 · Discord bot that evaluates message like chess | 🆕 | 2026-09-19 |
| [PauloBTX/exemplo-hev-roteamento](https://github.com/PauloBTX/exemplo-hev-roteamento) | 0 | 0 | 요약 대기 · Roteamento automático de incidentes para o time certo usando o modelo Jev (TypeSafe AI) via OpenRouter, com benchmark de 1000 requisições. | 🆕 | 2026-09-24 |
| [peakevergreen/jevidence](https://github.com/peakevergreen/jevidence) | 0 | 0 | 요약 대기 · Let Jev judge. Let your code decide. Python issue-routing sandbox with labeled replay, an offline demo, and Kev support. | 🆕 | 2026-09-22 |
| [prasanthj/duckdb-dual-cognition](https://github.com/prasanthj/duckdb-dual-cognition) | 0 | 0 | 요약 대기 · Native DuckDB extension composing fast System One judgments with selective System Two reasoning, provenance, batching, and caching. | 🆕 | 2026-09-27 |
| [PromptEngineer48/langchain-jev-tutorial](https://github.com/PromptEngineer48/langchain-jev-tutorial) | 0 | 0 | 요약 대기 · LangChain + Jev (TypeSafe) tutorial: a support-ops agent whose small decisions (triage, model routing, tool guarding, evals) are made by Jev. Real run outputs included. | 🆕 | 2026-09-24 |
| [rajantripathi/fastgate-jev](https://github.com/rajantripathi/fastgate-jev) | 0 | 0 | 요약 대기 · Jev (TypeSafe AI) as a System One decision layer for a multilingual EN/UZ/RU RAG helpdesk, with an independent benchmark | 🆕 | 2026-09-27 |
| [rishi-raj-jain/date-with-jev](https://github.com/rishi-raj-jain/date-with-jev) | 0 | 0 | 요약 대기 · Anonymous, share-card-first dating-chat evaluator: upload a screenshot, ask Jev for the read, and get the tea. Built on Next.js, Neon (Lakebase Postgres + Object Storage), and Vercel. | 🆕 | 2026-09-23 |
| [robertoshimizu/neurosymbolic-intent-router](https://github.com/robertoshimizu/neurosymbolic-intent-router) | 0 | 0 | 요약 대기 · Models interpret, rules decide: a fail-closed neuro-symbolic router in which language models only understand the text and a state machine carries out what the rules allow. | 🆕 | 2026-09-26 |
| [robinwintertaylor/Prompt-Router](https://github.com/robinwintertaylor/Prompt-Router) | 0 | 0 | 요약 대기 · Sub-120ms smart LLM gateway &amp; real-time optics dashboard using TypeSafe Jev System One. Defeats cache thrashing on coding agents (Goose, Cursor, VS Code) with Break-Even Cache Affinity and 0.60 Confidence-Gated Safety. | 🆕 | 2026-09-24 |
| [rubinagentagi-tech/jev-heart-risk-bench](https://github.com/rubinagentagi-tech/jev-heart-risk-bench) | 0 | 0 | 요약 대기 · Benchmarking Jev (TypeSafe System One) on 5,000 real CDC survey respondents, with an interactive demo where every profile has a real model answer | 🆕 | 2026-09-20 |
| [Running-Dolphins/jev-bench](https://github.com/Running-Dolphins/jev-bench) | 0 | 0 | 요약 대기 · Measure accuracy and calibration of Jev (TypeSafe AI's decision model) on public datasets: 12 business-like tasks, 7 experiments, one Python file. | 🆕 | 2026-09-20 |
| [russleyshaw/typesafe-jev-gate](https://github.com/russleyshaw/typesafe-jev-gate) | 0 | 0 | 요약 대기 · Fail-closed Jev policy gate for Hermes Agent tool calls | 🆕 | 2026-09-20 |
| [sallout/laya-coreml-vs-jev-benchmark](https://github.com/sallout/laya-coreml-vs-jev-benchmark) | 0 | 0 | 요약 대기 · Reproducible Laya-CoreML vs Jev benchmark for zero-shot intent classification on Banking77, ArBanking77, and CLINC150. Includes paired accuracy and per-dataset results. | 🆕 | 2026-09-24 |
| [sebastianbugal/jev](https://github.com/sebastianbugal/jev) | 0 | 0 | 요약 대기 · TypeSafe's Jev decision model in Claude Code. Ask in plain language, get a typed answer with a calibrated probability. | 🆕 | 2026-09-18 |
| [sidhasadhak/jev-perfume-advisor](https://github.com/sidhasadhak/jev-perfume-advisor) | 0 | 0 | 요약 대기 · Perfume recommendation chatbot powered by TypeSafe Jev's typed decisions (no generated text) over FragDB-format fragrance data | 🆕 | 2026-09-21 |
| [souvikr/jev-test](https://github.com/souvikr/jev-test) | 0 | 0 | 요약 대기 · Test harness + benchmark for TypeSafe's Jev decision model (noul/choice/score) via OpenRouter's Decisions API | 🆕 | 2026-09-19 |
| [sudorandom/protoc-gen-jev](https://github.com/sudorandom/protoc-gen-jev) | 0 | 0 | 요약 대기 · Experimental plugin to convert protobuf into Jev code | 🆕 | 2026-09-27 |
| [SYED-M-HUSSAIN/jev-experimental](https://github.com/SYED-M-HUSSAIN/jev-experimental) | 0 | 0 | 요약 대기 ·  What TypeSafe's Jev model can and can't do, as a runnable pytest suite. Includes the test where the API rejects an extraction request. Runs offline with recorded responses, no API key needed. | 🆕 | 2026-09-20 |
| [szafar-7101/reclaim](https://github.com/szafar-7101/reclaim) | 0 | 0 | 요약 대기 · Confidence-gated disk space recovery for macOS developers. Five-agent pipeline using TypeSafe AI's Jev model to decide what's safe to delete — calibrated probability instead of hardcoded path regex. | 🆕 | 2026-09-24 |
| [tangbl93/multica-agent-capacity](https://github.com/tangbl93/multica-agent-capacity) | 0 | 0 | 요약 대기 · Reusable Multica agent capacity scheduling Skill with GPT-only capacity retries, Jev classification, failure caching, rerouting, and automatic recovery. | 🆕 | 2026-09-20 |
| [ThyFriendlyFox/jev-triage](https://github.com/ThyFriendlyFox/jev-triage) | 0 | 0 | 요약 대기 · Active-learning triage pipeline using TypeSafe Jev — route by confidence, log soft labels for local distillation | 🆕 | 2026-09-19 |
| [triggeredcode/jev-compiler](https://github.com/triggeredcode/jev-compiler) | 0 | 0 | 요약 대기 · Compile decision policies into inspectable, measurable TypeSafe Jev programs. | 🆕 | 2026-09-25 |
| [TyrellD1/typesafe-ai_smoke-test](https://github.com/TyrellD1/typesafe-ai_smoke-test) | 0 | 0 | 요약 대기 · Smoke test: route prompts to a work or life database with TypeSafe AI (Jev), 30-case eval | 🆕 | 2026-09-17 |
| [WallerChen/jev-measured](https://github.com/WallerChen/jev-measured) | 0 | 0 | 요약 대기 · Measured cost, latency and raw output from the live Jev API (TypeSafe AI System One model) across 8 use cases — reproducible | 🆕 | 2026-09-20 |
| [wdonega/rest-laya](https://github.com/wdonega/rest-laya) | 0 | 0 | 요약 대기 · Dockerized REST service, jev-compatible, that serves the Laya model  (convaiinnovations/laya) for use from non-Python apps.  | 🆕 | 2026-09-23 |
| [Wing9897/jev.tg](https://github.com/Wing9897/jev.tg) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-24 |
| [xxlya/evaljev](https://github.com/xxlya/evaljev) | 0 | 0 | 요약 대기 · Runtime assurance, replay, and auto-diagnostics for Jev/System-One decision workflows | 🆕 | 2026-09-23 |
| [xxxx00000008-sketch/skills](https://github.com/xxxx00000008-sketch/skills) | 0 | 0 | 요약 대기 · Open-source Codex Skills collection — featuring Jev-powered skill routing for large local catalogs. | 🆕 | 2026-09-24 |
| [yangzhou-chaofan/awesome-jev-prompt](https://github.com/yangzhou-chaofan/awesome-jev-prompt) | 0 | 0 | 요약 대기 · latest top 100 showcases for jev (keep updating) from x / github / latest sources | 🆕 | 2026-09-26 |
| [yanng981/awesome-system-one](https://github.com/yanng981/awesome-system-one) | 0 | 1 | 요약 대기 · A curated, auto-updated list of System One decision models and open Jev alternatives: Laya, Kev, Von, Decider, Tev1 and more. | 🆕 | 2026-09-27 |
| [yanng981/system-one-benchmark](https://github.com/yanng981/system-one-benchmark) | 0 | 0 | 요약 대기 · Zero-shot accuracy, calibration and latency of Jev, Kev, Laya, Von and GLiNER2.5-Decide on SST-2, TREC, Banking77 and MASSIVE in 8 languages. Code and raw predictions. | 🆕 | 2026-09-26 |
| [yuyang2230/jev-agent-skill](https://github.com/yuyang2230/jev-agent-skill) | 0 | 1 | 요약 대기 · Free typed judgments for AI agents: offload classify/screen/score/verify to Jev (TypeSafe System One) via OpenCode Zen. Claude Code / ZCode skill. 给AI代理省token的免费决策分流技能 | 🆕 | 2026-09-19 |
| [Hardel-DW/jev.mods](https://github.com/Hardel-DW/jev.mods) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-17 |
| [TrainLCD/Functions](https://github.com/TrainLCD/Functions) | 1 | 0 | 요약 대기 · 👷 Cloudflare Workers for the TrainLCD mobile app. | 🆕 | 2026-09-24 |
| [TexasOct/jev-gateway](https://github.com/TexasOct/jev-gateway) | 0 | 0 | 요약 대기 · Session-aware OpenAI-compatible model-routing gateway powered by JEV | 🆕 | 2026-09-23 |

### NandhaKishorM/laya

<details><summary>README 발췌</summary>

Multilingual, non-autoregressive System 1 decision engine. Typed decisions over 100+ languages in a single forward pass — 33 ms — trained with reinforcement learning against strictly proper scoring rules (RLCD), with a router that picks the right checkpoint per request.

</details>

### gargpratyush/jev-router

<details><summary>README 발췌</summary>

Automatic per-turn model routing for Claude Code and OpenAI Codex. Jev sends simple work to the fast tier and difficult work to the strong tier, while preserving each CLI's native interface, tools, sessions, permissions, and authentication.

</details>

### kunchenguid/firstmate

<details><summary>README 발췌</summary>

href="https://img.shields.io/badge/platform-macOS%20%7C%20Linux-blue?style=flat-square" &gt; &gt; &gt;

</details>

### mizorewww/laya-mlx

<details><summary>README 발췌</summary>

Open-weight typed decisions, running natively on Apple Silicon.

</details>

### agentconnect-md/agentconnect

<details><summary>README 발췌</summary>

@ any agent. Wherever work happens, your agents work alongside your team and each other, learning as they go.

</details>

### deepopen-com/deepopen

<details><summary>README 발췌</summary>

Open-Source Multilingual System 1 Decision Engine Technical Whitepaper

</details>

### nokia-applied-research/AnyJev

<details><summary>README 발췌</summary>

English · 简体中文 · ⚡ Serve it · 📊 Results · 🧭 Roadmap · 📖 Levels

</details>

### v-modal/awesome-jev-tools

<details><summary>README 발췌</summary>

A curated awesome list of public projects and practices built on Jev, TypeSafe AI's System One model for typed decisions.

</details>

### wfzyx/von

<details><summary>README 발췌</summary>

An Open-Source, Non-Autoregressive System One Decision Model. Calibrated discrete, probabilistic, and ordinal inference in sub-25ms.

</details>

### anishfn/shapeshift

<details><summary>README 발췌</summary>

An input that becomes what you mean. One text box that morphs into the right UI as you type — an event card, a checklist, a timer, a color picker, a bill splitter, a poll, a converter and more.

</details>

### ollaya-dev/ollaya

<details><summary>README 발췌</summary>

A decision model reads a state (a message, an email, a ticket, any JSON) plus typed questions (choice, score, noul) and returns calibrated probabilities in a single forward pass, in milliseconds. It never generates text. Ollaya pulls these models by name, serves them from a local daemon, and speaks 

</details>

### rmalde/minecraft-agent

<details><summary>README 발췌</summary>

This project uses GPT-6 Astra or GPT-5.6 Sol to plan and JEV to select player actions in Minecraft Java 1.16.5. It uses the official vanilla server and Mineflayer. A read-only Java sensor can report the exact dragon head position. It does not change game rules or entity state. Each selected action i

</details>

### jerryjliu/docjev

<details><summary>README 발췌</summary>

Document classification and splitting with Jev, LiteParse, and optional LlamaParse.

</details>

### kyotofin/tax-doc-classifier

<details><summary>README 발췌</summary>

A tax document classifier built with Jev.

</details>

### notque/vexjoy-agent

<details><summary>README 발췌</summary>

Essays and writing behind this toolkit live at vexjoy.com.

</details>

### BillionsBobby/JevRouter

<details><summary>README 발췌</summary>

Faster agent decisions. Models, subagents, skills, MCP tools, CLIs and plugins become one candidate set — Jev answers one typed Choice question, JevRouter enforces availability, permissions, risk and confirmation around it.

</details>

### cobanov/awesome-jev

<details><summary>README 발췌</summary>

&gt; A curated, source-backed list of projects built with Jev, TypeSafe AI's System One model for fast, typed, probabilistic decisions.

</details>

### mohsen1/llm-debugger-vscode-extension

<details><summary>README 발췌</summary>

A VSCode extension that finds bugs by running the code — driving the real debugger, setting breakpoints, stepping, and reading live values — rather than reading the source and guessing.

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

### cequence-io/openai-scala-client

<details><summary>README 발췌</summary>

This is a no-nonsense async Scala client for OpenAI API and multiple LLM providers supporting all the available endpoints and params including streaming (with a 🔥 new provider-neutral typed stream of text / thinking / tool-call / tool-result chunks), chat completion, responses API, assistants API, 

</details>

### samuelfaj/distill

<details><summary>README 발췌</summary>

Distill is a lightweight coding agent harness and TUI, built to get far more done with far fewer tokens.

</details>

### kentcdodds/kody

<details><summary>README 발췌</summary>

Kody is your assistant's home—the memory, keys, code, and automations your AI agent keeps, portable across every MCP host. Built on Cloudflare Workers and the Model Context Protocol (MCP), it ships a Remix UI, Worker-based request routing, package runtime plumbing, and OAuth-protected MCP endpoints.

</details>

### mmastrac/djev-spark

<details><summary>README 발췌</summary>

DiffusionGemma 26B-A4B (NVFP4) on a DGX Spark, serving structured decisions through Jev's API.

</details>

### kshetrajna12/reflex

<details><summary>README 발췌</summary>

A tiny "decision model" you can run on your own GPU.

</details>

### kraayenjon/awesome-jev

<details><summary>README 발췌</summary>

&gt; Looking for real-world Jev use cases with numbers? madewithjev.com is a directory of what people are building with Jev — every build with the cost, latency, and source the author reported. Submit yours →

</details>

### fstandhartinger/jevbench

<details><summary>README 발췌</summary>

Combination experiments (confidence cascades, committees, and real-sample best-of-n) are reported in RESULTS-COMBINATIONS.md. None changed the ranked board.

</details>

### juspay/neurolink

<details><summary>README 발췌</summary>

The pipe layer for the AI nervous system.

</details>

### Promethe-us/awesome-jev

<details><summary>README 발췌</summary>

语言 / Language: 简体中文 · English

</details>

### devagrawal09/stanley-code

<details><summary>README 발췌</summary>

A Jev-first, self-improving coding agent.

</details>

### cookiespiggy/agentic-rl

<details><summary>README 발췌</summary>

&gt; 面向小白的 Agentic RL（智能体强化学习）系统教程 — 33 篇中文 Markdown + 两套可运行工程： &gt; TRL 最小示例（minimal-verl/）与判别模型三方对照实证（minimal-decision-bench/）。 &gt; &gt; 搜「Agentic RL 教程」「GRPO 入门」「LLM 强化学习」「verl TRL 实战」「Jev 与 RL 的边界」「System One 判别模型」「判别能力外置」都能找到这里。

</details>

### Heman10x-NGU/Verdict-open-jev

<details><summary>README 발췌</summary>

OpenJev (Verdict) is an open-source, post-trained foundational decision model designed for structured software workflows, inspired by TypeSafe AI\'s Jev and Reinforcement Learning for Calibrated Decisions (RLCD).

</details>

### virajbhartiya/laya-vs-jev

<details><summary>README 발췌</summary>

Two AI decision models play Chrome's T-Rex game side by side: Laya runs locally on Apple Silicon through MLX, while Jev uses TypeSafe's hosted API. Watch their choices, response times, survival streaks, and crash replays on a shared obstacle course.

</details>

### AppitStudio/awesome-jev

<details><summary>README 발췌</summary>

&gt; Discover Jev-powered apps, developer resources, and runnable decision examples.

</details>

### Bodila51/grok-bot-jev

<details><summary>README 발췌</summary>

Connect TypeSafe Jev to Grok Bot as a cheap decision layer. Jev classifies the request before expensive research, browser, retry, or subagent work, so Grok Bot can reuse a fresh artifact, stop a failing retry, cap research, or ask for approval.

</details>

### giuliosmall/pg_typesafe

<details><summary>README 발췌</summary>

Pre-alpha. A PostgreSQL extension that calls TypeSafe AI (System One / Jev) from SQL for categorical work: Choice, Noul, and Score.

</details>

### nidhi-singh02/agent-router

<details><summary>README 발췌</summary>

Local-first, quota-aware routing for AI coding agents in Herdr.

</details>

### yzfly/awesome-jev-zh

<details><summary>README 발췌</summary>

Jev 不生成文本。 第一次看到这句话时我以为是个缺陷，后来才发现这正是它的设计核心。

</details>

### prismhq/jev-router

<details><summary>README 발췌</summary>

Open-source LLM router. Clients send one model id; Jev (TypeSafe's System One model) picks which model serves each request.

</details>

### hyperspaceai/jevcache

<details><summary>README 발췌</summary>

The decision ledger for Jev-class models. A Jev decision is (approximately) a pure function of (model, schema, state) — so it's memoizable. jevcache caches those decisions locally: same decisions, fewer bills, and deterministic replay in CI. It's backend-agnostic — point it at any local decision end

</details>

### UditAkhourii/quicksilver

<details><summary>README 발췌</summary>

A big share of every Claude Code session is spent reading things only to decide whether they matter. Which of these 187 files handle auth? Which of these 3,000 log lines are real failures? Which of these 200 tickets are refund requests? Claude reads it all, pays for it all, and the context fills up 

</details>

### kikoncuo/jevfire

<details><summary>README 발췌</summary>

JEVfire assigns typed variables from finite choices, batching independent fields through vLLM for parallel execution and reuse of their shared instruction/context prefix when the engine cache permits it. Inspired by JEV / RLCD, it uses the pretrained model's existing language-model head to score ver

</details>

### bnsd55/jevmlx

<details><summary>README 발췌</summary>

jevmlx turns a schema of fields (booleans, enums, multi-selects) and a context string into a single batched forward pass on a local Apple Silicon model. Every allowed option for every field is scored from logits in one prefill — no text generation — and the JSON is assembled from the winners, with a

</details>

### Dimweaker/jev-libero

<details><summary>README 발췌</summary>

Explore robot control with Jev, local physics previews, and configurable tasks.

</details>

### zwliJay/jev-forge

<details><summary>README 발췌</summary>

An end-to-end toolkit for synthesizing decision data, training calibrated candidate scorers, evaluating them, and serving Jev-compatible inference for interactive web decisions.

</details>

### GiesN/typesafe-jev-workflow

<details><summary>README 발췌</summary>

A small async LangGraph workflow that sends a mocked email to TypeSafe's Jev model, receives a typed Choice (invoice or general), and routes to a demo handler. The handlers only set a destination in graph state; they do not send email or make payments.

</details>

### BeatAPI/awesome-jev

<details><summary>README 발췌</summary>

src="https://img.shields.io/badge/LINUX-DO-FFB003.svg?logo=data:image/svg%2bxml;base64,DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxwYXRoIGQ9Ik00Ni44Mi0uMDU1aDYuMjVxMjMuOTY5IDIuMDYyIDM4IDIxLjQyNmM1LjI1OCA3LjY3NiA4LjIxNSAxNi4xNTYgOC44NzUgMjUuNDV2Ni4yNXEtM

</details>

### iamaamir/system-one

<details><summary>README 발췌</summary>

&gt; Write the decision once. Run it on any System One provider.

</details>

### Nisaka520/JevIntent

<details><summary>README 발췌</summary>

一个 FkWeChat 插件：长按任意微信消息 → 调用 TypeSafe Jev 判定模型 → 几秒后在屏幕上弹出结论。不发任何消息、不改聊天记录，对方完全不知道。

</details>

### EliaAlberti/jev-rules

<details><summary>README 발췌</summary>

If you use Claude Code for a while, you end up with a pile of standing instructions: test the payment code, use British spelling, follow the deploy checklist. Show all of them on every prompt and Claude wades through rules that have nothing to do with the request; pick them by keyword and a rule is 

</details>

### TheoOliveira/pi-jev

<details><summary>README 발췌</summary>

Semantic tool routing and typed decisions for the Pi coding agent powered by TypeSafe Jev (System One).

</details>

### togethercomputer/tev1

<details><summary>README 발췌</summary>

We fine-tuned Qwen3.5-4B on Together AI to make decisions: give it context, a question, and 2–24 options, and it returns one answer letter. We're calling it tev1-4B-experimental.

</details>

### alvarobartt/sys1

<details><summary>README 발췌</summary>

src="https://github.com/user-attachments/assets/8b2774a7-6439-422e-bbd3-3fdd85117c5d" alt="sys1" width="1200" /&gt; System One compatible API for open decision models, written in Rust.

</details>

### PerryLink/jevcore

<details><summary>README 발췌</summary>

TypeSafe Jev for DeepSeek Harness and any other MCP host.

</details>

### wh000wh000/awesome-jev-live

<details><summary>README 발췌</summary>

&gt; [!NOTE] &gt; Live index · Last sync: 2026-09-28T02:13:45+08:00 (UTC+8) &gt; · Entries: 819 · New this tick: 60 · Implementation languages: 24

</details>

### hunkim/solar-mini4-jev

<details><summary>README 발췌</summary>

A drop-in wrapper that exposes Upstage Solar Pro4 (default; solar-mini4 optional) through the TypeSafe Jev System One API shape.

</details>

### zhengxuyu/litjev

<details><summary>README 발췌</summary>

A reproduction of Jev: turn any Qwen model into a fast decision model.

</details>

### intikhab49/open-jev-typed-decision-engine

<details><summary>README 발췌</summary>

A 150M encoder that answers arbitrary typed questions about a state in one forward pass, with calibrated confidence. 0.03 behind TypeSafe Jev on its own benchmark, 2.5× better calibrated, 4× faster, $0.

</details>

### aurorainfra/grev

<details><summary>README 발췌</summary>

Unix filters that ask questions instead of matching patterns.

</details>

### bodepudimuneendra-netizen/laya-jev-GraphRAG

<details><summary>README 발췌</summary>

laya-jev-GraphRAG is a graph-database-agnostic Agentic GraphRAG framework — a production-ready intelligence layer you drop on top of your existing graph database to make it fully agentic. It doesn't replace your graph DB; it gives it a brain.

</details>

### sabeel111/OpenSourceJev

<details><summary>README 발췌</summary>

&gt; A high-performance, local "System One" AI decision engine powered by llama.cpp and Qwen.

</details>

### klauswg/jev-guard

<details><summary>README 발췌</summary>

Real-time risk triage gateway for crypto exchange deposits &amp; withdrawals — Jev (TypeSafe System One) as the triage layer, deterministic code as the judge.

</details>

### adarshmishra07/jcm-router

<details><summary>README 발췌</summary>

A local proxy that sits between Claude Code and the Anthropic API and picks the model and effort level per message, using TypeSafe's Jev classifier. Trivial questions go to Haiku, everyday work to Sonnet, hard problems to Opus or Fable, and your Claude subscription login keeps working.

</details>

### devanshbatham/commit-miner

<details><summary>README 발췌</summary>

Classify Git commit diffs and messages with Jev. Bug fixes, security fixes/CWEs, and change types.

</details>

### zhihz/openjev

<details><summary>README 발췌</summary>

Local, bilingual probability decisions from your context, questions, and candidate answers.

</details>

### 0xBakeer/arbiter

<details><summary>README 발췌</summary>

Serve typed-decision models — Laya or your own — on your GPU or your Mac, with a Jev-compatible API.

</details>

### JackZeng/Jev_apps

<details><summary>README 발췌</summary>

大多数 AI 以写答案见长，TypeSafe Jev 擅长做判断。 给它当前情况和问题或选项，它返回选择、评分或是非判断，再由程序执行。 这里介绍人们用它做出的应用，也解释演示究竟能证明什么。

</details>

### matrixorigin/Astra

<details><summary>README 발췌</summary>

Inspect context and state. Adjust and recover with evidence. Run in your environment.

</details>

### davila7/jev-explained

<details><summary>README 발췌</summary>

Learn how TypeSafe's Jev makes typed, probabilistic decisions — by running it.

</details>

### zhangcy122/OpenJev

<details><summary>README 발췌</summary>

&gt; The High-Throughput Deterministic Decision Engine for AI Agents &gt; Turn slow, expensive, prompt-biased LLM calls (&gt;1.5s, $0.02/call) into sub-35ms, strictly typed, calibrated, 100% order-invariant decision primitives (Choice , Noul, Score). Features a self-evolving "Explore First, Crystallize Later

</details>

### jlowin/vibecheck

<details><summary>README 발췌</summary>

The easiest decisions your code will ever make.

</details>

### bladedevoff/stuntd

<details><summary>README 발췌</summary>

stuntd is a local, self-hosted proxy that records the typed decisions your app already makes and learns to answer them itself. It speaks the Jev System One protocol (POST /v1/systemone, with choice, score and noul questions) and the OpenAI Chat Completions API, distils each decision site into a smal

</details>

### chy4pro/jev-for-chrome

<details><summary>README 발췌</summary>

A Chrome extension that drives the tab you are looking at with TypeSafe Jev, a decision model that picks the next click, keystroke or dropdown value in a few hundred milliseconds instead of generating text. It is a Manifest V3 port of browser-use/jev-ultrafast: same observation format, same question

</details>

### PromptEngineer48/laya-vs-jev-arena

<details><summary>README 발췌</summary>

Two AI models go head to head in a snake race and a Mortal-Kombat-style fight. Every move is a real decision from the model — nothing is scripted.

</details>

### keeltrace/hermes-nerve

<details><summary>README 발췌</summary>

Nerve is an asynchronous System-1 supervisory layer for Hermes Agent. 0.3.0 is the profile-aware modular release: it adds Nerve setup personalities, hard-OFF module semantics, Assistant Accountability, optional Shared Context integration, profile/runtime truthfulness, stronger persistence and path t

</details>

### misbahsy/doc-router

<details><summary>README 발췌</summary>

Don't pay to OCR a page that already has text on it.

</details>

### nexibeo/jev-cookbook

<details><summary>README 발췌</summary>

Practical, tested recipes for TypeSafe's Jev, the fast decision model on OpenRouter. Fifteen real-world jobs, each with a runnable script, a small labelled dataset and measured results: support triage, database indexing, a file organizer, tagging, category trees, duplicate detection, PII scanning, b

</details>

### Abhinavexists/lev

<details><summary>README 발췌</summary>

lev is an open System One decision model and the harness that measures it. Give it a state (text, a ticket, an email, or JSON) and a set of typed questions (yes/no, choice, score), and it answers all of them in one forward pass, reading each answer from logits it already computed. It returns calibra

</details>

### bhaiG-de/jev-design-test

<details><summary>README 발췌</summary>

Type a one-line prompt, get back a canvas full of complete, real UI screens — dashboards, auth flows, pricing pages, settings screens — sampled by Jev (@typesafe-ai/sdk) and assembled entirely from real shadcn/Base UI component blocks.

</details>

### mejiasd3v/pi-jev-router

<details><summary>README 발췌</summary>

Let TypeSafe's Jev choose a model and reasoning effort for Pi. The model stays fixed for the session. Effort stays fixed too, unless you enable adaptive effort for Codex Astra. Generation uses your existing Pi providers and credentials.

</details>

### ankit-aglawe/tinyjev

<details><summary>README 발췌</summary>

TinyJev answers typed questions about text and returns probabilities, in one forward pass, on your own machine.

</details>

### buberlo/dsh-jev

<details><summary>README 발췌</summary>

The Jev decision layer for DeepSeek Harness (DSH).

</details>

### lukaske/jev-doom-agent

<details><summary>README 발췌</summary>

Two isolated instances of the actual Chocolate Doom 3.1.1 engine, compiled to WebAssembly, play the same Freedoom map from the same initial state. A TypeSafe Jev Choice decision—or an explicitly labeled deterministic offline policy—selects a tactical macro; the local motor controller turns that macr

</details>

### sandeco/pix-golpe

<details><summary>README 발췌</summary>

Demo em tela dividida para vídeo. Esquerda: Rust + Jev (TypeSafe AI). Direita: Python + DeepSeek. As mesmas mensagens entram nos dois lados ao mesmo tempo. Cada lado decide se é golpe e, se for, rastreia o caminho do dinheiro num grafo com 10 milhões de transações e 1 milhão de contas.

</details>

### YueBit/robodiag-harness

<details><summary>README 발췌</summary>

A command-line tool for checking your robot's health and investigating problems.

</details>

### AskTheWay/dsh-jev-interceptor

<details><summary>README 발췌</summary>

&gt; ⚡ Millisecond judgement for every tool call and every recalled message — for about two millionths of a dollar each. &gt; &gt; Your agent's most expensive habits: asking a poetry-writing LLM yes/no questions, and amputating your context by age. This plugin wires Jev — the non-generative "System One" mode

</details>

### Bodila51/muse-jev-playbook

<details><summary>README 발췌</summary>

Use TypeSafe AI's Jev as a cheap, fast decision layer inside an AI agent workflow — triage, classify, score, and gate work before expensive steps (browser, deep research, retries, subagents).

</details>

### BoundaryML/feelings

<details><summary>README 발췌</summary>

.feels() on anything. A programming language for LLM workflows where the "AI if statement" is a real, typed method — powered by TypeSafe AI's Jev and BAML.

</details>

### chengyongru/fastjev

<details><summary>README 발췌</summary>

width="420" alt="FastJev" /&gt;

</details>

### emnlmn/snap

<details><summary>README 발췌</summary>

Ask everything. Generate nothing.

</details>

### FeiLiuEM/open-medical-jev

<details><summary>README 발췌</summary>

Jev-class judgment from frozen open models — computation, not training.

</details>

### TypeSafeAI/typesafe-playground

<details><summary>README 발췌</summary>

A community playground for TypeSafe AI's Jev: edit classification experiments, compare A/B inputs, route conversations, extract document fields, inspect code-policy decisions, and explore games and simulations built around typed model outputs.

</details>

### hraness/algal

<details><summary>README 발췌</summary>

Write agent programs that wait, resume, and replay.

</details>

### imohitmayank/jevfill

<details><summary>README 발췌</summary>

Chrome extension that autofills web forms from unstructured notes with Jev (by TypeSafe AI). Paste your details once as plain text — no structured profile required — then fill forms on demand.

</details>

### jsk4581/jev-blindspot

<details><summary>README 발췌</summary>

Good results start with good requests.

</details>

### lyramakesmusic/jevbot

<details><summary>README 발췌</summary>

Discord bot that makes TypeSafe's Jev talk — a decision model that "cannot generate text," loomed word-by-word into broken sentences.

</details>

### Ray-Hughes/jevalyn

<details><summary>README 발췌</summary>

Fast, cheap, structured decisions baked into your Rails app's control flow.

</details>

### unicodeveloper/jevocks

<details><summary>README 발췌</summary>

Jevinik is a stock decision terminal that retrieves live market evidence with Valyu and estimates whether a stock will trade higher in 30 days.

</details>

### vinilana/live-jev

<details><summary>README 발췌</summary>

A 2D, top-down autonomous car that runs in the browser and uses TypeSafe's Jev (a "System One" decision model) as its driving classifier. Every ~200 ms the car turns what its sensors see into a JSON state, sends it to Jev with four typed questions, and executes the answers:

</details>

### 0x7067/claude-jev

<details><summary>README 발췌</summary>

Stop paying frontier-model prices for small judgments.

</details>

### evoke-build/evoke

<details><summary>README 발췌</summary>

Software, by reflex. Natural-language commands for small programs you install. A reflex is a small program you install and ask for in your words. Type one sentence, and evoke reads it against every reflex you installed. It picks the ones the sentence asks for and fills their inputs from your words o

</details>

### leesk212/JEV-CPU

<details><summary>README 발췌</summary>

Semantic ifs from open models — on a laptop CPU, no GPU.

</details>

### mayank953/Jev

<details><summary>README 발췌</summary>

Six live, side-by-side demos of TypeSafe's Jev — a "System One" model that returns typed, probabilistic decisions (70–500 ms, $0.042 per 1M input tokens, output free) instead of generated text.

</details>

### arjun988/Kev

<details><summary>README 발췌</summary>

Send context. Ask choice , score , or noul . Get calibrated probabilities — not a paragraph to parse.

</details>

### carldaws/hunch

<details><summary>README 발췌</summary>

Probabilistic control flow for Ruby.

</details>

### Das-rebel/a3m-router

<details><summary>README 발췌</summary>

GPT-4o costs $0.03/run. A3M routes the same request to Groq/Mistral for $0.0001.

</details>

### thusinh1969/BrighTO_Router

<details><summary>README 발췌</summary>

Million-token AI traffic, simple Rust fast path, one Docker install.

</details>

### liaoyuhua/jev-trip

<details><summary>README 발췌</summary>

Two Minds, One Trip.

</details>

### doeixd/discern

<details><summary>README 발췌</summary>

Uncertainty-aware, smart semantic control flow and procedures for Effect.

</details>

### MrJev/awesome-jev

<details><summary>README 발췌</summary>

&gt; A curated list of projects, integrations, and resources for Jev, TypeSafe AI's System One model: typed decisions with calibrated confidence instead of text.

</details>

### Twister915/typesafe-ai

<details><summary>README 발췌</summary>

typesafe-ai brings TypeSafe's System One evaluation API into Rust as small, typed judgments that fit inside ordinary application code.

</details>

### whyashthakker/awesome-jev-use-cases

<details><summary>README 발췌</summary>

50 minimal, interactive examples of TypeSafe Jev’s Choice, Score and Noul primitives, compared side by side with OpenAI’s Responses API (gpt-4o-mini). Each use case has its own folder, two synthetic scenarios, a small 2D visual and a runnable JavaScript example.

</details>

### dzhng/duet-agent

<details><summary>README 발췌</summary>

The agent harness for jobs that outlive the chat.

</details>

### ethanplusai/jev-chat-for-twitch

<details><summary>README 발췌</summary>

A Chrome extension that adds a second chat column showing only the Twitch messages worth reading.

</details>

### hev/reranker

<details><summary>README 발췌</summary>

A reranker built on Jev, by hev.

</details>

### idovmamane/dejevu

<details><summary>README 발췌</summary>

Jev? Déjà vu. Browser agents that run on instinct, no Jev needed. One look at the page. One call to any open model. One action.

</details>

### philippdubach/pi-jev-router

<details><summary>README 발췌</summary>

pi-jev-router is a pi extension. It classifies each task with Jev (TypeSafe System One, called through OpenRouter) and routes the task to an OpenRouter model. The pick balances quality, cost and latency, and follows a role policy for planning, code and writing.

</details>

### getsynkora/synkora-ai

<details><summary>README 발췌</summary>

Self-hosted AI agent platform. No cloud dependency. No vendor lock-in. Your infrastructure, your LLM keys.

</details>

### MichelKerkmeester/skilled-agent-harness_spec-driven-loops

<details><summary>README 발췌</summary>

&gt; Like it? https://buymeacoffee.com/michelkerkmeester

</details>

### ckaraca/awesome-jev

<details><summary>README 발췌</summary>

&gt; A curated list of tools, integrations, and experiments built on Jev, the System One model from TypeSafe AI that makes fast, typed, confidence-aware decisions.

</details>

### ekizito96/Turn

<details><summary>README 발췌</summary>

Turn is a programming language where autonomous agents are not a pattern you implement — they are the execution model. Actors, managed context, confidence-aware decisions, durable suspension, and crash-recoverable execution are language and VM concepts rather than application-library conventions.

</details>

### manifoldor/xtags

<details><summary>README 발췌</summary>

在 X 的时间线上，给每条帖子标出它想让你干什么。

</details>

### win4r/pi-jev-router

<details><summary>README 발췌</summary>

English · 研究与 Bifrost 对比 · 设计与边界 · 验证记录

</details>

### xinyao27/jevonian

<details><summary>README 발췌</summary>

Keep the coding agent you already use. Jevonian sits between your agent and your providers, chooses a capable model for each turn, respects quota and cache economics, and records the decision locally. No manual model switching between planning, implementation, and smaller tasks.

</details>

### matthewp/flue-jev-demo

<details><summary>README 발췌</summary>

A standalone Cloudflare-targeted Flue example. Application AI requests go through the Worker's AI binding and its default AI Gateway:

</details>

### mattt/AnyDecisionModel

<details><summary>README 발췌</summary>

AnyDecisionModel is a Swift package for typed decisions: yes-or-no probabilities, choices among options, and scores on ordinal scales. It has two backends. MLXDecisionModel runs a small language model on Apple silicon and reads each decision from next-token probabilities in one forward pass, with no

</details>

### Mawfyy/jevflow

<details><summary>README 발췌</summary>

&gt; Treat probabilistic AI decisions as a programming primitive that composes with deterministic application logic.

</details>

### ruban-24/switchboard

<details><summary>README 발췌</summary>

Automatic model selection for Claude Code and Codex.

</details>

### komorra/Eugeniusz

<details><summary>README 발췌</summary>

C · C++ · C# · Python · Unity · Unreal Engine

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

### yibie/laya-jev-lab

<details><summary>README 발췌</summary>

Measured comparisons of typed-decision models — Jev (TypeSafe, closed API) vs Laya (Convai, open weights) — plus a working cascade that matches Jev's accuracy at ~1.8× the speed.

</details>

### daftAI2026/awesome-jev

<details><summary>README 발췌</summary>

A curated list of TypeSafe Jev / System One ecosystem projects — official SDKs, agent skills, browser &amp; computer-use demos, MCP connectors, routers, and community awesome-lists. Independent open-source typed-decision alternatives are listed separately and are not presented as official or drop-in com

</details>

### HexyeDEV/JevPR

<details><summary>README 발췌</summary>

JevPR is a GitHub App that routes pull-request review work using Jev By TypeSafe as the decision engine.

</details>

### imMamdouhaboammar/fable-jev

<details><summary>README 발췌</summary>

Where TypeSafe AI's System One (Jev) meets get-fable's Deterministic Lifecycle Engine.

</details>

### jeffonelson/jev-bigquery-cloudrun

<details><summary>README 발췌</summary>

Classify 30 fictional support tickets by owning team, urgency, and blocked workflow. A private Cloud Run adapter calls TypeSafe's Jev API; a BigQuery remote function saves the answers for ordinary SQL queries.

</details>

### lucasmartins-ai/lcc

<details><summary>README 발췌</summary>

Jev-powered relevance compaction that never summarizes, and the local-first engine around it: deterministic context optimization, intake triage, exact token accounting, and local LLM agents (Gemma 4 e4b &amp; Qwen3.5-4B).

</details>

### poiuyjie/jev_project_context

<details><summary>README 발췌</summary>

Evidence-first, long-term experiment memory for AI coding agents. Every claim stays traceable from question to evidence, every session resumable without archaeology.

</details>

### saibimajdi/typesafeai-dotnet-sdk

<details><summary>README 발췌</summary>

Ask typed, answerable questions about any text or JSON state, and get structured, probability-backed answers back: yes/no probabilities, a chosen option out of a set you define, or a position on a rubric you define.

</details>

### vynnlee/jev-mail

<details><summary>README 발췌</summary>

&gt; CLI-installed and CLI-managed Gmail classification that runs continuously on Google Apps Script with the TypeSafe Jev model.

</details>

### yohanargentina-oss/Foq

<details><summary>README 발췌</summary>

The free, open-source, 100% local alternative to Jev. Foq is a decision engine for AI agents built on the same idea as TypeSafe's "System One Model": no prose, no tokens generated — one feed-forward pass over your context returns calibrated probabilities on typed questions (booleans, choices, scores

</details>

### zeeshan8281/slo-router

<details><summary>README 발췌</summary>

SLO Router is an OpenAI-compatible proxy that chooses an LLM backend using request semantics, backend quality priors, live queue depth, context capacity, expected prefill/decode time, price, and a caller latency SLO. Jev 1.13 can supply bounded semantic features; the service falls back to determinis

</details>

### ZJU-REAL/CUA-JEV

<details><summary>README 발췌</summary>

Webpage · Watch demos · 中文文档

</details>

### comoc/jev-minesweeper

<details><summary>README 발췌</summary>

TypeSafe の System One モデル「Jev」に、ブラウザ上のマインスイーパーを解かせるデモです。

</details>

### Emenowicz/jev-sap-commerce

<details><summary>README 발췌</summary>

jevintegration is an SAP Commerce extension that lets Jev, TypeSafe's typed-decision model, make narrow decisions about shop text. It moderates product reviews, suggests product categories and suggests classification attribute values, and you measure it on your own data before it changes anything.

</details>

### endomorphosis/JevOps

<details><summary>README 발췌</summary>

TypeSafe / Jev kernel, split from Lean Refactor Arena and other papers.

</details>

### green-dalii/pi-shift-router

<details><summary>README 발췌</summary>

SEO metadata (not user-visible, parsed by crawlers / LLMs): - name: pi-shift-router - type: software / npm package / pi-coding-agent extension / model router / LLM classifier - license: MIT - language: TypeScript - runtime: Node.js &gt;= 24 - dependencies: @earendil-works/pi-tui only (host-provided; de

</details>

### inanna-malick/jev-dsl

<details><summary>README 발췌</summary>

A Haskell DSL for agents that would rather have a question judged than guessed. A packet of labelled questions is written once as an expression; its type is inferred, it renders to the exact request JSON for TypeSafe's Jev, and the answers come back under the same labels as records read by field. A 

</details>

### joevidev/ui-generator-instinct-jev

<details><summary>README 발췌</summary>

Describe it. Jev decides. A demo of Jev — TypeSafe's "System One" model — as a UI generator. You describe a case in free text; Jev never generates a line of code or copy back. It only ever answers typed questions (Choice, Noul, Score) over bounded, real option sets, and the app renders whichever rea

</details>

### kuhung/ask-jev

<details><summary>README 발췌</summary>

面向中国大陆年轻人的复古新野蛮主义 (Neo-Brutalism) 生活微决策老管家。专治“买不买”、“花不花”、“用不用”、“中午吃什么”、“去不去”等内耗纠结，直截了当给结论。

</details>

### miniLV/Jev-Auto-Router

<details><summary>README 발췌</summary>

一个 Codex 会话，每次模型调用重新选档。 TypeSafe 的 Jev 从当前可用的 GPT 模型与推理档位中做一次选择；任务结束后再独立验收。这是 Jev Auto Router（Jev Router）的验证原型。

</details>

### valentynkit/jev-plays-pokemon-red

<details><summary>README 발췌</summary>

Pokemon Red played by a model that only outputs probabilities. Code reads the Game Boy's memory into a typed snapshot and hands the model a menu of the moves that are actually legal; it returns a probability for each one. The bars are those probabilities.

</details>

### vercel-labs/jev-ai-sdk-form-router

<details><summary>README 발췌</summary>

Three forms use Jev to route submissions by context, with openai/gpt-6-luna-fast handling uncertain or failed evaluations. Includes editable samples, routing details, and optional email delivery.

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

### jaibhasin/jev-yt-time-saver

<details><summary>README 발췌</summary>

&gt; A cover over the YouTube videos that look more distracting than useful.

</details>

### kotoba-lang/typed-decisions

<details><summary>README 발췌</summary>

A lightweight reproduction of the Jev shape — one program state, many typed questions (Choice / Score / Noul), calibrated probability distributions back in a single parallel pass — on two backbones, so their speed, accuracy/calibration and training cost can be read side by side. Subject-plane name (

</details>

### kyle-chalmers/typesafe-jev-incident-router

<details><summary>README 발췌</summary>

&gt; Start here: TypeSafe Jev use cases for data teams

</details>

### muratcakmak/jev-guard

<details><summary>README 발췌</summary>

A Claude Code plugin that scores what the model is about to do — and what it just claimed — with a probability model, and denies the call when the score is high enough.

</details>

### scienthoon/jev-ood-calibration

<details><summary>README 발췌</summary>

An independent calibration test of TypeSafe's Jev on a task it cannot have seen, alongside three public benchmarks it probably has.

</details>

### shimo4228/jev-skill-router

<details><summary>README 발췌</summary>

A Claude Code hook that asks Jev, TypeSafe's fast probability model, which of your installed skills fits each prompt, and logs the answer; it tells Claude only if you opt in. Published as an experiment: running it showed it is unlikely to help a strong model, and this README says why.

</details>

### wondertwins/jev-benchmark

<details><summary>README 발췌</summary>

Two hands-on benchmarks of Jev, the "System One" model from TypeSafe. Jev doesn't generate text or reason step by step. You hand it state (a JSON blob) and typed questions (yes/no, pick-one, or rate-on-a-scale) and it returns calibrated probabilities in about 200 ms. The pitch is "programmable commo

</details>

### akash-kamat/system-one-gemma

<details><summary>README 발췌</summary>

&gt; LLMs generate text. This just decides. 200x faster. 200x cheaper.

</details>

### ansidium/jev-codex-bridge

<details><summary>README 발췌</summary>

TypeSafe Jev selects a model and reasoning effort for each new message in Codex Desktop or CLI. Codex keeps its existing login. Windows setup includes a background service, daily updates and rollback.

</details>

### Charlyhno-eng/jev-document-classification

<details><summary>README 발췌</summary>

JEV Document Classification is a local-first application that files root-level documents into configured category folders. It extracts readable text locally, then uses typesafe-ai/jev through Vercel AI Gateway for typed category, confidentiality, prompt-injection-risk, and subject decisions.

</details>

### doronp/jevc

<details><summary>README 발췌</summary>

Turn the rules your agent keeps ignoring into gates you can test.

</details>

### eran-broder/jev-skills

<details><summary>README 발췌</summary>

Skills without the context tax.

</details>

### EugeneBoondock/jevsql

<details><summary>README 발췌</summary>

For exact totals over large or encrypted datasets, use the streaming money API. It reads bounded batches and sums decimal values by currency without sending money arithmetic to a model.

</details>

### haseeb-heaven/jev-system-one

<details><summary>README 발췌</summary>

A polished terminal interface where OpenAI generates useful answers and TypeSafe Jev independently evaluates their relevance, reliability, and quality.

</details>

### paramjeetn/jev-cookbook

<details><summary>README 발췌</summary>

Jev is a "System One" AI model built by TypeSafe AI — a calibrated zero-shot semantic classifier, not a text generator. It takes a context state and typed questions, returning calibrated probability distributions instead of tokens. Because it doesn't generate text, Jev processes complex classificati

</details>

### benjamincanac/tia

<details><summary>README 발췌</summary>

An eve agent that triages GitHub issues. It runs as the hey-tia[bot] GitHub App through Vercel Connect and triages new issues by taking one decision per issue.

</details>

### bensyverson/goodall

<details><summary>README 발췌</summary>

A small Go library for programs where an AI model can use tools.

</details>

### bestagentkits/jev-skillful

<details><summary>README 발췌</summary>

A capability router for coding agents. It watches your prompts, decides whether a skill, MCP server, subagent or slash command you already have installed is relevant, and injects at most one suggestion into the agent's context.

</details>

### Foadsf/jev-for-engineers

<details><summary>README 발췌</summary>

TypeSafe's Jev is a System One model. It does not write text. You give it a state — any text or JSON — and a map of named, typed questions, and it returns one typed answer per question with a calibrated probability distribution attached.

</details>

### glamboyosa/docket

<details><summary>README 발췌</summary>

Docket is a Go terminal document classifier built around TypeSafe's Jev. It copies a document into a local library, extracts its text, asks Jev for typed classification decisions, and files the copy without moving or editing the source.

</details>

### h0j5bz0adh0-stack/jev-pilot

<details><summary>README 발췌</summary>

&gt; Fast System-1 Decision, Arbitration &amp; Safety Engine for Autonomous AI Agents &gt; Brings sub-second, zero-hallucination intuition to Claude, GPT, Gemini, Llama, Hermes, and custom agent runtimes.

</details>

### khmuhtadin/n8n-nodes-jev-classification

<details><summary>README 발췌</summary>

An n8n community node that classifies, scores and checks text with Jev, TypeSafe AI's "System One" model. Jev does not generate text: you send it a piece of state (a ticket, a review, a JSON record) plus typed questions, and it returns typed answers with calibrated probabilities. This node wraps tha

</details>

### Li-Evan/awesome-jev

<details><summary>README 발췌</summary>

&gt; Jev is TypeSafe's System One model. It answers typed questions about text with calibrated probabilities instead of generating prose, so code can branch, sort, and route on its judgments.

</details>

### mkotlikov/jev-grug

<details><summary>README 발췌</summary>

&gt; tiny vocabulary. big thought.

</details>

### nitoba/questions

<details><summary>README 발췌</summary>

Typed semantic decisions for TypeScript. Ask questions about your data, inspect the evidence, and decide what happens next using ordinary async/await or native Web Streams.

</details>

### npipeline/NPipeline

<details><summary>README 발췌</summary>

High-performance, streaming data pipelines for .NET

</details>

### reinhard-z/vision-jev

<details><summary>README 발췌</summary>

Listed in awesome-jev and awesome-typesafe-jev

</details>

### sumanmichael/jevlang

<details><summary>README 발췌</summary>

~ asks a question about a value and gets back a number or a label, never text. Here it is a probability, and the if fires at &gt;= 0.5. The model answering is TypeSafe's Jev, a hosted classifier that judges instead of writes.

</details>

### sumleo/prompt2jev

<details><summary>README 발췌</summary>

Natural language, an LLM prompt, or the code that runs one in. A Jev decision out: typed questions and a runnable script.

</details>

### vizuh/sabi

<details><summary>README 발췌</summary>

Adaptive routing for coding-agent trajectories.

</details>

### earlyaidopters/away-together-starter

<details><summary>README 발췌</summary>

A free, runnable starting point from Mark Kashef and Early AI Adopters.

</details>

### 1jehuang/jev-pr-labeler

<details><summary>README 발췌</summary>

Semantic GitHub pull request labeling with Jev, TypeSafe's typed decision model, through OpenRouter's Decisions API.

</details>

### abhishekashokvkumar/jev-mcp-dispatcher

<details><summary>README 발췌</summary>

Zero general-purpose LLM calls — anywhere in this pipeline, not for picking the tool, not for reading a parameter's value out of a sentence, not for anything. This is a proof of concept for a different way to do MCP tool dispatch: given a simple MCP (Model Context Protocol) server — one whose tools 

</details>

### alexei-led/pi-model-router

<details><summary>README 발췌</summary>

Stop changing models by hand.

</details>

### bcharleson/jev-gtm-cookbook

<details><summary>README 발췌</summary>

Open-source go-to-market recipes built on TypeSafe's Jev: code does the work, Jev makes the judgment calls, and each recipe runs locally on data you already own.

</details>

### BeLazy167/typesafe-mod

<details><summary>README 발췌</summary>

A Claude Code function hook that sends two kinds of decision to TypeSafe's Jev model.

</details>

### blingdivinity/jevseek

<details><summary>README 발췌</summary>

DeepSeek proposes the next token. Jev chooses it.

</details>

### carlosedm10/agi-jev-containment

<details><summary>README 발췌</summary>

Open-source AI agent monitoring, malicious-agent detection, and escalate-only containment for sandboxed LLM agents. Local HackSpain 2026 stack (AngryRobot dashboard): FastAPI, React/Vite, Neo4j. Classifies a chain of actions, not a single tool call. A model never pulls the plug.

</details>

### cobusgreyling/Jev

<details><summary>README 발췌</summary>

Choice · Score · Noul · parallel fan-out · confidence as a second axis Jev 1.13 · released 15 September 2026

</details>

### codaaiteam/jev-ai

<details><summary>README 발췌</summary>

A short, friendly starting point for Jev, the AI model from TypeSafe AI that answers with typed, calibrated decisions instead of text — so software can act on the output directly.

</details>

### DanielKillenberger/jev-predict-skill

<details><summary>README 발췌</summary>

Predict another skill's next closed decision — without running that skill.

</details>

### DeepBlueDynamics/typesafe-arena

<details><summary>README 발췌</summary>

Local markdown mirror of docs.typesafe.ai, crawled with grub-crawler on 2026-09-17. Starting page: Intent routing.

</details>

### deyna256/langchain-skill-router

<details><summary>README 발췌</summary>

needed, and only those are loaded, so a catalog of hundreds stays out of the prompt. Bring any judge: a hosted model, a self-hosted one, or plain rules. An adapter for

</details>

### Eurekaleo/awesome-jev-survey

<details><summary>README 발췌</summary>

An evidence survey of TypeSafe’s Jev and Jev-like typed decision models — calibration, selective control and open implementations.

</details>

### fazlerocks/jev-adblock

<details><summary>README 발췌</summary>

Bring your own TypeSafe AI key. Everything else runs in your browser.

</details>

### geilt/typesafe-cli

<details><summary>README 발췌</summary>

Small Python CLI + agent skill for TypeSafe System One (Jev).

</details>

### GenieRobot/typesafe-ai-rails

<details><summary>README 발췌</summary>

Community Rails integration for TypeSafe AI's System One API, built on the community typesafe-sdk Ruby gem. This project is not an official TypeSafe package.

</details>

### gitchw/LCT

<details><summary>README 발췌</summary>

&gt; "Decisions, Not Strings" meets "Free Calibrated Confidence" &gt; An open-source, ultra-low-latency System-One decision model family that extracts well-calibrated confidence directly from internal recurrent dynamics without reinforcement learning or token overhead.

</details>

### Hawxy/TypeSafeAI.Net

<details><summary>README 발췌</summary>

A .NET SDK for the TypeSafe AI System One API. Ask small, typed judgments about text or structured state and get calibrated probabilities back that your code can act on:

</details>

### iamvatsalpatel/tiershift

<details><summary>README 발췌</summary>

tiershift reads each request, picks the cheapest model tier that can handle it, and escalates on evidence. The judgment comes from TypeSafe Jev , a calibrated decision model. About 180 ms. Four cents per thousand routes.

</details>

### ickma2311/jev-baselines-eval

<details><summary>README 발췌</summary>

Independent evaluation of TypeSafe's Jev (System One typed-decision model) on intent classification and confidence-gated cascades, run on 2026-09-18, two days after Jev's public launch.

</details>

### instax-dutta/sysone-bench

<details><summary>README 발췌</summary>

An independent head-to-head benchmark of System One decision models. Laya (open weights), Jev (closed TypeSafe API) and Qwen with parallel constrained decoding (PCD) answer the same 1,190 cases and 1,550 typed questions in one run, from one sealed manifest, at one seed. Inputs are verified byte iden

</details>

### JabbaKadabra/SystemOneDotNet

<details><summary>README 발췌</summary>

Structured AI decisions for .NET — no prompt engineering, no output parsing.

</details>

### jon-devlapaz/tink-route

<details><summary>README 발췌</summary>

&gt; Dynamic, confidence-aware Agent Skill routing powered by TypeSafe Jev and Tink.

</details>

### kaustav1996/reflex

<details><summary>README 발췌</summary>

A calibrated System One model checks each tool call, turn and voice transcript in about 400 ms, and code decides what happens next.

</details>

### maker-KK/todo-jev

<details><summary>README 발췌</summary>

Choose the next step before your AI agent takes it.

</details>

### mateonunez/jod

<details><summary>README 발췌</summary>

Semantic schemas for TypeScript. Bind a state schema and a set of questions into one artifact, then get typed answers back.

</details>

### newuser7171/jev-gamepilot

<details><summary>README 발췌</summary>

Jev-GamePilot is a universal autonomous AI gaming agent powered by Laya (local sub-30ms System One inference) and TypeSafe's Jev System One (Choice, Score, Noul). It captures real-time gameplay at 60+ FPS, fuses instant local reflexes with high-level strategic reasoning, and executes physical hardwa

</details>

### nickthompson480/typesafe-ai-playground

<details><summary>README 발췌</summary>

A community playground for exploring TypeSafe AI with practical use cases, party games, dilemmas, and reasoning challenges. Pick an example, inspect its input and questions, and run it through the API.

</details>

### obetomuniz/auto-mode-for-paseo

<details><summary>README 발췌</summary>

&gt; [!NOTE] &gt; This project is an experiment. It explores what System 1 models can do as &gt; message routers. A System 1 model gives a fast, intuitive answer without &gt; step-by-step reasoning. TypeSafe Jev and Laya are System 1 models. &gt; Here, one of them only classifies each message and selects a preset.

</details>

### pCwOrM/werr

<details><summary>README 발췌</summary>

&gt; Motto: "When the Wave meets Error, we Recurse (werr)." &gt; "Werr is the reflex? Ver! (werr)." &gt; "Jev decisions come from 4B-parameter tensors; werr decisions come from infinite geometric waves, Euler thresholds, and recursive subdivision."

</details>

### Protocol-Lattice/harness-router

<details><summary>README 발췌</summary>

At decision points where several tools are genuinely plausible, give Jev a compact harness state and a fixed set of candidate tools. Jev chooses the next action; your main planner remains responsible for deep reasoning, free-form argument generation, code generation, obvious linear steps, and ambigu

</details>

### Query-farm/vgi-typesafe

<details><summary>README 발췌</summary>

A VGI worker, built by 🚜 Query.Farm

</details>

### RahulBalakavi/claude-code-jev

<details><summary>README 발췌</summary>

Auto-mode classifies every action before Claude Code runs it: allow, block, or ask. That gate fires dozens of times an hour, in the hot path, ahead of every tool call. It is a System 1 job, a fast reflex, but it runs on a System 2 model, a frontier chat model built for reasoning.

</details>

### rmosleydb/jev-smart-router

<details><summary>README 발췌</summary>

A Databricks App that uses TypeSafe JEV (System One) to decide which model should answer each message, then runs the real inference on the chosen Databricks Foundation Model API (FMAPI) endpoint.

</details>

### sarathi-aiml/jevsql

<details><summary>README 발췌</summary>

A weekend experiment with Jev, TypeSafe AI's "System One" model that returns typed, probability-calibrated decisions instead of text.

</details>

### satviksinha/jev-model-router

<details><summary>README 발췌</summary>

Picks the model for each turn with Jev, TypeSafe's decision model. Supports both TypeSafe's direct API and the Vercel AI Gateway.

</details>

### SeeAPI/awesome-jev-use-cases

<details><summary>README 발췌</summary>

Discover public projects using Jev for automation, model routing, search and business decisions. See what Jev judges, how software uses the answer, and what you can reuse. Use the Jev solution finder Skill to find relevant cases and plan your implementation.

</details>

### simota/tenbin

<details><summary>README 발췌</summary>

A repository for using TypeSafe AI (System One API, model Jev) from a coding agent at design time. It has three parts.

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

### waynesutton/ask-jev-ai

<details><summary>README 발췌</summary>

A public wall where anyone asks a question in three to fifteen words and Jev, TypeSafe's judgment model, answers yes, no, or it depends in about 100 milliseconds. Every judged ask lands on the wall in realtime, with a running count toward one million and the exact cost of getting there.

</details>

### zcoder-run/rust-sysone

<details><summary>README 발췌</summary>

By the same author of the genai crate (Jeremy Chone).

</details>

### 24601/rh-guard

<details><summary>README 발췌</summary>

RH Guard (rh-guard) sits in coding-agent hooks (Claude Code, Cursor, Codex, Grok Build, Pi, Amp, Prime Agent, DeepSeek Harness) and blocks reward-hacking tool use—tampering with graders, hidden tests, or the eval process—while steering toward checks the agent cannot game. Exo is support via ToolRunt

</details>

### allenporter/home-assistant-laya

<details><summary>README 발췌</summary>

A fast, fully local conversation agent for Home Assistant Assist powered by the open-weight Laya decision engine.

</details>

### AMMIROSOH/jev-2048-selenium

<details><summary>README 발췌</summary>

This Python application opens 2048.org with Selenium and plays automatically. The default hybrid mode combines a time-bounded expectimax search with a real TypeSafe Jev Choice decision on every move.

</details>

### ArmanJR/Jev-Persian-Benchmark

<details><summary>README 발췌</summary>

Benchmarks for Jev on 480 authored general Persian questions and a 24-excerpt classical Persian poetry pilot (48 main questions plus 48 controls). Related general questions are batched; poetry questions run individually. Raw responses are saved and answers are scored locally, without a runtime model

</details>

### AstonyCat/jev-tab-grouper

<details><summary>README 발췌</summary>

不会真的有人手动整理 Chrome 标签页吧？

</details>

### atarikcaliskan/jevball

<details><summary>README 발췌</summary>

22 Jev models, one match. JevBall is a football match in a 3D stadium where each of the 22 players is an independent decision-maker powered by Jev by TypeSafe AI (Jev is TypeSafe AI's System One model). Watch the match, open any player's head to see the options it weighed, or press J and take over a

</details>

### azterizm/jev-vs-sovereign-benchmark

<details><summary>README 발췌</summary>

Benchmark suite evaluating TypeSafe AI Jev System One (model typesafe/jev-1.13 via OpenRouter) against a specialized sovereign architecture (DistilBERT, ColBERT-v2, DeBERTa-v3) across three retrieval nodes on UK primary legislation.

</details>

### bojansandhaus/jev-decisions-hermes

<details><summary>README 발췌</summary>

Jev Decisions Plugin for Hermes (and other AI Agents) gives Hermes extra tools for reviewing a plan, checking an answer against its sources, and assessing whether a task is really finished. You can ask for a review in a normal conversation. Your usual model continues to do the work.

</details>

### Chandler-Sun/chat2jev

<details><summary>README 발췌</summary>

Convert OpenAI-compatible Chat Completions requests into TypeSafe System One (Jev) State / Questions, compare generated text with structured judgments, and publish reusable question sets as proxy routes.

</details>

### Charlyhno-eng/jev-codex-pilot

<details><summary>README 발췌</summary>

JEV Codex Pilot turns software requests into focused, traceable Codex tickets. It recommends a model and reasoning effort, gives Codex the project instructions, and keeps implementation, checks, usage, and recovery visible in one local workspace.

</details>

### FirasSX914/Janus

<details><summary>README 발췌</summary>

Janus sends each decision to a small model or to a larger one, according to how confident the small model is. It measures where that line sits on your data before it routes anything. Janus ships no default threshold: it measures one.

</details>

### flaviusapop/jev-router

<details><summary>README 발췌</summary>

Automatic model routing for Claude Code, OpenAI Codex, the Grok CLI and opencode. Each turn goes to the cheapest model and reasoning depth that can actually finish it — a typo to the fast tier, an unknown-cause bug to the strong one — with the decision made by Jev, TypeSafe's System One decision mod

</details>

### fritzprix/systemone-lite

<details><summary>README 발췌</summary>

Local typed decisions on a 0.5B model: you pass state + closed questions (yes/no, choice, score); it returns one discrete answer per question by scoring option tokens — not by writing JSON.

</details>

### Gerry9000/awesome-jev

<details><summary>README 발췌</summary>

&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;

</details>

### gholtzap/jev-codex-model-and-effort-router

<details><summary>README 발췌</summary>

- macos - Jev api key

</details>

### harrymunro/decision-first

<details><summary>README 발췌</summary>

Teach your coding agent to try Jev before it writes another regex, and to write down what happened.

</details>

### ishantanu/jevmetrics

<details><summary>README 발췌</summary>

Jev inference for metric assessment and retention in OpenTelemetry.

</details>

### islee23520/omo-jevlike-router

<details><summary>README 발췌</summary>

A Jev-style one-pass skill router for OmO.

</details>

### JoacoMarc/jev-harness-router

<details><summary>README 발췌</summary>

One fast call decides how an agent turn should run — then runs it.

</details>

### JustineDevs/meta-architect

<details><summary>README 발췌</summary>

&gt; [!NOTE] &gt; Meta-Architect is a workflow layer for teams that want architecture, evidence, review, and release discipline before build execution. &gt; Meta-Architect does not replace your coding runtime. &gt; It wraps that runtime with architecture, evidence, gate enforcement, and release-sensitive workfl

</details>

### laguagu/jev-skills

<details><summary>README 발췌</summary>

A curated collection of skills, example projects and tools for Jev. Jev turns text and application state into choices, scores and yes probabilities that code can use.

</details>

### lexingtonhibiki/judgekit

<details><summary>README 발췌</summary>

&gt; Runtime judgment engine for System One (judge) models. &gt; Define a judgment task once in YAML, execute it natively on TypeSafe Jev's &gt; decisions API or translate it to any OpenAI-compatible LLM, get typed decisions &gt; with calibrated probabilities — and measure what every judgment costs.

</details>

### lgy1027/jevshield

<details><summary>README 발췌</summary>

Framework-agnostic decision control for AI Agent routing and tool execution, powered by Jev (System-1 Models).

</details>

### lomeshdutta/skill-router

<details><summary>README 발췌</summary>

A small command-line tool for Claude Code that picks the right skill for your session.

</details>

### Manavarya09/verdict

<details><summary>README 발췌</summary>

Replace LLM calls for routing, guardrails, triage and policy checks with typed answers in milliseconds, on a CPU, with a probability you can trust.

</details>

### morcoan/JMP

<details><summary>README 발췌</summary>

Joint Model Participation means giving each model a specific job—not asking one model to do everything. JMP is a local desktop coding agent: one model chooses the next action, a selected generator supplies its arguments, and real tools execute the validated call.

</details>

### n23eos/jev-skills

<details><summary>README 발췌</summary>

Seven installable skills for Claude Code and Codex. Ask your agent to pick a relevant skill, choose a suitable model, or decide where to investigate and test first. Jev makes a small, bounded choice; your coding agent does the work.

</details>

### n4ze3m/hmm

<details><summary>README 발췌</summary>

Hmm is a small open model that answers questions about your data with probabilities instead of text. You give it a state (any text or JSON) and a few typed questions, it gives back a yes/no probability, a choice or a score.

</details>

### OpeOginni/oc-plugins

<details><summary>README 발췌</summary>

OpenCode V2 plugins by Ope Oginni, developed in one monorepo and released as independent npm packages.

</details>

### raihankhan-rk/jevarena

<details><summary>README 발췌</summary>

Jev fights Jev in parallel universe — on Snake.

</details>

### replynodes/jev-web-analyzer

<details><summary>README 발췌</summary>

Paste a homepage. See what a first-time visitor — and Jev — can actually tell about it.

</details>

### rsdkrasen/hermes-jev-router

<details><summary>README 발췌</summary>

Cut expensive Hermes main-model tokens with a cheap TypeSafe Jev decision layer.

</details>

### samtay32/jev-system-architect

<details><summary>README 발췌</summary>

A system-architecture skill for TypeSafe AI's Jev / System One. Continuously asks: Where does this system contain fuzzy semantic judgment that should become a small Jev decision primitive?

</details>

### siroccomask/snake-jev

<details><summary>README 발췌</summary>

A desktop Snake experiment powered by Jev / System One. Jev assesses the board; Python combines its answers into a move. The original p5 Snake game handles movement, food, growth, and collisions.

</details>

### smithclay/dbt_jev

<details><summary>README 발췌</summary>

dbtjev evaluates SQL values with Jev through either TypeSafe AI's hosted API or OpenRouter. The same public macros work on DuckDB and ClickHouse. They expose Jev Choice as a nullable label, Noul as a nullable match probability, and Score as a nullable numeric rating.

</details>

### sontakey/awesome-jev

<details><summary>README 발췌</summary>

Public projects that use Jev, TypeSafe AI's System One model. Unofficial. Not affiliated with TypeSafe AI.

</details>

### symfony/ai-type-safe-platform

<details><summary>README 발췌</summary>

TypeSafe platform bridge for Symfony AI.

</details>

### tylerjharden/ailerix

<details><summary>README 발췌</summary>

Type-safe model router. An OpenRouter competitor that uses TypeSafe Jev (System One) to classify every request, then walks an Artificial Analysis cost-per-task Pareto chain to bank a provider. You never name a model. The only public slug is ailerix/auto.

</details>

### walidboulanouar/jev-agent-kit

<details><summary>README 발췌</summary>

Small command line and MCP tools that give agents fast, typed decisions from TypeSafe's Jev model. One binary, no dependencies, Node 18 or newer.

</details>

### WebGrga/btc-jev-signal

<details><summary>README 발췌</summary>

A public, non-trading BTC forecasting experiment using TypeSafe Jev with public Kraken spot and Binance futures market data.

</details>

### 0xnairb/research_desk

<details><summary>README 발췌</summary>

A TypeSafe Jev demonstration: live company profiles and headlines from yfinance, read by a System One model into ranked, grounded, routed trade ideas — fast analysis of news and tickers.

</details>

### 0xwhrari/grok-jev-guard

<details><summary>README 발췌</summary>

Local policy owns hard boundaries. Jev judges ambiguity. Grok Bot executes inside the returned envelope.

</details>

### 455-dIAO/jev-codex-router-skill

<details><summary>README 발췌</summary>

按任务需求选择 模型 × 推理强度，把路由流程装进一个可分享的 Codex Skill。

</details>

### AABBAASS1/jev-router

<details><summary>README 발췌</summary>

CLI that asks Jev which agent should handle a task, then opens that app (or the website) and dumps the prompt in.

</details>

### AbdelStark/s1-rs

<details><summary>README 발췌</summary>

Typed System One decisions for Rust.

</details>

### AnthusAI/Jev-Calibration

<details><summary>README 발췌</summary>

&gt; TL;DR: Jev returns a probability with every answer, and how strongly it favors an answer is its confidence. That confidence is only useful if it matches reality: when Jev is 90% sure, it should be right about 90% of the time. On 8,801 labeled sentiment examples, Jev's raw probabilities didn't do t

</details>

### asfarsadewa/human-compiler

<details><summary>README 발췌</summary>

A compiler for human language. Paste an email, a Slack message, a LinkedIn post, a PR comment, or a memo. Get diagnostics.

</details>

### az9713/jev-model-router

<details><summary>README 발췌</summary>

A small web chat where Jev, TypeSafe's decision model, picks which LLM should answer each message. The chosen model then replies. Both calls go through the Vercel AI Gateway with one key.

</details>

### bgrablin/hermes-switchyard

<details><summary>README 발췌</summary>

Hermes Switchyard helps Hermes Agent choose a relevant skill, adjust reasoning effort, and work through browser or desktop tasks. It uses Jev for bounded decisions. Hermes remains in charge of actions and the final result.

</details>

### Bodila51/Jev-chooses-a-LLM

<details><summary>README 발췌</summary>

Jev Router for Cursor

</details>

### codaaiteam/jev-mcp

<details><summary>README 발췌</summary>

An MCP server that gives any agent (Claude Code, Codex, Cursor, Pi, …) fast, typed, calibrated decisions from Jev, TypeSafe AI's System One model — classify, score, check yes/no, and gate risky tool calls, all as one API call under the hood.

</details>

### Davidasx/pi-typesafe-approve

<details><summary>README 발췌</summary>

A Pi extension that auto-approves routine Bash commands using a System One / Jev decision model, and escalates everything else to a human.

</details>

### ddfeyes/jev-mode

<details><summary>README 발췌</summary>

Cut your coding agent's token use on bulk semantic judgments.

</details>

### E-FL/typesafe-as-a-judge

<details><summary>README 발췌</summary>

TypeSafe-as-a-Judge is a dual Codex and Claude Code plugin that gives coding agents a bounded semantic-judgment layer powered by TypeSafe Jev.

</details>

### gazelle93/decision-models-under-pressure

<details><summary>README 발췌</summary>

Seven systems do the same job: take a piece of text, a question, and a list of candidate answers, and return a probability over those candidates. I measured them against each other as that job gets harder in the three ways it gets harder in production. The candidate list grows, the option order chan

</details>

### getexcited/stepwarden

<details><summary>README 발췌</summary>

A Claude Code plugin that verifies each agent action before it executes — not after the run finishes. It routes every tool call through a purpose-built verification model, TypeSafe AI's Jev, instead of a full LLM review, which is what makes checking every step affordable.

</details>

### grishahq/decisionbridge

<details><summary>README 발췌</summary>

Bring the decision-model approach to existing LLMs.

</details>

### gualican/jev-model-router

<details><summary>README 발췌</summary>

Selects the right OpenAI model (Luna / Terra / Sol / Astra) using TypeSafe's Jev model to classify request difficulty and stakes. It returns a decision; your application makes the downstream model request.

</details>

### haibt163/jev

<details><summary>README 발췌</summary>

A TypeSafe System One playground: give Jev a messy real-world input and it turns it into fast, typed judgments that application code can use.

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

### innocentdiaz/s1_ruby

<details><summary>README 발췌</summary>

&gt; AI built for interfacing with code (useful) — not with people (too good to be true).

</details>

### itscloud0/codex-jev-native-router

<details><summary>README 발췌</summary>

A small decision layer for Codex Desktop and CLI. Codex still does the coding.

</details>

### JedimEmO/typesafe-client

<details><summary>README 발췌</summary>

A typed, async Rust client for the TypeSafe System One API.

</details>

### Jessie-QingYu/jev-in-the-wild

<details><summary>README 발췌</summary>

Real-world use cases, open-source projects, benchmarks and criticism of Jev, TypeSafe AI's System One model — what people actually build with it, and where it actually fails.

</details>

### jevaidev/jev-ai-radar

<details><summary>README 발췌</summary>

Daily curated Jev AI projects, System One community models, and real-world use cases.

</details>

### JimmyWesley/rlcd-gateway

<details><summary>README 발췌</summary>

A self-hosted gateway for LLMs and decision models. Claude Code, Codex, OpenCode and any OpenAI or Anthropic SDK app route every call to the provider you choose, with the context the model no longer needs pruned to cut token costs. Apps that call Jev or open-rlcd System One decision models change on

</details>

### JohnDotOwl/awesome-jev

<details><summary>README 발췌</summary>

&gt; Curated list of projects built on Jev, TypeSafe AI's System One model for typed decisions.

</details>

### Justmalhar/awesome-jev-apps

<details><summary>README 발췌</summary>

Jev is a System One model. It does not generate text. You hand it state and typed questions; it returns calibrated probabilities your code consumes directly.

</details>

### Kunyanli230/jev-clean

<details><summary>README 발췌</summary>

jev-clean is an experimental, decision-first data cleaning system powered by Jev. Instead of asking a model to rewrite data directly, jev-clean computes bounded repair candidates locally and uses Jev to assess whether each candidate is applicable and semantically safe.

</details>

### Larkspur-Wang/Jev_steer_or_queue

<details><summary>README 발췌</summary>

Your coding agent is busy. You send another message. Should it change course, wait its turn, or stop? A hook that lets TypeSafe Jev make that call in about half a second.

</details>

### lazniak/jevskill

<details><summary>README 발췌</summary>

Main language: Polish · English subtitles

</details>

### liuhongrui087-art/jev-routed-agent

<details><summary>README 발췌</summary>

English | 简体中文 A multi-step reasoning agent built with LangChain v1 + Jev + Flask + Ollama.

</details>

### lucianfialho/jev-model-router

<details><summary>README 발췌</summary>

A cost-optimized model router for OpenRouter, using TypeSafe's Jev to classify each request and pick the cheapest model that can actually handle it.

</details>

### m0rphtail/triagedy

<details><summary>README 발췌</summary>

&gt; Because alert triage shouldn't be a tragedy.

</details>

### Mandrilsquad1441/jev-model-router

<details><summary>README 발췌</summary>

A plugin for Claude Code , the Claude desktop app and Codex , powered by TypeSafe's Jev decision model.

</details>

### marcreichel/laya-php

<details><summary>README 발췌</summary>

Classify text in PHP without paying for an LLM API. Route support tickets, spot churn risk and score urgency, in 100+ languages, on your own server, and get the answers back as typed enums, ints and bools.

</details>

### mingleiw/jev-oncall

<details><summary>README 발췌</summary>

Open-source alert triage with Jev, TypeSafe's System One decision model. Each production alert gets one Jev call with four typed questions. Jev returns probabilities, and plain, auditable code turns them into routing decisions. Jev never pages anyone. It only judges.

</details>

### minorun365/jev-cloud-quiz

<details><summary>README 발췌</summary>

三大クラウド（AWS / Azure / Google Cloud）の機能名を選ぶと、どのクラウドのものかを Jev（TypeSafe AI の System One モデル）が確率つきで判定するデモです。

</details>

### mzainzulifqar/jev-php-sdk

<details><summary>README 발췌</summary>

A small, framework-agnostic PHP client for TypeSafe's System One API.

</details>

### n3ndor/n8n-nodes-typesafe-jev

<details><summary>README 발췌</summary>

An n8n community node for TypeSafe Jev, the TypeSafe System One model for fast, structured decisions.

</details>

### ojusave/beat-jev

<details><summary>README 발췌</summary>

A penalty shootout against TypeSafe Jev. Take turns shooting and keeping goal. One Render Workflows task owns the match, with scores saved in Render Postgres.

</details>

### onlyjq04/jev-agent-hooks

<details><summary>README 발췌</summary>

Hooks that put TypeSafe Jev in two places in a coding agent's loop: picking which skill to load for a turn, and picking which model a subagent gets. One shared implementation runs on Claude Code, Codex, pi, and Grok Build (subagent routing only; see below).

</details>

### Partysun/jigor

<details><summary>README 발췌</summary>

This is a zero-shot classifier models gateway or runner.

</details>

### PistachioAIHQ/jev-synergy-screening

<details><summary>README 발췌</summary>

Viral life-sciences demo: screen MEDLINE title + abstract as include vs exclude with TypeSafe Jev (System One), compared to Abstract Triage gold from Cohen et al. 2006.

</details>

### pZacca/askjev

<details><summary>README 발췌</summary>

Unofficial MCP server for Jev, Typesafe AI's System One model. Not affiliated with Typesafe AI.

</details>

### q3learners/jev-demofast

<details><summary>README 발췌</summary>

One sentence in, a product demo video out. jev-demofast drives your real product in a browser, outlines every element it uses, and renders an MP4 or GIF, optionally narrated by a human-sounding voice. The step-by-step decisions are made by Jev, a fast "System One" decision model. On your own app, Je

</details>

### rahulthakore16/n8n-nodes-jev

<details><summary>README 발췌</summary>

Add a frontier-intelligence 'smart if-statement' to any n8n workflow — typed decisions with calibrated confidence in ~100ms, no prompt engineering.

</details>

### rishi-raj-jain/pg-redact

<details><summary>README 발췌</summary>

A live demo of content-aware PII redaction, enforced in Postgres: a support inbox stored in Neon Postgres, where Jev (TypeSafe's System One model) decides per span whether each piece of text is personal data and of what kind. Switch your role (Guest → Support Agent → Admin) and watch a redact() SQL 

</details>

### robokrunch/jev-physical-ai

<details><summary>README 발췌</summary>

Real measured numbers putting TypeSafe's Jev to work on robots, fleets, and edge hardware.

</details>

### roprgm/tierjev

<details><summary>README 발췌</summary>

Tier lists ranked by Jev, TypeSafe AI's classifier model. Pick a set, state a criterion, and Jev sorts it into S to F. Share the result as a link with its own social card.

</details>

### rusharlabs/house-party-protocol

<details><summary>README 발췌</summary>

Operate coding agents under evidence, not trust.

</details>

### sameerkhan24/decidekit

<details><summary>README 발췌</summary>

Typed, confidence-aware AI decisions for software.

</details>

### suidouble/let-jev-speak

<details><summary>README 발췌</summary>

Coax free-text answers out of TypeSafe's classification API by decoding one word at a time.

</details>

### thesyedammar/tracky

<details><summary>README 발췌</summary>

&gt; Type "hidden charges" on a page that never uses those words and Tracky highlights the sentence you actually meant — with receipts: the exact text, in its exact place, nothing invented.

</details>

### tomek7667/cbjev

<details><summary>README 발췌</summary>

Every question of a call shares one encoding of the state: 3 ms for one question, 11 ms for ten questions over a 500-token document. A self-hosted, Jev-compatible, faster and better-calibrated successor to Laya .

</details>

### ttlequals0/MinusPodJev

<details><summary>README 발췌</summary>

MinusPodJev is a FastAPI proxy that makes TypeSafe Jev available to MinusPod as an OpenAI-compatible ad-detection model. This repository also contains the standalone offline benchmark that measured Jev against 84 chat models on a 14-episode corpus.

</details>

### tylerjharden/harden-jev-decides

<details><summary>README 발췌</summary>

JEV picks which stream idea we turn into a live MVP.

</details>

### ussyverse/hermes-jev-router

<details><summary>README 발췌</summary>

An opt-in Hermes plugin that uses TypeSafe Jev to assess task complexity and deterministic policy to select an allowed model within configured cost, token, context, latency-estimate and capability constraints.

</details>

### wustep/jev-playground

<details><summary>README 발췌</summary>

Can a System One model steer music across styles?

</details>

### yairshy/decido

<details><summary>README 발췌</summary>

Ask typed questions about evidence, keep every probability, and use the results in ordinary Python. Start with Jev or supply your own decision provider.

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

### 0xShin0221/openpoke-meets-jev

<details><summary>README 발췌</summary>

A fork of OpenPoke that stops asking a chat model to make decisions.

</details>

### 4esv/jev-eval

<details><summary>README 발췌</summary>

Benchmark TypeSafe Jev against any OpenRouter model or a local checkpoint on labelled classification data: accuracy, calibration, confidence distribution, latency, cost. Ships five tasks; the results below are Jev, GPT-5.6 Terra, and three open Jev-shaped models.

</details>

### afurm/typesafe-sdk-ruby

<details><summary>README 발췌</summary>

A community-maintained Ruby client for TypeSafe AI, with typed answer objects, retries, timeouts, cancellation, and configurable logging.

</details>

### akanksha-rajhans-ai/diffguard

<details><summary>README 발췌</summary>

Probabilistic pull-request risk triage for the AI-generated-code era.

</details>

### allenporter/home-assistant-typesafe

<details><summary>README 발췌</summary>

A Home Assistant custom conversation integration powered by TypeSafe AI System One (Jev model family) for fast, structured intent routing, entity resolution, and device control.

</details>

### aniruddh-krovvidi/switchboard

<details><summary>README 발췌</summary>

A guardrail and model router for LLM gateways, built on Jev, TypeSafe AI's "System One" model (launched 2026-09-15), plus an independent evaluation of whether Jev's probabilities can be trusted.

</details>

### ARCJ137442/jev-switch

<details><summary>README 발췌</summary>

Jev Switch 是一个轻量的 Jev 协议模型网关：把对外服务入口连接到可复用的上游接入配置，由可编辑路由图决定实际调用路径。Rust/axum daemon 承担协议转换、路由和转发；模型推理由上游服务执行。交付形态包括 React 控制台、Tauri 桌面应用与 Docker 服务。

</details>

### Ashadeepa/typesafe-showcase

<details><summary>README 발췌</summary>

There's no shared TypeSafe key on the server — every visitor pastes their own TYPESAFEAPIKEY into the bar at the top of the page (stored only in their browser's localStorage). Each Server Action takes that key as a parameter and builds its own TypeSafeClient per request (lib/typesafe-client.ts) — no

</details>

### assistant-ui/jevia

<details><summary>README 발췌</summary>

Jevia is an outcome-aware model router for coding agents. It asks Jev for a typed routing decision, applies a deterministic safety policy, and records the eventual result so later decisions can use evidence from earlier runs.

</details>

### baize7815/jev-mcp-open-source

<details><summary>README 발췌</summary>

自部署的 MCP 网关，运行在 Cloudflare Workers 上，把 TypeSafe / Jev 的 System One 模型包装成九个工具，供 AI 助手在本地完成意图路由、检索结果重排、批量语义判断这类"判断但不生成长文"的工作。配套提供一个 Codex Skill，让助手在合适的决策点主动调用它。

</details>

### bojansandhaus/jev-home-assistant-sentinel

<details><summary>README 발췌</summary>

A safety boundary for AI-assisted Home Assistant decisions.

</details>

### carldaws/hunch-ts

<details><summary>README 발췌</summary>

Probabilistic control flow for TypeScript.

</details>

### cbetz/extremely-specific-council

<details><summary>README 발췌</summary>

Twelve members. Zero qualifications. Your idea. Their problem.

</details>

### CMaintz/jev-triage

<details><summary>README 발췌</summary>

Fast, near-free GitHub issue triage — powered by TypeSafe AI's Jev.

</details>

### codaaiteam/jev-typesafe-ai

<details><summary>README 발췌</summary>

Practical notes and examples for Jev, TypeSafe AI's System One model — the AI that returns typed, calibrated decisions for software instead of text.

</details>

### copyleftdev/braess-router

<details><summary>README 발췌</summary>

A bounded Rust semantic router powered by Jev and Poise. Jev selects a handler from your catalog; Poise selects an endpoint in its pool. Uncertain decisions return a local fallback.

</details>

### copyleftdev/jevlin

<details><summary>README 발췌</summary>

A typed Zig SDK for TypeSafe AI's Jev. Ask yes/no, classification, and scoring questions in one request. Get probabilities and Zig enums back.

</details>

### creativoma/here-we-go-jev

<details><summary>README 발췌</summary>

A one-page playground and test bench for Jev, TypeSafe's System One model. Jev evaluates a state against typed questions and returns structured answers with calibrated probabilities instead of text.

</details>

### cvsgireesh/jev-usher

<details><summary>README 발췌</summary>

The doorman for your context window.

</details>

### d0nj/opencode-smart-reasoning

<details><summary>README 발췌</summary>

Per-request smart reasoning routing for OpenCode agents, decided by Jev (TypeSafe SystemOne via OpenCode Zen).

</details>

### ddlaws0n/jevportfolio

<details><summary>README 발췌</summary>

A portfolio triage engine built on TypeSafe's Jev.

</details>

### de-niji/jev-hermes

<details><summary>README 발췌</summary>

TypeSafe Jev for Hermes Agent. A drop-in Hermes plugin (and skill) that hands cheap, typed decisions to Jev (System One) through OpenRouter’s Decisions API — so the expensive model only runs when it has to.

</details>

### DejaAI2/JevNext

<details><summary>README 발췌</summary>

MiniJev, minus the ceiling: a Jev-style decision model on a Qwen3-0.6B backbone (LoRA, rank 16), fused with a full OpenAI-compatible generation server — one set of weights, two capabilities, zero-copy LoRA switching. Built and benchmarked end-to-end on Apple Silicon (MPS).

</details>

### Dililianxice/jev-inner-speech-bci

<details><summary>README 발췌</summary>

This project started with a practical question rather than a new decoder architecture:

</details>

### dingw530/playwright-jev

<details><summary>README 발췌</summary>

一个以 Node CLI 为核心的语义 E2E 测试工具：

</details>

### dog-last/awesome-jev

<details><summary>README 발췌</summary>

The guide that answers "should I use Jev, and how" — not just another link directory.

</details>

### ekil1100/pi-auto

<details><summary>README 발췌</summary>

A Pi extension that automatically selects the current model's thinking effort before each task. It adjusts effort only—never switches your model.

</details>

### EnesDemir143/jev-laya-benchmark

<details><summary>README 발췌</summary>

A local benchmark comparing TypeSafe Jev and laya-mlx for structured issue classification.

</details>

### epiphany-dynamics/port-cleanup

<details><summary>README 발췌</summary>

A Jev-powered native macOS utility for evidence-backed, human-confirmed cleanup of stale listening ports.

</details>

### ericmjl/seems-laya

<details><summary>README 발췌</summary>

Seems was created by kavehmz. It is a programming language with judgment built in: Python plus a few words, where a condition can be plain English and a decision model answers it with a probability. The language design, the translator, the runtime and the playground are all upstream's work (kavehmz/

</details>

### fabricioctelles/modelsystem

<details><summary>README 발췌</summary>

&gt; Decision Models: AI that decides, not writes.

</details>

### FlyPig23/Codex_ChatGPT_JEV_Switch

<details><summary>README 발췌</summary>

&gt; ChatGPT 负责思考，Codex 负责干活，Jev 决定什么时候该谁上。

</details>

### forestwas/gmail-jev

<details><summary>README 발췌</summary>

Gmail inbox helper built around TypeSafe Jev.

</details>

### FrancyJGLisboa/decision-system-forge

<details><summary>README 발췌</summary>

One-page explainer (PDF, editable SVG). The Forge compiles source material into evidence-backed semantic judgments, legal action surfaces, and an evaluated runtime. Semantic judgments inform action selection but never authorize actions; deterministic code owns legality, policy, and execution.

</details>

### gentslava/pr-scout

<details><summary>README 발췌</summary>

Какие pull request стоит взять — за пару минут и 30 центов вместо дня ревью.

</details>

### gmaxxxie/jev-router

<details><summary>README 발췌</summary>

Per-prompt model routing for Pi, driven by Jev (TypeSafe System One).

</details>

### hemanth/jevish

<details><summary>README 발췌</summary>

Semantic pattern matching and zero-shot judgment in JavaScript. Jev-ish: behaves like TypeSafe Jev in local CPU cache ( = 0.70, margin &gt;= 2.0). When an input is obvious, it finishes in microseconds. When it is genuinely ambiguous or out of vocabulary, { cascade: true } speculatively escalates to neu

</details>

### hemanth/pkg-gate

<details><summary>README 발췌</summary>

Pre-install security gate for npm lifecycle scripts using TypeSafe System One.

</details>

### hemanth/tc39-atlas

<details><summary>README 발췌</summary>

An interactive web application applying the TypeSafe AI System One paradigm (Jev) to the live corpus of ECMAScript / TC39 proposals.

</details>

### hoangngochuong24947-gif/jev-figure-router

<details><summary>README 발췌</summary>

AI Agent 通用制图与多模态可视化总路由：毫秒级意图决策 + 六大多模态渲染分支 涵盖顶刊学术数据图、系统架构拓扑图、交互式矢量 SVG、演示汇报幻灯片、材料计算 3D 渲染与 AI 概念生成。

</details>

### huzeyfe07/jev-route

<details><summary>README 발췌</summary>

An AI agent intent &amp; tool router for Python. JevRoute sits in front of your agents, tools and model calls: it asks the Jev decision engine which capability should handle an input, applies a confidence gate, and only then invokes the matching handler.

</details>

### ibrahimcesar/jevdev

<details><summary>README 발췌</summary>

A coding-agent harness built around Jev, TypeSafe's System One decision model.

</details>

### JGalego/Jevs-Garage

<details><summary>README 발췌</summary>

A workshop full of small, inspectable experiments for TypeSafe System One models. Each bay gives Jev a realistic state, asks typed questions, and lets ordinary Python policy decide what happens next.

</details>

### JH3lou/GridCue

<details><summary>README 발췌</summary>

&gt; Ask a dense grid a plain question. See the view that answers it.

</details>

### jqueryscript/awesome-jev

<details><summary>README 발췌</summary>

A curated list of TypeSafe Jev resources, SDKs, gateways, agents, MCP servers, applications, benchmarks, examples, independent System One implementations, and open-source Jev alternatives.

</details>

### juancamiloqhz/roverlab

<details><summary>README 발췌</summary>

A browser-based planetary rover sandbox for experimenting with autonomous decisions using TypeSafe AI.

</details>

### jyatesdotdev/jev-logtriage

<details><summary>README 발췌</summary>

Your code keeps the thresholds. Nothing is executed.

</details>

### lambertsj/beatjev

<details><summary>README 발췌</summary>

A human vs. TypeSafe's Jev in a 25-round spam-or-not reaction race. Each round has a 3-2-1 countdown. When it hits zero, the message appears, your timer starts, and the page asks Jev the same question, all on the same tick. After 25 rounds, a results screen compares speed and accuracy and gives you 

</details>

### LamplighterPaul/forma-system1-experiment

<details><summary>README 발췌</summary>

Experimental. How fast and cheap can design get if a small, fast model makes the decisions and a traditional LLM is only allowed to write the words?

</details>

### mabodx/awesome-jev

<details><summary>README 발췌</summary>

&gt; A community directory of open-source projects built on Jev, TypeSafe AI's System One model for typed decisions.

</details>

### Madikhan33/jev_codex

<details><summary>README 발췌</summary>

Context-aware task routing and coordinated subagents for local Codex.

</details>

### mameli/jev-vs-luna

<details><summary>README 발췌</summary>

A small, reproducible English benchmark comparing ~typesafe/jev-latest through OpenRouter's Decisions API with openai/gpt-5.6-luna through its chat completions API. Both receive the same review text and the same English classification rubric: topic, sentiment, inferred stars, whether a reply is need

</details>

### marcus/frost

<details><summary>README 발췌</summary>

A model router built on TypeSafe. A Haplab project.

</details>

### MattiooFR/mcp-server-jev

<details><summary>README 발췌</summary>

Give Codex, Claude, and other MCP clients a tool for typed decisions with TypeSafe Jev.

</details>

### minhgv/jev-mcp

<details><summary>README 발췌</summary>

MCP server that puts TypeSafe Jev on the coding loop for OpenCode, OMP, Cursor, Codex, CI, and other MCP clients.

</details>

### miounet11/jevcode

<details><summary>README 발췌</summary>

Jev 技术解决方案与最佳实践 — www.jevcode.ai

</details>

### mkeco/Cerebellum-2B

<details><summary>README 발췌</summary>

🇨🇳 中文说明 | 🇺🇸 English Documentation | 🏛️ 深度架构白皮书

</details>

### muse0509/jev-preflight

<details><summary>README 발췌</summary>

Catch risky code changes before Claude Code finishes the turn.

</details>

### nadeemcite/jev-crash-course

<details><summary>README 발췌</summary>

Traditional software can only handle the branches you hardcoded. Agentic systems hand every step to an LLM — flexible, but slow, expensive, and hard to predict. Smart software is the middle path: a fast, cheap decision model at each branch point, with the LLM reserved for the one step that actually 

</details>

### ndolinschi/pulselane

<details><summary>README 발췌</summary>

Clinic triage decisions powered by TypeSafe Jev (System One).

</details>

### ndolinschi/swarmrouter

<details><summary>README 발췌</summary>

Pick which agent/skill handles a task (research / code / browser / support / writer) + confidence — visual swarm map powered by TypeSafe Jev.

</details>

### neo4j-field/jev-graphrag

<details><summary>README 발췌</summary>

Small, self-contained demos exploring how TypeSafe AI's Jev model (a "System One" model — calibrated Choice/Score/yes-no probability answers over a state, no free-text generation) can improve knowledge-graph extraction and GraphRAG pipelines on Neo4j.

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

### PAI-CUHK/MEDJEV

<details><summary>README 발췌</summary>

&gt; Project identity. MEDJEV is not the official TypeSafe AI Jev API, SDK, hosted service, or a reproduction of proprietary Jev weights. It is an independent JEV-inspired research implementation for typed evidence decisions in biomedical settings.

</details>

### pambrose/laya-server

<details><summary>README 발췌</summary>

A proof of concept implementation of TypeSafe's Jev API, backed by local Laya checkpoints.

</details>

### Pasblinn/jev-lab

<details><summary>README 발췌</summary>

An open lab for using Jev correctly next to Claude Code.

</details>

### pc418/jev-calculator

<details><summary>README 발췌</summary>

A calculator whose answer is produced by TypeSafe's Jev classifier one character at a time. Nothing in this repo evaluates arithmetic: every step Jev is offered the same 13 options (0–9, ., -, END) and the page appends whatever it picks, then shows the full probability distribution it assigned to ea

</details>

### pjmenon45/Jev-IOT

<details><summary>README 발췌</summary>

An end-to-end, carrier-grade edge AI telemetry classification and autonomic remediation dashboard designed for Tier-1 utility and telecom providers managing 10M+ smart utility meters (gas/water/electric).

</details>

### poupar-ai/musaranho-cli

<details><summary>README 발췌</summary>

Motor de decisões tipadas System 1, em desenvolvimento, projetado para inferência multilíngue não autoregressiva e perguntas independentes em lote. O objetivo é produzir decisões choice, score e noul diretamente, sem gerar texto livre.

</details>

### q93304989-bit/jev-lab

<details><summary>README 발췌</summary>

&gt; 一个单页分类器，把 Jev 的调用方式摊开给你看。 &gt; 打开网页、贴上 API Key、点一下，就能看到完整的请求 JSON、每个类别的概率分布、confidence，以及这次调用的耗时和 token 用量。

</details>

### RadRebelSam/awesome-jev

<details><summary>README 발췌</summary>

&gt; Tools, SDKs, integrations and examples for Jev, the System One model from TypeSafe AI. &gt; &gt; Browse it with search and filters: awesomejev.radrebeldeveloper.com &gt; &gt; The coverage claim is checked, not inferred: every day, each entry is looked for in the &gt; other public Jev directories - the two direct

</details>

### RavenValentin/TypeSafe.Jev

<details><summary>README 발췌</summary>

Ask an AI a typed question. Get an answer your switch statement can use.

</details>

### reoring/fern

<details><summary>README 발췌</summary>

A 4B decision model with a Jev-compatible API. Send a state and up to 50 questions (choice / score / noul); get back probability distributions in one forward pass — no text generation, ~30 ms per request on one GPU.

</details>

### Resadan-dev/jev-zork

<details><summary>README 발췌</summary>

Jev, the System One model from TypeSafe, plays Zork I. On every turn, Jericho provides the valid actions and Jev answers a single Choice: which command to type. You can see its confidence, and the moment it hesitates between "open mailbox" and "north".

</details>

### saembit/jeff

<details><summary>README 발췌</summary>

Jev routed multi model orchestration for Claude Code

</details>

### Sanoy24/jevpolicy

<details><summary>README 발췌</summary>

&gt; Code calculates. Jev judges. Policy decides.

</details>

### sathariels/jevtriage

<details><summary>README 발췌</summary>

Triage gate for pull requests. A GitHub Action and small Python CLI that asks TypeSafe Jev (System One) one Choice question:

</details>

### seahsky/kelpie

<details><summary>README 발췌</summary>

A Claude Code plugin that decides when delegating is worth it, and what each spawn costs when it happens.

</details>

### sedthh/xjevboost

<details><summary>README 발췌</summary>

Classify tabular data with Jev, Laya, or compatible OpenJev servers without putting your entire dataset of labeled examples into their context.

</details>

### Shakibuzzaman3104/claude-jev-funnel

<details><summary>README 발췌</summary>

A Claude Code plugin for bulk, calibrated decisions: judge a batch of items with TypeSafe's Jev model, resolve the confident ends in code, and send only the uncertain band to Claude or a human.

</details>

### sherajdev/jev-research

<details><summary>README 발췌</summary>

A public guide to using TypeSafe Jev with Herdr and coding agents such as Claude, Codex, and Hermes.

</details>

### shivam2003-dev/typesafe-triage-guard

<details><summary>README 발췌</summary>

Three composable judgment pipelines built on TypeSafe's System One model, Jev — a model that returns typed, calibrated probabilities instead of generated text. This repo is R&amp;D / a worked example, not a product: it exists to test what the TypeSafe primitives (Noul, Choice, Score) are actually good f

</details>

### shkumbinhasani/typedecide

<details><summary>README 발췌</summary>

A provider-agnostic TypeScript SDK for models that read state and return typed answers with calibrated uncertainty — instead of generating text you have to parse.

</details>

### SupratikB23/JevCanvas

<details><summary>README 발췌</summary>

Decide. Generate. Render.

</details>

### Teagar/jev-project-fit-review

<details><summary>README 발췌</summary>

&gt; Review independente sobre onde um modelo System One como o Jev agrega valor, onde ele deve permanecer consultivo e onde regras determinísticas continuam sendo a escolha correta.

</details>

### TheEleventhAvatar/triage-bot

<details><summary>README 발췌</summary>

Jev routes the ticket to a specialist agent (general / account / billing / technical) and decides whether a human should take it instead — all as typed data, no text to parse. Cerebras then drafts the reply using whichever agent Jev picked. The script times both calls separately so you can see the s

</details>

### thomasbrueggemann/jeffrey

<details><summary>README 발췌</summary>

A coding-agent CLI that splits the work between two models:

</details>

### TimMikeladze/JevLang

<details><summary>README 발췌</summary>

Decide once, trust everywhere. JevLang is a policy engine for decisions that used to live inside a prompt: routing, triage, approvals, escalation, guarding an agent's tools. You write the policy once in plain TypeScript (or Python); JevLang asks the model only the questions the policy needs, checks 

</details>

### tinyhumansai/tinydecisionmodels

<details><summary>README 발췌</summary>

tinyjevclient is a typed Rust client for TypeSafe AI's System One API and Jev model. It sends shared state with independent Choice, Score, and Noul questions, validates the provider's response against the originating request, and returns latency, attempts, usage, and request metadata alongside the t

</details>

### vbcherepanov/jev-symfony-bundle

<details><summary>README 발췌</summary>

Unofficial Symfony integration for TypeSafe AI's Jev model. Jev answers yes/no (noul), multiple-choice (choice) and rubric (score) questions about any text or JSON, and returns calibrated probabilities. This bundle is not affiliated with or endorsed by TypeSafe AI. "TypeSafe" and "Jev" are used only

</details>

### viniciusfinger/jev-intent-classification

<details><summary>README 발췌</summary>

AI-powered intent classification for customer support conversations. It identifies the customer's primary intent from a free-text message, returning a structured result with confidence scores and probability distributions so downstream systems can route the conversation appropriately.

</details>

### vkpdeveloper/mrsecret

<details><summary>README 발췌</summary>

A Chrome MV3 extension that blurs secrets and PII on any web page — useful when screen sharing, streaming, or recording demos.

</details>

### VyetGokyra/jev-codex-factory

<details><summary>README 발췌</summary>

A Jev-powered multi-agent coding factory for OpenAI Codex.

</details>

### wotai-dev/typesafe-jev-tools

<details><summary>README 발췌</summary>

A Claude Code hook that asks whether the decision you are writing needs a model at all.

</details>

### xergioalex/jev-lab

<details><summary>README 발췌</summary>

A hands-on laboratory for Jev, TypeSafe's first "System One" model — the model that doesn't generate text. It answers typed questions against a state and returns typed answers with probability distributions. This lab teaches it the way I learn: by building.

</details>

### yzbcs/Should-I-Jev

<details><summary>README 발췌</summary>

Scan your LLM logs for decision-shaped calls — and find out what moving them to JEV would save.

</details>

### Zahrannnn/zcode-jev

<details><summary>README 발췌</summary>

Typed judgment layer for coding agents — gates from PRD to ship. Jev-ready.

</details>

### david-cermak/jevlike-esp32

<details><summary>README 발췌</summary>

Jevlike edge router on ESP32

</details>

### NullPo-jp/PocketJev

<details><summary>README 발췌</summary>

Pocket-sized, on-device visual decisions for iPhone.

</details>

### 4nt0ineB/jev-from-java

<details><summary>README 발췌</summary>

A small web app that calls Jev (TypeSafe's typed decision model) from Java. There is no Java SDK, so the API contract is typed by hand with records and sealed types. Small wrappers such as ApiKey, ModelId and Probability are the kind of type that becomes a Valhalla value class once JEP 401 ships.

</details>

### 4nt0ineB/typed-decision-bench

<details><summary>README 발췌</summary>

A small benchmark on one question: does Jev, TypeSafe's zero-shot classification model, hold up in French? And how does it compare, in English and in French, to the alternatives you could use instead?

</details>

### 4piu/liametahi

<details><summary>README 발췌</summary>

An AI-powered mailbox cleanup tool for IMAP. Point it at an inbox and it can:

</details>

### 54k41/DarkForest

<details><summary>README 발췌</summary>

Chatbot web minimalista, sem build e sem instalação, com roteamento inteligente de modelos via Jev e RAG vetorial para documentos.

</details>

### Abhyodaya1/Intel_Engine

<details><summary>README 발췌</summary>

A lightweight due-diligence engine built to experiment with Jev (typesafe-ai/jev) and LLMs for intelligent context pruning and automated company teardowns.

</details>

### agneym/emoji-search

<details><summary>README 발췌</summary>

A small emoji picker built with TanStack Start, TanStack Router, TanStack Query, Tailwind CSS, Emoji Mart and TypeSafe Jev for semantic search.

</details>

### alexei-led/claude-router

<details><summary>README 발췌</summary>

jev-router for Claude Code: the right model and effort for each turn.

</details>

### andyholst/hermes-typesafe-jev

<details><summary>README 발췌</summary>

&gt; Typed, probabilistic decisions at 100ms latency — 40-400x cheaper than frontier LLMs for classification, routing, and scoring.

</details>

### Ascurse/typed-judge-kit

<details><summary>README 발췌</summary>

Typed questions to a model, one batched call, a verdict computed in your code, thresholds calibrated on your own labels.

</details>

### automaticdai/jev-semantic-cost-map

<details><summary>README 발췌</summary>

Path planning where the geometry is code and the judgment is Jev.

</details>

### Bernardbyy/JevExperiment

<details><summary>README 발췌</summary>

Tests Jev — TypeSafe's decision model — against three small LLMs at one job: acting as the input guardrail for an online shop's support chatbot, deciding which customer messages the bot should answer.

</details>

### bhushankinge/jev-laya-classification-bench

<details><summary>README 발췌</summary>

Typed-decision models versus a 35B LLM on a real classification job: 12,000 U.S. federal IT solicitations, graded against what a reseller actually quoted.

</details>

### boriscardano/herdr-jev-router

<details><summary>README 발췌</summary>

Herdr Jev Router lets a parent agent describe a task and have Jev choose the harness, model, and effort for the child agent, using the task text and the remaining subscription capacity. It runs on stock Herdr through the stock herdr agent start and herdr agent prompt commands and needs no fork or pa

</details>

### brianluby/momus-review

<details><summary>README 발췌</summary>

Finds fault in the gods' own work — so it can find fault in yours.

</details>

### bskkimm/JevSceneMiner

<details><summary>README 발췌</summary>

Find interesting scenes in driving logs with Jev, a fast general-purpose classifier from TypeSafe AI.

</details>

### carllippert/jev-router

<details><summary>README 발췌</summary>

Express with no routes. Jev picks which handler runs.

</details>

### Chetax/jev-ecommerce-reviews

<details><summary>README 발췌</summary>

E-commerce review classification with TypeSafe's Jev: Google Sheets → typed decisions (topic, sentiment, defect/refund flags) with calibrated confidence → BI dashboard. Includes accuracy, calibration and cost benchmarks vs. an LLM.

</details>

### chinmay29/evidence-scope

<details><summary>README 발췌</summary>

An evidence gate for RAG assistants answering questions about versioned software.

</details>

### Clawbuilders/web-qa-jev-agent

<details><summary>README 발췌</summary>

A Cloudflare Worker that crawls a web app like a QA tester, triages what it finds with typesafe/jev (Cloudflare's decision model — fast, cheap, calibrated yes/no, multiple-choice, and score judgments), confirms the real ones with a vision model, and files deduped GitHub Issues. Built as a third bonu

</details>

### codaaiteam/jev-skill-router

<details><summary>README 발췌</summary>

Paste tasks (one per line) and Jev routes each to the one tool an agent should call — websearch / runcode / sqlquery / sendemail / … — with the confidence behind each pick. Copy the routing as JSON. Every decision is one real call to Jev, TypeSafe AI's System One model — a typed, calibrated decision

</details>

### CodyQin/zh-decision-bench

<details><summary>README 발췌</summary>

A calibration benchmark for "System One" decision models on Chinese tasks — measuring not just whether the model picks the right answer, but whether the probabilities it reports can be trusted.

</details>

### criguex/jev-ci-triage

<details><summary>README 발췌</summary>

CI failure triage for Playwright and JUnit suites. Every failing test is sorted into one of five classes before anyone opens a stack trace:

</details>

### CSlawyer1985/dsh-jev-router

<details><summary>README 발췌</summary>

语义判定 · 缓存安全 · 迟滞防抖 · 成本闸门 · 全链路可回滚

</details>

### damian87x/jev-pi-model-router

<details><summary>README 발췌</summary>

A pi extension. On every fresh user turn, TypeSafe Jev judges how hard the turn is, what kind of work it is and whether a mistake would be costly. The router then switches pi to the first model in that tier's pool that pi can actually use and that fits the turn (images, context size).

</details>

### dandacompany/jev-gatekeeper

<details><summary>README 발췌</summary>

&gt; A local judge looks first; only what passes goes to cloud Jev. Sensitive requests never leave the machine.

</details>

### danieljohnmorris/omp-jev-router

<details><summary>README 발췌</summary>

An OMP extension that picks the model for each turn, and the agent for each delegated task, from two inputs: a Jev classification of the prompt, and the provider usage limits OMP already tracks.

</details>

### danieluszta/jev-company-problem-scoring

<details><summary>README 발췌</summary>

Give an agent a clear problem statement and a company universe. Have it gather the available evidence, build one compact evidence packet per company, and use Jev to rank how strongly each company matches that situation.

</details>

### dansya-arsana/jev-harness

<details><summary>README 발췌</summary>

A Claude Code harness where Jev makes the small per-turn decisions. A tested proof of concept of the ideas in Jev Engineering for Coding Agents (a September 2026 synthesis of design notes by TypeSafe's founder): permissions, skill routing, conditional instructions, effort-tiered subagents, and share

</details>

### darrenli6/jev-demo

<details><summary>README 발췌</summary>

JEV Studio is a small Next.js evaluation lab for turning natural-language input into structured signals with the Typesafe SystemOne API.

</details>

### david96182/cribrix

<details><summary>README 발췌</summary>

A precision-first RAG orchestrator. It filters before it generates, and verifies before it answers.

</details>

### erendikmenn/jev-llm-router-benchmark

<details><summary>README 발췌</summary>

Jev ile üretimden önce model rotası seçen ve üretimden sonra kod değişikliğini accept, revise, escalate veya block olarak değerlendiren bağımsız açık kaynak proje. Router ve judge karar verir; uygulamayı yapan model değildir.

</details>

### EthanThatOneKid/zocomputer-jev

<details><summary>README 발췌</summary>

A versioned Zo Rule for using TypeSafe AI Jev as an internal decision delegate. This repository intentionally does not duplicate Jev's skill, SDK integration, or evaluator: Zo should use the official TypeSafe skill and current TypeSafe documentation.

</details>

### EtienneLescot/jev-router

<details><summary>README 발췌</summary>

Typed judgments in, control flow out. A support ticket goes through two Jev calls, and plain code routes it to an agent, then picks that agent's model tier and reasoning depth. A console next to the pipeline shows the raw requests and responses.

</details>

### FirasB9/jev-community-ops

<details><summary>README 발췌</summary>

Community triage for a developer community, built on TypeSafe's Jev.

</details>

### Foshowithit/jev-rcos-study

<details><summary>README 발췌</summary>

Question: Can TypeSafe Jev solve the RCOS capability-routing bottleneck at scale?

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

### gbesse/decision-migrate

<details><summary>README 발췌</summary>

Inspect a Dify classifier workflow, prepare a reviewable Jev migration, and compare recorded baseline categories against bounded Jev probes. Open-source alpha; independent of TypeSafe and Dify.

</details>

### gbesse/flink-jev

<details><summary>README 발췌</summary>

Connecteur communautaire pour MLPREDICT d'Apache Flink 2.3. Il pose une question oui/non à TypeSafe Jev pour chaque ligne et renvoie une probabilité, une route (yes, no, review, failure) et l'empreinte SHA-256 du texte. Les réponses incertaines vont vers review ; les erreurs réseau et les réponses i

</details>

### gbesse/jev-lifecycle

<details><summary>README 발췌</summary>

Six production tools for Jev and compatible typed decision models:

</details>

### gbesse/jev-workflow

<details><summary>README 발췌</summary>

Decision contracts, adversarial testing, flight recording, temporal stability, and privacy controls for TypeSafe Jev.

</details>

### gbesse/kestra-jev

<details><summary>README 발췌</summary>

Flow importable qui produit route et probability via une tâche Python.

</details>

### gbesse/mautic-jev-intent

<details><summary>README 발췌</summary>

Experimental community alpha v0.1.0 · MIT.

</details>

### gbesse/metabase-jev

<details><summary>README 발췌</summary>

CLI qui enrichit une question sauvegardée de décisions Jev.

</details>

### gbesse/nifi-jev

<details><summary>README 발췌</summary>

Processeur NiFi 2.12 qui achemine un FlowFile texte selon une question sémantique oui/non posée à TypeSafe Jev. Quatre relations : yes, no, review, failure. Les résultats proches de 0,5 vont vers review, tout comme les entrées vides, trop grandes ou dépassant le budget. Les erreurs API vont vers fai

</details>

### gbesse/pulsar-jev

<details><summary>README 발췌</summary>

Function Python qui enrichit chaque événement JSON avec un verdict Jev.

</details>

### gbesse/redpanda-connect-jev

<details><summary>README 발췌</summary>

Experimental community alpha v0.1.0 · MIT.

</details>

### gbesse/seatunnel-jev

<details><summary>README 발췌</summary>

Transform Python par ligne pour ajouter route, probabilité et empreinte SHA-256.

</details>

### gbesse/spark-jev

<details><summary>README 발췌</summary>

UDF SQL PySpark pour décision sémantique structurée.

</details>

### ghubnab99/jev-enterprise-decision-fabric

<details><summary>README 발췌</summary>

An experimental architecture for using TypeSafe Jev at many semantic decision points in one application, without scattering model calls, question text, thresholds and side effects through the codebase.

</details>

### godxue1/Jev_in_the_wild

<details><summary>README 발췌</summary>

&gt; Jev is a lightweight decision model for fast, structured decisions in AI systems and agents. &gt; What are people actually building with Jev? We traced the model through 2,170 public GitHub projects to see where it is used, what decisions it makes, and which parts of the ecosystem attract attention.

</details>

### goodboybeau/system-one-playground

<details><summary>README 발췌</summary>

Run the new wave of decision models side by side on your Mac: Laya, Decider, Kev, and TypeSafe's Jev. Structured input goes in and calibrated probabilities come out. You get honest numbers for accuracy, calibration, latency, CPU and memory.

</details>

### hakantapanyigit/jevascript

<details><summary>README 발췌</summary>

Semantic values for deterministic TypeScript.

</details>

### hyspacex/jev-router

<details><summary>README 발췌</summary>

Choose a model for the task. Keep it for the session.

</details>

### Iskandeur/system1-system2

<details><summary>README 발췌</summary>

A small, fast, very cheap model (TypeSafe Jev) answers first and says how sure it is. When it is not sure enough, a big LLM takes over. On which tasks does that hybrid beat "100% Jev" or "100% LLM"? Pick a task, move the slider, and see: how often each of the three setups is right, what it costs per

</details>

### Jamesjiwei19981027/Jev-router

<details><summary>README 발췌</summary>

为编程 Agent 接入一层 Jev 决策能力：通过同一个本地共享运行时，给 Claude Code、Codex、Pi、Antigravity 提供两项功能：由 Jev 决定保留哪些工具结果的上下文压缩，以及只做决策的能力路由。

</details>

### jason-allen-oneal/openclaw-plugin-typesafe-ai

<details><summary>README 발췌</summary>

An official community plugin integrating TypeSafe AI's Jev model into OpenClaw.

</details>

### jaygajera17/JevPulse

<details><summary>README 발췌</summary>

&gt; High-throughput qualitative consensus engine for YouTube comments. Evaluates every comment individually with calibrated decision models.

</details>

### jaysonsantos/sudoku-jev

<details><summary>README 발췌</summary>

A sudoku game (and Jev vs Stockfish chess at /chess) that an AI decision model plays. The browser makes a random puzzle and opens a websocket. A click on Solve starts the loop. The backend sends the board and every legal placement to the TypeSafe Jev model through OpenRouter. Jev picks one placement

</details>

### jekozyra/pi-typesafe-router

<details><summary>README 발췌</summary>

Use Jev to classify requests and route them to the right model for the task.

</details>

### JevForge/jev-flaky-detective

<details><summary>README 발췌</summary>

Classify CI test failures as regression, flaky, environment, or unknown using TypeSafe Jev as a typed decision layer.

</details>

### JevForge/jev-model-navigator

<details><summary>README 발췌</summary>

Route Issues and Pull Requests to the right AI model using TypeSafe Jev as a typed decision layer inside GitHub Actions.

</details>

### JGalego/J3v

<details><summary>README 발췌</summary>

J3v is a compiler. You give it a schema of typed questions (choice, score, noul) and their allowed answers. It distills Laya into an artifact for one target, fits temperature scaling, and refuses to emit an artifact that misses its accuracy/ECE bounds or its flash/RAM budget. It returns calibrated p

</details>

### johanmatsgard/jev-svenska-triage

<details><summary>README 발췌</summary>

Testing whether TypeSafe's Jev can handle comments on our Swedish social media ads well enough to act without a person checking every one.

</details>

### JonnyFi/gute-kaese

<details><summary>README 발췌</summary>

Type anything. Jev (TypeSafe AI) decides in about 0.4 seconds whether it is Gute Käse or schlechte Käse. Above 50% = Gute Käse, below = schlechte Käse.

</details>

### KalyanM45/GitHub-Issue-Classification-Using-Jev

<details><summary>README 발췌</summary>

&gt; Typed labels with calibrated confidence — it labels what it is sure about, and escalates what it is not.

</details>

### kanishka-namdeo/jev-rag

<details><summary>README 발췌</summary>

One app, two retrieval-augmented pipelines over your own documents — and a built-in benchmark lab that measures, with an independent LLM judge, exactly what the hybrid adds.

</details>

### keysersoft/jev-mcp-server

<details><summary>README 발췌</summary>

Connect Jev to Claude, ChatGPT and Copilot: yes/no checks, classifications and scores, with the probability behind every answer as MCP tools. Powered by AnythingMCP.

</details>

### kijung4290/gmail-mail-triage

<details><summary>README 발췌</summary>

Gmail의 읽지 않은 메일을 IMAP으로 가져와 답변 긴급도, 광고 여부, 답변 필요 여부를 분류하는 로컬 웹앱입니다. 서버는 127.0.0.1에만 열리며 공개 웹 배포 기능은 없습니다.

</details>

### knowlet/agentworld-web-simulator

<details><summary>README 발췌</summary>

一個隨瀏覽動作生成、並記住已探索頁面的虛構網際網路。目標與 hanxiao/qwen-agentworld-35b-a3b-web-simulator 相同：搜尋 → 開啟結果 → 點擊連結 → 持續探索 → 重訪同一個世界。

</details>

### loopgridio/loopgrid-jev

<details><summary>README 발췌</summary>

Signed decision evidence for TypeSafe AI Jev.

</details>

### madhavmadupu/talos

<details><summary>README 발췌</summary>

A hybrid AI-driven transaction routing and guardrail engine built with Next.js, TypeScript, SQLite, and Prisma.

</details>

### ManankumarThakkar/jev-escalation-gate

<details><summary>README 발췌</summary>

How much work can a small, cheap AI model take off an expensive one's plate, and how would you actually know?

</details>

### matejgordon/ha-jev-conversation

<details><summary>README 발췌</summary>

Czech conversation agent for Home Assistant Assist on TypeSafe Jev, a System One model that picks from typed options instead of generating text. One request per command, about 300 ms.

</details>

### MaururuTakumi/codex-jev-compaction

<details><summary>README 발췌</summary>

A Codex plugin that preserves high-value tool evidence across context compaction with TypeSafe Jev.

</details>

### mcgalleg/grokbot-jev-jobs

<details><summary>README 발췌</summary>

Scores public job postings against a resume using TypeSafe AI's Jev through the Vercel AI Gateway, then applies through a dashboard Apply button that webhooks Grok Bot (Resume Rudy) to fill ATS forms and write status back.

</details>

### MersivMedia/jermes

<details><summary>README 발췌</summary>

Jermes is a Hermes Agent plugin that takes the small, bounded decisions an agent makes all the time out of the expensive reasoning model:

</details>

### mintannn/jev-asks-until-sure

<details><summary>README 발췌</summary>

A twenty-questions game where the model decides how many questions to ask.

</details>

### MoonTory/pi-jev-harness

<details><summary>README 발췌</summary>

A Pi extension where TypeSafe's Jev does the reasoning around tool calls, so the main model spends its tokens on generation only.

</details>

### Mr-DS-ML-85/SyFox

<details><summary>README 발췌</summary>

State in. Typed decisions out. No text generation. Ever.

</details>

### MuleSoft-Forge/mule4-typesafe-connector

<details><summary>README 발췌</summary>

Jev is a decision model, not a chat model. You give it a state plus named, typed questions — Noul (yes/no probability), Choice (option + distribution) or Score (ordered rubric) — and it returns one typed answer per question. This connector makes those answers first-class Mule values that drive Choic

</details>

### munod/tachyone

<details><summary>README 발췌</summary>

&gt; Local-first, multilingual System One decision engine that speaks the TypeSafe Jev /v1/systemone protocol. &gt; &gt; LLMs generate text. Tachyone produces calibrated decisions. Don't ask a model to decide — ask Tachyone.

</details>

### ne0ekspert/messageeval-discord

<details><summary>README 발췌</summary>

MessageEval Discord rates a message as if it were a move in a chess analysis. From a message's context menu, the bot reads the recent conversation, asks TypeSafe AI to choose a classification, reacts with the matching server emoji, and privately shows the requester the three most likely choices.

</details>

### PauloBTX/exemplo-hev-roteamento

<details><summary>README 발췌</summary>

Demonstração prática do modelo Jev da TypeSafe AI (~typesafe/jev-latest) utilizando a Decisions API do OpenRouter para classificar e rotear incidentes de backend em tempo real.

</details>

### peakevergreen/jevidence

<details><summary>README 발췌</summary>

Let Jev judge. Let your code decide.

</details>

### prasanthj/duckdb-dual-cognition

<details><summary>README 발췌</summary>

Compose fast, bounded System One judgments with selective System Two reasoning in one native DuckDB SQL pipeline. Classify every row cheaply, escalate only ambiguity, and keep the final value plus its decision provenance in the relation.

</details>

### PromptEngineer48/langchain-jev-tutorial

<details><summary>README 발췌</summary>

Companion code for the Prompt Engineer 48 video "LangChain + Jev — full tutorial".

</details>

### rajantripathi/fastgate-jev

<details><summary>README 발췌</summary>

Jev decides. Code routes. The LLM only writes when it should.

</details>

### rishi-raj-jain/date-with-jev

<details><summary>README 발췌</summary>

An anonymous, share-card-first dating-chat evaluator. It has no user accounts on purpose: the browser uploads a screenshot and transcript, an API route asks Jev several independent typed questions, and the resulting read (the "tea") is saved for good.

</details>

### robertoshimizu/neurosymbolic-intent-router

<details><summary>README 발췌</summary>

Models interpret, rules decide. Language models only read the text; symbolic rules choose and authorize every action.

</details>

### robinwintertaylor/Prompt-Router

<details><summary>README 발췌</summary>

Most LLM routers evaluate every prompt in isolation. For single-turn chat, that works. For coding agents (Goose, Cursor, VS Code Continue), it is economically broken.

</details>

### rubinagentagi-tech/jev-heart-risk-bench

<details><summary>README 발췌</summary>

Can a decision model read a plain-English health survey and judge a person's heart-disease risk? This repo scores Jev (TypeSafe's System One, jev-1.13.0) on 5,000 real respondents from the CDC's 2015 Behavioral Risk Factor Surveillance System, against a logistic regression, a hand-written rule, a ch

</details>

### Running-Dolphins/jev-bench

<details><summary>README 발췌</summary>

Measure accuracy and calibration of Jev (TypeSafe AI's decision model) on public datasets, on tasks that look like the decisions a business actually automates: route this message, is this a duplicate, is this spam, what kind of clause is this, how unhappy is this customer.

</details>

### russleyshaw/typesafe-jev-gate

<details><summary>README 발췌</summary>

&gt; A fail-closed policy gate for Hermes Agent tool calls. &gt; &gt; Let Jev inspect the risky calls. Keep Hermes in control.

</details>

### sallout/laya-coreml-vs-jev-benchmark

<details><summary>README 발췌</summary>

A reproducible, paired comparison of Laya and Jev on Banking77, ArBanking77, and CLINC150. Every model receives the same state, instruction, option labels, option order, and test examples. Each dataset produces an independent protocol and report.

</details>

### sebastianbugal/jev

<details><summary>README 발췌</summary>

A Claude Code plugin that wraps TypeSafe's Jev. You ask in plain language, Claude turns it into typed questions, and you get a typed answer with a probability.

</details>

### sidhasadhak/jev-perfume-advisor

<details><summary>README 발췌</summary>

A perfume-recommendation chatbot powered by TypeSafe Jev - a model that returns typed, calibrated decisions instead of text - over fragrance data in FragDB format.

</details>

### souvikr/jev-test

<details><summary>README 발췌</summary>

A small test harness for Jev (~typesafe/jev-latest), TypeSafe's structured decision model, called through OpenRouter's alpha Decisions API (POST https://openrouter.ai/api/alpha/decisions).

</details>

### sudorandom/protoc-gen-jev

<details><summary>README 발췌</summary>

Define AI decisions in Protobuf. Generate type-safe clients for Go, TypeScript, and Python.

</details>

### SYED-M-HUSSAIN/jev-experimental

<details><summary>README 발췌</summary>

Jev, from TypeSafe AI, is described everywhere as a fast, cheap alternative to an LLM for structured output. That description is half right, and the half that is wrong matters: it cannot produce structured output at all. It cannot return a name, an amount or a date.

</details>

### szafar-7101/reclaim

<details><summary>README 발췌</summary>

Confidence-gated disk space recovery for developers.

</details>

### tangbl93/multica-agent-capacity

<details><summary>README 발췌</summary>

multica-agent-capacity is a reusable Skill for Multica workspaces. It handles capacity-aware agent scheduling, failure classification, replacement dispatch, and automatic recovery.

</details>

### ThyFriendlyFox/jev-triage

<details><summary>README 발췌</summary>

Route unlabeled training data with TypeSafe Jev: accept cheap high-confidence judgments, queue the rest for a frontier teacher or humans, and log soft labels for optional local distillation.

</details>

### triggeredcode/jev-compiler

<details><summary>README 발췌</summary>

Describe the decision. Give a few examples. Let Jev Compiler build the workflow and show its work.

</details>

### TyrellD1/typesafe-ai_smoke-test

<details><summary>README 발췌</summary>

We sent 30 test prompts through the router. All 30 went to the right place.

</details>

### WallerChen/jev-measured

<details><summary>README 발췌</summary>

Measured cost, latency and raw output from the live Jev API (TypeSafe AI's System One decision model) across eight realistic use cases. Reproducible: bring your own key and re-run it.

</details>

### wdonega/rest-laya

<details><summary>README 발췌</summary>

A small Python service that serves the Laya model (convaiinnovations/laya) over REST, so any language or framework that can make an HTTP request can use it.

</details>

### Wing9897/jev.tg

<details><summary>README 발췌</summary>

本機的 Telegram 條件過濾器。FastAPI 與 SQLite 聽在 127.0.0.1:18721。一個 Telegram 帳號（Telethon StringSession），訊息存在本機。任務把訊息分批送給 Jev（TypeSafe）或本機 Laya；新任務的預設批次大小是 50。畫面只留命中；圖片在命中之後才下載。

</details>

### xxlya/evaljev

<details><summary>README 발췌</summary>

Know whether your Jev agent is still deciding well — and which change broke it.

</details>

### xxxx00000008-sketch/skills

<details><summary>README 발췌</summary>

个人开发的 Codex Skills 开源集合。每个技能都是独立、可安装、可 Fork 和可贡献的目录。

</details>

### yangzhou-chaofan/awesome-jev-prompt

<details><summary>README 발췌</summary>

&gt; The unofficial, community-maintained collection of prompts, states, and decision patterns for Jev — TypeSafe AI's first System One Model. &gt; &gt; Jev doesn't take "prompts" in the LLM sense. It takes a state and returns typed decisions with calibrated probabilities — Choice, Score, Noul. This repo col

</details>

### yanng981/awesome-system-one

<details><summary>README 발췌</summary>

A curated list of System One decision models: models that answer typed questions about an input (pick an option, answer yes/no, rate on a scale) and return probabilities or a single chosen option instead of free-form text.

</details>

### yanng981/system-one-benchmark

<details><summary>README 발췌</summary>

Zero-shot accuracy, calibration and latency of System One decision models: TypeSafe Jev 1.13, Kev-0.8B, Von 1.2, Laya (English, multilingual and its router) and GLiNER2.5-Decide (English and multilingual). Every model gets the same examples and the same typed questions through the same Jev-style POS

</details>

### yuyang2230/jev-agent-skill

<details><summary>README 발췌</summary>

把高频小判断（分类 / 初筛 / 打分 / 核查）从主模型卸载给 Jev（TypeSafe System One 决策模型，OpenCode Zen 免费档），主模型专心生成，判断走免费通道。适配 Claude Code / ZCode 及任何带 skills 目录的 agent。

</details>

### Hardel-DW/jev.mods

<details><summary>README 발췌</summary>

Il doit finir le jeu peut importe de quel maniéres.

</details>

### TrainLCD/Functions

<details><summary>README 발췌</summary>

The Cloudflare Worker that powers the TrainLCD backend. It replaces the former Firebase Cloud Functions, consolidating the HTTP, queue, and Cron handlers into a single Worker.

</details>

### TexasOct/jev-gateway

<details><summary>README 발췌</summary>

JEV Gateway routes OpenAI-compatible chat requests across model providers using configurable cost, quality, and capability rules. Choose a strategy instead of hard-coding a model, and either keep a session on one route or reconsider it each turn.

</details>
