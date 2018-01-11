const assert = require('assert');

function ArrayAdditionI(arr) { 
    let arr = arr.sort(function(a,b){return a-b});
    let largest = arr.pop();
    let result = false;

    let onePerm = function(sum, i) {
    sum = sum || 0;
  	i = i || 0;

    if (sum === largest) {
    result = true;
        return;
    }

    for (; i < arr.length; i++) {
    sum += arr[i];
        onePerm(sum, i+1);
        sum -= arr[i];
    }
    };

    onePerm();      
    return result;
}

const t1 = "arr.sort";
const r1 = "true";

assert(r1);
