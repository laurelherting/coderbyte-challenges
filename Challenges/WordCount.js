// usage: forms the basis for text ananlysis operations,
// you can make visualizations (ex. word cloud).
const assert = require('assert');
function WordCount(str) {

    // Turn the input string into an array by
    // passing a single space into the .split method
    // Return length of new array (answer)
  return str.split(' ').length;
}
 
// console.log(WordCount('Hello, happy holidays'));

const a1 = "WordCount";
const r1 = "React is awesome";

const t1 = "WordCount";
// console.log(r1);
assert(t1, r1);
