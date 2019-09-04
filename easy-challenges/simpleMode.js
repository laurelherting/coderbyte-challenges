// objective:
// Convert a binary number into a decimal number

// solution:
const assert = require("assert");

const SimpleMode = arr => {
  return parseInt((arr + "")
    .replace(/[^01]/gi, ""), 2);
};

console.log(SimpleMode("5,5,2,2,1"));
const r1 = "5";
assert(r1);
