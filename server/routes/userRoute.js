const express = require('express')
const userCont = require('../controller/userCont')

const router = express.Router()

// Router.get functions

router.get('/index', userCont.index)

router.get('/createbook', userCont.bookCreateGet)

router.get('/createauthor', userCont.authorCreateGet)

router.get('/book/:id', userCont.bookGet)

router.get('/author/:id', userCont.authorGet)

router.get('/books', userCont.booksGet)

router.get('/authors', userCont.authorsGet)


//Router.post requests

router.post('/index', userCont.index)

router.post('/createbook', userCont.bookCreatePost)

router.post('/createauthor', userCont.authorCreatePost)

router.post('/book/:id', userCont.bookPost)

router.post('/author/:id', userCont.authorPost)

router.post('/books', userCont.booksPost)

router.post('/authors', userCont.authorsPost)


module.exports = router