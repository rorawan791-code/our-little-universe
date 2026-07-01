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
let messages = ["I love you ❤️","Always ❤️","Forever ❤️","My universe ❤️"];
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
    let text = "I love you baby ❤️";
    textBox.textContent = text;
};

closeLetter.onclick = ()=>popup.style.display="none";

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
