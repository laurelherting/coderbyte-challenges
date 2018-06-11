const assert = require('assert');
// take the array of numbers stored in arr and
// return the string true if any combination of
// numbers in the array can be added up to equal the
// largest number in the array, otherwise return the string false


function arrayAddition = arr => {
  let max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  let x = arr.length;

  return sumChecker(arr, max, x);

  function sumChecker = (arr, sum, length) => {
    if (sum === 0) {
      return true;
    }
    if (sum != 0 && length === 0) {
    return false;
    }
    return sumChecker(arr, sum, length -1)
  }

};

const a1 = '[5,7,16,1,2]';
const t1 = arrayAddition(a1);

assert(t1);

// ex. if arr contains [4, 6, 23, 10, 1, 3], then output = true,
// bc  4 + 6 + 10 + 3 = 23
//The array will not be empty, will not contain all the same elements,
//and may contain negative numbers.
