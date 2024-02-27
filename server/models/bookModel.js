const { application } = require('express')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//defining a schema
const schema = mongoose.Schema

const bookSchema = new schema({
    bookName: {type: String, required: true},
    bookAuthor: {type: String, required: true, minLenght: 4,},
    bookISBN: {type: String, maxLength: 10, minLenght: 10, unique: true, required: true,},
    bookPubDate: {type: String,},
    bookId: schema.Types.ObjectId
})

//compiling the model from schema
//the first argument = name of the collection that will be created in the db
//the second is the schema variable we created
const bookeModel = mongoose.model('book', bookSchema)

const mongoUrl = 
  'mongodb+srv://dansdana1999:07061071398a@cluster0.v1epfui.mongodb.net/local-library?retryWrites=true&w=majority'

//alt schema with validation and error messsages
const altBookSchema = new schema({
    bookName: {
        type: String,
        minLenght: [2,'Name too short'],
        maxLength: [30,'whew, thats a long name'],
        required: [true, 'Looks like your books got no name']
    },
    bookISBN: {
        type: String,
        maxLength: 10,
        minLenght: 10,
        required: [true,'A books gotta have an ISBN'],
        unique: true,
    },
    bookAuthor: {
        type: String,
        required: [true,'Author who?'],

    },
    bookSummary:{
        required: true,
        type: String,
        minLenght: [10, 'tell us more about this book'],
        maxLength: [300, 'wow there that is too much']
    },
    bookPubDate: {
        type: String,
    },
})

//virtual 
bookSchema.virtual('url').get(function(){
    return `/catalog/book/${this.bookName}`
})

const altBookModel = mongoose.model('books', altBookSchema);

//creating a new instance of the created model and adding a document
const wayOfKings = new altBookModel({
    bookName: 'Way Of kings',
    bookAuthor: 'Brandon Sanderson',
    bookPubDate: 1/1/2024,
    bookISBN: "1234567898"
})


module.exports = altBookModel


