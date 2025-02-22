const findTheOldest = function(arr) {
  const mapped = arr.map(person => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = 2025;
    }
    person.age = person.yearOfDeath - person.yearOfBirth;
    return person;
  });
  const sorted = mapped.sort((personA, personB) => personB.age - personA.age);
  return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;
