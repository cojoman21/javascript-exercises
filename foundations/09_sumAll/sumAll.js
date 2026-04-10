const sumAll = function (x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    } else if (x < 0 || y < 0) {
        return "ERROR";
    }
    let result = 0;
    let smaller = x < y ? x : y;
    let bigger = x < y ? y : x;
    for (let i = smaller; i <= bigger; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
