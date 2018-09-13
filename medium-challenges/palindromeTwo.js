const assert = require('assert');

const PalindromeTwo = (str) => {
  // match only numbers and letters, ignore punctuation
  const re = /[\W_]/g;
  // console.log(re);
  const lowRegStr = str.toLowerCase().replace(re, '');

  return lowRegStr === lowRegStr.split('').reverse().join('');
};

const a1 = 'Anne, I vote more cards race Rome-to-Vienna'; // input
const r1 = 'anneivotemorecarsracerometovienna'; // output
const t1 = PalindromeTwo(a1);

// console.log(r1);
assert(r1, t1);
