const express = require('express')

const router = express.Router()

const genreCont = require('../controller/genreCont')


// Router.get functions

router.get('/catalog/genre/create', genreCont.createGenreGet)

router.get('/catalog/genre/:id', genreCont.genreGet)

router.get('/catalog/genres', genreCont.genresGet)

router.get('/catalog/genre/:id/delete', genreCont.deleteGenreGet)

router.get('/catalog/genre/:id/update', genreCont.updateGenrePost)



//Router.post requests

router.post('/catalog/genre/create', genreCont.createGenrePost)

router.post('/catalog/genre/:id', genreCont.genrePost)

router.post('/catalog/genres', genreCont.genresPost)

router.get('/genre/:id/delete', genreCont.deleteGenrePost)

router.get('/catalog/genre/:id/update', genreCont.updateGenrePost)



module.exports = router