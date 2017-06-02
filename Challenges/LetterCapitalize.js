/*  Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. */
function LetterCapitalize(str) { 
  
  let ary = str.split(" ");
  
  for (let i = 0; i < ary.length; i++){
    
        ary[i] = ary[i].split("");
        ary[i][0] = ary[i][0].toUpperCase();
        ary[i] = ary[i].join("");

    
  
  }
  // code goes here  
  return ary.join(" "); 
         
}
   
LetterCapitalize(readline());           
