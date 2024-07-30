// Task 10 : Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib;
  }
  
  // Example usage:
  let fibNumbers = fibonacci(10);
  console.log("Fibonacci numbers:", fibNumbers);
  