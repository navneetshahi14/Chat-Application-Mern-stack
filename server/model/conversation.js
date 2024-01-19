const mongoose = require('mongoose')

const ConversationIdSchema = new mongoose.Schema({
    members:{
        type:Array,
        required:true
    }
})

const conversationId = mongoose.model('conversation',ConversationIdSchema)

module.exports = conversationId