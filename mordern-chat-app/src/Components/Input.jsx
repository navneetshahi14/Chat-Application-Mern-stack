import React from 'react'

const Input = ({
    name,
    type,
    placeholder,
    icon,
    value= "",
    onChange =()=>{}
}) => {
  return (
    <>
    <div className={`flex flex-row m-3 border-2 px-5 py-3 rounded-xl shadow-lg`}>
     <label htmlFor={name}><i className={`fa-solid fa-${icon} cursor-pointer`}></i></label> 
     <input type={type} value={value} onChange={onChange} required className={` mx-2 outline-none bg-transparent border-0  `} placeholder={placeholder} name={name} id={name}  />
    </div>
    </>
  )
}

export default Input
