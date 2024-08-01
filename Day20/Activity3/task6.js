// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Saving an object to sessionStorage
const sessionUser = { name: 'Jane Doe', age: 25 };
sessionStorage.setItem('sessionUser', JSON.stringify(sessionUser));

// Retrieving and parsing the object from sessionStorage
const sessionUserData = JSON.parse(sessionStorage.getItem('sessionUser'));
console.log(sessionUserData); // Output: { name: 'Jane Doe', age: 25 }
