# 🎊 2026년 새해 인사 웹페이지

한국 전통 새해 인사 배경에 실제 재생 가능한 영상이 포함된 인터랙티브 웹페이지입니다.

## 🌐 라이브 데모

**GitHub Pages:** https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/

## ✨ 주요 기능

- 🎬 하단 배치 비디오 플레이어 (인사말 텍스트 가리지 않음)
- 📱 모바일 완벽 최적화
- 🔗 카카오톡/SNS 공유 기능 (URL 숨김)
- 🖼️ 1200x630px 최적화 썸네일
- 🎮 터치 제스처 지원
- ⌨️ 키보드 단축키
- 🔒 비디오 URL 보호 (동적 로드)

## 🚀 빠른 시작

### 로컬에서 실행
1. 저장소 클론
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

2. `index.html` 파일을 브라우저에서 열기
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

또는 Live Server 확장 프로그램 사용 (VS Code 권장)

## 📂 프로젝트 구조

```
happy-new-year-2026/
├── index.html              # 메인 페이지
├── video-config.js         # 비디오 URL 설정
├── css/
│   └── style.css          # 스타일시트
├── js/
│   ├── script.js          # 비디오 컨트롤
│   └── share.js           # 카카오톡 공유
├── images/
│   ├── thumbnail.jpg      # 배경 이미지
│   └── kakao-share.jpg    # SNS 썸네일
├── .gitignore
└── README.md
```

## 🔧 커스터마이징

### 비디오 URL 변경
`video-config.js` 파일 수정:
```javascript
const VIDEO_CONFIG = {
    url: 'YOUR_VIDEO_URL',
    type: 'video/mp4'
};
```

### 배경 이미지 변경
`images/thumbnail.jpg` 파일을 교체하고 `css/style.css` 확인

### 제목 변경
`index.html`의 헤더 섹션과 메타태그 수정

### 카카오톡 공유 설정
`index.html` 하단에서 카카오 JavaScript 키 입력:
```javascript
Kakao.init('YOUR_JAVASCRIPT_KEY');
```

## 🌐 GitHub Pages 배포

### 방법 1: 자동 배포 (추천)
1. GitHub 저장소 생성
2. 파일 업로드 또는 푸시
3. Settings → Pages
4. Source: `main` branch 선택
5. Save 클릭
6. 몇 분 후 `https://username.github.io/repo-name/` 에서 접속 가능

### 방법 2: GitHub Actions (자동화)
이미 `.github/workflows/deploy.yml` 파일이 설정되어 있습니다.
코드를 푸시하면 자동으로 배포됩니다.

## 🎮 사용 방법

### 데스크톱
- **Space/K**: 재생/일시정지
- **←/→**: 5초 뒤로/앞으로
- **↑/↓**: 볼륨 조절
- **F**: 전체화면
- **M**: 음소거

### 모바일
- **탭**: 재생/일시정지
- **더블 탭 (왼쪽)**: 10초 뒤로
- **더블 탭 (오른쪽)**: 10초 앞으로
- **수직 스와이프**: 볼륨 조절

### 공유
- 상단 "HAPPY NEW YEAR 🎊" 클릭
- 카카오톡 공유 또는 링크 복사

## 🛠️ 기술 스택

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Kakao SDK
- GitHub Pages

## 📱 브라우저 지원

- ✅ Chrome (최신)
- ✅ Firefox (최신)
- ✅ Safari (최신)
- ✅ Edge (최신)
- ✅ 모바일 브라우저 (iOS Safari, Android Chrome)

## 📄 라이선스

MIT License - 자유롭게 사용 가능합니다.

## 🤝 기여

Pull Request를 환영합니다!

1. Fork
2. Feature 브랜치 생성 (`git checkout -b feature/amazing`)
3. Commit (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing`)
5. Pull Request 생성

## 📞 문의

문제가 발생하면 [Issues](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/issues)에 남겨주세요.

---

**Made with ❤️ for 2026 새해**

🎊 Happy New Year 2026! 🎊
