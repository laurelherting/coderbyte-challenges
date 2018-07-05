const assert = require('assert');

const PalindromeSwapper = (str) => {
  const inputArray = str.split('');
  const strLen = inputArray.length;
  const palTester = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i += 1) {
      if (arr[i] !== arr[len - (1 + i)]) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < strLen - 1; i += 1) {
    const newArray = Array.from(inputArray);
    newArray.splice(i, 2, newArray[i + 1], newArray[i]);
    if (palTester(newArray)) {
      return newArray.join('');
    }

    // console.log('PalindromeSwapper');
  }
  return -1;
};

const in1 = 'anna'; // input
const expect1 = 'anna'; // output
const test1 = PalindromeSwapper(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
// console.log(test1);

// const in2 = 'kayak'; // input
// const expect2 = 'kayak'; // output
// const test2 = PalindromeSwapper(in2);
// assert.strictEqual(test2, expect2, `should be ${expect2}`);
// console.log(test2);
