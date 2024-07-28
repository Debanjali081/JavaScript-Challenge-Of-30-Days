// Task 5 : Write a resursive function to reverse a string . Log the result for few test cases.

const strReverse = (str) => {
    if (str === '') {
        return '';
    } else {
        return strReverse(str.slice(1)) + str[0];
    }
};

console.log(strReverse("Debanjali"));
console.log(strReverse("Hello World"));

