import React, { useContext } from 'react'
import Users from './Users'
import Chatcontext from '../Context/ChatContext'

const Contact = ({
  onclick=()=>{},
}) => {

  const context = useContext(Chatcontext)
  const { conver } = context

  return (
    <>
        <div className={`h-[80%] w-[98%] mt-2 rounded-lg bg-white flex flex-col items-center overflow-auto`}>
            {
              conver.length > 0 ?
                conver.map(({user})=>{
                  return(
                    <Users name={user?.name} click={()=>onclick()}/>
                  )
                }): <div></div>
              
                  
            }
        </div> 
    </>
  )
}

export default Contact
