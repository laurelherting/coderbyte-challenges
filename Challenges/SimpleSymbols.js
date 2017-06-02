Have the func SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) { 

  let converted = str.replace(/\w+/g, "X").replace(/[\s\=]+/, "");
  
  let test = false;
  
  for (let i = 0; i < converted.length; i++){
  
    if (converted[i] == "X"){
    
      if (converted[i-1] == "+" && converted[i+1] == "+" || converted < 3){
      
      test = true;
        
        break;
      }
    
    }
  
  }
  
 str =  test;
  // code goes here  
  return str; 
         
}
   
SimpleSymbols(readline());           
