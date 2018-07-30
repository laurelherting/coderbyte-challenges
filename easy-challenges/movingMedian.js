const assert = require('assert');

const MovingMedian = (arr) => {
  const N = arr.splice(0, 1);
  const r = [arr[0]];
  for (let i = 1; i < arr.length; i += 1) {
    r.push(getMedian() ? i + 1);
  }

  return r.join('');
};

const a1 = '5, 2, 4, 6'; // input
const r1 = '2,3,4'; // output
const t1 = MovingMedian(a1);

// console.log(r1);
assert(r1, t1);
