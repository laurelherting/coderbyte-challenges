/* Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. */
function AlphabetSoup(str) { 
let sorted = str.split("").sort().join("");
  // code goes here  
  str = sorted
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());           
