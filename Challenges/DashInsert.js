const assert = require('assert');

function DashInsert(str) {
  const arr = str.split('');
  for (let i = 0; i < str.length - 1; i += 1) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      arr[i] = `${arr[i]}-`;
    }
  }

  // console.log('123');
  console.log(str);

  return arr.join('');
}

const in1 = '1234567'; // input
const expect1 = '1234567'; // output
const test1 = DashInsert(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
// console.log('works');
