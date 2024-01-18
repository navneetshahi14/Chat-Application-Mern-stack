import React, { useState } from 'react'
import Navbar from '../../Componets/Navbar'
import SearchBar from '../../Componets/SearchBar'
import Contact from '../../Componets/Contact'
import Receiver from '../../Componets/Receiver'
import Chatbox from '../../Componets/Chatbox'
import Messagebox from '../../Componets/messagebox'
// import Switch from "react-switch";



const Dashboard = () => {

  const [show,setShow ] = useState("hidden")

  const chatbox = () =>{
    try{
      if(show === 'hidden'){
        setShow('flex')
      }else{
        setShow('hidden')
      }
    }catch(err){
      console.log(err.message)
    }
  }

  return (
    <>
        <div className=' flex  h-[100%] w-[100%]'>
            <div className=' flex items-center h-screen w-[35%] '>
               <Navbar />
               <div className=' h-[100%] w-[85%]'>
                <SearchBar />
                <Contact onclick={()=>chatbox()} />
               </div>
            </div>

            <div className={`h-screen ${show} flex-col w-[65%] items-center`}>
              <Receiver />
              {/* <Switch onChange={()=>console.log('hello')}/> */}
              <Chatbox />
              <Messagebox />
            </div>
        </div>
    </>
  )
}

export default Dashboard
