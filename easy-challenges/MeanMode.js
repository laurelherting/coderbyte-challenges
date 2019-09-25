// objective:
// Using the JavaScript language, have the function MeanMode(arr) take the
// array of numbers stored in arr and return 1 if the mode equals the mean,
// 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1
// because the mode (3) equals the mean (3)). The array will not be empty,
// will only contain positive integers, and will not contain more than one mode.

// solution:
const assert = require("assert");

function meanMode(arr) {
  const modeMap = {};
  let mode = 0;
  let modeCount = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];

    if (modeMap[arr[i]]) {
      modeMap[arr[i]] += 1;
    } else {
      modeMap[arr[i]] = 1;
    }
    if (modeMap[arr[i]] > modeCount) {
      mode = arr[i];
      modeCount = modeMap[arr[i]];
    }
  }

  const mean = sum / arr.length;

  if (mean === mode) {
    return 1;
  }
  return 0;
}

const a1 = "[1, 2, 3]"; // input
const r1 = 0; // output
const t1 = meanMode(a1);
assert.strictEqual(t1, r1);

// console.log(t1); // 0
