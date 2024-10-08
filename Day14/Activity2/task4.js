// Task 4 : Override the greeting method in the Student class to include the student ID in the message .Log the overridden greeting message .

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
    greet() {
        return ` ${super.greet()}  Your ID=${this.studentId}`
    }
}

let obj2 = new Student("Debanjali", "20", "NIT135")
console.log(obj2.greet());