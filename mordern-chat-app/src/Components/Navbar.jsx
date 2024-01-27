import React from 'react'
// import Avatar from '../assets/avatar-boy-svgrepo-com.svg'

const Navbar = () => {
  return (
    <>
      <nav className='bg-slate-700 shadow-sm h-[13.5%]'>
        <ul className='flex justify-between py-2 px-5'>
            <li className='cursor-pointer text-xl font-semibold'>NChat</li>
            <li className='cursor-pointer'><i className='fa-solid fa-camera'></i></li>
        </ul>
        <ul className='flex justify-between py-2 px-5'>
            <li className='cursor-pointer text-lime-600 border-b-4 border-red-900 pb-1 mb-[-9px] font-semibold '>Chats</li>
            <li className='cursor-pointer font-semibold '>Groups</li>
            <li className='cursor-pointer font-semibold '>Find Friends</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
