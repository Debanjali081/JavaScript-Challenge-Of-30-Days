// Task 4 : Use Object destructuring to extract the title and author from a book object and log them to the console .

const Book = {
    Author: "Debanjali",
    Title: "Life Lesson"
}

const { Author: First, Title: Second } = Book

console.log(First, Second);