// Task 5: Add a static method to the person class that returns a generic greeting message . Call this static method without creating an instance of the class and log the message.

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
    static greeGeneric() {
        return `Hello Am Static`
    }

}

let obj = new Person("Debanjali", 21);

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId;
    }
    student() {
        return `Student ID= ${this.studentId}`
    }
    greet() {
        return ` ${super.greet()}  Your ID=${this.studentId}`
    }

}

console.log(Person.greeGeneric());