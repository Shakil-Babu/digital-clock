

function DigitalClock(){

    var currentDate = new Date ;
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    let timeFormet = 'AM' ;

    if(hours === 0){
        hours = 12 ;
    }
    if(hours >11){
        hours = hours - 12;
        timeFormet = 'PM';
    }


    if(hours <10){
        hours = '0'+hours ;
    }

    if(minutes <10){
        minutes = '0'+minutes ;
    }
   if(seconds <10){
       seconds = '0'+seconds ;
   }
    

var Time = `${hours}:${minutes}:${seconds}` ;
document.getElementById('showTime').innerText = Time ;
document.getElementById('timeFormet').innerText = timeFormet;
setInterval(DigitalClock, 1000);
}
DigitalClock();



