const db = require("../database/db.js");

function displayFarmers(callback) {

    const sql = "SELECT * FROM ProduceDeliveries";

    db.query(sql, (err, results) => {

        if (err) {
            console.log("Error retrieving farmer records.");
            console.log(err.message);
            callback();
            return;
        }

        console.table(results);

        callback();

    });

}

module.exports = displayFarmers;