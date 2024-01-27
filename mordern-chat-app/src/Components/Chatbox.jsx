import React, { useContext } from 'react'
import Avatar from '../assets/avatar-boy-svgrepo-com.svg'
import ChatContext from '../Context/ChatContext'

const Chatbox = ({
    onclick = () =>{},
}) => {

    const context = useContext(ChatContext)
    const { chatData, setChatData } = context

    const handleclick =() =>{
        onclick()
        setChatData(``)
    }
  return (
    <>
    <div className='flex flex-col w-full h-screen overflow-hidden' >


        <div className='h-[70px] w-full bg-slate-700 flex items-center' >
            <i className='fa-solid fa-arrow-left mx-[5px] cursor-pointer' onClick={()=>handleclick()}></i>
            <img src={Avatar} alt="" width={40} className='mx-4' />
            <p className='text-xl font-bold'>{chatData}</p>
            <div className='ml-auto mr-3'>
                <i className='fa-solid fa-camera mx-2 cursor-pointer'></i>
                <i className='fa-solid fa-video mx-2 cursor-pointer'></i>
            </div>
        </div>


        <div className='max-h-[700px] w-full flex flex-col overflow-y-auto '>

            <div className='max-w-[50%] bg-slate-700 m-3 p-2 rounded-lg mr-auto rounded-br-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className='max-w-[50%] bg-slate-700 m-3 p-2 rounded-lg ml-auto rounded-tl-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className='max-w-[50%] bg-slate-700 m-3 p-2 rounded-lg mr-auto rounded-br-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className='max-w-[50%] bg-slate-700 m-3 p-2 rounded-lg ml-auto rounded-tl-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className='max-w-[50%] bg-slate-700 m-3 p-2 rounded-lg mr-auto rounded-br-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className='max-w-[50%] bg-slate-700 m-3 p-2 rounded-lg ml-auto rounded-tl-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className='max-w-[50%] bg-slate-700 m-3 p-2 rounded-lg mr-auto rounded-br-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className='max-w-[50%] bg-slate-700 m-3 p-2 rounded-lg ml-auto rounded-tl-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

        </div>


        <div className='max-h-[80px] py-2  w-full flex items-center justify-center border-t-[1px] '>
            <i className='fa-solid fa-paperclip ml-1 text-white text-xl font-normal cursor-pointer'></i>
            <input type="text" className='w-[80%] bg-slate-700 ml-[10px] p-2 outline-none border-none rounded-xl  ' placeholder='Message' />
            <i className='fa-solid fa-microphone mx-2 text-white text-xl font-normal cursor-pointer '></i>
            <i className='fa-solid fa-paper-plane mx-2 text-white text-xl font-normal cursor-pointer '></i>
        </div>


    </div>
    </>
  )
}

export default Chatbox
