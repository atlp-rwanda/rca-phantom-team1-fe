import React from 'react'
import './assets/styles/index.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        {/* auth routes */}
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}
export default App
