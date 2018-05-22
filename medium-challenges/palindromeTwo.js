// check the end from each part and divide the
// number of iterations inside the FOR loop by two.
const assert = require('assert');

const PalindromeTwo = str => {

  // match only numbers and letters, ignore punctuation
  let re = /[^A-Za-z0-9]/g;

  let lowRegStr = str.toLowerCase().replace(re, '');

  // Create the FOR loop
  let len = str.length;
  for (let i = 0; i < len/2; i+= 1) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }

 return true;
}

// console.log(PalindromeTwo("Tony - sees Gizmo"));
// palindromeTwo("Tony - sees Gizmo");

t1 = PalindromeTwo("Tony - sees Gizmo");
console.log(t1);
assert(t1);

// Input:'Tony - sees Gizmo'

// Output:"true"
