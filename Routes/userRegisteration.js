const userRegisteration = require('express').Router()
const passport = require('passport');

// Controllers
const userSingUp = require('../Controllers/userSignUp')
const userLogin = require('../Controllers/userLogin')
const userActivation = require('../Controllers/userActivation')
const checkAuthenticated = require('../Authentication/checkAuthenticated')
const userLogout = require('../Controllers/userLogout')

userRegisteration.post('/signup' , userSingUp)
userRegisteration.post('/login', passport.authenticate('local') ,userLogin)
userRegisteration.post('/userActivation/:userId', userActivation)
userRegisteration.post('/isAuthenticated', checkAuthenticated)
userRegisteration.post('/logout', userLogout)

module.exports = userRegisteration