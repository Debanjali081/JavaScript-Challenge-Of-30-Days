// Task 2 : Implement the selection sort algorithm to sort an array numbers in ascending order . Log the sorted array.

function selectionSort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      // Assume the minimum element is the first element in the unsorted portion
      let minIndex = i;
  
      // Iterate through the unsorted portion of the array
      for (let j = i + 1; j < n; j++) {
        // Update minIndex if a smaller element is found
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element of the unsorted portion
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  let numbers = [64, 34, 25, 12, 22, 11, 90];
  let sortedNumbers = selectionSort(numbers);
  console.log("Sorted array:", sortedNumbers);
  