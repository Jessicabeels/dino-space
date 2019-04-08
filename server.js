const express = require('express')
const app = express()
require('dotenv').config()
//this is setting the ability to use an .env file for private environment variables (SECRET)
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7100


//Middlewares for every request
app.use(express.json())
app.use(morgan('dev'))


//DB Connect 
mongoose.connect('mongodb://localhost:27017/dino-space', {"usedNewUrlParser": true}, () => {
    console.log("[o] Connected to the DB")
})

//Security Checkpoint - checking to see if the secret in the JWT matches our env secret 
app.use("/api", expressJwt({secret: process.env.SECRET})) //req.user

//Routes
app.use("/auth", require('./routes/authRoutes.js'))
app.use("/scores", require('./routes/scoreRoutes.js'))



//Global Server Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//Server setup
app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})

