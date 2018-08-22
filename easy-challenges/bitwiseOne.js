const assert = require('assert');

const BitwiseOne = (strArr) => {
  let output = '';
  for (let i = 0; i < strArr[0].length; i += 1) {
    if (strArr[0][i] === '1' || strArr[1][i] === '1') {
      output += '1';
    } else {
      output += '0';
    }
  }
  return output;
};

const in1 = '100, 000'; // input
const expect1 = '3'; // output
const test1 = BitwiseOne(in1);
assert(test1, expect1);
