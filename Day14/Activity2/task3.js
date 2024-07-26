// Task 3 : Define a class Student that extends the Person class . Add a property studentId and a method to return the student ID . Create and instance of the student class and log the student ID.

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

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId;
    }
    student() {
        return `Student ID= ${this.studentId}`
    }
}

let obj2 = new Student("Debanjali", "20", "NIT135")

console.log(obj2.student());
console.log(obj2.name);