// Task 8 :  Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
    k = k % arr.length; // Handle if k is greater than the length of the array
    return arr.slice(-k).concat(arr.slice(0, -k));
  }
  
  // Example usage:
  let array = [1, 2, 3, 4, 5, 6, 7];
  let k = 3;
  let rotatedArray = rotateArray(array, k);
  console.log("Rotated array:", rotatedArray);
  