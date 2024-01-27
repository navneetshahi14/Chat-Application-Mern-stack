import React, { useContext } from 'react'
import Avatar from '../assets/avatar-boy-svgrepo-com.svg'
import ChatContext from '../Context/ChatContext'


const User = ({
    name = 'navneet',
    last = 'Last message',
    onclick = () =>{},
}) => {
  const context = useContext(ChatContext)
  const { setChatData } = context

  const handleclick = () =>{
    onclick()
    setChatData(name)
  }
  return (


    <>
        <div className=' flex  m-2 p-1 gap-x-5 cursor-pointer' onClick={()=>handleclick()}>
            <img src={Avatar} alt="" width={40} />
            <div>
                <p className='text-lg font-bold text-orange-200'>{name}</p>
                <p className='text-sm font-medium text-gray-500'>{last}</p>
            </div>
        </div> 
    </>
  )
}

export default User
