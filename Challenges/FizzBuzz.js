const assert = require('assert');
// Print out all the numbers from	1	to 100.	For	every	number divisible by	3	print	replace it with	the	
// word	“Fizz,”	for	any	number divisible by 5 replace	it with the	word “Buzz” and	for	a	number divisible	
// by	both 3	and	5	replace	it with the word	“FizzBuzz.”
// So	your	program	should	output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// .

/*
console.log(1-100);
XXX EXCEPTION: console.log("'Fizz' for multiples of 3");
XXX EXCEPTION: console.log("'Buzz' for multiples of 5");
XXX EXCEPTION: console.log("'FizzBuzz' for multiples of 3 and 5");
*/

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log('Buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else {
      console.log(i);
    }
  }
}

const a1 = fizzBuzz(3,5);
const r1 = "i";

assert(r1);
