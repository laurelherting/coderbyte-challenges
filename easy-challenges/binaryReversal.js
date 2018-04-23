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
};

const a1 = '213'; // input
const r1 = '171'; // output

const t1 = BinaryReversal(a1);
assert.strictEqual(t1, r1);
