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
                얼마가 <u>돼도 <span class="h">推斗</span></u>  기다리고 <u>싶어<span class="h">溪坡</span></u> <br>
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
                날 <u>봐<span class="h">八</span></u>  거<u>봐<span class="h">八</span></u>  또 두 번 봐<br>
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
                얼마가 <u>돼도 <span class="h">推斗</span></u>  기다리고 <u>싶어<span class="h">溪坡</span></u> <br>
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
왜 그런지 모르겠다, <u>정말 <span class="h">窮賣</span></u><br>
다시 한 번 힘을 내서<br>
<span class="h">Sign</span><u> 을 보내 <span class="h">嫩 波捏</span></u>, <span class="h">signal</span><u> 보내 <span class="h">波捏</span></u><br>
            </p>
            <p>
                눈짓도 손짓도 <u>어떤 표정도 <span class="h">歐動 潑冏豆</span></u> <br>
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
<p class="tip">前奏開始播放後的第二個八拍</p><br>
<span class="h">[TWICE!]</span><br>
<p class="tip">一個八拍後</p><br>
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
<span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! ONE IN A! MILLION! 邱哇優! LI! KEY了! 努囉九! 兔!哇!意!思!]</span><br>
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
<span class="h">Yeah, yeah, yeah, yeah, yeah</span><br>
    <mark>
        <span class="h">[內 新降ㄜ 亨的漏! 兔! 哇! 意! 思!]</span><br>
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
id: "YES or YES",
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
<span class="h">[內貼大噴哈娜呀! Y! E! S! TWICE!]</span><br>
<mark><span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu!]</span><br>
Ah 둘 중에 하나만 골라 yes or yes?<br>
Ah-ah</mark> <u>하나만 선택해 어서 <span class="h">哈娜滿 宋貼K 喔搜</span></u> <span class="h">yes or yes</span>?<br>
            </p>
        </div>
            <p>
내가 이렇게도 이기적이었던가<br>
뭔가 이렇게 갖고 싶던 적 있었나 (<u>있었나 <span class="h">以蒐哪</span></u>)<br>
다 놀라 (<u>다 놀라 <span class="h">塔 no啦</span></u>) 내 뻔뻔함에<br>
Come on and tell me yes<br>
            </p>
            <p>
생각보다 과감해진 나의 시나리오<br>
이 정도 plan이면 완벽해, 만족해 (<u>만족해 <span class="h">滿冏k</span></u>)<br>
I don't care (<span class="h">I don't care</span>)<br>
누가 뭐래도 ooh<br>
You better tell me yes<br>
            </p>
            <p>
내 맘은 정했어 yes <span class="h">[yes]</span><br>
그럼 이제 니 대답을 들을 차례 <span class="h">[內]</span><br>
힘들면 보기를 줄게, 넌 고르기만 해<br>
고민할 필요도 없게 해줄게 <span class="h">[扣! 命! 阿! 內!]</span><br>
            </p>
            <p>
뭘 고를지 몰라 준비해 봤어<br>
<u>둘 중에 하나만 골라 <span class="h">兔 九ㄟ 哈娜滿 口啦</span></u> <span class="h">yes or yes</span>?<br>
니 마음을 몰라 준비해 봤어<br>
<u>하나만 선택해 어서 <span class="h">哈娜滿 宋貼K 喔搜</span></u> <span class="h">yes or yes</span>?<br>
            </p>
            <p>
"싫어"는 싫어, <u>나 아니면 우리 <span class="h">拿 阿逆謬 屋裡</span></u><br>
선택을 존중해, <u>거절은 거절해 <span class="h">口就冷 口就嘿</span></u><br>
선택지는 하나, 자, 선택은 니 맘<br>
It's all up to you<br>
<u>둘 중에 하나만 골라 <span class="h">兔 九ㄟ 哈娜滿 口啦</span></u> <span class="h">yes or yes</span>?<br>
            </p>
            <p>
진심일까? Do not guess<br>
진심이니? Do not ask<br>
애매한 좌우 말고 확실히 위아래로<br>
There's no letters N and O<br>
<u>지워버릴래 오늘부로 <span class="h">季我潑哩類 歐嫩普透</span></u> (no more)<br>
복잡하게 고민할 필요 (ooh-ooh)<br>
없어 정답은 <span class="h">yes, yes, yo</span><br>
            </p>
            <p>
없던 이기심도 자극하는 너의 눈과<br>
널 향한 호기심이 만나서<br>
타올라 <span class="h">[塔歐拉]</span>, 타오른다 <span class="h">[塔歐冷打]</span><br>
My heart <span class="h">burn, burn, burn</span><br>
You better hurry up<br>
            </p>
            <p>
조금 쉽게 말하자면<br>
넌 뭘 골라도 날 만나게 될 거야 <span class="h">[哇]</span><br>
뭐 좀 황당하긴 해도 (waiting for you)<br>
억지라고 해도 (whoa-whoa)<br>
절대 후회하지 않게 해줄게 <span class="h">[互! 惠! 阿! 內!]</span><br>
            </p>
            <p>
뭘 고를지 몰라 준비해 봤어<br>
<u>둘 중에 하나만 골라 <span class="h">兔 九ㄟ 哈娜滿 口啦</span></u> <span class="h">yes or yes</span>?<br>
니 마음을 몰라 준비해 봤어<br>
<u>하나만 선택해 어서 <span class="h">哈娜滿 宋貼K 喔搜</span></u> <span class="h">yes or yes</span>?<br>
            </p>
            <p>
"싫어"는 싫어, <u>나 아니면 우리 <span class="h">拿 阿逆謬 屋裡</span></u><br>
선택을 존중해, <u>거절은 거절해 <span class="h">口就冷 口就嘿</span></u><br>
선택지는 하나, 자, 선택은 니 맘<br>
Now, it's all up to you<br>
            </p>
            <p>
Maybe not (<span class="h">no, no</span>)<br>
Maybe yes (<span class="h">no, no</span>)<br>
좀 더 선명하게 니 맘을 <u>내게 보여봐 <span class="h">內給 潑優爸</span></u><br>
<u>귀 기울여봐 <span class="h">哭 伊ㄎㄧ屋六八</span></u>, 무슨 소리가 들리지 않니?<br>
            </p>
            <p>
<span class="h">It's simple, Y-E-S, hey</span><br>
            </p>
            <p>
둘 중에 하나만 골라 yes or yes? (Hey)<br>
하나만 선택해 어서 yes or yes?<br>
하나 더 보태서 yes or yes or yes<br>
골라봐, 자, 선택은 니 맘<br>
            </p>
            <p>
뭘 고를지 몰라 준비해 봤어<br>
<u>둘 중에 하나만 골라 <span class="h">兔 九ㄟ 哈娜滿 口啦</span></u> <span class="h">yes or yes</span>?<br>
니 마음을 몰라 준비해 봤어<br>
<u>하나만 선택해 어서 <span class="h">哈娜滿 宋貼K 喔搜</span></u> <span class="h">yes or yes</span>?<br>
            </p>
            <p>
"싫어"는 싫어, <u>나 아니면 우리 <span class="h">拿 阿逆謬 屋裡</span></u><br>
선택을 존중해, <u>거절은 거절해 <span class="h">口就冷 口就嘿</span></u><br>
선택지는 하나, 자, 선택은 니 맘<br>
It's all up to you<br>
            </p>
            <p>
<u>하나만 선택해 어서 <span class="h">哈娜滿 宋貼K 喔搜</span></u> <span class="h">yes or yes</span>?<br>
            </p>
        `
},
{
id: "FANCY",
        title: "FANCY",
        category: "twice",
        youtubeId: "kOHB85vDuow", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-fancy-1",
        videoRefUrl: "https://www.youtube.com/watch?v=--fw0TREtPA",
        lyricsHTML:`
            <p>
<p class="tip">前奏播放後兩個八拍</p><br>
<span class="h">[那冏莫! 撒基米! 塔且子!]</span><br>
<span class="h">[氣根 挪ㄟ給囉 開勒 FANCY! TWICE!]</span><br>
지금 하늘 구름 색은 <span class="h">tropical, yeah</span><br>
Oh, tell me, I'm the only one, babe<br>
I fancy you <span class="h">[fancy you]</span>, I fancy you, fancy you (<span class="h">TWICE</span>)<br>
It's dangerous 따끔해, 넌 <u>장미 같아 <span class="h">槍咪 咖他</span></u> <span class="h">[yeah]</span><br>
괜찮아, 조금도 난 <u>겁나지 않아 <span class="h">摳那機 阿拿</span></u><br>
<u>더 세게 꼭 잡아 <span class="h">偷 say給 勾 掐吧</span></u> <span class="h">take my hand</span><br>
좀 위험할 거야, 더 위험할 거야 babe<br>
            </p>
            <p>
<u>달콤한 <span class="h">胎溝滿</span></u> <span class="h">[hey]</span> <br>
초콜릿 아이스크림처럼<br>
녹아버리는 지금 내 기분 so lovely<br>
<u>깜깜한 <span class="h">乾乾滿</span></u> <span class="h">[hey]</span><br>
우주 속 가장 반짝이는<br>
저 별, 저 별, 그 옆에 큰 니 별<br>
            </p>
            <p>
<u>거기 너 <span class="h">摳ㄍㄧ那</span></u> <span class="h">I fancy you</span><br>
아무나 원하지 않아<br>
Hey, I love you (love ya)<br>
<u>그래, 너 <span class="h">ㄎ勒 那</span></u> <span class="h">I fancy you</span><br>
꿈처럼 행복해도 돼<br>
'Cause I need you (what?)<br>
            </p>
            <p>
<span class="h">Fancy</span> you, ooh 누가 먼저 좋아하면 어때?<br>
<span class="h">Fancy</span> you, ooh 지금 너에게로 갈래<br>
<span class="h">Fancy, ooh</span><br>
            </p>
            <p>
<u>매일매일 <span class="h">妹伊妹伊</span></u> (매일) 난 정말 아무것도 못 하네<br>
<span class="h">Oh my, Mayday</span> (day) 이러다 큰일 낼 것 같은데<br>
<span class="h">Bang, bang</span> 머리가 홀린 듯 리이 돼<br>
어쩌면 좋아? 이게 맞는 건지 몰라 SOS<br>
            </p>
            <p>
<span class="h">Swim, swim</span> 너란 바다에 잠수함이 돼<br>
<u>매일이 <span class="h">沒毅力</span></u> <span class="h">birthday</span> 달콤해 너와 나의 fantasy<br>
<span class="h">Dream, dream</span> 마치 꿈 같아, 볼 꼬집어봐<br>
<u>요즘 나 <span class="h">u金 那</span></u>의 상태 메세진 <u>랄랄라 <span class="h">拉拉拉</span></u> baby<br>
            </p>
            <p>
<u>달콤한 <span class="h">胎溝滿</span></u> <span class="h">[hey]</span><br>
초콜릿 아이스크림처럼<br>
녹아버리는 지금 내 기분 so lovely<br>
<u>깜깜한 <span class="h">乾乾滿</span></u> <span class="h">[hey]</span><br>
우주 속 가장 반짝이는<br>
저 별, 저 별, 그 옆에 큰 니 별<br>
            </p>
            <p>
