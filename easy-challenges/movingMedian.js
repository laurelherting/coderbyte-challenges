const assert = require('assert');

const MovingMedian = (arr) => {
  let N = arr.splice(0, 1);
  let r = [arr[0]];
  for (let i = 1; i < arr.length; i += 1) {
  r.push(getMedian(arr.slice((i+1-N > 0) ? i+1-N : 0, i+1)));
  }

  return r.join(',');
};

const a1 = '5, 2, 4, 6'; // input
const r1 = '2,3,4'; // output
const t1 = MovingMedian(a1);

console.log(r1);
assert(r1, t1);
