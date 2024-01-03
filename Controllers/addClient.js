const mongoose = require('mongoose')
const Client = require('../Models/client')
const User = require('../Models/user')


module.exports = (req , res , next) => {

    const client = req.body

    User.findOne({email : req.user.email})
        .then((user) => {
            
            Client.findOne({email : client.email})
            .then((client) => {
                if (client){
                    
                    const index = user.clients.findIndex(id => {
                        return id.equals(client._id);
                    });

                    if (index !== -1){
                        res.statusCode = 400
                        res.setHeader('content-type' , 'aplication/json')
                        res.json({"errMsg" : 'This client is already in your clients'})
                    }else{
                        user.clients.push(client._id)
                        user.save()
                        .then((user) => {
                            res.statusCode = 200
                            res.setHeader('content-type' , "apllication/json")
                            res.json({"successMsg" : "The client has been added successfully"})
                        })
                        
                    }
                }else{
                    Client.create(req.body)
                    .then((client) => {

                        user.clients.push(client._id)
                        user.save()
                        .then((user) => {
                            res.statusCode = 200
                            res.setHeader('content-type' , "apllication/json")
                            res.json({"successMsg" : "The client has been added successfully"})
                        })

                    })            
                }
            })


        })

    
}