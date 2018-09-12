// Take the str string parameter, which contains single
// digit numbers, letters, and question marks, and check
// if there are exactly 3 question marks between every pair of
// two numbers that add up to 10. If so, return the string true,
// otherwise it should return the string false.
// If no two numbers add up to 10, then it returns false.
const assert = require('assert');

const QuestionMarks = (str) => {
  let result;
  let clean = str.match(/[0-9?]/g);
  clean = clean.join('');
};

const r1 = 'false'; // input
const t1 = QuestionMarks('a??4ikb'); // output
assert(r1, t1);
