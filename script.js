const openBtn=document.getElementById("openBtn");
const opening=document.getElementById("opening");
const site=document.getElementById("site");
openBtn.addEventListener("click",()=>{
  opening.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(1.03)"}],{duration:650,easing:"ease",fill:"forwards"});
  setTimeout(()=>{opening.style.display="none";site.classList.remove("hidden");window.scrollTo(0,0);observe();},600);
  for(let i=0;i<18;i++) setTimeout(makeHeart,i*70);
});

function makeHeart(){
  const el=document.createElement("span");
  el.textContent=["♡","♥","✦","🎀"][Math.floor(Math.random()*4)];
  el.style.left=Math.random()*100+"vw";
  el.style.animationDuration=(4+Math.random()*4)+"s";
  el.style.fontSize=(10+Math.random()*16)+"px";
  document.querySelector(".floating-hearts").appendChild(el);
  setTimeout(()=>el.remove(),9000);
}
setInterval(()=>{if(!site.classList.contains("hidden"))makeHeart()},1800);

const modal=document.getElementById("modal"), modalText=document.getElementById("modalText");
document.querySelectorAll("[data-message]").forEach(btn=>{
  btn.addEventListener("click",()=>{modalText.textContent=btn.dataset.message;modal.classList.add("open");modal.setAttribute("aria-hidden","false")});
});
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}

const replies=[
  "Bella says: you're her whole world. 🐾",
  "Bella says: birthday cuddles are mandatory.",
  "Bella says: she would like some watermelon. 🍉",
  "Bella says: you're the best mum ever. ♡"
];
let replyIndex=0;
document.getElementById("pawBtn").addEventListener("click",()=>{
  document.getElementById("bellaReply").textContent=replies[replyIndex++%replies.length];
});

let observer;
function observe(){
  observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}

let taps=0,tapTimer;document.querySelector(".nav-logo").addEventListener("click",()=>{taps++;clearTimeout(tapTimer);tapTimer=setTimeout(()=>taps=0,700);if(taps===3){taps=0;modalText.textContent="Secret message unlocked: I hope you always know just how loved you are. ♡";modal.classList.add("open");}});
