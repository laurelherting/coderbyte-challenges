const assert = require('assert');

// First, declare a regex expression to match if a and b ever occur three characters apart
// . is a "wildcard" metacharacter in regex that matches almost any character
const ABCheck = (str) => {
  const ab = /[a]...b/.test(str);

  // return answer
  return ab;
};

// console.log(ABCheck('aj44ikb'));
const r1 = 'false'; // input
const t1 = ABCheck('aj44ikb'); // output
assert(r1, t1);
