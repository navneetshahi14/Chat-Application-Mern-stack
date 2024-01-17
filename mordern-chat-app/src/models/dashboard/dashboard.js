import React from 'react'
import Navbar from '../../Componets/Navbar'
import SearchBar from '../../Componets/SearchBar'
import Contact from '../../Componets/Contact'
import Receiver from '../../Componets/Receiver'


const Dashboard = () => {
  return (
    <>
        <div className=' flex  h-[100%] w-[100%]'>
            <div className=' flex items-center h-screen w-[35%] '>
               <Navbar />
               <div className=' h-[100%] w-[85%]'>
                <SearchBar />
                <Contact />
               </div>
            </div>

            <div className='h-screen flex flex-col w-[65%] items-center '>
              <Receiver />
            </div>
        </div>
    </>
  )
}

export default Dashboard
