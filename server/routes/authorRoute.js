const express = require('express')

const router = express.Router()

const authorCont = require('../controller/authorCont')

// Router get functions


router.get('/catalog/author/create', authorCont.createAuthorGet)

router.get('/Author/:id', authorCont.authorGet)

router.get('/catalog/authors', authorCont.authorsGet)

router.get('/catalog/author/:id/delete', authorCont.deleteAuthorGet)

router.get('catalog/author/:id/update', authorCont.updateAuthorPost)

//Router.post requests


router.post('/catalog/author/create', authorCont.createAuthorPost)

router.post('/Author/:id', authorCont.authorPost)

router.post('/catalog/authors', authorCont.authorsPost)

router.post('/catalog/author/:id/delete', authorCont.deleteAuthorPost)

router.post('catalog/author/:id/update', authorCont.updateAuthorPost)



module.exports = router