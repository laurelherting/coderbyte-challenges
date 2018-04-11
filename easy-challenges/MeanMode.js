const assert = require('assert');

const meanMode = arr => {
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
};

const a1 = '[1, 2, 3]';
const r1 = 0;
const t1 = meanMode(a1);
assert.strictEqual(t1, r1);

console.log(t1); // 0
