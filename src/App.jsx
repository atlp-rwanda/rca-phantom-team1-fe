import React from 'react'
import './assets/styles/index.css'
import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom'
import {Home, Signup} from './pages'
import PasswordReset from './pages/PasswordReset'
import Login from './pages/Login' 
import Dashboard from './pages/DashBoard'

const PrivateRoute = ({children}) => {
  const token = localStorage.getItem('token');
  if(!token){
    return <Navigate to='/'/>
  }
  return children;
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* auth routes */}
          <Route path='/' element={<Home />} />
          <Route path='/password-reset' element={<PasswordReset />} />

          <Route path='/signup' element={
          <PrivateRoute>
          <Signup/>
          </PrivateRoute>}/>

          <Route path='/sign-in' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
