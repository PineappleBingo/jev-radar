# 🎮 게임·인터랙티브 (179)

[← README](../README.md)

| 리포 | ⭐ | 🍴 | 요약 | 태그 | 최근 푸시 |
|---|---:|---:|---|---|---|
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 454 | 65 | 구조화된 에뮬레이터 RAM 상태 데이터를 바탕으로 Super Mario Bros. 게임 컨트롤러 입력을 직접 결정하는 Jev 기반 에이전트 실험 프로젝트다.<br>게임 상태 JSON을 입력받아 컨트롤러 매크로 선택(Choice), 현재 전방 점프의 유용성 여부(Noul), 즉각적인 위험도 등급(Score)을 판단한다.<br>스크린샷 대신 에뮬레이터 RAM과 텔레메트리를 구조화된 JSON으로 파싱해 전달하며, 타이밍 계산은 코드가 수행하고 Jev가 직접 입력을 결정한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") | 2026-09-16 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 229 | 43 | TypeSafe Jev 모델을 사용해 자율주행(오토파일럿) 행동을 시뮬레이션하는 Three.js 기반의 드라이빙 시뮬레이터 데모다.<br>주변 교통, 도로 경계, 신호, 정지선 및 목표 경로 정보를 바탕으로 샘플링된 주행 경로 후보(조향 및 속도 조합)와 정지 여부 중 최적의 행동을 선택하도록 묻는다.<br>후보 경로 생성과 기하학적 제어 연산은 로컬 웹 워커에서 처리하고, 컴팩트한 상태 테이블만 서버를 통해 Jev API로 전달해 초당 1.5~4회 주행 경로를 선택한다. | [✅](../README.md#legend "코드 확인: 코드에서 Jev API 호출을 찾았습니다") [🔥 +5](../README.md#legend "최근 7일 동안 별이 5개 늘었습니다") | 2026-09-17 |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2563 | 264 | Qwen3-0.6B 백본 기반으로 토큰 디코딩 없이 병렬 판단 확률 분포를 출력하도록 구현된 오픈소스 Jev 복제 모델 및 훈련 파이프라인이다.<br>게임 상태와 질문이 주어졌을 때 동적 선택지 중 최적 행동 확률(Choice), 명제 참/거짓 확률(Boolean), 정렬 등급 점수(Score)를 판단시킨다.<br>텍스트 토큰 생성 대신 상태·질문·후보군을 한 번의 포워드로 인코딩하고 전용 헤드로 확률 분포를 직접 출력해 4개 게임 제어에 적용했다. | [❌](../README.md#legend "코드에서 못 찾음: 코드 검색으로는 Jev 호출이 보이지 않습니다. 문서에서만 언급했을 수 있습니다") [🔥 +5](../README.md#legend "최근 7일 동안 별이 5개 늘었습니다") | 2026-10-16 |
| [christianmat/jev-pokemon](https://github.com/christianmat/jev-pokemon) | 130 | 10 | 인공지능 모델 Jev가 포켓몬스터 레드를 직접 플레이하도록 에뮬레이터와 연동해 의사결정을 수행하는 프로젝트다.<br>이동 목적지, 대화 상대, 전투 기술, 포켓몬 교체, 메뉴 선택 등 게임 내 가능한 행동 목록 중에서 하나를 고른다.<br>하네스가 메모리를 읽어 규칙상 가능한 선택지와 정보를 구성하고, 길 찾기 같은 단순 조작만 처리하며 진행을 전적으로 모델 판단에 맡긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [wingedsheep/argentum-engine](https://github.com/wingedsheep/argentum-engine) | 75 | 41 | Kotlin 기반으로 MTG(Magic: The Gathering) 규칙을 구현한 게임 엔진이자 온라인 멀티플레이 플랫폼이다.<br>게임 내 AI 상대 모드(GAME_AI_MODE=jev)에서 게임 액션 및 플레이 선택지를 판단한다.<br>결정론적 룰 엔진, RL/MCTS 학습용 Gym 환경, 오라클 텍스트 파서 Assay와 함께 트리 탐색·LLM·Jev AI 컨트롤러를 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev) | 114 | 12 | Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [NevaMind-AI/JevTown](https://github.com/NevaMind-AI/JevTown) | 50 | 6 | jev based AI town simulation | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [emrickgarrett/OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 43 | 10 | Three.js와 Node.js 기반 브라우저 1v1 FPS 환경에서 TypeSafe System One 기반 AI 봇과 스나이퍼 대결을 펼치는 게임이다.<br>서버가 약 9Hz 주기로 구조화된 게임 상태를 바탕으로 이동, 조준각(yaw, pitch), ADS, 발사, 점프 여부를 Choice와 Noul로 질의한다.<br>API 장애 시 매치가 멈추지 않도록 동일한 액션 인터페이스를 공유하는 휴리스틱 로직을 폴백으로 구현했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [phyous/tsai-sc](https://github.com/phyous/tsai-sc) | 28 | 4 | 구조화된 스타크래프트 셰어웨어 게임 상태를 관찰하고 TypeSafe Jev 모델의 판단으로 키보드와 마우스 입력을 제어하는 하네스 리포지토리다.<br>정리된 아군 및 시야 상태를 바탕으로 유닛 생산, 자원 채취, 탐색, 업그레이드, 전투 등 어떤 명령을 실행할지 choice 형태로 선택하게 한다.<br>화면 캡처가 아닌 구조화된 게임 데이터를 사용하며, 상태 읽기와 추론 중 게임을 일시정지하고 경제와 군사 결정을 분리해 원본 미션 승리를 달성했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [Somnius/shadowrealms-ai](https://github.com/Somnius/shadowrealms-ai) | 21 | 2 | Self-hosted AI Storyteller for World of Darkness: Classic (oWoD Revised) and V5 rules, dice pools from your character sheet, Discord-style chat with voice (listen and speak, local TTS and Whisper), local LLMs (LM Studio / Ollama) with RAG memory, English and Greek. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-22 |
| [BunsDev/river-oaks](https://github.com/BunsDev/river-oaks) | 8 | 0 | 휴스턴 리버오크스 지구를 배경으로 주민 NPC의 행동과 상호작용을 구현한 3D 시뮬레이션 프로젝트다.<br>자동 방문 모드에서 캐릭터가 이동할 장소와 만날 대상, 도움 방식을 선택하거나 주민의 즉각적인 반응을 판단한다.<br>지도 기반 건물 내부와 거리를 렌더링하고 백엔드 브리지를 붙여 주민 반응과 경제 시나리오를 처리하도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [wonseokjung/connect-tycoon](https://github.com/wonseokjung/connect-tycoon) | 8 | 16 | 기업 운영 시뮬레이터 환경에서 강화학습과 사람의 피드백으로 의사결정 모델을 학습시키는 오픈소스 도구다.<br>주문·환불·사기 거래 등 주어진 회사 상황(state)에서 어떤 조치를 취할지 보기(criteria) 중 하나를 고르는 choice 판단을 요구한다.<br>시뮬레이터에서 PPO로 학습한 뒤 확신도가 낮을 때만 사람에게 묻는 방식을 쓰고 소형 언어 모델 증류까지 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-17 |
| [joch/jevman](https://github.com/joch/jevman) | 7 | 14 | TypeSafe jev 의사결정 모델을 이용해 팩맨이나 유령의 이동 방향을 실시간으로 조작하는 웹 기반 팩맨 게임이다.<br>갈림길마다 계산된 거리와 유령 상태 정보를 바탕으로 캐릭터가 다음에 이동할 적절한 방향을 choice로 선택하게 한다.<br>사이드 패널에서 모델의 결정 확률과 지연 시간 및 누적 비용을 보여주며, 응답 실패 시 탐욕 알고리즘으로 대체한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [Prophetlab/JevPokerBench](https://github.com/Prophetlab/JevPokerBench) | 13 | 6 | 텍사스 홀덤 환경에서 의사결정 모델의 실력을 순위표로 평가하고 직접 대전이나 수 분석을 진행하는 벤치마크 플랫폼이다.<br>주어진 포커 핸드와 베팅 이력 상황에서 폴드, 체크, 콜, 레이즈 중 어떤 행동을 선택해야 하는지 묻는다.<br>외부 API 키 연동과 서버 측 128건 동시성 제어 풀을 갖추고 있으며, 리플레이와 실시간 어드바이저 기능을 웹 화면으로 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [IzumiSatoshi/vox-arcana](https://github.com/IzumiSatoshi/vox-arcana) | 9 | 1 | Voice-cast magic arena game. Speak or type incantations, powered by Jev, with local interpretation options. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [jammaru/jev-lab](https://github.com/jammaru/jev-lab) | 8 | 1 | 100 AI NPCs live in a tiny town. Jev chooses the next action; the world writes the story. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [dperezcabrera/ai-chess-lab](https://github.com/dperezcabrera/ai-chess-lab) | 4 | 1 | 브라우저에서 사용자와 LLM 및 Jev 모델이 체스 대국과 토너먼트를 진행하고 Stockfish로 기보를 분석하는 웹 애플리케이션이다.<br>체스 보드의 현재 상태에서 둘 수 있는 규칙상 유효한 수 목록을 선택지로 넘겨 다음에 둘 최선의 한 수를 고르게 한다.<br>선택지 제한 255개 안에 체스의 최대 합법 수 218개가 완전히 들어가므로 규칙 위반 없이 단일 API 호출로 다음 수를 결정한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [jevplay-games/jev-factorio-agent](https://github.com/jevplay-games/jev-factorio-agent) | 4 | 0 | Factorio 게임 환경에서 목표와 행동을 선택해 플레이를 자동화하는 파이썬 기반 에이전트다.<br>게임 상태 스냅샷을 바탕으로 목표, 다음 후보 행동, 교착 상태 여부를 판단하게 한다.<br>결정론적 코드가 게임 규칙과 실행을 맡고 모델은 질문 형식으로 빠른 거시적 판단만 내리도록 분리했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-15 |
| [yzxoi/RSI-Jev-Slay-the-Spire-2](https://github.com/yzxoi/RSI-Jev-Slay-the-Spire-2) | 3 | 1 | 슬레이 더 스파이어 2 게임에서 비용이 저렴한 Jev 모델과 고비용 모델을 결합해 승률을 높이려는 에이전트 실험 리포다.<br>게임 내 카드 선택, 경로 결정, 보상 수령, 상점 이용, 포션 사용 등의 후보 행동 중 최적안을 고르는 choice 판단을 요청한다.<br>결정론적 규칙 계산과 저비용 Jev 결정을 기본으로 두고 고난도 상황만 상위 모델에 위임하는 다층 구조를 실험한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [AlvianEka/godot-jev](https://github.com/AlvianEka/godot-jev) | 2 | 0 | TypeSafe Jev System One HTTP API를 연동해 게임 상태를 평가할 수 있게 돕는 Godot 4.7+ 전용 애드온이다.<br>플레이어 체력이나 적 수 같은 게임 상태 데이터를 바탕으로 최적의 전술 행동이나 예/아니오 판정을 묻는다.<br>노드가 씬 트리를 벗어나면 진행 중인 HTTP 요청을 자동 취소하는 scene-safe 기능과 엔진 내장 타입을 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [faelion/BehaviorLLM](https://github.com/faelion/BehaviorLLM) | 5 | 0 | Open-source Unity package for local LLM-driven NPC and game-system decisions, with configurable actions and playable samples. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-20 |
| [milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon) | 6 | 2 | RAM과 타일맵으로 추출한 게임 상태를 텍스트로 읽고 TypeSafe Jev의 판단을 거쳐 Game Boy 에뮬레이터(PyBoy)로 포켓몬스터 레드를 자동 플레이하는 자율 에이전트다.<br>대화와 맵 정보로 구성된 텍스트 스냅샷을 기반으로 현재 턴의 상위 목표(Choice)와 각 버튼 입력/이동이 최적인지 여부(Noul 예/아니오)를 판단시킨다.<br>비전 모델이나 대화 기록 없이 텍스트 스냅샷과 자체 단기 메모리 주입으로 동작하며, Jev의 결정을 A* 경로 탐색과 결정론적 안전 규칙으로 보정해 실행한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [AKKI0511/living-matter](https://github.com/AKKI0511/living-matter) | 2 | 0 | 플레이어의 이동에 맞춰 512개 물질이 발판과 다리를 형성하는 3D 브라우저 인터랙티브 아트 게임이다.<br>실시간 플레이어의 움직임을 바탕으로 지형 물질이 어떻게 길을 만들고 반응할지 판단하게 한다.<br>API 키가 없어도 규칙 기반 프리뷰로 실행할 수 있고, Jev 연동 시 세션 감사 기록과 재생 기능을 지원한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [desplega-ai/system-one](https://github.com/desplega-ai/system-one) | 2 | 0 | 타입 기반 의사결정 모델 API를 제공하고 모델끼리 대결하는 게임 환경을 갖춘 개발 프로젝트다.<br>플레이어 상태와 이미지를 바탕으로 문을 열려는 행동 여부, 분위기, 핵심 아이템, 위험 등급을 묻는다.<br>다양한 프로바이더를 단일 규격으로 묶고 프레임 지연을 줄이기 위해 스트림 호출 기능을 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-17 |
| [ArturSkowronski/kNES](https://github.com/ArturSkowronski/kNES) | 34 | 4 | Educational implementation of NES emulator in Kotlin, based on Java vNES emulator | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [wondertwins/jev-benchmark](https://github.com/wondertwins/jev-benchmark) | 8 | 1 | Benchmarks and a playground for TypeSafe's Jev (System One) model: chess, and who-is-the-player-talking-to for speech-to-text game NPCs | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [Muurrphy/bipu](https://github.com/Muurrphy/bipu) | 1 | 0 | 텔레그램 메시지나 상호작용 신호에 맞춰 SO-101 로봇 팔이 감정 궤적과 소리로 반응하게 만드는 반려 로봇 프로젝트다.<br>수신된 메시지와 대기 시간 같은 규칙을 바탕으로 준비된 동작 중 어떤 반응을 취할지 Jev가 선택한다.<br>물리 로봇 없이도 로컬 미리보기와 궤적 검증이 가능하며 8가지 표현 동작 데이터를 포함하지만 오디오 파일은 직접 준비해야 한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [enoyola/jev-grand-prix](https://github.com/enoyola/jev-grand-prix) | 7 | 0 | An F1 racing game where TypeSafe's Jev picks the racing line and the pedals, and learns each corner's limit between laps | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [joshlarsen/jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner) | 7 | 4 | Chrome dino game played by Typesafe AI Jev model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [0x440-1me/laya-unity](https://github.com/0x440-1me/laya-unity) | 1 | 0 | 유니티 환경에서 로컬 서버나 TypeSafe 엔드포인트와 통신해 게임 AI의 정형화된 판단을 받아오는 클라이언트 SDK다.<br>체력과 거리 등 게임 상태를 전달하고 NPC의 행동 선택지, 상황 위험도 등급, 도주 여부를 choice, score, noul로 묻는다.<br>가중치나 ONNX 런타임을 내장하지 않고 통신 계층에 집중한 형태이며 임의의 텍스트 대신 미리 정의된 선택지만 반환받도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [abelardodiaz/doom-in-claude-code](https://github.com/abelardodiaz/doom-in-claude-code) | 1 | 0 | Claude Code 터미널 패널 안에서 ViZDoom을 실행하고 AI가 플레이하도록 돕는 플러그인이다.<br>실제 게임 화면 이미지와 상태 텍스트를 보고 싸움, 회피, 전진 중 어떤 전술을 쓸지와 어떤 목표를 쫓을지 판단한다.<br>초당 약 2.5회 Jev를 호출해 전술을 정하고 상위 두 선택지의 확률 차가 0.2 이상일 때만 판단을 채택한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [ably-labs/jev-pong](https://github.com/ably-labs/jev-pong) | 1 | 3 | 모델의 판단 속도에 맞춰 공이 한 칸씩 움직이는 Pong 게임으로, Jev와 기존 LLM의 의사결정 지연 시간을 비교하는 데모다.<br>실시간 게임 상태를 입력받아 패들을 움직이기 위한 행동 선택지를 typed choice로 판단시킨다.<br>언어 생성 없이 typed choice만 반환하는 Jev의 빠른 응답 속도(약 220ms)를 시각화했으며, Ably 채널로 에이전트와 플레이어를 직접 연결했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [AlungranPJ/spider-crawler-extension](https://github.com/AlungranPJ/spider-crawler-extension) | 1 | 0 | 웹페이지에서 역운동학으로 움직이는 거미나 문어 캐릭터가 사용자가 찾는 링크를 수집하고 나머지는 감싸 가려 주는 브라우저 확장 프로그램이다.<br>화면에 보이는 링크의 텍스트와 주소가 사용자가 찾는 대상과 일치하는지를 noul(예/아니오 확률)로 한 번에 묶어서 묻는다.<br>외부 라이브러리나 빌드 과정 없이 순수 Manifest V3 캔버스로 다리 애니메이션을 구현했고, 키가 없으면 키워드 검색으로 대체한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [gbesse/jev-playtest-lab](https://github.com/gbesse/jev-playtest-lab) | 1 | 0 | 게임 엔진에서 전달받은 유효 행동 목록을 Jev로 평가하고 판단 과정을 다시 재생해 검증할 수 있게 돕는 도구다.<br>현재 게임 상태와 목표에 맞춰 규칙상 허용된 행동 후보들 중 어떤 선택지가 가장 적합한지 순위를 매기도록 요청한다.<br>Jev가 게임을 직접 조작하지 않고, 상태 변경 번호와 안전 임계값을 대조해 엔진이 최종 실행 여부를 결정하도록 격리했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [mostafa1344/laya-vs-jev](https://github.com/mostafa1344/laya-vs-jev) | 1 | 0 | 크롬 공룡 달리기 게임에서 로컬 AI 모델 Laya와 클라우드 호스팅 AI 모델 Jev의 플레이를 실시간으로 비교하는 벤치마크 프로그램이다.<br>README에 구체적인 판단 지점 설명은 없으나 장애물을 피하기 위해 언제 점프할지 결정하는 데 쓰인다.<br>MLX 기반 로컬 실행 모델과 원격 호스팅 API 모델 간의 반응 속도와 점프 정확도를 한 화면에서 대조하며 관찰할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [Pablositoo/dernier-abri](https://github.com/Pablositoo/dernier-abri) | 1 | 0 | 어두운 밤에 나타난 실루엣의 행동 묘사를 바탕으로 좀비인지 생존자인지 판별해 사격 여부를 결정하는 3D 방어 브라우저 게임이다.<br>실루엣의 외형과 경고에 반응한 행동 설명을 입력받아 대상이 좀비인지 또는 생존자인지 여부를 확률로 묻는다.<br>모델이 직접 사격을 결정하지 않고 베이지안 융합과 순차 검정을 거쳐 결정론적 규칙으로 발사 여부를 통제한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [pinebit/jev-tetris](https://github.com/pinebit/jev-tetris) | 1 | 0 | TypeSafe의 Jev 모델이 매 턴마다 스스로 최적의 블록 배치를 골라 진행하는 테트리스 웹 데모다.<br>현재 보드 상태에서 가능한 블록 배치 후보 중 lines_cleared, new_holes 등 지표를 비교해 어떤 착수가 가장 유리한지 choice 호출로 고르게 한다.<br>별도의 휴리스틱 채점식 없이 모델이 보드 지표 간 상충 관계를 직접 저울질하며, 호출마다 지연 시간과 비용을 실시간 집계해 화면에 보여준다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [pochang6/jev-buzzword-rush](https://github.com/pochang6/jev-buzzword-rush) | 1 | 0 | 사용자가 입력한 IT 용어를 실시간으로 분류하고 반응해 Jev 모델의 속도와 저렴한 비용을 체감하도록 만든 웹 게임이다.<br>입력 단어의 IT 분야, 현역 기술 정도, 학습 비용, 마니아 취향 여부, 특정 기술 상식과의 일치 여부를 choice, score, noul로 한 번에 질문한다.<br>텍스트를 생성하는 LLM 없이 단일 요청에 5가지 판단을 묶어 처리하고 점수 계산과 고정 대사 선택은 자바스크립트 코드로 해결한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [SolvAI/Jevrunner](https://github.com/SolvAI/Jevrunner) | 1 | 0 | 로컬 장비에서 돌아가는 경량 모델이 장애물을 피해 달리는 과정을 실시간으로 확인하는 무한 러너 게임이다.<br>매 장애물 열마다 모델이 이동할 차선과 점프나 슬라이드 같은 동작을 선택지로 제시해 판단하도록 묻는다.<br>텍스트를 생성하지 않고 단일 순전파로 선택지 확률을 뽑아 약 100ms 지연 시간으로 실시간 게임 루프를 제어한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-17 |
| [Wachu2005/jev-alchemy](https://github.com/Wachu2005/jev-alchemy) | 1 | 0 | 사용자가 입력한 임의의 단어로 물질과 생명체를 만들고 물리 법칙을 구성해 시뮬레이션하는 떨어지는 모래 샌드박스 게임이다.<br>물질의 이동 형태, 두 물질이 닿았을 때의 상호작용 결과, 생명체 간의 반응 행동, 폭발 크기 등을 객관식 질문과 확률로 판단한다.<br>하드코딩된 규칙 없이 닫힌 질문 수백 개로 구성된 Jev의 판단 확률을 물리 법칙과 상호작용 행렬로 직접 사용한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [wnoronha/systemone-racer](https://github.com/wnoronha/systemone-racer) | 1 | 0 | 동일한 장애물 환경에서 Jev, OpenAI, 로컬 온디바이스 모델의 실시간 차선 선택 결정을 브라우저상에서 비교하는 3레인 레이싱 데모다.<br>도로 상태와 장애물 정보를 바탕으로 3개 차선 중 주행에 적합한 경로를 선택하는 lane_choice 질문을 choice 형식으로 묻는다.<br>브라우저에서 Promise.allSettled로 세 공급자에게 같은 상태를 병렬 요청하며, Jev의 CORS 문제를 해결하기 위해 로컬 파이썬 프록시를 둔다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [YichenBC/jev-charactor](https://github.com/YichenBC/jev-charactor) | 1 | 0 | 게임 개발자가 자율형 NPC와 AI 마을을 만들 때 쓰는 타입스크립트 기반 캐릭터 SDK다.<br>캐릭터의 욕구와 기억을 바탕으로 실행 가능한 행동 목록과 대화 의도 중 무엇을 택할지 묻는다.<br>자유 텍스트 생성 없이 모델이 의도를 고르면 프로그램이 허용된 사실과 대사 템플릿을 조합해 대화를 구성한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [jaibhasin/jev-flappy-bird](https://github.com/jaibhasin/jev-flappy-bird) | 2 | 0 | Jev and GPT-6 Luna race through the Flappy Bird Game | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [atarikcaliskan/jevball](https://github.com/atarikcaliskan/jevball) | 4 | 0 | 22 Jev models, one ball: a 3D football match where every player is its own Jev (TypeSafe AI System One) decision. Watch, or take over the number 9. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [vtrivedy/jev-plays-games](https://github.com/vtrivedy/jev-plays-games) | 4 | 1 | Chess, Connect Four, and a decision model. Play Jev or watch Jev play itself. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [rythmn1111/doom-war](https://github.com/rythmn1111/doom-war) | 3 | 1 | Two System One models fight a real Doom deathmatch. Laya (322M, open weights, local MLX) vs Jev (TypeSafe hosted). Same state, same typed questions, same shield — only the model differs. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [Eliot5566/jev-arena](https://github.com/Eliot5566/jev-arena) | 1 | 0 | Write a fighter in plain English. Jev pilots it in real time. PR-driven ladder, swappable brains. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [het2576/jev-wordle](https://github.com/het2576/jev-wordle) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [JackZH26/Jev-Live](https://github.com/JackZH26/Jev-Live) | 1 | 0 | Open-source Windows studio for Steam games: local AI host, editable avatars/chat, manual or JEV-assisted play, YouTube/Twitch OAuth and OBS streaming to YouTube/Twitch/X. Five-language UI; developer preview. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [jensabrahamsson/tokyo-arcade-1982](https://github.com/jensabrahamsson/tokyo-arcade-1982) | 1 | 0 | Arcade games | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [ojusave/beat-jev](https://github.com/ojusave/beat-jev) | 1 | 1 | A penalty shootout powered by Render Workflows, TypeSafe Jev, and Render Postgres. Python and TypeScript examples. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [silicon-sbt/pkmn-brain](https://github.com/silicon-sbt/pkmn-brain) | 1 | 0 | 宝可梦外置大脑：Showdown 实时决策面板（代码算事实、小模型做判断）+ 决策日志与自检 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [tbrought/honeytongue](https://github.com/tbrought/honeytongue) | 1 | 0 | Characters players can actually argue with: a persuasion mechanic for JavaScript games where players type or speak to NPCs. Powered by Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [weiziyoung/sanguoce](https://github.com/weiziyoung/sanguoce) | 1 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-19 |
| [ellistev/typesafe-minecraft-demo](https://github.com/ellistev/typesafe-minecraft-demo) | 3 | 2 | A Minecraft Java player controlled by TypeSafe AI, with live decisions, Canadian flag building, and a side-by-side dashboard. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [lmvdz/rpg-jev](https://github.com/lmvdz/rpg-jev) | 3 | 0 | A living-world RPG whose NPCs are decided by TypeSafe's Jev judge model; code owns rules, numbers and state. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground) | 3 | 2 | Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-16 |
| [0rgan1co/arena-buscaminas](https://github.com/0rgan1co/arena-buscaminas) | 0 | 0 | 지뢰찾기 게임에서 TypeSafe Jev와 OpenRouter의 여러 LLM이 펼치는 플레이 성능과 비용을 비교하는 브라우저 기반 벤치마크 도구다.<br>논리적 확정 타일이 없어 위험을 감수해야 할 때 후보 칸 중 가장 안전한 위치를 choice로 고르게 한다.<br>확정 규칙은 일반 코드가 연산하고 위험 찍기 상황에서만 Jev를 호출하며, 별도 빌드 없이 index.html 한 장으로 구동된다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [alexandreroman/jong](https://github.com/alexandreroman/jong) | 0 | 0 | 브라우저에서 TypeSafe AI의 Jev 모델을 상대로 즐길 수 있는 퐁(Pong) 게임이다.<br>공이 도달할 10개 세로 구역 중 하나(target)와 공을 되받아칠 방향(aim)을 choice로 묻는다.<br>빌드 도구나 외부 프레임워크 없이 순수 캔버스로 구동하며 CORS 제약을 풀기 위한 작은 로컬 프록시만 둔다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [Anxiety471/Adaptive-Hostiles](https://github.com/Anxiety471/Adaptive-Hostiles) | 0 | 0 | 림월드에서 적대적 습격대 구성과 엘리트 폰의 전술적 이동 결정을 Jev로 제어하려는 모드 프로젝트다.<br>정착지 상태에 맞는 습격 규모와 방식, 그리고 엘리트 폰이 이동할 유효 좌표와 공격 대상 및 전술 자세를 고른다.<br>게임 엔진이 계산한 이동 가능 셀 후보군 중에서만 좌표를 선택하며 네트워크 실패 시 기본 로직으로 대체한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [blakeandrewwood/jev-goal-reflex](https://github.com/blakeandrewwood/jev-goal-reflex) | 0 | 0 | 자연어 명령으로 3D 공간의 박스를 제어할 때 LLM의 단계별 계획에 따라 Jev가 실시간 이동·회전·점프 동작을 결정하는 시스템입니다.<br>각 동작 단계에서 실제로 이동, 회전, 점프를 수행할지 여부와 이동 방향을 실시간으로 판단시킵니다.<br>느린 LLM 계획(System 2)과 빠른 Jev 반사 제어(System 1)를 분리하고, 속도 제한과 물리 계산은 TypeScript 코드로 통제합니다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [DimisCodes/tavli](https://github.com/DimisCodes/tavli) | 0 | 0 | TypeSafe Jev를 대국 상대로 삼아 백개먼 규칙으로 승부하는 웹 게임이다.<br>현재 국면 분석, 착수할 수 있는 수 중 최적의 수(choice), 더블링 큐브 사용 여부(noul)를 판단하게 한다.<br>결정론적 계산은 코드가 맡고 판단만 모델에 넘기며, 모델의 확신도가 0.5 미만이면 코드가 대신 결정하도록 구현했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-03 |
| [ericosg/doj](https://github.com/ericosg/doj) | 0 | 0 | Jev 모델을 적 인공지능으로 삼아 승률 높은 행동을 선택하도록 구현한 턴제 던전 크롤러 웹 게임이다.<br>적 캐릭터가 어떤 직업을 보낼지, 보스가 어떤 변신 형태로 시작할지, 턴마다 어떤 스킬이나 변신을 쓸지 choice 질문으로 묻는다.<br>수치 계산은 서버 코드가 미리 처리해 결과만 넘겨주고, 선택지 순서 편향을 막기 위해 무작위로 섞는 방식으로 구현했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [Fantasality/MAGI-EVA](https://github.com/Fantasality/MAGI-EVA) | 0 | 0 | 사용자가 제시한 명제를 에반게리온 속 마기 시스템처럼 세 가지 인격으로 심의해 결과를 도출하는 안드로이드 앱이다.<br>입력된 명제가 예/아니오 판정 대상인지 noul로 거르고 세 인격 프롬프트로 choice 재결과 score 확신도를 판정한다.<br>Gradle 없이 안드로이드 SDK 도구만으로 직접 빌드하며 캔버스 기반 전용 UI로 세 인격의 투표와 확률을 병렬 처리해 시각화한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [FoxMoss/20questions](https://github.com/FoxMoss/20questions) | 0 | 0 | 혼자서 스무고개 게임을 즐길 수 있도록 Jev API와 Uvicorn으로 구성한 웹 애플리케이션이다.<br>README에 판단 지점 설명이 없다.<br>제공된 웹사이트의 Jev 크레딧이 소진되면 사용자가 직접 환경변수를 넣고 Uvicorn으로 실행하도록 안내한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [gbesse/foundry-jev-encounter-director](https://github.com/gbesse/foundry-jev-encounter-director) | 0 | 0 | Foundry VTT 환경에서 장면에 배치된 토큰 후보 중 다음 인카운터 비트를 골라주는 모듈이다.<br>선택한 여러 Actor와 Token UUID 목록 가운데 어떤 대상을 다음 인카운터 비트로 삼을지 choice로 판단한다.<br>새 문서를 생성하거나 주사위를 굴리지 않고 미리보기 우선 방식으로 동작하며, 키 없이 시험 가능한 오프라인 픽스처를 포함한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [gbesse/jev-crowdpilot](https://github.com/gbesse/jev-crowdpilot) | 0 | 0 | 트위치 방송에서 시청자 투표 결과와 Jev의 결정을 오버레이 화면으로 비교해 보여주는 트위치 익스텐션이다.<br>스트림이 제공한 유효한 선택지 중에서 Jev가 직접 어떤 행동을 선택할지 결정한다.<br>오버레이는 실제 게임 행동을 실행하지 않으며 오프라인 데모 환경에서는 가상 투표 데이터를 사용해 동작을 검증할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [gbesse/jev-rankroom](https://github.com/gbesse/jev-rankroom) | 0 | 0 | 디스코드 액티비티 환경에서 플레이어들이 선택지의 순위를 예측하고 점수를 겨루는 소셜 판정 게임이다.<br>방에서 제공한 2~8개의 유한한 선택지 중에서 제시된 기준에 부합하는 결과를 판정하게 한다.<br>새로운 선택지 생성을 막고 정해진 후보 안에서만 모델이 평가하며 점수 계산과 동점 처리는 코드가 결정론적으로 처리한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [gbesse/reflex-godot](https://github.com/gbesse/reflex-godot) | 0 | 0 | Godot 4.7 환경에서 NPC가 유효한 행동만 선택하고 상태를 안전하게 갱신하도록 돕는 에디터 애드온이자 시뮬레이션 환경이다.<br>현재 월드 상태와 2개에서 32개 사이의 유효 행동 목록을 바탕으로 NPC가 다음에 수행할 최적의 행동 하나를 선택하도록 요청한다.<br>선택된 행동을 적용하기 전에 리비전과 유효성을 다시 검증하고 저널에 기록하여 상태 변조나 오류를 재생 검사로 감지한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-10 |
| [gbesse/unity-jev-behavior](https://github.com/gbesse/unity-jev-behavior) | 0 | 0 | Unity Behavior 그래프에서 게이트웨이를 거쳐 Jev의 판단을 비동기로 받아 처리할 수 있게 해 주는 액션 노드 확장 패키지다.<br>예시 구현인 서포트 팩 기준으로 지원 티켓 데이터를 입력받아 사전에 정의된 유한한 선택지 가운데 어떤 결과에 해당하는지 판단하게 한다.<br>API 키를 Node.js 게이트웨이에 숨기고, 평가 도중 게임 상태가 바뀌면 Revision을 올려 뒤늦게 도착한 응답을 기각할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-22 |
| [ghosthat-studio/keeping-an-npc-on-quest](https://github.com/ghosthat-studio/keeping-an-npc-on-quest) | 0 | 0 | 텍스트 게임 개발자가 LLM 기반 NPC의 스포일러 누설과 탈선을 방지하기 위해 사용하는 교육용 보조 코드다.<br>플레이어 입력의 의도 분류와 NPC 대사의 잠긴 정보 누설 여부, 허위 사실 생성 여부, 캐릭터 이탈 여부, 퀘스트 유도 여부를 판별한다.<br>플레이어 발언 의도를 분류한 뒤 생성된 대사를 네 가지 검사 기준으로 판별해 실패 시 재작성하거나 사전에 준비된 기본 대사로 대체한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [gkvoelkl/rust-bevy-jev-ants](https://github.com/gkvoelkl/rust-bevy-jev-ants) | 0 | 0 | Rust Bevy 기반으로 제작되어 플레이어의 자연어 명령에 따라 각 개미가 개별 행동 의도를 결정하는 시뮬레이션 게임이다.<br>여왕 개미(플레이어)의 텍스트 명령과 개미의 상황을 바탕으로 다음에 수행할 행동 의도(intent)를 선택지로 제시해 판단하도록 요청한다.<br>물리 및 페로몬 이동 시뮬레이션은 60Hz로 고전적으로 처리하고, Jev 모델 의사결정 계층은 비동기로 분리했으며 룰 기반 폴백 없이 동작한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [iamhuangyinan-sys/AISoupGameWeb](https://github.com/iamhuangyinan-sys/AISoupGameWeb) | 0 | 0 | 사용자가 질문하면 AI가 답을 판정해 바다거북 수프(상황 추리)를 진행할 수 있게 돕는 웹 게임이다.<br>플레이어 질문이 진실에 부합하는지 여부와 객관식 후보 중 가장 유력한 답변의 확률 분포를 판정한다.<br>Jev 확률 모델로 예·아니오·무관 삼태 답변을 만들고 애매할 땐 DeepSeek으로 교차 검증하며 서버에 API 키를 저장하지 않는다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [Imjungjuna/jev-face](https://github.com/Imjungjuna/jev-face) | 0 | 0 | 사용자가 키보드로 문장을 입력할 때 상대방이 느낄 감정과 강도를 판별해 3D 얼굴 표정을 실시간으로 움직이는 인터랙티브 웹 앱이다.<br>입력 문장이 주는 감정을 8가지 선택지 중 choice로 고르고, 감정의 강도를 0부터 4까지의 rubric score로 판별한다.<br>단일 감정만 쓰지 않고 8개 감정의 확률 분포 전체를 가중치로 삼아 프레임마다 표정을 부드럽게 보간한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [jevplay-games/jev-2048-arcade](https://github.com/jevplay-games/jev-2048-arcade) | 0 | 0 | 사용자가 브라우저에서 인공지능 Jev와 동일한 조건으로 대결할 수 있도록 만든 2048 듀얼 게임이다.<br>가능한 이동 방향별 판 상태를 두고 병합 구조와 빈 공간 확보, 안정성을 Score 형식으로 평가하게 묻는다.<br>모든 조작과 판단 기록을 시드 및 해시 체인으로 저장해 경기 결과를 오프라인에서 검증하고 재현할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-18 |
| [jevplay-games/jev-arcade-hub](https://github.com/jevplay-games/jev-arcade-hub) | 0 | 0 | 아홉 가지 JEV 아케이드 게임을 각 서브도메인으로 연결해 주는 런처 웹 서버다.<br>README에 판단 지점 설명이 없다.<br>외부 런타임 의존성 없이 Node.js 내장 http 모듈만으로 정적 파일 서빙과 게임 서버 상태 조회를 처리한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-19 |
| [jevplay-games/jev-checkers-analytics](https://github.com/jevplay-games/jev-checkers-analytics) | 0 | 0 | 사용자가 모델과 대국하며 결정 과정을 검증하고 분석할 수 있는 아메리칸 체커 웹 게임이다.<br>체커 대국 중 둘 수 있는 합법적인 수 후보들의 유불리를 구조화된 형세 질문으로 평가하게 한다.<br>서버가 게임 상태와 모델 판단을 해시로 묶어 기록하며 한 수 단위로 대국을 검증하고 분석할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-18 |
| [jevplay-games/jev-connect-four](https://github.com/jevplay-games/jev-connect-four) | 0 | 0 | 규칙 엔진과 Jev 모델을 연결해 7열 사목(Connect Four) 대국을 진행하고 디스코드 연동 랭킹을 기록하는 브라우저 게임이다.<br>착수 규칙 엔진이 추려낸 후보 열 중에서 이번 턴에 어떤 열에 말을 떨어뜨릴지 choice로 선택한다.<br>외부 런타임 의존성 없이 Node 22와 프레임워크 없는 자바스크립트로 구현했고, 모델 키는 브라우저에 노출하지 않고 서버에서만 다룬다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-18 |
| [jevplay-games/jev-dots-and-boxes](https://github.com/jevplay-games/jev-dots-and-boxes) | 0 | 0 | 웹 브라우저에서 서버 측 Jev 인공지능을 상대로 4×4 점잇기 상자 채우기 게임을 플레이할 수 있는 웹 애플리케이션이다.<br>합법적인 여러 선분 후보 가운데 이번 턴에 어디를 그어야 가장 유리한지 choice 방식으로 선택하게 묻는다.<br>선택 후보와 확률 분포를 해시로 연결된 이벤트 저널에 기록해 오프라인에서도 결정 과정을 검증하고 재생할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-18 |
| [jevplay-games/jev-guess-who](https://github.com/jevplay-games/jev-guess-who) | 0 | 0 | 숨겨진 캐릭터를 상대보다 먼저 맞히는 보드 게임 Guess Who를 브라우저에서 즐길 수 있도록 서버 기반 규칙과 추론 대결 기능을 제공하는 오픈소스다.<br>자신의 차례에 제시된 유효한 행동 후보 목록 중 상대의 비밀 캐릭터를 좁혀내기 위해 어떤 질문이나 최종 지목을 선택할지 결정한다.<br>정답 판정과 후보 소거를 모델 대신 서버가 직접 계산하고 모든 턴의 결정 근거와 분석 통계를 검증 가능한 리플레이로 남긴다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-18 |
| [jevplay-games/jev-mastermind](https://github.com/jevplay-games/jev-mastermind) | 0 | 0 | 이 리포는 사용자가 Jev 모델과 번갈아 암호를 해독하며 대결하는 2인 마스터마인드 브라우저 게임이다.<br>이전 추측 기록과 피드백, 미리 점수화된 후보군을 바탕으로 다음 추측할 암호 기호를 무엇으로 정할지 묻는다.<br>외부 런타임 의존성이 없으며 암호를 해시로 검증하고 경기 후 1,296가지 모든 경우의 수를 분석해 리플레이를 검증한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-19 |
| [jevplay-games/jev-minesweeper](https://github.com/jevplay-games/jev-minesweeper) | 0 | 0 | 지뢰찾기 판에서 플레이어가 AI 모델 Jev와 실시간으로 속도를 겨루는 브라우저 기반 2인 지뢰찾기 레이스 게임이다.<br>보드 상태를 보고 다음에 열 칸이 안전한지 또는 어느 칸을 열어야 하는지 Jev에게 판단을 묻는다.<br>외부 런타임 의존성과 프론트엔드 빌드 과정이 없으며 결정론적 리플레이 검증과 지연 판정 방식을 채택했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-18 |
| [jevplay-games/jev-sudoku-analytics](https://github.com/jevplay-games/jev-sudoku-analytics) | 0 | 0 | 동일한 스도쿠 퍼즐을 두고 인공지능과 각자 보드에서 실시간 속도 경쟁을 펼치는 브라우저 기반 게임이다.<br>스도쿠 판의 다음 수를 둘 때 어떤 숫자를 어디에 배치할지 Choice 요청으로 선택하게 한다.<br>빌드 단계 없이 Cloudflare Worker와 D1으로 실행되며 모든 동작을 해시 체인 기반 이벤트 로그에 기록한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-18 |
| [jevplay-games/jev-tic-tac-toe](https://github.com/jevplay-games/jev-tic-tac-toe) | 0 | 0 | 웹 브라우저나 디스코드에서 Jev 모델을 상대로 틱택토 게임을 둘 수 있게 만든 웹 애플리케이션이다.<br>현재 보드 판세와 둘 수 있는 위치 정보를 바탕으로 다음에 둘 수를 choice 질문으로 묻고 판단한다.<br>API 키가 없으면 완전 탐색 알고리즘으로 대체 동작하며 모든 경기 기록은 리플레이 검증을 거쳐 순위표에 저장된다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-18 |
| [joaoh82/coffee-under-fire](https://github.com/joaoh82/coffee-under-fire) | 0 | 0 | React와 Three.js를 사용해 브라우저에서 실행되는 아레나 슈팅 게임을 구현한 프로젝트다.<br>README에 판단 지점 설명이 없다.<br>초기에는 Jev 모델로 적 NPC의 전술을 결정했으나 현재는 로컬 유틸리티 점수 계산 방식으로 교체되었다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [klappy/ma8ic8all-jev](https://github.com/klappy/ma8ic8all-jev) | 0 | 0 | Jev 모델과 Cloudflare Workers AI를 기반으로 질문에 확률적 답변을 반환하는 매직 8볼 콘셉트의 MCP 서비스다.<br>shake 도구로 예·흐림·아니오를 판정하거나 ask 도구를 통해 지정된 계약 규격에 맞춰 질문에 대한 확률적 판단을 묻는다.<br>Cloudflare Access JWT를 Worker에서 직접 검증해 접근을 제어하며, MCP JSON-RPC와 REST 형태의 JSON API 엔드포인트를 함께 제공한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [komzweb/jev-vs-decisions-rpg](https://github.com/komzweb/jev-vs-decisions-rpg) | 0 | 0 | 턴제 RPG 전투에서 TypeSafe Jev와 OpenAI Decisions API의 행동 선택 성능과 비용을 비교하는 벤치마크 실험 프로젝트다.<br>텍스트로 기술된 현재 게임 상태를 바탕으로 공격, 방어, 모으기 공격, 물약 사용, 도망 중 이번 턴에 취할 행동을 choice로 묻는다.<br>몬테카를로 롤아웃으로 기준 정답을 생성해 정확도와 신뢰도 보정 오차(ECE)를 평가하고 리플레이 뷰어로 내면 확률을 시각화한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [ktchung/jev-backroom-generator](https://github.com/ktchung/jev-backroom-generator) | 0 | 0 | 플레이어가 이동할 때마다 인접한 방을 실시간으로 절차적 생성하는 백룸 워킹 시뮬레이터 게임이다.<br>새로 이어질 방의 구조, 벽지와 바닥재, 조명, 기괴함 수치, 배치할 소품과 이전 방에서 바꿀 요소를 판단한다.<br>코드 레벨의 긴장감 곡선으로 분위기 변화 폭을 안정시키고 API 호출 실패 시 무작위 생성으로 대체하도록 만들었다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [lmgame-org/Gaming-JevSwarm](https://github.com/lmgame-org/Gaming-JevSwarm) | 0 | 0 | 군집 지능 환경에서 여러 에이전트의 개별 행동 결정을 비교하고 시뮬레이션하는 게임 프레임워크다.<br>각 에이전트가 국소 정보를 바탕으로 다음에 취할 최적의 행동 선택지를 choice로 판단하게 한다.<br>외부 의존성을 최소화하고 웹 뷰어에서 실시간으로 개별 에이전트의 관측값과 행동 확률을 직접 검사할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [ludvious/ludica-jev](https://github.com/ludvious/ludica-jev) | 0 | 0 | ludica-jev는 2048 게임에서 Jev 호환 텍스트 의사결정 모델과 탐색 알고리즘의 플레이 성능을 비교 분석하는 C++ 프로젝트다.<br>2048 게임의 현재 판 상태와 이동 결과 정보를 바탕으로 다음에 둘 유효한 이동 방향 중 하나를 고르도록 요청한다.<br>jevos 의사결정 모델 점수는 약 950점으로 무작위 수준에 머물러 수치 계획 게임에서는 탐색 알고리즘인 expectimax보다 크게 뒤처진다는 한계를 보여준다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-19 |
| [mannmalviya/Lev](https://github.com/mannmalviya/Lev) | 0 | 0 | Flappy Bird와 Chrome Dino 게임에서 소형 로컬 모델과 Jev, 텍스트 LLM의 플레이 성능을 겨루는 테스트 환경이다.<br>게임 상태 정보를 보고 다음에 취할 안전한 조작 행동을 선택하도록 묻는다.<br>전문가 봇 기반으로 훈련 데이터를 생성하고 게이트웨이 서버와 Next.js 웹 화면을 연결해 모델 간 경주를 시각화한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-13 |
| [marcinl/snake_jev](https://github.com/marcinl/snake_jev) | 0 | 0 | 로컬 Ollama로 구동되는 Jev 판단 모델에 매 틱마다 뱀 게임 상태를 보내 이동을 제어하는 파이썬 프로젝트다.<br>현재 보드 상태에서 뱀의 머리가 다음에 이동해야 할 방향을 네 가지 선택지 중에서 고르도록 질문한다.<br>소형 모델을 위해 상대적 위치 힌트를 주며 모델 선택이 충돌을 유발할 때 가장 안전한 차선책을 두는 가드 기능을 갖췄다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [MaryNfs/pacman-ai-race](https://github.com/MaryNfs/pacman-ai-race) | 0 | 0 | 팩맨 미로 게임에서 TypeSafe Jev와 로컬 Laya 모델의 이동 경로 결정을 나란히 비교하는 웹 기반 실험 환경이다.<br>전체 맵과 유령 위치 및 경로 후보 요약을 바탕으로 팩맨이 이동할 최적의 typed route를 choice로 고르게 한다.<br>이동 중 다음 결정을 미리 요청하는 프리페치 방식으로 네트워크 지연을 줄이고 결정 상세를 화면에 실시간으로 표시한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [PanikParty/System1Doom](https://github.com/PanikParty/System1Doom) | 0 | 0 | 텍스트 기반 System One 모델이 ViZDoom 환경에서 둠 게임을 플레이하도록 지원하는 테스트 하네스다.<br>게임 엔진 상태를 바탕으로 현재 가능한 행동 목록 중에서 취해야 할 전술과 공격 대상을 선택하도록 묻는다.<br>기하학적 계산은 코드가 처리하고 전술적 판단만 모델에 맡기며 결정론적 컨트롤러가 이를 키 입력으로 변환한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [sailtovictory/zork_by_jev](https://github.com/sailtovictory/zork_by_jev) | 0 | 0 | 언어 모델이 제안한 행동 후보 중 하나를 판단 모델로 골라 텍스트 어드벤처 게임 Zork I을 플레이하는 자율 에이전트다.<br>언어 모델이 제안하고 하네스가 유효성을 검증한 명령어 선택지 중 어떤 행동을 실행할지 확률로 선택하게 한다.<br>실패한 명령어나 기방문 방을 추적해 루프를 막고 게임 간 학습한 지도와 교훈을 JSON 파일로 보존한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [sevenboom77/jev_Pokemon](https://github.com/sevenboom77/jev_Pokemon) | 0 | 0 | Agnes Harness와 Jev를 결합해 LLM 에이전트 둘이 포켓몬 쇼다운 환경에서 스스로 대전을 완주하도록 구축한 배틀 시뮬레이션 시스템이다.<br>현재 배틀 상황과 합법적인 행동 후보 목록을 바탕으로 어떤 기술을 쓰거나 포켓몬을 교체해야 할지 확률 분포 형태로 추천을 구한다.<br>Jev의 추천을 강제하지 않고 에이전트가 참고값으로만 쓰며 결정 식별자로 합법적인 수만 제출하도록 검증 구조를 갖췄다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [ShouvikGhosh2048/sobosuba-system-one-decision-models](https://github.com/ShouvikGhosh2048/sobosuba-system-one-decision-models) | 0 | 0 | 게임 sobosuba 화면을 캡처해 TypeSafe Jev 모델의 시각 기반 판단으로 자동 조작하는 봇이다.<br>화면을 보고 메뉴 클릭과 드래그 조작 중 무엇을 수행할지 choice로 판단하고 대상 위치를 박스로 선택한다.<br>이전 행동 이력 없이 매 순간 단일 스크린샷과 게임 설명만 전달해 클릭 위치나 드래그 시작점 및 도착점을 좌표로 얻는다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [Sunwood-ai-labs/jevdash](https://github.com/Sunwood-ai-labs/jevdash) | 0 | 0 | TypeSafe Jev 모델의 실시간 제어 성능을 측정하기 위해 자체 구현한 60 FPS 2D 플랫폼 게임 벤치마크다.<br>캐릭터가 수행할 이동 조작(Choice)과 긴급 점프 필요 여부(Boolean), 즉각적인 물리적 위험도(Score)를 판단하게 한다.<br>8프레임마다 비동기로 결정을 처리하여 네트워크 지연이 발생해도 60 FPS 물리 루프가 끊기지 않도록 설계했다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [thisAbdU/celebrity-twin](https://github.com/thisAbdU/celebrity-twin) | 0 | 0 | 약 7개의 상황 질문에 답해 닮은 유명인을 찾아주는 레트로 휴대용 게임기 스타일의 웹 성격 테스트 게임이다.<br>후보 질문 목록 중에서 다음에 사용자에게 제시할 질문 ID 하나를 choice 형태로 선택하도록 판단시킨다.<br>성격 특성 점수 계산과 유명인 매칭은 서버에서 결정론적으로 처리하며 Jev API 키가 없으면 무작위 질문 선택으로 대체된다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [vijayprasath99/jev-pilot](https://github.com/vijayprasath99/jev-pilot) | 0 | 0 | 실시간 2D 주행 게임 환경에서 결정 모델의 조향 판단과 응답 지연 시간을 시험하는 벤치마크 도구다.<br>차선별 장애물 거리와 위험도를 바탕으로 좌측 이동, 유지, 우측 이동 중 가장 안전한 조향 행동을 고르게 한다.<br>빌드 도구 없이 순수 ES6와 Express로 구현했으며 게임 화면 옆에 지연 시간과 신뢰도 대시보드를 실시간으로 보여준다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [vlaier/chessWithJev](https://github.com/vlaier/chessWithJev) | 0 | 0 | TypeSafe Jev를 상대로 웹 브라우저에서 체스를 둘 수 있는 리액트 기반 게임이다.<br>현재 보드 국면에서 집중할 전략, 이동할 기물, 이동할 목적지 칸을 choice 질문으로 순서대로 판단하게 한다.<br>합법적인 수 목록만 선택지로 제공하여 규칙 위반 수를 원천 차단하고, 질문 워크플로를 브라우저에서 직접 수정할 수 있다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [westernbear/GuessingGame](https://github.com/westernbear/GuessingGame) | 0 | 0 | 카카오톡 1:1 채팅이나 그룹방에서 사용자가 매일 바뀌는 단어를 예와 아니오 질문으로 맞히는 다섯고개 챗봇 서버다.<br>사용자가 던진 질문이 정답 단어에 부합하는지와 정답을 맞혔는지를 noul 질문으로 물어 예나 아니오로 판정하게 한다.<br>런타임 의존성 없이 Node 자체 기능만으로 동작하며 게임 상태를 메모리에 두고 카카오 i 오픈빌더 스킬 규격과 연동한다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [wwlib/system1-lander](https://github.com/wwlib/system1-lander) | 0 | 0 | 소형 로컬 의사결정 모델을 사용해 달 착륙선을 실시간으로 조종하는 실험 환경과 플레이그라운드다.<br>물리 상태를 서술한 문장이나 규칙을 바탕으로 비행 방향, 속도, 추력 크기 또는 정책 준수 여부를 묻는다.<br>모델이 직접 조종간을 잡기보다 상황을 판단해 선택지를 고르고, 실제 제어는 고정 코드가 매핑할 때 착륙 성공률이 높다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [yf-git6080/jev-holdem](https://github.com/yf-git6080/jev-holdem) | 0 | 0 | 브라우저에서 사용자가 AI 상대인 Jev와 1대1로 대결하는 노리밋 텍사스 홀덤 게임이다.<br>핸드와 보드의 강도를 점수로 매기고 가격에 따른 폴드나 블러핑 여부 및 구체적인 베팅 라인과 크기를 판별한다.<br>API 호출 한 번으로 상황 판단을 받아오며 응답 실패 시에는 로컬 휴리스틱 로직으로 게임을 이어간다. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [phyous/tsai-civ2](https://github.com/phyous/tsai-civ2) | 2 | 2 | TypeSafe Jev plays original Civilization II in a browser, with live action probabilities. Experimental full-game harness. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [GabrielBigardi/TibiaJevBot](https://github.com/GabrielBigardi/TibiaJevBot) | 2 | 0 | An autonomous game-playing decision engine for Tibia (Open Tibia / OTServ) powered by TypeSafe AI's Jev System One model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [phureewat29/jev-got](https://github.com/phureewat29/jev-got) | 2 | 1 | Jev (TypeSafe AI) PoC through Game of Thrones | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [shantanugoel/jev-games](https://github.com/shantanugoel/jev-games) | 2 | 0 | Visual Jev lab for multiple games and emulator platforms | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [siroccomask/snake-jev](https://github.com/siroccomask/snake-jev) | 2 | 1 | Snake controlled by parallel Jev assessments, with one API call per game tick. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [192tt/Lalaland](https://github.com/192tt/Lalaland) | 0 | 0 | Lalaland player-ready releases for Windows and macOS with configurable model API. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-16 |
| [4esv/jev-joust](https://github.com/4esv/jev-joust) | 0 | 0 | Two TypeSafe Jevs duel in NES Joust. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-09 |
| [8217png/openjev-gomoku](https://github.com/8217png/openjev-gomoku) | 0 | 0 | Gomoku arena: OpenJev decision model vs humans / LLMs / algorithm bots | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [afieldi/minecraft-bot](https://github.com/afieldi/minecraft-bot) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-23 |
| [BHD110/jev-minecraft](https://github.com/BHD110/jev-minecraft) | 0 | 0 | 让 Jev 在开源 Minecraft 兼容世界中采集、建造营地；支持浏览器自己玩和逐步查看真实决策。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [check5004/decision-ai-explorer](https://github.com/check5004/decision-ai-explorer) | 0 | 0 | Japanese one-page Microsoft Decision-1 feature gallery. Static BYOK OpenRouter demo with Docker and GitHub Pages. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [codaaiteam/jev-wikiracer](https://github.com/codaaiteam/jev-wikiracer) | 0 | 0 | You vs Jev: race across Wikipedia by clicking links; Jev picks the closest of dozens each hop, one real typed decision, no hallucination. Single-file, no build. Play free: jevtypesafeai.com/games/jev-wikiracer | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [collt8080/word-game](https://github.com/collt8080/word-game) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-14 |
| [dante01yoon/decision-model-arena](https://github.com/dante01yoon/decision-model-arena) | 0 | 0 | OpenAI Decisions API vs Microsoft Decision-1 vs Jev vs Laya — versus Tetris, 4-player bomb battle, image decisions, with all measurements | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [dazreil/jev-npc-interaction-prototype](https://github.com/dazreil/jev-npc-interaction-prototype) | 0 | 0 | Browser-based NPC interaction prototype using authored dialogue and TypeSafe Jev action selection | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [dffdeeq/jex](https://github.com/dffdeeq/jex) | 0 | 1 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [Didixdan/jev-games-poc](https://github.com/Didixdan/jev-games-poc) | 0 | 0 | Many games resolved using Typesafe AI SystemOne model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Dimda/language-wall](https://github.com/Dimda/language-wall) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-11 |
| [drilonademaj-ci/jev-snake](https://github.com/drilonademaj-ci/jev-snake) | 0 | 0 | A Snake game that TypeSafe's Jev model plays, with live latency and cost on screen. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [Ewen2015/i-shoot-rock](https://github.com/Ewen2015/i-shoot-rock) | 0 | 0 | jev-based rock paper scissors, to test jev pre-trained model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [FLX-20/crossy-road-jev](https://github.com/FLX-20/crossy-road-jev) | 0 | 0 | A Crossy Road clone in the browser: play it yourself or watch Jev (TypeSafe) play it in real time. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-12 |
| [gbesse/jev-bluffcall](https://github.com/gbesse/jev-bluffcall) | 0 | 0 | Host a local two-truths-and-a-lie party game where Jev is a finite-choice guest. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-02 |
| [gmaldo/jevplaystruco](https://github.com/gmaldo/jevplaystruco) | 0 | 0 | Jev inference model plays Truco | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [ismailbanouigu/trolley-mirror](https://github.com/ismailbanouigu/trolley-mirror) | 0 | 0 | A blind framing experiment comparing human trolley decisions with Pollinations Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-16 |
| [JaviMaligno/sport-from-motion](https://github.com/JaviMaligno/sport-from-motion) | 0 | 0 | Can a model recognise a team sport only from how its players move? Point-light trajectories, leak controls, pre-registered VLM evaluation. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [jjjjahaahaa/c-se](https://github.com/jjjjahaahaa/c-se) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [khushi09-oss/jev-town](https://github.com/khushi09-oss/jev-town) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [lsz05/arena_jev](https://github.com/lsz05/arena_jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [lypsoty112/decision-model-racers](https://github.com/lypsoty112/decision-model-racers) | 0 | 0 | Cel-shaded three.js kart racer built as a testbed for comparing decision models | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [Lypt1x/rbxts-jev](https://github.com/Lypt1x/rbxts-jev) | 0 | 0 | Typed, functional TypeSafe Jev client for roblox-ts. Ask many questions about one state, get typed decisions back. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-21 |
| [manicman1999/matchue-2048](https://github.com/manicman1999/matchue-2048) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [michaelmld/snake-jev](https://github.com/michaelmld/snake-jev) | 0 | 0 | Snake played by TypeSafe's Jev model, with a live panel showing every call | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [misty-step/double-take](https://github.com/misty-step/double-take) | 0 | 0 | One sentence, two readings. A double-meaning party game where the weaker reading wins. Built on Parlor. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [NethercraftMC5608/rsource](https://github.com/NethercraftMC5608/rsource) | 0 | 0 | Source, GLua Compatible Rust Game Engine | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [nguyendnam/Jev-Caro](https://github.com/nguyendnam/Jev-Caro) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [Pawnnwap/jev](https://github.com/Pawnnwap/jev) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [pedroarruda07/jev-plays-tetris](https://github.com/pedroarruda07/jev-plays-tetris) | 0 | 0 | Automating Tetris with Jev (TypeSafe AI) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [pmatos/victorious](https://github.com/pmatos/victorious) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [pmotley1/2TD-Venom](https://github.com/pmotley1/2TD-Venom) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [poojaverma-me/wildwood](https://github.com/poojaverma-me/wildwood) | 0 | 0 | Voice-controlled first-person survival game: say it and Jev turns it into game actions in ~0.1 s. Three.js + React Three Fiber + Next.js. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-06 |
| [projectpuppeteerai-cpu/gossipnet-ai-npc](https://github.com/projectpuppeteerai-cpu/gossipnet-ai-npc) | 0 | 0 | LLM-powered asynchronous NPC dialogue cache &amp; state management middleware for Unity | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [Rohan0603/jev-tic-tac-toe](https://github.com/Rohan0603/jev-tic-tac-toe) | 0 | 0 | React Tic-Tac-Toe powered by TypeSafe Jev System One decisions. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-25 |
| [ryohryp/crownless](https://github.com/ryohryp/crownless) | 0 | 0 | Location-based medieval fantasy action hack-and-slash RPG | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [samchan/couchside](https://github.com/samchan/couchside) | 0 | 0 | A phone + TV party game for homes and small groups: guess the host, funny rounds, live voting on the TV.  | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-19 |
| [Samuts-Nazar/harness](https://github.com/Samuts-Nazar/harness) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [saranatour1/agent-arena](https://github.com/saranatour1/agent-arena) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-08 |
| [Sayangenri/jev-adventure-game](https://github.com/Sayangenri/jev-adventure-game) | 0 | 0 | A visual AI powered text adventure where every outcome is decided by Jev TypeSafe's structured decision model. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-28 |
| [seiner69/tetris-realtime-ai](https://github.com/seiner69/tetris-realtime-ai) | 0 | 0 | 实时俄罗斯方块 AI：本地可达落点搜索、可选 Jev 决策与超时回退。 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [sergeville/HangmanGame](https://github.com/sergeville/HangmanGame) | 0 | 0 | Rust desktop Hangman with 200 words, progressive levels, an offline Odds solver, and optional JeV or local Kev duels. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [sinakm/ai-playground](https://github.com/sinakm/ai-playground) | 0 | 0 | One small, reproducible AI model demo per week. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [SrPio/jev-role-game](https://github.com/SrPio/jev-role-game) | 0 | 0 | RPG pixel art 8-bit donde los NPC toman decisiones con Jev (TypeSafe) vía Vercel AI Gateway | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [starbudweiser/sKYCRASH](https://github.com/starbudweiser/sKYCRASH) | 0 | 0 | Crash log analyzer for Skyrim Special Edition on Mac (CrossOver / Whisky). | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") [🆕](../README.md#legend "최근 7일 안에 처음 발견했습니다") | 2026-10-22 |
| [SvirepyiBambr/pollinations-jev-jury](https://github.com/SvirepyiBambr/pollinations-jev-jury) | 0 | 0 | Kill / Fix / Ship — a Jev decision jury for startup ideas, powered by Pollinations (quest #15722) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-29 |
| [Tebogo11/jevchessbattles](https://github.com/Tebogo11/jevchessbattles) | 0 | 0 | JEV Arena is a browser-based chess simulator between two distinct AI opponents rather than a single autopilot | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-04 |
| [thanhauco/jev-3d-game-engine](https://github.com/thanhauco/jev-3d-game-engine) | 0 | 0 | Three.js 3D game engine where NPCs make decisions with Jev (TypeSafe AI's System One model) | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-01 |
| [tripodxu/jev-piano](https://github.com/tripodxu/jev-piano) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-30 |
| [wesley1681/dungeon-llm](https://github.com/wesley1681/dungeon-llm) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-15 |
| [yanjieZJU/ROOMMATE.EXE](https://github.com/yanjieZJU/ROOMMATE.EXE) | 0 | 0 | A game demo controlled by Jev. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-07 |
| [yukihataaa/jev-turtle-soup](https://github.com/yukihataaa/jev-turtle-soup) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-05 |
| [YV17labs/TokenShooter](https://github.com/YV17labs/TokenShooter) | 0 | 0 | A Jev-like System One model in your browser: a small language model plays a first-person shooter on your GPU, one token per move. No server. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |
| [darthblanc/tictacjev](https://github.com/darthblanc/tictacjev) | 1 | 0 | A tic-tac-toe app where one player is Jev, TypeSafe AI's System One Model with live confidence scores and probabilities. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-23 |
| [iammusham/jev-snake](https://github.com/iammusham/jev-snake) | 1 | 0 | An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [JanDalhuysen/jev-clash-royale-test](https://github.com/JanDalhuysen/jev-clash-royale-test) | 1 | 1 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-19 |
| [KyleKreuter/jev2048](https://github.com/KyleKreuter/jev2048) | 1 | 0 | Let Jev (TypeSafeAI) solve 2048 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [MachineLearning-Nerd/jev-tetris](https://github.com/MachineLearning-Nerd/jev-tetris) | 1 | 0 | A visual TypeSafe demo where Jev chooses verified Tetris placements. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-17 |
| [ARCJ137442/jev-life](https://github.com/ARCJ137442/jev-life) | 0 | 0 | The Chess of Life × Jev — an experimental game: write a new ruleset, then watch a decision model play it. \| 生命棋 × Jev：实验性游戏设计——写一套新规则，然后看 Jev 怎么玩 | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [bugkiwi/turing-jail](https://github.com/bugkiwi/turing-jail) | 0 | 0 | Turing Jail - Let's get out\! | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [hectorlcastro09/jev-torneo-animales](https://github.com/hectorlcastro09/jev-torneo-animales) | 0 | 0 | Winner-stays-on animal tournament refereed by Jev (TypeSafe System One): a local game to feel how fast typed decisions are. UI in Spanish. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [muratcanberber/JEV-TheFishGame](https://github.com/muratcanberber/JEV-TheFishGame) | 0 | 0 | 🐠 A multiplayer fish game where every AI decision is a TypeSafe Jev (System One) call — flee, hunt, roam, with live confidence bars. Node + WebSocket + Three.js. | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [rchovatiya88/cyber-breach-jev](https://github.com/rchovatiya88/cyber-breach-jev) | 0 | 0 | Cyber-Breach: The Jev Protocol - A tactical cyberpunk arena combat game powered by TypeSafe AI Jev System One decision model | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-18 |
| [Rodert/JevPlayer](https://github.com/Rodert/JevPlayer) | 0 | 0 | Jev Player Demo | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-21 |
| [scd13150/jev-field-notes](https://github.com/scd13150/jev-field-notes) | 0 | 0 | Applications, measurements and boundary analysis built on TypeSafe Jev (System One): a Jev-driven fighting game, emotion-controlled TTS, and a capability-ceiling probe | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-22 |
| [ConWan30/qortime](https://github.com/ConWan30/qortime) | 0 | 0 | Signed verified match-result receipts for console money matches | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-10-23 |
| [MarcosSete/jev-doom](https://github.com/MarcosSete/jev-doom) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-26 |
| [scavin/Jev-2048](https://github.com/scavin/Jev-2048) | 0 | 0 | — | [⏳](../README.md#legend "확인 대기: 아직 코드를 확인하지 않았습니다") | 2026-09-27 |

### fhshaik/typesafe-mario

<details><summary>README 발췌</summary>

An experimental controller that lets TypeSafe's Jev model directly choose NES controller inputs for the original Super Mario Bros.

</details>

### standardagents/jevpilot

<details><summary>README 발췌</summary>

https://github.com/user-attachments/assets/4baef58e-54ef-4d17-9982-353a0b6e6f45

</details>

### TianyuCodings/NanoJev

<details><summary>README 발췌</summary>

A 0.6B parallel decision model: states and questions in, complete probability distributions out. Zero output-token decoding.

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

### NevaMind-AI/JevTown

<details><summary>README 발췌</summary>

The first Jev-based AI simulation system.

</details>

### emrickgarrett/OneVOneJev

<details><summary>README 발췌</summary>

Server-authoritative browser FPS: queue up, fight Jev (TypeSafe System One) in a Rust-like industrial yard, first to 5 kills. Spectators watch and chat from the sidelines. Final kill gets a killcam before the next challenger.

</details>

### phyous/tsai-sc

<details><summary>README 발췌</summary>

A TypeSafe System One harness for Strongarm, the first combat mission in the original StarCraft shareware campaign, with a game recording and Jev's actual action probabilities. Inspired by TypeSafe's Doom demo.

</details>

### Somnius/shadowrealms-ai

<details><summary>README 발췌</summary>

English (2:30) · Ελληνικά (2:30) · release page

</details>

### BunsDev/river-oaks

<details><summary>README 발췌</summary>

For coding agents: start with AGENTS.md, the repository map, and the setup and verification workflow. Run pnpm run agent:doctor for prerequisites and pnpm run verify for the core gate.

</details>

### wonseokjung/connect-tycoon

<details><summary>README 발췌</summary>

시뮬레이터로 회사의 의사결정 모델을 강화학습시킵니다. RL AI COMPANY DECISION MAKING MODEL · 상황 · 질문 · 보기를 읽고 선택 · 확률 · 확신으로 답하는 모델

</details>

### joch/jevman

<details><summary>README 발췌</summary>

Pac-Man where the characters are driven by System One decision models: TypeSafe's jev (typesafe/jev-1.13.0, the default) and the others Opper serves, called through Opper or (jev only) straight from TypeSafe. The main thing is to watch an AI play: press Play, pick a model with one click (jev by defa

</details>

### Prophetlab/JevPokerBench

<details><summary>README 발췌</summary>

ProphetLab's Texas Hold'em benchmark and playground for decision models. Watch separate cash-game and sit-and-go (SNG) leaderboards, replay hands, ask for advice, or play against models. Chips are virtual.

</details>

### IzumiSatoshi/vox-arcana

<details><summary>README 발췌</summary>

A browser FPS magic game where you fight AI opponents or another player by speaking incantations or typing spells. Your words go through the Web Speech API, then Jev (TypeSafe's System One decision model) turns them into a procedurally generated spell: an element, a form, and a dozen continuous para

</details>

### jammaru/jev-lab

<details><summary>README 발췌</summary>

Use cases for Jev, TypeSafe’s System One model. Jev only answers the next choice. Engines keep the rules.

</details>

### dperezcabrera/ai-chess-lab

<details><summary>README 발췌</summary>

ai-chess-lab: LLMs, System One models and you play chess in the browser, one game at a time or in Swiss tournaments and full leagues, with every move, token, second and dollar on the record and Stockfish analysing the games in your browser. The first battle, 16 players and 72 games, is in the reposi

</details>

### jevplay-games/jev-factorio-agent

<details><summary>README 발췌</summary>

A Factorio agent in which Jev chooses goals and actions as typed questions while deterministic code owns game rules and actuation.

</details>

### yzxoi/RSI-Jev-Slay-the-Spire-2

<details><summary>README 발췌</summary>

这是一个公开的、以证据驱动的《杀戮尖塔 2》智能体实验仓库。目标是用确定性计算处理规则与风险，让廉价的 Jev 做大量选择，只在关键且不确定的局面调用 Astra，最终提高多角色、高进阶的整局胜率。

</details>

### AlvianEka/godot-jev

<details><summary>README 발췌</summary>

A Godot 4.7+ addon that wraps TypeSafe AI's Jev System One HTTP API.

</details>

### faelion/BehaviorLLM

<details><summary>README 발췌</summary>

BehaviorLLM is an open-source Unity package that lets a game object decide for itself, using a local model. You describe what it can do (a discrete action set) and what it can perceive (observation modules that turn game state into text); the package asks the model, guarantees the answer is one of y

</details>

### milanboers/jev-plays-pokemon

<details><summary>README 발췌</summary>

A small autonomous Pokémon Red agent. It uses TypeSafe's System One model, Jev: Jev reads the game state as text, answers typed questions each turn, and deterministic code turns those answers into button presses on a PyBoy Game Boy emulator.

</details>

### AKKI0511/living-matter

<details><summary>README 발췌</summary>

Explore a flooded observatory with matter that builds paths from your movement, gaze and actions. Powered by real-time Jev intelligence.

</details>

### desplega-ai/system-one

<details><summary>README 발췌</summary>

Bun workspace with two packages:

</details>

### ArturSkowronski/kNES

<details><summary>README 발췌</summary>

kNES is a Nintendo Entertainment System (NES) emulator written in Kotlin, forked from the vNES Java emulator. This project was created primarily for fun and educational purposes, allowing developers to learn about emulation techniques and NES hardware while enjoying classic games.

</details>

### wondertwins/jev-benchmark

<details><summary>README 발췌</summary>

Two hands-on benchmarks of Jev, the "System One" model from TypeSafe. Jev doesn't generate text or reason step by step. You hand it state (a JSON blob) and typed questions (yes/no, pick-one, or rate-on-a-scale) and it returns calibrated probabilities in about 200 ms. The pitch is "programmable commo

</details>

### Muurrphy/bipu

<details><summary>README 발췌</summary>

An SO-101 robot pet powered by Jev. Send messages through Telegram or the local interface; Bipu responds with recorded movement and electronic calls. It also has a choreography mode for arranging motions and sounds.

</details>

### enoyola/jev-grand-prix

<details><summary>README 발췌</summary>

A racing game where TypeSafe's Jev drives an F1 car live, and you can race it.

</details>

### joshlarsen/jev-t-rex-runner

<details><summary>README 발췌</summary>

This copy can be played manually or controlled by TypeSafe's Jev model. Jev chooses one semantic maneuver (jump, duck, or keeprunning) for each new obstacle and selects a short or full jump profile when jumping. The browser keeps ownership of speed-aware frame timing, collision geometry, adaptive du

</details>

### 0x440-1me/laya-unity

<details><summary>README 발췌</summary>

Laya Unity is a community Unity SDK for System One decision models.

</details>

### abelardodiaz/doom-in-claude-code

<details><summary>README 발췌</summary>

Doom running inside a Claude Code pane, and nobody holding the controls. Three pieces, each doing the job it is good at:

</details>

### ably-labs/jev-pong

<details><summary>README 발췌</summary>

Pong where the ball moves one step per model decision. Slow model, slow ball.

</details>

### AlungranPJ/spider-crawler-extension

<details><summary>README 발췌</summary>

A Chrome / Edge / Brave extension that drops one big creature onto any web page. Pick a spider, an octopus or a slime.

</details>

### gbesse/jev-playtest-lab

<details><summary>README 발췌</summary>

Replayable, revision-safe game decisions. Code simulates. Jev evaluates. The engine supplies the current world state, a finite list of legal actions, and—when available—code-simulated outcomes. Jev ranks only those actions; the host retains execution authority.

</details>

### mostafa1344/laya-vs-jev

<details><summary>README 발췌</summary>

Have you ever watched a robot play a video game? Now imagine two robots playing at the same time, competing to see who's smarter. That's exactly what laya-vs-jev does!

</details>

### Pablositoo/dernier-abri

<details><summary>README 발췌</summary>

Propulsé par JEV, le modèle de décision de TypeSafe AI.

</details>

### pinebit/jev-tetris

<details><summary>README 발췌</summary>

A small web app where TypeSafe's Jev model plays Tetris by itself. The only control is Reset.

</details>

### pochang6/jev-buzzword-rush

<details><summary>README 발췌</summary>

Jev がどれくらい速くて安いのかを、25 秒で体感するための小さなゲーム。

</details>

### SolvAI/Jevrunner

<details><summary>README 발췌</summary>

An endless runner driven live by a decision model running on your own machine. H2O Lightning 4B, an open-weight Jev-style model, reads the track and picks a lane and a move for every row of obstacles. The panel on the right shows each decision as it happens: the odds per lane and per move, the keys 

</details>

### Wachu2005/jev-alchemy

<details><summary>README 발췌</summary>

A living falling-sand world with zero hand-written rules.

</details>

### wnoronha/systemone-racer

<details><summary>README 발췌</summary>

Three cars, each with its own 3 lanes, racing the same road. One canonical obstacle set is mirrored to every track, one shared state is built, and the same lane-choice question is fanned out in parallel (Promise.allSettled) to three decision providers. Pure client-side; API keys stay in localStorage

</details>

### YichenBC/jev-charactor

<details><summary>README 발췌</summary>

Build NPCs that pursue their needs, remember encounters and respond to players — with a model that chooses instead of writing prose. Jev-Character is the independent core. Fog Harbor brings multiple characters together in a playable AI town.

</details>

### jaibhasin/jev-flappy-bird

<details><summary>README 발췌</summary>

&gt; Jev and GPT-6 Luna race through the same Flappy Bird course. &gt; Every flap is a live model decision.

</details>

### atarikcaliskan/jevball

<details><summary>README 발췌</summary>

22 Jev models, one match. JevBall is a football match in a 3D stadium where each of the 22 players is an independent decision-maker powered by Jev by TypeSafe AI (Jev is TypeSafe AI's System One model). Watch the match, open any player's head to see the options it weighed, or press J and take over a

</details>

### vtrivedy/jev-plays-games

<details><summary>README 발췌</summary>

Test your game playing skills against the speed demon...Jev!

</details>

### rythmn1111/doom-war

<details><summary>README 발췌</summary>

Two System One models fight a real Doom deathmatch. Same state. Same questions. Same shield. Only the model differs.

</details>

### Eliot5566/jev-arena

<details><summary>README 발췌</summary>

Write a fighter in plain English. A System One model pilots it several times a second.

</details>

### het2576/jev-wordle

<details><summary>README 발췌</summary>

Wordle, played live by Jev, TypeSafe's System One model. Every turn, the game builds a short list of strong candidate words, asks Jev once to choose between them, shows the probability Jev gave every option, and then plays Jev's pick. The tiles flip exactly as in the real game.

</details>

### JackZH26/Jev-Live

<details><summary>README 발췌</summary>

自动玩正在升级为 Jev 战术决策 + 共用 Bot 执行器：保留玩家镜头和手动接管，目标续期不重启路径，并反馈受阻原因。见调整方案与分档对战验收门槛、房间玩法知识与 M 地图规划。新执行器需要对应 Steam 游戏构建；尚未证明超过 Pro Bot。

</details>

### jensabrahamsson/tokyo-arcade-1982

<details><summary>README 발췌</summary>

Seven classic arcade cabinets from the golden age, rebuilt in TypeScript with authentic 1982 flavor: CRT scanlines, synthesized chiptune sound, coin drops and a Japanese arcade hall atmosphere. Play solo or challenge your friends on the same LAN.

</details>

### ojusave/beat-jev

<details><summary>README 발췌</summary>

A penalty shootout against TypeSafe Jev. Take turns shooting and keeping goal. One Render Workflows task owns the match, with scores saved in Render Postgres.

</details>

### silicon-sbt/pkmn-brain

<details><summary>README 발췌</summary>

打 Pokémon Showdown 天梯时的实时决策面板 —— 对战页左下角直接告诉你「这回合点啥 / 换谁 / 用不用太晶」。

</details>

### tbrought/honeytongue

<details><summary>README 발췌</summary>

Characters your players can actually argue with. Give a character a name, a persona, and a goal, pass in whatever the player typed, and Honeytongue tells you whether they were convinced, judged by that character's values. The same line can win over a greedy merchant and offend an honest guard. It's 

</details>

### weiziyoung/sanguoce

<details><summary>README 발췌</summary>

三国策是一款使用 TypeScript 开发的策略卡牌游戏，提供浏览器与终端客户端。规则引擎、内容包和 AI 策略可独立扩展，两种客户端共用对局逻辑。

</details>

### ellistev/typesafe-minecraft-demo

<details><summary>README 발췌</summary>

An experimental Minecraft Java bot controlled through TypeSafe choices, with a live world view and the actual API input and output beside it.

</details>

### lmvdz/rpg-jev

<details><summary>README 발췌</summary>

A persistent multiplayer RPG whose world keeps its own agenda. TypeSafe Jev makes every in-world decision, Claude authors the world on a background thread, and code owns rules, numbers and state. The main client is a browser WebGL2 renderer that draws glyphs on real 3D terrain.

</details>

### nickthompson480/typesafe-ai-playground

<details><summary>README 발췌</summary>

A community playground for exploring TypeSafe AI with practical use cases, party games, dilemmas, and reasoning challenges. Pick an example, inspect its input and questions, and run it through the API.

</details>

### 0rgan1co/arena-buscaminas

<details><summary>README 발췌</summary>

El mismo tablero. Distintas inteligencias. Jev (TypeSafe) frente a los mejores modelos de IA: compará sus decisiones, su velocidad y su costo jugando al Buscaminas.

</details>

### alexandreroman/jong

<details><summary>README 발췌</summary>

Pong in the browser, played against an AI opponent driven by TypeSafe AI's Jev model. A match is best of 3 rounds: the first player to win 2 rounds wins. Everything runs in the browser on a single HTML canvas. The only server is a tiny local proxy.

</details>

### Anxiety471/Adaptive-Hostiles

<details><summary>README 발췌</summary>

Jev-assisted hostile raids and elite pawn tactics for RimWorld.

</details>

### blakeandrewwood/jev-goal-reflex

<details><summary>README 발췌</summary>

Steer a box around a 3D world with plain-language movement instructions: where to go, how to move and turn, and when to jump. An LLM turns each instruction into a plan, and Jev makes every movement decision in real time.

</details>

### DimisCodes/tavli

<details><summary>README 발췌</summary>

Tavli (τάβλι) is the Greek name for backgammon. In Greece it is played as a set of three games, and this is the first of them, Portes, which follows standard backgammon rules with the doubling cube in play.

</details>

### ericosg/doj

<details><summary>README 발췌</summary>

An example and exploration of what Jev can do. Jev is TypeSafe's "System One" model: it doesn't generate text. It returns typed, calibrated judgments, such as picking one option from a set or giving the probability of a yes. This project puts Jev in charge of every enemy in a small turn-based dungeo

</details>

### Fantasality/MAGI-EVA

<details><summary>README 발췌</summary>

由 Jev 决策模型驱动的 EVA 风格 MAGI 三贤人决策系统（Android）

</details>

### FoxMoss/20questions

<details><summary>README 발췌</summary>

you may be sad and have no friends but you can still play 20 questions.

</details>

### gbesse/foundry-jev-encounter-director

<details><summary>README 발췌</summary>

A preview-first Foundry VTT module that selects one encounter beat from exact Actor/Token UUIDs already present in the scene. It does not write narration, create actors, roll dice or modify documents.

</details>

### gbesse/jev-crowdpilot

<details><summary>README 발췌</summary>

A Twitch overlay that compares viewer votes with a finite Jev decision. The stream supplies legal actions and optional code-simulated outcomes; chat votes; Jev chooses; the overlay reveals agreement or a split decision.

</details>

### gbesse/jev-rankroom

<details><summary>README 발췌</summary>

A social verdict game designed for a Discord Activity. Players predict which declared option will win; Jev evaluates visible criteria; code computes the weighted ranking and player calibration score.

</details>

### gbesse/reflex-godot

<details><summary>README 발췌</summary>

A Godot editor addon and playable NPC decision playground: finite actions, guarded effects, replay checks and an optional Jev adapter.

</details>

### gbesse/unity-jev-behavior

<details><summary>README 발췌</summary>

FR : cd gateway &amp;&amp; npm run demo:fixture vérifie maintenant qu’un deuxième envoi identique retourne le même résultat sans deuxième appel au fournisseur. Conserver requestId, packId, revision et le même état pour une reprise réseau ; les clés d’objet peuvent être dans un ordre différent. La réponse aj

</details>

### ghosthat-studio/keeping-an-npc-on-quest

<details><summary>README 발췌</summary>

Companion code for Old Nain, episode 002: Granny stops her game's NPC from spoiling the plot. More episodes are on the Old Nain YouTube channel.

</details>

### gkvoelkl/rust-bevy-jev-ants

<details><summary>README 발췌</summary>

An ant colony where every ant asks TypeSafe Jev what to do next. You are the queen, and your only control is a text field: you type a sentence, and twenty ants each decide for themselves what it means for them.

</details>

### iamhuangyinan-sys/AISoupGameWeb

<details><summary>README 발췌</summary>

一个能陪你玩「海龟汤」（情境推理）的网页：你随便问只能用「是 / 不是 / 不重要」回答的问题，AI 主持人回答；你觉得猜到了，就自己把真相讲一遍，AI 判你过没过。

</details>

### Imjungjuna/jev-face

<details><summary>README 발췌</summary>

A 3D face that reacts in real time to what you type. While you type, TypeSafe AI's Jev judges which emotion the recipient would feel and how strongly, and the answer drives 52 ARKit blendshapes on a face mesh.

</details>

### jevplay-games/jev-2048-arcade

<details><summary>README 발췌</summary>

Your board, Jev's board, the same spawns: a two-board duel on 2048 rules with every decision on the record.

</details>

### jevplay-games/jev-arcade-hub

<details><summary>README 발췌</summary>

The front door at jevplay.games. It is a launcher: each card links to that game's own subdomain (noul-who.jevplay.games, typedoku.jevplay.games, …). Every game stays a separate app with its own Discord application, secrets and origin checks, so nothing in the games changes. The games: Tic-Tac-Typed,

</details>

### jevplay-games/jev-checkers-analytics

<details><summary>README 발췌</summary>

American checkers against Jev, where every Jev move is a typed choice you can inspect, replay and verify.

</details>

### jevplay-games/jev-connect-four

<details><summary>README 발췌</summary>

Four in a row against Jev: every Jev turn is a structured Choice over seven columns, and every move is on the record.

</details>

### jevplay-games/jev-dots-and-boxes

<details><summary>README 발췌</summary>

Claim boxes against a server-side Jev opponent, then read the box score: every move, candidate and decision on the record.

</details>

### jevplay-games/jev-guess-who

<details><summary>README 발췌</summary>

Find the hidden character in fewer yes/no questions than Jev, then read the evidence behind every one of its decisions.

</details>

### jevplay-games/jev-mastermind

<details><summary>README 발췌</summary>

Crack Jev's typed code, then defend yours.

</details>

### jevplay-games/jev-minesweeper

<details><summary>README 발췌</summary>

Race Jev across two minesweeper boards from the same opening square, where every reveal is a bet that the square is safe.

</details>

### jevplay-games/jev-sudoku-analytics

<details><summary>README 발췌</summary>

Race Jev on the same Sudoku with separate boards, a server-owned clock and every decision on the record.

</details>

### jevplay-games/jev-tic-tac-toe

<details><summary>README 발췌</summary>

Three in a row against Jev, where every Jev move is a typed answer to a typed question, and every move is on the record.

</details>

### joaoh82/coffee-under-fire

<details><summary>README 발췌</summary>

Play Coffee Under Fire

</details>

### klappy/ma8ic8all-jev

<details><summary>README 발췌</summary>

Ask the ball, get a real answer. A Jev MCP service (Cloudflare Worker ma8ic-8all, Workers AI binding to typesafe/jev). The costume is a joke; the probabilities are not.

</details>

### komzweb/jev-vs-decisions-rpg

<details><summary>README 발췌</summary>

Jev (TypeSafe, jev-1.13.0) vs OpenAI's Decisions API (gpt-6-luna, public beta) as NPCs in a small turn-based RPG, compared on decision quality, calibration, speed and cost.

</details>

### ktchung/jev-backroom-generator

<details><summary>README 발췌</summary>

A backrooms walking simulator where rooms are generated as you approach them. The goal is to compare a random generator against TypeSafe's Jev deciding each room from its neighbors.

</details>

### lmgame-org/Gaming-JevSwarm

<details><summary>README 발췌</summary>

Collective-behaviour games where every agent picks its next action with Jev from its own local information, and the swarm is compared with a single gpt-6-astra reasoner, a leader directing a swarm, and plain rules. Four games share one launcher and one settings interface: holmes (a Sherlock Holmes c

</details>

### ludvious/ludica-jev

<details><summary>README 발췌</summary>

Game whose AI plays itself, built to study how far a text-based.

</details>

### mannmalviya/Lev

<details><summary>README 발췌</summary>

Small local System 1 models vs Jev vs a text LLM, racing in Flappy Bird and Chrome Dino.

</details>

### marcinl/snake_jev

<details><summary>README 발췌</summary>

Snake played by a Jev-style System One decision model (TypeSafe) served locally by Ollama (0.35+).

</details>

### MaryNfs/pacman-ai-race

<details><summary>README 발췌</summary>

A browser-based maze chase experiment that runs TypeSafe AI's hosted Jev and self-hosted Laya side by side. Both pilots start from the same maze and receive the same full-board state and typed route choices. Each column exposes its own score, selected route, candidate probabilities, confidence, late

</details>

### PanikParty/System1Doom

<details><summary>README 발췌</summary>

A harness that lets text-only System One decision models play classic DOOM through ViZDoom. The supported models are TypeSafe Jev (API) and the open-weight Laya. Code turns the engine state into a compact JSON state and a few atomic typed questions whose options are only the actions legal right now.

</details>

### sailtovictory/zork_by_jev

<details><summary>README 발췌</summary>

An autonomous agent that plays Zork I. A language model (a local Gemma by default) reads the game text and proposes commands; Jev, a decision model that returns calibrated probabilities instead of text, picks one. A Python harness runs the game, tracks state, and remembers what it learned between ga

</details>

### sevenboom77/jev_Pokemon

<details><summary>README 발췌</summary>

宝可梦对战 · 从一次指令到整局自主行动

</details>

### ShouvikGhosh2048/sobosuba-system-one-decision-models

<details><summary>README 발췌</summary>

A decision model playing sobosuba from raw screenshots, through OpenRouter's /api/v1/systemone endpoint. The default is TypeSafe's Jev (jev-latest).

</details>

### Sunwood-ai-labs/jevdash

<details><summary>README 발췌</summary>

&gt; JevDash: System One is a 100% clean-room, copyright-free 2D side-scrolling platformer designed specifically for testing, benchmarking, and demonstrating TypeSafe AI's Jev model in real-time control scenarios at 60 FPS. It completely eliminates all copyright and ROM risks associated with commercial

</details>

### thisAbdU/celebrity-twin

<details><summary>README 발췌</summary>

Retro handheld personality game. Answer ~7 situations, unlock a playful Celebrity Twin.

</details>

### vijayprasath99/jev-pilot

<details><summary>README 발췌</summary>

JevPilot is a high-speed 2D infinite highway runner and real-time developer telemetry laboratory. Instead of relying on slow token-by-token generative LLMs, JevPilot showcases System One Decision Models (Jev by TypeSafe AI or Clef / Clef-flash by Cloudflare) executing fast, single-forward-pass bound

</details>

### vlaier/chessWithJev

<details><summary>README 발췌</summary>

A browser chess game where your opponent is Jev — TypeSafe AI's System One model. Jev is not an LLM: it doesn't generate text or code at all. It reads a state and answers typed questions, returning a constrained value plus calibrated probabilities in a single parallel pass. The name nods to Kahneman

</details>

### westernbear/GuessingGame

<details><summary>README 발췌</summary>

봇이 매일 단어 하나를 정하고(꼬맨틀 방식, KST 기준 #n), 사용자는 예/아니오 질문으로 맞힙니다. 질문 답변과 정답 판정은 OpenCode Zen의 무료 Jev 1.13(jev-1.13-free, System One noul 질문)이 합니다. 1:1 채팅과 그룹방(팀채팅) 다인 플레이를 지원합니다.

</details>

### wwlib/system1-lander

<details><summary>README 발췌</summary>

A lunar lander flown in real time by a small System 1 decision model through Ollama's POST /v1/systemone. The request is a state plus questions (noul yes/no, choice, score). The reply is the answers with their probabilities, from a single forward pass, with no text generation. Node ≥ 20, no dependen

</details>

### yf-git6080/jev-holdem

<details><summary>README 발췌</summary>

Heads-up no-limit Texas hold'em against TypeSafe Jev. A local engine deals the cards, ranks hands, computes pot odds, and enforces legal actions. Jev only answers a fixed set of typed questions (Choice / Score / Noul); application code turns those answers into a bet.

</details>

### phyous/tsai-civ2

<details><summary>README 발췌</summary>

An original Civilization II browser harness for TypeSafe Jev, with live decision probabilities and a Roman-themed spectator display. Under development; no complete-game victory has been verified yet.

</details>

### GabrielBigardi/TibiaJevBot

<details><summary>README 발췌</summary>

An autonomous game-playing decision engine for Tibia (Open Tibia / OTServ) powered by TypeSafe AI's Jev System One model.

</details>

### phureewat29/jev-got

<details><summary>README 발췌</summary>

A Game of Thrones roleplay where you play Jon Snow. Each turn a story model writes the next scene, and then TypeSafe's Jev reads that scene back and answers five questions about it: where Jon now stands, what kind of scene it was, how much danger he is in, what should play under it, and whether the 

</details>

### shantanugoel/jev-games

<details><summary>README 발췌</summary>

A visual lab where Jev plays multiple games. This is the next step after mario-jev: the same Jev controller style, a Zero-shot Lab UI, and a plugin split so new games and emulator platforms can be added without rewriting the loop.

</details>

### siroccomask/snake-jev

<details><summary>README 발췌</summary>

A desktop Snake experiment powered by Jev / System One. Jev assesses the board; Python combines its answers into a move. The original p5 Snake game handles movement, food, growth, and collisions.

</details>

### 192tt/Lalaland

<details><summary>README 발췌</summary>

下载发布页的 Lalaland-Windows-UE5-20261016.zip，完整解压到可写目录（建议 D 盘），按以下顺序启动：

</details>

### 4esv/jev-joust

<details><summary>README 발췌</summary>

Two TypeSafe Jev players, one per controller, duelling in NES Joust for score. Requires rom/joust.nes.

</details>

### 8217png/openjev-gomoku

<details><summary>README 발췌</summary>

基于 apus-ailab/APUS-OpenJev-v1 的五子棋对战系统： JEV（OpenJev 决策模型） 可以与 人类 / 大模型（LLM）/ 五子棋算法机器人 任意组合对战。

</details>

### afieldi/minecraft-bot

<details><summary>README 발췌</summary>

A Mineflayer bot for multiplayer survival servers that learns how to survive instead of following hand-written rules. Survival strategy lives in data the bot writes and scores itself: reflex rules, lessons and skills.

</details>

### BHD110/jev-minecraft

<details><summary>README 발췌</summary>

让 Jev 在开源 Minecraft 兼容世界里决定下一步：采集、建造，搭起一个可以走进去的营地。你也能直接进入同一个世界玩。

</details>

### check5004/decision-ai-explorer

<details><summary>README 발췌</summary>

Jev・Microsoftなど5つの判断モデルを、同じ入力で並列比較する日本語の1ページアプリです。6つの架空の業務・ゲーム例を編集し、日本語の結果・確率・通信込み所要時間・API返却料金をモデル別に確認できます。

</details>

### codaaiteam/jev-wikiracer

<details><summary>README 발췌</summary>

You vs Jev — race across Wikipedia. From the same start article, you and Jev both try to reach a target article using only in-article links. You click; Jev — TypeSafe AI's System One decision model — makes one real call per hop, picking the link closest to the target out of dozens. First to the targ

</details>

### collt8080/word-game

<details><summary>README 발췌</summary>

Turso DB 및 국립국어원 표준국어대사전 Open API, TypeSafe Jev AI를 연동한 한국어 끝말잇기 게임입니다. Home Assistant(Pyscript) 음성 게임과 로컬 터미널 테스트를 모두 지원합니다.

</details>

### dante01yoon/decision-model-arena

<details><summary>README 발췌</summary>

▶️ Full video: https://youtu.be/gJgY5NvBcBk · Short: https://youtube.com/shorts/taS6Smj8YxA

</details>

### dazreil/jev-npc-interaction-prototype

<details><summary>README 발췌</summary>

A small browser-based text game that explores whether a decision model can make hand-authored NPC dialogue feel reactive and autonomous.

</details>

### dffdeeq/jex

<details><summary>README 발췌</summary>

jex превращает замороженную LLM в модель принятия решений, как Jev от TypeSafe или Clef от Cloudflare. Модель получает state и набор типизированных вопросов (noul / choice / score) и за один prefill-проход без генерации возвращает на каждый вопрос калиброванное распределение по заранее заданным вари

</details>

### Didixdan/jev-games-poc

<details><summary>README 발췌</summary>

A proof of concept using JEV (TypeSafe AI's System One model) as the decision engine for classic games. The AI doesn't generate text — it returns typed, probability-weighted choices that the game loop consumes directly.

</details>

### Dimda/language-wall

<details><summary>README 발췌</summary>

Made by @p-kyrylo and @dimda, pair vibe coded with Claude Code at one keyboard. Every commit was a joint effort, even though git only shows one author. @p-kyrylo と @dimda の2人で制作。 1台のキーボードで Claude Code とペアでバイブコーディングしました。git のコミット作者は1人ですが、 すべて2人の共同作業です。

</details>

### drilonademaj-ci/jev-snake

<details><summary>README 발췌</summary>

A Snake game where TypeSafe's Jev model picks every move, with live latency and cost on screen.

</details>

### Ewen2015/i-shoot-rock

<details><summary>README 발췌</summary>

&gt; 截图是一局结算。右边那栏默认收着，这里展开来看：Jev 读出「这人爱出布」（55%）， &gt; 于是出剪刀赢了这一局。

</details>

### FLX-20/crossy-road-jev

<details><summary>README 발췌</summary>

A Crossy Road clone that runs in your browser. Play it yourself with the keyboard or touch, or watch Jev (TypeSafe jev-latest) play it in real time. The world keeps moving while Jev thinks, so both its decisions and its speed count.

</details>

### gbesse/jev-bluffcall

<details><summary>README 발췌</summary>

A local two-truths-and-a-lie party game where people bluff and Jev makes one finite choice.

</details>

### gmaldo/jevplaystruco

<details><summary>README 발췌</summary>

Truco Argentino contra una IA — juego 1 vs 1 (Humano vs Jev) en el navegador, con un motor de decisiones que expone cada razonamiento del rival en vivo.

</details>

### ismailbanouigu/trolley-mirror

<details><summary>README 발췌</summary>

Trolley Mirror is a blind framing experiment that compares a player's trolley-problem decisions with Jev, Pollinations' typed decision-intelligence model. Six decisions contain three hidden pairs: the facts stay the same while their order and emphasis change. The final mirror reveals whether the pla

</details>

### JaviMaligno/sport-from-motion

<details><summary>README 발췌</summary>

¿Puede un modelo reconocer un deporte de equipo solo por cómo se mueven los jugadores, sin campo, líneas, superficie, balón ni equipamiento? Es el experimento hermano de Where's the ball?.

</details>

### jjjjahaahaa/c-se

<details><summary>README 발췌</summary>

Ein lokal laufender Assistent, der per Bildschirmaufnahme Blackjack-Karten erkennt, nach dem Hi-Lo-System zählt und Spielzüge sowie Einsätze empfiehlt. Er funktioniert mit einem eigenen Mock-Casino (Entwicklungs- und Testumgebung) und mit dem Demo-Modus (Spielgeld) von Online-Casinos.

</details>

### khushi09-oss/jev-town

<details><summary>README 발췌</summary>

Tiny Town is a cozy little village where 30 neighbors live their own lives, with no player telling them what to do. Watch them eat, work, sleep, chat and wander as their needs and personalities shape the day.

</details>

### lsz05/arena_jev

<details><summary>README 발췌</summary>

Jev-like decision models (TypeSafe Jev, and open models that serve POST /v1/systemone) play games against each other, so their abilities can be compared by results. The current game is 4-player UNO.

</details>

### lypsoty112/decision-model-racers

<details><summary>README 발췌</summary>

A cel-shaded 3D kart racer built with Bun, React, Vite, and three.js. It doubles as a testbed for comparing decision models: every racer, human or bot, drives through the same observation and controls contract.

</details>

### Lypt1x/rbxts-jev

<details><summary>README 발췌</summary>

Typed decisions for Roblox games, powered by TypeSafe's Jev model.

</details>

### manicman1999/matchue-2048

<details><summary>README 발췌</summary>

Two models play 2048 through OpenRouter, and every move is logged with its latency and cost.

</details>

### michaelmld/snake-jev

<details><summary>README 발췌</summary>

Snake played by TypeSafe's Jev model, with a live panel that shows every call to Jev: the state sent, the question asked, and Jev's answer with its probabilities.

</details>

### misty-step/double-take

<details><summary>README 발췌</summary>

Everyone gets the same two worlds. Write the line that fits both best.

</details>

### NethercraftMC5608/rsource

<details><summary>README 발췌</summary>

A Serious game engine built in Rust to express my vision.

</details>

### nguyendnam/Jev-Caro

<details><summary>README 발췌</summary>

Game Caro 15 × 15: Bạn cầm X, Jev cầm O. Bạn đi trước, nối ít nhất năm quân theo hàng ngang, dọc hoặc chéo để thắng. Không áp dụng luật cấm hay luật chặn hai đầu cho hàng năm.

</details>

### Pawnnwap/jev

<details><summary>README 발췌</summary>

A local, open implementation of the Jev typed-decision API (the /v1/systemone wire format made popular by TypeSafe's closed "Jev" model), served by jpt-4b — an open calibrated-decision fine-tune of Qwen3.5-4B (base kirp/jpt-4b, GGUF by prithivMLmods).

</details>

### pedroarruda07/jev-plays-tetris

<details><summary>README 발췌</summary>

A responsive TypeScript Tetris game with an independent, typed game engine.

</details>

### pmatos/victorious

<details><summary>README 발췌</summary>

Turns long Fortnite gameplay Recordings into a timestamped record of what happened in each Match: Wins, final placement, eliminations and speech.

</details>

### pmotley1/2TD-Venom

<details><summary>README 발췌</summary>

Ranks NFL players by their chance to score 2+ touchdowns in a week.

</details>

### poojaverma-me/wildwood

<details><summary>README 발췌</summary>

A voice-controlled survival sandbox

</details>

### projectpuppeteerai-cpu/gossipnet-ai-npc

<details><summary>README 발췌</summary>

プレイヤーが話しかける前に、セリフはもう出来ている。

</details>

### Rohan0603/jev-tic-tac-toe

<details><summary>README 발췌</summary>

A small React game where TypeSafe Jev chooses the bot's next legal move.

</details>

### ryohryp/crownless

<details><summary>README 발췌</summary>

15分遊んだあと、次の素材を集めて新しい装備を作りたくなるか。

</details>

### samchan/couchside

<details><summary>README 발췌</summary>

A phone + TV party game for homes and small groups: birthdays, youth nights, family dinners. Guests scan a QR code, answer questions on their phones, then everyone votes together at the TV. No app, no accounts, and it runs on Cloudflare's free plan.

</details>

### Samuts-Nazar/harness

<details><summary>README 발췌</summary>

World-agnostic engine for single-player AI role-playing games. See docs/decisions.md (design, source of truth) and docs/assumptions.md (choices made where the design was silent). Python, SQLite, no UI.

</details>

### saranatour1/agent-arena

<details><summary>README 발췌</summary>

A real-time, retro arcade fighting game where you take on AI agents — Haiku, Sonnet, Jev and Opus — and, once you're knocked out, watch them fight each other for the crown. Powered by Convex.

</details>

### Sayangenri/jev-adventure-game

<details><summary>README 발췌</summary>

A visual AI-powered text adventure where every outcome is decided by Jev — TypeSafe's structured decision model. No random dice, no pre-written paths. Jev reads the full game state and picks what happens.

</details>

### seiner69/tetris-realtime-ai

<details><summary>README 발췌</summary>

在本机浏览器中观察 AI 自动玩俄罗斯方块。默认使用本地搜索，无需模型账号；也可接入 TypeSafe Jev，让模型在本地验证过的落点中选择，再由同一个控制器逐步执行。

</details>

### sergeville/HangmanGame

<details><summary>README 발췌</summary>

A Rust desktop Hangman game with 200 words arranged into ten approximate difficulty levels. Guess the hidden word before you run out of lives. For the probability model and decision-model boundaries, see Hangman: Probability, Information Gain, and JeV.

</details>

### sinakm/ai-playground

<details><summary>README 발췌</summary>

One small, reproducible project per week with a new AI model that is fun to watch. Episodes are grouped by series; each series folder holds numbered episode folders. Each episode runs on its own: clone the repo, open the folder, follow its README.

</details>

### SrPio/jev-role-game

<details><summary>README 발췌</summary>

RPG pixel art 8-bit donde los NPC toman decisiones con Jev (TypeSafe) vía Vercel AI Gateway, o con Laya, su alternativa open source autoalojada. Jev no genera diálogo: recibe un estado tipado y devuelve choice + probabilities + confidence, y el juego ejecuta esa decisión. 5 capítulos, 4 misiones sec

</details>

### starbudweiser/sKYCRASH

<details><summary>README 발췌</summary>

Crash log analyzer for Skyrim Special Edition on Mac (CrossOver / Whisky). Analyseur de crash logs pour Skyrim Special Edition sur Mac (CrossOver / Whisky).

</details>

### SvirepyiBambr/pollinations-jev-jury

<details><summary>README 발췌</summary>

A one-call startup-idea jury built on the Pollinations Jev decision endpoint (POST /alpha/decisions, model typesafe/jev-1.13), submitted for quest #15722.

</details>

### Tebogo11/jevchessbattles

<details><summary>README 발췌</summary>

JEV Arena is a browser-based chess simulator where two independent players, each with their own name and objective, compete against each other in real time. Instead of one engine controlling both sides, the app gives each side its own context, legal-move constraints, and decision source, so the matc

</details>

### thanhauco/jev-3d-game-engine

<details><summary>README 발췌</summary>

A small 3D game engine (Three.js) whose NPCs think with Jev, the "System One" decision model TypeSafe AI released in September 2026. Jev takes a state and a set of typed questions and returns typed answers with calibrated probabilities:

</details>

### tripodxu/jev-piano

<details><summary>README 발췌</summary>

&gt; Jev 每小节实时决策，边作曲边演奏的钢琴。 你给一句话，它现场编曲、现场弹。 &gt; 零框架、零构建、零运行时依赖的纯静态前端，一条 wrangler deploy 部署到 Cloudflare Workers。

</details>

### wesley1681/dungeon-llm

<details><summary>README 발췌</summary>

以本機或 API LLM 驅動的 D&amp;D 5e 文字 TRPG，包含探索、NPC 對話、任務與格狀戰鬥。

</details>

### yanjieZJU/ROOMMATE.EXE

<details><summary>README 발췌</summary>

一个由 Jev 判断驱动的七日像素生活模拟。你和 Jev 室友住在同一套房屋剖面中：你直接移动、使用物品并安排生活，Jev 则在每个真实可执行的生活动作间使用 Choice 自主判断。第七晚，双方秘密决定续租还是搬走。

</details>

### yukihataaa/jev-turtle-soup

<details><summary>README 발췌</summary>

Jevの型付き判断を使って遊ぶ、シンプルな水平思考クイズです。自由文で質問や真相の推測を送ると、Jevが「はい」「いいえ」「関係ありません」を判定します。重要な質問にはヒント表示を付け、真相をほぼ言い当てるとクリアになります。

</details>

### YV17labs/TokenShooter

<details><summary>README 발췌</summary>

There is no backend: the model (Qwen3.5) is downloaded once, then runs locally through WebGPU. Every move is a single token: the model writes nothing, the game reads the probability it gives to four words, Forward, Left, Right and Shoot, and plays the most likely one.

</details>

### darthblanc/tictacjev

<details><summary>README 발췌</summary>

Tic-tac-toe, but every move for one side comes from Jev, a System One Model built for fast, structured decisions — unstructured state in, typed probabilistic decisions out.

</details>

### iammusham/jev-snake

<details><summary>README 발췌</summary>

An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick.

</details>

### JanDalhuysen/jev-clash-royale-test

<details><summary>README 발췌</summary>

A minimal, real-time Clash Royale-style game engine built in Node.js featuring:

</details>

### KyleKreuter/jev2048

<details><summary>README 발췌</summary>

TypeSafe's Jev plays 2048 — many games in parallel, live in your browser.

</details>

### MachineLearning-Nerd/jev-tetris

<details><summary>README 발췌</summary>

&gt; A small arcade game where Jev chooses a complete, collision-checked Tetris placement — and Python owns the physics.

</details>

### ARCJ137442/jev-life

<details><summary>README 발췌</summary>

|简体中文 | English| |:-:|:-:|

</details>

### bugkiwi/turing-jail

<details><summary>README 발췌</summary>

Turing Jail is a three-level AI interrogation game powered by TypeSafe Jev System One. Write a statement, face the warden's verdict, and try to earn your release.

</details>

### hectorlcastro09/jev-torneo-animales

<details><summary>README 발췌</summary>

A small local game built to feel how fast Jev — TypeSafe's System One model — makes typed decisions. Up to 2,569 animals (land, flying and marine) fight one on one; the winner stays on and faces the next challenger until one champion is left. Every fight is decided by Jev.

</details>

### muratcanberber/JEV-TheFishGame

<details><summary>README 발췌</summary>

A real-time multiplayer fish game where the AI literally decides through a language model. Every fish on the map asks Jev — a System One decision model — what to do next: flee, hunt, seek food, or roam. You steer your own fish with the mouse and try to outsmart them.

</details>

### rchovatiya88/cyber-breach-jev

<details><summary>README 발췌</summary>

An infinite 3D arcade cyberpunk arena shooter built with Three.js and powered by Jev—the sub-100ms "System One" decision model developed by TypeSafe AI (released September 2026).

</details>

### Rodert/JevPlayer

<details><summary>README 발췌</summary>

基于 TypeSafe Jev API 的静态游戏站点。

</details>

### scd13150/jev-field-notes

<details><summary>README 발췌</summary>

Applications, measurements and failure-mode analysis built on TypeSafe Jev — the typed-decision model that returns Choice / Score / Noul judgments instead of generated text.

</details>

### ConWan30/qortime

<details><summary>README 발췌</summary>

QorTime is the open-source referee for QorCap: it checks a signed capture receipt and publishes the verdict the math actually returns, including FAIL.

</details>

### MarcosSete/jev-doom

<details><summary>README 발췌</summary>

Confidence-aware NPC decision system built with ViZDoom and TypeSafe Jev.

</details>

### scavin/Jev-2048

<details><summary>README 발췌</summary>

Watch Jev play 2048 automatically, in the new dashboard or the original game window.

</details>
