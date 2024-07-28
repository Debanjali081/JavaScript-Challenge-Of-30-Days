// Task 1 : Write a recursive function to calculate the factorial of a number . Log the result for a few test cases.

const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));