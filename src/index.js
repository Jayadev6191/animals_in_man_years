var uniqueRandomArray = require('unique-random-array');
var animalManYears = require('./animal-to-man-years.json');

module.exports = {
  all:animalManYears,
  random: uniqueRandomArray(animalManYears)
};
