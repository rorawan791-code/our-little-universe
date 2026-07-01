const hiddenStar = document.getElementById("hidden-star");
const secretLetter = document.getElementById("secretLetter");
const letterText = document.getElementById("letterText");
const closeLetter = document.getElementById("closeLetter");

hiddenStar.onclick = function () {
    letterText.textContent = "";
    secretLetter.style.display = "flex";

    const text = `هاي زوجي المستقبلي ❤️

I love you baby...`;

    clearInterval(window.typingInterval);
    let i = 0;

    window.typingInterval = setInterval(() => {
        letterText.textContent += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(window.typingInterval);
    }, 40);
};

closeLetter.onclick = () => {
    clearInterval(window.typingInterval);
    secretLetter.style.display = "none";
};

secretLetter.onclick = (e) => {
    if (e.target === secretLetter) {
        secretLetter.style.display = "none";
    }
};

const rusticaPopup = document.getElementById("rusticaPopup");

rusticaPopup.onclick = (e) => {
    if (e.target === rusticaPopup) {
        rusticaPopup.style.display = "none";
    }
};

const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");
let isPlaying = false;

musicBtn.onclick = function () {
    if (!isPlaying) {
        song.play();
        musicBtn.innerHTML = "⏸ Pause";
    } else {
        song.pause();
        musicBtn.innerHTML = "▶ Play";
    }
    isPlaying = !isPlaying;
};

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i) {
    slides.forEach(s => s.style.display = "none");
    slides[i].style.display = "flex";
}

document.getElementById("nextBtn").onclick = () => {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
};

showSlide(0);
