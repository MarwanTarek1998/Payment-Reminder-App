const invoices = require('express').Router()

const addInvoice = require('../Controllers/addInvoice')

invoices.post('/addInvoice' , addInvoice)

module.exports = invoices