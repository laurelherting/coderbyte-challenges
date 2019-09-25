// objective:
// Take the array of numbers stored in arr and return the string true if any
// combination of numbers in the array can be added up to equal the largest number
// in the array, otherwise return the string false

// solution (using recursion):
const assert = require("assert");

function ArrayAdditionI(arr) {
  // First, use the native sort method to order input array from smallest to largest
  arr.sort((a, b) => a - b);
  // Use pop to get the largest value. This will remove it from the array
  const largest = arr.pop();

  // Create a result variable that will change to true if a possible solution exists
  // within the recursive inner function
  let result = false;

  // Input array is now prepared
  const onePerm = (sum, i) => {
    // If nothing is passed for sum or i, these two lines will default to 0
    /* eslint-disable no-param-reassign */
    sum = sum || 0;
    i = i || 0;

    // Base case is to check if current sum is equal to the largest value
    if (sum === largest) {
      // If so, result is set to true and return from the inner function
      result = true;
      return;
    }

    // Now, we see that the current sum isn't equal to the largest value,
    // so iterate over the numbers array
    for (; i < arr.length; i += 1) {
      // Add the current number to sum
      sum += arr[i];

      // Call the function again, but this time pass in the modified sum
      // and add 1 to the i value so that the next run through will add the
      // next value in the array.
      // If i is larger or equal to the length of the array, the loop
      // won't execute and the function will terminate
      onePerm(sum, i + 1);

      // Lastly, subtract the last number added to check all possible variations
      sum -= arr[i];
    }
  };

  // Check variations, but don't have to pass anything in
  onePerm();
  return result;
}
// condensed version, using reduce
// const sum = [1, 2, 3].reduce((a, b) => a + b, 0);
// console.log(sum); // 6

const a1 = "[1, 2, 3]";
const t1 = "ArrayAdditionI([1, 2, 3])";

assert(t1, a1);
