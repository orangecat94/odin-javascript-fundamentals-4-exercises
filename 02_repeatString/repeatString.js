const repeatString = function(string, num) {
    let s = '';

    if (num < 0) {
        return 'ERROR'
    } else for (let i = 0; i < num; i++) {
        s += string;
    }

    return s;
};

// Do not edit below this line
module.exports = repeatString;
