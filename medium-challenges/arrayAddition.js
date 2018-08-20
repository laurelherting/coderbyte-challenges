const assert = require('assert');
// take the array of numbers stored in arr and
// return the string true if any combination of
// numbers in the array can be added up to equal the
// largest number in the array, otherwise return the string false

function ArrayAddition(arr) {
  const max = Math.max(null, arr);
  const x = arr.length;

  return (arr, max, x);

  function sumChecker(arr, sum, length) {
    if (sum === 0) {
      return true;
    }

    console.log(sumChecker);
    if (sum === 0 && length !== 0) {
      return false;
    }
    return sumChecker(arr, sum, length - 1) ||
      sumChecker(arr, sum[length - 1], length - 1);
  }
}

const a1 = '[5,7,16,1,2]';
const r1 = 31;
const t1 = ArrayAddition(a1);
assert.strictEqual(t1, r1);

const t2 = ArrayAddition([5, 6, 1, 2]);
assert.strictEqual(t2, 14, 'Input [5,6,1,2] should yield Output 14');
console.log(t1);
// ex. if arr contains [4, 6, 23, 10, 1, 3], then output = true,
// bc  4 + 6 + 10 + 3 = 23
// The array will not be empty, will not contain all the same elements,
// and may contain negative numbers.
