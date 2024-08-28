const repeatString = function(word, num) {
    if (num <0) {
        return "ERROR"
    } else if (num == 0) {
        return ""
    }
    let wordArr = [];
    for (let i = 0; i < num; i++) {
        wordArr.push(word);
    }
    const completeWord = wordArr.join("");
    return completeWord;
};

// Do not edit below this line
module.exports = repeatString;
