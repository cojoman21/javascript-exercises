const reverseString = function (word) {
    let len = word.length;
    console.log(len);
    let reversed = "";
    for (let i = len - 1; i >= 0; i--) {
        reversed += word.charAt(i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
