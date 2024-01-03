const Invoice = require('../Models/invoice')
const Client = require('../Models/client')

module.exports = (req , res ,next)=>{
    const clientID = req.body.clientID
    const userID = req.user._id
    
    Invoice.create(req.body.invoice)
    .then(invoice =>{
        Client.findById(clientID)
        .then(client =>{
            const invoiceObj = {
                userID : userID,
                invoiceID : invoice._id
            }

            client.invoices.push(invoiceObj)
            client.save()
            .then(client =>{
                res.status = 200
                res.end()
            })
        })
    })
    .catch(error => console.log({error}))

    
}