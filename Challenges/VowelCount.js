function VowelCount(str) {
  /* remove characters in string that aren't vowels aka .replace method */

  str = str.replace(/[^aeiou]/g, "");

  /* Now, return the string to count how many vowels remain*/

  return str.length;
}

// best practice

function VowelCount(str) {
  
  return str.replace(/[^aeiou]/g, "").length; 
}
