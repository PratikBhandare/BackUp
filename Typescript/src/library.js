var category;
(function (category) {
    category["Fiction"] = "Fiction";
    category["NonFiction"] = "NonFiction";
    category["Science"] = "Science";
    category["Historry"] = "History";
    category["Children"] = "Children";
})(category || (category = {}));
//Library Class
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    //Add a new book
    Library.prototype.addBook = function (book) {
        if (this.books.some(function (b) { return b.id === book.id; })) { /// uses with array returns true if condition satisfies
            console.log("Book with ID ".concat(book.title, " already exist"));
            return;
        }
        else {
            this.books.push(book);
            console.log("Book with ID ".concat(book.title, " added succesfully"));
        }
    };
    //List all books
    Library.prototype.listBooks = function () {
        console.log("Library Books:");
        this.books.forEach(function (book) {
            console.log("ID $book.id, Title: ".concat(book.title, ", Author: ").concat(book.author, ", Category: ").concat(book.category, ", Available: ").concat(book.isAvailable));
        });
    };
    return Library;
}());
