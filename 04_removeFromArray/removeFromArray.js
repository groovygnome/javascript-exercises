const removeFromArray = function(list, ...remove) {
  return list.filter((word) => !(remove.includes(word)));
};

// Do not edit below this line
module.exports = removeFromArray;
