const assert = require('assert');

const division = (num1, num2) => {

  // set up variables
  let a = num1;
  let b = num2;
  let r;

  // use function until it a or b hits 0
  while (a > 0 && b > 0) {
    r = a % b;
    a = b;
    b = r;
  }

  // return the non-zero answer
  return (a === 0) ?  b : a;

};


const a1 = '36, 54'; // input
const t1 = division(a1);
assert(t1);
