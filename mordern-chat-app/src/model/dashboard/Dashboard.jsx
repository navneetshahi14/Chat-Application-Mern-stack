import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Friends from "../../Components/friends";
import Group from "../../Components/Group";
import Chat from "../../Components/Chat";
import Chatbox from "../../Components/Chatbox";


const Dashboard = ({
  isChat = true,
  isGroup = false,
  isFriend = false
}) => {

  const [class1, setClass1] = useState(`w-full`)
  const [class2, setClass2] = useState(`w-0`)

  const handleclick = ()=>{
    setClass1(`w-full`)
    setClass2(`w-0`)
  }

  const handleChatclick = () =>{
    setClass1(`w-0`)
    setClass2(`w-full`)
  }

  return (
  <>
  <div className="flex w-full ">
      <div className={` h-screen bg-gray-900 transition-[width] duration-100 ease-in-out ${class1} md:w-[30%]`}>
          <Navbar />
          {
            isChat &&  <Chat onclick={()=>handleChatclick()}/>
          }
          {
            isGroup && <Group />
          }
          {
            isFriend && <Friends />
          }
      </div>
      <div className={` h-screen w-[100%] bg-slate-900 transition-[width] duration-100 ease-in-out ${class2} md:w-[70%] `}>
          <Chatbox onclick={()=>handleclick()}/>
      </div>
  </div>
  </>
  )
};

export default Dashboard;
