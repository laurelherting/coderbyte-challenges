// objective:
// Take the array of strings stored in strArr and return the third largest word within

// solution:
const assert = require("assert");

const ThirdGreatest = strArr => {
  strArr.sort((a, b) => b.length - a.length);
  return strArr[2];
};

// console.log(ThirdGreatest([2, 3, 4, 6, 8]));
const t1 = ThirdGreatest;
assert(t1);
