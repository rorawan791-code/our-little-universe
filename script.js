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

const engagedDays = Math.floor((today - engagedDate)/(1000*60*60*24));
const weddingDays = Math.floor((weddingDate - today)/(1000*60*60*24));

const cards = document.querySelectorAll(".time-card");

cards[0].querySelector("p").innerHTML =
`24 January 2025<br>${engagedDays} days together ❤️`;

cards[1].querySelector("p").innerHTML =
`28 August 2026<br>${weddingDays} days left 💍`;
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
alert(`☕ Planet Rustica

One of our happiest memories...

❤️`);
};

// ===== HIDDEN STAR =====
document.getElementById("hidden-star").onclick = function () {
let text = `We were never just a story...
we were a universe written in stars.

I love you baby.
Can't wait to be yours...
Your woman 🫂`;

let i = 0;
let out = "";

let interval = setInterval(() => {
out += text[i];
document.getElementById("achievement").innerHTML = out;
i++;
if(i >= text.length) clearInterval(interval);
}, 40);
};

// ===== MUSIC =====
document.getElementById("musicBtn").onclick = function () {
const audio = document.getElementById("song");
audio.play();
};
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
