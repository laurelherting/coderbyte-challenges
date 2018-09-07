const assert = require('assert');

const ChangingSequence = (arr) => {
  if (arr.length < 2) return -1;
  const increasing = arr[0] < arr[1];

  for (let i = 1; i < arr.length - 1; i += 1) {
    if (increasing) {
      if (arr[i] > arr[i + 1]) return i;
    } else if (arr[i] < arr[i + 1]) return i;
  }

  return -1;
};

const t1 = ChangingSequence;
assert(t1);
