// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

// Logging sessionStorage content before removal
console.log(sessionStorage.getItem('sessionUserInfo'));

// Removing item from sessionStorage
sessionStorage.removeItem('sessionUserInfo');

// Logging sessionStorage content after removal
console.log(sessionStorage.getItem('sessionUserInfo')); // Output: null
