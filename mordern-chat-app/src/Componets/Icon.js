import React from 'react'

const Icon = ({
    icon="",
    classname="",
    onclick
}) => {
  return (
    <>
     <i className={`fa-solid fa-${icon} ${classname} `} onClick={onclick} ></i> 
    </>
  )
}

export default Icon
