// Task 2: Match all digits in a string

let text = "There are 123 apples and 456 oranges.";
let regex = /\d+/g;
let matches = text.match(regex);
console.log(matches);
