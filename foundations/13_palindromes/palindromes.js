const palindromes = function (text) {
    let cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reversed = "";
    for (let i = cleanText.length - 1; i >= 0; i--) {
        reversed += cleanText[i];
    }
    return reversed === cleanText;
};

// Do not edit below this line
module.exports = palindromes;
