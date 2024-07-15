// Task 3 : Write a program to find the largest of three numbers using nested if-else statements.

let num1=prompt("Enter the first number");
let num2=prompt("Enter the second number");
let num3=prompt("Enter the third number");


if(num1>num2&num3){
    console.log(`${num1} is greatest among three numbers`);
}
else if(num2>num1&num3){
    console.log(`${num2} is greatest among three numbers`);
}
else if(num3>num1&num2){
    console.log(`${num3} is greatest`);
}
