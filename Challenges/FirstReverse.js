 /*  Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH */  
function FirstReverse(str) { 

  let newString = "";

  // add each character to newString
  for (let i = str.length - 1; i >= 0; i--) {   
    newString = newString + str.charAt(i);
  }

  return newString;
         
}
   
FirstReverse(readline());
