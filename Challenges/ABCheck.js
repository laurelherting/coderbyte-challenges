const assert = require('assert');

function ABCheck(str) {
    let arr = str.split("");
    let flag = "false";

    arr.filter( function( value, index ) {
        if( value === "a" && arr[index + 4] === "b") { flag = "true"; }
        if( value === "b" && arr[index + 4] === "a") { flag = "true"; }
    });
    return flag;
}
// console.log("Laurie laughs");

const a1 = "Laurie laughs";
const r1 = "this is it";

const t1 = ABCheck(a1);
// console.log(r1);
assert(t1, r1);
