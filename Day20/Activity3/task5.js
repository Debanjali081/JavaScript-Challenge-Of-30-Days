// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

// Saving a string value to sessionStorage
sessionStorage.setItem('sessionGreeting', 'Hello, Session!');

// Retrieving the string value from sessionStorage
const sessionGreeting = sessionStorage.getItem('sessionGreeting');
console.log(sessionGreeting); // Output: Hello, Session!
