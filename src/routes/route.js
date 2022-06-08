const express = require('express');
const router = express.Router();


const BookController= require("../controllers/bookController")
const AuthorController= require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook)
router.post("/createAuthor", AuthorController.createAuthor)
router.get("/getBookByAuthor", BookController.getBookByAuthor)
router.get("/findAuthor", BookController.findAuthor)
router.get("/getBooksBwPrice",BookController.getBooksBwPrice)
router.get("/GET/books-by-authorid/:authorId", BookController.getBooksByAuthorId)
router.get("/GET/getAuthorsOlderThanAge", BookController.getAuthorsOlderThanAge)
module.exports = router;  