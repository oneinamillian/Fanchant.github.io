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
            <p>
                <span class="tip">前奏開始播放後  三個八拍</span><br>
                <span class="h">[Ki! 大！流！搜！ 兔！哇！意！思！]</span>
            </p>
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
            <p>
                어떤 사람은 어머님이 누구냐고<br>
                신선하게 말 걸어도<br>
                아무 느낌이 안 들죠<br>
                하지만 나도 누군가 하고 사랑에<br>
                빠져보고 싶어 <span class="h">baby <br></span>
                잘 들어요 내 boy<br>
            </p>
            <p>
                단 한번도 느껴본 적 없는 걸<br>
                알게 해주는<br>
                <u>사람 기다리고 있는 걸 <span class="h">撒郎KI搭哩狗衣能勾</span></u> <br>
                얼마가 <u>돼도 <span class="h">推斗</span></u>  기다리고 <u>싶어<span class="highlight">溪坡</span></u> <br>
                I just wanna fall in love<br>
            </p>
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
            <p>
                날 <u>봐<span class="h">八</span></u>  거<u>봐<span class="highlight">八</span></u>  또 두 번 봐<br>
                한번 지나치고 등을 돌려 쳐다봐 <span class="h">TWICE</span> <br>
                어딜 가더라도 항상 민 낯<br>
                하지만 내가 제일 <u>빛나<span class="h">冰那</span></u> <br>
                낮은 신발 신어도 가치는 high <br>
            </p>
            <p>
                머릿속엔 늘 영화 속 같은 la la la <br>
                장면들이 지나가네 생각만해도 떨리네 yeah<br>
                이제는 나도 누군가 하고 사랑에 <br>
                빠져 보고 싶어 <span class="h">baby <br></span><br>
                잘 들어요 내 boy <br>
            </p>
            <p>
                단 한번도 느껴본 적 없는 걸<br>
                알게 해주는<br>
                <u>사람 기다리고 있는 걸 <span class="h">撒郎KI搭哩狗衣能勾</span></u> <br>
                얼마가 <u>돼도 <span class="h">推斗</span></u>  기다리고 <u>싶어<span class="highlight">溪坡</span></u> <br>
                I just wanna fall in love<br>
            </p>
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
            <p>
                아무하고 만나 시작하기 싫어<br>
                쉽지 않은 여자 그게 나인걸<br>
            </p>
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
            <p>
<span class="h">[兔！哇！意！思！]</span> <br>
매일 울리는 <u>벨벨벨 <span class="h">配配配</span></u> <br>
이젠 나를 배려 해줘<br>
배터리 낭비하긴 싫어<br>
자꾸만 봐 자꾸<u>자꾸만와 <span class="h">掐故媽襪</span> </u> <br>
전화가 펑 터질 것만 같아<br>
            </p>
            <p>
<u>몰라 몰라 <span class="h">摸拉 摸拉</span></u>  숨도 못 쉰대<br>
나 때문에 힘들어<br>
쿵 심장이 떨어진대 왜<br>
걔 말은 나 너무 예쁘대<br>
자랑하는건 아니고<br>
            </p>
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
            <p>
(I need you)<br>
안절부절 목소리가 여기까지 <u>들려 <span class="h">特六</span></u> <br>
땀에 젖은 전화기가 여기서도 <u>보여 <span class="h">波優</span></u> <br>
바로 바로 대답하는 것도 <u>매력 없어 <span class="h">妹六 溝搜</span></u> <br>
메시지만 읽고 확인 안 하는 건 <u>기본 <span class="h">ㄎㄧ波</span></u> <br>
            </p>
            <p>
<u>어어어 <span class="h">歐歐歐~</span></u>  너무 심했나 boy<br>
이러다가 지칠까 봐 걱정되긴 하고<br>
<u>어어어 <span class="h"> 歐歐歐~</span></u> 안 그러면 내가 더<br>
빠질 것만 같어 <u>빠질 것만 같어 <span class="h">巴基 摳蠻 咖透</span></u> <br>
            </p>
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
            <p>
나도 니가 좋아 상처 입을까 봐<br>
걱정되지만 여자니까 이해해주길<br>
속 마음 들킬 까봐 겁이나<br>
지금처럼 조금만 더 다가와<br>
그리 오래 걸리진 않아<br>
            </p>
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
        `
    },
    {
        id: "TT",
        title: "TT",
        category: "twice",
        youtubeId: "ePpPVE-GGJw", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/tw/tc/song/Ot8tSH593DzwZmwlih",
        videoRefUrl: "https://www.youtube.com/watch?v=LjvvHXfELVI",
        lyricsHTML: `
            <p>
<span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! One in a! Million! ㄙㄟ桑ㄟ！炭！哈娜不膩！兔！哇！意！思！]</span><br> 
이러지도 못하는데 저러지도 못하네<br>
그저 바라보며 <span class="h">ba ba ba baby</span><br>
매일 상상만 해 이름과 함께<br>
쓱 말을 놨네 baby<br>
아직 우린 모르는 사인데<br>
            </p>
            <p>
아무거나 걸쳐도 아름다워 <span class="h">[打窩]</span><br>
거울 속 단 둘이서 하는<br>
Fashion <span class="h">show show</span><br>
이번에 정말 <u>꼭꼭 <span class="h">勾勾</span></u> 내가 먼저 <span class="h">talk talk </span><br>
다짐 뿐인걸 매번 다짐 뿐인걸<br>
            </p>
            <p>
<u>나 나 나 나 나 나 나 <span class="h">娜娜娜娜娜娜娜</span></u> <br>
콧노래가 나오다가 나도 몰래<br>
눈물 날 것 <u>같애 <span class="h">嘎貼</span></u> <br>
아닌 것 <u>같애 <span class="h">嘎貼</span></u> 내가 아닌 것 <u>같애 <span class="h">嘎貼</span></u><br>
<span class="h">I love you so much</span><br>
            </p>
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
            <p>
어처구니 없다고 해<br>
얼굴 값을 못한대<br>
전혀 위로 안돼<br>
<span class="h">Ba ba ba baby</span><br>
미칠 것 같애<br>
이 와중에 왜<br>
배는 또 고픈 건데<br>
하루 종일 먹기만 하는데<br>
</p>
            <p>
<u>맴매매매 <span class="h">妹妹妹妹</span></u>  아무 죄도 없는 인형만 <u>때찌 <span class="h">ㄉㄟ季</span></u> <br>
종일 앉아있다가 엎드렸다<br>
시간이 <u>획획획 <span class="h">灰灰灰</span></u> <br>
피부는 왜 이렇게 또 <u>칙칙 <span class="h">七七</span></u> <br>
자꾸 틱틱 거리고만 <u>싶지 <span class="h">希記</span></u> <br>
엄만 귀찮게 계속 <u>왜왜왜왜왜 <span class="h">威威威威威</span></u> <br>
            </p>
            <p>
<u>나 나 나 나 나 나 나 <span class="h">娜娜娜娜娜娜娜</span></u> <br>
콧노래가 나오다가 나도 몰래<br>
짜증날 것 <u>같애 <span class="h">嘎貼</span></u> 화날 것 <u>같애 <span class="h">嘎貼</span></u><br>
이런 애가 아닌데<br>
<span class="h">I love you so much</span><br>
            </p>
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
            <p>
혹시 이런 나를 알까요<br>
이대로 사라져 버리면 안돼요<br>
이번엔 정말 <u>꼭꼭 <span class="h">勾勾</span></u>  내가 먼저 <span class="h">talk talk</span><br>
다짐 뿐인걸 매번 다짐 뿐인걸<br>
            </p>
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
  `
    },
    {
        id: "KnockKnock",
        title: "Knock Knock",
        category: "twice",
        youtubeId: "8A2t_tAjMz8", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/tw/tc/song/8pdsDmRL2c2emDVzrV",
        videoRefUrl: "https://www.youtube.com/watch?v=7EUAXGIKrNk",
        lyricsHTML: `
            <p>
열두시가 되면 닫혀요<br>
조금만 서둘러 줄래요<br>
<span class="h">Knock knock knock knock knock on my door<br>
Knock knock knock knock knock on my door</span><br>
            </p>
            <p>
밤이 되면 내 맘속에<br>
출입문이 열리죠<br>
누군가 필요해 (<span class="h">Someone else</span>)<br>
<u>자꾸자꾸 <span class="h">掐股掐股</span></u> 서성이네<br>
<u>몰래몰래 <span class="h">摸你摸你</span></u> 훔쳐보네<br>
<span class="h">Knock knock knock knock knock on my door<br>
Knock knock knock knock knock on my door</span><br>
            </p>
            <p>
