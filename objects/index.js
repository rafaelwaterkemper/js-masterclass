//Literal anottation

let key1 = 'title'

console.log({
    [key1]: 'Use value of reference as property',
    new: 'Use of reserved word'
})

const book = {}
let propAuthor = "author"

book.title = "Test"
book["pages"] = 65
book[propAuthor] = "Robert C. Martin"

console.log(book)

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
const book2 = {};
for (let key in book1) {
    book2[key] = book1[key];
}
console.log(book2);

console.log("title" in book2)
console.log("publisher" in book2)

const bookTest1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
};

const bookTest2 = {
    title: "Clean Codee",
    author: "Robert C. Martin",
};

console.log(bookTest1 == bookTest2) //false
console.log(bookTest1 === bookTest2) //false

function equals(obj, comparable) {

    for (let key in obj) {
        if (obj[key] !== comparable[key]) return false
    }

    for (let key in comparable) {
        if (obj[key] !== comparable[key]) return false
    }

    return true
}

console.log(equals(bookTest1, bookTest2))