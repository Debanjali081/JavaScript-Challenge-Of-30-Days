// Task 7 :  Add a getter method to the Person class to return the full name (assume a firstName and lastNmae property ). Create an instance and log the full name using the getter.

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Good Evening ${this.name} and your age is ${this.age}`
    }
    updateAge(newAge) {
        this.age = newAge;
        return `Good Evening ${this.name} and your age is ${this.age}`
    }
    static greeGeneric() {
        return `Hello Am Static`
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let person = new Person("Debanjali", "Lenka", 21);

console.log(person.fullName);