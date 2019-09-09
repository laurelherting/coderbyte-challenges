// objective:
// Take the str parameter being passed & return the string true if there
// is an equal number of x's and o's, otherwise return the string false
// Only these two letters will be entered in the string, no punctuation or numbers

// solution:
const assert = require("assert");

const ExOh = str => {
  // declare two variables
  // One removes all characters in str that aren't x's
  const strX = str.replace(/[^x]/g, "");

  // second variable removes all characters that aren't 0's
  const strO = str.replace(/[^o]/g, "");

  // find length of variables to find amount of x's and o's are in str
  const xNumber = strX.length;
  const oNumber = strO.length;

  // return truth value of comparison of both
  return xNumber === oNumber;
};

// Best Practice with example
// Only these two letters(x,o) will be entered in the string, no punctuation or numbers
// For example: if str is "xoxxox" then the output should
// return false because there are 4 x's and 2 o's.

/* const ExOh = (str) => {
  let o = 0,
      x = 0;

  for (i=0;i<str.length;i += 1) {
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
*/

// console.log(ExOh('xoxxox'));
const r1 = "false";
assert(r1);
