// objective:
// Multiply numbers in num, if more than one number
// return 1 + the multiplicative persistence of new number
// if there's just one number, return 0

// solution:
const assert = require('assert');

const MultiplicativePersistence = (num) => {
  const arr = num.toString().split('');

  while (arr.length > 1) {
    let mult = 1;
    for (let i = 0; i < arr.length; i += 1) {
      mult += parseInt(arr[i], 10);
    }
    return 1 + MultiplicativePersistence(mult);
  }

  return 0;
};

const a1 = '8488';
const r1 = 3;
const t1 = MultiplicativePersistence(a1);
assert(r1, t1);

// console.log(t1);
