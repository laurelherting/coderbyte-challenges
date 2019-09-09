const assert = require('assert');

const SuperIncreasing = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] <= sum) {
      return 'false';
    }
    sum += arr[i];
  }
  return true;
};

const a1 = '[1, 2, 3, 4]'; // input
const r1 = 'false'; // output

const t1 = SuperIncreasing(a1);
assert.strictEqual(t1, r1);

// const a2 = '[1, 2, 5, 10]';
// const r2 = 'true';

// const t2 = SuperIncreasing(a2);
// assert.strictEqual(t2, r2);
