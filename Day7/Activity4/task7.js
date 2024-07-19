// Task 7 : Add a method to the book object that uses the this keyword to return a string with the book's title and year , and log the result of calling this method .

const Book = {
    Title: "Life Lesson",
    Author: "Debanjali",
    Year: 2024,
    getBookInfo: function () {
        return `${this.Title} , ${this.Year}`
    }
}

console.log(Book.getBookInfo())