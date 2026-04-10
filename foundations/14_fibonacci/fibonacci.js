const fibonacci = function (position) {
    if (position < 0) return "OOPS";
    if (position == 0) return 0;
    if (position == 1) return 1;
    let fib = 1;
    let previous = 0;
    for (let i = 2; i < position; i++) {
        previous = fib - previous;
        fib += previous;
    }
    return fib;
    // 1, 1, 2, 3, 5, 8, 13, 21, 34
    // fn = fn(1) + p(0) = 1
    // previous = 1 + 0 = 1
    // fn = fn(1) + p(1) = 2
    // p = p(1) + fn(2) = 3
};

// Do not edit below this line
module.exports = fibonacci;
