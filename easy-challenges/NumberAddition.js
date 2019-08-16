// objective:
//  Use the match function to find matching patterns in a
//  string and return an array of all matches found
//  (set to 0 if none are found)
//  Use the reduce function in the array to return a single value.

// solution:
const assert = require("assert");

const NumberAddition = str => {
  const pattern = /\d*/g;
  const numbers = str.match(pattern);
  let number = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] !== ",") {
      number += Number(numbers[i]);
    }
  }
  return number;
};
// console.log(NumberAddition('75Number9'));

const in1 = "75Number9"; // input
const r1 = "84"; // output
const test1 = NumberAddition(in1);
assert(r1, test1);
