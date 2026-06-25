let lastResult = null;

function add(num1, num2) {
    lastResult = num1 + num2;
    return lastResult;
}
module.exports = add;