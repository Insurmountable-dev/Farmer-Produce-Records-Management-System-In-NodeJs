const db = require("../database/db");


function updatePaymentStatus(farmerNumber, callback) {


    const sql = `
        UPDATE ProduceDeliveries
        SET paymentStatus = 'Paid'
        WHERE farmerNumber = ?
    `;


    db.query(sql, [farmerNumber], (err, result) => {


        if (err) {

            console.error("Error updating payment status.");
            console.error(err.message);

            callback();
            return;
        }


        if (result.affectedRows === 0) {

            console.log("\nFarmer record not found.");

        } else {

            console.log("\nPayment status updated successfully.");

        }


        callback();


    });


}


module.exports = updatePaymentStatus;