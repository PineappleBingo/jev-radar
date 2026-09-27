# 🎮 게임·인터랙티브 (56)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2343 | 244 | **무엇** Qwen3-0.6B 백본 기반으로 토큰 디코딩 없이 병렬 판단 확률 분포를 출력하도록 구현된 오픈소스 Jev 복제 모델 및 훈련 파이프라인이다.<br>**판단** 게임 상태와 질문이 주어졌을 때 동적 선택지 중 최적 행동 확률(Choice), 명제 참/거짓 확률(Boolean), 정렬 등급 점수(Score)를 판단시킨다.<br>**포인트** 텍스트 토큰 생성 대신 상태·질문·후보군을 한 번의 포워드로 인코딩하고 전용 헤드로 확률 분포를 직접 출력해 4개 게임 제어에 적용했다. | 🆕 | 2026-09-21 |
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 406 | 46 | **무엇** 구조화된 에뮬레이터 RAM 상태 데이터를 바탕으로 Super Mario Bros. 게임 컨트롤러 입력을 직접 결정하는 Jev 기반 에이전트 실험 프로젝트다.<br>**판단** 게임 상태 JSON을 입력받아 컨트롤러 매크로 선택(Choice), 현재 전방 점프의 유용성 여부(Noul), 즉각적인 위험도 등급(Score)을 판단한다.<br>**포인트** 스크린샷 대신 에뮬레이터 RAM과 텔레메트리를 구조화된 JSON으로 파싱해 전달하며, 타이밍 계산은 코드가 수행하고 Jev가 직접 입력을 결정한다. | 🆕 | 2026-09-16 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 192 | 36 | **무엇** TypeSafe Jev 모델을 사용해 자율주행(오토파일럿) 행동을 시뮬레이션하는 Three.js 기반의 드라이빙 시뮬레이터 데모다.<br>**판단** 주변 교통, 도로 경계, 신호, 정지선 및 목표 경로 정보를 바탕으로 샘플링된 주행 경로 후보(조향 및 속도 조합)와 정지 여부 중 최적의 행동을 선택하도록 묻는다.<br>**포인트** 후보 경로 생성과 기하학적 제어 연산은 로컬 웹 워커에서 처리하고, 컴팩트한 상태 테이블만 서버를 통해 Jev API로 전달해 초당 1.5~4회 주행 경로를 선택한다. | 🆕 | 2026-09-17 |
| [virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev) | 101 | 10 | 요약 대기 · Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording | 🆕 | 2026-09-21 |
| [emrickgarrett/OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 39 | 9 | **무엇** Three.js와 Node.js 기반 브라우저 1v1 FPS 환경에서 TypeSafe System One 기반 AI 봇과 스나이퍼 대결을 펼치는 게임이다.<br>**판단** 서버가 약 9Hz 주기로 구조화된 게임 상태를 바탕으로 이동, 조준각(yaw, pitch), ADS, 발사, 점프 여부를 Choice와 Noul로 질의한다.<br>**포인트** API 장애 시 매치가 멈추지 않도록 동일한 액션 인터페이스를 공유하는 휴리스틱 로직을 폴백으로 구현했다. | 🆕 | 2026-09-18 |
| [Baba88611/detroit-ai-player](https://github.com/Baba88611/detroit-ai-player) | 59 | 4 | 요약 대기 · Let Your AI Play Detroit：Become Human | 🆕 | 2026-09-22 |
| [phyous/tsai-sc](https://github.com/phyous/tsai-sc) | 27 | 2 | **무엇** 구조화된 스타크래프트 셰어웨어 게임 상태를 관찰하고 TypeSafe Jev 모델의 판단으로 키보드와 마우스 입력을 제어하는 하네스 리포지토리다.<br>**판단** 정리된 아군 및 시야 상태를 바탕으로 유닛 생산, 자원 채취, 탐색, 업그레이드, 전투 등 어떤 명령을 실행할지 choice 형태로 선택하게 한다.<br>**포인트** 화면 캡처가 아닌 구조화된 게임 데이터를 사용하며, 상태 읽기와 추론 중 게임을 일시정지하고 경제와 군사 결정을 분리해 원본 미션 승리를 달성했다. | 🆕 | 2026-09-16 |
| [bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev) | 33 | 12 | 요약 대기 · A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state | 🆕 | 2026-09-21 |
| [milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon) | 6 | 1 | **무엇** RAM과 타일맵으로 추출한 게임 상태를 텍스트로 읽고 TypeSafe Jev의 판단을 거쳐 Game Boy 에뮬레이터(PyBoy)로 포켓몬스터 레드를 자동 플레이하는 자율 에이전트다.<br>**판단** 대화와 맵 정보로 구성된 텍스트 스냅샷을 기반으로 현재 턴의 상위 목표(Choice)와 각 버튼 입력/이동이 최적인지 여부(Noul 예/아니오)를 판단시킨다.<br>**포인트** 비전 모델이나 대화 기록 없이 텍스트 스냅샷과 자체 단기 메모리 주입으로 동작하며, Jev의 결정을 A* 경로 탐색과 결정론적 안전 규칙으로 보정해 실행한다. | 🆕 | 2026-09-18 |
| [ArturSkowronski/kNES](https://github.com/ArturSkowronski/kNES) | 34 | 4 | 요약 대기 · Educational implementation of NES emulator in Kotlin, based on Java vNES emulator | 🆕 | 2026-09-22 |
| [enoyola/jev-grand-prix](https://github.com/enoyola/jev-grand-prix) | 7 | 0 | 요약 대기 · An F1 racing game where TypeSafe's Jev picks the racing line and the pedals, and learns each corner's limit between laps | 🆕 | 2026-09-21 |
| [jammaru/jev-lab](https://github.com/jammaru/jev-lab) | 7 | 0 | 요약 대기 · 100 AI NPCs live in a tiny town. Jev chooses the next action; the world writes the story. | 🆕 | 2026-09-24 |
| [joshlarsen/jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner) | 7 | 3 | 요약 대기 · Chrome dino game played by Typesafe AI Jev model | 🆕 | 2026-09-17 |
| [wondertwins/jev-benchmark](https://github.com/wondertwins/jev-benchmark) | 7 | 1 | 요약 대기 · Benchmarks and a playground for TypeSafe's Jev (System One) model: chess, and who-is-the-player-talking-to for speech-to-text game NPCs | 🆕 | 2026-09-16 |
| [ably-labs/jev-pong](https://github.com/ably-labs/jev-pong) | 2 | 3 | **무엇** 모델의 판단 속도에 맞춰 공이 한 칸씩 움직이는 Pong 게임으로, Jev와 기존 LLM의 의사결정 지연 시간을 비교하는 데모다.<br>**판단** 실시간 게임 상태를 입력받아 패들을 움직이기 위한 행동 선택지를 typed choice로 판단시킨다.<br>**포인트** 언어 생성 없이 typed choice만 반환하는 Jev의 빠른 응답 속도(약 220ms)를 시각화했으며, Ably 채널로 에이전트와 플레이어를 직접 연결했다. | 🆕 | 2026-09-19 |
| [nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground) | 4 | 2 | 요약 대기 · Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI. | 🆕 | 2026-09-16 |
| [atarikcaliskan/jevball](https://github.com/atarikcaliskan/jevball) | 3 | 0 | 요약 대기 · 22 Jev models, one ball: a 3D football match where every player is its own Jev (TypeSafe AI System One) decision. Watch, or take over the number 9. | 🆕 | 2026-09-19 |
| [lmvdz/rpg-jev](https://github.com/lmvdz/rpg-jev) | 3 | 0 | 요약 대기 · A living-world RPG whose NPCs are decided by TypeSafe's Jev judge model; code owns rules, numbers and state. | 🆕 | 2026-09-23 |
| [phureewat29/jev-got](https://github.com/phureewat29/jev-got) | 3 | 0 | 요약 대기 · Jev (TypeSafe AI) PoC through Game of Thrones | 🆕 | 2026-09-19 |
| [phyous/tsai-civ2](https://github.com/phyous/tsai-civ2) | 3 | 1 | 요약 대기 · TypeSafe Jev plays original Civilization II in a browser, with live action probabilities. Experimental full-game harness. | 🆕 | 2026-09-18 |
| [siroccomask/snake-jev](https://github.com/siroccomask/snake-jev) | 3 | 0 | 요약 대기 · Snake controlled by parallel Jev assessments, with one API call per game tick. | 🆕 | 2026-09-19 |
| [stephenlb/truetype.ai-open](https://github.com/stephenlb/truetype.ai-open) | 3 | 0 | 요약 대기 · Open source replica of Truetype AI using open weight models | 🆕 | 2026-09-25 |
| [vtrivedy/jev-plays-games](https://github.com/vtrivedy/jev-plays-games) | 3 | 1 | 요약 대기 · Chess, Connect Four, and a decision model. Play Jev or watch Jev play itself. | 🆕 | 2026-09-18 |
| [ellistev/typesafe-minecraft-demo](https://github.com/ellistev/typesafe-minecraft-demo) | 2 | 2 | 요약 대기 · A Minecraft Java player controlled by TypeSafe AI, with live decisions, Canadian flag building, and a side-by-side dashboard. | 🆕 | 2026-09-17 |
| [iammusham/jev-snake](https://github.com/iammusham/jev-snake) | 2 | 0 | 요약 대기 · An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick. | 🆕 | 2026-09-17 |
| [jaibhasin/jev-flappy-bird](https://github.com/jaibhasin/jev-flappy-bird) | 2 | 0 | 요약 대기 · Jev and GPT-6 Luna race through the Flappy Bird Game | 🆕 | 2026-09-25 |
| [KyleKreuter/jev2048](https://github.com/KyleKreuter/jev2048) | 2 | 0 | 요약 대기 · Let Jev (TypeSafeAI) solve 2048 | 🆕 | 2026-09-17 |
| [rythmn1111/doom-war](https://github.com/rythmn1111/doom-war) | 2 | 0 | 요약 대기 · Two System One models fight a real Doom deathmatch. Laya (322M, open weights, local MLX) vs Jev (TypeSafe hosted). Same state, same typed questions, same shield — only the model differs. | 🆕 | 2026-09-21 |
| [shantanugoel/jev-games](https://github.com/shantanugoel/jev-games) | 2 | 0 | 요약 대기 · Visual Jev lab for multiple games and emulator platforms | 🆕 | 2026-09-17 |
| [southleft/component-charades](https://github.com/southleft/component-charades) | 2 | 0 | 요약 대기 · A Taboo-style parlour game for design systems, refereed by Jev (TypeSafe System One model) | 🆕 | 2026-09-22 |
| [ZeroTang05/Situation-Puzzle](https://github.com/ZeroTang05/Situation-Puzzle) | 2 | 1 | 요약 대기 · 这是 Jev 海龟汤 — 一款基于 Jev 模型打造的开源海龟汤情境猜谜游戏。每一道「是 / 否 / 无关」的判断，都由 Jev 现场推理；每一次「还原真相」的内容，都由 Jev 给出判断。没有预设脚本，只有会思考的 Jev，和一款"活"过来的海龟汤。UGC 内容支持，题库因你而丰富。 | 🆕 | 2026-09-27 |
| [ARCJ137442/jev-life](https://github.com/ARCJ137442/jev-life) | 1 | 0 | 요약 대기 · The Chess of Life × Jev — an experimental game: write a new ruleset, then watch a decision model play it. \| 生命棋 × Jev：实验性游戏设计——写一套新规则，然后看 Jev 怎么玩 | 🆕 | 2026-09-22 |
| [darthblanc/tictacjev](https://github.com/darthblanc/tictacjev) | 1 | 0 | 요약 대기 · A tic-tac-toe app where one player is Jev, TypeSafe AI's System One Model with live confidence scores and probabilities. | 🆕 | 2026-09-23 |
| [Eliot5566/jev-arena](https://github.com/Eliot5566/jev-arena) | 1 | 0 | 요약 대기 · Write a fighter in plain English. Jev pilots it in real time. PR-driven ladder, swappable brains. | 🆕 | 2026-09-25 |
| [GabrielBigardi/TibiaJevBot](https://github.com/GabrielBigardi/TibiaJevBot) | 1 | 0 | 요약 대기 · An autonomous game-playing decision engine for Tibia (Open Tibia / OTServ) powered by TypeSafe AI's Jev System One model. | 🆕 | 2026-09-22 |
| [JanDalhuysen/jev-clash-royale-test](https://github.com/JanDalhuysen/jev-clash-royale-test) | 1 | 1 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-19 |
| [MachineLearning-Nerd/jev-tetris](https://github.com/MachineLearning-Nerd/jev-tetris) | 1 | 0 | 요약 대기 · A visual TypeSafe demo where Jev chooses verified Tetris placements. | 🆕 | 2026-09-17 |
| [memorysaver/jev-atari-lab](https://github.com/memorysaver/jev-atari-lab) | 1 | 0 | 요약 대기 · Challenge Atari with Jev: structured decisions, value questions, and replayable experiments | 🆕 | 2026-09-27 |
| [mrmt/elevator-three](https://github.com/mrmt/elevator-three) | 1 | 0 | 요약 대기 · Jev に判断を任せる自動生成のエレクトロの楽器 | 🆕 | 2026-09-21 |
| [rchovatiya88/cyber-breach-jev](https://github.com/rchovatiya88/cyber-breach-jev) | 1 | 0 | 요약 대기 · Cyber-Breach: The Jev Protocol - A tactical cyberpunk arena combat game powered by TypeSafe AI Jev System One decision model | 🆕 | 2026-09-18 |
| [tubone24/jev-practice-speed](https://github.com/tubone24/jev-practice-speed) | 1 | 0 | 요약 대기 · A WebGL demo where you play the card game Speed against a CPU whose brain is TypeSafe AI's Jev. The whole point of the app is to measure and show Jev's decision speed and decision accuracy in real time. | 🆕 | 2026-09-21 |
| [gkvoelkl/rust-bevy-jev-ants](https://github.com/gkvoelkl/rust-bevy-jev-ants) | 0 | 0 | **무엇** Rust Bevy 기반으로 제작되어 플레이어의 자연어 명령에 따라 각 개미가 개별 행동 의도를 결정하는 시뮬레이션 게임이다.<br>**판단** 여왕 개미(플레이어)의 텍스트 명령과 개미의 상황을 바탕으로 다음에 수행할 행동 의도(intent)를 선택지로 제시해 판단하도록 요청한다.<br>**포인트** 물리 및 페로몬 이동 시뮬레이션은 60Hz로 고전적으로 처리하고, Jev 모델 의사결정 계층은 비동기로 분리했으며 룰 기반 폴백 없이 동작한다. | 🆕 | 2026-09-26 |
| [andreteow/jev-sky-islands](https://github.com/andreteow/jev-sky-islands) | 0 | 0 | 요약 대기 · Sky Island Hatchlings — hatch a creature and talk your way across 10 floating islands. Powered by TypeSafe Jev, GPT-6 Luna, GPT Image 2 and Seedance 2.5. | 🆕 | 2026-09-25 |
| [bongbong11/-_-](https://github.com/bongbong11/-_-) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-27 |
| [bugkiwi/turing-jail](https://github.com/bugkiwi/turing-jail) | 0 | 0 | 요약 대기 · Turing Jail - Let's get out! | 🆕 | 2026-09-18 |
| [codaaiteam/jev-wikiracer](https://github.com/codaaiteam/jev-wikiracer) | 0 | 0 | 요약 대기 · You vs Jev: race across Wikipedia by clicking links; Jev picks the closest of dozens each hop, one real typed decision, no hallucination. Single-file, no build. Play free: jevtypesafeai.com/games/jev-wikiracer | 🆕 | 2026-09-25 |
| [hectorlcastro09/jev-torneo-animales](https://github.com/hectorlcastro09/jev-torneo-animales) | 0 | 0 | 요약 대기 · Winner-stays-on animal tournament refereed by Jev (TypeSafe System One): a local game to feel how fast typed decisions are. UI in Spanish. | 🆕 | 2026-09-21 |
| [JackZH26/Jev-Live](https://github.com/JackZH26/Jev-Live) | 0 | 0 | 요약 대기 · Open-source Windows studio for Steam games: local AI host, editable avatars/chat, manual or JEV-assisted play, YouTube/Twitch OAuth and OBS streaming to YouTube/Twitch/X. Five-language UI; developer preview. | 🆕 | 2026-09-25 |
| [muratcanberber/JEV-TheFishGame](https://github.com/muratcanberber/JEV-TheFishGame) | 0 | 0 | 요약 대기 · 🐠 A multiplayer fish game where every AI decision is a TypeSafe Jev (System One) call — flee, hunt, roam, with live confidence bars. Node + WebSocket + Three.js. | 🆕 | 2026-09-22 |
| [Rodert/JevPlayer](https://github.com/Rodert/JevPlayer) | 0 | 0 | 요약 대기 · Jev Player Demo | 🆕 | 2026-09-21 |
| [Sayangenri/jev-adventure-game](https://github.com/Sayangenri/jev-adventure-game) | 0 | 0 | 요약 대기 · A visual AI powered text adventure where every outcome is decided by Jev TypeSafe's structured decision model. | 🆕 | 2026-09-26 |
| [scd13150/jev-field-notes](https://github.com/scd13150/jev-field-notes) | 0 | 0 | 요약 대기 · Applications, measurements and boundary analysis built on TypeSafe Jev (System One): a Jev-driven fighting game, emotion-controlled TTS, and a capability-ceiling probe | 🆕 | 2026-09-22 |
| [sergeville/HangmanGame](https://github.com/sergeville/HangmanGame) | 0 | 0 | 요약 대기 · Rust desktop Hangman with 200 words, progressive levels, an offline Odds solver, and optional JeV or local Kev duels. | 🆕 | 2026-09-26 |
| [uehaj/jev-conway-lifegame](https://github.com/uehaj/jev-conway-lifegame) | 0 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-25 |
| [YV17labs/TokenShooter](https://github.com/YV17labs/TokenShooter) | 0 | 0 | 요약 대기 · A Jev-like System One model in your browser: a small language model plays a first-person shooter on your GPU, one token per move. No server. | 🆕 | 2026-09-27 |
| [zuoliangyu/jev_puke](https://github.com/zuoliangyu/jev_puke) | 0 | 0 | 요약 대기 · jev 扑克牌测试 | 🆕 | 2026-09-27 |

### TianyuCodings/NanoJev

<details><summary>README 발췌</summary>

A 0.6B parallel decision model: states and questions in, complete probability distributions out. Zero output-token decoding.

</details>

### fhshaik/typesafe-mario

<details><summary>README 발췌</summary>

An experimental controller that lets TypeSafe's Jev model directly choose NES controller inputs for the original Super Mario Bros.

</details>

### standardagents/jevpilot

<details><summary>README 발췌</summary>

https://github.com/user-attachments/assets/4baef58e-54ef-4d17-9982-353a0b6e6f45

</details>

### virajbhartiya/laya-vs-jev

<details><summary>README 발췌</summary>

Two AI decision models play Chrome's T-Rex game side by side: Laya runs locally on Apple Silicon through MLX, while Jev uses TypeSafe's hosted API. Watch their choices, response times, survival streaks, and crash replays on a shared obstacle course.

</details>

### emrickgarrett/OneVOneJev

<details><summary>README 발췌</summary>

Server-authoritative browser FPS: queue up, fight Jev (TypeSafe System One) in a Rust-like industrial yard, first to 5 kills. Spectators watch and chat from the sidelines. Final kill gets a killcam before the next challenger.

</details>

### Baba88611/detroit-ai-player

<details><summary>README 발췌</summary>

&gt; Turn a branching narrative into structured decision-tree data, then let your AI &gt; (DeepSeek, GPT, Claude, or any OpenAI-compatible model) play through it autonomously. &gt; Observe how it handles hostage negotiations, life-or-death choices, violence, &gt; nonviolence, and other moral dilemmas.

</details>

### phyous/tsai-sc

<details><summary>README 발췌</summary>

A TypeSafe System One harness for Strongarm, the first combat mission in the original StarCraft shareware campaign, with a game recording and Jev's actual action probabilities. Inspired by TypeSafe's Doom demo.

</details>

### bytelabs-oss/clash-jev

<details><summary>README 발췌</summary>

I got early access to Jev, TypeSafe AI's new System One model, and decided to play around with it. I built clash-jev, a bot that uses Jev to make near real-time decisions on live game data. It plays Clash Royale on a real Android device.

</details>

### milanboers/jev-plays-pokemon

<details><summary>README 발췌</summary>

A small autonomous Pokémon Red agent. It uses TypeSafe's System One model, Jev: Jev reads the game state as text, answers typed questions each turn, and deterministic code turns those answers into button presses on a PyBoy Game Boy emulator.

</details>

### ArturSkowronski/kNES

<details><summary>README 발췌</summary>

kNES is a Nintendo Entertainment System (NES) emulator written in Kotlin, forked from the vNES Java emulator. This project was created primarily for fun and educational purposes, allowing developers to learn about emulation techniques and NES hardware while enjoying classic games.

</details>

### enoyola/jev-grand-prix

<details><summary>README 발췌</summary>

A racing game where TypeSafe's Jev drives an F1 car live, and you can race it.

</details>

### jammaru/jev-lab

<details><summary>README 발췌</summary>

Use cases for Jev, TypeSafe’s System One model. Jev only answers the next choice. Engines keep the rules.

</details>

### joshlarsen/jev-t-rex-runner

<details><summary>README 발췌</summary>

This copy can be played manually or controlled by TypeSafe's Jev model. Jev chooses one semantic maneuver (jump, duck, or keeprunning) for each new obstacle and selects a short or full jump profile when jumping. The browser keeps ownership of speed-aware frame timing, collision geometry, adaptive du

</details>

### wondertwins/jev-benchmark

<details><summary>README 발췌</summary>

Two hands-on benchmarks of Jev, the "System One" model from TypeSafe. Jev doesn't generate text or reason step by step. You hand it state (a JSON blob) and typed questions (yes/no, pick-one, or rate-on-a-scale) and it returns calibrated probabilities in about 200 ms. The pitch is "programmable commo

</details>

### ably-labs/jev-pong

<details><summary>README 발췌</summary>

Pong where the ball moves one step per model decision. Slow model, slow ball.

</details>

### nickthompson480/typesafe-ai-playground

<details><summary>README 발췌</summary>

A community playground for exploring TypeSafe AI with practical use cases, party games, dilemmas, and reasoning challenges. Pick an example, inspect its input and questions, and run it through the API.

</details>

### atarikcaliskan/jevball

<details><summary>README 발췌</summary>

22 Jev models, one match. JevBall is a football match in a 3D stadium where each of the 22 players is an independent decision-maker powered by Jev by TypeSafe AI (Jev is TypeSafe AI's System One model). Watch the match, open any player's head to see the options it weighed, or press J and take over a

</details>

### lmvdz/rpg-jev

<details><summary>README 발췌</summary>

A persistent multiplayer RPG whose world keeps its own agenda. TypeSafe Jev makes every in-world decision, Claude authors the world on a background thread, and code owns rules, numbers and state. The main client is a browser WebGL2 renderer that draws glyphs on real 3D terrain.

</details>

### phureewat29/jev-got

<details><summary>README 발췌</summary>

A Game of Thrones roleplay where you play Jon Snow. Each turn a story model writes the next scene, and then TypeSafe's Jev reads that scene back and answers five questions about it: where Jon now stands, what kind of scene it was, how much danger he is in, what should play under it, and whether the 

</details>

### phyous/tsai-civ2

<details><summary>README 발췌</summary>

An original Civilization II browser harness for TypeSafe Jev, with live decision probabilities and a Roman-themed spectator display. Under development; no complete-game victory has been verified yet.

</details>

### siroccomask/snake-jev

<details><summary>README 발췌</summary>

A desktop Snake experiment powered by Jev / System One. Jev assesses the board; Python combines its answers into a move. The original p5 Snake game handles movement, food, growth, and collisions.

</details>

### stephenlb/truetype.ai-open

<details><summary>README 발췌</summary>

A local replica of the Jev TypeSafe AI System One API, tuned to match its latency while reading letter logits from Gemma 4 12B. POST /v1/systemone accepts and returns the original formats for all three supported question types.

</details>

### vtrivedy/jev-plays-games

<details><summary>README 발췌</summary>

Test your game playing skills against the speed demon...Jev!

</details>

### ellistev/typesafe-minecraft-demo

<details><summary>README 발췌</summary>

An experimental Minecraft Java bot controlled through TypeSafe choices, with a live world view and the actual API input and output beside it.

</details>

### iammusham/jev-snake

<details><summary>README 발췌</summary>

An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick.

</details>

### jaibhasin/jev-flappy-bird

<details><summary>README 발췌</summary>

&gt; Jev and GPT-6 Luna race through the same Flappy Bird course. &gt; Every flap is a live model decision.

</details>

### KyleKreuter/jev2048

<details><summary>README 발췌</summary>

TypeSafe's Jev plays 2048 — many games in parallel, live in your browser.

</details>

### rythmn1111/doom-war

<details><summary>README 발췌</summary>

Two System One models fight a real Doom deathmatch. Same state. Same questions. Same shield. Only the model differs.

</details>

### shantanugoel/jev-games

<details><summary>README 발췌</summary>

A visual lab where Jev plays multiple games. This is the next step after mario-jev: the same Jev controller style, a Zero-shot Lab UI, and a plugin split so new games and emulator platforms can be added without rewriting the loop.

</details>

### southleft/component-charades

<details><summary>README 발췌</summary>

It's Taboo for design systems, and the other player is a model that can't talk.

</details>

### ZeroTang05/Situation-Puzzle

<details><summary>README 발췌</summary>

&gt; 一碗会自己聊的海龟汤 — 让 AI 主持人 Jev 陪你猜谜。

</details>

### ARCJ137442/jev-life

<details><summary>README 발췌</summary>

|简体中文 | English| |:-:|:-:|

</details>

### darthblanc/tictacjev

<details><summary>README 발췌</summary>

Tic-tac-toe, but every move for one side comes from Jev, a System One Model built for fast, structured decisions — unstructured state in, typed probabilistic decisions out.

</details>

### Eliot5566/jev-arena

<details><summary>README 발췌</summary>

Write a fighter in plain English. A System One model pilots it several times a second.

</details>

### GabrielBigardi/TibiaJevBot

<details><summary>README 발췌</summary>

An autonomous game-playing decision engine for Tibia (Open Tibia / OTServ) powered by TypeSafe AI's Jev System One model.

</details>

### JanDalhuysen/jev-clash-royale-test

<details><summary>README 발췌</summary>

A minimal, real-time Clash Royale-style game engine built in Node.js featuring:

</details>

### MachineLearning-Nerd/jev-tetris

<details><summary>README 발췌</summary>

&gt; A small arcade game where Jev chooses a complete, collision-checked Tetris placement — and Python owns the physics.

</details>

### memorysaver/jev-atari-lab

<details><summary>README 발췌</summary>

How should a teacher learn to improve the structured questions that control an Atari player?

</details>

### mrmt/elevator-three

<details><summary>README 발췌</summary>

自動生成のエレクトロを鳴らし続けるシングルファイルの楽器。 elevator-two から分岐し、音楽的な判断を TypeSafe の Jev に文脈つきで任せて、 展開と即興を豊かにすることを目指す。

</details>

### rchovatiya88/cyber-breach-jev

<details><summary>README 발췌</summary>

An infinite 3D arcade cyberpunk arena shooter built with Three.js and powered by Jev—the sub-100ms "System One" decision model developed by TypeSafe AI (released September 2026).

</details>

### tubone24/jev-practice-speed

<details><summary>README 발췌</summary>

A WebGL demo where you play the card game Speed against a CPU whose brain is TypeSafe AI's Jev. The whole point of the app is to measure and show Jev's decision speed and decision accuracy in real time.

</details>

### gkvoelkl/rust-bevy-jev-ants

<details><summary>README 발췌</summary>

An ant colony where every ant asks TypeSafe Jev what to do next. You are the queen, and your only control is a text field: you type a sentence, and twenty ants each decide for themselves what it means for them.

</details>

### andreteow/jev-sky-islands

<details><summary>README 발췌</summary>

Play: https://jev-sky-islands-rouge.vercel.app (ask whoever shared this link for the invite code)

</details>

### bongbong11/-_-

<details><summary>README 발췌</summary>

최근 RP 1~5턴과 채팅방별 구조화 상태를 Jev가 직접 판독하고, 지금 필요한 짧은 진행 프롬프트만 다음 응답에 주입하는 SillyTavern 확장입니다. 일반 LLM의 사전 요약 단계를 거치지 않습니다.

</details>

### bugkiwi/turing-jail

<details><summary>README 발췌</summary>

Turing Jail is a three-level AI interrogation game powered by TypeSafe Jev System One. Write a statement, face the warden's verdict, and try to earn your release.

</details>

### codaaiteam/jev-wikiracer

<details><summary>README 발췌</summary>

You vs Jev — race across Wikipedia. From the same start article, you and Jev both try to reach a target article using only in-article links. You click; Jev — TypeSafe AI's System One decision model — makes one real call per hop, picking the link closest to the target out of dozens. First to the targ

</details>

### hectorlcastro09/jev-torneo-animales

<details><summary>README 발췌</summary>

A small local game built to feel how fast Jev — TypeSafe's System One model — makes typed decisions. Up to 2,569 animals (land, flying and marine) fight one on one; the winner stays on and faces the next challenger until one champion is left. Every fight is decided by Jev.

</details>

### JackZH26/Jev-Live

<details><summary>README 발췌</summary>

自动玩正在升级为 Jev 战术决策 + 共用 Bot 执行器：保留玩家镜头和手动接管，目标续期不重启路径，并反馈受阻原因。见调整方案与分档对战验收门槛、房间玩法知识与 M 地图规划。新执行器需要对应 Steam 游戏构建；尚未证明超过 Pro Bot。

</details>

### muratcanberber/JEV-TheFishGame

<details><summary>README 발췌</summary>

A real-time multiplayer fish game where the AI literally decides through a language model. Every fish on the map asks Jev — a System One decision model — what to do next: flee, hunt, seek food, or roam. You steer your own fish with the mouse and try to outsmart them.

</details>

### Rodert/JevPlayer

<details><summary>README 발췌</summary>

基于 TypeSafe Jev API 的静态游戏站点。

</details>

### Sayangenri/jev-adventure-game

<details><summary>README 발췌</summary>

A visual AI-powered text adventure where every outcome is decided by Jev — TypeSafe's structured decision model. No random dice, no pre-written paths. Jev reads the full game state and picks what happens.

</details>

### scd13150/jev-field-notes

<details><summary>README 발췌</summary>

Applications, measurements and failure-mode analysis built on TypeSafe Jev — the typed-decision model that returns Choice / Score / Noul judgments instead of generated text.

</details>

### sergeville/HangmanGame

<details><summary>README 발췌</summary>

A Rust desktop Hangman game with 200 words arranged into ten approximate difficulty levels. Guess the hidden word before you run out of lives. For the probability model and decision-model boundaries, see Hangman: Probability, Information Gain, and JeV.

</details>

### uehaj/jev-conway-lifegame

<details><summary>README 발췌</summary>

Jev（TypeSafe の System One モデル jev-1.13.0）に、ライフゲームの各セルが次の世代で生きているかを判定させ、世代を進めるデモです。

</details>

### YV17labs/TokenShooter

<details><summary>README 발췌</summary>

There is no backend: the model (Qwen3.5) is downloaded once, then runs locally through WebGPU. Every move is a single token: the model writes nothing, the game reads the probability it gives to four words, Forward, Left, Right and Shoot, and plays the most likely one.

</details>

### zuoliangyu/jev_puke

<details><summary>README 발췌</summary>

一个可部署为 Node.js 服务或 Docker 容器的三人斗地主完整牌局回放，用来展示 E-FlowCode Jev 结构化决策 API。项目仍可作为纯静态演示页面运行。

</details>
