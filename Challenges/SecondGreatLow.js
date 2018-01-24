const assert = require('assert');

function SecondGreatLow(arr) { 
    // sort the unique array in ascending order
    arr.sort(function(a, b) {
    return a-b;
    });

    // return the second smallest and largest elements
    let solution = [];
    solution.push(arr[1], arr[arr.length-2]);
    return solution.join(',');
}

console.log(SecondGreatLow([2,3,4,6,8]));

const t1 = SecondGreatLow;
assert(t1);
