// Task 2 : Write a recursive function to calculate the nth Fibonacci number . Log the result for a few test cases.

const Fibonacci = (n) => {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

console.log(Fibonacci(7));
console.log(Fibonacci(0));
console.log(Fibonacci(1));
console.log(Fibonacci(5));
