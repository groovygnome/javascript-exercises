const palindromes = function(sentence) {
  sentence = sentence.toLowerCase();
  const split = sentence.split('');
  const filteredLetters = [' ', ',', '.', '!'];
  const filtered = split.filter(character => !filteredLetters.includes(character));
  const forward = filtered.join();
  const reverse = filtered.reverse().join();
  return forward === reverse;
};

// Do not edit below this line
module.exports = palindromes;
