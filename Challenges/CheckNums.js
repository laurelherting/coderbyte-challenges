/* Have the func CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.  */
function CheckNums(num1,num2) { 
  let counter = "";
  if (num1 < num2){
    counter = true;
 
  } else if ( num1 == num2){
  
    counter = -1;
  } else{
  
   counter = false
  }
  // code goes here  
  return counter; 
         
}
   
CheckNums(readline());           
