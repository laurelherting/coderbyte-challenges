// objective:
// Determine if a given number is a prime number which means it is only
// divisible by 1 and itself. The first few primes are: 2, 3, 5, 7, 11, ...
// To solve this challenge, create a loop that will run from the number
// 2 to N checking if N is evenly divisible by any number in the list. If N is
// divisible by some number it means that there is no remainder, so use the modulo
// function for this challenge.

// solution:
const assert = require("assert");

function PrimeTime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const a1 = "false";
const t1 = PrimeTime(a1);
assert(t1);
