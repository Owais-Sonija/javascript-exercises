const convertToCelsius = function(temp) {
  let tempF = temp;
  const tempC =  parseFloat(((tempF - 32) * 5/9).toFixed(1))
return tempC;
};

const convertToFahrenheit = function(temp) {
  let tempC = temp;
  const tempF = parseFloat(((tempC * 9/5) + 32).toFixed(1))
  return tempF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
