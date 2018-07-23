const assert = require('assert');

// loop through string 2
const StringScramble = (str1, str2) => {
  for () {

    if (str1(str2)) {
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
