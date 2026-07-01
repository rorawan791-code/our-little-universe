// ===== HIDDEN STAR (SECRET LETTER) =====
const hiddenStar = document.getElementById("hidden-star");
const secretLetter = document.getElementById("secret-letter"); // تأكدي أن الـ ID مطابق للـ HTML
const letterText = document.getElementById("letterText");
const closeLetter = document.getElementById("closeLetter");

hiddenStar.onclick = function () {
    letterText.textContent = "";
    letterText.style.whiteSpace = "pre-line";
    secretLetter.style.display = "flex";

    // النص فقط هو اللي جوه الـ backticks
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

    // الكود ده برة الـ backticks وبيشتغل ككود عادي سليم 100%
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

// قفل الرسالة عند الضغط على زرار الاكس
closeLetter.onclick = function () {
    clearInterval(window.typingInterval);
    secretLetter.style.display = "none";
};

// قفل الرسالة عند الضغط في أي مكان فاضي برة صندوق الرسالة
secretLetter.onclick = function(event) {
    if (event.target === secretLetter) {
        clearInterval(window.typingInterval);
        secretLetter.style.display = "none";
    }
};

// ===== PLANET RUSTICA POPUP =====
const rusticaPopup = document.getElementById("rusticaPopup");

rusticaPopup.onclick = function(event) {
    if (event.target === rusticaPopup) {
        rusticaPopup.style.display = "none";
    }
};

// ===== MUSIC PLAYER =====
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

// ===== SLIDES NAVIGATION (Next Button) =====
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(s => s.style.display = "none");
    slides[index].style.display = "block";
}

document.getElementById("nextBtn").onclick = function() {
    currentSlide++;
    if (currentSlide >= slides.length) { 
        currentSlide = 0; 
    } 
    showSlide(currentSlide); 
};

// تشغيل السلايد الأولى أول ما الصفحة تفتح
showSlide(0);
