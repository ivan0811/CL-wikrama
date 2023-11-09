const express = require('express')
const router = express.Router()
const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook,
    search,
    sortBy        
} = require('../controllers/BookController')

router.get('/search', search)
router.get('/sort', sortBy)

//route untuk menampilkan data
router.route('/')
.get(getBooks)
.post(addBook)

router.route('/:id')
.get(getBook)
.put(updateBook)
.delete(deleteBook)

module.exports = router