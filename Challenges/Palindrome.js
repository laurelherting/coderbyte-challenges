// steps explanation 
function Palindrome(str) {

  /* use the .replace method to remove all spaces */
  str = str.replace(/[\s]/g, "");

  /* Declare a reversed variable to hold the rev string and use the .split, .reverse, and .join methods to modify it */
  strRev = str.split("").reverse().join("");

  /* Lastly, return the truth value of comparing the two strings */
  return str == strRev;
}
 
// Best Practice
function Palindrome(str) {

  return str.replace(/[\s]/g, "").toLowerCase() == str.replace(/[\s]/g, "").toLowerCase().split("").reverse().join("");
}
