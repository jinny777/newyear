/* ============================================
   2026 새해 인사 웹페이지 JavaScript
   - 비디오 플레이어 컨트롤
   - 터치 제스처 지원
   - 키보드 단축키
   - 모바일 최적화
   ============================================ */

(function() {
    'use strict';
    
    // ============================================
    // DOM 요소 참조
    // ============================================
    const video = document.getElementById('mainVideo');
    const playButtonOverlay = document.getElementById('playButtonOverlay');
    const videoControls = document.getElementById('videoControls');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeBtn = document.getElementById('volumeBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressHandle = document.getElementById('progressHandle');
    const timeDisplay = document.getElementById('timeDisplay');
    const videoWrapper = document.querySelector('.video-wrapper');
    
    // ============================================
    // 비디오 소스 동적 로드 (URL 보호)
    // ============================================
    if (typeof VIDEO_CONFIG !== 'undefined') {
        const source = document.createElement('source');
        source.src = VIDEO_CONFIG.url;
        source.type = VIDEO_CONFIG.type;
        video.appendChild(source);
    }
    
    // ============================================
    // 상태 변수
    // ============================================
    let controlsTimeout = null;
    let isDragging = false;
    let lastVolume = 1;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let lastTap = 0;
    
    // ============================================
    // 유틸리티 함수
    // ============================================
    
    /**
     * 시간을 MM:SS 형식으로 포맷
     */
    function formatTime(seconds) {
        if (isNaN(seconds) || seconds === Infinity) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    /**
     * SVG 아이콘 토글
     */
    function toggleIcon(btn, showClass, hideClass) {
        const showSvg = btn.querySelector(`.${showClass}`);
        const hideSvg = btn.querySelector(`.${hideClass}`);
        if (showSvg && hideSvg) {
            showSvg.style.display = 'block';
            hideSvg.style.display = 'none';
        }
    }
    
    /**
     * 컨트롤 자동 숨김
     */
    function hideControlsAfterDelay() {
        clearTimeout(controlsTimeout);
        videoWrapper.classList.add('show-controls');
        
        if (!video.paused && !isDragging) {
            controlsTimeout = setTimeout(() => {
                videoWrapper.classList.remove('show-controls');
            }, 3000);
        }
    }
    
    /**
     * 진행률 업데이트
     */
    function updateProgress() {
        if (!isDragging && video.duration) {
            const percent = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${percent}%`;
            progressHandle.style.left = `${percent}%`;
            progressContainer.setAttribute('aria-valuenow', Math.round(percent));
        }
    }
    
    /**
     * 시간 표시 업데이트
     */
    function updateTimeDisplay() {
        const current = formatTime(video.currentTime);
        const duration = formatTime(video.duration);
        timeDisplay.textContent = `${current} / ${duration}`;
    }
    
    // ============================================
    // 재생 컨트롤
    // ============================================
    
    /**
     * 비디오 재생
     */
    function playVideo() {
        video.play().then(() => {
            playButtonOverlay.classList.add('hidden');
            toggleIcon(playPauseBtn, 'pause-svg', 'play-svg');
            playPauseBtn.setAttribute('aria-label', '일시정지');
            hideControlsAfterDelay();
        }).catch(err => {
            console.error('재생 오류:', err);
        });
    }
    
    /**
     * 비디오 일시정지
     */
    function pauseVideo() {
        video.pause();
        toggleIcon(playPauseBtn, 'play-svg', 'pause-svg');
        playPauseBtn.setAttribute('aria-label', '재생');
        clearTimeout(controlsTimeout);
        videoWrapper.classList.add('show-controls');
    }
    
    /**
     * 재생/일시정지 토글
     */
    function togglePlayPause() {
        if (video.paused) {
            playVideo();
        } else {
            pauseVideo();
        }
    }
    
    // ============================================
    // 볼륨 컨트롤
    // ============================================
    
    /**
     * 음소거 토글
     */
    function toggleMute() {
        if (video.volume > 0) {
            lastVolume = video.volume;
            video.volume = 0;
            video.muted = true;
            toggleIcon(volumeBtn, 'mute-svg', 'volume-svg');
            volumeBtn.setAttribute('aria-label', '음소거 해제');
        } else {
            video.volume = lastVolume;
            video.muted = false;
            toggleIcon(volumeBtn, 'volume-svg', 'mute-svg');
            volumeBtn.setAttribute('aria-label', '음소거');
        }
    }
    
    /**
     * 볼륨 변경
     */
    function changeVolume(delta) {
        const newVolume = Math.max(0, Math.min(1, video.volume + delta));
        video.volume = newVolume;
        video.muted = newVolume === 0;
        
        if (newVolume === 0) {
            toggleIcon(volumeBtn, 'mute-svg', 'volume-svg');
            volumeBtn.setAttribute('aria-label', '음소거 해제');
        } else {
            toggleIcon(volumeBtn, 'volume-svg', 'mute-svg');
            volumeBtn.setAttribute('aria-label', '음소거');
        }
    }
    
    // ============================================
    // 전체화면 컨트롤
    // ============================================
    
    /**
     * 전체화면 토글
     */
    function toggleFullscreen() {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            // 전체화면 진입
            if (videoWrapper.requestFullscreen) {
                videoWrapper.requestFullscreen();
            } else if (videoWrapper.webkitRequestFullscreen) {
                videoWrapper.webkitRequestFullscreen();
            } else if (videoWrapper.mozRequestFullScreen) {
                videoWrapper.mozRequestFullScreen();
            } else if (videoWrapper.msRequestFullscreen) {
                videoWrapper.msRequestFullscreen();
            }
        } else {
            // 전체화면 종료
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
    
    /**
     * 전체화면 상태 변경 처리
     */
    function handleFullscreenChange() {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            toggleIcon(fullscreenBtn, 'exit-fullscreen-svg', 'fullscreen-svg');
            fullscreenBtn.setAttribute('aria-label', '전체화면 종료');
        } else {
            toggleIcon(fullscreenBtn, 'fullscreen-svg', 'exit-fullscreen-svg');
            fullscreenBtn.setAttribute('aria-label', '전체화면');
        }
    }
    
    // ============================================
    // 진행률 바 컨트롤
    // ============================================
    
    /**
     * 진행률 바 클릭/터치 처리
     */
    function seekToPosition(event) {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (event.clientX || event.touches[0].clientX) - rect.left;
        const percent = Math.max(0, Math.min(1, pos / rect.width));
        
        if (video.duration) {
            video.currentTime = percent * video.duration;
            progressBar.style.width = `${percent * 100}%`;
            progressHandle.style.left = `${percent * 100}%`;
        }
    }
    
    /**
     * 비디오 시간 이동
     */
    function seekVideo(seconds) {
        video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
        updateProgress();
        updateTimeDisplay();
    }
    
    // ============================================
    // 터치 제스처 처리
    // ============================================
    
    /**
     * 터치 시작
     */
    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchStartTime = Date.now();
    }
    
    /**
     * 터치 종료
     */
    function handleTouchEnd(event) {
        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;
        const touchEndTime = Date.now();
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const deltaTime = touchEndTime - touchStartTime;
        
        // 더블 탭 감지
        if (deltaTime < 300 && Math.abs(deltaX) < 30 && Math.abs(deltaY) < 30) {
            const currentTime = Date.now();
            if (currentTime - lastTap < 300) {
                // 더블 탭 처리
                if (touchStartX < window.innerWidth / 2) {
                    // 왼쪽: 10초 뒤로
                    seekVideo(-10);
                } else {
                    // 오른쪽: 10초 앞으로
                    seekVideo(10);
                }
            }
            lastTap = currentTime;
        }
        
        // 수직 스와이프: 볼륨 조절
        if (Math.abs(deltaY) > 50 && Math.abs(deltaY) > Math.abs(deltaX) && deltaTime < 500) {
            const volumeDelta = -deltaY / 200;
            changeVolume(volumeDelta);
        }
    }
    
    // ============================================
    // 키보드 단축키
    // ============================================
    
    /**
     * 키보드 이벤트 처리
     */
    function handleKeyPress(event) {
        // 입력 필드에서는 단축키 무시
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(event.key.toLowerCase()) {
            case ' ':
            case 'k':
                event.preventDefault();
                togglePlayPause();
                break;
            case 'arrowleft':
                event.preventDefault();
                seekVideo(-5);
                break;
            case 'arrowright':
                event.preventDefault();
                seekVideo(5);
                break;
            case 'arrowup':
                event.preventDefault();
                changeVolume(0.1);
                break;
            case 'arrowdown':
                event.preventDefault();
                changeVolume(-0.1);
                break;
            case 'f':
                event.preventDefault();
                toggleFullscreen();
                break;
            case 'm':
                event.preventDefault();
                toggleMute();
                break;
            case '0':
            case 'home':
                event.preventDefault();
                video.currentTime = 0;
                break;
            case 'end':
                event.preventDefault();
                video.currentTime = video.duration;
                break;
        }
    }
    
    // ============================================
    // 이벤트 리스너 등록
    // ============================================
    
    // 재생 버튼 오버레이
    playButtonOverlay.addEventListener('click', playVideo);
    playButtonOverlay.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            playVideo();
        }
    });
    
    // 비디오 클릭 (재생/일시정지)
    video.addEventListener('click', togglePlayPause);
    
    // 컨트롤 버튼들
    playPauseBtn.addEventListener('click', togglePlayPause);
    volumeBtn.addEventListener('click', toggleMute);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // 진행률 바 - 마우스/터치 이벤트
    progressContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        seekToPosition(e);
    });
    
    progressContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        seekToPosition(e);
    }, { passive: true });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            seekToPosition(e);
        }
    });
    
    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            seekToPosition(e);
        }
    }, { passive: true });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    document.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // 진행률 바 키보드 접근성
    progressContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            seekVideo(-5);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            seekVideo(5);
        }
    });
    
    // 비디오 이벤트
    video.addEventListener('timeupdate', () => {
        updateProgress();
        updateTimeDisplay();
    });
    
    video.addEventListener('loadedmetadata', updateTimeDisplay);
    
    video.addEventListener('ended', () => {
        playButtonOverlay.classList.remove('hidden');
        toggleIcon(playPauseBtn, 'play-svg', 'pause-svg');
        playPauseBtn.setAttribute('aria-label', '재생');
        videoWrapper.classList.add('show-controls');
        clearTimeout(controlsTimeout);
    });
    
    // 컨트롤 표시/숨김
    videoWrapper.addEventListener('mousemove', hideControlsAfterDelay);
    videoWrapper.addEventListener('touchstart', hideControlsAfterDelay);
    
    // 터치 제스처
    video.addEventListener('touchstart', handleTouchStart, { passive: true });
    video.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // 키보드 단축키
    document.addEventListener('keydown', handleKeyPress);
    
    // 전체화면 변경 감지
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    // ============================================
    // 초기화
    // ============================================
    
    // 비디오 메타데이터 로드 시 시간 표시 업데이트
    if (video.readyState >= 1) {
        updateTimeDisplay();
    }
    
    // 볼륨 초기 설정
    video.volume = 1;
    lastVolume = 1;
    
    // 초기 컨트롤 표시
    videoWrapper.classList.add('show-controls');
    hideControlsAfterDelay();
    
    console.log('🎊 2026년 새해 인사 웹페이지가 로드되었습니다!');
    console.log('키보드 단축키:');
    console.log('  Space/K: 재생/일시정지');
    console.log('  ←/→: 5초 뒤로/앞으로');
    console.log('  ↑/↓: 볼륨 조절');
    console.log('  F: 전체화면');
    console.log('  M: 음소거');
})();
