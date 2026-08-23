// 1. 歌曲資料庫 (你可以自由在這邊增加新歌)
const songDatabase = [
    {
        id: "DALLADALLA",
        title: "DALLA DALLA",
        category: "ITZY",
        youtubeId: "pNfTK39k55U",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/KliISiPoBZNADgzBbQ",
        videoRefUrl: "https://www.youtube.com/watch?v=9awV8pa5r_0",
        lyricsHTML: `<p>
다달라달라달라 <br>
<P class="tip">數一個八拍</P> <br>
<span class="h">[YE JI! LI A! RYU JIN! CHAER YEONG! YU NA! IT ZY! 他拉 他拉]</span> <br>
다달라달라달라<br>
People look at me and they tell me<br>
외모만 보고 내가 날라리 같대요 (no, no)<br>
<span class="h">So what?</span> 신경 안 써 (no)<br>
I'm sorry, I <span class="h">don't care, don't care</span><br>
Really don't care (b-b-b-because)<br>
            </p>
            <p>
사랑 따위에 목매지 않아 (<span class="h">hey</span>)<br>
세상엔 재밌는 게 더 많아 (<span class="h">hey</span>)<br>
언니들이 말해 철들려면 멀었대 (I'm <span class="h">sorry, sorry</span>)<br>
철들 생각 없어요 (<span class="h">nope</span>)<br>
            </p>
            <p>
예쁘기만 하고 매력은 없는<br>
애들과 난 <u>달라, 달라, 달라 <span class="h">他拉 他拉 他拉</span></u>  (다달라달라)<br>
네 기준에 날 맞추려 하지 마<br>
난 지금 내가 <u>좋아 나는 나야 <span class="h">處阿 那能 那呀</span></u>  (다달라달라달라)<br>
            </p>
            <p>
I love myself (hey!)<br>
난 뭔가 <u>달라, 달라, <span class="h">他拉 他拉</span></u>  yeah (oh, oh-oh)<br>
I love myself (hey!)<br>
난 뭔가 <u>달라, 달라, <span class="h">他拉 他拉</span></u> yeah<br>
난 너랑 달라, 달라, yeah<br>
            </p>
            <p>
Bad, bad, I'm sorry, I'm <span class="h">bad</span>, I'm just the way I <span class="h">am</span><br>
남 신경 쓰고 살긴 아까워<br>
하고 싶은 일 하기도 바빠<br>
My life (<span class="h">my life</span>), 내 맘대로 살 거야 말리지 마 (<u>말리지 마 <span class="h">媽哩機嘛</span></u> )<br>
난 특별하니까, <span class="h">yeah</span><br>
            </p>
            <p>
남들의 시선 중요치 않아 (<span class="h">hey</span>)<br>
내 style이 좋아 그게 나니까 (<span class="h">hey</span>)<br>
언니들이 말해 내가 너무 당돌하대 (I'm <span class="h">sorry, sorry</span>)<br>
바꿀 생각 없어요 (nope)<br>
            </p>
            <p>
예쁘기만 하고 매력은 없는<br>
애들과 난 <u>달라, 달라, 달라 <span class="h">他拉 他拉 他拉</span></u>  (다달라달라)<br>
네 기준에 날 맞추려 하지 마<br>
난 지금 내가 <u>좋아 나는 나야 <span class="h">處阿 那能 那呀</span></u>   (다달라달라달라)<br>
            </p>
            <p>
Don't care what people say, 나는 내가 알아<br>
I'm talkin' to myself 기죽지 마 절대로<br>
고개를 들고 네 꿈을 쫓아<br>
Just keep on dreamin', woah<br>
Keep your chin up, <span class="h">we got your back</span> (hey)<br>
Keep your head up <span class="h">just keep on dreamin'</span> (yeah)<br>
Keep your chin up, <span class="h">we got your back</span> (hey)<br>
Keep your head up <span class="h">just keep on dreamin'</span> (everybody)<br>
            </p>
            <p>
예쁘기만 하고 매력은 없는<br>
애들과 난 <u>달라, 달라, 달라 <span class="h">他拉 他拉 他拉</span></u> (다달라달라)<br>
네 기준에 날 맞추려 하지 마<br>
난 지금 내가 <u>좋아 나는 나야 <span class="h">處阿 那能 那呀</span></u> (다달라달라달라)<br>
            </p>
            <p>
I love myself (hey!)<br>
난 뭔가 <u>달라, 달라, <span class="h">他拉 他拉</span></u>  <span class="h"> yeah</span><br>
I love myself (hey!)<br>
난 뭔가 <u>달라, 달라, <span class="h">他拉 他拉</span></u><span class="h"> yeah</span><br>
난 너랑 달라, 달라, yeah <br>
<span class="h">[他拉 他拉]</span><br>
            </p>`
    },
    {
        id: "ICY",
        title: "ICY",
        category: "ITZY",
        youtubeId: "zndvqTc4P9I",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/SqXkoyl9V6ObxbJF91",
        videoRefUrl: "https://www.youtube.com/watch?v=vSscRadt7mI",
        lyricsHTML: `<p>
Hey, hey, hey, YO!<br>
Whoo <span class="h">beep beep</span><br>
<mark><span class="h">[YE JI! LI A! RYU JIN! CHAER YEONG! YU NA! IT ZY! It's! I CY!]</span><br>
Hey, hey, hey, hey, hey, hey<br>
I see that I'm ICY<br>
Go rising, up, up<br>
I see that I'm ICY</mark><br>
            </p>
            <p>
차갑게 보여도 어떡해 cool 한 나니까<br>
눈치 볼 마음 없어 (<span class="h">oh-oh-oh, come on!</span>)<br>
당당하게 let it go (<span class="h">here we go</span>)<br>
길거리를 누비고 (<span class="h">on a roll</span>)<br>
Background music 이 깔려 (<span class="h">bomb, bomb, bomb, bomb</span>)<br>
            </p>
            <p>
Icy but I'm on fire<br>
내 안에 있는 dream 난 자신 있어<br>
날 봐 I'm not a liar<br>
너의 틀에 날 맞출 맘은 없어 (dance)<br>
            </p>
            <p>
다들 <span class="h">blah, blah</span><br>
참 말 많아 난 괜찮아<br>
계속 <span class="h">blah, blah</span><br>
They keep talkin”I keep walkin”<br>
다들 <span class="h">blah, blah</span><br>
참 말 많아 난 괜찮아<br>
계속 <span class="h">blah, blah</span><br>
They keep talkin”I keep walkin”<br>
            </p>
            <p>
Ring, ring, ring 울려 all day long<br>
모두 날 찾느라 <u>바빠 <span class="h">趴爸</span></u> (바빠)<br>
이 노래가 your favorite song<br>
그렇게 될 걸 잘 <u>알아 <span class="h">阿辣</span></u><br>
<span class="h">Hey</span>, 이 맛은 마치 (oh)<br>
<u>딱 <span class="h">大</span></u>  살얼음같이 (같이)<br>
Bling, bling, bling 반짝이는 걸 (yeah)<br>
별빛같이 <span class="h">ICY</span><br>
Oh, shout out to 내 <u>엄마 <span class="h">喔罵</span></u> (hey)<br>
Thank you to 우리 <span class="h">papa</span><br>
좋은 것만 쏙 빼닮아 (<u>짠짠짜짠짠짠 <span class="h">讚讚架讚讚讚</span></u>)<br>
            </p>
            <p>
당당하게 let it go (<span class="h">here we go</span>)<br>
길거리를 누비고 (<span class="h">on a roll</span>)<br>
Background music 이 깔려 (<span class="h">bomb, bomb, bomb, bomb</span>)<br>
Icy but I'm on fire<br>
내 안에 있는 dream 난 자신 있어 (oh-oh, oh)<br>
날 봐 I'm not a liar<br>
너의 틀에 날 맞출 맘은 없어<br>
            </p>
            <p>
다들 <span class="h">blah, blah</span><br>
참 말 많아 난 괜찮아<br>
계속 <span class="h">blah, blah</span><br>
They keep talkin”I keep walkin”<br>
다들 <span class="h">blah, blah</span><br>
참 말 많아 난 괜찮아<br>
계속 <span class="h">blah, blah</span><br>
They keep talkin”I keep walkin”<br>
            </p>
            <p>
Get it (hey)<br>
Shake it (hey)<br>
Yeah, come on girls!<br>
더더 빨리 달려 don't care <span class="h">what they say</span><br>
내 답은 내가 아니까 <span class="h">it's okay</span> (dan-dan-dan-dance)<br>
Up, up, up, up, up we go<br>
끝없이 위로, 위로 절대 멈추지 않고<br>
No one can stop us now blah, blah<br>
참 말 많아 난 괜찮아<br>
            </p>
            <p>
계속 <span class="h">blah, blah</span><br>
They keep talkin”I keep walking “(yeah!)<br>
다들 <span class="h">blah, blah</span><br>
참 말 많아 난 괜찮아<br>
계속 <span class="h">blah, blah</span> (whoo!)<br>
They keep talkin”I keep walkin” (yeah)<br>
            </p>
            <p>
I see that I'm ICY<br>
I see that I'm ICY<br>
<mark><span class="h">[YE JI! LI A! RYU JIN! CHAER YEONG! YU NA! IT ZY! MID ZY! 那架！]</span><br>
I see that I'm ICY<br>
I see that I'm ICY</mark><br>
            </p>`
    },
    {
        id: "WANNABE",
        title: "WANNABE",
        category: "ITZY",
        youtubeId: "fE2h3lGlOsk",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/DXfVIiRSg_DL-5Fi9f",
        videoRefUrl: "https://www.youtube.com/watch?v=ex3UTrHDlrU",
        lyricsHTML: `<p>
<span class="tip">前奏開始播放兩個八拍後開始應援</span><br>
<span class="h">[YE JI! LI A! RYU JIN! CHAER YEONG! YU NA! IT ZY! WA! NA! BE!]</span><br>
잔소리는 Stop it <span class="h">[WOAH]</span><br>
알아서 할게 <span class="h">[YEAH]</span><br>
내가 뭐가 되든<br>
내가 알아서 할 테니<u>까 좀 <span class="h">嘎冏</span></u><br>
I do what I wanna <span class="h">[怕！怕！怕！]</span><br>
평범하게 살든 말든 내버려 둘래<br>
어차피 내가 살아 내 인생 <u>내거니까 <span class="h">內購逆嘎</span></u><br>
I’m so <span class="h">bad bad</span> 차라리 이기적일래<br>
눈치 보느라 착한 척<br>
상처받는 것보다 <u>백번 나아 <span class="h">配蹦那阿</span></u><br>
I’m just on my way <span class="h">[喔齁]</span> 간섭은 No No 해 <span class="h">[OK]</span><br>
말해버릴지도 몰라 너나 <u>잘하라고 <span class="h">掐拉拉勾</span></u><br>
            </p>
            <p>
누가 뭐라 해도 난 나야<br>
난 그냥 내가 되고 싶어<br>
I wanna be <span class="h">me , me , me</span><br>
굳이 뭔가 될 필요는 없어<br>
난 그냥 나일 때 완벽하니까<br>
I wanna be , <span class="h">me , me , me</span><br>
            </p>
            <p>
I don’t wanna be somebody<br>
Just wanna be me , be me<br>
I wanna be <span class="h">me , me , me</span><br>
I don’t wanna be somebody<br>
Just wanna be me , be me<br>
I wanna be <span class="h">me , me , me</span><br>
            </p>
            <p>
<span class="h">[Ready! Action!]</span><br>
Errbody errbody errbody teachin’ me (<span class="h">All eyes on me</span>)<br>
이래라 저래라 모두 한마디씩 (<span class="h">Don’t touch me</span>)<br>
Ah yeah yeah <span class="h">yeah yeah yeah</span><br>
내 앞가림은 내가 해<br>
I’mma do my thang,Just do your thang<br>
Cuz I’m the <span class="h">one and only</span><br>
사람들은 남 말 하기를 좋아해 <span class="h">[拉拉拉]</span><br>
남의 인생에 뭔 관심이 많아 왜 <span class="h">[拉拉拉]</span><br>
저기 미안하지만 신경 좀 꺼줄래요<br>
            </p>
            <p>
It’s none of your business<br>
I do my own business <span class="h">[叮]</span><br>
            </p>
            <p>
누가 뭐라 해도 난 나야<br>
난 그냥 내가 되고 싶어<br>
I wanna be <span class="h">me , me , me</span><br>
굳이 뭔가 될 필요는 없어<br>
난 그냥 나일 때 완벽하니까<br>
I wanna be <span class="h">me , me , me</span><br>
            </p>
            <p>
<span class="tip">在第四拍喊 (x2)</span><span class="h">[HEY!]x2</span><br>
No matter if you love me or hate me<br>
<span class="tip">在第四拍喊 (x2)</span><span class="h">[HEY!]x2</span><br>
I wanna be me<br>
One and only me<br>
If you feel me turn this beat up<br>
I wanna be <span class="h">me , me , me</span><br>
            </p>
            <p>
누가 뭐라 해도 난 나야<br>
난 그냥 내가 되고 싶어<br>
I wanna be <span class="h">me , me , me</span><br>
굳이 뭔가 될 필요는 없어<br>
난 그냥 나일 때 완벽하니까<br>
I wanna be <span class="h">me , me , me</span><br>
            </p>
            <p>
I don’t wanna be somebody<br>
Just wanna be me , be me<br>
I wanna be <span class="h">me , me , me</span><br>
I don’t wanna be somebody<br>
Just wanna be me , be me<br>
I wanna be <span class="h">me , me , me</span><br>
            </p>`
    },
    {
        id: "NONO",
        title: "THAT'S A NO NO",
        category: "ITZY",
        youtubeId: "vZ73LNekY3A",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/itzy-thats-a-no-no",
        videoRefUrl: "https://www.youtube.com/watch?v=iqrq5I77JAc",
        lyricsHTML: `<p>
(Ah ya ya, uh uh uh)<br>
(Ah ya ya rum pa pa pa)<br>
(Ah ya ya, uh uh uh)<br>
(Ah ya ya)<br>
<span class="h">[HwangYeji! ChoiJisu! ShinRyujin! LeeChaeryeong! ShinYuna! ITZY! THAT'S! A! NO! NO!]</span><br>
            </p>
            <p>
태생이 그래 난 흥이 넘쳐<br>
열일곱 살인데 뭐 그래봤자<br>
노느라 <U>바빠 <span class="h">怕爸</span></U> 밀린 내 <U>답장 <span class="h">大駕</span></U> <br>
Well made 걱정이 분에 넘쳐<br>
<span class="h">Ooh</span> move up faster faster<br>
<span class="h">Ooh</span> gettin' louder louder<br>
<span class="h">Ooh</span> 즐거웠으면 돼 that's all<br>
거기까지 don't ask no questions<br>
            </p>
            <p>
무례하든 말든 어설픈 그 말론<br>
Can't let you kill my vibe, <span class="h">that's a no no</span><br>
Sorry, I beg your pardon<br>
시들길 바랐다면 말했을 텐데 I told ya<br>
That's a no no<br>
            </p>
            <p>
<span class="h">(hoo)</span>Ah ya ya ya ya <br>
<span class="h">(ha!)</span> uh uh uh <br>
<span class="h">(hoo)</span> ah ya ya ya ya<br>
Do what I want<br>
Say what I wanna (hoo)<br>
<span class="h">(hoo)</span>Ah ya ya ya ya <br>
<span class="h">(ha!)</span> uh uh uh <br>
<span class="h">(hoo)</span> ah ya ya ya ya<br>
Do what I want<br>
Say what I wanna<br>
            </p>
            <p>
Hit that thang like a drum <span class="h">ta ta</span><br>
Rum pa pa pum pa pa pum <span class="h">pa pa</span><br>
밤새워 밤새워 춤을 춰 내 몸이 <u>착착 <span class="h">恰恰</span></u> 리듬을 <u>타 타 <span class="h">搭搭</span></u> <br>
Blow that thang like a brass <span class="h">bam bam</span><br>
Rum pa pa pum pa pa pum <span class="h">pa pa</span><br>
내 춤이 멈추지 않도록 <br>
say that's a <span class="h">no no</span>, that's a <span class="h">no no</span><br>
            </p>
            <p>
혹시 내가 무너지길 바랐다면 안타깝지만 that's no, I'm sorry<br>
I'm gonna keep singing<br>
I'm gonna keep dancing<br>
무서울게 없어 난<br>
<span class="h">[THAT'S! A! NO! NO!]</span><br>
            </p>
            <p>
Hit that thang like a drum <span class="h">ta ta</span><br>
Rum pa pa pum pa pa pum <span class="h">pa pa</span><br>
밤새워 밤새워 춤을 춰 내 몸이 <U>착착 <span class="h">恰恰</span></U> 리듬을 <U>타 타 <span class="h">搭搭</span></U> <br>
Blow that thang like a brass <span class="h">bam bam</span><br>
Rum pa pa pum pa pa pum <span class="h">pa pa</span><br>
내 춤이 멈추지 않도록 <br>
say that's a <span class="h">no no</span>, that's a <span class="h">no no</span> <br>
            </p>
            <p>
<span class="h">(hoo)</span>Ah ya ya ya ya <br>
<span class="h">(ha!)</span> uh uh uh <br>
<span class="h">(hoo)</span> ah ya ya ya ya<br>
That's a no no (hoo)<br>
<span class="h">(hoo)</span>Ah ya ya ya ya <br>
<span class="h">(ha!)</span> uh uh uh <br>
<span class="h">(hoo)</span> ah ya ya ya ya<br>
That's a no no<br>
            </p>`
    },
    {
        id: "NotShy",
        title: "Not Shy",
        category: "ITZY",
        youtubeId: "wTowEKjDGkU",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/WpQwQvcraMOw9czEKG",
        videoRefUrl: "https://www.youtube.com/watch?v=b8ppkUB75s0&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=4",
        lyricsHTML: `<p>
Not shy, not me (<span class="h">ITZY</span>)<br>
난 다 원해 다다 (<span class="h">Yeah</span>)<br>
Not shy, not me<br>
<span class="h">[ITZY! MIDZY! NOT! SHY! E!]</span><br>
            </p>
            <p>
난 빨리빨리 원하는 걸 말해<br>
못 가지면 어때 <u>괜히 <span class="h">ㄍㄟ逆</span></u><br>
망설이다 시간만 가니<br>
Yeah 다 말할래 'cause I like it, 'cause I <span class="h">like it, like it</span><br>
기다려 왜? 기다려서 뭐해?<br>
내가 내 맘을 왜 (왜) 말하면 안 돼 <span class="h">yeah</span><br>
그냥 탁 그냥 <u>탁탁탁탁탁 <span class="h">踏踏踏！踏！踏！</span></u><br>
Not shy to say I want you<br>
            </p>
            <p>
Hey there, hey there<br>
<u>우리는 <span class="h">屋哩能</span></u><br>
 great pair, great pair<br>
<u>네 맘이 <span class="h">ㄋㄧ媽咪</span></u> <br>
뭔지 모르지만 ah 내 생각이<br>
맞아 그러니까 ah <span class="h">yeah yeah</span><br>
내 맘은 내 거 <U>그러니까 <span class="h">可摟ㄋㄧ嘎</span></U><br>
좋아한다고 <u>자유니까 <span class="h">家youㄋㄧ嘎</span></u><br>
네 맘은 네 거 <u>맞으니까 <span class="h">媽資ㄋㄧ嘎</span></u><br>
말해봐 다 어서 다 'cause I'm <span class="h">not shy</span><br>
            </p>
            <p>
Not shy, not me (<span class="h">ITZY</span>)<br>
난 다 원해 다다 (<span class="h">Not shy</span>)<br>
Not shy, not me<br>
Give me 다 다다 <u>다다다 다다 <span class="h">大大大！大大！</span></u><br>
Not shy, not me (<span class="h">ITZY</span>)<br>
난 다 원해 다다 (<span class="h">Not shy</span>)<br>
Not shy, not me<br>
너를 원해 뭐 어때 'cause I'm <span class="h">not shy</span><br>
            </p>
            <p>
넌 빨리빨리 대답할 필욘 없어<br>
어차피 내 거니까 woo<br>
날 보고 있기만 하면 돼<br>
Yeah you will like it, 'cause you like it, 'cause you <span class="h">like it, like it</span><br>
내가 미워 아니라면 비워<br>
다른 건 다 지워 내가 네 only one, <span class="h">yeah</span><br>
그냥 싹 지워 <u>싹싹싹싹싹 <span class="h">颯颯颯！颯颯！</span></u><br>
Not shy to say I want you
            </p>
            <p>
Hey there, hey there<br>
<u>우리는 <span class="h">屋哩能</span></u> great pair, great pair<br>
<u>네 맘이 <span class="h">ㄋㄧ媽咪</span></u> 뭔지 모르지만 ah 내 생각이<br>
맞아 그러니까 ah <span class="h">yeah yeah</span><br>
내 맘은 내 거 <U>그러니까 <span class="h">可摟ㄋㄧ嘎</span></U><br>
좋아한다고 <u>자유니까 <span class="h">家youㄋㄧ嘎</span></u><br>
네 맘은 네 거 <u>맞으니까 <span class="h">媽資ㄋㄧ嘎</span></u><br>
말해봐 다 어서 다 'cause I'm <span class="h">not shy</span><br>
            </p>
            <p>
Not shy, not me (<span class="h">ITZY</span>)<br>
난 다 원해 다다 (<span class="h">Not shy</span>)<br>
Not shy, not me<br>
Give me 다 다다<u>다다다 다다 <span class="h">大大大！大大！</span></u><br>
Not shy, not me (<span class="h">ITZY</span>)<br>
난 다 원해 다다 (<span class="h">Not shy</span>)<br>
Not shy, not me<br>
너를 원해 뭐 어때 'cause I'm <span class="h">not shy</span><br>
            </p>
            <p>
후회하긴 싫으니까<br>
엔딩 상관없으니까<br>
Go <span class="h">go go</span> 모두 쏟아내<br>
No <span class="h">yes no</span> 뭐든지 어때<br>
Yeah 이러면 저러면 어때<br>
어차피 안 될 거 빼고 다 돼<br>
Let's just be who we are<br>
Do what we do 네 맘대로 해<br>
Let the beat drop<br>
            </p>
            <p>
Not shy, not me (<span class="h">ITZY</span>)<br>
난 다 원해 다다 (<span class="h">Not shy</span>)<br>
Not shy, not me<br>
말해봐 다 어서 다 'cause I'm <span class="h">not shy</span><br>
            </p>
            <p>
Not shy, not me (<span class="h">ITZY</span>)<br>
난 다 원해 다다 (<span class="h">Not shy</span>)<br>
Not shy, not me<br>
Give me 다 다다<u>다다다 다다 <span class="h">大大大！大大！</span></u><br>
Not shy, not me (<span class="h">ITZY</span>)<br>
난 다 원해 다다 (<span class="h">Not shy</span>)<br>
Not shy, not me<br>
너를 원해 뭐 어때 'cause I'm <span class="h">not shy</span><br>
<span class="h">Not shy, not me</span><br>
            </p>`
    },
    {
        id: "Inthemorning",
        title: "In the morning",
        category: "ITZY",
        youtubeId: "_ysomCGaZLw",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/DYoosPy7ri5YQMem4I",
        videoRefUrl: "https://www.youtube.com/watch?v=dSy4wa_VXu4",
        lyricsHTML: `<p>
Shhh<br>
Guess who loves you? <u>나야, 나 <span class="h">拿呀，拿</span></u><br>
Do I show you? <span class="h">No</span><u>야, <span class="h">呀</span></u><span class="h">no</span><br>
아직 time이 <u>아냐 난 <span class="h">阿ㄋㄧㄚˋㄋㄢˋ</span></u>  <br>
좀 더 가까이, 좀 더 가까이 그러다 갑자기 <u>싹 <span class="h">颯</span></u><br>
            </p>
            <p>
I'ma steal it, 마음을 훔쳐, you are gonna <span class="h">love me</span><br>
결정적일 때 이빨을 드러내는 <span class="h">type</span><br>
나와 두 눈이 마주쳐<u>도 <span class="h">都</span></u>, 난 흔들림이 없어, <span class="h">no</span><br>
널 사랑하는 게 죄라면, 범인은 <span class="h">who</span>? You'll never know<br>
            </p>
            <p>
Baby, <u>헷갈려, 헷갈려, <span class="h">黑嘎溜，黑嘎溜</span></u> 헷갈리겠지 넌<br>
결국엔 <u>내 거야, 내 거야, <span class="h">內溝呀，內溝呀</span></u> 내게 되겠지 넌<br>
이제 <span class="h">finally, finally</span> 택할 시간이야<br>
벌써 어느새 또 밤이 되었<u>습니다 <span class="h">思逆達</span></u><br>
            </p>
            <p>
I'm the mafia (ma-ma-ma-ma-mafia-ya)<br>
(We do it like a mafia) 링딩딩딩딩딩<br>
I'm the mafia (ma-ma-ma-ma-mafia-ya)<br>
(We do it like a mafia)<br>
<u>또 아침이 밝았습니다 <span class="h">都！ 阿親咪！ 八嘎！斯逆！達～</span></u><br>
            </p>
            <p>
어젯밤에도, you don't even know (ayy)<br>
누구일까 <span class="h">mafia</span>? (Ayy)<br>
날이 밝아도, you don't even know (ayy)<br>
누구일까 <span class="h">mafia</span>?<br>
            </p>
            <p>
배우보다 <u>더 배우 <span class="h">都胚五</span></u><br>
늑대 가지고 <u>노는 여우 <span class="h">no嫩ㄋㄧㄚ物</span></u> (no)<br>
전혀 안 보이겠지 <span class="h">clue</span> (uh-huh)<br>
하지만 나에겐 다 계획이 있다고, <span class="h">go</span><br>
            </p>
            <p>
그만 머뭇머뭇대, 슬슬 작전 개시<br>
너를 <u>뺏어, 뺏어, 뺏어 <span class="h">杯叟，杯叟，杯叟</span></u> like a caper movie, <span class="h">ready</span>?<br>
알 수 없는 poker face [face], 점령해 네 맘속 place <span class="h">[place]</span><br>
Hurry up, baby, catch me if you can, 하하<br>
            </p>
            <p>
Baby, <u>헷갈려, 헷갈려, <span class="h">黑嘎溜，黑嘎溜</span></u> 헷갈리겠지 넌<br>
결국엔 <u>내 거야, 내 거야, <span class="h">內溝呀，內溝呀</span></u> 내게 되겠지 넌<br>
이제 <span class="h">finally, finally</span> 택할 시간이야<br>
벌써 어느새 또 밤이 되었<u>습니다 <span class="h">思逆達</span></u><br>
            </p>
            <p>
I'm the mafia (ma-ma-ma-ma-mafia-ya)<br>
(We do it like a mafia) 링딩딩딩딩딩<br>
I'm the mafia (ma-ma-ma-ma-mafia-ya)<br>
(We do it like a mafia) 누구일까 <span class="h">mafia</span>?<br>
            </p>
            <p>
마지막 밤이 깊었어, baby<br>
이 밤이 지나면, 네 곁엔 나 하나, yeah, yeah<br>
(<u>마 <span class="h">馬</span></u>) 마침내 (<u>피 <span class="h">匹</span></u>) 피할 수 없는<br>
(<u>아 <span class="h">阿</span></u>) 아침이 와 (하하하하하하하하)<br>
            </p>
            <p>
I'm the mafia (ma-ma-ma-ma-mafia-ya)<br>
(We do it like a mafia) 링딩딩딩딩딩<br>
I'm the mafia (ma-ma-ma-ma-mafia-ya)<br>
(We do it like a mafia) <br>
<u>또 아침이 밝았습니다 <span class="h">都！ 阿親咪！ 八嘎！斯逆！達～</span></u><br>
            </p>
            <p>
어젯밤에도, you don't even know (ayy)<br>
누구일까 <span class="h">mafia</span>? (Ayy)<br>
날이 밝아도, you don't even know (ayy)<br>
누구일까 <span class="h">mafia</span><br>
            </p>`
    },
    {
        id: "LOCO",
        title: "LOCO",
        category: "ITZY",
        youtubeId: "MjCZfZfucEc",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/0ljtlqn3s1XUeI_iGR",
        videoRefUrl: "https://www.youtube.com/watch?v=KK84cHTpApw&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=6",
        lyricsHTML: `<p>
LOCO<br>
<span class="h">[HwangYeji! ChoiJisu! ShinRyujin! LeeChaeryeong! ShinYuna! IT! ZY! MID! ZY! LO! CO! ]</span><br>
미친다는 말이 이해 간달까<br>
I'm gettin' <span class="h">LOCO LOCO</span><br>
Oh gosh 이건 달콤한 독 같아<br>
I'm gettin' <span class="h">LOCO LOCO</span><br>
            </p>
            <p>
출구 없는 방 안에 사방이 너란 거울이야<br>
굳이 쉽게 말하자면<br>
I feel like I was born to <span class="h">love ya</span><br>
            </p>
            <p>
오아시스 찾는 <span class="h">kitty</span> 
난 네 주위를 맴돌지<br>
콩깍지 껴 버린 내 두 눈은 <span class="h">yellow</span><br>
켜줘 네 손으로 불 꺼진 내 심장<br>
            </p>
            <p>
It's <span class="h">too late</span>, want you <span class="h">so bad</span><br>
너를 갖고 싶어졌어<br>
몰라 이젠 이미 난 blind 끝까지 가볼래<br>
            </p>
            <p>
넌 날 반쯤 미치게 만들어<br>
You got me like <span class="h">CRAY-CRAY-CRAZY in love</span><br>
대체 네가 <u>뭔데 <span class="h">矇ㄉㄟ</span></u>  <br>
미쳐 날뛰어 기분이 up & down<br>
You got me like <span class="h">CRAY-CRAY-CRAZY in love</span><br>
나도 내가 outta control<br>
            </p>
            <p>
I'm gettin' <span class="h">LOCO LOCO</span><br>
I'm gettin' <span class="h">LOCO LOCO</span><br>
            </p>
            <p>
내게 대체 넌 뭘 <u>원해 <span class="h">翁內</span></u> <br> 
미친 이 마음은 다 갖다 퍼 줘도 I'm <span class="h">ok</span><br>
하루는 천국을 갔다 왔다 가도<br>
나락 끝까지 날 밀어버려<br>
So <span class="h">dangerous</span>, so so so <span class="h">dangerous</span><br>
날 더 망가뜨려도 널 믿을 수 밖에 없게 해줘<br>
            </p>
            <p>
오아시스 찾은 <span class="h">kitty</span>
난 네 옆 자릴 넘보지<br>
Break 따윈 잊었어 끝까지 가 볼래<br>
            </p>
            <p>
넌 날 반쯤 미치게 만들어<br>
You got me like <span class="h">CRAY-CRAY-CRAZY in love</span><br>
대체 네가 <u>뭔데 <span class="h">矇ㄉㄟ</span></u>  <br>
미쳐 날뛰어 기분이 up & down<br>
You got me like <span class="h">CRAY-CRAY-CRAZY in love</span><br>
나도 내가 outta control<br>
            </p>
            <p>
LOCO<br>
I'm gettin' LOCO-LOCO-CO<br>
I'm gettin' LOCO-LOCO-CO-oh-oh-oh<br>
I'm gettin' LOCO-LOCO-CO<br>
I'm gettin' <span class="h">LOCO-LOCO-CO-oh-oh-oh</span><br>
            </p>
            <p>
넌 날 반쯤 미치게 만들어<br>
You got me like <span class="h">CRAY-CRAY-CRAZY in love</span><br>
대체 네가 <u>뭔데 <span class="h">矇ㄉㄟ</span></u>  <br>
미쳐 날뛰어 기분이 up & down<br>
You got me like <span class="h">CRAY-CRAY-CRAZY in love</span><br>
나도 내가 outta control<br>
            </p>
            <p>
I'm gettin' LOCO LOCO<br>
I'm gettin' LOCO LOCO<br>
            </p>`
    },
    {
        id: "SNEAKERS",
        title: "SNEAKERS",
        category: "ITZY",
        youtubeId: "Hbb5GPxXF1w",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/LaJ116iZzEPTiEbhQs",
        videoRefUrl: "https://www.youtube.com/watch?v=6pI8JoQdfgk&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=7",
        lyricsHTML: `<p>
<span class="h">Yeah, yeah<br>
Let's go </span><br>
<mark><span class="h">[ITZY!]</span><br>
Like what?</mark><br>
            </p>
            <p>
자유로운 기분, <span class="h">I like that</span><br>
고민 따윈 already <span class="h">done, done</span> (Done, done)<br>
색안경 끼고 보는 게 죄지<br>
That's not my fault, <span class="h">woah</span><br>
Told ya I don't care at all<br>
내 멋대로 갈 거야 (Oh)<br>
필요 없어, order<br>
Don't need no guidance<br>
I'm makin' my way<br>
            </p>
            <p>
I'm on my way up (<span class="h">cha cha</span>)<br>
Run to the top (<span class="h">Ah, ooh</span>)<br>
난 언제든 straight up <span class="h">[Alright]</span><br>
원래 두려운 게 없어 난<br>
            </p>
            <p>
상관없어 call me <span class="h">trouble</span><br>
Or you can call me <span class="h">weirdo</span><br>
나로 살고 <u>싶어 <span class="h">溪坡</span></u>  <br>
턱 끝을 치켜올린 채로<br>
다 가질 듯한 attitude 그거면 돼<br>
<span class="h">[S! NEA! KER! S! ]</span><br>
Put my sneakers on<br>
하나 둘 ready, <span class="h">get set, go</span><br>
Put my sneakers on<br>
<span class="h">Put 'em up, put 'em up</span> yeah, yeah<br>
Put my sneakers on<br>
하나 둘 ready, <span class="h">get set, go</span><br>
멀리 가보자고, yeah, yeah<br>
<span class="h">Put 'em up, put 'em up</span> yeah, yeah<br>
            </p>
            <p>
기다리던 순간 stand up, <span class="h">stand up</span><br>
빨리 뛰는 심장 don't stop, <span class="h">don't stop</span><br>
Get loose, 불태워 지금 my youth<br>
지금 my youth<br>
The party ain't started<br>
시작도 안 했어 난 (Oh)<br>
요즘 꽂힌 말이 하나 <u>있지 <span class="h">一級</span></u>  <br>
My best is <span class="h">yеt to come</span><br>
            </p>
            <p>
상관없어 call me <span class="h">trouble</span><br>
Or you can call me <span class="h">weirdo</span><br>
나로 살고 <u>싶어 <span class="h">溪坡</span></u>  <br>
턱 끝을 치켜올린 채로<br>
다 가질 듯한 attitude 그거면 돼<br>
<span class="h">[S! NEA! KER! S! ]</span><br>
Put my sneakers on<br>
하나 둘 ready, <span class="h">get set, go</span><br>
Put my sneakers on<br>
<span class="h">Put 'em up, put 'em up</span> yeah, yeah<br>
Put my sneakers on<br>
하나 둘 ready, <span class="h">get set, go</span><br>
멀리 가보자고, yeah, yeah<br>
<span class="h">Put 'em up, put 'em up</span> yeah, yeah<br>
            </p>
            <p>
자유롭게 뛰고 싶어 다른 사람<br>
시선들, don't care now (<span class="h">Hey, hey</span>)<br>
어디까지 가게 될지 모르지만<br>
일단은 start right now<br>
Yeah <span class="h">alright</span> (Alright)<br>
멈추지 마 to the top (Yeah)<br>
Don't worry about it<br>
'Cause you know I<br>
<span class="h">Put my sneakers on</span><br>
            </p>
            <p>
상관없어 call me trouble<br>
Or you can call me weirdo<br>
나로 살고 싶어<br>
턱 끝을 <mark>치켜 올린 채로<br>
다 가질 듯한 attitude, 그거면 돼<br>
<span class="h">[HwangYeji! ChoiJisu! ShinRyujin! LeeChaeryeong! ShinYuna! MID! ZY! ]</span></mark> <br>
<span class="h">You better put your sneakers on</span><br>
            </p>
            <p>
Put my sneakers on<br>
하나 둘 ready, <span class="h">get set, go</span><br>
Put my sneakers on<br>
<span class="h">Put 'em up, put 'em up</span><br>
Put my sneakers on<br>
하나 둘 ready, <span class="h">get set, go</span><br>
멀리 가보자고, yeah, yeah<br>
<span class="h">Put 'em up, put 'em up</span><br>
            </p>
            <p>
자유롭게 뛰고 싶어 다른 사람<br>
시선들, don't care now (<span class="h">Hey, hey</span>)<br>
어디까지 가게 될지 모르지만<br>
일단은 start right now<br>
Yeah, <span class="h">alright</span> (Alright)<br>
멈추지 마 to the top (Yeah)<br>
같이 걸어 가보자고<br>
<span class="h">Put 'em up, put 'em up<br>
[IT! ZY! MID! ZY! 奈！架！]</span><br>
            </p>`
    },
    {
        id: "Cheshire",
        title: "Cheshire",
        category: "ITZY",
        youtubeId: "zugAhfd2r0g",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/4tpJ24OILX0lHT51xr",
        videoRefUrl: "https://www.youtube.com/watch?v=y-koAAx7l8I&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=8",
        lyricsHTML: `<p>
Lalala lalala lalalalala<br>
Lalala<br>
Lalala lalalalala<br>
<span class="h">[IT! ZY! Che! shire! ]</span><br>
또 너는 ask me<br>
무슨 생각을 하고 있는지<br>
<span class="h">Not my business</span> 나도 날 몰라<br>
내 마음 따라 playing<br>
            </p>
            <p>
좋긴 좋은데 <span class="h">love or like</span><br>
숨었다가도 <u>나타나 <span class="h">那他那</span></u> yayaya<br>
맞고 틀린 게 어딨지<br>
<span class="h">Cheshire</span><u>처럼 <span class="h">秋龍</span></u> it's all right<br>
            </p>
            <p>
<u>자꾸 <span class="h">掐股</span></u> 물어보면 boring<br>
<u>뭐든 <span class="h">摸等</span></u> 내 맘대로 play a trick <span class="h">[play a trick]</span><br>
정해진 답은 없어 you want to know<br>
            </p>
            <p>
원한다면 힌틀 줄게<br>
나머진 free 하게 날<br>
네 마음속에<br>
<u>풀어놔 줘 <span class="h">鋪喔那糗</span></u> lalalalala<br>
            </p>
            <p>
<span class="h">Hey</span>, why so serious?<br>
보이는 것 그대로 날 믿어봐 <span class="h">[HEY! ]</span><br>
어렵게 생각 마<br>
<span class="h">Nothing’s wrong, right?</span><br>
Can you see me?<br>
            </p>
            <p>
<span class="h">Hey</span>, why so curious?<br>
머리 말고 네 느낌을 믿어봐 <span class="h">[HEY! ]</span><br>
심각해지지 마<br>
<span class="h">Anything’s right!</span><br>
Lalalalala<br>
            </p>
            <p>
내 미소는 이상하지<br>
그래도 너는 like me<br>
<span class="h">Yeah feel so free</span><br>
눈 감음 사라지지 미소는 남겨둘게<br>
            </p>
            <p>
어둠 속에 <u>반짝인 <span class="h">幫家ㄍㄧㄥ</span></u> <span class="h">eyes</span><br>
누군간 날 <u>조명 삼아 <span class="h">啾ㄇㄧㄡ撒媽</span></u>  <br>
길을 찾아낼 지도 I wanna go<br>
<u>봐 봐, 봐 봐, <span class="h">ㄅㄨㄚ(x4)</span></u> 잘 찾아봐<br>
            </p>
            <p>
<span class="h">Follow</span> 이제 다음 story<br>
<u>여전 <span class="h">悠冏</span></u> 히 너는 wondering <span class="h">[wondering]</span><br>
<u>그런 표정 <span class="h">可龍ㄆㄧㄡ冏</span></u> Lalalalala<br>
            </p>
            <p>
<span class="h">Hey</span>, why so serious?<br>
보이는 것 그대로 날 믿어봐<br>
어렵게 생각 마<br>
<span class="h">Nothing’s wrong, right?</span><br>
Can you see me?<br>
            </p>
            <p>
<span class="h">Hey</span>, why so curious?<br>
머리 말고 네 느낌을 믿어봐 <span class="h">[HEY! ]</span><br>
심각해지지 마<br>
<span class="h">Anything’s right!</span><br>
Lalalalala<br>
            </p>
            <p>
Lalala lalala lalalalala<br>
Lalala<br>
Lalala lalalalala<br>
<span class="h">Why so serious?</span><br>
            </p>
            <p>
Lalala lalala lalalalala<br>
Lalala<br>
Lalala lalalalala<br>
<span class="h">Why so curious?</span><br>
            </p>
            <p>
내 뒤에 가려진<br>
내 맘 사실 나도 몰라 what I want <span class="h">[Oh~]</span><br>
대체 왜 그게 중요해<br>
We’re gonna do it right<br>
<span class="h">Will you join me?</span><br>
            </p>
            <p>
네 앞에 펼쳐진<br>
이 순간을 즐기면 돼 이대로 <span class="h">[HEY! ]</span><br>
Nothing’s wrong, Nothing’s right<br>
Lalalalala<br>
            </p>
            <p>
<mark>Lalala lalala lalalalala<br>
Lalala<br>
Lalala lalalalala<br>
<span class="h">[HwangYeji! ChoiJisu! ShinRyujin! LeeChaeryeong! ShinYuna! ]</span></mark><br>
<span class="h">Why so serious?</span><br>
            </p>
            <p>
Lalala lalala lalalalala<br>
Lalala<br>
Lalala lalalalala<br>
<span class="h">Why so curious?</span><br>
Lalala lalalalala<br>
<span class="h">[IT! ZY! MID! ZY!]</span><br>
            </p>`
    },
    {
        id: "BoysLikeYou",
        title: "Boys Like You",
        category: "ITZY",
        youtubeId: "6uZy86ePgO0",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/TXpEZRs3AIGG17Kqh2",
        videoRefUrl: "https://www.youtube.com/watch?v=zH3sO44qVko&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=9",
        lyricsHTML: `<p>
<span class="tip">聽到hey就要開始喊</span><br>
<span class="h">[YE JI! LI A! RYU JIN! CHAER YEONG! YU NA! IT ZY! Boys! LikeYou! ]</span><br>
Why you calling me up saying sorry again<br>
Already told you we’re done<br>
What didn’t you get?<br>
Don’t forget you’re the one<br>
that tried to get with my friends<br>
<span class="h">the end the end the end the end</span><br>
            </p>
            <p>
Well you must be going crazy<br>
thinking I’ll be back, I’m sorry<br>
Cause you’re crying like a <span class="h">baby</span><br>
but do I look like your <span class="h">mommy</span>?<br>
Take a look into that mirror<br>
if u wonder why u lost me<br>
gotta sit down and shut up<br>
you did it to yourself<br>
            </p>
            <p>
Boy, gonna diss me? Boy, I’m so pissed<br>
Boy, gonna miss me, Boy, you are dismissed<br>
Cuz I don’t fall for boys like you (<span class="h">I don’t fall for</span>)<br>
I don’t fall for boys like you (<span class="h">I don’t fall for</span>)<br>
Boy, wanna date me? Boy, outta date, yeah<br>
Boy, wanna <span class="h">“What? No!”</span> Boy, outta my way<br>
Cuz I don’t fall for boys like you (<span class="h">I don’t fall for</span>)<br>
I don’t fall for boys like you (I don’t fall for)<br>
            </p>
            <p>
I see through sweet little lies and every excuse<br>
when you start every fight, the blame is on you<br>
one red flag and I’m gone already onto<br>
<span class="h">the next the next the next</span><br>
            </p>
            <p>
well you must be going crazy<br>
thinking I’ll be back, I’m sorry<br>
cause you’re crying like a <span class="h">baby</span><br>
but do I look like your <span class="h">mommy</span>?<br>
take a look into that mirror<br>
if you wonder why you lost me<br>
gotta sit down and shut up<br>
you did it to yourself<br>
            </p>
            <p>
Boy, gonna diss me? Boy, I’m so pissed<br>
Boy, gonna miss me, Boy, you are dismissed<br>
Cuz I don’t fall for boys like you (<span class="h">I don’t fall for</span>)<br>
I don’t fall for boys like you (<span class="h">I don’t fall for</span>)<br>
Boy, wanna date me? Boy, outta date, yeah<br>
Boy, wanna <span class="h">“What? No!”</span> Boy, outta my way<br>
Cuz I don’t fall for boys like you (<span class="h">I don’t fall for</span>)<br>
I don’t fall for boys like you (I don’t fall for)<br>
            </p>
            <p>
You can raise your voice,<br>
but know that you have no choice<br>
don’t care what you do (you)<br>
You can raise your voice,<br>
but know that you have no choice<br>
don’t care what you do (you)<br>
            </p>
            <p>
so turn around, walk away<br>
you made your bed, so you gotta lay<br>
get outta my way<br>
            </p>
            <p>
Boy, gonna diss me? Boy, I’m so pissed<br>
Boy, gonna miss me. Boy, you are dismissed<br>
Cuz I don’t fall for boys like you (<span class="h">I don’t fall for</span>)<br>
Cuz I don’t fall for boys like you (I don’t fall for)<br>
Boy, wanna date me? Boy, outta date, yeah<br>
Boy, wanna <span class="h">“What? No!”</span> Boy, outta my way<br>
Cuz I don’t fall for boys like you (<span class="h">I don’t fall for</span>)<br>
Cuz I don’t fall for boys like you (I don’t fall for)<br>
            </p>
            <p>
You can raise your voice,<br>
but know that you have no choice<br>
don’t care what you do (you)<br>
You can raise your voice,<br>
but know that you have no choice<br>
don’t care what you do (you)<br>
Oh you<br>
            </p>`
    },
    {
        id: "MrVampire",
        title: "Mr. Vampire",
        category: "ITZY",
        youtubeId: "VkIEfqHFNkU",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/HZEYTuaCEYKfmHyi6x",
        videoRefUrl: "https://www.youtube.com/watch?v=TzchXUSOKIo&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=14",
        lyricsHTML: `<p>
아주 상쾌하게 <u>번쩍 <span class="h">崩冏</span></u> 잠에서 깬 <u>기분 <span class="h">ㄍㄧㄅㄨㄣ</span></u> (기분)<br>
기지개를 켜며 발을 내<u>디뎌 <span class="h">低丟</span></u> (내디뎌, uh-huh)<br>
나 찾은 걸까 true love<br>
분명히 멋진 날이 될 것 같은 걸 <br>
이건 사랑일까 <span class="h">[Yeah]</span><br>
우린 영원히 영원할까 <span class="h">[Yeah]</span><br>
Yeah, 난 느낌이 와<br>
넌 좀 뭔가 다른 듯해<br>
            </p>
            <p>
하얗고 예쁜 teeth<br>
점점 더 달콤해진 my blood<br>
새들처럼 뛰는 heartbeat<br>
Bite me, bite you, <span class="h">Boom Boom</span><br>
            </p>
            <p>
연애 세폰 모조리 <span class="h">[母啾哩]</span> (Yah)<br>
묻혀있었어 땅속 깊숙이 <span class="h">[ㄍㄧ蘇ㄍㄧ]</span> (깊숙이)<br>
Ayy, 하긴 사랑 그따위 <span class="h">[可達WE]</span><br>
피곤했어 너를 만날 때까진<br>
            </p>
            <p>
어서 나를 깨물어 봐, Mr. <span class="h">Vampire</span><br>
하나하나 캐물어봐, Mr. <span class="h">Vampire</span> (Yeah)<br>
Good, we're a match made in heaven<br>
우린 너무 <u>잘 어울려 <span class="h">掐摟屋六</span></u>, Mr. Vampire<br>
            </p>
            <p>
수줍은 그 <span class="h">face</span> (Woo)<br>
용기 내 be <span class="h">brave</span> (Uh-huh)<br>
이대로 날 놓치면 미치게 후회한다<br>
Don't you know you have a super<span class="h">power</span>?<br>
걱정 마 나도 너와 함께하고 <u>싶어 <span class="h">溪坡</span></u>  <br>
Oh, 내 맘을 읽어봐<br>
Simple하고 어렵지 않거든<br>
Oh, 나의 마음을 맞춰봐<br>
이미 힌트는 뭐 충분한 것 같아<br>
            </p>
            <p>
하얗고 예쁜 teeth (Oh-woah)<br>
점점 더 달콤해진 my blood<br>
새들처럼 뛰는 heartbeat<br>
Bite me, bite you, <span class="h">boom, boom</span><br>
            </p>
            <p>
연애 세폰 모조리 <span class="h">[母啾哩]</span> (Yah)<br>
묻혀있었어 땅속 깊숙이 <span class="h">[ㄍㄧ蘇ㄍㄧ]</span> (깊숙이)<br>
Ayy, 하긴 사랑 그따위 <span class="h">[可達WE]</span><br>
피곤했어 너를 만날 때까진<br>
            </p>
            <p>
어서 나를 깨물어 봐, Mr. <span class="h">Vampire</span><br>
하나하나 캐물어봐, Mr. <span class="h">Vampire</span> (Yeah)<br>
Good, we're a match made in heaven<br>
우린 너무 <u>잘 어울려 <span class="h">掐摟屋六</span></u>, Mr. Vampire<br>
            </p>
            <p>
같이 춤을 출까<br>
창백한 피부가<br>
햇살에 그을리도록<br>
구릿빛 눈부시도록<br>
<u>느껴봐 <span class="h">ㄋㄍㄧㄡ爸</span></u> 이 순간 이 떨림<br>
끌려 참을 수 없어 좀처럼<br>
Yah, yah, 입 맞춰 for the first time<br>
우린 바보처럼 사랑밖에 몰라 (사랑밖에 몰라, ah-ah)<br>
            </p>
            <p>
연애 세폰 모조리 <span class="h">[母啾哩]</span> (Ayy)<br>
묻혀있었어 땅속 깊숙이 <span class="h">[ㄍㄧ蘇ㄍㄧ]</span> (Na-na-na-na-na)<br>
Ayy, 하긴 사랑 그따위 <span class="h">[可達WE]</span><br>
피곤했어 너를 만날 때까진 (Ah-ah-ah)<br>
            </p>
            <p>
나를 절대 놓치지 마, Mr. <span class="h">Vampire</span><br>
사람들에게 물어봐, Mr. <span class="h">Vampirе</span> (Yeah)<br>
Good, we're a match madе in heaven (Na-na-na-na-na, na)<br>
<u>내가 제일 어울려 넌 <span class="h">捏嘎接一喔屋六no</span></u>   <br>
Mr. Vampire (Yeah)<br>
            </p>`
    },
    {
        id: "BORNTOBE",
        title: "BORN TO BE",
        category: "ITZY",
        youtubeId: "4R7vRFGJr3k",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/OohpcTu632AqatzrhB",
        videoRefUrl: "https://www.youtube.com/watch?v=ciy-tREHiww&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=15",
        lyricsHTML: `<p>
Come on, <span class="h">come on</span>, I'm on it<br>
Born to be, born to be, born to be, oh-oh<br>
            </p>
            <p>
<span class="h">Brand new fire</span><br>
이젠 내 시간이야 let me turn the tide, move<br>
<span class="h">Ice blue silver</span><br>
I'm shining like a star, I <span class="h">go boom, go boom</span><br>
Sit down, enjoy the show 'cause it's about to <span class="h">go down</span><br>
Transcend 한계를 넘어 now I'm running it<br>
딱 봐도, yeah, I'm the realest (Don't you know?)<br>
절대 없어 I got nothing missing, oh, yeah (Yeah, yeah)<br>
            </p>
            <p>
모든 시선들이 나를 <u>향해 <span class="h">ㄏㄧㄤ嘿</span></u> (Yeah, yeah)<br>
잠든 감각들이 깨어나, I'll <span class="h">prove it</span> (I'll prove it)<br>
Don't need your permission (So what? So what?)<br>
Every step I take is in victory lane, yeah<br>
I'm about to have this whole crowd going (<span class="h">Let's go</span>)<br>
Crazy like 한 번도 느껴본 적 없는 (Come on)<br>
Can you see what I've become now?<br>
Yeah, let's <span class="h">turn it up now</span><br>
            </p>
            <p>
Born to be, born to be, <span class="h">born to be</span>, oh-oh, oh-oh, oh<br>
Born to be, born to be <span class="h">wild and free</span>, oh-oh, oh-oh, oh<br>
누가 뭐라 해도 I'ma say it louder (<span class="h">Louder</span>)<br>
난 내 방식대로 always hit it harder<br>
<span class="h">Born to be, born to be</span> wild and free, oh-oh, oh-oh, oh<br>
            </p>
            <p>
Born to be so <span class="h">fierce</span> (Yeah)<br>
한 번도 못 느낀 <span class="h">fears</span> (Yeah, yeah)<br>
Sensation I'ma bring, yeah (Yeah)<br>
Get ready, don't be tense (Yeah, yeah)<br>
따라오는 spotlight, watch me glow<br>
<span class="h">Young and wild and free</span><br>
더 자신 있게 이젠 nothing's going wrong<br>
Don't compare, 다른 것들<br>
Just don't care, 내 맘대로<br>
Bounce it, bounce it, <span class="h">turn it up</span><br>
Got that winning pace, I'm <span class="h">going up</span>, oh, yeah (Going up)<br>
            </p>
            <p>
모든 시선들이 나를 <u>향해 <span class="h">ㄏㄧㄤ嘿</span></u>  <br>
잠든 감각들이 깨어나, I'll <span class="h">prove it</span><br>
Can you see what I've become now?<br>
Yeah, let's <span class="h">turn it up now</span> (Ooh-woah, oh-oh-oh, oh)<br>
            </p>
            <p>
Born to be, born to be, <span class="h">born to be</span>, oh-oh, oh-oh, oh<br>
(Yeah, yeah, yeah, yeah, woo, woo, oh, born to be)<br>
Born to be, born to be <span class="h">wild and free</span>, oh-oh, oh-oh, oh <br>
(Come on, wild and free, woah)<br>
누가 뭐라 해도 I'ma say it louder (<span class="h">Louder</span>)<br>
난 내 방식대로 always hit it harder<br>
<span class="h">Born to be, born to be</span> wild and free, oh-oh, oh-oh-oh<br>
            </p>
            <p>
누가 뭐라 해도, 누가 뭐라 해도 (Ha-ha, ha-ha-ha)<br>
누가 뭐라 해도 I'ma say it louder (Woo)<br>
누가 뭐라 해도, 누가 뭐라 해도<br>
누가 뭐라 해도 always hit it harder (Born to be, born to be)<br>
<mark>Born to be, born to be, born to be<br>
<span class="h">[IT! ZY! MID! ZY! ]</span></mark> <br>
            </p>
            <p>
Born to be, born to be, <span class="h">born to be</span>, oh-oh, oh-oh, oh <br>
(Yeah, yeah, yeah, yeah, yeah, I'm born to be)<br>
Born to be, born to be <span class="h">wild and free</span>, oh-oh, oh-oh, oh <br>
(Yeah, yeah, yeah, yeah; I'm born to be, yeah, oh, woah-oh-oh)<br>
누가 뭐라 해도 I'ma say it louder (<span class="h">Louder</span>)<br>
난 내 방식대로 always hit it harder (Harder)<br>
<span class="h">Born to be, born to be</span> wild and free, oh-oh, oh-oh, oh <br>
(Oh-oh, yeah)<br>
            </p>`
    },
    {
        id: "CAKE",
        title: "CAKE",
        category: "ITZY",
        youtubeId: "0bIRwBpBcZQ",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/KkrDT63j5hrtD8Cu8U",
        videoRefUrl: "https://www.youtube.com/watch?v=i9sVX05PyQ0&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=17",
        lyricsHTML: `<p>
<span class="h">[IT! ZY! MIDZY! Like that!]</span><br>
Cake, Cake, Cake, Cake, Cake<br>
It's a piece of cake, cake, cake, cake, cake <span class="h">[CAKE!]</span><br>
Cake, Cake, Cake, Cake ,Cake<br>
Yeah, piece of cake, cake, cake, cake, cake <span class="h">[CAKE!]</span><br>
(Ooh, wee) La-la-la, la-la-la, la-la<br>
(Ooh, wee) La-la-la, la-la-la, la<br>
<u>왕 하고 먹어버려 다 <span class="h">汪哈辜某溝波六大</span></u>  <br>
Yeah, like<br>
Cake, Cake, Cake, Cake, Cake <span class="h">[CAKE!]</span><br>
            </p>
            <p>
하늘은 참 파래 또 내<br>
시간은 never waits<br>
똑같은 건 뻔해 또 다른 걸 난 원해, chase (Yeah, right)<br>
어떻게 모두를 다 맞춰줘<br>
존중해 줘, I do me, you do you (You and I)<br>
<u>너는 너 나는 나 <span class="h">no嫩no, 拿嫩拿</span></u> 좋잖아<br>
            </p>
            <p>
<span class="h">Cake, Cake,</span> can't wait 'til I bite them<br>
어차피 인생은 내꺼 (<u>내꺼 <span class="h">逆購</span></u>)<br>
<span class="h">Bam-bam,</span> can't wait 'til I shoot them<br>
뭘 그리 복잡해 매번 (<u>매번 <span class="h">妹蹦</span></u>)<br>
Shake it, shake, <span class="h">shake it, shake, shake it, shake</span><br>
Bust it up, <span class="h">bust it up, bust it up</span><br>
우린 너무나 바빠, yeah, like my birthday<br>
            </p>
            <p>
Maybe, 쉽지 않아, <span class="h">anyway</span><br>
생각대로 <span class="h">everyday</span><br>
고민 고민 <u>대신에 <span class="h">德馨ㄋㄟ</span></u>  <br>
나만 생각<u>해 이제 <span class="h">黑衣接</span></u>  <br>
다 괜찮아 어때?<br>
껌이라고 난 생각해<br>
Alright, alright<br>
<u>왕 하고 먹어버려 다 <span class="h">汪哈辜某溝波六大</span></u> yeah, like<br>
            </p>
            <p>
Cake, Cake, Cake, Cake, Cake<br>
It's a piece of cake, cake, cake, cake, cake <span class="h">[CAKE!]</span><br>
Cake, Cake, Cake, Cake, Cake<br>
Yeah, piece of cake, cake, cake, cake, cake <span class="h">[CAKE!]</span><br>
(Ooh, wee) La-la-la, la-la-la, la-la<br>
(Ooh, wee) La-la-la, la-la-la, la<br>
<u>왕 하고 먹어버려 다 <span class="h">汪哈辜某溝波六大</span></u> yeah, like<br>
Cake, Cake, Cake, Cake, Cake <span class="h">[CAKE!]</span><br>
            </p>
            <p>
장담 못 해 날씨처럼<br>
It's up in the air<br>
내일도 너 행복할지?<br>
Who can guarantee it so<br>
<span class="h">A-T-M</span><br>
지금이 훨씬 중요해<br>
<span class="h">Yeah, your way</span><br>
Just live it up 'cause<br>
            </p>
            <p>
Maybe, 쉽지 않아, <span class="h">anyway</span><br>
생각대로 <span class="h">everyday</span><br>
고민 고민 <u>대신에 <span class="h">德馨ㄋㄟ</span></u>  <br>
나만 생각<u>해 이제 <span class="h">黑衣接</span></u>  <br>
다 괜찮아 어때?<br>
껌이라고 난 생각해<br>
Alright, alright<br>
<u>왕 하고 먹어버려 다 <span class="h">汪哈辜某溝波六大</span></u> yeah, like<br>
            </p>
            <p>
Cake, Cake, Cake, Cake, Cake<br>
It's a piece of cake, cake, cake, cake, cake <span class="h">[CAKE!]</span><br>
Cake, Cake, Cake, Cake, Cake<br>
Yeah, piece of cake, cake, cake, cake, cake <span class="h">[CAKE!]</span><br>
(Ooh, wee) La-la-la, la-la-la, la-la<br>
(Ooh, wee) La-la-la, la-la-la, la<br>
<u>왕 하고 먹어버려 다 <span class="h">汪哈辜某溝波六大</span></u> yeah, like<br>
Cake, Cake, Cake, Cake, Cake <span class="h">[CAKE!]</span><br>
            </p>
            <p>
Sometimes, sometimes<br>
시원한 바람을 원해<br>
힘이 더 날지 몰라<br>
Ooh-ooh, ooh<br>
Sometimes, sometimes<br>
가끔 무관심이 편해<br>
<span class="h">Ayy,</span> 누구든 들리게 말해<br>
<span class="h">Ayy,</span> 쉽게 좀 생각해 like that<br>
            </p>
            <p>
Maybe, 쉽지 않아, <span class="h">anyway</span><br>
생각대로 <span class="h">everyday</span><br>
고민 고민 <u>대신에 <span class="h">德馨ㄋㄟ</span></u>  <br>
나만 생각<u>해 이제 <span class="h">黑衣接</span></u>  <br>
다 괜찮아 어때?<br>
껌이라고 난 생각해<br>
Alright, alright<br>
<u>왕 하고 먹어버려 다 <span class="h">汪哈辜某溝波六大</span></u> yeah, like<br>
<span class="h">[CAKE!]</span><br>
            </p>`
    },
    {
        id: "UNTOUCHABLE",
        title: "UNTOUCHABLE",
        category: "ITZY",
        youtubeId: "5e3rKInegeU",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/4lC64w0K9Z5EaE_2ed",
        videoRefUrl: "https://www.youtube.com/watch?v=JQ37qcSg0gE&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=16",
        lyricsHTML: `<p>
<mark>Aha 1, 2, 3<br>
<span class="h">[UN! TOU! CHA! BLE! IT! ZY!]</span></mark> <br>
<span class="h">let’s go!</span><br>
            </p>
            <p>
날 또 건드려<br>
눈 앞을 가려 보지만 <span class="h">[Ah-woo~]</span><br>
내 발걸음 앞에<br>
<span class="h">You’re gonna know</span><br>
You’re all gonna know<br>
            </p>
            <p>
내가 무얼 <u>하든지 <span class="h">哈登機</span></u>  <br>
Now you just keep your <span class="h">eyes on me</span><br>
난 못 <u>건드려 <span class="h">空ㄉ六</span></u> 절대 못 <u>건드려 <span class="h">空ㄉ六</span></u><br>
어디 날 한 번 지켜봐<br>
            </p>
            <p>
Blow 이미 난 몰아쳐 I’m on <span class="h">fire</span><br>
나를 막는 건 누구든<br>
내겐 아무런 의미 없을 뿐야<br>
<span class="h">Why not?</span> 난 자신 있어 <u>뭐든 <span class="h">某燈</span></u>  <br>
Show what I have 날 알수록 <u>놀라워 <span class="h">no辣襪</span></u>  <br>
멈출 생각 따윈 없거든<br>
<span class="h">Here we go now</span><br>
            </p>
            <p>
I’m untouchable 막아서지 못해 <u>시작됐어 <span class="h">西嘉對嗽</span></u>  <br>
지금 flow대로 just going <span class="h">on and on</span><br>
<u>더 <span class="h">透</span></u> mess it up now <u>넌 <span class="h">no</span></u> 쉽게 knockout<br>
어떤 것도 I don’t care about<br>
            </p>
            <p>
I’m untouchable 깨지지 않는 form<br>
Bam bam <span class="h">bam ba li</span><br>
막을 수 없어 <span class="h">nobody</span><br>
Bam bam <span class="h">bam ba li</span><br>
Nothing gon’ stop me nobody yah<br>
            </p>
            <p>
나만이 내 <span class="h">vision</span><br>
겁나지 않을 <span class="h">mission</span><br>
두려울 게 없다고 <span class="h">[喔ㄅ嗽！]</span><br>
Yeah I gotta go<br>
Baby keep your <span class="h">eyes on me</span><br>
            </p>
            <p>
지도 따윈 안 봐 난<br>
끌린 대로 가 만족할 때까지<br>
항상 내가 원한 길로<br>
You know I’m not scared<br>
            </p>
            <p>
Blow 이미 난 몰아쳐 I’m on <span class="h">fire</span><br>
나를 막는 건 누구든<br>
내겐 아무런 의미 없을 뿐야<br>
<mark>Why not? 난 자신 있어 뭐든<br>
<span class="h">[Bam bam bam ba li]</span></mark> <br>
Show what I have 날 알수록 놀라워<br>
<mark>멈출 생각 따윈 없거든<br>
<span class="h">[Bam bam bam ba li]</span></mark> <br>
<mark>Hey<br>
<span class="h">[Here we go now!]</span></mark> <br>
            </p>
            <p>
I’m untouchable 막아서지 못해 <u>시작됐어 <span class="h">西嘉對嗽</span></u>  <br>
지금 flow대로 just going <span class="h">on and on</span><br>
<u>더 <span class="h">透</span></u> mess it up now <u>넌 <span class="h">no</span></u> 쉽게 knockout<br>
어떤 것도 I don’t care about<br>
            </p>
            <p>
I’m untouchable 깨지지 않는 form<br>
Bam bam <span class="h">bam ba li</span><br>
막을 수 없어 <span class="h">nobody</span><br>
Bam bam <span class="h">bam ba li</span><br>
Nothing gon’ stop me nobody yah<br>
            </p>
            <p>
더 크게 shout it out 겁날 게 없잖아<br>
원해온 그대로 take it<br>
<span class="h">bam bam bam ba li</span><br>
nothing gon’ stop me nobody yah<br>
            </p>
            <p>
Hey yeah nobody<br>
No one can stop me 한계 없이 run<br>
<span class="h">Here we go now</span><br>
            </p>
            <p>
I’m untouchable 막아서지 못해 <u>시작됐어 <span class="h">西嘉對嗽</span></u>  <br>
지금 flow대로 just going <span class="h">on and on</span><br>
<u>더 <span class="h">透</span></u> mess it up now <u>넌 <span class="h">no</span></u> 쉽게 knockout<br>
어떤 것도 I don’t care about<br>
            </p>
            <p>
I’m untouchable 깨지지 않는 form<br>
Bam bam <span class="h">bam ba li</span><br>
막을 수 없어 <span class="h">nobody</span><br>
Bam bam <span class="h">bam ba li</span><br>
Nothing gon’ stop me nobody yah<br>
            </p>
            <p>
Bam bam <span class="h">bam ba li</span><br>
막을 수 없어 <span class="h">nobody</span><br>
Bam bam <span class="h">bam ba li</span><br>
Nothing gon’ stop me nobody yah<br>
            </p>`
    },
    {
        id: "ImaginaryFriend",
        title: "Imaginary Friend",
        category: "ITZY",
        youtubeId: "X0Tza9ND2Bw",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/KsiH35k3fpSTQVrerr",
        videoRefUrl: "https://www.youtube.com/watch?v=8jbnfGsP7zE&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=20",
        lyricsHTML: `<p>
<span class="tip">前奏播放後的兩個八拍</span><br>
<span class="h">[HwangYeji! ChoiJisu! ShinRyujin! LeeChaeryeong! ShinYuna! IT! ZY! Who! are! you!]</span><br>
Who am I? The revolution<br>
환상 속에 <u>태어나 <span class="h">ㄊㄟ喔那</span></u>  <br>
새롭게 깨어난 your illusion<br>
Oh, 너의 상상 속에 <u>존재해 <span class="h">存ㄗㄟ嘿</span></u>  <br>
네 꿈들도 현실이 되게<br>
숨결마저 <u>함께해 <span class="h">hamㄍㄟ嘿</span></u>  <br>
Who am I? 믿을 수 있니<br>
Oh, I'm a fallen angel <span class="h">and I said</span><br>
            </p>
            <p>
Call out my name in the middle of the night<br>
왜? <u>두려워 마, <span class="h">兔六喔罵</span></u> call out my name, yeah<br>
Call out my name in the middle of the night<br>
왜? <u>두려워 마 <span class="h">兔六喔罵</span></u><br>
            </p>
            <p>
You know, I'm your imaginary friend<br>
You know, I'm 너의 밤이 되어줄게<br>
When there's monsters on your ceiling<br>
I'll keep you safe and 꿈을 꿀 수 있게<br>
You know, I'm your imaginary friend<br>
You know, I'm<br>
It's you and I until the end<br>
<span class="h">[IT! ZY! MID! ZY!]</span><br>
<span class="tip">喊完上方應援後，開始數兩個八拍</span><br>
<span class="h">[HwangYeji! ChoiJisu! ShinRyujin! LeeChaeryeong! ShinYuna! IT! ZY! Who! are! you!]</span><br>
            </p>
            <p>
Who am I? The evolution<br>
상상 속에 <u>자라난 <span class="h">加拉難</span></u>  <br>
다른 색의 hallucination<br>
Oh, 너의 기억 안에 <u>존재해 <span class="h">存ㄗㄟ嘿</span></u>  <br>
Come on and <span class="h">dance, dance</span> and don't stop<br>
작은 나의 <span class="h">lucky spark</span><br>
네게 힘이 <u>될 거야 <span class="h">推狗呀</span></u>  <br>
너와 나 <u>함께야 <span class="h">hamㄍㄟ呀</span></u> can't stop thinking about our vibe<br>
이제야 <span class="h">we can run</span> and I'm killing it to the top, yeah<br>
            </p>
            <p>
Call out my name in the middle of the night<br>
왜? <u>두려워 마, <span class="h">兔六喔罵</span></u> call out my name, yeah<br>
Call out my name in the middle of the night<br>
왜? <u>두려워 마 <span class="h">兔六喔罵</span></u>  <br>
            </p>
            <p>
You know, I'm your imaginary friend<br>
You know, I'm 너의 밤이 되어줄게<br>
When there's monsters on your ceiling<br>
I'll keep you safe and 꿈을 꿀 수 있게<br>
You know, I'm your imaginary friend<br>
You know, I'm<br>
It's you and I until the end<br>
<span class="tip">兩個八拍(鼓聲加重)</span><br>
<span class="h">[Hwang~Yeji! Choi~Jisu! Shin~Ryujin! Lee~Chaeryeong! Shin~Yuna! IT! ZY! MID! ZY!]</span><br>
            </p>`
    },
    {
        id: "GOLD",
        title: "GOLD",
        category: "ITZY",
        youtubeId: "eMk_0svqsnI",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/8sUk_HvNV0ZqkhpoSB",
        videoRefUrl: "https://www.youtube.com/watch?v=U2XZo6I6HxM&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=19",
        lyricsHTML: `<p>
평온함을 rip, 대혼란을 일으켜 <span class="h">[Go!]</span><br>
본 적 없던 lit, 내 본능을 깨워 <span class="h">[LD!]</span><br>
Going to my head, going all out of control<br>
'Cause I shine so bright like dynamite gold<br>
<span class="h">[IT! ZY! MID! ZY!]</span><br>
Yeah<br>
<span class="h">ITZY</span><br>
Yeah<br>
Ooh<br>
Incoming<br>
쉴 새 없는 하루 (<span class="h">Wait a minute</span>), 문젠 없지 (<span class="h">Wait a minute</span>)<br>
좀 더 재밌는 걸 찾아갈 뿐이지 (What)<br>
Just keep it going up (<span class="h">Up, up, up, up</span>)<br>
그때 너를 발견한 거야 두 눈이 마주친 다음 <span class="h">[Hey~~~~]</span><br>
That thing that you do<br>
That thing that you do, 불현듯이 내맘이 <span class="h">[Hey~~~~]</span><br>
Yeah, diamond in my heart 반쯤 홀린 듯<br>
<span class="h">What's the deal?</span><br>
Always in my head, you a repeat of my <span class="h">favorite song</span><br>
나의 머리엔 새로운 감정들이 <u>느껴져 <span class="h">嫩ㄍㄧㄡ糾</span></u>  <br>
완전히 다른 세상이 all around<br>
Get up, let's go another round<br>
            </p>
            <p>
It's like gold <span class="h">[G! O! L! D!]</span><br>
눈을 뗄 수 없이 glow<br>
<span class="h">Day and night, we beaming, blazing just like that<br>
Day and night, we beaming, blazing just like that</span><br>
It's like gold <span class="h">[G! O! L! D!]</span><br>
거부할 수 없이 glow<br>
<span class="h">Day and night, we beaming, blazing just like that</span><br>
Head to toe, we're G-O-L-D, <span class="h">gold</span><br>
            </p>
            <p>
Gold in the air, gold everywhere<br>
디딜 틈조차 없는 shadow 너라는 존재로<br>
Hey, 나는 이제 저 멀리 빛나는<br>
별보다 밝게 타오르게 돼<br>
(<span class="h">Hey~~~~</span>) What you want to do?<br>
What you want to do? 조금 위험한 느낌(<span class="h">Hey~~~~</span>), ooh<br>
Yeah, diamond in my heart, 가빠지는 숨<br>
<span class="h">What's the dеal?</span><br>
Always in my head, you a repeat of my <span class="h">favorite song</span><br>
나의 심장에 낯선 감정들이 <u>느껴져 <span class="h">嫩ㄍㄧㄡ糾</span></u>  <br>
완전히 다른 세상이 all around<br>
Get up, let's go another round<br>
            </p>
            <p>
It's like gold <span class="h">[G! O! L! D!]</span><br>
눈을 뗄 수 없이 glow<br>
<span class="h">Day and night, we beaming, blazing just like that<br>
Day and night, we beaming, blazing just like that</span><br>
It's like gold <span class="h">[G! O! L! D!]</span><br>
거부할 수 없이 glow<br>
<span class="h">Day and night we beaming blazing just like that</span><br>
Head to toe, we're G-O-L-D, gold<br>
<span class="h">[HwangYeji! ChoiJisu! ShinRyujin! LeeChaeryeong! ShinYuna! 用握逆！必那就！just like that!]</span><br>
Yeah<br>
            </p>
            <p>
It's like, it's like, it's like, it's like gold <span class="h">[G! O! L! D!]</span><br>
계속 날 이끄는 glow<br>
<span class="h">Day and night, we beaming, blazing just like that<br>
Day and night, we beaming, blazing just like that</span><br>
It's like gold <span class="h">[G! O! L! D!]</span><br>
눈을 감아봐도 glow<br>
<span class="h">Day and night, we beaming, blazing just like that</span><br>
Head to toe, we're G-O-L-D, <span class="h">gold</span><br>
            </p>`
    },
    {
        id: "Kiss&Tell",
        title: "Kiss & Tell",
        category: "ITZY",
        youtubeId: "zu1bwdcNv7I",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/LZmO9XBMMFHajD5sXg",
        videoRefUrl: "https://www.youtube.com/watch?v=VDm73w7h6Ac&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=22",
        lyricsHTML: `<p>
Did you hear that? <span class="h">[What?]</span><br>
So did you hear that? <span class="h">[What?]</span><br>
So did you hear that? <span class="h">[What?]</span><br>
So what do you think?<br>
            </p>
            <p>
내버려둬 your lips, 중요한 게 <u>아냐 <span class="h">阿ㄋㄧㄚ</span></u>  <br>
쌓이는 gossip, 신경 끄면 <u>그만 <span class="h">可曼</span></u>  <br>
난 오직 focus on me, 사실 다른 건 잘 닿지가 않아<br>
Can't you see? 제대로 날 한 번 캐내 봐 now, now<br>
            </p>
            <p>
아쉽게도 재미없지, I'm not sorry<br>
어떻게 날 생각해도 <span class="h">let it slide, ayy</span><br>
어차피 다른 sight, 앞만 보고가 more, worth it, worth it<br>
I bet you wanna know how we look this good, like<br>
            </p>
            <p>
Come and <span class="h">kiss and tell</span><br>
상관 안 해, don't mind, mwah<br>
Come and <span class="h">kiss and tell</span><br>
있는 그대로야, mwah<br>
Nothing you can tell<br>
내가 제일 잘 알아, but<br>
<span class="h">I don't talk, let 'em talk</span>, nah<br>
I bet you wanna know how we look this good, like<br>
            </p>
            <p>
Did you hear that? <span class="h">[What?]</span><br>
So did you hear that? <span class="h">[What?]</span><br>
So did you hear that? <span class="h">[What?]</span><br>
So what do you think?<br>
            </p>
            <p>
아마도 모든 게 다 temptation<br>
의도치 않아도 domination<br>
시선은 계속 busy, 지금 보이는 게 전부야 난<br>
Keep saying, 한 걸음조차, you can never stop me<br>
            </p>
            <p>
아쉽게도 지루하지, I'm not sorry<br>
어떻게 날 생각해도 <span class="h">let it slide, ayy</span><br>
어차피 다른 sight, 앞만 보고가 more, worth it, worth it<br>
I bet you wanna know how we look this good, like<br>
            </p>
            <p>
Come and <span class="h">kiss and tell</span><br>
상관 안 해, don't mind, mwah<br>
Come and <span class="h">kiss and tell</span><br>
있는 그대로야, mwah<br>
Nothing you can tell<br>
내가 제일 잘 알아, but<br>
<span class="h">I don't talk, let 'em talk</span>, nah<br>
I bet you wanna know how we look this good, like<br>
            </p>
            <p>
We've been working it<br>
Doesn't matter come in<br>
알잖아 what is right, <span class="h">talking, talking</span><br>
It never stops<br>
사소한 건 뒤로 넘겨 난 <u>훅 <span class="h">互</span></u>  <br>
오로지 나만이 내게는 <u>축 <span class="h">ㄑㄧㄨ</span></u>  <br>
Whatever, <span class="h">go</span>, whoever, <span class="h">go</span><br>
뭐라든, I'll eat it up<br>
            </p>
            <p>
이대로 난 계속 한 걸음 더 right here (이대로 난, right here)<br>
I'll leave it all, 다른 건 다, <span class="h">back of me, ayy</span> (Yeah, yeah, yeah)<br>
하나씩 올라가, 내 맘대로 keep on, <span class="h">walking, walking</span> (올라올라)<br>
I bet you wanna know how we look this good like (Oh)<br>
            </p>
            <p>
Come and <span class="h">kiss and tell</span> (Ooh)<br>
상관없어 your mind, mwah<br>
Come and <span class="h">kiss and tell</span><br>
따라가 난 my heart, mwah (Yeah, me)<br>
Nothing you can tell<br>
누구보다 잘 알아, but<br>
<span class="h">I don't talk, let 'em talk</span>, nah<br>
I bet you wanna know how we look this good, like<br>
            </p>
            <p>
Did you hear that?<br>
So did you hear that? (Uh, uh, uh)<br>
So did you hear that?<br>
So what do you think? What do you think? <span class="h">[kiss and tell]</span> (Oh)<br>
Did you hear that? (Ah, oh)<br>
So did you hear that?<br>
<span class="h">I don't talk, let 'em talk</span>, nah <br>
I bet you wanna know how we look this good, like<br>
            </p>`
    },
    {
        id: "GirlsWillBeGirls",
        title: "Girls Will Be Girls",
        category: "ITZY",
        youtubeId: "1KhOhW_O8-k",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/GmN1izCz7q4F4DZUOD",
        videoRefUrl: "https://www.youtube.com/watch?v=ck8y0fDWhhk&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=21",
        lyricsHTML: `<p>
Girls will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls, will be girls(<span class="h">Ah, yeah, yeah, yeah</span>)<br>
Girls will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls (<span class="h">Ah, yeah, yeah, yeah</span>)<br>
            </p>
            <p>
Street 위로 당긴 trigger <span class="h">[trigger]</span><br>
불이 붙어 버린 심장 <span class="h">[新薑]</span><br>
Giddy, giddy, here we go, my friend<br>
Ooh, ooh, ooh<br>
나를 구원해 줄 hero <span class="h">[hero]</span><br>
따윈 원치 않는 ego <span class="h">[ego]</span> (Uh-huh)<br>
기다리는 건 <span class="h">not my way</span><br>
I slay, I slay, I slay<br>
            </p>
            <p>
두 손에 꽉 움켜쥔<br>
내 모든 걸 throw it all<br>
기꺼이 난 drop<br>
너의 손을 대신 hold<br>
이건 우리라는 syndrome<br>
We're gonna paint the void<br>
Count, <span class="h">three, two, one,</span> we all scream<br>
Let me hear you sing<br>
            </p>
            <p>
Girls will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls(<span class="h">Ah, yeah, yeah, yeah</span>)<br>
Girls will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls<br>
            </p>
            <p>
<span class="h">Ah, yeah, yeah, yeah</span><br>
Ah, yeah, yeah, yeah<br>
세상에 울린 our siren<br>
잠든 열기를 깨워내<br>
<span class="h">Ah, yeah, yeah, yeah</span><br>
Ah, yeah, yeah, yeah (Ooh, yeah)<br>
Count, <span class="h">three, two, one</span><br>
We all scream (Girls will be girls, yeah)<br>
            </p>
            <p>
현실이란 때론 <span class="h">black out</span><br>
All the way downtown to the city (Uh-huh)<br>
You'll be alright (Yeah), 그때마다 (Yeah)<br>
네 손 잡아줄 나이니 (Oh, yeah)<br>
<span class="h">Finally</span>, 하나가 된 우릴<br>
<span class="h">Who can block?</span> We'll keep going on<br>
Ooh, ooh, ooh<br>
Ah, we're<br>
깨진 유리 위라 해도<br>
딛고 서 hit the road<br>
기꺼이 난 go<br>
너와 함께라면 glow<br>
커져가는 our synergy<br>
한 걸음마다 blow (한 걸음마다, we blow)<br>
            </p>
            <p>
Count, <span class="h">three, two, one,</span> we all scream<br>
Girls will be girls, yeah<br>
<span class="tip">數兩個八拍</span><br>
Gi-gi-gi-girls will be<br>
<span class="h">[HwangYeji! ChoiJisu! ShinRyujin! LeeChaeryeong! ShinYuna! IT! ZY!]</span><br>
<span class="h">Girls, girls, girls, g-g-g-g</span><br>
Girls will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls (Oh; <span class="h">Ah, yeah, yeah, yeah</span>)<br>
Girls will be girls ,will be girls(Ah, yeah, yeah, yeah)<br>
Will be girls, will be girls<br>
Will be girls, will be girls<br>
Will be girls<br>
<span class="h">Ah, yeah, yeah, yeah</span><br>
Ah, yeah, yeah, yeah<br>
더 크게 울릴 our siren<br>
함께 가줄게 to the end<br>
<span class="h">Ah, yeah, yeah, yeah</span><br>
Ah, yeah, yeah, yeah<br>
Count, <span class="h">three, two, one</span><br>
We all scream (Girls will be girls, yeah)<br>
            </p>`
    },
    {
        id: "NoneofMyBusiness",
        title: "None of My Business",
        category: "ITZY",
        youtubeId: "FcQ6oB1JPiA",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/OpiaxicwzUmSZ3ggrS",
        videoRefUrl: "https://www.youtube.com/watch?v=BjI7X4T6soM&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=18",
        lyricsHTML: `<p>
It's none of my <span class="h">business</span>, none of my <span class="h">business</span><br>
None of my <span class="h">business</span>, what you do?<br>
똑같은 <u>매일 <span class="h">妹意</span></u> 반복된 <u>얘기 <span class="h">耶ㄍㄧ</span></u>  <br>
어긋나 버린 me and <span class="h">you</span><br>
            </p>
            <p>
완전히 달라진 넌 tragic (Tragic)<br>
너만 보면 자꾸 현기증이 나 (나)<br>
미쳐버린 이 여름도 crazy (Crazy)<br>
열대야보다 더 짜증나는 우리<br>
가시 돋친 말<u>투 <span class="h">吐</span></u>  <br>
삐뚤어져 like <span class="h">you</span>, yeah<br>
멈출 수 없는 우리 사이<br>
선 넘지 마 I don't care how you feel<br>
            </p>
            <p>
You, <span class="h">you, you, you</span><br>
쨍한 너와 나 우리 그리고 둘<br>
다가온 이별 같아<br>
어느 때보다 싫은 여름<br>
            </p>
            <p>
It's none of my <span class="h">business</span>, none of my <span class="h">business</span><br>
None of my <span class="h">business</span>, what you do?<br>
똑같은 <u>매일 <span class="h">妹意</span></u> 반복된 <u>얘기 <span class="h">耶ㄍㄧ</span></u>  <br>
어긋나 버린 me and <span class="h">you</span><br>
None of my <span class="h">business</span>, none of my <span class="h">business</span><br>
None of my <span class="h">business</span>, what you do?<br>
고장 난 <u>매일 <span class="h">妹意</span></u> 뒤틀린 <u>얘기 <span class="h">耶ㄍㄧ</span></u>  <br>
이미 멀어진 me and <span class="h">you</span><br>
            </p>
            <p>
Cool하기는커녕 찌는 이 습도 속 (Oh, no)<br>
익숙했던 손길마저 싫증나는 기분 (Oh, well)<br>
흐르는 땀방울처럼<br>
온 몸이 끈적거리고<br>
머리는 지끈거리고<br>
짜증만 날 뿐이야<br>
경계조차 모호해진 <span class="h">day and night</span> (Night, night)<br>
그럴수록 멀어지는 <span class="h">you and I</span> (And I)<br>
고장 나 버린 둘 사이 we know it<br>
찐득한 체온을 넘어<br>
후끈한 밤 공기마저<br>
모든 게 어지러워<br>
            </p>
            <p>
You, <span class="h">you, you, you</span><br>
쨍한 너와 나 우리 그리고 둘 (그리고 둘)<br>
다가온 이별 같아<br>
어느 때보다 싫은 여름<br>
            </p>
            <p>
It's none of my <span class="h">business</span>, none of my <span class="h">business</span> (None of my business)<br>
None of my <span class="h">business</span>, what you do? (What you do?)<br>
똑같은 <u>매일 <span class="h">妹意</span></u> 반복된 <u>얘기 <span class="h">耶ㄍㄧ</span></u>  <br>
어긋나 버린 me and you<br>
None of my <span class="h">business</span>, none of my <span class="h">business</span>(None of my business)<br>
None of my <span class="h">business</span>, what you do? (What you do?)<br>
고장 난 <u>매일 <span class="h">妹意</span></u> 뒤틀린 <u>얘기 <span class="h">耶ㄍㄧ</span></u>  <br>
이미 멀어진 me and <span class="h">you</span> (Oh-oh-oh, ooh-woah)<br>
            </p>
            <p>
Na-na-na-na-na-na, na-na-na-na-na-na<br>
<mark>None of my business<br>
<span class="h">[NO! 媽！必！]</span></mark> <br>
Na-na-na-na-na-na, na-na-na-na-na-na<br>
Don't care what you do<br>
            </p>
            <p>
더 이상 알 바 아님 (Uh)<br>
I don't care to know what you want (Ooh)<br>
우리 둘 사일 되돌리려 <u>애쓰지 마 <span class="h">ㄟ司機嗎</span></u> (Uh-huh)<br>
I'm not okay 이럴수록 지칠 뿐이고, huh<br>
I don't care 벗어나고 싶은 이 여름 (Ooh)<br>
며칠이 지나도 <u>똑같은데 <span class="h">都嘎ㄊㄣ ㄉㄟ</span></u><br>
알잖아 더 이상 내게 <u>뭘 더 바래 <span class="h">木耳都霸類</span></u>  <br>
Baby, don't miss me, miss me<br>
You don't have to <span class="h">miss me</span><br>
우릴 내려 놔 이젠 허튼 다툼 대신 (우릴 내려 놔; Miss me~)<br>
            </p>
            <p>
It's none of my <span class="h">business</span>, none of my <span class="h">business</span><br>
None of my <span class="h">business</span>, what you do?<br>
똑같은 <u>매일 <span class="h">妹意</span></u>   반복된 <u>얘기 <span class="h">耶ㄍㄧ</span></u>  <br>
어긋나 버린 me and <span class="h">you</span> (None of my business)<br>
None of my <span class="h">business</span>, none of my <span class="h">business</span><br>
None of my <span class="h">business</span>, what you do?<br>
고장 난 <u>매일 <span class="h">妹意</span></u> 뒤틀린 <u>얘기 <span class="h">耶ㄍㄧ</span></u>  <br>
이미 멀어진 me and <span class="h">you</span><br>
            </p>
            <p>
Na-na-na-na-na-na, na-na-na-na-na-na<br>
<mark>None of my business<br>
<span class="h">[NO! 媽！必！]</span></mark> <br>
Na-na-na-na-na-na, na-na-na-na-na-na<br>
Don't care what you do<br>
            </p>
            <p>
It's none of my business, none of my business<br>
<mark>None of my business<br>
<span class="h">[NO! 媽！必！]</span></mark> <br>
what you do? (None of my business)<br>
똑같은 <u>매일 <span class="h">妹意</span></u> 반복된 <u>얘기 <span class="h">耶ㄍㄧ</span></u>  <br>
어긋나 버린 me and you<br>
<mark>None of my business<br>
<span class="h">[NO! 媽！必！]</span></mark> <br>
            </p>`
    },
    {
        id: "Air",
        title: "Air",
        category: "YEJI",
        artist: "YEJI",
        themeOverride: {
            main: "#3c3c44",
            light: "#eeeefa",
            bg: "#CDDBEE"
        },
        youtubeId: "TamDOXponnM",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/yeji-itzy-air",
        videoRefUrl: "https://www.youtube.com/watch?v=nEGU6pbRGDk",
        lyricsHTML:`<p>
<span class="h">[Hwang! Ye! ji!]</span><br>
Every last breath<br>
달콤해진 oxygen, insane<br>
호흡의 방법은<br>
전부 잊게 돼 oh<br>
            </p>
            <p>
Gonna take a <span class="h">chance</span><br>
Give up all the <span class="h">plans</span><br>
알 수 없는 힘에 이끌려가게 돼<br>
빨라진 step 다른 건 다 잊은 채<br>
온몸을 던질래<br>
            </p>
            <p>
Takin’ my air<br>
거부할 수 없는 이 느낌<br>
oh <span class="h">baby</span><br>
Got in my prayers<br>
내게 집중한 순간 더 <u>깊이 <span class="h">ㄍㄧ匹</span></u> <br>
            </p>
            <p>
You keep takin' all of my <span class="h">air, air, air</span><br>
All my <span class="h">air, air, air</span><br>
묶인 시선 <u>끝에 <span class="h"></span></u> you take my breath <span class="h">away</span><br>
Takin' my air<br>
피할 수 없는 이 feeling <span class="h">[feeling]</span><br>
You keep takin' all of my<br>
            </p>
            <p>
Here it comes<br>
또 불어오는 second wind, oh, yeah<br>
Why would I stay?<br>
가볼래 let it begin (yeah, yeah, yeah, yeah, yeah)<br>
            </p>
            <p>
I'm gonna take a <span class="h">chance</span>, <br>
give up all the <span class="h">plans</span><br>
이 순간 너와 나 말곤 아득해 yeah<br>
끝없는 chase 이젠 멈추진 못해<br>
And here I go again<br>
            </p>
            <p>
Takin' my air (air)<br>
거부할 수 없는 이 느낌 (oh-whoa-ooh) oh, <span class="h">baby</span><br>
Got in my prayers (in my prayers now)<br>
내게 집중한 순간 더 <u>깊이 <span class="h">ㄍㄧ匹</span></u>  (no, no, no, no)<br>
            </p>
            <p>
You keep takin' all of my <span class="h">air, air, air</span><br>
All my <span class="h">air, air, air</span><br>
묶인 시선 <u>끝에 <span class="h">哭ㄊㄟ</span></u> you take my breath <span class="h">away</span><br>
Takin' my air (takin' my air)<br>
피할 수 없는 이 feeling (<span class="h">feeling</span>)<br>
You keep takin' all of my<br>
            </p>
            <p>
Air<br>
Ooh, it feels so right<br>
Air<br>
Ooh, I'm burning so bright<br>
<span class="h">[Ye! ji! A! ir!]</span><br>
            </p>
            <p>
Takin' my air (air)<br>
내게 빠져든 순간 fallin' (내게 빠져든 순간 fallin')<br>
Oh, <span class="h">baby</span> (oh, baby)<br>
Got in my head (got in my head)<br>
벗어날 수 없는 이 <u>느낌 <span class="h">ㄋ ㄍㄧㄣ</span></u>  (fallin')<br>
            </p>
            <p>
You keep takin' all of my <span class="h">air, air, air</span> (all my air)<br>
All my <span class="h">air, air, air</span> (all my air)<br>
묶인 시선 <u>끝에 <span class="h">哭ㄊㄟ</span></u> you take my breath <span class="h">away</span> (oh)<br>
Takin' my <span class="h">air, air, air</span><br>
All my <span class="h">air, air, air</span> (all my air, air, air)<br>
멈출 수가 <u>없게 <span class="h">喔給</span></u> , 나를 숨 멎게 해 (takin' my, takin' my)<br>
<span class="h">[八邱禿囉 HwangYeji! 西搜ㄎㄊㄟ HwangYeji! ㄙ摸給嘿 HwangYeji!]</span><br>
            </p>`
    },
    {
        id: "TUNNELVISION",
        title: "TUNNEL VISION",
        category: "ITZY",
        youtubeId: "piSq8IioghU",
        sourceUrl: "https://www.kkbox.com/tw/tc/song/5XAZI_UfELRufX_Dve",
        videoRefUrl: "https://www.youtube.com/watch?v=GWrenfM27LI&list=PLMm9joTloBEJVJEslMdsvReoFATDSiuzt&index=23",
        lyricsHTML: `<p>
<span class="h">[Yeah!] [Yeah!]<br>
Yeah, yeah</span><br>
Eyes on the quest I don't take va<span class="h">cation</span><br>
잠 못 들어도 Cause I got that <span class="h">patience</span><br>
한계점은 Nah 끓어올라 Am<span class="h">bition</span><br>
I'll show my reign 집중 Standing o<span class="h">vation</span><br>
Small talk은 Pass I worked hard for this<br>
Got my poker face 날 예측 못해<br>
알아 What's my game 목표는 Never miss <span class="h">[Never miss]</span><br>
            </p>
            <p>
<span class="h">Work work work</span><br>
시선은 Focused grindin' till I score<br>
가치를 높여 <span class="h">Worth worth worth</span><br>
Keep my altitude 지켜 나를 더<br>
Now I better pause 모두 집중 On alert<br>
Never backing down 내가 찾은 What I want <span class="h">[want]</span><br>
            </p>
            <p>
Nothing's gonna put me off 빛이 날 <u>비춰 <span class="h">碧秋</span></u>  <br>
I know what the hell I want<br>
Don't need per<span class="h">mission</span><br>
어둠 속 나를 넘어 My moti<span class="h">vation</span><br>
Focus on my level up<br>
I got <span class="h">tunnel vision</span><br>
Ya ah ya, ya ah ya ah<br>
Ya ah ya, ya ah ya ah<br>
Ya ah ya, ya ah ya ah<br>
Ya ah ya, ya ah ya<br>
I got <span class="h">tunnel vision</span><br>
            </p>
            <p>
Expanded version 2.<span class="h">0</span><br>
한계를 태우고 만든 Paceset<br>
Hop in my lane, oh, fast fast so long<br>
            </p>
            <p>
<span class="h">Work work work</span><br>
시선은 Focused grindin' till I score<br>
가치를 높여 <span class="h">Worth worth worth</span><br>
Keep my altitude 지켜 나를 더<br>
Now I better pause 모두 집중 On alert<br>
Never backing down 내가 찾은 What I want <span class="h">[want]</span><br>
            </p>
            <p>
Nothing's gonna put me off 빛이 날 <u>비춰 <span class="h">碧秋</span></u>  <br>
I know what the hell I want<br>
Don't need per<span class="h">mission</span><br>
어둠 속 나를 넘어 My moti<span class="h">vation</span><br>
Focus on my level up<br>
I got <span class="h">tunnel vision</span><br>
            </p>
            <p>
Never lose my sight 전부 걸어 <span class="h">[溝露]</span><br>
Keep it up I’m a stunner <span class="h">[stunner]</span><br>
시작해 Making the buzz<br>
내 Vision은 언제나 Plus<br>
Celebrate I toast<br>
피어난 꿈은 Rose<br>
Stack it up, stack it up on my own<br>
I don't flex, all the risk 이겨내 Here I go<br>
<span class="h">[go]x7</span><br>
            </p>
            <p>
Focus <span class="h">[woo~]</span><br>
Nothing's gonna put me off 빛이 날 <u>비춰 <span class="h">碧秋</span></u>  <br>
I know what the hell I want<br>
Don't need per<span class="h">mission</span><br>
어둠 속 나를 넘어 My moti<span class="h">vation</span><br>
Focus on my level up<br>
I got <span class="h">tunnel vision</span><br>
            </p>
            <p>
Ya ah ya, ya ah ya ah<br>
Ya ah ya, ya ah ya ah<br>
Ya ah ya, ya ah ya ah<br>
Ya ah ya, ya ah ya ah<br>
I got <span class="h">tunnel vision</span><br>
Ya ah ya, ya ah ya ah<br>
Ya ah ya, ya ah ya<br>
Ya ah ya, ya ah ya ah<br>
I got tunnel vision<br>
<span class="h">[Hwang~Yeji! ChoiJisu! Shin~Ryujin! LeeChaeryeong! Shin~Yuna! IT! ZY! MID! ZY!]</span><br>
I got tunnel vision <br>
            </p>`
    },
    {
        id: "Motto",
        title: "Motto",
        category: "ITZY",
        youtubeId: "1jKnI_ib8c8",
        sourceUrl: "https://lyrics.lyricfind.com/lyrics/itzy-motto",
        videoRefUrl: "https://www.youtube.com/watch?v=qw-fI7VAiPE&t=1s",
        lyricsHTML: `<p>
Mo-mo-mo-mo-mo-motto<br>
Mo-mo-mo-mo-mo-motto<br>
Mo-mo-mo-mo-mo-motto <br>
<mark><span class="h">[IT! ZY! MID! ZY!]</span><br>
(you are my motto)</mark><br>
            </p>
            <p>
두 눈을 감아<br>
I can feel you by my side<br>
All the time<br>
Oh, yeah, eh<br>
Make me fearless, uh<br>
늘 소란한 어둠을 헤맬 때<br>
Got me in a trance<br>
익숙한 너의 voice <span class="h">[撒浪嘿!]</span><br>
            </p>
            <p>
운명처럼 <span class="h">fallin'</span>, <br>
달라져 shift my <span class="h">callin'</span><br>
I know that you feel it, too<br>
You gotta trust me, <span class="h">baby</span>,<br>
기다려줘 <span class="h">you'll see</span><br>
끝내 닿을 너란 꿈<br>
            </p>
            <p>
You are my wish, 날 이끌어 <span class="h">[互!]</span><br>
You are the gleam, 날 일으켜 <span class="h">[哈!]</span><br>
세상 끝에 서 있을 때<br>
Uh 환히 나를 비춰<br>
Take me to a better place<br>
이 결말 따윈 not afraid<br>
Yeah, I need you by my side<br>
Ready? <span class="h">Dive in</span><br>
            </p>
            <p>
Take my hand<br>
Ain't, ain't nobody like you, you, you<br>
I wanna be the one<br>
너를 향해 멈추지 않아, ah<br>
Now I know<br>
널, 널 닮아 눈부실 my everything<br>
날 비춘 너<br>
Want you so bad <br>
<mark><span class="h">[逆尬ㄋㄟMotto]</span><br>
'cause you are my motto, oh</mark><br>
<span class="tip">停四拍</span>                <br>
<span class="h">[Mo! tto! MID! ZY!]</span><br>
            </p>
            <p>
너로 번져오는 delight (<span class="h">delight</span>)<br>
끝이 어딘지는 몰라 (<span class="h">what?</span>)<br>
망설이던 밤은 over (yeah)<br>
선명하게 빛나 clearly<br>
뜨거운 <u>숨이 <span class="h">素密</span></u> 날 데려가 <span class="h">swervin'</span><br>
세상 끝이라 해도 move<br>
I gotta stand<br>
            </p>
            <p>
I gotta stand, 나를 던져 <span class="h">[互!]</span><br>
Don't hesitate, 후회 없게 <span class="h">[哈!]</span><br>
Everyday, never look back<br>
Yeah, 답은 오직 너야<br>
Take me to a better place<br>
이 결말 따윈 not afraid<br>
Yeah, I need you by my side<br>
Ready? <span class="h">Dive in</span><br>
            </p>
            <p>
Take my hand<br>
Ain't, ain't nobody like you, you, you<br>
I wanna be the one<br>
너를 향해 멈추지 않아, ah<br>
Now I know<br>
널, 널 닮아 눈부실 my everything<br>
날 비춘 너<br>
Want you so bad <br>
<mark><span class="h">[內尬 逆 Motto]</span><br>
'cause you are my motto</mark>, oh<br>
            </p>
            <p>
Mo-mo-mo-mo-mo-<span class="h"></span>motto<br>
Mo-mo-mo-mo-mo-<span class="h"></span>motto<br>
Mo-mo-mo-mo-mo-<span class="h"></span>motto<br>
<mark><span class="h">[內尬 逆 motto]</span><br>
You are my motto</mark> , oh<br>
Mo-mo-mo-mo-mo-<span class="h">motto</span><br>
Mo-mo-mo-mo-mo-<span class="h">motto</span><br>
Mo-mo-mo-mo-mo-motto<br>
            </p>
            <p>
You know, I know<br>
That I need your love<br>
Let's call it us (ooh, ooh)<br>
지금 순간도 (ooh-ooh-ooh-ooh)<br>
함께한 시간의 <u>끝에 <span class="h">ㄍㄉㄟˋ</span></u> <br>
내 안을 채우는 <span class="h">something</span><br>
Call you any time<br>
When I need someone, you<br>
<span class="h">[HwangYeji! ChoiJisu! ShinRyujin! LeeChaeryeong! ShinYuna! Motto!]</span><br>
            </p>
            <p>
Oh, now I know<br>
Take me there like that<br>
            </p>
            <p>
Take my hand (ah)<br>
Ain't, ain't nobody like you, you, you<br>
I wanna be the one (the one)<br>
너를 향해 멈추지 않아, ah (ah)<br>
As you know<br>
Feeling so meant to be, 이 떨림이<br>
Don't take it slow (oh, oh)<br>
하나가 돼 <br>
<mark><span class="h">[內尬 逆 Motto]</span><br>
'cause you are my motto</mark>, oh (you are my motto)<br>
            </p>
            <p>
Mo-mo-mo-mo-mo-<span class="h">motto</span> (my motto, baby)<br>
Mo-mo-mo-mo-mo-<span class="h">motto</span> (yeah, you know)<br>
Mo-mo-mo-mo-mo-<span class="h">motto</span><br>
<mark><span class="h">[內尬 逆 Motto]</span><br>
You are my motto</mark>, oh (my motto)<br>
Mo-mo-mo-mo-mo-<span class="h">motto</span><br>
Mo-mo-mo-mo-mo-<span class="h">motto</span><br>
Mo-mo-mo-mo-mo-motto<br>
<span class="h">[Motto! ITZY!]</span><br>
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