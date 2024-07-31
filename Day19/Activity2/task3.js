
// Task 3: Match all words starting with a capital letter

let text = "This is a Test. Hello World!";
let regex = /\b[A-Z][a-z]*\b/g;
let matches = text.match(regex);
console.log(matches);

