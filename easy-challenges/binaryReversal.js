const assert = require('assert');

const BinaryReversal = str => {
  let num = Number(str).toString(2);
  while (num.length % 8) {
    num = `0${num}`;
  }

  return parseInt(
    num
      .split('')
      .reverse()
      .join(''),
    2
  );
};

const t1 = BinaryReversal(213); // input
console.log(t1);
assert.strictEqual(t1, 171, 'Input 213 should yield Output 171');
