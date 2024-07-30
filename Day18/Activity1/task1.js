// Task 1 : Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap arr[i] and arr[i + 1]
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      n--; // Reduce the range to be sorted as the largest element is at the end
    } while (swapped);
    return arr;
  }
  
  // Example usage:
  let numbers = [64, 34, 25, 12, 22, 11, 90];
  let sortedNumbers = bubbleSort(numbers);
  console.log("Sorted array:", sortedNumbers);
  