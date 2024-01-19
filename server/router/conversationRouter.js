const express = require('express')
const converRouter = express()

const bodyParser = require('body-parser')
converRouter.use(bodyParser.json())
converRouter.use(bodyParser.urlencoded({extended:true}))


const converController = require('../controller/converController')

// creating new conversation
converRouter.post('/conversation',converController.conversation)

// displaying new conversation
converRouter.get('/conversation/:userId',converController.conversDisplay)

// sending message
converRouter.post('/message',converController.sendMessage)

// message display
converRouter.get('/message/:conversationId',converController.conversDisplay)

// user details fetch
converRouter.get('/user/:userId',converController.userdetails)



module.exports = converRouter