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
