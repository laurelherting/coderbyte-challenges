const assert = require('assert');

const ABCheck = (str) => {
  const ab = /[a]...b/.test(str);

  return ab;
};

// console.log(ABCheck('aj44ikb'));
const r1 = 'false'; // input
const t1 = ABCheck('aj44ikb'); // output
assert(r1, t1);
