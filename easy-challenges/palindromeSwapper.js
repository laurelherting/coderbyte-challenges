const assert = require('assert');

const PalindromeSwapper = (str) => {
  const inputArray = str.split('');
  const strLen = inputArray.length;
  let palTester = function(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i =+ 1) {
      if (arr[i] !== arr[len - (1 + i)]) {
        return false;
      }
    }
    return true;
  };
};


const in1 = 'anna'; // input
const expect1 = 'anna'; // output
const test1 = PalindromeSwapper(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
// console.log('PalindromeSwapper');
