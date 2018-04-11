const assert = require('assert');

const OffLineMinimum = strArr => {
  // store all numbers as loop through array
  const nums = [];

  // store only the minimum numbers
  const removed = [];

  // loop through strArr
  for (let i = 0; i < strArr.length; i += 1) {
    // if a number is encountered store it in nums
    if (strArr[i] !== 'E') {
      nums.push(parseInt(strArr[i], 10));
    } else {
      // if an E is encountered remove the smallest number
      // from nums and store it in the outputs array
      const smallest = Math.min.apply(null, nums);
      nums.splice(nums.indexOf(smallest), 1);
      removed.push(smallest);
    }

    console.log(nums);
  }
  return removed.join(',');
};
const a1 = '[1,2,E,E,3]'; // input
// const r1 = '1,2'; // output
const t1 = OffLineMinimum(a1);
assert(t1);

// Input:"4","E","1","E","2","E","3","E"
// Output:"4,1,2,3"
