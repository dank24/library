const express = require('express')

const router = express.Router()

const bookInstanceCont = require('../controller/bookInstanceCont')

// Router.get functions

router.get('/createbookInstance', bookInstanceCont.createBookInstanceGet)

router.get('/bookInstance/:id', bookInstanceCont.bookInstanceGet)

router.get('/bookInstances', bookInstanceCont.bookInstancesGet)

router.get('/bookInstance/delete', bookInstanceCont.deletebookInstanceGet)

router.get('bookInstance/:id/update', bookInstanceCont.updateBookInstanceGet)

//Router.post requests

router.post('/createbookInstance', bookInstanceCont.createBookInstancePost)

router.post('/bookInstance/:id', bookInstanceCont.bookInstancePost)

router.post('/bookInstances', bookInstanceCont.bookInstancesPost)

router.get('/bookInstance/:id/delete', bookInstanceCont.deletebookInstancePost)

router.get('bookInstance/:id/update', bookInstanceCont.updateBookInstancePost)



module.exports = router