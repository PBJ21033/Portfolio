// requires express
const bodyParser = require("body-parser");
var express = require("express");
const books = [{
    Book: "Hungering",
    Author: "John Pitt",
    numPages: 200,
    price: 12.40,
    Status: "Available"
}]

var app = express();

app.set("view engine", "ejs");

// Parses book object.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static("styles"))

app.listen(5500, function(){
    console.log('listening to port 5500')
});

// home page.
app.get("/", function(req, res){

    res.render("home", {data: books})
})

// add a book page.
app.get("/add_book", function(req, res){
    res.render("add_book")
})

// add book object to the page.
app.post("/", function(req, res){
    const inputBook = req.body.Book
    const inputAuthor = req.body.Author
    const inputPages = req.body.numPages
    const inputPrice = req.body.price
    const inputStatus = req.body.Status

    // This will add the new book objects.
    books.push({
        Book: inputBook,
        Author: inputAuthor,
        numPages: inputPages,
        price: inputPrice,
        Status: inputStatus
    })

    res.render("home", {data: books})
})

// This issues the book when the button is pressed. 
app.post("/issue", function(req, res){
    var issueBookName = req.body.Book

    // Loops through the books to find which book the button indicated.
    books.forEach(book =>{
        if(book.Book == issueBookName){
            book.Status = "Issued"
        }
    })

    res.render("home", {data: books})
})

// This will return the book that the button is associated with. 
app.post("/return", function(req, res){
    const returnBookName = req.body.Book

    // Loops through all the book objects to find the book associated with the button press.
    // Also it updates the status of the book. 
    books.forEach(book =>{
        if(book.Book == returnBookName){
            book.Status = "Available"
        }
    })

    res.render("home", {data: books})
})

// deleting a book based on the name.
app.post("/delete", function(req, res){
    const deleteBookName = req.body.Book
    var index = 0

    // Loops through the book objects to find the book associated with the delete button press. 
    books.forEach(book =>{
        index += 1
        if(book.Book == deleteBookName){
            books.splice((index - 1), 1)
        }
    })

    res.render("home", {data: books})
})




