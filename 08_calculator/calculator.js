const add = function(num1, num2) {
	const result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	const result = num1 - num2;
  return result;``
};

const sum = function(arr) {
	const result = arr.reduce((total, curr)=> total + curr, 0);
  return result
};  

const multiply = function(arr) {
  const result = arr.reduce((total, curr)=> total * curr);
  return result
};

const power = function(num, pow) {
	const result = Math.pow(num, pow);
  return result;
};

const factorial = function(num) {
	let result=1;
  for (let i = num; i >= 1; i--) {
    result = result * i
    
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
