const assert = require('assert');

function letterCount(str) {
    let letters = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ar = alphabet.split("");
    for (let i=0; i<str.length;i++) {
        if (ar.indexOf(str[i]) > -1) {
            letters = letters + 1;
        }
    }
    return letters;
}
console.log(letterCount("Howdy World!!!1"));

const a1 = "letterCount";
const r1 = "Hello";
const t1 = "letterCount";

assert(t1);
