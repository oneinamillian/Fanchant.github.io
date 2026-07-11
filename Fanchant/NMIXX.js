// 1. 歌曲資料庫 (你可以自由在這邊增加新歌)
const songDatabase = [
    {
        id: "O.O",
        title: "O.O",
        category: "NMIXX",
        youtubeId: "3GWscde8rM8", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-o-o",
        videoRefUrl: "https://www.youtube.com/watch?v=uPskv-6i6dg&t=3s",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! NMIXX! Set! Go!]</span><br>
Whook, whook<br>
Ayy, look at that moving eye, eyes<br>
<u>봤니? <span class="h">ㄅㄨㄚ尼</span></u>  <mark><span class="h">[N! MIX! X!]</span>Shoog, shoog, shoog</mark><br>
Hook 들어와 내게 좀 더<br>
<u>좋아 <span class="h">揪哇</span></u>  <span class="h">zoom, zoom, good</span><br>
Get out 겁쟁인 xx<br>
충격과 공포일걸 oops! <span class="h">[oops]</span><br>
Gon' poppin' it, poppin' it, poppin' it now<br>
궁금해 미치겠지 open that, boom <span class="h">[boom]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Check out, popcorn and zero Coke<br>
빠진 건 없지? <span class="h">come in</span><br>
팔짱을 끼고 sit down<br>
곧 터지는 탄성<br>
아직까진 teaser<br>
Hoot, 기대해 <span class="h">coming soon</span><br>
벌써 놀라지마 calm <span class="h">down, down, down</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Dan-da-ra dan-da-ra dan<br>
<u>지금 시작해 <span class="h">機跟 西價K</span></u> <br>
Dan-da-ra dan-da-ra dan<br>
<span class="h">Sorry, no way out</span><br>
기다려봐 잠깐 oh, tension을 더 높여<br>
더 높여 leggo 두 눈이 커져 like <span class="h">oh, oh</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Watch out, baila, baila, baila<br>
Watch it, how nice, how nice (<span class="h">oh, oh</span>)<br>
Watch out, baila, baila, baila<br>
Watch it, how nice, how nice (<span class="h">oh, oh</span>)<br>
Come on 한 방울 떨어뜨릴 때야 eye drops<br>
Watch out, baila, baila, baila<br>
Watch it, how nice, how nice<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">NMIXX</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
영과 일의 미로가 보여? (가 보여)<br>
보고 있지만 말고 follow<br>
'Cause everything is fake, but I ain't fake<br>
진짜 시작은 지금부터<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(Bam, bam, bam) see <span class="h">more, more, more</span><br>
(Bam, bam, bam) scream, <span class="h">oh, oh, oh</span><br>
현실같은 dream은 이제 지겹지 않니?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
잠든 너를 <span class="h">tap-tap</span> 깨워 <span class="h">knock-knock</span><br>
어서 button을 더 <span class="h">tap-tap</span> 눌러<u>봐봐 <span class="h">ㄅㄨㄚㄅㄨㄚ</span></u> <br>
Follow, follow me<br>
Never let you down, be with me<br>
Let me be your <span class="h">super hero</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ayy, zip zap zoom, come on, come on<br>
날 꼭 <u>잡아 잡아 <span class="h">家八 家八</span></u> just here we go<br>
No 무서워할 거 없어 <span class="h">never give up</span><br>
Baby 너와 나를 믿어<br>
Zero plus, zero equals infinity, oh, 재밌지 않니? <span class="h">[Yes]</span><br>
Ayy, zip zap zoom, come on, come on<br>
Baby, you are ma <span class="h">super hero</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
너무 늦기 전에 try<br>
Baby, what you waitin' for?<br>
'Cause now is the time<br>
And finally <span class="h">we'll win</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Watch out, baila, baila, baila<br>
Watch it, how nice, how nice (<span class="h">oh, oh</span>)<br>
Watch out, baila, baila, baila<br>
Watch it, how nice, how nice (<span class="h">oh, oh</span>)<br>
Come on 눈을 깜빡일 시간이야 babe<br>
Watch out, baila, baila, baila<br>
Watch it, how nice, how nice (<span class="h">like oh, oh</span>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
어때, 어때, 어때 (oh, oh)<br>
Whoa-ooh-whoa (oh, oh)<br>
<u>좋아 <span class="h">揪哇</span></u> (ayy, yeah) <u>좋아 <span class="h">揪哇</span></u>(ayy, yeah) <u>좋아 <span class="h">揪哇</span></u> (ayy, yeah) <span class="h">[oh oh]</span><br>
Oh my 떨어진 멘탈은 챙겨가 babe<br>
Watch out, baila, baila, baila<br>
어서 follow, follow<br>
<span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! NMIXX! oh! oh!]</span><br>
            </p>
        </div>`
    },
    {
        id: "TANK",
        title: "占 TANK",
        category: "NMIXX",
        youtubeId: "lSqWEhrSZAM", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-tank",
        videoRefUrl: "https://www.youtube.com/watch?v=kwyoDw8NSQ4",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! NMIXX! Set! Go!]</span><br>
Who dat?<br>
이제야 벗겨지는 veil<br>
Thanks for waitin'<br>
Hi, there<br>
나를 보면 모두가 다 panic<br>
어때, 예상 외니?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">Hey, hey, hey</span>) 시작합니다 <span class="h">[NMIXX!]</span><br>
(Hey) 처음엔 따끔할 겁니다<br>
Yeah 그런 눈동자 (hey, hey, hey)<br>
(Hey) 나쁜 건 들키지 맙시다<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
어디든지 사정거리 안<br>
<span class="h">Like a tank, I'ma</span><br>
빨라지는 심장소리 bomb<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
망설이지 않는 play<br>
<span class="h">Like a tank, I'ma</span><br>
난 우회하지 않을래<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
No thanks 좀 삐뚤다고 자를 대니<br>
Think about it<br>
넌 왜 그 속마음을 들켜 이미 freeze<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">Hey, hey, hey</span>) 지나갑니다 <span class="h">[NMIXX!]</span><br>
(Hey) 앞에서 막지는 맙시다<br>
Yeah 뻔한 거짓말 (hey, hey, hey)<br>
(Hey) 멋대로 정하지 맙시다<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
겁이 뭐야 돌격하는 type<br>
<span class="h">Like a tank, I'ma</span><br>
끝이 없는 황야를 갈라<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
밀려나지 않는 play<br>
<span class="h">Like a tank, I'ma</span><br>
난 후퇴하지 않을래<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
You can see it 피어올라<br>
꿈꿔왔던 mirage<br>
비를 내려 이 사막에<br>
원하는 대로 상상한 대로<br>
Baby, tell me every wish, wish, wish, wish, wish<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span><br>
Freaky fresh fresh I'm so <span class="h">[fresh]</span> freaky<br>
<span class="h">Like a tank, I'ma</span><br>
<span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! NMIXX! TAN! K!]</span><br>
            </p>
        </div>`
    },
    {
        id: "DICE",
        title: "DICE",
        category: "NMIXX",
        youtubeId: "p1bjnyDqI9k", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-dice",
        videoRefUrl: "https://www.youtube.com/watch?v=Ap3_IYqlcOQs",
        lyricsHTML: `<div class="lyric-item">
            <p>
(Don't be afraid, babe)<br>
(Ah-ha-ha-ha-ha-ha)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
번쩍 뜬 눈을 깜빡, <span class="h">[N! MIXX! 斯!]</span> 머린 핑핑핑 돌아<br>
상상도 못한 drama <span class="h">[DI! CE!]</span> 첫 scene을 찍어볼 time (go, go)<br>
이제 곧 시작될 challenge 아마 쉽지는 않겠지<br>
긴장해 팽팽하게 babe<br>
<span class="h">Vamos, amigos</span><br>
            </p>
        </div>

        <div class="lyric-item">
            <p>
Yeah-eh-eh-eh-eh (I wanna go) 무한히 펼쳐진 universe<br>
사-아아-이 (I wanna know) 끌리는 card를 뒤집어<br>
고민은 nope, 어서 pick it, 1부터 N까지 <u>선택해 봐 <span class="h">森鐵嘿 ㄅㄨㄚ</span></u> <br>
O.O 기대돼 나 now, now open it up (what a surprise)<br>
            </p>
        </div>

        <div class="lyric-item">
            <p>
저 하늘 위를 <span class="h">surfin'</span> 이 바닷속을 <span class="h">flying</span><br>
모든 걸 펼쳐도 좋아 are you ready?<br>
All-in now 시작해 봐<br>
과감하지만 태연하게 start it<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Le-le-let's roll the <span class="h">dice, yeah</span> 판도를 뒤집어 완전히<br>
던져봐 <span class="h">nice shot</span> 운명은 이 손안에 babe<br>
눈앞에 열린 세상의 (yeah) 우리를 기대해<br>
So tell me what you want, where you wanna go<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">NMIXX, change up</span> (let's go)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Big wave, big wave 피하지 마 (hey!)<br>
Break it up, break it up 맞서 어서<br>
헤엄쳐 더 높은 파도 위로<br>
좀 더 유연하게 트러블들을 드리블해 and pass it<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Perfect ten 보다 높은 number (<span class="h">number [skrr]</span>)<br>
그 이상을 향해 jump up <span class="h">[jump up]</span><br>
현실 같은 dream은 이젠 빠져나와<br>
깨어나도 깨어나, 더 수면 위를 날아 fly high<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(Oh-oh-oh, oh-oh-oh, oh-oh-oh)<br>
(Oh-oh-oh, oh-oh-oh, oh)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
그 누구도 가지 않은 미지의 Camino<br>
So exciting, I'm so excited<br>
이 반전의 반전의 반전을 기대해 babe<br>
Would you go with me?<br>
Let's roll the <span class="h">dice!</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
저 구름 속을 <span class="h">divin'</span> 이 파도 위를 <span class="h">ridin'</span><br>
말이 좀 안 되면 어때 no more waiting<br>
All-in now 다 걸어봐<br>
고민할 필요도 없어 go get it<br>
Put'em up<br>
<span class="h">[Lily! OhHaeWon! SeolYoonAh! BaeJinSol! KimJiWoo! JangKyuJin! DI! CE! We! NMIXX!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Don't fall asleep no more<br>
You should come on board<br>
서둘러 시간이 없어 babe<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Let's roll the <span class="h">dice, yeah</span> 함께 만들어가는 score<br>
좋았어 <span class="h">nice shot</span> 따라잡을 수 없는 number<br>
상상을 뛰어넘을 세계 would you go with me?<br>
Let's roll the dice<br>
            </p>
        </div>`
    },
    {
        id: "YoungDumbStupid",
        title: "Young, Dumb, Stupid",
        category: "NMIXX",
        youtubeId: "5eh6Vj_vVg4", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-young-dumb-stupid",
        videoRefUrl: "https://www.youtube.com/watch?v=8xZcVbi6HGw",
        lyricsHTML: `<div class="lyric-item">
            <p>
                <span class="h">[Young! Dumb! Stu! pid! N! MIXX! 斯!]</span><br>
Turn it, turn it up<br>
Bang! Can you hear that right now? <span class="h">[right now]</span><br>
심장 소린 터져 get loud <span class="h">[get loud]</span><br>
So freak 좀 거칠테니 <span class="h">watch out</span><br>
두 발 앞의 한계선을 밟아 <span class="h">wow</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
한 장 넘긴 page 그어진 칸은 없어 (<u>맘대로 채워가 <span class="h">忙ㄉㄟ樓 切窩嘎</span></u>)<br>
낯선 길 앞에 두려움 따윈 거둬 (<u>맞서보자고 <span class="h">媽搜bo價購</span></u>)<br>
우리가 새길 story (na-na)<br>
한 컷 한 컷 찍어 다 post it<br>
상상해 봐<br>
우리가 만들 new wave, <span class="h">sway, yeah, yeah</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
어딘가 서투른 지금이 맘에 들어<br>
자유롭게 <span class="h">[N! MIXX! 斯!]</span><br>
Making my way 제멋대로 one, two<br>
장르가 없는 우리의 movie <span class="h">[movie]</span><br>
단 한순간도 뻔하지 않아<br>
첫 등장 장면부터 climax (<span class="h">oops</span>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Young, dumb, <span class="h">stupid</span><br>
Young, dumb, <span class="h">stupid</span><br>
But who cares? But who cares? (Young, dumb, stupid)<br>
우린 겁이 없어 do whatever we want<br>
<span class="h">Ding-dang-dong, ding-dang-dong</span> (우린 겁이 없어 do whatever we want)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
몰라도 난 자신 있어 feel so cool<br>
더 멀리 가보는 거야<br>
<span class="h">Ding-dang-dong, ding-dang-dong</span><br>
            </p>
        </div>
        
        <div class="lyric-item">
            <p>
Do whatever we want, <span class="h">NMIXX!</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Young and dumb 못해낼 거라고<br>
떠들어 blah blah 준비해둬 popcorn<br>
매일 <span class="h">one, two, three</span> 쌓이는 episode<br>
전부 <u>펼칠게 <span class="h">pure氣ㄍㄟˋ</span></u> 짜릿한 우리 flow<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Brand new 매 순간 처음인 듯<br>
Fresh 한 ma attitude<br>
날 얕본 시선 앞에 <span class="h">yeah, yeah-yeah</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
어딘가 서투른 지금이 맘에 들어<br>
자유롭게 <span class="h">[Young! and! Dumb!]</span><br>
Making my way 제멋대로 one, two<br>
이 세상 앞에 더 크게 say cheese <span class="h">[say cheese]</span><br>
우리의 색은 바래지 않아<br>
Three-six-five days 따르는 flashlight (<span class="h">oops</span>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Young, dumb, <span class="h">stupid</span><br>
Young, dumb, <span class="h">stupid</span><br>
But who cares? But who cares? (Young, dumb, stupid)<br>
우린 겁이 없어 do whatever we want<br>
<span class="h">Ding-dang-dong, ding-dang-dong</span> (우린 겁이 없어 do whatever we want)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
몰라도 난 자신 있어 feel so cool<br>
더 멀리 가보는 거야<br>
<span class="h">Ding-dang-dong, ding-dang-dong</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
두드려봐 knock-knock 문을 열어봐<br>
가라앉은 맘을 깨워<br>
비켜 beep beep 과감하게 가<br>
어때 속도는 <span class="h">mach mach</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
얼마든지 we can make it<br>
넘어지면 또 일어나<br>
무서울 게 없어 우린<br>
가장 큰 꿈을 꾸는 young and dumb (young and dumb, oh-whoa)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Young, dumb, <span class="h">stupid</span><br>
Young, dumb, <span class="h">stupid</span><br>
But who cares? But who cares? (Young, dumb, stupid)<br>
우린 겁이 없어 do whatever we want<br>
<span class="h">Ding-dang-dong, ding-dang-dong</span> (우린 겁이 없어 do whatever we want)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
몰라도 난 자신 있어 feel so cool (yeah, yeah)<br>
더 멀리 가보는 거야<br>
<span class="h">Ding-dang-dong, ding-dang-dong</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Wait, I know what you want<br>
더 늦기 전에 너도 들어와<br>
            </p>
        </div>`
    },
    {
        id: "LoveMeLikeThis",
        title: "Love Me Like This",
        category: "NMIXX",
        youtubeId: "EDnwWcFpObo", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-love-me-like-this",
        videoRefUrl: "https://www.youtube.com/watch?v=mGMcSx6QbxQ",
        lyricsHTML: `<div class="lyric-item">
            <p>
Love me like this, love me like that<br>
Love me like this and I love you right back<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
뛰는 심장 소릴 따라가<br>
커지는 울림 oh my, oh my god<br>
Oh, yeah <span class="h">[N! MIX! X!]</span><br>
let me hear you say, yeah <span class="h">[大辣尬]</span> (uh-huh-huh)<br>
숨겨놨던 맘속 deep blue sea<br>
꺼내 펼쳐봐 느껴지는 feels<br>
Oh, yeah <span class="h">[N! MIX! X!]</span><br>
don't run away, yeah <span class="h">[pure邱ㄅㄨㄚ]</span> (now, now)<br>
철로 만든 heart 예쁜 꽃을 피워봐<br>
사막 속에 비를 내려봐 (uh, uh)<br>
If you wanna be my lover<br>
닫힌 맘을 다 깨뜨려<br>
If you wanna, wanna<br>
<span class="h">Wanna, wanna, wanna</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Show me your way<br>
어느 틈에 자라난 이끌림<br>
점을 이어 oh, baby<br>
맘속 <span class="h">fireworks</span> (woo) 외쳐 <span class="h">higher hopes</span><br>
눈을 맞춰 it's so easy, you just gotta<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this and<br>
I love you right back (right back)<br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this and I love you right back<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh 큰 파도가 시작될 걸 (ride now)<br>
Buckle up, ready, set, go (<span class="h">let's go</span>)<br>
이 감정의 폭을 explore-oh-oh-whoa<br>
조금 더 거침없이 빠져 이 fever <span class="h">[fever]</span><br>
그 순간 가슴속에 넘쳐난 flower <span class="h">[flower]</span><br>
이미 움트고 있던 숨<br>
고장 난 네 맘속의 bloom, oh-oh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Show me your way<br>
어느 틈에 연결된 piece of love<br>
선을 따라가 baby<br>
번진 <span class="h">fireworks</span> 펼친 <span class="h">higher hopes</span><br>
손을 뻗어 it's so easy, you just gotta<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this and<br>
I love you right back (and I love you right back)<br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this and I love you right back (yeah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Can you see the paradise? (ooh-ooh)<br>
감각들을 깨워봐<br>
끝내 찾은 missing <span class="h">piece</span><br>
심장 속을 밝힌 <span class="h">peace</span><br>
나를 향해 켜진 love<br>
결국 너를 향할 love<br>
너와 내 꿈이 이어져 커져갈 time<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this and<br>
I love you right back (and I love you right back)<br>
<mark><span class="h">[Lily! OhHaeWon! SeolYoonAh! BaeJinSol! KimJiWoo! JangKyuJin! N! MIX! X!]</span><br>
Love me like this (yo) love me like that (ayy)<br>
Love me like this (oh) love me like that (oh)<br>
Love me like this, love me like that (love me)<br>
Love me like this and<br>
I love you right back (love me, and I love you right back)</mark><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this <span class="h">[this]</span>, love me like that <span class="h">[that]</span><br>
Love me like this and I love you right back<br>
            </p>
        </div>`
    },
    {
        id: "RollerCoaster",
        title: "Roller Coaster",
        category: "NMIXX",
        youtubeId: "fqBAzCH4-9g", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-roller-coaster",
        videoRefUrl: "https://www.youtube.com/watch?v=icCkjsxvueo",
        lyricsHTML: `<div class="lyric-item">
            <p>
Mm-hm-hm-hm-hm, hm-hm-hm<br>
Mm-hm-hm-hm-hm<br>
So incredible<br>
<span class="h">[Lily! OhHaeWon! SeolYoonAh! BaeJinSol! KimJiWoo! JangKyuJin! Roller! Coaster!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Can't you see, <span class="h">can't you see</span>?<br>
여기 모여봐<br>
Chemistry, <span class="h">chemistry</span><br>
반응하잖니<br>
Chasin' me, <span class="h">chasin' me</span><br>
사람들 속에 우린 호기심을 느껴<br>
그래, 더 가까이<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
무엇을 상상하든지 바짝 긴장해야 돼<br>
좋아, 좋아 <span class="h">[N! MIX! X!]</span><br>
어디로 튈지 모르는 나의 달뜬 마음을<br>
You should try (you should try) 잡아봐<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Rabbit and <span class="h">Alice, Alice</span><br>
Romeo and <span class="h">Juliet, Juliet</span><br>
Beast and <span class="h">Beauty, Beauty</span><br>
그래, 여긴 너의 자리<br>
곧 심장이 터질 듯, 멎어버릴 듯<br>
벅찬 이 느낌 oh<br>
한 치 앞도 모르지 shh<br>
<span class="h">[Roller! Coaster!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Shooting star, roller coaster <span class="h">ri-ri-ride</span><br>
우린 바람을 갈라 so incredible<br>
달려 make me feel so high, <span class="h">na-na-na</span><br>
지금 기분이 어때? How incredible<br>
Let's ride 꽉 잡아<br>
Going down, going up with you<br>
가장 높이 올라 stop!<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh 무수한 별종과<br>
그 중의 별 하나<br>
Come here, my dear <span class="h">[N! MIX! X!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Shooting star, roller coaster <span class="h">ri-ri-ride</span><br>
우린 바람을 갈라 so incredible<br>
달려 make me feel so high, <span class="h">na-na-na</span><br>
지금 기분이 어때? How incredible<br>
Let's ride 꽉 잡아<br>
Going down, going up with you<br>
가장 높이 올라 stop!<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
처음 같은 느낌, 적응이 잘 안돼<br>
Black hole처럼 빠져들어 가<br>
특별한 오늘의 만남을 기억해<br>
Don't forget<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Shooting star, roller coaster <span class="h">ri-ri-ride</span><br>
우린 바람을 갈라 so incredible (so, so, so)<br>
달려 make me feel so high, <span class="h">na-na-na</span><br>
지금 기분이 어때? how incredible <span class="h">[Crazy~ hoo]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
온몸이 다 젖은 채로 난 번쩍 눈을 떠<br>
환상적인 순간에 사로잡혀서<br>
소름이 막 돋은 채로 거칠게 숨을 쉬어<br>
혜성처럼 밝고 선명했던 꿈<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Shooting star, roller coaster ri-ri-ride<br>
우린 바람을 갈라 so incredible<br>
            </p>
        </div>`
    },
    {
        id: "PartyOClock",
        title: "Party O'Clock",
        category: "NMIXX",
        youtubeId: "Rd2wppggYxo", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-party-oclock",
        videoRefUrl: "https://www.youtube.com/watch?v=3xquvi_hGuY",
        lyricsHTML: `<div class="lyric-item">
            <p>
It's party time<br>
별이 깨어나는 <u>까만 여름밤 <span class="h">嘎滿 幽冷幫</span></u> <br>
It's party time<br>
너의 잠을 훔쳐 떠나 <span class="h">we go far</span><br>
한 여름밤 숲속의 이야기를 <u>만들어봐 <span class="h">蠻ㄉ樓ㄅㄨㄚ</span></u> <br>
Right here, just you and I <span class="h">[N! MIX! X!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
터뜨려 fireworks<br>
신비한 일들이 일어날 거야<br>
(Hey, buckle up, get ready, <span class="h">get ready to dance</span>)<br>
눈을 맞춰<br>
저 달이 반쯤 잠이 든 지금 이 순간<br>
(Hey, buckle up, get ready, <span class="h">get ready to dance</span>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
이 숲속을 떠도는 hitchhiker<br>
데려갈게, 니가 원하는 location<br>
(<span class="h">Hey</span>) 여기 이 순간에<br>
(<span class="h">Hey</span>) the world just stop spinning<br>
(<span class="h">Hey</span>) 끝이 없는 밤<br>
<span class="h">Mixx it up, go</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come on over right now<br>
Come on over right now<br>
'Cause party is not a party without you<br>
Hurry up, join the party<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Waiting for you right now<br>
Waiting for you right now<br>
마법에 걸린 밤 꿈을 꿔 우린<br>
You know that<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Beep-beep</span>, jingling, jingling<br>
<span class="h">Keep-keep</span> mingling, mingling<br>
You are my answer tonight (don't stop)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Beep-beep</span>, jingling, jingling<br>
<span class="h">Keep-keep</span> mingling, mingling<br>
I'll be your answer tonight (don't stop)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
하나둘 모여들어 이건 party <span class="h">invitation</span><br>
머리 위로 흩날리는 <span class="h">confetti</span><br>
Get ready, <span class="h">celebration</span><br>
시작해 parade 우리의<br>
Walking down dream avenue<br>
꽃들의 환호 소리에 feeling so untrue<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
이 숲속에 자, 별가루를 뿌려<br>
더 가볼게, 닿지 못할 달의 station<br>
(<span class="h">Hey</span>) show your face id<br>
(<span class="h">Hey</span>) eye to eye with me<br>
(<span class="h">Hey</span>) it's unlocked, baby<br>
<span class="h">Swipe up, let's go</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come on over right now<br>
Come on over right now<br>
'Cause party is not a party without you<br>
Hurry up, join the party<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Waiting for you right now<br>
Waiting for you right now<br>
마법에 걸린 밤 꿈을 꿔 우린<br>
You know that<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Beep-beep</span>, jingling, jingling<br>
<span class="h">Keep-keep</span> mingling, mingling<br>
You are my answer tonight (don't stop)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Beep-beep</span>, jingling, jingling<br>
<span class="h">Keep-keep</span> mingling, mingling<br>
I'll be your answer tonight<br>
(I'll be your answer tonight) <span class="h">Nmixx</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
It's party time<br>
별이 깨어나는 <u>까만 여름밤 <span class="h">嘎滿 幽冷幫</span></u>  (hey, hey)<br>
It's party time<br>
너의 잠을 훔쳐 떠나 <span class="h">we go far</span> (that's right)<br>
한 여름밤 숲속의 이야기를 <u>만들어봐 <span class="h">蠻ㄉ樓ㄅㄨㄚ</span></u> (hey, hey)<br>
Right here, just you and I<br>
'Cause with you, it's a party<br>
<span class="h">[Lily! OhHaeWon! SeolYoonAh! BaeJinSol! KimJiWoo! JangKyuJin! N! MIX! X!!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
It's a party (<span class="h">party</span>), every time when you're next to me <mark>(<span class="h">party</span>)<br>
So now</mark> it's a party tonight (come on over)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come on over right now<br>
Come on over right now<br>
'Cause party is not a party without you (it's not a party without you)<br>
Hurry up, join the party<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Waiting for you right now<br>
Waiting for you right now<br>
마법에 걸린 밤 꿈을 꿔 우린<br>
(It's not a party) you know that<br>
            </p>
        </div>`
    },
    {
        id: "HOME",
        title: "HOME",
        category: "NMIXX",
        youtubeId: "WY9DAofy0QI", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-home",
        videoRefUrl: "https://www.youtube.com/watch?v=WValTtJVXAM",
        lyricsHTML: `<div class="lyric-item">
            <p>
끝을 알리는 sirens 잠시 멈춰 (yeah)<br>
보다 더 큰 new waves, need to ride, yeah<br>
Yeah 다 던져두고 떠날 때야 나의 trip<br>
마침표가 아닌 시작점을 찍고 start (yeah)<br>
지금부턴 좌표를 좀 다르게<br>
찍어볼 준비됐어 done            <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh, ah, my, my, oh, ah, my, my, my<br>
더 푸른 세상 우릴 불러 look, look<br>
Oh, ah, my, my<br>
일어나 봐 no time to chill<br>
구석에 치워버려 pillow (ya)<br>
꾸벅 졸 틈도 없을지 몰라            <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Don't wanna go home (<span class="h">don't wanna go home</span>)<br>
마주할래 big world (<u>마주할래 <span class="h">媽啾哈壘</span></u> <span class="h">big world</span>)<br>
넘어버려 높은 wall 주저 없이 let's go<br>
어디든 갈 수 없는데 nowhere, go (<span class="h">go</span>)<br>
바로 지금인 걸 (<u>바로 지금인 걸 <span class="h">趴樓 起跟敏 口</span></u>)<br>
We just wanna go 두 발이 닿는 곳<br>
Anywhere now we go, I don't wanna go home            <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We do what we want and we never stop<br>
Oh no, what? (stop) 정해진 정답은 없어 (yeah)<br>
That's how we do, MIXX!            <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh, ah, my, my<br>
더 색다른 곳 찾아가 move, move, move<br>
Oh, ah, my, my<br>
재미없어 똑같은 길 점선을 그려 지도 위로 (ya)<br>
멋진 여행이 될 걸 잘 알아            <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Don't wanna go home (<span class="h">don't wanna go home</span>)<br>
마주할래 big world (<u>마주할래 <span class="h">媽啾哈壘</span></u> <span class="h">big world</span>)<br>
넘어버려 높은 wall 주저 없이 let's go<br>
어디든 갈 수 없는데 nowhere, go (<span class="h">go</span>)<br>
바로 지금인 걸 (<u>바로 지금인 걸 <span class="h">趴樓 起跟敏 口</span></u>)<br>
We just wanna go 두 발이 닿는 곳<br>
Anywhere now we go, I don't wanna go home            <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
조금씩 그려왔었던<br>
세상을 펼쳐나가<br>
멈추지 않고 달려가 ayy, yeah<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Don't wanna go home (<span class="h">don't wanna go home</span>)<br>
이 바람을 빌려 (<u>이 바람을 빌려 <span class="h">一 趴拉敏 逼樓</span></u> )<br>
닿지 못할 곳 없어 저 벽을 넘어서<br>
새로운 낯선 세상을 향해 go (<span class="h">go</span>)<br>
속도를 더 높여 (<u>속도를 더 높여 <span class="h">搜度魯 投 努ㄆㄧㄡ</span></u>) whoa<br>
멈출 수 없을걸 꿈꿔온 모든 곳<br>
Everywhere, now we go<br>
I don't wanna go home<br>
            </p>
        </div>`
    },
    {
        id: "Soñar(Breaker)",
        title: "Soñar (Breaker)",
        category: "NMIXX",
        youtubeId: "MMtRxcy8PX0", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-breaker",
        videoRefUrl: "https://www.youtube.com/watch?v=Ob92euLB_xc",
        lyricsHTML: `<div class="lyric-item">
            <p>
<p class="tip">前奏播放後兩個八拍</p><br>
                <span class="h">[Lily! OhHaeWon! SeolYoonAh! BaeJinSol! KimJiWoo! JangKyuJin! N! MIX! X!]</span><br>
하얀 구름은 내 dream car<br>
저기 붉은 달은 hometown<br>
남달라 우리의 blood type<br>
공상 가득한 our life<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
쏟아진 shooting star<br>
궤도를 벗어나 볼까<br>
꿈꿔온 방향대로<br>
우릴 맡겨볼 time, yuh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Wa-ya-ya-ya, <span class="h">drop it</span><br>
We don't wanna <span class="h">stop it</span><br>
하늘 위로 닻을 던져봐 Ooh-whoa<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
한 발만 내디뎌<br>
꿈속 가는 wormhole<br>
Wa-ya-ya-ya, so fast<br>
꽉 붙잡아 <span class="h">just like that</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come a so-soñar<br>
A soñar, a soñar, <span class="h">ayy</span><br>
Come a so-soñar, a so<br>
No need to worry<br>
Come a so-soñar<br>
A soñar, a soñar, <span class="h">ayy</span><br>
Come a so-soñar, a so<br>
<span class="h">Change up!</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
구름 뒤 숨은 꿈의 island<br>
Don't wanna see it?<br>
Don't you wanna see it? Babe<br>
Do you like it? I like, like it, yeah<br>
Don't wanna feel it?<br>
Don't you wanna feel it? Babe<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">NMIXX!</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
난 안 해 <span class="h">bypass</span><br>
앞을 막는 골리앗 just <span class="h">go straight</span><br>
필요 없어 <u>방패 <span class="h">八配</span></u> <br>
세상은 egg 강한 바위가 <span class="h">my name</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
동화 속에 잠든 princess, not me<br>
우리 우리다운 groove로 jumping, <span class="h">whoa</span><br>
새로운 결말을 make it<br>
We're breaker and changer<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Wa ya-ya-ya, <span class="h">drop it</span><br>
We don't wanna <span class="h">stop it</span><br>
하늘 위로 닻을 던져봐 Ooh-whoa<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
한 발만 내디뎌<br>
꿈속 가는 wormhole<br>
Wa-ya-ya-ya, so fast<br>
꽉 붙잡아 <span class="h">just like that</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come a so-soñar<br>
A soñar, a soñar, <span class="h">ayy</span><br>
Come a so-soñar, a so<br>
No need to worry<br>
Come a so-soñar<br>
A soñar, a soñar, <span class="h">ayy</span><br>
Come a so-soñar, a so<br>
시작해 come with me<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
끝도 없는 상상 위로 let me dive<br>
Puttin' it up, pwah, puttin' it up<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Be original thing<br>
매일 더 상상해<br>
I still dream it and I love that<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ooh, <span class="h">like it</span> (eh-eh)<br>
망설임을 twist it like this<br>
Ooh (eh) <span class="h">like it</span><br>
Get it loud<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come a so-soñar (Come a so-soñar)<br>
A soñar, a soñar, <span class="h">ayy</span><br>
Come a so-soñar, a so<br>
No need to worry<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come a so-soñar<br>
A soñar, a soñar, <span class="h">ayy</span><br>
Come a so-soñar, a so (oh, yeah, yeah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ooh, <span class="h">like it</span> (eh-eh)<br>
망설임을 twist it like this<br>
Ooh (eh) <span class="h">like it</span><br>
Get it loud<br>
            </p>
        </div>`
    },
    {
        id: "DASH",
        title: "DASH",
        category: "NMIXX",
        youtubeId: "7UecFm_bSTU", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-dash",
        videoRefUrl: "https://www.youtube.com/watch?v=89BT9Baap7M",
        lyricsHTML: `<div class="lyric-item">
            <p>
Dash, I wanna dash<br>
I wanna run it (run it)<br>
Dash, I wanna dash<br>
I wanna run it (run it)<br>
<mark><span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! N! MIX! X!]</span><br>
Dash, I wanna dash<br>
I wanna (run it, run it dash)<br>
(Mm, ah) run it</mark><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
You can call me reckless (<span class="h">zigzag</span>)<br>
겁 없이 던진 roadmap (<span class="h">zigzag</span>)<br>
날 막아선 barricade (nah, uh)<br>
사뿐히 즈려밟고 가 (<span class="h">we ride, we ride</span>)<br>
깜빡여 red light in the dark<br>
이건 멈추란 경고일지 몰라<br>
But I don't wanna stop it (mm)<br>
고민 따윈 crash it (oh, yeah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
떨리는 stars 난 달려가<br>
저 멀리 펼쳐진 거친 road (road)<br>
가본 적 없는 길을 밟아 (yeah, yeah)<br>
끌어올려 무한대로<br>
발 닿는 곳이 runway<br>
세상이 원한 길과 정반대로 ride<br>
We go zero to a hunnid (uh)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I wanna <span class="h">dash</span>, I wanna <span class="h">dash</span><br>
I wanna run it (run it)<br>
<span class="h">Dash</span>, I wanna <span class="h">dash</span><br>
I wanna run it (run it)<br>
<span class="h">Dash</span>, I wanna <span class="h">dash</span><br>
I wanna (run it, run it dash)<br>
(Mm, ah) run it<br>
I wanna run it (run it)<br>
<span class="h">Dash</span>, I wanna <span class="h">dash</span><br>
I wanna (run it, run it dash)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ooh-ooh, ooh, speed up to the max<br>
Ooh-ooh, ooh 심장은 beating fast (oh, yeah)<br>
Ooh-ooh, ooh 꿈꿔왔던 way<br>
Dash, I wanna dash, I wanna run it (run it)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">NMIXX</span>) 언제나 옆자리는 비워놔 <span class="h">[P我那]</span><br>
누구든 원한다면 올라타 <span class="h">[歐拉踏]</span><br>
지나간 자리에 남겨봐 skid mark (skid mark)<br>
앞을 막는 건 모조리 다 bump<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
끌어올려 무한대로<br>
발 닿는 그곳이 runway<br>
시작해 revolution for evolution (oh)<br>
We go zero to a hunnid (hunnid, yeah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I wanna <span class="h">dash</span>, I wanna <span class="h">dash</span><br>
I wanna run it<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Dash</span>, I wanna <span class="h">dash</span><br>
I wanna run it (run it)<br>
<span class="h">Dash</span>, I wanna <span class="h">dash</span><br>
I wanna run it (run it dash)<br>
(Mm, ah) run it<br>
I wanna run it (run it)<br>
<span class="h">Dash</span>, I wanna <span class="h">dash</span><br>
I wanna (run it, run it dash)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
또다시 한번 breathe (<span class="h">never stop, never stop, never stop</span>)<br>
거친 박동은 danger<br>
But take it to the max (<span class="h">hold me tight, hold me tight, hold me tight</span>)<br>
겁낼 것 없이 come in<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
NMIXX, <span class="h">change up</span><br>
아득히 저 멀리 펼쳐지는 days<br>
Yeah, we get it (yeah), we face it (yeah)<br>
이 항해의 키를 잡아<br>
세상에 신호탄을 쏘아 올려 bang<br>
뛰는 심장 소릴 따라오면 돼<br>
멈추지는 마, 망설이지 마 no matter<br>
Mm, I just wanna continue my pace <span class="h">[哈!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Dash</span>, I wanna <span class="h">dash</span><br>
I wanna run it (run it)<br>
<span class="h">Dash</span>, I wanna <span class="h">dash</span><br>
I wanna (run it, run it dash, ooh)<br>
(Ah) I wanna run some more<br>
(Yeah, make a dash, hey)<br>
I wanna run it (run it)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Dash</span>, I wanna <span class="h">dash</span><br>
I wanna run it (run it)<br>
            </p>
        </div>`
    },
    {
        id: "RunForRoses",
        title: "Run For Roses",
        category: "NMIXX",
        youtubeId: "j6tKIdt9K9M", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-run-for-roses",
        videoRefUrl: "https://www.youtube.com/watch?v=Tkt3RIlJz-c",
        lyricsHTML: `<div class="lyric-item">
            <p>
We're alive 'cause we are not alone <span class="h">[N! MIX! X!]</span><br>
Hand to hand, you know we won't let go, oh <span class="h">[Run! For! Ros! es!]</span><br>
<mark><span class="h">[Lily! OhHaeWon! SeolYoonAh! BaeJinSol! KimJiWoo! JangKyuJin! Run! For! N! MIX! X!]</span><br>
Run for roses<br>
Oh, yeah, yeah, oh-oh<br>
Yeah, yeah, ayy, yeah</mark> <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
불가능에 도전을 yeah, we fight back<br>
불안한 현실에 던진 invitation<br>
불만 가득한 표정으로 we're back<br>
불같이 타오를게 no limitation<br>
Blow 맘을 휩쓸어<br>
We gotta go 만개하는 our synergy<br>
너와 내 낭만들을 잃지 않게 let's run <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">Run</span>) 꿈꿔온 united wanna get it, wanna fight it<br>
Wanna stand up and salute<br>
(<span class="h">Roses</span>) 지겨운 절망을 넘어 꿈을 거머쥐어<br>
Gonna make us move<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We're alive 'cause we are not alone<br>
We <span class="h">run for roses</span><br>
Hand to hand 두 발을 맞추고 whoa<br>
<span class="h">Run for roses</span><br>
Our hearts go da-ram-dam<br>
우린 달려가길 원해<br>
We're alive 'causе we are not alone<br>
Wе <span class="h">run for roses</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh 속도를 높여<br>
Oh (eh, yeah) 목소릴 높여<br>
가시덩굴에 둘러싸인 our finish line 그래도 난 가 <span class="h">[南嘎]</span><br>
긁히고 다쳐도 포기는 치워둬<br>
No, no, no, no, no, no, no<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">Run</span>) 꿈꿔온 united wanna get it, wanna fight it<br>
Wanna stand up and salute (salute, girl)<br>
(<span class="h">Roses</span>) 지겨운 절망을 (let's go) 넘어 꿈을 거머쥐어<br>
Gonna make us move<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We're alive 'cause we are not alone<br>
We <span class="h">run for roses</span><br>
Hand to hand 두 발을 맞추고 whoa<br>
<span class="h">Run for roses</span><br>
Our hearts go da-ram-dam<br>
우린 달려가길 원해<br>
We're alive 'causе we are not alone<br>
Wе <span class="h">run for roses</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ooh, da-di, da-di, da-di, dum<br>
Da-di, da-di, da-di-dum-dum, dum-dum<br>
Ooh, da-di, da-di, da-di, dum<br>
Da-di, da-di, da-di-dum-dum, dum-dum<br>
Ooh, da-di, da-di, da-di, dum<br>
Da-di, da-di, da-di-dum-dum, dum-dum<br>
Ooh, da-di, da-di, da-di, dum<br>
Da-di, da-di, da-di, <span class="h">run for roses</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Gonna live our best life<br>
We be in the good vibe<br>
If you get this close, don't lose it<br>
지속된 고요에 올리는 방아쇠<br>
당기는 소리에 start it (<span class="h">run</span>)<br>
Ru-ru-run for roses (<span class="h">roses</span>)<br>
Ru-ru-run for roses (<span class="h">run</span>)<br>
Ru-ru-run for roses (<span class="h">roses</span>)<br>
Ru-ru-run for roses, yeah, whoa
            </p>
        </div>
        <div class="lyric-item">
            <p>
We're alive 'cause we are not alone (we're not, we're not, we're not alone)<br>
We <span class="h">run for roses</span> (whoa, yeah)<br>
Hand to hand 두 발을 맞추고 whoa (맞추고) <span class="h">run for roses</span><br>
Our hearts go da-ram-dam (oh, yeah, yeah)<br>
우린 달려가길 원해 (ah-ooh)<br>
We're alive 'cause we are not alone<br>
We <span class="h">run for roses</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ooh (yeah, yeah, yeah, yeah), da-di, da-di, da-di, dum<br>
Da-di, da-di, da-di-dum-dum, dum-dum (yeah, yeah, yeah)<br>
Ooh (oh), da-di, da-di, da-di, dum (better wait, you'll know)<br>
Da-di, da-di, da-di-dum-dum, dum-dum ('cause we are not alone)<br>
Ooh (run), da-di, da-di, da-di, dum<br>
Da-di, da-di, da-di-dum-dum, dum-dum (ah-ooh)<br>
Ooh, da-di, da-di, da-di, dum<br>
Da-di, da-di, da-di, <span class="h">run for roses</span><br>
            </p>
        </div>`
    },
    {
        id: "BreakTheWall",
        title: "Break The Wall",
        category: "NMIXX",
        youtubeId: "WY9DAofy0QI", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-break-the-wall",
        videoRefUrl: "https://www.youtube.com/watch?v=WValTtJVXAM",
        lyricsHTML: `<div class="lyric-item">
            <p>
Right now 끝없이 우리를 위해 펼쳐질 세상<br>
'Cause now we break all the walls<br>
We break all the <span class="h">[Break The Wall]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
두 눈을 꼭 감고서 그려진<br>
마음 속 선명한 지도 위<br>
Yeah 난 알아 where to go    <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
숨이 턱까지 차오르게 둘래 <span class="h">[肚累]</span><br>
더 힘껏 마주할래 넓혀 my space <span class="h">[my space]</span><br>
Be brave and wild 점점 더<br>
<span class="h">Things get better</span>    <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
네모난 천장의<br>
야광별 not my taste <span class="h">[Ewww]</span><br>
찾아갈 거야 real star <span class="h">[N! MIX! X!]</span><br>
Why don't you? (you)     <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
시선은 far away<br>
망설임에게 인사를 건네<br>
고갤 드는 희망 속에 설레<br>
Go all the way    <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come and <span class="h">break the wall</span><br>
다 무너뜨려 시작된 journey<br>
상상 <u>너머의 <span class="h">no某欸</span></u> 꿈꿔왔던 세상 멀리     <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Don't ever give up</span><br>
더 크게 외쳐 벅차는 이 <u>떨림 <span class="h">豆賃</span></u> <br>
하나둘씩 모여 together <span class="h">[Yeah!]</span><br>
멈췄던 세상을 깨워 with you<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
한 발짝 더 다가서는 찰나<br>
망설여진 건 당연해 아마<br>
Call my name <span class="h">[now]</span>, I'll be there (<span class="h">sure</span>)<br>
함께일 때 한 걸음 디뎌 <span class="h">[Let's go!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I trust you, I trust myself<br>
벽 앞에 새길래 난 너와 내 everything<br>
더 깊게 간직해<br>
기억해둬 작은 용기를 낸 순간 <span class="h">[ok~]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
투명한 온실의<br>
화분은 not my taste <span class="h">[Ewww]</span><br>
바람을 가를 거야 <span class="h">[咻咻咻]</span><br>
Why don't you? (you)    <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
더 멀리 far away<br>
두려움에게 인사를 건네 (ah)<br>
고갤 드는 희망 속에 설레<br>
Go all the way     <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come and <span class="h">break the wall</span><br>
다 무너뜨려 시작된 journey<br>
상상 <u>너머의 <span class="h">no某欸</span></u> 꿈꿔왔던 세상 멀리     <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Don't ever give up</span><br>
더 크게 외쳐 벅차는 이 <u>떨림 <span class="h">豆賃</span></u> <br>
하나둘씩 모여 together <span class="h">[Yeah~]</span><br>
멈췄던 세상을 깨워 with you    <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Hey, yeah, yeah, yeah<br>
Hey, yeah, yeah, yeah</span><br>
Say it again, we can't get enough<br>
다 뒤흔들어     <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Hey, yeah, yeah, yeah<br>
Hey, yeah, yeah, yeah</span><br>
All over and over again<br>
So we break all the walls<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
틈에 내린 저 햇빛처럼<br>
길이 돼 모든 건 oh love<br>
파돌 일으키는 butterfly<br>
더 큰 꿈을 꾸며 날아가<br>
You and I (yeah)     <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<p class="tip">一個節拍 拍一次手</p><br>
<mark>Come and break the wall<br>
We gonna mix up 함께 만들 story<br>
Now it's time to change</mark> <br>
<span class="h">Break all the, break all the walls</span> (oh, yeah)     <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Come and <span class="h">break the wall</span> (yeah, yeah, yeah)<br>
다 무너뜨려 시작된 journey<br>
상상 <u>너머의 <span class="h">no某欸</span></u> 꿈꿔왔던 세상 멀리 (yeah, yeah, yeah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Don't ever give up</span> (ooh, ooh)<br>
더 크게 외쳐 벅차는 이 <u>떨림 <span class="h">豆賃</span></u> (oh)<br>
하나둘씩 모여 together <span class="h">[Yeah~]</span><br>
멈췄던 세상을 깨워 with you (oh, yeah)     <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Hey, yeah, yeah, yeah <br>
Hey, yeah, yeah, yeah</span> (oh, whoa)<br>
Say it again, we can't get enough (say it again)<br>
다 뒤흔들어<br>
<span class="h">Hey, yeah, yeah, yeah <br>
Hey, yeah, yeah, yeah</span> (yeah, yeah)<br>
꿈꿔왔던 세상이 보여<br>
멈춰 설 이유는 없어 with you<br>
            </p>
        </div>`
    },
    {
        id: "Seethat?",
        title: "See that?",
        category: "NMIXX",
        youtubeId: "_Q8Jskeps9w", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-see-that",
        videoRefUrl: "https://www.youtube.com/watch?v=w6CwhukehQo",
        lyricsHTML: `<div class="lyric-item">
            <p>
Ooh, ah <span class="h">[N! MIX! X!]</span><br>
Don't mind, just do it, yeah, yeah<br>
<span class="h">[ㄅ又 ㄅ又 ㄅ又]<br>
    [Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin!]<br>
</span>
Can you feel the tension? Yeah (oh)<br>
<span class="h">[N! MIXX! 斯! ㄅ又! ㄅ又! ㄅ又!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
No, I don't mind<br>
깨진 손톱 위에 검은 매니큐어 칠 (<span class="h">doesn't matter</span>)<br>
난 헝클어진 머리<br>
칼을 풀듯 이어폰 줄을 풀지<br>
I'm a boss, turn the radio on<br>
튀어 올라 난 glow in the dar k<br>
Who cares? Not your stereotype<br>
부숴, 네가 알던 날<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
아침 해가 뜨고 우린 숨었지<br>
내리쬐는 <span class="h">sunshine, shine, shine</span><br>
모두 우릴 보고 혀를 차겠지<br>
혀를 차네 (mm)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Whoa 요즘에는 <u>별별별 <span class="h">ㄅ又 ㄅ又 ㄅ又</span></u>  (see that?)<br>
이런저런 <u>별별별 <span class="h">ㄅ又 ㄅ又 ㄅ又</span></u> (쯧쯧)<br>
하여튼간 별별 (twinkle little, little star)<br>
그래, 난 <u>별별별 <span class="h">ㄅ又 ㄅ又 ㄅ又</span></u> (whoa)<br>
우린 we, we, we, we 위로, <u>위로 더 <span class="h">we漏 豆</span></u> <br>
우린 we, we, we, we 위로, <u>위로 더 <span class="h">we漏 豆</span></u> <br>
I'ma be, be, be, be, be the, be the one<br>
여기, 여기 붙어라 whoa<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
NMIXX, <span class="h">we get it on now</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
No 주어진 건 싫어 (<span class="h">no, thank you</span>)<br>
네모 박스를 지워 (<span class="h">no, thank you</span>)<br>
날 자연스레 둘래<br>
청개구리, 두더지 come follow me, this is the day, ayy<br>
Who cares? 좀 튀어도<br>
Who cares? 난 나일 뿐 (mm)<br>
넘어져도 난 무릎을 털고<br>
Go for thе goal 전부 비켜줘 yo<br>
Mm 하여튼간<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Whoa 요즘에는 <u>별별별 <span class="h">ㄅ又 ㄅ又 ㄅ又</span></u> (see that?)<br>
이런저런 <u>별별별 <span class="h">ㄅ又 ㄅ又 ㄅ又</span></u> (쯧쯧)<br>
하여튼간 별별 (twinkle little, little star)<br>
그래, 난 <u>별별별 <span class="h">ㄅ又 ㄅ又 ㄅ又</span></u> (whoa)<br>
우린 wе, we, we, we 위로, <u>위로 더 <span class="h">we漏 豆</span></u> <br>
우린 we, we, we, we 위로, <u>위로 더 <span class="h">we漏 豆</span></u> <br>
I'ma be, be, be, be, be the, be the one<br>
여기, 여기 붙어라 whoa<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Whoa-ooh-whoa, ooh-whoa, ooh-whoa <span class="h">[N! MIX! X!]</span> (don't mind, just do it)<br>
Stay awake, you cannot hold us down <span class="h">[ㄅ又 ㄅ又 ㄅ又]</span> (don't mind, just do it)<br>
Whoa-ooh-whoa, ooh-whoa, ooh-whoa <span class="h">[N! MIX! X!]</span> (don't mind, just do it)<br>
Fly away 저 하늘로 날아 <span class="h">[ㄅ又 ㄅ又 ㄅ又]</span> (I'ma tell 'em, whoa)<br>
다 같이 stomp the ground<br>
마음 안의 말 털어내 voice up (voice up, yeah)<br>
We're never ever going back deep and deeper 조금씩<br>
Uh 하여튼간<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Whoa 요즘에는 <u>별별별 <span class="h">ㄅ又 ㄅ又 ㄅ又</span></u> (see that?)<br>
이런저런 <u>별별별 <span class="h">ㄅ又 ㄅ又 ㄅ又</span></u> (쯧쯧)<br>
하여튼간 별별 (twinkle little, little star)<br>
그래, 난 <u>별별별 <span class="h">ㄅ又 ㄅ又 ㄅ又</span></u> (whoa)<br>
우린 we, we, we, we 위로, <u>위로 더 <span class="h">we漏 豆</span></u> <br>
우린 we, we, we, we 위로, <u>위로 더 <span class="h">we漏 豆</span></u> <br>
I'ma be, be, be, be, be the, be the one<br>
여기 여기 붙어라 whoa<br>
            </p>
        </div>`
    },
    {
        id: "LoveIsLonely",
        title: "Love Is Lonely",
        category: "NMIXX",
        youtubeId: "zhrT1cmQ9zA", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-love-is-lonely",
        videoRefUrl: "https://www.youtube.com/watch?v=WZ8pT_M4_Sc",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">[N! MIX! X!]</span><br>
La-la-la-la-la-la, la-la-la-la, love is lonely<br>
<span class="h">[Love! Is! Lone! ly!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
떠도는 lights<br>
길었던 방황 끝에 선 둘 한눈에 알아봐<br>
Don't leave tonight<br>
아무도 찾지 않을 곳 오직 둘뿐이야<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
두 손을 잡아 falling for you<br>
You're falling for me<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
위태로운 우린 hopeless romantic<br>
But I'm happy it's true<br>
'Cause <span class="h">love is so lonely<br>
Love is so lonely</span> without you<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
그 불안함을 안아줘 혼자서는 아득한 blue<br>
'Cause <span class="h">love is so lonely<br>
Love is so lonely</span> without you<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
La-la-la-la-la-la, la-la-la-la, love is lonely<br>
<span class="h">[N! MIX! X!]</span><br>
La-la-la-la-la-la, la-la-la-la, love is lonely<br>
<span class="h">[撒! 浪! 嘿!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
저 먼 별빛, 낯선 orbit<br>
사이 some, some, something I miss now<br>
끝의 끝이 어딘지도 모를 galaxy<br>
너와 함께라면 괜찮아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
긴 밤을 건너 falling for you<br>
You're falling for me<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
위태로운 우린 hopeless romantic<br>
But I'm happy it's true<br>
'Cause <span class="h">love is so lonely<br>
Love is so lonely</span> without you<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
그 불안함을 안아줘<br>
혼자서는 아득한 blue<br>
'Cause <span class="h">love is so lonely<br>
Love is so lonely</span> without you<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
La-la-la-la-la-la, la-la-la-la, love is lonely<br>
<span class="h">[永忘he]</span><br>
La-la-la-la-la-la, la-la-la-la, love is lonely<br>
<span class="h">[N! MIX! X!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
전부 태양을 바랄 때 너의 빗속에 잠길게<br>
우산 없이 널 맞이해 right<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
전부 내던져도 돼<br>
몇 번이고 널 찾을게<br>
Stop, repeat, do it all again<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
네가 있어 my world is romantic<br>
Yeah, I'm happy with you<br>
'Cause love is so lonely<br>
Love is so lonely without you<br>
            </p>
        </div>`
    },
    {
        id: "HighHorse",
        title: "High Horse",
        category: "NMIXX",
        youtubeId: "jy0qJC6IbgY", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-high-horse",
        videoRefUrl: "https://www.youtube.com/watch?v=y4d9PkORsxQ",
        lyricsHTML: `<div class="lyric-item">
            <p>
Sick of that high horse<br>
I just can't take it no more<br>
<span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! N! MIX! X!]</span><br>
텅 빈 대화<br>
I'm lost and found<br>
판단하지 what you are<br>
쉽게 말해 다 who you are, oh, oh<br>
<span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! N! MIX! X!]</span><br>
내 귀엔 their lies<br>
I hear what's inside<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
So let's ride to the front line<br>
갈 수 있는 가장  끝까지<br>
너와 더 멀리<br>
To end up where we're meant to bes<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Heartbreak <u>지겨워 <span class="h">七ㄍㄧㄡ沃</span></u> <br>
눈뜨기 싫은 every morning<br>
Run away<br>
비좁은 frame<br>
Heartbreak <u>지겨워 <span class="h">七ㄍㄧㄡ沃</span></u> <br>
눈뜨기 싫은 every morning<br>
Run away<br>
비좁은 frame<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
내려다보는<br>
따가운 시선<br>
<u>뛰어 넘어 <span class="h">低噢 no莫</span></u> <br>
Go on, go on<br>
They can't tell you what you are<br>
If you already know who you are, oh, oh<br>
<span class="h">I will love you</span><br>
When all is gone<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
So let's ride to the front line<br>
갈 수 있는 가장 끝까지<br>
너와 더 멀리<br>
To end up where we're meant to be<br>
So let's ride to the front line<br>
익숙한 곳을 벗어나<br>
너와 있을게<br>
꿈꾼 적 없는 곳까지<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Lights flash, <span class="h">bass drop</span><br>
Baby, I'm on whatever<br>
Hands up, <span class="h">heartbeats</span><br>
No telling where I'll go<br>
Heartquake <u>눈을 떠 <span class="h">努呢 豆</span></u> <br>
웅크렸던 every morning<br>
Run away<br>
Do it my way<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Sick of that high horse<br>
Our minds don't work like theirs<br>
            </p>
        </div>`
    },
    {
        id: "KNOWABOUTME",
        title: "KNOW ABOUT ME",
        category: "NMIXX",
        youtubeId: "aFrQIJ5cbRc", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-know-about-me",
        videoRefUrl: "https://www.youtube.com/watch?v=GggW4Twb5Tc",
        lyricsHTML: `<div class="lyric-item">
            <p>
                <span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! N! MIX! X!]</span><br>
                <span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! KNOW ABOUT ME!]</span><br>
