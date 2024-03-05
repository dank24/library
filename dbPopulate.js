const bookModel = require('./server/models/bookModel')
const authorModel = require('./server/models/authorModel')
const genreModel = require('./server/models/genreModel')
const bookIntModel = require('./server/models/bookInstanceModel')


let bookIndex = []
let authorIndex = []
let genreIndex = []
let bookInstIndex = []

function main() {

}

//functions to create and add new genres,authors and books

async function bookAdd(index, name, author, summary, isbn, pubDate) {
    let newBook = new bookModel({
        bookName: name,
        bookAuthor: author,
        bookSummary: summary,
        bookISBN: isbn,
        bookPubDate: pubDate,
    })
    
    await newBook.save()
    bookIndex[index] = newBook
    console.log(`Added Book ${name}, Written By ${author}`)
}

async function authorAdd(index, fName, lName, Dob, rating) {
    let newAuthor = {
        authorFirstName: fName,
        authorLastName: lName,
        authorDOB: Dob,
        authorRating, rating
    }

    let author = new authorModel()
    await author.save()
    authorIndex[index] = author
    console.log(`Added Author ${fName}, ${lName}`)
}

async function genreAdd(index, name, descritpion) {
    let newGenre = {
        genreName: name,
        genreDescription, descritpion,
    }

    const genre = new genreModel(newGenre)
    await genre.save()
    genreIndex[index] = genre
    console.log(`Added Genre ${name}`)
}

async function bookInstAdd(index, book, status, dueBack){
    let newBookInstance = {
        book: book,
        bookStatus: status,
        bookDueBack: dueBack,
    }
    const bookInstance = new bookIntModel(newBookInstance)
    await bookInstance.save()
    bookInstIndex[index] = bookInstance
    console.log(`Added Book Instance ${book}`)
}

//functions to 