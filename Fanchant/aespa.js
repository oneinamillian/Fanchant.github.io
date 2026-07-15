// 1. 歌曲資料庫 (你可以自由在這邊增加新歌)
const songDatabase = [
    {
        id: "BlackMamba",
        title: "Black Mamba",
        category: "aespa",
        youtubeId: "ZeerrnuLi5E",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/aespa-black-mamba",
        videoRefUrl: "https://www.youtube.com/watch?v=7keeaZEFGhg",
        lyricsHTML: `        <div class="lyric-item">
            <p>
Hey, <br>
<span class="h">[ae! s! pa! Karina! Gi~ selle! Win~ ter! Ning~ ning! ae! s! pa! B! lack! Mam! ba!]</span><br>
hey<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I'm addicted 끊임없이<br>
말을 걸어주는 나의 에스파 <span class="h">[aespa!]</span><br>
이런 교감, 너의 존잰 날<br>
다른 차원으로 이끌었지 (oh)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
난 세상 중심에 you're in the flat <span class="h">[flat]</span><br>
내 모든 action<br>
어린 너의 힘을 키워<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
넌 언젠가부터 sync out<br>
노이즈같이 보여<br>
더 이상 못 찾겠어<br>
널 유혹해 삼킨 건 <span class="h">black mamba</span><br>     
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ma-ma-ma-mamba <span class="h">[ae! s! pa!]</span><br>
Ooh, whoa, whoa (hey)<br>
Ma-ma-ma-mamba <span class="h">[ae! s! pa!]</span><br>
Oh, eh-oh, eh-oh (hey)<br>                
            </p>
        </div>
        <div class="lyric-item">
            <p>
넌 광야를 떠돌고 있어<br>
(<span class="h">Aya ya ya ya ya ya</span>, hey)<br>
나의 분신을 찾고 싶어<br>
(<span class="h">Aya ya ya ya ya ya</span>, hey)<br>
Hey, ma-mamba<br>                
            </p>
        </div>
        <div class="lyric-item">
            <p>
I hate ma ma ma ma ma ma ma ma mamba<br>
Hate ma ma ma ma ma ma ma ma mamba<br>                
            </p>
        </div>
        <div class="lyric-item">
            <p>
I'm ejected 선함 만으론 (woo)<br>
너의 거대함을 이기지 못해 <span class="h">[moㄊㄟ]</span><br>
I'm exhausted 너의 존잰 모든<br>
탐욕들을 먹고 자라 났지<br>                
            </p>
        </div>
        <div class="lyric-item">
            <p>
에스파는 나야<br>
둘이 될 수 없어 <span class="h">[歐ㄅso]</span><br>
Monochrome to colors<br>
이건 evo-evolution<br>                
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh! 위험한 장난을 쳐<br>
매혹적이지만 널<br>
부정할 밖에<br>
모든 걸 삼켜버릴 <span class="h">black mamba</span><br>               
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ma-ma-ma-mamba <span class="h">[ae! s! pa!]</span><br>
Ooh, whoa, whoa (hey)<br>
Ma-ma-ma-mamba <span class="h">[ae! s! pa!]</span><br>
Oh, eh-oh, eh-oh (hey)<br>                
            </p>
        </div>
        <div class="lyric-item">
            <p>
넌 광야를 떠돌고 있어<br>
(<span class="h">Aya ya ya ya ya ya</span>, hey)<br>
네게 맞서 난 질 수 없어<br>
(<span class="h">Aya ya ya ya ya ya</span>)<br>
Hey, ma-mamba<br>                
            </p>
        </div>
        <div class="lyric-item">
            <p>
거울 속의 나는 네가 아닐까? (hey)<br>
일그러져버린 환영인 걸까?<br>
다시 너와 연결될 수 있다면 (hey)<br>
너를 만나고 싶어 이제<br>
모든 걸 삼켜버릴 <span class="h">black mamba</span> <br>               
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ma-ma-ma-mamba <span class="h">[ae! s! pa!]</span><br>
Ooh, whoa, whoa (hey)<br>
Ma-ma-ma-mamba <span class="h">[ae! s! pa!]</span><br>
Oh, eh-oh, eh-oh (hey)<br>                
            </p>
        </div>
        <div class="lyric-item">
            <p>
넌 광야를 떠돌고 있어<br>
(<span class="h">Aya ya ya ya ya ya</span>, hey)<br>
네게 맞서 난 질 수 없어<br>
(<span class="h">Aya ya ya ya ya ya</span>)<br>
Hey, ma-mamba<br>                
            </p>
        </div>`
    },

    {
        id: "NextLevel",
        title: "Next Level",
        category: "aespa",
        youtubeId: "4TWR90KJl84",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/aespa-next-level-1",
        videoRefUrl: "https://www.youtube.com/watch?v=B9Is5RIpeuI",
        lyricsHTML: `<div class="lyric-item">
    <p>
<span class="h">[Karina! Gi~ selle! Win~ ter! Ning~ ning! Ne xt! le vel!]</span><br>
I'm on the next level yeah<br>
절대적 룰을 지켜<br>
내 손을 놓지 말아<br>
결속은 나의 무기<br>
광야로 걸어가<br>
알아 네 home ground<br>
위협에 맞서서<br>
<u>제껴라 제껴라 제껴라 <span class="h">切ㄍㄧㄚ辣 切ㄍㄧㄚ辣 切ㄍㄧㄚ辣</span></u><br>                 
    </p>
</div>
<div class="lyric-item">
    <p>
(Ooh ooh wee) <span class="h">[aespa]</span><br>
상상도 못한 <span class="h">black out</span><br>
유혹은 깊고 진해<br>
(Too hot too hot)<br>
(Ooh ooh wee) <span class="h">[aespa]</span><br>
맞잡은 손을 <u>놓쳐 <span class="h">努邱</span></u> <br>
난 절대 포기 못해<br>                
    </p>
</div>
<div class="lyric-item">
    <p>
I'm on the next level<br>
저 너머의 문을 열어<br>
<span class="h">Next level</span><br>
널 결국엔 내가 부셔<br>
<span class="h">Next level</span><br>
Kosmo에 닿을 때까지<br>
Next level<br>
<u>제껴라 제껴라 제껴라 <span class="h">切ㄍㄧㄚ辣 切ㄍㄧㄚ辣 切ㄍㄧㄚ辣</span></u>   <br>             
    </p>
</div>
<div class="lyric-item">
    <p>
La la la la la la (ha, ha)<br>
La la la la la la<br>
La la la la la la<br>
La la la la la<br>                
    </p>
</div>
<div class="lyric-item">
    <p>
I see the <span class="h">NU EVO</span><br>
적대적인 고난과 슬픔은<br>
널 더 popping 진화시켜<br>
That's my <span class="h">Naevis</span><br>
It's my <span class="h">Naevis</span><br>
You lead, we follow<br>
감정들을 배운 다음<br>
Watch me while I make it out<br>                
    </p>
</div>
<div class="lyric-item">
    <p>
Watch me while I work it out<br>
Watch me while I make it out<br>
Watch me while I work it out<br>
<span class="h">Work it, work it, work it out</span><br>                
    </p>
</div>
<div class="lyric-item">
    <p>
감당할 수 없는 절망도<br>
내 믿음을 깨지 못해 (watch me while I work it)<br>
더 아픈 시련을 맞아도<br>
난 잡은 손을 놓지 않을게 (watch me while I work it) oh<br>                
    </p>
</div>
<div class="lyric-item">
    <p>
Beat drop<br>
Naevis, calling<br>                
    </p>
</div>
<div class="lyric-item">
    <p>
<span class="h">[ae]</span> 절대로 뒤를 돌아보지 말아<br>
<span class="h">[ae]</span> 광야의 것 탐내지 말아<br>
<span class="h">[ae]</span> 약속이 깨지면<br>
모두 걷잡을 수 없게 돼<br>
언제부턴가 불안해져 가는 신호<br>
널 파괴하고 말 거야 (we want it)<br>
Come on! Show me the way to Kosmo yeah yeah<br>                
    </p>
</div>
<div class="lyric-item">
    <p>
Black mamba가 만들어낸 환각 퀘스트<br>
Aespa, ae를 분리시켜놓길 원해 그래<br>
중심을 잃고 목소리도 잃고 비난받고<br>
사람들과 멀어지는 착각 속에<br>
Naevis 우리 <span class="h">ae, ae</span><u>들을 불러봐 <span class="h">ㄊㄌ 土囉ㄅㄨㄚ</span></u> <br>
Aespa의 next level <span class="h">"P.O.S"</span><u>를 열어봐 <span class="h">ㄌ 優拉ㄅㄨㄚ</span></u> <br>
이건 real world 깨어났어<br>
We against the villain<br>
What's the name? <span class="h">Black mamba</span><br>                
    </p>
</div>
<div class="lyric-item">
    <p>
(Ooh ooh wee) <span class="h">[aespa]</span><br>
결국 난 문을 <u>열어 <span class="h">優摟</span></u> <br>
그 빛은 네겐 fire<br>
(Too hot too hot)<br>
(Ooh ooh wee) <span class="h">[aespa]</span><br>
난 궁금해 미치<u>겠어 <span class="h">給搜</span></u> <br>
이 다음에 펼칠 story, huh!<br>                
    </p>
</div>
<div class="lyric-item">
    <p>
I'm on the next level<br>
저 너머의 문을 열어<br>
<span class="h">Next level</span><br>
널 결국엔 내가 부셔<br>
<span class="h">Next level</span><br>
Kosmo에 닿을 때까지<br>
Next level<br>
<u>제껴라 제껴라 제껴라 <span class="h">切ㄍㄧㄚ辣 切ㄍㄧㄚ辣 切ㄍㄧㄚ辣</span></u><br>                
    </p>
</div>
<div class="lyric-item">
    <p>
I'm on the next level<br>
더 강해져 자유롭게<br>
<span class="h">Next level</span><br>
난 광야의 내가 아냐<br>
<span class="h">Next level</span><br>
야수 같은 나를 느껴<br>
Next level<br>
<u>제껴라 제껴라 제껴라 <span class="h">切ㄍㄧㄚ辣 切ㄍㄧㄚ辣 切ㄍㄧㄚ辣</span></u> huh!<br>                
    </p>
</div>`
    },

    {
        id: "Savage",
        title: "Savage",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "Girls",
        title: "Girls",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "Spicy",
        title: "Spicy",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "Drama",
        title: "Drama",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "Supernova",
        title: "Supernova",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "Armageddon",
        title: "Armageddon",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "illusion",
        title: "illusion",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },
    
    {
        id: "Thirsty",
        title: "Thirsty",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "aenergy",
        title: "aenergy",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "Salty&Sweet",
        title: "Salty & Sweet",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "Hot Mess",
        title: "Hot Mess",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "Whiplash",
        title: "Whiplash",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "DirtyWork",
        title: "Dirty Work",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "RichMan",
        title: "Rich Man",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "WDA",
        title: "WDA (Whole Different Animal)",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
    },

    {
        id: "LEMONADE",
        title: "LEMONADE",
        category: "aespa",
        youtubeId: "",
        sourceUrl: "",
        videoRefUrl: "",
        lyricsHTML: ``
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
                <span class="source-label">參考資源</span>
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