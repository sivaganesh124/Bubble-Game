var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score +=10;
    document.querySelector("#scorevalue").textContent = score;
}

function getNewHit () {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitrn;
}

function BubbleMaker (){
    var clutter = "";
    for (var i = 0; i <= 130; i++) {
        var num = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${num}</div>`
    }
    document.querySelector("#PanelBottom").innerHTML = clutter;
}

function RunTimer(){
    var timerstop = setInterval(function () {
        if(timer>0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timerstop);
            document.querySelector("#PanelBottom").innerHTML = `<h1 >Game Over</h1>`;
        }
    },1000);
}

document.querySelector("#PanelBottom").addEventListener("click",function(dets){
    var clickednumber = Number(dets.target.textContent);
    if(clickednumber === hitrn){
        increaseScore();
        BubbleMaker();
        getNewHit();
    }
});

getNewHit();
RunTimer();
BubbleMaker();