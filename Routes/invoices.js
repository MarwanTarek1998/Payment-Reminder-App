const invoices = require('express').Router()

const addInvoice = require('../Controllers/addInvoice')
const getInvoices = require('../Controllers/getInvoices')

invoices.post('/addInvoice' , addInvoice)
invoices.get('/getInvoices/:clientID' , getInvoices)

module.exports = invoices