import React, { useEffect, useState } from 'react'
import Chatcontext from './ChatContext'
import { useNavigate } from 'react-router-dom'


const ChatState = (props) => {

  const host = `http://localhost:5000`

  const navigate = useNavigate()
  
  // eslint-disable-next-line no-unused-vars
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user:detail')))
  const [others, setOthers] = useState([])
  const [conver , setConver] = useState([])

    const Login = async (data,isSignIn) =>{
      try{

        const res = await fetch(`${host}/auth/${isSignIn? "login": "register"}`,{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify(data)
        })
        if(res.status === 400){
          alert('Invalid Credentials')
        }else{
          const resData = await res.json()
          console.log('data: ->>',resData)
          if(resData.token){
            localStorage.setItem('user:token',resData.token)
            localStorage.setItem('user:detail',JSON.stringify(resData.userFind))
            navigate('/', { state: { user: resData.userFind }})
          }
        }

      }catch(err){
        console.log(err.message)
      }
    }

    // getting other users
    useEffect(()=>{
      const conversationDisplay = async() =>{
        try{
  
          const res = await fetch(`${host}/api/conversation/${user?.id}`,{
            method:"GET",
            headers:{
              'Content-Type':"application/json"
            }
          })
          const resData = await res.json()
          setConver(resData)
  
        }catch(err){
          console.log(err.message)
        }
      }
      conversationDisplay()
    })

    const otherUsers = async() =>{
      const res  = await fetch(`${host}/api/user/${user?.id}`,{
        method:"GET",
        headers:{
          'Content-Type':"application/json"
        }
      })
      const resData = await res.json()
      setOthers(resData)
      console.log(others)
    }

    const createNewConversation = async(receiverId) =>{
      try{

        const res = await  fetch(`${host}/api/conversation`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            senderId:user?.id,
            receiverId:receiverId
          })
        })
        const resData = await res.json()
        console.log('Conversation created--->',resData)

      }catch(err){
        console.log(err.message)
      }
    }


    


  return (
    <Chatcontext.Provider value={{ Login , user , others , createNewConversation , otherUsers , conver}} >
        {props.children}
    </Chatcontext.Provider>
  )
}

export default ChatState
