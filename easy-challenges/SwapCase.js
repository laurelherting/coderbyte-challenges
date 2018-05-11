const assert = require('assert');

// Turn the string into an array
// For example: if the input string is "Hello-World", then your program
// should return the string "hELLo-wORLD"
// loop through the array-swap letter cases
// uppercase -> lowercase
// lowercase -> uppercase
// return modified array as a string

const swapCase = str => {
  const chars = str.split('');

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === chars[i].toUpperCase()) {
      chars[i] = chars[i].toLowerCase();
    } else if (chars[i] === chars[i].toLowerCase()) {
      chars[i] = chars[i].toUpperCase();
    }
  }

  const caseStr = chars.join('');
  // console.log(caseStr);

  return caseStr;

};

const in1 = 'Hello-World'; // input
const expect1 = 'hELLO-wORLD'; // output
const test1 = swapCase(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
// console.log('swapCase');