<u>거기 너 <span class="h">摳ㄍㄧ那</span></u> <span class="h">I fancy you</span><br>
아무나 원하지 않아<br>
Hey, I love you (love ya)<br>
<u>그래, 너 <span class="h">ㄎ勒 那</span></u> <span class="h">I fancy you</span><br>
꿈처럼 행복해도 돼<br>
'Cause I need you (what?)<br>
            </p>
            <p>
<span class="h">Fancy</span> you, ooh 누가 먼저 좋아하면 어때?<br>
<span class="h">Fancy</span> you, ooh 지금 너에게로 갈래<br>
<span class="h">Fancy, ooh</span><br>
            </p>
            <p>
연기처럼 훅 사라질까<br>
늘 가득히 담아, 두 눈에 담아<br>
생각만으로 포근해져<br>
몰래 뒤에서 안아, 널 놓지 않을래<br>
            </p>
            <p>
<u>거기 너 <span class="h">摳ㄍㄧ那</span></u> <span class="h">I fancy you</span><br>
아무나 원하지 않아<br>
Hey, I love you (love ya)<br>
<u>그래, 너 <span class="h">ㄎ勒 那</span></u> <span class="h">I fancy you</span> <br>
꿈처럼 행복해도 돼<br>
'Cause I need you (what?)<br>
            </p>
            <p>
<span class="h">Fancy</span> you, ooh 누가 먼저 좋아하면 어때?<br>
<span class="h">Fancy</span> you, ooh 지금 너에게로 갈래<br>
<span class="h">Fancy</span> <mark><span class="h">[TWICE!]</span>, ooh</mark><br>
            </p>
        `
},
{
id: "Feel Special",
        title: "Feel Special",
        category: "twice",
        youtubeId: "3ymwOvzhwHs", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-feel-special",
        videoRefUrl: "https://www.youtube.com/watch?v=IOmuE8keA7g",
        lyricsHTML:`
            <p>
(You make me feel special)<br>
<span class="h">[那冏莫! 撒基米! 塔且子! 和給優搜嘿波k! ONCE! TWICE! 洽拉架!]</span><br>
            </p>
            <p>
그런 날이 있어<br>
갑자기 혼자인 것만 같은 날<br>
어딜 가도 내 자리가 아닌 것만 같고<br>
<u>고갠 떨궈지는 날 <span class="h">勾can 都括季嫩 拿</span></u><br>
            </p>
            <p>
그럴 때마다 내게<br>
<u>얼마나 내가 소중한지 말 <span class="h">喔媽拿 內嘎 搜九漢基 麻</span></u><br>
해주는 너의 그 한마디에 (hey)<br>
Everything's alright<br>
초라한 nobody에서 다시 somebody<br>
<u>특별한 나로 변해 <span class="h">特漂漢 拿摟 ㄆㄧㄡ內</span></u><br>
            </p>
            <p>
<span class="h">You make me feel special</span><br>
세상이 아무리 날 주저앉혀도 (앉혀도)<br>
아프고 아픈 말들이 날 찔러도<br>
<u>네가 있어 난 다시 웃어 <span class="h">內嘎 以蒐 南 塔系 五搜</span></u><br>
That's what you do<br>
            </p>
            <p>
<span class="h">Again I feel special</span><br>
아무것도 아닌 존재 같다가도 (같다가도)<br>
사라져도 모를 사람 같다가도<br>
<u>날 부르는 네 목소리에 <span class="h">拿 普勒嫩 你 摸搜立ㄟ</span></u><br>
I feel loved, I feel so special<br>
            </p>
            <p>
<u>자꾸 <span class="h">恰古</span></u> 숨고만 싶어서<br>
<u>마주 <span class="h">媽九</span></u> 하기가 싫어서<br>
모든 게 의미를 잃은 듯이<br>
내가 의미를 잃은 듯이 가만히<br>
<u>주저앉아 있을 때 <span class="h">九邱安駕 已私 ㄉㄟ</span></u> (oh)<br>
            </p>
            <p>
<u>그때 내 앞에 나타난 너의 <span class="h">可ㄉㄟ 內 阿配 拿它南 noㄟ</span></u><br>
따뜻한 미소와 손길에 (hey)<br>
            </p>
            <p>
Everything's alright<br>
초라한 nobody에서 다시 somebody<br>
<u>특별한 나로 변해 <span class="h">特漂漢 拿摟 ㄆㄧㄡ內</span></u><br>
            </p>
            <p>
<span class="h">You make me feel special</span><br>
세상이 아무리 날 주저앉혀도 (앉혀도)<br>
아프고 아픈 말들이 날 찔러도<br>
<u>네가 있어 난 다시 웃어 <span class="h">內嘎 以蒐 南 塔系 五搜</span></u><br>
That's what you do<br>
            </p>
            <p>
<span class="h">Again I feel special</span><br>
아무것도 아닌 존재 같다가도 (같다가도)<br>
사라져도 모를 사람 같다가도<br>
<u>날 부르는 네 목소리에 <span class="h">拿 普勒嫩 你 摸搜立ㄟ</span></u><br>
I feel loved, I feel so special<br>
            </p>
            <p>
<span class="h">Uh, you make everything alright</span><br>
구름이 쫙 낀 <br>
<u>햇살 한 줌 없는 날 <span class="h">黑撒 藍 九 摸嫩 拿</span></u><br>
네가 바로 나의 <span class="h">shining light [ㄟ]</span><br>
That's what you do<br>
아무리 어두운 밤도 다시 낮 <span class="h">[oh]</span><br>
I owe it to you<br>
Because you make me feel (make me feel special)<br>
            </p>
            <p>
세상이 아무리 날 주저앉혀도 (앉혀도)<br>
아프고 아픈 말들이 날 찔러도<br>
<u>네가 있어 난 다시 웃어 <span class="h">內嘎 以蒐 南 塔系 五搜</span></u><br>
That's what you do<br>
            </p>
            <p>
<span class="h">Again I feel special</span><br>
아무것도 아닌 존재 같다가도 (같다가도)<br>
사라져도 모를 사람 같다가도<br>
<u>날 부르는 네 목소리에 <span class="h">拿 普勒嫩 你 摸搜立ㄟ</span></u><br>
I feel loved, I feel so special<br>
<span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! ONE IN A! MILLION! 努埔溪給! 撒浪嘿! 兔! 哇! 意! 思!]</span><br>
            </p>   
        `
},
{
id: "MORE&MORE",
        title: "MORE & MORE",
        category: "twice",
        youtubeId: "SUCNse5JoO4",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-more-more",
        videoRefUrl: "https://www.youtube.com/watch?v=bDLuAp9Xgu0",
        lyricsHTML:`
            <p>
I know I want it<br>
입에 바른 소린 이제 그만할게<br>
'Cause I deserve it, <span class="h">deserve it</span><br>
혹시 잠깐 내가 미워지더라도 걱정 안 할게<br>
'Cause I know you, <span class="h">I know you</span><br></p>

<p>내 눈을 자꾸 피해봐 <span class="h">[hey]</span><br>
네 맘을 자꾸 숨겨봐 <span class="h">[hey]</span><br>
나에게서 도망쳐봐 no, no<br>
감았던 눈을 떴을 때 <span class="h">[hey]</span><br>
문득 내가 떠오를 때 <span class="h">[hey]</span><br>
You are gonna be mine again<br></p>

<p>You're gonna say <span class="h">more, more, more, more, more and more</span><br>
멈추지 못해 <span class="h">more, more, more and more</span><br>
그러니 한 번 더<br>
I wanna have <span class="h">more, more, more, more, more and more</span><br>
멈추기 싫어 <span class="h">more, more, more and more</span><br>
그러니 한 번 더 <span class="h">[TWICE!]</span><br></p>

<p>멈추지를 못해<br>
<span class="h">More and more</span><br>
그러니 한 번 더 <span class="h">[偷]</span><br>
멈추기가 싫어<br>
<span class="h">More and more</span><br>
그러니 한 번 더 <span class="h">[TWICE!]</span><br></p>

<p>Do you feel me?<br>
니가 날 위한 사람이라고 믿니<br>
Only for me, <span class="h">only for me</span><br>
간지러운 말은 굳이 하지 않아도 넌<br>
'Cause you know me, <span class="h">you know me</span><br></p>

<p>네 귀를 자꾸 막아도 <span class="h">[hey]</span><br>
나를 멀리 밀어내도 <span class="h">[hey]</span><br>
나에게서 멀어져도 (저 멀리) no, no<br>
내가 다시 널 부르면 <span class="h">[hey]</span><br>
나의 목소릴 들으면 <span class="h">[hey]</span><br>
You are gonna be mine again<br>
Yeah 한 번 더<br></p>

<p>You're gonna say <span class="h">more, more, more, more, more and more</span><br>
멈추지 못해 <span class="h">more, more, more and more</span><br>
그러니 한 번 더<br>
I wanna have <span class="h">more, more, more, more, more and more</span><br>
멈추기 싫어 <span class="h">more, more, more and more</span><br>
그러니 한 번 더 <span class="h">[TWICE!]</span><br></p>

<p>멈추지를 못해<br>
<span class="h">More and more</span><br>
그러니 한 번 더 <span class="h">[偷]</span><br>
멈추기가 싫어<br>
<span class="h">More and more</span><br>
그러니 한 번 더 <span class="h">[TWICE!]</span><br></p>

<p>
<span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! 科漏逆! 憨本豆! 那冏莫! 撒基米! 塔且子!]</span><br>
    난 원래 욕심쟁이 몰랐다면 <u>미안 <span class="h">咪安</span></u><br>
사과는 미리 할게 'cause I want you <span class="h">more more</span><br>
의견은 필요 없어 훔칠 거야 <u>네맘 <span class="h">捏滿</span></u><br>
내게 홀리게 될걸 you can't say <span class="h">no, no</span><br>
난 도둑고양이 <u>오늘만은 널 <span class="h">喔能滿恩 漏</span></u><br>
꼭 잡으러 왔으니까 <u>딱 기다려 너 <span class="h">搭 ㄎㄧ搭流 no</span></u><br>
멀리 가지 말고 다시 내게 <span class="h">come come</span><br>
Yeah 한 번 더<br></p>

<p>멈추지를 못해<br>
<span class="h">More and more</span><br>
그러니 한 번 더 <span class="h">[偷]</span><br>
멈추기가 싫어<br>
<span class="h">More and more</span><br>
그러니 한 번 더 <span class="h">[TWICE!]</span><br>
            </p>
        `
},
{
id: "ICAN'TSTOPME",
        title: "I CAN'T STOP ME",
        category: "twice",
        youtubeId: "rhMm79NZQTw",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-i-cant-stop-me",
        videoRefUrl: "https://www.youtube.com/watch?v=ESn0dkDh000",
        lyricsHTML:`
            <p>
