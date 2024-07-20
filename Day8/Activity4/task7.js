// Task 7 : Write a function that takes two parameters and returns their product , with the second parameter having a default value of 1 . 
// Log the result of calling this function with and without the second parameter.

function prod(a, b = 1) {
    return a * b;
}

let result = prod(4);
console.log(result);

