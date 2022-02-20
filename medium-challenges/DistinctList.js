/* Take array of numbers - duplicate entries. For example if the input is [1, 2, 2, 2, 3]
then your program should output 2 because there are two duplicates of one of the elements. */

function DistinctList(arr) {
  var duplicates = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        duplicates++;
        arr.splice(arr.indexOf(arr[i]), 1);
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        duplicates++;
        arr.splice(arr.indexOf(arr[i]), 1);
      }
    }
  }
  return duplicates;
}