<mark><span class="h">[no木那! 家裡貼! 兔! 哇! 意! 思!]</span><br>
Ooh-hoo, ooh-hoo, hoo, hoo, hoo</mark><br>
알람이 울려대 <span class="h">ring, ring-a-ling</span><br>
서로의 눈길이 닿을 때마다<br>
알면서 <u>빙빙 도는데 <span class="h">冰冰 偷能ㄉㄟ</span></u><br>
점점 다가가잖아 I know it's too late<br>
<u>마음속으로는 <span class="h">馬恩搜ㄎ樓能</span></u> 다 알고 있잖아<br>
결국에는 선을 넘게 될 거라는 걸<br>
<span class="h">I'm warning myself</span><br>
너 그러면 안 돼<br>
매분, 매초, 내 맘이 내 맘을 추월해<br>
Out of control <span class="h">[TWICE!]</span><br></p>

<p>나를 감시하는 저 <span class="h">spot, spot, spotlight</span><br>
비출수록 어둠 속으로 빨려 들어<br>
끝이 보이는데 <span class="h">I know it's not right</span><br>
I can't stop me, can't stop me (<span class="h">no, whoa, whoa, ha!</span>)<br></p>

<p>내 앞에 놓여진 이 <span class="h">red, red, red line</span><br>
건너편의 너와 난 이미 눈을 맞춰<br>
느끼고 싶어 <u>짜릿한 <span class="h">家裡炭</span></u> <span class="h">highlight</span><br>
I can't stop me, can't stop me (<span class="h">no, whoa, whoa,</span> ha!)<br></p>

<p>Ooh-hoo, ooh-hoo, hoo, hoo, hoo <span class="h">[那冏莫]</span><br>
Ooh-hoo, ooh-hoo, hoo, hoo, hoo <span class="h">[撒基米]</span><br>
Ooh-hoo, ooh-hoo, hoo, hoo, hoo <span class="h">[塔且子]</span><br></p>

<p>I can't stop me, can't stop me<br></p>

<p>눈감아 달라구 (<span class="h">ya, ya</span>)<br>
딱 한 번만 no rules (<span class="h">ah, ah</span>)<br>
모른 척해 줘 lights off <span class="h">tonight</span><br>
나 참을 수 없을 거 같아 losing myself (yeah, yeah)<br></p>

<p>이제는 <span class="h">turning back</span><br>
불가능해 난 점점 더 깊은 어둠에<br>
너무나 <u>짜릿해 <span class="h">家裡貼</span></u> 나 눈을 감을래<br>
다시는 돌아갈 수 없을 것만 같애<br>
<span class="h">Out of control [TWICE!]</span> (ooh, yeah, ha!)<br></p>

<p>나를 감시하는 저 <span class="h">spot, spot, spotlight</span><br>
비출수록 어둠 속으로 빨려 들어<br>
끝이 보이는데 <span class="h">I know it's not right</span><br>
I can't stop me, can't stop me (<span class="h">no, whoa, whoa, ha!</span>)<br></p>

<p>내 앞에 놓여진 이 <span class="h">red, red, red line</span> (red line)<br>
건너편의 너와 난 이미 눈을 맞춰<br>
느끼고 싶어 <u>짜릿한 <span class="h">家裡炭</span></u> <span class="h">highlight</span><br>
(I can't stop me, yeah)<br>
I can't stop me, can't stop me (<span class="h">no, whoa, whoa</span>)<br></p>

<p>Risky, risky, wiggy 위기<br>
<span class="h">This is an emergency</span><br>
Help me, help me, somebody stop me<br>
<span class="h">'Cause I know I can't stop me</span><br>
답은 알고 있잖아<br>
<u>근데 가고 있잖아 <span class="h">肯爹 卡溝 以加那</span></u><br>
이러고 싶지 않아<br>
내 안에 내가 <u>또 있나 봐 <span class="h">都 以那 八</span></u><br></p>

<p>나는 원하는데 (ah)<br>
원하는 게 안돼 (ah)<br>
Guilty 난 싫은데<br>
I can't stop me, can't stop me, can't stop me (oh, ha)<br></p>

<p>나를 감시하는 저 <span class="h">spot, spot, spotlight</span> (oh)<br>
비출수록 어둠 속으로 빨려 들어 (oh, oh)<br>
끝이 보이는데 <span class="h">I know it's not right</span> (oh, oh, oh)<br>
I can't stop me, can't stop me (<span class="h">no, whoa, whoa</span>)<br></p>

<p>내 앞에 놓여진 이 <span class="h">red red red line</span> (oh, oh)<br>
건너편의 너와 난 이미 눈을 맞춰 (oh, oh)<br>
느끼고 싶어 <u>짜릿한 <span class="h">家裡炭</span></u> <span class="h">highlight</span> (ooh, ooh, ooh, ooh, ooh)<br>
I can't stop me, can't stop me (<span class="h">no, whoa, whoa,</span> yeah, yeah, yeah)<br></p>

<p>
<mark><span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! 家裡ㄊㄟ! I! CAN'T! STOP! ME!]</span><br>
Ooh-hoo, ooh-hoo, hoo, hoo, hoo (ah)<br>
Ooh-hoo, ooh-hoo, hoo, hoo, hoo (ooh)<br>
Ooh-hoo, ooh-hoo, hoo, hoo, hoo</mark><br>
I can't stop me, can't stop me (no, whoa, whoa)
Ooh-hoo, ooh-hoo, hoo, hoo, hoo <span class="h">[那冏莫]</span><br>
Ooh-hoo, ooh-hoo, hoo, hoo, hoo <span class="h">[撒基米]</span><br>
Ooh-hoo, ooh-hoo, hoo, hoo, hoo <span class="h">[塔且子]</span><br>
<span class="h">[批chu蘇囉! 八九特囉! 兔! 哇! 意! 思!]</span><br>
            </p>
        `
},
{
id: "Alcohol-Free",
        title: "Alcohol-Free",
        category: "twice",
        youtubeId: "t0hYMtM4ZKg",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-alcohol-free",
        videoRefUrl: "https://www.youtube.com/watch?v=DKSVlHSQvF0",
        lyricsHTML:`
            <p>
<p class="tip">前奏播放後兩個八拍</p><br>
<span class="h">[那冏莫! 撒基米! 塔且子! 由冷妹! TWICE!]</span><br>
너와 있을 땐 내게<br>
신기한 변화가 있는데 <span class="h">[伊 嫩 ㄉㄟ]</span><br>
자꾸 미소 짓게 돼<br>
아무 일도 없는데<br></p>

<p>자꾸 마법에 걸려 <span class="h">[扣六]</span><br>
밤을 새워도 안 졸려 <span class="h">[邱六]</span><br>
다른 생각 지워져 <span class="h">[握就]</span><br>
심장 소리는 커져 <span class="h">[kung kung]</span><br>
사랑이 참 쉬워져<br>
그래서 빠지고 빠져 <u>점점 <span class="h">冏冏</span></u> 너에게<br>
That's what you do to me<br></p>

<p>나는 alcohol free 근데 취해 (<u>취해, 취해 <span class="h">漆黑, 漆黑</span></u>)<br>
마신 게 하나도 없는데 (<u>없는데 <span class="h">歐 嫩 ㄉㄟ</span></u>)<br>
너와 있을 때마다 이래 (<u>이래, 이래 <span class="h">伊勒, 伊勒</span></u>)<br>
날 보는 네 눈빛 때문에<br></p>

<p>너는 눈으로 마시는 내 <span class="h">champagne</span> <u>내 <span class="h">內</span></u> <span class="h">wine</span><br>
내 tequila, margarita<br>
<span class="h">Mojito with lime</span><br>
Sweet mimosa, pina colada<br></p>

<p>I'm drunk in you<br>
I'm drunk in you<br>
<mark><span class="h">[兔! 哇! 意! 思!]</span><br>
너는 정말</mark> 특별해<br>
전혀 독하지 않은데 yeah<br>
낮에 별이 뜨게 해<br>
한 모금 마셨는데<br></p>

<p>자꾸 마법에 걸려 <span class="h">[扣六]</span><br>
밤을 새도 안 졸려 <span class="h">[邱六]</span><br>
다른 생각 지워져 <span class="h">[握就]</span><br>
심장 소리는 커져 <span class="h">[kung kung]</span><br>
사랑이 참 쉬워져<br>
그래서 빠지고 빠져 <u>점점 <span class="h">冏冏</span></u> 너에게<br>
That's what you do to me<br></p>

<p>나는 alcohol free 근데 취해 (<u>취해, 취해 <span class="h">漆黑, 漆黑</span></u>)<br>
마신 게 하나도 없는데 (<u>없는데 <span class="h">歐 嫩 ㄉㄟ</span></u>)<br>
너와 있을 때마다 이래 (<u>이래, 이래 <span class="h">伊勒, 伊勒</span></u>)<br>
날 보는 네 눈빛 때문에<br></p>

<p><span class="h">Yo</span><br>
Alcohol 도수는 완전 <span class="h">zero point zero</span><br>
근데 마실 때마다 <u>자꾸 길을 잃어 <span class="h">洽辜 ㄎㄧ了 伊摟</span></u><br>
자고 일어나도 깨지<u>가 않아 <span class="h">嘎 阿那</span></u><br>
근데 이 기분 싫지<u>가 않아 <span class="h">嘎 阿那</span></u><br></p>

<p>Easy to the mouth and <span class="h">tummy</span><br>
Like a drink made of <span class="h">honey</span><br>
이 술 이름은 도대체 <u>뭐니 <span class="h">摸尼</span></u><br>
Makes the whole world <span class="h">bright and sunny</span><br></p>

<p>나는 alcohol free 근데 취해 (<u>취해, 취해 <span class="h">漆黑, 漆黑</span></u>)<br>
마신 게 하나도 없는데 (<u>없는데 <span class="h">歐 嫩 ㄉㄟ</span></u>)<br>
너와 있을 때마다 이래 (<u>이래, 이래 <span class="h">伊勒, 伊勒</span></u>)<br>
날 보는 네 눈빛 때문에<br></p>

<p>너는 눈으로 마시는 내 <span class="h">champagne</span> <u>내 <span class="h">內</span></u> <span class="h">wine</span><br>
내 tequila, margarita<br>
<span class="h">Mojito with lime</span><br>
Sweet mimosa, pina colada<br></p>

<p>I'm drunk in you (I'm drunk in you)<br>
I'm drunk in you (I'm drunk in you)<br>
            </p>
        `
},
{
id: "TheFeels",
        title: "The Feels",
        category: "twice",
        youtubeId: "f5_wn8mexmM",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-the-feels",
        videoRefUrl: "https://www.youtube.com/watch?v=X-1lbSCbzz4",
        lyricsHTML:`
            <p>
Boy I, boy I, boy I know<br>
I know you get the feels (yeah)<br>
Boy I, boy I, boy I know<br></p>

