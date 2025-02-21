const add = function(...arr) {
  return arr[0] + arr[1];
};

const subtract = function(...arr) {
  return arr[0] - arr[1];
};

const sum = function(arr) {
  const ans = arr.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
  return ans;
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b, 1);

};

const power = function(...arr) {
  return arr[0] ** arr[1];

};

const factorial = function(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);

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
