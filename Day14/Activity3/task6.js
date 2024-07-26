// Task 6 : Add a stacic property to the Student class to keep track of the number of students created . Increment this property in the constructor and log the total number of students.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Good Evening ${this.name}, and your age is ${this.age}`;
    }

    updateAge(newAge) {
        this.age = newAge;
        return `Good Evening ${this.name}, and your age is ${this.age}`;
    }

    static genericGreeting() {
        return 'Hello, this is a generic greeting!';
    }
}

class Student extends Person {
    static studentCount = 0; // Static property to keep track of the number of students

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount += 1; // Increment the student count
    }

    greet() {
        return `${super.greet()} Your ID = ${this.studentId}`;
    }

    student() {
        return `Student ID = ${this.studentId}`;
    }

    static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}

// Creating instances of Student
let student1 = new Student("Debanjali", 21, "NIT135");
let student2 = new Student("John", 22, "NIT136");

console.log(student1.greet()); // Good Evening Debanjali, and your age is 21 Your ID = NIT135
console.log(student2.greet()); // Good Evening John, and your age is 22 Your ID = NIT136

// Log the total number of students
console.log(Student.getStudentCount()); // Total number of students: 2
