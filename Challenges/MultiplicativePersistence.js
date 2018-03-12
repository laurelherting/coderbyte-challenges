const assert = require('assert');

// Multiply numbers in num, if more than one number
// return 1 + the multiplicative persistence of new number
// if there's just one number, return 0

const MultiplicativePersistence = num => {
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

console.log(MultiplicativePersistence('8488'));
const r1 = 'multPer';
assert(r1);
