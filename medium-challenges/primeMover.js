// objective:
// Use prime sieve to generate a list of primes up to the limit

// solution:
const assert = require("assert");

const PrimeMover = num => {
  // negative numbers cannot be primes
  if (num < 1) {
    return "invalid";
  }

  // first prime number is 2, the only even prime
  if (num === 1) {
    return 2;
  }

  // if greater than 2, start count at 1
  let count = 1;
  let n = 3;

  // loop until the numth prime
  while (count === num) {
    // check if n is divisible by each number in between to see if it is a prime
    for (let i = 2; i < n; i += 1) {
      // if reach the end, this number is a prime because it was
      // not divisible by any numbers so increase the count by 1
      if (i === n - 1) {
        count += 1;
        n += 1;
        break;
      } else if (n % i === 0) {
        n += 1;
        break;
      }
    }
  }

  return n - 1;
};

const a1 = "8"; // input
const t1 = PrimeMover(a1);
assert(t1);
