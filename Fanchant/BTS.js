// 1. 歌曲資料庫 (你可以自由在這邊增加新歌)
const songDatabase = [
    {
        id: "Boy With Luv",
        title: "Boy With Luv",
        category: "BTS",
        youtubeId: "XsX3ATc3FbA",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/bts-boy-with-luv-1",
        videoRefUrl: "https://www.youtube.com/watch?v=6sBFw0rDPAQ&list=PLdWG5JTON0erQAElEiIhE-4nVncHwzr8s",
        lyricsHTML: `<p>
                <p class="tip">前奏開始播放後兩個8拍</p><br>
                <span class="h">[Kim Nam-joon! Kim Seok-jin! Min Yoon-gi! Jung Ho-seok! Park Ji-min! Kim Tae-hyung! Jeon Jung-kook! BTS!]</span><br>
모든 게 궁금해 how's your day?<br>
Oh, tell me <span class="h">(oh-yeah, oh-yeah, ah-yeah, ah-yeah)</span> <br>
뭐가 널 행복하게 하는지<br>
Oh, text me <span class="h">(oh-yeah, oh-yeah, oh-yeah, oh-yeah)</span><br>
            </p>
            <p>
Your every picture<br>
내 머리맡에 두고 싶어 oh, bae<br>
Come be my teacher<br>
니 모든 걸 다 가르쳐줘<br>
<span class="h">Your one, your two</span><br>
            </p>
            <p>
Listen my, my baby 나는<br>
저 하늘을 높이 날고 있어<br>
<u>(그때 니가 내게 줬던 두 날개로) <span class="h">科爹 尼嘎內給佐東吐 那給ㄌㄡ</span></u> <br>
이제 여긴 너무 높아<br>
난 내 눈에 널 맞추고 싶어<br>
Yeah, you makin' me a boy with love (whoo)<br>
            </p>
            <p>
<span class="h">Oh, my, my, my<br>
Oh, my, my, my</span><br>
I've waited all my life<br>
네 전부를 함께하고 싶어<br>
<span class="h">Oh, my, my, my<br>
Oh, my, my, my</span><br>
Looking for something right<br>
이제 조금은 나 알겠어<br>
            </p>
            <p>
<span class="h">[BTS! BTS!]</span><br>
I want something stronger (I want it)<br>
<span class="h">[BTS! BTS!]</span><br>
Than a moment, than a moment, love<br>
<span class="h">[BTS! BTS!]</span><br>
I have waited longer<br>
<span class="h">[BTS! BTS!]</span><br>
For a boy with, for a boy with love<br>
            </p>
            <p>
널 알게 된 <u>이후 <span class="h">一呼</span></u> <span class="h">ya </span>(oh)<br>
내 삶은 <u>온통 너 <span class="h">翁通no</span></u> <span class="h">ya</span> (ya)<br>
사소한 게 사소하지 않게 만들어버린 너라는 별 <span class="h">(oh, no)</span><br>
하나부터 열까지 <span class="h">ayy, ayy</span><br>
모든 게 특별하지 <span class="h">ayy, ayy</span><br>
너의 관심사, 걸음걸이, 말투와<br>
사소한 작은 습관들까지 <span class="h">(Hope World)</span> ayy<br>
            </p>
            <p>
다 말하지, 너무 작던 내가 영웅이 된 거라고 <span class="h">(oh, no)</span><br>
난 말하지, 운명 따윈 처음부터 내 게 아니었다고 <span class="h">(oh, no)</span><br>
세계의 평화 <span class="h">(no way)</span><br>
거대한 질서 <span class="h">(no way)</span><br>
그저 널 지킬 거야 난 (boy with love)<br>
            </p>
            <p>
Listen my, my baby 나는<br>
저 하늘을 높이 날고 있어<br>
<u>(그때 니가 내게 줬던 두 날개로) <span class="h">科爹 尼嘎內給佐東吐 那給ㄌㄡ</span></u><br>
이제 여긴 너무 높아<br>
난 내 눈에 널 맞추고 싶어<br>
Yeah, you makin' me a boy with love (whoo)<br>
            </p>
            <p>
<span class="h">Oh, my, my, my<br>
Oh, my, my, my</span><br>
You got me high so fast<br>
네 전부를 함께하고 싶어<br>
<span class="h">Oh, my, my, my<br>
Oh, my, my, my</span><br>
You got me fly so fast<br>
이제 조금은 나 알겠어<br>
            </p>
            <p>
<span class="h">[BTS! BTS!]</span><br>
Love is nothing stronger (I want it)<br>
<span class="h">[BTS! BTS!]</span><br>
(Than a boy with) than a boy with love<br>
<span class="h">[BTS! BTS!]</span><br>
Love is nothing stronger<br>
<span class="h">[BTS! BTS!]</span><br>
(Than a boy with) than a boy with love<br>
            </p>
            <p>
툭 까놓고 말할게<br>
나도 모르게 힘이 들어가기도 했어<br>
높아버린 sky 커져버린 hall<br>
때론 도망치게 해달라며 기도했어<br>
But 너의 상처는 나의 상처<br>
깨달았을 때, 나 다짐했던걸 (yeah)<br>
니가 준 이카루스의 날개로 (uh)<br>
태양이 아닌 너에게로<br>
Let me fly<br>
            </p>
            <p>
<span class="h">Oh, my, my, my<br>
Oh, my, my, my</span><br>
I've waited all my life (all my life)<br>
네 전부를 함께하고 싶어<br>
<span class="h">Oh, my, my, my<br>
Oh, my, my, my</span> (oh-oh-oh-whoa)<br>
Looking for something right (right)<br>
이제 조금은 나 알겠어<br>
            </p>
            <p>
<span class="h">[BTS! BTS!]</span><br>
I want something stronger (I want it)<br>
<span class="h">[BTS! BTS!]</span><br>
Than a moment, than a moment, love<br>
<span class="h">[BTS! BTS!]</span><br>
Love is nothing stronger (ooh-ooh-ooh-ooh-ah)<br>
<span class="h">[BTS! BTS!]</span><br>
(For a boy with) for a boy with love<br>
            </p>`
    },
];

