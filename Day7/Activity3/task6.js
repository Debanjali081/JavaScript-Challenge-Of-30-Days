// Task 6 : Access the log the name of the library and the titles of all the books in the library .

const Library = {
    Name: "Central Library",
    books: [

        { Category: "CSE", Titles: ["C", "Python", "Java", "JavaScript", "React"] },
        { Category: "CIVIL", Titles: ["SA1", "SA2", "MOS", "DCS"] }

    ]
}

console.log(Library["Name"]);
Library.books.forEach(category=>{
    console.log(`${category.Category} : ${category.Titles}`);
}
)