<p>
<mark><span class="h">[TWICE]</span>Uh</mark>, I'm so curious<br>
'Bout you boy, wanna keep it cool<br>
But I know, every time you move<br>
Got me frozen I<br>
<span class="h">Get</span> so shy<br>
It's <span class="h">obvious</span> (yeah, yeah)<br>
Catchin' feels like butterflies<br>
If I say what's <span class="h">on my mind</span><br>
Would I hit bullseye? (Woo)<br>
Shoot <span class="h">[Bang!]</span>, I'm ready, aim and fire (fire)<br></p>

<p>Baby I (<span class="h">whoa</span>)<br>
Feel like Cupid's alive<br>
Alive tonight<br>
Yeah, tonight<br>
If your heart beats the same way, let me know (yeah, let me know)<br>
'Cause I'm <span class="h">boom, boom, boom</span> from head to toe and I (from head to toe)<br></p>

<p>I know love, it is such a funny thing<br>
A mystery allure<br>
Gotta get to know you more<br>
'Cause I, I can feel a real <span class="h">connection</span><br>
A supernatural <span class="h">attraction-ah</span><br>
I got the feels for you, yeah, yeah, yeah, <mark>yeah <span class="h">[oh~ yeah!]</span></mark><br></p>

<p>You have stolen my heart, oh yeah<br>
Never let it <span class="h">go, oh, oh,</span> no<br>
Never let it go, oh, oh, oh<br>
Lightning straight to my heart, oh yeah<br>
I got all the <span class="h">feels for sure</span><br>
Yeah, I got all the feels for ya<br></p>

<p><span class="h">Boy I, boy I, boy I know</span><br>
I know I get the feels<br>
<span class="h">Boy I, boy I, boy I know</span><br>
I know you feel it, too<br></p>

