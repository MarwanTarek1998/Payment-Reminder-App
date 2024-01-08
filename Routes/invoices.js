const invoices = require('express').Router()

const addInvoice = require('../Controllers/addInvoice')
const getInvoices = require('../Controllers/getInvoices')
const updateInvoice = require('../Controllers/updateInvoice')
const closeInvoice = require('../Controllers/closeInvoice')

invoices.post('/addInvoice' , addInvoice)
invoices.get('/getInvoices/:clientID' , getInvoices)
invoices.put('/updateInvoice' , updateInvoice)
invoices.put('/closeInvoice' , closeInvoice)

module.exports = invoices