// objective:
// Take the string parameter being passed & modify it using this algorithm:
// Replace every letter in string with the letter following it in
// the alphabet(ie. c becomes d). Then, capitalize every vowel in
// this new string and finally return modified string.

// solution:
const assert = require('assert');

const LetterChanges = (str) => {
  const converted = str.replace(
    /[a-z]/gi,
    char =>
      (char === 'z' || char === 'Z'
        ? 'a'
        : String.fromCharCode(char.charCodeAt() + 1)),
  );

  // after converting each letter to the letter following it
  // in the alphabet, next capitalize the vowels
  const capitalized = converted.replace(/a|e|i|o|u/gi, vowel =>
    vowel.toUpperCase());

  // return the final string
  return capitalized;
};

const a1 = 'challenge'; // input
const r1 = 'dibmmfohf'; // first output
const t1 = LetterChanges(a1);
// console.log(r1);
assert(t1, r1);

const r2 = 'dIbmmfOhf'; // final output
assert(r2);
// console.log(r2);
