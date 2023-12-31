const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    firstName: {
        type: String,
        required: [true , "Please Provide a First Name"]
    },
    lastName: {
        type: String,
        required: [true , "Please Provide a Last Name"]
    },
    email: {
        type: String,
        required: [true , "Please provide an Email"],
        unique: true
    }
})

const Client = mongoose.model('client' , clientSchema)

module.exports = Client