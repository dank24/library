const express = require('express')

const router = express.Router()

const genreCont = require('../controller/genreCont')


// Router.get functions

router.get('/creategenre', genreCont.createGenreGet)

router.get('/genre/:id', genreCont.genreGet)

router.get('/genres', genreCont.genresGet)

router.get('/genre/delete', genreCont.deleteGenreGet)

router.get('genre/:id/update', genreCont.updateGenrePost)



//Router.post requests

router.post('/creategenre', genreCont.createGenrePost)

router.post('/genre/:id', genreCont.genrePost)

router.post('/genres', genreCont.genresPost)

router.get('/genre/:id/delete', genreCont.deleteGenrePost)

router.get('genre/:id/update', genreCont.updateGenrePost)



module.exports = router