const express = require('express')

const bookCont = require('../controller/bookCont')

const router = express.Router()

// Router.get functions

router.get('/catalog/book/create', bookCont.bookCreateGet)

router.get('catalog/book/:id', bookCont.bookGet)

router.get('/catalog/books', bookCont.booksGet)

router.get('/catalog/book/:id/delete', bookCont.deleteBookGet)

router.get('/catalog/book/:id/update', bookCont.updateBookPost)

//Router.post requests

router.post('/catalog/book/create', bookCont.bookCreatePost)

router.post('catalog/book/:id', bookCont.bookPost)

router.post('/catalog/books', bookCont.booksPost)

router.get('/catalog/book/:id/delete', bookCont.deleteBookPost)

router.get('/catalog/book/:id/update', bookCont.updateBookPost)



module.exports = router