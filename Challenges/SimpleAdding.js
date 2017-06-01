/*  Have the func SimpleAdding(num) add up all the numbers from 1 to num. ie: if input is 4 then program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. */ 

function SimpleAdding(num) { 
 var counter = 0;
  for (var i = 1 ; i <=num; i++){
    counter += i;
  }
  num = counter
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
SimpleAdding(readline());           