<p>Sway in the moonlight, dance in the dark<br>
I, I know that I caught your eye (that's right)<br>
Are we on the same vibe? (Same vibe)<br>
I wonder what's on your mind<br>
'Cause you got me good and I wanna be your <span class="h">boo</span><br>
If it's dumb, well, I wanna be a <span class="h">fool</span><br>
Underneath the neon lights, <span class="h">baby</span><br>
Electricity tonight, <span class="h">baby</span><br></p>

<p>I know love, it is such a funny thing<br>
A mystery allure<br>
Gotta get to know you more<br>
'Cause I, I can feel a real <span class="h">connection</span><br>
A supernatural attraction-ah<br>
I got the feels for you, yeah, yeah, yeah, <mark>yeah <span class="h">[oh~ yeah!]</span></mark><br></p>

<p>You have stolen my heart, oh yeah<br>
Never let it <span class="h">go, oh, oh,</span> no<br>
Never let it go, oh, oh, oh<br>
Lightning straight to my heart, oh yeah<br>
I got all the <span class="h">feels for sure</span><br>
Yeah, I got all the feels for ya<br></p>

<p><span class="h">Boy I, boy I, boy I know</span><br>
I know I get the feels<br>
<span class="h">Boy I, boy I, boy I know</span><br>
I know you feel it, too<br>
<span class="h">Boy I, boy I, boy I know</span><br>
I know I get the feels<br>
<span class="h">Boy I, boy I, boy I know</span><br>
I know you feel it, too<br></p>

<p>You got my attention (oh)<br>
So what's your intention<br>
Yeah, tell me baby what's the deal?<br>
Oh, one look and I know it, baby, my eyes reveal<br>
That you, you, you give me the feels (oh), oh yeah<br></p>

<p>You have stolen my heart, oh yeah <span class="h">[那冏莫]</span><br>
Never let it go, oh, oh, no <span class="h">[撒基米]</span><br>
Never let it go, oh, oh, oh <span class="h">[塔且子]</span><br>
Lightning straight to my heart, oh yeah <span class="h">[The Feels]</span><br>
I got all the feels for sure <span class="h">[Forever]</span><br>
Yeah, I got all the feels for ya <span class="h">[I Love You]</span><br></p>

<p><span class="h">Boy, I, boy, I, boy, I know</span> (the feels)<br>
I know I get the feels (oh, yeah) (the feels)<br>
<span class="h">Boy, I, boy, I, boy, I know</span> (yeah, yeah, yeah)<br>
I know you feel it, too (yeah, yeah, yeah)<br>
<span class="h">Boy, I, boy, I, boy, I know</span> (the feels) (come on)<br>
I know I get the feels<br>
<span class="h">Boy, I, boy, I, boy, I know</span><br>
I know you feel it, too<br>
            </p>
        `
},
{
id: "SCIENTIST",
        title: "SCIENTIST",
        category: "twice",
        youtubeId: "xFBvfk4Ul-Q",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-scientist",
        videoRefUrl: "https://www.youtube.com/watch?v=jcHcRqqm8KQ",
        lyricsHTML:`
            <p>
Yeah <span class="h">[TWICE!]</span><br></p>

<p>왜 자꾸 날 연구해<br>
아인슈타인도 <u>아니고 <span class="h">阿逆勾</span></u><br>
왜 그렇게 각을 재<br>
Sine, cosine도 <u>아니고 <span class="h">阿逆勾</span></u><br>
밀고 당기는 게 내 스타일은 더 <u>아니고 <span class="h">阿逆勾</span></u><br>
알아보다 말 거면<br>
눈에 밟히지나 마 좀 제발 <span class="h">[切拜]</span><br></p>

<p>넌 생각이 <u>많아 <span class="h">麻那</span></u> 문제야 <u>문제 <span class="h">悶接</span></u><br>
머릿속만 들여다보면 뭐 해 (<u>뭐 해 <span class="h">摸 黑</span></u>)<br>
각 잴 시간에 답 낼 시간에<br>
<span class="h">Better make a move</span><br></p>

<p>Love ain't a science<br>
Don't need no license<br>
머리 싸매고 고민할수록 <span class="h">minus</span><br></p>

<p>Don't try to be a genius<br>
<span class="h">Why so serious?</span><br>
맘이 가는 대로 <span class="h">ooh ah</span><br>
맘이 시킨 대로 what you, what you waiting for?<br></p>

<p>그래 뭘 알아냈어?<br>
그동안 나에 <u>대해 <span class="h">貼黑</span></u><br>
다음 과목은 뭐야?<br>
So what's the next <span class="h">class, then?</span><br>
백날 연구해봤자 이런 식이면 <span class="h">failure</span><br>
분 단위로 바뀌어대는<br>
내 맘은 <u>못 풀어낼걸 <span class="h">摸 鋪漏內溝</span></u><br></p>

<p>넌 생각이 <u>많아 <span class="h">麻那</span></u> 문제야 <u>문제 <span class="h">悶接</span></u><br>
머릿속만 들여다보면 뭐 해 (<u>뭐 해 <span class="h">摸 黑</span></u>)<br>
각 잴 시간에 답 낼 시간에<br>
<span class="h">Better make a move</span><br></p>

<p>Love ain't a science<br>
Don't need no license<br>
머리 싸매고 고민할수록 <span class="h">minus</span><br></p>

<p>Don't try to be a genius<br>
<span class="h">Why so serious?</span><br>
맘이 가는 대로 <span class="h">ooh ah</span><br>
맘이 시킨 대로 what you, what you waiting for?<br></p>

<p><span class="h">[ooh]</span>You got a crush on me<br>
<span class="h">[ooh]</span>You're gonna fall for me<br>
사랑 앞에서 이론이 무슨 소용, it's all useless, <span class="h">uh huh</span><br></p>

<p>이론 빠삭한 genius <u>아인슈타인 <span class="h">阿因ㄙ坦</span></u><br>
보단 불도저 curious <u>프랑켄슈타인 <span class="h">franks坦</span></u><br>
처럼 돌진해 서툰데 멋지네<br>
거침없이, 세게 rush<br>
Got a crush on me<br></p>

<p>답이 없어 재미있는 걸 넌 왜 <u>몰라 <span class="h">摸拉</span></u><br>
답을 몰라 설레었던 걸 넌 왜 <u>몰라 <span class="h">摸拉</span></u><br>
나사 하나 빠진 것처럼 <u>사랑하자 <span class="h">撒浪哈價</span></u><br>
<mark><span class="h">[TWICE! 撒浪嘿!]</span><br>
딱 하나만 아는 </mark><br>
바보 된 것처럼<br></p>

<p>Love ain't a science, <span class="h">uhm uhm</span><br>
Need no license, <span class="h">uhm uhm</span><br>
연구해 about me, 'bout me<br>
충분히 <span class="h">you know 'bout me</span><br>
Love ain't a science, <span class="h">uhm uhm</span><br>
Need no license, <span class="h">uhm uhm</span><br>
말했잖아 what you, what you, what you waiting for?<br></p>

<p>Love ain't a science<br>
Don't need no license<br>
머리 싸매고 고민할수록 <span class="h">minus</span><br></p>

<p>Don't try to be a genius<br>
<span class="h">Why so serious?</span><br>
맘이 가는 대로 ooh ah<br>
맘이 시킨 대로 what you, what you waiting for? (hoo)<br></p>

<p>
<span class="h">[ImNaYeon! YuJeongYeon! MoMojjang! SaNajjang! ParkJiHyo! MiNajjang! KimDaHyun! SonChaeYeong! ChouTzuYu! 邱哇嘿! 他必 歐搜 搜勒優! 他本 摸拉 撒浪嘿! 兔! 哇! 意! 思!]</span><br>
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
id: "TalkthatTalk",
        title: "Talk that Talk",
        category: "twice",
        youtubeId: "ulopgxJASwI",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-talk-that-talk",
        videoRefUrl: "https://www.youtube.com/watch?v=KIsbsNjtltg",
        lyricsHTML:`
            <p>
<span class="h">[那冏莫! 撒基米! 塔且子! 勇萬嘿! ONCE尬! 特六煮給! 兔哇意思! I LOVE YOU!]</span><br>
날 보는 eyes 씩 웃는 lips<br>
맘에 들지 <span class="h">I like it</span> (oh, yeah)<br>
니 A to Z 꽤 달콤해 (<span class="h">that's right</span>)<br>
But I wanna skip (<span class="h">just skip</span>)<br>
더 결정적인 thing (<span class="h">that thing</span>)<br>
본론을 원해, 빙빙 돌린 서론 따위 말고 (<span class="h">I mean L-word</span>)<br></p>

<p>더-더-더, 더-더 더 <u>보여줘 <span class="h">ㄅㄨ右九</span></u><br>
너-너-너, 너-너 널 <u>알려줘 <span class="h">哀六九</span></u><br>
지금 난 need some hints<br>
채우고 있어 <u>너란 <span class="h">挪藍</span></u> <span class="h">crosswords</span><br>
Beep-beep-beep, beep-beep, the time is up<br>
난 이미 <u>알 것 같지만 <span class="h">阿 勾 卡積滿</span></u><br>
니 목소리로 바로 듣고 싶은데 <span class="h">[TWICE!]</span><br></p>

<p>Baby 내 답은 뻔하잖아 <span class="h">yes or yes</span><br>
밀거나 당기는 괜한 시간 낭비는 싫으니<br>
과감하게 say it now 원해 <span class="h">one to ten</span><br>
시작해볼까? Right now <span class="h">[卡價]</span><br></p>

<p>Tell me what you want<br>
Tell me what you need<br>
<span class="h">A to Z</span> <u>다 말해봐 <span class="h">塔 麻勒爸</span></u> but 시작은 이렇게 해<br>
<span class="h">Talk that talk</span> 딱 한 마디<br>
Talk that talk <span class="h">L-O-V-E</span><br>
<u>들려줘 <span class="h">特六就</span></u> <span class="h">ooh</span><br>
Now-now-now-now-now, yeah (yeah, turn it up)<br></p>

<p>너의 눈 <span class="h">look, look, look</span><br>
위아래로 <span class="h">roll, roll, roll</span><br>
읽었잖아 뭐 피차, 눈빛 사이 오고 가는 말<br>
차근차근 one, two, three (just one, two, three)<br>
더 친절하게 ABC (like ABC)<br>
<span class="h">Don't stop</span> and just replay<br>
Replay (yeah, that's my only request)<br></p>

<p>Baby 날 안고 달콤하게<br>
<span class="h">Tell me now</span> (just tell me now)<br>
때로는 뻔한 말이 더 좋다는 걸 알잖니<br>
Favorite part 지금이야 (want it more)<br>
Now we're almost there<br>
시작해볼까? Right now <span class="h">[卡價]</span><br></p>

<p>Tell me what you want<br>
Tell me what you need<br>
<span class="h">A to Z</span> <u>다 말해봐 <span class="h">塔 麻勒爸</span></u> but 시작은 이렇게 해<br>
<span class="h">Talk that talk</span> 딱 한 마디<br>
Talk that talk <span class="h">L-O-V-E</span><br>
<u>들려줘 <span class="h">特六就</span></u> <span class="h">ooh</span><br>
Now-now-now-now-now, yeah<br></p>

<p>단순한 words 사랑한다는 말<br>
그게 다야, 난 <u>꾸밈없이 듣길 원하지 <span class="h">古敏鷗喜 特ㄍㄧ 往那記</span></u><br>
미루지 않아, 너에게 다가가<br>
난 심플하게 다 말할게 I love you <span class="h">[I LOVE YOU]</span><br></p>

<p>Tell me what you want<br>
Tell me what you need<br>
<span class="h">A to Z</span> <u>다 좋지만 <span class="h">塔 邱擠滿</span></u> 난 이 말이 제일 좋은데<br>
<span class="h">Talk that talk</span> 딱 한 마디<br>
Talk that talk <span class="h">L-O-V-E</span><br>
Oh, yeah, it sounds so good <span class="h">[ㄟ]</span> 더 빠져들어 푹<br></p>

<p>Tell me what you want<br>
Tell me what you need<br>
한 번 더 해줘, 그래, 방금 그 말<br>
<span class="h">Talk that talk</span> 딱 한 마디<br>
Talk that talk <span class="h">L-O-V-E</span><br>
<u>들려줘 <span class="h">特六就</span></u> <span class="h">ooh</span><br>
Now-now-now-now-now, yeah (yeah, turn it up)<br>
            </p>
        `
},
{
id: "SETMEFREE",
        title: "SET ME FREE",
        category: "twice",
        youtubeId: "Elp13qgVgHI",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-set-me-free-1",
        videoRefUrl: "https://www.youtube.com/watch?v=rYWvOyGg0b8",
        lyricsHTML:`
            <p>
<p class="tip">前奏播放後一個八拍</p><br>
<span class="h">[兔! 哇! 意! 思! SET! ME! FR! EE!]</span><br>
모든 걸 잃어버린대도 <u>상관없어 <span class="h">商管喔搜</span></u> <br>
지금 이 감정이 순간이라 해도<br>
이제는 더 이상 내 맘 <u>숨기긴 싫어 <span class="h">孫ㄍㄧㄍㄧ 西摟</span></u><br>
니 눈빛이 날 자유롭게 만들잖아<br></p>

<p><span class="h">No, no-no-no-no</span><br>
의식하지 말고 날 안아줘<br>
더는 잃을 것도 숨길 것도 없어<br></p>

<p>내 모든 걸 걸어 <span class="h">risk it all</span><br>
이 사랑 말고는 <span class="h">fade out</span><br>
Gonna <span class="h">set me, set me, set me free</span><br>
(Oh)<br>
내 맘 끝까지 갈 테니<br>
넌 그냥 날 안으면 돼<br>
Come and <span class="h">set me, set me, set me free</span><br></p>

<p>내가 원하던 best of me <span class="h">[那冏莫]</span><br>
이제 나는 ready to be <span class="h">[撒基米]</span><br>
Yeah, <span class="h">gonna set me, set me, set me free [塔且子]</span><br>
지금 all eyes on me (ah)<br>
나를 안아줘 다 보란 듯이 <span class="h">[TWICE!]</span><br>
Yeah, come and <span class="h">set me, set me, set me free</span><br></p>

<p>어리석은 충동이래도 <u>상관없어 <span class="h">商管喔搜</span></u> (yeah-yeah)<br>
날 가두는 시선 따윈 이미 out of sight (oh-oh)<br>
지금 우린 내가 꿈꿔왔던 <u>그대로 <span class="h">ㄎ爹囉</span></u><br>
눈앞에 그려진 완벽한 fantasy<br></p>

<p><span class="h">No, no-no-no-no</span><br>
신경 쓰지 말고 날 안아줘<br>
더는 잃을 것도 숨길 것도 없어<br></p>

<p>모든 걸 걸어 <span class="h">risk it all</span><br>
이 사랑 말고는 <span class="h">fade out</span><br>
Gonna <span class="h">set me, set me, set me free</span><br>
(Oh)<br>
내 맘 끝까지 갈 테니<br>
넌 그냥 날 안으면 돼<br>
Come and <span class="h">set me, set me, set me free</span><br></p>

<p>내가 원하던 best of me <span class="h">[那冏莫]</span><br>
이제 나는 ready to be <span class="h">[撒基米]</span><br>
Yeah, gonna <span class="h">set me, set me, set me free [塔且子]</span><br>
지금 all eyes on me (ah)<br>
나를 안아줘 다 보란 듯이 <span class="h">[TWICE!]</span><br>
Yeah, come and <span class="h">set me, set me, set me free</span><br></p>

<p>Uh, uh<br>
I'm gonna tell you straight<br>
No matter what they say <span class="h">[ㄟ]</span><br>
두 점을 잇는 line 안 끊겨 <span class="h">all my</span> <mark><span class="h">[TWICE]</span>life</mark><br>
부딪히고 넘어져도 일으켜 날<br>
두 눈이 맞닿을 땐 <span class="h">make me feel special</span><br>
너로 인해 완전한 나로 completed<br>
이 말 믿어도 돼 'cause <span class="h">this is official, uh</span><br></p>

<p>내 모든 걸 걸어 <span class="h">risk it all</span><br>
이 사랑 말고는 <span class="h">fade out</span><br>
Gonna <span class="h">set me, set me, set me free</span><br>
(Oh)<br>
내 맘 끝까지 갈 테니<br>
넌 그냥 날 안으면 돼<br>
Come and <span class="h"></span>set me, set me, set me free<br></p>

<p>내가 원하던 best of me <span class="h">[那冏莫]</span><br>
이제 나는 ready to be <span class="h">[撒基米]</span><br>
Yeah, gonna <span class="h">set me, set me, set me free [塔且子]</span><br>
지금 all eyes on me (ah)<br>
나를 안아줘 다 보란 듯이 (yeah) <span class="h">[TWICE!]</span><br>
Yeah, come and <span class="h">set me, set me, set me free</span><br>
            </p>
        `
},
{
id: "Killin'MeGood",
        title: "Killin' Me Good",
        category: "JIHYO",
        artist: "JIHYO",                 
        themeOverride: {                 
            main: "#fac066",
            light: "#faf0e1",
            bg: "#CDDBEE"
        },
        youtubeId: "0M2bZCiwnKI", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/jihyo-killin-me-good",
        videoRefUrl: "https://www.youtube.com/watch?v=8S18JPKXCVo",
        lyricsHTML:`
            <p>
Yeah<br>
<span class="h">[母ㄉㄟ瓊界 ParkJiHyo! 勇萬ㄏㄧ! 批那假!]</span><br>
Yeah<br></p>

<p>Something that I can't deny <span class="h">[ParkJiHyo!]</span><br>
처음 입을 댄 그 순간<br>
온몸이 느끼는 뭔가<br>
Something that I can't explain <span class="h">[撒浪嘿]</span><br>
하지만 너무 특별해<br>
눈을 감고서 집중해<br></p>

<p>몸이 떠오르는 <u>시간 <span class="h">溪乾</span></u><br>
내 안에 들리는 <u>소리만 <span class="h">[搜利曼]</span></u><br>
듣고 그대로 따라갈래 (that's what you do)<br>
I'm losing all my <span class="h">senses</span><br>
You're taking me to <span class="h">places</span><br>
And you know all that I can say is<br></p>

<p>Killin' me, killin' me good (<span class="h">so good, so good</span>)<br>
Feeling things I never knew that I could, ooh<br>
니가 만들어주는 이 기분 (so good, so good)<br>
십 초마다 생각이 나 <span class="h">[JiHyo尬]</span><br>
내 모습에 내가 놀라 <br>
You're <span class="h">killin' me, killin' me good</span><br>
(You're making me feel something new, <span class="h">hey</span>)<br>
(You're making me feel so brand new)<br></p>

<p>나보다 날 더 잘 아는 거야<br>
Oh, you keep on making me say, oh my, oh my<br>
<span class="h">Don't stop</span> 두 단어만 끝없이<br>
네 귀에 속삭이지 take me so high<br></p>

<p>나에게 널 맡길 <u>시간 <span class="h">溪乾</span></u><br>
이제 널 위해 <u>준비한 <span class="h">俊必漢</span></u><br>
날 보여줄게 너에게만 (that's what I'll do)<br>
I'll let you lose your <span class="h">senses</span><br>
And make you and go to <span class="h">places</span><br>
Then I know all that you can say is<br></p>

<p>You're killin' me, killin' me good (<span class="h">so good, so good</span>)<br>
Feeling things I never knew that I could, ooh<br>
니가 만들어주는 이 기분 (so good, so good)<br>
십 초마다 생각이 나 <span class="h">[JiHyo尬]</span><br>
내 모습에 내가 놀라<br>
You're <span class="h">killin' me, killin' me good</span><br>
(You're making me feel something new, <span class="h">hey</span>)<br>
(You're making me feel so brand new)<br></p>

<p>Oh, oh 날 솔직하게 해, 모두 표현하게 돼<br>
그래서 또 내 입에서 나오는<br>
Oh, oh 넌 위험하게 달콤해 <span class="h">[太空美]</span><br>
그래서 난 계속 원해 <span class="h">窩嘿</span><br>
I just can't help but to say<br></p>

<p>Killin' me, killin' me good (<span class="h">so good, so good</span>) yeah, yeah<br>
Feeling things I never knew that I could, ooh<br>
니가 만들어주는 이 기분 (so good, so good)<br>
십 초마다 생각이 나 <span class="h">[JiHyo尬]</span><br>
내 모습에 내가 놀라 (내가 놀라)<br>
You're <span class="h">killin' me, killin' me good<br></span>

(You're making me feel <mark><span class="h">[森嘎ㄍㄧ那 ParkJiHyo!]</span> something new, hey</mark> )<br>
(You're making me feel <mark><span class="h">[大辣咖勒 ParkJiHyo!]</span> so brand new</mark> )<br>
(You're making me feel <mark><span class="h">[k搜窩內 ParkJiHyo!]</span> something new, hey</mark>)<br>
(You're making me feel so brand new)<br>
You're <span class="h">killin' me, killin' me good</span><br>
            </p>`
},
{
id: "IGOTYOU",
        title: "I GOT YOU",
        category: "twice",
        youtubeId: "fwPjD-jFsls",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-i-got-you",
        videoRefUrl: "https://www.youtube.com/watch?v=ZLAPXBbc0gk",
        lyricsHTML:`
            <p>
<p class="tip">前奏播放後兩個八拍</p><br>
<span class="h">[那冏莫! 撒基米! 塔且子! ONE IN A! MILLION!]</span><br>
<span class="h">[兔! 哇! 意! 思!]</span><br>
A little reckless around the edges<br>
Call it young, dumb love and it's just enough<br>
Keep me guessing (<span class="h">keep me guessing</span>)<br>
How the story unfolds with you (you)<br>
When I'm walking into the darkness<br>
I know you'll be right there, lighting up the flares<br>
When it's starless <span class="h">[When it's starless]</span>, I will follow you to the moon (moon, ayy)<br></p>

<p>No, we'll never fall apart <span class="h">[兔! 哇! 意! 思!]</span><br>
Even million miles apart <span class="h">[兔! 哇! 意! 思!]</span><br>
We were lightning from the start (lightning from the start)<br>
And it keeps me going to know that<br></p>

<p>Ooh, no matter what, you got me<br>
I got you <span class="h">[I伊! GOT! YOU!]</span><br>
and I wouldn't want it any other way<br>
Ooh, no drop of doubt, I know deep down that<br>
We'll make it through (it through)<br>
Just like we always do<br>
<span class="h">[那冏莫! 撒基米! 塔且子! ONE IN A! MILLION!]</span><br>
<span class="h">[兔! 哇! 意! 思!]</span><br></p>

<p>Ayy, every second <span class="h">[hey]</span>, every minute <span class="h">[hey]</span><br>
Want you close to me like you're supposed to be<br>
Ain't no limit (ain't no limit)<br>
To what I would do for you, oh, oh<br>
And you know, you turn my whole world <span class="h">upside down</span><br>
Catch me before I ever <span class="h">hit the ground</span><br>
And I'd do the same for you, oh, whoa<br></p>

<p>No, we'll never fall apart <span class="h">[兔! 哇! 意! 思!]</span><br>
Even million miles apart <span class="h">[兔! 哇! 意! 思!]</span><br>
We were lightning from the start (we were lightning from the)<br>
And it keeps me going to know that<br></p>

<p>Ooh, no matter what, you got me<br>
I got you <span class="h">[I伊! GOT! YOU!]</span><br>
and I wouldn't want it any other way<br>
Ooh, no drop of doubt, I know deep down that<br>
We'll make it through (make it through)<br>
Just like we always do<br></p>

<p><span class="h">Do-do-do, do-do, do-do, do, do<br>
Do-do-do, do-do, do-do, do, do<br>
Do-do-do, do-do, do-do, do, do,</span> oh-oh<br></p>

<p>Ooh, no matter what, you got me<br>
I got you <span class="h">[I伊! GOT! YOU!]</span><br>
and I wouldn't want it any other way<br>
Ooh, no drop of doubt, I know deep down that<br>
We'll make it through (through)<br>
Just like we always do<br></p>

<p><span class="h">Do-do-do, do-do, do-do, do, do<br>
Do-do-do, do-do, do-do, do, do<br>
Do-do-do, do-do, do-do, do, do</span><br>
Just like we always do<br>
            </p>
        `
},
{
id: "ONESPARK",
        title: "ONE SPARK",
        category: "twice",
        youtubeId: "ChvAoD3-hXA",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-one-spark",
        videoRefUrl: "https://www.youtube.com/watch?v=_3KdaVwKpXw",
        lyricsHTML:`
            <p>
Ah, he-he-he<br>
<span class="h">One spark, baby</span><br></p>

<p>Everybody wants that endless flame<br>
식지 않을 everlasting blast<br>
영원한 걸 <u>염원해 <span class="h">用萬黑</span></u>, 그래, <u>영원히 <span class="h">用萬ㄏㄧ</span></u><br>
We're sparkling beautifully (ooh)<br>
아름다울 걸 난 확신해<br></p>

<p>너의 숨결에 온기를 데워<br>
계속 타오르는 energy<br>
If I lose my rhythm<br>
Then your beat goes on and on (on and on)<br>
<span class="h">Bring me the, bring me the spark in my veins<br>
Give me the freedom, the freedom to chase</span><br>
You know it's all ours<br>
이대로 make this moment last<br></p>

<p>'Cause my heart is burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span><br>
So good that it's hurting <span class="h">[hurting]</span>, hurting <span class="h">[hurting]</span>, hurting <span class="h">[hurting]</span><br>
눈부시게 아름답고 아프다 해도 it's our golden days <span class="h">[兔! 哇! 意! 思!]</span><br>
Yeah, my heart is burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span><br>
Don't lose this spark, baby<br></p>

<p>너와 누워본 coral 빛 heaven<br>
붉은 두 뺨이 식지 않도록<br>
<u>더 세게 <span class="h">偷 ㄙㄟ給</span></u> 끌어안고<br>
<u>더 크게 <span class="h">偷 ㄎ給</span></u> 불러줄게<br></p>

<p>너의 숨결에 온기를 데워<br>
계속 타오르는 energy<br>
If I lose my rhythm<br>
Thеn your beat goes on and on (on and on)<br>
<span class="h">Bring me thе, bring me the spark in my veins<br>
Gimme the freedom the freedom to chase</span><br>
You know it's all ours<br>
이대로 make this moment last (<span class="h">baby</span>)<br></p>

<p>'Cause my heart is burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span><br>
So good that it's hurting <span class="h">[hurting]</span>, hurting <span class="h">[hurting]</span>, hurting <span class="h">[hurting]</span><br>
눈부시게 아름답고 아프다 해도 it's our golden days <span class="h">[兔! 哇! 意! 思!]</span><br>
Yeah, my heart is burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span><br>
Don't lose this spark, baby<br></p>

<p>Lighting it up 빛이 나는 시간을 건너 (빛의 시간을 건너)<br>
Glowing so bright 찬란한 환상쯤에 이르러<br>
This is the time of our lives <span class="h">[lives]</span><br>
Carved into our minds <span class="h">[minds]</span><br>
저물지 않아 there ain't no sundown<br>
An everlasting spark to an everlasting fire<br>
<span class="h">Don't let this fire die</span> (oh-whoa, burning on, ooh)<br></p>

<p>'Cause my heart is burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span><br>
So good that it's hurting <span class="h">[hurting]</span>, hurting <span class="h">[hurting]</span>, hurting <span class="h">[hurting]</span><br>
눈부시게 아름답고 아프다 해도 it's our golden days <span class="h">[兔! 哇! 意! 思!]</span><br>
Yeah, my heart is burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span><br>
Don't lose this spark, baby (oh)<br></p>

<p>'Cause my heart is burning <span class="h">[burning]</span>, burning <span class="h">[burning]</span>, burning<br>
            </p>
        `
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
id: "Strategy",
        title: "Strategy",
        category: "twice",
        youtubeId: "Z6Fc5TYih3M",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-strategy",
        videoRefUrl: "https://www.youtube.com/watch?v=kJItjpQoFgU",
        lyricsHTML:`
            <p>
Hey, boy, I'ma get ya<br>
I'ma get you real good and I bet ya (it's Megan Thee Stallion)<br>
Hey, boy, once I get ya<br>
You'll be, oh, so glad that I met ya (and TWICE)<br>
Ow <span class="h">[兔! 哇! 意! 思!]</span><br></p>

<p>Step one <span class="h">[one]</span>, do my highlight<br>
Make me shine so bright in the moonlight<br>
Step two <span class="h">[two]</span>, silhouette tight<br>
Baby, even my shadow looks good, right?<br>
Step three <span class="h">[three]</span>, when I arrive<br>
Make you look my way with your heart eyes<br>
Step four <span class="h">[four]</span>, got you on the floor<br>
Make you say, "<span class="h">More, more, more</span>"<br></p>

<p>When I say, "Hi"<br>
I'm feeling all your attention on me<br>
Hi<br>
No reason to be so shy with me<br>
I ain't gonna bite, come on over (<span class="h">no</span>)<br>
I know you wanna move a little closer (<span class="h">yeah</span>)<br>
I got a plan to get you with me <span class="h">[ah]</span><br></p>

<p>I got you on my radar, soon you're gonna be with me<br>
My strategy, strategy will <span class="h">get ya, get ya,</span> baby<br>
Winning is my trademark, soon you'll never wanna leave<br>
My strategy, strategy will <span class="h">get ya, get ya,</span> baby<br></p>

<p>Hey, boy, I'ma <span class="h">get ya</span><br>
I'ma get you real good and I <span class="h">bet ya</span><br>
Hey, boy, once I <span class="h">get ya</span><br>
You'll be, oh, so glad that I <span class="h">met ya</span><br></p>

<p>When your cheeks go red (<span class="h">that's cute</span>)<br>
I wanna dance, you said, "<span class="h">Oh, cool</span>"<br>
'Til I'm in your head (<span class="h">it's cruel</span>)<br>
And you can't forget<br>
You're feeling things now, and you're confused<br>
Watching my body getting loose<br>
You don't know what you're gonna do<br>
You're mine<br></p>

<p>When I say, "Hi"<br>
I'm feeling all your attention on me<br>
Hi<br>
No reason to be so shy with me<br>
I ain't gonna bite, come on over (<span class="h">no</span>)<br>
I know you wanna move a little closer (<span class="h">yeah</span>)<br>
I got a plan to get you with me <span class="h">[ah]</span><br></p>

<p>I got you on my radar, soon you're gonna be with me<br>
My strategy, strategy will <span class="h">get ya, get ya,</span> baby<br>
Winning is my trademark, soon you'll never wanna leave<br>
My strategy, strategy will <span class="h">get ya, get ya,</span> baby (real hot girl, shh)<br></p>

<p>My <span class="h">strategy, strategy</span><br>
Like <span class="h">gravity, gravity</span><br>
One <span class="h">look at me, look at me</span><br>
I <span class="h">bet ya, bet ya, bet ya,</span> boy<br>
You'll be down on your knees<br>
Calling me up, begging me, don't leave<br>
My <span class="h">strategy, strategy</span><br>
Will <span class="h">get ya, get ya, get ya,</span> boy <br>
<span class="h">[兔! 哇! 意! 思!]</span><br></p>

<p>Hey, boy, I'ma <span class="h">get ya</span><br>
I'ma get you real good and I <span class="h">bet ya</span><br>
Hey, boy, once I <span class="h">get ya</span><br>
You'll be, oh, so glad that I <span class="h">met ya</span> (ooh)<br>
Hey, boy, I'ma <span class="h">get ya</span> (yeah)<br>
I'ma get you real good and I <span class="h">bet ya</span> (good and I bet ya)<br>
Hey, boy, once I <span class="h">get ya</span><br>
You'll be, oh, so glad that I <span class="h">met ya</span><br></p>

<p>Hey, boy, I'ma <span class="h">get ya</span><br>
I'ma get you real good and I <span class="h">bet ya</span><br>
            </p>
        `
},
{
id: "THISISFOR",
        title: "THIS IS FOR",
        category: "twice",
        youtubeId: "p9spvfXou9M",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-this-is-for",
        videoRefUrl: "https://www.youtube.com/watch?v=cfMFmH2qmyc",
        lyricsHTML:`
<p>(Ha-ha-ha)<br>
This is for all my ladies<br>
Who don't get hyped enough (hey, ladies)<br>
If you've been done wrong<br>
Then this your song, so turn it up <span class="h">[TWICE!]</span><br></p>

<p>I wanna go where the baddest girls are from (uh, uh)<br>
Might be another planet maybe that's where mother <span class="h">nature made me</span> (ooh)<br>
Something about that water tastes like fun (<span class="h">yeah, yeah</span>)<br>
My girls make it rain confetti, sweet on your tongue<br></p>

<p><span class="h">Beep, beep, beep</span><br>
I'm outside your door, so let's go, don't let that<br>
<span class="h">Beep, beep, beep</span><br>
Have you feeling low when you're grown, you got the<br>
<span class="h">Key, key, keys</span> (you got it)<br>
You already know and it shows tonight<br>
It's you and me how it should be<br></p>

<p>This is for <span class="h">all my ladies</span><br>
Who don't get <span class="h">hyped enough</span><br>
If you've been done wrong<br>
Then this your song, so <span class="h">turn it up</span><br>
One time for <span class="h">all my ladies</span><br>
You looking <span class="h">good as what</span><br>
So tell 'em <span class="h">bye, bye</span><br>
'Cause it's your time to <span class="h">turn it up</span><br></p>

<p>Thi-thi-this for the girls with that light inside<br>
They spin around you like satellite<br>
Yeah, you the baddest all day and night<br>
I'll give you flowers 'til the end of time<br>
(<span class="h">Ooh</span>) this your moment, go get it<br>
(<span class="h">Ooh</span>) forget that boy and don't sweat it<br>
<span class="h">[ah ah]</span>I'll always be your ride or die so<br></p>

<p><span class="h">Beep, beep, beep</span><br>
I'm outside your door, so let's go don't let that<br>
<span class="h">Beep, beep, beep</span><br>
Have you feeling low when you're grown, you got the<br>
<span class="h">Key, key, keys</span> (you got it)<br>
You already know and it shows tonight<br>
It's you and me how it should be (yeah)<br></p>

<p>This is for <span class="h">all my ladies</span> (ooh, ooh)<br>
Who don't get <span class="h">hyped enough</span> (hyped enough)<br>
If you've been done wrong<br>
Then this your song so <span class="h">turn it up</span> (turn it up, oh, ooh-woah)<br>
One time for <span class="h">all my ladies</span> (all my ladies)<br>
You looking <span class="h">good as what</span> (good as what)<br>
So tell 'em <span class="h">bye, bye</span> (step out, done wrong)<br>
'Cause it's your time to <span class="h">turn it up</span><br></p>

<p>All my ladies now (now)<br>
Oh, oh, oh, oh<br>
Let's get down (oh, let's get)<br>
<span class="h">Come on, dip your hip into it</span><br>
All my ladies now (now)<br>
Oh, oh, oh, oh (ladies now)<br>
Let's get down (down)<br>
<span class="h">Come on, dip your hip into it</span><br>
All my ladies now (ladies)<br>
Oh, oh, oh, oh (this is for my ladies)<br>
Let's get down (yeah)<br>
<span class="h">Come on, dip your hip into it</span><br>
All my ladies now (ladies)<br>
Oh, oh, oh, oh (this is for my ladies)<br>
Let's get down<br>
<mark><span class="h">[兔! 哇! 意! 思!]</span><br>
Come on, dip your hip into it</mark><br>
            </p>
        `
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
id: "ME+YOU",
        title: "ME+YOU",
        category: "twice",
        youtubeId: "4HlV_5Zof2c",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-me-you",
        videoRefUrl: "https://www.youtube.com/watch?v=O4ztove6LsQ",
        lyricsHTML:`
            <p>
Yeah<br>
You know I'm always by your side<br>
So just listen <span class="h">[兔! 哇! 意! 思!]</span><br>
Yeah<br></p>

<p>Babe<br>
Feels like only yesterday<br>
Guess the memories never fade away<br>
So many dreams we've been chasing together<br>
We've been through the tears and the laughter<br>
Now we've found a happy ever after<br>
I got you and that's all that matters<br>
<span class="h">I'm so glad you're in my life</span><br></p>

<p><span class="h">No one knows me</span> like you do, honestly<br>
Better than I know myself<br></p>

<p>All I need is <mark><span class="h">[TWICE, just TWICE]</span>you, just you</mark><br>
For everything we've been through<br>
I'm grateful that you're my best friends (friends) until the end<br>
I'll stick by your side like glue<br>
It's true<br>
Nothing's ever gonna come between us<br>
Ain't no way we can't lose<br>
<span class="h">Always me plus you</span><br></p>

<p>It still feels the same (uh-huh) and though the seasons change (yeah)<br>
Through the ups and the downs, you'll stay my main (right?)<br>
'Cause, girl, one look in my eye and you read my mind (mind)<br>
We got a connection that gets stronger every time, ride or die<br>
(Yup) I won't take you for granted (<span class="h">granted</span>)<br>
A shoulder to cry on, I got it (<span class="h">no, no, no</span>)<br>
So reach out your hand and I'll grab it<br>
Day or night, I hold you down<br></p>

<p><span class="h">No one knows me</span> like you do, honestly<br>
Better than I know myself<br></p>

<p>All I need is <mark><span class="h">[TWICE, just TWICE]</span>you, just you</mark> (oh)<br>
For everything we've been through<br>
I'm grateful that you're my best friends (that you're my friends) until the end<br>
I'll stick by your side like glue<br>
It's true (nothing's ever come between us)<br>
Nothing's ever gonna come between us<br>
Ain't no way we can't lose (we can't lose)<br>
<span class="h">Always me plus you</span><br></p>

<p>All I know<br>
It just gets better with time<br>
When you're feeling so down and lonely<br>
I'll be there come rain or shine<br>
Oh, if you don't already know<br>
There's nothing that I won't do<br>
It's always <span class="h">me plus you</span><br></p>

<p><span class="h">Oh, yeah, yeah</span> (oh, yeah, yeah)<br>
<span class="h">Oh, yeah, yeah, yeah, yeah</span><br>
<span class="h">Oh, yeah, yeah</span><br>
Ain't no thing, it's just me plus you<br></p>

<p>All I need is <mark><span class="h">[TWICE, just TWICE]</span>you, just you</mark><br>
For everything we've been through<br>
I'm grateful that you're my best friends (oh, yeah, yeah) until the end<br>
I'll stick by your side like glue<br>
It's true<br>
Nothing's ever gonna come between us (no, no, no)<br>
Ain't no way we can't lose (we can't lose)<br>
<span class="h">Always me plus you</span> (always me plus you)<br></p>

<p>
<span class="h">[那冏莫! 撒基米! 塔且子!]</span><br>
Oh, yeah<br>
I gotta tell you<br>
<span class="h">Always me plus you</span><br>
            </p>
        `
},


