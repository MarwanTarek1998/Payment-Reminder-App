const nodeCron = require('node-cron')
const Invoice = require('../Models/invoice')
const {sendInvoiceEmail} = require('../Email Sender/emailController')

const getAllInvoices = () => {
    
    const date = new Date().toDateString()
    
    Invoice.find({})
    .then((invoices) => {
        invoices.map((invoice) => {
            if (invoice.dueDate === date) {
                let invoiceEmailObj = {
                    opertation: 'remind you that this day is the last day for this ',
                    invoiceDetails : invoice
                }

                sendInvoiceEmail(invoiceEmailObj)
            }
        })
    })

}

const job = nodeCron.schedule('00 24 19 * * *' , getAllInvoices)

module.exports ={
    job,
}