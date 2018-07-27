const assert = require('assert');

// loop through string 2
const StringScramble = (str1, str2) => {
  for (let i = 0; str.2.length; i += 1) {
    if (str1.indexOf(str2) === -1) {
      return false;
    }
  }

  return true;
};

console.log(StringScramble('cdore & str2 = coder'));

const in1 = 'cdore & str2 = coder'; // input
const r1 = 'true'; // output
const test1 = StringScramble(in1);
assert(r1, test1);

const in2 = 'h3llko" & str2 = "hello'; // input
const r2 = 'false'; // output
const test2 = StringScramble(in2);
assert(r2, test2);
