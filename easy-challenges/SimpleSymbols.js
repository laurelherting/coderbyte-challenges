const assert = require('assert');
// catch invalid strings instead of valid ones

const SimpleSymbols = (str) => {
  if (str[0] >= 'a' || str[str.length - 1] >= 'a') {
    return false;
  }
  for (let i = 1; i < str.length - 1; i += 1) {
    if (str[i] >= 'a') {
      if (str[i + 1] !== '+' || str[i - 1] !== '+') {
        return false;
      }
    }
  }

  return true;
};

const a = [
  // valid
  '++b+===+c++==+a++',
  '+a+a+a+',
  '+a++a+',
  '+a+',
  // invalid
  '++b+===+c++==a',
  '+=b+',
  '+bb+',
  '+b=+',
  '+b+b',
  'b+b+',
];

const r = /^[+=\d]*\+(?:[a-z]\+[+=\d]*)+$/im;

a.forEach((s) => {
  console.log(r.test(s));
});

SimpleSymbols('++=+f+4=+s+'); // -> true;

const r1 = 'false';

assert(r1);
