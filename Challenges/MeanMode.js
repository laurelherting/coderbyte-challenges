const assert = require('assert');

function meanMode (arr) {
  const modeMap = {};
  let mode = 0;
  let modeCount = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (modeMap[arr[i]]) {
      modeMap[arr[i]]++;
    } else {
      modeMap[arr[i]] = 1;
    }
    if (modeMap[arr[i]] > modeCount) {
    mode = arr[i];
      modeCount = modeMap[arr[i]];
    }
  }

  let mean = sum / arr.length;

  if (mean === mode) {
    return 1;
  } else {
    return 0;
  }
}

const a1 = "[1, 2, 3]";
const r1 = 0;
const t1 = meanMode(a1);
assert.strictEqual(t1, r1); 

console.log(t1); // 0
