const express = require('express')

const router = express.Router

const authorCont = require('../controller/authorCont')

// Router.get functions

router.get('/index', authorCont.index)

router.get('/createAuthor', authorCont.authorCreateGet)

router.get('/Author/:id', authorCont.authorGet)

router.get('/Authors', authorCont.authorsGet)

router.get('/Author/delete', authorCont.deleteAuthorGet)

router.get('Author/:id/update', authorCont.updateAuthorPost)

//Router.post requests

router.post('/index', authorCont.index)

router.post('/createAuthor', authorCont.AuthorCreatePost)

router.post('/Author/:id', authorCont.authorPost)

router.post('/Authors', authorCont.authorsPost)

router.get('/Author/delete', authorCont.deleteAuthorPost)

router.get('Author/:id/update', authorCont.updateAuthorPost)



module.exports = router