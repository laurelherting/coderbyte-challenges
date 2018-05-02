const assert = require('assert');

const ArrayMatching = strArr => {
  const temp = [];
  const strArr01 = strArr[0].replace(/[[\]]/gi, '').split(',');
  const strArr02 = strArr[1].replace(/[[\]]/gi, '').split(',');
  // console.log(strArr01);
  const len =
    strArr01.length > strArr02.length ? strArr01.length : strArr02.length;
  for (let i = 0; i < len; i += 1) {
    if (strArr01[i] === undefined) {
      strArr01[i] = 0;
    } else if (strArr02[i] === undefined) {
      strArr02[i] = 0;
    }
    temp.push(+strArr02[i] + +strArr01[i]);
  }
  return temp.join('-');
};

const a1 = '5, 2, 3, 2, 2, 3, 10, 6'; // input
const r1 = '7-4-6-10-6'; // output

const t1 = ArrayMatching(a1);
assert.strictEqual(t1, r1);

const a2 = '1, 2, 1, 2, 1, 5, 2'; // input
const r2 = '3-3-6-2'; // output

const t2 = ArrayMatching(a2);
assert.strictEqual(t2, r2);
