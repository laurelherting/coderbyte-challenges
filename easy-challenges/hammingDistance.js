const assert = require('assert');
// loop through one of the strings, check if the
// characters at each position in both strings are
// equal to each other

const HammingDistance = (strArr) => {
  const word1 = strArr[0];
  const word2 = strArr[1];
  let count = 0;

  for (let i = 0; i < word1.length; i += 1) {
    if (word1[i] !== word2[i]) {
      count += 1;
    }
  }
  return count;
};

const in1 = '10011, 10100'; // input
const expect1 = '3'; // output
const test1 = HammingDistance(in1);
assert(test1, expect1);


const in2 = 'helloworld, worldhello'; // input
const expect2 = '8'; // output
const test2 = HammingDistance(in2);
assert(test2, expect2);
