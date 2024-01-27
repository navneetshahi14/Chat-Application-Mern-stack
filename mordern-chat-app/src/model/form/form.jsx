import React, { useState } from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'

const Form = ({
    isSignUp = false
}) => {

    const [ data, setData ] = useState({
        ...(!isSignUp && {
            name:""
        }),
        email:"",
        password:""
    })
    const navigate = useNavigate()

    const handleNavigation = () =>{
        !isSignUp ? navigate('/login') : navigate('/register')
    }


  return (
    <>
      <div className='w-[100%] h-screen bg-slate-400 flex justify-center items-center ' >
        <div className=" w-auto h-auto py-10 px-5 bg-white flex justify-center items-center flex-col rounded-2xl shadow-2xl">
            <h1 className='font-extrabold text-4xl'>{isSignUp ? "SignUp" : "Login"}</h1>
            <form className='flex flex-col justify-center items-center'>
                {
                    isSignUp && 
                    <Input name={'name'} placeholder={`Username`} value={data.name} type={`text`} icon={`user`} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
                }
                <Input name={'email'} placeholder={`Email`} value={data.email} type={`email`} icon={`envelope`} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
                <Input name={'password'} placeholder={`Password`} value={data.password} type={`password`} icon={`lock`} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
                <Button type='submit' btnname={`Submit`} />
            </form>
            <p className='mt-3'>{isSignUp ? "Already have a Account":"If Don't have Account"} <span className='text-blue-600 decoration-blue-800 underline cursor-pointer' onClick={()=>handleNavigation()} >{isSignUp ? "Login !!!" : "SignUp!!!"}</span> </p>
        </div>
      </div>
    </>
  )
}

export default Form
