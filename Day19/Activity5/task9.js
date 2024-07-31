// Task 9: Validate a simple password

let password = "Password123!";
let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
let isValid = regex.test(password);
console.log(isValid);
