const findTheOldest = function (array) {
    let oldestPerson;
    let previousAge = 0;
    for (let i = 0; i < array.length; i++) {
        let currentAge = 0;
        if ("yearOfDeath" in array[i]) {
            currentAge = array[i].yearOfDeath - array[i].yearOfBirth;
        } else {
            currentAge = new Date().getFullYear() - array[i].yearOfBirth;
        }
        let older = currentAge > previousAge ? true : false;
        if (older) {
            previousAge = currentAge;
            oldestPerson = array[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
