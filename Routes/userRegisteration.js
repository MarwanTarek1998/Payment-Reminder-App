const userRegisteration = require('express').Router()
const passport = require('passport');

// Controllers
const userSingUp = require('../Controllers/userSignUp')
const userLogin = require('../Controllers/userLogin')

userRegisteration.post('/signup' , userSingUp)
userRegisteration.post('/login', passport.authenticate('local') ,userLogin)

module.exports = userRegisteration