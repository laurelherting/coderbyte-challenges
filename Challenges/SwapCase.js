const assert = require('assert');

/*
input: "Hello-World"
output: "hELLO-wORLD"
*/
function SwapCase(str) {
  // turn the string into an array
  const chars = str.split('');

  // loop through the array-swap letter cases
  // uppercase -> lowercase
  // lowercase -> uppercase
  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === chars[i].toUpperCase()) {
      chars[i] = chars[i].toLowerCase();
    } else if (chars[i] === chars[i].toLowerCase()) {
      chars[i] = chars[i].toUpperCase();
    }
  }

  // return modified array joined as string
  return chars.join('');
}

const in1 = 'Hello-World'; // input
const expect1 = 'hELLO-wORLD'; // output
const test1 = SwapCase(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
// console.log('SwapCase');
