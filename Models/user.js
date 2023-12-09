const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true , "Please Provide a First Name"]
    },
    lastName: {
        type: String,
        required: [true , "Please Provide a Last Name"]
    },
    password:{
        type: String,
        required: [true , "Please provide a Password"]
    },
    email: {
        type: String,
        required: [true , "Please provide an Email"],
        unique: true
    },
    isActive:{
        type : Boolean,
        default : false
    }
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User' , userSchema)

module.exports = User