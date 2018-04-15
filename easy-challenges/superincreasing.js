const assert = require('assert');

const Superincreasing = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] <= sum) {
      return 'false';
    }
    sum += arr[i];
  }
  return true;
};

const a1 = '[1, 2, 3, 4]';
const r1 = 'false';

const t1 = Superincreasing(a1);
assert.strictEqual(t1, r1);
// Input:1,2,3,4
// Output:"false"
// Input:1,2,5,10
// Output:"true"
