// problem4.js

function getAllCarYears(inventory) {
    const years = [];
    for (let i = 0; i < inventory.length; i++) {
        years.push(inventory[i].car_year);
    }
    return years;
}

module.exports = getAllCarYears;
