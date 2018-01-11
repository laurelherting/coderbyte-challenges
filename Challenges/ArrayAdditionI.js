const assert = require('assert');
// Solution uses recursion

function ArrayAdditionI(arr) { 
    // First, use the sort method to order the array from smallest to largest    
    let arr = arr.sort(function(a,b){return a-b});

    // Next, use pop to get the largest value. This will remove it from the array.
    let largest = arr.pop();

    // Create a result variable that will change to true if a possible solution exists 
    // within the recursive inner function
    let result = false;

    // Input array is now prepared
    let onePerm = function(sum, i) {

    // If nothing is passed for sum or i, these two lines will default to 0
    sum = sum || 0;
  	i = i || 0;

        // Base case is to check if current sum is equal to the largest value
        if (sum === largest) {

        // If so, result is set to true and return from the inner function
    result = true;
        return;
    }

    // Now, we see that the current sum isn't equal to the largest value, 
    // so we iterate over the numbers array
        for (; i < arr.length; i++) { 
            
        // Add the current number to sum
    sum += arr[i];

            // Call the function again, but this time pass in the modified sum 
            // and add 1 to the i value so that the next run through will add the 
            // next value in the array.
            //If i is larger or equal to the length of the array, the loop 
            //won't execute and the function will terminate
        onePerm(sum, i+1);

      // Lastly, subtract the last number added to check all possible variations
        sum -= arr[i];
        }
    };

    // Check variations, but don't have to pass anything in
    onePerm();      
    return result;
}

// condensed version, using reduce
getSum = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(getSum); // 6

const a1 = "[1, 2, 3]";
const t1 = "getSum([1, 2, 3])";

assert(t1);
