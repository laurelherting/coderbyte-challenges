// objective:
// Have the func SimpleAdding(num) add up all the numbers from 1 to num.
// ie: if input is 4 then program should return 10 because 1 + 2 + 3 + 4 = 10.
// For the test cases, the parameter num will be any number from 1 to 1000.

// solution:
const assert = require("assert");

function SimpleAdding(num) {
  let addedNum = num;
  for (let i = 1; i <= num; i += 1) {
    // ...adding i to answer each time
    addedNum += i;
  }

  // return answer
  return addedNum;
}

const a1 = "4"; // input
const r1 = "10"; // output
const t1 = SimpleAdding(a1);

assert(r1, t1);
