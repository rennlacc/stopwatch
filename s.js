let hrs = 0;
let min = 0;
let sec = 0;
let interval;
let isStop = true;

let displayHrs = 0;
let displayMin = 0;
let displaySec = 0;


function stopwatch() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
            }
        }
        if(sec < 10){
            displaySec = "0" + sec;
        }else{
            displaySec = sec;
        }
       if(min < 10){
                displayMin = "0" + min;    
        }else{
            displayMin = min;
        }
        if(hrs < 10){
            displayHrs = "0" + hrs;    
        }else{
            displayHrs = hrs;
        }
    document.getElementById("sw").innerHTML = displayHrs + ":" + displayMin + ":" + displaySec;
}


function start() {
    
    if(isStop == true ) {
        isStop = false
        interval= setInterval(stopwatch,1000);
    }
}

function stop() {
    if(isStop == false) {
      isStop = true; 
      clearInterval(interval);
    }
}

function reset() {
    sec = 0;
    min = 0;
    hrs = 0;
    document.getElementById("sw").innerHTML = "00:00:00";
}



