// Task 5 : Write a function to implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid; // Target found
      } else if (arr[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
    return -1; // Target not found
  }
  
  // Example usage:
  let sortedNumbers = [11, 12, 22, 25, 34, 64, 90];
  let target = 25;
  let index = binarySearch(sortedNumbers, target);
  
  if (index !== -1) {
    console.log(`Target value ${target} found at index:`, index);
  } else {
    console.log(`Target value ${target} not found in the array.`);
  }
  