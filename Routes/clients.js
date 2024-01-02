const clients = require('express').Router()

//Controllers
const addClient = require('../Controllers/addClient')
const getClient = require

clients.post('/addClient' , addClient)

module.exports = clients