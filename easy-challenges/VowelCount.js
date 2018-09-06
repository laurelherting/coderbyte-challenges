const assert = require('assert');

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

// console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
// console.log(countVowels('xxx')); // 0

const a1 = 'September'; // input
const r1 = '3'; // output
const t1 = countVowels(a1);

assert(r1, t1);
