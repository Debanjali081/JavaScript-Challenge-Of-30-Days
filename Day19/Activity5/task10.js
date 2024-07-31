// Task 10: Validate a URL

let url = "https://www.example.com";
let regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
let isValid = regex.test(url);
console.log(isValid);
