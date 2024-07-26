// Task 1 : Define a class person with properties name and age , and a method to return a greeting message.
// Create an instance of the class and log the greeting message .

class Person {
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }
    greet() {
        return `Good Evening ${this.name} and your age is ${this.age}`
    }

}

let obj = new Person("Debanjali", 21);

console.log(obj.greet());