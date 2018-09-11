const assert = require('assert');

const Superincreasing = (arr) => {
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

const t1 = Superincreasing(a1);
assert.strictEqual(t1, r1);

// const a2 = '[1, 2, 5, 10]';
// const r2 = 'true';

// const t2 = Superincreasing(a2);
// assert.strictEqual(t2, r2);
