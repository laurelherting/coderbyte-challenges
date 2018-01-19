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

numArr = [60, 60];
SecondGreatLow(numArr);
console.log(SecondGreatLow);

const a1 = "[60, 60]";
const t1 = "secondGreatLow([60, 60])";

assert(t1);
