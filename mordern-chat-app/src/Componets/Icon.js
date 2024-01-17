import React from 'react'

const Icon = ({
    icon="",
    classname=""
}) => {
  return (
    <>
     <i className={`fa-solid fa-${icon} ${classname} `} ></i> 
    </>
  )
}

export default Icon
