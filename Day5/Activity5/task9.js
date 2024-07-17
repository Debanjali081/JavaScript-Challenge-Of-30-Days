// Task 9 : Write a higher-order function that takes a function and a number , and calls the function that many times .

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

// Example usage:
const sayHello = () => {
    console.log("Hello!");
};

repeatFunction(sayHello, 5); // This will print "Hello!" 5 times
