const userRegisteration = require('express').Router()
const passport = require('passport');

// Controllers
const userSingUp = require('../Controllers/userSignUp')
const userLogin = require('../Controllers/userLogin')
const userActivation = require('../Controllers/userActivation')

userRegisteration.post('/signup' , userSingUp)
userRegisteration.post('/login', passport.authenticate('local') ,userLogin)
userRegisteration.post('/userActivation/:userId', userActivation)

module.exports = userRegisteration