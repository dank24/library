const express = require('express')

const router = express.Router()

const indexHome = require('../controller/indexHomeCont')


router.get('/', indexHome.index)

router.get('/home', indexHome.homeGet)


module.exports = router