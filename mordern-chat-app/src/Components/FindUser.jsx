import React from 'react'
import Avatar from '../assets/avatar-boy-svgrepo-com.svg'

const FindUser = ({
    name
}) => {
  return (
    <>
        <div className=' flex items-center  m-2 p-1 gap-x-5 cursor-pointer'>
            <img src={Avatar} alt="" width={40} />
            <div>
                <p className='text-lg font-bold text-orange-200'>{name}</p>
            </div>
            <i className='fa-solid fa-plus text-xl text-white ml-auto mr-2'></i>
        </div> 

    </>
  )
}

export default FindUser
