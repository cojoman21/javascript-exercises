const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const sum = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

const multiply = function (array) {
    let multiplication = array.length < 0 ? 0 : 1;
    for (let i = 0; i < array.length; i++) {
        multiplication *= array[i];
    }
    return multiplication;
};

const power = function (x, y) {
    return x ** y;
};

const factorial = function (x) {
    if (x < 0) return Infinity;
    let factorial = 1;
    for (let i = x; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
