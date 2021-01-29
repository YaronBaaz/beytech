const box = document.getElementById("box");
const counter = document.getElementById("counter");
let count = 0;
counter.innerText=count;

box.addEventListener("click",()=>{
    count++;
    box.style.top=Math.random()*50+"vh";
    box.style.left=Math.random()*95+"vw";
    
    box.style.background=bgChanger();
    counter.innerText=count;
});

function bgChanger(){
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}