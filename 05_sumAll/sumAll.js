const sumAll = function(num1, num2) {
    let sum = 0;
    let start = num1;
    let end = num2;
    
    // Check if num1 and num2 are numbers
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return 'ERROR';
    }

    // Check if num1 or num2 are negative numbers
    if (num1 <0 || num2 < 0) {
        return 'ERROR';
    }

    // If num1 > num2
    if (num1 > num2) {
        start = num2;
        end = num1;
    }

    // Sum
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
