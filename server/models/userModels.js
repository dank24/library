const mongooose = require('mongoose')

const schema = mongooose.Schema()

const userSchema = new schema({
    userName: {
        type: String,
        minLength: [3, "Username too short"],
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    }
})

const userModel = mongooose.model('users', userSchema)

module.exports = userModel