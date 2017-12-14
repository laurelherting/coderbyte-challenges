// const assert = require('assert');

// Have the func CheckNums(num1,num2) take both parameters being 
// passed and return the string true if num2 is greater than num1, 
// otherwise return the string false. 
// If the parameter values are equal to each other then return the string -1.

/* function CheckNums(num1,num2) { 
  let counter = "";
  if (num1 < num2){
    counter = true;
 
  } else if ( num1 == num2){
  
    counter = -1;
  } else{
  
   counter = false
  }
  return counter; */

function CheckNums(num1,num2) {
  if (num1===num2) return '-1'
  return (num2 > num1).toString()
}
CheckNums(1,3)

// t1 = CheckNums(5);
// console.log(t1);
// assert(t1, 5, "");
