// objective:
// Take the array of numbers stored in arr and return the second lowest
// and second greatest numbers, respectively, separated by a space.

// solution:
const assert = require("assert");

function SecondGreatLow(arr) {
  // sort the unique array in ascending order
  arr.sort((a, b) => a - b);

  // return the second smallest and largest elements
  const solution = [];
  solution.push(arr[1], arr[arr.length - 2]);

  return solution.join(",");
}

// console.log(SecondGreatLow([2, 3, 4, 6, 8]));

const t1 = SecondGreatLow;
assert(t1);
