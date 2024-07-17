// Task 10 : Write a higher-order function that takes two functions and a value , applies the first function to the value , and then applies the second function to the result .

function applyFunctions(fn1, fn2, value) {
    const result1 = fn1(value);
    const result2 = fn2(result1);
    return result2;
}

// Example usage:
const add2 = (x) => x + 2;
const multiplyBy3 = (x) => x * 3;

const result = applyFunctions(add2, multiplyBy3, 5); // (5 + 2) * 3 = 21
console.log(result); // This will print 21
