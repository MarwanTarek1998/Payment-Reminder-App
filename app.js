// Modules
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy
const cors = require('cors')
const authenticate = require('./Authentication/PassportAuth.js')
const checkAuthenticated = require('./Authentication/checkAuthenticated.js')
const job = require('./Scheduled Tasks/sendReminderEmail.js')

// Configurations
require('dotenv').config()

// Routes
const userRegisteration = require('./Routes/userRegisteration.js')
const clients = require('./Routes/clients.js')
const invoices = require('./Routes/invoices.js')

// Functions
const {connectToDB} = require('./Database/DBController.js')

//create app
const app = express()

//Connect To DB
connectToDB(process.env.DBUrl)

//parse incomin requests
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors({
    origin : 'https://payment-reminder-app-frontend.onrender.com',
    credentials: true
}))

//Middleware
app.use(session({
    secret : process.env.SESSION_SECRET,
    cookie: {
        secure: true,
        sameSite: 'None',
      }
}))

app.use(passport.initialize())  // init passport on every route call
app.use(passport.session())    //allow passport to use "express-session"

/** Routes */
app.use('/userRegisteration' , userRegisteration)
app.use('/clients' , clients)
app.use('/invoices' , invoices)

// Run the server
app.listen(process.env.PORT , () =>{
    console.log(`App is listening to port ${process.env.PORT}`);
})


// Scheduled Tasks
job;