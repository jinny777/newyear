/* ============================================
   카카오톡 공유 기능
   - URL 숨김 처리
   - 제목 클릭으로 공유
   ============================================ */

// 카카오톡 SDK 초기화 (실제 앱 키는 배포 시 설정 필요)
function initKakao() {
    if (typeof Kakao !== 'undefined' && !Kakao.isInitialized()) {
        // 실제 카카오 앱 키로 교체 필요
        // Kakao.init('YOUR_APP_KEY');
    }
}

// 카카오톡 공유하기
function shareToKakao() {
    if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '2026년 새해 복 많이 받으세요 🎊',
                description: '2026년 새해를 맞이하여 전하는 특별한 영상 메시지입니다. 더 많이 웃고 더 자주 행복해지는 한 해 되시길 기도합니다.',
                imageUrl: window.location.origin + '/images/kakao-share.jpg',
                link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href
                }
            },
            buttons: [
                {
                    title: '영상 보기',
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href
                    }
                }
            ]
        });
    } else {
        // 카카오톡 SDK가 없으면 기본 공유
        if (navigator.share) {
            navigator.share({
                title: '2026년 새해 복 많이 받으세요 🎊',
                text: '2026년 새해를 맞이하여 전하는 특별한 영상 메시지입니다.',
                url: window.location.href
            }).catch(err => console.log('공유 취소:', err));
        } else {
            // 클립보드에 복사
            copyToClipboard(window.location.href);
        }
    }
}

// URL 클립보드 복사
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('링크가 복사되었습니다! 카카오톡에 붙여넣기 하세요.');
        }).catch(err => {
            console.error('복사 실패:', err);
        });
    } else {
        // 구버전 브라우저 지원
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('링크가 복사되었습니다! 카카오톡에 붙여넣기 하세요.');
        } catch (err) {
            console.error('복사 실패:', err);
        }
        document.body.removeChild(textarea);
    }
}

// URL 주소창 숨기기 (스크롤 시 자동 숨김 - 모바일)
function hideAddressBar() {
    if (window.innerHeight < window.innerWidth) return; // 가로 모드는 제외
    window.scrollTo(0, 1);
}

// 페이지 로드 시 주소창 숨김 시도
window.addEventListener('load', () => {
    setTimeout(hideAddressBar, 100);
});

// 초기화
document.addEventListener('DOMContentLoaded', initKakao);
