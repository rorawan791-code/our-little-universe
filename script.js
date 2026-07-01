const hiddenStar = document.getElementById("hidden-star");
const secretLetter = document.getElementById("secretLetter");
const letterText = document.getElementById("letterText");
const closeLetter = document.getElementById("closeLetter");

hiddenStar.onclick = function () {
    letterText.textContent = "";
    letterText.style.whiteSpace = "pre-line";
    secretLetter.style.display = "flex";

    const text = `هاي زوجي المستقبلي و حبيب عيوني 

بكتبلك الكلام ده وأنا عارفة إننا الاتنين مطحونين، وبقالنا فترة كلامنا ومكالماتنا كلها عبارة عن (جبت إيه؟، ناقص إيه؟، المشوار الفلاني هنعمل فيه إيه؟)

أنا عارفة ومقدرة التعب والضغط اللي أنت فيه الفترة دي وشايفة كل مجهود بتعمله عشان بيتنا يطلع حلو وعشان نكون سوا. أنا بجد فخورة بيك وبمشاويرك وتعبك، وممتنة لكل خطوة بتتعب فيها علشاني وعلشان مستقبلنا، حتى لو بسبب الضغط مش بعرف أعبر عن ده.

عارف؟ في وسط خناقاتنا وااختلافاتنا الصغيرة بتاعة التجهيزات، بفتكر إن شهرين وكل الدوشة دي تخلص والباب يتقفل علينا...

and it's Worth it ❤️

أنا مش عايزة ضغط الأيام دي ينسينا إحنا بنمعل كل ده ليه.

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
    window.typingInterval = setInterval(function() { 
        letterText.textContent += text.charAt(i); 
        i++; 
        if (i >= text.length) { 
            clearInterval(window.typingInterval); 
        } 
    }, 40); 
};

closeLetter.onclick = function () {
    clearInterval(window.typingInterval);
    secretLetter.style.display = "none";
};

secretLetter.onclick = function(event) {
    if (event.target === secretLetter) {
        clearInterval(window.typingInterval);
        secretLetter.style.display = "none";
    }
};

const rusticaBtn = document.getElementById("rusticaBtn");
const rusticaPopup = document.getElementById("rusticaPopup");
const closeRustica = document.getElementById("closeRustica");

rusticaBtn.onclick = function() {
    rusticaPopup.style.display = "flex";
};

closeRustica.onclick = function() {
    rusticaPopup.style.display = "none";
};

rusticaPopup.onclick = function(event) {
    if (event.target === rusticaPopup) {
        rusticaPopup.style.display = "none";
    }
};

const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");
let isPlaying = false;

musicBtn.onclick = function () {
    if (!isPlaying) {
        song.play().catch(error => console.log("Audio play blocked"));
        musicBtn.innerHTML = "⏸ Pause Song";
    } else {
        song.pause();
        musicBtn.innerHTML = "▶ Play";
    }
    isPlaying = !isPlaying;
};

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const enterBtn = document.getElementById("enterBtn");

function showSlide(index) {
    slides.forEach(s => s.style.display = "none");
    slides[index].style.display = "flex";
    
    if (index === 0) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}

enterBtn.onclick = function() {
    currentSlide = 1;
    showSlide(currentSlide);
};

nextBtn.onclick = function() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
};

showSlide(0);
