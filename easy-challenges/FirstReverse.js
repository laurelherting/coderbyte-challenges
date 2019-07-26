// objective:
// Have the function FirstReverse(str) take the str parameter being passed and
// return the string in reversed order.
// example: if input string is "Hello World and Coders", then your program should
// return the string "sredoC dna dlroW olleH"

// solution:
const assert = require('assert');

const firstReverse = (str) => {
  const chars = str.split('');

  const arr = [];
  const ln = str.length;
  let idx = ln;
  for (let i = 0; i < ln; i += 1) {
    arr.push(chars[idx - 1]);
    idx -= 1;
  }

  const revStr = arr.join('');
  return revStr;
};

/* Using chaining
function FirstReverse (str) {
  return str.split('').reverse().join('');
}
*/

const a1 = 'challenge';
const r1 = 'egnellahc';
const t1 = firstReverse(a1);
assert.strictEqual(t1, r1, `should be ${r1}`);

const a2 = 'I Love To Code';
const r2 = 'edoC oT evoL I';
const t2 = firstReverse(a2);
assert.strictEqual(t2, r2, `should be ${r2}`);
