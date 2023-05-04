import React from 'react'
import './assets/styles/index.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store'
import PasswordReset from './pages/PasswordReset'
import Login from './pages/Login' 
import Dashboard from './pages/DashBoard'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <>
      <Router>
        <Routes>
          {/* auth routes */}
          <Route path='/' element={<Home />} />
          <Route path='/password-reset' element={<PasswordReset />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
