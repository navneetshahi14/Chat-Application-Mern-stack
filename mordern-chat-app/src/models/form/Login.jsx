import React, { useState } from 'react'
import Icon from '../../Componets/Icon'
import { useNavigate } from 'react-router-dom'

const Login = ({
    isSignIn = true
}) => {

    const navigate = useNavigate()
    
    const [password,setPassword] = useState('password')
    const [eye,setEye] = useState('eye')
    const setPass = () => {
        try{
            if(password === "password"){
                setPassword('text')
                setEye('eye-slash')
            }else{
                setPassword('password')
                setEye('eye-slash')
            }
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <>
    <div className=" h-screen w-screen flex flex-col justify-center items-center">
        <form action="" className='flex flex-col w-[40%] h-[60%] justify-center items-center bg-[#ffffff7c] rounded-xl shadow-md'>
        <h1 className='text-2xl font-extrabold'>{isSignIn ? "Login" : "SignUp"}</h1>
            {
                !isSignIn && 
                    <div className='mt-3 bg-white rounded-xl p-3 shadow-lg w-[50%]'>
                        <label htmlFor="Username" className='mx-[10px] cursor-pointer text-md'><Icon icon='user' /></label>
                        <input type="text" name="Username" id="Username" placeholder='Username' className='border-none outline-none' />
                    </div>
            }
            <div className='mt-3 bg-white rounded-xl p-3 shadow-lg w-[50%]'>
                <label htmlFor="email" className='mx-[10px] cursor-pointer text-md'><Icon icon='envelope' /></label>
                <input type="email" name="email" id="email" placeholder='Email' className='border-none outline-none' />
            </div>
            <div className='mt-3 bg-white rounded-xl p-3 shadow-lg w-[50%]'>
                <label htmlFor="password" className='mx-[10px] cursor-pointer text-md'><Icon icon={`lock`} /></label>
                <input type={password} placeholder='Password' name="password" id="password" className='border-none outline-none' />
                <Icon icon={eye} onclick={()=>setPass()} />
            </div>
            <input type="submit" value="Submit" className='mt-4 bg-blue-600 p-2 px-4 rounded-xl cursor-pointer hover:bg-blue-300'/>
            <p className='mt-4'>{isSignIn ? "If Don't have Account " : "Already Have Account"}<span className='text-blue-800 underline cursor-pointer' onClick={()=> navigate(`/users/${isSignIn ?"sign_up":"sign_in"}`)}>{isSignIn ? " SignUp" : " SignIn"}</span> </p>
        </form>
        
    </div> 
    </>
  )
}

export default Login
