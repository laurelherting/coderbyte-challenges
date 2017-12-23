const assert = require('assert');
function arithGeo(arr) {
    let i, j;

    let diff = arr[1] - arr[0];
    let isArithmetic = true;
    for (i = 1, j = 2; isArithmetic && j < arr.length; i++, j++) {
        if (isArithmetic && arr[j] - arr[i] != diff) {
            isArithmetic = false;
        }
    }

    let ratio = arr[1] / arr[0];
    let isGeometric = isFinite(ratio) && ratio != 0;
    for (i = 1, j = 2; isGeometric && j < arr.length; i++, j++) {
        if (isGeometric && arr[j] / arr[i] != ratio) {
            isGeometric = false;
        }
    }

    return isArithmetic && isGeometric ? 'both' :
           isArithmetic                ? 'arithmetic' : 
                           isGeometric ? 'geometric'  : '';
}
const a1 = "Arithmetic";
const r1 = "magic math";

// console.log(r1);
assert(r1);
