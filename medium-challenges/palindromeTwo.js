const assert = require('assert');

const PalindromeTwo = str => {

  // match only numbers and letters, ignore punctuation
  let arr = str.replace(/[a-z0-9]+/gi);
  console.log('true');

  // join into string
  let joined = arr.split('').reverse().join('');

  // check for palindrome
  return arr === joined;

};

console.log(PalindromeTwo('Tony - sees Gizmo'));

t1 = PalindromeTwo(8);
console.log(t1);
assert(t1);

// Input:'Tony - sees Gizmo'

// Output:"true"