보나마나 또 <span class="h">playboy</span><br>
떠보나마나 <span class="h">bad boy</span><br>
확신이 필요해 <span class="h">Knock knock</span><br>
            </p>
            <p>
내 맘이 열리게 두드려줘<br>
세게 <u>쿵 쿵 <span class="h">kung kung</span></u> 다시 한번 <u>쿵 쿵 <span class="h">kung kung</span></u><br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
쉽게 열리지는 않을 거야<br>
Say that you’re mine<br>
            </p>
            <p>
내일도 모레도 다시 와줘<br>
준비하고 기다릴게 (knock knock)<br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
들어도 계속 듣고 싶은 걸<br>
Knock on my door<br>
            </p>
            <p>
필요 없어 <span class="h">gold key</span> or <span class="h">get lucky</span><br>
진심이면 everything’s gonna be okay<br>
어떡해 벌써 왔나 봐<br>
잠시만 기다려 줄래요 <span class="h">[內~]</span><br>
            </p>
            <p>
혼자 있을 때 훅 들어와<br>
정신 없이 날 흔들어 놔<br>
지금이 딱 널 위한<br>
Show time make it yours<br>
            </p>
            <p>
<u>댕 댕 <span class="h">叮叮</span></u> 울리면 매일 찾아와줄래<br>
<u>뱅뱅 <span class="h">bang bang</span></u> 돌다간 잠들어 버릴 걸요<br>
<span class="h">Knock knock knock knock knock on my door<br>
Knock knock knock knock knock on my door</span><br>
Come in come in come in baby<br>
Take my hands<br>
            </p>
            <p>
내 맘이 열리게 두드려줘<br>
세게 <u>쿵 쿵 <span class="h">kung kung</span></u> 다시 한번 <u>쿵 쿵 <span class="h">kung kung</span></u><br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
쉽게 열리지는 않을 거야<br>
Say that you’re mine<br>
            </p>
            <p>
내일도 모레도 다시 와줘<br>
준비하고 기다릴게 (knock knock)<br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
들어도 계속 듣고 싶은 걸<br>
Knock on my door<br>
            </p>
            <p>
Hey hey 이 시간이 지나면<br>
굳어있던 내 맘이 내 내 맘이<br>
아이스크림처럼 녹아 버릴 테니까<br>
<mark>Come knock on my door<br>
<span class="h">[娜多 溝媽我]</span></mark> <br>
            </p>
            <p>
내 맘이 열리게 두드려줘<br>
세게 <u>쿵 쿵 <span class="h">kung kung</span></u> 다시 한번 <u>쿵 쿵 <span class="h">kung kung</span></u><br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
쉽게 열리지는 않을 거야<br>
Say that you’re mine<br>
            </p>
            <p>
내일도 모레도 다시 와줘<br>
준비하고 기다릴게 (knock knock)<br>
Baby <span class="h">knock knock knock knock knock on my door<br>
Knock knock knock knock knock</span><br>
들어도 계속 듣고 싶은 걸<br>
Knock on my door<br>
            </p>
            <p>
<mark><span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! One in a! Million!內罵妹！]</span><br>
Knock knock knock knock on my door<br>
I’m freakin’ freakin’ out freakin’ out out knock knock<br>
Knock knock knock knock on my door</mark><br>
<span class="h">Knock knock knock knock knock on my door<br>
Knock knock knock knock knock on my door</span><br>
            </p>
`
    },
{
id: "SIGNAL",
        title: "SIGNAL",
        category: "twice",
        youtubeId: "VQtonf1fv_s", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-signal",
        videoRefUrl: "https://www.youtube.com/watch?v=urn2g4RkhHk",
        lyricsHTML:`
            <p>
                Trying to let you know<br>
<span class="h">Sign</span><u> 을 보내 <span class="h">嫩 波捏</span></u>, <span class="h">signal</span><u> 보내 <span class="h">波捏</span></u><br>
Hey, I must let you know<br>
<span class="h">Sign</span><u> 을 보내 <span class="h">嫩 波捏</span></u>, <span class="h">signal</span><u> 보내 <span class="h">波捏</span></u><br>
            </p>
            <p>
                Sign을 보내, signal 보내<br>
Sign을 보내, signal 보내<br>
Sign을 보내, signal 보내<br>
<span class="h">I must let you know</span><br>
            </p>
            <p>
                (Hey) sign을 보내, signal 보내<br>
근데 <u>전혀 안 통해 <span class="h">邱妞 安 通嘿</span></u> <br>
눈빛을 보내 눈치를 주네<br>
<u>근데 못 알아듣네 <span class="h">肯爹 某 塔拉 的捏</span></u> <br>
답답해서 미치겠다, <u>정말 <span class="h">窮賣</span></u><br>
왜 그런지 모르겠다, <u>정말 <span class="h">窮賣</span><br>
다시 한 번 힘을 내서<br>
<span class="h">Sign</span><u> 을 보내 <span class="h">嫩 波捏</span></u>, <span class="h">signal</span><u> 보내 <span class="h">波捏</span></u><br>
            </p>
            <p>
                눈짓도 손짓도 <U>어떤 표정도 <span class="h">歐動 潑冏豆</span> <br>
소용이 없네, <u>하나도 안 통해 <span class="h">哈娜都 安通嘿</span></u> <br>
눈치도 코치도 전혀 없나 봐<br>
<u>더 이상 어떻게 내 맘을 표현해 <span class="h">偷 以桑 歐都ㄎㄟ 內 麻ㄇ 潑優內</span></u> <br>
            </p>
            <p>
                언제부턴가 난 네가 <u>좋아 <span class="h">邱哇</span></u><br>
지기 시작했어, <u>바보야 <span class="h">趴波呀</span></u><br>
왜 이렇게도 내 맘을 <u>몰라 <span class="h">摸拉</span></u>?<br>
언제까지 이렇게 둔하게<br>
나를 친구로만 <u>대할래 <span class="h">貼哈勒</span></u>?<br>
내가 원하는 건 <u>그게 아닌데 <span class="h">ㄎ給 阿逆ㄉㄟ</span></u><br>
            </p>
            <p>
                Signal 보내, signal 보내<br>
<u>찌릿 찌릿 찌릿 찌릿 <span class="h">機哩 機哩 機哩 機哩</span></u> <br>
난 너를 원해, 난 너를 원해<br>
<u>왜 반응이 없니 <span class="h">威 趴ㄋ以 歐逆</span></u>?<br>
만날 때 마다 마음을 담아<br>
<u>찌릿 찌릿 찌릿 찌릿 <span class="h">機哩 機哩 機哩 機哩</span></u> <br>
기다리잖아, 다 보이잖아<br>
<u>왜 알지 못하니 <span class="h">威 阿季 摸塔逆</span></u> <br>
            </p>
            <p>
              Trying to let you know<br>
<span class="h">Sign</span><u> 을 보내 <span class="h">嫩 波捏</span></u>, <span class="h">signal</span><u> 보내 <span class="h">波捏</span></u><br>
I must let you know<br>
<span class="h">Sign</span><u> 을 보내 <span class="h">嫩 波捏</span></u>, <span class="h">signal</span><u> 보내 <span class="h">波捏</span></u><br>
            </p>
            <p>
                널 보며 웃으면 <u>알아채야지 <span class="h">阿拉切呀機</span></u> <br>
오늘만 몇 번째 <u>널 보며 웃는데 <span class="h">no 頗謬 五嫩ㄉㄟ</span></u> <br>
자꾸 말을 걸면 <u>좀 느껴야지 <span class="h">冏 ㄋ溝呀機</span></u> <br>
계속 네 곁에 <u>머물러있는데 <span class="h">某木漏以嫩ㄉㄟ</span></u> <br>
            </p>
            <p>
                언제부턴가 난 네가 <u>좋아 <span class="h">邱哇</span></u><br>
지기 시작했어, <span class="h">趴波呀</span></u><br>
왜 이렇게도 내 맘을 <u>몰라 <span class="h">摸拉</span></u>?<br>
언제까지 이렇게 둔하게<br>
나를 친구로만 <u>대할래 <span class="h">貼哈勒</span></u>?<br>
내가 원하는 건 <u>그게 아닌데 <span class="h">ㄎ給 阿逆ㄉㄟ</span></u><br>
            </p>
            <p>
              Signal 보내, signal 보내<br>
