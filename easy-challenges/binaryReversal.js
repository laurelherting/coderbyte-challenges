const assert = require('assert');

const BinaryReversal = str => {

  // first, convert int to binary
  let num = Number(str).toString(2).toString(); 

    // add 0 at beginning to create blocks of 8 bits
    while (num.length % 8 !== 0) { 
      num = '0' + num;    
    }
    
    // reverse binary number
    rev = num.split('').reverse().join(''); 

    // now, convert binary to int
    int = parseInt(rev, 2); 

    return int; 
};

// console.log(int);

const in1 = '213'; // input
const expect1 = '171'; // output
const test1 = BinaryReversal(in1);
assert.strictEqual(test1, expect1);
