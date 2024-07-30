// Task 9 : Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Add any remaining elements
    return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
  }
  
  // Example usage:
  let sortedArray1 = [1, 3, 5, 7];
  let sortedArray2 = [2, 4, 6, 8];
  let mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
  console.log("Merged array:", mergedArray);
  