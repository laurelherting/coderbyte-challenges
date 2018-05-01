const assert = require('assert');

const LongestIncreasingSequence = arr => {
  const LNG = arr.length;
  let max = [];

  // check for possible number combinations
  for (let i = 0; i < LNG - 1; i += 1) {
    const subSet = [arr[i]];
    for (let n = i + 1; n < LNG; n += 1) {
      if (arr[n] > subSet[subSet.length - 1]) {
        subSet.push(arr[n]);
      }
    }
    if (subSet.length > max) {
      max = subSet.length;
    }
    // console.log(arr);
  }
  return max;
};

const t1 = LongestIncreasingSequence([9, 9, 4, 2]); // input
// console.log(t1);
assert.strictEqual(t1, 1, 'Input [9, 9, 4, 2] should yield Output 1');
