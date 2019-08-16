// objective:
// Continually add up all the numbers in the parameter until
// you reach a single number. When you reach a single number,
// return how many times you had to add to reach it.

// solution:
const assert = require('assert');

const AdditivePersistence = (num) => {
  // Add numbers in num, if more than one number
  // return 1 + the additive persistence of new number
  // if there's just one number, return 0
  const arr = num.toString().split('');

  while (arr.length > 1) {
    let added = 0;
    for (let i = 0; i < arr.length; i += 1) {
      added += parseInt(arr[i], 10);
    }
    return 1 + AdditivePersistence(added);
  }

  return 0;
};

// console.log(AdditivePersistence('3891'));
const r1 = 'addPer';
assert(r1);
