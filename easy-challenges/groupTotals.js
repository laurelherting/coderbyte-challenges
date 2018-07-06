// Read in strArr parameter containing key:value
// pairs where the key is a string and the value
// is an integer
//This should return a string with new key:value pairs
//separated by a comma so that each key appears just
//once with the total values summed up
const assert = require('assert');

const groupTotals = (strArr) => {
  let pairs = strArr.map(function(str) {
    return str.split(':');
  });
  let counts = {};
  for (let i = 0; i < pairs.length; i+= 1) {
    if (counts[pairs[i]]) {
      counts[pairs[i][0]] += parseInt(pairs[i][1]);
    }
  }
 let returnArr = [];
  return();
};

const a1 = '["Z:0", "A:-1"]'; // input
const r1 = 'A:-1';
// Above output should return the keys in
// alphabetical order, but exclude keys that have a value
// of 0 after being summed up
const t1 = groupTotals(a1);
assert(r1, t1);
