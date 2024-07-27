// Task 7 : Write a function that memorizes the result of another function. Use a closure to store the results of previous computations .

function memoize(fn) {
    const cache = {}; // Store previous computations

    return function(...args) {
        const key = JSON.stringify(args); // Use arguments as cache key
        if (cache[key] !== undefined) {
            console.log(`Returning cached result for ${key}`);
            return cache[key]; // Return cached result if available
        } else {
            console.log(`Computing result for ${key}`);
            const result = fn(...args); // Compute result
            cache[key] = result; // Cache the result
            return result;
        }
    };
}

// Example usage:
function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Outputs: Computing result for [1,2] 3
console.log(memoizedAdd(1, 2)); // Outputs: Returning cached result for [1,2] 3
console.log(memoizedAdd(2, 3)); // Outputs: Computing result for [2,3] 5
console.log(memoizedAdd(2, 3)); // Outputs: Returning cached result for [2,3] 5

