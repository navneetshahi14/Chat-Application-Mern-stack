import React, { useState } from 'react'
import Icon from './Icon'
import Iconregular from './Iconregular'

const Messagebox = () => {
    const [message,setMessage] = useState(null)

    const handleMessage=(e)=>{
        try{
            const Mess = e.target.value
            setMessage(Mess)

        }catch(err){
            console.log(err.message)
        }
    }

  return (
    <>
      <div className={` flex w-[98%] h-[8%] mt-2 justify-center items-center  `}>

        <div className={`flex w-[88%] justify-center items-center  p-3 bg-white  rounded-xl `}>
            <Icon icon={`paperclip`} classname={`mx-5 cursor-pointer`} />
            <input type="text" placeholder='message' value={message} onChange={(e)=>handleMessage(e)} className='w-[95%] text-xl border-none outline-none' />
            <Iconregular icon={`face-smile`} classname={`mx-5 cursor-pointer text-lg`} />
        </div>
        <div className={`w-auto h-auto rounded-xl ml-3 px-3 py-3 cursor-pointer bg-white`}>
            <Icon icon={`microphone`} />
        </div>

        <div className={`w-auto h-auto rounded-xl ml-3 px-3 py-3 cursor-pointer bg-orange-500 `}>
            <Icon icon={`paper-plane`} />
        </div>
        
      </div>
    </>
  )
}

export default Messagebox
