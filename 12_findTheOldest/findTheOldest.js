const findTheOldest = function(people) {

    let oldestPerson = null;
    let oldestAge = 0;
    let personAge = 0;

    for (person of people) {

        // Get person age
        if (isNaN(person.yearOfDeath)) {
            let year = new Date();
            personAge = year.getFullYear() - person.yearOfBirth;

        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }

        // Update oldest age, and oldest person 
        if (personAge > oldestAge) {
            oldestAge = personAge;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
