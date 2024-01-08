const Invoice = require('../Models/invoice')
const Client = require('../Models/client')
const {sendInvoiceEmail} = require('../Email Sender/emailController')

module.exports = (req , res ,next)=>{
    const userID = req.user._id
    const userName = req.user.firstName + " " + req.user.lastName
    
    Invoice.create(req.body)
    .then(invoice =>{
        Client.findOne({email : invoice.clientEmail})
        .then(client =>{
            const invoiceObj = {
                userID : userID,
                invoiceID : invoice._id
            }

            const invoiceEmailObj = {
                clientEmail : client.email,
                userName : userName,
                operation : "added a new",
                invoiceDetails : invoice
            }

            client.invoices.push(invoiceObj)
            client.save()
            .then(client =>{
                res.status = 200
                res.end()
                //sendInvoiceEmail(invoiceEmailObj)
            })
        })
    })
    .catch(error => console.log({error}))

    
}