const fibonacci = function(member) {

    let previous = 1;
    let current = 1;
    let next = 0;

    // Reject negative numbers
    if (member <= 0) {
        return 'OOPS';
    }

    // Return 1 if member is 1 or 2
    if (member <= 2) {
        return 1;
    }

    for (let i = 3; i <= member; i++) {
        
        next = current + previous;
        previous = current;
        current = next;
    }

    return current;  

};

// Do not edit below this line
module.exports = fibonacci;
