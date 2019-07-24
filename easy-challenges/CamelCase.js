// objective: convert dash/underscore delimited words into camel casing
// note: The first word within the output should be capitalized only if the
// original word was capitalized

// solution:
const assert = require('assert');

function CamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return '';

    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

// console.log(CamelCase('cats AND*Dogs-are Awesome'));

const in1 = 'cats AND*Dogs-are Awesome'; // input
const r1 = 'catsAndDogsAreAwesome'; // output
const test1 = CamelCase(in1);
assert(r1, test1);

const in2 = 'a b t d-e-f%g'; // input
const r2 = 'aBtDEFG'; // output
const test2 = CamelCase(in2);
assert(r2, test2);

