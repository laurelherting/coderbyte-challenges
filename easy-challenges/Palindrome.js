const assert = require('assert');

// steps explanation
const Palindrome = (str) => {
  const init = str.split(' ').join('');
  const x = init.split('');
  const y = x.reverse();
  const z = y.join('');

  if (z === init) {
    return true;
  }

  return false;
};

// console.log('Pendulum');
const a1 = 'A weight, suspended from pivot. It can swing freely.';
const r1 = 'false';
const t1 = Palindrome(a1);
assert(r1, t1);
