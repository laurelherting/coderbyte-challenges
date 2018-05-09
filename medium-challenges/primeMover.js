// use prime sieve to generate a list of primes
// up to the limit
const assert = require('assert');
const sieve = limit  => {

  let bools = [];
  let primes = [];

  // create list of booleons
  for (let i = 1; i < limit; i+= 1) { bools.push(true); }

  // loop to limit by setting to false
  for (let i = 2; i < limit; i+= 1) {
    if (bools[i-2]) {
      for (let j = i*2; j<= limit; j += 1) {
        bools[j-2] = false;
      }
    }
  }

  // generate list of primes where there is a
  // true value in booleon array
  for (let p = 0; p < bools.length; p++) {
    if (bools[p]) { primes.push(p+2); }
  }

  return primes;

};

const a1 = '16'// input
const t1 = sieve(a1);
assert(t1);
