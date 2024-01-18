import React from 'react'
// import Messagebox from './messagebox'
import Chats from './Chats'

const Chatbox = () => {
  return (
    <>
     <div className='bg-white h-[70%] w-[98%] mt-2 rounded-lg '>
        {/* <Messagebox /> */}
        <Chats classname='mr-auto bg-gray-400' message='navneet shahi naam hai mera!!'/>
        <Chats classname='ml-auto bg-orange-500' message='saksham shahi naam hai mera' />
    </div> 
    </>
  )
}

export default Chatbox
