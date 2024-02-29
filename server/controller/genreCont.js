const asyncHandler = require('express-async-handler')

const genreModel = require('../models/genreModel')


//genre requests

exports.createGenreGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented genreCreate')
    }
)

exports.genreGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find one genre')
    }
)

exports.genresGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find all genres')
    }
)

exports.createGenreGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented genreCreate')
    }
)

exports.deleteGenreGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented delete a gemre get')
    }
)

exports.updateGenreGet = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a genre get')
    }
)

//post genre
exports.createGenrePost = asyncHandler(
    (req,res,next) =>{
        res.send(`not get implemented create a genre ${req.params.id}`)
    }
)

exports.genrePost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find one genre post')
    }
)

exports.genresPost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find all genres post')
    }
)

exports.deleteGenrePost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented delete a gemre post')
    }
)

exports.updateGenrePost = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a genre post')
    }
)