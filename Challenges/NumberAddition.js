const assert = require('assert');

//  Use the match function to find matching patterns in a
//  string and return an array of all matches found
//  (set to 0 if none are found)
//  Use the reduce function in the array to return a single value
// Input:"75Number9"
// Output:84

function NumberAddition(str) {
  const numsArray = str.match(/\d+/g);
  if (numsArray === null) {
    return 0;
  }
  return numsArray.reduce(
    (acc, curr) => parseInt(acc, 10) + parseInt(curr, 10)
  );
}
console.log(NumberAddition('75Number9'));
// console.log("NumberAddition");

const in1 = '75Number9'; // input
const expect1 = '84'; // output
const test1 = NumberAddition(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
