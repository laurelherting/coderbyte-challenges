function ExOh(str) {
  // declare two variables
  // One removes all characters in str that aren't x's
  let strX = str.replace(/[^x]/g, "");

  // second variable removes all characters that aren't 0's
  let strO = str.replace(/[^o]/g, "");

  // find length of variables to find amount of x's and o's are in str
  let xNumber = strX.length;
  let oNumber = strO.length;

  // return truth value of comparison of both
  return xNumber === oNumber;
}

// Best Practice
function ExOh(str) {
    return str.replace(/[^x]/g, "").length === str.replace(/[^o]/g, "").length;
}
