// objective:
// insert a dash between two CONSECUTIVE odd numbers

// solution:
const assert = require("assert");

function DashInsert(str) {
  let idk = 0;
  // loop through to find odd numbers
  while (idk < str.length - 1) {
    // check if current number is odd and the next number is also odd
    // needs Modulus (remainder operator) - to return the remainder of a division operation
    if (Number(str[idk]) % 2 === 1 && Number(str[idk + 1]) % 2 === 1) {
      // if it is, then add dash between the two odd numbers

      str = str.slice(0, idk + 1) + "-" + str.slice(idk + 1);
      idk = idk + 2;
    } else {
      idk++;
    }
  }

  return str;
}

const in1 = "12345677"; // input
const expect1 = "1234567-7"; // output
const test1 = DashInsert(in1);
// console.log(test1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
// console.log(DashInsert("23522"));
