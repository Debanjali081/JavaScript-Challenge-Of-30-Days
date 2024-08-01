// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

// Saving a string value to localStorage
localStorage.setItem('greeting', 'Hello, World!');

// Retrieving the string value from localStorage
const greeting = localStorage.getItem('greeting');
console.log(greeting); // Output: Hello, World!

