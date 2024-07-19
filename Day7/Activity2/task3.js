// Task 3 : Add a method to the book object that returns a string with the book's title and author , and log the result of calling this method ,

const Book = {
    Title: "Life Lesson",
    Author: "Debanjali",
    Year: 2024,
    msg:function(){
        console.log("Hello Learners !!");
    },
    getDetails:function(){
        return `Title : ${this.Title} , Author : ${this.Author}`;
    }

}

console.log(Book["Author"])
console.log(Book["Title"]);
Book.msg();
console.log(Book.getDetails());