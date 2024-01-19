const express = require('express')
const app = express()

// Connection database
const mondata = require('./db/db')
mondata()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


const AuthRouter = require('./router/AuthRouter')
app.use('/api',AuthRouter)

const converRouter = require('./router/conversationRouter')
app.use('/api',converRouter)


app.listen(5000,()=>{
    console.log('Listening at port 5000')
})