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
    async (req,res,next) =>{
        const allBooks = await bookModel.find({}, "bookName bookAuthor")
        .sort({bookName: 1})
        .populate("bookAuthor")
        .exec();
 
        res.render('pages/list/bookList', {
         title: "Book List",
         bookList: allBooks
        })
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
            let name = bName.toLowerCase()
            let author= bAuthor.toLowerCase()
            let isbn = bIsbn.toLowerCase()
            let summary = bSummary.toLowerCase()
            let pubDate = bPubDate.toLowerCase()
           
        let book = await bookModel.findOne({bookName: name}) 

        if(book) {
            res.status(400).json('this book is already in the database')
        }  
   
        else if(!book) {
            let newBook = new bookModel({
                bookName: name,
                bookAuthor: author,
                bookISBN: isbn,
                bookSummary: summary,
                bookPubDate: pubDate
            })

            await newBook.save()
            res.status(200).json(`New Book Added To The Library :${bName}`)
            
        }

    }
)



exports.bookPost = asyncHandler(
    (req,res,next) =>{
        
    }
)


exports.booksPost = asyncHandler(
   async (req,res,next) =>{

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