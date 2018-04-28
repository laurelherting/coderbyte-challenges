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

const a1 = '[9, 9, 4, 2]'; // input
// output= 1
const t1 = LongestIncreasingSequence(a1);
// console.log(r1);
assert(t1, a1);
