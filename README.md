# Step1 - 랜딩 페이지 + Contact API

Figma 디자인 기반 랜딩 페이지(React)와 문의 저장 API(Spring Boot) 풀스택 프로젝트입니다.

## 폴더 구조

```
step1/
├── page/          # 프론트엔드 (Vite + React + Tailwind + Capacitor)
│   ├── src/
│   │   ├── components/   # Hero, Nav, Projects, ApiImage 등
│   │   ├── pages/       # HomePage, ContactPage
│   │   └── api/         # contactApi.js, imageUtils.js
│   ├── android/         # Capacitor Android 네이티브 프로젝트
│   ├── public/
│   ├── capacitor.config.json
│   └── .env.example, .env.development
├── backend/       # 백엔드 (Spring Boot + MySQL + JPA)
│   └── src/main/java/com/example/backend/
│       ├── controller/  # ContactController, DbCheckController
│       ├── entity/      # Contact
│       ├── service/
│       └── repository/
└── README.md      # 이 파일
```

## 사전 요구사항

- **Node.js** 18+ (프론트엔드)
- **Java 17** (백엔드)
- **MySQL 8** (스키마 `page` 생성 필요)

## 실행 방법

**step1 폴더 루트**에서 아래 배치 파일로 실행할 수 있습니다.

| 실행 | 방법 |
|------|------|
| 백엔드 | **`run-backend.bat`** 더블클릭 (MySQL·스키마 `page` 선행 필요) |
| 프론트엔드 | **`run-frontend.bat`** 더블클릭 |

### 1. 백엔드

- MySQL 실행 후 스키마 `page` 생성.
- `backend/src/main/resources/application.properties`에서 DB 비밀번호 확인.
- 루트에서 **`run-backend.bat`** 또는 `backend` 폴더에서 **`run-backend.bat`** 실행.  
  터미널: `cd backend` 후 `gradlew.bat bootRun`
- API: `http://localhost:8081`
- 백엔드는 `server.address=0.0.0.0` 로 LAN 접속 가능하며, CORS는 `*` 로 설정되어 있습니다.

### 2. 프론트엔드

- 루트에서 **`run-frontend.bat`** 실행 시 `page`로 이동해 `npm install` 후 `npm run dev` 실행.  
  또는 `page` 폴더에서 **`run.bat`** 실행.
- 브라우저: `http://localhost:5173`

자세한 DB 설정·API 설명은 `backend/README.md`, 프론트 구조는 `page/README.md`를 참고하세요.

---

## Android 앱 래핑 (Capacitor)

프론트엔드를 Capacitor로 Android 앱으로 빌드해 실기기·에뮬레이터에서 실행할 수 있습니다.

### 사전 요구사항

- **Android Studio** (Android SDK 포함)
- **Java 17** (Android 빌드·백엔드 모두)
- 실기기 사용 시: **노트북과 같은 Wi‑Fi** 연결

### 1. API 주소 설정 (실기기에서 백엔드 연동)

앱에서 사용할 API 서버 주소는 환경 변수 **`VITE_API_URL`** 로 지정합니다.

| 환경 | 설정 |
|------|------|
| PC 브라우저 개발 | `page/.env.development` 에 `VITE_API_URL=http://localhost:8081` (기본 적용됨) |
| 실기기에서 노트북 API 사용 | 빌드 전에 노트북 IP로 설정 후 빌드. 예: `VITE_API_URL=http://172.30.1.45:8081` |

- **값이 없을 때** 기본값은 `http://172.30.1.45:8081` 입니다. PC IP가 다르면 `page/.env` 또는 `page/.env.production` 에 넣거나, 빌드 시 환경 변수로 지정하세요. (`ipconfig` 로 IPv4 주소 확인)
- **방화벽**: 실기기가 같은 Wi‑Fi에서 노트북 API(8081 포트)에 접속하려면, Windows 방화벽에서 **인바운드 규칙**으로 포트 **8081** (TCP) 을 허용해 두세요.  
  (제어판 → Windows Defender 방화벽 → 고급 설정 → 인바운드 규칙 → 새 규칙 → 포트 → TCP 8081 → 연결 허용)
- 앱의 문의(Contact) 화면에 **연결 주소**가 표시되므로, 실패 시 해당 주소가 노트북 IP와 일치하는지 확인하면 됩니다.

### 2. 빌드·실행 순서

**`page` 폴더**에서 다음 순서로 진행합니다. (Capacitor 명령은 반드시 **page** 에서 실행하세요. `page/android` 에서 실행하면 "android platform has not been added yet" 오류가 납니다.)

```bash
cd page
npm install
npm run build
npx cap sync
npx cap open android
```

1. **npm run build** — Vite로 `dist` 생성  
2. **npx cap sync** — `dist` 내용을 Android 프로젝트로 복사  
3. **npx cap open android** — Android Studio에서 `android` 프로젝트 열기  

Android Studio 없이 빌드·실행만 하려면 `page` 에서 **`npx cap run android`** 로 실기기/에뮬레이터에 바로 설치·실행할 수 있습니다.

Android Studio가 열리면:

- 상단 **Run** (▶) 버튼으로 **실기기** 또는 **에뮬레이터** 선택 후 앱 구동  
- 실기기: USB 디버깅 연결 후 기기 선택  
- 에뮬레이터: AVD 선택 후 실행  

### 3. 정리

| 단계 | 명령/동작 |
|------|-----------|
| 웹 빌드 | `page` 에서 `npm run build` |
| Android 반영 | `page` 에서 `npx cap sync` |
| Android Studio에서 실행 | `page` 에서 `npx cap open android` → Run → 기기 선택 |
| 바로 실행(Studio 없이) | `page` 에서 `npx cap run android` |

- **Java**: Android 빌드는 Java 17로 통일해 두었습니다 (Java 21 미지원 환경 대응).

- **이미지**: API에서 받은 이미지 URL이 localhost/127.0.0.1 이거나 상대 경로(`/uploads/...`)이면, 앱에서 `API_BASE` 로 치환해 사용합니다. WebView에서 `img` 가 막힐 수 있어, API 이미지는 `src/components/ApiImage.jsx` (fetch → blob → `URL.createObjectURL`) 로 표시하는 것을 권장합니다.

## 제출 / 압축

- 이 **step1** 폴더 전체를 그대로 ZIP으로 압축하거나, Git 저장소로 푸시하면 됩니다.
- `node_modules`, `backend/build`, `backend/.gradle` 등은 `.gitignore`에 의해 제외됩니다.


<img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/f28732d0-9281-409b-98b6-858689bb3154" />
<img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/fb334221-89f3-44c6-b330-0149f56c8443" />
<img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/5fcef895-959d-4de2-a468-9a70da6c1b2d" />
<img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/9f2ab934-4d6b-4ef2-a2e0-dd449d012e7d" />
<img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/14b9a025-74ae-4ff1-a098-de2a76d69ff1" />
<img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/3e937012-edcc-4be6-b459-91eef451c0d0" />






