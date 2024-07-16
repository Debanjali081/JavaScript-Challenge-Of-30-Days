// Task 6 : Write a program to calculate the factorial of a number using a do--while loop .

let fact=1;
let i=1;
let num=5;
do{
    fact=fact*i;
    i++;
}
while(i<=num);
console.log(`The factorial of ${num} is ${fact}`);