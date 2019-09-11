// objective:
// write a program for reversing numbers in binary. For instance,
// the binary representation of 13 is 1101, and reversing it gives 1011,
// which corresponds to number 11

// solution:
const assert = require("assert");

function BinaryReversal(n) {
  let r = 0;

  do {
    r = (r << 1) + (n & 1);
  } while ((n = n >> 1));

  return r;
}

const a1 = "13"; // input
const r1 = "11"; // output
const t1 = BinaryReversal(a1);

// console.log(t1);
assert(r1, t1);
