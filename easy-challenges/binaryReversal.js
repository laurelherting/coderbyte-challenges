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

const a1 = "13"; // input
const r1 = "11"; // output
const t1 = BinaryReversal(a1);

console.log(t1);
assert(r1, t1);
