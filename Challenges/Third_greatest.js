const assert = require('assert');

function ThirdGreatest(strArr) {
  strArr.sort((a, b) => b.length - a.length);
  return strArr[2];
}

console.log(ThirdGreatest([2, 3, 4, 6, 8]));
const t1 = ThirdGreatest;
assert(t1);
