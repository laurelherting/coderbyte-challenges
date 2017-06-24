// steps with explanation

function WordCount(str) {

  /* Turn the input string into an array by passing a single space into the .split method */
  str = str.split(" ");

  // Return length of new array (answer)
  return str.length;
}

// Best practice
function WordCount(str) {

  return str.split(" ").length;
}
