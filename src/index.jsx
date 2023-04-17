import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProfileUpdateForm from './features/profile/ProfileUpdateForm'
import UserProfile from './features/profile/UserProfile'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ProfileUpdateForm/> */}
    <UserProfile/>
  </React.StrictMode>
)
