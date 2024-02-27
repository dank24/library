//refernce to copy of a book which may be borrowed by a user

const mongoose = require('mongoose')

const schema = mongoose.Schema;

const bookInstanceSchema = new schema({
    book: {
        type: String,
        required: true,
    },
    bookStatus: {
        type: String,
        enum: ['Available','Unavailable','Maintenance','Loaned','Reserved'],
        default: ['Maintenance'],
        required: true
    },
    bookDueBack: {
        type: Date,
        default: Date.now
    }
})

//virtual
bookInstanceSchema.virtual('url').get(function(){
    return `/catalog/bookinstance/${this._id}`
})

const bookInstanceModel = mongoose.model('bookInstance', bookInstanceSchema)

module.exports = bookInstanceModel;