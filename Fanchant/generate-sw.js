const fs = require('fs');
const path = require('path');

const ROOT = __dirname; // 網站根目錄(這個腳本所在的位置)

// 不想被快取的檔案/資料夾，寫在這裡
const IGNORE = [
  'node_modules',
  '.git',
  '.github',
  'generate-sw.js',
  'sw.js',
  '.DS_Store',
  'README.md',
  '.gitignore'
];

// 掃描整個資料夾，找出所有檔案
function walk(dir, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    if (IGNORE.includes(file)) return;

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, fileList);
    } else {
      // 轉成網址路徑格式，例如 /image/TWICE/xxx.jpg
      const relativePath = '/' + path.relative(ROOT, fullPath).replace(/\\/g, '/');
      fileList.push(relativePath);
    }
  });
  return fileList;
}

const files = walk(ROOT);

// 用現在的時間當版本號，之後每次重跑都會自動更新版本
const version = new Date().toISOString().slice(0, 19).replace(/[-:T]/g, '');

const swContent = `// 此檔案由 generate-sw.js 自動產生，請勿手動修改
// 若要更新內容，請重新執行: node generate-sw.js

const CACHE_NAME = 'kpop-cheering-guide-${version}';

const urlsToCache = ${JSON.stringify(files, null, 2)};

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
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

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
`;

fs.writeFileSync(path.join(ROOT, 'sw.js'), swContent);
console.log(`✅ 已產生 sw.js`);
console.log(`📦 版本號：kpop-cheering-guide-${version}`);
console.log(`📄 共快取 ${files.length} 個檔案：`);
files.forEach(f => console.log('   ' + f));