# Android 래핑 요청 프롬프트 (다른 프로젝트에 복사해 사용)

아래 블록 전체를 복사한 뒤, 다른 프로젝트 채팅에 붙여넣어 사용하세요.  
프로젝트마다 **프론트엔드 폴더 이름**(예: `frontend`, `page`, `web` 등)과 **백엔드 포트**(예: `8081`, `3001`)만 실제 값에 맞게 바꿔 주세요.

---

```
이 프로젝트에 Capacitor로 Android 앱 래핑을 해줘.

**공통**
- 프론트엔드 폴더: [여기에 폴더명 적기, 예: frontend 또는 page]
- 백엔드 포트: [여기에 포트 적기, 예: 8081 또는 3001]

**요구사항**

1. **Capacitor 설정**
   - 프론트엔드 폴더에 @capacitor/core, @capacitor/cli, @capacitor/android 추가
   - capacitor.config.json 사용 (appId, appName, webDir는 빌드 결과물 폴더, 예: dist)
   - npx cap add android 로 android 플랫폼 추가 (반드시 프론트엔드 폴더에서 실행)

2. **실기기에서 백엔드 연동**
   - 앱에서 API 주소를 환경 변수로 넣을 수 있게 (예: VITE_API_URL)
   - 값이 없을 때는 빌드 시 기본값으로 노트북/PC IP 사용 (예: http://172.30.1.45:8081). PC IP는 ipconfig 로 확인
   - .env.development 에는 로컬 개발용 VITE_API_URL=http://localhost:[포트]
   - .env.example 에 실기기용 예시(노트북 IP) 적어 두기
   - 백엔드 서버는 0.0.0.0 으로 listen 해서 LAN 접속 가능하게
   - CORS는 모든 기기에서 접속 가능하도록 allowedOriginPatterns("*"). credentials 는 "*" 와 함께 쓸 수 없으므로 allowCredentials(false) 로 설정

3. **Android 전용 설정**
   - Java 21 미지원 환경 대응: 루트 android/build.gradle 에서 subprojects.afterEvaluate 로
     (1) android 플러그인 쓰는 서브프로젝트: android.compileOptions.sourceCompatibility/targetCompatibility = JavaVersion.VERSION_17
     (2) java / java-library 플러그인 쓰는 서브프로젝트: JavaCompile sourceCompatibility/targetCompatibility = VERSION_17
   - app/build.gradle 에 compileOptions Java 17 추가
   - HTTP(cleartext) 허용: AndroidManifest 에 usesCleartextTraffic="true", networkSecurityConfig="@xml/network_security_config"
   - res/xml/network_security_config.xml 에 localhost, 127.0.0.1, 10.0.2.2, 사용하는 노트북 IP(예: 172.30.1.45) 등 domain-config 로 cleartextTrafficPermitted="true"
   - WebView: MainActivity 에서 load() 오버라이드 후 getBridge().getWebView().getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW)

4. **이미지 로드 (백엔드 URL 사용 시)**
   - DB/API 에 localhost/127.0.0.1 로 저장된 이미지 URL은 화면 표시 시 현재 API 주소(API_BASE)로 치환하는 유틸 (예: resolveApiImageUrl)
   - 모바일 WebView 에서 img src 가 막힐 수 있으면, API 이미지는 fetch → blob → URL.createObjectURL() 로 표시하는 공통 이미지 컴포넌트(ApiImage) 제공
   - 업로드 API 응답이 상대 경로(예: /uploads/파일명)이면 앱에서 API_BASE 붙여서 사용

5. **빌드·실행**
   - 모든 cap 명령은 반드시 **프론트엔드 폴더**에서 실행 (android 하위 폴더에서 실행하면 "android platform has not been added yet" 오류 발생)
   - 순서: npm run build → npx cap sync → npx cap open android (또는 npx cap run android 로 Studio 없이 바로 실행)
   - 실기기: 노트북과 같은 Wi‑Fi, 노트북 IP를 VITE_API_URL 에 넣고 빌드·sync 후 앱 실행
   - Windows 방화벽에서 백엔드 포트 인바운드 허용 필요 시 README 에 안내

6. **README**
   - Android 래핑 절차, 실기기 API 연동(IP 설정·ipconfig·방화벽), "cap 명령은 프론트엔드 폴더에서만 실행" 명시
   - npx cap open android / npx cap run android 둘 다 안내
   - Android Studio 열고 Run → 기기 선택 순서
   - Java 17 통일 설명, 문의/API 실패 시 앱 화면에서 연결 주소 확인할 수 있다고 안내 (해당 화면이 있으면)
```

---

## 사용 시 체크리스트

- `[여기에 폴더명 적기]` → 실제 프론트엔드 폴더명 (예: `frontend`, `page`, `web`)
- `[여기에 포트 적기]` → 실제 백엔드 포트 (예: `8081`, `3001`)
- 기본 예시 IP(172.30.1.45)는 사용하는 PC와 같은 대역이면 그대로 써도 되고, 다르면 해당 프로젝트에서 ipconfig 로 확인한 IP로 바꿔도 됨
