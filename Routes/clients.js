const clients = require('express').Router()

//Controllers
const addClient = require('../Controllers/addClient')
const getClients = require('../Controllers/getClients')
const getClientInfo = require('../Controllers/getClientInfo')

clients.post('/addClient' , addClient)
clients.get('/getClients' , getClients)
clients.get('/getClientInfo/:clientId' , getClientInfo)

module.exports = clients