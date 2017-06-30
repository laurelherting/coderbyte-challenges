function ArithGeo(arr) {

  /* loop through each item in array and use the .push method to send */
  for (let i = 0; i < arr.length - 1; i++) {

        // ...the difference of each item to our arrDif array.
        arrDif.push(arr[i + 1] - arr[i]);

        // ...the  quotient of each item to our arrQuo array. 
        arrQuo.push(arr[i + 1] / arr[i]);
    }
  for (let j = 0; j < arrDif.length - 1; j++) {

        /* This if statement checks to see if each item in our array of differences is equal to the next item in the array, and if not, sets our ariFlag to false. */
        if (arrDif[j] != arrDif[j + 1]) {
            ariFlag = false;
        }

        /*  Do the same thing for our array of quotients. */
        if (arrQuo[j] != arrQuo[j + 1]) {
            geoFlag = false;
        }
    }

      /* Return "Arithmetic" if the ariFlag is set to true, "Geometric" if the geoFlag is set to true, and -1 if neither are set to true. */
    if (ariFlag) {
        return "Arithmetic";
    } else if (geoFlag) {
        return "Geometric";
    } else {
        return -1;
    }
