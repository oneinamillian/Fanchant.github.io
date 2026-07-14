// 1. 歌曲資料庫 (你可以自由在這邊增加新歌)
const songDatabase = [
    {
        id: "MAMA",
        title: "MAMA",
        category: "EXO-K",
        artist: "EXO-K",
        youtubeId: "KH6ZwnqZ7Wo", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/hk/tc/song/OsfbBnjk8Utsw4piOA",
        videoRefUrl: "https://www.youtube.com/watch?v=yk6A7bw2Xec",
        lyricsHTML: `<div class="lyric-item">
            <p>
Careless Careless Shoot Anonymous Anonymous<br>
Heartless Mindless No One Who Care About Me<br>
잃어버린 채 외면하는 것 같아<br>
참을 수밖에 없어 눈을 감지만<br>
<p class="tip">音樂播放一小段後</p><br>
<span class="h">[Su ho! Baek hyun! Chen yeol! D.O.! Ka i! Se hun! EXO-K依! ]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
마마 이젠 내게 대답해줘 왜 사람들이 달라졌는지<br>
아름다운 시절이라는게 존재하긴 했는지 <span class="h">[EXO-K依]</span><br>
이제 더는 사랑하는 법도 잊었고 배려하는 맘도 잃었고<br>
등을 돌린 채로 살아가기 바쁜걸 <span class="h">[EXO-K依]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
익명의 가면에 감췄던 살의 가득한 질시<br>
끝을 봐도 배고픈 듯한 이젠 만족해<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
우린 더 이상 눈을 마주 하지 않을까<br>
소통하지 않을까 사랑하지 않을까<br>
아픈 현실에 다시 눈물이 흘러<br>
바꿀 수 있다고 바꾸면 된다고 말해요 <u>마마 마마 <span class="h">MAMA MAMA</span></u><br>
<span class="h">EXO-K依</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
언젠가부터 우린 스마트한 감옥에 자발적으로 갇혀<br>
0과 1로 만든 디지털에 내 인격을 맡겨<br>
거긴 생명도 감정도 따듯함도 없고<br>
언어 쓰레기만 나뒹구는 삭막한 벌판<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
날이 갈수록 외로움만 더해져<br>
우리가 인간일 수 밖에 없는 건 상처 받는 것<br>
만나고 손을 잡고 느끼며 함께 울고 웃고<br>
닮아가고 서로 연결돼 돌이키고 싶다면<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
우린 더 이상 눈을 마주 하지 않을까<br>
소통하지 않을까 사랑하지 않을까<br>
아픈 현실에 다시 눈물이 흘러<br>
바꿀 수 있다고 바꾸면 된다고 말해요 <u>마마 마마 <span class="h">MAMA MAMA</span></u><br>
<span class="h">[EXO K依]</span><br>
            </p>
        </div>    
        <div class="lyric-item">
            <p>
Turn Back<br>
<span class="h">[Su ho! Baek hyun! Chen yeol! D.O.! Ka i! Se hun! EXO K依! ]</span><br>
죽고 죽이고 싸우고 외치고 이건 전쟁이 아니야<br>
도와줘요 마마 마마 마마 마마 <span class="h">Turn Back</span> <br>
깨닫게 마마 마마 마마 마마 <span class="h">Rolling Back</span><br>
박고 치고 편을 나누고 싸우고 이건 게임도 아니야<br>
도와줘요 마마 마마 마마 마마 <span class="h">Turn Back</span> Yeah<br>
            </p>
        </div>           
        <div class="lyric-item">
            <p>
Careless Careless (<u>마마 <span class="h">MAMA</span></u>) <br>
Shoot Anonymous Anonymous (<u>마마 <span class="h">MAMA</span></u>)<br>
Heartless Mindless (<u>마마 <span class="h">MAMA</span></u>)<br> 
No One Who Care About Me (<u>마마 <span class="h">MAMA</span></u>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
삶에 허락된 축복받은 날들에 감사하고<br>
매일 새로운 인연들을 만들고 <span class="h">[EXO-K依]</span><br>
깨져버린 마음에 보다 기쁜 사랑을<br>
모두 함께 웃을 수 있다면 <span class="h">[EXO-K依]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
우린 더 이상 눈을 마주 하지 않을까<br>
소통하지 않을까 사랑하지 않을까<br>
아픈 현실에 다시 눈물이 흘러<br>
바꿀 수 있다고 바꾸면 된다고 말해요 <u>마마 마마 <span class="h">MAMA MAMA</span></u><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Careless Careless Shoot Anonymous Anonymous<br>
Heartless Mindless No One Who Care About Me<br>
            </p>
        </div>`
    },


    {
        id: "Growl",
        title: "으르렁 (Growl)",
        category: "EXO",
        youtubeId: "I3dezFzsNss", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/hk/tc/song/PYUVTPkyNHxJsjLyVj",
        videoRefUrl: "https://www.youtube.com/watch?v=mOgC16paPUY",
        lyricsHTML: `<div class="lyric-item">
            <p>
Yo O.K.<br>
<span class="h">[SEXY!]</span><br>
나 혹시 몰라 경고하는데 <span class="h">[才ㄉ囉]</span><br>
지금 위험해<span class="h">[so dangerous]</span><br>
자꾸 나를 자극하지마 <span class="h">[ㄎ哩那]</span><br>
나도 날 몰라<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
숨이 자꾸 멎는다 <span class="h">[EXO K]</span> <br>
네가 날 향해 걸어온다<br>
나를 보며 웃는다 <span class="h">[EXO M]</span><br>
너도 내게 끌리는지<br>
눈앞이 다 캄캄해 <br>
네가 뚫어져라 쳐다볼 땐<br>
귓가에 가까워진 숨소리 <br>
날 미치게 만드는 너인걸<br>
            </p>
        </div>
                <div class="lyric-item">
            <p>
아무도 널 못 보게 <br>
품에 감추고 싶어<br>
널 노리는 시선들 내 안에 일어난 <br>
거센 소용돌이<br>
검은 그림자 내 안에 <u>깨어나 <span class="h">給歐娜</span></u><br>
널 보는 두 눈에 불꽃이 <u>튄다 <span class="h">聽打</span></u><br>
그녀 곁에서 모두 다 <u>물러나 <span class="h">母囉啦</span></u> <br>
이젠 조금씩 사나워<u>진다 <span class="h">進打</span></u><br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대 <br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대<br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대 <br>
너 물러서지 않으면 다쳐도 몰라<br>
            </p>
        </div>
                <div class="lyric-item">
            <p>
날이 선 눈빛과 베일듯한 긴장감<br>
지금 탐색 중이야 너의 주위를 Babe Oh<br>
넌 그냥 그대로 있어 나만을 바라보면서<br>
절대 널 보내지 않아 두고 봐 Babe<br>
            </p>
        </div>
                <div class="lyric-item">
            <p>
흐린 공간속에서 선명하게 빛나는<br>
널 노리는 시선들 내 안에 울리는 경보 울림소리<br>
검은 그림자 내 안에 <u>깨어나 <span class="h">給歐娜</span></u> <br>
널 보는 두 눈에 불꽃이 <u>튄다 <span class="h">聽打</span></u><br>
그녀 곁에서 모두 다 <u>물러나 <span class="h">母囉啦</span></u><br>
이젠 조금씩 사나워<u>진다 <span class="h">進打</span></u><br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대 <br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대<br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대 <br>
너 물러서지 않으면 다쳐도 몰라<br>
            </p>
        </div>
                <div class="lyric-item">
            <p>
<span class="h">E X O</span><br>
또 다른 늑대들이 볼세라 <span class="h">[剝絲啦]</span><br>
너무나 완벽한 내 여자라 <span class="h">[優加啦]</span><br>
품속엔 부드럽게 너를 안고 <br>
너만을 위해서 나는 난폭해지고<br>
결국엔 강한 자가 얻게 되는 미인 <br>
자리가 없으니까 그냥 돌아가 I Win<br>
가능성 제로야 닳으니까 그만 봐 <br>
그녀를 넘본다면 나를 먼저 넘어봐<br>
<span class="h">[We are EXO]</span><br>
            </p>
        </div>
                <div class="lyric-item">
            <p>
우리 말곤 하나둘씩 지워버리자<br>
너하고 나만 여기 남아 멈춰진 듯이<br>
워 Yeah<br>
            </p>
        </div>
                <div class="lyric-item">
            <p>
검은 그림자 내 안에 <u>깨어나 <span class="h">給歐娜</span></u> <br>
널 보는 두 눈에 불꽃이 <u>튄다 <span class="h">聽打</span></u><br>
그녀 곁에서 모두 다 <u>물러나 <span class="h">母囉啦</span></u><br>
이젠 조금씩 사나워<u>진다 <span class="h">進打</span></u><br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대 <br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대<br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대 <br>
너 물러서지 않으면 다쳐도 몰라<br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대 <br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대<br>
나 <u>으르렁 으르렁 으르렁 <span class="h">ㄜㄌ龍</span></u> 대 <br>
너 물러서지 않으면 다쳐도 몰라<br>
            </p>
        </div>`
    },

    {
        id: "Wolf",
        title: "늑대와 미녀 (Wolf)",
        category: "EXO",
        youtubeId: "gAal8xHfV0c", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/tw/tc/song/L--qEx7xXlYLvOJZjn",
        videoRefUrl: "https://www.youtube.com/watch?v=IjMfutIesbg&t=75s",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">[Su ho! Baek hyun! Chen yeol! D.O.! Ka i! Se hun! We are Exo!]</span><br>                
촉이 와 단번에 느껴 널 한입에 치즈처럼 집어넣을 테다<br>
향길 맡고 색깔 음미하고 와인보다 우아하게 잡아먹을 테다<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
아 그런데 발톱에 힘이 빠져 입맛까지 으 없어져<br>
혹시 내가 아픈 건가 병이라도 걸린 거니 Yeah <u>큰일났지 <span class="h">肯伊那幾</span></u><br>
헤이 정신차려 어쩌다 인간에게 맘을 뺏겨버렸나<br>
그녀는 한입거리뿐이라고
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Hey</span> 확 물어 그 다음 막 막 흔들어 정신 잃게<br>
<span class="h">Hey</span> 자 안 해본 스타일로 저 큰 보름달이 지기 전에 해치워라<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>그래 <span class="h">科壘</span></u> <span class="h">Wolf</span> <u>내가 <span class="h">內尬</span></u> <span class="h">Wolf</span> Awouuuu (아 <u>사랑해요 <span class="h">撒浪嘿喲</span></u>)<br>
난 늑대고 넌 미녀<br>
<u>그래 <span class="h">科壘</span></u> <span class="h">Wolf</span> <u>내가 <span class="h">內尬</span></u> <span class="h">Wolf</span> Awouuuu (아 <u>사랑해요 <span class="h">撒浪嘿喲</span></u>)<br>
난 늑대고 넌 미녀<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
거부할 수 없이 강렬한 이 느낌에 빠져버려 나를 놨어<br>
난 단순한 게 좋아 내 속에 숨어있던 것이 지금 눈 떴어<br>
<span class="h">[Kris! Xiumin! Luhan! Lay! Chen! Tao! We are EXO!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Yeah 그녈 좀 봐 공포에 빠져 눈앞의 시추에이션 이해 못해 못해<br>
저 더러운 늑대 놈이 결국 날 잡아먹겠지<br>
그게 아닌데 사랑에 빠진 겁니다<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
너무 아름다 아름다 아름다<u>운 <span class="h">問</span></u><br>
그대 내 님아 내 님아 내 님아 <span class="h">Whoo</span><br>
나를 두려워 두려워 두려워<u>마 <span class="h">罵</span></u><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
나는 특별한 특별한 특별한 <span class="h">Wolf</span><br>
그대 사랑한 사랑한 사랑한 <span class="h">Wolf</span><br>
네게 눈이 먼 눈이 먼 눈이 먼 <span class="h">Wolf</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Hey</span> 확 물어 그 다음 막 막 흔들어 정신 잃게<br>
<span class="h">Hey</span> 자 안 해본 스타일로 저 큰 보름달이 지기 전에 해치워라<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>그래 <span class="h">科壘</span></u> <span class="h">Wolf</span> <u>내가 <span class="h">內尬</span></u> <span class="h">Wolf</span> Awouuuu (아 <u>사랑해요 <span class="h">撒浪嘿喲</span></u>)<br>
난 늑대고 넌 미녀<br>
<u>그래 <span class="h">科壘</span></u> <span class="h">Wolf</span> <u>내가 <span class="h">內尬</span></u> <span class="h">Wolf</span> Awouuuu (아 <u>사랑해요 <span class="h">撒浪嘿喲</span></u>)<br>
난 늑대고 넌 미녀<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
널 못 끊겠어 큰일났어<br>
널 못 끊겠어 큰일났어<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
저 노란 달이 나를 <u>놀려 <span class="h">努柳</span></u> 널 가질 수 없<u>다고 <span class="h">塔狗</span></u><br>
난 그냥 거친 야수인데<br>
그딴 말 할거면 <u>꺼져 <span class="h">溝九</span></u> 필요하다면 날 <u>바꿔 <span class="h">趴過</span></u><br>
그녈 절대 보낼 수가 없어<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
거부할 수 없이 강렬한 이 느낌에 빠져버려 나를 놨어<br>
난 단순한 게 좋아 내 속에 숨어있던 것이 지금 눈 떴어<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
거부할 수 없이 강렬한 이 느낌에 빠져버려 나를 놨어<br>
Hey 확 물어 그 다음 막 막 흔들어 정신 잃게<br>
난 단순한 게 좋아 내 속에 숨어있던 것이 지금 눈 떴어<br>
Hey 자 안 해본 스타일로<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>그래 <span class="h">科壘</span></u> <span class="h">Wolf</span> <u>내가 <span class="h">內尬</span></u> <span class="h">Wolf</span> Awouuuu (아 <u>사랑해요 <span class="h">撒浪嘿喲</span></u>)<br>
난 늑대고 넌 미녀<br>
<u>그래 <span class="h">科壘</span></u> <span class="h">Wolf</span> <u>내가 <span class="h">內尬</span></u> <span class="h">Wolf</span> Awouuuu (아 <u>사랑해요 <span class="h">撒浪嘿喲</span></u>)<br>
난 늑대고 넌 미녀<br>
            </p>
        </div>`
    },

    {
        id: "Overdose",
        title: "중독 (Overdose)",
        category: "EXO-K",
        artist: "EXO-K", 
        youtubeId: "TI0DGvqKZTI", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/hk/tc/song/5-69lKKei4L5r0ZsyR",
        videoRefUrl: "https://www.youtube.com/watch?v=fiyXDnSXRfU",
        lyricsHTML: `<div class="lyric-item">
            <p>
come in<br>
<span class="h">[EXO-K依! EXO-M! 撒浪哈價! We are EXO!]</span><br>
모든 걸 걸고 널 들이킨 난 <br>
이제 돌이킬 수도 없다<br>
이 건 분명 위험한 중독 <br>
so bad, no one can stop her<br>
<span class="h">her love, her love</span> 오직 그것만 봐라 <br>
그녀의 사랑 하나 뿐인 걸<br>
치명적인 fantasy <br>
황홀한 그 안에 취해<br>
<span class="h">oh, she wants me, oh, she's got me, oh, she hurts me</span> <br>
좋아 더욱 갈망하고 있어<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
someone call the doctor 날 붙잡고 말해 줘 <br>
사랑은 병 중독 <span class="h">overdose</span><br>
시간이 지날수록 통제도 힘들어져 <br>
점점 깊숙이 빠져간다 <span class="h">eh, oh</span><br>
too much 너야 your love 이 건 <span class="h">overdose,</span> <br>
too much 너야 your love 이 건 <span class="h">overdose</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
놀리는 그 숨길로 온 너 <br>
본능은 너를 갈구해 좀 더<br>
가빠진 숨으로 질식된 후에 <br>
전율 그리곤 한숨<br>
<span class="h">her love, her love</span> 독한 약 같아 내겐 <br>
헤어나올 수 없는 destiny<br>
피는 뜨거워지지? yeah <br>
마침내 모두 지배해<br>
<span class="h">oh, she wants me, oh, she's got me, oh, she hurts me</span> <br>
계속 너만 그리고 그린 나<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
someone call the doctor 날 붙잡고 말해 줘 <br>
사랑은 병 중독 <span class="h">overdose</span><br>
시간이 지날수록 통제도 힘들어져 <br>
점점 깊숙이 빠져간다 <span class="h">eh, oh</span><br>
too much 너야 your love 이 건 <span class="h">overdose,</span><br>
too much 너야 your love 이 건 <span class="h">overdose</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
모두 다 내게 물어와 <br>
내가 변한 것 같대 <br>
심장에 니가 박혀 버린 듯 <br>
세상이 온통 너인데<br>
멈출 수 없어 <br>
이미 가득한 널 <br>
지금 이 순간 <br>
you're in my heart<br>
<span class="h">E-X-O</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
난 너를 맛보고 너를 마신다 <br>
온 몸이 떨려와 <br>
계속 들이켜도 아직 모자라<br>
손끝까지 전율시킨 갈증 <br>
이 순간을 잡아 <br>
질주를 멈추지 마 <br>
너무 좋아 I can't stop<br>
<span class="h">hey, doctor</span> 지금 이대로 괜찮나 나? <br>
주체할 수 없는 이 끌림 <br>
속에 녹아내려가 난<br>
이 느낌 없이는 죽은 거나 <br>
마찬가진 걸 내가 사는 이유 <br>
너라는 달콤함에 중독<br>
<span class="h">[We! are! EXO!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
someone call the doctor 난 그녀가 빌요해 <br>
하루도 난 버틸 수 없어 (버티지 못해)<br>
벗어나지 싶지 않은 천국 같은 너 <br>
긴긴 이 덫은 아름다워 <span class="h">eh, oh</span><br>
too much 너야 your love 이 건 <span class="h">overdose,</span> <br>
too much 너야 your love 이 건 <span class="h">overdose</span><br>
            </p>
        </div>`
    },

    {
        id: "LOVEMERIGHT",
        title: "LOVE ME RIGHT",
        category: "EXO",
        youtubeId: "Yss_LnGY1Uc", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/exo-love-me-right",
        videoRefUrl: "https://www.youtube.com/watch?v=QSmwVaiR_jI",
        lyricsHTML: `<div class="lyric-item">
            <p>
Oh yeah! C'mon!<span class="h">[E! X! O!]</span><br>
Take your time<br>
왠지 두근대는 밤이야<br>
<span class="h">Na na na na</span><br>
<span class="h">Na na na na</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
So tonight<br>
달 끝까지 달려가볼까<br>
<span class="h">Yea yea yea yea</span><br>
<span class="h">Yea yea yea yea</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Just right</span><br>
시동을 걸어 엑셀에 발을 올려<br>
모든 것이 특별해<br>
너와는 잘 어울려<br>
무엇을 원하던 I'ma make it work (yeah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Shawty, I'ma party 'til the <span class="h">sun down</span><br>
지금 이 신비로운 느낌은 <u>뭘까 <span class="h">摸尬</span></u><br>
와줘 내게로 어서 before the <span class="h">sun rise</span><br>
네가 없는 난 어딜 가도 nobody (yeah) 오!<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
도로 위에 여긴 <span class="h">runway</span><br>
날 바라보는 눈 속 <span class="h">milky way</span><br>
Just love me right (<u>아하! <span class="h">啊哈!</span></u>)<br>
Baby love me right (<u>아하! <span class="h">啊哈!</span></u>)<br>
오! 내게로 와 망설이지마<br>
넌 매혹적인 나의 universe<br>
Just love me right (<u>아하! <span class="h">啊哈!</span></u>)<br>
내 우주는 전부 너야<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Just <span class="h">love me right</span><br>
Just <span class="h">love me right</span><br>
Just <span class="h">love me right</span><br>
내 우주는 전부 너야<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Shine a light 별빛 속을 달려<br>
은하술 건너<br>
<span class="h">Na na na na</span><br>
<span class="h">Na na na na</span><br>
멈출 순 없어 오예!<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
우릴 비추는 달빛은 여전하지<br>
네 궤도 안 헤매고 있어 난 아직<br>
I can do this all night long baby<br>
네가 없는 난 어딜 가도 반쪽짜리니까<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
달빛 찬란한 밤 펼쳐진<br>
별들의 불꽃놀이<br>
좀 더 높이 날아가볼까 (날아가볼까)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
가슴 터질듯한 이 순간<br>
우리 둘만 떠올라<br>
발 밑에 지구를 두고 love me right<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
도로 위에 여긴 <span class="h">runway</span><br>
날 바라보는 눈 속 <span class="h">milky way</span><br>
Just love me right (<u>아하! <span class="h">啊哈!</span></u>)<br>
Baby love me right (<u>아하! <span class="h">啊哈!</span></u>)<br>
So come on baby 눈이 부시게<br>
더 아름다운 너의 universe (아름다운 lady)<br>
Just love me right (<u>아하! <span class="h">啊哈!</span></u>)<br>
내 우주는 전부 너야 (오!)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Just <span class="h">love me right</span><br>
Just <span class="h">love me right</span> (can you love me right)<br>
Just <span class="h">love me right</span><br>
I just wanna make you love me<br>
(내 우주는 전부 너야)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
수 없는 밤이 찾아와도<br>
내 하늘엔 오직 너만 빛나 (woo yeah)<br>
속삭여줘 내게만<br>
밤하늘을 너와 내가<br>
물들여가<br>
<span class="h">[We! are! One!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
도로 위에 여긴 <span class="h">runway</span><br>
날 바라보는 눈 속 <span class="h">milky way</span><br>
Just love me right (<u>아하! <span class="h">啊哈!</span></u>)<br>
Baby love me right (<u>아하! <span class="h">啊哈!</span></u>)<br>
오! 내게로 와 망설이지마<br>
넌 매혹적인 나의 universe<br>
Just love me right (<u>아하! <span class="h">啊哈!</span></u>)<br>
내 우주는 전부 너야 <br>(내 우주는 전부 너야)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Just <span class="h">love me right</span><br> (oh oh oh yeah)<br>
Just <span class="h">love me right</span><br>
Just <span class="h">love me right</span> <br>(우리만의 시간)<br>
내 우주는 전부 너야<br>
Just <span class="h">love me right</span> <br>(짜릿한 cosmic ride)<br>
Just <span class="h">love me right</span> <br>(우리만의 야간비행)<br>
Just <span class="h">love me right</span><br>
I just wanna make you love me<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Yea (woo you got to love)<br>
Yea (you got to love me)<br>
Yea<br>
내 우주는 전부 너야 (내 우주는 전부 너야)<br>
Yea (you love me)<br>
Yea (you love me)<br>
Yea내 우주는 전부 너야<br>
            </p>
        </div>`
    },

    {
        id: "CALLMEBABY",
        title: "CALL ME BABY",
        category: "EXO",
        youtubeId: "yWfsla_Uh80", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/exo-call-me-baby",
        videoRefUrl: "https://www.youtube.com/watch?v=6MayOOAvqkU",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">(Call me baby)</span> 이 거리는 완전 난리야<br>
<span class="h">(Call me baby)</span> 사람들 사이는 남이야 (ha-ha)<br>
<span class="h">(Call me baby)</span>함께하는 매 순간이<br>
Like <span class="h">boom, boom, boom, boom, boom</span> (what up?)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Hey, girl 영원 같던 찰나 (운명 같은 순간)<br>
나를 한 순간 뚫고가 (번개처럼 이 세계를)<br>
넌 내 이름 불러주며 나에게로 다가와 ah<br>
놀라워 섬광처럼 가득 차<br>
너를 마주한 순간 oh, my<br>
편하게 여기 앉아, 이제 내 얘기를 들어봐<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh, I don't care 나 멀리멀리 돌아간대도<br>
이렇게 너의 곁에 단 한 남자가 되어줄 테니<br>
메마른 내 입술에 너<br>
스며들어와 나를 깨워<br>
The time's wasting, girl<br>
So don't wait, don't wait too long<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
빛나는 것들은 많아 (<u>많아 <span class="h">麻那</span></u>)<br>
그 안에 진짜를 봐봐 (<u>봐봐 <span class="h">ㄆㄨㄚ ㄆㄨㄚ</span></u>)<br>
Call me baby, bae, <span class="h">call me baby</span> (oh)<br>
Call me baby, bae, <span class="h">call me baby</span><br>
(You know my name girl)<br>
널 향해 커져간 마음아 (<u>마음아 <span class="h">媽媽</span></u>)<br>
너 말곤 그 문을 닫아 <span class="h">[搭搭]</span><br>
(you know I'm here, girl)<br>
Call me baby, bae, <span class="h">call me baby</span> <br>
(ha-ha)<br>
Call me baby, bae, <span class="h">call me baby</span> <br>
(몇 번이라도 call me, girl)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
나를 나로 존재하게 해<br>
내 세상은 오직 you're the one<br>
You're the one ('cause you're the one I want)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
빛나는 것들은 많아 (<u>많아 <span class="h">麻那</span></u>)<br>
그 안에 진짜를 봐봐 <span class="h">[ㄆㄨㄚ ㄆㄨㄚ]</span><br>
(you know my name, girl)<br>
Call me baby, bae, <span class="h">call me baby</span><br>
Call me baby, bae,<span class="h">call me baby</span><br>
(몇 번이라도 call me girl)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Baby girl 욕심들 속에 날 선<br>
그 어떤 말도 넘어설 (call me baby)<br>
그런 믿음을 보여준 너<br>
모두 변해 날 떠나간대도<br>
너는 나만의 lady (oh)<br>
내 손을 잡아주는 그거면 돼<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
빛나는 것들은 많아 (<u>많아 <span class="h">麻那</span></u>)<br>
그 안에 진짜를 봐봐 (<u>봐봐 <span class="h">ㄆㄨㄚ ㄆㄨㄚ</span></u>)<br>
Call me baby, <span class="h">call me baby</span> <br>
Call me baby, <span class="h">call me baby</span><br>
(you know my name girl)<br>
널 향해 커져간 마음아 (<u>마음아 <span class="h">媽媽</span></u>)<br>
너 말곤 그 문을 닫아 <span class="h">[搭搭]</span><br>
(You know I'm here girl)<br>
Call me baby, bae, <span class="h">call me baby</span><br>
Call me baby, bae, <span class="h">call me baby</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
어둔 미로 속에 갇혔던 oh 나 <br>
(그 어둠 속에서)<br>
날 깨워준 네 목소리 들려와<br>
날 다시 태어나게 해<br>
<span class="h">E-X-O listen!</span> yeah <br>
<mark>(Baby, baby)</mark> <br>
<mark><span class="h">[We! are! EXO!]</span></mark><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Say my name (louder)<br>
혼란스러운 공간 속 날<br>
이끌어줄 빛이 되고 놓치지<br>
않아준 너라면 baby (what up)<br>
널 안고 변치 않을게 널 안고<br>
나를 떠나버린 사람들과 마주해<br>
Never don't mind about a thing<br>
내 가슴속 그 거대한 공백에 널 더해<br>
<span class="h">[CALL! ME! EXO!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
흔들리는 세상 속에서 (ooh-babe)<br>
빛이 돼준 오직 한 사람 (oh)<br>
바로 너 ('cause you're the one I want)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
빛나는 것들은 많아 (<u>많아 <span class="h">麻那</span></u>)<br>
그 안에 진짜를 봐봐 (<u>봐봐 <span class="h">ㄆㄨㄚ ㄆㄨㄚ</span></u>)<br>
Call me baby, bae, <span class="h">call me baby</span><br>
Call me baby, bae, <span class="h">call me baby</span><br>
(I'll be your baby yeah, hoo!)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
나를 나로 존재하게 해 <br>(you know I'm here, girl)<br>
내 세상은 오직 you're the one<br>(you're the one that I want)<br>
You're the one <br>('cause you're the one I want)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
빛나는 것들은 많아 (<u>많아 <span class="h">麻那</span></u>)<br>
그 안에 진짜를 봐봐 (<u>봐봐 <span class="h">ㄆㄨㄚ ㄆㄨㄚ</span></u>)<br>
Call me baby, bae, <span class="h">call me baby</span><br> (oh-oh-oh)<br>
Call me baby, bae, <span class="h">call me baby</span><br> (몇 번이라도 call me, girl)<br>
            </p>
        </div>`
    },

    {
        id: "Lotto",
        title: "Lotto",
        category: "EXO",
        youtubeId: "tbe3pe2BtwA", // YouTube 影片網址後的 ID
        sourceUrl: "http://lyrics.lyricfind.com/lyrics/exo-lotto",
        videoRefUrl: "https://www.youtube.com/watch?v=7RonIEo9F0Q",
        lyricsHTML: `<div class="lyric-item">
            <p>
Yeah, yeah, yeah, yeah<br>
<span class="h">[EXO!]</span><br>
Yeah, yeah, yeah, yeah<br>
Oh, lotto-tto<br>
Oh, yeah, yeah<br>
Oh, yeah, yeah, yeah<br>
별 관심이 없는 척 시선을 피해서 가<br>
이해해 모든 걸 걸어야만 할 테니까<br>
스쳐만 봐도 <span class="h">oh yeah</span><br>
다른 여자와는 확 달라<br>
뒤돌아봐도 분명 내게 찾아온 luck<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Lipstick chateau 와인빛 color (<span class="h">la la la la</span>)<br>
하얀 champagne 버블에 shower (<span class="h">la la la la</span>)<br>
평생에 한 번일지도 몰라<br>
꾹 참았던 본능이 튀어 올라<br>
어쩌나 I just hit the lotto (la la la la)<br>
<span class="h">Oh, oh, oh,</span> lotto<br>
<span class="h">Oh, oh, oh,</span> lotto (oh, oh, oh)<br>
<span class="h">Oh, oh, oh,</span> lotto<br>
<span class="h">Oh, oh, oh,</span> lotto (oh, oh, oh)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
너란 행운 마치 실낱같은 확률 속에 맘을 던지게 해 날<br>
다른 사람들은 이제 팝콘 입에 넣은 채 우릴 쳐다봐<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Oh (oh baby)<br>
멀리서 들려오는 소리<br>
<span class="h">No way</span> (no way, no way, no)<br>
즐겨 봐 oh yeah<br>
모든 게 바뀌어 <span class="h">oh yeah</span><br>
오늘부턴 공기도 달라<br>
세상이 바뀌어<br>
밤하늘엔 은빛 별들<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Lipstick chateau 와인빛 color (<span class="h">la la la la</span>)<br>
하얀 Champagne 버블에 shower (<span class="h">la la la la</span>)<br>
평생에 한 번일지도 몰라<br>
꾹 참았던 본능이 튀어 올라<br>
널 향해 소리 질러 louder (la la la la)<br>
<span class="h">Oh, oh, oh,</span> lotto<br>
<span class="h">Oh, oh, oh,</span> lotto (oh, oh, oh)<br>
<span class="h">Oh, oh, oh,</span> lotto<br>
<span class="h">Oh, oh, oh,</span> lotto (oh, oh, oh)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
이 순간을 놓치진 마<br>
We're going crazy, my lucky lady<br>
또 한번 기억될 날을<br>
지금도 난 목이 말라 네게 줄 게 아직 많아<br>
I don't need no money 너만 있으면 돼<br>
더없이 간절히 원하는걸 <br>
<span class="h">[EXO! EXO! EXO! EXO! EXO! EXO!]</span><br>
모든 것을 걸어 내게 (oh, yeah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Lipstick chateau 와인빛 color (chateau, chateau all over) (<span class="h">la la la la</span>)<br>
하얀 champagne 버블에 shower (하얀 champagne on me) (<span class="h">la la la la</span>)<br>
평생에 한 번일지도 몰라<br>
꾹 참았던 본능이 튀어 올라 (본능이 튀어 올라)<br>
어쩌나 I just hit the lotto (<span class="h">la la la la</span>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(Yeah, oh)<br>
Yeah, yeah, yeah, yeah<br>
Yeah, yeah, yeah, yeah (just hit the lotto woo yeah)<br>
Lotto oh, oh, oh<br>
Yeah, yeah, yeah, yeah (yeah, yeah, yeah, yeah, yeah)<br>
Yeah, yeah, yeah, yeah<br>
(Hit the lotto, woo yeah)<br>
넌 lotto (<span class="h">la la la la</span>)<br>
            </p>
        </div>`
    },

    {
        id: "LuckyOne",
        title: "Lucky One",
        category: "EXO",
        youtubeId: "73QzQYN8FtE", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/exo-lucky-one",
        videoRefUrl: "https://www.youtube.com/watch?v=Zt3ii839s4E",
        lyricsHTML: `<div class="lyric-item">
            <p>
Oh 태양이 뜬다<br>
널 찾아 줄 지도를 들고 좌표를 따라나서는 항로<br>
No matter 저 은빛 나침반은 너를 향할 테니<span class="h">[E X O!]</span><br>
너를 닮은 하늘은 아름다워<br>
오늘도 오늘도 이대로 넌 눈부셔<br>
익숙한 듯 낯선 길 휘어 버릴게<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
너와 나의 평행선 너머 너머 I don't mind<br>
큰 파도에 밀려 이 항해의 끝에 내가<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
휘몰아치는 <u>순간 <span class="h">孫甘</span></u><br>
내 세상에 멈춰선 넌 나의 <span class="h">only one</span><br>
너를 발견한 <u>순간 <span class="h">孫甘</span></u><br>
더 찬란히 빛나는 I'll be the lucky one <span class="h">[lucky one]</span><br>
너와 나 (livin' it up)<br>
이곳에 (just livin' it up)<br>
Keep on coming, oh <span class="h">wow wow wow</span><br>
같은 시간 속에 oh 하나 된 그 순간<br>
We'll be the lucky ones <span class="h">[lucky one]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Girl (oh girl)<br>
비밀스럽게 숨겨 둔 너의 고백<br>
(Just tell me right now) 다가갈게<br>
한 걸음 한 걸음 네 곁에 baby<br>
오늘도 오늘도 절대로 never go back<br>
오직 나만 아는 rule 바꿔 버릴게<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
너와 나의 평행선 너머 너머 I don't mind<br>
큰 파도에 밀려 이 항해의 끝에 내가<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
휘몰아치는 <u>순간 <span class="h">孫甘</span></u><br>
내 세상에 멈춰선 넌 나의 <span class="h">only one</span><br>
너를 발견한 <u>순간 <span class="h">孫甘</span></u><br>
더 찬란히 빛나는 I'll be the lucky one <span class="h">[lucky one]</span><br>
너와 나 (livin' it up)<br>
이곳에 (just livin' it up)<br>
Keep on coming, oh <span class="h">wow wow wow</span><br>
같은 시간 속에 oh 하나 된 그 순간<br>
We'll be the lucky ones <span class="h">[lucky one]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
수많은 사람 속 나의 <span class="h">lover</span><br>
운이 좋게 찾은 네 잎 <span class="h">clover</span><br>
올 것 같아 내게로 너란 행운도 멋지지 누가 뭐라 해도<br>
널 알아 갈수록 yeah, let's go<br>
공존할 수 없는 곳은 없어<br>
넌 나의 <span class="h">only one</span><br>
난 너의 <span class="h">lucky one</span> 'cause I, I, I<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
휘몰아치는 <u>순간 <span class="h">孫甘</span></u><br>
내 세상에 멈춰선 넌 나의 <span class="h">only one</span><br>
너를 발견한 <u>순간 <span class="h">孫甘</span></u><br>
더 찬란히 빛나는 I'll be the lucky one <span class="h">[lucky one]</span><br>
너와 나 (livin' it up)<br>
이곳에 (just livin' it up)<br>
Keep on coming, oh <span class="h">wow wow wow</span><br>
같은 시간 속에 oh 하나 된 그 순간<br>
We'll be the lucky ones<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I am the lucky one<br>
I am the lucky one<br>
            </p>
        </div>`
    },

    {
        id: "Monster",
        title: "Monster",
        category: "EXO",
        youtubeId: "KSH-FVVtTf0", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/hk/tc/song/KqajMLoh3UapFLPsqQ",
        videoRefUrl: "https://www.youtube.com/watch?v=dyr_ejDZjPo",
        lyricsHTML: `<div class="lyric-item">
            <p>
She got me gone crazy <span class="h">[E X O! Mon s ter!]</span><br>
왜 심장이 뛰니<span class="h">[E X O! Mon s ter!]</span><br>
넌 아름다워 나의 Goddess <span class="h">[Goddess]</span><br>
닫혀있지  <span class="h">Yeah yeah</span><br>
두드릴 테니 날 들여보낼래?<br>
감춰진 스릴을 줄게 <br>
눈동자의<span class="h">[耶!]</span> 호기심에<span class="h">[耶!]</span> 이미 넌빠져들었고<br>
Don't be afraid<br>
Love is the <span class="h">way</span> <br>
Shawty I got it<br>
You can call me <span class="h">monster</span> <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I'm creeping in your heart babe<br>
뒤집고 무너트리고 <u>삼켜 <span class="h">桑kio</span></u><br>
그래 널 훔쳐 <u>탐닉해 <span class="h">燙匿K</span></u><br>
널 망쳐 놓을거야<br>
네 맘속에<span class="h">[耶!]</span> 각인된 채 <span class="h">[切!]</span><br>
죽어도 영원히 살래<br>
Come here girl<br>
<span class="h">You call me</span>  monster<br>
네 맘으로 들어갈게<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
She got me gone crazy<br>
왜 심장이 뛰니<br>
내가 좀 성격이 급해<br>
그닥 온순하지 못해<br>
널 미워했어 하지만 너를 원해<br>
That's right, my type<br>
가슴은 거짓말 안 해<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
시작됐어 <span class="h">[喔!]</span> 내 안에서 <span class="h">[搜]</span><br>
위험한 신호를 보내<br>
Don't be afraid<br>
Love is the <span class="h">way</span> <br>
Shawty I got it<br>
You can call me <span class="h">monster</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I'm creeping in your heart babe<br>
뒤집고 무너트리고 <u>삼켜 <span class="h">桑kio</span></u><br>
그래 널 훔쳐 <u>탐닉해 <span class="h">燙匿K</span></u><br>
널 망쳐 놓을거야<br>
네 맘속에<span class="h">[耶!]</span> 각인된 채<span class="h">[切!]</span><br>
죽어도 영원히 살래<br>
Come here girl<br>
<span class="h">You call me</span>  monster<br>
네 맘으로 들어갈게<br>
<span class="h">[E X O]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
전율이 와 네 삶을 다 뒤집어 버리는게<br>
I'm sorry you make me so crazy, you know you do<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
모두 날 두려워해<br>
so I'm untouchable man<br>
근데 네 진심은 왜 결국에 날 거부 못해<br>
숨어서 훔쳐보다가 깜짝 놀라지 (Who?)<br>
네겐 안티노미 같은 난 네 존재의 일부 (How we do?)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
날 그대로 받아들여<br>
너의 두려운 걱정은 <u>접어두렴 <span class="h">就爸肚溜</span></u> <br>
네가 견딜만한 고통을 누려<br>
더 깊이 <u>빠져들어 <span class="h">爸就滴溜</span></u><br>
널 맘대로 가지고 <u>놀아 <span class="h">漏啦</span></u><br>
내 손에서 맘껏 <u>놀아 <span class="h">漏啦</span></u><br>
도망가지마 넌 영원히 맴돌아<br>
You can call me <span class="h">monster</span> <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I’m creeping in your heart babe<br>
뒤집고 무너트리고 삼켜<br>
그래 널 훔쳐  <u>탐닉해 <span class="h">燙匿K</span></u><br>
널 망쳐 놓을거야 <span class="h">[耶!]</span><br>
네 맘속에 각인된 채<span class="h">[切!]</span><br>
죽어도 영원히 살래<br>
Come here girl<br>
<span class="h">You call me</span>  monster<br>
네 맘으로 들어갈게<br>
我將進入你的心中
Creeping, creeping, creeping<br>
Creeping, creeping, creeping<br>
You. Creeping<br>
            </p>
        </div>`
    },

    {
        id: "The Eve",
        title: "전야 (前夜) (The Eve)",
        category: "EXO",
        youtubeId: "b6ycw7p9-bE", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/exo-the-eve",
        videoRefUrl: "https://www.youtube.com/watch?v=cMz4p1raVlk",
        lyricsHTML: `<div class="lyric-item">
            <p>
똑바로 봐 what's the situation<br>
당황한 너의 시선 너머 끝내 무너지는 <u>성벽 <span class="h">松bio</span></u><br>
차츰 밝아 오는 <u>새벽 <span class="h">ㄙㄟbio</span></u> yeah uh<br>
끝없이 이어지고 있어<br>
무딘 칼날 끝에 잘라 내지 못해<br>
계속 반복되는 <u>문제 <span class="h">摸接</span></u> yeah<br>
미처 풀지 못한 <u>숙제 <span class="h">搜接</span></u><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
높은 벽 앞에 스러지던 작고 약한 바람 소리가<br>
뒤엉켜 폭풍처럼 몰아치는 소릴 들어 봐<br>
깨고 부딪쳐야 해 <span class="h">[E! X! O!]</span><br>
우릴 볼 수 있도록 <span class="h">[We! are! One!]</span><br>
크게 소리쳐야 해 <span class="h">[E! X! O!]</span><br>
멀리 번져 가도록 <span class="h">[We! are! One!]</span> oh<br>
여린 빛들이 번져 가 긴 어둠을 다 몰아낸 순간<br>
다시 깨어나야 해 <span class="h">[E! X! O!]</span> uh<br>
새로워진 아침에 <span class="h">[We! are! EXO!]</span> oh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
오만한 시선들로 날 봐<br>
이미 다른 출발선 위에 앉아<br>
까마득한 <u>거리 <span class="h">摳哩</span></u> yeah<br>
닿지 않을 듯한 <u>외침 <span class="h">威七</span></u><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
짓밟힌 채로 자라나던 간절한 수많은 꿈들이<br>
보란 듯 담장 너머 피워 낸 풍경을 바라봐<br>
깨고 부딪쳐야 해 <span class="h">[E! X! O!]</span><br>
우릴 볼 수 있도록 <span class="h">[We! are! One!]</span><br>
크게 소리쳐야 해 <span class="h">[E! X! O!]</span><br>
멀리 번져 가도록 <span class="h">[We! are! One!]</span> ah<br>
여린 빛들이 번져 가 긴 어둠을 다 몰아낸 순간<br>
다시 깨어나야 해 <span class="h">[E! X! O!]</span><br>
새로워진 아침에 <span class="h">[We! are! EXO!]</span> ah<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
왜곡되는 <u>진실 <span class="h">金洗</span></u> <br>
가르쳐진 <u>거짓 <span class="h">摳幾</span></u><br>
변화의 목소리 파도가 일어<br>
전부 집어삼킬 바다를 만든 건 it's you <span class="h">[It's you]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
깨고 부딪쳐야 해 <span class="h">[E! X! O!]</span><br>
우릴 볼 수 있도록 <span class="h">[We! are! One!]</span><br>
크게 소리쳐야 해 <span class="h">[E! X! O!]</span><br>
멀리 번져 가도록 <span class="h">[We! are! One!]</span> oh<br>
여린 빛들이 번져 가 긴 어둠을 다 몰아낸 순간<br>
다시 깨어나야 해 <span class="h">[E! X! O!]</span><br>
새로워진 아침에 <span class="h">[We! are! EXO!]</span><br>
            </p>
        </div>`
    },

    {
        id: "KoKoBop",
        title: "Ko Ko Bop",
        category: "EXO",
        youtubeId: "IdssuxDdqKk", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.kkbox.com/hk/tc/song/8oBRvtmglULSDUWGrn",
        videoRefUrl: "https://www.youtube.com/watch?v=rtBjZa_9cQE&list=PLnIgXiL1mkytPUoK3SdJZAnpU9x9UcRJT",
        lyricsHTML: `<div class="lyric-item">
            <p>
                <p class="tip">前奏開始播放後</p><br>
                <span class="h">[EXO! KoKoBop!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                Shimmie shimmie <span class="h">Ko Ko Bop</span> <br>
                I think I like it<br>
                긴장은 <span class="h">down down</span><br>
                부끄러 말고<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                어지러운 마음속에 내가 들어가 <span class="h">[Hey!]</span><br>
                익숙한 듯 부드럽게 네게 번져가 <span class="h">[Hey!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                Ah woo 고요한 밤이야<br>
                Ah woo 널 위한 밤이야<br>
                참을 수가 없어 빠져가 <span class="h">Yeah yeah</span> <br>
                너의 몸짓에 난 취해가 <span class="h">Yeah yeah</span> <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                네가 알던 뻔한 모습의 나를 잊어 <u>오늘 <span class="h">歐能</span></u><br>
                숨겨둔 본능이 Shimmie up <span class="h">[E!X!O!]</span><br>

            </p>
        </div>
        <div class="lyric-item">
            <p>
                It goes <span class="h">down down</span> baby<br>
                리듬에 온몸을<br>
                It goes <span class="h">down down</span> baby<br>
                맡기고 소리쳐 <span class="h">Oh oh</span> oh 우린 <span class="h">Oh oh</span> Oh<br>
                We going <span class="h">Ko Ko Bop</span> <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                <span class="h">[E!X!O! E!X!O! E!X!O! E!X!O!]<br>
                Hey!<br>
                [E!X!O! E!X!O! E!X!O! Ko!Ko!Bop!]<br>
                </span>
            </p>
        </div>    
        <div class="lyric-item">
            <p>
                Shimmie shimmie <span class="h">Ko Ko Bop</span> <br>
                I think I like it<br>
                조금씩 <span class="h">down down</span> <br>
                수줍어 말고<br>
            </p>
        </div>    

            
        <div class="lyric-item">
            <p>
                누가 뭐래도 넌 신경 쓰지 말어<br>
                지금 이대로<span class="h">[Hey!]</span> 아름답기만 해<br>
                멈춰버렸음 해 Baby are you down?<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                Ah woo 마지막 밤이야<br>
                Ah woo 둘만의 밤이야<br>
                긴장하지 말고 다가와 <span class="h">Yeah yeah</span> <br>
                네 모든 걸 내게 맡겨봐 <span class="h">Yeah yeah</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                점점 풀려 가는 고삐 더 내려놔 <u>오늘 <span class="h">歐能</span></u><br>
                눈치 보지 말고 Shakin' up <span class="h">[EXO!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                It goes <span class="h">down down</span> baby<br>
                리듬에 온몸을<br>
                It goes <span class="h">down down</span> baby<br>
                맡기고 소리쳐 <span class="h">Oh oh</span> Oh 우린 <span class="h">Oh oh</span> Oh<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                Break it down now
                <span class="h">[E!X!O! E!X!O! E!X!O! E!X!O!]<br>
                Hey!<br>
                [E!X!O! E!X!O! E!X!O! E!X!O!]<br>
                </span>
                We go down now<br>
                <span class="h">[E!X!O! E!X!O! E!X!O! E!X!O!]<br>
                (Listen!)<br>
                [E!X!O! E!X!O! E!X!O! We!are!One!]<br>
                </span>
            </p>
        </div>  
        
        <div class="lyric-item">
            <p>
                밤은 깊어도 더 빛나는 너<br>
                너의 그 눈빛이 다 내게 말해 <br>
                기분 좋은 밤 넌 원하고 있어<br>
                알아 It's ok 이제 시작해<br>
                <span class="h">Let's go!</span> <br>
                It's about to go go
            </p>
        </div>
        <div class="lyric-item">
            <p>
                <span class="h">Down down </span>baby<br>
                리듬에 온몸을<br>
                It goes <span class="h">down down </span>baby<br>
                맡기고 소리쳐 <span class="h">Oh oh</span> Oh 우린 <span class="h">Oh oh</span> Oh<br>
                Going <span class="h">Ko Ko Bop</span> <br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
                <span class="h">Down down</span> baby<br>
                귓가에 속삭여<br>
                It goes <span class="h">down down </span>baby<br>
                내 맘을 불태워 <span class="h">Oh oh</span> Oh 미쳐 <span class="h">Oh oh</span> Oh<br>
                Going <span class="h">Ko Ko Bop</span><br>
            </p>
        </div>`
    },

    {
        id: "Power",
        title: "Power",
        category: "EXO",
        youtubeId: "sGRv8ZBLuW0", // YouTube 影片網址後的 ID
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/exo-power",
        videoRefUrl: "https://www.youtube.com/watch?v=m2eM1g6F1rM",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">[E! X! O!]</span><br>
머뭇거리지 마 <span class="h">move on</span><br>
자 시간이 없어<br>
너의 미래는 <u>바로 <span class="h">怕摟</span></u> 상상에 달렸어<br>
두려움 따윈 <u>버려 <span class="h">波六</span></u> 우린 그래도 돼<br>
모든 열쇤 너에게 있는데<br>
잠들지 않아도 꿈꾸던 널<br>
잊지 않기를 <u>바래 바래 <span class="h">趴ㄌㄟ 趴ㄌㄟ</span></u> 오늘 우리 함께<br>
신나게 한번 불태워 볼까<br>
꼭 하나 된 <span class="h">feeling feeling,</span> so turn me up<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We got that <span class="h">power power</span><br>
니가 나를 볼 때<br>
서로 같은 마음이 느껴질 때<br>
<span class="h">Power power</span><br>
더 강해지는걸<br>
Turn the music up now<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We got that <span class="h">power power</span><br>
이 음악을 통해<br>
같이 한목소리로 노래할 때<br>
<span class="h">Power power</span><br>
더 강해지는걸<br>
Turn the music up now<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Power power</span><br>
Turn the music up now<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
고민은 이제 그만 <span class="h">stop</span><br>
시간은 가 지금도 <span class="h">Tick tock</span><br>
We take a shot (<span class="h">we take a shot</span>)<br>
떠나자 we got bang bang pow wow<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
이어폰 타고 흘러나오는 멜로디로 시끄러운 소음 덮고 볼륨은 <span class="h">up high</span><br>
We got that power every time<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
잠들지 않아도 꿈꾸던 널<br>
잊지 않기를 <u>바래 바래 <span class="h">趴ㄌㄟ 趴ㄌㄟ</span></u> 오늘 다시 함께<br>
신나게 한번 불태워 볼까<br>
꼭 하나 된 <span class="h">feeling feeling,</span> so turn me up<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We got that <span class="h">power power</span><br>
니가 나를 볼 때<br>
서로 같은 마음이 느껴질 때<br>
<span class="h">Power power</span><br>
더 강해지는걸<br>
Turn the music up now<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We got that <span class="h">power power</span><br>
이 음악을 통해<br>
같이 한목소리로 노래할 때<br>
<span class="h">Power power</span><br>
더 강해지는걸<br>
Turn the music up now<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
지쳐 버리는 그날이 오면 기억해 babe<br>
아름다웠던 우릴<br>
다시 일어날 수 있는 그 힘은 니 안에 있다는걸<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We got that <span class="h">[E! X! O! Pow! er!]</span><br>
Oh, we got that, <span class="h">[E! X! O! Pow! er!]</span><br>
oh we got that, <mark><span class="h">[E! X! O! Pow! er!]</span></mark> <mark>oh yeah</mark> <br>
We got that <span class="h">[E! X! O! Pow! er!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
We got that <span class="h">power power</span><br>
이 음악을 통해<br>
같이 한목소리로 노래할 때<br>
<span class="h">Power power</span><br>
더 강해지는걸<br>
Turn the music up now<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<span class="h">Power power</span><br>
Turn the music up now<br>
We got that<br>
<p class="tip">●1 ●2 ●3 ●4 ●5 ●6 ●7 ●8 / ●2 ●2 ●3 ●4</p><br>
<span class="h">[We! are! EXO!]</span><br>
We got that<br>
            </p>
        </div>`
    },

    {
        id: "Tempo",
        title: "Tempo",
        category: "EXO",
        youtubeId: "iwd8N6K-sLk", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.musixmatch.com/lyrics/EXO-7/Tempo",
        videoRefUrl: "https://www.youtube.com/watch?v=LzNnvZr-WDM",
        lyricsHTML: `<div class="lyric-item">
            <p>
I can't believe <span class="h">[E! X! O!]</span><br>
기다렸던 이런 느낌<br>
나만 듣고 싶은 그녀는 나의 멜로디<br>
하루 종일 go on and on and oh<br>
떠나지 않게 그녈 내 곁에 yeah uh <span class="h">[Tem! po!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Don't mess up my <span class="h">tempo</span><br>
들어봐 이건 충분히<br>
I said don't mess up my <span class="h">tempo</span><br>
그녀의 맘을 훔칠 beat<br>
어디에도 없을 리듬에 맞춰 <span class="h">one two three</span><br>
Don't mess up my <span class="h">tempo</span><br>
멈출 수 없는 이끌림<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
매혹적인 넌 <span class="h">lovely</span><br>
틈 없이 좁혀진 <u>거리 <span class="h">摳立</span></u><br>
불규칙해지는 <span class="h">heartbeat</span><br>
잠시 눈을 감아 <span class="h">trust me</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
밖으로 나갈 채비 미리 해둬 Are you ready?<br>
오늘은 내가 <u>캐리 <span class="h">K裡</span></u> 도시 나 사이의 <u>케미 <span class="h">K咪</span></u><br>
이미 나와 놓곤 뭐가 창피해 ma boo<br>
어정쩡 어버버 할 필요 없다고<br>
챙길 건 없으니 손잡아 my lady<br>
가는 길마다 레드 카펫 또 런웨이인걸<br>
발걸음이 남달라<br>
지금 이 속도 맞춰보자 <span class="h">tempo</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Baby girl 아침을 설레게 하는 모닝콜<br>
매일 봐도 보고 싶은 맘인걸<br>
지금부터 나와 Let's get down <span class="h">[get down]</span><br>
모든 것이 완벽하게 좋아<br>
So don't slow it up for me<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Don't mess up my <span class="h">tempo</span><br>
들어봐 이건 충분히<br>
I said don't mess up my <span class="h">tempo</span><br>
그녀의 맘을 훔칠 beat<br>
어디에도 없을 리듬에 맞춰 <span class="h">one two three</span><br>
Don't mess up my <span class="h">tempo</span><br>
멈출 수 없는 이끌림<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
주윌 둘러봐 <span class="h">lovely</span><br>
틈 없이 좁혀진 <u>거리 <span class="h">摳立</span></u><br>
너에게 맞춰진 <span class="h">heartbeat</span><br>
하고 싶은 대로 <span class="h">teach me</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
여긴 내 구역 Don't test me<br>
혼자 있기 어색하다면 보내줘 message<br>
Now you got me flexin' <span class="h">[flexin']</span><br>
주윌 둘러봐<br>
널 보는 들러리들 속 위대한 개츠비 (Hold on wow)<br>
I'm doing alright baby girl you don't know<br>
치워 네 머리 위에 물음표<br>
내 사전에 없는 L.I.E<br>
너는 이미 자연스럽게 맞추고 있어 내 tempo<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Baby girl 내 어깨에 살짝 기댄 그대의<br>
아련한 향기가 다시 내 맘에<br>
소용돌이치며 몰아친다<br>
이대로 난 영원하고 싶다<br>
So don't mess up my tempo baby<br>
Don't slow it up for me<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Don't mess up my <span class="h">tempo</span><br>
Don't mess up my <span class="h">tempo</span><br>
Don't mess up my <span class="h">tempo</span><br>
Don't mess up my tempo whoa uh<br>
Don't mess up my <span class="h">tempo</span><br>
Don't mess up my <span class="h">tempo</span><br>
Don't mess up my <span class="h">tempo [E X O! Tem! po!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
내 눈을 바라보고 <u>말해 <span class="h">媽類</span></u><br>
나의 귓가에만 <u>닿게 <span class="h">大ㄍㄟ</span></u><br>
나만 사랑한다 <u>말해 <span class="h">媽類</span></u><br>
나밖에 없다고 <u>말해 <span class="h">媽類</span></u><br>
더 이상 흔들리지 <u>않게 <span class="h">按K</span></u><br>
절대 널 뺏기지 <u>않게 <span class="h">按K</span></u><br>
누구도 건들 수 <u>없게 <span class="h">歐ㄍㄟ</span></u><br>
내 곁에 너를 지킬게 <span class="h">[EXO! We! are! One!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
내 마음이 느껴지니<br>
나를 감싸 안은 유일한 나만의 savior<br>
모두 그런 널 바라보게 돼<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
I can't believe<br>
기다렸던 이런 느낌<br>
나만 듣고 싶은 그녀는 나의 멜로디<br>
하루 종일 go on and on and oh<br>
떠나지 않게 그녈 내 곁에<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Don't mess up my <span class="h">tempo</span><br>
따라와 이건 충분히<br>
I said don't mess up my <span class="h">tempo</span><br>
완전히 다른 색의 beat<br>
어디에도 없을 이런 완벽한 <span class="h">one two three</span><br>
Don't mess up my <span class="h">tempo</span><br>
멈출 수 없는 이끌림<br>
            </p>
        </div>`
    },

    {
        id: "OohLaLaLa",
        title: "닿은 순간 (Ooh La La La)",
        category: "EXO",
        youtubeId: "7XVPxbZ_C9Q", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.musixmatch.com/lyrics/EXO-7/Ooh-La-La-La",
        videoRefUrl: "https://www.youtube.com/watch?v=HQzBQwjXHtc",
        lyricsHTML: `<div class="lyric-item">
            <p>
고개를 돌리면<br>
눈이 마주치는 너 <span class="h">[E! X! O!]</span><br>
다시 한 번 또<br>
빤히 날 쳐다보는 걸<br>
그 미소는 좀 너무한 것 <u>같아 <span class="h">尬踏</span></u><br>
애태우듯 여유가 <u>넘쳐 <span class="h">no邱</span></u><br>
숨이 막혀 배려 없는 눈웃음에<br>
아마 그게 매력인 걸 아는 듯해 (<span class="h">yeah-yeah-yeah</span>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">La-la, la-la</span>) 너의 두 눈이 내게 속삭이는 건<br>
(<span class="h">La-la, la-la</span>) 다가오라는 것 같아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">Ooh-la-la-la</span>) 나를 허락해줘요<br>
(<span class="h">Ooh-la-la-la</span>) 너의 상상 속으로<br>
나 들어갈 테니 받아줘<br>
그 눈 속에서 춤을 춰<br>
(<span class="h">Ooh-la-la-la</span>) 시선이 닿은 순간<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
지금 이 순간 너와 나의 거리를<br>
가득 채워버린 거센 이 떨림은<br>
리듬이 되어 날 끌어당겨<br>
끌리는 대로 넌 몸을 맡겨<br>
Yeah, she knows<br>
알 듯 말 듯한 묘한 <u>미소 <span class="h">咪搜</span></u><br>
나를 자극한 호기<u>심도 <span class="h">心鬥</span></u><br>
꿰뚫은 채 보낸 신호 (yeah-yeah-yeah)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">La-la, la-la</span>) 살짝 열어둔 네 맘의 문을 열고<br>
(<span class="h">La-la, la-la</span>) 들어오라는 것 같아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">Ooh-la-la-la</span>) 나를 허락해줘요<br>
(<span class="h">Ooh-la-la-la</span>) 너의 상상 속으로<br>
나 들어갈 테니 받아줘<br>
그 눈 속에서 춤을 춰<br>
(<span class="h">Ooh-la-la-la,</span> yeah) 시선이 닿은 순간<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
이젠 진짜 움직여 <u>가볼까 <span class="h">嘎噗嘎</span></u><br>
어떤 첫마디라면 <u>좋을까 <span class="h">糗ㄦ嘎</span></u><br>
고민에 싸여 멈칫한 그 순간<br>
네가 자릴 일어나서 걸어가<br>
단호한 뒷모습은 보란 듯이 <u>멀어져도 <span class="h">摸摟糾豆</span></u><br>
느린 발걸음은 오란 듯이 <u>애매모호 <span class="h">ㄟ每摸吼</span></u><br>
Girl just tell me what you like (you like, you like, you like)<br>
서두르라는 것 같아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(<span class="h">Ooh-la-la-la</span>) 나를 허락해줘요<br>
(<span class="h">Ooh-la-la-la,</span> ooh-ooh) 너의 현실 속으로<br>
나 다가갈 테니 잡아줘 (ooh-ooh-ooh)<br>
기다렸다고 말해줘<br>
(<span class="h">Ooh-la-la-la</span>) 너에게 닿은 순간<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(Ah-hoo) 지금 네게 다가가<br>
(Ah-hoo) 가까워진 너와 나<br>
<span class="h">[E! X! O!]</span><br>
            </p>
        </div>`
    },

    {
        id: "LoveShot",
        title: "Love Shot",
        category: "EXO",
        youtubeId: "pSudEWBAYRE", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.musixmatch.com/lyrics/EXO-7/Love-Shot",
        videoRefUrl: "https://www.youtube.com/watch?v=XtXqgCKVk3U",
        lyricsHTML: `<div class="lyric-item">
            <p>
<span class="h">[E X O! We! are! One!]</span><br>
차갑도록 서롤 겨눈 채<br>
날이 선 듯 그 목소리엔<br>
숨막히는 것만 가득해<br>
Oh oh oh oh oh<br>
Aye ye<br>
눈을 가린 채로 그렇게<br>
굳게 닫아버린 서로의<br>
맘이 애써 외면하는 걸<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Ah 타들어가<br>
갈라질 듯 숨이 막혀와<br>
갈증이 나<br>
이 한 잔을 가득히 담아<br>
넘칠 듯한<br>
위태론 오늘 밤을 난<br>
Ah ah<br>
<span class="h"> [Lo! ve! shot!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
It's the love shot<br>
Na nanana nananana<br>
Na nanana nanana<br>
Na nanana nananana<br>
Oh oh oh oh oh<br>
It's the <span class="h">love shot</span><br>
Na nanana nananana<br>
Na nanana nanana<br>
Na nanana nananana<br>
Oh oh oh oh oh<br>
It's the <span class="h">love shot</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
비틀려버린 love & hate<br>
아름다웠던 기억들<br>
하얗게 물들여져<br>
조금씩 바래어가<br>
매일 더 깊어져 calm down <span class="h">[calm down]</span><br>
상처가 되는 <u>말과 <span class="h">賣刮</span></u><br>
검게 타버린 마음 Where is love?<br>
Yeah yeah yeah yeah<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
눈과 귀를 막고<br>
억지로 헤매봐도 결국 정답은 love<br>
too much ego에 주린 배를 불리고<br>
비어버린 한 잔의 compassion<br>
이제 다시 채워 들어보자 다<br>
Ah ah <span class="h">[Lo! ve! shot!]</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
It's the love shot<br>
Na nanana nananana<br>
Na nanana nanana<br>
Na nanana nananana<br>
Oh oh oh oh oh<br>
It's the <span class="h">love shot</span><br>
Na nanana nananana<br>
Na nanana nanana<br>
Na nanana nananana<br>
Oh oh oh oh oh<br>
It's the <span class="h">love shot</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
People come and people go<br>
세상에 멈춰선 너와 난<br>
무뎌진 감정들에<br>
서서히 익숙해져가<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
심장이 타<br>
메마르다 갈라질 듯한<br>
믿음에 난<br>
너로 적셔 틈을 채워가<br>
꺼질 듯한<br>
내 맘에 불을 붙여놔<br>
<span class="h">[E! X! O!]</span><br>
Yeah<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
It's the love shot<br>
Na nanana nananana<br>
Na nanana nanana<br>
Na nanana nananana<br>
Oh oh oh oh oh<br>
It's the <span class="h">love shot</span><br>
Na nanana nananana<br>
Na nanana nanana<br>
Na nanana nananana<br>
Oh oh oh oh oh<br>
It's the <span class="h">love shot</span><br>
            </p>
        </div>`
    },

    {
        id: "Obsession",
        title: "Obsession",
        category: "EXO",
        youtubeId: "uxmP4b2a0uY", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.musixmatch.com/lyrics/EXO-7/Obsession",
        videoRefUrl: "https://www.youtube.com/watch?v=CRxUkmJnjzM",
        lyricsHTML: `<div class="lyric-item">
            <p>
<p class="tip">背景音:I Want You I Want You Want You</p><br>
<span class="h">[I Want You I Want You Want You]</span><br>
<p class="tip">背景音:I Want You I Want You Want You</p><br>
<span class="h">[I Want You I Want You Want You]</span><br>
<p class="tip">背景音:I Want You I Want You Want You</p><br>
<span class="h">[I Want You I Want You Want You! We! are! EXO!]</span><br>
제발 이제 그만<br>
밤이 눈을 멀게 끔 하니<br>
넌 또 몰래 숨어들었지<br>
잠든 귓가 쓱 핥다 쳐다보다<br>
할퀴곤 웃어대<br>
끝도 없이 속삭이는 목소리<br>
Oh, you're the bad dream kill<br>
나를 홀려 자꾸 불러<br>
너 있는 곳 그래 네게 오라고<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
날 안다고? (<span class="h">I don't think so</span>)<br>
뭔데 내게 파고들어 (<span class="h">I don't think so</span>)<br>
넌 내 눈을 가려 (<span class="h">I don't think so</span>)<br>
진실들을 덮어 (<span class="h">I don't think so</span>)<br>
헛된 꿈 버려 (<span class="h">I don't think so</span>)<br>
독을 뱉게 하지 마 (<span class="h">I don't think so</span>)<br>
넌 날 다신 못 가져 (<span class="h">I don't think so</span>)<br>
Shut up and go away<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Thousand nights 지겹도록 말했어<br>
쫓고 쫓는 악몽 이젠 끝낼게<br>
<span class="h">[不利 靠近 exit light]</span><br>
불이 꺼진 exit light<br>
이제 그만 꺼져 줄래 내게서<br>
<span class="h">[Obsession E X O! We! are! EXO! <br>
Obsession E X O! We! are! EXO!]</span><br>
Ha! 그만해 둬<br>
내 귓속에 쏟아대는 소리 Imma let it blow<br>
오감은 그것으로 쏠리고 곤두서고<br>
들어온 너는 제멋대로 휘저어<br>
한눈을 뜬 채로 잠들면<br>
소리 없이 스며드는 the phantom<br>
I'm so sick and tired of it<br>
불이 켜지면 네가 사라져 있길<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
날 위한다고? (<span class="h">I don't think so</span>)<br>
뭔데 내게 파고들어 (<span class="h">I don't think so</span>)<br>
깊게 스며들어 (<span class="h">I don't think so</span>)<br>
혼란스러워 (<span class="h">I don't think so</span>)<br>
Take whatever (<span class="h">I don't think so</span>)<br>
보이지도 마라 (<span class="h">I don't think so</span>)<br>
넌 날 다신 못 가져 (<span class="h">I don't think so</span>)<br>
집착하지 좀 마<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Thousand nights 지겹도록 말했어<br>
쫓고 쫓는 악몽 이젠 끝낼게<br>
<span class="h">[不利 靠近 exit light]</span><br>
불이 꺼진 exit light<br>
이제 그만 꺼져 줄래 내게서<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Blacken my heart<br>
Creepin' dark night<br>
Stainin' my soul<br>
잠든 듯 눈을 뜨면 거친 소름과<br>
선명한 그것의 흔적과<br>
주인 없는 names on the ground<br>
불러내 춤을 춰 tonight<br>
Say it what you like<br>
그래 너와 행복했었던<br>
시간들을 알아<br>
이젠 끝내야 한다는 걸<br>
Forget everything yeah<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
날 안다고? (<span class="h">I don't think so</span>)<br>
뭔데 내게 파고들어 (<span class="h">I don't think so</span>)<br>
넌 내 눈을 가려 (<span class="h">I don't think so</span>)<br>
진실들을 덮어 (<span class="h">I don't think so</span>)<br>
헛된 꿈 버려 (<span class="h">I don't think so</span>)<br>
독을 뱉게 하지 마 (<span class="h">I don't think so</span>)<br>
넌 날 다신 못 가져 (<span class="h">I don't think so</span>)<br>
Shut up and go away<br>
Thousand nights 지겹도록 말했어<br>
쫓고 쫓는 악몽 이젠 끝낼게<br>
<span class="h">[不利 靠近 exit light]</span><br>
불이 꺼진 exit light<br>
이제 그만 꺼져 줄래 내게서<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
One night 어둠 속에 보인 건<br>
나를 쫓던 기묘했던 그림자<br>
<span class="h">[不利 靠近 exit light]</span><br>
불이 꺼진 exit light<br>
거울 속의 나를 보고 있는 나<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
내게서 사라져<br>
꺼져<br>
<u>내게서 사라져 <span class="h">內給搜 撒浪糾</span></u><br>
            </p>
        </div>`
    },

    {
        id: "Whatalife",
        title: "What a life",
        category: "EXO-SC",
        artist: "EXO-SC", 
        youtubeId: "AtNBhPxVwh0", // YouTube 影片網址後的 ID
        sourceUrl: "https://www.musixmatch.com/lyrics/EXO-SC/What-a-life",
        videoRefUrl: "https://www.youtube.com/watch?v=mK6loPe20Qc&list=PLxQWlnu8ukqo5UzK3iPLVzjLKyJ37HtLn&index=17",
        lyricsHTML: `<div class="lyric-item">
            <p>
Mmm, uh huh, mmm, yeah<br>
<span class="h">[Park Chan Yeo! Oh Se Hun! What! a! Li! fe!]</span><br>
시스템 종료를 <span class="h">click</span><br>
오늘 미세먼지는 <span class="h">free</span><br>
차 키 챙겨서 나가<br>
오랜만에 도론 뻥 뚫렸으니<br>
시간 되는 애들 나와<br>
동그랗게 모여서 회의<br>
동그라미 네모 세모 엑스<br>
지겹잖아 매일 게임<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
그래서 오늘 어디로 갈까 <span class="h">[尬嘎]</span><br>
번개처럼 인천공항으로 갈까 <span class="h">[尬嘎]</span><br>
구름 찢으며 파란 하늘을 날까<br>
옆 나라에서 별 보는 것도 좋아 yeah<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
날씨는 so amazing (<span class="h">amazing</span>)<br>
재미난 일이 생길 듯해<br>
계획 없으면 뭐 어때 (<u>어때, <span class="h">歐ㄉㄟˋ</span></u> 어때)<br>
We are still young and free<br>
(<span class="h">Uno, dos, tres</span>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>나는 놀려고 일해 <span class="h">那愣no六購依ㄌㄟA</span></u><br>
<u>일도 놀 때처럼 해 너는 어때 <span class="h">依都no 貼秋龍 黑no尼no ㄉㄟˋ</span></u><br>
<u>매일 노는 것 같아 신선 같아 <span class="h">妹依 no愣 勾卡貼 新搜ca貼A</span></u><br>
<span class="h">What a life, what a life, what a life<br>
What a life, what a life, what a life<br>
What a life, what a life</span><br>
<u>나는 놀려고 일해 <span class="h">那愣no六購依ㄌㄟA</span></u><br>
<u>일도 놀 때처럼 해 너는 어때 <span class="h">依都no 貼秋龍 黑no尼no ㄉㄟˋ</span></u><br>
<u>매일 노는 것 같아 신선 같아 <span class="h">妹依 no愣 勾卡貼 新搜ca貼A</span></u><br>
<span class="h">What a life, what a life, what a life<br>
What a life, what a life, what a life<br>
What a life, what a life</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
(Yeah ah!) 젊고 자유롭지<br>
성격은 모서리가 없어<br>
친구들은 내 주변에<br>
빙 둘러앉아 있지<br>
난 신선 같고 <u>신선해 <span class="h">欣賞嘿</span></u><br>
난 친척 같고 <u>친절해 <span class="h">清嗆嘿</span></u><br>
내 지갑은 오늘 끄떡없네<br>
Do you wanna get down <span class="h">with me?</span><br>
그래서 오늘 밤엔 어디로 갈까<span class="h">[尬嘎]</span><br>
클럽은 뻔해 거리가 차라리 낫잖아<br>
<u>야자수, <span class="h">呀加速</span></u> 옆에 바닷가도 난 좋아<br>
Day and night 시동 걸렸지<br>
오늘은 뭔가 될 것 같아<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
밤공기는 so amazing (<span class="h">amazing</span>)<br>
재미난 일이 생길 듯해<br>
계획 없으면 뭐 어때 (<u>어때, <span class="h">歐ㄉㄟˋ</span></u> 어때)<br>
We are still young and free<br>
(<u>하나, 둘, 셋 <span class="h">哈娜, 吐, ㄙㄟˋ</span></u>)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>나는 놀려고 일해 <span class="h">那愣no六購依ㄌㄟA</span></u><br>
<u>일도 놀 때처럼 해 너는 어때 <span class="h">依都no 貼秋龍 黑no尼no ㄉㄟˋ</span></u><br>
<u>매일 노는 것 같아 신선 같아 <span class="h">妹依 no愣 勾卡貼 新搜ca貼A</span></u><br>
<span class="h">What a life, what a life, what a life<br>
What a life, what a life, what a life<br>
What a life, what a life</span><br>
<u>나는 놀려고 일해 <span class="h">那愣no六購依ㄌㄟA</span></u><br>
<u>일도 놀 때처럼 해 너는 어때 <span class="h">依都no 貼秋龍 黑no尼no ㄉㄟˋ</span></u><br>
<u>매일 노는 것 같아 신선 같아 <span class="h">妹依 no愣 勾卡貼 新搜ca貼A</span></u><br>
<span class="h">What a life, what a life, what a life<br>
What a life, what a life, what a life<br>
What a life, what a life</span><br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
Life is good (Life is good)<br>
Life is good (Life is good), yeah<br>
열심히 <u>놀고 <span class="h">no狗</span></u> 신나게 <u>벌어 <span class="h">波囉</span></u><br>
오늘 공기처럼 내 기분은<br>
완전 <span class="h">fresh</span> 해<br>
낮과 밤은 길기에 내일 걱정은 짧게 (yeh, yeh, yeh, yeh)<br>
            </p>
        </div>
        <div class="lyric-item">
            <p>
<u>나는 놀려고 일해 <span class="h">那愣no六購依ㄌㄟA</span></u><br>
<u>일도 놀 때처럼 해 너는 어때 <span class="h">依都no 貼秋龍 黑no尼no ㄉㄟˋ</span></u><br>
<u>매일 노는 것 같아 신선 같아 <span class="h">妹依 no愣 勾卡貼 新搜ca貼A</span></u><br>
<span class="h">What a life, what a life, what a life<br>
What a life, what a life, what a life<br>
What a life, what a life</span><br>
<u>나는 놀려고 일해 <span class="h">那愣no六購依ㄌㄟA</span></u><br>
<u>일도 놀 때처럼 해 너는 어때 <span class="h">依都no 貼秋龍 黑no尼no ㄉㄟˋ</span></u><br>
<u>매일 노는 것 같아 신선 같아 <span class="h">妹依 no愣 勾卡貼 新搜ca貼A</span></u><br>
<span class="h">What a life, what a life, what a life<br>
What a life, what a life, what a life<br>
What a life, what a life</span><br>
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