const assert = require('assert');

const groupTotals = (strArr) => {
  let pairs = strArr.map(function(str) {
    return str.split(':');
  });
  let counts = {};
  for (let i = 0; i < pairs.length; i+= 1) {
    if (counts[pairs[i]]) {

    }
  }
  return();
};

const a1 = '["Z:0", "A:-1"]'; // input
const r1 = 'A:-1'; // output
const t1 = groupTotals(a1);
assert(r1, t1);
