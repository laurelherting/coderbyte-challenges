const assert = require('assert');

const arrayAddition = arr => {
  let max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  let x = arr.length;

  return true;


  return false;
};

const a1 = '[5,7,16,1,2]';
const t1 = arrayAddition(a1);

assert(t1);
