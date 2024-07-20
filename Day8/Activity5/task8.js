// Task 8 : Use enhanced object literals to create an object with methods and properties , and log the object to the console .

let name = "Debanjali";
let age = 21;

const person = {
    name,
    age,

    greet() {
        console.log(`Hello , My Name Is ${this.name} and I am ${this.age} years old`);

    }
    ,
    ["isAdult"]: age >= 18
}

console.log(person);

person.greet();