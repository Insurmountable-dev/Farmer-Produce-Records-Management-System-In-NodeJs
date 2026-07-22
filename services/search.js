const db = require("../database/db");

function searchFarmer(farmerNumber, callback) {

    const sql = "SELECT * FROM ProduceDeliveries WHERE farmerNumber = ?";

    db.query(sql, [farmerNumber], (err, results) => {

        if (err) {
            console.error("Error searching for farmer.");
            console.error(err.message);
            callback();
            return;
        }

        if (results.length === 0) {
            console.log("\nFarmer record not found.");
        } else {
            console.table(results);
        }

        callback();

    });

}

module.exports = searchFarmer;