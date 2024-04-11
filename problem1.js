// problem1.js

function findCarById(inventory, id) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            return inventory[i];
        }
    }
    return null; // Return null if car with given id is not found
}

module.exports = findCarById;
