const assert = require('assert');

// Have the func CheckNums(num1,num2) take both parameters being
// passed and return the string true if num2 is greater than num1,
// otherwise return the string false.
// If the parameter values are equal to each other then return the string -1.
const CheckNums = (num1, num2) => {
  if (num1 === num2) return '-1';
  return (num2 > num1).toString();
};

// console.log(3);
const a1 = CheckNums(1, 3);
const r1 = 'false';

assert(r1, a1);

// Test Cases
// Input:3 & num2 = 122
// Output:"true"

// Input:67 & num2 = 67
// Output:"-1"*/
// function CheckNums(num1,num2){
//  if (num2 > num1)
//  return 'true';
//  if (num1 === num2)
//  return '-1';
//  else
//  return 'false' }
