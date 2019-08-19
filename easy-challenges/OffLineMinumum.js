// objective:
// Have the function OffLineMinimum(strArr) take the
// strArr parameter being passed which will be an array of integers ranging from
// 1...n and the letter "E" and return the correct subset based on the following
// rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"]
// where the I's stand for integers and the E means take out the smallest integer
// currently in the whole set. When finished, your program should return that new set
// with integers separated by commas.

// solution:
const assert = require("assert");

const OffLineMinimum = strArr => {
  // store all numbers as loop through array
  const nums = [];

  // store only the minimum numbers
  const removed = [];

  // loop through strArr
  for (let i = 0; i < strArr.length; i += 1) {
    // if a number is encountered store it in nums
    if (strArr[i] !== "E") {
      nums.push(parseInt(strArr[i], 10));
    } else {
      // if an E is encountered remove the smallest number
      // from nums and store it in the outputs array
      const smallest = Math.min.apply(null, nums);
      nums.splice(nums.indexOf(smallest), 1);
      removed.push(smallest);
    }

    // console.log(nums);
  }
  return removed.join(",");
};
const a1 = "[1,2,E,E,3]"; // input
const r1 = "1,2"; // output
const t1 = OffLineMinimum(a1);
assert(r1, t1);

const a2 = ["4,E,1,E,2,E,3,E"]; // input
const r2 = "4,1,2,3"; // output
const t2 = OffLineMinimum(a2);
assert(r2, t2);
