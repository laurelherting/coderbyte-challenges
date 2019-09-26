// objective:
// Determine if a string is a palindrome. A palindrome is a string
// that is read the same forwards as it is backwards, for example "mom" or
// "eye." This challenge, as opposed to the easier palindrome challenge on
// Coderbyte, may contains punctuation and spaces which makes it slightly harder.
// To solve this challenge, use some code written in the "easy-challenges"
// which required you to reverse a string.

// solution:
const assert = require("assert");

const PalindromeTwo = str => {
  // match only numbers and letters, ignore punctuation
  const re = /[\W_]/g;
  // console.log(re);
  const lowRegStr = str.toLowerCase().replace(re, "");

  return (
    lowRegStr ===
    lowRegStr
      .split("")
      .reverse()
      .join("")
  );
};

const a1 = "Anne, I vote more cards race Rome-to-Vienna"; // input
const r1 = "anneivotemorecarsracerometovienna"; // output
const t1 = PalindromeTwo(a1);

// console.log(r1);
assert(r1, t1);
