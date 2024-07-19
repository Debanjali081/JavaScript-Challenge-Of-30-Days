// Task 4 : Add a method to the book object that takes a parameter (year) and updates the book's year property , then log the updated object .

const Book = {
    Title: "Life Lesson",
    Author: "Debanjali",
    Year: 2024,
    updtYear: function () {
        this.Year = 2021
    }
}

Book.updtYear();

console.log(Book)

