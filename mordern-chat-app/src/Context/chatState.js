import React,{useState} from 'react'
import ChatContext from './ChatContext'

const ChatState = ({children}) => {
    const [chatData,setChatData] = useState(``)
  return (
    <ChatContext.Provider value={ {chatData,setChatData} }>
        {children}
    </ChatContext.Provider>
  )
}

export default ChatState
