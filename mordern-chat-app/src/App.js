// import Form from "./model/form/form";
// import {Routes , Route ,Navigate} from 'react-router-dom'
import ChatState from "./Context/ChatState";
import Dashboard from "./model/dashboard/Dashboard";

function App() {
  return (
    <>
    <ChatState>
      <Dashboard />
    </ChatState>
    </>
  );
}

export default App;