<u>찌릿 찌릿 찌릿 찌릿 <span class="h">機哩 機哩 機哩 機哩</span></u> <br>
난 너를 원해, 난 너를 원해<br>
<u>왜 반응이 없니 <span class="h">威 趴ㄋ以 歐逆</span></u>?<br>
만날 때 마다 마음을 담아<br>
<u>찌릿 찌릿 찌릿 찌릿 <span class="h">機哩 機哩 機哩 機哩</span></u> <br>
기다리잖아, 다 보이잖아<br>
<u>왜 알지 못하니 <span class="h">威 阿季 摸塔逆</span></u>  <br>
            </p>
            <p>
                드르르드드 드르르드드<br>
<u>찌릿 찌릿 찌릿 찌릿 <span class="h">機哩 機哩 機哩 機哩</span></u><br>
드르르드드 드르르드드<br>
<u>왜 반응이 없니 <span class="h">威 趴ㄋ以 歐逆</span></u>?<br>
드르르드드 드르르드드<br>
<u>찌릿 찌릿 찌릿 찌릿 <span class="h">機哩 機哩 機哩 機哩</span></u><br>
드르르드드 드르르드드<br>
<u>왜 알지 못하니 <span class="h">威 阿季 摸塔逆</span></u><br>
            </p>
            <p>
                Sign을 보내, signal 보내<br>
근데 <u>전혀 안 통해 <span class="h">邱妞 安 通嘿</span></u><br>
눈빛을 보내, 눈치를 주네<br>
<u>근데 못 알아듣네 <span class="h">肯爹 某 塔拉 的捏</span></u> <br>
답답해서 미치겠다, <u>정말 <span class="h">窮賣</span></u> <br>
왜 그런지 모르겠다, <u>정말 <span class="h">窮賣</span></u> <br>
다시 한 번 힘을 내서<br>
<span class="h">Sign</span><u> 을 보내 <span class="h">嫩 波捏</span></u>, <span class="h">signal</span><u> 보내 <span class="h">波捏</span></u><br>
            </p>
        `
},
{
id: "LIKEY",
        title: "LIKEY",
        category: "twice",
        youtubeId: "V2hlQkVJZhE", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-likey",
        videoRefUrl: "https://www.youtube.com/watch?v=DA77N9nRJSo",
        lyricsHTML:`
            <p>
<p class="tip">第二個八拍</p><br>
<span class="h">[TWICE!]</span><br>
<p class="tip">一個八拍</p><br>
<span class="h">[LI! KEY了! 努囉九! 兔! 哇! 意! 思!]</span><br>        
설렌다, me likey<br>
Me likey likey likey<br>
Me likey likey likey<br>
<u>두근두근두근 <span class="h">督跟督跟督跟</span></u> <span class="h">heart heart</span><br>
Me likey<br>
Me likey likey likey<br>
Me likey likey likey<br>
<u>두근두근두근 <span class="h">督跟督跟督跟</span></u><br>
            </p>
            <p>
자꾸 드러내고 싶지 <u>자꾸만 <span class="h">掐辜滿</span></u> <br>
사소한 것 하나까지 <u>전부다 <span class="h">窮ㄅㄨ打</span></u><br>
작은 화면 속에 내가 제일 예뻐 보이고파<br>
아직은 감춰, 이런 내 마음 꾹꾹<br>
            </p>
            <p>
멋 부린다는 건 정말 귀찮은 거<br>
그렇다고 절대 대충할 수가 없는걸<br>
매일 가슴 뛰게 해, 이건 네가 몰라야만 돼<br>
그러면서 뻔뻔하게<br>
            </p>
            <p>
BB크림 <u>파파파 <span class="h">啪啪啪</span></u> <br>
립스틱을 <u>맘맘마 <span class="h">媽媽媽</span></u> <br>
카메라에 담아볼까, <u>예쁘게 <span class="h">耶ㄅ給</span></u> <br>
이거 보면 <u>웃어줘 <span class="h">屋搜九</span></u> <br>
그리고 꼭 <u>눌러줘 <span class="h">no囉九</span> <br>
저 밑에 앙증맞고 <u>새빨간 <span class="h">ㄙㄟ掰乾</span></u> <span class="h">heart, heart</span><br>
            </p>
            <p>
근데 <u>좋아요 <span class="h">邱哇優</span></u> 란 말은 뻔해<br>
내 맘 표현하기엔 부족한데<br>
근데 <u>좋아요 <span class="h">邱哇優</span></u>, 잠도 못 자도<br>
지각하게 돼도 좋은걸<br>
            </p>
            <p>
설렌다, me likey<br>
Me likey likey likey<br>
Me likey likey likey<br>
<u>두근두근두근 <span class="h">督跟督跟督跟</span></u> <span class="h">heart heart</span><br>
Me likey<br>
Me likey likey likey<br>
Me likey likey likey<br>
<u>두근두근두근 <span class="h">督跟督跟督跟</span></u> <span class="h">heart heart</span><br>
            </p>
            <p>
숨을 훕 참아, 지퍼를 올리게<br>
다시 한번 허리를 훕<br>
<u>으라차차차 <span class="h">ㄜ拉恰恰恰</span></u>, 다 입었다, <span class="h">baby</span><br>
세상엔 예쁜 옷이 너무나도 <u>많고, 많아 <span class="h">滿摳 滿那</span></u> <br>
            </p>
            <p>
BB크림 <u>파파파 <span class="h">啪啪啪</span></u> <br>
립스틱을 <u>맘맘마 <span class="h">媽媽媽</span></u> <br>
카메라에 담아볼까, <u>예쁘게 <span class="h">耶ㄅ給</span></u> <br>
이거 보면 <u>웃어줘 <span class="h">屋搜九</span></u> <br>
그리고 꼭 <u>눌러줘 <span class="h">no囉九</span> <br>
저 밑에 앙증맞고 <u>새빨간 <span class="h">ㄙㄟ掰乾</span></u> <span class="h">heart, heart</span><br>
            </p>
            <p>
근데 <u>좋아요 <span class="h">邱哇優</span></u>란 말은 뻔해<br>
내 맘 표현하기엔 부족한데<br>
근데 <u>좋아요 <span class="h">邱哇優</span></u>, 잠도 못 자도<br>
지각하게 돼도 좋은걸<br>
            </p>
            <p>
그저 바라보고 있지<br>
아무 말도 할 수 없지, oh<br>
조금만 더 다가와요, 내 맘 알아줘요<br>
더 이상 감추고만 싶지 않아<br>
            </p>
            <p>
Ah, 오늘따라 기분이 <u>꿀꿀해 <span class="h">古古勒</span></u> <br>
안 그런척해 봐도 <u>슬프냬 <span class="h">ㄙㄆ捏</span></u> <br>
아무 반응 없는 너 땜에 삐졌는데<br>
눈치 없이 친구들이 나오라고 <u>부르네 <span class="h">鋪ㄌ內</span></u> <br>
            </p>
            <p>
Ooh, 잠깐만, 잠깐만, 연락이 이제야 오는걸, <span class="h">woo</span><br>
하루종일 기분이 왔다 갔다<br>
울다가도 다시 신나서 <u>춤추네 <span class="h">春秋內</span></u> <br>
            </p>
            <p>
[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! ONE IN A! MILLION! 邱哇優! LI! KEY了! 努囉九! 兔!哇!意!思!]<br>
            </p>
            <p>
설렌다, me likey<br>
Me likey likey likey<br>
Me likey likey likey<br>
<u>두근두근두근 <span class="h">督跟督跟督跟</span></u> <span class="h">heart heart</span><br>
Me likey<br>
Me likey likey likey<br>
Me likey likey likey<br>
<u>두근두근두근 <span class="h">督跟督跟督跟</span></u> <span class="h">heart heart</span><br>
            </p>
        `
},
{
id: "HeartShaker",
        title: "Heart Shaker",
        category: "twice",
        youtubeId: "o2PHqq19ufM", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-heart-shaker",
        videoRefUrl: "https://www.youtube.com/watch?v=M0dlmpn8E3U",
        lyricsHTML:`
            <p>
<span class="h">Yeah, yeah, yeah, yeah, yeah</span><br>
Come and be my love, come and be my love, baby<br>
<span class="h">Yeah, yeah, yeah, yeah, yeah<br>
    <mark>
        [內 新降ㄜ 亨的漏! 兔! 哇! 意! 思!]</span><br>
