const db = require("../database/db");

function displayLargeDeliveries(callback) {

    const sql = `
        SELECT *
        FROM ProduceDeliveries
        WHERE quantityDelivered > 100
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.error("Error retrieving large deliveries.");
            console.error(err.message);

            callback();
            return;
        }

        if (results.length === 0) {

            console.log("\nNo large deliveries found.");

        } else {

            console.table(results);

        }

        callback();

    });

}

module.exports = displayLargeDeliveries;