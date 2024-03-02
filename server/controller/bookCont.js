const bookModel = require('../models/bookModel')
const authorModel = require('../models/authorModel')
const genreModel = require('../models/genreModel')
const bookInstanceModel = require('../models/bookInstanceModel')

const asyncHandler = require('express-async-handler')


//get request
exports.index = asyncHandler(
   async (req,res,next) =>{
      let [
        bookNum,
        bookInstanceNum,
        numAvailableInstances,
        authorNums,
        genreNums,
      ] = await Promise.all([
        bookModel.countDocuments({}).exec,
        bookInstanceModel.countDocuments({}).exec(),
        bookInstanceModel.countDocuments({bookStatus: 'Available'}).exec(),
        authorModel.countDocuments({}).exec(),
        genreModel.countDocuments({}).exec()
      ])
      res.render('index', {
        title: 'Local Library',
        bookCount: bookNum,
        bookInstanceCount: bookInstanceNum,
        availableBookInstance: numAvailableInstances,
        authorCount: authorNums,
        genreCount: genreNums,
      })

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