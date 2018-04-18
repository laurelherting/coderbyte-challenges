const assert = require('assert');

const OtherProducts = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i += 1) {
    let num = 1;
    for (let j = 0; j < arr.length; j += 1) {
      if (i !== j) {
        num *= arr[j];
      }
    }
    str += num;
    if (i !== arr.length - 1) {
      str += '-';
    }
  }
  return str;
};

const in1 = '1, 2, 3, 100'; // input
const expect1 = '600-300-200-6'; // output
const test1 = OtherProducts(in1);
assert(test1, expect1);
