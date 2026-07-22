const db = require("../database/db");

function calculatePayments(callback) {

    const sql = `
        SELECT
            farmerNumber,
            farmerName,
            produceType,
            quantityDelivered,
            pricePerUnit,
            (quantityDelivered * pricePerUnit) AS totalPayment
        FROM ProduceDeliveries
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.error("Error calculating payments.");
            console.error(err.message);
            callback();
            return;
        }

        console.table(results);

        callback();

    });

}

module.exports = calculatePayments;