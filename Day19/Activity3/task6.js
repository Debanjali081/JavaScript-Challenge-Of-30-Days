// Task 6: Capture the username and domain from an email address.

let text = "example@example.com";
let regex = /(\w+)@(\w+\.\w+)/;
let matches = text.match(regex);
console.log(matches);
