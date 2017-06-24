// steps with explanation

function ABCheck(str) {
    /* declare two regex expressions if a & b ever occur within three characters of each other. `.` is a wildcard that matches a character. */ 

  let testOne = /a...b/;
  let testTwo = /b...a/;

    /* Now, use the test method with the regex to see if the string contains matching characters. */ 
  let aThenB = testOne.test(str);
  let BthenA = testTwo.test(str);

  // return answer

  return aThenB || bThenA;
}

// best practice

function ABCheck(str) {


  return (/a.../b).test(str) || (/b.../a).test(str);
}

