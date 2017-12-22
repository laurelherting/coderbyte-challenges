const assert = require('assert');

// steps with explanation

function WordCount(str) {

  /* Turn the input string into an array by passing a single space into the .split method */
  str = str.split(" ");

  // Return length of new array (answer)
  return str.length;
}

// Best practice
function WordCount(str) {

  return str.split(" ").length;
}

const a1 = "WordCount";
const r1 = "React is awesome";

const t1 = "WordCount";
console.log(r1);
assert(t1, r1);
