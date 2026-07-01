let current = 0;
const slides = document.querySelectorAll(".slide");

function show(i){
slides.forEach(s => s.style.display="none");
slides[i].style.display="flex";
}

document.getElementById("nextBtn").onclick = ()=>{
current++;
if(current >= slides.length) current = 0;
show(current);
};

show(0);

// ENTER
document.getElementById("enterBtn").onclick = ()=>{
current = 1;
show(current);
};

// COUNTERS
document.getElementById("engaged").innerText = "24 Jan 2025";
document.getElementById("wedding").innerText = "28 Aug 2026";

// HEART
document.getElementById("love-heart").onclick = ()=>{
document.getElementById("love-message").innerText = "I love you ❤️";
};

// RUSTICA
document.getElementById("rusticaBtn").onclick = ()=>{
document.getElementById("rusticaPopup").style.display="flex";
};

document.getElementById("rusticaPopup").onclick = (e)=>{
if(e.target.id==="rusticaPopup")
e.target.style.display="none";
};

// LETTER
document.getElementById("hidden-star").onclick = ()=>{
document.getElementById("secretLetter").style.display="flex";
document.getElementById("letterText").innerText =
"Love you baby ❤️";
};

document.getElementById("closeLetter").onclick = ()=>{
document.getElementById("secretLetter").style.display="none";
};

// MUSIC
let play=false;
document.getElementById("musicBtn").onclick = ()=>{
const song=document.getElementById("song");
if(!play){song.play();play=true;}
else{song.pause();play=false;}
};
