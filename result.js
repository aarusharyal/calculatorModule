const add = require("./add");
const sub = require("./subtraction");
const product = require("./multiplication");
const division = require("./division");

function askToContinue(rl, askQuestion)
// Function to ask the user if they want to continue using the calculator.
{
    rl.question("Do you want to continue? (y/n): ", (answer) => 
    {
        // Normalize the user's input to handle different cases and whitespace.
        const normalized = answer.trim().toLowerCase();
        if (normalized === "y" || normalized === "yes")
        // If the user wants to continue, display a separator and ask the next question.
        {
            console.log("------------------------------");
            // console.log("\n");
            askQuestion();
        }
        else
        {
            console.log("Exiting the calculator.");
            rl.close();
        }
    });
}

function result(rl, res, askQuestion)
// Function to handle operations on the previous result.
{
    if (res.result === null)
    // If there is no previous result, inform the user and ask for a new operation.
    {
        console.log("No previous result found. Please perform a calculation first.");
        askQuestion();
        return;
    }
    console.log("Previous Result: " + res.result);
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    rl.question("Enter your choice (1-4): ", (choice) => 
    // Ask the user to select an operation to perform on the previous result.
    {
        choice =Number(choice);
        if (choice === 1 || choice === 2 || choice === 3 || choice === 4)
        {
            rl.question("Enter the third number: ", (num3) =>
            {
                num3 = Number(num3);
                switch (choice)
                {
                    case 1:
                        res.result = add(res.result, num3);
                        console.log(`Result: ${res.result}`);
                        askToContinue(rl, askQuestion);
                        break;
                    case 2:
                        res.result = sub(res.result, num3);
                        console.log(`Result: ${res.result}`);
                        askToContinue(rl, askQuestion);
                        break;
                    case 3:
                        res.result = product(res.result, num3);
                        console.log(`Result: ${res.result}`);
                        askToContinue(rl, askQuestion);
                        break;
                    case 4:
                        if (num3 === 0)
                        {
                            console.log("Error: Division by zero is not allowed.");
                            askToContinue(rl, askQuestion);
                            break;
                        }
                        res.result = division(res.result, num3);
                        console.log(`Result: ${res.result}`);
                        askToContinue(rl, askQuestion);
                        break;
                    }        
                });
            }
            else
            // Handle invalid choices by prompting the user to select a valid option.
            {
            console.log("Invalid choice. Please select a number between 1 and 4.");
            askToContinue(rl, askQuestion);
            rl.close();
            }
    });
}
module.exports = result;
