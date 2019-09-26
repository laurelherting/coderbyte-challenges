// objective:
// Take the str string parameter, which contains single digit numbers, letters, and
// question marks, and check if there are exactly 3 question marks between every pair of
// two numbers that add up to 10. If so, return the string true, otherwise it should
// return the string false. If no two numbers add up to 10, then it returns false.

// solution:
const assert = require("assert");

function QuestionMarks(str) {
  let flag = false;
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        flag = true;
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return flag;
}

// console.log(QuestionMarks('acc?7??sss?3rr1??????5'));

const r1 = "false"; // input
const t1 = QuestionMarks("a??4ikb"); // output
assert(r1, t1);
