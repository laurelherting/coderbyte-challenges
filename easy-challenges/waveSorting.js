// objective:
// sort the array, then rearrange elements into a pattern-
// pick elements from separate sides of array

// solution:
const assert = require('assert');

const WaveSorting = arr => {
  const count = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (count[arr[i]] >= 1) {
      count[arr[i]] += 1;
    } else {
      count[arr[i]] = 1;
    }
    console.log('a');

  let newArr = [];
    for (let a in count) {
      newArr.push(count[a]);
    }
    return Math.max(...newArr) > arr.length/2 ? false : true;
};

console.log(WaveSorting([0, 4, 22, 4, 14, 4, 2])); // true
console.log(WaveSorting([0, 1, 2, 4, 1, 1, 1])); // false

const a1 = '[0, 1, 2, 4, 1, 4]'; // input
const r1 = 'true'; // output

const t1 = WaveSorting(a1);
assert.strictEqual(t1, r1);
