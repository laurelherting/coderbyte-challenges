const assert = require('assert');

const ArithGeo = arr => {
  const diff = arr[1] - arr[0];
  const ratio = arr[1] / arr[0];
  let allRatioAreGood = true;
  let allDiffAreGood = true;
  for (let i = 2; i < arr.length; i += 1) {
    allRatioAreGood += arr[i] / arr[i - 1] === ratio;
    allDiffAreGood += arr[i] - arr[i - 1] === diff;
  }

  if (allRatioAreGood) return 'Geometric';
  if (allDiffAreGood) return 'Arithmetic';
  return -1;
};

const a1 = 'Arithmetic';
const r1 = 'magic math';
const t1 = ArithGeo(a1);

// console.log(r1);
assert(r1, t1);
