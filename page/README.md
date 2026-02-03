# 노코드 개발자 홍길동 - 랜딩 페이지

Figma [노블더 교육생 테스트](https://www.figma.com/design/8Ec92DyjlSqsj1CvDUIJX) 디자인을 참고한 Vite + React + Tailwind CSS 랜딩 페이지입니다.

## 기술 스택

- **Vite** + **React 18**
- **Tailwind CSS** (반응형, 디자인 토큰)
- **Lucide React** (아이콘)
- Smooth Scroll (섹션 앵커)
- Pretendard 폰트 (CDN)

## 포함 섹션

- **네비게이션**: 홈, 프로젝트, 개발이력, Contact
- **히어로**: 인사말 + "프로젝트 보기", "문의하기" 버튼
- **프로젝트**: 6개 카드 (SmartLog, EduTrack, FitTogether, PlanHive, DevVault, DocEase)
- **개발이력**: 2023.05 ~ 2024.05 타임라인 (물류관리 시스템, MVP 플랫폼, 수강신청 리뉴얼)
- **Contact**: 이메일, 주소

## 실행 방법

```bash
cd page
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 빌드

```bash
npm run build
```

빌드 결과는 `dist` 폴더에 생성됩니다.
