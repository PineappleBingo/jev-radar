# 🎮 게임·인터랙티브 (22)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 한눈에 보기 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2342 | 244 | **무엇** Qwen3-0.6B 백본 기반으로 토큰 디코딩 없이 병렬 판단 확률 분포를 출력하도록 구현된 오픈소스 Jev 복제 모델 및 훈련 파이프라인이다.<br>**판단** 게임 상태와 질문이 주어졌을 때 동적 선택지 중 최적 행동 확률(Choice), 명제 참/거짓 확률(Boolean), 정렬 등급 점수(Score)를 판단시킨다.<br>**포인트** 텍스트 토큰 생성 대신 상태·질문·후보군을 한 번의 포워드로 인코딩하고 전용 헤드로 확률 분포를 직접 출력해 4개 게임 제어에 적용했다. | 🆕 | 2026-09-21 |
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 406 | 46 | **무엇** 구조화된 에뮬레이터 RAM 상태 데이터를 바탕으로 Super Mario Bros. 게임 컨트롤러 입력을 직접 결정하는 Jev 기반 에이전트 실험 프로젝트다.<br>**판단** 게임 상태 JSON을 입력받아 컨트롤러 매크로 선택(Choice), 현재 전방 점프의 유용성 여부(Noul), 즉각적인 위험도 등급(Score)을 판단한다.<br>**포인트** 스크린샷 대신 에뮬레이터 RAM과 텔레메트리를 구조화된 JSON으로 파싱해 전달하며, 타이밍 계산은 코드가 수행하고 Jev가 직접 입력을 결정한다. | 🆕 | 2026-09-16 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 192 | 36 | **무엇** TypeSafe Jev 모델을 사용해 자율주행(오토파일럿) 행동을 시뮬레이션하는 Three.js 기반의 드라이빙 시뮬레이터 데모다.<br>**판단** 주변 교통, 도로 경계, 신호, 정지선 및 목표 경로 정보를 바탕으로 샘플링된 주행 경로 후보(조향 및 속도 조합)와 정지 여부 중 최적의 행동을 선택하도록 묻는다.<br>**포인트** 후보 경로 생성과 기하학적 제어 연산은 로컬 웹 워커에서 처리하고, 컴팩트한 상태 테이블만 서버를 통해 Jev API로 전달해 초당 1.5~4회 주행 경로를 선택한다. | 🆕 | 2026-09-17 |
| [emrickgarrett/OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 39 | 9 | **무엇** Three.js와 Node.js 기반 브라우저 1v1 FPS 환경에서 TypeSafe System One 기반 AI 봇과 스나이퍼 대결을 펼치는 게임이다.<br>**판단** 서버가 약 9Hz 주기로 구조화된 게임 상태를 바탕으로 이동, 조준각(yaw, pitch), ADS, 발사, 점프 여부를 Choice와 Noul로 질의한다.<br>**포인트** API 장애 시 매치가 멈추지 않도록 동일한 액션 인터페이스를 공유하는 휴리스틱 로직을 폴백으로 구현했다. | 🆕 | 2026-09-18 |
| [phyous/tsai-sc](https://github.com/phyous/tsai-sc) | 27 | 2 | **무엇** 구조화된 스타크래프트 셰어웨어 게임 상태를 관찰하고 TypeSafe Jev 모델의 판단으로 키보드와 마우스 입력을 제어하는 하네스 리포지토리다.<br>**판단** 정리된 아군 및 시야 상태를 바탕으로 유닛 생산, 자원 채취, 탐색, 업그레이드, 전투 등 어떤 명령을 실행할지 choice 형태로 선택하게 한다.<br>**포인트** 화면 캡처가 아닌 구조화된 게임 데이터를 사용하며, 상태 읽기와 추론 중 게임을 일시정지하고 경제와 군사 결정을 분리해 원본 미션 승리를 달성했다. | 🆕 | 2026-09-16 |
| [NevaMind-AI/JevTown](https://github.com/NevaMind-AI/JevTown) | 40 | 6 | 요약 대기 · jev based AI town simulation | 🆕 | 2026-09-23 |
| [milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon) | 6 | 1 | **무엇** RAM과 타일맵으로 추출한 게임 상태를 텍스트로 읽고 TypeSafe Jev의 판단을 거쳐 Game Boy 에뮬레이터(PyBoy)로 포켓몬스터 레드를 자동 플레이하는 자율 에이전트다.<br>**판단** 대화와 맵 정보로 구성된 텍스트 스냅샷을 기반으로 현재 턴의 상위 목표(Choice)와 각 버튼 입력/이동이 최적인지 여부(Noul 예/아니오)를 판단시킨다.<br>**포인트** 비전 모델이나 대화 기록 없이 텍스트 스냅샷과 자체 단기 메모리 주입으로 동작하며, Jev의 결정을 A* 경로 탐색과 결정론적 안전 규칙으로 보정해 실행한다. | 🆕 | 2026-09-18 |
| [jammaru/jev-lab](https://github.com/jammaru/jev-lab) | 7 | 0 | 요약 대기 · 100 AI NPCs live in a tiny town. Jev chooses the next action; the world writes the story. | 🆕 | 2026-09-24 |
| [joshlarsen/jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner) | 7 | 3 | 요약 대기 · Chrome dino game played by Typesafe AI Jev model | 🆕 | 2026-09-17 |
| [anxkhn/JevPlaysPokemon](https://github.com/anxkhn/JevPlaysPokemon) | 6 | 2 | 요약 대기 · Jev plays Generation 3 Pokémon via Showdown and a real FireRed ROM. | 🆕 | 2026-09-18 |
| [ably-labs/jev-pong](https://github.com/ably-labs/jev-pong) | 2 | 3 | **무엇** 모델의 판단 속도에 맞춰 공이 한 칸씩 움직이는 Pong 게임으로, Jev와 기존 LLM의 의사결정 지연 시간을 비교하는 데모다.<br>**판단** 실시간 게임 상태를 입력받아 패들을 움직이기 위한 행동 선택지를 typed choice로 판단시킨다.<br>**포인트** 언어 생성 없이 typed choice만 반환하는 Jev의 빠른 응답 속도(약 220ms)를 시각화했으며, Ably 채널로 에이전트와 플레이어를 직접 연결했다. | 🆕 | 2026-09-19 |
| [daniel4x/JevEmon](https://github.com/daniel4x/JevEmon) | 4 | 0 | 요약 대기 · Jev walks a real Pokémon FireRed ROM. | 🆕 | 2026-09-21 |
| [vtrivedy/jev-plays-games](https://github.com/vtrivedy/jev-plays-games) | 3 | 1 | 요약 대기 · Chess, Connect Four, and a decision model. Play Jev or watch Jev play itself. | 🆕 | 2026-09-18 |
| [jaibhasin/jev-flappy-bird](https://github.com/jaibhasin/jev-flappy-bird) | 2 | 0 | 요약 대기 · Jev and GPT-6 Luna race through the Flappy Bird Game | 🆕 | 2026-09-25 |
| [shantanugoel/jev-games](https://github.com/shantanugoel/jev-games) | 2 | 0 | 요약 대기 · Visual Jev lab for multiple games and emulator platforms | 🆕 | 2026-09-17 |
| [darthblanc/tictacjev](https://github.com/darthblanc/tictacjev) | 1 | 0 | 요약 대기 · A tic-tac-toe app where one player is Jev, TypeSafe AI's System One Model with live confidence scores and probabilities. | 🆕 | 2026-09-23 |
| [mittal-parth/jev-experiments](https://github.com/mittal-parth/jev-experiments) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-18 |
| [mizchi/jev-gomoku](https://github.com/mizchi/jev-gomoku) | 1 | 0 | 요약 대기 · 설명 없음 | 🆕 | 2026-09-18 |
| [tpaulshippy/shady-town](https://github.com/tpaulshippy/shady-town) | 1 | 0 | 요약 대기 · Shady Town: social-deduction party game for the living room TV, moderated by TypeSafe Jev | 🆕 | 2026-09-17 |
| [bugkiwi/turing-jail](https://github.com/bugkiwi/turing-jail) | 0 | 0 | 요약 대기 · Turing Jail - Let's get out! | 🆕 | 2026-09-18 |
| [muratcanberber/JEV-TheFishGame](https://github.com/muratcanberber/JEV-TheFishGame) | 0 | 0 | 요약 대기 · 🐠 A multiplayer fish game where every AI decision is a TypeSafe Jev (System One) call — flee, hunt, roam, with live confidence bars. Node + WebSocket + Three.js. | 🆕 | 2026-09-22 |
| [Zeb88/jev-approach-control](https://github.com/Zeb88/jev-approach-control) | 0 | 0 | 요약 대기 ·  Small air traffic control sim for a single runway (27). Give radio calls in plain English, or hand the frequency to Jev, TypeSafe's decision model, and watch it sequence, space and land the traffic. | 🆕 | 2026-09-25 |

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

### emrickgarrett/OneVOneJev

<details><summary>README 발췌</summary>

Server-authoritative browser FPS: queue up, fight Jev (TypeSafe System One) in a Rust-like industrial yard, first to 5 kills. Spectators watch and chat from the sidelines. Final kill gets a killcam before the next challenger.

</details>

### phyous/tsai-sc

<details><summary>README 발췌</summary>

A TypeSafe System One harness for Strongarm, the first combat mission in the original StarCraft shareware campaign, with a game recording and Jev's actual action probabilities. Inspired by TypeSafe's Doom demo.

</details>

### NevaMind-AI/JevTown

<details><summary>README 발췌</summary>

The first Jev-based AI simulation system.

</details>

### milanboers/jev-plays-pokemon

<details><summary>README 발췌</summary>

A small autonomous Pokémon Red agent. It uses TypeSafe's System One model, Jev: Jev reads the game state as text, answers typed questions each turn, and deterministic code turns those answers into button presses on a PyBoy Game Boy emulator.

</details>

### jammaru/jev-lab

<details><summary>README 발췌</summary>

Use cases for Jev, TypeSafe’s System One model. Jev only answers the next choice. Engines keep the rules.

</details>

### joshlarsen/jev-t-rex-runner

<details><summary>README 발췌</summary>

This copy can be played manually or controlled by TypeSafe's Jev model. Jev chooses one semantic maneuver (jump, duck, or keeprunning) for each new obstacle and selects a short or full jump profile when jumping. The browser keeps ownership of speed-aware frame timing, collision geometry, adaptive du

</details>

### anxkhn/JevPlaysPokemon

<details><summary>README 발췌</summary>

I wanted to see how Jev plays Pokémon.

</details>

### ably-labs/jev-pong

<details><summary>README 발췌</summary>

Pong where the ball moves one step per model decision. Slow model, slow ball.

</details>

### daniel4x/JevEmon

<details><summary>README 발췌</summary>

Jev walks a real Pokémon FireRed ROM.

</details>

### vtrivedy/jev-plays-games

<details><summary>README 발췌</summary>

Test your game playing skills against the speed demon...Jev!

</details>

### jaibhasin/jev-flappy-bird

<details><summary>README 발췌</summary>

&gt; Jev and GPT-6 Luna race through the same Flappy Bird course. &gt; Every flap is a live model decision.

</details>

### shantanugoel/jev-games

<details><summary>README 발췌</summary>

A visual lab where Jev plays multiple games. This is the next step after mario-jev: the same Jev controller style, a Zero-shot Lab UI, and a plugin split so new games and emulator platforms can be added without rewriting the loop.

</details>

### darthblanc/tictacjev

<details><summary>README 발췌</summary>

Tic-tac-toe, but every move for one side comes from Jev, a System One Model built for fast, structured decisions — unstructured state in, typed probabilistic decisions out.

</details>

### mittal-parth/jev-experiments

<details><summary>README 발췌</summary>

TypeSafe System One loops. Jev (or a labeled heuristic fallback) sees structured state and returns typed actions; Python owns execution. The canvas is a view — it never goes to the model.

</details>

### mizchi/jev-gomoku

<details><summary>README 발췌</summary>

TypeSafe AI の System One モデル Jev を MoonBit から触るためのプレイグラウンド。 Jev は「文字列ではなく型付きの確率判断を返す」意思決定専用モデルです(unstructured state in, typed probabilistic decisions out)。

</details>

### tpaulshippy/shady-town

<details><summary>README 발췌</summary>

A social-deduction party game for the living room TV. Humans play, the TV moderates.

</details>

### bugkiwi/turing-jail

<details><summary>README 발췌</summary>

Turing Jail is a three-level AI interrogation game powered by TypeSafe Jev System One. Write a statement, face the warden's verdict, and try to earn your release.

</details>

### muratcanberber/JEV-TheFishGame

<details><summary>README 발췌</summary>

A real-time multiplayer fish game where the AI literally decides through a language model. Every fish on the map asks Jev — a System One decision model — what to do next: flee, hunt, seek food, or roam. You steer your own fish with the mouse and try to outsmart them.

</details>

### Zeb88/jev-approach-control

<details><summary>README 발췌</summary>

A small air traffic control sim for a single runway (27). Give radio calls in plain English, or hand the frequency to Jev, TypeSafe's decision model, and watch it sequence, space and land the traffic.

</details>
