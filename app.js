//declare global variables

var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

var workM = document.getElementById('w_minutes');
var workS = document.getElementById('w_seconds');

var breakM = document.getElementById('b_minutes');
var breakS = document.getElementById('b_seconds');

var counter = document.getElementById('counter');

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else{
        alert('Timer is running')
    }
})

reset.addEventListener('click', function(){
    workM.innerText = 25;
   workS.innerText = 00;
   breakM.innerText =5;
   breakS.innerText = 00;
   counter.innerText = 0;
   stopInterval();
  startTimer = undefined
})

pause.addEventListener('click', function(){
    stopInterval();
    startTimer = undefined;
    
})

//Start timer function
function timer(){
    //work timer countdown
        if(workS.innerText !=0){
        workS.innerText--;
    } else if(workM.innerText != 0 && workS.innerText == 0){
workS.innerText = 59;
workM.innerText--;
    }

    //Break timer countdown
    if(workM.innerText == 0  && workS == 0){
        if(breakS !=0){
            breakS.innerText--
        }else if(breakM.innerText !=0 && breakS == 0){
            breakS.innerText = 59;
            breakM.innerText--;
                }
    }

    //increment counter by one if one full cycle has completed

    if(workM.inner == 0 && workS.innerText == 0 && breakM.innerText == 0 && breakS.innerText == 0){
  
   workM.innerText = 25;
   workS.innerText = 00;
   breakM.innerText =5;
   breakS.innerText = 00;
   counter.innerText++;

   }
    
    }

    //stop timer function

    function stopInterval(){
        clearInterval(startTimer)
    }