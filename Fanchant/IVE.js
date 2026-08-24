// 1. 歌曲資料庫 (你可以自由在這邊增加新歌)
const songDatabase = [
    {
        id: "ELEVEN",
        title: "ELEVEN",
        category: "IVE",
        youtubeId: "D0kFwU4yVhw",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-eleven",
        videoRefUrl: "https://www.youtube.com/watch?v=rKS_u8xQDsE",
        lyricsHTML: `<p>
            <p class="tip">前奏播放一個八拍</p><br>
            <span class="h">[Yujin! Gaeul! Rei! Wonyoung! Liz! Leeseo! I! VE!]</span><br>
            따분한 나의 눈빛이<br>
무표정했던 얼굴이<br>
널 보며 빛나고 있어<br>
널 담은 눈동자는 <span class="h">odd</span><br>
</p>
<p>내 안에 빼곡하게 피어나는 <span class="h">blue</span><br>
내가 지금 느끼는 이 감정들은 <span class="h">true</span><br>
내 입술을 간지럽힌 낯선 그 이름 <span class="h">[I! VE!]</span><br>
난 몰랐어 내 맘이 이리 <u>다채로운지 <span class="h">塔且摟翁記</span></u> <br>
</p>
<p>긴 꿈을 꾸게 해 <span class="h">[hey]</span> 이 방은 작은 <span class="h">heaven</span><br>
춤을 추곤 해 실컷 어지러울 만큼<br>
Oh my, oh my God<br>
한 칸 더 채우고 있어<br>
잘 봐 <mark><span class="tip">拍手</span> one, two, three, four, five, six, seven</mark><br>
You make me feel like eleven<br>
<span class="h">[阿! 依! 黑! 補! I! VE!]</span><br>
</p>
<p>투명한 너와 나의 사이<br>
가만히 들여다보다<br>
일렁인 물결 속으로<br>
더 빠져드는 걸 <span class="h">[I! VE!]</span><br>
</p>
<p>그날 향기로운 보랏빛의 <span class="h">mood</span><br>
셀 수 없이 반복해도 기분 좋은 <u>꿈 <span class="h">故</span></u><br>
감히 누가 이렇게 날 설레게 할 줄 <span class="h">[I! VE!]</span><br>
난 몰랐어 내 맘이 이리 <u>다채로운지 <span class="h">搭且摟翁記</span></u><br>
</p>
<p>긴 꿈을 꾸게 해 <span class="h">[hey]</span> 이 방은 작은 <span class="h">heaven</span><br>
춤을 추곤 해 실컷 어지러울 만큼<br>
Oh my, oh my God<br>
한 칸 더 채우고 있어<br>
잘 봐 <mark><span class="tip">拍手</span> one, two, three, four, five, six, seven</mark><br>
You make me feel like eleven (hey)<br>
</p>
<p>내 앞에 있는 너를 (hey)<br>
그 눈에 비친 나를 (<u>그 눈에 비친 나를 <span class="h">坑 能ㄟ 逼請 那勒</span></u>)<br>
Aya, aya, aya (가만히 바라봐)<br>
내 앞에 있는 너를<br>
그 눈에 비친 나를<br>
가만히 바라봐<br>
</p>
<p>Don't say now<br>
서둘러 오진 마<br>
이 순간이 좋아 난<br>
미처 몰랐어 내 맘이 이리 <u>다채로운지 <span class="h">搭且摟翁記</span></u><br>
(whoa-ooh-whoa-ooh-whoa)<br>
</p>
<p>긴 꿈을 꾸게 해 이 방은 작은 heaven<br>
춤을 추곤 해 실컷 어지러울 만큼<br>
Oh my, oh my God<br>
한 칸 더 채우고 있어<br>
잘 봐 <mark><span class="tip">拍手</span> one, two, three, four, five, six, seven</mark><br>
You make me feel like eleven<br>
</p>
<p>내 앞에 있는 <u>너를 <span class="h">no勒</span></u><br>
그 눈에 비친 <u>나를 <span class="h">那勒</span></u><br>
Ah, ah, aya<br>
내 앞에 있는 <u>너를 <span class="h">no勒</span></u><br>
그 눈에 비친 <mark><span class="h">[I! VE!]</span> 나를</mark><br>
사랑하게 됐거든<br>
</p>`
    },
    {
        id: "LOVEDIVE",
        title: "LOVE DIVE",
        category: "IVE",
        youtubeId: "ZaTDS5NGP64",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-love-dive",
        videoRefUrl: "https://www.youtube.com/watch?v=s953eQ9lrRI",
        lyricsHTML: `<p>
        Ooh<br>
        <span class="h">[推由督給! I! VE!]</span><br>
Yeah<br>
네가 참 궁금해 그건 너도 마찬가지 (ooh)<br>
이거면 충분해 쫓고 쫓는 <u>이런 놀이 <span class="h">尼龍 no立</span></u><br>
참을 수 없는 이끌림과 호기심<br>
묘한 너와 나 두고 보면 <u>알겠지 <span class="h">乃給記</span></u><br>
</p>
<p>Ooh-ooh, ooh-ooh 눈동자 아래로<br>
Ooh-ooh, ooh-ooh 감추고 있는 거<br>
Ooh-ooh, ooh-ooh<br>
Yeah, <span class="h">it's so bad</span> (it's so bad) <span class="h">it's good</span> (it's good)<br>
난 그 맘을 좀 봐야겠어<br>
</p>
<p>Narcissistic, my God, I love it<br>
서로를 비춘 밤<br>
<span class="h">[IVE!]</span>아름다운 까만 눈빛 더 빠져 깊이<br>
(<u>넌 내게로, 난 네게로 <span class="h">弄 內給留, 南 內給留</span></u>)<br>
숨 참고 love dive
</p>
<p>Ooh-ooh, ooh-ooh, lalalala-lalala<br>
Ooh-ooh, ooh-ooh <u>어서 와서 <span class="h">喔搜 哇搜</span></u> <span class="h">love dive</span><br>
Ooh-ooh, ooh-ooh, oh, perfect sacrifice<br>
Yeah 숨 참고 <span class="h">love dive</span><br>
</p>
<p>마음은 이렇게 알다가도 모르지<br>
사랑이라는 건 한순간에 필 테니<br>
직접 들어와 두 눈으로 확인해<br>
<u>내 맘 가장 <span class="h">內 慢 嘎降</span></u> 깊은 데로 오면 돼<br>
</p>
<p>Ooh-ooh, ooh-ooh 망설일 시간은<br>
Ooh-ooh, ooh-ooh 3초면 되는 걸<br>
Ooh-ooh, ooh-ooh<br>
Yeah, <span class="h">it's so bad</span> (it's so bad) <span class="h">it's good</span> (it's good)<br>
원하면 감히 뛰어들어<br>
</p>
<p>Narcissistic, my God, I love it<br>
서로를 비춘 밤 (hoo-ooh)<br>
<span class="h">[IVE!]</span>아름다운 까만 눈빛 더 빠져 깊이<br>
(<u>넌 내게로, 난 네게로 <span class="h">弄 內給留, 南 內給留</span></u>)<br>
숨 참고 love dive<br>
</p>
<p>Ooh-ooh, ooh-ooh, lalalala-lalala<br>
Ooh-ooh, ooh-ooh <u>어서 와서 <span class="h">喔搜 哇搜</span></u> <span class="h">love dive</span><br>
Ooh-ooh, ooh-ooh, oh, perfect sacrifice<br>
Yeah 숨 참고 <span class="h">love dive</span><br>
</p>
<p><span class="h">[Yujin! Gaeul!]</span><br>
숨 참고 love dive<br>
<span class="h">[Rei! Wonyoung!]</span><br>
숨 참고 love dive<br>
<span class="h">[Liz! Leeseo!]</span><br>
숨 참고 love dive<br>
<span class="h">[啊! 依! 補! 浪!]</span><br>
숨 참고 love dive<br>
</p>
<p>Ooh-ooh, ooh-ooh, lalalala-lalala<br>
Ooh-ooh, ooh-ooh <u>어서 와서 <span class="h">喔搜 哇搜</span></u> <span class="h">love dive</span><br>
Ooh-ooh, ooh-ooh, oh, perfect sacrifice<br>
Yeah 숨 참고 <span class="h">love dive</span><br>
</p>`
    },
    {
        id: "AfterLIKE",
        title: "After LIKE",
        category: "IVE",
        youtubeId: "UJAuab02IFY",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-after-like",
        videoRefUrl: "https://www.youtube.com/watch?v=PsS4-Crcz5k",
        lyricsHTML: `<p>또 모르지 내 마음이<br>
저 날씨처럼 바뀔지<br>
날 나조차 다 알 수 없으니 (나나나나나나)<br>
</p>
<p>그게 뭐가 중요하니<br>
지금 네게 완전히<br>
푹 빠졌단 게 <u>중요한 거지 <span class="h">進u韓 溝幾</span></u> (나나나나나나)<br>
</p>
<p>아마 꿈만 같겠지만 분명 꿈이 아니야<br>
달리 설명할 수 없는 이건 <u>사랑일거야 <span class="h">撒浪依溝呀</span></u><br>
방금 내가 말한 감정 감히 의심하지 마<br>
그냥 좋다는 게 아냐 (<span class="h">what's after 'Like'?</span>)<br>
</p>
<p>You and I<br>
It's more than '<span class="h">Like</span>'<br>
L 다음 또 O 다음 난 <span class="h">yeah, yeah, yeah</span><br>
You and I<br>
It's more than 'Like' (like)<br>
What's after 'Like'?<br>
<span class="h">[(An)Yujin! Gaeul! Rei! JangWonyoung! Liz! Leeseo! 阿 依 嘿 補! I VE!]</span><br>
<span class="h">What's after 'Like'?</span><br>
</p>
<p>조심해 두 심장에 핀<br>
새파란 이 불꽃이<br>
저 태양보다 뜨거울 테니 (나나나나나)<br>
</p>
<p>난 저 위로 또 아래로<br>
내 그래프는 폭이 커<br>
Yeah, that's me (<span class="h">yeah, that's me</span>)<br>
</p>
<p>두 번 세 번 피곤하게 자꾸 질문하지 마<br>
내 장점이 뭔지 알아? 바로 <u>솔직한 거야 <span class="h">搜機刊 溝呀</span></u><br>
방금 내가 말한 감정 감히 의심하지 마 (우우우우우)<br>
그냥 좋다는 게 아냐 <span class="h">what's after 'Like'?</span><br>
</p>
<p>You and I<br>
It's more than '<span class="h">Like</span>'<br>
L 다음 또 O 다음 난 <span class="h">yeah, yeah, yeah</span><br>
You and I<br>
It's more than 'Like'<br>
<span class="h">What's after 'Like'?</span><br>
What's after 'Like'?<br>
</p>
<p>What after like 내 맘에 strike<br>
지금 느낀 짜릿함은 마치 tike<br>
L-O 다음에 I 그 다음에 V-E<br>
여긴 너와 내 space 아무도 막지 못해<br>
나를 보면 눈 <u>깜빡 <span class="h">剛把</span></u>할<br>
시간조차도 <u>아까 <span class="h">阿尬</span></u>울 걸<br>
드디어 만나 <u>반가워 <span class="h">盤嘎窩</span></u> (what's after 'Like'?)<br>
L-O-V-E 사이 놓일 I (what's after 'Like'?)<br>
</p>
<p>You and I<br>
It's more than '<span class="h">Like</span>'<br>
E 앞 또 V 앞 난 <span class="h">yeah, yeah, yeah</span><br>
You and I<br>
It's more than 'Like' (like)<br>
What's after 'Like'?<br>
</p>
<p>You and I<br>
It's more than '<span class="h">Like</span>'<br>
L 다음 또 O 다음 난 <span class="h">yeah, yeah, yeah</span><br>
You and I<br>
It's more than 'Like' (like)<br>
What's after 'Like'?<br>
<span class="h">What's after 'Like'?</span><br>
</p>`
    },
    {
        id: "Kitsch",
        title: "Kitsch",
        category: "IVE",
        youtubeId: "XDle9FvByFA",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-kitsch",
        videoRefUrl: "https://www.youtube.com/watch?v=NzkzRCRs4k4",
        lyricsHTML: `<p>
            <mark><span class="h">[It's IVE time]</span><br>
            It's our time</mark><br>
우린 달라, 특별한 게 좋아<br>
Oh, what a good time<br>
난 잘 살아, 내 걱정은 낭비야<br>
니가 보낸 DM을 읽고 나서<br>
답이 없는 게 내 답이야<br>
(That's my style)<br>
</p>
<p><span class="h">OOTD</span> 하나까지 완전 우리답지<br>
My favorite things<br>
그런 것들엔 좀 <u>점수를 매기지 마 <span class="h">冏素勒 妹ㄍㄧ機 嗎</span></u><br>
난 생겨 먹은 대로 사는 애야<br>
뭘 더 바래?<br>
That's my style<br>
(That's my style)<br>
</p>
<p>우리만의 자유로운 <span class="h">nineteen's kitsch</span><br>
지금까지 한 적 없는 custom fit<br>
올려 대는 나의 feed엔 <span class="h">like it</span><br>
홀린 듯이 눌러 모두 다 like it<br>
</p>
<p>내가 추는 춤을 다들 <u>따라 춰 <span class="h">搭拉 邱</span></u><br>
매일 너의 알고리즘에 난 떠<br>
겉잡을 수 없이 올라 미친 score<br>
그 누구도 예상 못 할 nineteen's <span class="h">kitsch</span><br>
</p>
<p>우리만의 자유로운 nineteen's kitsch<br>
우리-우리만의 자유로운 nineteen's kitsch<br>
우리만의 자유로운 nineteen's kitsch<br>
우리-우리만의 자유로운 nineteen's kitsch<br>
</p>
<p><span class="h">Kitsch, kitsch, kitsch, kitsch<br>
Kitsch, kitsch, kitsch</span><br>
우리만의 자유로운 nineteen's kitsch<br>
우리-우리만의 자유로운 <span class="h">[I! VE!]</span><br>
</p>
<p>달콤한 말 뒤에 숨긴 너의 의도대로<br>
따라가진 않을 거야, 난 <u>똑똑하니까 <span class="h">痘痘咖尼嘎</span></u><br>
난 절대 끌리지 않는 것에 끌려가지 않아<br>
That's my style<br>
(That's my style)<br>
</p>
<p>우리만의 자유로운 <span class="h">nineteen's kitsch</span><br>
지금까지 한 적 없는 custom fit<br>
올려 대는 나의 feed엔 <span class="h">like it</span><br>
홀린 듯이 눌러 모두 다 like it<br>
</p>
<p>내가 추는 춤을 다들 <u>따라 춰 <span class="h">搭拉 邱</span></u><br>
매일 너의 알고리즘에 난 떠<br>
겉잡을 수 없이 올라 미친 score<br>
그 누구도 예상 못 할 nineteen's <span class="h">kitsch</span><br>
</p>
<p>우리만의 자유로운 nineteen's kitsch<br>
우리-우리만의 자유로운 nineteen's kitsch<br>
우리만의 자유로운 nineteen's kitsch<br>
우리-우리만의 자유로운 nineteen's kitsch<br>
</p>
<p><span class="h">Kitsch, kitsch, kitsch, kitsch<br>
Kitsch, kitsch, kitsch</span><br>
우리만의 자유로운 nineteen's kitsch<br>
우리-우리만의 자유로운 <span class="h">[I! VE!]</span><br>
</p>
<p>Yah 모두 주목해<br>
내가 좋아하는 것만 하면 뭐 어때? Huh<br>
This ain't your life<br>
쓸데없는 생각 따위 <span class="h">go away</span><br>
답답한 이 세상 앞엔 멋대로 할래<br>
<span class="h">YOLO! Say no!</span> <u>너의 길을 가 <span class="h">no依 給哩 嘎</span></u> <span class="h">now</span><br>
잔소리는 quite down<br>
이제 그만 peace out<br>
</p>
<p>우리만의 자유로운 <span class="h">nineteen's kitsch</span><br>
지금까지 한 적 없는 custom fit<br>
올려 대는 나의 feed엔 <span class="h">like it</span><br>
홀린 듯이 눌러 모두 다 like it<br>
</p>
<p>내가 추는 춤을 다들 <u> <span class="h">搭拉 邱</span></u>따라 춰<br>
매일 너의 알고리즘에 난 떠<br>
겉잡을 수 없이 올라 미친 score<br>
그 누구도 예상 못 할 nineteen's <span class="h">kitsch</span><br>
</p>
<p>우리만의 자유로운 nineteen's kitsch<br>
우리-우리만의 자유로운 nineteen's kitsch<br>
우리만의 자유로운 nineteen's kitsch<br>
우리-우리만의 자유로운 nineteen's kitsch<br>
</p>
<p><span class="h">Kitsch, kitsch, kitsch, kitsch<br>
Kitsch, kitsch, kitsch</span><br>
우리만의 자유로운 nineteen's kitsch<br>
우리-우리만의 자유로운 nineteen's kitsch<br>
</p>`
    },
    {
        id: "IAM",
        title: "I AM",
        category: "IVE",
        youtubeId: "NphkjmrNcSI",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-i-am",
        videoRefUrl: "https://www.youtube.com/watch?v=By2o1VrH2gU",
        lyricsHTML: `<p>다른 문을 열어 따라갈 필요는 없어<br>
넌 너의 길로, 난 나의 길로, 음<br>
하루하루마다 색이 달라진 느낌<br>
밝게 빛이 나는 길을 찾아<br>
</p>
<p>I'm on my way <span class="h">[DI! VE!]</span><br>
넌 그냥 믿으면 돼<br>
I'm on my way <span class="h">[I! VE!]</span><br>
보이는 그대로야<br>
</p>
<p>너는 누군가의 <span class="h">dreams come true</span><br>
제일 좋은 어느 날의 <u>데자뷰 <span class="h">ㄉㄟ家biu</span></u><br>
머물고픈 어딘가의 <u>낯선 뷰 <span class="h">拿桑 biu</span></u><br>
I'll be far away<br>
</p>
<p>That's my<br>
Life is 아름다운 <span class="h">galaxy</span><br>
Be a writer 장르로는 <span class="h">fantasy</span><br>
내일 내게 열리는 건 <span class="h">big, big stage</span><br>
So that is who I am <span class="h">[DI! VE!]</span><br>
</p>
<p>Look at me, look at me<br>
Look at me now<br>
어제랑 또 다른 짜릿한 나<br>
두려운 모든 게 설레이게<br>
I'm in sky high, oh, my God<br>
사소한 건 다 아득해져 와<br>
Oh, look at me now, look at me now<br>
<span class="h">I'm on fire</span><br>
</p>
<p>I'm on my way <span class="h">[DI! VE!]</span><br>
넌 그냥 믿으면 돼<br>
I'm on my way <span class="h">[I! VE!]</span><br>
보이는 그대로야<br>
</p>
<p>너는 누군가의 <span class="h">dreams come true</span><br>
제일 좋은 어느 날의 <u>데자뷰 <span class="h">ㄉㄟ家biu</span></u><br>
머물고픈 어딘가의 <u>낯선 뷰 <span class="h">拿桑 biu</span></u><br>
I'll be far away<br>
</p>
<p>That's my<br>
Life is 아름다운 <span class="h">galaxy</span><br>
Be a writer 장르로는 <span class="h">fantasy</span><br>
내일 내게 열리는 건 <span class="h">big, big stage</span><br>
So that is who I am <span class="h">[DI! VE!]</span><br>
</p>
<p>어느 깊은 밤 길을 잃어도<br>
차라리 <u>날아올라 <span class="h">娜拉歐拉</span></u> 그럼 네가<br>
지나가는 대로 <u>길이거든 <span class="h">ㄍㄧ哩狗能</span></u><br>
One, two, three<br>
One, two, three<br>
One, two, three<br>
Fly up<br>
</p>
<p>I hope you'd be someone's dreams come true<br>
제일 좋은 어느 날의 <u>데자뷰 <span class="h">ㄉㄟ家biu</span></u><br>
머물고픈 어딘가의 <u>낯선 뷰 <span class="h">拿桑 biu</span></u><br>
I'll be far away<br>
</p>
<p>That's my<br>
Life is 아름다운 <span class="h">galaxy</span><br>
Be a writer 장르로는 <span class="h">fantasy</span><br>
내일 내게 열리는 건 <span class="h">big, big stage</span><br>
So that is who I am<br>
</p>`
    },
    {
        id: "OffTheRecord",
        title: "Off The Record",
        category: "IVE",
        youtubeId: "eodeCKqOH3I",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-off-the-record",
        videoRefUrl: "https://www.youtube.com/watch?v=D0AmcvE6kmc",
        lyricsHTML: `<p>시간이 됐어 <span class="h">[ㄇㄧㄡ系]</span><br>
            it's 2AM <span class="h">[It's IVE time]</span><br>
목소릴 낮추고 더 속삭여줄래?<br>
<p class="tip">等兩拍</p><br>
<span class="h">[I! VE!]</span><br>
이 밤이 좀 더 깊어지면<br>
뭔가 더 솔직해도 될 것 같은 기분이 들어<br>
</p>
<p>있잖아, 가끔 난 무척 <span class="h">[恩]</span><br>
발칙한 상상을 해 <span class="h">[喔動]</span><br>
남들은 절대 모를 걸<br>
이젠 비공개 모드야 <span class="h">[噓]</span><br>
</p>
<p>Off the record night <span class="h">[night]</span><br>
This late night conversation<br>
<u>멈추지 않아 <span class="h">夢曲記 阿娜</span></u><br>
No more time, no more kill my vibe<br>
This late night conversation<br>
<u>잠들지 않아 <span class="h">醬ㄉㄟ記 阿娜</span></u><br>
</p>
<p>Yeah 비밀스럽게 잠겨진 문<br>
그 맘을 우리에게 살짝 열어줘<br>
떠나 forbidden island<br>
찾아 forbidden fruit<br>
가끔은 왠지 금지된 게 <u>궁금하거든 <span class="h">困棍哈溝頓</span></u> yeah<br>
</p>
<p>순진한 가면을 벗고<br>
흑심을 드러내 봐<br>
그런 게 없을 리 없어<br>
이젠 비공개 모드야 <span class="h">[噓]</span><br>
</p>
<p>Off the record night <span class="h">[night]</span><br>
This late night conversation<br>
<u>멈추지 않아 <span class="h">夢曲記 阿娜</span></u><br>
No more time, no more kill my vibe<br>
This late night conversation<br>
<u>잠들지 않아 <span class="h">醬ㄉㄟ記 阿娜</span></u><br>
</p>
<p>Make it round on the ground, yeah<br>
더 가까이 모여 앉아<br>
자, 모든 걸 털어놔<br>
Off the record night <span class="h">[night]</span><br>
This late night conversation<br>
멈추지 않아<br>
</p>
<p>We're talkin' 'bout the late night conversation<br>
Late night conversation<br>
못 살아, 내가 정말 미쳐<br>
진짜? 그래서 또 뭔데?<br>
난 그냥 restaurant, cafe 영화<br>
<u>그런 사랑 말고 <span class="h">ㄎ勒 搜都 猛day</span></u> 조금 더 특별한<br>
은밀하고 아찔한 걸 원해 난<br>
So this is my time, it's my time<br>
</p>
<p>숨막히는 trailer<br>
또 엄청난 반전도 있어야지 <span class="h">[ho]</span><br>
로맨틱한 psycho<br>
날 탐하면 모든 걸 견뎌야지 (oh-oh-oh)<br>
<span class="h">Love me, love me</span> (oh)<br>
어서 날 <span class="h">leave me, leave me</span><br>
날마다 <span class="h">killing, healing</span> (ooh-ooh)<br>
또 외쳐 난 stay (in this time)<br>
</p>
<p>Off the record night <span class="h">[night]</span><br>
This late night conversation<br>
<u>멈추지 않아 <span class="h">夢曲記 阿娜</span></u><br>
No more time, no more kill my vibe<br>
This late night conversation<br>
<u>잠들지 않아 <span class="h">醬ㄉㄟ記 阿娜</span></u><br>
</p>
<p>Moon is setting tonight, yeah (어둠이 조금 더 짙어져가)<br>
더 반짝거리는 your eyes (lookin' it, lookin' it, deep in the eyes)<br>
난 하늘의 별을 봐<br>
</p>
<p>Off the record night<br>
This late night conversation<br>
잠들지 않아<br>
</p>`
    },
    {
        id: "Baddie",
        title: "Baddie",
        category: "IVE",
        youtubeId: "jtpxeSk1dD8",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-baddie",
        videoRefUrl: "https://www.youtube.com/watch?v=g5Go4M-g8xs",
        lyricsHTML: `<p>(Ba-ba-ba-ba-ba-ba)<br>
I'm a baddie, ba-ba-baddie, baddie<br>
Pretty little risky baddie<br>
뭐든 될 대로 되라지<br>
<span class="h">Catch me if you can</span><br>
Baddie, ba-ba-baddie, baddie<br>
나는 없어 거기 이미<br>
어차피 못 찾을 테니<br>
<span class="h">Catch me if you can</span><br>
</p>
<p>Nothing like the regulars<br>
내 DNA엔 blue blood runs<br>
더 솔직하게 말해줘<br>
착한 척은 지겨워<br>
우리 앞에선 룰이 <span class="h">[嚕哩]</span> 의미 없었어 굳이 <span class="h">[咕雞]</span><br>
유행이 돌고 돌아도 난 그 틀에 없어 이미<br>
I wanna break, I wanna kick 뛰어 놀래 시끄럽게<br>
다채로운 매력, 수많은 변칙 위에 더 빛을 발하지<br>
</p>
<p>답답한 건 벗어 던져<br>
고개 숙일 필요 없어 <span class="h">[I! VE!]</span><br>
(Ba-ba-ba-ba-ba-ba)<br>
</p>
<p>I'm a baddie, ba-ba-baddie, baddie<br>
Pretty little risky baddie<br>
뭐든 될 대로 되라지<br>
<span class="h">Catch me if you can</span><br>
Baddie, ba-ba-baddie, baddie<br>
나는 없어 거기 이미<br>
어차피 못 찾을 테니<br>
<span class="h">Catch me if you can</span><br>
</p>
<p><mark><span class="h">[(An)Yujin! Gaeul! Rei! JangWonyoung! Liz! Leeseo! I! VE! (An)Yujin! Gaeul! Rei! JangWonyoung! Liz! Leeseo! I! VE!]</span><br>
Na-na-na, na, na-na-na, na<br>
Na-na-na, na, na-na<br>
Na-na-na, na, na-na-na, na<br>
Na-na-na, na, na-na</mark><br>
</p>
<p>And the fit pop like bubblegum<br>
내 판단을 믿어 난 (믿어 난)<br>
할 말도 많아 참<br>
모자이크 없이 spit it out<br>
난 즐겨 이 troublesome<br>
그 누구도 can't bite me<br>
원한다면 come try me<br>
언제든 you're invited<br>
</p>
<p>난 thriller 속 villain<br>
생각할 시간에 저지르는 게 my motto<br>
</p>
<p>I'm a baddie, ba-ba-baddie, baddie<br>
Prеtty little risky baddie<br>
뭐든 될 대로 되라지<br>
<span class="h">Catch me if you can</span><br>
Baddiе, ba-ba-baddie, baddie<br>
앞다퉈 내 길을 막지<br>
가뿐히 날아오를 테니<br>
<span class="h">Catch me if you can</span><br>
I'm a baddie, ba-ba-baddie, baddie<br>
어딜 그리 바삐 가니<br>
뭐든 될 대로 되라지<br>
<span class="h">Catch me if you can</span><br>
Baddie, ba-ba-baddie, baddie<br>
나는 없어 거기 이미<br>
어차피 못 찾을 테니<br>
Catch me if you can (bad)<br>
</p>
<p>
<span class="h">[I'm a baddie, ba-ba-baddie, baddie! 屋哩 歐搜 勾ㄍㄧ 伊咪 歐家批 摸 掐資 貼尼!<br>
       I'm a baddie, ba-ba-baddie, baddie! 屋哩 歐搜 勾ㄍㄧ 伊咪 歐家批 摸 掐資 貼尼! ]</span><br>
Ba-ba-ba-ba-ba-ba-baddie<br>
</p>
<p>Na-na-na, na, na-na-na, na<br>
Na-na-na, na, na-na<br>
Na-na-na, na, na-na-na, na<br>
Na-na-na, na, na-na<br>
</p>
<p>I'm a baddie, ba-ba-baddie, baddie (na-na-na, na)<br>
어딜 그리 바삐 가니 (na-na-na, na)<br>
뭐든 될 대로 되라지<br>
<span class="h">Catch me if you can</span> (na-na-na, na, na-na)<br>
Baddie, ba-ba-baddie, baddie (na-na-na, na)<br>
나는 없어 거기 이미 (na-na-na, na)<br>
어차피 못 찾을 테니<br>
Catch me if you can (na-na-na, na, na-na)<br>
</p>`
    },
    {
        id: "HEYA",
        title: "해야 HEYA",
        category: "IVE",
        youtubeId: "4P2wbE0QKtI",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-heya",
        videoRefUrl: "https://www.youtube.com/watch?v=CmNCcaBBJjM",
        lyricsHTML: `<p>Let's get it<br>
Look at it<br>
Pay attention<br>
<span class="h">[I! VE!]</span><br>
</p>
<p>얼어붙은 맘 어디 깨볼까?<br>
놀라버렸던 네 심장 말이야<br>
맘에 들었어 넌 그냥 say "Yes"<br>
내가 널 부르면 "<u>얼음, 땡 <span class="h">喔魯 ㄉㄟ</span></u>" (any remember?)<br>
</p>
<p>(<span class="h">Da-da-da-dun-dun</span>)<br>
널 노리는 내 두 눈 (uh-huh) <span class="h">[啊哈]</span><br>
숨을 죽인 그다음 (uh-huh) <span class="h">[啊哈]</span><br>
한 발 낮춘 attitude <span class="h">[啊哈]</span> (my attitude, ah-ooh)<br>
때를 기다리는 pose (ah-ooh)<br>
</p>
<p>어둠 속 빛난 tiger eyes (ah-ooh)<br>
날 감춘 채로 다가가 (ah-ooh)<br>
새빨간 말로 홀려 놔 (ah-ooh)<br>
방심한 순간 claw<br>
</p>
<p>우린 더 높이<br>
하늘에 닿을 것처럼 외쳐 너를 깨워<br>
<u>올려 봐, 노려봐, <span class="h">屋六八, 諾六八,</span></u> 넌 내 거니까 다<br>
자꾸 널 보면 <u>탐이, 탐이 나 <span class="h">湯咪, 湯咪 那</span></u><br>
</p>
<p>해야, 해야, 해야<br>
한입에 널 삼킬 때야 (<u>탐이, 탐이 나 <span class="h">湯咪, 湯咪 那</span></u>)<br>
해야, 해야, 해야<br>
이미 내가 이긴 패야 (널 보면 <u>탐이, 탐이 나 <span class="h">湯咪, 湯咪 那</span></u>)<br>
</p>
<p>해야, 해야, 해야<br>
뜨겁게 떠오르는 해야<br>
별안간 홀린 그 순간 bite<br>
단 한 번에 난 널 <u>휘리휘리 <span class="h">ㄏㄨㄧ哩 ㄏㄨㄧ哩</span></u> <span class="h">catch ya</span><br>
</p>
<p>더 높이<span class="h">[豆 no批]</span> keep it up <span class="h">[keep it up]</span><br>
Uh-huh<br>
Happily ever after? <span class="h">Nope</span><br>
(<span class="h">Da-da-da-dun-dun</span>)<br>
</p>
<p>못 기다린대 못 돼버린 내 맘이<br>
겁 따윈 없는 척하지 마 너 <u> <span class="h">[嘎咪]</span></u>감히<br>
멀어져 넌 가니 어차피 한 입 거리 (hey)<br>
옳지 착하지 더 이리이리 오렴 <span class="h">[內]</span><br>
</p>
<p>네 맘 나 주면 안 잡아먹지 right now (now)<br>
내 발톱 아래 뭘 숨겼을지 watch out (out)<br>
</p>
<p>우린 더 높이<br>
하늘에 닿을 것처럼 외쳐 너를 깨워 (깨워)<br>
<u>올려 봐 노려봐 <span class="h">屋六八 諾六八</span></u> 넌 내 거니까 다<br>
자꾸 널 보면 <u>탐이, 탐이 나 <span class="h">湯咪, 湯咪 那</span></u><br>
</p>
<p>해야, 해야, 해야<br>
한입에 널 삼킬 때야 (<u>탐이, 탐이 나 <span class="h">湯咪, 湯咪 那</span></u>)<br>
해야, 해야, 해야<br>
이미 내가 이긴 패야 (널 보면 <u>탐이, 탐이 나 <span class="h">湯咪, 湯咪 那</span></u>)<br>
</p>
<p>해야, 해야, 해야<br>
뜨겁게 떠오르는 해야<br>
별안간 홀린 그 순간 bite<br>
단 한 번에 난 널 <u>휘리휘리 <span class="h">ㄏㄨㄧ哩 ㄏㄨㄧ哩</span></u> <span class="h">catch ya</span><br>
</p>
<p>휘리휘리, 휘리휘리<br>
휘리휘리, 휘리휘리<br>
</p>
<p>더 붉게, 더 밝게<br>
타올라 뜨거워도 좋으니<br>
더 높게, 더 높게<br>
숨어도 넌 내 손바닥 안이니<br>
</p>
<p>깊은 <u>어둠이 <span class="h">喔豆逆</span></u>, 짙은 <u>구름이 <span class="h">估嚕咪</span></u><br>
<u>또 긴 밤 아래 <span class="h">豆 ㄍㄧㄣ 幫 阿勒</span></u> 널 감출 테니<br>
Chew and swallow<br>
Get ready for it, baby (listen when I say, yeah)<br>
</p>
<p>자꾸 널 보면 <u>탐이, 탐이 나 <span class="h">湯咪, 湯咪 那</span></u><br>
</p>
<p>해야, 해야, 해야<br>
한입에 널 삼킬 때야 yeah (<u>탐이, 탐이 나 <span class="h">湯咪, 湯咪 那</span></u>)<br>
해야, 해야, 해야 (oh)<br>
이미 내가 이긴 패야 (널 보면 <u>탐이, 탐이 나 <span class="h">湯咪, 湯咪 那</span></u>)<br>
</p>
<p>해야, 해야, 해야<br>
뜨겁게 떠오르는 해야<br>
별안간 홀린 그 순간 bite<br>
<span class="h">Da-da-da-dun-dun-dun</span><br>
</p>`
    },
    {
        id: "Accendio",
        title: "Accendio",
        category: "IVE",
        youtubeId: "5c3VuHiFNWA",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-accendio",
        videoRefUrl: "https://www.youtube.com/watch?v=vGsxNU7ExwE",
        lyricsHTML: `<p>Yeah, dear priest 고백할 게 있어<br>
피 한 방울과 tears 그저 연극일 뿐<br>
이건 은밀한 <u>독백 <span class="h">都ㄅㄟ</span></u><br>
아름답지만 <span class="h">born bad</span><br>
예측하지 마 <span class="h">no way</span><br>
You just talk too much<br>
</p>
<p>오, 아름답지만 섬찟할 거야<br>
첫인상은 강한 게 좋지<br>
오, 다정하지만 얼음장 같아<br>
Gonna make you crazy<br>
</p>
<p>우, 평온했던 심장이
나를 볼 때 yeah, I like that 멎을지 몰라<br>
Now I'm changing, can't you see? (<span class="h">Five, six, seven, eight</span>)<br>
</p>
<p>Watch me, don't touch me<br>
Love me, don't hurt me<br>
Watch me, don't touch me<br>
<u>주문 걸어 아센디오 <span class="h">chu咪 嘎囉 Accendio</span></u><br>
</p>
<p>Watch me, don't touch me<br>
Love me, don't hurt me<br>
Watch me, don't touch me<br>
<u>주문 걸어 아센디오 <span class="h">chu咪 嘎囉 Accendio</span></u><br>
</p>
<p>Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
손끝으로 아센디오<br>
Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
손끝으로 아센디오<br>
</p>
<p>오, 절벽에서 turn<br>
처음 보는 색채로 물든 동공<br>
그 감정은 pure<br>
그 눈빛은 love<br>
쉽지는 않을 거야 out of control<br>
</p>
<p>향기 가득 채워 둔 <u>미로 <span class="h">咪摟</span></u><br>
연기 속으로 널 <u>밀어 <span class="h">咪摟</span></u><br>
여섯 방울 magic <span class="h">syrup</span><br>
And we pop into the <span class="h">mirror</span><br>
온몸에 붙어있는 pearl<br>
두 손가락으로 swirl<br>
보여줘 달콤한 curse<br>
Let them <span class="h">b-u-r-n</span>, yeah<br>
</p>
<p>우, 평온했던 심장이<br>
나를 볼 때 yeah, I like that 멎을지 몰라<br>
Now I'm changing, can't you see? (<span class="h">Five, six, seven, eight</span>)<br>
</p>
<p>Watch me, don't touch me<br>
Love me, don't hurt me<br>
Watch me, don't touch me<br>
<u>주문 걸어 아센디오 <span class="h">chu咪 嘎囉 Accendio</span></u><br>
</p>
<p>Watch me, don't touch me<br>
Love me, don't hurt me<br>
Watch me, don't touch me<br>
<u>주문 걸어 아센디오 <span class="h">chu咪 嘎囉 Accendio</span></u><br>
</p>
<p>Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
손끝으로 아센디오<br>
Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
손끝으로 아센디오<br>
</p>
<p>
<span class="h">[Yujin! Gaeul! Rei! Wonyoung! Liz! Leeseo! Yujin! Gaeul! Rei! Wonyoung! Liz! Leeseo! I! VE!]</span><br>
</p>
<p>Watch me, don't touch me<br>
Love me, don't hurt me<br>
Watch me, don't touch me<br>
<u>주문 걸어 아센디오 <span class="h">chu咪 嘎囉 Accendio</span></u><br>
</p>
<p>Watch me, don't touch me<br>
Love me, don't hurt me<br>
Watch me, don't touch me<br>
<u>주문 걸어 아센디오 <span class="h">chu咪 嘎囉 Accendio</span></u><br>
</p>
<p>Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
<u>손끝으로 아센디오 <span class="h">松根低囉 Accendio</span></u><br>
Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
Ah-ah, ah-ah-ah<br>
<u>손끝으로 아센디오 <span class="h">松根低囉 Accendio</span></u><br>
</p>`
    },
    {
        id: "REBELHEART",
        title: "REBEL HEART",
        category: "IVE",
        youtubeId: "QsrcIcivI48",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-rebel-heart",
        videoRefUrl: "https://www.youtube.com/watch?v=k6rKl4iTGIs",
        lyricsHTML: `<p><mark><span class="h">[IVE in my heart]</span><br>
                Rebels in our heart</mark><br>
</p>
<p>시작은 항상 다 이룬 것처럼<br>
엔딩은 마치 승리한 것처럼<br>
겁내지 않고 (ah) 마음을 쏟을래<br>
내 모양대로 <span class="h">[DI! VE!]</span><br>
</p>
<p>이제 더 이상 (더 이상) 신경 쓰지 않아<br>
어디에서도 내 맘을 지키기<br>
오해받을 땐 자유에 맡겨둘래<br>
다 알게 될 거니까 <span class="h">[I! VE!]</span><br>
</p>
<p>So you can love me <span class="h">[love me]</span>, hate me <span class="h">[hate me]</span><br>
You will <span class="h">never</span> be, <span class="h">never</span> be, <span class="h">never</span> be me<br>
Try me, I'll break free<br>
You will <span class="h">never</span> be, <span class="h">never</span> be, <span class="h">never</span> be me<br>
We are rebels in our heart, rebels in our heart<br>
We are <span class="h">rebels in our heart</span><br>
We are rebels in our heart, 꺾이지 않아<br>
We are <span class="h">rebels in our heart</span><br>
</p>
<p>너는 어디가 조금 부족해<br>
너는 거기가 뭔가 좀 넘쳐<br>
I don't care, 뭐든 말은 참 쉽지<br>
그래, 실행이 어려운 거야<br>
</p>
<p>Do it, move it, do it<br>
<u>우린 그냥 할게 <span class="h">屋哩 ㄎ釀 哈給</span></u><br>
내 갈 길은 멀고, 그 위에는 드라마가 있어<br>
또 외로움이 너무 길어지는 밤엔<br>
그 맘을 쏘아 올려 (<span class="h">oh-oh-oh-oh</span>)<br>
</p>
<p>Love me <span class="h">[Love me]</span>, hate me <span class="h">[hate me]</span><br>
You will <span class="h">never</span> be, <span class="h">never</span> be, <span class="h">never</span> be me<br>
Try me, I'll break free<br>
You will <span class="h">never</span> be, <span class="h">never</span> be, <span class="h">never</span> be me<br>
We are rebels in our heart, rebels in our heart<br>
We are <span class="h">rebels in our heart</span><br>
We are rebels in our heart, 꺾이지 않아<br>
We are <span class="h">rebels in our heart</span><br>
(rebels in our heart)<br>
</p>
<p>Na, na-na-na, na, na-na, na-na-na<br>
<span class="h">Rebels in our heart, rebels in our heart</span><br>
Na, na-na-na, na, na-na, na-na-na<br>
<span class="h">Rebels in our heart, rebels in our heart</span><br>
</p>
<p>우린 따로 이유를 묻지 않고 서로가 필요할 때가 있어<br>
그런 맘이 어떤 건지 잘 알기에<br>
영원을 바라는 사이보단 지금을 이해해 주고 싶어<br>
We will always be the rebels (oh)<br>
</p>
<p>Come, join as who you are<br>
We are rebels, we are one <span class="h">[one]</span><br>
이 마음만으로<br>
We are rebels, we are one <span class="h">[one]</span><br>
We are rebels in our heart, rebels in our heart<br>
We are <span class="h">rebels in our heart</span><br>
We are rebels in our heart, 꺾이지 않아<br>
We are <span class="h">rebels in our heart</span><br>
</p>`
    },
    {
        id: "ATTITUDE",
        title: "ATTITUDE",
        category: "IVE",
        youtubeId: "d-vmbNW9GbU",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-attitude",
        videoRefUrl: "https://www.youtube.com/watch?v=wZeHy6dyYxM",
        lyricsHTML: `<p>Da-ra-da-da, da-ra-da-da<br>
Da-ra-da-da, da-ra-da-da<br>
<mark><span class="h">[Yujin! Gaeul! Rei! Wonyoung! Liz! Leeseo! I! VE!]</span><br>
Da-ra-da-da, da-ra-da-da<br>
Da-ra-da-da, da-ra-da-da<br></mark>

</p>
<p>내 감정선은 어딘가 좀 다르게 흘러 (ah)<br>
남들과는 다른 곳에 포커스를 걸어<br>
Dress up to impress but I'm impressing everyone<br>
원하거나 말거나 결국 날 찾을 걸<br>
</p>
<p>'Cause I freeze you with my mind<br>
Then I set you right on fire<br>
네가 날 싫어해도<br>
내가 널 좋아할 수도 있어<br>
You'll fall in love by the end of the song<br>
<span class="h">[啊! 啊! 啊!]</span><br>
</p>
<p>I'm that, I'm that girl<br>
I'm that, <span class="h">what?</span> I'm that <span class="h">attitude</span><br>
내가 정할게<br>
나의 <u>무드 <span class="h">木ㄉ</span></u> I'm that <span class="h">attitude</span><br>
이리저리 부딪혀도<br>
행운은 늘 <u>내 편인 걸 <span class="h">內 ㄆㄧㄡ尼 狗</span></u><br>
I'm that, I'm that girl<br>
I'm that, <span class="h">ooh</span>, I'm that <span class="h">attitude</span><br>
</p>
<p><span class="h">Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra, da-da</span><br>
그 누가 아무리 뭐라 해도<br>
솔직히 내가 난 맘에 들어<br>
</p>
<p>비바람 쳐도 don't care 'bout it<br>
헝클어진 머리 <span class="h">so pretty</span><br>
짜증 대신에 I'm just laughing<br>
<u>해봐 어디 <span class="h">黑吧 喔底</span></u> <span class="h">I'm so lucky</span><br>
방금 올린 picture, <span class="h">click, click</span> (now)<br>
머리부터 발끝<u>까지 <span class="h">嘎季</span></u> (like)<br>
I don't need 너의 <u>동의 <span class="h">動議</span></u>는 (가, 가, 가, 가)<br>
</p>
<p>작은 시련이란 건 (ah, nah-ah)<br>
나에게는 friends of mine (ah-na-na-na-na, now-whoa)<br>
그냥 귀여울 뿐야<br>
운명이 장난을 걸어오면<br>
놀아 줘야지 뭐 어쩌겠어 <span class="h">[啊! 啊! 啊!]</span><br>
</p>
<p>I'm that, I'm that girl<br>
I'm that, <span class="h">what?</span> I'm that <span class="h">attitude</span><br>
내가 정할게<br>
나의 <u>무드 <span class="h">木ㄉ</span></u> I'm that <span class="h">attitude</span><br>
움츠리면 뭐 할 건데<br>
행운은 늘 <u>내 편인 걸 <span class="h">內 ㄆㄧㄡ尼 狗</span></u><br>
I'm that, I'm that girl<br>
I'm that, <span class="h">ooh</span>, I'm that <span class="h">attitude</span> (yeah)<br>
</p>
<p><span class="h">Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br></span>
</p>
<p>Who is that girl? She's so hot <span class="h">[的]</span>, hot <span class="h">[的]</span>, hot <span class="h">[的]</span>, hot <span class="h">[的]</span><br>
가까이 와 take a shot <span class="h">[棒]</span>, shot <span class="h">[棒]</span>, shot <span class="h">[棒]</span>, shot <span class="h">[棒]</span><br>
We look so good, we're so hot <span class="h">[的]</span>, hot <span class="h">[的]</span>, hot <span class="h">[的]</span>, hot <span class="h">[的]</span><br>
Da-ra-da-da, da-ra-da-da (ah-whoa)<br>
</p>
<p>I'm that, I'm that girl<br>
I'm that, <span class="h">what?</span> I'm that <span class="h">attitude</span> (I'm that attitude)<br>
내가 정할게 (yeah)<br>
나의 <u>무드 <span class="h">木ㄉ</span></u> I'm that <span class="h">attitude</span><br>
움츠리면 뭐 할 건데<br>
행운은 늘 <u>내 편인 걸 <span class="h">內 ㄆㄧㄡ尼 狗</span></u> (oh-whoa, yeah)<br>
I'm that, I'm that girl (I'm)<br>
I'm that, <span class="h">ooh</span>, I'm that <span class="h">attitude</span> (I'm that attitude, yeah)<br>
</p>
<p><span class="h">Da-da-da-ra, da-da-da-ra (ah)<br>
Da-da-da-ra, da-da-da-ra (I'm that, like that)<br>
Da-da-da-ra, da-da-da-ra (yeah, yeah, yeah, yeah)<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra<br>
Da-da-da-ra, da-da-da-ra, da-da</span><br>
그 누가 아무리 뭐라 해도<br>
솔직히 내가 난 맘에 들어<br>
</p>`
    },
    {
        id: "XOXZ",
        title: "XOXZ",
        category: "IVE",
        youtubeId: "qFPzwwmClfI",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-xoxz",
        videoRefUrl: "https://www.youtube.com/watch?v=ifzHoOEY048",
        lyricsHTML: `<p>Yeah
<span class="h">X-O-X-Z</span><br>
</p>
<p>두 눈 꼭 감아볼래? <span class="h">[DI! VE!]</span><br>
어떤 판타질 상상하든<br>
내가 다 이뤄줄게 <span class="h">[I! VE!]</span><br>
너는 그냥 꿈만 꾸면 돼<br>
점점 커지는 silence (<span class="h">you know it</span>)<br>
아득히 너를 이끈 소리<br>
원하면 끄덕여봐<br>
너는 깨어날 수 없을걸<br>
</p>
<p>(Ooh, ooh) <span class="h">give me, give me</span><br>
(Ooh, ooh) <span class="h">give me, give me</span> all that<br>
너의 모든 것을 원해<br>
And some more<br>
</p>
<p>Give me the X, give me the O, give me the <span class="h">L-O-V-E</span><br>
너라면 다 I want it all (<span class="h">X-O-X-Z</span>)<br>
(Ooh-ooh, ooh) I want-want-want it all<br>
(Ooh-ooh, ooh) I want-want-want it all<br>
Give me the max, give me the top, give me the <span class="h">good energy</span><br>
모조리 다 I want it all (<span class="h">X-O-X-Z</span>)<br>
(Ooh-ooh, ooh) I want-want-want it all<br>
Hey, <span class="h">X-O-X-Z</span><br>
</p>
<p>X-Z, yeah, play (cool)<br>
더 못되게, 더 착하게 더는<br>
Ha, sing (ooh)<br>
노래를 따라와, 날 찾아내 봐<br>
Girls like this 더는 없지<br>
Watch out 괜히 다 <mark><span class="tip">拍手</span> 치지</mark><br>
너는 깨어날 수 없을걸<br>
깨어나지 마, 순진한 건 됐으니 yeah-yeah<br>
</p>
<p>(Ooh, ooh) <span class="h">give me, give me</span><br>
(Ooh, ooh) <span class="h">givе me, give me</span> all that<br>
너의 모든 것을 원해<br>
And somе more (<span class="h">let's go</span>)<br>
</p>
<p>Give me the X, give me the O, give me the <span class="h">L-O-V-E</span><br>
너라면 다 I want it all (<span class="h">X-O-X-Z</span>)<br>
(Ooh-ooh, ooh) I want-want-want it all<br>
(Ooh-ooh, ooh) I want-want-want it all (all)<br>
Give me the max, give me the top, give me the <span class="h">good energy</span> (good energy)<br>
모조리 다 I want it all (<span class="h">X-O-X-Z</span>)<br>
(Ooh-ooh, ooh) I want-want-want it all<br>
Hey, <span class="h">X-O-X-Z</span><br>
</p>
<p>Red lights, stop signs<br>
넌 어때? 날 믿니?<br>
Watch out, watch out (oh)<br>
<span class="h">Watch out, watch out</span><br>
Red lights, stop signs<br>
난 너의 모든 걸<br>
꿈을 깨더라도 <u>가져야겠어 <span class="h">嘎就呀給搜</span></u><br>
</p>
<p>Give me the X, give me the O, give me the <span class="h">L-O-V-E</span><br>
너라면 다 I want it all (<span class="h">X-O-X-Z</span>)<br>
(Ooh-ooh, ooh) I want-want-want it all<br>
(Ooh-ooh, ooh) I want-want-want it all<br>
Give me the max, give me the top, give me the <span class="h">good energy</span><br>
모조리 다 I want it all (<span class="h">X-O-X-Z</span>)<br>
(Ooh-ooh, ooh) I want-want-want it all (all)<br>
Hey, <span class="h">X-O-X-Z</span><br>
</p>`
    },
    {
        id: "BANGBANG",
        title: "BANG BANG",
        category: "IVE",
        youtubeId: "6Mo0Ce5QLyM",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-bang-bang",
        videoRefUrl: "https://www.youtube.com/watch?v=KM63W8GAs_c",
        lyricsHTML: `<p>It's a new scene<br>
It's aggressive<br>
이미 알아차렸겠지<br>
그치, 언니?<br>
</p>
<p>모든 소문 속의 problem<br>
Yeah, I'm '걔'지<br>
벽에 붙은 나의 picture<br>
아래 wanted (아래 wanted)<br>
</p>
<p>Wake up <u>주저하지 말고 <span class="h">chu糾哈季 賣溝</span></u><br>
다른 시선들은 뭐 그리<br>
I don't give a 쉿 what you say?<br>
Yeah, I be going out with a <span class="h">bang</span><br>
</p>
<p><span class="h">Bang, bang, bang, bang<br>
Bang, bang, bang, bang</span><br>
Bang, bang, bang, bang, bang, bang, bang<br>
Bang, bang, bang, bang, bang, bang, bang, bang<br>
</p>
<p>I be going out with a <span class="h">bang</span><br>
Shaking my head<br>
This is my way<br>
Ah-yah-yah, I be going out with a <span class="h">bang</span><br>
This is my day<br>
밤이 올 때<br>
Ah-yah-yah, I be going out with a<br>
</p>
<p><span class="h">Bang, bang<br>
Bang, bang<br>
Bang, bang<br>
Bang, bang</span><br>
</p>
<p>더 다가와 <u>더 <span class="h">豆</span></u>, 빨리 go <u>더 <span class="h">豆</span></u><br>
Taking ma 쉿 gotta pop my <span class="h">gum</span><br>
Gimme that <span class="h">grr</span>, gimme that <span class="h">kiss</span><br>
Hey, I told you<br>
</p>
<p>It's explosive<br>
It's aggressive<br>
It's a little bit offensive<br>
Yeah, I said it (yeah?)<br>
</p>
<p>Wake up <u>주저하지 말고 <span class="h">chu糾哈季 賣溝</span></u><br>
그냥 맘 가는 대로<br>
I don't give a 쉿 what you say?<br>
Yeah, I be going out with a <span class="h">bang</span><br>
</p>
<p><span class="h">Bang, bang, bang, bang<br>
Bang, bang, bang</span><br>
Bang, bang, bang, bang, bang, bang, bang<br>
Bang, bang, bang, bang, bang, bang, bang, bang<br>
</p>
<p>I be going out with a <span class="h">bang</span><br>
Shaking my head<br>
This is my way<br>
Ah-yah-yah, I be going out with a <span class="h">bang</span><br>
This is my day<br>
밤이 올 때<br>
Ah-yah-yah, I be going out with a<br>
</p>
<p><span class="h">Bang, bang<br>
Bang, bang<br>
Bang, bang<br>
Bang, bang</span><br>
</p>
<p>Hot issue '대체 누굴까?'<br>
다들 찾기 위해서 안달 나<br>
연기처럼 disappear<br>
Catch me if you can, baby<br>
조금만 더 놀아줄게<br>
</p>
<p><span class="h">Four, three, two, one</span><br>
</p>
<p><span class="h">Bang</span><br>
Shaking my head<br>
This is my way<br>
Ah-yah-yah, I be going out with a <span class="h">bang</span><br>
This is my day<br>
밤이 올 때<br>
Ah-yah-yah, I be going out with a<br>
</p>
<p><span class="h">Bang, bang<br>
Bang, bang<br>
Bang, bang<br>
Bang, bang</span><br>
</p>`
    },
    {
        id: "BLACKHOLE",
        title: "BLACKHOLE",
        category: "IVE",
        youtubeId: "h0k8yWeb6ic",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/ive-blackhole",
        videoRefUrl: "https://www.youtube.com/watch?v=6CZ1_BwhdBI",
        lyricsHTML: `<p>Shall it all be sung, be done like this<br>
This, this, this, this, this, this<br>
</p>
<p>너의 심장 위에<br>
뿌리내린 순간<br>
뻗어나가 깊게<br>
이 노래가 들리니? <span class="h">Uh-huh</span><br>
</p>
<p>어두운 세상 위에<br>
쏟아지는 glitter<br>
목격하고 있어<br>
기적이 틀림없는 것<br>
</p>
<p>Keep on running 위험을 <u>겁내지 마 <span class="h">口內積 媽</span></u><br>
(간직해왔던 불꽃을 일으켜)<br>
원한 모든 걸 나와 <u>읊조려봐 <span class="h">烏特六八</span></u><br>
(빗속에서도 타오를 수 있게)<br>
</p>
<p>Now, look at me <span class="h">now</span>, look at me <span class="h">now</span><br>
원하면 뭐든 이뤄지리라<br>
Look at me <span class="h">now</span>, shine like my <span class="h">crown</span><br>
과감히 all the way<br>
</p>
<p>La-la-la-la, <span class="h">love flame</span><br>
Wi-wi-win it <span class="h">my way</span><br>
두려울 게 없어 내겐<br>
새로운 걸 보여줄게<br>
</p>
<p>La-la-la-la, <span class="h">love flame</span><br>
Wi-wi-win it <span class="h">my way</span><br>
꿈을 더 꿈꿔봐도 돼<br>
끝내 현실이 돼<br>
</p>
<p>(Hah, yeah)<br>
</p>
<p>발목 잡은 손을 <u>밀쳐내 <span class="h">咪邱類</span></u><br>
움츠렸던 꿈을 <u>펼쳐내 <span class="h">杯邱類</span></u><br>
진흙 속에서도 피는 꽃<br>
찢긴 날개로도 나는 bird like<br>
</p>
<p><span class="h">One, two, three</span><br>
나를 따라 <span class="h">come with me</span><br>
흔들리고 부서져도 then finally<br>
So go ahead, baby<br>
</p>
<p>Keep on running 위험을 <u>겁내지 마 <span class="h">口內積 媽</span></u><br>
(간직해왔던 불꽃을 일으켜)<br>
원한 모든 걸 나와 <u>읊조려봐 <span class="h">烏特六八</span></u><br>
(빗속에서도 타오를 수 있게)<br>
</p>
<p>Now, look at me <span class="h">now</span>, look at me <span class="h">now</span><br>
원하면 뭐든 이뤄지리라<br>
Look at me <span class="h">now</span>, shine like my <span class="h">crown</span><br>
과감히 all the way<br>
</p>
<p>Oh<br>
<span class="h">Look at me</span> (now), <span class="h">look at me</span> (now)<br>
Oh<br>
<span class="h">Look at me</span> (now), <span class="h">look at me</span><br>
</p>
<p>눈을 감고 손을 잡아<br>
다 보여줄 테니 더 가까이 와<br>
</p>
<p>I got fire in my eyes<br>
더 똑바로 봐<br>
La-la-la-la, <span class="h">love flame</span><br>
La-la-la-la, <span class="h">love flame</span><br>
</p>
<p>(Hey) 불을 지핀 건, (hey) 운명을 쥔 건<br>
La-la-la-la, <span class="h">love flame</span><br>
La-la-la-la, <span class="h">love flame</span><br>
네 손에<br>
</p>
<p>
        <mark><span class="h">[Yujin! Gaeul! Rei! Wonyoung! Liz! Leeseo! I! VE!]</span><br>
        La-la-la-la, love flame<br>
Wi-wi-win it my way<br>
흩날리는 빛방울에</mark><br>
밤새도록 춤을 출래<br>
</p>
<p><mark><span class="h">[Leeseo! Liz! Wonyoung! Rei! Gaeul! Yujin!]</span><br>
La-la-la-la, love flame<br>
Wi-wi-win it my way<br>
오랜 기다림을 끝내</mark><br>
마침내 우리답게<br>
</p>
<p>Oh<br>
<span class="h">Look at me</span> (now), <span class="h">look at me</span> (now)<br>
Oh<br>
<span class="h">Look at you</span> (now), <span class="h">look at you</span><br>
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