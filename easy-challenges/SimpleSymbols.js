// objective:
// Take the str parameter being passed and determine if it is an acceptable sequence by
// either returning the string true or false. The str parameter will be composed of + and =
// symbols with several letters between them (ie. ++d+===+c++==a) and for the string
// to be true each letter must be surrounded by a + symbol. So the string to the left
// would be false. The string will not be empty and will have at least one letter/
// catch invalid strings instead of valid ones

// solution:
const assert = require("assert");

function SimpleSymbols(str) {
  if (str[0] >= "a" || str[str.length - 1] >= "a") {
    return false;
  }
  for (let i = 1; i < str.length - 1; i += 1) {
    if (str[i] >= "a") {
      if (str[i + 1] !== "+" || str[i - 1] !== "+") {
        return false;
      }
    }
  }

  return true;
}

const a = [
  // valid
  "++b+===+c++==+a++",
  "+a+a+a+",
  "+a++a+",
  "+a+",
  // invalid
  "++b+===+c++==a",
  "+=b+",
  "+bb+",
  "+b=+",
  "+b+b",
  "b+b+"
];

const r = /^[+=\d]*\+(?:[a-z]\+[+=\d]*)+$/im;

a.forEach(s => {
  console.log(r.test(s));
});

SimpleSymbols("++=+f+4=+s+"); // -> true;

const a1 = "++=+f+4=+s+"; // input
const t1 = SimpleSymbols(a1);

assert(t1);
