const assert = require('assert');

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
    return (1440 + ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute));
  } else {
    return ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute);
  }
}

console.log('countingMinutes');
const t1 = "countingMinutes([])";
const a1 = "";

assert(t1);
