const bookModel = require('../models/bookModel')

const asyncHandler = require('express-async-handler')


//get request
exports.index = asyncHandler(

    (req,res,next) =>{
      let books = async () =>{
        await bookModel.countDocuments().exec()
      }  

        res.render('index', {books})
    }
)

exports.bookCreateGet = asyncHandler(
    (req,res,next) =>{
        res.send('createa a book')
    }
)

exports.bookGet = asyncHandler(
    (req,res,next) =>{
        res.send('get a single books')
    }
)

exports.booksGet = asyncHandler(
    (req,res,next) =>{
        res.send('get all books')
    }
)

exports.deleteBookGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented delete a book get')
    }
)

exports.bookUpdateGet = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a book get')
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



exports.bookPost = asyncHandler(
    (req,res,next) =>{
    
    }
)


exports.booksPost = asyncHandler(
    (req,res,next) =>{

    }
)

exports.deleteBookPost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented delete a book post')
    }
)

exports.updateBookPost = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a book post')
    }
)