I wanna drop my rhythm on your fear<br>
들켜도 좋아 everything you feel<br>
본 적 없을 테지 like that<br>
무모해도 like that, <span class="h">love</span><br>
            </p>
        </div>

        <div class="lyric-item">
            <p>
예상을 깨고 흘려보는 틈<br>
제대로 건든 호기심의 끈<br>
까딱인 고갯짓에 쉽게<br>
다른 너를 이끌어내 <span class="h">oh</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Would you dive with me?<br>
Dive with me, dive<br>
놓치지 않게<br>
Eyes on me, eyes on me, now<br>
<span class="h">[N! MIX! X!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Let me show you that, show you that, mm-mm<br>
<span class="h">Know about me</span> (that's that)<br>
Show you that, show you that, mm-mm<br>
<span class="h">Know about me</span> (yeah)<br>
Won't let you down, down 손을 잡아 <span class="h">[嫁吧]</span><br>
날 믿고 다음다음 step을 밟아 <span class="h">[拜吧]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Let me show you that, show you that, mm-mm<br>
<span class="h"></span>Know about me (know about me)(that's that)<br>
Show you that, show you that, mm-mm<br>
<span class="h"></span>Know about me Know about me (know about me)<br>
Won't let you down, down 손을 잡아 <span class="h">[嫁吧]</span><br>
네 눈빛 닿아 닿아 뛰는 my heart <span class="h">[my heart]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
So what happened? 두 발이 붕 뜨게 만드는 <span class="h">blush</span><br>
Give you my heart and affection 난 널 이끄는 <span class="h">pilot</span><br>
We're gonna fly to the sky 중력을 타고 sway<br>
<span class="h">Ride or die, let me take you there</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Would you dive with me?<br>
Dive with me, dive<br>
재촉해도 돼<br>
Eyes on me, eyes on me, now<br>
(Oh, run)<br>
<span class="h">[N! MIX! X!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Let me show you that, show you that, mm-mm<br>
<span class="h">Know about me</span> (that's that)<br>
Show you that, show you that, mm-mm<br>
<span class="h">Know about me</span> (you should know about me, yeah)<br>
Won't let you down, down 손을 잡아 <span class="h">[嫁吧]</span><br>
날 믿고 다음다음 step을 밟아 <span class="h">[拜吧]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Let me show you that, show you that, mm-mm<br>
<span class="h">Know about me</span> (know about me)(that's that)<br>
Show you that, show you that, mm-mm<br>
<span class="h">Know about me</span> (know about me)<br>
Won't let you down, down 손을 잡아 <span class="h">[嫁吧]</span> (yeah)<br>
니 눈빛 닿아 닿아 뛰는  <span class="h">[my heart]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Gonna do it, 'cause I want it<br>
Gonna move, 'cause I want it<br>
Gonna love, 'cause I want it<br>
Gonna run, 'cause I want it<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Kill the doubt, I don't want it<br>
Kill the fear, I don't want it<br>
Kill the rule, I don't want it<br>
Kill the end, I don't<br>
            </p>
        </div>

        <div class="lyric-item">
            <p>
                <span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! N! MIX! X!]</span><br>
                <span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! KNOW ABOUT ME!]</span><br>
Let me show you that, show you that, mm-mm<br>
<span class="h">Know about me</span> (that's that)<br>
Show you that, show you that, mm-mm<br>
<span class="h">Know about me</span> (yeah)<br>
너와 내 time, mm-mm 멈추지 마<br>
I have no doubt, doubt 이젠 알아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Let me show you that, show you that, mm-mm<br>
<span class="h">Know about me</span> (that's that)<br>
Show you that, show you that, mm-mm<br>
<span class="h">Know about me</span><br>
너와 내 time, mm-mm 멈추지 마<br>
우리가 닿을 다음으로 dive now<br>
            </p>
        </div>`
    },
    {
        id: "BlueValentine",
        title: "Blue Valentine",
        category: "NMIXX",
        youtubeId: "EmeW6li6bbo", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-blue-valentine",
        videoRefUrl: "https://www.youtube.com/watch?v=d2M8fgXtzys",
        lyricsHTML: `<div class="lyric-item">
            <p>
You'll always be my blue valentine<br>
You'll always be my blue valentine<br>
<span class="h">[B! lue! Valentine! N! MIX! X!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
식어버린 너의 색은 blue<br>
파랗게 멍이 든 my heart<br>
몇 번이고 덧이 나<br>
열이 나 lovesick 이건 such a bad love<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We <span class="h">fight</span>, we <span class="h">sigh</span>, and <span class="h">stop</span><br>
붉게 타오르다 한순간에 식어가<br>
<span class="h">Rewind, rewind, rewind</span><br>
언제 그랬냐는 듯이 또 서롤 찾아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
깊게 새긴 상처 비친 red blood<br>
부서진 forever, I can see it now, can you see it now? <span class="h">[NMIXX!]</span><br>
우린 마치 broken glass on the ground<br>
돌이킬 수 없다 해도 we can figure it out<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
If this love is over<br>
다시 뛰어들어 난<br>
이 사랑은 colder<br>
I'll keep the fire lit in mine<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
You'll always be my blue <span class="h">valentine</span> (blue valentine, blue valentine)<br>
You'll always be my blue <span class="h">valentine</span> (blue valentine, blue valentine)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
식어도 타오르는 얼음 속 불꽃<br>
아무 겁도 없이 뻗어버린 손<br>
Hot and <span class="h">icy</span> but I <span class="h">like it</span><br>
It's so you <span class="h">[so you]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
바뀌어 맘의 weather 몰려온 cloud<br>
외로운 together I can feel it now, can you feel it now?<br>
Rollercoaster처럼 우린 정신없이 흔들려도 돌아갈 걸 알아<br>
So it (doesn't matter)<br>
You might be my end game (yeah)<br>
대가로 얻은 worst pain (you might be)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
If this love is over<br>
다시 뛰어들어 난<br>
이 사랑은 colder<br>
I'll keep the fire lit in mine<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
You'll always be my blue <span class="h">valentine</span> (blue valentine, blue valentine)<br>
You'll always be my blue <span class="h">valentine</span> (blue valentine, blue valentine)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(붉고) 붉고 (푸른) 푸른<br>
(사랑) 사랑이란 (이란) bruise<br>
낫지는 않길<br>
'Cause it's you (yeah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
If this love is over<br>
다시 뛰어들어 난 (뛰어들어 난)<br>
이 사랑은 colder (colder, yeah)<br>
I'll keep the fire lit in mine<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
You'll always be my blue <span class="h">valentine</span><br>
(Always be, my blue valentine)<br>
You'll always be my blue <span class="h">valentine</span> (blue valentine, blue valentine)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<mark><span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! N! MIXX! 斯!]</span><br>
I'm falling over and over and over, ah</mark><br>
You're getting colder and colder and colder<br>
Blue valentine<br>
            </p>
        </div>`
    },
    {
        id: "SPINNIN’ONIT",
        title: "SPINNIN’ ON IT",
        category: "NMIXX",
        youtubeId: "RblIsNFR1j4", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-spinnin-on-it",
        videoRefUrl: "https://www.youtube.com/watch?v=7hl5akqQUAc",
        lyricsHTML: `<div class="lyric-item">
            <p>
막혀버린 talk, iffy, iffy love war<br>
Iffy, iffy (<span class="h">I don't know what's wrong</span>)<br>
예상한 boom, 언제나 ma-a-assive chaos<br>
Is it? Is it? (<span class="h">I don't know what's wrong</span>)<br>
위험한 drift, 자꾸 부딪히는 너와 나 (uh-oh)<br>
내 안에 파편처럼 박힌 love and hate<br>
갈수록 지워지지가 않아 (<span class="h">I don't know what's wrong</span>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
다툼 속의 our love (ah)<br>
아마 너와 난 loco (ah)<br>
Why do I want you more?<br>
오늘도 on and on, whoa, whoa (ah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
멈출 수 없는 chaos<br>
자꾸만 터지는 spark<br>
점점 더 going insane<br>
Should I keep loving you or not?<br>
(Yeah, we're stuck in here)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
So done with love (<span class="h">so done with love</span>)<br>
So done with hurt (<span class="h">so done with hurt</span>)<br>
끝없는 이 heartache (<u>끝없는 이 <span class="h">各豆能 你</span></u> <span class="h">heartache</span>)<br>
But you are all I need (<span class="h">but you are all I need</span>)<br>
이 뻔한 이야길 원해 더<br>
우린 여전히 서로겠지 whatever (<span class="h">say whatever</span>)<br>
See you tomorrow<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We been <span class="h">spinnin' on it, spinnin' on it</span> (with love)<br>
We been <span class="h">spinnin' on it, spinnin' on it</span> (with hurt)<br>
<span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin!]</span><br>
<p class="tip">喊完人名馬上接spinnin' on it, spinnin' on it</p><br>
We been <span class="h">spinnin' on it, spinnin' on it</span> (heartache)<br>

            </p>
        </div>
        <div class="lyric-item">
            <p>
You are my hero and villain (hey, do it, do it)<br>
날 울린 뒤 씌운 umbrella (hey, do it, do it)<br>
어긋나는 timing 속 갇혀버려 너와<br>
붙어있는 우린 like a bomb, 언제 터질지 몰라<br>
갈라지는 한숨 사이 말을 퍼부어<br>
숨이 막히지 (huh) 어딜 봐도 blackout<br>
혼란 속에 fall, oh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
함정 같은 our love (ah, our, our love)<br>
이 끝이 없는 Möbius (ah, ooh, ooh, no)<br>
Oh, I'm feeling so lost (ah, oh-oh-oh)<br>
Should I keep loving you or not? (Ah, oh, oh, oh, yeah)<br>
(Let's go, just gotta ride with me)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
So done with love (<span class="h">so done with love</span>)<br>
So done with hurt (<span class="h">so done with hurt</span>)<br>
끝없는 이 heartache (<u>끝없는 이 <span class="h">各豆能 你</span></u> <span class="h">heartache</span>)<br>
But you are all I need (<span class="h">but you are all I need</span>)<br>
이 뻔한 이야길 원해 더<br>
우린 여전히 서로겠지 whatever (<span class="h">say whatever</span>)<br>
See you tomorrow<br>
We been spinnin' on it, spinnin' on it<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
사소한 습관도 다른 너와 나<br>
맞고 틀린 건 애초에 없지<br>
다투고 부딪혀, 그게 우리니까 together, we'll be (oh, ooh-ooh)<br>
Every day, every night, we on and on<br>
후회는 하지 않아<br>
So truly (so truly) we're endless (we're endless)<br>
(Oh-oh-oh)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
So done with love (<span class="h">so done with love</span>)<br>
So done with hurt (<span class="h">so done with hurt</span>)<br>
끝없는 이 heartache (<u>끝없는 이 <span class="h">各豆能 你</span></u> <span class="h">heartache</span>, yeah, yeah)<br>
But you are all I need (<span class="h"></span>but you are all I need)<br>
이 뻔한 이야길 원해 더<br>
우린 여전히 서로겠지 whatever (ooh, <span class="h">say whatever</span>)<br>
See you tomorrow<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(So done with love) we been <span class="h">spinnin' on it, spinnin' on it</span><br>
(So done with hurt) we been <span class="h">spinnin' on it, spinnin' on it</span><br>
<span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin!]</span><br>
<p class="tip">喊完人名馬上接spinnin' on it, spinnin' on it</p><br>
(But you are all I need) we been <span class="h">spinnin' on it, spinnin' on it</span><br>
            </p>
        </div>`
    },
    {
        id: "HeavySerenade",
        title: "Heavy Serenade",
        category: "NMIXX",
        youtubeId: "6Ycn9qZK09I", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-heavy-serenade",
        videoRefUrl: "https://www.youtube.com/watch?v=rYqxR_Rse9M",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! N! MIX! X!]</span><br>
어린 맘속 헤매던 cosmos<br>
터진 눈물 잃어버린 color<br>
But I'm with you, every day and night<br>
모든 별을 안고서 keep dreamin'<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
날 깨뜨려서 만들래, 단 하나뿐인 bouquet<br>
Glassy serenade, 서툴러도 뭐 어때?<br>
은하수 아래서 take my hands<br>
시들지 않을 꿈에 널 데려가고 있잖아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
봄 지나 겨울 와도<br>
다시 피어날 <span class="h">my heart</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
커진 심장 소릴 들어봐<br>
영원히 기억될 이 순간 (no)<br>
가사가 된 꽃잎들을 봐<br>
이미 넌 불러본 melody (no)<br>
L-O-V-E, right? L-O-V-E, right? (<span class="h">I don't doubt it</span>)<br>
Be my, be my light, be my, be my light (<span class="h">now then</span>)<br>
We're blooming, yeah, we're blooming, baby<br>
We're blooming, <span class="h">can you hug me?</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Hold up, hold up, I can't breathe<br>
I'm ready, ready to make it<br>
하나의 숨결에 담기엔<br>
널 향한 말들이 넘쳐<br>
너는 뭐랄까? 나를 웃게 하는 <u>춤 <span class="h">促</span></u> <br>
매일 round and round 서로 가득 채울 <u>품 <span class="h">曝</span></u> <br>
언제 어디까지나 깨고 싶지 않은 <u>꿈 <span class="h">困</span></u> <br>
Gonna <span class="h">zoom, zoom, zoom</span> on just <span class="h">you, you, you</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
지구를 벗어나도<br>
다시 피어날 <span class="h">my heart</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
커진 심장 소릴 들어봐<br>
영원히 기억될 이 순간 (no)<br>
가사가 된 꽃잎들을 봐<br>
이미 넌 불러본 melody (no)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
L-O-V-E, right? L-O-V-E, right? (<span class="h">I don't doubt it</span>)<br>
Be my, be my light, bе my, be my light (<span class="h">now then</span>)<br>
We'rе blooming, yeah, we're blooming, baby<br>
We're blooming, <span class="h">can you hug me?</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Then I realize<br>
모든 꽃말은 너야 (I'm sure, it's you)<br>
It's time to get you so I<br>
Run, run, run<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
커진 심장 소릴 들어봐 (들어봐)<br>
영원히 기억될 이 순간 (이 순간, yeah, no)<br>
가사가 된 우리들을 봐<br>
이미 넌 불러본 melody (melody, no)<br>
L-O-V-E, right? L-O-V-E, right? (<span class="h">I don't doubt it</span>)<br>
Be my, be my light, be my, be my light (<span class="h">now then</span>)<br>
We're blooming, yeah, we're blooming, baby (we're blooming, yeah)<br>
We're blooming, <span class="h">can you hug me?</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We're blooming, yeah, we're blooming, baby<br>
We're <mark>blooming,<span class="h"> [NMIXX!]</span></mark> <span class="h">can you hug me?</span> <br>
            </p>
        </div>`
    },
    {
        id: "Crescendo",
        title: "Crescendo",
        category: "NMIXX",
        youtubeId: "-SEKt_0pdHM", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nmixx-crescendo",
        videoRefUrl: "https://www.youtube.com/watch?v=q9RPsmB7fBs",
        lyricsHTML: `<div class="lyric-item">
            <p>
                <p class="tip">前奏播放後一個八拍</p> <br>
                <span class="h">[Lily! Haewon! Sullyoon! Bae! Jiwoo! Kyujin! Cre! scen! do! N! MIXX! 斯!]</span><br>
안아줘 no question, head to toe enveloped<br>
사라지는 배경 단둘인 우주<br>
별빛은 silent choir, 네 짙은 눈에 잠겨<br>
날 괴롭히던 long, long day, 다 잊어버려 어느새<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
너 말곤 <span class="h">decrescendo</span>, 꿈처럼 속삭여줘<br>
귓가의 velvet texture, 기꺼이 서롤 안고<br>
어두운 밤을 밝혀<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh, my God, out of control <span class="h">[N! MIX! X!]</span><br>
제멋대로 헤맨 love <span class="h">[love]</span><br>
Took away my metronome<br>
I'm deep in shallow, deep in shallow, oh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ah, ah, ah, ah<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
낭만적인 fairytale, happy ending이 아니라도<br>
서로를 선택할 운명이지<br>
누구의 허락 따윈, 하나도 필요 없어<br>
달아오른 맘은 higher, 넘쳐흘러버린 desire<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh, my God, out of control <span class="h">[N! MIX! X!]</span><br>
제멋대로 헤맨 love <span class="h">[love]</span><br>
Took away my metronome<br>
I'm deep in shallow, deep in shallow, oh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(You're here for me)<br>
(I'm here for ya) yeah<br>
(You're here for me) you're my conductor, be my drummer, allegro or I can<br>
(I'm here for ya) lento for ya, 넌 언제나 내 심장 속에 사는 중이야 (mm)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Now I can feel <span class="h">crescendo</span>, 모든 걸 네게 줘도<br>
아깝지 않은 my world, 기꺼이 서롤 안고<br>
어두운 밤을 밝혀<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh, my God, out of control <span class="h">[N! MIX! X!]</span><br>
제멋대로 헤맨 love <span class="h">[love]</span><br>
Took away my metronome (you're here for me)<br>
I'm deep in shallow, deep in shallow, oh (I'm here)<br>
            </p>
        </div>`
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