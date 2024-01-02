const Invoice = require('../Models/invoice')

module.exports = (req , res ,next)=>{
    const clientID = req.body.clientID
    const userID = req.user._id
    
    Invoice.create(req.invoice)
    .then(invoice =>{
        
    })
}