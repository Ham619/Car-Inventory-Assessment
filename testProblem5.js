// test/testProblem5.js

const countCarsOlderThanYear = require('./problem5');
const inventory = require('./inventory');

// Test case
const count = countCarsOlderThanYear(inventory, 2000);
console.log(`Number of cars older than 2000: ${count}`);
