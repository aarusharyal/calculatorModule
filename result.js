const add = require("./add");
const sub = require("./subtraction");
const product = require("./multiplication");
const division = require("./division");

function result(num1, num2, operation) {
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
        while (choice === 1 || choice === 2 || choice === 3 || choice === 4)
        {
            rl.question("Enter the second number: ", (num2) =>
            {
                num2 = Number(num2);
                let output;
                switch (choice)
                {
                    case 1:
                        res.result = add(res.result, num2);
                        console.log(`Result: ${res.result}`);
                        askToContinue();
                        break;
                    case 2:
                        res.result = sub(res.result, num2);
                        console.log(`Result: ${res.result}`);
                        askToContinue();
                        break;
                    case 3:
                        res.result = product(res.result, num2);
                        console.log(`Result: ${res.result}`);
                        askToContinue();
                        break;
                    case 4:
                        if (num2 === 0)
                        {
                            console.log("Error: Division by zero is not allowed.");
                            askToContinue();
                            break;
                        }
                        res.result = division(res.result, num2);
                        console.log(`Result: ${res.result}`);
                        askToContinue();
                        break;
                    default:
                        console.log("Invalid choice. Please select a number between 1 and 4.");
                        askToContinue();
                }

            });
        }
    });
}
module.exports = result;
