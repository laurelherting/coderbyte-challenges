const assert = require('assert');

const PalindromeTwo = str => {

  // match only numbers and letters, ignore punctuation
  let arr = /[^A-Z-z0-9]/g;

  str = arr.toLowerCase().replace(arr, '');

  let len = str.length;
    for (let i = 0; i < len / 2; i+= 1) {
        if (str[i] !== str[len - 1 - i]) {
        // console.log("output");
            return false;
        }
    console.log(PalindromeTwo);
    }

  // check for palindrome
    return true;

};

console.log(PalindromeTwo("Tony - sees Gizmo"));
// palindromeTwo("Tony - sees Gizmo");

t1 = PalindromeTwo(8);
console.log(t1);
assert(t1);

// Input:'Tony - sees Gizmo'

// Output:"true"
