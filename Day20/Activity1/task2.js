// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Saving an object to localStorage
const user = { name: 'John Doe', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieving and parsing the object from localStorage
const userData = JSON.parse(localStorage.getItem('user'));
console.log(userData); // Output: { name: 'John Doe', age: 30 }
