const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        default:""
    },
    otp:{
        type:String,
        default:""
    },
    profilepic:{
        type:String,
        default:""
    }
})

const user = mongoose.model('user',UserSchema)

module.exports = user