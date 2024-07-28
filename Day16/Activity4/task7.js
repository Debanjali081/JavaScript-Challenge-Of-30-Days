// Task 7 : Write a recursive function to perform binary search on a sorted array. Log the index of the target element for a few test cases.

const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) {
        return -1; // Target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1); // Search left half
    } else {
        return binarySearch(arr, target, mid + 1, right); // Search right half
    }
};

// Example usage:
const arr = [4, 2, 5, 1, 3];
arr.sort((a, b) => a - b); 

const targets = [1, 3, 6];
targets.forEach(target => {
    const index = binarySearch(arr, target);
    console.log(`Target ${target} is at index: ${index}`);
});