let currentSongs = [...songDatabase]; // 目前篩選條件下的歌曲清單
let currentIndex = 0; // 目前顯示的歌曲索引
 
// 記住這個頁面本來預設的藝人名稱跟主題色 (從 HTML 讀出來)，
// 這樣切回「沒有覆寫」的歌時，才知道要還原成什麼樣子
let defaultArtistName = "";
let defaultTheme = { main: "", light: "", bg: "" };
 
function captureDefaults() {
    const artistEl = document.getElementById('artist-name');
    if (artistEl) defaultArtistName = artistEl.textContent;
 
    const rootStyle = getComputedStyle(document.documentElement);
    defaultTheme = {
        main: rootStyle.getPropertyValue('--theme-main').trim(),
        light: rootStyle.getPropertyValue('--theme-light').trim(),
        bg: rootStyle.getPropertyValue('--theme-bg').trim()
    };
}
 
// 套用這首歌的藝人名稱：有 song.artist 就用它，沒有就還原成頁面預設值
function applyArtistName(song) {
    const artistEl = document.getElementById('artist-name');
    if (!artistEl) return;
    artistEl.textContent = song.artist || defaultArtistName;
}
 
// 套用這首歌的主題色：有 song.themeOverride 就用它，沒有就還原成頁面預設值
function applyTheme(song) {
    const theme = song.themeOverride || defaultTheme;
    const root = document.documentElement;
    root.style.setProperty('--theme-main', theme.main);
    root.style.setProperty('--theme-light', theme.light);
    root.style.setProperty('--theme-bg', theme.bg);
}
 
// 2. 初始化下拉選單
// 依 songDatabase 動態產生 <option>，value 使用歌曲 id (跟 HTML 原本手動寫的選項對齊)
// 這樣以後在 songDatabase 加新歌，選單會自動更新，不用回頭改 HTML
function initFilter() {
    const songSelect = document.getElementById('songSelect');
    if (!songSelect) return;
 
    songSelect.innerHTML = songDatabase
        .map(song => `<option value="${song.id}">${song.title}</option>`)
        .join('');
}
 
