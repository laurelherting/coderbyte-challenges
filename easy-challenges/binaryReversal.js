// objective:
// write a program for reversing numbers in binary. For instance,
// the binary representation of 13 is 1101, and reversing it gives 1011,
// which corresponds to number 11

// solution:
const assert = require("assert");

const BinaryReversal = str => {
  let num = Number(str).toString(2);

  // add leading zeroes to make the number an integral number
  while (num.length % 8) {
    num = `0${num}`;
  }

  return parseInt(
    num
      .split("")
      .reverse()
      .join(""),
    2
  );
};

const t1 = BinaryReversal(213); // input
// console.log(t1);
assert.strictEqual(t1, 171, "Input 213 should yield Output 171");
