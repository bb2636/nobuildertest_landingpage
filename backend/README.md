# Contact API (Spring Boot)

## 요구 사항

- Java 17
- MySQL 8 (스키마 `page` 생성 후 실행)

## MySQL 설정

1. MySQL에서 스키마 생성:
```sql
CREATE DATABASE IF NOT EXISTS page
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

2. 테이블은 `spring.jpa.hibernate.ddl-auto=update` 로 자동 생성됩니다.  
   수동 생성 시 예시:
```sql
USE page;

CREATE TABLE contacts (
  name VARCHAR(100) NOT NULL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT,
  created_at DATETIME(6) NOT NULL,
  INDEX idx_created_at (created_at)
);
```

## application.properties

- `spring.datasource.url=jdbc:mysql://localhost:3306/page?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Seoul`
- `spring.datasource.username=root`
- `spring.datasource.password=1234` ← **본인 MySQL root 비밀번호로 수정**
- `server.port=8081`
- `spring.jpa.hibernate.ddl-auto=update`

## 실행

### Gradle Wrapper (gradlew) 사용

- **gradlew**, **gradlew.bat**은 프로젝트에 포함되어 있습니다.
- **gradle-wrapper.jar**가 없으면 `gradlew.bat bootRun` 실행 시 에러가 납니다.  
  아래 중 하나로 jar를 준비하세요.

1. **Gradle이 설치된 경우** (backend 폴더에서):
   ```bash
   gradle wrapper --gradle-version 8.5
   ```
2. **Gradle이 없는 경우**  
   브라우저에서 아래 주소로 접속해 파일을 저장한 뒤,  
   `backend\gradle\wrapper\gradle-wrapper.jar` 위치에 두세요.  
   https://github.com/gradle/gradle/raw/v8.5.0/gradle/wrapper/gradle-wrapper.jar  
   (링크 우클릭 → 다른 이름으로 링크 저장 → 파일명: `gradle-wrapper.jar`)

이후:

- **Windows**: `backend` 폴더에서 `run-backend.bat` 더블클릭 또는  
  `cmd`에서 `cd backend` 후 `gradlew.bat bootRun`
- **macOS/Linux**: `cd backend` 후 `./gradlew bootRun`

기동이 실패하면 `run-backend.bat`을 실행하면 `--stacktrace`가 붙어 있어 에러 원인을 확인할 수 있습니다.

- API: `http://localhost:8081`
- GET `/api/db-check` : DB 연결 확인 (응답: status, message, contactsCount)
- POST `/api/contact` : Contact 저장 (JSON: name, email, phone, message)

## DB 연동 테스트

1. **MySQL 실행** 후 스키마 `page` 생성 (위 SQL 참고).
2. **백엔드 실행**: `./gradlew bootRun` (Windows: `gradlew.bat bootRun`)
   - 기동이 성공하면 DB 연결까지 정상입니다.
3. **DB 확인 API 호출**:
   ```bash
   curl http://localhost:8081/api/db-check
   ```
   - 성공 시 예: `{"status":"ok","message":"DB 연결 성공","contactsCount":0}`
4. **Contact 저장 테스트** (선택):
   ```bash
   curl -X POST http://localhost:8081/api/contact -H "Content-Type: application/json" -d "{\"name\":\"테스트\",\"email\":\"test@test.com\",\"phone\":\"010-1234-5678\",\"message\":\"DB 테스트\"}"
   ```
   - 성공 후 다시 `curl http://localhost:8081/api/db-check` 하면 `contactsCount`가 1로 증가합니다.

## 기동이 안 될 때 (exit code 1)

1. **MySQL 비밀번호**: `src/main/resources/application.properties`의 `spring.datasource.password`가 실제 MySQL root 비밀번호와 같은지 확인 (현재 `1234`).
2. **MySQL 실행 여부**: 서비스에서 MySQL이 실행 중인지, `localhost:3306` 접속 가능한지 확인.
3. **스키마 생성**: MySQL에서 `page` 스키마가 있어야 합니다 (위 SQL 참고).
4. **스택트레이스 확인**: `run-backend.bat`을 실행하면 `--stacktrace`로 상세 에러가 출력됩니다. 마지막 부분의 `Caused by:`를 확인하세요.
5. **포트 충돌**: 8081 포트를 다른 프로그램이 쓰고 있으면 `server.port`를 바꾸거나 해당 프로세스를 종료하세요.

## CORS

- `http://localhost:5173`, `http://localhost:3000` 등 프론트 오리진 허용 (CorsConfig.java)
