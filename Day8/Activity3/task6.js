// Task 6 : Use the rest operator in a function to accept an arbitary number of arguments , sum them , and return the result .

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);

}
let result = sum(1, 2, 3, 4, 5);

console.log(result);


