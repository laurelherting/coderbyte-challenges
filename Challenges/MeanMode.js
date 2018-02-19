/*Input:1, 2, 3
Output:0
Input:4, 4, 4, 6, 2
Output:1 */
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
}

const t1 = meanMode;
assert(t1);
