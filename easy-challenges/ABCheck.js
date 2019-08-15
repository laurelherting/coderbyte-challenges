// objective:
// Determine if characters "a"&"b" are separated by exactly 3 places in string

// solution:
const assert = require('assert');

const ABCheck = (str) => {
  // First, declare regex expression to match if a & b ever occur three characters apart
  // . is a "wildcard" metacharacter in regex that matches almost any character
  const ab = /[a]...b/.test(str);

  // return answer
  return ab;
};

// console.log(ABCheck('aj44ikb'));
const r1 = 'false'; // input
const t1 = ABCheck('aj44ikb'); // output
assert(r1, t1);
