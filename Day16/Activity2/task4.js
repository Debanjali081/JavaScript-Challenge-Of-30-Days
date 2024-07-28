// Task 4 : Write a recursive function to find the maximum element in an array. Log the result of few test cases .

const maxArray = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    else if (arr.length === 1) {
        return 0;
    }
    else {
        let maxofRest = maxArray(arr.slice(1));
        return arr[0] > maxofRest ? arr[0] : maxofRest;
    }
}

console.log(maxArray([1, 2, 34, 5, 6]));