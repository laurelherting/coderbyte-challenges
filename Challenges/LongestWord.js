/* Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. */
function LongestWord(sen) { 

    let myArray = sen.replace(/\W+/g, " ").split(" ");
    let newArray = [];
  for(let i = 0; i < myArray.length; i++){
    
    newArray.push(myArray[i].length + "-" + myArray[i]);
  
    
  }
  
  let sorted = newArray.sort(function (a,b){
    if (parseInt(a) > parseInt(b)){
    
      return -1;
    
    } else if (parseInt(b) > parseInt(a)){
    return 1
    
      } else {
        
        return 0;
          
       }
  
  
  });
  
  
  
  // code goes here  
  return sorted[0].replace(/\d+\-/,""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
