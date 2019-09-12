// objective:
// Read in strArr parameter containing key:value pairs where the key
// is a string and the value is an integer. This should return a string
// with new key:value pairs separated by a comma so that each key appears
// just once with the total values summed up.

// solution:
const assert = require("assert");

function GroupTotals(strArr) {
  const pairs = strArr.map(function(str) {
    return str.split(":");
  });
  const counts = {};
  for (let i = 0; i < pairs.length; i += 1) {
    if (counts[pairs[i]]) {
      counts[pairs[i][0]] += 1 parseInt(pairs[i][1]);
    }
  }
  const returnArr = [];
  for (let key in counts) {
    if (counts[key] !== 0) {
      returnArr.push(`${key}:${counts[key]}`);
    }
  }

  return returnArr.sort().join(",");
}

const a1 = '["Z:0", "A:-1"]'; // input
const r1 = "A:-1";
// Above output should return the keys in
// alphabetical order, but exclude keys that have a value
// of 0 after being summed up
const t1 = GroupTotals(a1);
assert(r1, t1);

const a2 = '["X:-1", "Y:1", "X:-4", "B:3", "X:5"]'; // input
const r2 = "B:3,Y:1"; // output
const t2 = GroupTotals(a2);
assert(r2, t2);
