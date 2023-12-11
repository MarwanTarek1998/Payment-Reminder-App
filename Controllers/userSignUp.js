const User = require('../Models/user')
const bcrypt = require('bcrypt')
const {sendActivationMail} = require("../Email Sender/emailController")

module.exports = (req , res , next) => {
    bcrypt.hash(req.body.password , 10)
    .then(hashedPassword => {
        req.body.password = hashedPassword
    })
    .then(() =>{
        User.create(req.body)
        .then(user => {
            res.statusCode = 200
            res.setHeader("content-type" , "application/json")
            res.json({"description" : "User has been registered successfully"})
            sendActivationMail(user.email , user._id)
        })
        .catch(error => {
            res.statusCode = 400
            res.setHeader("content-type" , "application/json")
            res.json({"errorMsg" : "Sorry, this email has already been registered"})
        })
    })
    .catch(error => console.log({error}))
}