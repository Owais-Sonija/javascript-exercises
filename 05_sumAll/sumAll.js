const sumAll = function (num1, num2) {
  let num = 0;
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)  ) {
        return "ERROR"
    }

  if (num1 > num2) {
    for (let i = num1; i >= 1; i--) {
      num = num + i;
    }
  }
   else if (num1 < num2) {
    for (let i = 1; i <= num2; i++) {
      num = num + i;
    }
  }

  return num;
};

// Do not edit below this line
module.exports = sumAll;
