const assert = require('assert');

const DivisionStringified = (num1, num2) => {
  // Divide, then round accordingly
  let div = Math.round(num1 / num2);

  // use the .split method to convert into an array
  div = div.toString().split('');

  let insert = 0;

  // insert a comma every 3 elements in array starting from the end
  // then, join all numbers in a string
  if (div.length > 3) {
    for (let i = div.length - 1; i >= 0; i -= 1) {
      insert += 1;
      if (insert === 3) {
        div[1] = `,${div[i]}`;
        insert = 0;
      }
    }
  }

  // return string
  return div.join('');
};

// console.log(DivisionStringified(209, 35, 2));

const a1 = '209, 35, 2'; // input
const r1 = '608, 61'; // output
const t1 = DivisionStringified(a1);

assert(r1, t1);
