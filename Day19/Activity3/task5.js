// Task 5: Capture the area code, central office code, and line number from a US phone number

let text = "(123) 456-7890";
let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let matches = text.match(regex);
console.log(matches);


