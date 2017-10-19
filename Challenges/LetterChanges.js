const assert = require('assert');
// Have func LetterChanges(str) take the str parameter being 
// passed & modify it using this algorithm: 
// Replace every letter in string with the letter following it in 
// the alphabet(ie. c becomes d). Then, capitalize every vowel in 
// this new string and finally return modified string.

function LetterChanges(str) { 

  let letters = "abcdefghijklmnopqrstuvwxyz"
      let newArray = [];
  
  for (let i = 0; i < str.length; i++) {
      
      if(letters.indexOf(str[i]) == -1) {
               newArray.push(str[i]);
      } else {

      let letr = letters[letters.indexOf(str[i])+1];
        if (letr == "a" | letr == "e" | letr == "i" | letr == "o" | letr == "u") {

        newArray.push(letr.toUpperCase());
        } else {

        newArray.push(letr);
        }

      }
  }
  str = newArray.join("");
  return str;
}

const a1 = "challenge";
const r1 = "dibmmfohf";

const t1 = LetterChanges(a1);                            
console.log(r1);
assert(t1, r1);
const a2 = "dibmmfohf";
const r2 = "dIbmmfOhf";

console.log(r2);
