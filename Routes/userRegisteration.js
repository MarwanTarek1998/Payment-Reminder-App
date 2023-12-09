const userRegisteration = require('express').Router()

// Controllers
const userSingUp = require('../Controllers/userSignUp')
const userLogin = require('../Controllers/userLogin')

userRegisteration.post('/signup' , userSingUp)
userRegisteration.post('/login' , userLogin)

module.exports = userRegisteration