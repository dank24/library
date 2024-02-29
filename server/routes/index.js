const express = require('express')

const router = express.Router

const bookCont = require('../controller/bookCont')


router.get('/', bookCont.index)


module.exports = router