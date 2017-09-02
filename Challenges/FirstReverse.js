const assert = require('assert');

// Have the function FirstReverse(str) take the str parameter being passed and
// return the string in reversed order. For example: if the input string is
// "Hello World and Coders" then your program should return the string
// sredoC dna dlroW olleH

function firstReverse(str) { 
  const chars = str.split("");

  const arr = [];
  const ln = str.length;
  let idx = ln;
  for(let i = 0; i < ln; i++) {
      arr.push(chars[idx - 1]);
      idx = idx - 1;
  }
  
  const revStr = arr.join("");
  return revStr; 
}
   
// Console.log('coderbyte');

const a1 = "challenge";
const r1 = "egnellahc";
const t1 = firstReverse(a1);                            
assert.strictEqual(t1, r1, `should be ${r1}`);

const a2 = "I Love Code";
const r2 = "edoC evoL I";
const t2 = firstReverse(a2);                            
assert.strictEqual(t2, r2, `should be ${r2}`);
