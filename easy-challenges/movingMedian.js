const assert = require('assert');

const MovingMedian = (arr) => {
  let N = arr.indexOf(0, 1);
  let r = [arr[0]];
  for (let i = 1; i < arr.length; i += 1) {
    r.push(getMedian(arr.slice((i + 1 - N > 0) ? i + 1 - N : 0, i + 1)));
  }
  return r.join(',');
};

const getMedian = (arr) => {
  arr.sort((a, b) => a - b);

  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
  }
  return arr[(arr.length - 1) / 2];
};

const a1 = '5, 2, 4, 6'; // input
const r1 = '2,3,4'; // output
const t1 = MovingMedian(a1);
assert(r1, t1);

const a2 = '3, 0, 0, -2, 0, 2, 0, -2'; // input
const r2 = '0,0,0,0,0,0,0'; // output
const t2 = MovingMedian(a2);
assert(r2, t2);

// console.log(r2);
