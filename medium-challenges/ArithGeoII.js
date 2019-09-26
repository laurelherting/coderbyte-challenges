// objective:

// solution:
const assert = require("assert");

function ArithGeoII(arr) {
  let math;
  const number = [arr[1] - arr[0], arr[1] / arr[0]];
  for (let i = 0; i < arr.length - 2; i += 1) {
    math = -1;
    if (number[0] + arr[i + 1] === arr[i + 2]) {
      math = "Arithmetic";
    }
    if (number[1] * arr[i + 1] === arr[i + 2]) {
      math = "Geometric";
    }
  }
  return math;
}

const a1 = "5, 10, 15"; // input
const r1 = "Arithmetic"; // output
const t1 = ArithGeoII(a1);

// console.log(r1);
assert(r1, t1);
