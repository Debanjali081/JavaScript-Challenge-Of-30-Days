// Task 3 : Write a recursive function to find the sum of all elements in an array . Log the result  for a few test cases.

const arrSum = (arr) => {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + arrSum(arr.slice(1));
    }
};

console.log(arrSum([1, 2, 3, 4, 13, 5]));