const assert = require('assert');

const ArrayMatching = strArr => {
  const long = strArr[0];
  const short = strArr[1];
  // const length = Math.max(long.length, short.length);
  // length long = long.slice(1, -1).split(',');
  // short = short.slice(1, -1).split(',');

  let newStr = '';
  for (let i = 0; i < long.length; i += 1) {
    if (short[i] !== undefined) {
      const temp = Number(long[i]) + Number(short[i]);
      newStr += `${temp} `;
    } else {
      newStr += long[i];
    }
  }

  newStr = newStr.split(' ');
  const index = newStr.indexOf('');
  newStr.splice(index, 1);

  return newStr.join('-');
};

const a1 = '5, 2, 3, 2, 2, 3, 10, 6'; // input
const r1 = '7-4-6-10-6'; // output

const t1 = ArrayMatching(a1);
assert(t1, r1);

const a2 = '1, 2, 1, 2, 1, 5, 2'; // input
const r2 = '3-3-6-2'; // output

const t2 = ArrayMatching(a2);
assert(t2, r2);
