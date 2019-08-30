// objective:
// usage: forms the basis for text ananlysis operations,
// you can make visualizations (ex. word cloud).
// Take the str string parameter being passed and return the number of
// words the string contains

// solution:
const assert = require("assert");

const WordCount = str =>
  // Turn the input string into an array by
  // passing a single space into the .split method
  // Return length of new array (answer)
  str.split("").length;
// console.log(WordCount('Hello, happy holidays'));

const a1 = "React is awesome"; // input
const t1 = WordCount(a1);
// console.log(r1);
assert(t1, a1);
