// Task 4 : Implement the linear search algorithm to find a target value in array . Log the index of the target value.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index if the target is found
      }
    }
    return -1; // Return -1 if the target is not found
  }
  
  // Example usage:
  let numbers = [64, 34, 25, 12, 22, 11, 90];
  let target = 25;
  let index = linearSearch(numbers, target);
  
  if (index !== -1) {
    console.log(`Target value ${target} found at index:`, index);
  } else {
    console.log(`Target value ${target} not found in the array.`);
  }
  