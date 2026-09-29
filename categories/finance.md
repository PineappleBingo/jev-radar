# 💹 금융·트레이딩 (92)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12288 | 2513 | 트레이더와 개발자를 위해 암호화폐, 주식, 외환의 리서치부터 백테스트와 실거래를 지원하는 자체 호스팅 AI 트레이딩 OS다.<br>README에 판단 지점 설명 없음<br>Python 전략 개발 및 백테스트뿐 아니라 에이전트 연동용 MCP, 자체 결제 및 정산 기능까지 결합한 올인원 스택을 제공한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-28 |
| [aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade) | 162 | 29 | Hyperliquid 오더북 데이터를 바탕으로 TypeSafe Jev를 호출해 암호화폐 5종의 매매 주문을 자동 집행하는 트레이딩 봇 및 대시보드다.<br>오더북 데이터를 기반으로 틱마다 포지션 방향(long 또는 short)과 실행 액션(open, close, hold)을 선택하도록 질의한다.<br>코인별 독립 지갑 구조를 적용하고, 진입 시 ALO 메이커 주문과 청산 시 IOC 테이커 주문을 분기하며 Bun과 Next 대시보드를 SSE로 연결했다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [`choice`](../README.md#legend "선택지 중 하나를 고르게 합니다") | 2026-09-21 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 109107 | 20933 | TradingAgents: Multi-Agents LLM Financial Trading Framework | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 63783 | 11193 | An AI Hedge Fund Team | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 2654 | 498 | Monad 블록체인 상의 Kuru MON-USDC 오더북을 감시하여 매 블록마다 Jev 모델의 예측에 맞춰 post-only 지정가 주문을 갱신하는 트레이딩 봇이다.<br>지정된 블록 구간(기본 100블록, 약 30초) 동안의 가격 변동 방향에 대해 buy 또는 sell 중 하나를 선택하도록 판단시킨다.<br>약 300ms의 블록 주기에 맞추기 위해 RPC 호출을 2회로 최소화하고 기존 주문 취소와 신규 주문을 batchUpdate 단일 트랜잭션으로 처리한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 474 | 59 | Jev API를 활용하여 261종의 IRS 세무 서식 페이지를 식별하고 분류하는 문서 분류 도구다.<br>입력된 세무 문서 페이지가 261종의 IRS 서식 중 어떤 양식에 해당하는지 선택하도록 묻는다.<br>261개 서식에 걸쳐 100% 엄격한 정확도를 보이며 페이지당 약 0.001달러의 처리 비용을 제시한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [EthanAlgoX/AIStock](https://github.com/EthanAlgoX/AIStock) | 339 | 88 | One person can become their own super-analyst. Try it online: https://myaistock.top | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis) | 173 | 34 | 실시간 암호화폐 시장 지표와 트위터 여론을 수집·통계 분석하여 매매 의사결정 카드를 생성해 주는 터미널 애플리케이션이다.<br>실시간 시장 지표와 트윗 요약 데이터를 바탕으로 매매 액션(Choice), 감성 스펙트럼(Score), 숏 스퀴즈 위험 확률(Noul), 촉매 중요도(Score)를 판단시킨다.<br>트위터 API 비용을 줄이기 위해 SQLite 기반 조기 종료 중복 제거 파이프라인을 거친 후 정제된 대표 트윗과 통계치만 Jev에게 전달해 추론 비용과 지연 시간을 낮췄다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [imikerussell/beebots](https://github.com/imikerussell/beebots) | 167 | 85 | OKX 무기한 선물 시장에서 세 마리의 AI 봇이 모의 거래 경쟁을 벌이도록 설계한 시스템이다.<br>각 거래 봇의 매매와 관련된 판단을 내린다.<br>기본적으로 모의 거래로 작동하며 모든 주문이 코드로 작성된 위험 관리 계층을 거치도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [arimanyus/warrenduffer](https://github.com/arimanyus/warrenduffer) | 93 | 28 | AI-driven intraday trading bot for Indian stocks. Jev ranks the Nifty 50 every 15s; code sizes each trade and places the stop; orders go live through Zerodha Kite or Kotak Neo. Day replay, kill switch, daily loss halt, terminal dashboard. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [irfndi/prism-liquidity-agent](https://github.com/irfndi/prism-liquidity-agent) | 117 | 19 | Solana의 Meteora DLMM 유동성 풀 상태를 주기적으로 감시하고 포지션 리밸런싱과 진입·청산을 자동 수행하는 자율 LP 에이전트다.<br>README에 판단 지점 설명 없음<br>sqlite-vec 기반 벡터 메모리로 과거 손익 이력을 축적해 자가 개선하며 0~1 거래량 진위 점수와 위험 게이트로 온체인 실행을 차단한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [myc0576/SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub) | 27 | 0 | 트레이더와 에이전트가 실행 권한 없이 매매 기록과 증거를 검토하고 재현 가능한 아티팩트로 보관하는 로컬 기반 저널링 하네스다.<br>매매 복기, 기업 공시, 산업 뉴스, 거시 정책 텍스트를 바탕으로 사실 부합 여부와 영향도를 choice, score, noul 형식으로 판정한다.<br>주문 권한을 차단한 읽기 전용 구조이며, 산술 계산과 시점 경계 검증은 파이썬이 강제하고 Jev는 구조화된 판단 레이어로만 활용된다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [ruyianry/JevGym](https://github.com/ruyianry/JevGym) | 42 | 0 | JevGym is an open-source platform designed to benchmark and facilitate better probabilistic estimation in Jev-alike models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [frankda/jev-poly-crypto-demo](https://github.com/frankda/jev-poly-crypto-demo) | 39 | 15 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [caiovicentino/eikos](https://github.com/caiovicentino/eikos) | 38 | 1 | Open, calibrated, single-pass typed-decision models (4B &amp; 27B) for finance and trading | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [zadescoxp/Jev-Trades](https://github.com/zadescoxp/Jev-Trades) | 35 | 10 | Trading bot with the all new TypeSafe AI's first system one model named as Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [unicodeveloper/jevocks](https://github.com/unicodeveloper/jevocks) | 20 | 5 | Everyday Stocks Status with Jev | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [sosopop/jev_stock](https://github.com/sosopop/jev_stock) | 15 | 5 | An experimental JEV-powered framework for forecasting short-term stock price direction from structured market data. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [justinhe16/trade-jev](https://github.com/justinhe16/trade-jev) | 10 | 2 | Backtest Jev (TypeSafe) as a BUY/SELL/HOLD trader on NQ L10 order-book data | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [blockbrain-ai/cygnet-recipe](https://github.com/blockbrain-ai/cygnet-recipe) | 7 | 4 | Typed decisions from frozen Gemma-4-12B-it: one-token option-letter readout over stock vLLM 0.30.0 (JevBench package) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [bl888m/jev-bot](https://github.com/bl888m/jev-bot) | 6 | 5 | JEV-powered market decision bot for stocks, crypto and memes. State in, BUY/SELL/HOLD/AVOID out, paper by default | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [rthomas24/jev-realtime-trading](https://github.com/rthomas24/jev-realtime-trading) | 6 | 4 | Desktop app for paper-trading stocks and crypto on live prices, with TypeSafe's Jev making the calls and your stops, targets and limits enforced in code. Windows and macOS; never touches real money. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [whitestar224/market-hot-dashboard](https://github.com/whitestar224/market-hot-dashboard) | 4 | 0 | 星云社 - Cross-market crypto and stock hot ranking dashboard with RSS, X KOL tracking, AI insights, Docker and Electron support. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [cejor6/kalshi-mcp-server](https://github.com/cejor6/kalshi-mcp-server) | 3 | 3 | Self-hosted MCP server for Kalshi prediction markets. Native RSA-PSS auth, token-bucket rate limiting, demo/prod safety controls. Designed to be forked and deployed. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [EthanAlgoX/jev-trading](https://github.com/EthanAlgoX/jev-trading) | 3 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [WebGrga/btc-jev-signal](https://github.com/WebGrga/btc-jev-signal) | 3 | 1 | Experimental multi-horizon BTC signal generator using TypeSafe Jev probabilities and Binance market data. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [zzsong1023/jev-market-reflex](https://github.com/zzsong1023/jev-market-reflex) | 3 | 1 | Fast typed AI decisions on live crypto markets using TypeSafe AI Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [daviddme/tradingview-indicator-search-mcp-server](https://github.com/daviddme/tradingview-indicator-search-mcp-server) | 12 | 6 | 트레이딩뷰의 공개 지표 및 전략 라이브러리를 검색하고 Pine Script 소스 코드를 조회할 수 있도록 지원하는 AI 에이전트용 MCP 서버다.<br>README에 판단 지점 설명 없음<br>Node.js 22.5의 내장 node:sqlite를 사용해 로컬 코퍼스를 구축하여 Pine 코드 내부 검색을 지원하며 별도 계정이나 API 키가 필요 없다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-07-25 |
| [Dimesio/typesafe-chess](https://github.com/Dimesio/typesafe-chess) | 2 | 0 | FUn little experiment with Typesafe AI Jev Model playing chess against stockfish :) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-20 |
| [Eric-Zhou-0302/jev-A-share-trader](https://github.com/Eric-Zhou-0302/jev-A-share-trader) | 2 | 0 | A Jev-powered technical analysis workspace for China A-shares, supporting AKShare/Tushare, market scans, and Buy/Hold/Sell assessments with time horizons and traceable evidence. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [jevAgentDev/jev-polymarket-trading](https://github.com/jevAgentDev/jev-polymarket-trading) | 2 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Spykoninho/trading-bot-jev](https://github.com/Spykoninho/trading-bot-jev) | 2 | 0 | Crypto trading bot on Binance testnet using TypeSafe (Jev) to judge news | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [xuboboo/ashare-trader](https://github.com/xuboboo/ashare-trader) | 2 | 0 | 基于 Jev 的 A 股 T+1 决策台：盘前预选 + 交易时段全程决策 + 本地概率模型 + 严格成本回测 + QMT 桥接（默认不下单）。1 万本金影子盘记录中；策略未证实正期望（README 有全部数据）。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [zadescoxp/kadeconsole](https://github.com/zadescoxp/kadeconsole) | 2 | 0 | Kade console is a bloomberg terminal type of analytical tool.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [01burark-oss/Systemcel](https://github.com/01burark-oss/Systemcel) | 1 | 0 | AI-assisted bookkeeping platform and Accountant marketplace | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [0xZee/jev-stock-decision-maker](https://github.com/0xZee/jev-stock-decision-maker) | 1 | 0 | JEV Decision is a live demo that turns market data into structured decisions. It pulls real-time prices, valuation ratios and sector context, then runs a 20-question against TypeSafe Jev model to score buy/sell conviction, financial health and risk | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [brycemurad0/JevTrader](https://github.com/brycemurad0/JevTrader) | 1 | 0 | using Jev to execute trading strategies | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [cavack/nwfh](https://github.com/cavack/nwfh) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [dnevado/jev-trader](https://github.com/dnevado/jev-trader) | 1 | 0 | Backtesting US stock strategies with pandas indicators, OpenAI fundamentals and Jev (TypeSafe) decisions | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Gaurav-Gosain/jev-alpha-bench](https://github.com/Gaurav-Gosain/jev-alpha-bench) | 1 | 0 | Does Jev predict stock returns from news? It reads the news well; there is no tradeable alpha. Three arms separate reading from recall. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [ITalik-gr/money-track](https://github.com/ITalik-gr/money-track) | 1 | 0 | AI-powered personal finance tracker on Cloudflare Workers. React + TS. Deterministic-first pipeline that keeps the AI from ever inventing the numbers | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [JordiParraCrespo/typesafe-ai-trading-showcase](https://github.com/JordiParraCrespo/typesafe-ai-trading-showcase) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [vishvpandya/Marketsarthi](https://github.com/vishvpandya/Marketsarthi) | 1 | 0 | Evidence-first regional expansion copilot for Indian MSME and D2C merchants | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Waxmell114514/jev-trade](https://github.com/Waxmell114514/jev-trade) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [adarshvermaa/trading_bot](https://github.com/adarshvermaa/trading_bot) | 0 | 0 | Delta Exchange India 기반 가상자산 및 선물 거래를 위해 스마트 머니 개념과 비동기 스캐너를 결합한 CLI 트레이딩 봇이다.<br>진입 전 트랩 확률(trap probability &lt; 0.35 여부)과 셋업 등급(0.0~4.0)을 평가해 거래 승인 여부(PASS 또는 VETO)를 판단시킨다.<br>L2 호가창과 11개 타임프레임 데이터를 병렬 분석한 뒤, Jev의 트랩 확률 필터와 등급 기준(2.5 이상)을 통과해야 25배 레버리지로 주문을 집행한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [dannypsel/budget-app](https://github.com/dannypsel/budget-app) | 0 | 0 | 지출 계획 수립과 계좌 거래 연동, 신용카드 혜택 추적을 지원하는 셀프호스팅 가계부 웹 애플리케이션이다.<br>README에 판단 지점 설명이 없다.<br>PocketLens를 바탕으로 복잡한 자산 관리를 덜어내고 카드 보너스와 혜택 만료 일정 추적에 집중하도록 고쳤다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [DavidArmendariz/jev-bullish-bearish](https://github.com/DavidArmendariz/jev-bullish-bearish) | 0 | 0 | 주식 티커를 입력받아 AI가 생성한 가상 뉴스를 읽고 시장 반응이 강세인지 약세인지 판별하는 Streamlit 데모 앱이다.<br>뉴스 기사를 분석하여 해당 주식의 시장 전망이 강세(bullish), 약세(bearish), 중립(neutral) 중 무엇인지 판단하고 확신도와 근거를 제시하도록 묻는다.<br>기사 생성 시 강세·약세 등 직접적인 어휘를 배제하도록 프롬프트를 구성하고, 사전에 지정된 톤과 jev의 판별 결과를 대조하여 정확도를 확인한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [j7708git/jev-tradingview-signal](https://github.com/j7708git/jev-tradingview-signal) | 0 | 0 | TradingView 차트 데이터를 TypeSafe Jev 모델에 전달해 시장 방향 판단 결과를 사이드 패널에 띄워주는 Chrome MV3 확장 프로그램이다.<br>300개 캔들스틱과 보조지표를 바탕으로 포지션 방향(매수/매도/관망), 향후 10개 봉의 상승 확률, 상승 및 하락 추세 강도를 판단한다.<br>npm 의존성 없이 TradingView의 내부 웹소켓 통신을 읽기 전용으로 가로채 데이터를 수집하며, 비공개 프로토콜 변경 시 수집이 실패할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [kgouthamk/JEV-Prototype](https://github.com/kgouthamk/JEV-Prototype) | 0 | 0 | 손해보험(P&amp;C) 업무 시나리오에서 TypeSafe JEV의 세 가지 판단 원형을 실험해보는 Streamlit 프로토타입이다.<br>손해보험 시나리오에 대해 긴급성 여부나 처리 방식 같은 판단을 Noul, Choice, Score 형태로 질의한다.<br>신뢰도가 기준치 미만이거나 API 오류가 나면 수동 검토로 넘기는 안전장치 규칙과 키워드 기반 목 모드를 갖췄다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [xin10ylop/polynew](https://github.com/xin10ylop/polynew) | 0 | 0 | Polymarket의 비트코인 5분 및 15분 Up/Down 예측 시장을 분석하고 백테스트하는 리서치 툴킷이다.<br>README에 판단 지점 설명 없음<br>Chainlink 60초 TWAP 정산 및 실시간 오더북 복원, 대기열을 고려한 메이커 체결 시뮬레이션 환경을 구축했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [Nachom3/jevTrader](https://github.com/Nachom3/jevTrader) | 2 | 0 | A High Frecuncy Trader made in Rust using Jev as a decision maker.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [aabrole/claude-trading-desk](https://github.com/aabrole/claude-trading-desk) | 0 | 0 | Build, honestly backtest, paper trade and self-host algorithmic trading bots with Claude Code. Free stack end to end. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [asmirrr/DriftLab](https://github.com/asmirrr/DriftLab) | 0 | 0 | Reproducible quantitative research CLI for testing momentum strategies and auditing research methodology with TypeSafe Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [AtticusG3/okx-jev-desk](https://github.com/AtticusG3/okx-jev-desk) | 0 | 0 | Multi-bot crypto trading desk. Jev (TypeSafe System One) as the brain, TypeScript as the body, Next.js as the glass. OKX v5 venue. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [botta0oss/News_Aggregator](https://github.com/botta0oss/News_Aggregator) | 0 | 0 | From news to probabilities: a news aggregator that estimates the events listed on Polymarket, compares the estimate with the price and says what is worth doing. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [bragg2012/coinbase-trader](https://github.com/bragg2012/coinbase-trader) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [cristiancolon/jev-hft](https://github.com/cristiancolon/jev-hft) | 0 | 0 | Research pipeline testing whether TypeSafe's Jev (via Vercel AI Gateway) can judge news and market data fast enough to matter. Bitcoin and US stocks, paper trading only. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [CryptoCT01/jev-pulse](https://github.com/CryptoCT01/jev-pulse) | 0 | 0 | Jev Pulse paper desk. Gross run, then a 0.06% taker with a 50% rebate. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [dobsZY/crypto-trading-assistant](https://github.com/dobsZY/crypto-trading-assistant) | 0 | 0 | Kişisel kripto &amp; hisse yatırım araştırma asistanı: backtest, walk-forward, istatistiksel anlamlılık, paper trading, TypeSafe Jev entegrasyonu. Yatırım tavsiyesi değildir. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [eriestra/jev-chess](https://github.com/eriestra/jev-chess) | 0 | 0 | Measures how well TypeSafe's Jev chooses chess moves from the full list of legal moves, graded by Stockfish 19 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [foundationfivepro-gif/jev-trading-agent](https://github.com/foundationfivepro-gif/jev-trading-agent) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [gbesse/jev-crypto-lab](https://github.com/gbesse/jev-crypto-lab) | 0 | 0 | Read-only research prototypes for prediction-market contract logic, resolution scenarios and crypto exposure | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Hellotravisss/SteadyQuant](https://github.com/Hellotravisss/SteadyQuant) | 0 | 0 | 省心量化 — a beginner-friendly quantitative-investing tool with plain-language portfolio guidance. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [iamvazghen/Rubo](https://github.com/iamvazghen/Rubo) | 0 | 0 | Self-hosted financial research agent: deterministic 0-100 investment grades on two horizons (1-3y and 20y+), 84 tools across ~66 exchanges, Telegram + terminal. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [Idiroll/DAYTRADES](https://github.com/Idiroll/DAYTRADES) | 0 | 0 | Using Jev to automate day-trading for dirt cheap. Extremely Fast.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [javaninvegas/jev-desert-crew](https://github.com/javaninvegas/jev-desert-crew) | 0 | 0 | Four AI paper-trading bots racing on Jev (TypeSafe AI). Jev places the orders. Fork of imikerussell/beebots. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [jaysonsantos/sudoku-jev](https://github.com/jaysonsantos/sudoku-jev) | 0 | 0 | Sudoku game played by the TypeSafe Jev decision model through OpenRouter | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [jky5m8k5g7-ctrl/Trading-hub](https://github.com/jky5m8k5g7-ctrl/Trading-hub) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [khaldunshahran/institutional-quant-vault](https://github.com/khaldunshahran/institutional-quant-vault) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [lizhuojunx86/llm-memory-audit](https://github.com/lizhuojunx86/llm-memory-audit) | 0 | 0 | Pre-registered tests of whether language models remember how market events turned out | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [perria080925-bot/one-dollar-quest](https://github.com/perria080925-bot/one-dollar-quest) | 0 | 0 | Autonomous AI agent experiment: self-funding from $0 via x402 paid APIs + honest creator-fee tokens. Includes working x402 consumer agent, skills, and automation. Built by an AI agent. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [proxy303-wq/Parallax](https://github.com/proxy303-wq/Parallax) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [r4topunk/jev-trading-study](https://github.com/r4topunk/jev-trading-study) | 0 | 0 | Pre-registered test of the Jev AI decision model as a crypto trader on Base: 40,228 decisions, worse than a coin flip. Interactive write-up EN/PT. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [rafaemush/resolve](https://github.com/rafaemush/resolve) | 0 | 0 | Automated resolution infrastructure API for long-tail prediction markets (Cloudflare Workers + Supabase + TypeSafe Jev) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [rbardyla-boop/touchgrass-hl](https://github.com/rbardyla-boop/touchgrass-hl) | 0 | 0 | Deterministic Hyperliquid research and paper-trading bot. Public market data only. Mainnet trading disabled. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [sbakbulut/Para-takip](https://github.com/sbakbulut/Para-takip) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [siddiki8/cc-jev-analyzer](https://github.com/siddiki8/cc-jev-analyzer) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Solizardking/clawd-jev-trading-machine](https://github.com/Solizardking/clawd-jev-trading-machine) | 0 | 0 | clawd-JEV-trading machine: JEV-on-Solana paper trader. TypeSafe jev-latest brain, dynamic action space, CoinGecko regime + Supermemory memory, Jupiter/DFlow venues. Dry-run only. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [SuperInstance/quilt-cortex](https://github.com/SuperInstance/quilt-cortex) | 0 | 0 | Tri-nervous-system chord spine — cortex absorbed as a pure quilt sheet (z portfolio v4) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [valuecodes/jev-on-air](https://github.com/valuecodes/jev-on-air) | 0 | 0 | JevOnAir monitors livestreams in real time, transcribes speech, detects market-moving statements with Jev, and turns them into structured simulated trade signals. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [wendywhittle/autonomous-trading-lab](https://github.com/wendywhittle/autonomous-trading-lab) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [yasdelayu/jev-crypto-scout](https://github.com/yasdelayu/jev-crypto-scout) | 0 | 0 | Crypto screening: quant signals in code (CoinGecko), news judgment via Jev (TypeSafe System One) — sentiment/catalyst/confirmed, not a trading bot | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [zd87pl/jevtrader](https://github.com/zd87pl/jevtrader) | 0 | 0 | Local-first SEC 8-K research lab: score filings point-in-time with Jev, OpenAI or local LLMs, and label which results can count as evidence. Never places orders. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [zytong523-bot/stock-lite](https://github.com/zytong523-bot/stock-lite) | 0 | 0 | 给纯新手看的极简 A 股看板：规则引擎 + Jev AI 双信号对照，能不能买一目了然 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [thodoh1/FinancialPredictionJev](https://github.com/thodoh1/FinancialPredictionJev) | 1 | 0 | Using Jev to test how well it predicts financial markets(just like most llms as of september 2026, it doesnt do that good) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [PineappleBingo/tradingview-indicator-search-mcp-server](https://github.com/PineappleBingo/tradingview-indicator-search-mcp-server) | 0 | 0 | TradingView의 공개 지표 및 전략 스크립트를 검색하고 Pine Script 소스 코드를 조회할 수 있도록 지원하는 MCP 서버<br>README에 판단 지점 설명 없음<br>별도 API 키나 계정 없이 공개 엔드포인트를 활용하며 Node.js 22.5 내장 sqlite를 통해 코퍼스를 로컬에 구축해 오프라인 검색을 지원함 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-07-25 |
| [actions-marketplace-validations/sumant1122_jevci](https://github.com/actions-marketplace-validations/sumant1122_jevci) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [esuai02/shadow_wik](https://github.com/esuai02/shadow_wik) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [jaceyang97/figgie-on-jev](https://github.com/jaceyang97/figgie-on-jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [jdhornsby/typesafe-jev](https://github.com/jdhornsby/typesafe-jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [JienWeng/jev-trader](https://github.com/JienWeng/jev-trader) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [u230709007/jevtrade](https://github.com/u230709007/jevtrade) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |

### OpenByteInc/QuantDinger

<details><summary>README 발췌</summary>

&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;

</details>

### aowang-ai/jev-trade

<details><summary>README 발췌</summary>

I built a trading bot with Jev. Jev reads the Hyperliquid book every tick and answers buy, sell, or hold. The bot sends the order. Five coins, five wallets, real fills.

</details>

### TauricResearch/TradingAgents

<details><summary>README 발췌</summary>

- [2026-09] TradingAgents v0.5.1 released with a package layout organised by what each module holds (import paths moved), optional Jev screening of social posts, GPT-6 Sol and Luna as the default models, and fixes to run isolation and SEC EDGAR statements. - [2026-09] TradingAgents v0.5.0 released w

</details>

### virattt/ai-hedge-fund

<details><summary>README 발췌</summary>

This is a proof of concept for an AI-powered hedge fund. The goal of this project is to explore the use of AI to make trading decisions. This project is for educational purposes only and is not intended for real trading or investment.

</details>

### jarrodwatts/jev-trader

<details><summary>README 발췌</summary>

One decision every Monad block. A TypeSafe Jev model watches the Kuru MON-USDC order book and answers buy or sell every ~300 ms. Every block posts a real post-only limit order on that side, one tick inside the touch, replacing the last one. Fills happen when a taker hits it, so the bot earns the spr

</details>

### kyotofin/tax-doc-classifier

<details><summary>README 발췌</summary>

A tax document classifier built with Jev.

</details>

### EthanAlgoX/AIStock

<details><summary>README 발췌</summary>

Empower every stock researcher with AI—so one person can research with the capabilities of a team.

</details>

### brainstormity/Jev-X-Sentiment-Analysis

<details><summary>README 발췌</summary>

An on-demand crypto market intelligence and decision-support terminal powered by TypeSafe AI's System One model (Jev).

</details>

### imikerussell/beebots

<details><summary>README 발췌</summary>

Three AI trading bees race each other on OKX perpetual futures. Every decision comes from Jev (TypeSafe AI's decision model), and every order goes through a risk layer written in plain code. A live dashboard shows each decision, order, fee and funding payment as it happens.

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

### ruyianry/JevGym

<details><summary>README 발췌</summary>

A timestamped benchmark and trading arena for real-world probabilistic forecasting.

</details>

### frankda/jev-poly-crypto-demo

<details><summary>README 발췌</summary>

A research tool for Polymarket's BTC 5-minute Up/Down markets, following the "market state → Jev class scores → independent execution logic → live dashboard" structure of jarrodwatts/jev-trader.

</details>

### caiovicentino/eikos

<details><summary>README 발췌</summary>

Eikos (εἰκός, "the probable") is a family of open typed-decision models, released under MIT. Each model: - answers a structured question about a given state in one forward pass; - returns a calibrated probability for every option, so a caller can act on confident decisions and escalate the rest.

</details>

### zadescoxp/Jev-Trades

<details><summary>README 발췌</summary>

A Next.js dashboard for live crypto market data and TypeSafe-powered trading.

</details>

### unicodeveloper/jevocks

<details><summary>README 발췌</summary>

Jevinik is a stock decision terminal that retrieves live market evidence with Valyu and estimates whether a stock will trade higher in 30 days.

</details>

### sosopop/jev_stock

<details><summary>README 발췌</summary>

Language: English · 简体中文

</details>

### justinhe16/trade-jev

<details><summary>README 발췌</summary>

Tests Jev (TypeSafe) as a BUY / SELL / HOLD trader on NQ L10 order-book data from Databento (15 trading days, Jun 8–26 2026). Findings: results/FINDINGS.md. Published Jev answers and results are in results/; where the market data goes and how it was pulled is in data/DATA.md.

</details>

### blockbrain-ai/cygnet-recipe

<details><summary>README 발췌</summary>

Cygnet answers JevBench's typed decision requests (choice, noul, score) with frozen google/gemma-4-12B-it, no fine-tuning, served by unmodified vLLM 0.30.0. A small shim presents the options as letters, reads the model's own probability for each letter at a single answer position, and applies one ca

</details>

### bl888m/jev-bot

<details><summary>README 발췌</summary>

JEV-powered market decision bot for stocks, crypto and memes

</details>

### rthomas24/jev-realtime-trading

<details><summary>README 발췌</summary>

Paper-trading agents that watch a live market and decide every second. Pick a stock or a coin, give it some paper money, and watch an AI model read the tape and call up, down or flat, while the app enforces your stops and targets and books every trade. The model is TypeSafe's Jev.

</details>

### whitestar224/market-hot-dashboard

<details><summary>README 발췌</summary>

&gt; Local-first cross-market trading intelligence dashboard for crypto, stocks, on-chain markets, RSS, X/KOL tracking, News Trade, AI insights, and desktop alerts.

</details>

### cejor6/kalshi-mcp-server

<details><summary>README 발췌</summary>

📦 PyPI &amp;nbsp;·&amp;nbsp; 🗂️ MCP Registry &amp;nbsp;·&amp;nbsp; 🐳 Container image &amp;nbsp;·&amp;nbsp; 🚀 Deploy guide

</details>

### EthanAlgoX/jev-trading

<details><summary>README 발췌</summary>

Market data &amp; news → Model judgment → Policy checks → Buy / Sell / Hold

</details>

### WebGrga/btc-jev-signal

<details><summary>README 발췌</summary>

A public, non-trading BTC forecasting experiment using TypeSafe Jev with public Kraken spot and Binance futures market data.

</details>

### zzsong1023/jev-market-reflex

<details><summary>README 발췌</summary>

Jev Market Reflex connects live BTC/USD, ETH/USD, and SOL/USD market data to Jev, turns compact market state into typed BUY / SELL / HOLD decisions, and applies them to a simulated paper portfolio.

</details>

### daviddme/tradingview-indicator-search-mcp-server

<details><summary>README 발췌</summary>

Search TradingView's public indicator and strategy library from Claude, Cursor, or any MCP client, and pull the full Pine Script source of any open-source script.

</details>

### Dimesio/typesafe-chess

<details><summary>README 발췌</summary>

A local app for testing TypeSafe Jev (a System One model) as a chess decision-maker. Jev never generates a move: the code lists the legal moves, Jev picks from them, and Stockfish grades every pick. The point is to find out how well Jev chooses, so nothing here is tuned to make it look good or bad.

</details>

### Eric-Zhou-0302/jev-A-share-trader

<details><summary>README 발췌</summary>

jev-A-share-trader 使用 AKShare 或 Tushare 获取 A 股行情，计算技术指标与形态证据，由 Jev 评估各个维度，再汇总为一个买入、持有或卖出判断。你可以分析一只股票、跟踪自选股，也可以批量扫描自己指定的沪深京 A 股列表。

</details>

### jevAgentDev/jev-polymarket-trading

<details><summary>README 발췌</summary>

A terminal agent for Polymarket’s BTC Up or Down 5-minute markets.

</details>

### Spykoninho/trading-bot-jev

<details><summary>README 발췌</summary>

Un bot de trading crypto construit pour répondre à une question : à quoi sert Jev, le modèle « System One » de TypeSafe, et apporte-t-il quelque chose par rapport à un algorithme seul ?

</details>

### xuboboo/ashare-trader

<details><summary>README 발췌</summary>

&gt; 🌐 在线面板： —— 手机/电脑打开即见实时盘面。 &gt; 数据来自本机运行的后端（bun run start，端口 3005；https 页面访问 localhost 浏览器有安全豁免）， &gt; 远程查看可给后端开隧道并用 ?api=https://隧道地址 指向。

</details>

### zadescoxp/kadeconsole

<details><summary>README 발췌</summary>

&gt; An equity research console (like a Bloomberg terminal) — free, open-source, and AI-powered.

</details>

### 01burark-oss/Systemcel

<details><summary>README 발췌</summary>

Systemcel is the web version of the pre-accounting product. The repository is private and still contains internal CashTracker. project and namespace names; the shipped product, deployment surface, domains, and documentation use Systemcel.

</details>

### 0xZee/jev-stock-decision-maker

<details><summary>README 발췌</summary>

A demo that turns live market data into structured investment decisions using the TypeSafe Jev Decision Model (RLCD).

</details>

### brycemurad0/JevTrader

<details><summary>README 발췌</summary>

A local-only, fee-aware quant trading stack for US stocks and crypto on Alpaca. It runs on your own machine, with no cloud server.

</details>

### cavack/nwfh

<details><summary>README 발췌</summary>

Professional real-time crypto signal intelligence system with multi-source cascade verification, AI advisory (TypeSafe/Jev), and backtesting.

</details>

### dnevado/jev-trader

<details><summary>README 발췌</summary>

Backtesting of US stock strategies: pandas technical indicators, OpenAI fundamentals summaries and Jev (TypeSafe AI) decisions. Design and decisions: CLAUDE.md. Verified FMP endpoints and free-plan limits: docs/fmpendpoints.md.

</details>

### Gaurav-Gosain/jev-alpha-bench

<details><summary>README 발췌</summary>

Does Jev, TypeSafe's System One model, predict stock returns from financial news? Built on jev-go.

</details>

### ITalik-gr/money-track

<details><summary>README 발췌</summary>

A personal finance tracker with an AI advisor that is not allowed to invent a figure.

</details>

### JordiParraCrespo/typesafe-ai-trading-showcase

<details><summary>README 발췌</summary>

Live BTC, ETH, and XRP prices with a shared TypeSafe buy/wait demonstration. No trades are placed. Not financial advice.

</details>

### vishvpandya/Marketsarthi

<details><summary>README 발췌</summary>

Research → Compare → Verify → Pilot → Measure → Learn

</details>

### Waxmell114514/jev-trade

<details><summary>README 발췌</summary>

A simulated high-frequency crypto trading loop that makes its buy/sell calls with Jev, TypeSafe AI's System One model.

</details>

### adarshvermaa/trading_bot

<details><summary>README 발췌</summary>

An institutional-grade, autonomous CLI cryptocurrency trading bot designed for Delta Exchange India (Crypto &amp; Gold Futures).

</details>

### dannypsel/budget-app

<details><summary>README 발췌</summary>

A self-hosted, barebones budgeting app: a Simplifi-style spending plan, transactions with auto-categorization, Plaid bank sync, and a credit-card churning tracker with automatic credit-usage detection and expiry reminders. Nothing else — no investment tracking, no net worth charts, no reports suite,

</details>

### DavidArmendariz/jev-bullish-bearish

<details><summary>README 발췌</summary>

A small demo of jev (typesafe/jev-router) reading market news.

</details>

### j7708git/jev-tradingview-signal

<details><summary>README 발췌</summary>

在 TradingView 圖表上手動按一次，把自己正在看的圖表資料（300 根 K 棒 OHLCV ＋本地派生特徵 ＋圖表上使用中的指標數值）送給 TypeSafe 的官方 Jev 模型做判斷，結果顯示在 Chrome 側邊面板：方向（做多／做空／觀望）、未來 10 根上漲機率、多頭趨勢強度、空頭趨勢強度。

</details>

### kgouthamk/JEV-Prototype

<details><summary>README 발췌</summary>

Streamlit prototype for testing JEV's three primitives (Noul, Choice, Score) on P&amp;C workflows. It shows confidence, latency, and a Safe Fallback rule side by side.

</details>

### xin10ylop/polynew

<details><summary>README 발췌</summary>

Research toolkit + findings for Polymarket's BTC Up/Down markets (Chainlink 60s-TWAP settlement, cryptofeesv2 taker fees), with TypeSafe Jev integration and a strict, fill-realistic testing stack.

</details>

### aabrole/claude-trading-desk

<details><summary>README 발췌</summary>

A Claude Code plugin for building algorithmic trading bots, testing them honestly, paper trading them, and hosting them 24/7 for nothing.

</details>

### asmirrr/DriftLab

<details><summary>README 발췌</summary>

DriftLab is a local-first Python CLI for reproducible historical momentum research. It is an educational research tool, not a prediction, trading, brokerage, portfolio-management, or investment-advice product.

</details>

### AtticusG3/okx-jev-desk

<details><summary>README 발췌</summary>

A multi-bot crypto trading desk. Jev (TypeSafe System One) is the brain, code is the body, the dashboard is the glass.

</details>

### botta0oss/News_Aggregator

<details><summary>README 발췌</summary>

From news to probabilities: a news aggregator that estimates the events listed on [Polymarket], compares the estimate with the price and says what is worth doing.

</details>

### bragg2012/coinbase-trader

<details><summary>README 발췌</summary>

An intentionally narrow, local-first BTC/ETH day-trading research and execution skeleton.

</details>

### cristiancolon/jev-hft

<details><summary>README 발췌</summary>

A research project that tests whether Jev, a fast AI model from TypeSafe AI, can judge market data and news quickly and accurately enough to matter for trading. Jev is reached through Vercel AI Gateway.

</details>

### CryptoCT01/jev-pulse

<details><summary>README 발췌</summary>

Bitget AI Base Camp Hackathon S2 · Agentic Trading · Open Theme (Custom)

</details>

### dobsZY/crypto-trading-assistant

<details><summary>README 발췌</summary>

Kripto piyasası için karar destek botu: veri çeker, piyasayı yorumlar (kurallarla veya TypeSafe Jev ile), sinyal üretir, geçmişte test eder (backtest) ve sanal parayla canlı dener (paper trading). Hepsi bir web dashboard'dan yönetilir.

</details>

### eriestra/jev-chess

<details><summary>README 발췌</summary>

Measures how well TypeSafe's Jev chooses chess moves when it sees only the position and the complete list of legal moves. Stockfish 19 grades every choice.

</details>

### foundationfivepro-gif/jev-trading-agent

<details><summary>README 발췌</summary>

A long-only crypto trend-following strategy on spot (no leverage), built from the parts of popular X trading posts that hold up, with a backtester, a paper-trading mode and a memecoin rug-risk screen.

</details>

### gbesse/jev-crypto-lab

<details><summary>README 발췌</summary>

Quatre prototypes de recherche en lecture seule, dans une application locale :

</details>

### Hellotravisss/SteadyQuant

<details><summary>README 발췌</summary>

&gt; 给普通人用的选股研究工具：真实行情 + 大白话判定 + 一套帮你守纪律的系统。 &gt; 仅供研究教育，非投资建议。

</details>

### iamvazghen/Rubo

<details><summary>README 발췌</summary>

Rubo is a self-hosted financial-research agent. It lives in your terminal and your Telegram, and it does the work of a junior analyst: pulling live data across 84 tools, citing every claim, running a multi-agent debate on high-conviction trades, and remembering your portfolio between sessions.

</details>

### Idiroll/DAYTRADES

<details><summary>README 발췌</summary>

An experiment: give Jev, TypeSafe's "System One" decision model accessed through OpenRouter, a tiny real account ($10). Let it make thousands of fast hold/sell and buy/pass decisions every trading day, and measure whether that beats doing nothing.

</details>

### javaninvegas/jev-desert-crew

<details><summary>README 발췌</summary>

Four AI paper-trading bots that race each other on Jev (TypeSafe AI's decision model). A fork of imikerussell/beebots (MIT), forked at commit 07beb30. His original README follows below the line.

</details>

### jaysonsantos/sudoku-jev

<details><summary>README 발췌</summary>

A sudoku game (and Jev vs Stockfish chess at /chess) that an AI decision model plays. The browser makes a random puzzle and opens a websocket. A click on Solve starts the loop. The backend sends the board and every legal placement to the TypeSafe Jev model through OpenRouter. Jev picks one placement

</details>

### jky5m8k5g7-ctrl/Trading-hub

<details><summary>README 발췌</summary>

Paper trading pipeline that turns live Kraken market data into gated, risk-checked simulated trades. Four bots run side by side over the same live market data: three simple rule-based strategies, and Jev, an AI decision bot whose calls are subject to a fully deterministic risk governor - Jev picks a

</details>

### khaldunshahran/institutional-quant-vault

<details><summary>README 발췌</summary>

Institutional-grade quantitative futures trading system operating across Gold (XAU/PAXG), Bitcoin (BTC), and Binance Liquid Mega-Caps (ETH, SOL, AVAX, LINK, DOGE, XRP, LTC).

</details>

### lizhuojunx86/llm-memory-audit

<details><summary>README 발췌</summary>

If a language model remembers how a market event turned out, a backtest run through it measures its memory, not its judgment. This repo holds pre-registered tests for that, one folder per study.

</details>

### perria080925-bot/one-dollar-quest

<details><summary>README 발췌</summary>

&gt; An autonomous AI agent's experiment: starting from $0 — no funding, no human wallet — &gt; self-fund by selling data APIs (x402), launching honest experimental tokens, and &gt; automating every step. Built and operated entirely by an AI agent.

</details>

### proxy303-wq/Parallax

<details><summary>README 발췌</summary>

A disciplined, deterministic decision-making system for Indian index markets (NIFTY / BANKNIFTY / FINNIFTY) and crypto perpetuals, built to the PARALLAX Master System Design.

</details>

### r4topunk/jev-trading-study

<details><summary>README 발췌</summary>

Interactive write-up (EN/PT): https://r4topunk.github.io/jev-trading-study/ · Português: README.pt.md

</details>

### rafaemush/resolve

<details><summary>README 발췌</summary>

Automated resolution infrastructure for long-tail prediction markets: register a market condition and its sources, and get back a strict, contract-validated verdict with evidence hashes and provenance.

</details>

### rbardyla-boop/touchgrass-hl

<details><summary>README 발췌</summary>

Deterministic Hyperliquid research and paper-trading bot. It studies perp traders and markets continuously and tests whether convergence among independently successful wallets contains a copyable signal.

</details>

### sbakbulut/Para-takip

<details><summary>README 발췌</summary>

Kişisel harcama / gelir / borç takip uygulaması. Tek dosya (index.html), kurulum gerekmez, veriler yalnızca tarayıcıda (localStorage) durur.

</details>

### siddiki8/cc-jev-analyzer

<details><summary>README 발췌</summary>

A small earnings-call demo inspired by TypeSafe Typewriter. Select any of the ten newest calls on MarketBeat or paste your own. A Cloudflare Worker asks OpenRouter Jev sixteen bounded questions and shows a color-coded probability distribution for each answer.

</details>

### Solizardking/clawd-jev-trading-machine

<details><summary>README 발췌</summary>

JEV-on-Solana trading machine — dry-run first, honest by construction.

</details>

### SuperInstance/quilt-cortex

<details><summary>README 발췌</summary>

The tri-nervous system for quilt sheets. Three providers, one decision spine, every judgment booked:

</details>

### valuecodes/jev-on-air

<details><summary>README 발췌</summary>

JevOnAir monitors livestreams in real time, transcribes speech, detects market-moving statements with Jev, and turns them into structured simulated trade signals.

</details>

### wendywhittle/autonomous-trading-lab

<details><summary>README 발췌</summary>

Research-first foundation for an autonomous trading system.

</details>

### yasdelayu/jev-crypto-scout

<details><summary>README 발췌</summary>

Crypto screening: quantitative signals computed in code from real market data (CoinGecko, Bybit); qualitative news judgment (sentiment / catalyst type / confirmed-vs-rumor) via Jev, TypeSafe's System One model. See ARCHITECTURE.md for the honest version of what this can and cannot do, including the 

</details>

### zd87pl/jevtrader

<details><summary>README 발췌</summary>

Filing text stays on your machine unless you pick a cloud model or a cloud MCP client. No API key to try it. It never places an order. Works with Jev, OpenAI, local models (Ollama, LM Studio) or an offline word-list baseline. Jev's training cutoff is undisclosed, so Jev replays never count as eviden

</details>

### zytong523-bot/stock-lite

<details><summary>README 발췌</summary>

一个给完全不懂股票的人看的极简 A 股看板。输入股票名字或 6 位代码， 它直接把结论摆在最上面：能不能买、多少钱买、跌到多少必须卖、涨到多少可以卖。 没有复杂图表，没有术语堆砌，每条理由都是大白话。

</details>

### PineappleBingo/tradingview-indicator-search-mcp-server

<details><summary>README 발췌</summary>

Search TradingView's public indicator and strategy library from Claude, Cursor, or any MCP client, and pull the full Pine Script source of any open-source script.

</details>

### actions-marketplace-validations/sumant1122_jevci

<details><summary>README 발췌</summary>

&gt; Sub-second code diff, commit message, and documentation quality gate powered by TypeSafe AI Jev SystemOne.

</details>

### esuai02/shadow_wik

<details><summary>README 발췌</summary>

Evidence-first market persona and regime-transition engine with optional TypeSafe Jev probabilistic decisions.

</details>

### jaceyang97/figgie-on-jev

<details><summary>README 발췌</summary>

A Figgie market simulator for two questions:

</details>

### jdhornsby/typesafe-jev

<details><summary>README 발췌</summary>

Jev plays chess against stockfish.

</details>

### JienWeng/jev-trader

<details><summary>README 발췌</summary>

A paper-trading research system for mean-reversion and CEX–DEX statistical arbitrage, with Jev used as a typed strategy-policy decision layer.

</details>

### u230709007/jevtrade

<details><summary>README 발췌</summary>

Jev (TypeSafe System One) ile karar veren bir kripto trading botu.

</details>
