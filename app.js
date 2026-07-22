// Load the database connection
const db = require("./database/db");

// Display application title
console.log("======================================");
console.log(" NYERI GREEN FARMERS COOPERATIVE");
console.log(" Farmers Produce Management System");
console.log("======================================");




// Test database connection
db.connect((err) => {
    if (err) {
        console.error("❌ Failed to connect to the database.");
        console.error(err.message);
        process.exit(1);
    }

    console.log("\n✅ Connected to the MySQL database successfully.");
});