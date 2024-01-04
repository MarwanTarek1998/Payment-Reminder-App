const invoices = require('express').Router()

const addInvoice = require('../Controllers/addInvoice')
const getInvoices = require('../Controllers/getInvoices')
const updateInvoice = require('../Controllers/updateInvoice')

invoices.post('/addInvoice' , addInvoice)
invoices.get('/getInvoices/:clientID' , getInvoices)
invoices.put('/updateInvoice' , updateInvoice)

module.exports = invoices