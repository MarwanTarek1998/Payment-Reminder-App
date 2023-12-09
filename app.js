// Modules
const express = require('express')
const cors = require('cors')

// Configurations
require('dotenv').config()

// Routes
const userRegisteration = require('./Routes/userRegisteration.js')

// Functions
const {connectToDB} = require('./Database/DBController.js')

//create app
const app = express()

//Connect To DB
connectToDB(process.env.DBUrl)

//parse incomin requests
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

/** Routes */
app.use('/userRegisteration' , userRegisteration)

// Run the server
app.listen(process.env.PORT , () =>{
    console.log(`App is listening to port ${process.env.PORT}`);
})