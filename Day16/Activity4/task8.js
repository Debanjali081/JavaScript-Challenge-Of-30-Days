// Task 8 : Write a recursive function to count the occurences of a target element in an array . Log the result for a few test cases.

const countOccurrences = (arr, target, index = 0) => {
    if (index >= arr.length) {
        return 0; // Base case: reached the end of the array
    }

    // Check if the current element matches the target
    const count = arr[index] === target ? 1 : 0;

    // Recursive call for the next element
    return count + countOccurrences(arr, target, index + 1);
};

// Example usage:
const array = [1, 2, 3, 4, 2, 2, 5, 2];
const target = 2;

const count = countOccurrences(array, target);
console.log(`The element ${target} occurs ${count} times in the array.`);
