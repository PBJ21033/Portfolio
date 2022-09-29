# Overview
This web app allows a user to add, delete, issue, and return library books. This app is assuming that the user is a librarian (since they are the only ones that can add a book). To start a test server on your computer all you need is to install node.js. Then you need to go to the library_system directory from your terminal. From there all you need to input is "node app.js" and press enter. The app will then be running but won't open anything. You then need to go to your web browser and type: "localhost:5500". After this you are good to go!

This software was created so that I could learn how to use node.js and express.js to create a web app. I have also been interested on what might go into developing a web app for a library. 


[Software Demo Video](https://youtu.be/Rw6OWbWvVwk)

# Web Pages

The first page of this app displays all of the books, their availabilties, authors, number of pages, and it allows for adding books by moving to the next page. Once you are on the second page, you are then able to add a book to the app. You add the book title, Author, number of pages, price (for book keeping), and it's availibility. The dynamic part is after you add the book, it renders the home page with the new book. From there you are able to repeat the process, issue a book, return a book, or even delete a book. 

# Development Environment

I used Visual Studio Code as my text editor and terminal for this project. 

This project uses Node.js for the backend, Express.js for the front end, CSS for the styling. 

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [GeeksforGeeks](https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/)
* [Nodejs Official site](https://nodejs.dev/en/learn/)

# Future Work

* I need to add a database of some sort. (either cloud or MySQL)
* I need to add more css to make the pages look better. 
* I need to add a way to login to the system which will determine if you can add a book or just checkout and return books.