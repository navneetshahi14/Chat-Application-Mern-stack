import React from 'react'

const Chats = ({
    classname = "",
    message = ""
}) => {
  return (
    <>
        <div className={`w-auto h-auto min-w-[10%] max-w-[40%] m-2 py-2  px-[10px] rounded-md rounded-br-none ${classname}`}>
            <p className='ml-auto'>{!message ? "hello World" : message}</p>
        </div>
    </>
  )
}

export default Chats
