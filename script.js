window.onload = function () {

const button = document.querySelector("button");

button.addEventListener("click", function(){

button.innerHTML = "❤️ Welcome Home ❤️";

button.style.background = "#ff4f8b";
button.style.color = "white";

document.body.style.transition = "2s";
document.body.style.background =
"linear-gradient(180deg,#030712,#0f1f52,#29124d)";

});

};
// ===== Love Counters =====

const engagedDate = new Date("2025-01-24");
const weddingDate = new Date("2026-08-28");

function updateCounters() {
    const today = new Date();

    const engagedDays = Math.floor((today - engagedDate) / (1000 * 60 * 60 * 24));
    const weddingDays = Math.floor((weddingDate - today) / (1000 * 60 * 60 * 24));

    const cards = document.querySelectorAll(".time-card");

    if (cards.length >= 2) {
        cards[0].querySelector("p").innerHTML =
            "24 January 2025<br><br>" +
            engagedDays + " days together ❤️";

        cards[1].querySelector("p").innerHTML =
            "28 August 2026<br><br>" +
            weddingDays + " days left 💍";
    }
}

updateCounters();
