const removeFromArray = function(array, ...args) {
    const toRemove = Array.from(args);

    for (arg of toRemove) {
        if (array.includes(arg)) {
            array.splice(array.indexOf(arg), 1);
        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
