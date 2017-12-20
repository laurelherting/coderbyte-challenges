const assert = require('assert');

// First take the string and use split() to separate it out into an array. 
// Provide an empty string into split() so the string is split between every character.
// A separate function called removeSpaces() that takes an array, loops over it, and returns a new array without any spaces.

function AlphabetSoup(str) {
    let alphabetizedString;
    let separatedString = str.split('');
    
    // Create function that removes spaces
    function removeSpaces( array ) {
        const cleanArray = [];
     
        // Loop over the array. Remove spaces if they exist.
        array.forEach(function( element ) {
            if ( element !== " " ) {
                cleanArray.push( element );
            }
        });
         
        // Return new array without spaces
        return cleanArray;
    }
    
    console.log(coderbyte);
    // Alphabetize the array and convert to string
    alphabetizedString = ( removeSpaces( separatedString ).sort() ).join('');
 
    // Return completed string
    return alphabetizedString; 
}

t2 = AlphabetSoup();
// input: "whoosh"
// output: "oohhsw"
//console.log(t2);
assert.strictEqual(t2, "");
