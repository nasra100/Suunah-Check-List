import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import './App.css'
import Register from './components/Register.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


function Main() {
  const isLoginPage = window.location.pathname === '/';
  
  return (
    <div className={isLoginPage ? 'login-page' : ''}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/App" element={<App />} />

          <Route 
                    path="/" 
                    element={
                        <PrivateRoute>
                            <App />
                        </PrivateRoute>
                    } 
                />
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />, document.getElementById('root'));

