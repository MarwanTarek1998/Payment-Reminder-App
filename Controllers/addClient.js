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
                        console.log('client is already exist in your network')
                    }else{
                        user.clients.push(client._id)
                        user.save()
                        .then((user) => {
                            console.log(user)
                        })
                        
                    }
                }else{
                    Client.create(req.body)
                    .then((client) => {

                        user.clients.push(client._id)
                        user.save()
                        .then((user) => {
                            console.log(user)
                        })

                    })            
                }
            })


        })

    
}