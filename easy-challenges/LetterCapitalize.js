const assert = require('assert');
/*  Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. */
const letterCapitalize = str => {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
  }
  return arr.join('');
};

const in1 = 'i like coffee';
const expect1 = 'I Like Coffee';
const test1 = letterCapitalize(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);

const in2 = 'i dance';
const expect2 = 'I Dance';
const test2 = letterCapitalize(in2);
assert.strictEqual(test2, expect2, `should be ${expect2}`);

// Input:"i like coffee"
// Output:"I Like Coffee"

// Input:"i dance"
// Output:"I Dance"
