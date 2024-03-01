const express = require('express')

const router = express.Router()

const authorCont = require('../controller/authorCont')

// Router get functions


router.get('/createauthor', authorCont.createAuthorGet)

router.get('/Author/:id', authorCont.authorGet)

router.get('/Authors', authorCont.authorsGet)

router.get('/Author/:id/delete', authorCont.deleteAuthorGet)

router.get('Author/:id/update', authorCont.updateAuthorPost)

//Router.post requests


router.post('/createauthor', authorCont.createAuthorPost)

router.post('/Author/:id', authorCont.authorPost)

router.post('/Authors', authorCont.authorsPost)

router.post('/Author/delete', authorCont.deleteAuthorPost)

router.post('Author/:id/update', authorCont.updateAuthorPost)



module.exports = router