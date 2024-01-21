import React from 'react'
import { useNavigate } from 'react-router-dom'

const Icon = ({
    icon="",
    classname="",
    navigates=""
}) => {
  const navigate = useNavigate()

  return (
    <>
     <i className={`fa-solid fa-${icon} ${classname} `} onClick={()=>navigate(`/${navigates}`)} ></i> 
    </>
  )
}

export default Icon
