const caesar = function(string, shiftFactor) {

    let encoded = '';

    for (element of string) {

        let elementUnicode = element.charCodeAt(0);

        // Uppercase
        if (elementUnicode >= 65 && elementUnicode <= 90) {

            let encodedElement = ((elementUnicode - 65 + shiftFactor) % 26 + 26) % 26 + 65;
            encoded = encoded.concat(String.fromCharCode(encodedElement));
            
        } else if (elementUnicode >= 97 && elementUnicode <= 122) {

            let encodedElement = ((elementUnicode - 97 + shiftFactor) % 26 + 26) % 26 + 97;
            encoded = encoded.concat(String.fromCharCode(encodedElement));
            
        } else {
            encoded = encoded.concat(element);
        }
    }       
    
    return encoded;  
};

// 65 - 90, 97 - 122

// Do not edit below this line
module.exports = caesar;
