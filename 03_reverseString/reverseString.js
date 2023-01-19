const reverseString = function(string) {
    let reversed = '';

    for (let i = 0; i < string.length; i++) {
        // console.log(i);
        reversed += string[string.length - 1 - i];
        // console.log(reversed);
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
