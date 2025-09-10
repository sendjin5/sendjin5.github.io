# 황교진 포트폴리오

> 혁신적인 기술로 비즈니스 가치를 창출하는 Backend Developer

## 🚀 프로젝트 소개

이 포트폴리오는 Java 풀스택 개발자 황교진의 경력과 프로젝트를 소개하는 반응형 웹사이트입니다. 모던하고 세련된 디자인과 최신 웹 기술을 활용하여 제작되었습니다.

## ✨ 주요 기능

### 🎨 디자인 & UX

- **모던 미니멀 디자인**: 깔끔하고 전문적인 느낌
- **다크/라이트 모드**: 사용자 선택에 따른 테마 변경
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원
- **스크롤 애니메이션**: Intersection Observer API를 활용한 부드러운 애니메이션
- **타이핑 효과**: 메인 헤더의 동적 타이핑 애니메이션

### 🛠️ 기술적 특징

- **최신 CSS 기술**: CSS Grid, Flexbox, CSS Variables 활용
- **JavaScript ES6+**: 모듈화된 코드 구조
- **접근성 준수**: ARIA 레이블, 키보드 네비게이션 지원
- **성능 최적화**: 레이지 로딩, 최적화된 애니메이션
- **SEO 최적화**: 메타 태그, 시맨틱 HTML 구조

### 📱 인터랙티브 요소

- **부드러운 스크롤링**: 네비게이션 클릭시 섹션별 이동
- **호버 효과**: 마우스 오버시 시각적 피드백
- **모바일 최적화**: 터치 친화적 인터페이스
- **로컬 스토리지**: 테마 설정 저장 기능

## 📁 프로젝트 구조

```
portfolio/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 메인 스타일시트
├── js/
│   └── script.js      # JavaScript 기능
├── images/            # 이미지 파일들 (필요시 추가)
└── README.md          # 프로젝트 설명서
```

## 🎯 포함된 섹션

1. **Hero Section**: 인상적인 첫 인상과 소개
2. **About Me**: 개인 정보 및 프로필 요약
3. **Technical Skills**: 기술 스택 및 역량
4. **Featured Projects**: 주요 프로젝트 포트폴리오
5. **Work Experience**: 경력 사항 및 성과
6. **Contact**: 연락처 정보 및 소셜 링크

## 🚀 GitHub Pages 배포 방법

### 1단계: 저장소 설정

```bash
# 새로운 저장소 생성 (GitHub에서)
# 저장소 이름: your-username.github.io 또는 원하는 이름

# 로컬에서 초기화
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 2단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 좌측 메뉴에서 **Pages** 선택
4. **Source**에서 **Deploy from a branch** 선택
5. **Branch**에서 **main** 선택
6. **Save** 클릭

### 3단계: 배포 확인

- 몇 분 후 `https://your-username.github.io/your-repo-name` 에서 확인 가능
- Actions 탭에서 배포 진행 상황 확인 가능

## 🛠️ 로컬 개발 환경 설정

### 필요 조건

- 모던 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- Visual Studio Code (권장)
- Live Server 익스텐션 (선택사항)

### 실행 방법

1. 저장소 클론

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. 로컬 서버 실행

- VS Code에서 Live Server 익스텐션 사용, 또는
- Python: `python -m http.server 8000`
- Node.js: `npx http-server`

3. 브라우저에서 `http://localhost:8000` 접속

## 🎨 커스터마이징 가이드

### 색상 테마 변경

`css/style.css` 파일의 `:root` 섹션에서 CSS 변수를 수정:

```css
:root {
  --primary-color: #2563eb; /* 메인 색상 */
  --accent-color: #06b6d4; /* 강조 색상 */
  /* 기타 색상 변수들... */
}
```

### 내용 수정

`index.html` 파일에서 다음 섹션들을 개인 정보에 맞게 수정:

- 개인 정보 (이름, 연락처, 이메일 등)
- 기술 스택
- 프로젝트 정보
- 경력 사항

### 소셜 링크 추가

Contact 섹션의 소셜 링크를 실제 프로필 URL로 변경:

```html
<a href="https://github.com/your-username" class="social-link">
  <i class="fab fa-github"></i>
  <span>GitHub</span>
</a>
```

## 📊 성능 최적화

이 포트폴리오는 다음과 같은 최적화가 적용되어 있습니다:

- **이미지 최적화**: WebP 형식 사용 권장
- **폰트 최적화**: Google Fonts 효율적 로딩
- **CSS 최적화**: 중복 제거 및 압축
- **JavaScript 최적화**: 모듈화 및 비동기 로딩
- **브라우저 캐싱**: 정적 자원 캐시 설정

## 🔧 브라우저 지원

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- 모바일 브라우저 지원

## 📱 반응형 중단점

- **Desktop**: 1024px 이상
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: 480px 이하

## 🐛 알려진 이슈

현재 알려진 이슈는 없습니다. 문제 발견시 GitHub Issues에 보고해 주세요.

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.
코드는 참고용으로 자유롭게 사용 가능하나, 개인 정보는 수정하여 사용해 주세요.

## 🤝 기여

포트폴리오 개선을 위한 제안이나 버그 리포트는 언제든 환영합니다!

## 📞 연락처

- **이메일**: sendjin@gmail.com
- **연락처**: 010-4928-1787
- **GitHub**: [GitHub 프로필 링크]
- **LinkedIn**: [LinkedIn 프로필 링크]
- test3
