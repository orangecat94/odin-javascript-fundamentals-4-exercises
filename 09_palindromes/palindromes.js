const palindromes = function (testString) {
    let stringArray = Array.from(testString);
    let filteredString = '';
    let filteredArray = [];
    let reversed = '';

    // Create string without punctation
    for (let i = 0; i < stringArray.length; i++) {

        // Use ReGex to filter for alphabets only
        if (stringArray[i].toLowerCase().match(/[a-z]/)) {
            filteredString += stringArray[i].toLowerCase();
        }
    }


    for (let i = stringArray.length - 1; i >= 0; i--) {
        
        // Use ReGex to filter for alphabets only
        if (stringArray[i].toLowerCase().match(/[a-z]/)) {
            reversed += stringArray[i].toLowerCase();
        }
    }

    // console.log(reversed);

    if (reversed === filteredString) {
        return true; 
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
