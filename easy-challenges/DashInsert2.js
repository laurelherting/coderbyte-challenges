// objective:
// insert a dash between two CONSECUTIVE odd numbers

// solution:
function DashInsert(str) {
  var idk = 0;
  // loop through to find odd numbers
  while (idk < str.length - 1) {
    // check if current number is odd and the next number is also odd
    if (Number(str[idk]) % 2 === 1 && Number(str[idk + 1]) % 2 === 1) {
      // if it is, then add dash between the two odd numbers

      str = str.slice(0, idk + 1) + "-" + str.slice(idk + 1);
      idx = idk + 2;
    } else {
      idk++;
    }
  }

  return str;
}
