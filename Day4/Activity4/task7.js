// Task 7 : Write a program to print a pattern using nested for loop .

let i;
let j;

for (i = 1; i <= 5; i++) {
    let rowPattern = '';
    for (j = 1; j <= 5; j++) {

        rowPattern += ' ';
    }
    for (let k = 0; k < i; k++) {
        rowPattern += '*';
    }
    console.log(rowPattern)
}