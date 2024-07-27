// Task 4 : Create a closure that captures a user's name and returns a function that greets the user by name .

function Greet(name) {
    return function () {
        console.log(`Hello ${name}`);
    }

}

let getGreet = Greet("Debanjali")

getGreet();