const clients = require('express').Router()

//Controllers
const addClient = require('../Controllers/addClient')
const getClients = require('../Controllers/getClients')

clients.post('/addClient' , addClient)
clients.get('/getClients' , getClients)

module.exports = clients