// fibonacciSequence.js

function fibonacci(n) {
  if (n <= 0) return [];
  const sequence = [0, 1]; // Starting values for the Fibonacci sequence
  
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]); // Add the sum of the last two numbers
  }
  
  return sequence;
}

// Example usage
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(5));  // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(1));  // Output: [0]
