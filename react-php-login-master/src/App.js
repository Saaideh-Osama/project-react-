import {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {UserContext} from './context/UserContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Dashboard from './components/dashboard'

function App() {

  const {user} = useContext(UserContext); 
 
  
  return (
    <div className="container">
        <BrowserRouter>
          <Routes>
            { user && user.user_role==0 && <Route path="/" element={<Home/>} /> }
            { user && user.user_role==1 && <Route path="/" element={<Dashboard/>} /> }
            {!user && (
              <>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register/>} />
              </>
            )}
            <Route path="*" element={<Navigate to={user ? '/':'/login'} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;