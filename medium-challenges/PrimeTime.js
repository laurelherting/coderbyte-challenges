const assert = require('assert');
const PrimeTime = num => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i+= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const a1 = 'false';
const t1 = PrimeTime(a1);
assert(t1);
