const User = require('../model/user')
const converId = require('../model/conversation')
const messages = require('../model/message')


// creating new conversation
const conversation = async(req,res) =>{
    try{

        const { senderId , receiverId } = req.body
        const NewConvers = new converId({ members: [senderId , receiverId]})
        await NewConvers.save()
        res.status(200).send('New Conversation Created')

    }catch(err){
        console.log(err.message)
    }
}

// getting message by userId 
const conversDisplay = async(req,res)=>{
    try{

        const userId = req.params.userId
        const conversation = await converId.find({ members : { $in : [userId] } })
        const conversationUserData = Promise.all(conversation.map(async(conversations)=>{
            const receiverId = conversations.members.find((member) => member !== userId )
            const user = await User.find(receiverId)
            return { user: { receiverId: user._id , email:user.email , fullName:user.fullName }, conversationId:conversations._id }
        }))

        res.status(200).send(await conversationUserData)
        
    }catch(err){
        console.log(err.message)
    }
}

// sending messages to your enemy/love_ones
const sendMessage = async(req,res) =>{
    try{

        const { conversationId, senderId, messagesend, receiverId=""} = req.body
        if(!conversationId || !senderId || !messagesend || !receiverId )return res.status(300).send('Please fill all the fields')

        if(conversationId === 'new' && receiverId){
            const newConvers = new converId({ memebers : [ senderId, receiverId ]})
            await newConvers.save()
            const newMessage = new messages({conversationId: newConvers._id, senderId:senderId , messagesend:messagesend })
            await newMessage.save()
        }

        const newMessage = new messages({ conversationId, senderId, messagesend })
        await newMessage.save()

        res.status(200).send('Message sent successfull')


    }catch(err){
        console.log(err.message)
    }
}

// fetching conversations 
const messageDisplay = async(req,res) =>{
    try {
        
        const checkMessages = async(conversationId) =>{
            const message = await messages.find({ conversationId })
            const messageUserData = Promise.all(message.map(async(mess)=>{
                const user = await User.findById(message.senderId)
                return {user: { id: user._id ,email: user.email ,fullName: user.fullName }, message: message.messagesend}
            }))
            res.status(200).json(await messageUserData)
        }

        const conversationId = req.params.conversationId
        if(conversationId === "new"){
            const checkConversation = await converId.find({members : { $all: [ req.query.senderId , req.query.receiverId ]}})
            if(checkConversation.length > 0){
                checkMessages(checkConversation[0]._id)
            }else{
                res.status(300).json([])
            }
        }else{
            checkMessages(conversationId)
        }


    } catch (error) {
        console.log(error.message)
    }
}

// getting users details 
const userdetails = async(req,res) =>{
    try{

        const userId = req.params.userId
        const userFind = await User.findById({_id:  { $ne : userId } })
        const userData = Promise.all(userFind.map((user)=>{
            return { user: { email:user.email, name: user.name , receiverId:user._id } }
        }))

        res.status(200).json(await userData)
    }catch(err){
        console.log(err.message)
    }
}


module.exports = {
    conversation,
    conversDisplay,
    sendMessage,
    messageDisplay,
    userdetails

}