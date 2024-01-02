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
    },
    invoices: [
        {
            userID : {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            invoiceID : {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Invoice'
            }
        }
    ]
})

const Client = mongoose.model('clients' , clientSchema)

module.exports = Client