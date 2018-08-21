const assert = require('assert');
// take the array of numbers stored in arr and
// return the string true if any combination of
// numbers in the array can be added up to equal the
// largest number in the array, otherwise return the string false

const ArrayAddition = (arr) => {
  const largest = [].slice.call(arr).sort((a, b) {
    return a - b;
  }).pop();
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
    if (sum === largest) {
      return true;
    }

    for (let j = 0; j < arr.length; j += 1) {
      if (j !== i) {
        sum += arr[j];
      }
      if (sum === largest) {
        return true;
      }
    }

    for (let k = 0; k < arr.length; k += 1) {
      if (k !== i) {
        sum -= arr[k];
      }
      if (sum === largest) {
        return true;
      }
    }

    sum = 0;
  }

  return false;
};

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