Come and be my love, come and be my love, baby<br>
    </mark>
            </p>
            <p>
멍하니 서서 막 고민고민 해<br>
나 이거 진짜 잘하는 짓인지<br>
<span class="h">Yeah, yeah, yeah, yeah</span> 뭐 어때<br>
<span class="h">No, no, no, no</span> 미쳤어<br>
            </p>
            <p>
난 쯔위라고 해<br>
무작정 인사할까?<br>
내 전화번호야<br>
쪽질 주고 도망칠까?<br>
<span class="h">Yeah, yeah, yeah, yeah</span><br>
어떡해 <span class="h">no, no, no, no</span><br>
            </p>
            <p>
지금이야 girl, you can <span class="h">do it</span><br>
눈이 마주치고 있잖아<br>
Love is <span class="h">timing</span><br>
놓치면 후회할지 몰라<br>
Love is coming, coming<br>
좀만 더 용길 내<br>
<u>더는 망설이지 마 <span class="h">偷嫩 忙搜哩機 麻</span></u> <br>
            </p>
            <p>
이상하게 생각해도<br>
어쩔 수 없어 <u>반했으니까 <span class="h">怕內ㄙ尼嘎</span></u> <br>
You're my heart <span class="h">shaker, shaker</span> 놓치기 싫어<br>
You're my heart <span class="h">shaker, shaker</span> 어떡해<br>
            </p>
            <p>
바보처럼 안 기다려<br>
내가 말할래 <u>반해버렸다고 <span class="h">怕內潑六搭古</span></u> <br>
니가 맘에 든다고 하루 종일 보고 싶다고<br>
Would you be my love?<br>
<u>반해버렸으니까 <span class="h">趴內潑六ㄙ尼ㄋㄧ嘎</span></u> <br>
            </p>
            <p>
표정관리 해 어색하지 않게<br>
말투는 <span class="h">cool, cool</span><br>
긴장할 필요 없어<br>
<span class="h">Yeah, yeah, yeah, yeah</span> 정신 바짝 차리고 집중해<br>
<span class="h">No, no, no, no</span> 어떡해 똑바로 못 보겠어<br>
            </p>
            <p>
지금이야 girl, you can <span class="h">do it</span><br>
눈이 마주치고 있잖아<br>
Love is <span class="h">timing</span><br>
놓치면 후회할지 몰라<br>
Love is coming, coming<br>
좀만 더 용길 내<br>
<u>더는 망설이지 마 <span class="h">偷嫩 忙搜哩機 麻</span></u> <br>
            </p>
            <p>
이상하게 생각해도<br>
어쩔 수 없어 <u>반했으니까 <span class="h">怕內ㄙ尼嘎</span></u><br>
You're my heart <span class="h">shaker, shaker</span> 놓치기 싫어<br>
You're my heart <span class="h">shaker, shaker</span> 어떡해<br>
            </p>
            <p>
바보처럼 안 기다려<br>
내가 말할래 <u>반해버렸다고 <span class="h">怕內潑六搭古</span></u><br>
니가 맘에 든다고 하루 종일 보고 싶다고<br>
Would you be my love?<br>
<u>반해버렸으니까 <span class="h">趴內潑六ㄙ尼ㄋㄧ嘎</span></u><br>
            </p>
            <p>
너도 날 원하게 될 거야, 날 사랑하게 될 걸<br>
간절히 바라 너도 나와 같기를 oh, yeah<br>
            </p>
            <p>
망설이지 마 먼저 다가가<br>
사랑을 말해, 주저 하지 마<br>
Come baby, be my, be my, be my love<br>
Come baby, <span class="h">bae, bae, bae, bae</span><br>
            </p>
            <p>
이상하게 생각해도<br>
어쩔 수 없어 <u>반했으니까 <span class="h">怕內ㄙ尼嘎</span></u> <br>
You're my heart <span class="h">shaker, shaker</span> 놓치기 싫어<br>
You're my heart <span class="h">shaker, shaker</span> 어떡해<br>
            </p>
            <p>
바보처럼 안 기다려<br>
내가 말할래 <u>좋아한다고 <span class="h">邱哇和大谷</span></u> <br>
니가 맘에 든다고, 하루 종일 보고 싶다고<br>
사랑한다고<br>
반해버렸다고<br>
            </p>
            <p>
<span class="h">Yeah, yeah, yeah, yeah, yeah</span><br>
You are mine, <span class="h">be mine</span><br>
You are mine, <span class="h">be mine</span><br>
<span class="h">Yeah, yeah, yeah, yeah, yeah</span> 좋아한다고 말할래<br>
반했으니까<br>
            </p>`
},
    {
        id: "WhatisLove?",
        title: "What is Love?",
        category: "twice",
        youtubeId: "i0p1bmr0EmE", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-what-is-love",
        videoRefUrl: "https://www.youtube.com/watch?v=iCMJcXXug3s",
        lyricsHTML: `
            <p>
<span class="h">TWICE! [咖家]!</span><br>
What is love?<br>
<span class="h">內撒浪恩趴樓那! 兔! 哇! 意! 思!</span><br>
            </p>
            <p>
매일같이 영화 속에서나<br>
책 속에서나 드라마 속에서 사랑을 느껴<br>
<span class="h">Mm</span> 사랑을 배워<br>
내 일처럼 자꾸 가슴이 뛰어, 두근두근거려<br>
설레임에 부풀어 올라<br>
<span class="h">Mm</span> 궁금해서 미칠 것만 같아<br>
            </p>
            <p>
<span class="h">Ooh</span> 언젠간 내게도<br>
이런 일이 실제로 일어날까?<br>
(Ooh-ooh-ooh)<br>
그게 언제쯤일까? 어떤 사람일까?<br>
            </p>
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
            <p>
지금 이런 상상만으로도<br>
떠올려만 봐도 가슴이 터질 것 같은데<br>
<span class="h">Mm</span> 이렇게 좋은데<br>
만일 언젠가 진짜로 내게<br>
사랑이 올 때 난 울어버릴지도 몰라<br>
<span class="h">Mm</span> 정말 궁금해 미칠 것만 같아<br>
            </p>
            <p>
<span class="h">Ooh</span> 언젠간 내게도<br>
이런 일이 실제로 일어날까?<br>
(Ooh-ooh-ooh)<br>
그게 언제쯤일까? 어떤 사람일까?<br>
            </p>
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
            <p>
(<u>어디 있을까? <span class="h">歐底斯嘎</span></u>) 찾아낼 거야<br>
(<u>어디 있을까? <span class="h">歐底斯嘎</span></u>) 보고 싶어 죽겠어<br>
더 이상 참을 수 없을 것만 같아<br>
            </p>
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
            </p>`
    },
{
id: "DanceTheNightAway",
        title: "Dance The Night Away",
        category: "twice",
        youtubeId: "Fm5iP0S1z9w", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-dance-the-night-away",
        videoRefUrl: "https://www.youtube.com/watch?v=ve7PuS91s14",
        lyricsHTML:`
            <p>
라라라라라라라<br>
라라라라라라라<br>
<mark><span class="h">[素! 不! 衝! 冏! <br>
    兔! 哇!意! 思!]</span><br>
라라라라라라라<br>
라라라라라라라</mark><br>
            </p>
            <p>
You and me in the moonlight, <span class="h">ah ah ah ah</span><br>
별 꽃 축제 열린 밤, <span class="h">ah ah ah ah</span><br>
파도 소리를 틀고 춤을 추는 이 순간<br>
이 느낌 정말 <u>딱야 <span class="h">大ㄍㄧㄚ</span></u>, <span class="h">ah</span><br>
바다야 우리와 같이 놀아, <span class="h">ah</span><br>
바람아 너도 이쪽으로 와, <span class="h">whoa</span><br>
달빛 조명 아래서 너와 나와 세상과<br>
다 같이 party all night long, <span class="h">yeah it's good</span><br>
            </p>
            <p>
If you wanna have some fun<br>
짭짤한 공기처럼<br>
이 순간의 특별한<br>
행복을 놓치지마<br>
            </p>
            <p>
<span class="h">One two three, let's go</span><br>
<u>저 우주 위로 <span class="h">邱 屋啾 we囉</span></u> <br>
날아갈 듯 춤추러 가 <span class="h">hey</span><br>
Let's dance the night away<br>
            </p>
            <p>
Let's dance the night away<br>
Yeah<br>
<span class="h">One two three, let's go</span><br>
<u>저 바다 건너 <span class="h">邱 八他 空弄</span></u> <br>
들릴 듯 소리 질러<br>
Let's dance the night away<br>
            </p>
            <p>
