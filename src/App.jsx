import React from 'react'
import './assets/styles/index.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store'
import PasswordReset from './pages/PasswordReset'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* auth routes */}
          <Route path='/' element={<Home />} />
          <Route path='/password-reset' element={<PasswordReset />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
