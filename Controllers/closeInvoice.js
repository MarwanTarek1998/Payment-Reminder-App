const Invoice = require('../Models/invoice')
const {sendInvoiceEmail} = require('../Email Sender/emailController')

module.exports = (req , res , next) =>{
    
    Invoice.findByIdAndUpdate(req.body.invoiceId , {$set: req.body.invoiceInfo} , {new: true})
    .then((invoice) => {

        res.statusCode = 200
        res.end()

    })

}