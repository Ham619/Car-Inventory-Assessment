// test/testProblem6.js

const getBMWAndAudiCars = require('./problem6');
const inventory = require('./inventory');

// Test case
const BMWAndAudi = getBMWAndAudiCars(inventory);
console.log(JSON.stringify(BMWAndAudi));