{
    id: "MEEEEEE",
        title: "MEEEEEE",
        category: "NAYEON",
        artist: "NAYEON",                 // 蓋掉頁面預設的 "TWICE"
        themeOverride: {                 // 蓋掉頁面預設的粉色主題
            main: "#95DFED",
            light: "#e4f6fa",
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
{id: "FIXADRINK",
        title: "FIX A DRINK",
        category: "JEONGYEON",
        artist: "JEONGYEON",
        themeOverride: { 
            main: "#BED48A",
            light: "#faffed",
            bg: "#CDDBEE"
        },
        youtubeId: "ZW5_I1A9IOQ",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-fix-a-drink",
        videoRefUrl: "https://www.youtube.com/watch?v=UBztpe1hh8c",
        lyricsHTML:`<p>오늘 밤 같이 cheers to good times<br>
가끔 모든 걸 잊고 싶은 밤<br>
무거운 마음의 <u>짐을 내려놔 <span class="h">漆木 內六啊</span></u><br>
잔을 들어봐 hmm <span class="h">[YuJEONGYEON!]</span><br>
처진 분위기, 지루한 기분 <span class="h">yeah</span><br>
가볍게 바꿔줄 신나는 rhythm <span class="h">[rhythm]</span><br>
너를 흔드는 음악에 취해<br>
</p>
<p>I can't fix a heart, but I'll take off the edge <span class="h">[YuJEONGYEON!]</span><br>
I've got shots for jealousy<br>
And a bottle for your pain<br>
I've got this, <span class="h">remedy</span><br>
금방 잊게 될 <span class="h">heartbreak</span><br>
Caught between two stools 너를 위한 <span class="h">taste</span><br>
I can't fix a heart, but I sure know <span class="h">how to fix a drink</span><br>
</p>
<p>
I've got shots for jealousy<br>
And a bottle for your pain<br>
I've got this, <span class="h">remedy</span><br>
금방 잊게 될 <span class="h">heartbreak</span><br>
Caught between two stools, 너를 위한 <span class="h">taste</span><br>
I can't fix a heart, but I sure know how to fix a drink<br>
</p>`
},
{id: "MOVELIKETHAT",
        title: "MOVE LIKE THAT",
        category: "MOMO",
        artist: "MOMO",
        themeOverride: { 
            main: "#FF8DAC",
            light: "#ffeaef",
            bg: "#CDDBEE"
        },
        youtubeId: "jVHrsvzExug",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-move-like-that",
        videoRefUrl: "https://www.youtube.com/watch?v=zmn8BCIdzSE",
        lyricsHTML:`<p>Move to the bassline, pull me in tight<br>
Give me, give me a taste, taste of your eyes<br>
Step to the left, take it back to the right<br>
Uh, we can do it all night<br>
Move to the bassline, pull me in tight<br>
Give me, give me a taste, taste of your eyes<br>
Step to the left, take it back to the right<br>
Uh, we can do it all night<br>
</p>
<p>It's a ghost town 주변의 소음조차 멎은 이 밤 <span class="h">[Momo醬]</span><br>
Just you and me 우리만의 이 순간<br>
It's so wild <span class="h">[Momo醬]</span> 심장이 널 따라 가<br>
There's something in the way that you move<br>
</p>
<p><u>느낌이 느낌이 <span class="h">ㄋㄍㄧ咪 ㄋㄍㄧ咪</span></u> <span class="h">lit</span><br>
Feeling that beat in my chest (<span class="h">yeah, yeah, yeah</span>)<br>
감춰진 나를 꺼내<br>
Letting my hips do the rest (<span class="h">yeah, yeah, yeah</span>)<br>
<u>느낌이 느낌이 <span class="h">ㄋㄍㄧ咪 ㄋㄍㄧ咪</span></u> <span class="h">lit</span><br>
Feeling that beat in my chest<br>
한 순간 hypnotized<br>
Yeah, there's something in the way that you move<br>
</p>`
},
{id: "DECAFFEINATED",
        title: "DECAFFEINATED",
        category: "SANA",
        artist: "SANA",
        themeOverride: { 
            main: "#9065C2",
            light: "#f5ecff",
            bg: "#CDDBEE"
        },
        youtubeId: "stOJK5Ghyho",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-decaffeinated",
        videoRefUrl: "https://www.youtube.com/watch?v=MPR4RbVACzk",
        lyricsHTML:`<p><mark><span class="h">Sa</span> Say</mark> <span class="h">na-na-na-na-na-na<br>
                Na-na-na-na-na-na<br>
Na-na-na-na-na-na</span><br>
De-caffeine, <mark><span class="h">Sana醬</span> get high</mark><br>
</p>
<p>내 전부를 이해하려 하지 마<br>
이미 제 정신일 리 없잖아<br>
깊어진 이 감정 can't control it<br>
Want you to <span class="h">take me to heaven, take me to heaven<br>
Take, take, take</span><br>
</p>
<p>No need to stay awake (so don't mess it up)<br>
중독될수록 이건 <u>위험해 <span class="h">we後妹</span></u><br>
Don't need no <span class="h">caffeine for ya</span><br>
지금 있는 <u>그대로 <span class="h">ㄎ爹摟</span></u><br>
We goin' crazy, crazy, <span class="h">can't stop it</span> (yeah-yeah)<br>
</p>
<p>Takin' in all the love<br>
<span class="h">Trippin', trippin'</span> on your lust<br>
날 절대 깨우지 말아 줘<br>
더 빠져들 수 있게<br>
</p>
<p>I need you with all the love<br>
<span class="h">Trippin', trippin'</span> on your lust<br>
맨정신으로는 감당 못 해<br>
Love is all that you need<br>
Drip it<br>
</p>
<p>Gimme that, gimme de-caffeine<br>
Gimme that, gimme that<br>
<mark><span class="h">Sa</span> Say</mark> <span class="h">na-na-na-na-na-na<br>
Na-na-na-na-na-na</span><br>
Drip it<br>
</p>
<p>Gimme that, gimme de-caffeine<br>
Gimme that, gimme that<br>
<mark><span class="h">Sa</span> Say</mark> <span class="h">na-na-na-na-na-na<br>
Na-na-na-na-na-na</span><br>
</p>`
},
{id: "ATM",
        title: "ATM",
        category: "JIHYO",
        artist: "JIHYO",
        themeOverride: { 
            main: "#fac066",
            light: "#faf0e1",
            bg: "#CDDBEE"
        },
        youtubeId: "4kAcZ-V-Ens",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-atm",
        videoRefUrl: "https://www.youtube.com/watch?v=S_3pHAHnfDU",
        lyricsHTML:`<p>Bos' goin' crazy (yo)<br>
</p>
<p><span class="h">[ParkJIHYO!]</span><br>
        All the way up <span class="h">[up]</span>, no one does it like we do<br>
All in my bag <span class="h">[bag]</span>, throw it in the back<br>
<span class="h">On top</span>, we the best, <span class="h">don't stop</span><br>
Keep it comin' with that lovin'<br>
</p>
<p>They all love that I'm <span class="h">classy</span>, they all love that I <span class="h">do</span><br>
Friends in every <span class="h">country</span>, numbers off the <span class="h">roof</span><br>
You'll be good for a good life if I'm next to you<br>
We go another round 'cause they can't get enough<br>
</p>
<p>Comin' back for more, oh, oh<br>
Addicted to me, yeah, <span class="h">ATM</span><br>
Flawless when we glow, oh, oh<br>
Shine like all that marquee, <span class="h">ATM</span> (uh)<br>
I've been keepin' my <span class="h">eye, eye, eyes on you</span><br>
Know you got <span class="h">eye, eyes on me too</span><br>
I got, I got all the moves<br>
Midas touch, got you coming back for more , oh, oh<br>
Addicted to me (yeah), <span class="h">ATM</span> (yeah)<br>
</p>
<p>
Coming back for more<br>
Me<br>
</p>`
},
{id: "STONECOLD",
        title: "STONE COLD",
        category: "MINA",
        artist: "MINA",
        themeOverride: { 
            main: "#8EE8CC",
            light: "#e8fcf5",
            bg: "#CDDBEE"
        },
        youtubeId: "qbyYALf1Hc8",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-stone-cold",
        videoRefUrl: "https://www.youtube.com/watch?v=OV0VpwnFhuY",
        lyricsHTML:`<p>Hey Why you being stone cold?<br>
<span class="h">[STONE COLD MINA醬! STONE COLD MINA醬! STONE COLD MINA醬!]</span><br>
</p>
<p>Used to make me happy-clappy, baby, you were <span class="h">flirty</span><br>
Now you're acting super wacky, love has gotten <span class="h">dirty</span><br>
E-e-every day is like a rainy <span class="h">Monday</span><br>
Where are all the fun days?<br>
I want you to know, I don't cry myself to sleep<br>
I want you to know, that I'm over you in two weeks<br>
We should blow it off<br>
</p>
<p><span class="h">Look at me</span>, I'm praying for a <span class="h">miracle</span><br>
Wanna be happy and not too <span class="h">cynical</span><br>
'Cause it feels that we are not <span class="h">compatible</span><br>
I guess you are putting our love on hold (show)<br>
</p>
<p>Every shade of you was pure <span class="h">gold</span><br>
Now your heart is getting ice <span class="h">cold</span><br>
And you're breaking down my <span class="h">walls</span><br>
One by one, you're stone cold<br>
</p>
<p>Baby, why you stone cold?<br>
Someone else is your gold<br>
Heart is getting <span class="h">stone cold, stone cold</span><br>
Baby, why you stone cold?<br>
Baby, why you stone cold?<br>
Someone else is your gold (yea-yeah)<br>
Heart is getting cold, cold, cold<br>
Baby, why you stone cold?<br>
</p>`
},
{id: "CHESS",
        title: "CHESS",
        category: "DAHYUN",
        artist: "DAHYUN",
        themeOverride: { 
            main: "#2e2c29",
            light: "#F6EEE5",
            bg: "#CDDBEE"
        },
        youtubeId: "mdAVQ3vZxFg",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-chess",
        videoRefUrl: "https://www.youtube.com/watch?v=kr1mThC2n1s",
        lyricsHTML:`<p><p class="tip">前奏播放後等兩拍</p><br>
                <span class="h">[KimDAHYUN! KimDAHYUN! KimDAHYUN!]</span><br>
                <p class="tip">等兩拍</p><br>
                <span class="h">[KimDAHYUN! KimDAHYUN! 度!]</span><br>
                Oh, I used to be unskilled and naive<br>
You deceived me for your own <span class="h">benefit</span><br>
With a cunning trick more than anything<br>
Now completely I realize <span class="h">everything</span><br>
</p>
<p>Calculated, educated<br>
<span class="h">I'm the monster you created</span><br>
So you changed me, I've upgraded<br>
I'ma tell ya<br>
</p>
<p>I ain't playin' checkers, I play chess <span class="h">[I make 'em sweat]</span><br>
Became the best <span class="h">[I make a mess]</span> and nothing less <span class="h">[I must confess]</span><br>
Yeah, that's what I do <span class="h">[I bet ya knew]</span>, I'm making moves <span class="h">[I never do]</span><br>
I never lose and that's on you <span class="h">[that's on you, yeah]</span><br>
</p>
<p>Because of you<br>
I've become stronger<br>
And I can go with the flow<br>
</p>
<p>Uh, better without you, better now<br>
With or without you, ain't no doubt<br>
You know you gotta, you gotta show me your <span class="h">manners bow down</span><br>
Better without you, better now<br>
Want me to lose, I don't know how<br>
You know you gotta, you gotta, you gotta, <span class="h">uh</span><br>
</p>
<p>Lettin' you shoot your shot now, that's on you <span class="h">[KimDAHYUN!]</span><br>
Shoulda done it better when you had it all together<br>
What now?<br>
</p>
<p>Now you're really running out of moves, ohh, oh<br>
Yeah, that's what I do, I'm making moves <span class="h">[I bet ya knew]</span><br>
I never lose <span class="h">[I never do]</span> and that's on you <span class="h">[and that's on you]</span><br>
</p>`
},
{id: "INMYROOM",
        title: "IN MY ROOM",
        category: "CHAEYOUNG",
        artist: "CHAEYOUNG",
        themeOverride: { 
            main: "#CF2E45",
            light: "#fcecee",
            bg: "#CDDBEE"
        },
        youtubeId: "RWAN4_twVuo",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/twice-in-my-room",
        videoRefUrl: "https://www.youtube.com/watch?v=RWAN4_twVuo",
        lyricsHTML:`<p>You're on my mind all of the time<br>
I <span class="h">like it, like it</span><br>
Head in the clouds, not coming down<br>
<span class="h">Exciting-citing</span><br>
They see how I'm acting and they tellin' me I'm crazy<br>
I can taste you on my tongue<br>
A cotton candy daydream<br>
</p>
<p>Anything can happen in my room<br>
In my <span class="h">room, room, room, in my room</span><br>
I can be whoever I want to<br>
In my <span class="h">room, room, room,</span> just me and you<br>
Anything can happen, anything<br>
</p>
<p><span class="h">[Room, room, room]</span><br>
</p>
<p>I don't think that what we got is just a fling <span class="h">[SonCHAEYOUNG!]</span><br>
I know you got more than just a crush on me <span class="h">[SonCHAEYOUNG!]</span><br>
I don't think that what we got is just a fling <span class="h">[SonCHAEYOUNG!]</span><br>
</p>
<p>Anything can happen in my room<br>
In my <span class="h">room, room, room, in my room</span><br>
I can be whoever I want to<br>
In my <span class="h">room, room, room,</span> just me and you<br>
Anything can happen in my room<br>
In my <span class="h">room, room, room, in my room</span><br>
I can be whoever I want to<br>
In my <span class="h">room, room, room,</span> just me and you<br>
Anything can happen, anything<br>
</p>
<p>(Room, room, room)<br>
Anything can happen in my room<br>
(Room)<br>
(Anything)<br>
Anything can happen in my room<br>
(Room, room, room)<br>
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