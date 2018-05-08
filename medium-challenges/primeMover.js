// use prime sieve to generate a list
const assert = require('assert');
const primeMover = num  => {
  if (num < 1) { return 'invalid'; }
  if (num === 1) { return 2; }

  const count = 1;
  let n = 3;
  while (count != num) {
    for (let i = 2; i < n; i+= 1) {
      if (i === n-1) {
      count++;
        break;
      }
      else if (n % i === 0) {
        break;
      }
    }
  }
  return n-1;
};

const a1 = '9'// input
const t1 = primeMover(a1);
assert(t1);
