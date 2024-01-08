const Client = require('../Models/client')

module.exports = (req , res , next) =>{
    
    Client.findById(req.params.clientId)
    .then(client =>{
        res.statusCode = 200
        res.setHeader('content-type' , 'application/json')
        res.json(client)
    })
}