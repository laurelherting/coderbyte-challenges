const assert = require('assert');

const alphabetSearching = str => {
  let array = str.split('');
  for (let i = 97; i <= 122; i+= 1) {
    if (!array.includes(String.fromCharCode(i))) {
    // console.log(alphabetSearching);
       return false;
    }
  }

  console.log(test1);
  return true;
};

const in1 = "abcdefghijklmnopqrstuvwxyyyy";
const expect1 = "false";
const test1 = alphabetSearching(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);

const in2 = "abc123456kmo";
const expect2 = "false";
const test2 = alphabetSearching(in2);
assert.strictEqual(test2, expect2, `should be ${expect2}`);
