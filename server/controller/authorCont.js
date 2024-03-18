const asyncHandler = require('express-async-handler')

const authorModel = require('../models/authorModel')


//author requests

exports.createAuthorGet = asyncHandler(
    (req,res,next) =>{
        res.render('pages/authorCreate')
    }
)

exports.authorGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find one Author')
    }
)

exports.authorsGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find all Authors')
    }
)


exports.deleteAuthorGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented delete a gemre get')
    }
)

exports.updateAuthorGet = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a Author get')
    }
)



//post Author
exports.createAuthorPost = asyncHandler(
   async (req,res,next) =>{
        const {aFName, aLName, aDob, aRating} = req.body
        let fName = aFName.toLowerCase()
        let lName = aLName.toLowerCase()
        let dob = aDob.toLowerCase()
        let rating = aRating.toLowerCase()

        let author = await authorModel.findOne({authorLastName: lName})
        
        if(author){
            res.status(400).json('This author is already in the database')
        }

        if(!author){
            let newAuthor = new authorModel({
                authorFirstName: fName,
                authorLastName: lName,
                authorDOB: dob,
                authorRating: rating
            })

            await newAuthor.save()
            res.status(200).json(`New author: ${author} added`)
        }
    }
)

exports.authorPost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find one Author post')
    }
)

exports.authorsPost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find all Authors post')
    }
)

exports.deleteAuthorPost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented delete a gemre post')
    }
)

exports.updateAuthorPost = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a Author post')
    }
)