// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

// Logging localStorage content before removal
console.log(localStorage.getItem('userInfo'));

// Removing item from localStorage
localStorage.removeItem('userInfo');

// Logging localStorage content after removal
console.log(localStorage.getItem('userInfo')); // Output: null