// 下拉選單被選擇時呼叫 (對應 HTML 的 onchange="filterSong()")
// 依選到的歌曲 id，直接跳到該首歌
function filterSong() {
    const songSelect = document.getElementById('songSelect');
    if (!songSelect) return;
 
    const selectedId = songSelect.value;
    const idx = currentSongs.findIndex(song => song.id === selectedId);
 
    if (idx === -1) {
        // 如果目前清單(currentSongs)找不到(例如之後加了分類篩選)，退回完整清單再找一次
        currentSongs = [...songDatabase];
        const fullIdx = currentSongs.findIndex(song => song.id === selectedId);
        if (fullIdx === -1) return;
        currentIndex = fullIdx;
    } else {
        currentIndex = idx;
    }
 
    renderSong();
}
 
// 讓下拉選單跟目前顯示的歌曲保持同步 (value 用 id，跟 HTML option 對齊)
function syncSongSelect() {
    const songSelect = document.getElementById('songSelect');
    if (!songSelect || currentSongs.length === 0) return;
    const song = currentSongs[currentIndex];
    songSelect.value = song.id;
}
 
// 依歌曲資料組出「參考資源」footer，會自動接在每首歌歌詞的最下面
function buildSourceFooter(song) {
    return `
        <footer class="footer-source">
            <div class="source-container">
                <span class="source-label">參考資源</span><br>
                <a href="${song.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link">
                    歌詞來源：lyricfind
                </a><br>
                <a href="${song.videoRefUrl}" target="_blank" rel="noopener noreferrer" class="source-link">
                    參考應援影片
                </a>
            </div>
        </footer>
    `;
}
 
// 3. 渲染網頁畫面
function renderSong() {
    if (currentSongs.length === 0) {
        document.getElementById("song-title").innerText = "無符合歌曲";
        document.getElementById("video-area").innerHTML = "";
        document.getElementById("lyrics-area").innerHTML = "";
        return;
    }
 
    const song = currentSongs[currentIndex];
 
    // 套用這首歌的藝人名稱 / 主題色 (有覆寫值就用，沒有就還原成頁面預設)
    applyArtistName(song);
    applyTheme(song);
 
    // 更新歌名
    document.getElementById("song-title").innerText = song.title;
 
    // 更新 YouTube 影片
    document.getElementById("video-area").innerHTML = `
        <iframe src="https://www.youtube.com/embed/${song.youtubeId}" allowfullscreen></iframe>
    `;
 
    // 更新歌詞內容 + 每首歌最底下自動加上來源 footer
    document.getElementById("lyrics-area").innerHTML = song.lyricsHTML + buildSourceFooter(song);
 
    // 同步下拉選單顯示
    syncSongSelect();
}
 
// 4. 切換歌曲功能 (按鈕控制)
function nextSong() {
    if (currentSongs.length === 0) return;
    currentIndex = (currentIndex + 1) % currentSongs.length;
    renderSong();
}
 
function prevSong() {
    if (currentSongs.length === 0) return;
    currentIndex = (currentIndex - 1 + currentSongs.length) % currentSongs.length;
    renderSong();
}
 
// 5. 分類篩選功能 (目前 HTML 沒有分類按鈕，先保留這個函式，
// 之後如果想加「全部 / 特定分類」的按鈕，直接在 HTML 加
// <button class="filter-btn" onclick="filterSongs('twice', event)">...</button> 就能用)
function filterSongs(category, event) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
 
    if (category === 'all') {
        currentSongs = [...songDatabase];
    } else {
        currentSongs = songDatabase.filter(song => song.category === category);
    }
 
    currentIndex = 0;
    renderSong();
}
 
// 6. 觸控往左/往右滑動切換歌曲 (Swipe 手勢)
let touchStartX = 0;
let touchEndX = 0;
 
function initSwipe() {
    const contentContainer = document.getElementById('content-container');
    if (!contentContainer) return;
 
    contentContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
 
    contentContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });
}
 
function handleGesture() {
    const swipeThreshold = 50; // 滑動超過 50 像素才觸發
    if (touchStartX - touchEndX > swipeThreshold) {
        nextSong();
    }
    if (touchEndX - touchStartX > swipeThreshold) {
        prevSong();
    }
}
 
// 初始化首次載入
window.onload = function () {
    captureDefaults(); // 要在 renderSong() 之前執行，才抓得到「原本沒被改過」的預設值
    initFilter();
    initSwipe();
    renderSong();
};