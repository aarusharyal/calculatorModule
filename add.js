let lastResult = null;

function add(num1, num2)
// Function to add two numbers and store the result.
{
    lastResult = num1 + num2;
    return lastResult;
}
module.exports = add;