// Determine if string 1 can be rearranged to match string 2
// Solve by looping through the second string and check if
// each character exists in the first string
// Start: take both parameters being passed and return the string
// true if a portion of str1 characters can be rearranged to match
// str2, otherwise return the string false

const assert = require("assert");

// loop through string 2
function StringScramble(str1, str2) {
  for (let i = 0; i < str2.length; i += 1) {
    // check if each character also exists in string 1
    // if not, return false
    if (str1.indexOf(str2.charAt(i)) === -1) {
      return false;
    }
  }

  // return true if all characters exist in string 1
  return true;
}

// console.log(StringScramble('rkqodlw', 'world'));

const in1 = "cdore & str2 = coder"; // input
const r1 = "true"; // output
const test1 = StringScramble(in1);
assert(r1, test1);

const in2 = 'h3llko" & str2 = "hello'; // input
const r2 = "false"; // output
const test2 = StringScramble(in2);
assert(r2, test2);
