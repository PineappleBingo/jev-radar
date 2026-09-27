# 🧪 견고성·감사 연구 (33)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [openroboto-ai/jev-robot-control](https://github.com/openroboto-ai/jev-robot-control) | 49 | 2 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-19 |
| [bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev) | 33 | 12 | 요약 대기 · A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state | 🆕 | 2026-09-21 |
| [Yifan-Lan/awesome-jev-robustness](https://github.com/Yifan-Lan/awesome-jev-robustness) | 5 | 2 | **무엇** TypeSafe Jev 모델의 답변 일관성, 보정 오차, 프롬프트 주입 취약점 등 견고성을 독립적으로 검증한 연구와 감사 결과를 모아둔 큐레이션 리포지토리다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 단순 작업 정확도 대신 옵션 순서나 이름, 부정문 표현 등에 따라 확률값과 선택 결과가 어떻게 흔들리는지 속성별 독립 테스트 결과를 목록과 요약표로 정리했다. | 🆕 | 2026-09-26 |
| [KantaHayashiAI/jev-does-not-play-dice](https://github.com/KantaHayashiAI/jev-does-not-play-dice) | 4 | 1 | **무엇** Jev 모델의 확률 보정, 불확실성 표현, 예측 문서 보존력을 측정하고 분석하는 실험 코드 및 데이터 세트다.<br>**판단** 주사위 눈 맞히기나 동전 던지기 등 무작위 사건의 결과 및 예측 문서 속 사건 발생 여부를 choice나 noul로 묻는다.<br>**포인트** 무작위 사건에서 실제 정확도는 무작위 수준(19%)임에도 Choice 출력이 82.9% 등 높은 확신도를 부여하는 보정 실패 현상을 분석했다. | 🆕 | 2026-09-25 |
| [RINNECODER/jev-behavior-study](https://github.com/RINNECODER/jev-behavior-study) | 4 | 0 | **무엇** Jev 1.13.0 모델의 성능과 신뢰성을 파악하기 위해 프롬프트 제어 실험과 게임 실증 결과를 기록한 독립 연구 리포지토리다.<br>**판단** Snake 게임 이동 방향, 3D 주행 조향 선택, 그리고 문맥 및 선지 순서 변화에 따른 객관식 문항 정답 선택을 판단시킨다.<br>**포인트** Snake 및 3D City 조작과 11,621건의 텍스트 실험을 통해 선지 배치 순서와 서술 방식 등 프롬프트 변화에 따른 취약점을 분석했다. | 🆕 | 2026-09-17 |
| [SamuelSacco/jev-exploration](https://github.com/SamuelSacco/jev-exploration) | 4 | 0 | **무엇** TypeSafe Jev API의 확률 보정 상태와 성능 주장을 감사하고 실측 실험 코드를 기록한 분석 저장소<br>**판단** 난이도별 800개 문항 데이터셋과 외부 벤치마크 데이터에 대해 Noul, Choice, Score 원시 타입으로 판단 질문을 수행<br>**포인트** Jev의 확률값이 중간값으로 압축 왜곡되어 실제 보정(calibration)되지 않음을 ECE로 증명하고 플랫 스케일링을 통한 보정 한계를 검증함 | 🆕 | 2026-09-25 |
| [dani1005/book-aurora](https://github.com/dani1005/book-aurora) | 6 | 0 | 요약 대기 · Jev reads a whole novel in seconds. Every passage becomes a row of colour. | 🆕 | 2026-09-23 |
| [Amrit-Nigam/jev-royal](https://github.com/Amrit-Nigam/jev-royal) | 4 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-18 |
| [AnshChoudhary/typesafe-ai-firewall](https://github.com/AnshChoudhary/typesafe-ai-firewall) | 3 | 0 | 요약 대기 · Shadow-mode validation harness for a pre-execution firewall on AI agent tool calls (TypeSafe/Jev). Real run, findings in report.md. | 🆕 | 2026-09-17 |
| [jujumilk3/jev-calibration-audit](https://github.com/jujumilk3/jev-calibration-audit) | 1 | 0 | **무엇** 공개 API 호출만을 사용해 TypeSafe AI의 Jev 모델 확률 캘리브레이션과 신뢰도 정확성을 독립적으로 검증·감사하는 벤치마크 도구다.<br>**판단** MMLU-ProX와 KoBBQ 문항을 Choice 다지선다와 Noul 예/아니오 질의 형태로 모델에 전달해 정답 여부와 예측 확률 분포를 판단시킨다.<br>**포인트** 기권 옵션 제거 시 오답률 및 편향 급증, Noul과 Choice 간 확률 불일치, 선택지 순서 편향 부재, 한국어 성능 변화 등 7개 실험 결과를 측정한다. | 🆕 | 2026-09-18 |
| [willkelly/jev-evaluation](https://github.com/willkelly/jev-evaluation) | 1 | 1 | **무엇** TypeSafe의 jev 결정 모델을 대상으로 9개 실험과 사전 등록된 28개 가설을 검증한 적대적 평가 프레임워크다.<br>**판단** 지원 티켓 라우팅 대상 분류, 3-SAT 논리식 만족 여부 확률(noul), 프로그램 도달 가능성 판별 등을 묻는다.<br>**포인트** 사전 등록 계획에 따라 12만 회 이상 호출하며 프롬프트 인젝션 취약점, 다중 질문 배치 효율, 보정 오차 등을 실측했다. | 🆕 | 2026-09-22 |
| [Fox-Islam/jevlint](https://github.com/Fox-Islam/jevlint) | 2 | 0 | 요약 대기 · A linting tool combining static analysis and Jev queries to help improve... Jev queries | 🆕 | 2026-09-25 |
| [newuser7171/antivirus](https://github.com/newuser7171/antivirus) | 2 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-20 |
| [Red5d/jev-cvss](https://github.com/Red5d/jev-cvss) | 2 | 1 | 요약 대기 · Fast CVSS scoring from vulnerability descriptions using Typesafe Jev | 🆕 | 2026-09-18 |
| [Alpha-Harper-Franklin/jev-drive](https://github.com/Alpha-Harper-Franklin/jev-drive) | 1 | 0 | 요약 대기 · Jev + autonomous driving: structured decisions, multimodal baselines, recovery research, and measured API diagnostics. | 🆕 | 2026-09-21 |
| [copyleftdev/jev-labs](https://github.com/copyleftdev/jev-labs) | 1 | 0 | 요약 대기 · Never confidently wrong: a TLA+-verified consensus kernel around TypeSafe's Jev, run through 1,680 chaos-tested pharmacy decisions with zero wrong verdicts. Film, code, and every captured call. | 🆕 | 2026-09-19 |
| [dnakhoa/jev-deferred-crispification](https://github.com/dnakhoa/jev-deferred-crispification) | 1 | 0 | 요약 대기 · Position paper: the Hidden-Markov and fuzzy primitives missing from TypeSafe AI's Jev and System-One decision models. Two lemmas, one principle (Deferred Crispification), one architecture (BSF-S1). | 🆕 | 2026-09-17 |
| [patryckalves/jev-no-enem](https://github.com/patryckalves/jev-no-enem) | 1 | 0 | 요약 대기 · Reproducible benchmark evaluating TypeSafe AI's Jev (System One paradigm) on Brazil's ENEM 2025 standardized exam. Evaluates typed decision-making, domain-specific accuracy, and RLCD uncertainty calibration against open LLM baselines with an interactive GitHub Pages dashboard. | 🆕 | 2026-09-21 |
| [sliday/jev-chess-algo](https://github.com/sliday/jev-chess-algo) | 1 | 0 | 요약 대기 · How jevchess.com asks JEV for a chess move: every legal move as the options of one typed Choice question, plus the hanging-piece check that describes them. | 🆕 | 2026-09-21 |
| [TheWayWithin/jev-bench](https://github.com/TheWayWithin/jev-bench) | 1 | 0 | 요약 대기 · Does the cited source actually say it? A 42-claim benchmark: Jev (TypeSafe System One) against GPT-5.4, Claude Sonnet 5 and Gemini 3.1 Pro. | 🆕 | 2026-09-25 |
| [valsecchi75/squint](https://github.com/valsecchi75/squint) | 1 | 0 | 요약 대기 · Claude reads the part of a large file that answers your question, not the whole file. A PreToolUse hook. Measured: -36% cost on the reads it fires on, no answer lost. | 🆕 | 2026-09-21 |
| [zkousama/jagged](https://github.com/zkousama/jagged) | 0 | 0 | **무엇** TypeSafe Jev 모델 가이드가 모델의 판단과 보정 오차에 미치는 영향을 위키피디아 삭제 토론 데이터로 검증하는 사전 등록 연구 리포지토리다.<br>**판단** 위키피디아 삭제 토론 본문을 읽고 편집자의 투표 표시가 제거된 상태에서 해당 문서가 최종 삭제되었는지를 noul 확률로 판단시킨다.<br>**포인트** 사전 등록 절차에 따라 가이드 항목별 효과를 측정했으며 지시문보다 거짓 사실 삽입에 취약하고 질문 반전 시 점수 왜곡이 발생하는 현상을 규명했다. | 🆕 | 2026-09-22 |
| [CompleteDotTech/paper-package](https://github.com/CompleteDotTech/paper-package) | 2 | 0 | 요약 대기 · Jev research manuscript, evidence, and reproducible paper package | 🆕 | 2026-09-20 |
| [agrogov/jev-system-one-study](https://github.com/agrogov/jev-system-one-study) | 0 | 0 | 요약 대기 · Jev System One Black-Box Study - Complete Reproducibility Bundle | 🆕 | 2026-09-21 |
| [Alpha-Harper-Franklin/jev-multimodal](https://github.com/Alpha-Harper-Franklin/jev-multimodal) | 0 | 0 | 요약 대기 · Jev + Multimodal: shared visual decisions, evidence adapters, source audits and reproducible public-image benchmarks. | 🆕 | 2026-09-21 |
| [codaaiteam/jev-companion-arena](https://github.com/codaaiteam/jev-companion-arena) | 0 | 0 | 요약 대기 · Fight beside a Jev-controlled AI teammate that decides its own move (attack/defend/follow/retreat) each round. Single-file, no build. Play free: jevtypesafeai.com/games/jev-companion-arena | 🆕 | 2026-09-24 |
| [cwhy/decision-injection-bench](https://github.com/cwhy/decision-injection-bench) | 0 | 0 | 요약 대기 · Reproducible prompt-injection and jailbreak evaluation for Jev-like structured decision systems | 🆕 | 2026-09-23 |
| [dopeCape/typesafe-ai-test](https://github.com/dopeCape/typesafe-ai-test) | 0 | 0 | 요약 대기 · Stress test of TypeSafe AI's jev-1.13 System One model: limits, vagueness, calibration, adversarial, new patterns, LLM bake-off | 🆕 | 2026-09-21 |
| [finrod21/jev-transaction-guard](https://github.com/finrod21/jev-transaction-guard) | 0 | 0 | 요약 대기 · Autonomous settlement circuit breaker protecting ledgers against CVE/RCE balance bypasses, nocturnal draining, and prompt injection attacks using TypeSafe Jev. | 🆕 | 2026-09-20 |
| [ozaki-taisuke/jev-kano](https://github.com/ozaki-taisuke/jev-kano) | 0 | 0 | 요약 대기 · #Jevカノ — 判断特化モデル Jev が本音を先に決め、LLM が言葉を書き、TTS が声を出すギャルゲー（β） | 🆕 | 2026-09-27 |
| [pozapas/jev-calibrated-narrative-coding](https://github.com/pozapas/jev-calibrated-narrative-coding) | 0 | 0 | 요약 대기 · Calibrated conversion of police crash narratives into probabilistic crash variables with a System One model. Pipeline, schema and aggregated results. | 🆕 | 2026-09-23 |
| [rssr25/sys1bench](https://github.com/rssr25/sys1bench) | 0 | 0 | 요약 대기 · Benchmark for typed System One decision models (Jev, Laya, and whatever comes next): calibration against a noise floor, framing sensitivity, selective prediction, ordinal fidelity, interference, robustness. pip install sys1bench. | 🆕 | 2026-09-23 |
| [sshariqali/jev-abstentionbench](https://github.com/sshariqali/jev-abstentionbench) | 0 | 0 | 요약 대기 · Meta's AbstentionBench run against Jev (TypeSafe). Cached responses committed, so the analysis reproduces offline. | 🆕 | 2026-09-20 |

### openroboto-ai/jev-robot-control

<details><summary>README 발췌</summary>

Jev vs GPT-6 Astra vs GPT-4.1 mini: direct Cartesian control of an xArm7 in MuJoCo.

</details>

### bytelabs-oss/clash-jev

<details><summary>README 발췌</summary>

I got early access to Jev, TypeSafe AI's new System One model, and decided to play around with it. I built clash-jev, a bot that uses Jev to make near real-time decisions on live game data. It plays Clash Royale on a real Android device.

</details>

### Yifan-Lan/awesome-jev-robustness

<details><summary>README 발췌</summary>

&gt; How Jev's answers move, and whether its probabilities can be trusted. Independent tests of TypeSafe's System One decision model, grouped by what they measured.

</details>

### KantaHayashiAI/jev-does-not-play-dice

<details><summary>README 발췌</summary>

Code, recorded outputs, and analysis scripts for probability-output experiments with Jev: fair random draws, Noul (Yes/No) questions, and forecast documents.

</details>

### RINNECODER/jev-behavior-study

<details><summary>README 발췌</summary>

A browsable field guide to Jev 1.13.0: where explicit questions work, where small changes alter answers, and where harder tasks expose failures.

</details>

### SamuelSacco/jev-exploration

<details><summary>README 발췌</summary>

What is actually known about TypeSafe's Jev, the "System One" judgment API that returns typed probabilities instead of generated text. Started as a deep dive during launch week (September 2026), now maintained as a ledger of claims and the evidence behind them, including other people's benchmarks.

</details>

### dani1005/book-aurora

<details><summary>README 발췌</summary>

Jev reads a whole novel in under a minute. Every passage becomes a row of colour.

</details>

### Amrit-Nigam/jev-royal

<details><summary>README 발췌</summary>

An autonomous agent that plays Clash Royale on macOS through the native iPhone Mirroring app. Perception is entirely local and deterministic; TypeSafe's Jev ("System One") model is used to arbitrate between tactical options that have already been validated in code.

</details>

### AnshChoudhary/typesafe-ai-firewall

<details><summary>README 발췌</summary>

Shadow-mode validation for a pre-execution firewall on AI agent tool calls, built on TypeSafe / Jev typed judgments.

</details>

### jujumilk3/jev-calibration-audit

<details><summary>README 발췌</summary>

An independent, API-only audit of the calibration of TypeSafe AI's Jev, a "System One" decision model that answers pre-defined questions over a text state with probability distributions instead of generated text.

</details>

### willkelly/jev-evaluation

<details><summary>README 발췌</summary>

An adversarial evaluation of jev, the decision model sold by TypeSafe. It follows a plan written before any request was sent. That plan fixed nine experiments, the sample size of each, and twenty-eight predictions, each stated with the result that would prove it wrong. Nothing reported here was chos

</details>

### Fox-Islam/jevlint

<details><summary>README 발췌</summary>

A linter for Jev queries. It takes the request you would send to System One - a state and the questions asked about it - and reports where the query is written in a way the model is documented to handle badly.

</details>

### newuser7171/antivirus

<details><summary>README 발췌</summary>

A next-generation antivirus scanner, URL threat intelligence engine, and real-time Endpoint Detection &amp; Response (EDR) sentinel powered by TypeSafe's Jev (jev-latest). Jev-AV inspects binary executables, running processes, scripts, documents, plain text, and web links—extracting structural features 

</details>

### Red5d/jev-cvss

<details><summary>README 발췌</summary>

Score software vulnerability descriptions with CVSS using TypeSafe's Jev (jev-latest) via the System One API. Jev reads the description and selects the metric values; the numeric scores are computed in code, exactly per the official FIRST specifications and verified against reference implementations

</details>

### Alpha-Harper-Franklin/jev-drive

<details><summary>README 발췌</summary>

Structured semantic decisions for driving recovery and replanning.

</details>

### copyleftdev/jev-labs

<details><summary>README 발췌</summary>

Never confidently wrong. A consensus kernel around a probabilistic oracle, tested the way you would test a database: model-checked in TLA+, contract-generated into Rust, and run through 1,680 simulated pharmacy decisions under seeded chaos against the live Jev API.

</details>

### dnakhoa/jev-deferred-crispification

<details><summary>README 발췌</summary>

Your decision pipeline is calibrated per hop and blind per trajectory. This repo contains the math that proves it, the architecture that fixes it, and two audit metrics you can run today — no model weights required.

</details>

### patryckalves/jev-no-enem

<details><summary>README 발췌</summary>

Primeiro benchmark público avaliando o modelo Jev (TypeSafe AI) em exames padronizados brasileiros. Investigamos a transição do paradigma autorregressivo tradicional (LLMs generativas) para o paradigma System One (decisão tipada paralela, latência ultrabaixa e calibração de confiança via RLCD) aplic

</details>

### sliday/jev-chess-algo

<details><summary>README 발췌</summary>

The two pieces of jevchess.com worth reading, extracted so they can be run and reviewed on their own:

</details>

### TheWayWithin/jev-bench

<details><summary>README 발췌</summary>

Does the source actually say it? A 42-claim benchmark for one narrow job: given a sentence that makes a claim and the passage it cites, decide whether the passage supports the sentence as written.

</details>

### valsecchi75/squint

<details><summary>README 발췌</summary>

Claude reads the part of the file that answers your question, not the whole file.

</details>

### zkousama/jagged

<details><summary>README 발췌</summary>

TypeSafe publishes a jaggedness page for its Jev model: the ways jev-1.13 goes wrong, and a fix for each. This study uses the setup that page recommends as the control, sets aside one piece of that advice per run, and measures which pieces change the answer.

</details>

### CompleteDotTech/paper-package

<details><summary>README 발췌</summary>

Follow the claim. Inspect the evidence. Replay the result.

</details>

### agrogov/jev-system-one-study

<details><summary>README 발췌</summary>

This repository combines the complete research artifact in one self-contained tree: a black-box study of TypeSafe Jev / System One, plus controlled replays of the same benchmark against two open typed-decision systems: the Laya typed-decisions model and SemIf (Qwen3.5-4B).

</details>

### Alpha-Harper-Franklin/jev-multimodal

<details><summary>README 발췌</summary>

Make typed decisions over images, documents and speech. Share visual computation across questions, then combine evidence in Jev.

</details>

### codaaiteam/jev-companion-arena

<details><summary>README 발췌</summary>

You fight waves of enemies alongside a Jev-controlled AI teammate that picks its own move — attack / defend / follow / retreat — each round, with the confidence and reason behind it. Every decision is one real call to Jev, TypeSafe AI's System One model — a typed, calibrated decision (a choice, scor

</details>

### cwhy/decision-injection-bench

<details><summary>README 발췌</summary>

Can the text you're classifying tell the classifier what to say?

</details>

### dopeCape/typesafe-ai-test

<details><summary>README 발췌</summary>

Six tracks of experiments against POST /v1/systemone on 21 Sep 2026, ~8,400 calls, $0.39. Full write-up with charts: report/index.html. Per-track detail: results/t/REPORT.md.

</details>

### finrod21/jev-transaction-guard

<details><summary>README 발췌</summary>

A cybersec policy enforcement engine and behavioral anomaly detector powered by TypeSafe AI's Jev (~typesafe/jev-latest).

</details>

### ozaki-taisuke/jev-kano

<details><summary>README 발췌</summary>

判断特化モデル Jev（TypeSafe AI）が「本音」を 0.2〜0.5 秒で決め、その本音で顔と一言が先に出る。 Claude はその本音を受け取って台詞を書き、Gemini 3.8 Flash TTS が本音の色で読む。 時間差はあっても、顔・一言・言葉・声は同じ本音でそろう。相手は、地味でおとなしい、箱入りの読書好き。仲良くなると振る舞いが変わる。

</details>

### pozapas/jev-calibrated-narrative-coding

<details><summary>README 발췌</summary>

Code, schema and aggregated results for Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev).

</details>

### rssr25/sys1bench

<details><summary>README 발췌</summary>

Jev · Laya · Kev · and whatever comes next

</details>

### sshariqali/jev-abstentionbench

<details><summary>README 발췌</summary>

Meta's AbstentionBench tests whether a model declines to answer questions that have no answer. This repository runs it against Jev, a model from TypeSafe that returns probabilities for typed questions instead of text, and compares the result against the twenty systems Meta published numbers for.

</details>
