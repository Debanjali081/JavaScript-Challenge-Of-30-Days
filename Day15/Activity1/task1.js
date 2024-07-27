// Task 1 : Write a function that returns another function , where the inner function accesses a variable from the outer function's scope . Call the inner function and log the result .

function outer() {
    let name = "Debanjali Lenka"
    function inner() {
        console.log(name);
    }

    return inner;
}
let innerFunction = outer();
innerFunction();