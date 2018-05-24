const assert = require('assert');

const PalindromeTwo = str => {

  // match only numbers and letters, ignore punctuation
  let re = /[\W_]/g;

  let lowRegStr = str.toLowerCase().replace(re, '');
  // str.toLowerCase() = "Anne, I vote more cars race Rome-to-Vienna".toLowerCase() = "anne, i vote more cars race rome to vienna"
  // str.replace(/[\W_]/g, '') = "anne, i vote more cars race rome-to-vienna".replace(/[\W_]/g, '') = "anneivotemorecarsracerometovienna"
  // let lowRegStr = "anneivotemorecarsracerometovienna";

  return lowRegStr === lowRegStr.split('').reverse().join('');
}

const a1 = "Anne, I vote more cards race Rome-to-Vienna"; // input
// const r1 = "anneivotemorecarsracerometovienna"; // output
const t1 = PalindromeTwo(a1);
// assert.strictEqual(t1, r1, `should be ${r1}`);
assert(t1);

console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna"));
