const userModel = require('../models/userModels')
const asyncHandler = require('express-async-handler')


//get request
exports.index = asyncHandler(
    (req,res,next) =>{
        res.send('this is the index')
    }
)

exports.bookCreateGet = asyncHandler(
    (req,res,next) =>{
        res.send('createa a book')
    }
)

exports.authorCreateGet = asyncHandler(
    (req,res,next) =>{
        res.send('create an author')
    }
)

exports.bookGet = asyncHandler(
    (req,res,next) =>{
        res.send('get a single books')
    }
)

exports.authorGet = asyncHandler(
    (req,res,next) =>{
        res.send('get a single author')
    }
)

exports.booksGet = asyncHandler(
    (req,res,next) =>{
        res.send('get all books')
    }
)

exports.authorsGet = asyncHandler(
    (req,res,next) =>{
        res.send('get all authors')
    }
)

// Post requests
exports.index = asyncHandler(
    (req,res,next) =>{
        res.send('this is the index')
    }
)

exports.bookCreatePost = asyncHandler(
    (req,res,next) =>{
        
    }
)

exports.authorCreatePost = asyncHandler(
    (req,res,next) =>{
        
    }
)

exports.bookPost = asyncHandler(
    (req,res,next) =>{
    
    }
)

exports.authorPost = asyncHandler(
    (req,res,next) =>{
    
    }
)

exports.booksPost = asyncHandler(
    (req,res,next) =>{

    }
)

exports.authorsPost = asyncHandler(
    (req,res,next) =>{Post

    }
)
