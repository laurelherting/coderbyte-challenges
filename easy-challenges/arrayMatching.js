const assert = require('assert');

const ArrayMatching = strArr => {
  const arr1 = strArr[0].replace(/[[]]/g, '').split(',');
  const arr2 = strArr[1].replace(/[[]]/g, '').split(',');

  const long = arr1.length >= arr2.length ? arr1 : arr2;
  const short = long === arr1 ? arr2 : arr1;

  const summed = long.map((n, i) => Number(n) + Number(short[i] || 0));

  return summed.join('-');
};

const a1 = '5, 2, 3, 2, 2, 3, 10, 6'; // input
const r1 = '7-4-6-10-6'; // output

const t1 = ArrayMatching(a1);
assert(t1, r1);

const a2 = '1, 2, 1, 2, 1, 5, 2'; // input
const r2 = '3-3-6-2'; // output

const t2 = ArrayMatching(a2);
assert(t2, r2);
