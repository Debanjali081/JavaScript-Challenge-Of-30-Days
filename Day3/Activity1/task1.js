// Task 1: Write a program to check if a number is positive , negative , or zero , and log the result to the console .

let num=prompt("Enter a number");

if(num>=0){
    console.log(`${num} is positive `)
}
else if(num<0){
    console.log(`${num} is negative`)
}
else if(num==0){
    console.log(`${num} is Zero`)
}
else{
    console.log(`Please enter a number`)
}