const repeatString = function(word, reps) {
  if (reps < 0) {
    return 'ERROR';
  }
  let phrase = '';
  for (let i = 0; i < reps; i++) {
    phrase += word;
  }
  return phrase;
};

// Do not edit below this line
module.exports = repeatString;
