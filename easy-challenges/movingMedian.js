const assert = require('assert');

const MovingMedian = (arr) => {
  let N = arr.splice(0, 1);
  let r = [arr[0]];
    return r;
};

const a1 = '5, 2, 4, 6'; // input
const r1 = '2,3,4'; // output
const t1 = MovingMedian(a1);

// console.log(r1);
assert(r1, t1);
