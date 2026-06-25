const add = require("./add");
const sub = require("./subtraction");
const product = require("./multiplication");
const division = require("./division");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askToContinue(askQuestion) {
    rl.question("Do you want to continue? (y/n): ", (answer) => {
        const normalized = answer.trim().toLowerCase();
        if (normalized === "y" || normalized === "yes") {
            console.log("------------------------------");
            // console.log("\n");
            askQuestion();
        } else {
            console.log("Exiting the calculator.");
            rl.close();
        }
    });
}

function result(rl, res, askQuestion) {
    if (res.result === null) {
        console.log("No previous result found. Please perform a calculation first.");
        askQuestion();
        return;
    }
    console.log("Previous Result: " + res.result);
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    rl.question("Enter your choice (1-4): ", (choice) => {
        choice =Number(choice);
        if (choice === 1 || choice === 2 || choice === 3 || choice === 4)
        {
            rl.question("Enter the third number: ", (num3) =>
            {
                num3 = Number(num3);
                let output;
                switch (choice)
                {
                    case 1:
                        res.result = add(res.result, num3);
                        console.log(`Result: ${res.result}`);
                        askToContinue(askQuestion);
                        break;
                    case 2:
                        res.result = sub(res.result, num3);
                        console.log(`Result: ${res.result}`);
                        askToContinue(askQuestion);
                        break;
                    case 3:
                        res.result = product(res.result, num3);
                        console.log(`Result: ${res.result}`);
                        askToContinue(askQuestion);
                        break;
                    case 4:
                        if (num3 === 0)
                        {
                            console.log("Error: Division by zero is not allowed.");
                            askToContinue(askQuestion);
                            break;
                        }
                        res.result = division(res.result, num3);
                        console.log(`Result: ${res.result}`);
                        askToContinue(askQuestion);
                        break;
                    default:
                        console.log("Invalid choice. Please select a number between 1 and 4.");
                        askToContinue(askQuestion);
                        rl.close();
                }

            });
        }
    });
}
module.exports = result;
