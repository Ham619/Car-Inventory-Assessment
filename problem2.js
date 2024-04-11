// problem2.js

function getLastCar(inventory) {
    const lastIndex = inventory.length - 1;
    const lastCar = inventory[lastIndex];
    return lastCar;
}

module.exports = getLastCar;
