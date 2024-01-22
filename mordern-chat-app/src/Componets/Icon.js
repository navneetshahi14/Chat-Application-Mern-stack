import React from 'react'
import { useNavigate } from 'react-router-dom'

const Icon = ({
    icon="",
    classname="",
    navigates="",
    func =()=>{}
}) => {
  const navigate = useNavigate()


  return (
    <div onClick={()=>{func()}}>
     <i className={`fa-solid fa-${icon} ${classname} `} onClick={()=>navigate(`/${navigates}`)} ></i> 
    </div>
  )
}

export default Icon
