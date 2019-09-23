// objective:
// Solve by creating a new array, then loop through one of the
// arrays and add each element with the corresponding element
// in the other array, then stor this sum in the new array.

// solution:
const assert = require("assert");

function ArrayMatching(strArr) {
  const arr1 = strArr[0].replace(/[[]]/g, "").split(",");
  const arr2 = strArr[1].replace(/[[]]/g, "").split(",");

  const long = arr1.length >= arr2.length ? arr1 : arr2;
  const short = long === arr1 ? arr2 : arr1;
  const summed = long.map((n, i) => Number(n) + Number(short[i] || 0));

  return summed.join("-");
}

const a1 = "[5, 2, 3], [2, 2, 3, 10, 6]"; // input
const t1 = ArrayMatching(a1);
assert(t1);

const a2 = "[1, 2, 1], [2, 1, 5, 2]"; // input
const t2 = ArrayMatching(a2);
assert(t2);

// console.log(t1);
// console.log(t1);
