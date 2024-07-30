// Task 6 :  Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
    let charCount = {};
  
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    return charCount;
  }
  
  // Example usage:
  let text = "hello world";
  let characterCounts = countCharacterOccurrences(text);
  console.log("Character counts:", characterCounts);
  