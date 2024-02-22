// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  // Fahrenheit to Celsius conversion formula: C = (F - 32) * 5/9
  let celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

// Test the function with various inputs
let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212.toFixed(2)} Celsius`);

console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32).toFixed(2)} degrees Celsius`);

let deg98pt7 = 98.7;
console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fahrenheitToCelsius(deg98pt7).toFixed(2)} is equivalent to ${Math.round(fahrenheitToCelsius(deg98pt7))} degrees Celsius`);


