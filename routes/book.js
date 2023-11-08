const express = require('express')
const router = express.Router()
const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
} = require('../controllers/BookController')

//route untuk menampilkan data
router.route('/')
.get(getBooks)
.post(addBook)

router.route('/:id')
.get(getBook)
.put(updateBook)
.delete(deleteBook)

module.exports = router