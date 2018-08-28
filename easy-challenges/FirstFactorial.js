const assert = require('assert');

// Have the function FirstFactorial(num) take the num parameter being passed
// return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1))
// For the test cases, the range will be between 1 and 18 and the input will
// always be an integer.
const FirstFactorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * FirstFactorial(num - 1);
};

const a1 = '5'; // input
const r1 = '120'; // output
const t1 = FirstFactorial(a1);
// console.log(t1);
assert(t1, r1);

const a2 = '9';
const r2 = '362880';
const t2 = FirstFactorial(a2);
// console.log(t2);
assert(t2, r2);
