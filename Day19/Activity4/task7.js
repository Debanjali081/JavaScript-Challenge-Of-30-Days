// Task 7: Match a word only if it is at the beginning of a string

let text = "Hello, this is a test.";
let regex = /^\b\w+\b/;
let matches = text.match(regex);
console.log(matches);
