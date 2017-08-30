const assert = require('assert');
/*  Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. */
function LetterCapitalize(str) { 
  
// Input:"i like coffee"
// Output:"I Like Coffee"

// Input:"i dance"
// Output:"I Dance"

  const arr = str.split("");
  let fl = true;
  for (let i = 0; i < arr.length; i++){
   if (fl) {
     const item = arr[i].toString();
       arr[i] = item.toUpperCase();
       fl = false;
   };
  
    if (arr[i] === " ") {
      fl = true;
    }
  }
  str = arr.join("");
  return str; 
  // console.log('works1');
}

const in1 = "i like coffee";
const expect1 = "I Like Coffee";
  // console.log('works2');
const test1 = letterCapitalize(in1);
   console.log('works');
assert.strictEqual(test1, expect1, `should be ${expect1}`);
   

const in2 = "i dance";
const expect2 = "I Dance";
const test2 = letterCapitalize(in2);
assert.strictEqual(test2, expect2, `should be ${expect2}`);
