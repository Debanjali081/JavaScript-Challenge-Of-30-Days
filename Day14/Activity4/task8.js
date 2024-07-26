// Task 8 : Add a setter method to the person class to update name properties (firstName and lastName). Update the name using the setter and log the updated full name.

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
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person = new Person("Debanjali", "Lenka", 21);

console.log(person.fullName);

person.fullName = "Karishma Panda";

console.log(person.fullName);
