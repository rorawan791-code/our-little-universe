let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");

function showSlide(i){
    slides.forEach(s=>s.style.display="none");
    slides[i].style.display="flex";
}

nextBtn.onclick = ()=>{
    currentSlide++;
    if(currentSlide>=slides.length) currentSlide=0;
    showSlide(currentSlide);
};

showSlide(0);

// ===== HEART =====
const heart = document.getElementById("love-heart");
const msg = document.getElementById("love-message");

let messages = [
"You are my today and all of my tomorrows.",
"My heart is and always will be yours.",
"In your smile, I see something more beautiful than the stars.",
"You're my favorite place to go when my mind searches for peace.",
"Loving you is the best thing I’ve ever done.",
"Every day with you is a wonderful addition to my life's journey.",
"You make my heart skip a beat.",
"Just when I think it's impossible to love you more, you prove me wrong.",
"You are my sunshine on a rainy day.",
"Your voice is my favorite sound.",
"I need you like a heart needs a beat.",
"Forget the butterflies, I feel the whole zoo when I'm with you!",
"Thank you for always being my safe place.",
"I miss you more than words can say.",
"Life is so much better with you in it.",
"No matter where I go, the closest place is always next to you.",
"You occupy my mind more than my own thoughts do.",
"Holding your hand is how I want to spend my forever.",
"You are my everything.",
"Forever isn't long enough with you.",
"My love for you grows every single day.",
"You have my whole heart for my whole life.",
"Home is wherever you are.",
"Still falling for you every day.",
"Good morning to the person who makes every day bright.",
"You are the first thought in my morning and the last one at night.",
"Dreaming of you is my favorite way to sleep.",
"I hope your day is as beautiful as your smile.",
"Can't wait to fall asleep in your arms again.",
"May your dreams be as sweet as you are. Goodnight."
];

let i = 0;

heart.onclick = ()=>{
    msg.textContent = messages[i];
    i = (i+1)%messages.length;
};

// ===== SECRET LETTER =====
const star = document.getElementById("hidden-star");
const popup = document.getElementById("secretLetter");
const textBox = document.getElementById("letterText");
const closeLetter = document.getElementById("closeLetter");

star.onclick = ()=>{

    popup.style.display="flex";

    textBox.textContent = "";
    textBox.style.whiteSpace = "pre-line";

    const text = `هاي زوجي المستقبلي و حبيب عيوني ❤️

بكتبلك الكلام ده وأنا عارفة إننا الاتنين مطحونين، وبقالنا فترة كلامنا ومكالماتنا كلها عبارة عن (جبت إيه؟، ناقص إيه؟، المشوار الفلاني هنعمل فيه إيه؟)

أنا عارفة ومقدرة التعب والضغط اللي أنت فيه الفترة دي وشايفة كل مجهود بتعمله عشان بيتنا يطلع حلو وعشان نكون سوا. أنا بجد فخورة بيك وبمشاويرك وتعبك وممتنة لكل خطوة بتتعب فيها علشاني وعلشان مستقبلنا حتى لو بسبب الضغط مش بعرف أعبر عن ده.

عارف؟ في وسط خناقاتنا وااختلافاتنا الصغيرة بتاعة التجهيزات، بفتكر إن شهرين وكل الدوشة دي تخلص والباب يتقفل علينا...

and it's Worth it ❤️

أنا مش عايزة ضغط الأيام دي ينسينا إحنا بنعمل كل ده ليه.

إحنا بنعمل ده عشان بنحب بعض، وعشان مفيش حد في الدنيا دي كلها ينفع أكون معاه غيرك أنت.

وعشان من البداية قولت إن كل الأشخاص فيهم عيوب، وكل العلاقات فيها مشاكل، لكن أنت الشخص الوحيد اللي مستعدة أخوض ده معاه.

وتذكير سريع...

إني بحبك وإحنا كويسين.
وبحبك وإحنا متخانقين.
وبحبك كامل.
وبحب عيوبك.
وبحبك وإحنا ساكتين، زي ما بحبك وإحنا بنتكلم 24/7.

وبحبك دلوقتي...
وهحبك أكتر.

❤️

I love you baby,
can't wait to be yours...

Your woman 🫂`;

    clearInterval(window.typingInterval);

    let index = 0;

    window.typingInterval = setInterval(()=>{

        textBox.textContent += text.charAt(index);
        index++;

        if(index >= text.length){
            clearInterval(window.typingInterval);
        }

    },40);

};

closeLetter.onclick = ()=>{
    clearInterval(window.typingInterval);
    popup.style.display="none";
};

popup.onclick = (event)=>{
    if(event.target===popup){
        clearInterval(window.typingInterval);
        popup.style.display="none";
    }
};

// ===== RUSTICA =====
const rusticaBtn = document.getElementById("rusticaBtn");
const rusticaPopup = document.getElementById("rusticaPopup");
const closeRustica = document.getElementById("closeRustica");

rusticaBtn.onclick = ()=>rusticaPopup.style.display="flex";
closeRustica.onclick = ()=>rusticaPopup.style.display="none";

// ===== MUSIC =====
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

musicBtn.onclick = ()=>{
    if(song.paused){
        song.play();
        musicBtn.textContent="⏸ Pause";
    }else{
        song.pause();
        musicBtn.textContent="▶ Play";
    }
};

// ===== COUNTDOWN =====

function updateCountdown(){

const now = new Date();

const engagedDate = new Date("2025-01-24T00:00:00");
const weddingDate = new Date("2026-08-28T00:00:00");

// منذ الخطوبة
let diff1 = now - engagedDate;

let days1 = Math.floor(diff1/(1000*60*60*24));
let hours1 = Math.floor((diff1/(1000*60*60))%24);
let mins1 = Math.floor((diff1/(1000*60))%60);
let secs1 = Math.floor((diff1/1000)%60);

document.getElementById("engagedCountdown").textContent =
`${days1} Days ${hours1} Hours ${mins1} Minutes ${secs1} Seconds`;

// المتبقي للزفاف
let diff2 = weddingDate - now;

let days2 = Math.floor(diff2/(1000*60*60*24));
let hours2 = Math.floor((diff2/(1000*60*60))%24);
let mins2 = Math.floor((diff2/(1000*60))%60);
let secs2 = Math.floor((diff2/1000)%60);

document.getElementById("weddingCountdown").textContent =
`${days2} Days ${hours2} Hours ${mins2} Minutes ${secs2} Seconds`;

}

updateCountdown();
setInterval(updateCountdown,1000);
