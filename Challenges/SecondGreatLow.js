const assert = require('assert');

function SecondGreatLow(arr) { 
    let solution = [];
    let arrSorted = arr.sort(function(a, b){ return a-b; });
    for ( let i= 0; i < arrSorted.length; i++ ) {
    if ( arrSorted.length === 2 && arrSorted[ 0 ] === arrSorted[ 1 ]) return arrSorted[0] + " " + arrSorted[1];
        if ( arrSorted[0] === arrSorted[1] ) arrSorted.shift();
        if ( arrSorted[arrSorted.length-1 ] === arr[arr.length-2] ) arrSorted.pop();
    }
    solution = solution + ( arrSorted[ 1 ] + " " + arrSorted[ arr.length-2 ] );
    return solution;
}
console.log("this works");
numArr = [60, 60];
SecondGreatLow(numArr);
console.log("SecondGreatLow");

// error is in code below
const a1 = "1,2,3";
const r1 = "2"
const t1 = SecondGreatLow(a1);
assert(t1);
//Input:1, 42, 42, 180
//[1,2,3,100] 2 3
