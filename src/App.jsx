import React from 'react'
import './assets/styles/index.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <>
      <Router>
        <Routes>
          {/* auth routes */}
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
