const reverseString = function(str) {
    if (str.length == "") {
        return ""
    }
    const splittedStr = str.split("");
    const reverseArr = splittedStr.reverse();
    const reverseStr = reverseArr.join("");
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
