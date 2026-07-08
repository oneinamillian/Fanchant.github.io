if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('離線功能已啟用'))
      .catch(err => console.error('Service Worker 註冊失敗', err));
  });
}

// 加在 register-sw.js 裡
navigator.serviceWorker.ready.then(() => {
  const el = document.getElementById('offline-status');
  if (el) el.textContent = '✅ 已可離線使用';
});