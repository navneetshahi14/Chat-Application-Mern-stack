const express = require('express')
const AuthRouter = express()

const bodyParser = require('body-parser')
AuthRouter.use(bodyParser.json())
AuthRouter.use(bodyParser.urlencoded({extended:true}))

const AuthController = require('../controller/authcontroller')


// Registeration
AuthRouter.post('/register',AuthController.newUser)

// Login
AuthRouter.post('/login',AuthController.login)


module.exports = AuthRouter