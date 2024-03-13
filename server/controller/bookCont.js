const bookModel = require('../models/bookModel')
const authorModel = require('../models/authorModel')
const genreModel = require('../models/genreModel')
const bookInstanceModel = require('../models/bookInstanceModel')

const asyncHandler = require('express-async-handler')


//get request

exports.bookCreateGet = asyncHandler(
    (req,res,next) =>{
        res.render('pages/bookCreate')
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


exports.bookCreatePost = asyncHandler(
    async (req,res,next) =>{

        const {bName, bAuthor, bIsbn, bSummary, bPubDate } = req.body
            let lBNAme = bName.toLowerCase()
           
        let book = await bookModel.findOne({bName}) 
        
        if(!book) {
            let newBook = new bookModel({
                bookName: bName,
                bookAuthor: bAuthor,
                bookISBN: bIsbn,
                bookSummary: bSummary,
                bookPubDate: bPubDate
            })
            res.status(200).json(`New Book Added To The Library :${lBNAme}`)

            await newBook.save()
        }

        if(book) {
            res.status(400).json('this book is already in the database')
        }  


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