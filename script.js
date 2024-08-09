let gameseq=[];
let userseq=[];

let start= false;

let level = 0;

let h3 = document.querySelector("h3");

let btns = ["red", "blue" ,"green","yellow" ]

document.addEventListener('keypress', function () {
    if(start == false){
        start = true;
        lvlup();
    }
    
})

function lvlup () {
    userseq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random() * 3);
    let randomclr = btns[randomidx];

    let randombtn = document.querySelector(`.${randomclr}`)
    btnFlash(randombtn);

    gameseq.push(randomclr);
    console.log(gameseq);

}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length) {
            setTimeout(lvlup , 1000)
        }
}else{
    h3.innerHTML = `Game Over! <p>Your Score is<p> ${level} <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor= "red";
    setTimeout(function () {
        document.querySelector("body").style.backgroundColor= "white";
    }, 250)
    reset();

}
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id")
    userseq.push(userColor);
    checkAns(userseq.length - 1);
}


let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    start = false;
    userseq = [];
    gameseq = [];
    level = 0;

}