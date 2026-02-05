# Step1 - 랜딩 페이지 + Contact API

Figma 디자인 기반 랜딩 페이지(React)와 문의 저장 API(Spring Boot) 풀스택 프로젝트입니다.

## 폴더 구조

```
step1/
├── page/          # 프론트엔드 (Vite + React + Tailwind)
│   ├── src/
│   │   ├── components/   # Hero, Nav, Projects, DevHistory, Contact 등
│   │   ├── pages/       # HomePage, ContactPage
│   │   └── api/         # contactApi.js (axios)
│   └── public/
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

### 2. 프론트엔드

- 루트에서 **`run-frontend.bat`** 실행 시 `page`로 이동해 `npm install` 후 `npm run dev` 실행.  
  또는 `page` 폴더에서 **`run.bat`** 실행.
- 브라우저: `http://localhost:5173`

자세한 DB 설정·API 설명은 `backend/README.md`, 프론트 구조는 `page/README.md`를 참고하세요.

## 제출 / 압축

- 이 **step1** 폴더 전체를 그대로 ZIP으로 압축하거나, Git 저장소로 푸시하면 됩니다.
- `node_modules`, `backend/build`, `backend/.gradle` 등은 `.gitignore`에 의해 제외됩니다.
