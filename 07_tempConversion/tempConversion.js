const convertToCelsius = function(temp) {
  temp = ((temp - 32) * 5) / 9;
  if (temp == 0) return 0;
  return Number(temp.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 1.8) + 32;
  if (temp == 0) return 0;
  return Number(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
