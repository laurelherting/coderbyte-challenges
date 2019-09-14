// objective:
// Take the array of positive integers stored in arr and return the length of
// the longest increasing subsequence (LIS). A LIS is a subset of the original
// list where the numbers are in sorted order, from lowest to highest, and are in
// increasing order. The sequence does not need to be contiguous or unique, and there
// can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a
// possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should
// return 3 because that is the length of the longest increasing subsequence.

// solution:
const assert = require("assert");

function LongestIncreasingSequence(arr) {
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
    // console.log(LNG);
  }
  return max;
}

const t1 = LongestIncreasingSequence([9, 9, 4, 2]); // input
// console.log(t1);
assert.strictEqual(t1, 1, "Input [9, 9, 4, 2] should yield Output 1");
