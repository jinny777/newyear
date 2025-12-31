# 2026년 새해 인사 인터랙티브 웹페이지 🎊

한국 전통 새해 인사 이미지를 배경으로 하고, 하단에 실제로 재생 가능한 영상이 삽입된 인터랙티브 웹페이지입니다.

## ✨ 주요 특징

### 📱 SNS 공유 최적화
- **카카오톡 미리보기**: 1200x630px 최적화된 썸네일로 멋진 링크 미리보기
- **URL 숨김 처리**: 제목 클릭으로 공유 기능 제공, URL 직접 노출 방지
- **모바일 최적화**: 카카오톡 공유 시 이미지 전체가 선명하게 표시
- **Open Graph**: Facebook, KakaoTalk, LinkedIn 등 모든 SNS 플랫폼 지원
- **Twitter Card**: 트위터에서 큰 이미지로 표시
- **한국어 최적화**: 제목, 설명 모두 한국어로 자연스럽게 표시

### 🎬 비디오 기능
- **하단 배치**: 인사말 문구를 가리지 않도록 화면 하단에 배치
- **실제 재생 가능**: 맞춤형 재생 버튼 클릭으로 영상 시작
- **URL 보호**: 비디오 URL이 HTML에 노출되지 않고 JavaScript로 동적 로드
- **전체 컨트롤**: 재생/일시정지, 진행률 바, 볼륨, 전체화면 지원
- **자동 숨김 컨트롤**: 3초 후 컨트롤이 자동으로 숨겨져 깔끔한 뷰
- **드래그 가능 진행률 바**: 원하는 위치로 정확하게 이동

### 🎨 디자인 개선
- **배경 이미지**: 전체가 보이도록 `contain` 사용 (잘림 없음)
- **비디오 위치**: 화면 하단 배치로 상단 인사말 완전히 노출
- **비디오 크기**: 700px 최대 너비로 적절한 크기 유지
- **반응형**: 모든 화면 크기에서 최적화된 레이아웃

### 🔒 보안 & 프라이버시
- **비디오 URL 숨김**: HTML 소스에 URL 노출 안됨, JavaScript 동적 로드
- **이미지 로컬화**: 썸네일 이미지를 로컬에 저장, 외부 URL 토큰 노출 방지
- **URL 숨김**: 페이지 제목 클릭으로 공유, 주소창 URL 직접 노출 최소화

### 🖐️ 터치 제스처 (모바일)
- ✅ **탭**: 비디오 재생/일시정지
- ✅ **더블 탭 (왼쪽)**: 10초 뒤로 이동
- ✅ **더블 탭 (오른쪽)**: 10초 앞으로 이동
- ✅ **수직 스와이프**: 볼륨 조절
- ✅ **진행률 바 드래그**: 정확한 시간 탐색

### ⌨️ 키보드 단축키
- `Space` / `K`: 재생/일시정지
- `←` / `→`: 5초 뒤로/앞으로
- `↑` / `↓`: 볼륨 조절 (10% 단위)
- `F`: 전체화면 토글
- `M`: 음소거 토글
- `0` / `Home`: 처음으로 이동
- `End`: 끝으로 이동

### 📱 모바일 최적화
- **반응형 디자인**: 모든 화면 크기에 완벽 대응
- **터치 타겟**: 최소 48px (Apple/Google 가이드라인 준수)
- **비디오 크기 자동 조정**: 화면 크기별 최적화
  - 작은 스마트폰 (< 400px): 화면 너비 98%
  - 표준 스마트폰 (400-600px): 화면 너비 95%
  - 태블릿: 화면 너비 85%
  - 가로 모드: 화면 높이 80%
- **배경 이미지 최적화**: 세로/가로 모드별 정렬
- **성능 최적화**: Lazy loading, Hardware acceleration

### 🎨 디자인
- **전통 한국 배경**: 등, 매화, 폭죽이 있는 새해 인사 이미지
- **부드러운 애니메이션**: 페이드인 & 스케일 효과
- **우아한 컨트롤**: 반투명 배경에 깔끔한 UI
- **접근성**: ARIA 레이블, 키보드 탐색 완벽 지원

## 📂 파일 구조

```
├── index.html              # 메인 HTML (SNS 메타태그, URL 숨김 처리)
├── video-config.js         # 비디오 URL 설정 (보안)
├── css/
│   └── style.css          # 스타일시트 (모바일 최적화, 하단 배치)
├── js/
│   ├── script.js          # 비디오 컨트롤 (동적 로드)
│   └── share.js           # 카카오톡 공유 기능
├── images/
│   ├── thumbnail.jpg      # 배경 이미지 (세로 768x1024)
│   └── kakao-share.jpg    # SNS 공유 썸네일 (가로 1200x630)
└── README.md              # 프로젝트 문서
```

