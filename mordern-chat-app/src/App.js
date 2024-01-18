import Dashboard from "./models/dashboard/dashboard";
import Login from "./models/form/Login.jsx"
import { Routes , Route , Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, auth=false }) =>{
  const isLoggedin  = true

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
      <Routes>
          <Route path='/' element={
            <ProtectedRoute auth={true}>
              <Dashboard/>
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

    </>
  );
}

export default App;
