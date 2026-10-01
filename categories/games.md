# 🎮 게임·인터랙티브 (91)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 422 | 48 | 구조화된 에뮬레이터 RAM 상태 데이터를 바탕으로 Super Mario Bros. 게임 컨트롤러 입력을 직접 결정하는 Jev 기반 에이전트 실험 프로젝트다.<br>게임 상태 JSON을 입력받아 컨트롤러 매크로 선택(Choice), 현재 전방 점프의 유용성 여부(Noul), 즉각적인 위험도 등급(Score)을 판단한다.<br>스크린샷 대신 에뮬레이터 RAM과 텔레메트리를 구조화된 JSON으로 파싱해 전달하며, 타이밍 계산은 코드가 수행하고 Jev가 직접 입력을 결정한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-16 |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2452 | 252 | Qwen3-0.6B 백본 기반으로 토큰 디코딩 없이 병렬 판단 확률 분포를 출력하도록 구현된 오픈소스 Jev 복제 모델 및 훈련 파이프라인이다.<br>게임 상태와 질문이 주어졌을 때 동적 선택지 중 최적 행동 확률(Choice), 명제 참/거짓 확률(Boolean), 정렬 등급 점수(Score)를 판단시킨다.<br>텍스트 토큰 생성 대신 상태·질문·후보군을 한 번의 포워드로 인코딩하고 전용 헤드로 확률 분포를 직접 출력해 4개 게임 제어에 적용했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 204 | 37 | TypeSafe Jev 모델을 사용해 자율주행(오토파일럿) 행동을 시뮬레이션하는 Three.js 기반의 드라이빙 시뮬레이터 데모다.<br>주변 교통, 도로 경계, 신호, 정지선 및 목표 경로 정보를 바탕으로 샘플링된 주행 경로 후보(조향 및 속도 조합)와 정지 여부 중 최적의 행동을 선택하도록 묻는다.<br>후보 경로 생성과 기하학적 제어 연산은 로컬 웹 워커에서 처리하고, 컴팩트한 상태 테이블만 서버를 통해 Jev API로 전달해 초당 1.5~4회 주행 경로를 선택한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [christianmat/jev-pokemon](https://github.com/christianmat/jev-pokemon) | 114 | 7 | 인공지능 모델 Jev가 포켓몬스터 레드를 직접 플레이하도록 에뮬레이터와 연동해 의사결정을 수행하는 프로젝트다.<br>이동 목적지, 대화 상대, 전투 기술, 포켓몬 교체, 메뉴 선택 등 게임 내 가능한 행동 목록 중에서 하나를 고른다.<br>하네스가 메모리를 읽어 규칙상 가능한 선택지와 정보를 구성하고, 길 찾기 같은 단순 조작만 처리하며 진행을 전적으로 모델 판단에 맡긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [wingedsheep/argentum-engine](https://github.com/wingedsheep/argentum-engine) | 69 | 33 | Kotlin 기반으로 MTG(Magic: The Gathering) 규칙을 구현한 게임 엔진이자 온라인 멀티플레이 플랫폼이다.<br>게임 내 AI 상대 모드(GAME_AI_MODE=jev)에서 게임 액션 및 플레이 선택지를 판단한다.<br>결정론적 룰 엔진, RL/MCTS 학습용 Gym 환경, 오라클 텍스트 파서 Assay와 함께 트리 탐색·LLM·Jev AI 컨트롤러를 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev) | 109 | 11 | Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [emrickgarrett/OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 40 | 9 | Three.js와 Node.js 기반 브라우저 1v1 FPS 환경에서 TypeSafe System One 기반 AI 봇과 스나이퍼 대결을 펼치는 게임이다.<br>서버가 약 9Hz 주기로 구조화된 게임 상태를 바탕으로 이동, 조준각(yaw, pitch), ADS, 발사, 점프 여부를 Choice와 Noul로 질의한다.<br>API 장애 시 매치가 멈추지 않도록 동일한 액션 인터페이스를 공유하는 휴리스틱 로직을 폴백으로 구현했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [phyous/tsai-sc](https://github.com/phyous/tsai-sc) | 27 | 2 | 구조화된 스타크래프트 셰어웨어 게임 상태를 관찰하고 TypeSafe Jev 모델의 판단으로 키보드와 마우스 입력을 제어하는 하네스 리포지토리다.<br>정리된 아군 및 시야 상태를 바탕으로 유닛 생산, 자원 채취, 탐색, 업그레이드, 전투 등 어떤 명령을 실행할지 choice 형태로 선택하게 한다.<br>화면 캡처가 아닌 구조화된 게임 데이터를 사용하며, 상태 읽기와 추론 중 게임을 일시정지하고 경제와 군사 결정을 분리해 원본 미션 승리를 달성했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [NevaMind-AI/JevTown](https://github.com/NevaMind-AI/JevTown) | 41 | 5 | jev based AI town simulation | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev) | 35 | 12 | A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [Prophetlab/JevPokerBench](https://github.com/Prophetlab/JevPokerBench) | 11 | 6 | 텍사스 홀덤 환경에서 의사결정 모델의 실력을 순위표로 평가하고 직접 대전이나 수 분석을 진행하는 벤치마크 플랫폼이다.<br>주어진 포커 핸드와 베팅 이력 상황에서 폴드, 체크, 콜, 레이즈 중 어떤 행동을 선택해야 하는지 묻는다.<br>외부 API 키 연동과 서버 측 128건 동시성 제어 풀을 갖추고 있으며, 리플레이와 실시간 어드바이저 기능을 웹 화면으로 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-22 |
| [milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon) | 6 | 2 | RAM과 타일맵으로 추출한 게임 상태를 텍스트로 읽고 TypeSafe Jev의 판단을 거쳐 Game Boy 에뮬레이터(PyBoy)로 포켓몬스터 레드를 자동 플레이하는 자율 에이전트다.<br>대화와 맵 정보로 구성된 텍스트 스냅샷을 기반으로 현재 턴의 상위 목표(Choice)와 각 버튼 입력/이동이 최적인지 여부(Noul 예/아니오)를 판단시킨다.<br>비전 모델이나 대화 기록 없이 텍스트 스냅샷과 자체 단기 메모리 주입으로 동작하며, Jev의 결정을 A* 경로 탐색과 결정론적 안전 규칙으로 보정해 실행한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [ArturSkowronski/kNES](https://github.com/ArturSkowronski/kNES) | 34 | 4 | Educational implementation of NES emulator in Kotlin, based on Java vNES emulator | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [IzumiSatoshi/vox-arcana](https://github.com/IzumiSatoshi/vox-arcana) | 8 | 1 | Voice-cast magic arena game. Speak or type incantations, powered by Jev, with local interpretation options. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [enoyola/jev-grand-prix](https://github.com/enoyola/jev-grand-prix) | 7 | 0 | An F1 racing game where TypeSafe's Jev picks the racing line and the pedals, and learns each corner's limit between laps | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [jammaru/jev-lab](https://github.com/jammaru/jev-lab) | 7 | 0 | 100 AI NPCs live in a tiny town. Jev chooses the next action; the world writes the story. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-24 |
| [joshlarsen/jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner) | 7 | 3 | Chrome dino game played by Typesafe AI Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [wondertwins/jev-benchmark](https://github.com/wondertwins/jev-benchmark) | 6 | 1 | Benchmarks and a playground for TypeSafe's Jev (System One) model: chess, and who-is-the-player-talking-to for speech-to-text game NPCs | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [dperezcabrera/ai-chess-lab](https://github.com/dperezcabrera/ai-chess-lab) | 3 | 0 | 브라우저에서 사용자와 LLM 및 Jev 모델이 체스 대국과 토너먼트를 진행하고 Stockfish로 기보를 분석하는 웹 애플리케이션이다.<br>체스 보드의 현재 상태에서 둘 수 있는 규칙상 유효한 수 목록을 선택지로 넘겨 다음에 둘 최선의 한 수를 고르게 한다.<br>선택지 제한 255개 안에 체스의 최대 합법 수 218개가 완전히 들어가므로 규칙 위반 없이 단일 API 호출로 다음 수를 결정한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [jevplays-games/jev-factorio-agent](https://github.com/jevplays-games/jev-factorio-agent) | 2 | 0 | Factorio 게임 환경에서 상위 목표와 행동 결정을 수행하도록 돕는 인공지능 에이전트다.<br>현재 상태에서 수행할 목표, 다음 행동, 교착 상태 여부를 choice, score, noul 형식으로 묻는다.<br>상위 의사결정만 모델에 맡기고 실제 게임 규칙 검증과 조작은 결정론적 코드로 분리해 처리한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-01 |
| [atarikcaliskan/jevball](https://github.com/atarikcaliskan/jevball) | 3 | 0 | 22 Jev models, one ball: a 3D football match where every player is its own Jev (TypeSafe AI System One) decision. Watch, or take over the number 9. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [lmvdz/rpg-jev](https://github.com/lmvdz/rpg-jev) | 3 | 0 | A living-world RPG whose NPCs are decided by TypeSafe's Jev judge model; code owns rules, numbers and state. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground) | 3 | 2 | Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [stephenlb/truetype.ai-open](https://github.com/stephenlb/truetype.ai-open) | 3 | 0 | Open source replica of Truetype AI using open weight models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [vtrivedy/jev-plays-games](https://github.com/vtrivedy/jev-plays-games) | 3 | 1 | Chess, Connect Four, and a decision model. Play Jev or watch Jev play itself. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [0x440-1me/laya-unity](https://github.com/0x440-1me/laya-unity) | 1 | 0 | 유니티 환경에서 로컬 서버나 TypeSafe 엔드포인트와 통신해 게임 AI의 정형화된 판단을 받아오는 클라이언트 SDK다.<br>체력과 거리 등 게임 상태를 전달하고 NPC의 행동 선택지, 상황 위험도 등급, 도주 여부를 choice, score, noul로 묻는다.<br>가중치나 ONNX 런타임을 내장하지 않고 통신 계층에 집중한 형태이며 임의의 텍스트 대신 미리 정의된 선택지만 반환받도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [ably-labs/jev-pong](https://github.com/ably-labs/jev-pong) | 1 | 3 | 모델의 판단 속도에 맞춰 공이 한 칸씩 움직이는 Pong 게임으로, Jev와 기존 LLM의 의사결정 지연 시간을 비교하는 데모다.<br>실시간 게임 상태를 입력받아 패들을 움직이기 위한 행동 선택지를 typed choice로 판단시킨다.<br>언어 생성 없이 typed choice만 반환하는 Jev의 빠른 응답 속도(약 220ms)를 시각화했으며, Ably 채널로 에이전트와 플레이어를 직접 연결했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [AKKI0511/living-matter](https://github.com/AKKI0511/living-matter) | 1 | 0 | 플레이어의 이동에 맞춰 512개 물질이 발판과 다리를 형성하는 3D 브라우저 인터랙티브 아트 게임이다.<br>실시간 플레이어의 움직임을 바탕으로 지형 물질이 어떻게 길을 만들고 반응할지 판단하게 한다.<br>API 키가 없어도 규칙 기반 프리뷰로 실행할 수 있고, Jev 연동 시 세션 감사 기록과 재생 기능을 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [pinebit/jev-tetris](https://github.com/pinebit/jev-tetris) | 1 | 0 | TypeSafe의 Jev 모델이 매 턴마다 스스로 최적의 블록 배치를 골라 진행하는 테트리스 웹 데모다.<br>현재 보드 상태에서 가능한 블록 배치 후보 중 lines_cleared, new_holes 등 지표를 비교해 어떤 착수가 가장 유리한지 choice 호출로 고르게 한다.<br>별도의 휴리스틱 채점식 없이 모델이 보드 지표 간 상충 관계를 직접 저울질하며, 호출마다 지연 시간과 비용을 실시간 집계해 화면에 보여준다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [Wachu2005/jev-alchemy](https://github.com/Wachu2005/jev-alchemy) | 1 | 0 | 사용자가 입력한 임의의 단어로 물질과 생명체를 만들고 물리 법칙을 구성해 시뮬레이션하는 떨어지는 모래 샌드박스 게임이다.<br>물질의 이동 형태, 두 물질이 닿았을 때의 상호작용 결과, 생명체 간의 반응 행동, 폭발 크기 등을 객관식 질문과 확률로 판단한다.<br>하드코딩된 규칙 없이 닫힌 질문 수백 개로 구성된 Jev의 판단 확률을 물리 법칙과 상호작용 행렬로 직접 사용한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [YichenBC/jev-charactor](https://github.com/YichenBC/jev-charactor) | 1 | 0 | 게임 개발자가 자율형 NPC와 AI 마을을 만들 때 쓰는 타입스크립트 기반 캐릭터 SDK다.<br>캐릭터의 욕구와 기억을 바탕으로 실행 가능한 행동 목록과 대화 의도 중 무엇을 택할지 묻는다.<br>자유 텍스트 생성 없이 모델이 의도를 고르면 프로그램이 허용된 사실과 대사 템플릿을 조합해 대화를 구성한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [ellistev/typesafe-minecraft-demo](https://github.com/ellistev/typesafe-minecraft-demo) | 2 | 2 | A Minecraft Java player controlled by TypeSafe AI, with live decisions, Canadian flag building, and a side-by-side dashboard. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [GabrielBigardi/TibiaJevBot](https://github.com/GabrielBigardi/TibiaJevBot) | 2 | 0 | An autonomous game-playing decision engine for Tibia (Open Tibia / OTServ) powered by TypeSafe AI's Jev System One model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [jaibhasin/jev-flappy-bird](https://github.com/jaibhasin/jev-flappy-bird) | 2 | 0 | Jev and GPT-6 Luna race through the Flappy Bird Game | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [phureewat29/jev-got](https://github.com/phureewat29/jev-got) | 2 | 0 | Jev (TypeSafe AI) PoC through Game of Thrones | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [phyous/tsai-civ2](https://github.com/phyous/tsai-civ2) | 2 | 1 | TypeSafe Jev plays original Civilization II in a browser, with live action probabilities. Experimental full-game harness. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [PikkonMG/UOTerm](https://github.com/PikkonMG/UOTerm) | 2 | 3 | UOTerm is a headless Ultima Online client. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [rythmn1111/doom-war](https://github.com/rythmn1111/doom-war) | 2 | 0 | Two System One models fight a real Doom deathmatch. Laya (322M, open weights, local MLX) vs Jev (TypeSafe hosted). Same state, same typed questions, same shield — only the model differs. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [siroccomask/snake-jev](https://github.com/siroccomask/snake-jev) | 2 | 0 | Snake controlled by parallel Jev assessments, with one API call per game tick. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [southleft/component-charades](https://github.com/southleft/component-charades) | 2 | 0 | A Taboo-style parlour game for design systems, refereed by Jev (TypeSafe System One model) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [darthblanc/tictacjev](https://github.com/darthblanc/tictacjev) | 1 | 0 | A tic-tac-toe app where one player is Jev, TypeSafe AI's System One Model with live confidence scores and probabilities. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [Eliot5566/jev-arena](https://github.com/Eliot5566/jev-arena) | 1 | 0 | Write a fighter in plain English. Jev pilots it in real time. PR-driven ladder, swappable brains. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [het2576/jev-wordle](https://github.com/het2576/jev-wordle) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [iammusham/jev-snake](https://github.com/iammusham/jev-snake) | 1 | 0 | An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [JackZH26/Jev-Live](https://github.com/JackZH26/Jev-Live) | 1 | 0 | Open-source Windows studio for Steam games: local AI host, editable avatars/chat, manual or JEV-assisted play, YouTube/Twitch OAuth and OBS streaming to YouTube/Twitch/X. Five-language UI; developer preview. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [JanDalhuysen/jev-clash-royale-test](https://github.com/JanDalhuysen/jev-clash-royale-test) | 1 | 1 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [KyleKreuter/jev2048](https://github.com/KyleKreuter/jev2048) | 1 | 0 | Let Jev (TypeSafeAI) solve 2048 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [mrmt/elevator-three](https://github.com/mrmt/elevator-three) | 1 | 0 | Jev に判断を任せる自動生成のエレクトロの楽器 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [shantanugoel/jev-games](https://github.com/shantanugoel/jev-games) | 1 | 0 | Visual Jev lab for multiple games and emulator platforms | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [tubone24/jev-practice-speed](https://github.com/tubone24/jev-practice-speed) | 1 | 0 | A WebGL demo where you play the card game Speed against a CPU whose brain is TypeSafe AI's Jev. The whole point of the app is to measure and show Jev's decision speed and decision accuracy in real time. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [blakeandrewwood/jev-goal-reflex](https://github.com/blakeandrewwood/jev-goal-reflex) | 0 | 0 | 자연어 명령으로 3D 공간의 박스를 제어할 때 LLM의 단계별 계획에 따라 Jev가 실시간 이동·회전·점프 동작을 결정하는 시스템입니다.<br>각 동작 단계에서 실제로 이동, 회전, 점프를 수행할지 여부와 이동 방향을 실시간으로 판단시킵니다.<br>느린 LLM 계획(System 2)과 빠른 Jev 반사 제어(System 1)를 분리하고, 속도 제한과 물리 계산은 TypeScript 코드로 통제합니다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [gkvoelkl/rust-bevy-jev-ants](https://github.com/gkvoelkl/rust-bevy-jev-ants) | 0 | 0 | Rust Bevy 기반으로 제작되어 플레이어의 자연어 명령에 따라 각 개미가 개별 행동 의도를 결정하는 시뮬레이션 게임이다.<br>여왕 개미(플레이어)의 텍스트 명령과 개미의 상황을 바탕으로 다음에 수행할 행동 의도(intent)를 선택지로 제시해 판단하도록 요청한다.<br>물리 및 페로몬 이동 시뮬레이션은 60Hz로 고전적으로 처리하고, Jev 모델 의사결정 계층은 비동기로 분리했으며 룰 기반 폴백 없이 동작한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [klappy/ma8ic8all-jev](https://github.com/klappy/ma8ic8all-jev) | 0 | 0 | Jev 모델과 Cloudflare Workers AI를 기반으로 질문에 확률적 답변을 반환하는 매직 8볼 콘셉트의 MCP 서비스다.<br>shake 도구로 예·흐림·아니오를 판정하거나 ask 도구를 통해 지정된 계약 규격에 맞춰 질문에 대한 확률적 판단을 묻는다.<br>Cloudflare Access JWT를 Worker에서 직접 검증해 접근을 제어하며, MCP JSON-RPC와 REST 형태의 JSON API 엔드포인트를 함께 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [MaryNfs/pacman-ai-race](https://github.com/MaryNfs/pacman-ai-race) | 0 | 0 | 팩맨 미로 게임에서 TypeSafe Jev와 로컬 Laya 모델의 이동 경로 결정을 나란히 비교하는 웹 기반 실험 환경이다.<br>전체 맵과 유령 위치 및 경로 후보 요약을 바탕으로 팩맨이 이동할 최적의 typed route를 choice로 고르게 한다.<br>이동 중 다음 결정을 미리 요청하는 프리페치 방식으로 네트워크 지연을 줄이고 결정 상세를 화면에 실시간으로 표시한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [thisAbdU/celebrity-twin](https://github.com/thisAbdU/celebrity-twin) | 0 | 0 | 약 7개의 상황 질문에 답해 닮은 유명인을 찾아주는 레트로 휴대용 게임기 스타일의 웹 성격 테스트 게임이다.<br>후보 질문 목록 중에서 다음에 사용자에게 제시할 질문 ID 하나를 choice 형태로 선택하도록 판단시킨다.<br>성격 특성 점수 계산과 유명인 매칭은 서버에서 결정론적으로 처리하며 Jev API 키가 없으면 무작위 질문 선택으로 대체된다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [ARCJ137442/jev-life](https://github.com/ARCJ137442/jev-life) | 0 | 0 | The Chess of Life × Jev — an experimental game: write a new ruleset, then watch a decision model play it. \| 生命棋 × Jev：实验性游戏设计——写一套新规则，然后看 Jev 怎么玩 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [bongbong11/-_-](https://github.com/bongbong11/-_-) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [bugkiwi/turing-jail](https://github.com/bugkiwi/turing-jail) | 0 | 0 | Turing Jail - Let's get out\! | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [codaaiteam/jev-wikiracer](https://github.com/codaaiteam/jev-wikiracer) | 0 | 0 | You vs Jev: race across Wikipedia by clicking links; Jev picks the closest of dozens each hop, one real typed decision, no hallucination. Single-file, no build. Play free: jevtypesafeai.com/games/jev-wikiracer | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [dagfinndybvig/Chess](https://github.com/dagfinndybvig/Chess) | 0 | 0 | A simple chess game where White is played by Jev, TypeSafe AI System One decision model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [dazreil/jev-npc-interaction-prototype](https://github.com/dazreil/jev-npc-interaction-prototype) | 0 | 0 | Browser-based NPC interaction prototype using authored dialogue and TypeSafe Jev action selection | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [Didixdan/jev-games-poc](https://github.com/Didixdan/jev-games-poc) | 0 | 0 | Many games resolved using Typesafe AI SystemOne model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [drilonademaj-ci/jev-snake](https://github.com/drilonademaj-ci/jev-snake) | 0 | 0 | A Snake game that TypeSafe's Jev model plays, with live latency and cost on screen. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Ewen2015/i-shoot-rock](https://github.com/Ewen2015/i-shoot-rock) | 0 | 0 | jev-based rock paper scissors, to test jev pre-trained model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [gmaldo/jevplaystruco](https://github.com/gmaldo/jevplaystruco) | 0 | 0 | Jev inference model plays Truco | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [GunaTeja777/typesafe-mario-ai](https://github.com/GunaTeja777/typesafe-mario-ai) | 0 | 0 | Real-time Super Mario game autonomously controlled by TypeSafe AI's "Jev" System One Decision Architecture. Features sub-100ms decision loops, live prompt &amp; probability telemetry, multi-provider support (OpenRouter Jev &amp; Groq LPUs), and an offline neural simulator. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [hectorlcastro09/jev-torneo-animales](https://github.com/hectorlcastro09/jev-torneo-animales) | 0 | 0 | Winner-stays-on animal tournament refereed by Jev (TypeSafe System One): a local game to feel how fast typed decisions are. UI in Spanish. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [JaviMaligno/sport-from-motion](https://github.com/JaviMaligno/sport-from-motion) | 0 | 0 | Can a model recognise a team sport only from how its players move? Point-light trajectories, leak controls, pre-registered VLM evaluation. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [lsz05/arena_jev](https://github.com/lsz05/arena_jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [MachineLearning-Nerd/jev-tetris](https://github.com/MachineLearning-Nerd/jev-tetris) | 0 | 0 | A visual TypeSafe demo where Jev chooses verified Tetris placements. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [misty-step/double-take](https://github.com/misty-step/double-take) | 0 | 0 | One sentence, two readings. A double-meaning party game where the weaker reading wins. Built on Parlor. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-28 |
| [muratcanberber/JEV-TheFishGame](https://github.com/muratcanberber/JEV-TheFishGame) | 0 | 0 | 🐠 A multiplayer fish game where every AI decision is a TypeSafe Jev (System One) call — flee, hunt, roam, with live confidence bars. Node + WebSocket + Three.js. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [OuchengLiu/Jev-Game-Theory-Arena](https://github.com/OuchengLiu/Jev-Game-Theory-Arena) | 0 | 0 | Play poker, liar's dice, prisoner's dilemma and more against Jev, TypeSafe's System One model. It reads the situation and returns a probability for each legal move: a live mixed strategy. Bilingual EN/中文, runs in the browser. Educational, no real money. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [Pawnnwap/jev](https://github.com/Pawnnwap/jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [pedroarruda07/jev-plays-tetris](https://github.com/pedroarruda07/jev-plays-tetris) | 0 | 0 | Automating Tetris with Jev (TypeSafe AI) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [pmotley1/2TD-Venom](https://github.com/pmotley1/2TD-Venom) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [rchovatiya88/cyber-breach-jev](https://github.com/rchovatiya88/cyber-breach-jev) | 0 | 0 | Cyber-Breach: The Jev Protocol - A tactical cyberpunk arena combat game powered by TypeSafe AI Jev System One decision model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [Rodert/JevPlayer](https://github.com/Rodert/JevPlayer) | 0 | 0 | Jev Player Demo | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [Rohan0603/jev-tic-tac-toe](https://github.com/Rohan0603/jev-tic-tac-toe) | 0 | 0 | React Tic-Tac-Toe powered by TypeSafe Jev System One decisions. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Sayangenri/jev-adventure-game](https://github.com/Sayangenri/jev-adventure-game) | 0 | 0 | A visual AI powered text adventure where every outcome is decided by Jev TypeSafe's structured decision model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [scd13150/jev-field-notes](https://github.com/scd13150/jev-field-notes) | 0 | 0 | Applications, measurements and boundary analysis built on TypeSafe Jev (System One): a Jev-driven fighting game, emotion-controlled TTS, and a capability-ceiling probe | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [sergeville/HangmanGame](https://github.com/sergeville/HangmanGame) | 0 | 0 | Rust desktop Hangman with 200 words, progressive levels, an offline Odds solver, and optional JeV or local Kev duels. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [sinakm/ai-playground](https://github.com/sinakm/ai-playground) | 0 | 0 | One small, reproducible AI model demo per week. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [SonghaiFan/frankie-poker](https://github.com/SonghaiFan/frankie-poker) | 0 | 0 | A high-fidelity, poker interface featuring a modern aesthetic, reactive game states, and AI opponents. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [SvirepyiBambr/pollinations-jev-jury](https://github.com/SvirepyiBambr/pollinations-jev-jury) | 0 | 0 | Kill / Fix / Ship — a Jev decision jury for startup ideas, powered by Pollinations (quest #15722) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [tbrought/honeytongue](https://github.com/tbrought/honeytongue) | 0 | 0 | Characters players can actually argue with: a persuasion mechanic for JavaScript games where players type or speak to NPCs. Powered by Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [tom-scott-dev/test-laya](https://github.com/tom-scott-dev/test-laya) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-29 |
| [tripodxu/jev-piano](https://github.com/tripodxu/jev-piano) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-09-30 |
| [YV17labs/TokenShooter](https://github.com/YV17labs/TokenShooter) | 0 | 0 | A Jev-like System One model in your browser: a small language model plays a first-person shooter on your GPU, one token per move. No server. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [MarcosSete/jev-doom](https://github.com/MarcosSete/jev-doom) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [scavin/Jev-2048](https://github.com/scavin/Jev-2048) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |

### fhshaik/typesafe-mario

<details><summary>README 발췌</summary>

An experimental controller that lets TypeSafe's Jev model directly choose NES controller inputs for the original Super Mario Bros.

</details>

### TianyuCodings/NanoJev

<details><summary>README 발췌</summary>

A 0.6B parallel decision model: states and questions in, complete probability distributions out. Zero output-token decoding.

</details>

### standardagents/jevpilot

<details><summary>README 발췌</summary>

https://github.com/user-attachments/assets/4baef58e-54ef-4d17-9982-353a0b6e6f45

</details>

### christianmat/jev-pokemon

<details><summary>README 발췌</summary>

Jev), TypeSafe AI's decision model, plays Pokémon Red. There are no scripts or cheats: the harness reads the game's memory, lists the legal options with some facts about each, and Jev picks one.

</details>

### wingedsheep/argentum-engine

<details><summary>README 발췌</summary>

Before the oil. Before the corruption. There was only perfection.

</details>

### virajbhartiya/laya-vs-jev

<details><summary>README 발췌</summary>

Two AI decision models play Chrome's T-Rex game side by side: Laya runs locally on Apple Silicon through MLX, while Jev uses TypeSafe's hosted API. Watch their choices, response times, survival streaks, and crash replays on a shared obstacle course.

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

### bytelabs-oss/clash-jev

<details><summary>README 발췌</summary>

I got early access to Jev, TypeSafe AI's new System One model, and decided to play around with it. I built clash-jev, a bot that uses Jev to make near real-time decisions on live game data. It plays Clash Royale on a real Android device.

</details>

### Prophetlab/JevPokerBench

<details><summary>README 발췌</summary>

ProphetLab's Texas Hold'em benchmark and playground for decision models. Watch separate cash-game and sit-and-go (SNG) leaderboards, replay hands, ask for advice, or play against models. Chips are virtual.

</details>

### milanboers/jev-plays-pokemon

<details><summary>README 발췌</summary>

A small autonomous Pokémon Red agent. It uses TypeSafe's System One model, Jev: Jev reads the game state as text, answers typed questions each turn, and deterministic code turns those answers into button presses on a PyBoy Game Boy emulator.

</details>

### ArturSkowronski/kNES

<details><summary>README 발췌</summary>

kNES is a Nintendo Entertainment System (NES) emulator written in Kotlin, forked from the vNES Java emulator. This project was created primarily for fun and educational purposes, allowing developers to learn about emulation techniques and NES hardware while enjoying classic games.

</details>

### IzumiSatoshi/vox-arcana

<details><summary>README 발췌</summary>

A browser FPS magic game where you fight AI opponents or another player by speaking incantations or typing spells. Your words go through the Web Speech API, then Jev (TypeSafe's System One decision model) turns them into a procedurally generated spell: an element, a form, and a dozen continuous para

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

### dperezcabrera/ai-chess-lab

<details><summary>README 발췌</summary>

ai-chess-lab: LLMs, System One models and you play chess in the browser, one game at a time or in Swiss tournaments and full leagues, with every move, token, second and dollar on the record and Stockfish analysing the games in your browser. The first battle, 16 players and 72 games, is in the reposi

</details>

### jevplays-games/jev-factorio-agent

<details><summary>README 발췌</summary>

A Jev-powered Factorio agent. Jev (TypeSafe AI's System One model) makes the fast macro decisions - goal, next action, stuck detection - as typed Choice/Score/Noul questions; deterministic code owns game rules, option filtering, and actuation. To our knowledge this is the first Jev-driven game agent

</details>

### atarikcaliskan/jevball

<details><summary>README 발췌</summary>

22 Jev models, one match. JevBall is a football match in a 3D stadium where each of the 22 players is an independent decision-maker powered by Jev by TypeSafe AI (Jev is TypeSafe AI's System One model). Watch the match, open any player's head to see the options it weighed, or press J and take over a

</details>

### lmvdz/rpg-jev

<details><summary>README 발췌</summary>

A persistent multiplayer RPG whose world keeps its own agenda. TypeSafe Jev makes every in-world decision, Claude authors the world on a background thread, and code owns rules, numbers and state. The main client is a browser WebGL2 renderer that draws glyphs on real 3D terrain.

</details>

### nickthompson480/typesafe-ai-playground

<details><summary>README 발췌</summary>

A community playground for exploring TypeSafe AI with practical use cases, party games, dilemmas, and reasoning challenges. Pick an example, inspect its input and questions, and run it through the API.

</details>

### stephenlb/truetype.ai-open

<details><summary>README 발췌</summary>

A local-first replica of the Jev TypeSafe AI System One API, tuned to match its latency and accuracy. We used a gemma encoder and swaped existing LM head for a smaller copy that keeps only the 26 A-Z rows. POST /v1/systemone accepts and returns the original formats for all three supported question t

</details>

### vtrivedy/jev-plays-games

<details><summary>README 발췌</summary>

Test your game playing skills against the speed demon...Jev!

</details>

### 0x440-1me/laya-unity

<details><summary>README 발췌</summary>

Laya Unity is a community Unity SDK for System One decision models.

</details>

### ably-labs/jev-pong

<details><summary>README 발췌</summary>

Pong where the ball moves one step per model decision. Slow model, slow ball.

</details>

### AKKI0511/living-matter

<details><summary>README 발췌</summary>

Walk toward the light. Watch 512 pieces of matter gather into steps, bridges, and moving platforms. Turn around. Change your mind. See what follows.

</details>

### pinebit/jev-tetris

<details><summary>README 발췌</summary>

A small web app where TypeSafe's Jev model plays Tetris by itself. The only control is Reset.

</details>

### Wachu2005/jev-alchemy

<details><summary>README 발췌</summary>

A living falling-sand world with zero hand-written rules.

</details>

### YichenBC/jev-charactor

<details><summary>README 발췌</summary>

Build NPCs that pursue their needs, remember encounters and respond to players — with a model that chooses instead of writing prose. Jev-Character is the independent core. Fog Harbor brings multiple characters together in a playable AI town.

</details>

### ellistev/typesafe-minecraft-demo

<details><summary>README 발췌</summary>

An experimental Minecraft Java bot controlled through TypeSafe choices, with a live world view and the actual API input and output beside it.

</details>

### GabrielBigardi/TibiaJevBot

<details><summary>README 발췌</summary>

An autonomous game-playing decision engine for Tibia (Open Tibia / OTServ) powered by TypeSafe AI's Jev System One model.

</details>

### jaibhasin/jev-flappy-bird

<details><summary>README 발췌</summary>

&gt; Jev and GPT-6 Luna race through the same Flappy Bird course. &gt; Every flap is a live model decision.

</details>

### phureewat29/jev-got

<details><summary>README 발췌</summary>

A Game of Thrones roleplay where you play Jon Snow. Each turn a story model writes the next scene, and then TypeSafe's Jev reads that scene back and answers five questions about it: where Jon now stands, what kind of scene it was, how much danger he is in, what should play under it, and whether the 

</details>

### phyous/tsai-civ2

<details><summary>README 발췌</summary>

An original Civilization II browser harness for TypeSafe Jev, with live decision probabilities and a Roman-themed spectator display. Under development; no complete-game victory has been verified yet.

</details>

### PikkonMG/UOTerm

<details><summary>README 발췌</summary>

UOTerm is a headless Ultima Online client. Its main purpose is to let AI agents control player characters and play the game the way a human player does: see the world, walk, fight, gather, talk, use items, and answer gumps. A second purpose is testing and debugging by humans.

</details>

### rythmn1111/doom-war

<details><summary>README 발췌</summary>

Two System One models fight a real Doom deathmatch. Same state. Same questions. Same shield. Only the model differs.

</details>

### siroccomask/snake-jev

<details><summary>README 발췌</summary>

A desktop Snake experiment powered by Jev / System One. Jev assesses the board; Python combines its answers into a move. The original p5 Snake game handles movement, food, growth, and collisions.

</details>

### southleft/component-charades

<details><summary>README 발췌</summary>

It's Taboo for design systems, and the other player is a model that can't talk.

</details>

### darthblanc/tictacjev

<details><summary>README 발췌</summary>

Tic-tac-toe, but every move for one side comes from Jev, a System One Model built for fast, structured decisions — unstructured state in, typed probabilistic decisions out.

</details>

### Eliot5566/jev-arena

<details><summary>README 발췌</summary>

Write a fighter in plain English. A System One model pilots it several times a second.

</details>

### het2576/jev-wordle

<details><summary>README 발췌</summary>

Wordle, played live by Jev, TypeSafe's System One model. Every turn, the game builds a short list of strong candidate words, asks Jev once to choose between them, shows the probability Jev gave every option, and then plays Jev's pick. The tiles flip exactly as in the real game.

</details>

### iammusham/jev-snake

<details><summary>README 발췌</summary>

An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick.

</details>

### JackZH26/Jev-Live

<details><summary>README 발췌</summary>

自动玩正在升级为 Jev 战术决策 + 共用 Bot 执行器：保留玩家镜头和手动接管，目标续期不重启路径，并反馈受阻原因。见调整方案与分档对战验收门槛、房间玩法知识与 M 地图规划。新执行器需要对应 Steam 游戏构建；尚未证明超过 Pro Bot。

</details>

### JanDalhuysen/jev-clash-royale-test

<details><summary>README 발췌</summary>

A minimal, real-time Clash Royale-style game engine built in Node.js featuring:

</details>

### KyleKreuter/jev2048

<details><summary>README 발췌</summary>

TypeSafe's Jev plays 2048 — many games in parallel, live in your browser.

</details>

### mrmt/elevator-three

<details><summary>README 발췌</summary>

自動生成のエレクトロを鳴らし続けるシングルファイルの楽器。 elevator-two から分岐し、音楽的な判断を TypeSafe の Jev に文脈つきで任せて、 展開と即興を豊かにすることを目指す。

</details>

### shantanugoel/jev-games

<details><summary>README 발췌</summary>

A visual lab where Jev plays multiple games. This is the next step after mario-jev: the same Jev controller style, a Zero-shot Lab UI, and a plugin split so new games and emulator platforms can be added without rewriting the loop.

</details>

### tubone24/jev-practice-speed

<details><summary>README 발췌</summary>

A WebGL demo where you play the card game Speed against a CPU whose brain is TypeSafe AI's Jev. The whole point of the app is to measure and show Jev's decision speed and decision accuracy in real time.

</details>

### blakeandrewwood/jev-goal-reflex

<details><summary>README 발췌</summary>

Steer a box around a 3D world with plain-language movement instructions: where to go, how to move and turn, and when to jump. An LLM turns each instruction into a plan, and Jev makes every movement decision in real time.

</details>

### gkvoelkl/rust-bevy-jev-ants

<details><summary>README 발췌</summary>

An ant colony where every ant asks TypeSafe Jev what to do next. You are the queen, and your only control is a text field: you type a sentence, and twenty ants each decide for themselves what it means for them.

</details>

### klappy/ma8ic8all-jev

<details><summary>README 발췌</summary>

Ask the ball, get a real answer. A Jev MCP service (Cloudflare Worker ma8ic-8all, Workers AI binding to typesafe/jev). The costume is a joke; the probabilities are not.

</details>

### MaryNfs/pacman-ai-race

<details><summary>README 발췌</summary>

A browser-based maze chase experiment that runs TypeSafe AI's hosted Jev and self-hosted Laya side by side. Both pilots start from the same maze and receive the same full-board state and typed route choices. Each column exposes its own score, selected route, candidate probabilities, confidence, late

</details>

### thisAbdU/celebrity-twin

<details><summary>README 발췌</summary>

Retro handheld personality game. Answer ~7 situations, unlock a playful Celebrity Twin.

</details>

### ARCJ137442/jev-life

<details><summary>README 발췌</summary>

|简体中文 | English| |:-:|:-:|

</details>

### bongbong11/-_-

<details><summary>README 발췌</summary>

최근 롤플레잉 대화를 읽고, 다음 답변에 필요한 진행과 인물의 반응 기준을 골라주는 SillyTavern 확장입니다. 이야기를 대신 완성하거나 모든 문제를 해결시키는 기능은 아닙니다. 현재 대화가 자연스럽게 움직이도록 돕습니다.

</details>

### bugkiwi/turing-jail

<details><summary>README 발췌</summary>

Turing Jail is a three-level AI interrogation game powered by TypeSafe Jev System One. Write a statement, face the warden's verdict, and try to earn your release.

</details>

### codaaiteam/jev-wikiracer

<details><summary>README 발췌</summary>

You vs Jev — race across Wikipedia. From the same start article, you and Jev both try to reach a target article using only in-article links. You click; Jev — TypeSafe AI's System One decision model — makes one real call per hop, picking the link closest to the target out of dozens. First to the targ

</details>

### dagfinndybvig/Chess

<details><summary>README 발췌</summary>

A small chess game where the White pieces are played by Jev, TypeSafe AI's "System One" decision model, when an API key is available. Without a key, White falls back to a built-in local heuristic AI. You play Black. In autoplay mode, the local heuristic drives Black against Jev's White (or against i

</details>

### dazreil/jev-npc-interaction-prototype

<details><summary>README 발췌</summary>

A small browser-based text game that explores whether a decision model can make hand-authored NPC dialogue feel reactive and autonomous.

</details>

### Didixdan/jev-games-poc

<details><summary>README 발췌</summary>

A proof of concept using JEV (TypeSafe AI's System One model) as the decision engine for classic games. The AI doesn't generate text — it returns typed, probability-weighted choices that the game loop consumes directly.

</details>

### drilonademaj-ci/jev-snake

<details><summary>README 발췌</summary>

A Snake game where TypeSafe's Jev model picks every move, with live latency and cost on screen.

</details>

### Ewen2015/i-shoot-rock

<details><summary>README 발췌</summary>

&gt; 截图是一局结算。右边那栏默认收着，这里展开来看：Jev 读出「这人爱出布」（55%）， &gt; 于是出剪刀赢了这一局。

</details>

### gmaldo/jevplaystruco

<details><summary>README 발췌</summary>

Truco Argentino contra una IA — juego 1 vs 1 (Humano vs Jev) en el navegador, con un motor de decisiones que expone cada razonamiento del rival en vivo.

</details>

### GunaTeja777/typesafe-mario-ai

<details><summary>README 발췌</summary>

&gt; A flock of angry birds that evolves to fly through castle towers using neuroevolution and genetic algorithms — with no datasets and no backpropagation. Now featuring Human vs AI Flock Mode, Procedural Web Audio, Hyperparameter Lab, and Model DNA Export/Import.

</details>

### hectorlcastro09/jev-torneo-animales

<details><summary>README 발췌</summary>

A small local game built to feel how fast Jev — TypeSafe's System One model — makes typed decisions. Up to 2,569 animals (land, flying and marine) fight one on one; the winner stays on and faces the next challenger until one champion is left. Every fight is decided by Jev.

</details>

### JaviMaligno/sport-from-motion

<details><summary>README 발췌</summary>

¿Puede un modelo reconocer un deporte de equipo solo por cómo se mueven los jugadores, sin campo, líneas, superficie, balón ni equipamiento? Es el experimento hermano de Where's the ball?.

</details>

### lsz05/arena_jev

<details><summary>README 발췌</summary>

Jev-like decision models (TypeSafe Jev, and open models that serve POST /v1/systemone) play games against each other, so their abilities can be compared by results. The current game is 4-player UNO.

</details>

### MachineLearning-Nerd/jev-tetris

<details><summary>README 발췌</summary>

&gt; A small arcade game where Jev chooses a complete, collision-checked Tetris placement — and Python owns the physics.

</details>

### misty-step/double-take

<details><summary>README 발췌</summary>

Everyone gets the same two worlds. Write the line that fits both best.

</details>

### muratcanberber/JEV-TheFishGame

<details><summary>README 발췌</summary>

A real-time multiplayer fish game where the AI literally decides through a language model. Every fish on the map asks Jev — a System One decision model — what to do next: flee, hunt, seek food, or roam. You steer your own fish with the mouse and try to outsmart them.

</details>

### OuchengLiu/Jev-Game-Theory-Arena

<details><summary>README 발췌</summary>

Play classic game-theory games against Jev, an AI that thinks in probabilities. 与用概率思考的 AI 对弈：德州扑克、吹牛骰子、囚徒困境……

</details>

### Pawnnwap/jev

<details><summary>README 발췌</summary>

A local, open implementation of the Jev typed-decision API (the /v1/systemone wire format made popular by TypeSafe's closed "Jev" model), served by jpt-4b — an open calibrated-decision fine-tune of Qwen3.5-4B (base kirp/jpt-4b, GGUF by prithivMLmods).

</details>

### pedroarruda07/jev-plays-tetris

<details><summary>README 발췌</summary>

A responsive TypeScript Tetris game with an independent, typed game engine.

</details>

### pmotley1/2TD-Venom

<details><summary>README 발췌</summary>

Ranks NFL players by their chance to score 2+ touchdowns in a week.

</details>

### rchovatiya88/cyber-breach-jev

<details><summary>README 발췌</summary>

An infinite 3D arcade cyberpunk arena shooter built with Three.js and powered by Jev—the sub-100ms "System One" decision model developed by TypeSafe AI (released September 2026).

</details>

### Rodert/JevPlayer

<details><summary>README 발췌</summary>

基于 TypeSafe Jev API 的静态游戏站点。

</details>

### Rohan0603/jev-tic-tac-toe

<details><summary>README 발췌</summary>

A small React game where TypeSafe Jev chooses the bot's next legal move.

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

### sinakm/ai-playground

<details><summary>README 발췌</summary>

One small, reproducible project per week with a new AI model that is fun to watch. Episodes are grouped by series; each series folder holds numbered episode folders. Each episode runs on its own: clone the repo, open the folder, follow its README.

</details>

### SonghaiFan/frankie-poker

<details><summary>README 발췌</summary>

No-Limit Texas Hold'em against AI opponents whose brains are OpenRouter models (TypeSafe Jev, Gemini, Claude, GPT, Grok, DeepSeek, Kimi), plus a spectator arena where the models play each other.

</details>

### SvirepyiBambr/pollinations-jev-jury

<details><summary>README 발췌</summary>

A one-call startup-idea jury built on the Pollinations Jev decision endpoint (POST /alpha/decisions, model typesafe/jev-1.13), submitted for quest #15722.

</details>

### tbrought/honeytongue

<details><summary>README 발췌</summary>

Characters your players can actually argue with. Give a character a name, a persona, and a goal, pass in whatever the player typed, and Honeytongue tells you whether they were convinced, judged by that character's values. The same line can win over a greedy merchant and offend an honest guard. It's 

</details>

### tom-scott-dev/test-laya

<details><summary>README 발췌</summary>

A tiny 2D town where every NPC's behavior is driven by Laya — the open-source, Jev-compatible System 1 decision model (non-autoregressive: given a text state and typed questions it returns choice / score / noul answers with calibrated probabilities in a single forward pass). No hand-coded opponent A

</details>

### tripodxu/jev-piano

<details><summary>README 발췌</summary>

&gt; Jev 每小节实时决策，边作曲边演奏的钢琴。 你给一句话，它现场编曲、现场弹。 &gt; 零框架、零构建、零运行时依赖的纯静态前端，一条 wrangler deploy 部署到 Cloudflare Workers。

</details>

### YV17labs/TokenShooter

<details><summary>README 발췌</summary>

There is no backend: the model (Qwen3.5) is downloaded once, then runs locally through WebGPU. Every move is a single token: the model writes nothing, the game reads the probability it gives to four words, Forward, Left, Right and Shoot, and plays the most likely one.

</details>

### MarcosSete/jev-doom

<details><summary>README 발췌</summary>

Confidence-aware NPC decision system built with ViZDoom and TypeSafe Jev.

</details>

### scavin/Jev-2048

<details><summary>README 발췌</summary>

Watch Jev play 2048 automatically, in the new dashboard or the original game window.

</details>
