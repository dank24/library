const express = require('express')

const router = express.Router()

const bookInstanceCont = require('../controller/bookInstanceCont')

// Router.get functions

router.get('/catalog/bookinstance/create', bookInstanceCont.createBookInstanceGet)

router.get('/catalog/bookinstances', bookInstanceCont.bookInstancesGet)

router.get('/catalog/bookinstance/:id', bookInstanceCont.bookInstanceGet)

router.get('/catalog/bookinstance/:id/delete', bookInstanceCont.deletebookInstanceGet)

router.get('/catalog/bookinstance/:id/update', bookInstanceCont.updateBookInstanceGet)

//Router.post requests

router.post('/catalog/bookinstance/create', bookInstanceCont.createBookInstancePost)

router.post('/catalog/bookinstance/:id', bookInstanceCont.bookInstancePost)

router.post('/catalog/bookinstances', bookInstanceCont.bookInstancesPost)

router.get('/bookInstance/:id/delete', bookInstanceCont.deletebookInstancePost)

router.get('/catalog/bookinstance/:id/update', bookInstanceCont.updateBookInstancePost)



module.exports = router