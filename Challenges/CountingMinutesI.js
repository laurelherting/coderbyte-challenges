const assert = require('assert');
/*
Input:"12:30pm-12:00am"
Output:690
Input:"1:23am-1:08am"
Output:1425
*/
function countingMinutes(str) {
const timeArray = str.split('-');
    let startTime = timeArray[0];
    let endTime = timeArray[1];
    let startTimeArr = startTime.split(':');
    let startTimeHour = parseInt(startTimeArr[0]);
    let startTimeMinute = parseInt(startTimeArr[1].replace(/[^0-9]/g, ''));
    let startTimeAMPM = startTimeArr[1].replace(/[^a-zA-Z]/g, '');
    let endTimeArr = endTime.split(':');
    let endTimeHour = parseInt(endTimeArr[0]);
    let endTimeMinute = parseInt(endTimeArr[1].replace(/[^0-9]/g, ''));
    let endTimeAMPM = endTimeArr[1].replace(/[^a-zA-Z]/g, '');

    if ((startTimeHour !== 12) && (startTimeAMPM === 'pm')) {
    startTimeHour += 12;
    }
    if ((endTimeHour !== 12) && (endTimeAMPM === 'pm')) {
    endTimeHour += 12;
    }
    if ((startTimeHour === 12) && (startTimeAMPM === 'am')) {
    startTimeHour -= 12;
    }
    if ((endTimeHour === 12) && (endTimeAMPM === 'am')) {
    endTimeHour -= 12;
    }

    if ((startTimeHour > endTimeHour) || ((startTimeHour === endTimeHour) && (startTimeMinute > endTimeMinute))) {
    return (690 + ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute));
    } else {
    return ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute);
    }
}

//console.log(countingMinutes);
const t1 = countingMinutes(12:30pm-12:00am);
console.log(t1);
assert.strictEqual(t1, 690, "Input 12:30pm-12:00am should yield Output 690");
