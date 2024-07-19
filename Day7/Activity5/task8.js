// Task 8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value 

const Book = {
    Title: "Life Lesson",
    Author: "Debanjali",
    Year: 2024,
}

for (const prop in Book)
    if (Book.hasOwnProperty(prop)) {
        console.log(`${prop}:${Book[prop]}`);

    }
