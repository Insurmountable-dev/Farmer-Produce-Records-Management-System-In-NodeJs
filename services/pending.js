const db = require("../database/db");

function displayPendingPayments(callback) {

    const sql = `
        SELECT 
            farmerNumber,
            farmerName,
            produceType,
            quantityDelivered,
            pricePerUnit,
            paymentStatus
        FROM ProduceDeliveries
        WHERE paymentStatus = ?
    `;

    db.query(sql, ["Pending"], (err, results) => {

        if (err) {
            console.error("Error retrieving pending payments.");
            console.error(err.message);
            callback();
            return;
        }

        if (results.length === 0) {
            console.log("\nNo pending payments found.");
        } else {
            console.table(results);
        }

        callback();

    });

}

module.exports = displayPendingPayments;