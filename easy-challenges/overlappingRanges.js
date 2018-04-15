const assert = require('assert');

const OverlappingRanges = arr => {
  let counter = 0;
  for (let i = arr[0]; i < arr[1]; i += 1) {
    if (i >= arr[2] && i <= arr[3]) {
      counter += 1;
    }
  }
  return counter >= arr[4];
};

const a1 = '[1, 8, 2, 4, 4]';
const r1 = 'true';

const t1 = OverlappingRanges(a1);
assert.strictEqual(t1, r1);

// Input: 5,11,1,5,1
// Output: true
// Input: 1,8,2,4,4
// Output: false
