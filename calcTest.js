const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentValue = 0;

const calculator = {
  add(value) {
    currentValue += value;
    return currentValue;
  },
  subtract(value) {
    currentValue -= value;
    return currentValue;
  },
  multiply(value) {
    currentValue *= value;
    return currentValue;
  },
  divide(value) {
    if (value === 0) {
      console.log('Cannot divide by zero.');
      return currentValue;
    }
    currentValue /= value;
    return currentValue;
  },
  set(value) {
    currentValue = value;
    return currentValue;
  },
  reset() {
    currentValue = 0;
    return currentValue;
  },
  getValue() {
    return currentValue;
  },
};

function ask() {
  readline.question(
    `Current value: ${calculator.getValue()}\nEnter command (add, sub, mul, div, set, reset, exit) followed by a number if needed:\n`,
    (input) => {
      const parts = input.trim().split(/\s+/);
      const command = parts[0];
      const number = parts.length > 1 ? parseFloat(parts[1]) : NaN;

      switch (command) {
        case 'add':
          if (!isNaN(number)) console.log('Result:', calculator.add(number));
          else console.log('Enter a valid number.');
          break;
        case 'sub':
          if (!isNaN(number)) console.log('Result:', calculator.subtract(number));
          else console.log('Enter a valid number.');
          break;
        case 'mul':
          if (!isNaN(number)) console.log('Result:', calculator.multiply(number));
          else console.log('Enter a valid number.');
          break;
        case 'div':
          if (!isNaN(number)) console.log('Result:', calculator.divide(number));
          else console.log('Enter a valid number.');
          break;
        case 'set':
          if (!isNaN(number)) console.log('Result:', calculator.set(number));
          else console.log('Enter a valid number.');
          break;
        case 'reset':
          console.log('Result:', calculator.reset());
          break;
        case 'exit':
          readline.close();
          return;
        default:
          console.log('Unknown command.');
      }

      ask();
    }
  );
}

ask();
