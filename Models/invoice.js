const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceSchema = new Schema({
    subject:{
        type: String,
        required : [true , 'Please provide the invoice subject']
    },
    amount:{
        type: Number,
        required : [true , 'Please provide the invoice amount']
    },
    state: {
        type: String,
        required : [true],
        default : 'Active'
    },
    dueDate:{
        type : String,
        required: [true , 'Please provide the invoice due date']
    }
})

const Invoice = mongoose.model('Invoice' , invoiceSchema)

module.exports = Invoice