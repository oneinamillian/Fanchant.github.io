// 1. 歌曲資料庫 (你可以自由在這邊增加新歌)
const songDatabase = [
    {
        id: "LikeOOHAHH",
        title: "Like OOH-AHH",
        category: "twice",
        youtubeId: "0rtV5esQT6I", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/tw/tc/song/4o89UbgqtWt5lHCMkb",
        videoRefUrl: "https://www.youtube.com/watch?v=hpNqmCu53EE",
        lyricsHTML: `
            <div class="lyric-item">
            <p>
                <span class="tip">前奏開始播放後  三個八拍</span><br>
                <span class="h">[Ki! 大！流！搜！ 兔！哇！意！思！]</span>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                모두 나를 가지고 <br>
                매일 가만 안 두죠 <br>
                내가 너무 예쁘죠 <br>
                나 때문에 다 힘들죠<br>
                어딜 걷고 있어도<br>
                빨간 바닥인거죠<br>
                Red carpet 같은 기분<br>
                모두 날 쳐다 보죠 oh <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                어떤 사람은 어머님이 누구냐고<br>
                신선하게 말 걸어도<br>
                아무 느낌이 안 들죠<br>
                하지만 나도 누군가 하고 사랑에<br>
                빠져보고 싶어 <span class="h">baby <br></span>
                잘 들어요 내 boy<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                단 한번도 느껴본 적 없는 걸<br>
                알게 해주는<br>
                <u>사람 기다리고 있는 걸 <span class="h">撒郎KI搭哩狗衣能勾</span></u> <br>
                얼마가 <u>돼도 <span class="h">推斗</span></u>  기다리고 <u>싶어<span class="highlight">溪坡</span></u> <br>
                I just wanna fall in love<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                어떻게 내가 움직일 수 없게<br>
                날<span class="h">ooh ahh ooh ahh</span> 하게 만들어줘<br>
                가짜 가짜 진심 없는 가짜<br>
                잘 가 잘 가 huh <br>
                <span class="h">Ooh- ahh</span><u>하게 <span class="h">哈給</span></u><br>
                어떻게 이제 더 할말이 없게<br>
                날 <span class="h">ooh ahh ooh ahh</span> 하게 만들어줘<br>
                Bla la la la 말만하지 말고<br>
                느껴지게 huh <br>
                <span class="h">Ooh- ahh</span><u>하게 <span class="h">哈給</span></u><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                날 <u>봐<span class="h">八</span></u>  거<u>봐<span class="highlight">八</span></u>  또 두 번 봐<br>
                한번 지나치고 등을 돌려 쳐다봐 <span class="h">TWICE</span> <br>
                어딜 가더라도 항상 민 낯<br>
                하지만 내가 제일 <u>빛나<span class="h">冰那</span></u> <br>
                낮은 신발 신어도 가치는 high <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                머릿속엔 늘 영화 속 같은 la la la <br>
                장면들이 지나가네 생각만해도 떨리네 yeah<br>
                이제는 나도 누군가 하고 사랑에 <br>
                빠져 보고 싶어 <span class="h">baby <br></span><br>
                잘 들어요 내 boy <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                단 한번도 느껴본 적 없는 걸<br>
                알게 해주는<br>
                <u>사람 기다리고 있는 걸 <span class="h">撒郎KI搭哩狗衣能勾</span></u> <br>
                얼마가 <u>돼도 <span class="h">推斗</span></u>  기다리고 <u>싶어<span class="highlight">溪坡</span></u> <br>
                I just wanna fall in love<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                어떻게 내가 움직일 수 없게<br>
                날<span class="h">ooh ahh ooh ahh</span> 하게 만들어줘<br>
                가짜 가짜 진심 없는 가짜<br>
                잘 가 잘 가 huh <br>
                <span class="h">Ooh- ahh</span><u>하게 <span class="h">哈給</span></u><br>
                어떻게 이제 더 할말이 없게<br>
                날 <span class="h">ooh ahh ooh ahh</span> 하게 만들어줘<br>
                Bla la la la 말만하지 말고<br>
                느껴지게 huh <br>
                <span class="h">Ooh- ahh</span><u>하게 <span class="h">哈給</span></u><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                아무하고 만나 시작하기 싫어<br>
                쉽지 않은 여자 그게 나인걸<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                <span class="h">Let me see<br>
                How you gon treat me<br>
                I ain't no easy<br>
                Better think about it twice<br>
                Let me see<br>
                How you gon treat me<br>
                I ain't no easy<br>
                Better think about it twice</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                어떻게 내가 움직일 수 없게<br>
                날<span class="h">ooh ahh ooh ahh</span> 하게 만들어줘<br>
                가짜 가짜 진심 없는 가짜<br>
                잘 가 잘 가 huh <br>
                <span class="h">Ooh- ahh</span><u>하게 <span class="h">哈給</span></u><br>
                어떻게 이제 더 할말이 없게<br>
                날 <span class="h">ooh ahh ooh ahh</span> 하게 만들어줘<br>
                Bla la la la 말만하지 말고<br>
                느껴지게 huh <br>
                <span class="h">Ooh- ahh</span><u>하게 <span class="h">哈給</span></u><br>
            </p>
        </div>
        `
    },
    {
        id: "CHEER",
        title: "CHEER UP",
        category: "twice",
        youtubeId: "c7rCyll5AeY", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/tw/tc/song/Cs660s5t3ZiY2pHB6s",
        videoRefUrl: "https://www.youtube.com/watch?v=GhQL5kPFnOI",
        lyricsHTML: `
            <div class="lyric-item">
            <p>
<span class="h">[兔！哇！意！思！]</span> <br>
매일 울리는 <u>벨벨벨 <span class="h">配配配</span></u> <br>
이젠 나를 배려 해줘<br>
배터리 낭비하긴 싫어<br>
자꾸만 봐 자꾸<u>자꾸만와 <span class="h">掐故媽襪</span> </u> <br>
전화가 펑 터질 것만 같아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>몰라 몰라 <span class="h">摸拉 摸拉</span></u>  숨도 못 쉰대<br>
나 때문에 힘들어<br>
쿵 심장이 떨어진대 왜<br>
걔 말은 나 너무 예쁘대<br>
자랑하는건 아니고<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
아 아까는 못받아서 미안해<br>
친구를 만나느라 <span class="h">shy shy shy</span> <br>
만나긴 좀 그렇구 미안해<br>
좀 있다 연락할게 <span class="h">later</span> <br>
조르지마 얼마 가지 않아<br>
부르게 해줄게 <span class="h">Baby</span> <br>
아직은 좀 일러 내맘 갖긴 일러<br>
하지만 더 보여줄래
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">CHEER UP BABY</span> <br>
<span class="h">CHEER UP BABY</span> <br>
좀 더 힘을 내<br>
여자가 쉽게 맘을 주면 안돼<br>
그래야 <mark>니가 날 더</mark><br>
<mark><span class="h">[兔！哇！意！思！]</span></mark><br>
<u>좋아하게 될걸 <span class="h">邱啊哈給推溝</span></u> <br>
태연하게 연기할래 아무렇지 않게<br>
내가 널 좋아하는 맘 모르게<br>
Just get it together<br>
And then baby <span class="h">CHEER UP</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(I need you)<br>
안절부절 목소리가 여기까지 <u>들려 <span class="h">特六</span></u> <br>
땀에 젖은 전화기가 여기서도 <u>보여 <span class="h">波優</span></u> <br>
바로 바로 대답하는 것도 <u>매력 없어 <span class="h">妹六 溝搜</span></u> <br>
메시지만 읽고 확인 안 하는 건 <u>기본 <span class="h">ㄎㄧ波</span></u> <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>어어어 <span class="h">歐歐歐~</span></u>  너무 심했나 boy<br>
이러다가 지칠까 봐 걱정되긴 하고<br>
<u>어어어 <span class="h"> 歐歐歐~</span></u> 안 그러면 내가 더<br>
빠질 것만 같어 <u>빠질 것만 같어 <span class="h">巴基 摳蠻 咖透</span></u> <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
아 답장을 못해줘서 미안해<br>
친구를 만나느라 <span class="h">shy shy shy</span><br>
만나긴 좀 그렇구 미안해<br>
좀 있다 연락할게 <span class="h">later</span><br>
조르지마 어디 가지 않아<br>
되어줄게 너의 <span class="h">Baby</span><br>
너무 빨린 싫어 성의를 더 보여<br>
내가 널 기다려줄게<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">CHEER UP BABY</span><br>
<span class="h">CHEER UP BABY</span><br>
좀 더 힘을 내<br>
여자가 쉽게 맘을 주면 안돼<br>
그래야 <mark>니가 날 더</mark><br>
<mark><span class="h">[兔！哇！意！思！]</span></mark><br>
<u>좋아하게 될걸 <span class="h">邱啊哈給推溝</span></u> <br>
태연하게 연기할래 아무렇지 않게<br>
내가 널 좋아하는 맘 모르게<br>
Just get it together<br>
And then baby <span class="h">CHEER UP</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
나도 니가 좋아 상처 입을까 봐<br>
걱정되지만 여자니까 이해해주길<br>
속 마음 들킬 까봐 겁이나<br>
지금처럼 조금만 더 다가와<br>
그리 오래 걸리진 않아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Just get it together<br>
And then baby <span class="h">CHEER UP</span><br><br>
Be a man, a real man<br>
Gotta see u love me<br>
Like a real man<br>
Be a man, a real man<br>
Gotta see u love me<br>
Like a real man<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">CHEER UP BABY</span><br>
<span class="h">CHEER UP BABY</span><br>
좀 더 힘을 내<br>
여자가 쉽게 맘을 주면 안돼<br>
그래야 <mark>니가 날 더</mark><br>
<mark><span class="h">[兔！哇！意！思！]</span></mark><br>
<u>좋아하게 될걸 <span class="h">邱啊哈給推溝</span></u> <br>
태연하게 연기할래 아무렇지 않게<br>
내가 널 좋아하는 맘 모르게<br>
Just get it together<br>
And then baby <span class="h">CHEER UP</span> <br>
            </p>
        </div>
        `
    },
    {
        id: "TT",
        title: "TT",
        category: "twice",
        youtubeId: "ePpPVE-GGJw", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/tw/tc/song/Ot8tSH593DzwZmwlih",
        videoRefUrl: "https://www.youtube.com/watch?v=LjvvHXfELVI",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! One in a! Million! ㄙㄟ桑ㄟ！炭！哈娜不膩！兔！哇！意！思！]</span><br> 
이러지도 못하는데 저러지도 못하네<br>
그저 바라보며 <span class="h">ba ba ba baby</span><br>
매일 상상만 해 이름과 함께<br>
쓱 말을 놨네 baby<br>
아직 우린 모르는 사인데<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
아무거나 걸쳐도 아름다워 <span class="h">[打窩]</span><br>
거울 속 단 둘이서 하는<br>
Fashion <span class="h">show show</span><br>
이번에 정말 <u>꼭꼭 <span class="h">勾勾</span></u> 내가 먼저 <span class="h">talk talk </span><br>
다짐 뿐인걸 매번 다짐 뿐인걸<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>나 나 나 나 나 나 나 <span class="h">娜娜娜娜娜娜娜</span></u> <br>
콧노래가 나오다가 나도 몰래<br>
눈물 날 것 <u>같애 <span class="h">嘎貼</span></u> <br>
아닌 것 <u>같애 <span class="h">嘎貼</span></u> 내가 아닌 것 <u>같애 <span class="h">嘎貼</span></u><br>
<span class="h">I love you so much</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
이미 난 다 컸다고 생각하는데<span class="h">[棒！]</span><br>
어쩌면 내 맘인데 왜<br>
내 맘대로 할 수 없는 건 왜<br>
밀어내려고 하면 할수록<br>
<u>자꾸 끌려 왜 자꾸 자꾸 끌려 <span class="h">掐估 哥六 威 掐估掐估 哥六</span></u> <span class="h">baby</span> <br>
I'm like <span class="h">TT</span><br>
Just like <span class="h">TT</span><br>
이런 내 맘 모르고 <u>너무해 너무해 <span class="h">ㄋㄚ目嘿ㄋㄚ目嘿</span></u> <br>
I'm like <span class="h">TT [Ah~]</span><br>
Just like <span class="h">TT [Ah~]</span><br>
Tell me that you'd be my baby<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
어처구니 없다고 해<br>
얼굴 값을 못한대<br>
전혀 위로 안돼<br>
<span class="h">Ba ba ba baby</span><br>
미칠 것 같애<br>
이 와중에 왜<br>
배는 또 고픈 건데<br>
하루 종일 먹기만 하는데<br>
        </div>
        <div class="lyric-item">
            <p>
<u>맴매매매 <span class="h">妹妹妹妹</span></u>  아무 죄도 없는 인형만 <u>때찌 <span class="h">ㄉㄟ季</span></u> <br>
종일 앉아있다가 엎드렸다<br>
시간이 <u>획획획 <span class="h">灰灰灰</span></u> <br>
피부는 왜 이렇게 또 <u>칙칙 <span class="h">七七</span></u> <br>
자꾸 틱틱 거리고만 <u>싶지 <span class="h">希記</span></u> <br>
엄만 귀찮게 계속 <u>왜왜왜왜왜 <span class="h">威威威威威</span></u> <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>나 나 나 나 나 나 나 <span class="h">娜娜娜娜娜娜娜</span></u> <br>
콧노래가 나오다가 나도 몰래<br>
짜증날 것 <u>같애 <span class="h">嘎貼</span></u> 화날 것 <u>같애 <span class="h">嘎貼</span></u><br>
이런 애가 아닌데<br>
<span class="h">I love you so much</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
이미 난 다 컸다고 생각하는데 <span class="h">[棒！]</span><br>
어쩌면 내 맘인데 왜<br>
내 맘대로 할 수 없는 건 왜<br>
밀어내려고 하면 할수록<br>
<u>자꾸 끌려 왜 자꾸 자꾸 끌려 <span class="h">掐估 哥六 威 掐估掐估 哥六</span></u> <span class="h">baby</span><br>
I'm like <span class="h">TT</span><br>
Just like <span class="h">TT</span><br>
이런 내 맘 모르고 <u>너무해 너무해 <span class="h">ㄋㄚ目嘿ㄋㄚ目嘿</span></u> <br>
I'm like <span class="h">TT [Ah~]</span><br>
Just like <span class="h">TT [Ah~]</span><br>
Tell me that you'd be my baby<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
혹시 이런 나를 알까요<br>
이대로 사라져 버리면 안돼요<br>
이번엔 정말 <u>꼭꼭 <span class="h">勾勾</span></u>  내가 먼저 <span class="h">talk talk</span><br>
다짐 뿐인걸 매번 다짐 뿐인걸<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
이미 난 다 컸다고 생각하는데 <span class="h">[棒！]</span><br>
어쩌면 내 맘인데 왜<br>
내 맘대로 할 수 없는 건 왜<br>
밀어내려고 하면 할수록<br>
<u>자꾸 끌려 왜 자꾸 자꾸 끌려 <span class="h">掐估 哥六 威 掐估掐估 哥六</span></u> <span class="h">baby</span><br>
I'm like <span class="h">TT</span><br>
Just like <span class="h">TT</span><br>
이런 내 맘 모르고 <u>너무해 너무해 <span class="h">ㄋㄚ目嘿ㄋㄚ目嘿</span></u> <br>
I'm like <span class="h">TT [Ah~]</span><br>
Just like <span class="h">TT [Ah~]</span><br>
Tell me that you'd be my baby<br>
            </p>
        </div>`
    },
    {
        id: "Knock Knock",
        title: "Knock Knock",
        category: "twice",
        youtubeId: "8A2t_tAjMz8", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/tw/tc/song/8pdsDmRL2c2emDVzrV",
        videoRefUrl: "https://www.youtube.com/watch?v=7EUAXGIKrNk",
        lyricsHTML: `<div class="lyric-item">
            <p>
열두시가 되면 닫혀요<br>
조금만 서둘러 줄래요<br>
<span class="h">Knock knock knock knock knock on my door<br>
Knock knock knock knock knock on my door</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
밤이 되면 내 맘속에<br>
출입문이 열리죠<br>
누군가 필요해 (<span class="h">Someone else</span>)<br>
<u>자꾸자꾸 <span class="h">掐股掐股</span></u> 서성이네<br>
<u>몰래몰래 <span class="h">摸你摸你</span></u> 훔쳐보네<br>
<span class="h">Knock knock knock knock knock on my door<br>
Knock knock knock knock knock on my door</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
보나마나 또 <span class="h">playboy</span><br>
떠보나마나 <span class="h">bad boy</span><br>
확신이 필요해 <span class="h">Knock knock</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
내 맘이 열리게 두드려줘<br>
세게 <u>쿵 쿵 <span class="h">kung kung</span></u> 다시 한번 <u>쿵 쿵 <span class="h">kung kung</span></u><br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
쉽게 열리지는 않을 거야<br>
Say that you’re mine<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
내일도 모레도 다시 와줘<br>
준비하고 기다릴게 (knock knock)<br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
들어도 계속 듣고 싶은 걸<br>
Knock on my door<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
필요 없어 <span class="h">gold key</span> or <span class="h">get lucky</span><br>
진심이면 everything’s gonna be okay<br>
어떡해 벌써 왔나 봐<br>
잠시만 기다려 줄래요 <span class="h">[內~]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
혼자 있을 때 훅 들어와<br>
정신 없이 날 흔들어 놔<br>
지금이 딱 널 위한<br>
Show time make it yours<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>댕 댕 <span class="h">叮叮</span></u> 울리면 매일 찾아와줄래<br>
<u>뱅뱅 <span class="h">bang bang</span></u> 돌다간 잠들어 버릴 걸요<br>
<span class="h">Knock knock knock knock knock on my door<br>
Knock knock knock knock knock on my door</span><br>
Come in come in come in baby<br>
Take my hands<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
내 맘이 열리게 두드려줘<br>
세게 <u>쿵 쿵 <span class="h">kung kung</span></u> 다시 한번 <u>쿵 쿵 <span class="h">kung kung</span></u><br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
쉽게 열리지는 않을 거야<br>
Say that you’re mine<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
내일도 모레도 다시 와줘<br>
준비하고 기다릴게 (knock knock)<br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
들어도 계속 듣고 싶은 걸<br>
Knock on my door<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Hey hey 이 시간이 지나면<br>
굳어있던 내 맘이 내 내 맘이<br>
아이스크림처럼 녹아 버릴 테니까<br>
<mark>Come knock on my door<br>
<span class="h">[娜多 溝媽我]</span></mark> <br>

            </p>
        </div>
        <div class="lyric-item">
            <p>
내 맘이 열리게 두드려줘<br>
세게 <u>쿵 쿵 <span class="h">kung kung</span></u> 다시 한번 <u>쿵 쿵 <span class="h">kung kung</span></u><br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
쉽게 열리지는 않을 거야<br>
Say that you’re mine<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
내일도 모레도 다시 와줘<br>
준비하고 기다릴게 (knock knock)<br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
들어도 계속 듣고 싶은 걸<br>
Knock on my door<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<mark><span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! One in a! Million!內罵妹！]</span><br>
Knock knock knock knock on my door<br>
I’m freakin’ freakin’ out freakin’ out out knock knock<br>
Knock knock knock knock on my door</mark><br>
<span class="h">Knock knock knock knock knock on my door<br>
Knock knock knock knock knock on my door</span><br>
            </p>
        </div>`
    },
    {
        id: "What is Love?",
        title: "What is Love?",
        category: "twice",
        youtubeId: "i0p1bmr0EmE", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-what-is-love",
        videoRefUrl: "https://www.youtube.com/watch?v=iCMJcXXug3s",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">TWICE! [咖家]!</span><br>
What is love?<br>
<span class="h">內撒浪恩趴樓那! 兔! 哇! 意! 思!</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
매일같이 영화 속에서나<br>
책 속에서나 드라마 속에서 사랑을 느껴<br>
<span class="h">Mm</span> 사랑을 배워<br>
내 일처럼 자꾸 가슴이 뛰어, 두근두근거려<br>
설레임에 부풀어 올라<br>
<span class="h">Mm</span> 궁금해서 미칠 것만 같아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Ooh</span> 언젠간 내게도<br>
이런 일이 실제로 일어날까?<br>
(Ooh-ooh-ooh)<br>
그게 언제쯤일까? 어떤 사람일까?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">I wanna know</span> 사탕처럼 달콤하다는데<br>
<span class="h">I wanna know</span> 하늘을 나는 것 같다는데<br>
I wanna <span class="h">know, know, know, know</span><br>
<span class="h">What is love?</span> 사랑이 어떤 느낌인지<br>
<span class="h">I wanna know</span> 하루 종일 웃고 있다는데<br>
<span class="h">I wanna know</span> 세상이 다 아름답다는데<br>
I wanna <span class="h">know, know, know, know</span><br>
<span class="h">What is love?</span> 언젠간 나에게도 사랑이 올까?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
지금 이런 상상만으로도<br>
떠올려만 봐도 가슴이 터질 것 같은데<br>
<span class="h">Mm</span> 이렇게 좋은데<br>
만일 언젠가 진짜로 내게<br>
사랑이 올 때 난 울어버릴지도 몰라<br>
<span class="h">Mm</span> 정말 궁금해 미칠 것만 같아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Ooh</span> 언젠간 내게도<br>
이런 일이 실제로 일어날까?<br>
(Ooh-ooh-ooh)<br>
그게 언제쯤일까? 어떤 사람일까?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">I wanna know</span> 사탕처럼 달콤하다는데<br>
<span class="h">I wanna know</span> 하늘을 나는 것 같다는데<br>
I wanna <span class="h">know, know, know, know<br>
What is love?</span> 사랑이 어떤 느낌인지<br>
<span class="h">I wanna know</span> 하루 종일 웃고 있다는데<br>
<span class="h">I wanna know</span> 세상이 다 아름답다는데<br>
I wanna <span class="h">know, know, know, know<br>
What is love?</span><br>
언젠간 나에게도 사랑이 올까?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
지금 세상 어느 곳에 살고 <u>있는지 <span class="h">依能擠</span></u> <br>
도대체 언제쯤 나와 만나게 <u>될런지 <span class="h">推龍幾</span></u> <br>
<u>언제, 어떻게 <span class="h">歐姐, 歐都K</span></u> 우리의 인연은<br>
<u>시 <span class="h">系</span></u>작될런지 모르지만 느낌이 어쩐지<br>
진, 진, 진짜 좋을 것 같아 <u>왠지 <span class="h">威季</span></u> <br>
영화, 드라마보다도 더 <u>멋진 <span class="h">摸進</span></u> <br>
사랑이 올 거야, 내 예감 언제나 <u>맞지 <span class="h">麻吉</span></u> <br>
어서 나타나봐, 나는 다 준비가 <u>됐지 <span class="h">推計</span></u> <span class="h">ready</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<u>어디 있을까? <span class="h">歐底斯嘎</span></u>) 찾아낼 거야<br>
(<u>어디 있을까? <span class="h">歐底斯嘎</span></u>) 보고 싶어 죽겠어<br>
더 이상 참을 수 없을 것만 같아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
사탕처럼 달콤하다는데<br>
하늘을 나는 것 같다는데<br>
I wanna <span class="h">know, know, know, know<br>
What is love?</span><br>
사랑이 어떤 느낌인지<br>
하루 종일 웃고 있다는데<br>
세상이 다 아름답다는데<br>
I wanna <span class="h">know, know, know, know<br>
What is love?</span> 언젠간 나에게도 사랑이 올까?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I wanna know (ooh)<br>
<mark><span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! 萬斯欸! 撒浪恩! 特督億!]</span><br>
I wanna know (what is love?)<br>
(I wanna know) I wanna know, know, know, know<br>
What is love?</mark> <br>
(I wanna know, I wanna know)<br>
(What is love?) I wanna know<br>
<mark><span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! WHAT IS LOVE!]</span><br>
I wanna know<br>
I wanna know, know, know, know<br>
What is love?</mark><br>
I wanna know<br>
            </p>
        </div>`
    },
    
    {
        id: "RunAway",
        title: "Run Away",
        category: "TZUYU",
        artist: "TZUYU",                 // 蓋掉頁面預設的 "TWICE"
        themeOverride: {                 // 蓋掉頁面預設的粉色主題
            main: "#074AAB",
            light: "#E6EDF7",
            bg: "#CDDBEE"
        },
        youtubeId: "IIrCrGAX03Y", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.musixmatch.com/lyrics/TZUYU-2/Run-Away",
        videoRefUrl: "https://www.youtube.com/watch?v=yPCn_7DMCw0",
        lyricsHTML: `<div class="lyric-item">
            <p>
Run, run away, 더 늦기 전에 기회를 줄게<br>
내게 안기면, you will beg, beg to stay<br>
Now <span class="h">[Now]</span> say okay, 준비됐으면 눌러봐, play <span class="h">[Play]</span><br>
널 위해 준비한 내 love symphony<br>
So are you ready tonight?<br>
<span class="h">[Run! A! way! 億!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
이건 내 <span class="h">warning</span>, 날 향한 네 <span class="h">yearning</span><br>
정말 확실한 건지<br>
널 내게 <span class="h">turn in</span>, 한 후엔 no <span class="h">turning back</span><br>
준비된 거지?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
마지막 결심하기까지 <span class="h">watching</span><br>
바라보고 있었지<br>
Now I know it's you, 모든 걸 다 줄게<br>
너는 준비됐는지?<br>
<span class="h">[春! 必! 推! 搜!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Run <span class="h">[Run]</span>, run away, 더 늦기 전에 기회를 줄게<br>
내게 안기면, you will beg, beg to stay<br>
Now <span class="h">[Now]</span> say okay, 준비됐으면 눌러봐, play <span class="h">[Play]</span><br>
널 위해 준비한 내 love symphony<br>
So are you ready tonight?<br>
            </p>
        </div>     
        <div class="lyric-item">
            <p>
<mark> 
Are you ready to<br>
Fall in love, so true<br>
This love I have for you<br>
So are you ready tonight?<br>
<span class="h">[Run Away! 秋子we! 春必推搜! 秋子we!]<br>
[Run Away! 秋子we! 春必推搜! 秋子we!]<br>
[屋裡子了! 森嘎ㄎㄟ!]<br>
[屋裡子了! 恩萬嘿!]<br>
[屋裡子了! 撒浪嘿!]</span><br>
</mark>
            </p>
        </div>
        <div class="lyric-item">
            <p>
마음을 먹기까지는 힘들지<br>
먹으면 난 바뀌지 <span class="h">[怕貴記]</span><br>
No turning back, 내 모든 걸 줄게<br>
받을 준비된 거지? <span class="h">[推購季]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
아무도 못 본 날, 이제 너는 볼거야 <br>
So hold on tight <span class="h">[hold on tight]</span><br>
하지만 before I give you my all<br>
마지막으로 물을게<br>
<span class="h">[Run! A! way! 億!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Run <span class="h">[Run]</span>, run away, 더 늦기 전에 기회를 줄게<br>
내게 안기면, you will beg, beg to stay<br>
Now <span class="h">[Now]</span> say okay, 준비됐으면 눌러봐, play <span class="h">[Play]</span><br>
널 위해 준비한 내 love symphony<br>
So are you ready tonight?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<mark>(Oh) are you ready to<br>
(Oh, whoa) fall in love, so true<br>
(Oh, whoa) this love I have for you<br>
So are you ready tonight?<br>
<span class="h">[Run Away! 秋子we! 春必推搜! 秋子we!]<br>
[Run Away! 秋子we! 春必推搜! 秋子we!]<br>
[屋裡子了! 森嘎ㄎㄟ!]<br>
[屋裡子了! 恩萬嘿!]<br>
[屋裡子了! 撒浪嘿!]</span><br>
</mark>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<mark>Oh-oh-oh-oh-oh (oh)<br>
Oh-oh-oh-oh-oh (oh, oh)<br>
Oh-oh-oh-oh, oh-oh<br>
So are you ready tonight?<br>
<span class="h">[Run Away! 秋子we! 春必推搜! 秋子we!]<br>
[Run Away! 秋子we! 春必推搜! 秋子we!]<br>
[屋裡子了! 森嘎ㄎㄟ!]<br>
[屋裡子了! 恩萬嘿!]<br>
[屋裡子了! 撒浪嘿!]<br>
[Run! A! way! 億!]</span> </mark><br>
            </p>
        </div>`
    },

    {
        id: "DIVEIN",
        title: "DIVE IN",
        category: "TZUYU",
        artist: "TZUYU",                 // 蓋掉頁面預設的 "TWICE"
        themeOverride: {                 // 蓋掉頁面預設的粉色主題
            main: "#074AAB",
            light: "#E6EDF7",
            bg: "#CDDBEE"
        },
        youtubeId: "CDtaA78aSzE", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/tw/tc/song/GsLYP6F0Z-QUaSBb4C",
        videoRefUrl: "https://www.youtube.com/watch?v=qn1nBgX8XEQ",
        lyricsHTML: `<div class="lyric-item">
            <p>
Let's evaluate this situation<br>
Let's communicate with conversation<br>
I don't wanna wait, I'm too impatient<br>
Oh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Boy you way too loud, I had to check that<br>
Quit runnin' your mouth or you'll never get that<br>
I don't play around, already did that<br>
Oh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
You won't hurt my feelings<br>
Tell me straight to my face<br>
You can't lie to me<br>
If you try, you'll be wasting your time<br>
Your time, yeah<br>
It ain't hard for me<br>
I just level right up<br>
Need that privacy,<br>
Keep it locked, keep it shut<br>
Every time<br>
Oh-oh-oh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Who do you love? <span class="h">Who do you love?</span><br>
Is it me or the thought of getting off?<br>
Can't dive in <span class="h">[ChouTzuYu!]</span><br>
Can't dive in. <span class="h">[ChouTzuYu!]</span><br>
Who do you love? <span class="h">Who do you love?</span><br>
Is it me or am I just a moment crush?<br>
Can't dive in <span class="h">[ChouTzuYu!]</span><br>
Can't dive in. <span class="h">[ChouTzuYu!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Put your phone away on the <span class="h">other side</span><br>
Keep looking straight at me, need them <span class="h">butterflies</span><br>
We party private, yeah, you know the <span class="h">vibe, vibe</span><br>
If you wanna dive in, yeah<br>
<p class="tip">停兩拍</p><br>
<span class="h">[I! Love! Tzu!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
If you wanna dive, yeah<br>
If you wanna dive, If you wanna dive, dive, yeah<br>
So if you wanna dive, if you wanna dive, dive<br>
Oh, no<br>
If you wanna dive, oh, no <br>
<p class="tip">停兩拍</p><br>
<span class="h">[Yes! I! wanna!]</span><br>
If you wanna dive in, yeah<br>
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