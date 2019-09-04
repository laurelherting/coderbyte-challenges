// objective:
// Convert a binary number into a decimal number

// solution:
const assert = require("assert");

function SimpleMode(bstr) {
  return parseInt((bstr + "").replace(/[^01]/gi, ""), 2);
}

// console.log(SimpleMode("11001")); yields: 25

const a1 = "11001"; // input
const r1 = "25"; // output
const t1 = SimpleMode(a1);

// console.log(r1);
