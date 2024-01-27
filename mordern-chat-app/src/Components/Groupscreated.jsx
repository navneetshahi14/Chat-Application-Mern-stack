import React from 'react'
import Avatar from '../assets/avatar-boy-svgrepo-com.svg'

const Groupscreated = ({
    groupname,

}) => {
  return (
    <>
     <div className=' flex  m-2 p-1 gap-x-5 cursor-pointer'>
            <img src={Avatar} alt="" width={40} />
            <div>
                <p className='text-lg font-bold text-orange-200'>{groupname}</p>
                {/* <p className='text-sm font-medium text-gray-500'>{last}</p> */}
            </div>
        </div>  
    </>
  )
}

export default Groupscreated
