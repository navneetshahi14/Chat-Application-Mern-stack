import React from 'react'
import Users from './Users'

const Contact = ({
  onclick=()=>{}
}) => {
  return (
    <>
        <div className={`h-[80%] w-[98%] mt-2 rounded-lg bg-white flex flex-col items-center overflow-auto`}>
            <Users name='Navneet Shahi' click={()=>onclick()} />
            <Users name='Saksham Shahi' />
        </div> 
    </>
  )
}

export default Contact
