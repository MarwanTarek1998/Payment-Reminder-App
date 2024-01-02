const mongoose = require('mongoose')
const Client = require('../Models/client')
const User = require('../Models/user')

module.exports = (req , res , next) =>{
    const userID = req.user._id
    User.findById(userID)
    .populate('clients')
    .then(user =>{
        console.log(user.clients)
    })
}