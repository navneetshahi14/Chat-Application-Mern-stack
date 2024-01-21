// import { useContext } from "react";
import ChatState from "./Context/chatState.js";
import Dashboard from "./models/dashboard/dashboard";
import Login from "./models/form/Login.jsx"
import { Routes , Route , Navigate } from 'react-router-dom'
// import Chatcontext from "./Context/ChatContext.js";

const ProtectedRoute = ({ children, auth=false }) =>{

  const isLoggedin  = localStorage.getItem('user:token') !== null || false

  if(!isLoggedin && auth){
    return <Navigate to={`/users/sign_in`}/>
  }else if(isLoggedin && ['/users/sign_in' , '/users/sign_up'].includes(window.location.pathname)){
    return <Navigate to={`/`}/>
  }
  
  else{
    return children
  }
}

function App() {
  return (


    <>
    <ChatState>
      <Routes>
          <Route path='/' element={
            <ProtectedRoute auth={true}>
              <Dashboard isContact={true} />
            </ProtectedRoute>
          } />
          <Route path='/findfriends' element={
            <ProtectedRoute auth={true}>
              <Dashboard isContact={false} />
            </ProtectedRoute>
          } />
          <Route path='/users/sign_in' element={
            <ProtectedRoute>
              <Login isSignIn={true} />
            </ProtectedRoute>
          } />
          <Route path='/users/sign_up' element={
            <ProtectedRoute>
              <Login  isSignIn={false} />
            </ProtectedRoute>
          } />
        </Routes>
    </ChatState>

    </>
  );
}

export default App;
