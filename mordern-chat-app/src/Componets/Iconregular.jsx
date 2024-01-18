import React from 'react'

const Iconregular = ({
    icon="",
    classname=""
}) => {
  return (
    <>
     <i className={`fa-regular fa-${icon} ${classname} `} ></i>  
    </>
  )
}

export default Iconregular
