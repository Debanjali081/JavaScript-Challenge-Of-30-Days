// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function clearAllStorages() {
    localStorage.clear();
    sessionStorage.clear();
    console.log('localStorage:', localStorage.length); // Output: 0
    console.log('sessionStorage:', sessionStorage.length); // Output: 0
  }
  
  clearAllStorages();
  