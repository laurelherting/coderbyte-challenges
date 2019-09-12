// objective:
// Determine at what index in an array the sequence changes from increasing
// to decreasing or vice versa. For example, if the array were [1, 2, 4, 6, 4, 3, 1]
// then your program should return 3 because at index 3 the sequence begins to change
// from increasing to decreasing. If there is no change in sequence,
// then your program should return -1.

// solution:
const assert = require("assert");

function ChangingSequence (arr) {
  if (arr.length < 2) return -1;
  const increasing = arr[0] < arr[1];

  for (let i = 1; i < arr.length - 1; i += 1) {
    if (increasing) {
      if (arr[i] > arr[i + 1]) return i;
    } else if (arr[i] < arr[i + 1]) return i;
  }

  return -1;
}

const t1 = ChangingSequence;
assert(t1);
