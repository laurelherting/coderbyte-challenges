const assert = require('assert');
// Have the func SimpleAdding(num) add up all
// the numbers from 1 to num. ie: if input is 4
// then program should return 10 because 1 + 2 + 3 + 4 = 10.
// For the test cases, the parameter num will be any number from 1 to 1000.

const SimpleAdding = num => {
  let addedNum = num;
  for (let i = 1; i <= num; i += 1) {
    addedNum += i;
  }
  return addedNum;
};
const output = SimpleAdding(16);
// keep this function call here
// console.log('Output', output);
const r1 = output;

assert(r1);
