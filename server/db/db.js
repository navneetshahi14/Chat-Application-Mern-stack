const mongoose = require('mongoose')
const mongooseUri = "mongodb://0.0.0.0:27017/NChat"


const ConnectMongoose = () =>{
    mongoose.connect(mongooseUri)
    let db = mongoose.connection
    db.on('error',()=>console.log(error.message))
    db.once('open',()=>console.log('Database connected'))
}

module.exports = ConnectMongoose