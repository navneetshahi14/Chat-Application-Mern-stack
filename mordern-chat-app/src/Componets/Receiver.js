import React from 'react'
import Avatar from '../assets/avatar-boy-svgrepo-com.svg'
import Icon from './Icon'


const Receiver = ({
  name = ""
}) => {
  return (
    <>
        <div className='w-[98%] py-6 mt-2 rounded-xl bg-[#fff] flex items-center '>
            <img src={Avatar} alt="" width={50} className='mx-2 cursor-pointer' />
            <div className={`flex flex-col mr-auto ml-5`}>
                <p className='text-md font-bold'>{name}</p>
                <p className='text-xs text-grey-500]'>online</p>
            </div>
            <div>
                <Icon icon={`phone`} classname={`mr-5 ml-auto cursor-pointer`} />
                <Icon icon={`video`} classname={`mr-5 ml-auto cursor-pointer`} />
            </div>
        </div> 
    </>
  )
}

export default Receiver
