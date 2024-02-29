const express = require('express')

const bookCont = require('../controller/bookCont')

const router = express.Router()

// Router.get functions

router.get('/index', bookCont.index)

router.get('/createbook', bookCont.bookCreateGet)

router.get('/book/:id', bookCont.bookGet)

router.get('/books', bookCont.booksGet)

router.get('/book/delete', bookCont.deleteBookGet)

router.get('book/:id/update', bookCont.updateBookPost)

//Router.post requests

router.post('/index', bookCont.index)

router.post('/createbook', bookCont.bookCreatePost)

router.post('/book/:id', bookCont.bookPost)

router.post('/books', bookCont.booksPost)

router.get('/book/delete', bookCont.deleteBookPost)

router.get('book/:id/update', bookCont.updateBookPost)



module.exports = router