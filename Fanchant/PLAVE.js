// 1. 歌曲資料庫 (你可以自由在這邊增加新歌)
const songDatabase = [
    {
        id: "Waitforyou",
        title: "기다릴게 Wait for you",
        category: "PLAVE",
        youtubeId: "cFm8fTRW_so",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-wait-for-you",
        videoRefUrl: "https://www.youtube.com/watch?v=F7mcccuXdOQ",
        lyricsHTML: `<p>Whoa-oh<br>
Whoa-oh<br>
매일 이렇게 난 늘 혼잣말을 해 always<br>
<u>기다릴게 <span class="h">ki搭哩給</span></u><br>
</p>
<p>Hello 요즘 어때?<br>
그래, 여전히 널 그리곤 해<br>
수백 번씩 준비한 birthday<br>
아무 일도 없이 지나간 걸<br>
Hello 이 말을 못하고 애써<br>
난 무심한 척 너를 지나쳐갔어<br>
Ooh, oh, ooh-whoa<br>
<u>절대 <span class="h">糾ㄉㄟ</span></u> 난 어울리지 않을 거란 <u>말로 <span class="h">媽囉</span></u><br>
내 감정을 숨겼어<br>
별 의미가 없잖아<br>
널 향한 나의 맘이 점점 커져서<br>
</p>
<p><u>기다릴게 <span class="h">ki搭哩給</span></u>, 너의 그곳에 내가 닿을 수 있게<br>
<u>기다릴게 <span class="h">ki搭哩給</span></u>, 너의 곁에 내가 숨 쉴 수 있길<br>
<u>매일 이렇게 난 늘 혼잣말을 해<span class="h">每依 李羅k 南 ㄋ 轟加碼ㄌ 勒</span></u> always<br>
</p>
<p>Whoa-oh (wait for you)<br>
여전히 whoa-oh (wait for you)<br>
<u>매일 이렇게 난 늘 혼잣말을 해<span class="h">每依 李羅k 南 ㄋ 轟加碼ㄌ 勒</span></u> always<br>
<u>기다릴게 <span class="h">ki搭哩給</span></u><br>
</p>
<p>꽤나 오랜만인 것 같아<br>
떠오르는 건 오직 잘 지냈냐는 <u>말 밖에 <span class="h">媽 趴給</span></u><br>
아무 소식 없는 널 같은 자리에서 기다렸어<br>
몇 번의 계절이 지나도 <u>너 밖엔 <span class="h">挪 八給</span></u><br>
생각나지 않고 아무것도 보이지가 않아<br>
아무리 노력해 봐야 제자리만 맴돌아<br>
시작이 다르더라도 괜찮아<br>
난 항상 출발선에 멈춰 있으니까<br>
</p>
<p><u>기다릴게 <span class="h">ki搭哩給</span></u>, 너의 그곳에 내가 닿을 수 있게<br>
<u>기다릴게 <span class="h">ki搭哩給</span></u>, 너의 곁에 내가 숨 쉴 수 있길<br>
<u>매일 이렇게 난 늘 혼잣말을 해<span class="h">每依 李羅k 南 ㄋ 轟加碼ㄌ 勒</span></u> always<br>
</p>
<p>어젯밤 꿈속에 활짝 웃는 <u>너를 봤어 <span class="h">noㄌ 霸搜</span></u><br>
그런 널 위해 꽃 한 송일 <u>품에 안고 <span class="h">鋪妹 安溝</span></u><br>
약속을 할게 두 번 다시 네 손<br>
놓지 않을 거라고 ooh-whoa, ooh-whoa<br>
</p>
<p><u>기다릴게 <span class="h">ki搭哩給</span></u> (whoa) 너의 그곳에 내가 닿을 수 있게<br>
<u>기다릴게 <span class="h">ki搭哩給</span></u>, 너의 곁에 내가 숨 쉴 수 있길<br>
<u>매일 이렇게 난 늘 혼잣말을 해<span class="h">每依 李羅k 南 ㄋ 轟加碼ㄌ 勒</span></u> always<br>
</p>
<p><span class="h">[Aㄉ拉 阿妞 哪嫩 PLLI呀! no依嘎 no木 潑溝西潑搜! 洽剛 ki搭哩尼 偷拉哇古納 ㄎ給趴摟諾古納 P LA VE!]</span><br>
    매일 이렇게 난 늘 혼잣말을 해 always<br>
<u>기다릴게 <span class="h">ki搭哩給</span></u><br>
</p>`
    },
    {
        id: "Pixelworld",
        title: "Pixel world",
        category: "PLAVE",
        youtubeId: "I2qgmAh1em0",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-pixel-world",
        videoRefUrl: "https://www.youtube.com/watch?v=Fplgt_ca35w",
        lyricsHTML: `<p>회색빛 <span class="h">[gray]</span> 도시 속 <span class="h">[city]</span><br>
날 깨워주는 너의 color<br>
너로 인해 <span class="h">[you]</span> 나 숨을 쉬어 <span class="h">[breath]</span><br>
내 안에 온기를 더해<br>
</p>
<p>마지막 퍼즐이 맞춰지고<br>
끝끝내 완성된 <span class="h">pixel world</span><br>
참 많이 기다렸지?<br>
Umm (ha), you know? Yeah-yeah<br>
</p>
<p>오래도록 꿈꿔왔던 이 순간<br>
현실이 됐어 (<span class="h">look</span>)<br>
</p>
<p>하루의 끝에 <u>너와 나 <span class="h">no挖哪</span></u><br>
우린 시작을 해 <span class="h">tonight</span><br>
I wanna love (<span class="h">hey</span>)<br>
You wanna love (<span class="h">ho</span>)<br>
We are making new world (<span class="h">let's dance</span>)<br>
손을 들어 높이 (<u>모두 <span class="h">mo能</span></u> <span class="h">put your hands up</span>)<br>
내일 따윈 없지 (<u>불필요해 맨정신 <span class="h">不批留黑 妹冏信</span></u>)<br>
불태워 다 let's rock all night<br>
<span class="h">Come in our pixel world</span><br>
</p>
<p>Let's break it now 틀에 박힌 rules<br>
I don't lose 너를 위한 move<br>
보여줄게 prove (yeah)<br>
Shine bright 밝은 빛으로<br>
어두운 세계를 밝혀<br>
외로운 날 이제는 없을 테니 I promise<br>
</p>
<p>I'm falling love 하얗게 물들어<br>
Like falling snow<br>
눈 부신 별빛 아래 우리는 <u>하나가 돼 <span class="h">哈娜尬 對</span></u><br>
늘 같이 걸어갈래 끝없는 <u>은하계 <span class="h">恩娜ㄍㄟ</span></u> yeah<br>
</p>
<p>오래도록 꿈꿔왔던 이 순간<br>
현실이 됐어 (<span class="h">look</span>)<br>
</p>
<p>하루의 끝에 <u>너와 나 <span class="h">no挖哪</span></u><br>
우린 시작을 해 <span class="h">tonight</span><br>
I wanna love (<span class="h">hey</span>)<br>
You wanna love (<span class="h">ho</span>)<br>
We are making new world (<span class="h">let's dance</span>)<br>
손을 들어 높이 (<u>모두 <span class="h">mo能</span></u> <span class="h"> put your hands up</span>)<br>
내일 따윈 없지 (<u>불필요해 맨정신 <span class="h">不批留黑 妹冏信</span></u>)<br>
불태워 다 let's rock all night<br>
<span class="h">Come in our pixel world</span><br>
</p>
<p>미소를 머금은 눈빛에<br>
난 녹아 버릴 거 같은데<br>
Ooh-oh 놓지 않을게<br>
(Your hand, your heart, your breath)<br>
I'm melting 'cause of you, oh<br>
</p>
<p>하루의 끝에 <u>너와 나 <span class="h">no挖哪</span></u><br>
우린 시작을 해 <span class="h">tonight</span><br>
I wanna love (<span class="h">hey</span>)<br>
You wanna love (<span class="h">ho</span>)<br>
We are making new world (<span class="h">let's dance</span>)<br>
손을 들어 높이 (<u>모두 <span class="h">mo能</span></u> <span class="h"> put your hands up</span>)<br>
내일 따윈 없지 (<u>불필요해 맨정신 <span class="h">不批留黑 妹冏信</span></u>)<br>
불태워 다 let's rock all night<br>
<span class="h">Come in our pixel world</span><br>
</p>
<p>Come in our pixel world<br>
We show another world<br>
We show another world<br>
<span class="h">Hey, ho, hey, ho</span><br>
오늘이야 let's rock all night<br>
<span class="h">Come in our pixel world</span><br>
</p>`
    },
    {
        id: "Why",
        title: "왜요 왜요 왜? Why?",
        category: "PLAVE",
        youtubeId: "Q_TzqcWKz00",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-why",
        videoRefUrl: "https://www.youtube.com/watch?v=6FGHj6W7CaY",
        lyricsHTML: `<p><span class="h">[P! LA! 易! VE! 喂! 又! 喂又喂!]</span><br>
            Make you go <span class="h">click, click</span><br>
Make you go <span class="h">mad, mad</span><br>
Make you go <span class="h">rec, rec</span><br>
I know, I know 뻔해<br>
</p>
<p>너 정말 왜요, <u>왜요, 왜, <span class="h">喂又, 喂,</span></u> 왜요, <u>왜요, 왜 <span class="h">喂又, 喂</span></u><br>
I don't wanna hear anymore (<span class="h">nope, nope, nope</span>)<br>
저한테 왜요, <u>왜요, 왜, <span class="h">喂又, 喂,</span></u> 왜요, <u>왜요, 왜 <span class="h">喂又, 喂</span></u><br>
I don't wanna feel anymore (nope, nope, nope)<br>
</p>
<p>We make a trend<br>
흔해빠진 밈들은 전부 fuck off (<u>넣어둬 <span class="h">no喔豆</span></u>)<br>
We make a friend<br>
트렌드를 아는 freak 모두 모여 (<u>여기로 <span class="h">優ㄍㄧ漏</span></u>)<br>
멋을 아는 shake it <span class="h">[不不]</span><br>
Muscle 위한 프로틴 (<span class="h">yeah, buddy</span>)<br>
안오는 놈들은 뭐야<br>
나 집에 안갈꼬야 <span class="h">[咖機罵]</span><br>
</p>
<p>Tell me what you want 더 보여줄게<br>
Tell me what you do I'll be your Rolex<br>
</p>
<p>너 정말 왜요, <u>왜요, 왜, <span class="h">喂又, 喂,</span></u> 왜요, <u>왜요, 왜 <span class="h">喂又, 喂</span></u><br>
I don't wanna hear anymore (<span class="h">nope, nope, nope</span>)<br>
저한테 왜요, <u>왜요, 왜, <span class="h">喂又, 喂,</span></u> 왜요, <u>왜요, 왜 <span class="h">喂又, 喂</span></u><br>
I don't wanna feel anymore (nope, nope, nope)<br>
</p>
<p>Day and night (day and night)<br>
언제나 너의 곁에 있을게 (always)<br>
이런말 하고 싶지 않지만 (이런말)<br>
널 기다린 나란 말야 (bow wow)<br>
<span class="h">[ki! 搭! 哩! 給!]</span><br>
</p>
<p>너 정말 왜요, <u>왜요, 왜, <span class="h">喂又, 喂,</span></u> 왜요, <u>왜요, 왜 <span class="h">喂又, 喂</span></u><br>
I don't wanna hear anymore (<span class="h">nope, nope, nope</span>)<br>
저한테 왜요, 왜요, 왜, 왜요, 왜요, 왜<br>
I don't wanna feel anymore (nope, nope, nope)<br>
</p>
<p>Eh, eh, eh, eh-eh-eh<br>
Eh, eh, eh, eh-eh-eh<br>
Eh, eh, eh, eh-eh-eh, eh-eh-yeah<br>
<mark><span class="h">[Nam-Yejun! Han-Noah! Chae-Bamby! Do-Eunho! Yu-Hamin! 撒浪嘿! P! LA! 易! VE!]</span><br>
Eh, eh, eh, eh-eh-eh<br>
Eh, eh, eh, eh-eh-eh<br>
Eh, eh, eh, eh-eh-eh<br>
Eh, eh, eh, yeah</mark><br>
</p>`
    },
    {
        id: "The6thSummer",
        title: "여섯 번째 여름 The 6th Summer",
        category: "PLAVE",
        youtubeId: "c_yCRwh97M8",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-the-6th-summer",
        videoRefUrl: "https://www.youtube.com/watch?v=x9elxMVx9k8",
        lyricsHTML: `<p>영원을 말했죠 꿈이 아니기를<br>
혼돈 속을 지나면<br>
반짝일 거라고<br>
</p>
<p>소나기가 <span class="h">[嘎]</span> 내려오면 <span class="h">[妙]</span><br>
이건 잠시뿐일 거야<br>
눈이 부신 그날의 기억은<br>
기적이니까요<br>
</p>
<p>좀 더 <u>멀리멀리 <span class="h">摸哩摸哩</span></u><br>
닿을 수 있을까<br>
길고 긴 <u>여정에 <span class="h">又冏A</span></u><br>
마침표를 찍을 수만 있다면<br>
</p>
<p>마지막 땀방울의 결말은<br>
헛된 길이 아닐 걸 잘 알아<br>
</p>
<p>반복되는 계절의 중간에 <u>있어 <span class="h">依搜</span></u><br>
그토록 바랬던 어둠 속의 빛을 찾고 말았어<br>
<u>너에게 <span class="h">noㄟ給</span></u>로 달려가는 이 시공간을 넘어서<br>
닿은 이곳은 여섯 번째<br>
여름의 시작이었단 걸<br>
<u>꿈꿨어 <span class="h">故溝搜</span></u><br>
</p>
<p>푸른 하늘, 마치 눈물 같아 <span class="h">[啊]</span><br>
날이 밝아도 결국 쏟아진다 <span class="h">[大]</span><br>
하염없이 달려온 길 위 oh<br>
</p>
<p><u>속도를 올렸어 <span class="h">搜豆ㄌ 喔六搜</span></u><br>
망설이다 전부 다 놓쳐 버릴까 <u>또 <span class="h">豆</span></u><br>
일곱 번의 여름은 없을 거라<u>고 <span class="h">購</span></u><br>
끝이 없던 평행곡선<br>
결국 같은 곳을 지나왔어<br>
</p>
<p>좀 더 <u>멀리멀리 <span class="h">摸哩摸哩</span></u><br>
닿을 수 있을까<br>
길고 긴 <u>여정에 <span class="h">又冏A</span></u><br>
마침표를 찍을 수만 있다면<br>
</p>
<p>마지막 땀방울의 결말은<br>
헛된 길이 아닐 걸 잘 알아<br>
</p>
<p>반복되는 계절의 중간에 <u>있어 <span class="h">依搜</span></u><br>
그토록 바랬던 어둠 속의 빛을 찾고 말았어<br>
<u>너에게 <span class="h">noㄟ給</span></u>로 달려가는 이 시공간을 넘어서<br>
닿은 이곳은 여섯 번째<br>
여름의 시작이었단 걸<br>
<u>꿈꿨어 <span class="h">故溝搜</span></u><br>
</p>
<p>꿈일까 꿈일까<br>
우리 함께하는 이 순간 (<u>꿈같아 <span class="h">故嘎他</span></u>)<br>
마법 같은 하루가 (결국엔 사라질까)<br>
</p>
<p>그칠까 그칠까 찬란히<br>
반짝이던 눈물의 기적<br>
빛나줘
</p>
<p><p class="tip">等兩個八拍</p><br>
    <span class="h">[Nam-Yejun! Han-Noah! Chae-Bamby! Do-Eunho! Yu-Hamin! P! LA! 易! VE! 用 萬 哈 加!]</span><br>
    반복되는 계절의 중간에 <u>있어 <span class="h">依搜</span></u><br>
그토록 바랬던 어둠 속의 빛을 찾고 말았어<br>
<u>너에게 <span class="h">noㄟ給</span></u>로 달려가는 이 시공간을 넘어서<br>
닿은 이곳은 여섯 번째<br>
여름의 시작이었단 걸<br>
꿈꿨어<br>
</p>`
    },
    {
        id: "WAY4LUV",
        title: "WAY 4 LUV",
        category: "PLAVE",
        youtubeId: "tRSvtYMjsxw",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-way-4-luv",
        videoRefUrl: "https://www.youtube.com/watch?v=5IjsnRI4-AM",
        lyricsHTML: `<p>Way for love, oh<br>
Way for your love<br>
Way for love<br>
<span class="h">[P! LA! 易! VE!]</span><br>
</p>
<p>Way for love, way for <mark><span class="h">[way for love]</span> your love</mark> <br>
Way for love, way for <mark><span class="h">[way for love]</span> your love</mark> <br>
거짓말이라도 믿을게 <span class="h">[密ㄉk]</span><br>
영화 같은 스토리의 끝에<br>
</p>
<p>It's like a movie<br>
우린 참 어렸었지<br>
저 별들을 닮기엔<br>
모든 게 서툴렀지 oh, yeah<br>
</p>
<p>뜨거웠던 숨은 꿈이 되어<br>
내 심장에 불을 지폈어 날 멈출 수 없도록 <span class="h">[豆]</span><br>
더욱 떨어져가는 <u>폭포 <span class="h">剖剖</span></u><br>
처럼 내 몸을 던졌어 <span class="h">[so]</span><br>
그 속에 피어난 flo<span class="h">wer</span><br>
어느새 노을이 지고 있어 그곳으로<br>
</p>
<p>Moonlight 끝이 없는 <span class="h">midnight</span><br>
Sunshine 반복되는 <span class="h">highlight</span><br>
</p>
<p>Woo woo woo woo woo woo woo<br>
(<span class="h">Woo woo woo woo woo woo woo</span>)<br>
Woo woo woo woo woo woo woo<br>
(<span class="h">Woo woo woo woo woo woo woo</span>)<br>
</p>
<p>Way for love, way for <mark><span class="h">[way for love]</span> your love</mark> <br>
Way for love, way for <mark><span class="h">[way for love]</span> your love</mark> <br>
거짓말이라도 믿을게 <span class="h">[密ㄉk]</span><br>
영화 같은 스토리의 끝에<br>
</p>
<p>Way for love, oh, way for <mark><span class="h">[way for love]</span> your love</mark><br>
사계절이 되어줘 my Venus<br>
거짓말이라도 믿을래 <span class="h">[密ㄉ勒]</span><br>
황홀한 이 여정의 끝에<br>
</p>
<p>쏟아지는 유성 아래 형 형색의 rainbow <span class="h">[bow]</span><br>
지나치게 아름다워<br>
A to T, I'm driving now <span class="h">[now]</span><br>
</p>
<p>There's no rush hour<br>
Let's go Eiffel tower<br>
Imagine we smile at the same time<br>
</p>
<p>Moonlight 끝이 없는 <span class="h">midnight</span><br>
Sunshine 반복되는 <span class="h">highlight</span><br>
</p>
<p>Woo woo woo woo woo woo woo<br>
(<span class="h">Woo woo woo woo woo woo woo</span>)<br>
Woo woo woo woo woo woo woo<br>
(<span class="h">Woo woo woo woo woo woo woo</span>)<br>
</p>
<p>Way for love, way for <mark><span class="h">[way for love]</span> your love</mark><br>
Way for love, way for <mark><span class="h">[way for love]</span> your love</mark><br>
거짓말이라도 믿을게 <span class="h">[密ㄉk]</span><br>
영화 같은 스토리의 끝에<br>
</p>
<p>같은 시선 속에 맞닿은 우리야<br>
너와 날 닮은 이 순간<br>
끝나지 않을 여행이라<br>
It's a beautiful life<br>
<span class="h">[P! LA! 易! VE!]</span><br>
</p>
<p>Way for love<br>
Oh, way for love <span class="h">[way! 易! for! love!]</span><br>
거짓말이라도 믿을게 <span class="h">[密ㄉk]</span><br>
영화 같은 스토리의 끝에 (끝에)<br>
</p>
<p>Way for love, oh way for your love<br>
사계절이 되어줘 my Venus (oh)<br>
거짓말이라도 믿을래 <span class="h">[密ㄉ勒]</span><br>
황홀한 이 여정의 끝에<br>
</p>
<p>Woo woo<mark><span class="h">[Nam-Yejun! Han-Noah! Chae-Bamby! Do-Eunho! Yu-Hamin! P LA 易 VE! way! 易! for! love!]</span><br>
woo woo<br>
Woo woo woo<br>
Woo woo woo woo</mark><br>
Woo woo woo, woo woo woo<br>
</p>`
    },
    {
        id: "PumpUpTheVolume!",
        title: "Pump Up The Volume!",
        category: "PLAVE",
        youtubeId: "zLLHEZp_gbM",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-pump-up-the-volume",
        videoRefUrl: "https://www.youtube.com/watch?v=N0uKgH5bPZY",
        lyricsHTML: `<p>네, 여기는 PL:RADIO 스페셜 DJ 달디 영재입니다<br>
다음 곡은요, 요즘 테라에서 가장 핫한 아스테룸의 외계인들이죠<br>
PLAVE가 부릅니다 'Pump Up The Volume!'<br>
</p>
<p><span class="h">[撒浪嘿! P LA 易 VE!<br>
    溝媽握! P LA 易 VE!<br>
    哈給嘿! P LA 易 VE!<br>
    Pump Up The Volume!]</span><br>
    처음엔 난 아무것도 몰랐어<br>
널 향해 심장이 뛰고 있단 걸 <span class="h">[Do-Eunho!]</span><br>
돌이켜 봐도 정말 서툴렀던 거야 <span class="h">[Yu-Hamin!]</span><br>
우물쭈물 망설였던 난 그만 <span class="h">[Nam-Yejun!]</span><br>
</p>
<p>짜릿한 이 순간, 바래왔던 이 느낌 <span class="h">[Han-Noah!]</span><br>
바보야, 니 얘기란 말야 <span class="h">[Chae-Bamby!]</span><br>
아, 아, 듣고 있지?<br>
</p>
<p>많은 사람 중에 너 하나밖에 안 보여 <span class="h">[安 波 優]</span><br>
많은 사람 중에 너 하나밖에 보이지 않아<br>
사랑해 말하지 못한 날 이젠 안녕<br>
이렇게 전할래 내 맘<br>
그곳에 <u>기다려준 너에게 나<span class="h">ki搭六俊 noㄟ給 那</span></u> 말할게<br>
</p>
<p>사랑해, 이 말을 못 해서 너를 사랑해<br>
참 오래 걸렸어<br>
진심 어린 이 말, 적었다 지웠다 했지<br>
과연 니 맘도 같을까봐 걱정이 됐으니<br>
잠깐 기다리면 <u>돌아오겠지 <span class="h">偷拉喔ㄍㄟ季</span></u><br>
잠깐 시간 나면 <u>전화하겠지 <span class="h">邱拿哈ㄍㄟ季</span></u><br>
생각지 못한 결말일까 봐 두려웠었어<br>
이젠 더는 신경 쓰지 않을래 널 <u>두고 난 <span class="h">度 估 南</span></u><br>
</p>
<p>짜릿한 이 순간, 바래왔던 이 느낌<br>
바보야, 니 얘기란 말야<br>
</p>
<p>많은 사람 중에 너 하나밖에 안 보여 <span class="h">[安 波 優]</span><br>
많은 사람 중에 너 하나밖에 보이지 않아<br>
사랑해 말하지 못한 날 이젠 안녕<br>
이렇게 전할래 내 맘<br>
그곳에 <u>기다려준 너에게 나<span class="h">ki搭六俊 noㄟ給 那</span></u><br>
</p>
<p>많은 사람 중에 너 하나밖에 안 보여<br>
많은 사람 (whoa) 중에 너 하나밖에 (whoa) 보이지 않아 (whoa)<br>
사랑해 말하지 못한 날 이젠 안녕<br>
이렇게 전할래 내 맘<br>
그곳에 기다려준 너에게 나 <mark><span class="h">[hey]</span> 말할게</mark><br>
</p>
<p>(Ooh) 영원히 (ooh)<br>
    <span class="h">[喔接納! ki搭哩給! 趴囉優ㄍㄧ! 貼拉A搜!]</span><br>
숨이 차 말하지 못한 난 이젠 안녕<br>
이렇게 전할래 내 맘<br>
그곳에 <u>너를 향해 달려갈게 <span class="h">noㄌ ㄏㄧㄤ嘿 大六嘎給</span></u><br>
진심이야<br>
</p>`
    },
    {
        id: "Dash",
        title: "Dash",
        category: "PLAVE",
        youtubeId: "9FopMGItmOw",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-dash",
        videoRefUrl: "https://www.youtube.com/watch?v=lNOU6sHwNaw",
        lyricsHTML: `<p> <span class="h">[P! LA! 易! VE!]</span><br>
            실낱같았던<br>
한 줄기의 빛을 봤어<br>
칠흑 같은 어둠 속에<br>
끝을 헤매고 있어<br>
아름답던 <span class="h">[P LA 易 VE!]</span> 영원처럼 <span class="h">[用 萬 哈 加!]</span><br>
아득히 펼쳐진 꿈<br>
</p>
<p>Time is freakin' running out<br>
</p>
<p>I gotta dash <span class="h">[dash]</span><br>
Break up the way<br>
I'm in my devil <span class="h">[devil]</span><br>
Don't make me mad<br>
</p>
<p>I gotta dash <span class="h">[I gotta dash]</span><br>
Break up the way<br>
I'm in my devil <span class="h">[I'm in my devil]</span><br>
Don't make me mad<br>
</p>
<p>I fly for <span class="h">peace</span><br>
Never lose in <span class="h">this</span> place<br>
거침 따위 전혀 보이지 <u>않지 <span class="h">安基</span></u><br>
Ma prime series, new chapter le get it<br>
Don't slow down <span class="h">[who who]</span><br>
Never repeat it<br>
</p>
<p><span class="h">Don't stop for life<br>
Give me, give me that<br>
Oh, well rock</span><br>
</p>
<p>The question is where you at now<br>
Take it easy now<br>
어차피 정해진 답은 없으니 <span class="h">keep it up</span><br>
</p>
<p>날 깨워줘 <span class="h">[機摳chu給]</span> 악몽처럼 <span class="h">[機握撥六]</span><br>
까맣게 뒤덮인 꿈<br>
</p>
<p>Time is freakin' running out<br>
</p>
<p>I gotta dash <span class="h">[dash]</span><br>
Break up the way<br>
I'm in my devil <span class="h">[devil]</span><br>
Don't make me mad<br>
</p>
<p>I gotta dash <span class="h">[I gotta dash]</span><br>
Break up the way<br>
I'm in my devil <span class="h">[I'm in my devil]</span><br>
Don't make me mad<br>
</p>
<p>다시 뒤바뀌는 결말은<br>
네 선택에 놓여<br>
약속했던 그날의 숨결<br>
</p>
<p>I gotta dash <span class="h">[dash]</span><br>
Break up the way<br>
I'm in my devil <u>혁명은 시작됐어 <span class="h">ㄏㄧㄡㄇㄩㄥ恩 西甲推搜</span></u><br>
<mark><u>일어나 영광은 우리의 것<span class="h">依囉那 永光恩 屋哩爺 溝</span> </u> <br>
Don't make me mad</mark><br>
I gotta dash <span class="h">[I gotta dash]</span><br>
Break up the way<br>
I'm in my devil <u>혁명은 시작됐어 <span class="h">ㄏㄧㄡㄇㄩㄥ恩 西甲推搜</span></u><br>
<mark><u>일어나 영광은 우리의 것<span class="h">依囉那 永光恩 屋哩爺 溝</span> </u> <br>
Don't make me mad</mark><br>
</p>
<p><span class="h">Immortal, immortal<br>
Immortal, immortal</span><br>
<mark><span class="h">[Nam-Yejun! Han-Noah! Chae-Bamby! Do-Eunho! Yu-Hamin! P LA 易 VE! I got ta dash!]</span><br>
Immortal, immortal<br>
Immortal, immortal</mark><br>
</p>`
    },
    {
        id: "HideandSeek",
        title: "숨바꼭질 Hide and Seek",
        category: "PLAVE",
        youtubeId: "mGqYMma_YIk",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-hide-and-seek",
        videoRefUrl: "https://www.youtube.com/watch?v=mhSEcEmft6Y",
        lyricsHTML: `<p>
                <span class="h">[Nam-Yejun! Han-Noah! Chae-Bamby! Do-Eunho! Yu-Hamin! P LA 易 VE! 素爸購機! 潑溝 西潑搜! P LA 易 VE! ㄊ低喔 洽假搜! P LA 易 VE!]</span><br>
                하루의 끝에 누워 뜬 눈을 감으면<br>
우리의 별이 반짝이니<br>
조금은 헷갈려 할지도 몰라<br>
너도 그런 걸까? 나도 그래왔었으니까 <span class="h">[P LA 易 VE!]</span><br>
</p>
<p>니가 나를 찾아왔던 그 순간<br>
너의 흔적들을 따라가 봤어<br>
마치 미로 같은 수수께끼인 걸까?<br>
그런 기분이 들 때 <span class="h">[素! 爸! 購! 機!]</span><br>
확신해, 나를 찾는 너의<br>
</p>
<p>세계로 오늘을 달려왔어<br>
포기할 수 없던 시간 속에<br>
숨바꼭질은 나의 천국인걸<br>
</p>
<p>이젠 알겠어 <span class="h">[i給搜]</span>, 나는 깨달았어 <span class="h">[給大拉搜]</span><br>
너도 나를 찾고 있다는 걸 안 순간<br>
맘이 차올라서<br>
</p>
<p>소리칠게 <u>힘껏 <span class="h">[he購]</span></u><br>
불러볼게 <u>힘껏 <span class="h">[he購]</span></u><br>
들린다면 <u>지금 <span class="h">七根</span></u><br>
그곳에서 웃어줘<br>
</p>
<p>이젠 알겠어 <span class="h">[i給搜]</span>, 나는 깨달았어 <span class="h">[給大拉搜]</span><br>
결국 우린 마주한다는 걸 안 순간<br>
달려갈게, 오늘도<br>
</p>
<p>그래, 정답은 항상 <u>너였어 <span class="h">no優搜</span></u><br>
망가진 꿈, 너로 인해 난 되찾았어 <span class="h">[推洽假搜]</span><br>
이젠 알아, 심장이 뛰는 이유<br>
벅차오름은 다시 또 한걸음 가까워져 <span class="h">[yeah]</span><br>
</p>
<p>내가 너에게 맞닿을 이 순간<br>
너의 흔적을 지나치고 있어<br>
이젠 풀 수 있는 수수께끼인 걸까?<br>
그런 기분이 들 때 <span class="h">[洽! 價! 卡! 給!]</span><br>
확신해, 내가 찾는 너의 <span class="h">[P! LA! 易! VE!]</span><br>
(Hah)<br>
</p>
<p>세계로 오늘을 달려왔어<br>
포기할 수 없던 시간 속에<br>
숨바꼭질은 나의 선물인걸<br>
</p>
<p>이젠 알겠어 <span class="h">[i給搜]</span>, 나는 깨달았어 <span class="h">[給大拉搜]</span><br>
의미 없던 하루는 없다는 걸 안 순간<br>
맘이 차올라서<br>
</p>
<p>소리칠게 <u>힘껏 <span class="h">[he購]</span></u><br>
불러볼게 <u>힘껏 <span class="h">[he購]</span></u><br>
들린다면 <u>지금 <span class="h">七根</span></u><br>
그곳에서 웃어줘<br>
</p>
<p>이젠 알겠어 <span class="h">[i給搜]</span>, 나는 깨달았어 <span class="h">[給大拉搜]</span><br>
그토록 바랬던 길을 만난 순간<br>
놓치지 않을게<br>
</p>`
    },
    {
        id: "BBUU!",
        title: "BBUU!",
        category: "PLAVE",
        youtubeId: "ma3evv4vnW0",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-bbuu",
        videoRefUrl: "https://www.youtube.com/watch?v=Cv79-1uxAHs",
        lyricsHTML: `<p><span class="h">[耶諾! 班恩哈! P LA 易 VE! 撒浪嘿!]</span><br>
                우주 속에서 널 마주한 건<br>
'Cause it's only you<br>
<u>말해 뭐 해? <span class="h">媽勒 摸 嘿?</span></u> Yeah<br>
</p>
<p><span class="h">One</span> 너를 사랑하는 이유<br>
<span class="h">Two</span> 아무 이유 없는 기분<br>
<span class="h">Three to the four</span><br>
그냥 five, six, seven (<span class="h">Bbuu</span>)<br>
<span class="h">One</span> 너를 사랑하는 이유<br>
<span class="h">Two</span> 아무 이유 없는 기분<br>
<span class="h">Three to the four</span><br>
그냥 five, six, seven (<span class="h">Bbuu</span>)<br>
</p>
<p>지금부터 천천히 널 설명할게<br>
Oh 정리 안 된 머릿속은 도대체 왜<br>
어지러워 (<span class="h">oh</span>) 핑핑 <u>돌아 <span class="h">都拉</span></u><br>
온종일 비상사태<br>
네 앞에 서면 <u>찌릿찌릿 <span class="h">七里七里</span></u> 백만볼트<br>
</p>
<p><span class="h">One</span> 너를 사랑하는 이유<br>
<span class="h">Two</span> 아무 이유 없는 기분<br>
<span class="h">Three to the four</span><br>
그냥 five, six, seven (<span class="h">bbuu</span>)<br>
<span class="h">One</span> 너를 사랑하는 이유<br>
<span class="h">Two</span> 아무 이유 없는 기분<br>
<span class="h">Three to the four</span><br>
그냥 five, six, seven (<span class="h">bbuu</span>)<br>
</p>
<p>우주 속에서 널 마주한 건<br>
'Cause it's only you<br>
<u>말해 뭐 해? <span class="h">媽勒 摸 嘿?</span></u> Yeah<br>
</p>
<p>오늘 밤 널 데리러 갈게 <span class="h">[嗯]</span> yeah<br>
나와주기만 해 babe<br>
드림로 433 근처야 10분 뒤에 만나요<br>
준비돼 있지 완벽한 플리 온습도까지 <span class="h">[哇]</span><br>
우연인지 운명인지 <span class="h">everything's so good</span><br>
</p>
<p><span class="h">One</span> 너를 사랑하는 이유<br>
<span class="h">Two</span> 아무 이유 없는 기분<br>
<span class="h">Three to the four</span><br>
그냥 five, six, seven (<span class="h">bbuu</span>)<br>
<span class="h">One</span> 너를 사랑하는 이유<br>
<span class="h">Two</span> 아무 이유 없는 기분<br>
<span class="h">Three to the four</span><br>
그냥 five, six, seven (<span class="h">bbuu</span>)<br>
</p>
<p>I ain't done love before<br>
But she says<br>
I can tell this time we could be the true love<br>
You ain't done love in this world before? (before, before)<br>
<span class="h">[P! LA! 易! VE!]</span> (<span class="h">Bbuu</span>)<br>
</p>
<p><span class="h">One</span> 두근두근 대는 기분<br>
<span class="h">Two</span> 増え続けるミス<br>
<span class="h">Three to the four</span><br>
그냥 five, six, seven (<span class="h">bbuu</span>)<br>
<span class="h">One</span>, every day I wanna see you<br>
<span class="h">Two</span> 也许你是我的礼物<br>
<span class="h">Three to the four</span><br>
그냥 five, six, seven (<span class="h">bbuu</span>)<br>
</p>
<p><u>일, 이, 삼, 사, 오, 육 <span class="h">一, 李, 桑, 撒, 歐, 六</span></u><br>
<u>셀 수 없어 다 <span class="h">say 蘇 喔搜 他</span></u> ayy<br>
<u>너를 사랑하는 이유를 말이야<span class="h">noㄌ 撒郎哈嫩 伊u勒 瑪ㄌㄧㄚ</span></u> ayy<br>
<u>일, 이, 삼, 사, 오, 육 <span class="h">一, 李, 桑, 撒, 歐, 六</span></u><br>
<u>세어만 보다 <span class="h">say喔滿 撥打</span></u> yeah<br>
<u>깜빡 스르륵 잠이 들었다 <span class="h">乾八 ㄙㄌㄌ 江咪 ㄉ囉打</span></u> (아이쿠)<br>
</p>`
    },
    {
        id: "BornSavage",
        title: "Born Savage",
        category: "PLAVE",
        youtubeId: "fVH5atHZtys",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/plave-born-savage-1",
        videoRefUrl: "https://www.youtube.com/watch?v=Kh-BFvu0RR0",
        lyricsHTML: `<p>Whoa Whoa Whoa Whoa (aw)<br>
<span class="h">[Nam-Yejun! Han-Noah! Chae-Bamby! Do-Eunho! Yu-Hamin! P LA 易 VE! Born! Sa! va! ge!]</span><br>
</p>
<p>제법 멀리 (ooh) 와 버렸지 (ooh)<br>
Never look back 왜 여긴 대책도 없이 (hey)<br>
끝이 중요한 게 아냐 이건 나의 <span class="h">destiny</span> (nah)<br>
Louder than the rain<br>
</p>
<p>We run beyond the darkness, ooh 잿더미의 blue<br>
I'm betting it all on me, roll the dice <u>두 배로 <span class="h">督 杯漏</span></u><br>
One <span class="h">touch</span>, one <span class="h">rush</span>, <span class="h">headed for the bloom</span><br>
Unlock the power<br>
</p>
<p>Ooh 선택을 받은 운명을 거슬러<br>
Energetic, keep it manic<br>
I'm never falling down <span class="h">[down]</span><br>
Ooh 다친대도 내 전부를 걸겠어<br>
Energetic, keep it manic<br>
I'm never falling down <span class="h">[down]</span><br>
</p>
<p>(Ooh) 혼돈에 비친<br>
(Ooh) 그 눈을 감아<br>
세상의 답을 외친 다음<br>
<span class="h">Born savage</span><br>
(Ooh) 갈망하는가<br>
(Ooh) 두 눈을 떠봐<br>
세상의 답을 외친 다음<br>
<span class="h">Born savage</span><br>
</p>
<p>긴 밤을 걸어 매일<br>
암흑 속에 그 상처들을 <u>피워 <span class="h">劈我</span></u><br>
긴 밤을 지나 매일<br>
피워냈던 그 상처들을 <u>깨워 <span class="h">給我</span></u><br>
이미 다다랐지 make it rain, thumbs up 의미 없는 그 원성<br>
지껄일수록 확실해지는 vision and 목표<br>
Hold on tight 흔들린 적 없지 높은 절벽<br>
쉽지 않을 길을 걸어 man, I'm breakin' the wall<br>
</p>
<p>We run beyond the darkness, ooh 잿더미의 blue<br>
I'm betting it all on me, roll thе dice <u>두 배로 <span class="h">督 杯漏</span></u><br>
One <span class="h">touch</span>, one <span class="h">rush</span>, <span class="h">headed for the bloom</span><br>
<span class="h">[P! LA! 易! VE!]</span><br>
Unlock the power<br>
</p>
<p>Ooh 선택을 받은 운명을 거슬러<br>
Energetic, keep it manic<br>
I'm never falling down <span class="h">[down]</span><br>
Ooh 다친대도 내 전부를 걸겠어<br>
Energetic, keep it manic<br>
I'm never falling down <span class="h">[down]</span><br>
</p>
<p>Yeah, we goin' straight to the top <span class="h">[top]</span><br>
기회야 no time to hesitate<br>
Burn it up, keep up the fire <span class="h">[fire]</span><br>
본능이 날 깨워 savage<br>
Yeah, we goin' straight to the top (<span class="h">top</span>)<br>
기회야 no time to hesitate (hesitate)<br>
부정할 수 없지 넌 because I'm true<br>
I was born savage (unlock the power)<br>
</p>
<p>Ooh 선택을 받은 운명을 거슬러<br>
Energetic, keep it manic<br>
I'm never falling down <span class="h">[down]</span><br>
Ooh 다친대도 내 전부를 걸겠어<br>
Energetic, keep it manic<br>
I'm never falling down <span class="h">[down]</span><br>
</p> 
<p>(<span class="h">Ooh</span>) 혼돈에 비친<br>
(<span class="h">Ooh</span>) 그 눈을 감아<br>
세상의 답을 외친 다음<br>
<span class="h">Born savage</span><br>
(<span class="h">Ooh</span>) 갈망하는가<br>
(<span class="h">Ooh</span>) 두 눈을 떠봐<br>
세상의 답을 외친 다음<br>
<span class="h">Born savage</span><br>
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