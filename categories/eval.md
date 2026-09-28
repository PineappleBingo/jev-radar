# 📏 평가·채점 (284)

[← README](../README.md)

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
| [openlayer-ai/jevals](https://github.com/openlayer-ai/jevals) | 97 | 8 | 요약 대기 · Agent evals and guardrails as Jev decisions: one request per trace, a fraction of a cent, fast enough for the agent loop. Runs locally with Kev or Laya. |  | 2026-09-24 |
| [danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) | 93 | 15 | 요약 대기 · Using Jev as an evaluator. |  | 2026-09-23 |
| [zwliJay/jev-forge](https://github.com/zwliJay/jev-forge) | 69 | 6 | 요약 대기 · An open training and inference stack for Jev-style decision models.  Train models to score dynamic candidate branches from a shared prefix, with support for high-cardinality choice, calibration, and fast batched inference. |  | 2026-09-23 |
| [chigwell/typesafe.pro](https://github.com/chigwell/typesafe.pro) | 67 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-26 |
| [iammrduncan/typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark) | 40 | 5 | **무엇** 일반 LLM의 구조화된 출력 방식과 TypeSafe Jev 판단 API의 지연 시간, 비용, 품질을 비교하는 벤치마크 도구다.<br>**판단** 티켓 분류, 가드레일 감지, 승인 여부, 점수 산정 등 7개 합성 시나리오에 대해 Choice 및 Noul 형태의 질문을 판단한다.<br>**포인트** Cerebras 기반 Qwen, 로컬 Needle 3, Jev를 나란히 실행해 레이턴시 백분위수, API 비용, 계약 검증률을 실시간 UI로 대조한다. |  | 2026-09-19 |
| [RenaGao/jev-dataops](https://github.com/RenaGao/jev-dataops) | 60 | 6 | 요약 대기 · An open-source JEV-powered workbench for streaming data selection, quality evaluation, automatic LoRA training and held-out model evaluation. |  | 2026-09-23 |
| [lukstei/slop-grader](https://github.com/lukstei/slop-grader) | 30 | 2 | **무엇** 텍스트 파일의 각 줄에 대해 규칙 기반으로 AI 생성 저품질 문구를 검사하고 채점하는 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 모든 텍스트 라인에 대해 정의된 모든 규칙을 누락 없이 병렬로 실행하여 검사한다. |  | 2026-09-24 |
| [YuanKJing/Jev-as-Policy](https://github.com/YuanKJing/Jev-as-Policy) | 44 | 2 | 요약 대기 · The highly anticipated open-source repository for JEV as Policy enables one-click setup of the simulation environment. Evaluations of Astra + JEV on benchmarks such as RoboTwin will also be released soon. |  | 2026-09-21 |
| [JoshuaSP/open-jev](https://github.com/JoshuaSP/open-jev) | 41 | 2 | 요약 대기 · Typed JSON inference with DiffusionGemma, with Every and Jev benchmark results |  | 2026-09-16 |
| [bodepudimuneendra-netizen/laya-jev-GraphRAG](https://github.com/bodepudimuneendra-netizen/laya-jev-GraphRAG) | 40 | 1 | 요약 대기 · A database-agnostic Agentic GraphRAG framework using swappable System One models (local Laya / cloud Jev). A plug-and-play intelligence layer featuring a complete 4-phase pipeline, continuous evaluation and custom A* traversal for any graph database. |  | 2026-09-25 |
| [AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | 20 | 3 | **무엇** 타입 기반 결정 모델의 캘리브레이션, 선택적 위험, 지연 시간 등을 측정하는 확률 인식형 벤치마크 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 확률 캘리브레이션과 선택적 분류의 위험도 측정, 지연 시간 등 다각도 평가와 재현 가능한 벤치마크를 지원한다. |  | 2026-09-17 |
| [smkrv/jev-calibrate](https://github.com/smkrv/jev-calibrate) | 32 | 1 | 요약 대기 · Calibrate Jev questions against your own labels: tune criteria on labelled examples, confirm on a held-out set, get a verdict per question. Unofficial. |  | 2026-09-21 |
| [PsiACE/dohnuts](https://github.com/PsiACE/dohnuts) | 29 | 3 | 요약 대기 · Dohnuts builds small multimodal models for direct decisions. -&gt; System One model |  | 2026-09-21 |
| [Zaious/jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas) | 27 | 6 | 요약 대기 · Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文為主的雙語 repo。 |  | 2026-09-24 |
| [TKY-27/JevSlop](https://github.com/TKY-27/JevSlop) | 4 | 0 | **무엇** 공개된 note.com 기사 URL을 입력받아 본문을 추출하고 AI 슬롭 여부와 글 품질을 분석해 점수로 보여주는 웹 도구다.<br>**판단** 기사 본문이 AI 슬롭인지 여부를 choice로 분류하고, 전체 점수 및 8가지 세부 품질 지표를 각각 score로 평가한다.<br>**포인트** 저작자 판별이 아닌 글 품질 판단 목적으로 쓰이며 본문 청킹 없이 전체 본문을 단일 systemOne 요청으로 전송해 검사한다. | ✅ `choice` `score` | 2026-09-18 |
| [rorshopping/jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop) | 25 | 1 | 요약 대기 · Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo. |  | 2026-09-17 |
| [stas4000/jev-linkmap](https://github.com/stas4000/jev-linkmap) | 22 | 0 | 요약 대기 · Rebuild a site's internal link map in seconds with Jev, race Claude Opus 5 on the same queue, and let a deep model rewrite the rubric from the disagreements. |  | 2026-09-19 |
| [oso95/x-scanner](https://github.com/oso95/x-scanner) | 21 | 5 | 요약 대기 · Chrome extension that labels every post you scroll past on X with typed Jev judgments and a live cost counter |  | 2026-09-27 |
| [abhixhek/jevcal](https://github.com/abhixhek/jevcal) | 10 | 0 | **무엇** TypeSafe Jev 등 결정 모델의 신뢰도 임계값을 사용자 데이터 기반으로 보정·평가하고 LLM 폴백 캐스케이드를 구성하는 CLI 도구<br>**판단** 이메일 사기 여부(is_fraud, noul), 티켓 처리 부서 분류(queue, choice), 긴급성 및 감정 분석 판단<br>**포인트** 데이터 분할 검증으로 정확도 목표를 만족하는 임계값을 도출해 lock 파일로 잠그고, LLM 교사를 활용한 라벨링 및 질문 최적화를 지원함 |  | 2026-09-18 |
| [alexgreensh/eval-genius](https://github.com/alexgreensh/eval-genius) | 15 | 3 | 요약 대기 · Teach your agent to work with evals: WHEN you actually need an eval or benchmark, HOW to build one that holds up, and how to read what it tells you. Deterministic-first, tool-agnostic. |  | 2026-09-21 |
| [everyai-com/jev-directory](https://github.com/everyai-com/jev-directory) | 15 | 1 | 요약 대기 · 설명 없음 |  | 2026-09-21 |
| [olanotolu/jevbetter](https://github.com/olanotolu/jevbetter) | 15 | 3 | 요약 대기 · A stronger one-pass scorer over a variable list of text options. Hashed n-gram encoder, rival-aware attention, gated head, temperature scaling — with a head-to-head benchmark vs the jevlike starter design. |  | 2026-09-16 |
| [MarissaFamularo/citation-verifier](https://github.com/MarissaFamularo/citation-verifier) | 8 | 1 | **무엇** 논문 저자나 심사위원이 원고의 인용 문장이 실제 인용된 논문 내용에 의해 뒷받침되는지 검증할 때 사용하는 웹 도구이다.<br>**판단** 인용 문장과 인용문 원문을 비교해 지지(supports), 모순(contradicts), 무관(says nothing) 중 어느 쪽인지 확률을 판단하도록 요청한다.<br>**포인트** Claude가 추출한 발췌문이 원문에 실제로 존재하는지 코드로 검증한 후 Jev가 점수를 매기며, 서버 없이 브라우저 환경에서 직접 실행된다. |  | 2026-09-17 |
| [Reza2kn/Bev](https://github.com/Reza2kn/Bev) | 13 | 0 | 요약 대기 · Ternary decision scoring with Jevfire-style inference, typed APIs, and reproducible Persian evaluation. |  | 2026-09-23 |
| [kitze/pagegrade](https://github.com/kitze/pagegrade) | 7 | 1 | **무엇** 웹페이지 섹션의 명확성, 문장력, 온페이지 SEO를 분석해 등급을 매기는 WXT 기반 크롬 확장 프로그램이다.<br>**판단** 웹페이지 섹션별로 10개 루브릭 항목에 대한 점수를 평가하고 페이지 전체의 A부터 E까지의 등급을 판정하도록 요청한다.<br>**포인트** 별도 백엔드 서버 없이 브라우저 환경에서 Vercel AI Gateway를 경유해 TypeSafe AI Jev API를 직접 호출한다. |  | 2026-09-18 |
| [TrustifAI/typed_evals](https://github.com/TrustifAI/typed_evals) | 12 | 1 | 요약 대기 · Fast, typed, calibrated evaluations for LLM and agent outputs, powered by Jev — with simple, framework-agnostic Python APIs |  | 2026-09-27 |
| [linny006/agent-eval-harness](https://github.com/linny006/agent-eval-harness) | 6 | 2 | **무엇** 실제 GitHub 이슈를 바탕으로 AI 코딩 에이전트의 성능을 비교하는 오픈소스 벤치마크 및 리더보드 프로젝트다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** GitHub Search API와 GitHub Actions cron을 이용해 15분마다 관련 리포지토리 목록을 자동으로 수집해 갱신한다. |  | 2026-09-28 |
| [AbdelStark/lejudge-jev-jepa](https://github.com/AbdelStark/lejudge-jev-jepa) | 10 | 3 | 요약 대기 · Natural-language constraints for JEPA world-model planning, judged by a decision model instead of an LLM. |  | 2026-09-24 |
| [ziqi-jin/agent-to-trust](https://github.com/ziqi-jin/agent-to-trust) | 9 | 2 | 요약 대기 · Don't trust an Agent. Test it. Open-source lab for agent credit — exams → evidence → explainable, recomputable scores. Built for the day agents hire and pay each other. A2A-native. |  | 2026-09-27 |
| [taodav/jev_deep_rl](https://github.com/taodav/jev_deep_rl) | 8 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-20 |
| [us/jev-local](https://github.com/us/jev-local) | 8 | 2 | 요약 대기 · Local Jev-compatible evaluation server: POST /v1/systemone with typed noul/choice/score, open weights, no waitlist |  | 2026-09-18 |
| [caiovicentino/eikos-arena](https://github.com/caiovicentino/eikos-arena) | 7 | 3 | 요약 대기 · Eikos-27B vs Jev: live paper trading on Hyperliquid. Real prices, simulated money, rules hashed before the start. |  | 2026-09-27 |
| [mahlernim/jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark) | 7 | 0 | 요약 대기 · Reproducible early-access evaluation of Jev on Korean understanding and medical text, with runtime and cost evidence |  | 2026-09-17 |
| [scienthoon/luce](https://github.com/scienthoon/luce) | 7 | 0 | 요약 대기 · Luce: a recipe for calibrated decision models — a sentence about your task in, a small model that answers typed questions with honest probabilities out (init → synth → train → eval → serve) |  | 2026-09-26 |
| [y0usaf/jev-lm](https://github.com/y0usaf/jev-lm) | 7 | 1 | 요약 대기 · A word-level language model whose output layer is Jev: n-gram drafter, Noul chunk verification, bits-per-token eval |  | 2026-09-19 |
| [0xtrou/rubikjev](https://github.com/0xtrou/rubikjev) | 6 | 0 | 요약 대기 · Challenge the Jev's intelligence in Rubik Cube puzzles |  | 2026-09-20 |
| [collapseindex/dinostomp](https://github.com/collapseindex/dinostomp) | 6 | 1 | 요약 대기 · A verification layer for AI evaluations. Checks the instrument, not just the score: data, scorer, runs, numbers, claims, and itself. |  | 2026-09-23 |
| [TokenTrim/jev-agent-failure-benchmark](https://github.com/TokenTrim/jev-agent-failure-benchmark) | 3 | 0 | **무엇** Who&amp;When Pro 텍스트 서브셋을 사용해 멀티 에이전트 실행 실패 원인을 진단하는 Jev와 프론티어 LLM의 성능을 비교하는 벤치마크 리포지토리다.<br>**판단** 실패한 멀티 에이전트 실행 기록이 주어졌을 때 실패에 책임이 있는 에이전트, 결정적 단계, 오류 유형을 판단하도록 요청한다.<br>**포인트** 빠르고 저렴한 소형 결정 모델 Jev가 복잡한 에이전트 실패 분석 작업에서 프론티어 LLM을 대체할 수 있는지 직접 비교 평가한다. |  | 2026-09-17 |
| [apolinario/decision-index](https://github.com/apolinario/decision-index) | 5 | 14 | 요약 대기 · Decision Index: reproduce the Jev decision-model benchmark suite locally or as one HF Job |  | 2026-09-27 |
| [ARCJ137442/jev-2048](https://github.com/ARCJ137442/jev-2048) | 5 | 1 | 요약 대기 · An instrumented 2048 web lab where every move is a Jev (TypeSafe AI System One) Choice, with no heuristic fallback \| 用 Jev 决策模型驱动每一步的 2048 网页实验台，概率、置信度、延迟与成本全部摊开可见，且刻意不做启发式兜底 |  | 2026-09-21 |
| [brida-ai/reflexbench](https://github.com/brida-ai/reflexbench) | 5 | 0 | 요약 대기 · ReflexBench — open benchmark and evaluation harness for System One models and typed decision engines |  | 2026-09-24 |
| [choxos/jevchess](https://github.com/choxos/jevchess) | 5 | 1 | 요약 대기 · Jev, TypeSafe's System One model, plays chess against any OpenRouter LLM, Stockfish and you. One-page web app with live moves, Jev's move probabilities, saved games and win rates. |  | 2026-09-20 |
| [gemanor/jev-code-review-benchmark](https://github.com/gemanor/jev-code-review-benchmark) | 5 | 0 | 요약 대기 · Comparing Jev, Gemini Flash, and Claude Fable on Python code review rules: cost, speed, accuracy, and consistency. Includes results, charts, and reproducible experiments. |  | 2026-09-17 |
| [hndrr/ComfyUI-Jev](https://github.com/hndrr/ComfyUI-Jev) | 5 | 0 | 요약 대기 · Jev text interpretation and judgments for ComfyUI. |  | 2026-09-20 |
| [MANISH007700/tab-bouncer](https://github.com/MANISH007700/tab-bouncer) | 5 | 0 | 요약 대기 · Chrome extension that closes the tabs you don't need, judged by TypeSafe's Jev in one call. Tell it what you're doing; it shows the rest the door. |  | 2026-09-19 |
| [abhishek085/JevControl](https://github.com/abhishek085/JevControl) | 2 | 0 | **무엇** AI 에이전트의 실행 트레이스를 분석해 일상적인 분기 결정을 소형 모델로 대체할 수 있는지 비교·검증하는 평가 도구다.<br>**판단** 트레이스 내 재검색 여부, 도구 선택, 추가 질문 필요 여부와 같은 닫힌 선택지 형태의 결정을 무엇으로 내릴지 묻는다.<br>**포인트** LangSmith·Langfuse·OTLP 트레이스에서 결정 단계를 자동 추출하고 모델 간 판단 일치도와 지연 시간, 토큰 비용 절감액을 비교한다. |  | 2026-09-27 |
| [a-Fig/jev-score](https://github.com/a-Fig/jev-score) | 4 | 0 | 요약 대기 · Local-first document evaluation workspaces powered by Jev |  | 2026-09-24 |
| [chenmingtang830/jevarena](https://github.com/chenmingtang830/jevarena) | 4 | 0 | 요약 대기 · Open-source BYOK arena for Jev and other AI judges. Find failures, compare quality, cost, and latency. |  | 2026-09-20 |
| [dtunai/cu-Jev](https://github.com/dtunai/cu-Jev) | 4 | 0 | 요약 대기 · cuda-Jev — a CUDA-native Jev System One decision inference engine. Jev compatible API, examples, and reproducible benchmarks. |  | 2026-09-23 |
| [Gaurav-Gosain/jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench) | 4 | 0 | 요약 대기 · Blind security benchmarks for Jev, TypeSafe's System One model: prompt injection and vulnerable code detection, built on jev-go |  | 2026-09-16 |
| [harrymunro/jev-laya-benchmark](https://github.com/harrymunro/jev-laya-benchmark) | 4 | 0 | 요약 대기 · Speed and accuracy benchmark: TypeSafe's Jev API vs the local Laya MLX typed-decision model on synthetic tasks |  | 2026-09-21 |
| [instax-dutta/sysone-bench](https://github.com/instax-dutta/sysone-bench) | 4 | 1 | 요약 대기 · First independent head-to-head benchmark of System One decision models (Laya vs Jev) on byte-identical inputs |  | 2026-09-26 |
| [jvsteiner/jevex](https://github.com/jvsteiner/jevex) | 4 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-17 |
| [soderlind/ai-provider-for-jev](https://github.com/soderlind/ai-provider-for-jev) | 4 | 1 | 요약 대기 · Connect WordPress to TypeSafe's Jev System One model for structured decisions (choice, score, noul). |  | 2026-09-18 |
| [umstek/zero-shot-ie-bench](https://github.com/umstek/zero-shot-ie-bench) | 4 | 1 | 요약 대기 · 38 zero-shot information-extraction &amp; classification systems across 23 families — extractors, classifiers, cross-encoder rerankers and typed-decision engines, local + hosted (OpenRouter) — demos, accuracy/latency/cost benchmarks, 9-language suite, web UI |  | 2026-09-27 |
| [waynesutton/ask-jev-ai](https://github.com/waynesutton/ask-jev-ai) | 4 | 2 | 요약 대기 · A public wall where anyone asks a question in three to fifteen words and Jev, TypeSafe's judgment model, answers yes, no, or it depends in about 100 milliseconds. Every judged ask lands on the wall in realtime, with a running count toward one million, showing cost. |  | 2026-09-22 |
| [ZJemYoung/jev-chat-windows-laya](https://github.com/ZJemYoung/jev-chat-windows-laya) | 4 | 0 | 요약 대기 · Windows 版微信聊天副驾（上游 fork）：本地 laya 判断引擎免密钥运行 + 修复高缩放屏抓取错位 Windows fork of jev-chat: key-free local laya judge + DPI-aware screen capture fix |  | 2026-09-23 |
| [johnhughes3/LegalForecastBench](https://github.com/johnhughes3/LegalForecastBench) | 7 | 1 | **무엇** 미국 연방 법원의 각 청구 및 피고별 기각(motion-to-dismiss) 확률을 프런티어 모델이 예측하도록 평가하는 벤치마크 도구다.<br>**판단** 제공된 판사 서면 기록을 바탕으로 특정 청구가 완전히 기각될 확률(noul)을 예측하도록 요구한다.<br>**포인트** 사건 전체가 아닌 청구-피고 단위의 마이크로 브라이어 점수를 측정하며, 웹 검색 차단과 훈련 데이터 컷오프 통제로 유출을 줄인다. |  | 2026-09-27 |
| [adambkovacs/candidate-experience-benchmark](https://github.com/adambkovacs/candidate-experience-benchmark) | 3 | 0 | 요약 대기 · Compare TypeSafe Jev and LLMs on 60 synthetic candidate-experience reviews: four classification tasks, prompt variants, costs, tokens, and reproducible evidence. |  | 2026-09-25 |
| [allebee/pytest-jev](https://github.com/allebee/pytest-jev) | 3 | 1 | 요약 대기 · Pytest plugin for semantic assertions on LLM output using Jev's calibrated probabilities. |  | 2026-09-21 |
| [ArmanJR/Jev-Persian-Benchmark](https://github.com/ArmanJR/Jev-Persian-Benchmark) | 3 | 0 | 요약 대기 · A Quick Typesafe's Jev Evaluation on Persian |  | 2026-09-26 |
| [aryanchauhanoffical/no-hallucination](https://github.com/aryanchauhanoffical/no-hallucination) | 3 | 0 | 요약 대기 · Three measured experiments on RAG hallucination: quote-checking, TypeSafe's Jev, and IBM's STAIR. 850+ graded questions, raw responses included. |  | 2026-09-20 |
| [azterizm/jev-vs-sovereign-benchmark](https://github.com/azterizm/jev-vs-sovereign-benchmark) | 3 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-23 |
| [cooper667/jev-browse](https://github.com/cooper667/jev-browse) | 3 | 1 | 요약 대기 · Plain-English browser QA for Claude Code, judged by TypeSafe's Jev on Cloudflare Workers AI |  | 2026-09-25 |
| [jgridifier/jev-research-eval](https://github.com/jgridifier/jev-research-eval) | 3 | 0 | 요약 대기 · Reproducible Jev Ultrafast research-browser eval harness + field note (QC’d cases, suite runner, report generator). Not investment advice. |  | 2026-09-17 |
| [lianghsun/jev-tmmluplus-eval](https://github.com/lianghsun/jev-tmmluplus-eval) | 3 | 0 | 요약 대기 · Evaluate TypeSafe AI's Jev (System One Model) on TMMLU+ v1.1 — four-way choice via the API's own response schema, 100% parse rate by construction |  | 2026-09-23 |
| [Libertai/deem](https://github.com/Libertai/deem) | 3 | 0 | 요약 대기 · Typed, calibrated decisions from open weights — Deem 9B &amp; 0.8B, Python + Rust serving |  | 2026-09-27 |
| [memovai/openevals](https://github.com/memovai/openevals) | 3 | 0 | 요약 대기 · Fast and cheap agent evals. jev as judge. |  | 2026-09-20 |
| [NicolasMontone/jev-evals](https://github.com/NicolasMontone/jev-evals) | 3 | 0 | 요약 대기 · Rubric-based eval harness cheap enough to run on every PR, powered by typesafe-ai/jev |  | 2026-09-18 |
| [realZachi/jevtest](https://github.com/realZachi/jevtest) | 3 | 0 | 요약 대기 · Semantic test matchers for Vitest and Jest, powered by TypeSafe's Jev model. Write expectations in plain English, get calibrated probabilities back. |  | 2026-09-19 |
| [smithclay/dbt_jev](https://github.com/smithclay/dbt_jev) | 3 | 0 | 요약 대기 · use jev in dbt |  | 2026-09-23 |
| [TypeSafeAI/clarity-judge](https://github.com/TypeSafeAI/clarity-judge) | 3 | 1 | 요약 대기 · Multi-axis writing quality checker powered by TypeSafe AI's Jev model. Separate named checks, each with its own verdict and confidence. |  | 2026-09-26 |
| [YidiDev/jev-benchmark](https://github.com/YidiDev/jev-benchmark) | 3 | 0 | 요약 대기 · Rubric-Based Zero-Shot Classification Benchmark: Jev vs Claude Haiku 4.5 vs Claude Sonnet 5 vs OpenJev on rubric-conditioned classification, chained decision execution, and exam grading -- with full price tracking. |  | 2026-09-24 |
| [zamax14/System-One-Playground](https://github.com/zamax14/System-One-Playground) | 3 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-27 |
| [hegargarcia/jev-playground](https://github.com/hegargarcia/jev-playground) | 1 | 0 | **무엇** 틱택토와 커넥트포 게임에서 TypeSafe Jev와 여러 LLM의 의사결정 성능을 비교 평가하는 벤치마크 플레이그라운드 웹 앱이다.<br>**판단** 주어진 게임판 상태와 전술 지침을 바탕으로 가능한 합법적 수(Legal actions) 목록 중 다음에 둘 최적의 수를 choice로 선택하게 한다.<br>**포인트** Vercel AI Gateway를 통해 Jev 네이티브 모델과 타사 LLM에 동일한 상태와 선택지를 전달해 수 선택, 가중치, 신뢰도를 로그로 비교한다. |  | 2026-09-17 |
| [adlternative/tally](https://github.com/adlternative/tally) | 2 | 0 | 요약 대기 · Turn a pile of comments into an auditable distribution: Jev judges each item, code counts the percentages. React workspace + Python engine with pluggable data sources. |  | 2026-09-22 |
| [andrewsilber/JevsBistro](https://github.com/andrewsilber/JevsBistro) | 2 | 0 | 요약 대기 · 3D restaurant service simulator for benchmarking low-latency decision models |  | 2026-09-20 |
| [bydeng01/scientific-decision-eval](https://github.com/bydeng01/scientific-decision-eval) | 2 | 0 | 요약 대기 · Code and data for evaluating Jev, a System One model, on scientific decisions and how its choices affect downstream results. |  | 2026-09-24 |
| [dipseth/decision-pipeline](https://github.com/dipseth/decision-pipeline) | 2 | 0 | 요약 대기 · Let models estimate. Let code decide. Let people correct it later. A TypeScript core for traceable, tunable LLM features. |  | 2026-09-25 |
| [g0runmezadam/jev-architecture-research](https://github.com/g0runmezadam/jev-architecture-research) | 2 | 0 | 요약 대기 · Black-box reverse engineering research archive for the Jev decision model |  | 2026-09-22 |
| [HusDev/LinguaTrace](https://github.com/HusDev/LinguaTrace) | 2 | 1 | 요약 대기 · The lesson notebook that writes itself. A live tutoring lesson becomes structured notes and a personalised Lesson Pack: Jev judges every turn, Gemini Live transcribes each speaker, and the tutor stays a person. |  | 2026-09-20 |
| [JacobLinCool/jev-paper-judge](https://github.com/JacobLinCool/jev-paper-judge) | 2 | 0 | 요약 대기 · Feedback on your paper in seconds. |  | 2026-09-17 |
| [Jevals/jevals-data](https://github.com/Jevals/jevals-data) | 2 | 1 | 요약 대기 · Independent benchmark data for TypeSafe's Jev (System One model) vs LLMs: accuracy, calibration, cost. Boards + per-decision logs, CC-BY-4.0 |  | 2026-09-21 |
| [kevinpita/pi-jev-context](https://github.com/kevinpita/pi-jev-context) | 2 | 0 | 요약 대기 · Reversible context pruning for Pi, powered by TypeSafe Jev. Keep useful context without deleting session history. |  | 2026-09-18 |
| [leepokai/llm-prompt-techniques-on-jev](https://github.com/leepokai/llm-prompt-techniques-on-jev) | 2 | 0 | 요약 대기 · Chain-of-thought and self-refinement for TypeSafe's Jev: feed its typed answers back as state and ask again. Benchmarks vs TypeSafe's own cookbook numbers. |  | 2026-09-19 |
| [Little-Planet-Labs/jev-playground](https://github.com/Little-Planet-Labs/jev-playground) | 2 | 0 | 요약 대기 · A small Next.js app for experimenting with TypeSafe AI's Jev model (System One) |  | 2026-09-17 |
| [robokrunch/jev-physical-ai](https://github.com/robokrunch/jev-physical-ai) | 2 | 0 | 요약 대기 · Putting TypeSafe's Jev to work on robots, fleets, and edge hardware — real measured numbers, honestly caveated. |  | 2026-09-20 |
| [rongxinzy/LightJev](https://github.com/rongxinzy/LightJev) | 2 | 0 | 요약 대기 · Train lightweight language backbones for typed decisions and candidate probabilities. CE/Brier training, evaluation, and an offline end-to-end demo. |  | 2026-09-27 |
| [sathariels/jevcheck](https://github.com/sathariels/jevcheck) | 2 | 1 | 요약 대기 · Behavioral contracts for TypeSafe Jev — pin production expectations, eval model upgrades, catch flips and confidence regressions. |  | 2026-09-27 |
| [scarif-labs/jev-software-decision-benchmark](https://github.com/scarif-labs/jev-software-decision-benchmark) | 2 | 0 | 요약 대기 · Reproducible benchmark evaluating JEV as a software decision primitive for dependency-update automation under distribution shift. |  | 2026-09-19 |
| [stas4000/jev-geo-audit](https://github.com/stas4000/jev-geo-audit) | 2 | 0 | 요약 대기 · 300 public pages audited for AI citability with Jev decisions, checked against an LLM judge: agreement, cost and latency, measured |  | 2026-09-21 |
| [stperic/jev-medhallu-benchmark](https://github.com/stperic/jev-medhallu-benchmark) | 2 | 2 | 요약 대기 · TypeSafe's Jev and four fast LLMs added to Stanford MedHELM's MedHallu results: harness, preregistered run plans and every run file. |  | 2026-09-23 |
| [VladyslavHontar/clear-head](https://github.com/VladyslavHontar/clear-head) | 2 | 1 | 요약 대기 · Claude Code Stop hook that checks an AI assistant's claims against what it actually read this session, using TypeSafe's Jev as the judge |  | 2026-09-24 |
| [zsavage8/padflow-jev-evals](https://github.com/zsavage8/padflow-jev-evals) | 2 | 0 | 요약 대기 · Typed-decision benchmark from PadFlow (land development SaaS): schemas, anonymized labeled rows, and a runner for confidence-calibrated models like TypeSafe Jev. |  | 2026-09-17 |
| [4esv/jev-eval](https://github.com/4esv/jev-eval) | 1 | 0 | 요약 대기 · Benchmark TypeSafe Jev against any OpenRouter model on your own data. |  | 2026-09-23 |
| [abhibansal60/tidy](https://github.com/abhibansal60/tidy) | 1 | 0 | 요약 대기 · Clean up Gmail and YouTube with AI, safely: Jev judges each email or channel, plain code sets the limits, you approve. pipx install tidy-ai |  | 2026-09-27 |
| [AliceRoselia/Typesafe_chess_eval](https://github.com/AliceRoselia/Typesafe_chess_eval) | 1 | 0 | 요약 대기 · An evaluation of typesafe AI chess. As it turns out, the AI isn't doing really well even though chess is not a particularly open-ended game. Still, it's only a prototype and this probably wasn't optimzied for games. |  | 2026-09-17 |
| [AppChainAI/Jevatar](https://github.com/AppChainAI/Jevatar) | 1 | 0 | 요약 대기 · An AI companion that replies only with facial expressions. Jev (TypeSafe System One) judges your message and picks 1 of 14 moods; blobatar morphs its face. React + Vite + Bun. |  | 2026-09-22 |
| [asp616848/better-jev-for-all](https://github.com/asp616848/better-jev-for-all) | 1 | 0 | 요약 대기 · Open, self-hostable, faster System One decision model — API-compatible alternative to TypeSafe's Jev |  | 2026-09-27 |
| [beingcognitive/jev-go](https://github.com/beingcognitive/jev-go) | 1 | 0 | 요약 대기 · Can you beat Jev at Gomoku, Go or chess? Play TypeSafe's System One decision model on Cloudflare Pages, with every API call shown, a hall of fame and replays. |  | 2026-09-24 |
| [beingcognitive/jev-songwriter](https://github.com/beingcognitive/jev-songwriter) | 1 | 0 | 요약 대기 · A decision model that cannot write a single note writes songs. Code computes, Jev judges, and every call is replayable. |  | 2026-09-24 |
| [blas0/jev-shadcn-lint-eval](https://github.com/blas0/jev-shadcn-lint-eval) | 1 | 0 | 요약 대기 · A small second eval for shadcn-ui/lint that uses TypeSafe's Jev to judge the linter's own output. |  | 2026-09-17 |
| [brandonbryant12/transcript-scorecard](https://github.com/brandonbryant12/transcript-scorecard) | 1 | 0 | 요약 대기 · ACME live support-call scoring demo with TypeSafe AI, Effect, SQLite, React, Vite, and Turborepo |  | 2026-09-24 |
| [carlaiau/can-jev-play](https://github.com/carlaiau/can-jev-play) | 1 | 0 | 요약 대기 · Can Jev infer whether a bet is worthwhile from its payout table, and do recent wins or losses sway that choice |  | 2026-09-23 |
| [clduab11/jev-test](https://github.com/clduab11/jev-test) | 1 | 0 | 요약 대기 · Pre-registered benchmark: can a 2B local model (Gemma 4 E2B) answer web questions without making things up when a decision model (TypeSafe Jev) makes every call? SearXNG for search, MemPalace for verbatim memory, seven arms including open local judges. Spec and thresholds fixed before any run. |  | 2026-09-21 |
| [codeitlikemiley/system-one-adapter-rust](https://github.com/codeitlikemiley/system-one-adapter-rust) | 1 | 0 | 요약 대기 · Rust port of TypeSafe system-one-adapter (LLM-backed system_one evaluations) |  | 2026-09-16 |
| [dayhaysoos/jevals](https://github.com/dayhaysoos/jevals) | 1 | 0 | 요약 대기 · Local evaluation workbench for TypeSafe Jev |  | 2026-09-18 |
| [DECRUX9812/openjev-lm](https://github.com/DECRUX9812/openjev-lm) | 1 | 0 | 요약 대기 · open-Jev LM arm: Qwen2.5-0.5B + LoRA reproducing a hosted decision model's judgment at 92.9% on hand-labelled gold - trained overnight on a 6-vCPU CPU-only host, $0/call. Paper, corpora, harnesses, receipts. |  | 2026-09-25 |
| [Dililianxice/jev-inner-speech-bci](https://github.com/Dililianxice/jev-inner-speech-bci) | 1 | 0 | 요약 대기 · A reproducible benchmark connecting Jev semantic priors with intracortical inner-speech BCI decoding. |  | 2026-09-21 |
| [dtduc-git/jev-packs](https://github.com/dtduc-git/jev-packs) | 1 | 0 | 요약 대기 · Evidence-gated registry of Jev question packs — curated questions, golden cases and measured evidence for Jev-compatible decision endpoints |  | 2026-09-23 |
| [ElshinQ/jevaluate](https://github.com/ElshinQ/jevaluate) | 1 | 0 | 요약 대기 · Jevaluate: evaluate before you trust. Field notes, runnable scripts and an agent skill for TypeSafe Jev: gated evals, a browser loop, a product walk with DeepSeek vision, a UI text judge and a first-click tree test. Co-authored with Claude Fable 5.1. |  | 2026-09-19 |
| [etsabary/jev-deterministic-benchmark](https://github.com/etsabary/jev-deterministic-benchmark) | 1 | 0 | 요약 대기 · 1,000-decision behavioral benchmark of Jev across 25 deterministic reasoning families. |  | 2026-09-22 |
| [Fox-Islam/jev-bias-bench](https://github.com/Fox-Islam/jev-bias-bench) | 1 | 0 | 요약 대기 · A benchmark for Jev's biases, built from people who differ in one attribute at a time. |  | 2026-09-20 |
| [g0runmezadam/what-is-jev](https://github.com/g0runmezadam/what-is-jev) | 1 | 0 | 요약 대기 · Independent, source-linked research on TypeSafe AI's Jev (System One), with 947 rubric-scored public repositories, recurring patterns, datasets, and bilingual documentation. |  | 2026-09-21 |
| [gargpratyush/journey-evals](https://github.com/gargpratyush/journey-evals) | 1 | 0 | 요약 대기 · Drive a real browser or a real LangGraph agent through one declared user journey, and report what actually happened. A page saying 'success' is never accepted as proof. |  | 2026-09-23 |
| [getainode/jebadiah](https://github.com/getainode/jebadiah) | 1 | 1 | 요약 대기 · Jebadiah, an open System One decision model: trainer, data builders, evals and every run record |  | 2026-09-26 |
| [HackSing/jev-report](https://github.com/HackSing/jev-report) | 1 | 0 | 요약 대기 · 发明 RLHF 的人，这次做了个不会说话的模型：Jev 独立研究报告。52 页 PDF + 50 条中文实测复现包 + 143 条可回溯数据表 |  | 2026-09-17 |
| [hamakyo/jev-mahjong-bench](https://github.com/hamakyo/jev-mahjong-bench) | 1 | 0 | 요약 대기 · Reproducible riichi mahjong benchmark for Jev, GPT, Mortal, and hybrid agents using MJAI and RiichiEnv. |  | 2026-09-22 |
| [Hanno-Labs/decision-bench](https://github.com/Hanno-Labs/decision-bench) | 1 | 1 | 요약 대기 · Open benchmark runtime for document-grounded decision models |  | 2026-09-27 |
| [Hexdigest123/typesafe-comment](https://github.com/Hexdigest123/typesafe-comment) | 1 | 0 | 요약 대기 · Small Python package that uses typesafe.ai to evaluate code comments on certain heuristics |  | 2026-09-17 |
| [hifizz/jev-finance-benchmark](https://github.com/hifizz/jev-finance-benchmark) | 1 | 0 | 요약 대기 · typesafe.ai model jev finance benchmark |  | 2026-09-17 |
| [jacobjerryarackal/Jev-vs-Human-Deep-Space-Interceptor](https://github.com/jacobjerryarackal/Jev-vs-Human-Deep-Space-Interceptor) | 1 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-25 |
| [jjd-lab/jev-synthetic-survey](https://github.com/jjd-lab/jev-synthetic-survey) | 1 | 0 | 요약 대기 · Jev vs GPT-4.1 as synthetic survey respondents on Twin-2K-500. How you ask mattered more than which model you used. |  | 2026-09-23 |
| [JYeswak/jev_playground](https://github.com/JYeswak/jev_playground) | 1 | 0 | 요약 대기 · Measure what Jev can actually do before you build on it. Graded findings, ruled-out candidates, and recipes with stop-conditions. 0 promotions — on purpose. |  | 2026-09-27 |
| [Kaos599/jev-writer](https://github.com/Kaos599/jev-writer) | 1 | 0 | 요약 대기 · Find out which qualities of your writing actually predict engagement. Rates every post you have published against a pre-registered rubric using Jev's calibrated judgments, then tests those ratings against your real engagement numbers. Refuses to report findings your sample cannot support. |  | 2026-09-21 |
| [liu-x27/XavierJev](https://github.com/liu-x27/XavierJev) | 1 | 0 | 요약 대기 · A decision layer for agent control flow — yes/no, choice and rubric questions answered from one token's probabilities, measured against labelled sets — with a Claude Code permission hook and a trainable local judge |  | 2026-09-28 |
| [llt22/jev-lab](https://github.com/llt22/jev-lab) | 1 | 0 | 요약 대기 · Hands-on research lab for TypeSafe's Jev (System One model): reproducible benchmarks of Noul/Choice/Score primitives, confidence gating, fan-out latency, agent control — plus a living audit of the Jev ecosystem. |  | 2026-09-21 |
| [mameli/jev-vs-luna](https://github.com/mameli/jev-vs-luna) | 1 | 0 | 요약 대기 · Reproducible Jev vs Luna review-classification benchmark with measured accuracy, latency, and costs. |  | 2026-09-18 |
| [Maxi91f/jev_testing](https://github.com/Maxi91f/jev_testing) | 1 | 0 | 요약 대기 · Exploratory Jev experiments and evaluation report |  | 2026-09-22 |
| [Menny1337/jev-lab](https://github.com/Menny1337/jev-lab) | 1 | 0 | 요약 대기 · TypeScript experiments, evaluations, and latency benchmarks for TypeSafe's Jev model |  | 2026-09-16 |
| [mionax/decisionops](https://github.com/mionax/decisionops) | 1 | 0 | 요약 대기 · Jev thinks. Your code acts. The open-source lab for Choice, Score &amp; Noul decisions. |  | 2026-09-23 |
| [patryckalves/jev-no-enem](https://github.com/patryckalves/jev-no-enem) | 1 | 0 | 요약 대기 · Reproducible benchmark evaluating TypeSafe AI's Jev (System One paradigm) on Brazil's ENEM 2025 standardized exam. Evaluates typed decision-making, domain-specific accuracy, and RLCD uncertainty calibration against open LLM baselines with an interactive GitHub Pages dashboard. |  | 2026-09-21 |
| [PromtEngineer/system1-vs-system2](https://github.com/PromtEngineer/system1-vs-system2) | 1 | 0 | 요약 대기 · System 1 vs System 2 AI models, measured: a chain test comparing one-pass Jev with Qwen 3.8 thinking on and off |  | 2026-09-24 |
| [Shakibuzzaman3104/claude-jev-funnel](https://github.com/Shakibuzzaman3104/claude-jev-funnel) | 1 | 0 | 요약 대기 · Claude Code plugin + zero-dependency CLI for TypeSafe's Jev: judge items in bulk with calibrated yes/no, pick-one and rubric answers; handle the confident ends in code, review only the uncertain band. |  | 2026-09-25 |
| [shimo4228/jev-research-pipeline](https://github.com/shimo4228/jev-research-pipeline) | 1 | 0 | 요약 대기 · Daily research monitor for standing questions: deterministic Python owns the loop, TypeSafe Jev screens sources per question, Qwen writes the notes (pilot) |  | 2026-09-27 |
| [shyamsridhar123/JudgeJev](https://github.com/shyamsridhar123/JudgeJev) | 1 | 0 | 요약 대기 · A hands-on educational lab for DeepEval + Jev: inspect real recorded judgments, explore release gates and drift playback, and run fresh evaluations on your own workloads. |  | 2026-09-26 |
| [simonmesmith/jev-bbq-experiment](https://github.com/simonmesmith/jev-bbq-experiment) | 1 | 0 | 요약 대기 · Reproducible evaluation of TypeSafe Jev on all 58,492 BBQ questions: accuracy, stereotype bias, uncertainty, cost and latency. |  | 2026-09-19 |
| [STRML/omp-jevens-classifier](https://github.com/STRML/omp-jevens-classifier) | 1 | 0 | 요약 대기 · Jev-powered model-judged permission gate for OMP (TypeSafe System One) |  | 2026-09-17 |
| [Tenkei/jev-decision-bench](https://github.com/Tenkei/jev-decision-bench) | 1 | 0 | 요약 대기 · A reproducible, self-hosted benchmark for comparing JEV and LLM decision-making on your own datasets, models, and evaluation policies. |  | 2026-09-27 |
| [thejoeejoee/git-judge-commits](https://github.com/thejoeejoee/git-judge-commits) | 1 | 0 | 요약 대기 · ⚖️  Judge git commits with Jev: is it breaking, does it deserve attention, and does its message tell the truth? |  | 2026-09-20 |
| [TheWayWithin/jev-bench](https://github.com/TheWayWithin/jev-bench) | 1 | 0 | 요약 대기 · Does the cited source actually say it? A 42-claim benchmark: Jev (TypeSafe System One) against GPT-5.4, Claude Sonnet 5 and Gemini 3.1 Pro. |  | 2026-09-25 |
| [VBS2004/jevcut](https://github.com/VBS2004/jevcut) | 1 | 0 | 요약 대기 · Auto-clipper that turns long videos (podcasts, talks, essays, comedy) into short standalone clips for Shorts, Reels and TikTok. Code lists every possible cut; an AI judge picks where each clip starts and ends. Benchmarked on 38 hand-labelled videos. |  | 2026-09-27 |
| [vehas/thaiexam-jev-charts](https://github.com/vehas/thaiexam-jev-charts) | 1 | 0 | 요약 대기 · Charts: TypeSafe Jev evaluated on Thai standardized exams vs 110 other models |  | 2026-09-17 |
| [vnmoorthy/siege](https://github.com/vnmoorthy/siege) | 1 | 0 | 요약 대기 · SIEGE: 200 people vs one agent. A typed action gate (TypeSafe System One) that learns from every breach, evaluated by W&amp;B Weave, hardened by a defender loop. Built at CoreWeave Hacks: Agent Loops 2026. |  | 2026-09-13 |
| [wmcbtech30/ground-zero](https://github.com/wmcbtech30/ground-zero) | 1 | 0 | 요약 대기 · Eval framework library to evaluate AI hallucinations, correctness, and instruction following, powered by Jev AI. |  | 2026-09-21 |
| [xuan7zhang/jev-toolspace](https://github.com/xuan7zhang/jev-toolspace) | 1 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-23 |
| [Yaxin9Luo/spending-effort-with-jev](https://github.com/Yaxin9Luo/spending-effort-with-jev) | 1 | 0 | 요약 대기 · Jev-powered /effort advisor for Claude Code: tells you when to switch effort, per prompt |  | 2026-09-26 |
| [yldm-tech/loom](https://github.com/yldm-tech/loom) | 1 | 0 | 요약 대기 · Generate a landing page from one sentence: an LLM writes the copy, Jev makes the judgement calls, code owns the rules. |  | 2026-09-26 |
| [Zafer-Liu/jev-xiangqi](https://github.com/Zafer-Liu/jev-xiangqi) | 1 | 0 | 요약 대기 · Play Chinese Chess (Xiangqi) against Jev - TypeSafe System One decision model as the AI. Score fan-out over legal moves. |  | 2026-09-21 |
| [zandy700/Jev-Assistant](https://github.com/zandy700/Jev-Assistant) | 1 | 0 | 요약 대기 · Jev Chat Assistant: reads WhatsApp, Snapchat, Instagram, and Messages and suggests replies. Never sends. |  | 2026-09-27 |
| [ZhaoFuheng/SWAN-AISQL](https://github.com/ZhaoFuheng/SWAN-AISQL) | 1 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-27 |
| [abe75ch/tiltmeter](https://github.com/abe75ch/tiltmeter) | 0 | 0 | **무엇** TypeSafe Jev가 반환하는 판단 확률 분포를 기록하여 모델 변경, 드리프트, 임계값 경계 편중, 추정 정확도 하락을 감지하고 알림을 보내는 모니터링 도구다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Pydantic AI용 래퍼 또는 투명 프록시로 동작하며 원문 텍스트는 저장하지 않고 질문 지문과 확률만 로컬 SQLite에 보관해 레이블 없이 통계적 드리프트를 감지한다. |  | 2026-09-27 |
| [adrianhaj/lotto-jev](https://github.com/adrianhaj/lotto-jev) | 0 | 0 | **무엇** 폴란드 Lotto 6/49 역대 당첨 번호 데이터에서 무작위 기준을 넘는 신호가 존재하는지 검증하고 번호를 생성하는 연구용 엔진이다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 데이터 누수를 방지하는 워크포워드 백테스트와 정확한 초기하·이항 검정 z-score/p-value 통계 지표를 계산하여 초과 수익 여부를 검증한다. |  | 2026-09-27 |
| [dfranco-projects/jev-guardbench](https://github.com/dfranco-projects/jev-guardbench) | 0 | 0 | **무엇** 에이전트 가드레일 콜백에서 LLM-as-judge 대신 System One 모델(Jev/Kev)을 적용할 수 있는지 성능과 지연시간을 비교 평가하는 벤치마크 도구다.<br>**판단** before_model 및 after_model 검사 시 가드레일 정책 위반 여부를 판단시킨다.<br>**포인트** Jev/Kev와 Claude, Gemini 등의 LLM 판사를 F1, FPR, AUROC, 지연시간 백분위수 지표로 비교 평가한다. |  | 2026-09-27 |
| [gbesse/decision-workbench](https://github.com/gbesse/decision-workbench) | 0 | 0 | **무엇** 공공 데이터나 문서를 수집해 Jev로 의사결정을 평가하고 인간 검토를 거쳐 결과를 내보내는 로컬 워크벤치 도구다.<br>**판단** 의회 간행물 등이 특정 기업 활동과 관련 있는지 판단하거나, 사용자가 정의한 정책(DecisionPack) 규칙에 따라 문서를 평가한다.<br>**포인트** 모델 판단 원본과 인간 검토 내역을 분리 보존하며, 변경되지 않은 문서는 캐시된 판단을 재사용해 불필요한 API 호출을 방지한다. |  | 2026-09-25 |
| [Holovkat/jev-mark](https://github.com/Holovkat/jev-mark) | 0 | 0 | **무엇** llama.cpp parallel-decision 브랜치와 로컬 Ollama 모델을 활용해 TypeSafe Jev의 유한 결정 스키마 처리 성능을 평가하는 벤치마크 워크스페이스다.<br>**판단** 100문항 논리 퀴즈와 기준 질문에 대해 객관식 선택(Choice), 점수(Score), 참/거짓 확률(Noul) 필드를 병렬로 질의해 판단을 얻는다.<br>**포인트** 임의의 JSON 생성 대신 컨텍스트에서 여러 bounded 필드를 병렬 채점하여 지연 시간을 줄이고 출력 신뢰성을 높이는 parallel-decision 엔드포인트를 검증한다. |  | 2026-09-28 |
| [laguagu/jev-rerank-bench](https://github.com/laguagu/jev-rerank-bench) | 0 | 0 | **무엇** 핀란드어 텍스트를 대상으로 검색 리랭킹, 코드 검색, 의도 분류, 인용 검증에서 TypeSafe Jev의 성능과 비용을 측정한 벤치마크 도구 모음이다.<br>**판단** 후보 문서의 질의 부합 여부(noul/score), 인용 구문의 주장 뒷받침 여부(noul), 텍스트의 분류 의도(choice) 등을 판단시킨다.<br>**포인트** 단일 호출 대신 10–15개 후보를 묶어 요청하는 배치 처리로 지연 시간과 비용을 줄이고, 반환된 확률값을 결과 신뢰도 게이트로 활용했다. |  | 2026-09-27 |
| [nadeem4/jev-demo](https://github.com/nadeem4/jev-demo) | 0 | 0 | **무엇** Jev와 오픈소스 Laya 모델을 활용해 게임 플레이 비교 아레나와 Claude Code 도구 감시기를 시연하는 데모 프로젝트다.<br>**판단** 게임에서는 텍스트 상태 기반 행동 선택지(choice)를 묻고, 감시기에서는 도구 호출의 가역성·범위 이탈·인젝션·루프 여부를 판단시킨다.<br>**포인트** 원시 좌표나 픽셀 대신 텍스트로 추상화한 상태를 입력받아 선택지별 확률을 즉시 도출하는 의사결정 모델 구조를 구현했다. |  | 2026-09-25 |
| [NixDow/TSJEV-Allen](https://github.com/NixDow/TSJEV-Allen) | 0 | 0 | **무엇** TypeSafe Jev의 제로샷 분류와 미세조정된 SciBERT의 의학 초록 분류 성능 및 보정을 비교하는 벤치마크 리포다.<br>**판단** 의학 논문 초록 텍스트를 입력받아 5가지 질환 분류 항목 중 어디에 해당하는지 choice로 선택하도록 묻는다.<br>**포인트** 정확도와 F1 점수뿐 아니라 ECE 및 Brier score 같은 신뢰도 보정 지표와 추론 지연시간을 계층화해 비교한다. |  | 2026-09-28 |
| [postfunctional-org/reading-the-state](https://github.com/postfunctional-org/reading-the-state) | 0 | 0 | **무엇** TextWorld, 로그라이크, 지뢰찾기 세 게임의 정답 데이터를 바탕으로 의사결정 모델들이 상태를 반영해 행동하는지 측정하는 벤치마크 리포지토리다.<br>**판단** 주어진 게임 상태(state)에서 제시된 후보 행동(candidate actions) 목록 중 최적의 행동을 하나 선택(choice)하도록 묻는다.<br>**포인트** 상태를 전혀 보지 않는 고정 규칙(state-blind policy)과 비교하여 모델이 단순 빈도 편향을 넘어 실제 게임 상태를 읽고 있는지 검정한다. |  | 2026-09-28 |
| [qualiteg/jev-typesafe-demo](https://github.com/qualiteg/jev-typesafe-demo) | 0 | 0 | **무엇** TypeSafe AI의 Jev API를 활용해 라우팅, 가드레일, 셸 위험도 평가 등의 정확도·지연 시간·비용을 측정한 벤치마크 샘플 코드 모음이다.<br>**판단** 고객 문의 부서 분류(Choice), 프롬프트 인젝션 및 개인정보 탐지(Noul), 셸 명령어 위험도 0~3점 평가(Score)와 승인 필요 여부(Noul)를 묻는다.<br>**포인트** 실제 블로그 실험에 쓰인 원본 응답 로그(JSONL)와 레이턴시·비용 집계 코드가 포함되어 실험 수치를 직접 재현하고 검증할 수 있다. |  | 2026-09-28 |
| [TheChyeahhh/tarnlight](https://github.com/TheChyeahhh/tarnlight) | 0 | 0 | **무엇** TypeSafe Jev를 호출하는 애플리케이션의 판단 결과와 신뢰도를 로컬에 기록하고 실시간 모니터링 및 수동 채점을 지원하는 윈도우용 데스크톱 앱이다.<br>**판단** 티켓 처리 팀 분류나 스팸 게시물 판별 등 외부 앱이 Jev에 요청한 질문과 이에 대해 Jev가 반환한 선택지 및 신뢰도 점수(0–100)를 대상으로 한다.<br>**포인트** 폴더 드롭박스나 프록시 방식을 통해 기존 앱 흐름을 방해하지 않고 결정을 수집하며, 키보드로 정답 여부를 채점하고 신뢰도 임계값 구간을 설정할 수 있다. |  | 2026-09-27 |
| [shibadogcap/kyotsu-ai-bench](https://github.com/shibadogcap/kyotsu-ai-bench) | 2 | 0 | 요약 대기 · AI benchmark on Japan's 2026 Common Test: Jev vs luna-none vs luna-low (static dashboard) |  | 2026-09-17 |
| [0xmdinc/jev-medical-bench](https://github.com/0xmdinc/jev-medical-bench) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-27 |
| [3zcurdia/pumabench](https://github.com/3zcurdia/pumabench) | 0 | 0 | 요약 대기 · LLM benchmark against unam admision test |  | 2026-09-25 |
| [4nt0ineB/typed-decision-bench](https://github.com/4nt0ineB/typed-decision-bench) | 0 | 0 | 요약 대기 · Bench of typed decision models: Jev vs OpenJev vs Laya, small local LLMs and cheap hosted LLMs on the same zero-shot classification tasks, in English and French. |  | 2026-09-27 |
| [Adilmp/does-jev-confidence-mean-anything](https://github.com/Adilmp/does-jev-confidence-mean-anything) | 0 | 0 | 요약 대기 · A calibration audit of TypeSafe's Jev: does a decision model's stated confidence mean what it claims? 8,000 judgments against human annotations, $0.05. |  | 2026-09-19 |
| [Adityakhalkar/JevEye](https://github.com/Adityakhalkar/JevEye) | 0 | 0 | 요약 대기 · Ask Jev about an image. A CNN reports what it sees with a calibrated confidence or an abstention; Jev judges what it means. |  | 2026-09-25 |
| [agrogov/jev-system-one-study](https://github.com/agrogov/jev-system-one-study) | 0 | 0 | 요약 대기 · Jev System One Black-Box Study - Complete Reproducibility Bundle |  | 2026-09-21 |
| [Alifdaal/classroom-pulse](https://github.com/Alifdaal/classroom-pulse) | 0 | 0 | 요약 대기 · Live misconception radar for classrooms: students answer on their phones, TypeSafe Jev flags what the room gets wrong. |  | 2026-09-26 |
| [Alpha-Harper-Franklin/jev-multimodal](https://github.com/Alpha-Harper-Franklin/jev-multimodal) | 0 | 0 | 요약 대기 · Jev + Multimodal: shared visual decisions, evidence adapters, source audits and reproducible public-image benchmarks. |  | 2026-09-21 |
| [amansahani/jev-laya-openai-comparison](https://github.com/amansahani/jev-laya-openai-comparison) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-25 |
| [andreaserradev-gbj/jev-access-day](https://github.com/andreaserradev-gbj/jev-access-day) | 0 | 0 | 요약 대기 · A learning scaffold for TypeSafe AI's System One models: eval harness plus a measured, plain-language comparison of the Jev decision model vs an LLM stand-in on 24 real operational decisions. All numbers reproducible from committed run files. |  | 2026-09-19 |
| [arunmettle/prop-firm-helper](https://github.com/arunmettle/prop-firm-helper) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-26 |
| [Ascurse/typed-judge-kit](https://github.com/Ascurse/typed-judge-kit) | 0 | 0 | 요약 대기 · Typed questions to a model, verdict in code, thresholds from your labels |  | 2026-09-22 |
| [Ash20pk/beat-the-reviewer](https://github.com/Ash20pk/beat-the-reviewer) | 0 | 0 | 요약 대기 · Ten things you need approved, and a reviewer you have to convince. Every verdict is a typed judgement rule answered by jev, a pinned TypeSafe System One model — a probability, not a sentence. |  | 2026-09-20 |
| [atmaneayoubdev/evalcascade](https://github.com/atmaneayoubdev/evalcascade) | 0 | 0 | 요약 대기 · Open-source adaptive evaluation for LLM, RAG and agentic systems. System One judges first, LLMs only when necessary. |  | 2026-09-27 |
| [autotelic/joggle](https://github.com/autotelic/joggle) | 0 | 0 | 요약 대기 · Cross-file judgements for a TypeScript codebase, enforced like a linter. |  | 2026-09-27 |
| [bebe0307mz/jevs-kitchen-chaos](https://github.com/bebe0307mz/jevs-kitchen-chaos) | 0 | 0 | 요약 대기 · 3D Overcooked-style AI benchmark: four chefs driven per-decision by the Jev decision model or frontier LLMs (BYOK). Live broadcast HUD, pure benchmark mode, downloadable decision logs. |  | 2026-09-19 |
| [bhushankinge/jev-laya-classification-bench](https://github.com/bhushankinge/jev-laya-classification-bench) | 0 | 0 | 요약 대기 · Typed-decision models (Jev API, Laya 421M) vs Qwen3.5-35B on 12,000 real U.S. federal IT solicitations, graded against actual reseller quotes: accuracy, calibration, Wilson-bounded auto-accept cutoffs, cost. |  | 2026-09-24 |
| [BingelsWorth/JudgeJev](https://github.com/BingelsWorth/JudgeJev) | 0 | 0 | 요약 대기 · DeepThink meets llm as judge. Use heavy prefill caching to run the same request in parallel and let Jev give you the best result.  |  | 2026-09-25 |
| [BipinRajC/Jev-api-experiments](https://github.com/BipinRajC/Jev-api-experiments) | 0 | 0 | 요약 대기 · Empirical experiments and API research for TypeSafe's Jev System One model trained using RLCD |  | 2026-09-27 |
| [blowxian/jev-fanout-bench](https://github.com/blowxian/jev-fanout-bench) | 0 | 1 | 요약 대기 · Measured: asking TypeSafe Jev N questions in one call bills the state once. 2,976 real requests, raw data, exact billing check. |  | 2026-09-26 |
| [brian-w-zhang/askjev](https://github.com/brian-w-zhang/askjev) | 0 | 0 | 요약 대기 · A tree housing every closed question humans or machines ask, answered by Jev (TypeSafe System One): capabilities, defaults, and jaggedness. Not a benchmark. |  | 2026-09-27 |
| [carlaiau/judge-jev](https://github.com/carlaiau/judge-jev) | 0 | 0 | 요약 대기 · Reproducible experiments evaluating Jev as an automated judge across benchmarks and tasks. |  | 2026-09-24 |
| [ChenneyZhuang/ChenneyZhuang](https://github.com/ChenneyZhuang/ChenneyZhuang) | 0 | 0 | 요약 대기 · Local-first AI: open-weight decision models + harnesses. Fine-tuned Laya browser model beats the official one on 6/8 benchmarks. |  | 2026-09-25 |
| [chepyle/jev-test](https://github.com/chepyle/jev-test) | 0 | 0 | 요약 대기 · Reproducible zero-shot Jev benchmark on all seven LexGLUE tasks |  | 2026-09-27 |
| [Clementtang/jev-eval](https://github.com/Clementtang/jev-eval) | 0 | 0 | 요약 대기 · Stance test of TypeSafe Jev vs Claude on Taiwan sovereignty questions, in Traditional Chinese, Simplified Chinese and English |  | 2026-09-27 |
| [Codeenk/sev](https://github.com/Codeenk/sev) | 0 | 0 | 요약 대기 · Sev-X: Kev-descended decision models (DDP, eval context, SRA program) |  | 2026-09-26 |
| [codenamev/ruby_llm-providers-laya](https://github.com/codenamev/ruby_llm-providers-laya) | 0 | 0 | 요약 대기 · The :laya provider for RubyLLM — Judge answers from an open-weights model running in your own process, no API key |  | 2026-09-27 |
| [CodyQin/zh-decision-bench](https://github.com/CodyQin/zh-decision-bench) | 0 | 0 | 요약 대기 · First Chinese-language calibration benchmark for Jev-class 'System One' decision models: dataset (CC BY 4.0), 5-model eval incl. Jev &amp; NeoHorse, temperature refit, robustness tests |  | 2026-09-28 |
| [criguex/jev-test-impact](https://github.com/criguex/jev-test-impact) | 0 | 0 | 요약 대기 · Run only the tests your change touched: import graph + ownership rules first, Jev decides the ambiguous rest, fail-safe to the full suite. Replay benchmark with real ground truth. |  | 2026-09-26 |
| [crzyc0d3r/jev-agent-judge](https://github.com/crzyc0d3r/jev-agent-judge) | 0 | 0 | 요약 대기 · Evaluate support-agent traces with typed Jev judgments (grounding, honesty, relevance, helpfulness) and log them as Opik experiments. |  | 2026-09-25 |
| [cwjechw98-lang/jev-gates](https://github.com/cwjechw98-lang/jev-gates) | 0 | 0 | 요약 대기 · Three gates for any coding agent: a deterministic approval gate before irreversible actions, a completion gate that demands evidence instead of «done», and a rubric regression gate. Powered by TypeSafe Jev (System One). Works with Claude Code, Codex, DeepSeek Harness, Cursor, opencode, Hermes, plain shell and CI. |  | 2026-09-26 |
| [cx295410-dot/jev-biomedical-evidence-screening](https://github.com/cx295410-dot/jev-biomedical-evidence-screening) | 0 | 0 | 요약 대기 · Frozen benchmark data, analysis code and reproducibility materials for Jev biomedical evidence screening across ten SYNERGY reviews. |  | 2026-09-22 |
| [dataelvisliang/jev-as-a-judge-scaffold](https://github.com/dataelvisliang/jev-as-a-judge-scaffold) | 0 | 0 | 요약 대기 · Scaffold of the frozen confidence cascade from "JEV-as-a-Judge: Accept When Confident, Escalate When Unsure" (CMU, arXiv:2609.26550) |  | 2026-09-27 |
| [davidzna/better-cheaper-llm](https://github.com/davidzna/better-cheaper-llm) | 0 | 0 | 요약 대기 · Use Jev instead of an LLM for RAG decisions: relevance grading, query routing, hallucination checks and LLM-as-a-judge evals. Faster, cheaper, measured first. |  | 2026-09-26 |
| [DeccansoftAITeam/jev-model](https://github.com/DeccansoftAITeam/jev-model) | 0 | 0 | 요약 대기 · Jev decision model: TypeScript examples, HR Suite web app and webinar lessons |  | 2026-09-26 |
| [DowLucas/browser-jev](https://github.com/DowLucas/browser-jev) | 0 | 0 | 요약 대기 · Adversarial browser testing: personas explore your web app while Jev judges every page state |  | 2026-09-21 |
| [dtduc-git/jevassert](https://github.com/dtduc-git/jevassert) | 0 | 0 | 요약 대기 · Record/replay regression tests for Jev (TypeSafe System One) question packs — accuracy, calibration and cost gates in CI |  | 2026-09-26 |
| [DuvInc/jev-table-import-mapper](https://github.com/DuvInc/jev-table-import-mapper) | 0 | 0 | 요약 대기 · Map the columns of an uploaded CSV onto your own table: a strict deterministic pass first, then a matrix of typed yes/no decisions for everything that needs judgement. |  | 2026-09-21 |
| [effective-shipping/slop-fold](https://github.com/effective-shipping/slop-fold) | 0 | 0 | 요약 대기 · Browser extension that folds AI-ish LinkedIn posts, judged by Jev from TypeSafe AI |  | 2026-09-24 |
| [eggmasonvalue/jev-takes-mauboussin](https://github.com/eggmasonvalue/jev-takes-mauboussin) | 0 | 0 | 요약 대기 · Evaluating TypeSafe's Jev on Michael Mauboussin's 50-question decision calibration test |  | 2026-09-18 |
| [erendikmenn/jev-llm-router-benchmark](https://github.com/erendikmenn/jev-llm-router-benchmark) | 0 | 0 | 요약 대기 · Benchmark-driven Jev router and judge for cost-aware, reliable LLM coding workflows |  | 2026-09-22 |
| [f418me/jev-evaluations](https://github.com/f418me/jev-evaluations) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-27 |
| [finnhll/jev-eval](https://github.com/finnhll/jev-eval) | 0 | 0 | 요약 대기 · Validation harness for Jev's Choice, Score and Noul primitives on OpenRouter's Decisions API — 282 recorded responses, reproducible offline |  | 2026-09-20 |
| [fly2abhishek/jev-field-tests](https://github.com/fly2abhishek/jev-field-tests) | 0 | 0 | 요약 대기 · Twelve field tests for TypeSafe's Jev model: calibration, guardrails, résumé screening, interview rubrics and its failure modes. Bring your own API key. |  | 2026-09-20 |
| [force416/veil](https://github.com/force416/veil) | 0 | 0 | 요약 대기 · Chrome extension that hides X / Twitter replies matching a natural-language condition, judged by TypeSafe Jev. |  | 2026-09-26 |
| [frederico-kluser/jev-agent-skill](https://github.com/frederico-kluser/jev-agent-skill) | 0 | 0 | 요약 대기 · Decisões tipadas em milissegundos com o Jev (System One da TypeSafe) via OpenRouter — state + perguntas noul/choice/score entram, decisões calibradas saem. Validação pesada baseada nos conceitos do modelo, bandas auto/hitl/abstain, deteção de prompt injection e servidor MCP. Zero dependências (Node ≥20). |  | 2026-09-27 |
| [gabazureus/jev-ragcheck](https://github.com/gabazureus/jev-ragcheck) | 0 | 0 | 요약 대기 · RAG evaluation with typed decisions: sentence-level hallucination verdicts with offsets and citations, passage and answer relevance, in one Jev call per answer. Benchmarked against Ragas, DeepEval, an LLM judge and HHEM. |  | 2026-09-25 |
| [gabazureus/jevextract](https://github.com/gabazureus/jevextract) | 0 | 0 | 요약 대기 · Grounded information extraction that cannot hallucinate: code proposes spans, Jev decides. An open-source alternative to LangExtract, with a bilingual benchmark and paper. |  | 2026-09-25 |
| [gdchaochao/lunar-terminal](https://github.com/gdchaochao/lunar-terminal) | 0 | 0 | 요약 대기 · Code and raw data behind Lunar Terminal: Robocode Tank Royale bots, GapFlap, a token-metering proxy, and the 327-decision randomised trial of TypeSafe Jev. |  | 2026-09-22 |
| [goodboybeau/system-one-playground](https://github.com/goodboybeau/system-one-playground) | 0 | 0 | 요약 대기 · Run the new wave of decision models (Laya, Decider, Kev, Jev) side by side on your Mac. Structured input in, calibrated probabilities out, with honest accuracy, calibration, latency and memory numbers. |  | 2026-09-27 |
| [gowthxm07/Smart-Home-Automation-Using-Jev](https://github.com/gowthxm07/Smart-Home-Automation-Using-Jev) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-27 |
| [GreyssonEnterprises/s1-graphify-indexer](https://github.com/GreyssonEnterprises/s1-graphify-indexer) | 0 | 0 | 요약 대기 · System-1 codebase indexer: semantic code graphs from small zero-shot models (GLiNER default; Jev/Needle-compatible), with confidence-gated LLM escalation. 10-50x faster than LLM-based indexing. |  | 2026-09-25 |
| [Hanny445/PlacementTwin-AI](https://github.com/Hanny445/PlacementTwin-AI) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-26 |
| [hanzhi227/local-jev](https://github.com/hanzhi227/local-jev) | 0 | 0 | 요약 대기 · A local decision server with runnable examples and benchmarks. A local jev. |  | 2026-09-26 |
| [haxudev/jev-benchmark](https://github.com/haxudev/jev-benchmark) | 0 | 0 | 요약 대기 · 面向语义决策模型的中文言下之意评测集：100 道伴侣对话 Choice 题，支持本地 ONNX、Jev 官方 API 与内网模型对比 |  | 2026-09-24 |
| [hebertdev/jev-playground](https://github.com/hebertdev/jev-playground) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-25 |
| [hemanth090/hemanth090](https://github.com/hemanth090/hemanth090) | 0 | 0 | 요약 대기 · Config files for my GitHub profile. |  | 2026-09-27 |
| [HeshamAbourokaia/quran-text-analytics](https://github.com/HeshamAbourokaia/quran-text-analytics) | 0 | 0 | 요약 대기 · Interactive NLP and visualization platform for the Quranic corpus (114 surahs, 6,236 verses), with an experimental LLM-vision-judged Plotly chart auto-tuning loop. Vue 3 + Plotly + Electron. |  | 2026-09-27 |
| [hgavert/system-one-bench](https://github.com/hgavert/system-one-bench) | 0 | 0 | 요약 대기 · Hands-on experiments with open-source System One (Jev-style) decision models on an Apple M5: a zero-shot tweet-sentiment benchmark against local LLMs, and a study of how they play Snake. |  | 2026-09-27 |
| [hugues-vnsgn/jev-ios-bridge](https://github.com/hugues-vnsgn/jev-ios-bridge) | 0 | 0 | 요약 대기 · Bridge that lets Claude Code verify an iOS app on a simulator, with TypeSafe's Jev choosing each step (planning stage) |  | 2026-09-26 |
| [hypnguyen1209/jev-paseo](https://github.com/hypnguyen1209/jev-paseo) | 0 | 0 | 요약 대기 · model-agnostic typed-decision judge plugin for Paseo |  | 2026-09-25 |
| [ianlintner/auth-audit-jev](https://github.com/ianlintner/auth-audit-jev) | 0 | 0 | 요약 대기 · Shadow-mode Jev authn/authz event auditing and alert telemetry for OAuth2 and IAM |  | 2026-09-26 |
| [Inxo/duck-jev](https://github.com/Inxo/duck-jev) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-26 |
| [izzuddin8803/jev-showdown](https://github.com/izzuddin8803/jev-showdown) | 0 | 0 | 요약 대기 · Jev plays Pokemon Showdown: 40 battles, 940 decisions, reproducible results, and an annotated replay. |  | 2026-09-21 |
| [jaygajera17/JevPulse](https://github.com/jaygajera17/JevPulse) | 0 | 0 | 요약 대기 · Jev-powered consensus engine which Evaluates every YouTube comment individually to measure true audience agreement. |  | 2026-09-24 |
| [JevResearch/Jev-Research](https://github.com/JevResearch/Jev-Research) | 0 | 0 | 요약 대기 · Performance and architectural analysis of the new "Jev" model by TypeSafe AI. |  | 2026-09-27 |
| [jjlinucb/prompt-check](https://github.com/jjlinucb/prompt-check) | 0 | 0 | 요약 대기 · Live prompt grading and effort picks for the Claude app, powered by TypeSafe's Jev |  | 2026-09-25 |
| [jlov7/jev-decision-lab](https://github.com/jlov7/jev-decision-lab) | 0 | 0 | 요약 대기 · A local lab for seeing what TypeSafe's Jev judgment model does on realistic business cases: typed answers, probabilities, policy in code, receipts. |  | 2026-09-21 |
| [jtiemann/tense-circle](https://github.com/jtiemann/tense-circle) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-27 |
| [just-the-v/judge_rails](https://github.com/just-the-v/judge_rails) | 0 | 0 | 요약 대기 · Semantic judgments from TypeSafe Jev as self-maintaining ActiveRecord attributes: typed Noul, Choice and Score answers stored as indexable columns, with SQL scopes. |  | 2026-09-26 |
| [kanishka-namdeo/jev-rag](https://github.com/kanishka-namdeo/jev-rag) | 0 | 0 | 요약 대기 · Local-first hybrid RAG: traditional vs Jev-style (System One) pipelines over your own documents — with a built-in benchmark lab (6 scenarios, 48 questions, independent LLM judge). Hybrid won +8.4pp correctness at identical cost. |  | 2026-09-27 |
| [kobashi/jev-playground](https://github.com/kobashi/jev-playground) | 0 | 0 | 요약 대기 · Can a model that only returns typed judgments choose a melody? A call-and-response app, four evals, and the finding that writing a note as "7" or "C5" swings accuracy 34 points. |  | 2026-09-19 |
| [kp-algomaster/finetuning-laya-for-browser-agents](https://github.com/kp-algomaster/finetuning-laya-for-browser-agents) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-26 |
| [Mahad-007/jev-why](https://github.com/Mahad-007/jev-why) | 0 | 0 | 요약 대기 · Causal attribution and calibration for TypeSafe Jev decisions. Jev tells you what it decided; jev-why tells you why, and whether you should believe it. |  | 2026-09-24 |
| [marcosmartinez/jev-acento](https://github.com/marcosmartinez/jev-acento) | 0 | 1 | 요약 대기 · ¿Jev entiende tu acento? Pre-registered audit of TypeSafe AI's Jev on Spanish — accuracy, calibration and token cost — plus a CLI to run the same comparison on your own labelled data. |  | 2026-09-21 |
| [ms-codehorizon/forkery-case-study](https://github.com/ms-codehorizon/forkery-case-study) | 0 | 0 | 요약 대기 · Product case study: Forkery turns hundreds of recipe comments into one score from people who cooked it. BRD, PRD, architecture, decisions, and how it uses TypeSafe's Jev decision model, with an honest evaluation. Code is private. |  | 2026-09-26 |
| [ngallodev-software/agent-workflow-comparative-eval](https://github.com/ngallodev-software/agent-workflow-comparative-eval) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-28 |
| [nweii/tag-match](https://github.com/nweii/tag-match) | 0 | 0 | 요약 대기 · Match Obsidian notes to your tags with fast AI decisions shaped by your tagging system. |  | 2026-09-26 |
| [PlutoniaX/jev-demo](https://github.com/PlutoniaX/jev-demo) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-25 |
| [priorbench/jev](https://github.com/priorbench/jev) | 0 | 0 | 요약 대기 · Independent, pre-registered evaluation of TypeSafe AI's Jev. 5,721 calls, 21 experiments, 50 predictions registered before collection. Raw data included. |  | 2026-09-20 |
| [romanenko/nutrition-label](https://github.com/romanenko/nutrition-label) | 0 | 0 | 요약 대기 · A nutrition-style label for how websites treat your attention. Chrome extension prototype. |  | 2026-09-25 |
| [rssr25/sys1bench](https://github.com/rssr25/sys1bench) | 0 | 0 | 요약 대기 · Benchmark for typed System One decision models (Jev, Laya, and whatever comes next): calibration against a noise floor, framing sensitivity, selective prediction, ordinal fidelity, interference, robustness. pip install sys1bench. |  | 2026-09-23 |
| [rubinagentagi-tech/jev-heart-risk-bench](https://github.com/rubinagentagi-tech/jev-heart-risk-bench) | 0 | 0 | 요약 대기 · Benchmarking Jev (TypeSafe System One) on 5,000 real CDC survey respondents, with an interactive demo where every profile has a real model answer |  | 2026-09-20 |
| [shing1Sks/rerank-bench](https://github.com/shing1Sks/rerank-bench) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-26 |
| [Simon-zj1/jev-exam](https://github.com/Simon-zj1/jev-exam) | 0 | 0 | 요약 대기 · 用 Jev（TypeSafe System One 决策模型）把上传的学习材料变成可自动判分的自助考试：逐得分点判定、置信门控、错题本与薄弱点。支持 DeepSeek / 智谱 GLM / 通义千问 / Kimi / OpenAI / Claude 等自带 Key。Self-exam generator and point-level grader built on a decision model. |  | 2026-09-27 |
| [simonmesmith/jev-arc-agi-v1-experiment](https://github.com/simonmesmith/jev-arc-agi-v1-experiment) | 0 | 0 | 요약 대기 · Direct Jev on 400 public ARC-AGI-1 tasks: frozen method, exact results, cost, latency, and reproducible evidence. |  | 2026-09-18 |
| [sinkarusa/jevemu](https://github.com/sinkarusa/jevemu) | 0 | 0 | 요약 대기 · Open emulator of TypeSafe's Jev API on open models, plus a paired benchmark of local and hosted models against Jev |  | 2026-09-27 |
| [souvikr/jev-test](https://github.com/souvikr/jev-test) | 0 | 0 | 요약 대기 · Test harness + benchmark for TypeSafe's Jev decision model (noul/choice/score) via OpenRouter's Decisions API |  | 2026-09-19 |
| [STRML/omp-classifier](https://github.com/STRML/omp-classifier) | 0 | 1 | 요약 대기 · Model-judged permission gate for OMP: classifies bash commands and spawn-bearing eval payloads before they run, prompts on risk, fails closed |  | 2026-09-27 |
| [SYED-M-HUSSAIN/jev-experimental](https://github.com/SYED-M-HUSSAIN/jev-experimental) | 0 | 0 | 요약 대기 ·  What TypeSafe's Jev model can and can't do, as a runnable pytest suite. Includes the test where the API rejects an extraction request. Runs offline with recorded responses, no API key needed. |  | 2026-09-20 |
| [taifoon-io/jev](https://github.com/taifoon-io/jev) | 0 | 0 | 요약 대기 · Grade an AI agent's job with TypeSafe's Jev: did it do the work as the task laid it out? Facts first, Jev on your own key, a receipt, and optional on-chain records. |  | 2026-09-27 |
| [takemo101/pi-jev-continue](https://github.com/takemo101/pi-jev-continue) | 0 | 0 | 요약 대기 · Goal-scoped continuous development for Pi, judged by Jev. |  | 2026-09-27 |
| [TakumiNoguchi2004/jev-noul-vs-choice](https://github.com/TakumiNoguchi2004/jev-noul-vs-choice) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-21 |
| [tatsuya-tech77/umigame-jev](https://github.com/tatsuya-tech77/umigame-jev) | 0 | 0 | 요약 대기 · Sea Turtle Soup (lateral-thinking yes/no riddles) where the game master is Jev, a decision-only AI that returns probabilities instead of text. Humans vs Claude &amp; GPT. |  | 2026-09-27 |
| [theasylumagency/semantic-benchmark](https://github.com/theasylumagency/semantic-benchmark) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-27 |
| [thijmenkam/jev-benchmarks](https://github.com/thijmenkam/jev-benchmarks) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-18 |
| [ThomasRossi/fin-benchmark-jev](https://github.com/ThomasRossi/fin-benchmark-jev) | 0 | 0 | 요약 대기 · Benchmark TypeSafe Jev 1.13 vs Qwen 3.8 27B on constrained-output financial tasks |  | 2026-09-27 |
| [TimurHaryo/jev-toolkit](https://github.com/TimurHaryo/jev-toolkit) | 0 | 0 | 요약 대기 · Jev (TypeSafe AI) decisions in Claude Code hooks plus a benchmark harness. Zero-dependency Node. |  | 2026-09-27 |
| [TriusAI/Kapteeni](https://github.com/TriusAI/Kapteeni) | 0 | 0 | 요약 대기 · A Jev-compatible System One decision model |  | 2026-09-27 |
| [TYC-000/flight-deals-dashboard](https://github.com/TYC-000/flight-deals-dashboard) | 0 | 0 | 요약 대기 · Asia outer-port flight deals dashboard for KUL/CGK/BKK → Spain |  | 2026-09-27 |
| [UgurcanAkkok/yks-bench](https://github.com/UgurcanAkkok/yks-bench) | 0 | 0 | 요약 대기 · Benchmarking decision models (TypeSafe Jev, Convai Laya) on the 2026 Turkish university entrance exam — 593 questions, full controls, uncontaminated test set |  | 2026-09-22 |
| [vamsi80/jev-vs-llm](https://github.com/vamsi80/jev-vs-llm) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-25 |
| [vclic/smoking-extraction-benchmark](https://github.com/vclic/smoking-extraction-benchmark) | 0 | 0 | 요약 대기 · Synthetic smoking-history extraction benchmark comparing TypeSafe Jev and OpenAI structured outputs, with reproducible accuracy, cost, and latency results. |  | 2026-09-18 |
| [YukunHe304/whatitdid](https://github.com/YukunHe304/whatitdid) | 0 | 0 | 요약 대기 · See what an AI agent actually did, not just its score. Labels every step of a CLI agent's run and compares two rounds against the noise a re-run produces anyway. |  | 2026-09-19 |
| [zeuzmakessoftware/jever](https://github.com/zeuzmakessoftware/jever) | 0 | 0 | 요약 대기 · A desktop home for TypeSafe Jev. |  | 2026-09-25 |
| [softpudding/jev-frontier-100](https://github.com/softpudding/jev-frontier-100) | 1 | 0 | 요약 대기 · 100 original tasks comparing Jev with Qwen3.5 0.8B, 2B and 4B across three reasoning budgets; reproducible results and token logprobs. |  | 2026-09-19 |
| [ideas-to-life/jev-cv-jd-evaluator](https://github.com/ideas-to-life/jev-cv-jd-evaluator) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-26 |
| [jonascheng/jev-lab](https://github.com/jonascheng/jev-lab) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-25 |
| [may3rr/jev-verifier-eval](https://github.com/may3rr/jev-verifier-eval) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-27 |
| [Shivamowo/tug-of-words](https://github.com/Shivamowo/tug-of-words) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-25 |
| [vianaR25/jev-vs-ml](https://github.com/vianaR25/jev-vs-ml) | 0 | 0 | 요약 대기 · 설명 없음 |  | 2026-09-22 |

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

### SREGym/SREGym

<details><summary>README 발췌</summary>

SREGym is an AI-native platform to enable the design, development, and evaluation of AI agents for Site Reliability Engineering (SRE). The core idea is to create live system environments for SRE agents to solve real-world SRE problems. SREGym provides a comprehensive SRE benchmark suite with a wide 

</details>

### monteduro/killmyidea

<details><summary>README 발췌</summary>

Describe a startup idea. Jev decides: KILL IT, FIX IT or SHIP IT.

</details>

### sileod/tasksource

<details><summary>README 발췌</summary>

Huggingface Datasets is an excellent library, but it lacks standardization, and datasets often require preprocessing work to be used interchangeably. tasksource streamlines interchangeable datasets usage to scale evaluation or multi-task learning.

</details>

### fstandhartinger/jevbench

<details><summary>README 발췌</summary>

Combination experiments (confidence cascades, committees, and real-sample best-of-n) are reported in RESULTS-COMBINATIONS.md. None changed the ranked board.

</details>

### vinilana/jev-eval-agent

<details><summary>README 발췌</summary>

🇺🇸 English · 🇧🇷 Leia em português

</details>

### get-convex/convex-evals

<details><summary>README 발췌</summary>

Convex is an open-source, reactive database that's the best platform for full-stack AI coding.

</details>

### cookiespiggy/agentic-rl

<details><summary>README 발췌</summary>

&gt; 面向小白的 Agentic RL（智能体强化学习）系统教程 — 33 篇中文 Markdown + 两套可运行工程： &gt; TRL 最小示例（minimal-verl/）与判别模型三方对照实证（minimal-decision-bench/）。 &gt; &gt; 搜「Agentic RL 教程」「GRPO 入门」「LLM 强化学习」「verl TRL 实战」「Jev 与 RL 的边界」「System One 判别模型」「判别能力外置」都能找到这里。

</details>

### openlayer-ai/jevals

<details><summary>README 발췌</summary>

Evals and guardrails for agents, using Jev-style decision models instead of an LLM judge. All the evals for a trace go out as one request that costs a few thousandths of a cent and comes back in a few hundred milliseconds, so you can run them on every trace and inside the agent loop.

</details>

### danielgshea/jev-as-a-judge

<details><summary>README 발췌</summary>

Agent evaluators usually fall into two categories: deterministic code and LLM-as-a-judge. Code is fast and reliable but limited to behavior that can be expressed as explicit logic. LLM judges can evaluate open-ended agent behavior, but they add cost, latency, and variance.

</details>

### zwliJay/jev-forge

<details><summary>README 발췌</summary>

An end-to-end toolkit for synthesizing decision data, training calibrated candidate scorers, evaluating them, and serving Jev-compatible inference for interactive web decisions.

</details>

### chigwell/typesafe.pro

<details><summary>README 발췌</summary>

api.typesafe.pro is a simple HTTP endpoint for evaluating text and structured application state with TypeSafe System One models. Send a state and typed questions; receive structured answers with confidence and token usage.

</details>

### iammrduncan/typesafe-ai-benchmark

<details><summary>README 발췌</summary>

LLM-native structured output vs. TypeSafe Jev: latency, cost, and judgment quality.

</details>

### RenaGao/jev-dataops

<details><summary>README 발췌</summary>

A traceable pipeline for general and domain-specific data: upload → screen → evaluate data → train a model → evaluate the result.

</details>

### lukstei/slop-grader

<details><summary>README 발췌</summary>

Rule-based slop grader for text files, powered by Jev. Runs every rule against every line in parallel. No skimming, no missed lines.

</details>

### YuanKJing/Jev-as-Policy

<details><summary>README 발췌</summary>

This repository is a self-contained reproduction of the public Jev as Policy control structure. It includes the MuJoCo scene, Franka Panda assets, TypeSafe/Jev integration, continuous Cartesian servo, recording pipeline, and the studio-style web panel.

</details>

### JoshuaSP/open-jev

<details><summary>README 발췌</summary>

An experimental inference harness for typed JSON decisions with DiffusionGemma. Denoise freely, then choose the most likely allowed tokens from the final logits. No training or fine-tuning.

</details>

### bodepudimuneendra-netizen/laya-jev-GraphRAG

<details><summary>README 발췌</summary>

laya-jev-GraphRAG is a graph-database-agnostic Agentic GraphRAG framework — a production-ready intelligence layer you drop on top of your existing graph database to make it fully agentic. It doesn't replace your graph DB; it gives it a brain.

</details>

### AbdelStark/jev-benchmarks

<details><summary>README 발췌</summary>

Probability-aware evaluation for typed decision models.

</details>

### smkrv/jev-calibrate

<details><summary>README 발췌</summary>

Calibrate Jev questions against your own labels.

</details>

### PsiACE/dohnuts

<details><summary>README 발췌</summary>

Dohnuts builds small multimodal models for direct decisions. Give the model a message, a document, or an image, and ask it to choose, judge, or score. It returns probabilities in a single forward pass, with multiple questions sharing the same input. That is our take on System 1.

</details>

### Zaious/jev-capability-atlas

<details><summary>README 발췌</summary>

🇹🇼 中文（本頁）｜🇬🇧 English

</details>

### TKY-27/JevSlop

<details><summary>README 발췌</summary>

JevSlop asks TypeSafe Jev for a whole-article writing-quality judgment and eight detail signals. It shows a transparent AI Slop Score; it is not an AI-authorship detector. 日本語版

</details>

### rorshopping/jev-on-a-laptop

<details><summary>README 발췌</summary>

Unofficial research repo. Not affiliated with TypeSafe AI. This is a hands-on study of the parallel constrained decoding idea behind Jev — the "System One" model launched by Diogo Almeida's TypeSafe AI in Sep 2026 — reproduced on a stock, untrained small model, on an Apple Silicon laptop.

</details>

### stas4000/jev-linkmap

<details><summary>README 발췌</summary>

Rebuild a whole site's internal link map in seconds with Jev. Run Jev alone (System 1), or put Claude or Codex behind it as System 2 to train its rubric on your site. Includes a race against Claude Opus 5 on the same queue.

</details>

### oso95/x-scanner

<details><summary>README 발췌</summary>

Behavioral labels on every post you scroll past on X, judged by Jev, TypeSafe's System One model, with a counter in the corner showing exactly what it cost.

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

### linny006/agent-eval-harness

<details><summary>README 발췌</summary>

SEO: agent eval harness --&gt;

</details>

### AbdelStark/lejudge-jev-jepa

<details><summary>README 발췌</summary>

Natural-language constraints for JEPA world-model planning, judged by a decision model instead of an LLM.

</details>

### ziqi-jin/agent-to-trust

<details><summary>README 발췌</summary>

&gt; Don't trust an Agent. Test it.

</details>

### taodav/jev_deep_rl

<details><summary>README 발췌</summary>

Evaluate TypeSafe Jev as a policy in Gymnasium and Atari environments. Game-specific adapters convert observations into structured JSON; Jev selects a legal action through a single Choice question.

</details>

### us/jev-local

<details><summary>README 발췌</summary>

Local Jev-compatible evaluation server: POST /v1/systemone with typed noul / choice / score questions, probabilities, and confidence. No waitlist, no API key, no closed weights.

</details>

### caiovicentino/eikos-arena

<details><summary>README 발췌</summary>

Two decision models trade 14 Hyperliquid perpetuals with $10,000 of paper money each: Eikos-27B (open weights, MIT) against Jev (TypeSafe's decision API). Every 5 minutes both get the same market snapshot and the same 28 questions. Real prices, simulated money, no orders.

</details>

### mahlernim/jev-korean-benchmark

<details><summary>README 발췌</summary>

Can you use TypeSafe Jev on Korean text, or should you translate everything to English first? This is a small, frozen, reproducible check that tries to answer that — 100 questions per cell, drawn from four public test sets, with every response recorded. It is a sample check, not a benchmark: 100 que

</details>

### scienthoon/luce

<details><summary>README 발췌</summary>

Describe the decision. Supply your inputs or generate them with an LLM. Luce trains a LoRA + decision head on an open model and serves decision probabilities.

</details>

### y0usaf/jev-lm

<details><summary>README 발췌</summary>

A word-level language model whose output layer is Jev. Jev never emits text, so everything an LLM normally hides lives in this code: the tokenizer, the sampler, the repetition mask, the stop rule, and a verified-chunk path that stands in for a KV cache.

</details>

### 0xtrou/rubikjev

<details><summary>README 발췌</summary>

You scramble like a menace. Jev — the in-house AI solver — judges the chaos, roasts you, and cooks the solve live.

</details>

### collapseindex/dinostomp

<details><summary>README 발췌</summary>

View the still banner

</details>

### TokenTrim/jev-agent-failure-benchmark

<details><summary>README 발췌</summary>

Can a fast, cheap decision model find what broke an AI agent as well as a frontier LLM? This benchmarks Jev (Typesafe.ai) on the text subset of Who&amp;When Pro, an agent-failure-attribution benchmark: given a failed multi-agent run, predict the responsible agent, the decisive step, and the error type.

</details>

### apolinario/decision-index

<details><summary>README 발췌</summary>

Reproduction kit for the Decision Index, a benchmark for typed decision engines: models that take a state and a set of typed questions (multiple-choice choice or yes/no noul primitives with explicit criteria) and return one answer per question with a probability for every supplied option. It lets an

</details>

### ARCJ137442/jev-2048

<details><summary>README 발췌</summary>

|简体中文 | English| |:-:|:-:|

</details>

### brida-ai/reflexbench

<details><summary>README 발췌</summary>

Open benchmark and evaluation harness for System One models, typed decision models, and probabilistic decision engines.

</details>

### choxos/jevchess

<details><summary>README 발췌</summary>

Watch Jev, TypeSafe's System One model, play chess against any LLM on OpenRouter or against the Stockfish engine, or play Jev yourself. Every move is shown as it happens, with the moves Jev weighed and how likely it thought each one was, and every finished game is saved for replay.

</details>

### gemanor/jev-code-review-benchmark

<details><summary>README 발췌</summary>

Jev takes context and questions, then returns structured answers. TypeSafe calls it a System One model. This repo tests a practical use: give it Python code and four rules, and ask whether the code follows each rule.

</details>

### hndrr/ComfyUI-Jev

<details><summary>README 발췌</summary>

Custom nodes for using Jev's text interpretation and judgments in ComfyUI. Use natural-language instructions to select candidates, evaluate conditions, score text, or extract numbers, then pass the results to other nodes. Jev judgments use the TypeSafe API by default.

</details>

### MANISH007700/tab-bouncer

<details><summary>README 발췌</summary>

A Chrome extension that closes the tabs you don't need, based on what you say you're doing.

</details>

### abhishek085/JevControl

<details><summary>README 발췌</summary>

Find out whether a smaller model could handle some of your AI agent's routine choices.

</details>

### a-Fig/jev-score

<details><summary>README 발췌</summary>

TLDR: Jev-Score enables Claude to optimize writing in a loop against a deterministic evaluator (TypeSafe's Jev model) paired with natural language writing objectives.

</details>

### chenmingtang830/jevarena

<details><summary>README 발췌</summary>

JevArena is an open-source arena for testing Jev against another judge. Ask a question, choose possible answers and an opponent, then vote before the models, speed, and cost are revealed.

</details>

### dtunai/cu-Jev

<details><summary>README 발췌</summary>

One state in, many typed decisions out. Full C/CUDA, a little Python, no PyTorch at runtime.

</details>

### Gaurav-Gosain/jev-sec-bench

<details><summary>README 발췌</summary>

Blind security benchmarks for Jev, TypeSafe's System One model, built on jev-go.

</details>

### harrymunro/jev-laya-benchmark

<details><summary>README 발췌</summary>

Speed and accuracy of Jev (TypeSafe's hosted System One model, jev-1.13.0) against Laya (open-weight typed-decision models, run locally with MLX on Apple silicon), on 1,470 synthetic items across eight typed-decision tasks, plus controlled latency and throughput sweeps.

</details>

### instax-dutta/sysone-bench

<details><summary>README 발췌</summary>

An independent head-to-head benchmark of System One decision models. Laya (open weights), Jev (closed TypeSafe API) and Qwen with parallel constrained decoding (PCD) answer the same 1,190 cases and 1,550 typed questions in one run, from one sealed manifest, at one seed. Inputs are verified byte iden

</details>

### jvsteiner/jevex

<details><summary>README 발췌</summary>

Illustrated architecture explainer — the Jev/LLM split, a live research walkthrough, token accounting, and the limits exposed by the benchmark.

</details>

### soderlind/ai-provider-for-jev

<details><summary>README 발췌</summary>

Connect WordPress to TypeSafe's Jev — the first "System One" model. Instead of generating text, Jev evaluates a state against typed questions and returns structured answers your code can use directly.

</details>

### umstek/zero-shot-ie-bench

<details><summary>README 발췌</summary>

Fifty-three zero-shot systems (fifty of them benchmarked) across twenty-nine information-extraction and classification families — extractor encoders, a purpose-built classifier, cross-encoder rerankers, and typed-decision engines (local and cloud, the hosted ones behind OpenRouter's decision and rer

</details>

### waynesutton/ask-jev-ai

<details><summary>README 발췌</summary>

A public wall where anyone asks a question in three to fifteen words and Jev, TypeSafe's judgment model, answers yes, no, or it depends in about 100 milliseconds. Every judged ask lands on the wall in realtime, with a running count toward one million and the exact cost of getting there.

</details>

### ZJemYoung/jev-chat-windows-laya

<details><summary>README 발췌</summary>

Windows 版微信聊天副驾（上游 fork）：本地 laya 判断引擎免密钥运行 + 修复高缩放屏抓取错位 Windows fork of jev-chat: key-free local laya judge + DPI-aware screen capture fix

</details>

### johnhughes3/LegalForecastBench

<details><summary>README 발췌</summary>

LegalForecast-MTD tests whether frontier models can forecast federal motion-to-dismiss rulings from the judge's written record. It reports claim-defendant micro-Brier scores with clustered intervals.

</details>

### adambkovacs/candidate-experience-benchmark

<details><summary>README 발췌</summary>

How well can TypeSafe Jev and general-purpose language models classify feedback written by candidates about their hiring experience?

</details>

### allebee/pytest-jev

<details><summary>README 발췌</summary>

Test what your LLM app's output means, not the exact words.

</details>

### ArmanJR/Jev-Persian-Benchmark

<details><summary>README 발췌</summary>

Benchmarks for Jev on 480 authored general Persian questions and a 24-excerpt classical Persian poetry pilot (48 main questions plus 48 controls). Related general questions are batched; poetry questions run individually. Raw responses are saved and answers are scored locally, without a runtime model

</details>

### aryanchauhanoffical/no-hallucination

<details><summary>README 발췌</summary>

Three measured experiments on reducing hallucination in document Q&amp;A (RAG), including the first public evaluation of TypeSafe's Jev model inside a retrieval pipeline and a head-to-head against IBM Research's STAIR (structure-aware retrieval).

</details>

### azterizm/jev-vs-sovereign-benchmark

<details><summary>README 발췌</summary>

Benchmark suite evaluating TypeSafe AI Jev System One (model typesafe/jev-1.13 via OpenRouter) against a specialized sovereign architecture (DistilBERT, ColBERT-v2, DeBERTa-v3) across three retrieval nodes on UK primary legislation.

</details>

### cooper667/jev-browse

<details><summary>README 발췌</summary>

A Claude Code and Codex plugin that runs a checklist written in plain English in a real browser. Each line is an action ("Select the Generate Link button", Type "Acme" into the Name field) or a check ("Confirm the report lists three risks"). Playwright drives the browser; TypeSafe's Jev model, serve

</details>

### jgridifier/jev-research-eval

<details><summary>README 발췌</summary>

Reproducible evaluation harness for Jared’s Jev Ultrafast research-browser session (17 Sep 2026): 11 baseline cases (R1–R11), human + quant stress suites (S1–S10, QS1–QS8+QS7b), CoS-locked QC grades, the v4 HTML field note, and research notebooks (v1 baseline / v2 baseline+stress) with per-step Trac

</details>

### lianghsun/jev-tmmluplus-eval

<details><summary>README 발췌</summary>

Sit Jev — TypeSafe AI's System One Model — for TMMLU+ v1.1, the 66-subject Traditional Chinese benchmark, and score it the way the official leaderboard does.

</details>

### Libertai/deem

<details><summary>README 발췌</summary>

Typed, calibrated decisions from open weights. Deem reads your state — a policy, contract, ticket, or question — and returns a structured decision: choice (2–255 options), score (ordinal rubric), or yes/no with abstention. One forward pass. No streaming, no token soup.

</details>

### memovai/openevals

<details><summary>README 발췌</summary>

Online eval for agents. Grades every trace and every step of your production traffic with jev and writes the scores back into Langfuse. One process, one SQLite file, no code changes on your side.

</details>

### NicolasMontone/jev-evals

<details><summary>README 발췌</summary>

A rubric-based eval harness for LLM/agent outputs, backed by the typesafe-ai/jev evaluation model via the Vercel AI Gateway.

</details>

### realZachi/jevtest

<details><summary>README 발췌</summary>

Semantic test matchers for Vitest and Jest. You write the expectation in plain English, jevtest asks TypeSafe's Jev model one narrow question about the output, and the matcher turns the returned probability into a pass or a fail. Jev does not generate text. It answers typed questions and returns a c

</details>

### smithclay/dbt_jev

<details><summary>README 발췌</summary>

dbtjev evaluates SQL values with Jev through either TypeSafe AI's hosted API or OpenRouter. The same public macros work on DuckDB and ClickHouse. They expose Jev Choice as a nullable label, Noul as a nullable match probability, and Score as a nullable numeric rating.

</details>

### TypeSafeAI/clarity-judge

<details><summary>README 발췌</summary>

Evaluate writing against separate, named checks with TypeSafe AI's Jev: hedging, em dash overuse, clarity, filler phrases, tone, passive voice, and actionability. Inspect each verdict, confidence signal, and supporting sentence rather than relying on one opaque overall score.

</details>

### YidiDev/jev-benchmark

<details><summary>README 발췌</summary>

Does Jev (TypeSafe AI's rubric-conditioned classification model) genuinely read and apply a multi-clause rubric — and how does it stack up against two general-purpose LLMs (Claude Haiku 4.5, Claude Sonnet 5) and a free, self-hostable alternative (OpenJev), on both quality and price?

</details>

### zamax14/System-One-Playground

<details><summary>README 발췌</summary>

Benchmark de modelos de toma de decisiones sobre texto, con cinco demos para verlos decidir.

</details>

### hegargarcia/jev-playground

<details><summary>README 발췌</summary>

A playground for benchmarking TypeSafe AI’s Jev against other evaluation models in games with explicit states, legal actions, and measurable outcomes.

</details>

### adlternative/tally

<details><summary>README 발췌</summary>

Analyze social media comments with Jev. Percentages you can audit, in one request.

</details>

### andrewsilber/JevsBistro

<details><summary>README 발췌</summary>

A tiny 3D restaurant where the servers are run by rules or by an AI, so we can see who serves guests better.

</details>

### bydeng01/scientific-decision-eval

<details><summary>README 발췌</summary>

Scientific judgment tasks for decision programs: models answer discrete Choice questions, and deterministic code computes the downstream counts, relations, and claim labels. The S2 collection contains 20 groups, 40 scientific Choices, and one engineering Choice. Evaluation reports semantic correctne

</details>

### dipseth/decision-pipeline

<details><summary>README 발췌</summary>

A small TypeScript core for LLM features you can trace, tune and trust.

</details>

### g0runmezadam/jev-architecture-research

<details><summary>README 발췌</summary>

&gt; Black-box reverse engineering of the Jev decision model.

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

### kevinpita/pi-jev-context

<details><summary>README 발췌</summary>

A Pi extension that uses TypeSafe Jev to judge which older messages are still useful. Low-scoring content is hidden from future model requests, not deleted from your session.

</details>

### leepokai/llm-prompt-techniques-on-jev

<details><summary>README 발췌</summary>

Every LLM prompting technique that survives a model that never generates text, ported to TypeSafe's Jev as a DSPy extension and measured on BIG-Bench Hard, LegalBench, MMLU-Pro and CLERC.

</details>

### Little-Planet-Labs/jev-playground

<details><summary>README 발췌</summary>

A small Next.js app for experimenting with TypeSafe AI's Jev model (System One). Paste a state, build any mix of noul (yes/no probability), choice (pick from options), and score (rate against a rubric) questions, and see the typed answers, probability distributions, and confidence in one shot — all 

</details>

### robokrunch/jev-physical-ai

<details><summary>README 발췌</summary>

Real measured numbers putting TypeSafe's Jev to work on robots, fleets, and edge hardware.

</details>

### rongxinzy/LightJev

<details><summary>README 발췌</summary>

Train small language backbones to make typed decisions.

</details>

### sathariels/jevcheck

<details><summary>README 발췌</summary>

pytest for Jev. Pin what production is allowed to do, eval a candidate model, and fail the upgrade when answers flip or confidence drops.

</details>

### scarif-labs/jev-software-decision-benchmark

<details><summary>README 발췌</summary>

Independent benchmark of JEV for dependency-update automation under distribution shift.

</details>

### stas4000/jev-geo-audit

<details><summary>README 발췌</summary>

Audits 300 public web pages for citability (will an AI assistant quote this page) with nine Jev decisions per page, then asks a strong chat model the same questions to measure whether the cheap answers match the expensive ones. GEO is generative engine optimization.

</details>

### stperic/jev-medhallu-benchmark

<details><summary>README 발췌</summary>

Benchmarks of TypeSafe's Jev 1.13, a "System One" model that answers typed questions about text with probabilities instead of generating text, against LLMs on medical tasks. Every model, Jev included, is called through OpenRouter, so one key pays for everything and every latency includes the same ga

</details>

### VladyslavHontar/clear-head

<details><summary>README 발췌</summary>

A Claude Code Stop hook that checks the factual claims in an AI assistant's answer against the evidence it actually read that session, using TypeSafe's Jev as a fast, cheap, calibrated judge. If a claim is contradicted by, or unsupported by, what was read, the turn is blocked with the specific claim

</details>

### zsavage8/padflow-jev-evals

<details><summary>README 발췌</summary>

A small, public benchmark of the decisions PadFlow makes inside software.

</details>

### 4esv/jev-eval

<details><summary>README 발췌</summary>

Benchmark TypeSafe Jev against any OpenRouter model or a local checkpoint on labelled classification data: accuracy, calibration, confidence distribution, latency, cost. Ships five tasks; the results below are Jev, GPT-5.6 Terra, and three open Jev-shaped models.

</details>

### abhibansal60/tidy

<details><summary>README 발췌</summary>

Clean up your Gmail inbox and your YouTube subscriptions with AI, without letting AI loose on your account.

</details>

### AliceRoselia/Typesafe_chess_eval

<details><summary>README 발췌</summary>

An evaluation of typesafe AI chess. As it turns out, the AI isn't doing really well, even though chess is not a particularly open-ended game.

</details>

### AppChainAI/Jevatar

<details><summary>README 발췌</summary>

An AI companion that replies only with facial expressions. You type; Jev (TypeSafe System One) judges your message and picks 1 of 16 moods (14 built-in expressions plus a custom double-nod yes and head-shake no); blobatar morphs its face. No text replies or visible chat history; recent turns are kep

</details>

### asp616848/better-jev-for-all

<details><summary>README 발췌</summary>

An open, self-hostable "System One" decision model — an API-compatible alternative to TypeSafe AI's Jev, with real third-party benchmark numbers to back it.

</details>

### beingcognitive/jev-go

<details><summary>README 발췌</summary>

A new decision AI that plays Gomoku, Go and chess. Can you beat it?

</details>

### beingcognitive/jev-songwriter

<details><summary>README 발췌</summary>

A model that cannot write a single note wrote these songs. Jev, TypeSafe AI's decision model, only ever picks one option from a list. So code lays out the bars and the legal notes, and Jev chooses: which chord, which note, how long. One call per decision, every call recorded, every song replayable o

</details>

### blas0/jev-shadcn-lint-eval

<details><summary>README 발췌</summary>

This checks shadcn-ui/lint (commit 53de86f) with TypeSafe's Jev model (jev-latest). The repo's own eval measures how agents style UI before and after lint feedback. This one asks Jev whether each lint result is right and whether its message tells you what to change.

</details>

### brandonbryant12/transcript-scorecard

<details><summary>README 발췌</summary>

Transcript Scorecard is a runnable proof of concept for evaluating ACME support calls against a weighted employee scorecard. Its live replay reveals a realistic transcript about once per second and schedules a real TypeSafe AI evaluation for every new turn. When an evaluation is still running, incom

</details>

### carlaiau/can-jev-play

<details><summary>README 발췌</summary>

Can Jev find an edge—or does it follow luck?

</details>

### clduab11/jev-test

<details><summary>README 발췌</summary>

A small model on a laptop writes the answers. A separate judge model, TypeSafe's Jev (jev-1.13.0), makes every call the small model is bad at: whether to search, which pages count, whether there is enough evidence, and whether each sentence is backed by what it cites. SearXNG finds the pages and Mem

</details>

### codeitlikemiley/system-one-adapter-rust

<details><summary>README 발췌</summary>

A drop-in replacement for TypeSafe's systemone evaluation API, backed by LLM APIs instead of TypeSafe.

</details>

### dayhaysoos/jevals

<details><summary>README 발췌</summary>

A local workbench for testing Jev questions against examples with expected answers. Create evaluations, run them, and compare saved results.

</details>

### DECRUX9812/openjev-lm

<details><summary>README 발췌</summary>

A 0.5B model that reproduces a hosted decision model's judgment, trained overnight on a CPU, for $0.

</details>

### Dililianxice/jev-inner-speech-bci

<details><summary>README 발췌</summary>

This project started with a practical question rather than a new decoder architecture:

</details>

### dtduc-git/jev-packs

<details><summary>README 발췌</summary>

Questions-as-data for Jev-compatible decision endpoints: curated question sets, golden cases, pinned model versions, measured evidence — and an independent benchmark (Jev Bench) scoring several backends on the same ground truth.

</details>

### ElshinQ/jevaluate

<details><summary>README 발췌</summary>

A free tool that lets a cheap AI test your web app like a person would, and stop to ask a human whenever it isn't sure.

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

### gargpratyush/journey-evals

<details><summary>README 발췌</summary>

Drive a real browser — or a real AI agent — through one declared user journey, and report what actually happened.

</details>

### getainode/jebadiah

<details><summary>README 발췌</summary>

Jebadiah (Jeb for short) is an open decision model. It answers small typed questions about a piece of structured state, and instead of writing text it returns a calibrated probability over the allowed answers. This repository holds everything needed to reproduce it: the trainer and evaluator, the da

</details>

### HackSing/jev-report

<details><summary>README 발췌</summary>

两千多万人围观的 Jev，我用中文测了 50 条。

</details>

### hamakyo/jev-mahjong-bench

<details><summary>README 발췌</summary>

Jev vs GPT for riichi mahjong decisions and paired games

</details>

### Hanno-Labs/decision-bench

<details><summary>README 발췌</summary>

Smoke-test a supported decision model on the pinned benchmark. This example uses Bosun v3.1 0.6B, whose native decision-token readout is supported directly by run-hf.

</details>

### Hexdigest123/typesafe-comment

<details><summary>README 발췌</summary>

Lint code comments with TypeSafe AI's System One model. Comments are scored on five heuristics (usefulness, readability, accuracy, redundancy, coverage); those below thresholds emit linter warnings and exit non-zero so pipelines block.

</details>

### jacobjerryarackal/Jev-vs-Human-Deep-Space-Interceptor

<details><summary>README 발췌</summary>

An interactive real-time space duel benchmarking Human Biological Reaction Latency (~240ms) against TypeSafe Jev System 1 Decision API (~100ms).

</details>

### jjd-lab/jev-synthetic-survey

<details><summary>README 발췌</summary>

Visual explainer — read it as a page, with the walkthrough and the figures.

</details>

### JYeswak/jev_playground

<details><summary>README 발췌</summary>

Jev is TypeSafe's System One model for typed judgments. Give it a JSON state and a typed question; get a choice, score, or true/false value with probabilities and confidence. Jev does not generate prose. Your code owns the threshold, the safe side, and the action taken when an answer is malformed or

</details>

### Kaos599/jev-writer

<details><summary>README 발췌</summary>

Find out which qualities of your writing actually predict engagement.

</details>

### liu-x27/XavierJev

<details><summary>README 발췌</summary>

An agent loop is full of small decisions nobody wants to wait for or read a paragraph about: may this command run without asking, which model should take this request, is this error worth one more try, is this run going anywhere. XavierJev answers them as typed questions — yes or no, one of n, a poi

</details>

### llt22/jev-lab

<details><summary>README 발췌</summary>

&gt; A curated map of Jev / TypeSafe System One resources, real-world use cases, and reproducible benchmarks.

</details>

### mameli/jev-vs-luna

<details><summary>README 발췌</summary>

A small, reproducible English benchmark comparing ~typesafe/jev-latest through OpenRouter's Decisions API with openai/gpt-5.6-luna through its chat completions API. Both receive the same review text and the same English classification rubric: topic, sentiment, inferred stars, whether a reply is need

</details>

### Maxi91f/jev_testing

<details><summary>README 발췌</summary>

A research note with runnable experiment scripts on failures observed in Jev jev-1.13.0 through its structured-question API on September 17–18, 2026.

</details>

### Menny1337/jev-lab

<details><summary>README 발췌</summary>

A small Node.js TypeScript CLI for trying TypeSafe's Jev model with synthetic support text. Run one urgency question, ask 3 questions in one request, or compare their request latencies. There is no web server or user interface.

</details>

### mionax/decisionops

<details><summary>README 발췌</summary>

Jev thinks. Your code acts. Measure the decision before it becomes a branch.

</details>

### patryckalves/jev-no-enem

<details><summary>README 발췌</summary>

Primeiro benchmark público avaliando o modelo Jev (TypeSafe AI) em exames padronizados brasileiros. Investigamos a transição do paradigma autorregressivo tradicional (LLMs generativas) para o paradigma System One (decisão tipada paralela, latência ultrabaixa e calibração de confiança via RLCD) aplic

</details>

### PromtEngineer/system1-vs-system2

<details><summary>README 발췌</summary>

This repository has the experiment from the video System 1 vs System 2 AI Models, Explained. It compares a one-pass model with a thinking model on questions that need more and more steps. You can run it yourself for about $0.10.

</details>

### Shakibuzzaman3104/claude-jev-funnel

<details><summary>README 발췌</summary>

A Claude Code plugin for bulk, calibrated decisions: judge a batch of items with TypeSafe's Jev model, resolve the confident ends in code, and send only the uncertain band to Claude or a human.

</details>

### shimo4228/jev-research-pipeline

<details><summary>README 발췌</summary>

A daily research monitor for your open questions: code owns the loop, Jev (a judgment-only model) judges, an LLM you choose writes.

</details>

### shyamsridhar123/JudgeJev

<details><summary>README 발췌</summary>

Try an evaluation, inspect the judge's raw response, and experiment with release gates and drift alerts.

</details>

### simonmesmith/jev-bbq-experiment

<details><summary>README 발췌</summary>

We evaluated Jev 1.13.0 on all 58,492 public BBQ questions. It answered 56,900 correctly (97.28%): 99.96% when the passage did not provide enough information, and 94.60% when it did. The complete main evaluation cost an estimated US$0.3429 and took 7.75 minutes.

</details>

### STRML/omp-jevens-classifier

<details><summary>README 발췌</summary>

Jev-judged permission checks for OMP's bash tool, and for eval payloads that spawn processes.

</details>

### Tenkei/jev-decision-bench

<details><summary>README 발췌</summary>

jev-decision-bench evaluates conventional language models on tasks designed around TypeSafe JEV's bounded-decision interface. It is not a general LLM leaderboard and it does not ask JEV to take benchmarks designed for free-form text generation.

</details>

### thejoeejoee/git-judge-commits

<details><summary>README 발췌</summary>

Judge every commit in a range — and catch the ones whose message lies about the diff.

</details>

### TheWayWithin/jev-bench

<details><summary>README 발췌</summary>

Does the source actually say it? A 42-claim benchmark for one narrow job: given a sentence that makes a claim and the passage it cites, decide whether the passage supports the sentence as written.

</details>

### VBS2004/jevcut

<details><summary>README 발췌</summary>

Turn a long video into short clips that stand on their own — for Shorts, Reels, TikTok, or just a highlights reel. One command in, ranked mp4s out.

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

### yldm-tech/loom

<details><summary>README 발췌</summary>

English · 简体中文 · 日本語 · 한국어 · Español · Français · Deutsch · Português

</details>

### Zafer-Liu/jev-xiangqi

<details><summary>README 발췌</summary>

Play Chinese Chess against Jev. Every AI move is chosen by fanning out a Score 0-4 question per legal move in a single systemone() call — no minimax, no eval tables, just Jev's read of the position.

</details>

### zandy700/Jev-Assistant

<details><summary>README 발췌</summary>

Jev reads the open chat, judges what the other person wants, and suggests three replies. You choose one. Jev fills the box. You press send.

</details>

### ZhaoFuheng/SWAN-AISQL

<details><summary>README 발췌</summary>

aifilter / aiclassify / aiscore / aicomplete / aiagg / aiembed / aiimage for DuckDB, plus an optimizer and executor built around factorized ("two-currency") execution: every LLM call runs once per distinct input, joins over AI predicates evaluate the distinct pair domain without materializing the cr

</details>

### abe75ch/tiltmeter

<details><summary>README 발췌</summary>

Notices your Jev decisions tilting before anything visibly breaks.

</details>

### adrianhaj/lotto-jev

<details><summary>README 발췌</summary>

Research project for Polish Lotto 6/49. The question it answers: does any repeatable signal exist in the draw history beyond a fair random baseline? It uses supervised ML, statistical baselines, a leakage-safe walk-forward backtest, and an exact hypergeometric null with z-scores and p-values.

</details>

### dfranco-projects/jev-guardbench

<details><summary>README 발췌</summary>

Can a System One model stand in for the LLM-as-judge in agent guardrail callbacks? Candidates are TypeSafe's hosted Jev and the open-source Kev, which uses the same API. Replacing the judge in beforemodel and aftermodel checks would only make sense if it were much faster with no loss in detection qu

</details>

### gbesse/decision-workbench

<details><summary>README 발췌</summary>

From a sourced document to a reviewed, exportable Jev decision.

</details>

### Holovkat/jev-mark

<details><summary>README 발췌</summary>

This workspace builds the thecodacus/llama.cpp parallel-decision branch and runs its decision endpoint against the locally installed Ollama gemma4:12b GGUF blobs.

</details>

### laguagu/jev-rerank-bench

<details><summary>README 발췌</summary>

Benchmarks of TypeSafe Jev on Finnish text: where a model that returns a probability instead of generated text earns its place in search, classification and citation checks. The guidance distilled from these runs is jev-skills.

</details>

### nadeem4/jev-demo

<details><summary>README 발췌</summary>

Demos built on Jev, TypeSafe AI's System One decision model, and Laya, an open-source alternative.

</details>

### NixDow/TSJEV-Allen

<details><summary>README 발췌</summary>

A small reproducible benchmark comparing:

</details>

### postfunctional-org/reading-the-state

<details><summary>README 발췌</summary>

A benchmark of decision models on three games with exact ground truth: TextWorld, a roguelike and Minesweeper. Each model is scored against the best state-blind policy, a fixed rule that never reads the board.

</details>

### qualiteg/jev-typesafe-demo

<details><summary>README 발췌</summary>

Sample code for the Qualiteg Blog article 「Jev の特徴とその実力 ～ 301 回 API を呼んで確かめてみた」 (https://blog.qualiteg.com/jev-typesafe-ai-pricing-python-hands-on/).

</details>

### TheChyeahhh/tarnlight

<details><summary>README 발췌</summary>

A flight recorder for Jev, an AI model sold by the company TypeSafe. Tarnlight records the answers your apps get from Jev, shows them live and lets you grade them, so you learn how far to trust Jev on your own questions.

</details>

### 0xmdinc/jev-medical-bench

<details><summary>README 발췌</summary>

A small benchmark comparing a decision model (Jev by TypeSafe AI, which returns a typed choice, score or yes/no probability instead of generating text) with general chat LLMs on medical decision tasks.

</details>

### 3zcurdia/pumabench

<details><summary>README 발췌</summary>

What happens when an LLM takes the UNAM admission test?

</details>

### 4nt0ineB/typed-decision-bench

<details><summary>README 발췌</summary>

A small benchmark on one question: does Jev, TypeSafe's zero-shot classification model, hold up in French? And how does it compare, in English and in French, to the alternatives you could use instead?

</details>

### Adilmp/does-jev-confidence-mean-anything

<details><summary>README 발췌</summary>

An audit of the probabilities returned by TypeSafe's Jev, measured against human annotations rather than another model's opinion.

</details>

### Adityakhalkar/JevEye

<details><summary>README 발췌</summary>

A CNN reports what it sees, with a calibrated confidence or an abstention. Jev judges what that means.

</details>

### agrogov/jev-system-one-study

<details><summary>README 발췌</summary>

This repository combines the complete research artifact in one self-contained tree: a black-box study of TypeSafe Jev / System One, plus controlled replays of the same benchmark against two open typed-decision systems: the Laya typed-decisions model and SemIf (Qwen3.5-4B).

</details>

### Alifdaal/classroom-pulse

<details><summary>README 발췌</summary>

A teacher asks one question. Students answer from their phones. Every answer is judged by TypeSafe's Jev in a single typed request, and the room's misconceptions show up live on the teacher's screen.

</details>

### Alpha-Harper-Franklin/jev-multimodal

<details><summary>README 발췌</summary>

Make typed decisions over images, documents and speech. Share visual computation across questions, then combine evidence in Jev.

</details>

### amansahani/jev-laya-openai-comparison

<details><summary>README 발췌</summary>

A reproducible benchmark suite and pure PyTorch / HuggingFace inference pipeline comparing Non-Autoregressive System 1 Decision Models (TypeSafe Jev and Laya) against Autoregressive Language Models (OpenAI gpt-5.6-luna / gpt-4o-mini).

</details>

### andreaserradev-gbj/jev-access-day

<details><summary>README 발췌</summary>

&gt; Learning project, not a benchmark. This repo exists for learning and &gt; informative purposes only. Everything here was produced by one person on a &gt; hobby scaffold with small sample sizes (24 decisions, 12-case flows, N=5 &gt; probes) — treat every number as anecdote, not evidence. Nothing here is &gt; e

</details>

### arunmettle/prop-firm-helper

<details><summary>README 발췌</summary>

A privacy-first web app for prop-firm traders. Log trades in seconds, run a pre-trade check against your own rules, see what you actually do after losses, and simulate your evaluation thousands of times to find the behaviour that decides the outcome.

</details>

### Ascurse/typed-judge-kit

<details><summary>README 발췌</summary>

Typed questions to a model, one batched call, a verdict computed in your code, thresholds calibrated on your own labels.

</details>

### Ash20pk/beat-the-reviewer

<details><summary>README 발췌</summary>

Ten things you need approved. A reviewer that has to be convinced.

</details>

### atmaneayoubdev/evalcascade

<details><summary>README 발췌</summary>

Open-source adaptive evaluation for LLM, RAG and agentic systems. System One judges first. LLMs only when necessary.

</details>

### autotelic/joggle

<details><summary>README 발췌</summary>

Cross-file judgements for a TypeScript codebase, enforced like a linter.

</details>

### bebe0307mz/jevs-kitchen-chaos

<details><summary>README 발췌</summary>

Live: https://jevs-kitchen-chaos.vercel.app

</details>

### bhushankinge/jev-laya-classification-bench

<details><summary>README 발췌</summary>

Typed-decision models versus a 35B LLM on a real classification job: 12,000 U.S. federal IT solicitations, graded against what a reseller actually quoted.

</details>

### BingelsWorth/JudgeJev

<details><summary>README 발췌</summary>

She aint ready yet, but im seeing 25% better coding benchmark scores with .7 temp at 3 concuurent callss. probably be real good with bonsai's qwen 3.8 27b, maybe 12gb card 60k token with shared prefil.

</details>

### BipinRajC/Jev-api-experiments

<details><summary>README 발췌</summary>

An empirical research repository for understanding and evaluating TypeSafe's Jev System One model.

</details>

### blowxian/jev-fanout-bench

<details><summary>README 발췌</summary>

A reproducible measurement of one claim about Jev, TypeSafe AI's System One decision model:

</details>

### brian-w-zhang/askjev

<details><summary>README 발췌</summary>

A tree that has a place for every closed question a human or a program could ask (yes/no, pick one, rate on a scale), filled with real questions answered by Jev, TypeSafe AI's System One model. The goal is to understand Jev: its capabilities, its defaults, and where its judgments are jagged. It is n

</details>

### carlaiau/judge-jev

<details><summary>README 발췌</summary>

Judge Jev is a TypeScript research project testing Jev's Choice, Score, and Noul primitives as relevance judges.

</details>

### ChenneyZhuang/ChenneyZhuang

<details><summary>README 발췌</summary>

Building local-first AI — open-weight decision models and the harnesses that make them actually useful, running entirely on your own hardware. No cloud dependency, no data leaving the machine, no per-call billing.

</details>

### chepyle/jev-test

<details><summary>README 발췌</summary>

A reproducible zero-shot benchmark of Jev on all seven LexGLUE tasks. It freezes official evaluation examples, sends typed decisions through OpenRouter, checkpoints every completed request, and writes micro/macro-F1, usage, and cost reports.

</details>

### Clementtang/jev-eval

<details><summary>README 발췌</summary>

測試 TypeSafe 的結構化判斷模型 Jev（jev-1.13.0）在台灣主權相關題目上的立場，並以 Claude Sonnet 5、Claude Opus 5 為對照。

</details>

### Codeenk/sev

<details><summary>README 발췌</summary>

Small Jev-like decision models you can train and run yourself.

</details>

### codenamev/ruby_llm-providers-laya

<details><summary>README 발췌</summary>

The :laya provider for RubyLLM. It answers RubyLLM::Judge questions from a model running in your own process.

</details>

### CodyQin/zh-decision-bench

<details><summary>README 발췌</summary>

A calibration benchmark for "System One" decision models on Chinese tasks — measuring not just whether the model picks the right answer, but whether the probabilities it reports can be trusted.

</details>

### criguex/jev-test-impact

<details><summary>README 발췌</summary>

Run only the tests your change touched, without betting your release on a guess.

</details>

### crzyc0d3r/jev-agent-judge

<details><summary>README 발췌</summary>

Evaluate a refund-support agent's recorded runs with Jev — a model that answers a fixed set of typed questions about some state and returns numbers your code can use directly — and record every judgment as an Opik experiment.

</details>

### cwjechw98-lang/jev-gates

<details><summary>README 발췌</summary>

Evidence before “done”. Six tools and eight skills for DeepSeek Harness, with a portable Node.js verification core.

</details>

### cx295410-dot/jev-biomedical-evidence-screening

<details><summary>README 발췌</summary>

Public data and analysis for Evaluating Jev for biomedical evidence screening: discrimination, calibration and high-recall workload.

</details>

### dataelvisliang/jev-as-a-judge-scaffold

<details><summary>README 발췌</summary>

A minimal, runnable scaffold of the cascade idea from "JEV-as-a-Judge: Accept When Confident, Escalate When Unsure" (Yubo Li, Yidi Miao, Ramayya Krishnan, Rema Padman, Carnegie Mellon University, arXiv:2609.26550, September 2026).

</details>

### davidzna/better-cheaper-llm

<details><summary>README 발췌</summary>

Make RAG pipelines and LLM apps faster and cheaper by moving the yes/no decisions an LLM makes (relevance grading, query routing, hallucination checks, LLM-as-a-judge evals) to Jev, TypeSafe's System One decision model. Measure first, then switch.

</details>

### DeccansoftAITeam/jev-model

<details><summary>README 발췌</summary>

Sample code and learning material for Jev, TypeSafe AI's System One decision model. Jev answers structured questions (yes/no, multiple choice, rubric scores) with calibrated probabilities instead of generated text.

</details>

### DowLucas/browser-jev

<details><summary>README 발췌</summary>

Adversarial browser exploration. Playwright drives the clicks, but no script decides where they go. Jev decides where to go next and whether each page state looks broken.

</details>

### dtduc-git/jevassert

<details><summary>README 발췌</summary>

Regression tests for Jev question packs: assert accuracy, calibration and cost in CI, with recordings so runs are deterministic, free and rate-limit free.

</details>

### DuvInc/jev-table-import-mapper

<details><summary>README 발췌</summary>

Your users upload a CSV. Its columns are never your columns. This maps them, and tells you how sure it is.

</details>

### effective-shipping/slop-fold

<details><summary>README 발췌</summary>

A browser extension that folds LinkedIn posts that read like they were written by ChatGPT.

</details>

### eggmasonvalue/jev-takes-mauboussin

<details><summary>README 발췌</summary>

Evaluating TypeSafe's System One model (Jev, trained via RLCD on 100% synthetic data) against Michael Mauboussin's 50-question confidence calibration test from The Success Equation (confidence.success-equation.com).

</details>

### erendikmenn/jev-llm-router-benchmark

<details><summary>README 발췌</summary>

Jev ile üretimden önce model rotası seçen ve üretimden sonra kod değişikliğini accept, revise, escalate veya block olarak değerlendiren bağımsız açık kaynak proje. Router ve judge karar verir; uygulamayı yapan model değildir.

</details>

### f418me/jev-evaluations

<details><summary>README 발췌</summary>

An executable evaluation of Jev through TypeSafe and Pydantic AI using FOMC announcements: define structured answers, provide expectations and statement text, inspect field confidence, and derive a traceable decision in Python.

</details>

### finnhll/jev-eval

<details><summary>README 발췌</summary>

A harness for validating Jev's three primitives - Choice, Score and Noul - through OpenRouter's Decisions API (POST /api/alpha/decisions, model ~typesafe/jev-latest).

</details>

### fly2abhishek/jev-field-tests

<details><summary>README 발췌</summary>

Twelve exploratory scenarios and a follow-up comparison against Jev, TypeSafe's model that answers typed questions with probabilities and cannot write text. Run them with your own API key and compare your numbers with mine.

</details>

### force416/veil

<details><summary>README 발췌</summary>

A Chrome extension that uses Jev to hide replies under X / Twitter posts that match a condition you describe in plain language. Vanilla JavaScript, Manifest V3, no build step, no runtime dependencies.

</details>

### frederico-kluser/jev-agent-skill

<details><summary>README 발췌</summary>

Agent Skill de decisão rápida com o modelo Jev (System One da TypeSafe) via OpenRouter. State + perguntas tipadas (noul/choice/score) entram; decisões com probabilidades calibradas e bandas de ação saem — em milissegundos, sem geração de texto.

</details>

### gabazureus/jev-ragcheck

<details><summary>README 발췌</summary>

RAG evaluation with typed decisions. It points to the exact sentence that is hallucinated and the passage behind each verdict, in one call per answer.

</details>

### gabazureus/jevextract

<details><summary>README 발췌</summary>

Grounded information extraction that cannot hallucinate. Code proposes the spans, Jev decides. An open-source alternative to LangExtract.

</details>

### gdchaochao/lunar-terminal

<details><summary>README 발췌</summary>

Code and raw data behind Lunar Terminal — a channel that tests AI tools instead of repeating their marketing.

</details>

### goodboybeau/system-one-playground

<details><summary>README 발췌</summary>

Run the new wave of decision models side by side on your Mac: Laya, Decider, Kev, and TypeSafe's Jev. Structured input goes in and calibrated probabilities come out. You get honest numbers for accuracy, calibration, latency, CPU and memory.

</details>

### gowthxm07/Smart-Home-Automation-Using-Jev

<details><summary>README 발췌</summary>

HomeMind is a final-year engineering student research and simulation project designed to study and evaluate how a decision-oriented AI system (such as Jev) compares with conventional Large Language Models (LLMs) in handling complex, multi-device smart home automation.

</details>

### GreyssonEnterprises/s1-graphify-indexer

<details><summary>README 발췌</summary>

s1-graphify-indexer streams git-tracked source, extracts candidate files, symbols, imports, calls, and relation pairs, then asks TypeSafe Jev 1.13 to judge those candidates. It does not download or run local models.

</details>

### Hanny445/PlacementTwin-AI

<details><summary>README 발췌</summary>

&gt; PlacementTwin AI is an enterprise-grade, full-stack placement readiness platform that constructs a real-time 8-Dimensional Digital Twin of engineering candidates, pinpoints root-cause skill gaps against top tech benchmarks (Google, Amazon, Microsoft), and provides closed-loop AI coaching across co

</details>

### hanzhi227/local-jev

<details><summary>README 발췌</summary>

JEV local runs a JEV-compatible decision server on your machine using SemIf and Qwen3.5-4B. Send questions about text or structured data over HTTP to get typed answers with probabilities. This repo includes examples you can run and a benchmark suite.

</details>

### haxudev/jev-benchmark

<details><summary>README 발췌</summary>

面向语义决策模型的中文评测集：100 道婚恋送命题多轮对话，检验模型能否结合上下文读出真实意图。

</details>

### hebertdev/jev-playground

<details><summary>README 발췌</summary>

Playground interactivo para explorar JEV, el modelo de evaluación "System One" de TypeSafe AI. JEV evalúa preguntas tipadas (choice, score, noul) contra un estado y devuelve decisiones estructuradas con probabilidades calibradas — sin generación de texto, sin parseo.

</details>

### hemanth090/hemanth090

<details><summary>README 발췌</summary>

&gt; ai engineer · agent runtimes &amp; evals. &gt; building stateful multi-agent systems, running eval harnesses, and learning Go to build resilient runtimes.

</details>

### HeshamAbourokaia/quran-text-analytics

<details><summary>README 발췌</summary>

Daleel (دليل) is Arabic for evidence, and for guide: check any claim about the Quran's words against the corpus itself, then find your way through the text.

</details>

### hgavert/system-one-bench

<details><summary>README 발췌</summary>

Decider 2B, an open 2B System One model, playing Snake zero-shot in the local demo (08snakeserver.py): every move is one typed question, answered with a probability per option.

</details>

### hugues-vnsgn/jev-ios-bridge

<details><summary>README 발췌</summary>

Check an iOS app the way a person reads its screen. You write a script: taps, typing, swipes, waits, and checkpoints with claims like "The order total reads $5". The bridge runs it on a simulator through MobileBuildMCP, TypeSafe's Jev model judges each claim against the screen's text, and you get on

</details>

### hypnguyen1209/jev-paseo

<details><summary>README 발췌</summary>

A Paseo plugin for making small, typed decisions inside a coding session. Which fix is safer? Is the diff risky enough to block? You queue the question, then pick the answer yourself or hand it to a model. The result shows up as a card in the session timeline: a probability with a confidence band.

</details>

### ianlintner/auth-audit-jev

<details><summary>README 발췌</summary>

An experimental observation-only Python EventPlugin for OAuth event envelopes and explicitly mapped IAM authn/authz outcome events. It evaluates allowlisted event kinds asynchronously and optionally emits a small advisory alert. It never blocks, denies, grants, or changes an OAuth flow. Do not put a

</details>

### Inxo/duck-jev

<details><summary>README 발췌</summary>

This extension lets you ask typed questions to the TypeSafe AI Jev model (System One) directly from SQL, through the HTTP API POST /v1/systemone, and get the answers back as regular DuckDB values: a probability (noul), a selected label (choice) or a position on a rubric (score).

</details>

### izzuddin8803/jev-showdown

<details><summary>README 발췌</summary>

40 battles. 940 decisions. Fast answers, mixed strategy.

</details>

### jaygajera17/JevPulse

<details><summary>README 발췌</summary>

&gt; High-throughput qualitative consensus engine for YouTube comments. Evaluates every comment individually with calibrated decision models.

</details>

### JevResearch/Jev-Research

<details><summary>README 발췌</summary>

An independent, hands-on evaluation of TypeSafe AI's jev-1.13.0 API: 16,379 live benchmark requests across three frozen suites, a 987-call architecture probe, a multi-protocol Talk-to-Jev program, and a token-counting study, and a matched cheap-model baseline sweep on OpenRouter (12 models over the 

</details>

### jjlinucb/prompt-check

<details><summary>README 발췌</summary>

Grades the prompt you are typing into the Claude app, live, and tells you which effort level to run it at. A small overlay sits just above Claude's message box and updates as you type or dictate:

</details>

### jlov7/jev-decision-lab

<details><summary>README 발췌</summary>

A model can judge. Your system must decide.

</details>

### jtiemann/tense-circle

<details><summary>README 발췌</summary>

Tense Circle (Das Verb-Kreisspiel) is a browser-based German grammar practice game. The learner transforms a starting sentence through an 11-step circle of tense, mood, modal-verb, and subordinate-clause exercises. Jev evaluates each attempt on rule adherence, German sentence quality, and task relev

</details>

### just-the-v/judge_rails

<details><summary>README 발췌</summary>

Semantic judgments as ordinary ActiveRecord attributes.

</details>

### kanishka-namdeo/jev-rag

<details><summary>README 발췌</summary>

One app, two retrieval-augmented pipelines over your own documents — and a built-in benchmark lab that measures, with an independent LLM judge, exactly what the hybrid adds.

</details>

### kobashi/jev-playground

<details><summary>README 발췌</summary>

A call-and-response music app built to find out whether Jev — TypeSafe AI's first System One model — can carry a musical judgment.

</details>

### kp-algomaster/finetuning-laya-for-browser-agents

<details><summary>README 발췌</summary>

This repository contains the complete codebase, evaluation harness, dataset curation scripts, and benchmark artifacts for fine-tuning Laya (a 421M-parameter ModernBERT-large encoder with multi-task decision heads) for high-frequency, structured browser automation.

</details>

### Mahad-007/jev-why

<details><summary>README 발췌</summary>

Jev tells you what it decided. jev-why tells you why, and whether you should believe it.

</details>

### marcosmartinez/jev-acento

<details><summary>README 발췌</summary>

Does Jev understand your accent?

</details>

### ms-codehorizon/forkery-case-study

<details><summary>README 발췌</summary>

Forkery tells you whether a recipe works, going only by the people who actually made it.

</details>

### ngallodev-software/agent-workflow-comparative-eval

<details><summary>README 발췌</summary>

- What it is: a provider-neutral library defining comparison records, frozen datasets, pairing rules, metrics, and deterministic statistics. - Why it exists: comparison semantics should not belong to Agent-Workflow core or to any one semantic provider such as TypeSafe/Jev. - Key boundary: it compare

</details>

### nweii/tag-match

<details><summary>README 발췌</summary>

Tag Match finds relevant tags among those in your Obsidian vault for a given note. It uses an AI decision model to judge each candidate against your note, optionally using tagging rules and definitions you provide. You can review its suggestions or add top matches directly.

</details>

### PlutoniaX/jev-demo

<details><summary>README 발췌</summary>

This demo shows a bank testing its AI controls on every AI decision, every night, rather than on a quarterly sample of 25 items. The judgement calls are made by TypeSafe Jev, a "System One" model: it returns typed answers with calibrated probabilities, not free text.

</details>

### priorbench/jev

<details><summary>README 발췌</summary>

Measured, pre-registered evaluation of AI systems.

</details>

### romanenko/nutrition-label

<details><summary>README 발췌</summary>

Idea and research foundation: Vlada Bortnik's articles. Her writing inspired this project's nutrition-label concept, attention-pattern research and A–F grading:

</details>

### rssr25/sys1bench

<details><summary>README 발췌</summary>

Jev · Laya · Kev · and whatever comes next

</details>

### rubinagentagi-tech/jev-heart-risk-bench

<details><summary>README 발췌</summary>

Can a decision model read a plain-English health survey and judge a person's heart-disease risk? This repo scores Jev (TypeSafe's System One, jev-1.13.0) on 5,000 real respondents from the CDC's 2015 Behavioral Risk Factor Surveillance System, against a logistic regression, a hand-written rule, a ch

</details>

### shing1Sks/rerank-bench

<details><summary>README 발췌</summary>

Benchmarking Jev (TypeSafe SystemOne) as a reranker against NVIDIA's Nemotron VL cross-encoder reranker (via OpenRouter), on real long documents — books, law, math, physics, encyclopedic text — scored by gold IR metrics and blind, swap-corrected LLM-as-judge pairwise comparison.

</details>

### Simon-zj1/jev-exam

<details><summary>README 발췌</summary>

The point of this project is not "let a model give a score". It is to decompose grading into a set of atomic, checkable questions, decide each of them with a decision model (TypeSafe Jev / System One), and combine the probabilities in code. Every point in the final score can be audited in the report

</details>

### simonmesmith/jev-arc-agi-v1-experiment

<details><summary>README 발췌</summary>

In this experiment, Jev fully solved 4 of 400 public evaluation tasks (1%). It also solved one of the two test grids in another task, giving a 1.125% benchmark score. The evaluation cost about US$2.32 in Jev API usage and finished in 10 minutes.

</details>

### sinkarusa/jevemu

<details><summary>README 발췌</summary>

An open emulator of TypeSafe's Jev API (POST /v1/systemone), plus a paired benchmark of local and hosted models against the real Jev.

</details>

### souvikr/jev-test

<details><summary>README 발췌</summary>

A small test harness for Jev (~typesafe/jev-latest), TypeSafe's structured decision model, called through OpenRouter's alpha Decisions API (POST https://openrouter.ai/api/alpha/decisions).

</details>

### STRML/omp-classifier

<details><summary>README 발췌</summary>

Jev-judged permission checks for OMP's bash tool, and for eval payloads that spawn processes.

</details>

### SYED-M-HUSSAIN/jev-experimental

<details><summary>README 발췌</summary>

Jev, from TypeSafe AI, is described everywhere as a fast, cheap alternative to an LLM for structured output. That description is half right, and the half that is wrong matters: it cannot produce structured output at all. It cannot return a name, an amount or a date.

</details>

### taifoon-io/jev

<details><summary>README 발췌</summary>

Did the AI agent do the work it was paid for? Ask Jev, and get an answer you can check.

</details>

### takemo101/pi-jev-continue

<details><summary>README 발췌</summary>

Jev の判定で pi の開発ループを継続する extension。実装・調査・コマンド実行は pi のモデルが担当し、Jev は次の作業種別・継続条件と、開発中の選択肢形式の質問への回答を判断します。

</details>

### TakumiNoguchi2004/jev-noul-vs-choice

<details><summary>README 발췌</summary>

Inspired by KantaHayashiAI/jev-does-not-play-dice, which found that Jev — TypeSafe's "System One" model, marketed on returning calibrated probabilities instead of free-text LLM-judge reasoning — reports ~83% confidence for a face it always picks as "1" when asked "which face came up?" on a fair six-

</details>

### tatsuya-tech77/umigame-jev

<details><summary>README 발췌</summary>

A browser game of "Sea Turtle Soup" (a lateral-thinking yes/no riddle game, umigame no soup in Japan) where the game master is Jev, TypeSafe AI's decision-only model. Jev never writes a single word: it only returns probabilities for typed questions. Players ask yes/no questions, and try to solve eac

</details>

### theasylumagency/semantic-benchmark

<details><summary>README 발췌</summary>

დამოუკიდებელი სამუშაო გარემო ქართული semantic contract-ების შესაფასებლად. პირველი მოდულია Claim Semantics. Jev და ძლიერი baseline ერთსა და იმავე ტექსტებსა და contract-ებს ამუშავებენ. ეს რეპოზიტორია UNDA production სისტემას არ ცვლის.

</details>

### thijmenkam/jev-benchmarks

<details><summary>README 발췌</summary>

A small, reproducible harness that compares Jev — TypeSafe's first System One model (unstructured/structured state in, typed probabilistic decisions out) — against frontier LLMs on the same structured decision tasks.

</details>

### ThomasRossi/fin-benchmark-jev

<details><summary>README 발췌</summary>

Benchmarks Jev 1.13 (TypeSafe's decisions model, typesafe/jev-1.13 on OpenRouter's /api/alpha/decisions endpoint) against Qwen 3.8 27B on Cerebras on four financial tasks with constrained output: a label, a number, or a set of IDs.

</details>

### TimurHaryo/jev-toolkit

<details><summary>README 발췌</summary>

Puts Jev decisions (Choice / Score / Noul) into Claude Code hooks and a benchmark harness. Zero npm dependencies. Node 20+.

</details>

### TriusAI/Kapteeni

<details><summary>README 발췌</summary>

Status: v1 trained, evaluated &amp; served as two variants — kapteeni-v1- meticulous (conservative confidence; the default) and kapteeni-v1-intuit (sharper decisions on well-formed numeric/temporal/multi-step traffic). docs/JEVBENCH.md holds every benchmark number and the full experiment history; docs/E

</details>

### TYC-000/flight-deals-dashboard

<details><summary>README 발췌</summary>

A Streamlit dashboard for evaluating Asia outer-port flight deals to Spain using the Jev (TypeSafe SystemOne) decision API.

</details>

### UgurcanAkkok/yks-bench

<details><summary>README 발췌</summary>

Benchmarking decision models on the 2026 Turkish university entrance exam (YKS).

</details>

### vamsi80/jev-vs-llm

<details><summary>README 발췌</summary>

| Feature / Primitive | ⚡ JEV (TypeSafe AI) | 🤖 Standard LLM | Benchmarking Impact | | :--- | :--- | :--- | :--- | | Execution Architecture | System 1 (Non-Autoregressive) | System 2 (Autoregressive) | Single-pass parallel compute vs token-by-token generation | | Primary Primitives | Noul (Boolean)

</details>

### vclic/smoking-extraction-benchmark

<details><summary>README 발췌</summary>

A paired comparison of TypeSafe Jev and OpenAI structured outputs on 1,000 synthetic outpatient progress notes. Both systems receive the same note, annotation policy, candidate values, and ten typed questions. This repository contains the two benchmark CSVs, an executable evaluation program, and the

</details>

### YukunHe304/whatitdid

<details><summary>README 발췌</summary>

Read any CLI agent's session file and report what the run actually did — step by step, with error bars.

</details>

### zeuzmakessoftware/jever

<details><summary>README 발췌</summary>

Jev picks between options, scores against a rubric, and answers yes/no questions. Jever gives you a place to try those decisions: write a question, add some context, and see the answer alongside its confidence.

</details>

### softpudding/jev-frontier-100

<details><summary>README 발췌</summary>

Jev scores 77.0%; Qwen3.5 2B with a 2,048-token thinking budget scores 82.0%; Qwen3.5 4B with the same budget scores 96.7%. This small benchmark makes Jev's observed reasoning limits tangible through nine local-model settings.

</details>

### ideas-to-life/jev-cv-jd-evaluator

<details><summary>README 발췌</summary>

A Cloudflare Worker that calls the typesafe/jev model (TypeSafe.ai) via the Workers AI binding.

</details>

### jonascheng/jev-lab

<details><summary>README 발췌</summary>

Interactive desktop studio to evaluate application state using the TypeSafe Jev decision model on Cloudflare Workers AI.

</details>

### may3rr/jev-verifier-eval

<details><summary>README 발췌</summary>

Evaluation harness for a controlled comparison of three verifier families on claim–evidence entailment, over five public fact-verification corpora (FEVER, SciFact, HoVer, VitaminC, Climate-FEVER):

</details>

### Shivamowo/tug-of-words

<details><summary>README 발췌</summary>

A 2-minute tug of war played in chat. Every message is a move, and TypeSafe Jev judges each one live (~100ms). Pixel/synthwave look, chiptune music and sound effects, room codes, 1v1 up to 5v5.

</details>

### vianaR25/jev-vs-ml

<details><summary>README 발췌</summary>

Benchmarks reproduzíveis de dois modelos de decisão zero-shot contra modelos de machine learning treinados, em três datasets famosos do Kaggle:

</details>
