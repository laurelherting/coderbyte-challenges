const assert = require('assert');

function divisionStringified(num1, num2) {

// Divide, then round accordingly 
    let result = Math.round(num1 / num2).toString();

    // use the .split method to convert the result variable into an array
    let resultArr = result.split("");

    // check if the result is greater than 100
    if (result >= 100) {

    // If so, loop through each item in the array
    // starting at the third character from the end (i = result.length - 3)
    // moving back three charactres each time (i -= 3)
    // stopping at the start of the string (i > 0)
        for (let i = result.length - 3; i > 0; i -= 3) {

        // At every third character use the .splice method to insert a comma
            resultArr.splice(i, 0, ",");
        }
    }

    // Lastly, return the result array with the .join method to covert it into a string.
    return resultArr.join("");
}

console.log(divisionStringified([44 / 5]));

const t1 = divisionStringified([44, 5]);
assert(t1);
