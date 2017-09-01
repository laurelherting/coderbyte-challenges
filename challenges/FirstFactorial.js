const assert = require('assert');

// Have the function FirstFactorial(num) take the num parameter being passed 
// return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1))
// For the test cases, the range will be between 1 and 18 and the input will
// always be an integer.

function FirstFactorial(num) { 
    if (num === 0) {
      return 1;
  }
  return num * FirstFactorial(num - 1); 
}
     
t1 = FirstFactorial(5);                            
// console.log(t1);
assert.strictEqual(t1, 120, "Input 5 should yield Output 120");

t2 = FirstFactorial(9);                            
// console.log(t2);
assert.strictEqual(t2, 362880, "Input 9 should yield Output 362880");

