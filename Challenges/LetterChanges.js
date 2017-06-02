/* have func LetterChanges(str) take the str parameter being passed & modify it using this algorithm: replace every letter in string with the letter following it in the alphabet(ie. c becomes d). Then, capitalize every vowel in this new string and finally return midified string. */

function LetterChanges(str) { 

  let letters = "abcdefghijklmnopqrstuvwxyz"
      let newArray = [];
  
  for (let i = 0; i < str.length; i++){
      
      if(letters.indexOf(str[i]) == -1){
               newArray.push(str[i]);
      } else {

      let letr = letters[letters.indexOf(str[i])+1];
        if (letr == "a" | letr == "e" | letr == "i" | letr == "o" | letr == "u"){

        newArray.push(letr.toUpperCase());
        } else {

        newArray.push(letr);
        }

      }
  }
  //code goes here
  str = newArray.join("");
  return str;

}

/* keep this func call here to see how to enter arguments */
LetterChanges(readline());
