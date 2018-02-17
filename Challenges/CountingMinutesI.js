const assert = require('assert');
/*
Input:"12:30pm-12:00am"
Output:690
Input:"1:23am-1:08am"
Output:1425
*/
function countingMinutes(str) {
  const timeArray = str.split('-');
  const startTime = timeArray[0];
  const endTime = timeArray[1];
  const startTimeArr = startTime.split(':');
  let startTimeHour = parseInt(startTimeArr[0], 10);
  const startTimeMinute = parseInt(startTimeArr[1].replace(/[^0-9]/g, ''), 10);
  const startTimeAMPM = startTimeArr[1].replace(/[^a-zA-Z]/g, '');
  const endTimeArr = endTime.split(':');
  let endTimeHour = parseInt(endTimeArr[0], 10);
  const endTimeMinute = parseInt(endTimeArr[1].replace(/[^0-9]/g, ''), 10);
  const endTimeAMPM = endTimeArr[1].replace(/[^a-zA-Z]/g, '');

  console.log('startTimeHour', startTimeHour);
  if (startTimeHour !== 12 && startTimeAMPM === 'pm') {
    startTimeHour += 12;
  }
  console.log('endTimeHour', endTimeHour);
  if (endTimeHour !== 12 && endTimeAMPM === 'pm') {
    endTimeHour += 12;
  }
  if (startTimeHour === 12 && startTimeAMPM === 'am') {
    startTimeHour -= 12;
  }
  if (endTimeHour === 12 && endTimeAMPM === 'am') {
    endTimeHour -= 12;
  }
  console.log('startTimeHour', startTimeHour);
  console.log('endTimeHour', endTimeHour);
  if (
    startTimeHour > endTimeHour ||
    (startTimeHour === endTimeHour && startTimeMinute > endTimeMinute)
  ) {
    return (
      Math.abs(endTimeHour - startTimeHour) * 60 +
      (endTimeMinute - startTimeMinute)
    );
  }
  return (endTimeHour - startTimeHour) * 60 + (endTimeMinute - startTimeMinute);
}

const t1 = countingMinutes('12:30pm-12:00am');

console.log(t1);
assert.strictEqual(t1, 690, 'Input 12:30pm-12:00am should yield Output 690');
