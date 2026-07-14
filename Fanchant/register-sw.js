// register-sw.js
// 負責註冊 Service Worker，並在「確定離線快取已經準備好」時，
// 跳出一個彈跳視窗提醒使用者這個網站支援離線瀏覽。

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('離線功能已啟用'))
            .catch(err => console.error('Service Worker 註冊失敗', err));
    });

    // Service Worker 真的啟用、可以離線運作時才觸發
    navigator.serviceWorker.ready.then(() => {
        const statusEl = document.getElementById('offline-status');
        if (statusEl) statusEl.textContent = '✅ 已可離線使用';

        showOfflineNoticeOnce();
    });
}

// 提醒使用者「這個網站可以離線用」的彈跳視窗
// 用 localStorage 記錄「看過了沒」，同一個瀏覽器只會跳第一次，
// 不會每次進站都跳出來煩使用者
function showOfflineNoticeOnce() {
    const STORAGE_KEY = 'kpopCheeringGuide_offlineNoticeShown';

    if (localStorage.getItem(STORAGE_KEY)) return; // 已經看過，不再顯示

    const overlay = document.createElement('div');
    overlay.className = 'offline-modal-overlay';
    overlay.innerHTML = `
        <div class="offline-modal">
            <div class="offline-modal-icon">📶</div>
            <h2 class="offline-modal-title">離線也能用！</h2>
            <p class="offline-modal-text">
              將網頁加入桌面，瀏覽過一次之後，就算沒有網路(例如演唱會場館收訊不好)，
              還是可以繼續看應援歌詞喔！
            </p>
            <button class="offline-modal-btn" id="offline-modal-close-btn">知道了</button>
        </div>
    `;
    document.body.appendChild(overlay);

    const closeModal = () => {
        overlay.remove();
        localStorage.setItem(STORAGE_KEY, '1');
    };

    document.getElementById('offline-modal-close-btn').addEventListener('click', closeModal);

    // 點背景(半透明遮罩)也可以關閉
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
}