const assert = require('assert');

const DivisionStringified = (num1, num2) => {

  // Divide, then round accordingly
  const result = Math.round(num1 / num2).toString(),

  // use the .split method to convert the result variable into an array
    resultArr = result.split('');

  // check if the result is greater than 1000
  if (result >= 1000) {

    // If so, loop through each item in the array
    // starting at the third character from the end (i = result.length - 3)
    // moving back three characters each time (i -= 3)
    // stopping at the start of the string (i > 0)
    for (let i = result.length - 3; i > 0; i -= 3) {

    // At every third character use the .splice method to insert a comma
      resultArr.splice(i, 0, ',');
    }
  }

  // Lastly, return the result array with the .join method to covert it into a string.
  return resultArr.join('');
};

console.log(DivisionStringified(209, 35, 2));
const t1 = 'DivisionStringified([608, 61])';

assert(t1);
