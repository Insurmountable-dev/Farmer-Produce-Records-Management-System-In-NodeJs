const db = require("../database/db");

function generateDailyReport(callback) {

    const sql = `
        SELECT
            COUNT(*) AS totalDeliveries,
            SUM(quantityDelivered) AS totalQuantity,
            SUM(quantityDelivered * pricePerUnit) AS totalPayment
        FROM ProduceDeliveries
        WHERE deliveryDate = CURDATE()
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.error("Error generating daily report.");
            console.error(err.message);

            callback();
            return;
        }

        console.log("\n========== DAILY REPORT ==========\n");

        console.table(results);

        callback();

    });

}

module.exports = generateDailyReport;