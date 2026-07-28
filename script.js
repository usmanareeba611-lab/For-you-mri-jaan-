// ===============================
// A Little World For Saad ❤️
// Script.js - Section 1
// ===============================

// Get all pages
const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".next");

let currentPage = 0;

// Show only first page
pages.forEach((page, index) => {
    if(index !== 0){
        page.classList.remove("active");
    }
});

pages[0].classList.add("active");

// Next Button Function
nextButtons.forEach(button=>{

button.addEventListener("click",()=>{

pages[currentPage].classList.remove("active");

currentPage++;

if(currentPage >= pages.length){
currentPage = pages.length - 1;
}

pages[currentPage].classList.add("active");

window.scrollTo({
top:0,
behavior:"smooth"
});

});

});

// ===============================
// Floating Hearts
// ===============================

const heartsContainer = document.querySelector(".hearts");

function createHeart(){

const heart = document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},9000);

}

setInterval(createHeart,500);

// ===============================
// Welcome Popup
// ===============================

window.onload=()=>{

setTimeout(()=>{

alert("Assalam-o-Alaikum Saad ❤️\n\nAaj sirf ek mission hai...\nTumhari muskurahat 😊");

},1000);

};
// ===============================
// Smile Police Popup
// ===============================

setTimeout(()=>{

showSmilePolice();

},18000);

function showSmilePolice(){

const popup=document.getElementById("secretPopup");

if(popup){

popup.classList.add("show");

}

}

const popupClose=document.getElementById("popupClose");

if(popupClose){

popupClose.onclick=()=>{

document.getElementById("secretPopup").classList.remove("show");

}

}

// ===============================
// Funny Button Texts
// ===============================

const funnyButtons=[

"Theek hai 😌",

"Curious ho? 👀",

"Bas ek aur page 😂",

"Abhi mat jao 🤍",

"Yahan tak aa hi gaye ho ❤️",

"Ready? 😏",

"Next Surprise 🌸"

];

nextButtons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.innerHTML=funnyButtons[Math.floor(Math.random()*funnyButtons.length)];

});

});

// ===============================
// Page Counter
// ===============================

const counter=document.createElement("div");

counter.style.position="fixed";
counter.style.top="15px";
counter.style.right="15px";
counter.style.padding="10px 18px";
counter.style.borderRadius="25px";
counter.style.background="rgba(255,255,255,.5)";
counter.style.backdropFilter="blur(12px)";
counter.style.color="#ff4f8b";
counter.style.fontWeight="600";
counter.style.zIndex="999";

document.body.appendChild(counter);

function updateCounter(){

counter.innerHTML=`Page ${currentPage+1} / ${pages.length}`;

}

updateCounter();

nextButtons.forEach(btn=>{

btn.addEventListener("click",updateCounter);

});
// ===============================
// Emergency Smile Box 🎁
// ===============================

const giftBox = document.querySelector(".gift-box");

if(giftBox){

giftBox.addEventListener("click",()=>{

giftBox.style.transform="scale(1.15) rotate(10deg)";

giftBox.innerHTML="🎉";

setTimeout(()=>{

alert(
"🎁 Surprise!\n\nCongratulations ❤️\n\nTum officially Areeba ke Favourite Insaan ho.\n\nYe title kisi aur ko transfer nahi ho sakta. 😌"
);

createConfetti();

},600);

});

}

// ===============================
// Confetti Effect 🎊
// ===============================

function createConfetti(){

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.background=
`hsl(${Math.random()*360},100%,70%)`;

confetti.style.animationDuration=
(3+Math.random()*3)+"s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

}

}

// ===============================
// Random Cute Messages ❤️
// ===============================

const cuteMessages=[

"😊 Smile suits you.",

"🌸 Areeba ki taraf se ek virtual hug.",

"✨ Tum expected se zyada amazing ho.",

"🤍 Allah tumhein hamesha khush rakhe.",

"🌙 Thori si muskurahat free hoti hai."

];

function randomMessage(){

const msg=cuteMessages[
Math.floor(Math.random()*cuteMessages.length)
];

console.log(msg);

}

setInterval(randomMessage,15000);
// ===============================
// Final Page ❤️
// ===============================

const restart=document.getElementById("restartBtn");

if(restart){

restart.onclick=()=>{

currentPage=0;

pages.forEach(p=>p.classList.remove("active"));

pages[0].classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

// ===============================
// Last Button Surprise
// ===============================

const lastButtons=document.querySelectorAll(".next");

lastButtons.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

if(index===lastButtons.length-1){

createConfetti();

setTimeout(()=>{

alert(
"🥹❤️\n\nShukriya Saad...\n\nYahan tak aane ke liye.\n\nAllah tumhari zindagi mein hamesha sukoon, sehat aur muskurahat rakhe.\n\nAmeen 🤲"
);

},1000);

}

});

});

// ===============================
// Typing Effect
// ===============================

const fadeTexts=document.querySelectorAll(".fade-text");

fadeTexts.forEach((text,index)=>{

text.style.opacity="0";

setTimeout(()=>{

text.style.opacity="1";

text.style.transition="1.5s";

},index*1800);

});
// ===============================
// Floating Stars ✨
// ===============================

const stars=document.getElementById("stars");

if(stars){

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=
Math.random()*2+"s";

stars.appendChild(star);

}

}

// ===============================
// Good Night Message 🌙
// ===============================

setTimeout(()=>{

console.log("Good Night Saad ❤️");

},5000);

// ===============================
// End
// ===============================

console.log("Website Loaded Successfully ❤️");
