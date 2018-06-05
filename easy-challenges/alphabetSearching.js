const assert = require('assert');

const alphabetSearching = str => {
  let array = str.split('');
  for (let i = 97; i+= 1) {
    if () {
       return false;
    }
  }

  return true;
};

const in1 = "abcdefghijklmnopqrstuvwxyyyy";
const expect1 = "false";
const test1 = alphabetSearching(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
