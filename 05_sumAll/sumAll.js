const sumAll = function(low, high) {
  if (low < 0 || high < 0) {
    return 'ERROR';
  }
  if (typeof low === "number" && Math.floor(low) === low && Math.floor(high) === high && typeof high === "number") {
    if (low > high) {
      temp = low;
      low = high;
      high = temp;
    }
    for (let i = low + 1; i <= high; i++) {
      low += i;
    }
    return low;
  } else {
    return 'ERROR';
  }

};

// Do not edit below this line
module.exports = sumAll;
