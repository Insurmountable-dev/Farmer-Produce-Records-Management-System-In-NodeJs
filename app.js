require("dotenv").config();

const db = require("./database/db");
const readline = require("readline");

const displayFarmers = require("./services/display");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function showMenu() {
    console.clear();

    console.log("======================================");
    console.log(" NYERI GREEN FARMERS COOPERATIVE");
    console.log(" Farmers Produce Management System");
    console.log("======================================");

    console.log("1. Display all farmer deliveries");
    console.log("2. Search for a farmer");
    console.log("3. Calculate farmer payments");
    console.log("4. Display pending payments");
    console.log("5. Update payment status");
    console.log("6. Display large deliveries");
    console.log("7. Generate daily report");
    console.log("8. Save updated records to database");
    console.log("9. Exit");

    rl.question("\nEnter your choice: ", handleMenu);
}

function handleMenu(choice) {

    switch (choice) {

         case "1":
                displayFarmers(() => {
                    rl.question("\nPress Enter to continue...", () => {
                        showMenu();
                    });
                });

                return;
                break;

        case "2":
            console.log("\nSearch for a farmer");
            break;

        case "3":
            console.log("\nCalculate farmer payments");
            break;

        case "4":
            console.log("\nDisplay pending payments");
            break;

        case "5":
            console.log("\nUpdate payment status");
            break;

        case "6":
            console.log("\nDisplay large deliveries");
            break;

        case "7":
            console.log("\nGenerate daily report");
            break;

        case "8":
            console.log("\nSave updated records");
            break;

        case "9":
            console.log("\nThank you for using the system.");
            rl.close();
            db.end();
            return;

        default:
            console.log("\nInvalid choice.");
    }

    rl.question("\nPress Enter to return to the menu...", () => {
        showMenu();
    });

}


db.connect((err) => {

    if (err) {
        console.log("Database connection failed.");
        return;
    }

    showMenu();

});