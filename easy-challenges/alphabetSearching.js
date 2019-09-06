// objective:
// Take the string parameter being passed and return the string
// true if every letter from alphabet exists in the string.
// Or else, return false.

// solution:
const assert = require("assert");

const alphabetSearching = str => {
  const array = str.split("");

  for (let i = 97; i <= 122; i += 1) {
    if (!array.includes(String.fromCharCode(i))) {
      return false;
    }
  }

  // console.log(array);
  return true;
};

const a1 = "gbjkbvnienjnvaabc";
const r1 = "true";
const t1 = alphabetSearching(a1);

// console.log(r1);
assert(r1, t1);
