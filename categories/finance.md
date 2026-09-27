# 💹 금융·트레이딩 (38)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 108895 | 20888 | 요약 대기 · TradingAgents: Multi-Agents LLM Financial Trading Framework | 🆕 | 2026-09-25 |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 63770 | 11187 | 요약 대기 · An AI Hedge Fund Team | 🆕 | 2026-09-26 |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12230 | 2504 | **무엇** 트레이더와 개발자를 위해 암호화폐, 주식, 외환의 리서치부터 백테스트와 실거래를 지원하는 자체 호스팅 AI 트레이딩 OS다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Python 전략 개발 및 백테스트뿐 아니라 에이전트 연동용 MCP, 자체 결제 및 정산 기능까지 결합한 올인원 스택을 제공한다. | 🆕 | 2026-09-26 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 2593 | 490 | **무엇** Monad 블록체인 상의 Kuru MON-USDC 오더북을 감시하여 매 블록마다 Jev 모델의 예측에 맞춰 post-only 지정가 주문을 갱신하는 트레이딩 봇이다.<br>**판단** 지정된 블록 구간(기본 100블록, 약 30초) 동안의 가격 변동 방향에 대해 buy 또는 sell 중 하나를 선택하도록 판단시킨다.<br>**포인트** 약 300ms의 블록 주기에 맞추기 위해 RPC 호출을 2회로 최소화하고 기존 주문 취소와 신규 주문을 batchUpdate 단일 트랜잭션으로 처리한다. | 🆕 | 2026-09-17 |
| [aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade) | 158 | 28 | **무엇** Hyperliquid 오더북 데이터를 바탕으로 TypeSafe Jev를 호출해 암호화폐 5종의 매매 주문을 자동 집행하는 트레이딩 봇 및 대시보드다.<br>**판단** 오더북 데이터를 기반으로 틱마다 포지션 방향(long 또는 short)과 실행 액션(open, close, hold)을 선택하도록 질의한다.<br>**포인트** 코인별 독립 지갑 구조를 적용하고, 진입 시 ALO 메이커 주문과 청산 시 IOC 테이커 주문을 분기하며 Bun과 Next 대시보드를 SSE로 연결했다. | 🆕 | 2026-09-21 |
| [brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis) | 170 | 34 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-22 |
| [arimanyus/warrenduffer](https://github.com/arimanyus/warrenduffer) | 93 | 27 | 요약 대기 · AI-driven intraday trading bot for Indian stocks. Jev ranks the Nifty 50 every 15s; code sizes each trade and places the stop; orders go live through Zerodha Kite or Kotak Neo. Day replay, kill switch, daily loss halt, terminal dashboard. | 🆕 | 2026-09-23 |
| [irfndi/prism-liquidity-agent](https://github.com/irfndi/prism-liquidity-agent) | 113 | 19 | **무엇** Solana의 Meteora DLMM 유동성 풀 상태를 주기적으로 감시하고 포지션 리밸런싱과 진입·청산을 자동 수행하는 자율 LP 에이전트다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** sqlite-vec 기반 벡터 메모리로 과거 손익 이력을 축적해 자가 개선하며 0~1 거래량 진위 점수와 위험 게이트로 온체인 실행을 차단한다. | 🆕 | 2026-09-23 |
| [myc0576/SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub) | 27 | 0 | **무엇** 트레이더와 에이전트가 실행 권한 없이 매매 기록과 증거를 검토하고 재현 가능한 아티팩트로 보관하는 로컬 기반 저널링 하네스다.<br>**판단** 매매 복기, 기업 공시, 산업 뉴스, 거시 정책 텍스트를 바탕으로 사실 부합 여부와 영향도를 choice, score, noul 형식으로 판정한다.<br>**포인트** 주문 권한을 차단한 읽기 전용 구조이며, 산술 계산과 시점 경계 검증은 파이썬이 강제하고 Jev는 구조화된 판단 레이어로만 활용된다. | 🆕 | 2026-09-25 |
| [zadescoxp/Jev-Trades](https://github.com/zadescoxp/Jev-Trades) | 34 | 10 | 요약 대기 · Trading bot with the all new TypeSafe AI's first system one model named as Jev | 🆕 | 2026-09-25 |
| [ruyianry/JevGym](https://github.com/ruyianry/JevGym) | 31 | 0 | 요약 대기 · JevGym is an open-source platform designed to benchmark and facilitate better probabilistic estimation in Jev-alike models | 🆕 | 2026-09-23 |
| [sosopop/jev_stock](https://github.com/sosopop/jev_stock) | 15 | 4 | 요약 대기 · An experimental JEV-powered framework for forecasting short-term stock price direction from structured market data. | 🆕 | 2026-09-17 |
| [justinhe16/trade-jev](https://github.com/justinhe16/trade-jev) | 9 | 2 | 요약 대기 · Backtest Jev (TypeSafe) as a BUY/SELL/HOLD trader on NQ L10 order-book data | 🆕 | 2026-09-17 |
| [ethan-ab/xscout-jev](https://github.com/ethan-ab/xscout-jev) | 6 | 0 | 요약 대기 · Watch X for the news that matters to you, judged by Jev, and get alerted in Slack. Set up by an AI agent. | 🆕 | 2026-09-27 |
| [rthomas24/jev-realtime-trading](https://github.com/rthomas24/jev-realtime-trading) | 6 | 4 | 요약 대기 · Paper trading agents on a live tape, decided every second by TypeSafe's Jev (System One). Electron desktop app. | 🆕 | 2026-09-27 |
| [bl888m/jev-bot](https://github.com/bl888m/jev-bot) | 5 | 5 | 요약 대기 · JEV-powered market decision bot for stocks, crypto and memes. State in, BUY/SELL/HOLD/AVOID out, paper by default | 🆕 | 2026-09-23 |
| [EthanAlgoX/jev-trading](https://github.com/EthanAlgoX/jev-trading) | 3 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-20 |
| [jiayylu/jev-as-quant](https://github.com/jiayylu/jev-as-quant) | 3 | 0 | 요약 대기 · Typed System-1 decisions (Laya/Jev) as the judgment layer of a quant research stack, with Claude as System 2. Requirements → design → code → experiments. | 🆕 | 2026-09-23 |
| [zzsong1023/jev-market-reflex](https://github.com/zzsong1023/jev-market-reflex) | 3 | 1 | 요약 대기 · Fast typed AI decisions on live crypto markets using TypeSafe AI Jev. | 🆕 | 2026-09-19 |
| [daviddme/tradingview-indicator-search-mcp-server](https://github.com/daviddme/tradingview-indicator-search-mcp-server) | 12 | 6 | **무엇** 트레이딩뷰의 공개 지표 및 전략 라이브러리를 검색하고 Pine Script 소스 코드를 조회할 수 있도록 지원하는 AI 에이전트용 MCP 서버다.<br>**판단** README에 판단 지점 설명 없음<br>**포인트** Node.js 22.5의 내장 node:sqlite를 사용해 로컬 코퍼스를 구축하여 Pine 코드 내부 검색을 지원하며 별도 계정이나 API 키가 필요 없다. | 🆕 | 2026-07-25 |
| [Eric-Zhou-0302/jev-A-share-trader](https://github.com/Eric-Zhou-0302/jev-A-share-trader) | 2 | 0 | 요약 대기 · A Jev-powered technical analysis workspace for China A-shares, supporting AKShare/Tushare, market scans, and Buy/Hold/Sell assessments with time horizons and traceable evidence. | 🆕 | 2026-09-21 |
| [rikkooo/jev-trade](https://github.com/rikkooo/jev-trade) | 2 | 0 | 요약 대기 · A market-data trading simulator powered by auditable Jev judgments | 🆕 | 2026-09-26 |
| [xuboboo/ashare-trader](https://github.com/xuboboo/ashare-trader) | 2 | 0 | 요약 대기 · 基于 Jev 的 A 股 T+1 决策台：盘前预选 + 交易时段全程决策 + 本地概率模型 + 严格成本回测 + QMT 桥接（默认不下单）。1 万本金影子盘记录中；策略未证实正期望（README 有全部数据）。 | 🆕 | 2026-09-27 |
| [zadescoxp/kadeconsole](https://github.com/zadescoxp/kadeconsole) | 2 | 0 | 요약 대기 · Kade console is a bloomberg terminal type of analytical tool.  | 🆕 | 2026-09-21 |
| [Gaurav-Gosain/jev-alpha-bench](https://github.com/Gaurav-Gosain/jev-alpha-bench) | 1 | 0 | 요약 대기 · Does Jev predict stock returns from news? It reads the news well; there is no tradeable alpha. Three arms separate reading from recall. | 🆕 | 2026-09-16 |
| [JordiParraCrespo/typesafe-ai-trading-showcase](https://github.com/JordiParraCrespo/typesafe-ai-trading-showcase) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-16 |
| [jpanasuk-netizen/15-min-BTC-JAP](https://github.com/jpanasuk-netizen/15-min-BTC-JAP) | 1 | 0 | 요약 대기 · 15-min BTC JAP — Jev Agent Protocol for Kalshi BTC 15m YES/NO | 🆕 | 2026-09-18 |
| [mahynotch/newsscore](https://github.com/mahynotch/newsscore) | 1 | 0 | 요약 대기 · One number per ticker from the week's news. Async Python library + CLI, pluggable scorer, Jev by default. | 🆕 | 2026-09-19 |
| [Siim/jev-claim-vs-measured](https://github.com/Siim/jev-claim-vs-measured) | 1 | 0 | 요약 대기 · I tested the 'AI model for HFT' hype: TypeSafe Jev on 298,549 intraday trades. 48.4% hit rate, worse than a coin flip before fees. Every model response shipped, so anyone can verify without an API key. | 🆕 | 2026-09-21 |
| [Spykoninho/trading-bot-jev](https://github.com/Spykoninho/trading-bot-jev) | 1 | 0 | 요약 대기 · Crypto trading bot on Binance testnet using TypeSafe (Jev) to judge news | 🆕 | 2026-09-19 |
| [Nachom3/jevTrader](https://github.com/Nachom3/jevTrader) | 2 | 0 | 요약 대기 · A High Frecuncy Trader made in Rust using Jev as a decision maker.  | 🆕 | 2026-09-23 |
| [itsadrianxv/jev-quant](https://github.com/itsadrianxv/jev-quant) | 0 | 0 | 요약 대기 · C++ trading system leveraging TypeSafe Jev. | 🆕 | 2026-09-27 |
| [lizhuojunx86/llm-memory-audit](https://github.com/lizhuojunx86/llm-memory-audit) | 0 | 0 | 요약 대기 · Pre-registered tests of whether language models remember how market events turned out | 🆕 | 2026-09-27 |
| [r4topunk/jev-trading-study](https://github.com/r4topunk/jev-trading-study) | 0 | 0 | 요약 대기 · Pre-registered test of the Jev AI decision model as a crypto trader on Base: 40,228 decisions, worse than a coin flip. Interactive write-up EN/PT. | 🆕 | 2026-09-23 |
| [valuecodes/jev-on-air](https://github.com/valuecodes/jev-on-air) | 0 | 0 | 요약 대기 · JevOnAir monitors livestreams in real time, transcribes speech, detects market-moving statements with Jev, and turns them into structured simulated trade signals. | 🆕 | 2026-09-27 |
| [zd87pl/jevtrader](https://github.com/zd87pl/jevtrader) | 0 | 0 | 요약 대기 · Auditable research lab testing whether changes in SEC 8-K disclosures predict benchmark-relative stock returns. LLM and lexical text features, point-in-time market data, ridge models with purged walk-forward evaluation, and an immutable SQLite ledger. Research software, not a trading bot. | 🆕 | 2026-09-27 |
| [thodoh1/FinancialPredictionJev](https://github.com/thodoh1/FinancialPredictionJev) | 1 | 0 | 요약 대기 · Using Jev to test how well it predicts financial markets(just like most llms as of september 2026, it doesnt do that good) | 🆕 | 2026-09-16 |
| [PineappleBingo/tradingview-indicator-search-mcp-server](https://github.com/PineappleBingo/tradingview-indicator-search-mcp-server) | 0 | 0 | **무엇** TradingView의 공개 지표 및 전략 스크립트를 검색하고 Pine Script 소스 코드를 조회할 수 있도록 지원하는 MCP 서버<br>**판단** README에 판단 지점 설명 없음<br>**포인트** 별도 API 키나 계정 없이 공개 엔드포인트를 활용하며 Node.js 22.5 내장 sqlite를 통해 코퍼스를 로컬에 구축해 오프라인 검색을 지원함 | 🆕 | 2026-07-25 |

### TauricResearch/TradingAgents

<details><summary>README 발췌</summary>

- [2026-09] TradingAgents v0.5.1 released with a package layout organised by what each module holds (import paths moved), optional Jev screening of social posts, GPT-6 Sol and Luna as the default models, and fixes to run isolation and SEC EDGAR statements. - [2026-09] TradingAgents v0.5.0 released w

</details>

### virattt/ai-hedge-fund

<details><summary>README 발췌</summary>

This is a proof of concept for an AI-powered hedge fund. The goal of this project is to explore the use of AI to make trading decisions. This project is for educational purposes only and is not intended for real trading or investment.

</details>

### OpenByteInc/QuantDinger

<details><summary>README 발췌</summary>

&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;

</details>

### jarrodwatts/jev-trader

<details><summary>README 발췌</summary>

One decision every Monad block. A TypeSafe Jev model watches the Kuru MON-USDC order book and answers buy or sell every ~300 ms. Every block posts a real post-only limit order on that side, one tick inside the touch, replacing the last one. Fills happen when a taker hits it, so the bot earns the spr

</details>

### aowang-ai/jev-trade

<details><summary>README 발췌</summary>

I built a trading bot with Jev. Jev reads the Hyperliquid book every tick and answers buy, sell, or hold. The bot sends the order. Five coins, five wallets, real fills.

</details>

### brainstormity/Jev-X-Sentiment-Analysis

<details><summary>README 발췌</summary>

An on-demand crypto market intelligence and decision-support terminal powered by TypeSafe AI's System One model (Jev).

</details>

### arimanyus/warrenduffer

<details><summary>README 발췌</summary>

Single Node process: broker REST client (Kotak Neo or Zerodha Kite), Jev (TypeSafe AI via Vercel AI Gateway) as a two-stage ranker over Nifty-50 names, live MIS orders, SQLite audit log, terminal-style dashboard on 127.0.0.1:8080. Jev classifies, ranks, and decides take-profit. Code sizes, places th

</details>

### irfndi/prism-liquidity-agent

<details><summary>README 발췌</summary>

An autonomous liquidity agent that watches liquidity pools on Solana (currently Meteora DLMM), reasons over live on-chain data, and rebalances positions before they bleed.

</details>

### myc0576/SmartMoney-Cub

<details><summary>README 발췌</summary>

smartmoney-cub-harness is a local-first, agent-agnostic trading journal and review harness: read-only over markets and execution, writable over your own journal. It turns an external caller's offline run into portable, reviewable artifacts without taking trading authority.

</details>

### zadescoxp/Jev-Trades

<details><summary>README 발췌</summary>

A Next.js dashboard for live crypto market data and TypeSafe-powered trading.

</details>

### ruyianry/JevGym

<details><summary>README 발췌</summary>

A timestamped benchmark and trading arena for real-world probabilistic forecasting.

</details>

### sosopop/jev_stock

<details><summary>README 발췌</summary>

Language: English · 简体中文

</details>

### justinhe16/trade-jev

<details><summary>README 발췌</summary>

Tests Jev (TypeSafe) as a BUY / SELL / HOLD trader on NQ L10 order-book data from Databento (15 trading days, Jun 8–26 2026). Findings: results/FINDINGS.md. Published Jev answers and results are in results/; where the market data goes and how it was pulled is in data/DATA.md.

</details>

### ethan-ab/xscout-jev

<details><summary>README 발췌</summary>

Watches X for the updates that matter to you, has Jev judge them, and tells you in Slack early enough to act on them.

</details>

### rthomas24/jev-realtime-trading

<details><summary>README 발췌</summary>

Paper-trading agents that watch a live market and decide every second. Pick a stock or a coin, give it some paper money, and watch an AI model read the tape and call up, down or flat, while the app enforces your stops and targets and books every trade. The model is TypeSafe's Jev.

</details>

### bl888m/jev-bot

<details><summary>README 발췌</summary>

JEV-powered market decision bot for stocks, crypto and memes

</details>

### EthanAlgoX/jev-trading

<details><summary>README 발췌</summary>

Market data &amp; news → Model judgment → Policy checks → Buy / Sell / Hold

</details>

### jiayylu/jev-as-quant

<details><summary>README 발췌</summary>

把 System-1 决策模型（Laya / Jev）当作量化系统里的"判断层"，并和 Claude（System 2）组合使用。 从需求分析、任务判断、架构设计、代码实现到模拟实验的完整项目，结论好的坏的都报告。

</details>

### zzsong1023/jev-market-reflex

<details><summary>README 발췌</summary>

Jev Market Reflex connects live BTC/USD, ETH/USD, and SOL/USD market data to Jev, turns compact market state into typed BUY / SELL / HOLD decisions, and applies them to a simulated paper portfolio.

</details>

### daviddme/tradingview-indicator-search-mcp-server

<details><summary>README 발췌</summary>

Search TradingView's public indicator and strategy library from Claude, Cursor, or any MCP client, and pull the full Pine Script source of any open-source script.

</details>

### Eric-Zhou-0302/jev-A-share-trader

<details><summary>README 발췌</summary>

jev-A-share-trader 使用 AKShare 或 Tushare 获取 A 股行情，计算技术指标与形态证据，由 Jev 评估各个维度，再汇总为一个买入、持有或卖出判断。你可以分析一只股票、跟踪自选股，也可以批量扫描自己指定的沪深京 A 股列表。

</details>

### rikkooo/jev-trade

<details><summary>README 발췌</summary>

Jev Trade is a transparent market-judgment simulator. It freezes Jev's typed view of a stock before the outcome is known, applies deterministic risk and paper-trading rules, and scores the result against simple baselines.

</details>

### xuboboo/ashare-trader

<details><summary>README 발췌</summary>

&gt; 🌐 在线面板： —— 手机/电脑打开即见实时盘面。 &gt; 数据来自本机运行的后端（bun run start，端口 3005；https 页面访问 localhost 浏览器有安全豁免）， &gt; 远程查看可给后端开隧道并用 ?api=https://隧道地址 指向。

</details>

### zadescoxp/kadeconsole

<details><summary>README 발췌</summary>

&gt; An equity research console (like a Bloomberg terminal) — free, open-source, and AI-powered.

</details>

### Gaurav-Gosain/jev-alpha-bench

<details><summary>README 발췌</summary>

Does Jev, TypeSafe's System One model, predict stock returns from financial news? Built on jev-go.

</details>

### JordiParraCrespo/typesafe-ai-trading-showcase

<details><summary>README 발췌</summary>

Live BTC, ETH, and XRP prices with a shared TypeSafe buy/wait demonstration. No trades are placed. Not financial advice.

</details>

### jpanasuk-netizen/15-min-BTC-JAP

<details><summary>README 발췌</summary>

Jev Agent Paper-to-live desk — Kalshi BTC 15-minute YES/NO.

</details>

### mahynotch/newsscore

<details><summary>README 발췌</summary>

News sentiment scoring for stocks, powered by TypeSafe Jev by default. Mainstream financial news APIs go in, a pluggable scoring function (TypeSafe's Jev by default) scores every article, and one aggregate number per symbol comes out. Use it from Python (sync or async) or from the newsscore command 

</details>

### Siim/jev-claim-vs-measured

<details><summary>README 발췌</summary>

A post with ~400k views says TypeSafe's Jev is the fastest AI model ever built for trading, makes calibrated buy/sell decisions in under 100 ms, and shows how to build an HFT system on it. The article behind it contains no backtest, no P&amp;L and no hit rate. So I ran the tests: on the raw tape at one 

</details>

### Spykoninho/trading-bot-jev

<details><summary>README 발췌</summary>

Un bot de trading crypto construit pour répondre à une question : à quoi sert Jev, le modèle « System One » de TypeSafe, et apporte-t-il quelque chose par rapport à un algorithme seul ?

</details>

### itsadrianxv/jev-quant

<details><summary>README 발췌</summary>

jev-quant is a C++ trading system leveraging Jev, a TypeSafe model good at making instant decisions, a trait that makes it especially good at live trading.

</details>

### lizhuojunx86/llm-memory-audit

<details><summary>README 발췌</summary>

If a language model remembers how a market event turned out, a backtest run through it measures its memory, not its judgment. This repo holds pre-registered tests for that, one folder per study.

</details>

### r4topunk/jev-trading-study

<details><summary>README 발췌</summary>

Interactive write-up (EN/PT): https://r4topunk.github.io/jev-trading-study/ · Português: README.pt.md

</details>

### valuecodes/jev-on-air

<details><summary>README 발췌</summary>

JevOnAir monitors livestreams in real time, transcribes speech, detects market-moving statements with Jev, and turns them into structured simulated trade signals.

</details>

### zd87pl/jevtrader

<details><summary>README 발췌</summary>

A small Python research lab for testing whether changes in corporate disclosures help predict subsequent stock returns. It combines JEV semantic features, a ridge regression model, deterministic filters, and an immutable SQLite ledger.

</details>

### PineappleBingo/tradingview-indicator-search-mcp-server

<details><summary>README 발췌</summary>

Search TradingView's public indicator and strategy library from Claude, Cursor, or any MCP client, and pull the full Pine Script source of any open-source script.

</details>
