// objective:
// Convert a binary number into a decimal number

// solution:
const assert = require("assert");

function SimpleMode(bstr) {
  return parseInt((bstr + "").replace(/[^01]/gi, ""), 2);
}

// console.log(SimpleMode("11001")); yields: 25

const r1 = "5";
assert(r1);