Dance the night away<br>
Let's dance the night away (<span class="h">hoo</span>)<br>
Dance the night away<br>
Let's dance the night away<br>
            </p>
            <p>
You and me in this cool night, <span class="h">ah ah ah ah</span><br>
미소 짓는 반쪽 달, <span class="h">ah ah ah ah</span><br>
그 언젠가 너와 나 저 달 뒷면으로 가<br>
파티를 열기로 약속 <span class="h">yeah, it's good</span> (hey)<br>
            </p>
            <p>
If you wanna have some fun<br>
은빛 모래알처럼<br>
이 순간의 특별한<br>
행복을 놓치지 마<br>
            </p>
            <p>
<span class="h">One two three, let's go</span><br>
<u>저 우주 위로 <span class="h">邱 屋啾 we囉</span></u> <br>
날아갈 듯 춤추러 가 <span class="h">hey</span><br>
Let's dance the night away<br>
            </p>
            <p>
Let's dance the night away (hey)<br>
Yeah<br>
<span class="h">One two three, let's go</span><br>
<u>저 바다 건너 <span class="h">邱 八他 空弄</span></u><br>
들릴 듯 소리 질러 <span class="h">Yeah</span><br>
Let's dance the night away<br>
            </p>
            <p>
오늘이 마지막인 듯 소리 질러 <u>저 멀리 <span class="h">邱 摸立</span></u><br>
끝없이 날아오를 듯 힘껏 뛰어 <u>더 높이 <span class="h">偷no屁</span></u><br>
오늘이 마지막인 듯 소리 질러 저 멀리<br>
쏟아지는 별빛과<br>
Oh let's dance the night away (yeah, yeah, yeah)<br>
            </p>
            <p>
Let's dance the night away<br>
Yeah<br>
<span class="h">One two three, let's go</span><br>
<u>저 바다 건너 <span class="h">邱 八他 空弄</span></u><br>
들릴 듯 소리 질러 <span class="h">Yeah</span><br>
Let's dance the night away<br>
            </p>
            <p>
Yeah, yeah, <span class="h">yeah</span><br>
Yeah, yeah, <span class="h">yeah</span><br>
Yeah, yeah, yeah<br>
<mark>
    <span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu!]</span><br>
Let's dance the night away<br>
Let's dance the night away (yeah, yeah, yeah)<br>
Let's dance the night away (yeah, yeah, yeah)<br>
Let's dance the night away (yeah, yeah, yeah)<br>
</mark>
Let's dance the night away<br>
            </p>`
},
{
id: "YESorYES",
        title: "YES or YES",
        category: "twice",
        youtubeId: "mAKsZ26SabQ", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-yes-or-yes",
        videoRefUrl: "https://www.youtube.com/watch?v=Udud0ZjVWCE",
        lyricsHTML:`
            <p>
Hey, boy<br>
Look, I'm gonna make this simple for you<br>
You got two choices<br>
Yes or yes?<br>
            </p>
            <p>
Ah 둘 중에 하나만 골라 yes or yes?<br>
Ah-ah 하나만 선택해 어서 yes or yes?<br>
            </p>
            <p>
내가 이렇게도 이기적이었던가<br>
뭔가 이렇게 갖고 싶던 적 있었나 (있었나)<br>
다 놀라 (다 놀라) 내 뻔뻔함에<br>
Come on and tell me yes<br>
            </p>
            <p>
생각보다 과감해진 나의 시나리오<br>
이 정도 plan이면 완벽해, 만족해 (만족해)<br>
I don't care (I don't care)<br>
누가 뭐래도 ooh<br>
You better tell me yes<br>
            </p>
            <p>
내 맘은 정했어 yes<br>
그럼 이제 니 대답을 들을 차례<br>
힘들면 보기를 줄게, 넌 고르기만 해<br>
고민할 필요도 없게 해줄게<br>
            </p>
            <p>
뭘 고를지 몰라 준비해 봤어<br>
둘 중에 하나만 골라 yes or yes?<br>
니 마음을 몰라 준비해 봤어<br>
하나만 선택해 어서 yes or yes?<br>
            </p>
            <p>
"싫어"는 싫어, 나 아니면 우리?<br>
선택을 존중해, 거절은 거절해<br>
선택지는 하나, 자, 선택은 니 맘<br>
It's all up to you<br>
둘 중에 하나만 골라 yes or yes?<br>
            </p>
            <p>
진심일까? Do not guess<br>
진심이니? Do not ask<br>
애매한 좌우 말고 확실히 위아래로<br>
There's no letters N and O<br>
지워버릴래 오늘부로 (no more)<br>
복잡하게 고민할 필요 (ooh-ooh)<br>
없어 정답은 yes, yes, yo<br>
            </p>
            <p>
없던 이기심도 자극하는 너의 눈과<br>
널 향한 호기심이 만나서<br>
타올라 (올라), 타오른다<br>
My heart burn, burn, burn<br>
You better hurry up<br>
            </p>
            <p>
조금 쉽게 말하자면<br>
넌 뭘 골라도 날 만나게 될 거야<br>
뭐 좀 황당하긴 해도 (waiting for you)<br>
억지라고 해도 (whoa-whoa)<br>
절대 후회하지 않게 해줄게<br>
            </p>
            <p>
뭘 고를지 몰라 준비해 봤어<br>
둘 중에 하나만 골라 yes or yes?<br>
니 마음을 몰라 준비해 봤어<br>
하나만 선택해 어서 yes or yes?<br>
            </p>
            <p>
"싫어"는 싫어, 나 아니면 우리?<br>
선택을 존중해, 거절은 거절해<br>
선택지는 하나, 자, 선택은 니 맘<br>
Now, it's all up to you<br>
            </p>
            <p>
Maybe not (no, no)<br>
Maybe yes (no, no)<br>
좀 더 선명하게 니 맘을 내게 보여봐<br>
귀 기울여봐, 무슨 소리가 들리지 않니?<br>
            </p>
            <p>
It's simple, Y-E-S, hey<br>
            </p>
            <p>
둘 중에 하나만 골라 yes or yes? (Hey)<br>
하나만 선택해 어서 yes or yes?<br>
하나 더 보태서 yes or yes or yes<br>
골라봐, 자, 선택은 니 맘<br>
            </p>
            <p>
뭘 고를지 몰라 준비해 봤어<br>
둘 중에 하나만 골라 yes or yes?<br>
니 마음을 몰라 준비해 봤어<br>
하나만 선택해 어서 yes or yes?<br>
            </p>
            <p>
"싫어"는 싫어, 나 아니면 우리?<br>
선택을 존중해, 거절은 거절해<br>
선택지는 하나, 자, 선택은 니 맘<br>
It's all up to you<br>
            </p>
            <p>
하나만 선택해 어서 yes or yes?<br>
            </p>`
},
{
id: "FANCY",
        title: "FANCY",
        category: "twice",
        youtubeId: "kOHB85vDuow", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-fancy-1",
        videoRefUrl: "https://www.youtube.com/watch?v=--fw0TREtPA",
        lyricsHTML:`
        <div class="lyric-item">
            <p>
