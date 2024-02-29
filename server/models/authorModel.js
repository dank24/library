const mongoose = require('mongoose')

const schema = mongoose.Schema;

const authorSchema = new schema({
    authorFirstName: {
        type: String,
        required: true,
        maxLenght: 200,
        minLenghth: 2,
    },
    authorLastName: {
        type: String,
        required: true,
        maxLenght: 200,
        minLenght: 2
    },
    authorDOB: {
        type: String,
    },
    authorRating: {
        type: Number,
        min: 1,
        max: 5,
    }
})

//virtual for authorsFullname 
//virtuals are gotten but not sent to the database they are for our own use
authorSchema.virtual('url').get(function(){
    let fullname = ''
    if(this.authorFirstName && this.authorLastName){
        fullname = `${this.authorFirstName} ${this.authorLastName}`
    }
    return (
        `/catalog/author/${this.fullname}`
    )
})

authorSchema.virtual('id').get(function(){
    return `_id: ${this._id} Author Name: ${this.authorFirstName}`
})

const authorModel = mongoose.model('authors', authorSchema)

module.exports = authorModel