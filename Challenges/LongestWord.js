const assert = require('assert');
// Have the function LongestWord(sen) take the sen parameter being passed 
// and return the largest word in the string.
// If there are two or more words that are the same length,
// return the first word from the string with that length.

function LongestWord(sen) { 

  const myArray = sen.replace(/\W+/g, " ").split(" ");
  let newArray = [];
  for(let i = 0; i < myArray.length; i++) {
    
    newArray.push(myArray[i].length + "-" + myArray[i]);

  }
 // console.log('this works');

  const sorted = newArray.sort(function (a,b){
    if (parseInt(a) > parseInt(b)){
    
      return -1;
    
    } else if (parseInt(b) > parseInt(a)) {
    return 1
    
      } else {
        
        return 0;
       }
  });
  
// console.log('this works too');
  return sorted[0].replace(/\d+\-/,""); 
}
const a1 = "This is a hedgehog";
// console.log('a1');
const r1 = "hedgehog";
// console.log('r1');
const t1 = LongestWord(a1);
// console.log(t1);
assert.strictEqual(t1, r1,);
