import React, { useContext, useState } from 'react'
import Users from './Users'
import Chatcontext from '../Context/ChatContext'

const NewUser = ({
    contact
}) => {
   // eslint-disable-next-line
  const [users , setUsers] = useState()

  const context = useContext(Chatcontext)
  const { createNewConversation } = context
  return (
    <>
      <div className={`h-[80%] w-[98%] mt-2 rounded-lg bg-white flex flex-col items-center overflow-auto`}>
            {
              (contact.length>0)?
                contact.map((con)=>{
                    return(
                      <Users name={con?.user?.name} click={()=>createNewConversation(con?.user?.receiverId)}/>
                    )
                }) : <div className="text-center text-lg font-semibold mt-24">No Conversation</div>
            }
        </div> 
    </>
  )
}

export default NewUser
