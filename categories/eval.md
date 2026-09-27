# 📏 평가·채점 (223)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [comet-ml/opik](https://github.com/comet-ml/opik) | 22259 | 1829 | **무엇** LLM 앱 및 AI 에이전트의 실행 트레이싱, 성능 평가, 모니터링을 제공하는 오픈소스 옵저버빌리티 플랫폼이다.<br>**판단** LLM 생성 결과에 대해 환각 여부(noul), 유해성 분류(choice), RAG 응답 품질 점수(score) 등을 판별하도록 요청한다.<br>**포인트** LLM-as-a-judge 평가 메트릭, 트레이스 트리 추적, PyTest 기반 CI/CD 연동 및 자체 호스팅 환경을 지원한다. | 🆕 | 2026-09-27 |
| [Kiln-AI/Kiln](https://github.com/Kiln-AI/Kiln) | 5109 | 379 | **무엇** 평가, 프롬프트 최적화, RAG, 에이전트 구축 및 파인튜닝을 지원하는 AI 개발 워크벤치 데스크톱 앱 겸 Python 라이브러리다.<br>**판단** 생성된 출력물이 선호 기준이나 평가 지표에 부합하는지 여부(noul)와 모델 응답 품질 등급(score)을 판정한다.<br>**포인트** 노코드 데스크톱 앱과 오픈소스 Python 라이브러리를 연계해 비개발자와 협업하고, Git 동기화 및 로컬 Ollama 실행을 지원한다. | 🆕 | 2026-09-26 |
| [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 1865 | 147 | 요약 대기 · Local typed decisions, contrastive data curation, and model evaluation. | 🆕 | 2026-09-24 |
| [TypeLLM/TypeLLM](https://github.com/TypeLLM/TypeLLM) | 801 | 53 | 요약 대기 · TypeLLM: LLMs with type-safe generation | 🆕 | 2026-09-27 |
| [dzhng/jevgrep](https://github.com/dzhng/jevgrep) | 648 | 39 | 요약 대기 · Find code by asking what it does. A CLI for coding agents that uses Jev to discover relevant files and source context. | 🆕 | 2026-09-27 |
| [monteduro/killmyidea](https://github.com/monteduro/killmyidea) | 231 | 30 | **무엇** 스타트업 아이디어를 입력하면 질문 10개에 대한 평가 점수를 종합해 진행 여부(KILL, FIX, SHIP)를 판정해 주는 웹 서비스<br>**판단** 아이디어의 카테고리, 이해도(understandability), 그리고 문제 정의·수익성·도달력 등 8개 항목에 대한 0-4점 척도 평가<br>**포인트** 생성형 LLM 텍스트 생성 대신 10개 평가 질문을 병렬로 점수화하고 가중 평균 및 명확성 게이트를 거쳐 3단계 판정을 도출하는 구조 | 🆕 | 2026-09-24 |
| [Yinsongxu/LLM2Jev](https://github.com/Yinsongxu/LLM2Jev) | 344 | 35 | 요약 대기 · Turn local language models into Jev-style structured decision models. Get results from text and images with prefill alone—no token-by-token decoding required. | 🆕 | 2026-09-26 |
| [Liuziyu77/Valen](https://github.com/Liuziyu77/Valen) | 324 | 39 | 요약 대기 · Train a Jev-like multimodal model by yourself. System One Model, now with vision. | 🆕 | 2026-09-25 |
| [malevrigns/agent-jev](https://github.com/malevrigns/agent-jev) | 312 | 29 | 요약 대기 · AgentJev-0.6B - a fast 'System One' decision model for AI Agents: feed it any unstructured state (diffs, traces, logs) and structured questions, get calibrated probability distributions back in one ~50ms forward pass. Zero output-token decoding. | 🆕 | 2026-09-23 |
| [hr98w/jev-visual](https://github.com/hr98w/jev-visual) | 288 | 26 | 요약 대기 · An educational Jev-like visual inference experiment on Apple Silicon: shared context, direct candidate scoring, and local visual demos. | 🆕 | 2026-09-21 |
| [FBddcz/embodied-jev](https://github.com/FBddcz/embodied-jev) | 239 | 9 | 요약 대기 · EmbodiedJev: MuJoCo robot decision workbench with MiniCPM5-2B, Jev and compatible model APIs | 🆕 | 2026-09-22 |
| [sileod/tasksource](https://github.com/sileod/tasksource) | 198 | 11 | 요약 대기 · Datasets collection and preprocessings framework for NLP extreme multitask learning | 🆕 | 2026-09-27 |
| [vinilana/jev-eval-agent](https://github.com/vinilana/jev-eval-agent) | 106 | 11 | **무엇** 100개의 가상 도구를 갖춘 비서 에이전트 환경에서 도구 선택을 LLM이 직접 할 때와 Jev 분류기가 할 때의 작업 완료 단계 수를 비교·평가하는 벤치마크 리포지토리다.<br>**판단** 대화 상태를 바탕으로 다음 호출할 도구(100개 도구 및 사용자 응답 중 choice)와 요청된 모든 작업 완료 여부(noul)를 판단한다.<br>**포인트** Jev가 응답 완료를 골라도 done 확률이 임계값(0.5) 미만이면 응답을 차단하고 차선의 도구를 노출하는 신뢰도 기반 게이팅 방식을 적용했다. | 🆕 | 2026-09-17 |
| [kunchenguid/compact-adviser](https://github.com/kunchenguid/compact-adviser) | 187 | 22 | 요약 대기 · "Work appears completed or recorded. Run /compact to save tokens." | 🆕 | 2026-09-25 |
| [dorkitude/webctl](https://github.com/dorkitude/webctl) | 144 | 16 | 요약 대기 · Smart web search CLI for agents, backed by Jev. Saves a lot of tokens. | 🆕 | 2026-09-23 |
| [get-convex/convex-evals](https://github.com/get-convex/convex-evals) | 129 | 10 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [allebee/jevk5](https://github.com/allebee/jevk5) | 118 | 8 | 요약 대기 · JevK5: open-weight alternative to TypeSafe Jev. Typed decisions with probabilities in one forward pass; Apache-2.0 weights and code. | 🆕 | 2026-09-25 |
| [daseinlabs/open-jev](https://github.com/daseinlabs/open-jev) | 116 | 23 | 요약 대기 · Open Jev implementation with custom finetuning | 🆕 | 2026-09-24 |
| [libingzheren/Jev-Mem](https://github.com/libingzheren/Jev-Mem) | 103 | 9 | 요약 대기 · Jev-Mem: System-One Controlled Agentic Memory | 🆕 | 2026-09-22 |
| [danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) | 93 | 15 | 요약 대기 · Using Jev as an evaluator. | 🆕 | 2026-09-23 |
| [AustinAWay/Working-Memory-Jev](https://github.com/AustinAWay/Working-Memory-Jev) | 76 | 11 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [aaddrick/building-with-typesafe-jev](https://github.com/aaddrick/building-with-typesafe-jev) | 71 | 4 | 요약 대기 · Unofficial skill that teaches coding agents to build with TypeSafe AI's Jev: typed decisions, calibrated confidence, and prior art from 150+ community projects. | 🆕 | 2026-09-27 |
| [iammrduncan/typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark) | 40 | 5 | **무엇** 일반 LLM의 구조화된 출력 방식과 TypeSafe Jev 판단 API의 지연 시간, 비용, 품질을 비교하는 벤치마크 도구다.<br>**판단** 티켓 분류, 가드레일 감지, 승인 여부, 점수 산정 등 7개 합성 시나리오에 대해 Choice 및 Noul 형태의 질문을 판단한다.<br>**포인트** Cerebras 기반 Qwen, 로컬 Needle 3, Jev를 나란히 실행해 레이턴시 백분위수, API 비용, 계약 검증률을 실시간 UI로 대조한다. | 🆕 | 2026-09-19 |
| [iapp-technology/openthai-systemone](https://github.com/iapp-technology/openthai-systemone) | 63 | 22 | 요약 대기 · OpenThai-SystemOne: open Thai + English System One decision model (0.8B, 256-way slot head, Apache-2.0) | 🆕 | 2026-09-21 |
| [RafalWilinski/vibecheck](https://github.com/RafalWilinski/vibecheck) | 48 | 5 | 요약 대기 · Chrome extension: vibe-check your X posts with TypeSafe's Jev before you hit Post | 🆕 | 2026-09-20 |
| [YuanKJing/Jev-as-Policy](https://github.com/YuanKJing/Jev-as-Policy) | 44 | 2 | 요약 대기 · The highly anticipated open-source repository for JEV as Policy enables one-click setup of the simulation environment. Evaluations of Astra + JEV on benchmarks such as RoboTwin will also be released soon. | 🆕 | 2026-09-21 |
| [JoshuaSP/open-jev](https://github.com/JoshuaSP/open-jev) | 41 | 2 | 요약 대기 · Typed JSON inference with DiffusionGemma, with Every and Jev benchmark results | 🆕 | 2026-09-16 |
| [pinecone-io/cultivar](https://github.com/pinecone-io/cultivar) | 41 | 2 | 요약 대기 · Use cultivar to test your Agent Skills and Docs by running them in sandboxes, and across different agents.  | 🆕 | 2026-09-18 |
| [kyegomez/open-jev](https://github.com/kyegomez/open-jev) | 40 | 10 | 요약 대기 · an open-source, from-first-principles reconstruction of the ideas behind TypeSafe AI's Jev, written in pytorch | 🆕 | 2026-09-21 |
| [FLock-io/this-that-model](https://github.com/FLock-io/this-that-model) | 38 | 6 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [mithalouni/system-one-open](https://github.com/mithalouni/system-one-open) | 36 | 5 | 요약 대기 · Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal) | 🆕 | 2026-09-17 |
| [Bewinxed/jevgpt](https://github.com/Bewinxed/jevgpt) | 31 | 2 | 요약 대기 · A chatbot built on a model that cannot generate text (TypeSafe AI's Jev, driven autoregressively) | 🆕 | 2026-09-17 |
| [caiovicentino/eikos](https://github.com/caiovicentino/eikos) | 29 | 1 | 요약 대기 · Open, calibrated, single-pass typed-decision models (4B &amp; 27B) for finance and trading | 🆕 | 2026-09-26 |
| [colliber/duckdb-jev](https://github.com/colliber/duckdb-jev) | 26 | 1 | 요약 대기 · DuckDB extension: typed Jev answers as real SQL types | 🆕 | 2026-09-18 |
| [ItIsCuthNotCup/MetaCog](https://github.com/ItIsCuthNotCup/MetaCog) | 26 | 2 | 요약 대기 · Metacognition for any agent. Improve accuracy with effectively zero cost. | 🆕 | 2026-09-24 |
| [keltokhy/jsort](https://github.com/keltokhy/jsort) | 25 | 1 | 요약 대기 · sort by meaning: order lines along a plain-English dimension, from pairwise comparisons judged by TypeSafe's Jev model | 🆕 | 2026-09-25 |
| [rorshopping/jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop) | 25 | 1 | 요약 대기 · Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo. | 🆕 | 2026-09-17 |
| [chopratejas/invalidate](https://github.com/chopratejas/invalidate) | 21 | 2 | 요약 대기 · The invalidation layer for AI memory. Every fact gets a lease; new evidence ends it. Built on TypeSafe Jev. | 🆕 | 2026-09-21 |
| [anpicasso/hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals) | 20 | 3 | 요약 대기 · TypeSafe Jev as the reviewer for Hermes Agent smart command approvals. 8.7x faster, 4.4x fewer prompts, measured on 153 real commands. Approvals only. | 🆕 | 2026-09-22 |
| [abhixhek/jevcal](https://github.com/abhixhek/jevcal) | 10 | 0 | **무엇** TypeSafe Jev 등 결정 모델의 신뢰도 임계값을 사용자 데이터 기반으로 보정·평가하고 LLM 폴백 캐스케이드를 구성하는 CLI 도구<br>**판단** 이메일 사기 여부(is_fraud, noul), 티켓 처리 부서 분류(queue, choice), 긴급성 및 감정 분석 판단<br>**포인트** 데이터 분할 검증으로 정확도 목표를 만족하는 임계값을 도출해 lock 파일로 잠그고, LLM 교사를 활용한 라벨링 및 질문 최적화를 지원함 | 🆕 | 2026-09-18 |
| [alexgreensh/eval-genius](https://github.com/alexgreensh/eval-genius) | 15 | 3 | 요약 대기 · Teach your agent to work with evals: WHEN you actually need an eval or benchmark, HOW to build one that holds up, and how to read what it tells you. Deterministic-first, tool-agnostic. | 🆕 | 2026-09-21 |
| [everyai-com/jev-directory](https://github.com/everyai-com/jev-directory) | 15 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-21 |
| [olanotolu/jevbetter](https://github.com/olanotolu/jevbetter) | 15 | 3 | 요약 대기 · A stronger one-pass scorer over a variable list of text options. Hashed n-gram encoder, rival-aware attention, gated head, temperature scaling — with a head-to-head benchmark vs the jevlike starter design. | 🆕 | 2026-09-16 |
| [simonw/llm-typesafe](https://github.com/simonw/llm-typesafe) | 15 | 2 | 요약 대기 · LLM plugin for accessing Jev and other TypeSafe AI models | 🆕 | 2026-09-22 |
| [genai-craft/openvons](https://github.com/genai-craft/openvons) | 14 | 0 | 요약 대기 · openvons (open-Jev): 有限選択肢に確率で答える判断層 — テキスト / 画像 / 日本語音声コマンド | 🆕 | 2026-09-21 |
| [kavehmz/typesafe-playground](https://github.com/kavehmz/typesafe-playground) | 14 | 4 | 요약 대기 · Interactive experiments with TypeSafe Jev, from support routing to 3D driving simulations with real AI decisions and visible sensor inputs. | 🆕 | 2026-09-22 |
| [Micha0827/snapjudge](https://github.com/Micha0827/snapjudge) | 14 | 0 | 요약 대기 · Typed decisions (choice / score / yes-no) from local Qwen models on Apple Silicon. Probabilities come straight from the logits, no text generation. TypeSafe-compatible HTTP API, runs on MLX. | 🆕 | 2026-09-21 |
| [pst2154/Nemotron_Jev](https://github.com/pst2154/Nemotron_Jev) | 14 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [MarissaFamularo/citation-verifier](https://github.com/MarissaFamularo/citation-verifier) | 8 | 1 | **무엇** 논문 저자나 심사위원이 원고의 인용 문장이 실제 인용된 논문 내용에 의해 뒷받침되는지 검증할 때 사용하는 웹 도구이다.<br>**판단** 인용 문장과 인용문 원문을 비교해 지지(supports), 모순(contradicts), 무관(says nothing) 중 어느 쪽인지 확률을 판단하도록 요청한다.<br>**포인트** Claude가 추출한 발췌문이 원문에 실제로 존재하는지 코드로 검증한 후 Jev가 점수를 매기며, 서버 없이 브라우저 환경에서 직접 실행된다. | 🆕 | 2026-09-17 |
| [Reza2kn/Bev](https://github.com/Reza2kn/Bev) | 13 | 0 | 요약 대기 · Ternary decision scoring with Jevfire-style inference, typed APIs, and reproducible Persian evaluation. | 🆕 | 2026-09-23 |
| [kitze/pagegrade](https://github.com/kitze/pagegrade) | 7 | 1 | **무엇** 웹페이지 섹션의 명확성, 문장력, 온페이지 SEO를 분석해 등급을 매기는 WXT 기반 크롬 확장 프로그램이다.<br>**판단** 웹페이지 섹션별로 10개 루브릭 항목에 대한 점수를 평가하고 페이지 전체의 A부터 E까지의 등급을 판정하도록 요청한다.<br>**포인트** 별도 백엔드 서버 없이 브라우저 환경에서 Vercel AI Gateway를 경유해 TypeSafe AI Jev API를 직접 호출한다. | 🆕 | 2026-09-18 |
| [TrustifAI/typed_evals](https://github.com/TrustifAI/typed_evals) | 12 | 1 | 요약 대기 · Fast, typed, calibrated evaluations for LLM and agent outputs, powered by Jev — with simple, framework-agnostic Python APIs | 🆕 | 2026-09-27 |
| [filedcom/playjev](https://github.com/filedcom/playjev) | 11 | 1 | 요약 대기 · Fast, typed browser automation powered by Jev and Playwright | 🆕 | 2026-09-27 |
| [harshithsunku/learn-jev-end-to-end](https://github.com/harshithsunku/learn-jev-end-to-end) | 11 | 3 | 요약 대기 · Learn Jev end to end: a free hands-on course. Build 13 AI agent use cases with a fast brain (Jev) and a slow brain (LLM). One OpenRouter key. | 🆕 | 2026-09-23 |
| [aabolfazl/typesafe-local](https://github.com/aabolfazl/typesafe-local) | 9 | 0 | 요약 대기 · Inspired by TypeSafe Ai, Ask a local LLM typed questions, get calibrated probabilities instead of text. Structured output without generation or parsing. MLX / Apple Silicon. | 🆕 | 2026-09-18 |
| [dagfinndybvig/Jev_Ontology](https://github.com/dagfinndybvig/Jev_Ontology) | 8 | 2 | 요약 대기 · Trying to combine Jev with ontology | 🆕 | 2026-09-25 |
| [rupeshpoojary9/awesome-open-system-one](https://github.com/rupeshpoojary9/awesome-open-system-one) | 8 | 4 | 요약 대기 · Curated list of the open System One ecosystem: open models, independent benchmarks, calibration and constrained-decoding tooling. | 🆕 | 2026-09-27 |
| [Shanghua-Gao/RSI-Jev](https://github.com/Shanghua-Gao/RSI-Jev) | 8 | 0 | 요약 대기 · Typed-decision models (noul / choice / score) trained by a self-improving loop of AI agents — checkpoints, the code that produced them, and every version that failed. | 🆕 | 2026-09-27 |
| [TholeG/typesafe-chess](https://github.com/TholeG/typesafe-chess) | 8 | 2 | 요약 대기 · Chess where both players are TypeSafe's Jev model: every move is a typed Choice decision | 🆕 | 2026-09-17 |
| [us/jev-local](https://github.com/us/jev-local) | 8 | 1 | 요약 대기 · Local Jev-compatible evaluation server: POST /v1/systemone with typed noul/choice/score, open weights, no waitlist | 🆕 | 2026-09-18 |
| [ziqi-jin/agent-to-trust](https://github.com/ziqi-jin/agent-to-trust) | 8 | 2 | 요약 대기 · Don't trust an Agent. Test it. Open-source lab for agent credit — exams → evidence → explainable, recomputable scores. Built for the day agents hire and pay each other. A2A-native. | 🆕 | 2026-09-27 |
| [TKY-27/JevSlop](https://github.com/TKY-27/JevSlop) | 4 | 0 | **무엇** 공개된 note.com 기사 URL을 입력받아 본문을 추출하고 AI 슬롭 여부와 글 품질을 분석해 점수로 보여주는 웹 도구다.<br>**판단** 기사 본문이 AI 슬롭인지 여부를 choice로 분류하고, 전체 점수 및 8가지 세부 품질 지표를 각각 score로 평가한다.<br>**포인트** 저작자 판별이 아닌 글 품질 판단 목적으로 쓰이며 본문 청킹 없이 전체 본문을 단일 systemOne 요청으로 전송해 검사한다. | 🆕 | 2026-09-18 |
| [zeredy879/minojev](https://github.com/zeredy879/minojev) | 25 | 1 | 요약 대기 · Decisions, not tokens: minojev reads calibrated, typed probability distributions straight from hidden states in one forward pass — zero output tokens, fully reproducible on a laptop CPU. | 🆕 | 2026-09-21 |
| [anisselbd/jev-phishing-bench](https://github.com/anisselbd/jev-phishing-bench) | 7 | 0 | 요약 대기 · Jev (TypeSafe) vs Claude Haiku 4.5 on 2 000 phishing emails: accuracy, calibration, latency, cost. Reproducible benchmark. | 🆕 | 2026-09-19 |
| [mahlernim/jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark) | 7 | 0 | 요약 대기 · Reproducible early-access evaluation of Jev on Korean understanding and medical text, with runtime and cost evidence | 🆕 | 2026-09-17 |
| [NicolaiLassen/open-bonsai-jev](https://github.com/NicolaiLassen/open-bonsai-jev) | 7 | 2 | 요약 대기 · openjev's mechanism, Bonsai's weights: typed decisions read straight from one forward pass of a 1.75-bit 27B model. Credit to TheoLeeCJ (SemIf/OpenJev) and PrismML. | 🆕 | 2026-09-20 |
| [scienthoon/luce](https://github.com/scienthoon/luce) | 7 | 0 | 요약 대기 · Luce: a recipe for calibrated decision models — a sentence about your task in, a small model that answers typed questions with honest probabilities out (init → synth → train → eval → serve) | 🆕 | 2026-09-26 |
| [xyzzzh/GroundingJev](https://github.com/xyzzzh/GroundingJev) | 7 | 0 | 요약 대기 · Jev-inspired non-autoregressive visual grounding with Qwen3.5-0.8B and continuous box regression. | 🆕 | 2026-09-25 |
| [collapseindex/dinostomp](https://github.com/collapseindex/dinostomp) | 6 | 1 | 요약 대기 · A verification layer for AI evaluations. Checks the instrument, not just the score: data, scorer, runs, numbers, claims, and itself. | 🆕 | 2026-09-23 |
| [prasanthj/duckdb-jev](https://github.com/prasanthj/duckdb-jev) | 6 | 2 | 요약 대기 · High-throughput, robust native DuckDB extension for batched and streaming TypeSafe/Jev classification, scoring, and semantic predicates from SQL. | 🆕 | 2026-09-21 |
| [xingwudao/OpenJev](https://github.com/xingwudao/OpenJev) | 6 | 0 | 요약 대기 · OpenJev: an independent Jev-inspired System One decision API based on TypeSafe.ai concepts. Choice, score and noul primitives, local mock server, Python and TypeScript SDKs. Real inference planned; not affiliated with TypeSafe AI. | 🆕 | 2026-09-18 |
| [choxos/jevchess](https://github.com/choxos/jevchess) | 5 | 1 | 요약 대기 · Jev, TypeSafe's System One model, plays chess against any OpenRouter LLM, Stockfish and you. One-page web app with live moves, Jev's move probabilities, saved games and win rates. | 🆕 | 2026-09-20 |
| [hndrr/ComfyUI-Jev](https://github.com/hndrr/ComfyUI-Jev) | 5 | 0 | 요약 대기 · Jev text interpretation and judgments for ComfyUI. | 🆕 | 2026-09-20 |
| [illumi-ai/sentimento-em-tempo-real](https://github.com/illumi-ai/sentimento-em-tempo-real) | 5 | 2 | 요약 대기 · Emoção da fala em tempo real: transcrição ao vivo com Gemini 3.5 Transcribe Live e seis emoções avaliadas pelo Jev (TypeSafe) a cada 0,5 s. Projeto aberto da illumi. | 🆕 | 2026-09-25 |
| [Kushwho/jev-codes](https://github.com/Kushwho/jev-codes) | 5 | 1 | 요약 대기 · Audit your git diff against YAML coding-standards packs using TypeSafe's Jev model, from a CLI or your AI agent's command/skill. | 🆕 | 2026-09-19 |
| [MANISH007700/tab-bouncer](https://github.com/MANISH007700/tab-bouncer) | 5 | 0 | 요약 대기 · Chrome extension that closes the tabs you don't need, judged by TypeSafe's Jev in one call. Tell it what you're doing; it shows the rest the door. | 🆕 | 2026-09-19 |
| [markjaquith/typesafe-ai-playground](https://github.com/markjaquith/typesafe-ai-playground) | 5 | 1 | 요약 대기 · A playground for experiments around Jev, TypeSafe's System One model. | 🆕 | 2026-09-22 |
| [shamazharikh/qwen-rlcd](https://github.com/shamazharikh/qwen-rlcd) | 5 | 1 | 요약 대기 · Jev-style calibrated decision model (Choice/Score/Noul) on Qwen3.5-0.8B | 🆕 | 2026-09-25 |
| [usail-hkust/JevLight](https://github.com/usail-hkust/JevLight) | 5 | 1 | 요약 대기 · Jev-powered traffic signal control on CityFlow with structured phase and green-time decisions. | 🆕 | 2026-09-24 |
| [y0usaf/typesafe-cli](https://github.com/y0usaf/typesafe-cli) | 5 | 0 | 요약 대기 · Ask Jev typed questions from the shell: noul, choice, and score answers as numbers, not prose | 🆕 | 2026-09-19 |
| [adtyavrdhn/pydantic-jev-examples](https://github.com/adtyavrdhn/pydantic-jev-examples) | 4 | 1 | 요약 대기 · Pydantic AI capabilities made stronger with Jev: small runnable demos, one file each | 🆕 | 2026-09-17 |
| [Bring-AI/JevNext](https://github.com/Bring-AI/JevNext) | 4 | 0 | 요약 대기 · JevNext · More than Choice — A simple algorithm that equips any Jev-like model with numerical control. | 🆕 | 2026-09-25 |
| [chenmingtang830/jevarena](https://github.com/chenmingtang830/jevarena) | 4 | 0 | 요약 대기 · Open-source BYOK arena for Jev and other AI judges. Find failures, compare quality, cost, and latency. | 🆕 | 2026-09-20 |
| [DECRUX9812/openjev](https://github.com/DECRUX9812/openjev) | 4 | 0 | 요약 대기 · Open, local, zero-cost reimplementation of the Jev decision layer for job postings | 🆕 | 2026-09-18 |
| [fajarhide/askgrep](https://github.com/fajarhide/askgrep) | 4 | 0 | 요약 대기 · grep for the questions you cannot write as a pattern. Reads every function instead of sampling a few. Powered by Jev, TypeSafe AI's System One model. | 🆕 | 2026-09-22 |
| [jtsang4/jev-cli](https://github.com/jtsang4/jev-cli) | 4 | 0 | 요약 대기 · CLI for TypeSafe AI's Jev evaluation model — typed questions in, structured JSON answers out | 🆕 | 2026-09-18 |
| [MithrilMan/your-signal](https://github.com/MithrilMan/your-signal) | 4 | 1 | 요약 대기 · Open-source BYOK Chrome extension for personal, reversible X timeline filters. | 🆕 | 2026-09-18 |
| [umstek/zero-shot-ie-bench](https://github.com/umstek/zero-shot-ie-bench) | 4 | 1 | 요약 대기 · 38 zero-shot information-extraction &amp; classification systems across 23 families — extractors, classifiers, cross-encoder rerankers and typed-decision engines, local + hosted (OpenRouter) — demos, accuracy/latency/cost benchmarks, 9-language suite, web UI | 🆕 | 2026-09-27 |
| [johnhughes3/LegalForecastBench](https://github.com/johnhughes3/LegalForecastBench) | 7 | 1 | **무엇** 미국 연방 법원의 각 청구 및 피고별 기각(motion-to-dismiss) 확률을 프런티어 모델이 예측하도록 평가하는 벤치마크 도구다.<br>**판단** 제공된 판사 서면 기록을 바탕으로 특정 청구가 완전히 기각될 확률(noul)을 예측하도록 요구한다.<br>**포인트** 사건 전체가 아닌 청구-피고 단위의 마이크로 브라이어 점수를 측정하며, 웹 검색 차단과 훈련 데이터 컷오프 통제로 유출을 줄인다. | 🆕 | 2026-09-27 |
| [adambkovacs/candidate-experience-benchmark](https://github.com/adambkovacs/candidate-experience-benchmark) | 3 | 0 | 요약 대기 · Compare TypeSafe Jev and LLMs on 60 synthetic candidate-experience reviews: four classification tasks, prompt variants, costs, tokens, and reproducible evidence. | 🆕 | 2026-09-25 |
| [ajanm007/jevrag](https://github.com/ajanm007/jevrag) | 3 | 0 | 요약 대기 · A pluggable decision substrate for RAG pipelines; explicit, calibrated state → Decision → confidence → action gates, with Jev as the first swappable backend. | 🆕 | 2026-09-24 |
| [aryanchauhanoffical/no-hallucination](https://github.com/aryanchauhanoffical/no-hallucination) | 3 | 0 | 요약 대기 · Three measured experiments on RAG hallucination: quote-checking, TypeSafe's Jev, and IBM's STAIR. 850+ graded questions, raw responses included. | 🆕 | 2026-09-20 |
| [bitnovus/jev-spam-eval](https://github.com/bitnovus/jev-spam-eval) | 3 | 0 | 요약 대기 · Zero-shot spam filtering with TypeSafe Jev Noul questions, compared with TF-IDF baselines | 🆕 | 2026-09-18 |
| [boldbug1/jev-triage](https://github.com/boldbug1/jev-triage) | 3 | 0 | 요약 대기 · Message triage CLI in Go, built on the Jev decision model from TypeSafe AI. Categorizes messages, scores urgency, and flags low-confidence ones for human review. | 🆕 | 2026-09-20 |
| [HopLee6/Qwev](https://github.com/HopLee6/Qwev) | 3 | 0 | 요약 대기 · Qwev: A Training-Free, Qwen-Based Jev | 🆕 | 2026-09-23 |
| [jev-skills/openjev-multimodal](https://github.com/jev-skills/openjev-multimodal) | 3 | 0 | 요약 대기 · Local multimodal decisions on your Mac. Jev-compatible typed probabilities with Qwen, llama.cpp and Metal. | 🆕 | 2026-09-23 |
| [jgridifier/jev-research-eval](https://github.com/jgridifier/jev-research-eval) | 3 | 0 | 요약 대기 · Reproducible Jev Ultrafast research-browser eval harness + field note (QC’d cases, suite runner, report generator). Not investment advice. | 🆕 | 2026-09-17 |
| [lianghsun/jev-tmmluplus-eval](https://github.com/lianghsun/jev-tmmluplus-eval) | 3 | 0 | 요약 대기 · Evaluate TypeSafe AI's Jev (System One Model) on TMMLU+ v1.1 — four-way choice via the API's own response schema, 100% parse rate by construction | 🆕 | 2026-09-23 |
| [memovai/openevals](https://github.com/memovai/openevals) | 3 | 0 | 요약 대기 · Fast and cheap agent evals. jev as judge. | 🆕 | 2026-09-20 |
| [NicolasMontone/jev-evals](https://github.com/NicolasMontone/jev-evals) | 3 | 0 | 요약 대기 · Rubric-based eval harness cheap enough to run on every PR, powered by typesafe-ai/jev | 🆕 | 2026-09-18 |
| [TokenTrim/jev-agent-failure-benchmark](https://github.com/TokenTrim/jev-agent-failure-benchmark) | 3 | 0 | 요약 대기 · Benchmarking Jev (Typesafe.ai) against a strong LLM on the Who&amp;When Pro agent-failure-attribution benchmark (text subset). | 🆕 | 2026-09-17 |
| [TokenTrim/jev-routing-experiment](https://github.com/TokenTrim/jev-routing-experiment) | 3 | 2 | 요약 대기 · Benchmarking TypeSafe's Jev decision model as a cost-efficient LLM router on RouterArena | 🆕 | 2026-09-17 |
| [Yasserbhb/Agent-JEV-Tetris](https://github.com/Yasserbhb/Agent-JEV-Tetris) | 3 | 0 | 요약 대기 · using the new model JEV to play the game tetris  | 🆕 | 2026-09-17 |
| [YidiDev/jev-benchmark](https://github.com/YidiDev/jev-benchmark) | 3 | 0 | 요약 대기 · Rubric-Based Zero-Shot Classification Benchmark: Jev vs Claude Haiku 4.5 vs Claude Sonnet 5 vs OpenJev on rubric-conditioned classification, chained decision execution, and exam grading -- with full price tracking. | 🆕 | 2026-09-24 |
| [zhengbangbo/structured-decision-bench](https://github.com/zhengbangbo/structured-decision-bench) | 3 | 0 | 요약 대기 · Jev vs Laya CoreML vs Qwen3 8B | 🆕 | 2026-09-21 |
| [hegargarcia/jev-playground](https://github.com/hegargarcia/jev-playground) | 1 | 0 | **무엇** 틱택토와 커넥트포 게임에서 TypeSafe Jev와 여러 LLM의 의사결정 성능을 비교 평가하는 벤치마크 플레이그라운드 웹 앱이다.<br>**판단** 주어진 게임판 상태와 전술 지침을 바탕으로 가능한 합법적 수(Legal actions) 목록 중 다음에 둘 최적의 수를 choice로 선택하게 한다.<br>**포인트** Vercel AI Gateway를 통해 Jev 네이티브 모델과 타사 LLM에 동일한 상태와 선택지를 전달해 수 선택, 가중치, 신뢰도를 로그로 비교한다. | 🆕 | 2026-09-17 |
| [0xlau/jev-rps](https://github.com/0xlau/jev-rps) | 2 | 0 | 요약 대기 · Jev 对拳 · AI 先出拳，你再选择。每一局都可核验。 | 🆕 | 2026-09-22 |
| [AgenticAPP-Web/Jev-Research-Index](https://github.com/AgenticAPP-Web/Jev-Research-Index) | 2 | 1 | 요약 대기 · Jev Research Index is a bilingual catalogue of papers, software projects, interviews, public analyses, demonstrations, and social-media material related to Jev, the TypeSafe AI System One typed probabilistic decision model. | 🆕 | 2026-09-26 |
| [andrewsilber/JevsBistro](https://github.com/andrewsilber/JevsBistro) | 2 | 0 | 요약 대기 · 3D restaurant service simulator for benchmarking low-latency decision models | 🆕 | 2026-09-20 |
| [bydeng01/scientific-decision-eval](https://github.com/bydeng01/scientific-decision-eval) | 2 | 0 | 요약 대기 · Code and data for evaluating Jev, a System One model, on scientific decisions and how its choices affect downstream results. | 🆕 | 2026-09-24 |
| [dashidhy/GemmaJev](https://github.com/dashidhy/GemmaJev) | 2 | 0 | 요약 대기 · A simplified functionality reproduction of Jev-style decisions with Gemma 4. Native multi-modal ability, finetuning free, runs locally on your machine. | 🆕 | 2026-09-24 |
| [Dimesio/typesafe-chess](https://github.com/Dimesio/typesafe-chess) | 2 | 0 | 요약 대기 · FUn little experiment with Typesafe AI Jev Model playing chess against stockfish :) | 🆕 | 2026-09-20 |
| [Eliran-Turgeman/reaper](https://github.com/Eliran-Turgeman/reaper) | 2 | 0 | 요약 대기 · Semantic linter for AI coding agents and CI code review. Detects silent failures, weakened tests, scope creep, unnecessary abstractions, and other semantic code smells. | 🆕 | 2026-09-21 |
| [hamakyo/jev-starter](https://github.com/hamakyo/jev-starter) | 2 | 1 | 요약 대기 · Typed, policy-driven decision workflows on top of TypeSafe AI Jev: confidence routing, fallbacks, evaluation, and RAG patterns for TypeScript apps. | 🆕 | 2026-09-18 |
| [hemanth/hfjev](https://github.com/hemanth/hfjev) | 2 | 1 | 요약 대기 · Classify Hugging Face datasets across typed semantic dimensions with TypeSafe Jev System One. | 🆕 | 2026-09-21 |
| [hiroki-abe-58/sokudan](https://github.com/hiroki-abe-58/sokudan) | 2 | 1 | 요약 대기 · Japanese System One decision model (Jev-style): typed answers and probabilities in one forward pass, no text generation. Includes bench_ja/bench_en and a Laya position-bias repro. | 🆕 | 2026-09-26 |
| [HusDev/LinguaTrace](https://github.com/HusDev/LinguaTrace) | 2 | 1 | 요약 대기 · The lesson notebook that writes itself. A live tutoring lesson becomes structured notes and a personalised Lesson Pack: Jev judges every turn, Gemini Live transcribes each speaker, and the tutor stays a person. | 🆕 | 2026-09-20 |
| [JacobLinCool/jev-paper-judge](https://github.com/JacobLinCool/jev-paper-judge) | 2 | 0 | 요약 대기 · Feedback on your paper in seconds. | 🆕 | 2026-09-17 |
| [Jevals/jevals-data](https://github.com/Jevals/jevals-data) | 2 | 1 | 요약 대기 · Independent benchmark data for TypeSafe's Jev (System One model) vs LLMs: accuracy, calibration, cost. Boards + per-decision logs, CC-BY-4.0 | 🆕 | 2026-09-21 |
| [juanegido/jev-pr-judge](https://github.com/juanegido/jev-pr-judge) | 2 | 0 | 요약 대기 · Typed verdicts on pull requests with TypeSafe System One (Jev): one parallel call, policy in code, usable as a GitHub Action | 🆕 | 2026-09-17 |
| [juanlentino/jev-connector](https://github.com/juanlentino/jev-connector) | 2 | 0 | 요약 대기 · WordPress connector for TypeSafe Jev: typed, confidence-scored answers your code can branch on. | 🆕 | 2026-09-23 |
| [kylehovance-ai/jev-the-janitor](https://github.com/kylehovance-ai/jev-the-janitor) | 2 | 0 | 요약 대기 · A brain scan for your Obsidian or markdown vault. Redacts each note on your machine, asks TypeSafe's Jev typed questions about it, and lets plain code decide. Shows the bill first, meters spend against a ceiling, never deletes a note. | 🆕 | 2026-09-26 |
| [leepokai/llm-prompt-techniques-on-jev](https://github.com/leepokai/llm-prompt-techniques-on-jev) | 2 | 0 | 요약 대기 · Chain-of-thought and self-refinement for TypeSafe's Jev: feed its typed answers back as state and ask again. Benchmarks vs TypeSafe's own cookbook numbers. | 🆕 | 2026-09-19 |
| [Little-Planet-Labs/jev-playground](https://github.com/Little-Planet-Labs/jev-playground) | 2 | 0 | 요약 대기 · A small Next.js app for experimenting with TypeSafe AI's Jev model (System One) | 🆕 | 2026-09-17 |
| [mychaelangelo/tempo-jev-demo](https://github.com/mychaelangelo/tempo-jev-demo) | 2 | 0 | 요약 대기 · A natural-language task workspace comparing performance across AI models (TypeSafe's Jev, GPT-5.6 Luna, and Gemini 3.8 Flash) | 🆕 | 2026-09-20 |
| [sathariels/jevcheck](https://github.com/sathariels/jevcheck) | 2 | 1 | 요약 대기 · Behavioral contracts for TypeSafe Jev — pin production expectations, eval model upgrades, catch flips and confidence regressions. | 🆕 | 2026-09-21 |
| [shitianfang/wakegate](https://github.com/shitianfang/wakegate) | 2 | 1 | 요약 대기 · Ask Jev whether a sleeping agent's wakeup is worth a full LLM turn before you resume it. A fail-open wake gate for long-running agents on Workers, Durable Objects and Node. | 🆕 | 2026-09-18 |
| [southleft/component-charades](https://github.com/southleft/component-charades) | 2 | 0 | 요약 대기 · A Taboo-style parlour game for design systems, refereed by Jev (TypeSafe System One model) | 🆕 | 2026-09-22 |
| [stperic/jev-medhallu-benchmark](https://github.com/stperic/jev-medhallu-benchmark) | 2 | 2 | 요약 대기 · TypeSafe's Jev and four fast LLMs added to Stanford MedHELM's MedHallu results: harness, preregistered run plans and every run file. | 🆕 | 2026-09-23 |
| [suraj-phanindra/wellposed](https://github.com/suraj-phanindra/wellposed) | 2 | 0 | 요약 대기 · Lints Jev requests before they are sent: offline checks for missing none-of-the-above options and broken state paths, then Jev itself for what structure cannot decide. | 🆕 | 2026-09-25 |
| [tryaksh/jev-pick-and-place-study](https://github.com/tryaksh/jev-pick-and-place-study) | 2 | 0 | 요약 대기 · A small reproducible MuJoCo pilot comparing Jev, Claude Haiku, and reactive rules for pick-and-place. | 🆕 | 2026-09-17 |
| [ZihuaEvan/GUI_JEV](https://github.com/ZihuaEvan/GUI_JEV) | 2 | 2 | 요약 대기 · Fast GUI Grounding with jev | 🆕 | 2026-09-21 |
| [zsavage8/padflow-jev-evals](https://github.com/zsavage8/padflow-jev-evals) | 2 | 0 | 요약 대기 · Typed-decision benchmark from PadFlow (land development SaaS): schemas, anonymized labeled rows, and a runner for confidence-calibrated models like TypeSafe Jev. | 🆕 | 2026-09-17 |
| [AliceRoselia/Typesafe_chess_eval](https://github.com/AliceRoselia/Typesafe_chess_eval) | 1 | 0 | 요약 대기 · An evaluation of typesafe AI chess. As it turns out, the AI isn't doing really well even though chess is not a particularly open-ended game. Still, it's only a prototype and this probably wasn't optimzied for games. | 🆕 | 2026-09-17 |
| [Amine-LG/jev-creature-forge](https://github.com/Amine-LG/jev-creature-forge) | 1 | 0 | 요약 대기 · Typed semantic creature compilation with Jev: natural language → inspectable genome → deterministic procedural SVG. | 🆕 | 2026-09-21 |
| [AppChainAI/Jevatar](https://github.com/AppChainAI/Jevatar) | 1 | 0 | 요약 대기 · An AI companion that replies only with facial expressions. Jev (TypeSafe System One) judges your message and picks 1 of 14 moods; blobatar morphs its face. React + Vite + Bun. | 🆕 | 2026-09-22 |
| [avshalomd/longjev](https://github.com/avshalomd/longjev) | 1 | 0 | 요약 대기 · Long inputs for TypeSafe AI's Jev decision model. An experiment. | 🆕 | 2026-09-19 |
| [awun8191/jev-resume-analyzer](https://github.com/awun8191/jev-resume-analyzer) | 1 | 0 | 요약 대기 · CV diagnostics and job alignment with TypeSafe Jev, React and FastAPI | 🆕 | 2026-09-17 |
| [Babulubobo/formpilot](https://github.com/Babulubobo/formpilot) | 1 | 0 | 요약 대기 · FormPilot: AI form-filling Chrome extension | 🆕 | 2026-09-24 |
| [baibizhe/jev-decision-benchmarks](https://github.com/baibizhe/jev-decision-benchmarks) | 1 | 0 | 요약 대기 · JEV decision benchmark results on MetaTool, When2Call, and BFCL V4, with bilingual tables and reproducible reports. | 🆕 | 2026-09-19 |
| [beingcognitive/jev-go](https://github.com/beingcognitive/jev-go) | 1 | 0 | 요약 대기 · Can you beat Jev at Gomoku, Go or chess? Play TypeSafe's System One decision model on Cloudflare Pages, with every API call shown, a hall of fame and replays. | 🆕 | 2026-09-24 |
| [blas0/jev-shadcn-lint-eval](https://github.com/blas0/jev-shadcn-lint-eval) | 1 | 0 | 요약 대기 · A small second eval for shadcn-ui/lint that uses TypeSafe's Jev to judge the linter's own output. | 🆕 | 2026-09-17 |
| [carlaiau/can-jev-play](https://github.com/carlaiau/can-jev-play) | 1 | 0 | 요약 대기 · Can Jev infer whether a bet is worthwhile from its payout table, and do recent wins or losses sway that choice | 🆕 | 2026-09-23 |
| [Chorylee7/JEV](https://github.com/Chorylee7/JEV) | 1 | 0 | 요약 대기 · JEV 调研报告：TypeSafe System One 决策模型与开源对标（含原始核实记录） | 🆕 | 2026-09-21 |
| [ckorhonen/jev-lint](https://github.com/ckorhonen/jev-lint) | 1 | 0 | 요약 대기 · A fuzzy linter for coding agents. It checks the code your agent writes against your team's best practices while the agent is still working, not at code review. | 🆕 | 2026-09-27 |
| [clduab11/jev-test](https://github.com/clduab11/jev-test) | 1 | 0 | 요약 대기 · Pre-registered benchmark: can a 2B local model (Gemma 4 E2B) answer web questions without making things up when a decision model (TypeSafe Jev) makes every call? SearXNG for search, MemPalace for verbatim memory, seven arms including open local judges. Spec and thresholds fixed before any run. | 🆕 | 2026-09-21 |
| [dayhaysoos/jevals](https://github.com/dayhaysoos/jevals) | 1 | 0 | 요약 대기 · Local evaluation workbench for TypeSafe Jev | 🆕 | 2026-09-18 |
| [ElshinQ/jevaluate](https://github.com/ElshinQ/jevaluate) | 1 | 0 | 요약 대기 · Jevaluate: evaluate before you trust. Field notes, runnable scripts and an agent skill for TypeSafe Jev: gated evals, a browser loop, a product walk with DeepSeek vision, a UI text judge and a first-click tree test. Co-authored with Claude Fable 5.1. | 🆕 | 2026-09-19 |
| [EthanAlgoX/LocalJev](https://github.com/EthanAlgoX/LocalJev) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-20 |
| [etsabary/jev-deterministic-benchmark](https://github.com/etsabary/jev-deterministic-benchmark) | 1 | 0 | 요약 대기 · 1,000-decision behavioral benchmark of Jev across 25 deterministic reasoning families. | 🆕 | 2026-09-22 |
| [Fox-Islam/jev-bias-bench](https://github.com/Fox-Islam/jev-bias-bench) | 1 | 0 | 요약 대기 · A benchmark for Jev's biases, built from people who differ in one attribute at a time. | 🆕 | 2026-09-20 |
| [g0runmezadam/what-is-jev](https://github.com/g0runmezadam/what-is-jev) | 1 | 0 | 요약 대기 · Independent, source-linked research on TypeSafe AI's Jev (System One), with 947 rubric-scored public repositories, recurring patterns, datasets, and bilingual documentation. | 🆕 | 2026-09-21 |
| [getainode/jebadiah](https://github.com/getainode/jebadiah) | 1 | 1 | 요약 대기 · Jebadiah, an open System One decision model: trainer, data builders, evals and every run record | 🆕 | 2026-09-26 |
| [HackSing/jev-report](https://github.com/HackSing/jev-report) | 1 | 0 | 요약 대기 · 发明 RLHF 的人，这次做了个不会说话的模型：Jev 独立研究报告。52 页 PDF + 50 条中文实测复现包 + 143 条可回溯数据表 | 🆕 | 2026-09-17 |
| [Hanno-Labs/decision-bench](https://github.com/Hanno-Labs/decision-bench) | 1 | 1 | 요약 대기 · Open benchmark runtime for document-grounded decision models | 🆕 | 2026-09-27 |
| [hifizz/jev-finance-benchmark](https://github.com/hifizz/jev-finance-benchmark) | 1 | 0 | 요약 대기 · typesafe.ai model jev finance benchmark | 🆕 | 2026-09-17 |
| [Jason-Doyle/jev-parallel-dispatch](https://github.com/Jason-Doyle/jev-parallel-dispatch) | 1 | 0 | 요약 대기 · Browser simulation for parallel Jev decisions with capacity-constrained assignment and retained evidence | 🆕 | 2026-09-20 |
| [JYeswak/jev_playground](https://github.com/JYeswak/jev_playground) | 1 | 0 | 요약 대기 · Measure what Jev can actually do before you build on it. Graded findings, ruled-out candidates, and recipes with stop-conditions. 0 promotions — on purpose. | 🆕 | 2026-09-27 |
| [LouisUltra/jev-deep-dive](https://github.com/LouisUltra/jev-deep-dive) | 1 | 0 | 요약 대기 · An evidence-graded deep dive into Jev (TypeSafe AI's System One model): interface, verification, reproduction comparison, and field guide. Bilingual (EN/中文), with runnable probe tools. | 🆕 | 2026-09-20 |
| [Maxi91f/jev_testing](https://github.com/Maxi91f/jev_testing) | 1 | 0 | 요약 대기 · Exploratory Jev experiments and evaluation report | 🆕 | 2026-09-22 |
| [minkhant1996/system-one-playground](https://github.com/minkhant1996/system-one-playground) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [mionax/decisionops](https://github.com/mionax/decisionops) | 1 | 0 | 요약 대기 · Jev thinks. Your code acts. The open-source lab for Choice, Score &amp; Noul decisions. | 🆕 | 2026-09-23 |
| [mpuig/system-one](https://github.com/mpuig/system-one) | 1 | 0 | 요약 대기 · An open-source System One decision model — Kahneman's term for the fast, automatic judgment faculty. Calibrated choice/score/noul probabilities in one forward pass on small fine-tuned open models. Local on Apple Silicon (MLX), Jev-compatible API, audited experiment log. | 🆕 | 2026-09-23 |
| [phuthuycoding/jev-audit](https://github.com/phuthuycoding/jev-audit) | 1 | 0 | 요약 대기 · AI-powered pre-commit auditor backed by TypeSafe System One (Jev) — blocks secrets, vulns &amp; low-quality code in ~300ms. 79-case test corpus at 100% accuracy. | 🆕 | 2026-09-18 |
| [rchovatiya88/cyber-breach-jev](https://github.com/rchovatiya88/cyber-breach-jev) | 1 | 0 | 요약 대기 · Cyber-Breach: The Jev Protocol - A tactical cyberpunk arena combat game powered by TypeSafe AI Jev System One decision model | 🆕 | 2026-09-18 |
| [ruslanlap/jev-gate](https://github.com/ruslanlap/jev-gate) | 1 | 0 | 요약 대기 · Typed decision model judge for GitHub PRs — sub-second, ~$0.0001 per triage (TypeSafe Jev via OpenRouter) | 🆕 | 2026-09-22 |
| [shyamsridhar123/JudgeJev](https://github.com/shyamsridhar123/JudgeJev) | 1 | 0 | 요약 대기 · A hands-on educational lab for DeepEval + Jev: inspect real recorded judgments, explore release gates and drift playback, and run fresh evaluations on your own workloads. | 🆕 | 2026-09-26 |
| [simonmesmith/jev-bbq-experiment](https://github.com/simonmesmith/jev-bbq-experiment) | 1 | 0 | 요약 대기 · Reproducible evaluation of TypeSafe Jev on all 58,492 BBQ questions: accuracy, stereotype bias, uncertainty, cost and latency. | 🆕 | 2026-09-19 |
| [sshh12/nanojev](https://github.com/sshh12/nanojev) | 1 | 0 | 요약 대기 · A hypothetical reconstruction of Jev, TypeSafe's closed "System One" decision model, in the spirit of nanoGPT: the smallest working version of what black-box probing suggests. It reads a state and answers typed questions (yes/no, pick one, ordered score) with probabilities instead of generated text. | 🆕 | 2026-09-22 |
| [sypherin/jev-trace-classifier](https://github.com/sypherin/jev-trace-classifier) | 1 | 0 | 요약 대기 · Application of TypeSafe Jev (noul judgment primitive) on the collusion.wiki corpus: agent vs human page authorship, head-to-head vs local Qwen3.8-Flash-Next | 🆕 | 2026-09-17 |
| [Tenkei/jev-decision-bench](https://github.com/Tenkei/jev-decision-bench) | 1 | 0 | 요약 대기 · A reproducible, self-hosted benchmark for comparing JEV and LLM decision-making on your own datasets, models, and evaluation policies. | 🆕 | 2026-09-27 |
| [TheGali/terrarium](https://github.com/TheGali/terrarium) | 1 | 0 | 요약 대기 · A sandbox where a TypeSafe System One model presses the controls of a small creature. Code runs the world. | 🆕 | 2026-09-17 |
| [TomRichner/can-jev-bayes](https://github.com/TomRichner/can-jev-bayes) | 1 | 0 | 요약 대기 · Jev Bayes, No? Testing TypeSafe AI's Jev against Bayesian-optimal strategies, and testing if Jev can effectivly use Bayesian priors. | 🆕 | 2026-09-23 |
| [Tsagaanbayr1/jev-tetris](https://github.com/Tsagaanbayr1/jev-tetris) | 1 | 0 | 요약 대기 · Real-time Tetris versus Jev, a TypeSafe decision model — spins, garbage, B2B chains, and decisions prefetched a piece ahead | 🆕 | 2026-09-21 |
| [tusharck/jev-inbox-queue](https://github.com/tusharck/jev-inbox-queue) | 1 | 0 | 요약 대기 · Turn an inbox into a short action queue with Jev (TypeSafe System One) | 🆕 | 2026-09-23 |
| [vehas/thaiexam-jev-charts](https://github.com/vehas/thaiexam-jev-charts) | 1 | 0 | 요약 대기 · Charts: TypeSafe Jev evaluated on Thai standardized exams vs 110 other models | 🆕 | 2026-09-17 |
| [vnmoorthy/siege](https://github.com/vnmoorthy/siege) | 1 | 0 | 요약 대기 · SIEGE: 200 people vs one agent. A typed action gate (TypeSafe System One) that learns from every breach, evaluated by W&amp;B Weave, hardened by a defender loop. Built at CoreWeave Hacks: Agent Loops 2026. | 🆕 | 2026-09-13 |
| [wmcbtech30/ground-zero](https://github.com/wmcbtech30/ground-zero) | 1 | 0 | 요약 대기 · Eval framework library to evaluate AI hallucinations, correctness, and instruction following, powered by Jev AI. | 🆕 | 2026-09-21 |
| [xuan7zhang/jev-toolspace](https://github.com/xuan7zhang/jev-toolspace) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-23 |
| [Yaxin9Luo/spending-effort-with-jev](https://github.com/Yaxin9Luo/spending-effort-with-jev) | 1 | 0 | 요약 대기 · Jev-powered /effort advisor for Claude Code: tells you when to switch effort, per prompt | 🆕 | 2026-09-26 |
| [Zafer-Liu/jev-xiangqi](https://github.com/Zafer-Liu/jev-xiangqi) | 1 | 0 | 요약 대기 · Play Chinese Chess (Xiangqi) against Jev - TypeSafe System One decision model as the AI. Score fan-out over legal moves. | 🆕 | 2026-09-21 |
| [shibadogcap/kyotsu-ai-bench](https://github.com/shibadogcap/kyotsu-ai-bench) | 2 | 0 | 요약 대기 · AI benchmark on Japan's 2026 Common Test: Jev vs luna-none vs luna-low (static dashboard) | 🆕 | 2026-09-17 |
| [Adityakhalkar/JevEye](https://github.com/Adityakhalkar/JevEye) | 0 | 0 | 요약 대기 · Ask Jev about an image. A CNN reports what it sees with a calibrated confidence or an abstention; Jev judges what it means. | 🆕 | 2026-09-25 |
| [andreaserradev-gbj/jev-access-day](https://github.com/andreaserradev-gbj/jev-access-day) | 0 | 0 | 요약 대기 · A learning scaffold for TypeSafe AI's System One models: eval harness plus a measured, plain-language comparison of the Jev decision model vs an LLM stand-in on 24 real operational decisions. All numbers reproducible from committed run files. | 🆕 | 2026-09-19 |
| [carlaiau/judge-jev](https://github.com/carlaiau/judge-jev) | 0 | 0 | 요약 대기 · Reproducible experiments evaluating Jev as an automated judge across benchmarks and tasks. | 🆕 | 2026-09-24 |
| [criguex/playwright-jev](https://github.com/criguex/playwright-jev) | 0 | 0 | 요약 대기 · Semantic assertions for Playwright Test powered by Jev (TypeSafe AI): toMean, toMeanAll, toChoose, toBeScored with record/replay and a reporter | 🆕 | 2026-09-26 |
| [cx295410-dot/jev-biomedical-evidence-screening](https://github.com/cx295410-dot/jev-biomedical-evidence-screening) | 0 | 0 | 요약 대기 · Frozen benchmark data, analysis code and reproducibility materials for Jev biomedical evidence screening across ten SYNERGY reviews. | 🆕 | 2026-09-22 |
| [davidzna/better-cheaper-llm](https://github.com/davidzna/better-cheaper-llm) | 0 | 0 | 요약 대기 · Use Jev instead of an LLM for RAG decisions: relevance grading, query routing, hallucination checks and LLM-as-a-judge evals. Faster, cheaper, measured first. | 🆕 | 2026-09-26 |
| [dgr8akki/jev-voice](https://github.com/dgr8akki/jev-voice) | 0 | 0 | 요약 대기 · Control Chrome by voice: open sites, search, click links and fill in forms. Chrome extension powered by Jev. | 🆕 | 2026-09-25 |
| [dgr8akki/recipe-mode](https://github.com/dgr8akki/recipe-mode) | 0 | 0 | 요약 대기 · Cook hands-free on any recipe page: say "next", "how much butter?" or "set a timer". Chrome extension powered by Jev. | 🆕 | 2026-09-25 |
| [ericflo/pairsort](https://github.com/ericflo/pairsort) | 0 | 0 | 요약 대기 · pairsort: rank anything with AI judges — many small pairwise questions, coupled into one calibrated ranking (PKPD / Bradley–Terry) on Jev-style judges | 🆕 | 2026-09-25 |
| [FlorianRiquelme/jev-kit](https://github.com/FlorianRiquelme/jev-kit) | 0 | 0 | 요약 대기 · Typed client and benchmark harness for Jev, TypeSafe AI's System One decision model, through the Vercel AI Gateway. Measure accuracy, calibration and cost on your own data before you trust a threshold. | 🆕 | 2026-09-20 |
| [fly2abhishek/jev-field-tests](https://github.com/fly2abhishek/jev-field-tests) | 0 | 0 | 요약 대기 · Twelve field tests for TypeSafe's Jev model: calibration, guardrails, résumé screening, interview rubrics and its failure modes. Bring your own API key. | 🆕 | 2026-09-20 |
| [frederico-kluser/jev-agent-skill](https://github.com/frederico-kluser/jev-agent-skill) | 0 | 0 | 요약 대기 · Decisões tipadas em milissegundos com o Jev (System One da TypeSafe) via OpenRouter — state + perguntas noul/choice/score entram, decisões calibradas saem. Validação pesada baseada nos conceitos do modelo, bandas auto/hitl/abstain, deteção de prompt injection e servidor MCP. Zero dependências (Node ≥20). | 🆕 | 2026-09-24 |
| [gbesse/erpnext-jev-decisions](https://github.com/gbesse/erpnext-jev-decisions) | 0 | 0 | 요약 대기 · Reviewable Jev lead intent for ERPNext | 🆕 | 2026-09-27 |
| [gbesse/jev-crypto-lab](https://github.com/gbesse/jev-crypto-lab) | 0 | 0 | 요약 대기 · Read-only research prototypes for prediction-market contract logic, resolution scenarios and crypto exposure | 🆕 | 2026-09-27 |
| [gbesse/jev-legifrance-impact](https://github.com/gbesse/jev-legifrance-impact) | 0 | 0 | 요약 대기 · Detect which changed legal provisions may affect a declared business activity. | 🆕 | 2026-09-21 |
| [gbesse/jev-marianne](https://github.com/gbesse/jev-marianne) | 0 | 0 | 요약 대기 · Version political commitments and detect how sourced promises change over time. | 🆕 | 2026-09-21 |
| [gbesse/openproject-jev-triage](https://github.com/gbesse/openproject-jev-triage) | 0 | 0 | 요약 대기 · Jev completeness triage for OpenProject work packages | 🆕 | 2026-09-27 |
| [gbesse/saleor-jev-catalog-review](https://github.com/gbesse/saleor-jev-catalog-review) | 0 | 0 | 요약 대기 · Jev decision review for Saleor product webhooks | 🆕 | 2026-09-27 |
| [gkastanis/d3code-calibration](https://github.com/gkastanis/d3code-calibration) | 0 | 0 | 요약 대기 · Checking whether a model's probability means what it says: TypeSafe Jev and open-weights Laya against 150,000 human ratings, with stdlib tools to run the same check on your own data. | 🆕 | 2026-09-26 |
| [hamzaahmadaslam/wp-debuglog-triage](https://github.com/hamzaahmadaslam/wp-debuglog-triage) | 0 | 0 | 요약 대기 · Group a WordPress debug.log by message, attribute each group to core, a plugin or a theme, and rank the groups by kind and urgency with Jev. | 🆕 | 2026-09-26 |
| [harshpuri84/slopcheck-jev](https://github.com/harshpuri84/slopcheck-jev) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-19 |
| [haxudev/jev-benchmark](https://github.com/haxudev/jev-benchmark) | 0 | 0 | 요약 대기 · 面向语义决策模型的中文言下之意评测集：100 道伴侣对话 Choice 题，支持本地 ONNX、Jev 官方 API 与内网模型对比 | 🆕 | 2026-09-24 |
| [jlov7/jev-decision-lab](https://github.com/jlov7/jev-decision-lab) | 0 | 0 | 요약 대기 · A local lab for seeing what TypeSafe's Jev judgment model does on realistic business cases: typed answers, probabilities, policy in code, receipts. | 🆕 | 2026-09-21 |
| [justinramos101/ask-jev](https://github.com/justinramos101/ask-jev) | 0 | 0 | 요약 대기 · An agent skill for structured decisions with Jev: choose options, score candidates, check claims, and rank files. | 🆕 | 2026-09-27 |
| [kobashi/jev-playground](https://github.com/kobashi/jev-playground) | 0 | 0 | 요약 대기 · Can a model that only returns typed judgments choose a melody? A call-and-response app, four evals, and the finding that writing a note as "7" or "C5" swings accuracy 34 points. | 🆕 | 2026-09-19 |
| [LakoreAI/sev](https://github.com/LakoreAI/sev) | 0 | 0 | 요약 대기 · Reproduction and analysis of RLCD: Laya's RL term is a noise-smoothed cross-entropy gradient, CE-only matches it on every proper score, and the option-token budget is the only accuracy lever (Jev, Laya, typed decisions, calibration). | 🆕 | 2026-09-26 |
| [leepokai/jev-adrank](https://github.com/leepokai/jev-adrank) | 0 | 0 | 요약 대기 · Real-time ad ranking and creative review on a typed evaluation model — one call prices a whole auction, no trained CTR model, no logged clicks. | 🆕 | 2026-09-20 |
| [liu-x27/XavierJev](https://github.com/liu-x27/XavierJev) | 0 | 0 | 요약 대기 · A decision layer for agent control flow — yes/no, choice and rubric questions answered from one token's probabilities, measured against labelled sets — with a Claude Code permission hook and a trainable local judge | 🆕 | 2026-09-27 |
| [ms-codehorizon/forkery-case-study](https://github.com/ms-codehorizon/forkery-case-study) | 0 | 0 | 요약 대기 · Product case study: Forkery turns hundreds of recipe comments into one score from people who cooked it. BRD, PRD, architecture, decisions, and how it uses TypeSafe's Jev decision model, with an honest evaluation. Code is private. | 🆕 | 2026-09-26 |
| [orq-ai/jev-judge](https://github.com/orq-ai/jev-judge) | 0 | 0 | 요약 대기 · Judge repeatability study: Jev via Orq classify vs LLM judges on a docs agent. Frozen runs, labels, scripts. | 🆕 | 2026-09-20 |
| [pawarbi/jev-bias-audit](https://github.com/pawarbi/jev-bias-audit) | 0 | 0 | 요약 대기 · Does Jev discriminate? A pre-registered counterfactual bias audit of the Jev decision model: code, test cells, every raw response, and an interactive report. | 🆕 | 2026-09-23 |
| [priorbench/jev](https://github.com/priorbench/jev) | 0 | 0 | 요약 대기 · Independent, pre-registered evaluation of TypeSafe AI's Jev. 5,721 calls, 21 experiments, 50 predictions registered before collection. Raw data included. | 🆕 | 2026-09-20 |
| [pycodinglec/jev-csat-math-probe](https://github.com/pycodinglec/jev-csat-math-probe) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-22 |
| [simonmesmith/jev-arc-agi-v1-experiment](https://github.com/simonmesmith/jev-arc-agi-v1-experiment) | 0 | 0 | 요약 대기 · Direct Jev on 400 public ARC-AGI-1 tasks: frozen method, exact results, cost, latency, and reproducible evidence. | 🆕 | 2026-09-18 |
| [simonmesmith/jev-probability-experiment](https://github.com/simonmesmith/jev-probability-experiment) | 0 | 0 | 요약 대기 · Testing TypeSafe Jev against exact probabilities: 68 scenarios, Choice and Noul, numerical-answer controls, reproducible results, cost and latency. | 🆕 | 2026-09-22 |
| [taifoon-io/jev](https://github.com/taifoon-io/jev) | 0 | 0 | 요약 대기 · Grade an AI agent's job with TypeSafe's Jev: did it do the work as the task laid it out? Facts first, Jev on your own key, a receipt, and optional on-chain records. | 🆕 | 2026-09-27 |
| [YukunHe304/whatitdid](https://github.com/YukunHe304/whatitdid) | 0 | 0 | 요약 대기 · See what an AI agent actually did, not just its score. Labels every step of a CLI agent's run and compares two rounds against the noise a re-run produces anyway. | 🆕 | 2026-09-19 |
| [zhuyansen/jev-zeroshot-vs-bert](https://github.com/zhuyansen/jev-zeroshot-vs-bert) | 0 | 0 | 요약 대기 · Zero-shot text classification: TypeSafe Jev vs BERT-family zero-shot (NLI, embeddings) on 6 public tasks + PAWS pairs, with label-equivalence curves and an arXiv contamination control | 🆕 | 2026-09-19 |
| [karimatayuta/tiny-jev](https://github.com/karimatayuta/tiny-jev) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-18 |
| [softpudding/jev-frontier-100](https://github.com/softpudding/jev-frontier-100) | 1 | 0 | 요약 대기 · 100 original tasks comparing Jev with Qwen3.5 0.8B, 2B and 4B across three reasoning budgets; reproducible results and token logprobs. | 🆕 | 2026-09-19 |
| [Ztrura/Jev-MedQA](https://github.com/Ztrura/Jev-MedQA) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |

### comet-ml/opik

<details><summary>README 발췌</summary>

Opik: Open-Source LLM Observability, Evaluation &amp; AI Agent Tracing

</details>

### Kiln-AI/Kiln

<details><summary>README 발췌</summary>

A free app and open-source library to build better AI products.

</details>

### bespokelabsai/nimble

<details><summary>README 발췌</summary>

Data, Model, Recipe for an open Jev

</details>

### TypeLLM/TypeLLM

<details><summary>README 발췌</summary>

- [2026/09/24] Added image input for vision-language models, tested with Qwen3.8-27B. - [2026/09/23] Added JevBench results: TypeLLM scored 195/231 without thinking and 228/231 with thinking. - [2026/09/23] Added permutation averaging to improve the predictive distribution. See the blog post. - [202

</details>

### dzhng/jevgrep

<details><summary>README 발췌</summary>

Find code by asking what it does.

</details>

### monteduro/killmyidea

<details><summary>README 발췌</summary>

Describe a startup idea. Jev decides: KILL IT, FIX IT or SHIP IT.

</details>

### Yinsongxu/LLM2Jev

<details><summary>README 발췌</summary>

Turn local language models into Jev-style structured decision models. Get results from text and images with prefill alone—no token-by-token decoding required.

</details>

### Liuziyu77/Valen

<details><summary>README 발췌</summary>

A multimodal decision model inspired by Jev — text, images and video in; decision probabilities out.

</details>

### malevrigns/agent-jev

<details><summary>README 발췌</summary>

Weights: https://huggingface.co/aimeigaoshou/agent-jev

</details>

### hr98w/jev-visual

<details><summary>README 발췌</summary>

A small, runnable project for learning vision-language model inference on Apple Silicon. Use Qwen3.5-0.8B with MLX to answer multiple questions about one image: choose an option, judge yes/no, or score ordered levels. Includes a local browser UI, CLI and HTTP API.

</details>

### FBddcz/embodied-jev

<details><summary>README 발췌</summary>

🎬 直接看真实录像 · 🆚 对比模型决策 · ⚡ 看速度 · 💰 看费用

</details>

### sileod/tasksource

<details><summary>README 발췌</summary>

Huggingface Datasets is an excellent library, but it lacks standardization, and datasets often require preprocessing work to be used interchangeably. tasksource streamlines interchangeable datasets usage to scale evaluation or multi-task learning.

</details>

### vinilana/jev-eval-agent

<details><summary>README 발췌</summary>

🇺🇸 English · 🇧🇷 Leia em português

</details>

### kunchenguid/compact-adviser

<details><summary>README 발췌</summary>

&gt; href="https://img.shields.io/badge/platform-macOS%20%7C%20Linux-blue?style=flat-square" &gt; &gt; &gt;

</details>

### dorkitude/webctl

<details><summary>README 발췌</summary>

Smart web search CLI for agents, backed by Jev. Saves a lot of tokens.

</details>

### get-convex/convex-evals

<details><summary>README 발췌</summary>

Convex is an open-source, reactive database that's the best platform for full-stack AI coding.

</details>

### allebee/jevk5

<details><summary>README 발췌</summary>

JevK5 is an independent, Apache-2.0 open-source alternative to TypeSafe's Jev for typed decisions. Give it a state (a ticket, log, policy, or diff) and a yes/no, choice, or score question. It returns a probability for every option in one forward pass, with zero generated tokens. The weights run on y

</details>

### daseinlabs/open-jev

<details><summary>README 발췌</summary>

One-pass option scoring with a local Gemma 3 4B: MLX on Apple silicon, or PyTorch on Windows and Linux (CPU or GPU). Design notes: docs/design/one-pass-option-scoring.md; per-task training: docs/design/per-task-finetuning-with-gemma.md.

</details>

### libingzheren/Jev-Mem

<details><summary>README 발췌</summary>

Better memory for long-running AI agents—with fast decisions and focused reasoning.

</details>

### danielgshea/jev-as-a-judge

<details><summary>README 발췌</summary>

Agent evaluators usually fall into two categories: deterministic code and LLM-as-a-judge. Code is fast and reliable but limited to behavior that can be expressed as explicit logic. LLM judges can evaluate open-ended agent behavior, but they add cost, latency, and variance.

</details>

### AustinAWay/Working-Memory-Jev

<details><summary>README 발췌</summary>

Passage helps educators inspect where instructional text may ask a learner to hold too many ideas or relationships at once. It runs on localhost and uses the real Jev API to propose active groups, source connections, and changes in demand as the passage unfolds.

</details>

### aaddrick/building-with-typesafe-jev

<details><summary>README 발췌</summary>

&gt; [!NOTE] &gt; This is an unofficial, community skill. It is not made, reviewed, or endorsed by TypeSafe AI. TypeSafe publishes its own skill at typesafe-ai/skills. See How this differs from the official skill.

</details>

### iammrduncan/typesafe-ai-benchmark

<details><summary>README 발췌</summary>

LLM-native structured output vs. TypeSafe Jev: latency, cost, and judgment quality.

</details>

### iapp-technology/openthai-systemone

<details><summary>README 발췌</summary>

Open-source Thai + English System One decision model: a Qwen3.5-0.8B text tower whose LM head is replaced by a 256-way slot softmax, continued-pretrained on Thai, and trained to answer typed questions (choice / score / noul) about an arbitrary state in a single forward pass with calibrated probabili

</details>

### RafalWilinski/vibecheck

<details><summary>README 발췌</summary>

A Chrome and Firefox extension that runs your draft post through TypeSafe's Jev before you hit Post. It renders a scorecard under the composer with virality, funniness, informativeness, clarity, insult level, ragebait, cringe, "sounds AI-written", regret risk, typo detection, and the most likely cro

</details>

### YuanKJing/Jev-as-Policy

<details><summary>README 발췌</summary>

This repository is a self-contained reproduction of the public Jev as Policy control structure. It includes the MuJoCo scene, Franka Panda assets, TypeSafe/Jev integration, continuous Cartesian servo, recording pipeline, and the studio-style web panel.

</details>

### JoshuaSP/open-jev

<details><summary>README 발췌</summary>

An experimental inference harness for typed JSON decisions with DiffusionGemma. Denoise freely, then choose the most likely allowed tokens from the final logits. No training or fine-tuning.

</details>

### pinecone-io/cultivar

<details><summary>README 발췌</summary>

A CLI tool to help you write tests for skills, test them across agents, and iterate until they work, from the Pinecone DevRel team.

</details>

### kyegomez/open-jev

<details><summary>README 발췌</summary>

An open-source, from-first-principles reconstruction of the ideas behind TypeSafe AI's Jev, written in PyTorch.

</details>

### FLock-io/this-that-model

<details><summary>README 발췌</summary>

Typed decisions from a 1.9B model. One forward pass, no decoding loop, no parser, no retry.

</details>

### mithalouni/system-one-open

<details><summary>README 발췌</summary>

State in, typed calibrated decisions out, one forward pass, no decoding. An open replica of TypeSafe's Jev built on Gemma 4 E2B (attention LoRA) and Gemma 3 270M, trained and served on Modal. MIT licensed.

</details>

### Bewinxed/jevgpt

<details><summary>README 발췌</summary>

A chatbot built on a model that cannot generate text.

</details>

### caiovicentino/eikos

<details><summary>README 발췌</summary>

Eikos (εἰκός, "the probable") is a family of open typed-decision models, released under MIT. Each model: - answers a structured question about a given state in one forward pass; - returns a calibrated probability for every option, so a caller can act on confident decisions and escalate the rest.

</details>

### colliber/duckdb-jev

<details><summary>README 발췌</summary>

Ask a question about every row of a table, in SQL, and get a real SQL type back. A DuckDB extension over Jev, TypeSafe's model for typed answers instead of text.

</details>

### ItIsCuthNotCup/MetaCog

<details><summary>README 발췌</summary>

Let a small, fast judge steer a bigger model's reasoning.

</details>

### keltokhy/jsort

<details><summary>README 발췌</summary>

sort, but the key is a description.

</details>

### rorshopping/jev-on-a-laptop

<details><summary>README 발췌</summary>

Unofficial research repo. Not affiliated with TypeSafe AI. This is a hands-on study of the parallel constrained decoding idea behind Jev — the "System One" model launched by Diogo Almeida's TypeSafe AI in Sep 2026 — reproduced on a stock, untrained small model, on an Apple Silicon laptop.

</details>

### chopratejas/invalidate

<details><summary>README 발췌</summary>

Agents remember. They never un-remember. invalidate fixes that.

</details>

### anpicasso/hermes-jev-approvals

<details><summary>README 발췌</summary>

Smart command approvals for Hermes Agent, served by TypeSafe's Jev decision model.

</details>

### abhixhek/jevcal

<details><summary>README 발췌</summary>

Stop guessing confidence thresholds. jevcal measures a typed decision model on your data, picks the threshold that meets your accuracy target, tells you how much traffic still needs an LLM, and fails CI when a model update quietly breaks it.

</details>

### alexgreensh/eval-genius

<details><summary>README 발췌</summary>

A skill for any AI coding agent that tells you when you need an eval, where it fits, how to build it, and how to read what comes out.

</details>

### everyai-com/jev-directory

<details><summary>README 발췌</summary>

A browsable directory of what Jev can do — 50 runnable judge-model evals with the exact experimentalevaluate prompt, plus 1,300+ real community builds from the TypeSafe AI #show-and-tell channel, each linked to its project and source post.

</details>

### olanotolu/jevbetter

<details><summary>README 발췌</summary>

Train a small model that chooses among a changing list of text options, done better.

</details>

### simonw/llm-typesafe

<details><summary>README 발췌</summary>

Use TypeSafe classification and scoring models with LLM.

</details>

### genai-craft/openvons

<details><summary>README 발췌</summary>

日本語の README はこちら → READMEja.md

</details>

### kavehmz/typesafe-playground

<details><summary>README 발췌</summary>

Small, interactive experiments with TypeSafe Jev: from understanding a support message to making decisions for a car in a 3D world.

</details>

### Micha0827/snapjudge

<details><summary>README 발췌</summary>

Typed decisions from local Qwen models on your Mac. Ask a question about some text, get back a probability for every allowed answer. No text generation, no JSON parsing: the probabilities are read straight from the model's next-token logits.

</details>

### pst2154/Nemotron_Jev

<details><summary>README 발췌</summary>

Ask typed questions about text or JSON and inspect model-derived probability distributions in a browser. One container runs the model, the original Decision Lab explorer, and a TypeSafe-shaped API.

</details>

### MarissaFamularo/citation-verifier

<details><summary>README 발췌</summary>

A free, standalone tool from Paper Trellis.

</details>

### Reza2kn/Bev

<details><summary>README 발췌</summary>

7.21 GB model file · 7.28 GiB measured CPU RAM · 8.18 GiB observed Mac Metal process RSS · 8.30 GiB observed NVIDIA VRAM.

</details>

### kitze/pagegrade

<details><summary>README 발췌</summary>

Grade page sections for clarity, writing and on\-page SEO\. WXT \+ TypeSafe AI Jev\.

</details>

### TrustifAI/typed_evals

<details><summary>README 발췌</summary>

A Python toolkit for evaluating LLMs, RAG, and agents—with optional calibration against human labels.

</details>

### filedcom/playjev

<details><summary>README 발췌</summary>

PlayJev is a TypeScript library for controlling websites with plain-English instructions while keeping the full Playwright API. Give it an existing Playwright page, then ask it to click controls, navigate websites, fill forms, inspect page state, or choose between visible options.

</details>

### harshithsunku/learn-jev-end-to-end

<details><summary>README 발췌</summary>

Learn Jev end to end is a free, hands-on course. In 12 short notebooks you go from "what is Jev?" to building 13 real AI tools with it: an email triage job, a scam-text detector, a code vulnerability hunter, an agent safety guard and more. You need one API key, and running the whole course costs les

</details>

### aabolfazl/typesafe-local

<details><summary>README 발췌</summary>

Ask a local language model typed questions about a document and get back probability distributions instead of text. No parsing, no retries, no API key.

</details>

### dagfinndybvig/Jev_Ontology

<details><summary>README 발췌</summary>

Exploring how to pair Jev, TypeSafe AI's "System One" decision model, with ontologies.

</details>

### rupeshpoojary9/awesome-open-system-one

<details><summary>README 발췌</summary>

&gt; A curated list of the open System One ecosystem: open models, training methods, independent benchmarks, and the calibration and constrained-decoding tooling that make typed, confidence-aware decisions work.

</details>

### Shanghua-Gao/RSI-Jev

<details><summary>README 발췌</summary>

A recursively self-improving research system that builds Jev-style System One models. AI agents propose the hypotheses, register their predictions before spending GPU time, run the experiments, and retire their own champions when the evidence says to.

</details>

### TholeG/typesafe-chess

<details><summary>README 발췌</summary>

Two virtual chess players, both powered by TypeSafe's System One model Jev. No engine, no generated text: each move is a typed decision that the model returns with a full probability distribution, and the code does the rest. Optionally, a Monte Carlo Tree Search uses those same distributions as poli

</details>

### us/jev-local

<details><summary>README 발췌</summary>

Local Jev-compatible evaluation server: POST /v1/systemone with typed noul / choice / score questions, probabilities, and confidence. No waitlist, no API key, no closed weights.

</details>

### ziqi-jin/agent-to-trust

<details><summary>README 발췌</summary>

&gt; Don't trust an Agent. Test it.

</details>

### TKY-27/JevSlop

<details><summary>README 발췌</summary>

JevSlop asks TypeSafe Jev for a whole-article writing-quality judgment and eight detail signals. It shows a transparent AI Slop Score; it is not an AI-authorship detector. 日本語版

</details>

### zeredy879/minojev

<details><summary>README 발췌</summary>

&gt; The one-sentence version. By the time a model finishes reading your question it &gt; already has an opinion — minojev reads that opinion back as a typed, calibrated &gt; distribution instead of making the model write a sentence.

</details>

### anisselbd/jev-phishing-bench

<details><summary>README 발췌</summary>

Public, reproducible comparison of Jev (TypeSafe AI's System One model, launched 15 September 2026) against a classic LLM on one security decision: should an email agent click the link in this email?

</details>

### mahlernim/jev-korean-benchmark

<details><summary>README 발췌</summary>

Can you use TypeSafe Jev on Korean text, or should you translate everything to English first? This is a small, frozen, reproducible check that tries to answer that — 100 questions per cell, drawn from four public test sets, with every response recorded. It is a sample check, not a benchmark: 100 que

</details>

### NicolaiLassen/open-bonsai-jev

<details><summary>README 발췌</summary>

Nothing is generated. Nothing is parsed. The model is handed a lettered multiple-choice question, and the scorer reads the probability of A versus B straight off the next-token distribution. One forward pass, a real number out, an if you can branch on.

</details>

### scienthoon/luce

<details><summary>README 발췌</summary>

Describe the decision. Supply your inputs or generate them with an LLM. Luce trains a LoRA + decision head on an open model and serves decision probabilities.

</details>

### xyzzzh/GroundingJev

<details><summary>README 발췌</summary>

Jev-inspired Non-autoregressive Visual Grounding

</details>

### collapseindex/dinostomp

<details><summary>README 발췌</summary>

View the still banner

</details>

### prasanthj/duckdb-jev

<details><summary>README 발췌</summary>

High-throughput, robust native C++ DuckDB extension for semantic predicates, classification and rubric scoring through TypeSafe/Jev. It batches and streams inference directly from SQL without Python UDF registration or a separate inference server.

</details>

### xingwudao/OpenJev

<details><summary>README 발췌</summary>

OpenJev is an independent project inspired by Jev, the System One model from TypeSafe.ai (TypeSafe AI). It implements a Jev-inspired decision API with choice, score, and noul primitives: state goes in, typed probabilistic decisions come out.

</details>

### choxos/jevchess

<details><summary>README 발췌</summary>

Watch Jev, TypeSafe's System One model, play chess against any LLM on OpenRouter or against the Stockfish engine, or play Jev yourself. Every move is shown as it happens, with the moves Jev weighed and how likely it thought each one was, and every finished game is saved for replay.

</details>

### hndrr/ComfyUI-Jev

<details><summary>README 발췌</summary>

Custom nodes for using Jev's text interpretation and judgments in ComfyUI. Use natural-language instructions to select candidates, evaluate conditions, score text, or extract numbers, then pass the results to other nodes. Jev judgments use the TypeSafe API by default.

</details>

### illumi-ai/sentimento-em-tempo-real

<details><summary>README 발췌</summary>

Fale no microfone (ou envie um áudio) e veja, a cada meio segundo, a emoção da fala: frustração, alegria, surpresa, incerteza, urgência ou neutro, cada uma com intensidade e confiança.

</details>

### Kushwho/jev-codes

<details><summary>README 발췌</summary>

CLI + agent commands that audit a git diff against editable standards packs, scored hunk-by-hunk with TypeSafe's Jev model. Jev never writes code — it answers typed questions (yes/no, score, choice) with a probability, and your agent fixes only the flagged hunks.

</details>

### MANISH007700/tab-bouncer

<details><summary>README 발췌</summary>

A Chrome extension that closes the tabs you don't need, based on what you say you're doing.

</details>

### markjaquith/typesafe-ai-playground

<details><summary>README 발췌</summary>

Just a playground for experiments around Jev, TypeSafe's System One model.

</details>

### shamazharikh/qwen-rlcd

<details><summary>README 발췌</summary>

A prototype of a "System One" decision model, inspired by TypeSafe AI's Jev. The model takes a state (context) and a set of typed questions. In a single forward pass it returns calibrated probability distributions over a fixed set of answers, with no text generation.

</details>

### usail-hkust/JevLight

<details><summary>README 발췌</summary>

JevLight is a CityFlow traffic signal control framework. It provides shared runners for Jev, Laya, rule-based controllers, and reinforcement-learning baselines.

</details>

### y0usaf/typesafe-cli

<details><summary>README 발췌</summary>

A shell command for Jev: state and typed questions in, typed answers out. Jev does not write prose, so nothing here parses any. A noul comes back as the probability that the answer is yes, a choice as one of the options you supplied plus the confidence behind it, and a score as a position on your ru

</details>

### adtyavrdhn/pydantic-jev-examples

<details><summary>README 발췌</summary>

These are small, runnable examples of Pydantic AI agents where Jev makes the quick calls: is this prompt ok, should this command run, should the bird flap.

</details>

### Bring-AI/JevNext

<details><summary>README 발췌</summary>

Jev is built for structured decisions. JevNext turns them into numerical outputs through a multiway decision tree. Each Choice selects a branch; the final leaf identifies a finite-precision value. Branches can be described as numerical intervals or decimal digits. Both representations use ordinary J

</details>

### chenmingtang830/jevarena

<details><summary>README 발췌</summary>

JevArena is an open-source arena for testing Jev against another judge. Ask a question, choose possible answers and an opponent, then vote before the models, speed, and cost are revealed.

</details>

### DECRUX9812/openjev

<details><summary>README 발췌</summary>

An open, local, zero-cost reimplementation of the Jev decision layer for job postings.

</details>

### fajarhide/askgrep

<details><summary>README 발췌</summary>

grep for the questions you cannot write as a pattern.

</details>

### jtsang4/jev-cli

<details><summary>README 발췌</summary>

A command-line interface for Jev, TypeSafe AI's evaluation model. Give it a state and some typed questions; get structured JSON back.

</details>

### MithrilMan/your-signal

<details><summary>README 발췌</summary>

A feed tuned to you. Your Signal is an open-source Chrome extension that applies personal, reversible filters to the X timeline. You choose the interests, weights, threshold, and visual treatment. Jev evaluates the text; the extension makes every display decision on your device.

</details>

### umstek/zero-shot-ie-bench

<details><summary>README 발췌</summary>

Fifty-three zero-shot systems (fifty of them benchmarked) across twenty-nine information-extraction and classification families — extractor encoders, a purpose-built classifier, cross-encoder rerankers, and typed-decision engines (local and cloud, the hosted ones behind OpenRouter's decision and rer

</details>

### johnhughes3/LegalForecastBench

<details><summary>README 발췌</summary>

LegalForecast-MTD tests whether frontier models can forecast federal motion-to-dismiss rulings from the judge's written record. It reports claim-defendant micro-Brier scores with clustered intervals.

</details>

### adambkovacs/candidate-experience-benchmark

<details><summary>README 발췌</summary>

How well can TypeSafe Jev and general-purpose language models classify feedback written by candidates about their hiring experience?

</details>

### ajanm007/jevrag

<details><summary>README 발췌</summary>

A common decision substrate for RAG (retrieval-augmented generation) pipelines — a shared abstraction, a swappable decision backend, and a calibration-first evaluation harness.

</details>

### aryanchauhanoffical/no-hallucination

<details><summary>README 발췌</summary>

Three measured experiments on reducing hallucination in document Q&amp;A (RAG), including the first public evaluation of TypeSafe's Jev model inside a retrieval pipeline and a head-to-head against IBM Research's STAIR (structure-aware retrieval).

</details>

### bitnovus/jev-spam-eval

<details><summary>README 발췌</summary>

TypeSafe’s Jev reached 98.64% accuracy on a 5,733-email ham/spam/phishing test using written category definitions and email context, without task-specific fine-tuning or labeled examples in its requests. A TF-IDF logistic regression classifier trained on roughly 4,600 labeled messages per fold reach

</details>

### boldbug1/jev-triage

<details><summary>README 발췌</summary>

A small command-line tool, written in Go, that reads a list of messages and sorts them by urgency. It uses Jev, a decision model from TypeSafe AI, to answer three questions about each message:

</details>

### HopLee6/Qwev

<details><summary>README 발췌</summary>

TypeSafe Jev presents a useful interface for decision workloads: provide a state once, attach many typed questions, and return all decisions without making an autoregressive model write a JSON response token by token. Each question declares its answer space as a binary probability, a set of named ch

</details>

### jev-skills/openjev-multimodal

<details><summary>README 발췌</summary>

Text and images → typed decisions. One output token per question. Runs on your Mac.

</details>

### jgridifier/jev-research-eval

<details><summary>README 발췌</summary>

Reproducible evaluation harness for Jared’s Jev Ultrafast research-browser session (17 Sep 2026): 11 baseline cases (R1–R11), human + quant stress suites (S1–S10, QS1–QS8+QS7b), CoS-locked QC grades, the v4 HTML field note, and research notebooks (v1 baseline / v2 baseline+stress) with per-step Trac

</details>

### lianghsun/jev-tmmluplus-eval

<details><summary>README 발췌</summary>

Sit Jev — TypeSafe AI's System One Model — for TMMLU+ v1.1, the 66-subject Traditional Chinese benchmark, and score it the way the official leaderboard does.

</details>

### memovai/openevals

<details><summary>README 발췌</summary>

Online eval for agents. Grades every trace and every step of your production traffic with jev and writes the scores back into Langfuse. One process, one SQLite file, no code changes on your side.

</details>

### NicolasMontone/jev-evals

<details><summary>README 발췌</summary>

A rubric-based eval harness for LLM/agent outputs, backed by the typesafe-ai/jev evaluation model via the Vercel AI Gateway.

</details>

### TokenTrim/jev-agent-failure-benchmark

<details><summary>README 발췌</summary>

Can a fast, cheap decision model find what broke an AI agent as well as a frontier LLM? This benchmarks Jev (Typesafe.ai) on the text subset of Who&amp;When Pro, an agent-failure-attribution benchmark: given a failed multi-agent run, predict the responsible agent, the decisive step, and the error type.

</details>

### TokenTrim/jev-routing-experiment

<details><summary>README 발췌</summary>

Can TypeSafe's Jev decision model route queries across a pool of LLMs cost-efficiently? This repo runs Jev as a router on RouterArena (ICLR 2026, arXiv:2510.00202) and scores it with RouterArena's own offline scorer, so the numbers are directly comparable to the public leaderboard.

</details>

### Yasserbhb/Agent-JEV-Tetris

<details><summary>README 발췌</summary>

Tetris where every single move is chosen by TypeSafe's jev model. The game never decides anything. Each turn it sends the board state and a choice question over the seven legal moves, and plays back whatever jev picks.

</details>

### YidiDev/jev-benchmark

<details><summary>README 발췌</summary>

Does Jev (TypeSafe AI's rubric-conditioned classification model) genuinely read and apply a multi-clause rubric — and how does it stack up against two general-purpose LLMs (Claude Haiku 4.5, Claude Sonnet 5) and a free, self-hostable alternative (OpenJev), on both quality and price?

</details>

### zhengbangbo/structured-decision-bench

<details><summary>README 발췌</summary>

| Model | Type | N | Accuracy | Log loss | Brier | ECE-10 | MAE / AUROC | |---|---|---:|---:|---:|---:|---:|---:| | Qwen3 8B | choice | 8 | 1.000 | 0.000002 | 0.000000 | 0.000002 | — | | Qwen3 8B | noul | 8 | 1.000 | 0.000587 | 0.000003 | 0.000586 | 1.000 AUROC | | Qwen3 8B | score | 8 | 1.000 | 0.0

</details>

### hegargarcia/jev-playground

<details><summary>README 발췌</summary>

A playground for benchmarking TypeSafe AI’s Jev against other evaluation models in games with explicit states, legal actions, and measurable outcomes.

</details>

### 0xlau/jev-rps

<details><summary>README 발췌</summary>

Jev throws first — and every round is verifiable. &amp;middot; &amp;middot;

</details>

### AgenticAPP-Web/Jev-Research-Index

<details><summary>README 발췌</summary>

Catalogue size: 18 papers · 361 projects · 125 public materials · 58 sources

</details>

### andrewsilber/JevsBistro

<details><summary>README 발췌</summary>

A tiny 3D restaurant where the servers are run by rules or by an AI, so we can see who serves guests better.

</details>

### bydeng01/scientific-decision-eval

<details><summary>README 발췌</summary>

Scientific judgment tasks for decision programs: models answer discrete Choice questions, and deterministic code computes the downstream counts, relations, and claim labels. The S2 collection contains 20 groups, 40 scientific Choices, and one engineering Choice. Evaluation reports semantic correctne

</details>

### dashidhy/GemmaJev

<details><summary>README 발췌</summary>

A simplified functionality reproduction of Jev-style decisions with Gemma 4. Native multi-modal ability, finetuning free, runs locally on your machine.

</details>

### Dimesio/typesafe-chess

<details><summary>README 발췌</summary>

A local app for testing TypeSafe Jev (a System One model) as a chess decision-maker. Jev never generates a move: the code lists the legal moves, Jev picks from them, and Stockfish grades every pick. The point is to find out how well Jev chooses, so nothing here is tuned to make it look good or bad.

</details>

### Eliran-Turgeman/reaper

<details><summary>README 발췌</summary>

Licensed under the MIT License.

</details>

### hamakyo/jev-starter

<details><summary>README 발췌</summary>

&gt; Status: jev-starter@0.1.1 is published on npm with provenance, and v0.1.1 is available as a GitHub Release. This repository is also enabled as a GitHub template. The main branch may contain unreleased changes intended for a later version.

</details>

### hemanth/hfjev

<details><summary>README 발췌</summary>

Classify Hugging Face datasets across typed semantic dimensions with TypeSafe Jev System One.

</details>

### hiroki-abe-58/sokudan

<details><summary>README 발췌</summary>

日本語 System One 意思決定モデル。 日本語テキスト（state）と型付き質問（questions）を受け取り、 テキストを一切生成せずに単一フォワードパスで型付き回答と確率を返すエンコーダモデルです。

</details>

### HusDev/LinguaTrace

<details><summary>README 발췌</summary>

An intelligent lesson notebook. During a one-to-one language lesson it listens to the conversation, writes down what was actually taught, and turns the call into something the learner can practise from afterwards - this week, and the week after that.

</details>

### JacobLinCool/jev-paper-judge

<details><summary>README 발췌</summary>

Upload a paper as a PDF and get feedback in seconds: a structured judgment of two things.

</details>

### Jevals/jevals-data

<details><summary>README 발췌</summary>

The data behind jevals.com, an independent, ground-truth benchmark of TypeSafe AI's Jev (the first System One model, called as typesafe-ai/jev through Vercel AI Gateway) and the LLMs that answer the same typed questions: noul (yes or no), choice (pick one of N) and score (place the state on a rubric

</details>

### juanegido/jev-pr-judge

<details><summary>README 발췌</summary>

A demo of TypeSafe's System One primitives (the Jev model) judging whether a GitHub pull request actually does what it claims — a fast, cheap, typed verdict for developers running coding agents, instead of a slow LLM-as-judge prompt chain.

</details>

### juanlentino/jev-connector

<details><summary>README 발췌</summary>

A WordPress connector for the TypeSafe System One API. It gives your themes and plugins a typed way to ask questions about content and get back values you can branch on: a probability, a named choice, or a score, each with a confidence figure.

</details>

### kylehovance-ai/jev-the-janitor

<details><summary>README 발췌</summary>

A janitor for markdown vaults. It asks TypeSafe Jev which bucket each note belongs in. It never deletes a note and never rewrites a note's body; the most it does is add a block of frontmatter or move a suspected secret to a quarantine folder.

</details>

### leepokai/llm-prompt-techniques-on-jev

<details><summary>README 발췌</summary>

Every LLM prompting technique that survives a model that never generates text, ported to TypeSafe's Jev as a DSPy extension and measured on BIG-Bench Hard, LegalBench, MMLU-Pro and CLERC.

</details>

### Little-Planet-Labs/jev-playground

<details><summary>README 발췌</summary>

A small Next.js app for experimenting with TypeSafe AI's Jev model (System One). Paste a state, build any mix of noul (yes/no probability), choice (pick from options), and score (rate against a rubric) questions, and see the typed answers, probability distributions, and confidence in one shot — all 

</details>

### mychaelangelo/tempo-jev-demo

<details><summary>README 발췌</summary>

Tempo is a local, natural-language task workspace for a fictional team. It can use TypeSafe's Jev, OpenAI Luna, or Gemini Flash to turn your requests into workspace changes. Ask it to show work as a board, table, cards, bubbles, grouped canvas, or calendar; follow up to change the same view, complet

</details>

### sathariels/jevcheck

<details><summary>README 발췌</summary>

pytest for Jev. Pin what production is allowed to do, eval a candidate model, and fail the upgrade when answers flip or confidence drops.

</details>

### shitianfang/wakegate

<details><summary>README 발췌</summary>

Before you resume a sleeping agent, ask Jev whether the wakeup is worth a full LLM turn.

</details>

### southleft/component-charades

<details><summary>README 발췌</summary>

It's Taboo for design systems, and the other player is a model that can't talk.

</details>

### stperic/jev-medhallu-benchmark

<details><summary>README 발췌</summary>

Benchmarks of TypeSafe's Jev 1.13, a "System One" model that answers typed questions about text with probabilities instead of generating text, against LLMs on medical tasks. Every model, Jev included, is called through OpenRouter, so one key pays for everything and every latency includes the same ga

</details>

### suraj-phanindra/wellposed

<details><summary>README 발췌</summary>

Lint your jev requests before they come back confidently wrong.

</details>

### tryaksh/jev-pick-and-place-study

<details><summary>README 발췌</summary>

A small, reproducible MuJoCo pilot exploring whether Jev can choose the actions for a pick-and-place task, and how that compares with Claude Haiku and simple rules. The aim is to support an honest research discussion and build on it later.

</details>

### ZihuaEvan/GUI_JEV

<details><summary>README 발췌</summary>

An auditable, screenshot-in/coordinate-out harness that uses TypeSafe JEV as a closed-set decision layer during recursive GUI image search.

</details>

### zsavage8/padflow-jev-evals

<details><summary>README 발췌</summary>

A small, public benchmark of the decisions PadFlow makes inside software.

</details>

### AliceRoselia/Typesafe_chess_eval

<details><summary>README 발췌</summary>

An evaluation of typesafe AI chess. As it turns out, the AI isn't doing really well, even though chess is not a particularly open-ended game.

</details>

### Amine-LG/jev-creature-forge

<details><summary>README 발췌</summary>

Natural-language meaning becomes an inspectable typed creature genome; deterministic code constructs and renders the anatomy.

</details>

### AppChainAI/Jevatar

<details><summary>README 발췌</summary>

An AI companion that replies only with facial expressions. You type; Jev (TypeSafe System One) judges your message and picks 1 of 16 moods (14 built-in expressions plus a custom double-nod yes and head-shake no); blobatar morphs its face. No text replies or visible chat history; recent turns are kep

</details>

### avshalomd/longjev

<details><summary>README 발췌</summary>

Long inputs for Jev, TypeSafe AI's decision model.

</details>

### awun8191/jev-resume-analyzer

<details><summary>README 발췌</summary>

Review a CV with fast, structured AI judgments, optionally against a job posting. Upload a PDF or DOCX, check the extracted text, and get a traceable report: every assessment shows the exact question, criteria, answer, and probability distribution behind it.

</details>

### Babulubobo/formpilot

<details><summary>README 발췌</summary>

An AI quiz assistant for your browser. FormPilot reads questions and options, generates answers, and selects or fills responses directly on the page.

</details>

### baibizhe/jev-decision-benchmarks

<details><summary>README 발췌</summary>

We use these three benchmarks to evaluate whether JEV selects the right tools, knows when to call or abstain, and avoids choosing tool calls when no tools are available.

</details>

### beingcognitive/jev-go

<details><summary>README 발췌</summary>

A new decision AI that plays Gomoku, Go and chess. Can you beat it?

</details>

### blas0/jev-shadcn-lint-eval

<details><summary>README 발췌</summary>

This checks shadcn-ui/lint (commit 53de86f) with TypeSafe's Jev model (jev-latest). The repo's own eval measures how agents style UI before and after lint feedback. This one asks Jev whether each lint result is right and whether its message tells you what to change.

</details>

### carlaiau/can-jev-play

<details><summary>README 발췌</summary>

Can Jev find an edge—or does it follow luck?

</details>

### Chorylee7/JEV

<details><summary>README 발췌</summary>

JEV Research Report: TypeSafe's System One Decision Model and Its Open-Source Alternatives

</details>

### ckorhonen/jev-lint

<details><summary>README 발췌</summary>

A fuzzy linter for coding agents. Your agent writes a file; 0.3 seconds later it hears which of your team's rules it just broke, and fixes them before anyone reviews the code.

</details>

### clduab11/jev-test

<details><summary>README 발췌</summary>

A small model on a laptop writes the answers. A separate judge model, TypeSafe's Jev (jev-1.13.0), makes every call the small model is bad at: whether to search, which pages count, whether there is enough evidence, and whether each sentence is backed by what it cites. SearXNG finds the pages and Mem

</details>

### dayhaysoos/jevals

<details><summary>README 발췌</summary>

A local workbench for testing Jev questions against examples with expected answers. Create evaluations, run them, and compare saved results.

</details>

### ElshinQ/jevaluate

<details><summary>README 발췌</summary>

A free tool that lets a cheap AI test your web app like a person would, and stop to ask a human whenever it isn't sure.

</details>

### EthanAlgoX/LocalJev

<details><summary>README 발췌</summary>

Turn plain-language rules into structured decisions, using a model on your own machine.

</details>

### etsabary/jev-deterministic-benchmark

<details><summary>README 발췌</summary>

I wanted to understand what kinds of decisions Jev actually makes well.

</details>

### Fox-Islam/jev-bias-bench

<details><summary>README 발췌</summary>

Does Jev decide differently about the same case when the only thing that changes is who the person is?

</details>

### g0runmezadam/what-is-jev

<details><summary>README 발췌</summary>

A sourced, critical research file on Jev — TypeSafe AI's "System One" decision model — plus a rubric-scored map of what people are actually building with it.

</details>

### getainode/jebadiah

<details><summary>README 발췌</summary>

Jebadiah (Jeb for short) is an open decision model. It answers small typed questions about a piece of structured state, and instead of writing text it returns a calibrated probability over the allowed answers. This repository holds everything needed to reproduce it: the trainer and evaluator, the da

</details>

### HackSing/jev-report

<details><summary>README 발췌</summary>

两千多万人围观的 Jev，我用中文测了 50 条。

</details>

### Hanno-Labs/decision-bench

<details><summary>README 발췌</summary>

Smoke-test a supported decision model on the pinned benchmark. This example uses Bosun v3.1 0.6B, whose native decision-token readout is supported directly by run-hf.

</details>

### Jason-Doyle/jev-parallel-dispatch

<details><summary>README 발췌</summary>

Watch the 33-second demo recording.

</details>

### JYeswak/jev_playground

<details><summary>README 발췌</summary>

Jev is TypeSafe's System One model for typed judgments. Give it a JSON state and a typed question; get a choice, score, or true/false value with probabilities and confidence. Jev does not generate prose. Your code owns the threshold, the safe side, and the action taken when an answer is malformed or

</details>

### LouisUltra/jev-deep-dive

<details><summary>README 발췌</summary>

&gt; Subject: Jev, the first System One model from TypeSafe AI (released 2026-09-15) &gt; Sources: 14 groups (official blog &amp; docs / platform integrations / 5 open-source implementations / press deep-dives) &gt; Scope: This analysis answers four questions: what Jev is, why it's fast, how much of the hype hol

</details>

### Maxi91f/jev_testing

<details><summary>README 발췌</summary>

A research note with runnable experiment scripts on failures observed in Jev jev-1.13.0 through its structured-question API on September 17–18, 2026.

</details>

### minkhant1996/system-one-playground

<details><summary>README 발췌</summary>

A local web app for System One decision models: Laya (open weights, runs on your machine), TypeSafe's Jev (via OpenRouter), and two community open-weight Jev-style models, openjev (Qwen3.5 NLI cross-encoder, MIT, CPU-friendly 0.8B up to 35B) and Jev-Omni (Gemma 4 12B multimodal, Apache-2.0, NVIDIA G

</details>

### mionax/decisionops

<details><summary>README 발췌</summary>

Jev thinks. Your code acts. Measure the decision before it becomes a branch.

</details>

### mpuig/system-one

<details><summary>README 발췌</summary>

&gt; System 1 is "a machine for jumping to conclusions." — Daniel Kahneman. &gt; system-one is that machine, taught to jump carefully.

</details>

### phuthuycoding/jev-audit

<details><summary>README 발췌</summary>

AI-powered pre-commit auditor backed by TypeSafe System One (Jev). Sends your code changes to Jev as a State and evaluates 4 atomic questions in a single API call — no text generation, no parsing — typically ~300ms.

</details>

### rchovatiya88/cyber-breach-jev

<details><summary>README 발췌</summary>

An infinite 3D arcade cyberpunk arena shooter built with Three.js and powered by Jev—the sub-100ms "System One" decision model developed by TypeSafe AI (released September 2026).

</details>

### ruslanlap/jev-gate

<details><summary>README 발췌</summary>

Triage any GitHub PR in under a second for ~$0.0001 — a typed decision model judge for PRs, not a chatbot reviewer.

</details>

### shyamsridhar123/JudgeJev

<details><summary>README 발췌</summary>

Try an evaluation, inspect the judge's raw response, and experiment with release gates and drift alerts.

</details>

### simonmesmith/jev-bbq-experiment

<details><summary>README 발췌</summary>

We evaluated Jev 1.13.0 on all 58,492 public BBQ questions. It answered 56,900 correctly (97.28%): 99.96% when the passage did not provide enough information, and 94.60% when it did. The complete main evaluation cost an estimated US$0.3429 and took 7.75 minutes.

</details>

### sshh12/nanojev

<details><summary>README 발췌</summary>

A hypothetical reconstruction of Jev, TypeSafe's closed "System One" decision model, in the spirit of nanoGPT: the smallest working version of what black-box probing suggests. It reads a state and answers typed questions (yes/no, pick one, ordered score) with probabilities instead of generated text.

</details>

### sypherin/jev-trace-classifier

<details><summary>README 발췌</summary>

An application of TypeSafe Jev (a "System-One" judgment primitive) on the public collusion.wiki corpus: can a small probabilistic judgment primitive tell whether a wiki page was authored by an autonomous AI agent or by a human — and how does it stack up against a local LLM on the same task?

</details>

### Tenkei/jev-decision-bench

<details><summary>README 발췌</summary>

jev-decision-bench evaluates conventional language models on tasks designed around TypeSafe JEV's bounded-decision interface. It is not a general LLM leaderboard and it does not ask JEV to take benchmarks designed for free-form text generation.

</details>

### TheGali/terrarium

<details><summary>README 발췌</summary>

A sandbox where a TypeSafe System One model (Jev) presses the controls of a small creature. Code runs the world, Jev only ever picks a button, and every decision is logged in full: the state it was sent, every question, every probability, and the rule that fired.

</details>

### TomRichner/can-jev-bayes

<details><summary>README 발췌</summary>

How well can Jev make sequential decisions under uncertainty, and how can Bayesian methods help it learn and act more effectively?

</details>

### Tsagaanbayr1/jev-tetris

<details><summary>README 발췌</summary>

A real-time Tetris match in the browser against Jev, TypeSafe's decision model, or Laya, an open decision model running on your own machine — or watch Jev and Laya play each other. Not a chat wrapper — a versus game with garbage, spins, combos and back-to-back chains, where every move the opponent m

</details>

### tusharck/jev-inbox-queue

<details><summary>README 발췌</summary>

Stop re-reading your inbox. Jev, TypeSafe's System One model, turns it into a short action queue: what needs you, how urgent it is, and the next step.

</details>

### vehas/thaiexam-jev-charts

<details><summary>README 발췌</summary>

Static chart pages from evaluating TypeSafe's Jev (jev-1.13.0), a System One model, on Thai standardized exams alongside 110 other language models.

</details>

### vnmoorthy/siege

<details><summary>README 발췌</summary>

Cinematic arena · Product story · Landscape demo film · Vertical demo film

</details>

### wmcbtech30/ground-zero

<details><summary>README 발췌</summary>

&gt; [!WARNING] &gt; This is in alpha status, schemas and API shapes may change at anytime! Use this at your own risk.

</details>

### xuan7zhang/jev-toolspace

<details><summary>README 발췌</summary>

Evaluating Jev (TypeSafe System One, jev-1.13.0) as a relevance judge for building task-level tool spaces.

</details>

### Yaxin9Luo/spending-effort-with-jev

<details><summary>README 발췌</summary>

Know which /effort level each message needs, the moment you send it. A Claude Code plugin: every message you send is read by TypeSafe's Jev model, which judges how much effort the task deserves. You get a one-line verdict before Claude starts working, so you can switch in time.

</details>

### Zafer-Liu/jev-xiangqi

<details><summary>README 발췌</summary>

Play Chinese Chess against Jev. Every AI move is chosen by fanning out a Score 0-4 question per legal move in a single systemone() call — no minimax, no eval tables, just Jev's read of the position.

</details>

### Adityakhalkar/JevEye

<details><summary>README 발췌</summary>

A CNN reports what it sees, with a calibrated confidence or an abstention. Jev judges what that means.

</details>

### andreaserradev-gbj/jev-access-day

<details><summary>README 발췌</summary>

&gt; Learning project, not a benchmark. This repo exists for learning and &gt; informative purposes only. Everything here was produced by one person on a &gt; hobby scaffold with small sample sizes (24 decisions, 12-case flows, N=5 &gt; probes) — treat every number as anecdote, not evidence. Nothing here is &gt; e

</details>

### carlaiau/judge-jev

<details><summary>README 발췌</summary>

Judge Jev is a TypeScript research project testing Jev's Choice, Score, and Noul primitives as relevance judges.

</details>

### criguex/playwright-jev

<details><summary>README 발췌</summary>

Semantic assertions for Playwright Test, powered by Jev from TypeSafe AI.

</details>

### cx295410-dot/jev-biomedical-evidence-screening

<details><summary>README 발췌</summary>

Public data and analysis for Evaluating Jev for biomedical evidence screening: discrimination, calibration and high-recall workload.

</details>

### davidzna/better-cheaper-llm

<details><summary>README 발췌</summary>

Make RAG pipelines and LLM apps faster and cheaper by moving the yes/no decisions an LLM makes (relevance grading, query routing, hallucination checks, LLM-as-a-judge evals) to Jev, TypeSafe's System One decision model. Measure first, then switch.

</details>

### dgr8akki/jev-voice

<details><summary>README 발췌</summary>

Control Chrome by voice. Open sites, search, click links and fill in forms by saying what you want.

</details>

### dgr8akki/recipe-mode

<details><summary>README 발췌</summary>

Cook hands-free on any recipe page. Say "next", "how much butter?" or "set a timer" while your hands are covered in flour.

</details>

### ericflo/pairsort

<details><summary>README 발췌</summary>

Sort anything with Jev. Jev judges "which of these two is better?" for a fraction of a cent. pairsort turns its answers into one ranking with honest probabilities.

</details>

### FlorianRiquelme/jev-kit

<details><summary>README 발췌</summary>

A typed client and benchmark harness for Jev, TypeSafe AI's "System One" decision model, reached through the Vercel AI Gateway as typesafe-ai/jev. Jev does not write text: you send a state plus typed questions — a yes/no noul, a choice from a fixed list, or a score on an ordered scale — and it answe

</details>

### fly2abhishek/jev-field-tests

<details><summary>README 발췌</summary>

Twelve exploratory scenarios and a follow-up comparison against Jev, TypeSafe's model that answers typed questions with probabilities and cannot write text. Run them with your own API key and compare your numbers with mine.

</details>

### frederico-kluser/jev-agent-skill

<details><summary>README 발췌</summary>

Agent Skill de decisão rápida com o modelo Jev (System One da TypeSafe) via OpenRouter. State + perguntas tipadas (noul/choice/score) entram; decisões com probabilidades calibradas e bandas de ação saem — em milissegundos, sem geração de texto.

</details>

### gbesse/erpnext-jev-decisions

<details><summary>README 발췌</summary>

Experimental community alpha v0.1.0 · MIT.

</details>

### gbesse/jev-crypto-lab

<details><summary>README 발췌</summary>

Quatre prototypes de recherche en lecture seule, dans une application locale :

</details>

### gbesse/jev-legifrance-impact

<details><summary>README 발췌</summary>

Detect which changed legal provisions may affect a declared business activity.

</details>

### gbesse/jev-marianne

<details><summary>README 발췌</summary>

Version political commitments and detect how sourced promises change over time.

</details>

### gbesse/openproject-jev-triage

<details><summary>README 발췌</summary>

Experimental community alpha v0.1.0 · MIT.

</details>

### gbesse/saleor-jev-catalog-review

<details><summary>README 발췌</summary>

Experimental community alpha v0.1.0 · MIT.

</details>

### gkastanis/d3code-calibration

<details><summary>README 발췌</summary>

Some AI models answer a yes/no question with a number instead of words. Not "yes", but 0.85. The number is supposed to mean "how sure I am".

</details>

### hamzaahmadaslam/wp-debuglog-triage

<details><summary>README 발췌</summary>

A command-line tool for WordPress developers and maintainers that turns a debug.log into a short list of problems, each tied to the plugin, theme or core file behind it and ranked by how soon it needs attention.

</details>

### harshpuri84/slopcheck-jev

<details><summary>README 발췌</summary>

Report which AI tells a passage contains, with the line quoted. Runs as a Claude Code Stop hook, so it checks Claude's own output after every turn.

</details>

### haxudev/jev-benchmark

<details><summary>README 발췌</summary>

面向语义决策模型的中文评测集：100 道婚恋送命题多轮对话，检验模型能否结合上下文读出真实意图。

</details>

### jlov7/jev-decision-lab

<details><summary>README 발췌</summary>

A model can judge. Your system must decide.

</details>

### justinramos101/ask-jev

<details><summary>README 발췌</summary>

Use ask-jev by default for semantic judgments that inform a task through typed selections, labels, yes/no checks, or scores. It covers the use cases in typesafe-ai: routing and typed arguments, extraction and structure recovery, search and ranking, entity matching, reusable scores and ML features, v

</details>

### kobashi/jev-playground

<details><summary>README 발췌</summary>

A call-and-response music app built to find out whether Jev — TypeSafe AI's first System One model — can carry a musical judgment.

</details>

### LakoreAI/sev

<details><summary>README 발췌</summary>

Sev is a reproduction and clean-room analysis of RLCD (Reinforcement Learning for Calibrated Decisions), the training method behind typed-decision models such as TypeSafe's Jev and its open reproduction, Laya.

</details>

### leepokai/jev-adrank

<details><summary>README 발췌</summary>

An in-feed ad slot has to be filled in the time it takes a thumb to move. Doing that well normally means a trained CTR model, a feature store, and months of logged impressions to train on. Jev answers narrow typed questions at $0.042 per 1M input tokens with flat latency in the number of questions —

</details>

### liu-x27/XavierJev

<details><summary>README 발췌</summary>

An agent loop is full of small decisions nobody wants to wait for or read a paragraph about: may this command run without asking, which model should take this request, is this error worth one more try, is this run going anywhere. XavierJev answers them as typed questions — yes or no, one of n, a poi

</details>

### ms-codehorizon/forkery-case-study

<details><summary>README 발췌</summary>

Forkery tells you whether a recipe works, going only by the people who actually made it.

</details>

### orq-ai/jev-judge

<details><summary>README 발췌</summary>

A reproduction kit for a small, complete judge-repeatability study.

</details>

### pawarbi/jev-bias-audit

<details><summary>README 발췌</summary>

A pilot study of TypeSafe's Jev decision model (typesafe/jev-1.13), run through OpenRouter's decisions endpoint on 22 and 23 September 2026. It started from one screenshot: asked who would make a better president, a man or a woman, Jev said "man" at 67%.

</details>

### priorbench/jev

<details><summary>README 발췌</summary>

Measured, pre-registered evaluation of AI systems.

</details>

### pycodinglec/jev-csat-math-probe

<details><summary>README 발췌</summary>

A tiny qualitative probe of where TypeSafe AI's Jev appears to stop being useful as a reasoning system and start being useful as a typed decision model.

</details>

### simonmesmith/jev-arc-agi-v1-experiment

<details><summary>README 발췌</summary>

In this experiment, Jev fully solved 4 of 400 public evaluation tasks (1%). It also solved one of the two test grids in another task, giving a 1.125% benchmark score. The evaluation cost about US$2.32 in Jev API usage and finished in 10 minutes.

</details>

### simonmesmith/jev-probability-experiment

<details><summary>README 발췌</summary>

Give Jev numerical options when you want it to select a probability answer. For a direct yes/no probability estimate, Noul was closest to the truth in this test. These are different results, measured in different ways.

</details>

### taifoon-io/jev

<details><summary>README 발췌</summary>

Did the AI agent do the work it was paid for? Ask Jev, and get an answer you can check.

</details>

### YukunHe304/whatitdid

<details><summary>README 발췌</summary>

Read any CLI agent's session file and report what the run actually did — step by step, with error bars.

</details>

### zhuyansen/jev-zeroshot-vs-bert

<details><summary>README 발췌</summary>

Zero-shot text classification: does TypeSafe Jev beat BERT-family zero-shot, and how many labelled examples does a trained BERT need to catch up?

</details>

### karimatayuta/tiny-jev

<details><summary>README 발췌</summary>

日本語の文章と評価基準を照合する、ローカルの小型判断AI。 choice / score / noul を、文章生成ではなくQwen3のyes/noスコアから返します。

</details>

### softpudding/jev-frontier-100

<details><summary>README 발췌</summary>

Jev scores 77.0%; Qwen3.5 2B with a 2,048-token thinking budget scores 82.0%; Qwen3.5 4B with the same budget scores 96.7%. This small benchmark makes Jev's observed reasoning limits tangible through nine local-model settings.

</details>

### Ztrura/Jev-MedQA

<details><summary>README 발췌</summary>

Choose directly from the candidate answers, using the same model for clinical text and medical images.

</details>
