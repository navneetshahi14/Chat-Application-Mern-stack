import React from 'react'
import Avatar from '../assets/avatar-boy-svgrepo-com.svg'

const Users = ({
    name="",
    click= () =>{}
}) => {
  return (
    <>
      <div className={`w-[95%] h-[10%]  mt-5 p-5 flex justify-center items-center border-b-[1px] cursor-pointer border-b-gray-500 mb-4  `} onClick={()=>click()} >
        <img src={Avatar} alt="" width={40}  />
        <div className={`flex flex-col mr-auto ml-5`}>
            <p className='text-md font-bold'>{name}</p>
            <p className='text-xs text-grey-500]'>Lorem ipsum dolor sit.</p>
        </div>

      </div>
    </>
  )
}

export default Users
