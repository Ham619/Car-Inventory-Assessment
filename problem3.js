// problem3.js

function sortCarModelsAlphabetically(inventory) {
    return inventory.map(car => car.car_model).sort();
}

module.exports = sortCarModelsAlphabetically;
