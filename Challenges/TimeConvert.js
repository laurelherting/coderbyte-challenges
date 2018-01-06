const assert = require('assert');
// Have function TimeConvert(num) take the num
// parameter being passed and return the number of hours
// and minutes the parameter converts to 
// (ie. if num = 63 then the output should be 1:3). Separate
// the number of hours and minutes with a colon.
function timeConvert(num) { 
    let hours=0;
    let minutes=0;
    let newMinutes=0;

    while(num>=60) {
        hours+=1;
        num-=60;
    }

    if(num<60) {
      minutes=num;
    }

    if (minutes<6) {
    newMinutes="0"+minutes;
    }
    
    else if(minutes>6) {
      newMinutes = minutes;
    }

    return(hours + ":" + newMinutes);          
}
timeConvert(114);
const a1 = "hours";
const r1 = "minutes";

// console.log(r1);

assert(r1);
