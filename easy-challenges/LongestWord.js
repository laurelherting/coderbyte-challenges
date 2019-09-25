// objective:
// Have the function LongestWord(sen) take the sen parameter being passed
// and return the largest word in the string.
// If there are two or more words that are the same length,
// return the first word from the string with that length.

// solution:
const assert = require("assert");

function LongestWord(sen) {
  const arr = sen.match(/[a-z0-9]+/gi);

  const sorted = arr.sort((a, b) => b.length - a.length);

  return sorted[0];
}

const a1 = "This is a hedgehog";
// console.log('a1');
const r1 = "hedgehog";
// console.log('r1');
const t1 = LongestWord(a1);
// console.log(t1);
assert.strictEqual(t1, r1);
