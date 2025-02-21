const findTheOldest = function(arr) {
  const mapped = arr.forEach(person => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = 2025;
    }
  });
  console.log(mapped);
  const sorted = mapped.sort((personA, personB) => (personA.yearOfDeath - personA.yearofBirth) > (personB.yearOfDeath - personB.yearOfBirth));
  console.log(sorted);
  return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;
