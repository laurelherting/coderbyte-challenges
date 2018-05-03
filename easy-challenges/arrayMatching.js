const assert = require('assert');

const ArrayMatching = strArr => {
  const long = JSON.parse(strArr[0]);
  const short = JSON.parse(strArr[1]);
  const result = [];
  for (let i = 0; i < long.length; i += 1) {
    if (short[i] === undefined) {
      result.push(long[i]);
    } else {
      result.push(long[i] + short[i]);
    }
  }
  if (long.length < short.length) {
    result.concat(short.slice(long.length));
  }

  return result.join('-');
};

const a1 = '5, 2, 3, 2, 2, 3, 10, 6'; // input
const r1 = '7-4-6-10-6'; // output

const t1 = ArrayMatching(a1);
assert(t1, r1);

const a2 = '1, 2, 1, 2, 1, 5, 2'; // input
const r2 = '3-3-6-2'; // output

const t2 = ArrayMatching(a2);
assert(t2, r2);
