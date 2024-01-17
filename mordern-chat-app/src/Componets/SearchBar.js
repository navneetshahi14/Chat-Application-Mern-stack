import React from 'react'
import Icon from './Icon'

const SearchBar = () => {
  return (
    <>
    <div className='py-7 px-5 w-[98%] mt-2 bg-white rounded-xl flex justify-center items-center '>
        <p className='pr-2 text-lg font-semibold'>Chat</p>
        <div className='bg-white flex justify-center items-center p-2 rounded-xl border-[1px] border-black'>
            <input type="text" placeholder='Search' className='bg-transparent border-0 outline-none ' />
            <Icon icon={`search`} classname={`cursor-pointer`} />
        </div>
        <Icon icon={`plus`} classname={`bg-orange-500 p-2 ml-2 rounded-full cursor-pointer text-white`} />
    </div>
    </>
  )
}

export default SearchBar
