// objective:
// take the array of numbers stored in arr and return the string "Arithmetic"
// if the sequence follows an arithmetic pattern
// return "Geometric" if it follows a geometric pattern

// solution:
const assert = require("assert");

function ArithGeo(arr) {
  // declare two empty arrays to hold the differences and
  // quotients of each item in the input array
  const diff = arr[1] - arr[0];
  const ratio = arr[1] / arr[0];
  // Next, declare two booleans as "goods" for whether or not array
  // follows an arithmetic or geometric pattern
  // Then, turn these false if the input array doesn't follow an arithmetic or
  // geometric pattern, initialize them to true
  let allRatioAreGood = true;
  let allDiffAreGood = true;

  // loop through each item inside array and use the .push method to send
  for (let i = 2; i < arr.length; i += 1) {
    // the difference of each item to good array
    allRatioAreGood += arr[i] / arr[i - 1] === ratio;
    allDiffAreGood += arr[i] - arr[i - 1] === diff;
  }

  // Finally, return "Geometric" if the ariFlag is set to false,
  // "arithmetic" if the geoFlag is set to false, and -1 if neither are set to false
  if (allRatioAreGood) return "Geometric";
  if (allDiffAreGood) return "Arithmetic";
  return -1;
}

const a1 = "Arithmetic";
const r1 = "magic math";
const t1 = ArithGeo(a1);

// console.log(r1);
assert(r1, t1);
