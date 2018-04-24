const assert = require('assert');

const BinaryReversal = str => {
  const val = Number(str).toString(2);

  return parseInt(
    val
      .padStart(Math.ceil(val.length / 8) * 8, '0')
      .split('')
      .reverse()
      .join(''),
    2
  );

  // console.log('err here');
};

console.log(BinaryReversal);

const in1 = '213'; // input
const expect1 = '171'; // output
const test1 = BinaryReversal(in1);
assert.strictEqual(test1, expect1);
