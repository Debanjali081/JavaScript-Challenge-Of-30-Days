// Task 11 : Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained given a set of items, each with a weight and a value, and a maximum weight capacity.

function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    return dp[n][capacity];
  }
  
  // Example usage:
  let values = [60, 100, 120];
  let weights = [10, 20, 30];
  let capacity = 50;
  let maxValue = knapsack(values, weights, capacity);
  console.log("Maximum value that can be obtained:", maxValue);
  