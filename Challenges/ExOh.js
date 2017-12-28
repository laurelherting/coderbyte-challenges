const assert = require('assert');

// step by step
function ExOh(str) {

  // declare two variables
  // One removes all characters in str that aren't x's
  let strX = str.replace(/[^x]/g, "");

  // second variable removes all characters that aren't 0's
  let strO = str.replace(/[^o]/g, "");

  // find length of variables to find amount of x's and o's are in str
  let xNumber = strX.length;
  let oNumber = strO.length;

  // return truth value of comparison of both
  return xNumber === oNumber;
}

// Best Practice with example
// Only these two letters(x,o) will be entered in the string, no punctuation or numbers 
// For example: if str is "xoxxox" then the output should 
// return false because there are 4 x's and 2 o's. 
function ExOh(str) {
  let o = 0,
      x = 0;

  for (i=0;i<str.length;i++) {
    if (str.toLowerCase().charAt(i) === "o") {
      o+=1;
    } else if (str.toLowerCase().charAt(i) === "x") {
      x+=1;
    }
  }

  if (x === o) {
    return "true";
  } else {
    return "false";
  }
};

console.log(ExOh("xoxxox"));
const r1 = "false";

assert(r1);
