function calculator() {
  // Ask the user for the first number
  var number1 = parseFloat(prompt('Enter the first number:'));
  // Ask the user for the second number
  var number2 = parseFloat(prompt('Enter the second number:'));
  // Ask the user for the mathematical operation
  var operation = prompt('Enter the mathematical operation (+, -, *, /):');
  var result;

  // Perform the calculation based on the operation
  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      // Additional check to prevent division by zero
      if (number2 === 0) {
        return 'Division by zero is not allowed.';
      }
      result = number1 / number2;
      break;
    default:
      return 'Invalid operation.';
  }

  // Return the formatted result
  return `${number1} ${operation} ${number2} = ${result}`;
}
// Call the calculator function and display the result
var output = calculator();
console.log(output);