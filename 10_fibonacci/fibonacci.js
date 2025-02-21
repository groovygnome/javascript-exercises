const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  if (n == 0) return 0;
  let fib = [1, 1];
  for (let i = 2; i <= n; i++) {
    const nextNum = fib[i - 1] + fib[i - 2];
    fib.push(nextNum);
  }
  return fib[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
