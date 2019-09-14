// objective:
// Alphabetically sort the characters in a string.
// Then, sort the characters using the built-in array sort function.

// solution:
const assert = require("assert");

function AlphabetSoup(str) {
  // convert the string into an array of characters
  const chars = str.split("");

  // sort the array in alphabetical order
  const sorted = chars.sort();

  // return the newly sorted string
  return sorted.join("");
}

const a1 = "AlphabetSoup";
const r1 = "whoosh";
const t1 = AlphabetSoup(a1);
// console.log(r1);
assert(t1, r1);

const a2 = "whoosh";
const r2 = "oohhsw"; // output
const t2 = AlphabetSoup(a2);
assert(t2, r2);
// console.log(r2);

// With Chaining
/*
const assert = require('assert');

function AlphabetSoup (str) {
  return str.split('').sort().join('');
}

const a2 = 'whoosh';
const r2 = 'oohhsw'; // output
const t2 = AlphabetSoup(a2);
assert(t2, r2);
// console.log(r2);
*/
