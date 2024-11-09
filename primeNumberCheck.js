// primeNumberCheck.js

function isPrime(n) {
  if (n <= 1) return false; // Numbers less than or equal to 1 are not prime.
  for (let i = 2; i <= Math.sqrt(n); i++) { // Loop from 2 to the square root of n
    if (n % i === 0) return false; // If n is divisible by i, it's not prime
  }
  return true; // If no divisors were found, it's prime
}

// Example usage
console.log(isPrime(11)); // Output: true
console.log(isPrime(4));  // Output: false
console.log(isPrime(17)); // Output: true
console.log(isPrime(1));  // Output: false
console.log(isPrime(0));  // Output: false
