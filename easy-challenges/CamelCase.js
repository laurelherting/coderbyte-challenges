const assert = require('assert');

const CamelCase = (str) => {
  str.split(/\W/).map((word, i) => {
    const formatted = word.toLowerCase();
    return i ? `${formatted[0].toUpperCase()}${formatted.slice(1)}` : formatted;
  }).join('');
};
console.log(CamelCase('cats AND*Dogs-are Awesome'));

const in1 = 'cats AND*Dogs-are Awesome'; // input
const r1 = 'catsAndDogsAreAwesome'; // output
const test1 = CamelCase(in1);
assert(r1, test1);

const in2 = 'a b t d-e-f%g'; // input
const r2 = 'aBtDEFG'; // output
const test2 = CamelCase(in2);
assert(r2, test2);

