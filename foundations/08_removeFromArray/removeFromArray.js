const removeFromArray = function (array, ...element) {
    for (let i = 0; i < element.length; i++) {
        let position = array.indexOf(element[i]);
        if (position < 0) {
            continue;
        }
        while (position >= 0) {
            array.splice(position, 1);
            position = array.indexOf(element[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
