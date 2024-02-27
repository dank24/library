const mongoose = require('mongoose')

const schema = mongoose.Schema 

const genreSchema = new schema({
    genreName: {
        type: String,
        required: true,
        maxLength: 100,
        minLength: 3
    },
    genreDescription: {
        type: String,
        minLength: 5,
    }
})

const genreModel = mongoose.model('genres', genreSchema);

genreSchema.virtual('url').get(function(){
    return `/catalog/genre/${this.genreName}`
})

module.exports = genreModel