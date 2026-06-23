const readline = require("readline");
const add = require("./add");
const sub = require("./subtraction");
const product = require("./multiplication");
const division = require("./division");
const lengthConverter = require("./lengthConverter");
const timeConverter = require("./timeConverter");

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

function askToContinue() {
    rl.question("Do you want to continue? (y/n): ", (answer) => {
        const normalized = answer.trim().toLowerCase();
        if (normalized === "y" || normalized === "yes") {
            console.log("\n");
            console.log("------------------------------");
            console.log("\n");
            askQuestion();
        } else {
            console.log("Exiting the calculator.");
            rl.close();
        }
    });
}

function askQuestion() {

    console.log("Select an operation:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Length Conversion");
    console.log("6. Time Conversion");
    console.log("7. Exit");
    rl.question("Enter your choice (1-7): ", (choice) => {
        if (choice === "7") {
            console.log("Exiting the calculator.");
            rl.close();
            return;
        }
        else if (choice === "5") {
            console.log("1. meter");
            console.log("2. kilometer");
            console.log("3. millimeter");
            console.log("4. centimeter");
            console.log("5. inch");
            console.log("6. foot");
            console.log("7. mile");
            rl.question("Enter the unit to convert from: ", (fromUnit) => {
                if(fromUnit === "1") fromUnit = "meter";
                else if(fromUnit === "2") fromUnit = "kilometer";
                else if(fromUnit === "3") fromUnit = "millimeter";
                else if(fromUnit === "4") fromUnit = "centimeter";
                else if(fromUnit === "5") fromUnit = "inch";
                else if(fromUnit === "6") fromUnit = "foot";
                else if(fromUnit === "7") fromUnit = "mile";
                rl.question("Enter the unit to convert to: ", (toUnit) => {
                    if(toUnit === "1") toUnit = "meter";
                    else if(toUnit === "2") toUnit = "kilometer";
                    else if(toUnit === "3") toUnit = "millimeter";
                    else if(toUnit === "4") toUnit = "centimeter";
                    else if(toUnit === "5") toUnit = "inch";
                    else if(toUnit === "6") toUnit = "foot";
                    else if(toUnit === "7") toUnit = "mile";
                    rl.question("Enter the length value: ", (value) => {
                        value = Number(value);
                        console.log(`Result: ${lengthConverter(value, fromUnit, toUnit)}`);
                        askToContinue();
                    });
                });
            });
            return;
        } 
        else if (choice === "6") {
                        console.log("1. second");
                        console.log("2. minute");
                        console.log("3. hour");
                        console.log("4. day");
                        rl.question("Enter the unit to convert from: ", (fromUnit) => {
                            if(fromUnit === "1") fromUnit = "second";
                            else if(fromUnit === "2") fromUnit = "minute";
                            else if(fromUnit === "3") fromUnit = "hour";
                            else if(fromUnit === "4") fromUnit = "day";
                            console.log("1. second");
                            console.log("2. minute");
                            console.log("3. hour");
                            console.log("4. day");
                            rl.question("Enter the unit to convert to: ", (toUnit) => {
                                if(toUnit === "1") toUnit = "second";
                                else if(toUnit === "2") toUnit = "minute";
                                else if(toUnit === "3") toUnit = "hour";
                                else if(toUnit === "4") toUnit = "day";
                                rl.question("Enter the time value: ", (value) => {
                                    value = Number(value);
                                    console.log(`Result: ${timeConverter(value, fromUnit, toUnit)}`);
                                    askToContinue();
                                });
                            });
                        });
            return;
        }
        else if (!["1", "2", "3", "4", "5", "6", "7"].includes(choice)) {
            console.log("Invalid choice. Please select a number between 1 and 7.");
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
                        askToContinue();
                        break;
                    case "2":
                        console.log(`Result: ${sub(num1, num2)}`);
                        askToContinue();
                        break;
                    case "3":
                        console.log(`Result: ${product(num1, num2)}`);
                        askToContinue();
                        break;
                    case "4":
                        console.log(`Result: ${division(num1, num2)}`);
                        askToContinue();
                        break;
                    case "5":
                        rl.question("Enter the length value: ", (value) => {
                            rl.question("Enter the unit to convert from: ", (fromUnit) => {
                                rl.question("Enter the unit to convert to: ", (toUnit) => {
                                    value = Number(value);
                                    console.log(`Result: ${lengthConverter(value, fromUnit, toUnit)}`);
                                    askToContinue();
                                });
                            });
                        });
                        break;
                    case "7":
                        console.log("Exiting the application.");
                        rl.close();
                        break;
                    default:
                        console.log("Invalid choice. Please select a number between 1 and 7.");
                        askToContinue();
                }
            });
        });
    });
}
askQuestion(); 