지금 하늘 구름 색은 tropical, yeah<br>
저 태양 빨간빛 니 두 볼 같애<br>
Oh, tell me, I'm the only one, babe<br>
I fancy you, I fancy you, fancy you (TWICE)<br>
It's dangerous 따끔해, 넌 장미 같아<br>
괜찮아, 조금도 난 겁나지 않아<br>
더 세게 꼭 잡아 take my hand<br>
좀 위험할 거야, 더 위험할 거야 babe<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
달콤한 초콜릿 아이스크림처럼<br>
녹아버리는 지금 내 기분 so lovely<br>
깜깜한 우주 속 가장 반짝이는<br>
저 별, 저 별, 그 옆에 큰 니 별<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
거기 너 I fancy you 아무나 원하지 않아<br>
Hey, I love you (love ya)<br>
그래, 너 I fancy you 꿈처럼 행복해도 돼<br>
'Cause I need you (what?)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Fancy you, ooh 누가 먼저 좋아하면 어때?<br>
Fancy you, ooh 지금 너에게로 갈래<br>
Fancy, ooh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
매일매일 (매일) 난 정말 아무것도 못 하네<br>
Oh my, Mayday (day) 이러다 큰일 낼 것 같은데<br>
Bang, bang 머리가 홀린 듯 리이 돼<br>
어쩌면 좋아? 이게 맞는 건지 몰라 SOS<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Swim, swim 너란 바다에 잠수함이 돼<br>
매일이 birthday 달콤해 너와 나의 fantasy<br>
Dream, dream 마치 꿈 같아, 볼 꼬집어봐<br>
요즘 나의 상태 메세진 랄랄라 baby<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
달콤한 초콜릿 아이스크림처럼<br>
녹아버리는 지금 내 기분 so lovely<br>
깜깜한 (hey) 우주 속 가장 반짝이는<br>
저 별, 저 별, 그 옆에 큰 니 별<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
거기 너 I fancy you 아무나 원하지 않아<br>
Hey, I love you (love ya)<br>
그래, 너 I fancy you 꿈처럼 행복해도 돼<br>
'Cause I need you (what?)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Fancy you, ooh 누가 먼저 좋아하면 어때?<br>
Fancy you, ooh 지금 너에게로 갈래<br>
Fancy, ooh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
연기처럼 훅 사라질까<br>
늘 가득히 담아, 두 눈에 담아<br>
생각만으로 포근해져<br>
몰래 뒤에서 안아, 널 놓지 않을래<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
거기 너 I fancy you (fancy you) 아무나 원하지 않아<br>
Hey, I love you (love ya)<br>
그래, 너 I fancy you 꿈처럼 행복해도 돼<br>
'Cause I need you (what?)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Fancy you, ooh 누가 먼저 좋아하면 어때?<br>
Fancy you, ooh 지금 너에게로 갈래<br>
Fancy, ooh<br>
            </p>
        </div>
        `
},
{
id: "FeelSpecial",
        title: "Feel Special",
        category: "twice",
        youtubeId: "3ymwOvzhwHs", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-feel-special",
        videoRefUrl: "https://www.youtube.com/watch?v=IOmuE8keA7g",
        lyricsHTML:`
            <p>
(You make me feel special)<br>
            </p>
            <p>
그런 날이 있어<br>
갑자기 혼자인 것만 같은 날<br>
어딜 가도 내 자리가 아닌 것만 같고<br>
고갠 떨궈지는 날<br>
            </p>
            <p>
그럴 때마다 내게<br>
얼마나 내가 소중한지<br>
말해주는 너의 그 한마디에 (hey)<br>
Everything's alright<br>
초라한 nobody에서 다시 somebody<br>
특별한 나로 변해<br>
            </p>
            <p>
You make me feel special<br>
세상이 아무리 날 주저앉혀도 (앉혀도)<br>
아프고 아픈 말들이 날 찔러도<br>
네가 있어 난 다시 웃어<br>
That's what you do<br>
            </p>
            <p>
Again I feel special<br>
아무것도 아닌 존재 같다가도 (같다가도)<br>
사라져도 모를 사람 같다가도<br>
날 부르는 네 목소리에<br>
I feel loved, I feel so special<br>
            </p>
            <p>
자꾸 숨고만 싶어서<br>
마주하기가 싫어서<br>
모든 게 의미를 잃은 듯이<br>
내가 의미를 잃은 듯이 가만히 주저앉아 있을 때 (oh)<br>
            </p>
            <p>
그때 내 앞에 나타난 너의<br>
따뜻한 미소와 손길에 (hey)<br>
            </p>
            <p>
Everything's alright<br>
초라한 nobody에서 다시 somebody<br>
특별한 나로 변해<br>
            </p>
            <p>
You make me feel special<br>
세상이 아무리 날 주저앉혀도 (앉혀도)<br>
아프고 아픈 말들이 날 찔러도<br>
네가 있어 난 다시 웃어<br>
That's what you do<br>
            </p>
            <p>
Again I feel special<br>
아무것도 아닌 존재 같다가도 (같다가도)<br>
사라져도 모를 사람 같다가도<br>
날 부르는 네 목소리에<br>
I feel loved, I feel so special<br>
            </p>
            <p>
Uh, you make everything alright<br>
구름이 쫙 낀 햇살 한 줌 없는 날<br>
네가 바로 나의 shining light<br>
That's what you do<br>
아무리 어두운 밤도 다시 낮<br>
I owe it to you<br>
Because you make me feel (make me feel special)<br>
            </p>
            <p>
세상이 아무리 날 주저앉혀도 (앉혀도)<br>
아프고 아픈 말들이 날 찔러도<br>
네가 있어 난 다시 웃어<br>
That's what you do<br>
            </p>
            <p>
Again I feel special<br>
아무것도 아닌 존재 같다가도 (같다가도)<br>
사라져도 모를 사람 같다가도<br>
날 부르는 네 목소리에<br>
I feel loved, I feel so special<br>
            </p>   
            <p>
(I feel so special)<br>
(I feel so, I feel so special)<br>
            </p>
        `
},

    {
id: "POP!",
        title: "POP!",
        category: "NAYEON",
        artist: "NAYEON",                 // 蓋掉頁面預設的 "TWICE"
        themeOverride: {                 // 蓋掉頁面預設的粉色主題
            main: "#4cdbf7",
            light: "#e6f8fc",
            bg: "#CDDBEE"
        },
        youtubeId: "6lvYvZQQ6hU", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nayeon-pop",
        videoRefUrl: "https://www.youtube.com/watch?v=8ANZzxOqUCw",
        lyricsHTML:`
            <p>
                <span class="h">波搜那速嘎喔搜 su per s tar Imnayeon</span><br>
                What's wrong?<br>
