// Task 5 : Write a program  that uses a switch case to assign a grade ('A','B','C','D','F') based on score and log the grade to the console .

let mark = 20;
let grade;

switch (true) {
    case (mark >= 90):
        grade = 'A';
        break;
    case (mark >= 70 && mark < 90):
        grade = 'B';
        break;
    case (mark >= 60 && mark < 70):
        grade = 'C';
        break;
    case (mark >= 40 && mark < 60):
        grade = 'D';
        break;
    case (mark < 40):
        grade = 'F';
        break;
    default:
        console.log("Out of range");
        break;
}

if (grade) {
    console.log(`Grade is ${grade} mark = ${mark}`);
} else if (mark < 30) {
    console.log("Sorry, You Are Failed. Try Again!!");
}
