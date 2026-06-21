const readline = require("readline");
const add = require("./add");
const sub = require("./subtraction");
const product = require("./multiplication");
const division = require("./division");

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {

    console.log("Select an operation:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
    rl.question("Enter your choice (1-5): ", (choice) => {
        if (choice === "5") {
            console.log("Exiting the calculator.");
            rl.close();
            return;
        } else if (!["1", "2", "3", "4", "5"].includes(choice)) {
            console.log("Invalid choice. Please select a number between 1 and 5.");
            askQuestion();
            return;
        }

        rl.question("Enter the first number: ", (num1) => {
            rl.question("Enter the second number: ", (num2) => {
                num1 = Number(num1);
                num2 = Number(num2);
                switch (choice) {
                    case "1":
                        console.log(`Result: ${add(num1, num2)}`);
                        break;
                    case "2":
                        console.log(`Result: ${sub(num1, num2)}`);
                        break;
                    case "3":
                        console.log(`Result: ${product(num1, num2)}`);
                        break;
                    case "4":
                        console.log(`Result: ${division(num1, num2)}`);
                        break;
                    default:
                        console.log("Invalid choice. Please select a number between 1 and 5.");
                }
                // Ask again for the next operation
                console.log("\n");
                console.log("------------------------------");
                console.log("\n");
                askQuestion();
            });
        });
    });
}
askQuestion(); 
