// Task 8 :  Create a memorized version of a function that calculates the factorial of a number .

function memoizeFactorial() {
    const cache = {}; // Store previous computations

    function factorial(n) {
        if (n <= 1) return 1; // Base case
        if (cache[n] !== undefined) {
            console.log(`Returning cached result for ${n}`);
            return cache[n]; // Return cached result if available
        } else {
            console.log(`Computing result for ${n}`);
            cache[n] = n * factorial(n - 1); // Recursive computation with caching
            return cache[n];
        }
    }

    return factorial;
}

const memoizedFactorial = memoizeFactorial();

console.log(memoizedFactorial(5)); // Outputs: Computing result for 5, 4, 3, 2, 1
console.log(memoizedFactorial(5)); // Outputs: Returning cached result for 5
console.log(memoizedFactorial(6)); // Outputs: Computing result for 6, Returning cached result for 5
console.log(memoizedFactorial(7)); // Outputs: Computing result for 7, Returning cached result for 6, Returning cached result for 5

