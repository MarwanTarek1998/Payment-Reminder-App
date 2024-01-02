const mongoose = require('mongoose')
const Client = require('../Models/client')
const User = require('../Models/user')


module.exports = (req , res , next) => {

    User.findOne({email : req.user.email})
        .then((user) => {
            
            Client.findOne({email: req.body.email})
            .then((client) => {

                if (client){
                    console.log(user.clients.indexOf(client.email))
                    if (user.clients.indexOf(client.email) !== -1){
                        console.log('client is already exist in your network')
                    }else{
                        user.clients.push(client.email)
                        user.save()
                        .then((user) => {
                            console.log(user)
                        })
                        
                    }
                }else{
                    Client.create(req.body)
                    .then((client) => {

                        user.clients.push(client.email)
                        user.save()
                        .then((user) => {
                            console.log(user)
                        })

                    })            
                }
            })


        })

    
}