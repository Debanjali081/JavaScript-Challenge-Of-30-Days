// Task 3 : Implement the quicksort algorithm to sort an array of numbers in ascending order . Log the sorted array .

function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Select a pivot element from the array (here we choose the last element)
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
  
    // Partition the array into two halves
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Recursively sort the left and right subarrays, and concatenate with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage:
  let numbers = [64, 34, 25, 12, 22, 11, 90];
  let sortedNumbers = quickSort(numbers);
  console.log("Sorted array:", sortedNumbers);
  