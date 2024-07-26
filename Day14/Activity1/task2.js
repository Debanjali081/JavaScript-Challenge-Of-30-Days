// Add a method to the Person class that updates the age property and logs the updated age .

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Good Evening ${this.name} and your age is ${this.age}`
    }
    updateAge(newAge) {
        this.age = newAge;
        return `Good Evening ${this.name} and your age is ${this.age}`
    }

}

let obj = new Person("Debanjali", 21);

console.log(obj.greet());

console.log(obj.updateAge(20));