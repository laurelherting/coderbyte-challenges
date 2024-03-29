/* Take array of numbers - duplicate entries. For example if the input is [1, 2, 2, 2, 3]
then your program should output 2 because there are two duplicates of one of the elements. */

const assert = require("assert");

function DistinctList(arr) {
  // Declare and initialize an array
  var duplicates = 0;
  // Duplicate elements can be found using two for loops
  // Outer loop will iterate through the array from 0 to length of the array
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      // If a match is found (duplicate element is found), then display element
      if (arr[i] === arr[j] && i !== j) {
        duplicates++;
        arr.splice(arr.indexOf(arr[i]), 1);
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        duplicates++;
        arr.splice(arr.indexOf(arr[i]), 1);
      }
    }
  }
  return duplicates;
}

/* const in1 = "12223"; // input
const expect1 = "2"; // output
const test1 = DistinctList(in1);
console.log(test1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
*/
