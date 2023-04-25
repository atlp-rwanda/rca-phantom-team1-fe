import React from 'react'
import './assets/styles/index.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store'
import PasswordReset from './pages/PasswordReset'

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
        </Routes>
      </Router>

      {/* <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div> */}
    </>
  )
}
export default App
