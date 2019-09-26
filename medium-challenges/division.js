// objective:
// Take both parameters being passed and return the Greatest Common Factor
// (return the greatest number that evenly goes into both numbers with no
// remainder) Euclidean algorithm

// solution:
const assert = require("assert");

function division(num1, num2) {
  // set up variables
  let a = num1;
  let b = num2;
  let r;

  // use function until it a or b hits 0
  while (a > 0 && b > 0) {
    r = a % b;
    a = b;
    b = r;
  }

  // return the non-zero answer
  return a === 0 ? b : a;
}

const a1 = "7 & num2 = 3"; // input
const r1 = "1"; // output
const t1 = division(a1);
assert(r1, t1);
// console.log(division(188));

const a2 = "36 & num2 = 54"; // input
const r2 = "18"; // output
const t2 = division(a2);
assert(r2, t2);
