// objective:
// insert a dash between two CONSECUTIVE odd numbers

// solution:
const assert = require("assert");

function DashInsert(str) {
  const arr = str.split("");
  // loop through to find odd numbers
  for (let i = 0; i < str.length - 1; i += 1) {
    // check if current number is odd and the next number is also odd
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      // if it is, then add dash between the two odd numbers
      arr[i] = `${arr[i]}-`;
    }
  }
  // console.log(str);
  return arr.join("");
}

const in1 = "12345677"; // input
const expect1 = "1234567-7"; // output
const test1 = DashInsert(in1);
console.log(test1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);

const in2 = "8865321398"; // input
const expect2 = "8865-321-3-98"; // output
const test2 = DashInsert(in2);
assert.strictEqual(test2, expect2, `should be ${expect2}`);
