const asyncHandler = require('express-async-handler')

const authorModel = require('../models/authorModel')


//author requests

exports.createAuthorGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented AuthorCreate')
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

exports.createAuthorGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented AuthorCreate')
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
    (req,res,next) =>{
        res.send(`not get implemented create a Author ${req.params.id}`)
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