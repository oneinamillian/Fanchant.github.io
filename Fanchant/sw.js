// ====== 版本號：每次更新內容(新增團體、新增圖片、改口號)都要改這裡 ======
const CACHE_NAME = 'kpop-cheering-guide-v10';

// ====== 需要離線快取的檔案清單 ======
const urlsToCache = [
  // 首頁
  '/',
  '/index.html',
  '/style.css',
  '/song.css',

  // 子頁面
  '/關於本站.html',
  '/使用教學.html',
  '/聲明.html',
  '/TWICE.html',
  '/TWICE.js',
  '/NMIXX.html',
  '/NMIXX.js',
  '/EXO.html',
  '/EXO.js',
  '/aespa.html',
  '/aespa.js',

  // 如果有共用的 JS 檔案也要加進來，例如：
   '/script.js',
   '/register-sw.js',
   
];

// ====== 安裝階段：把清單裡的檔案存進快取 ======
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // 用 allSettled 逐一新增，某個檔案路徑打錯或圖片遺失
      // 不會導致整個安裝失敗、其他頁面也連帶無法離線
      return Promise.allSettled(
        urlsToCache.map(url =>
          cache.add(url).catch(err => {
            console.warn('快取失敗，已略過：', url, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

// ====== 啟用階段：清掉舊版本快取 ======
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// ====== 攔截請求：快取優先，快取沒有才去網路抓 ======
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});