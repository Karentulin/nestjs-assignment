
// factorialCalculator.js

function factorial(n) {
  if (n < 0) return "Factorial is not defined for negative numbers";
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers"


