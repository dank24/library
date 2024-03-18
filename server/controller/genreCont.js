const asyncHandler = require('express-async-handler')

const genreModel = require('../models/genreModel')


//genre requests

exports.createGenreGet = asyncHandler(
    (req,res,next) =>{
        res.render('pages/genreCreate')
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
    async (req,res,next) =>{

        const {gName, gDescrition} = req.body
        let name = gName.toLowerCase()
        let descrition = gDescrition.toLowerCase()

        let genre = await genreModel.findOne({genreName: name})

        if(genre){
            res.status(400).json('This genre is known')
        }
        if(!genre){
            let newGenre = new genreModel({
                genreName: name,
                genreDescription: descrition
            })

            await newGenre.save()
            res.status(200).json(`Genre :${name} as been added to the library`)
        }

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