홀릴 듯이 난 너를 자극해 (<span class="h">pop, pop, pop</span>)<br>
Watch out!<br>
설렌 듯이 니 부푼 맘이 터질 듯해 (<span class="h">pop, pop, pop</span>)<br>
(Let's start) 내 맘대로 <span class="h">play it</span><br>
(Won't stop) 거침없이 <span class="h">shake it</span><br>
<span class="h">You know?</span> 넌 내게 달려있단 것만 알아둬<br>
            </p>
            <p>
                (Yeah-yeah) 이미 넌 나를 벗어<u>날 수가 없어 <span class="h">壘 蘇嘎 ㄛ搜</span></u> <br>
떨린 그 눈빛, 티 나는 몸짓 baby<br>
터뜨리고 싶은 너 <span class="h">[pop pop pop]</span><br>
            </p>
            <p>
                설렘이 멎기 전에<br>
<span class="h">I wanna make it pop, pop</span><br>
Pop, you want it<br>
<span class="h">Pop, pop, pop</span> 터지길 원해<br>
            </p>
            <p>
                가슴이 뛰는 이 느낌<br>
<span class="h">I wanna make it pop, pop</span><br>
Pop, you want it<br>
<span class="h">Pop, pop, pop</span> 널 갖길 원해<br>
            </p>
            <p>
                <span class="h">Pop, pop, pop</span> (uh, uh, you want it)<br>
<span class="h">Pop, pop, pop</span> (uh, uh, hey, I got it)<br>
<span class="h">Pop, pop, pop</span> (uh, uh)<br>
<span class="h">Pop, pop, pop</span><br>
            </p>
            <p>
                너무 잘 보여 아무리 숨겨도 <span class="h">[印右沃]</span><br>
이미 들킨 걸, 자꾸 둥둥 떠다니잖아 <span class="h">[撒浪嘿]</span><br>
(Yeah-yeah) 여유롭게 <span class="h">check it</span><br>
보란 듯이 <span class="h">take it</span><br>
Baby, baby, you're out of control<br>
So you're under my control<br>
            </p>
            <p>
                설렘이 멎기 전에<br>
<span class="h">I wanna make it pop, pop</span><br>
Pop, you want it<br>
<span class="h">Pop, pop, pop</span> 터지길 원해<br>
            </p>
            <p>
               가슴이 뛰는 이 느낌<br>
<span class="h">I wanna make it pop, pop</span><br>
Pop, you want it<br>
<span class="h">Pop, pop, pop</span> 널 갖길 원해 <br>
            </p>
            <p>
                <span class="h">Pop, pop, pop</span> (uh, uh, you want it)<br>
<span class="h">Pop, pop, pop</span> (uh, uh, hey, I got it)<br>
<span class="h">Pop, pop, pop</span> (uh, uh)<br>
<span class="h">Pop, pop, pop</span><br>
            </p>
            <p>
                Pop, pop 버블같이 <u>터져 버릴지 몰라 <span class="h">投就撥立即摸拉</span></u> <br>
끝도 없이 점점 부풀어 가<br>
내게 푹 빠진 <u>너를 애써 참진 마 <span class="h">[那樓A搜洽機麻]</span></u> <br>
Bae, bae, eyes on me now<br>
내가 터뜨려 줄 테니<br>
            </p>
            <p>
                <span class="h">Five!</span> 자, 때가 됐어<br>
<span class="h">Four!</span> 딱 숨을 멈춰<br>
<span class="h">Three!</span> 난 너를 겨눠<br>
<span class="h">Two! One! Here we go!</span><br>
            </p>
            <p>
                설렘이 멎기 전에<br>
<span class="h">I wanna make it pop, pop</span> (pop)<br>
Pop, you want it<br>
<span class="h">Pop, pop, pop</span> 터지길 원해<br>
            </p>
            <p>
                가슴이 뛰는 이 느낌 (뛰는 이 느낌 yeah, yeah)<br>
<span class="h">I wanna make it pop, pop</span><br>
Pop, you want it<br>
<span class="h">Pop, pop, pop</span> 널 갖길 원해 (I know you want it bae)<br>
            </p>
            <p>
                <mark>
                    <span class="h">[那Aㄍㄟˋ瀑霸就so!<br>
                        su per! s tar! Im Nayeon!<br>
                        波搜那速嘎喔搜!<br>
                        撒浪嘿佑! Im Nayeon!]</span><br>
                    Pop, pop, pop (uh, uh, you want it)<br>
Pop, pop, pop (you gotta pop it, I got it)<br>
Pop, pop, pop (I can't stop it)<br>
Pop, pop, pop<br>
                </mark>
            </p>`
},
{
id: "ABCD",
        title: "ABCD",
        category: "NAYEON",
        artist: "NAYEON",                 
        themeOverride: {                 
            main: "#4cdbf7",
            light: "#e6f8fc",
            bg: "#CDDBEE"
        },
        youtubeId: "aBiSoLKFPnc", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/nayeon-abcd",
        videoRefUrl: "https://www.youtube.com/watch?v=9uNTb4z26BY",
        lyricsHTML:`
            <p>
                (Don't stop it)<br>
Mm, yeah<br>
            </p>
            <p>
                Slow-mo <span class="h">[ImNayeon]</span><br>
Hey, I see you looking at me<br>
And I like it, oh (I like it, oh), yeah (uh)<br>
No more <span class="h">[ABCD]</span><br>
다가오길 기다리는 건 not my option (option)<br>
Yeah (ah)<br>
            </p>
            <p>
                피어나 (피어나, 피어나) my desire <span class="h">[de si re]</span><br>
원하는 건 가져야 하는 걸 (ooh)<br>
All I want is love (all I want, all I want) love with you <span class="h">[撒浪嘿]</span><br>
Stop thinkin' 거부할 수 없을걸 (break it down now)<br>
            </p>
            <p>
                (Hey, listen to me now) <br>
                <span class="h">A</span>, you're gonna <span class="h">B</span> my babe<br>
Every time you <span class="h">C</span> me 빠져 <span class="h">D</span>eeper, deeper, babe<br>
(Hey, listen to me now) A-B-C-D <u>반복해 <span class="h">巴波K</span></u> <br>
How to fall in love <u> <span class="h">咖樂邱 ju K</span></u> 가르쳐 줄게<br>
            </p>
            <p>
                너는 들어왔어 in my <span class="h">fantasy</span><br>
벗어날 수 없어 나의 <span class="h">gravity</span><br>
In love, in love, can't get enough<br>
Hey 빠져들고 있어 you're <span class="h">hypnotized</span> (yeah)<br>
홀린 듯 하나가 되는 <span class="h">you and I</span><br>
In love, in love, can't get enough (oh, yeah)<br>
            </p>
            <p>
                넌 따라오면 돼 my <span class="h">baby</span><br>
지금부터 I'ma drive you <span class="h">crazy</span> (oh)<br>
아슬아슬한 너와 내 emotion<br>
자칫하면 이성의 끈을 놓쳐<br>
대화는 필요 없어 <span class="h">mute</span><br>
본능이 향하는 곳 <span class="h">move</span><br>
전부 벗어던질래<br>
진짜 나를 볼 수 있게<br>
            </p>
            <p>
                피어나 (피어나, 피어나) feel alive <span class="h">[ImNayeon]</span><br>
떨리는 마음 감출 수 없는 걸 (ooh)<br>
All I want is love (all I want, all I want) love with you <span class="h">[撒浪嘿]</span><br>
Stop thinkin' 거부할 수 없을걸 (you)<br>
            </p>
            <p>
                (Hey, listen to me now) <br>
                <span class="h">A</span>, you're gonna <span class="h">B</span> my babe<br>
Every time you <span class="h">C</span> me 빠져 <span class="h">D</span>eeper, deeper, babe<br>
(Hey, listen to me now) A-B-C-D <u>반복해 <span class="h">巴波K</span></u><br>
How to fall in love <u>가르쳐 줄게 <span class="h">咖樂邱 ju K</span></u> <br>
            </p>
            <p>
                너는 들어왔어 in my <span class="h">fantasy</span> (my fantasy)<br>
벗어날 수 없어 나의 <span class="h">gravity</span><br>
In love, in love, can't get enough<br>
Hey 빠져들고 있어 you're <span class="h">hypnotized</span> (yeah)<br>
홀린 듯 하나가 되는 <span class="h">you and I</span><br>
In love, in love (ooh), can't get enough (yeah)<br>
            </p>
            <p>
                <span class="h">[購布哈速嘎喔搜!<br>
                    ㄊㄟ降兔ㄎㄧ! ImNayeon!<br>
                    波搜那速尬喔搜!<br>
                    ABCD ImNayeon!<br>
                    購布哈速嘎喔搜!<br>
                    ㄊㄟ降兔ㄎㄧ! ImNayeon!<br>
                    波搜那速尬喔搜!<br>
                    A! B! C! D!]</span><br>
            </p>
            <p>
                너는 들어왔어 in my <span class="h">fantasy</span> (my fantasy)<br>
벗어날 수 없어 나의 <span class="h">gravity</span><br>
In love, in love, can't get enough<br>
Hey 빠져들고 있어 you're <span class="h">hypnotized</span> (yeah)<br>
홀린 듯 하나가 되는 <span class="h">you and I</span><br>
In love, in love (ooh), can't get enough (yeah)<br>
            </p>
            <p>
                I don't care and I like, <span class="h">yeah</span><br>
A to Z, you're my type, <span class="h">yeah</span> (shoo)<br>
알려줄게 baby, <span class="h">how to love</span> (how to love)<br>
알기 쉽게 네게 <span class="h">one by one</span> (one by one)<br>
I don't care and I like, <span class="h">yeah</span> (yeah)<br>
A to Z, you're my type, <span class="h">yeah</span><br>
알려줄게 baby, <span class="h">how to love</span> (알려줄게 baby, love)<br>
알기 쉽게 네게 <span class="h">one by one</span> (알기 쉽게 one by one)<br>
            </p>
            <p>
                <span class="h">A</span>, you're gonna <span class="h">B</span> my babe<br>
Every time you <span class="h">C</span> me 빠져 <span class="h">D</span>eeper, deeper, babe<br>
A-B-C-D <u>반복해 <span class="h">巴波K</span></u> <br>
How to fall in love <u>가르쳐 줄게 <span class="h">咖樂邱 ju K</span></u> <br>
            </p>`
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
        lyricsHTML: `
            <p>
Run, run away, 더 늦기 전에 기회를 줄게<br>
내게 안기면, you will beg, beg to stay<br>
Now <span class="h">[Now]</span> say okay, 준비됐으면 눌러봐, play <span class="h">[Play]</span><br>
널 위해 준비한 내 love symphony<br>
So are you ready tonight?<br>
<span class="h">[Run! A! way! 億!]</span><br>
            </p>
            <p>
이건 내 <span class="h">warning</span>, 날 향한 네 <span class="h">yearning</span><br>
정말 확실한 건지<br>
널 내게 <span class="h">turn in</span>, 한 후엔 no <span class="h">turning back</span><br>
준비된 거지?<br>
            </p>
            <p>
마지막 결심하기까지 <span class="h">watching</span><br>
바라보고 있었지<br>
Now I know it's you, 모든 걸 다 줄게<br>
너는 준비됐는지?<br>
<span class="h">[春! 必! 推! 搜!]</span><br>
            </p>
            <p>
Run <span class="h">[Run]</span>, run away, 더 늦기 전에 기회를 줄게<br>
내게 안기면, you will beg, beg to stay<br>
Now <span class="h">[Now]</span> say okay, 준비됐으면 눌러봐, play <span class="h">[Play]</span><br>
널 위해 준비한 내 love symphony<br>
So are you ready tonight?<br>
            </p>
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
            <p>
마음을 먹기까지는 힘들지<br>
먹으면 난 바뀌지 <span class="h">[怕貴記]</span><br>
No turning back, 내 모든 걸 줄게<br>
받을 준비된 거지? <span class="h">[推購季]</span><br>
            </p>
            <p>
아무도 못 본 날, 이제 너는 볼거야 <br>
So hold on tight <span class="h">[hold on tight]</span><br>
하지만 before I give you my all<br>
마지막으로 물을게<br>
<span class="h">[Run! A! way! 億!]</span><br>
            </p>
            <p>
Run <span class="h">[Run]</span>, run away, 더 늦기 전에 기회를 줄게<br>
내게 안기면, you will beg, beg to stay<br>
Now <span class="h">[Now]</span> say okay, 준비됐으면 눌러봐, play <span class="h">[Play]</span><br>
널 위해 준비한 내 love symphony<br>
So are you ready tonight?<br>
            </p>
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
            </p>`
    },
    {
id: "SHOOT (Firecracker)",
        title: "SHOOT (Firecracker)",
        category: "CHAEYOUNG",
        artist: "CHAEYOUNG",                 // 蓋掉頁面預設的 "TWICE"
        themeOverride: {                 // 蓋掉頁面預設的粉色主題
            main: "#CF2E45",
            light: "#fcecee",
            bg: "#CDDBEE"
        },
        youtubeId: "DzxykhI_8v4", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/chaeyoung-shoot-firecracker",
        videoRefUrl: "https://www.youtube.com/watch?v=2lV1cTppl6c",
        lyricsHTML:`
            <p>
I know that you're waiting for this tonight<br>
<p class="tip">停四拍</p><br>
<span class="h">[類判他幾 波魯萬]</span><br>
I can't wait 'til the sun turns to light<br>
<p class="tip">停四拍</p><br>
<span class="h">[SonChaeYeong! 撒浪嘿!]</span><br>
Fireflies, they color my eyes<br>
Feel a void without the fire, Ignite it<br>
Butterflies<br>
Come, promised to me<br>
That you'll shine along the way<br>
</p>
            <p>
Just <span class="h">shoot</span> from my heart<br>
<span class="h">Shoot from the</span><br>
Salute from the heart <span class="h">[Son! Chae! Yeong!]</span><br>
Just <span class="h">shoot</span> from my heart<br>
<span class="h">Shoot from the</span><br>
Salute from the heart <span class="h">[shoot! from! my! heart!]</span><br>
            </p>
            <p>
I've traveled the world<br>
But my room is <span class="h">perfect</span><br>
Love is within why are we still <span class="h">searching</span><br>
Can we let go of the world so <span class="h">judging</span><br>
Don't say goodbye there's a new beginning<br>
</p>
            <p>
Just <span class="h">shoot</span> from my heart<br>
<span class="h">Shoot from the</span><br>
Salute from the heart <span class="h">[Son! Chae! Yeong!]</span><br>
Just <span class="h">shoot</span> from my heart<br>
<span class="h">Shoot from the</span><br>
Salute from the heart <span class="h">[Son! Chae! Yeong!]</span><br>
Just <span class="h">shoot</span> from my heart<br>
<span class="h">Shoot from the</span><br>
Salute from the heart <span class="h">[shoot! from! my! heart!]</span><br>
Just <span class="h">shoot</span> from my heart<br>
<span class="h">Shoot from the</span><br>
Salute from the heart<br>
            </p>
            <p>
<span class="h">Shoot from my heart<br>
Shoot from the</span><br>
Salute from the heart<br>
<span class="h">Shoot from my heart<br>
Shoot from the</span><br>
<mark><span class="h">[類判他幾 波魯萬<br>
    SonChaeYeong! 撒浪嘿!]</span><br>
Salute from the heart</mark><br>
            </p>`
},
{
    id: "MEEEEEE",
        title: "MEEEEEE",
        category: "NAYEON",
        artist: "NAYEON",                 // 蓋掉頁面預設的 "TWICE"
        themeOverride: {                 // 蓋掉頁面預設的粉色主題
            main: "#4cdbf7",
            light: "#e6f8fc",
            bg: "#CDDBEE"
        },
        youtubeId: "NEPHzkDCw08", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-meeeeee",
        videoRefUrl: "https://www.youtube.com/watch?v=DsaP3UqbIss",
        lyricsHTML:`
            <p>
                Don't play with a girl, don't play with a girl<br>
            </p>
            <p>
                Don't cook but I got good taste <span class="h">[taste]</span><br>
Don't drive but I love the chase <span class="h">[chase]</span><br>
Soft touch when I use my teeth <span class="h">[teeth]</span><br>
Don't play with a girl like me <span class="h">[me]</span><br>
Stay close but I need my space <span class="h">[space]</span><br>
One kiss that's all it takes <span class="h">[takes]</span><br>
You're in way, way, way deep (way deep)<br>
Don't play with a girl, don't play with a girl like<br>
            </p>
            <p>
                <span class="h">meeeeee [ImNayeon!]</span><br>
                Meeeeee<br>
Don't play with a girl, don't play with a girl like<br>
<span class="h">meeeeee [ImNayeon!]</span><br>
Meeeeee<br>
Don't play with a girl, don't play with a girl like<br>
            </p>
            <p>
                <span class="h">Whoa</span>, wait a minute, I might just let you<br>
<span class="h">Oh</span>, do you get it? I might just let you<br>
Hit it <span class="h">sideways</span>, leave you by the end of days<br>
Treat you like a <span class="h">holiday</span>, we ain't going no place fast<br>
            </p>
            <p>
                I'm a summer day<br>
Sip on me like lemonade<br>
So hot you gonna pray for rain<br>
You ain't going no place fast<br>
            </p>
            <p>
                Don't cook but I got good taste <span class="h">[taste]</span><br>
Don't drive but I love the chase <span class="h">[chase]</span><br>
Soft touch when I use my teeth <span class="h">[teeth]</span><br>
Don't play with a girl like me <span class="h">[me]</span><br>
Stay close but I need my space <span class="h">[space]</span><br>
One kiss that's all it takes <span class="h">[takes]</span><br>
You're in way, way, way deep (way deep)<br>
Don't play with a girl, don't play with a girl like<br>
            </p>
            <p>
                <span class="h">meeeeee [ImNayeon!]</span><br>
                (don't play with a girl like) <br>
                Meeeeee
                Don't play with a girl, don't play with a girl like<br>
                <span class="h">meeeeee [ImNayeon!]</span><br>
                (don't play with a girl like)<br>
                Meeeeee
                Don't play with a girl, don't play with a girl like<br>
            </p>
            <p>
                <span class="h">[Like me! ImNayeon!<br>
                    Like me! 印右握!<br>
                    Like me! 印哈gril!<br>
                    Like me! ImNayeon!<br>
                    Like me! ImNayeon!<br>
                    Like me! 印右握!<br>
                    Like me! 印哈gril!<br>
                    Like me! ImNayeon! <br>]</span>
Don't play with a girl, don't play with a girl like (play with a girl like)  <br>
            </p>`
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
        lyricsHTML: `
            <p>
Let's evaluate this situation<br>
Let's communicate with conversation<br>
I don't wanna wait, I'm too impatient<br>
Oh<br>
            </p>
            <p>
Boy you way too loud, I had to check that<br>
Quit runnin' your mouth or you'll never get that<br>
I don't play around, already did that<br>
Oh<br>
            </p>
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
            <p>
Put your phone away on the <span class="h">other side</span><br>
Keep looking straight at me, need them <span class="h">butterflies</span><br>
We party private, yeah, you know the <span class="h">vibe, vibe</span><br>
If you wanna dive in, yeah<br>
<p class="tip">停兩拍</p><br>
<span class="h">[I! Love! Tzu!]</span><br>
            </p>
            <p>
If you wanna dive, yeah<br>
If you wanna dive, If you wanna dive, dive, yeah<br>
So if you wanna dive, if you wanna dive, dive<br>
Oh, no<br>
If you wanna dive, oh, no <br>
<p class="tip">停兩拍</p><br>
<span class="h">[Yes! I! wanna!]</span><br>
If you wanna dive in, yeah<br>
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