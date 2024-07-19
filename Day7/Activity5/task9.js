// Task 9 : Use Object.keys and Object.values methods to log all the keys and values of the book object .

const Book = {
    Title: "Life Lesson",
    Author: "Debanjali",
    Year: 2024,
}

console.log(` Keys :${Object.keys(Book).join(", ")}. , Values : ${Object.values(Book).join(" ,")}`)

