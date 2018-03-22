const assert = require('assert');

const AlphabetSoup = str => {
  // convert the string into an array of characters
  const chars = str.split('');

  // sort the array in alphabetical order
  const sorted = chars.sort();

  // return the newly sorted string
  return sorted.join('');
};

const a1 = 'AlphabetSoup';
const r1 = 'whoosh';
const t1 = AlphabetSoup(a1);
console.log(r1);
assert(t1, r1);

// const a2 = 'whoosh';
const r2 = 'oohhsw'; // output
console.log(r2);