## 🚀 사용 방법

### 1. 로컬 테스트
1. 모든 파일을 같은 폴더에 저장
2. `index.html` 파일을 브라우저에서 열기
3. 하단의 재생 버튼 클릭으로 영상 시청

### 2. 웹 배포
1. **Publish 탭** 클릭
2. 배포 버튼으로 웹사이트 게시
3. 생성된 URL을 친구들에게 공유

### 3. SNS 공유 (URL 숨김)
**방법 1: 제목 클릭으로 공유**
- 페이지 상단의 "2026년 새해 복 많이 받으세요 🎊" 클릭
- 카카오톡 공유 또는 링크 복사
- URL이 직접 노출되지 않음

**방법 2: 일반 공유**
- 배포된 URL을 카카오톡, Facebook, Twitter 등에 공유
- 자동으로 멋진 미리보기 카드가 표시됩니다
- 이미지, 제목, 설명이 모두 최적화되어 표시됩니다

### 4. 카카오톡 공유 설정 (선택사항)
고급 공유 기능을 위해 카카오 개발자 앱 키 설정:
1. [Kakao Developers](https://developers.kakao.com/) 가입
2. 앱 생성 후 JavaScript 키 발급
3. `index.html` 하단의 `YOUR_JAVASCRIPT_KEY`를 실제 키로 교체
4. 제목 클릭 시 카카오톡 전용 공유 기능 활성화

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업, Open Graph 메타태그, 동적 비디오 로드
- **CSS3**: Flexbox, 미디어 쿼리, 애니메이션, 반응형 디자인
- **Vanilla JavaScript**: ES6+, 이벤트 리스너, 터치 제스처, 동적 DOM 조작
- **비디오**: HTML5 Video API, 커스텀 컨트롤, 동적 소스 로드
- **카카오톡 SDK**: 공유 기능, Web Share API 대체

## 📊 SNS 메타태그 상세

### Open Graph (Facebook, KakaoTalk)
```html
<meta property="og:type" content="website">
<meta property="og:title" content="2026년 새해 복 많이 받으세요 🎊">
<meta property="og:description" content="2026년 새해를 맞이하여...">
<meta property="og:image" content="images/kakao-share.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

### 카카오톡 전용 (최적화)
```html
<meta property="kakao:title" content="2026년 새해 복 많이 받으세요 🎊">
<meta property="kakao:description" content="...">
<meta property="kakao:image" content="images/kakao-share.jpg">
```
- **이미지 크기**: 1200x630px (카카오톡 권장 비율)
- **배경**: 가로 형식으로 모바일에서 선명하게 표시
- **텍스트**: 큰 글씨로 가독성 극대화

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="2026년 새해 복 많이 받으세요 🎊">
<meta name="twitter:image" content="images/kakao-share.jpg">
```

## 🎯 지원 플랫폼

### 데스크톱 브라우저
- ✅ Chrome / Edge (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Opera (최신 버전)

### 모바일 브라우저
- ✅ iOS Safari (iPhone, iPad)
- ✅ Android Chrome
- ✅ Samsung Internet
- ✅ Firefox Mobile

### SNS 플랫폼
- ✅ 카카오톡 (링크 미리보기)
- ✅ Facebook (Open Graph)
- ✅ Twitter (Twitter Card)
- ✅ LinkedIn (Open Graph)
- ✅ Instagram (외부 링크)

## 🔍 SEO & 메타데이터

- **Title Tag**: "2026년 새해 복 많이 받으세요 🎊"
- **Meta Description**: 완전한 한국어 설명
- **Keywords**: 새해, 2026, 새해인사, 새해복, 영상메시지
- **Canonical URL**: 중복 컨텐츠 방지
- **Language**: ko-KR (한국어)
- **Theme Color**: #D4AF37 (골드)

## 📱 모바일 최적화 상세

### 화면 크기별 최적화
| 디바이스 | 너비 | 비디오 크기 | 비디오 위치 | 재생 버튼 |
|---------|------|-----------|-----------|----------|
| 데스크톱 | > 1024px | 90% (max 700px) | 하단 | 100px |
| 태블릿 | 768-1024px | 85% (max 600px) | 하단 | 80px |
| 스마트폰 | 400-600px | 92% (max 500px) | 하단 | 70px |
| 작은 폰 | < 400px | 95% (max 380px) | 하단 | 60px |

### 레이아웃 개선
- **비디오 위치**: `align-items: flex-end`로 하단 배치
- **패딩**: 하단에 충분한 여백 (35-60px)
- **인사말 보호**: 상단 텍스트가 가려지지 않도록 배치
- **배경 이미지**: `contain`으로 전체 표시, 잘림 없음

### 터치 인터페이스
- **최소 터치 타겟**: 48x48px (표준)
- **버튼 간격**: 충분한 여백으로 오탭 방지
- **시각적 피드백**: 탭 시 즉각적인 반응
- **진행률 바**: 8px 높이 (모바일에서 드래그 쉽게)

### 성능 최적화
- **Lazy Loading**: 비디오 메타데이터만 먼저 로드
- **Preload**: 중요 이미지 미리 로드
- **Hardware Acceleration**: CSS transform 사용
- **Passive Listeners**: 스크롤 성능 개선
- **최소 리플로우**: 효율적인 DOM 업데이트

## 🔒 보안 & URL 보호

### 비디오 URL 숨김
**문제**: HTML 소스에 비디오 URL이 그대로 노출
**해결**:
1. HTML에서 `<source>` 태그 제거
2. `video-config.js`에 URL 분리 저장
3. JavaScript로 동적 로드
```javascript
// video-config.js
const VIDEO_CONFIG = {
    url: 'https://example.com/video.mp4',
    type: 'video/mp4'
};

// script.js
const source = document.createElement('source');
source.src = VIDEO_CONFIG.url;
video.appendChild(source);
```

### URL 주소창 숨김
**방법 1**: 제목 클릭으로 공유
- 페이지 상단에 "2026년 새해 복 많이 받으세요 🎊" 링크
- 클릭 시 카카오톡 공유 또는 링크 복사
- URL을 직접 보여주지 않음

**방법 2**: 모바일 주소창 자동 숨김
- 페이지 로드 시 `window.scrollTo(0, 1)` 실행
- 모바일 브라우저 주소창 자동 숨김 시도
- 세로 모드에서만 작동

### 썸네일 이미지 로컬화
- 외부 URL 대신 로컬 이미지 사용 (`images/`)
- URL 토큰 노출 방지
- 빠른 로딩 속도

## 🎨 커스터마이징 가이드

### 배경 이미지 변경
`css/style.css` 파일의 `.background-container` 섹션:
```css
.background-container {
    background-image: url('../images/YOUR_IMAGE.jpg');
    background-size: contain;  /* 전체 보기 */
}
```

### 비디오 소스 변경
`video-config.js` 파일 수정:
```javascript
const VIDEO_CONFIG = {
    url: 'YOUR_VIDEO_URL',
    type: 'video/mp4'
};
```

### SNS 썸네일 변경
1. `images/kakao-share.jpg` 파일 교체 (1200x630px 권장)
2. `images/thumbnail.jpg` 파일 교체 (배경 이미지)

### 제목 및 공유 텍스트 수정
`index.html`과 `js/share.js`에서 텍스트 변경:
```html
<!-- index.html -->
<h1 class="greeting-title">
    <a href="#">YOUR_TITLE</a>
</h1>
```

```javascript
// js/share.js
title: 'YOUR_TITLE',
description: 'YOUR_DESCRIPTION'
```

### 테마 색상 변경
`css/style.css`에서 골드 색상 검색 후 변경:
- `#D4AF37` (어두운 골드)
- `#FFD700` (밝은 골드)

## 🐛 문제 해결

### 비디오가 재생되지 않을 때
- 브라우저가 비디오 형식(MP4)을 지원하는지 확인
- 네트워크 연결 확인
- 브라우저 콘솔(F12)에서 오류 메시지 확인
- `video-config.js`의 URL이 올바른지 확인

### 모바일에서 전체화면이 작동하지 않을 때
- iOS Safari: `playsinline` 속성 필요 (이미 추가됨)
- 일부 브라우저: 사용자 제스처 후에만 전체화면 가능

### SNS 미리보기가 표시되지 않을 때
- URL이 HTTPS인지 확인
- 이미지 파일이 올바르게 업로드되었는지 확인
- 카카오톡: 캐시 문제일 수 있음 (시간 경과 후 재시도)
- Facebook 디버거로 테스트: https://developers.facebook.com/tools/debug/

### 카카오톡 공유가 작동하지 않을 때
- 카카오 JavaScript 키가 설정되지 않은 경우 Web Share API 사용
- 모바일에서는 링크 복사 후 카카오톡에 붙여넣기
- `js/share.js`의 `copyToClipboard()` 함수 사용

### 비디오 URL이 노출되는 경우
- 개발자 도구 Network 탭에서는 보임 (정상)
- HTML 소스 보기(Ctrl+U)에서 안 보이면 성공
- 완벽한 보호는 서버 사이드 처리 필요

## 📄 라이선스

이 프로젝트는 개인/상업적 용도로 자유롭게 사용 가능합니다.

## 📞 지원

문제가 발생하거나 추가 기능이 필요하면 언제든지 문의하세요!

---

**Made with ❤️ for 2026 새해**
