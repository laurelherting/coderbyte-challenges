const assert = require('assert');

const PalindromeTwo = str => {

  // match only numbers and letters, ignore punctuation
  let arr = str.match(/[a-z0-9]+/gi);

  // join into string
  let joined = arr.join('').toLowerCase();

  // check for palindrome
 return joined === joined.split('').reverse().join('');

};

// console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna"));

t1 = PalindromeTwo(8);
console.log(t1);
assert(t1);
