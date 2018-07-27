// Determine if string 1 can be rearranged to match string 2
//Solve by looping through the second string and check if
//each character exists in the first string
// Start: take both parameters being passed and return the string
// true if a portion of str1 characters can be rearranged to match
// str2, otherwise return the string false

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
