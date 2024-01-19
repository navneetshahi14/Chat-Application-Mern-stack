const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const securePassword = async (password) =>{
    try{

        const passwordHash = await bcrypt.hash(password,10);
        return passwordHash
        
    }catch(err){
        console.log(err.message)
    }
}

// registration
const newUser = async(req,res) =>{
    try {

        const {name , email } = req.body
        const password = await securePassword(req.body.password)

        

        if(!name || !email || !password ){
            res.status(400).send("Please fill all the fields")
        }else{
            const user = await User.findOne({ email })
            if(user){
                res.status(200).send('User Exist')
            }else{
                const registerUser = new User({
                    name:name,
                    email:email,
                    password:password
                })

                await registerUser.save()
                res.status(200).send('User registered successfully')
            }
        }
        
    } catch (error) {
        console.log(error.message)
    }
}


// login 
const login = async(req,res) =>{
    try {
        
        const {email,password} = req.body
        const findUser = await User.findOne({ email })
        
        if(!findUser){
            res.status('300').send('Wrong credentials Or User might not exist ')
        }else{
            const comparePassword = await bcrypt.compare(password,findUser.password)
            if(!comparePassword){
                res.status(300).send('Wrong credentials Or User might not exist')
            }else{
                const payload={
                    userId:findUser._id,
                    email:findUser.email
                }
                const JWT_SECRET_KEY = process.env.JWT_SECERT_KEY || "RiteshkesahaibhaiGalliKamdeyrmc"
                jwt.sign(payload,JWT_SECRET_KEY,{expiresIn:86400},async(err,token)=>{
                    await findUser.updateOne({_id:findUser._id},{
                        $set:{ token }
                    })
                    await findUser.save()
                    return res.status(200).json({ userFind: {id:findUser._id, email:findUser.email, fullName:findUser.fullName}, token: token })
                })
            }
        }
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    newUser,
    login
}