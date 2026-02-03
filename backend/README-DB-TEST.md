# DB 연동만 테스트하는 방법 (Spring Boot 없이)

`gradlew.bat bootRun`이 "기본 클래스를 찾거나 로드할 수 없습니다" 로 실패할 때, **MySQL 연결만** 먼저 확인하려면 아래 순서로 하세요.

---

## 1. Gradle Wrapper 오류 해결 (백엔드 실행하려면)

오류 원인: **gradle-wrapper.jar** 파일이 없음.

**해결:** `backend` 폴더에서 **`download-wrapper-jar.bat`** 더블클릭 실행  
→ `gradle\wrapper\gradle-wrapper.jar` 가 생기면, 그 다음에 `gradlew.bat bootRun` 실행.

수동으로 받으려면:  
https://github.com/gradle/gradle/raw/v8.5.0/gradle/wrapper/gradle-wrapper.jar  
→ 저장 위치: `backend\gradle\wrapper\gradle-wrapper.jar`

---

## 2. MySQL만 연결 테스트 (Spring Boot 없이)

**`test-mysql-only.bat`** 더블클릭 실행.

- MySQL 클라이언트(`mysql` 명령)가 PATH에 있어야 합니다.  
  (MySQL 설치 시 "Add to PATH" 했거나, `MySQL 설치경로\bin` 이 PATH에 있으면 됨)
- 성공 시: `[OK] DB 연동 정상입니다.` 와 함께 `contacts` 건수 출력.
- 실패 시: MySQL 서비스 실행 여부, 스키마 `page` 생성 여부, 계정(root/root) 확인.

**스키마가 없다면** MySQL에서 한 번 실행:

```sql
CREATE DATABASE IF NOT EXISTS page
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

---

## 3. 정리

| 목적               | 사용할 파일                 |
|--------------------|-----------------------------|
| DB만 연결 확인     | `test-mysql-only.bat`      |
| Gradle jar 받기    | `download-wrapper-jar.bat` |
| 백엔드 실행 후 확인 | `gradlew.bat bootRun` → `test-db.bat` |

DB 연동만 확인하려면 **2번(test-mysql-only.bat)** 만 사용하면 됩니다.
