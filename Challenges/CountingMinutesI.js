const assert = require('assert');

/* Input:"1:23am-1:08am"
Output:1425 */
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

console.log('countingMinutes');
const in1 = '12:30pm-12:00am';
const expect1 = '690';
const test1 = countingMinutes(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);

assert(t1);
