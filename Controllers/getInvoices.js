const Client= require('../Models/client')

module.exports = (req , res , next)=>{
    const clientID = req.params.clientID
    const userID = req.user._id

    Client.findById(clientID)
    .populate('invoices.invoiceID')
    .then(client =>{
        const invoices = client.invoices.filter(invoice => invoice.userID.equals(userID))
        
        res.statusCode = 200
        res.setHeader('content-type' , "apllication/json")
        res.json(invoices)
    })
    .catch(error => console.log({error}))
}   