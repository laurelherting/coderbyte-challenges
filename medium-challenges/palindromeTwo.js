const assert = require('assert');

const PalindromeTwo = str => {

  // match only numbers and letters, ignore punctuation
  let re = /[\W_]/g;

  let lowRegStr = str.toLowerCase().replace(re, '');
  // str.toLowerCase() = "Tony - sees Gizmo".toLowerCase() = "tony - sees gizmo"
  // str.replace(/[\W_]/g, '') = "tony - sees gizmo".replace(/[\W_]/g, '') = "tonyseesgizmo"
  // let lowRegStr = "tonyseesgizmo";

  return lowRegStr === lowRegStr.split('').reverse().join('');
}

PalindromeTwo("Tony - sees Gizmo");

const a1 = "Tony - sees Gizmo"; // input
const r1 = "tonyseesgizmo"; // output
const t1 = PalindromeTwo(a1);
assert.strictEqual(t1, r1, `should be ${r1}`);
