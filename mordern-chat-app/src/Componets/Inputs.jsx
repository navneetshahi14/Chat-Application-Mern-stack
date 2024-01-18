import React from 'react'

const Inputs = ({
    label="",
    type="",
    name=""

}) => {
  return (
    <>
    <div className={``}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={name} />
    </div>
    </>
  )
}

export default Inputs
