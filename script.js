// ===== ENTER BUTTON =====
document.getElementById("enterBtn").onclick = function () {
this.innerHTML = "❤️ Welcome Home ❤️";
document.body.style.background =
"linear-gradient(180deg,#030712,#0f1f52,#29124d)";
};

// ===== COUNTERS =====
const engagedDate = new Date("2025-01-24");
const weddingDate = new Date("2026-08-28");

function updateCounters() {
const today = new Date();

const engagedDays = Math.floor((today - engagedDate)/(1000606024));
const weddingDays = Math.floor((weddingDate - today)/(1000606024));

const cards = document.querySelectorAll(".time-card");

cards[0].querySelector("p").innerHTML =
24 January 2025<br>${engagedDays} days together ❤️;

cards[1].querySelector("p").innerHTML =
28 August 2026<br>${weddingDays} days left 💍;
}

updateCounters();

// ===== LOVE HEART =====
const loveMessages = [
"I'm proud of you.",
"You're my safe place.",
"I miss you.",
"I love you more than words can say.",
"You are my forever ❤️"
];

const heart = document.getElementById("love-heart");
const message = document.getElementById("love-message");
const achievement = document.getElementById("achievement");

let count = 0;

heart.onclick = function () {

const random = Math.floor(Math.random()*loveMessages.length);
message.innerHTML = loveMessages[random];

count++;

if(count % 25 === 0){
achievement.innerHTML = "🏆 Achievement Unlocked: Love Explorer ❤️";
}

if(count === 100){
achievement.innerHTML = "You really miss me that much, huh? 🤍";
}
};

// ===== PLANET RUSTICA =====
document.getElementById("rusticaBtn").onclick = function () {
document.getElementById("rusticaPopup").style.display = "flex";
};

document.getElementById("closeRustica").onclick = function () {
document.getElementById("rusticaPopup").style.display = "none";
};

// ===== HIDDEN STAR =====

const hiddenStar = document.getElementById("hidden-star");
const secretLetter = document.getElementById("secretLetter");
const closeLetter = document.getElementById("closeLetter");
const letterText = document.getElementById("letterText");

hiddenStar.onclick = function () {

letterText.textContent = "";  
letterText.style.whiteSpace = "pre-line";  
secretLetter.style.display = "flex";  

const text = `هاي زوجي المستقبلي و حبيب عيوني

بكتبلك الكلام ده وأنا عارفة إننا الاتنين مطحونين، وبقالنا فترة كلامنا ومكالماتنا كلها عبارة عن (جبت إيه؟، ناقص إيه؟، المشوار الفلاني هنعمل فيه إيه؟)

أنا عارفة ومقدرة التعب والضغط اللي أنت فيه الفترة دي وشايفة كل مجهود بتعمله عشان بيتنا يطلع حلو وعشان نكون سوا. أنا بجد فخورة بيك وبمشاويرك وتعبك، وممتنة لكل خطوة بتتعب فيها علشاني وعلشان مستقبلنا، حتى لو بسبب الضغط مش بعرف أعبر عن ده.

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

let i = 0;  

window.typingInterval = setInterval(function(){  

    letterText.textContent += text.charAt(i);  

    i++;  

    if(i >= text.length){  
        clearInterval(window.typingInterval);  
    }  

}, 40);

};

closeLetter.onclick = function () {
clearInterval(window.typingInterval);
secretLetter.style.display = "none";
};

secretLetter.onclick = function(event){
if(event.target === secretLetter){
clearInterval(window.typingInterval);
secretLetter.style.display = "none";
}
};

// ===== MUSIC =====
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

let isPlaying = false;

musicBtn.onclick = function () {
if (!isPlaying) {
song.play();
musicBtn.innerHTML = "⏸ Pause Song";
} else {
song.pause();
musicBtn.innerHTML = "🎵 Our Song";
}
isPlaying = !isPlaying;
};

const rusticaPopup = document.getElementById("rusticaPopup");

rusticaPopup.onclick = function(event) {
if (event.target === rusticaPopup) {
rusticaPopup.style.display = "none";
}
};
