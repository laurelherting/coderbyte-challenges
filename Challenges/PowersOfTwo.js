const assert = require('assert');

function powersOfTwo(n){

const powerArray = [];

    for(let i=0; i<=n; i++){

    // console.log(Math.pow(2,i));
        powerArray.push(Math.pow(2,i));
    }

    console.log(powerArray);
    return [];
}

powersOfTwo(0);
powersOfTwo(6);
powersOfTwo(8);
const r1 = "[]";

assert(r1);
