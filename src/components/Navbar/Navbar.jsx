import React from "react";
import './navbar.scss'
import {logo} from "../../assets/images.jsx"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return(
        <nav>
      <div className="logo">
        <img src={logo} alt = "Logo"/>
      </div>
      <input type="checkbox" id="click"></input>
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li><a className="active" href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li>
          <a href="#">OUR SERVICES 
          <i className="fas fa-thin fa-chevron-down"></i></a>
        </li>
        <li><a href="#">CONTACT US</a></li>
        <li>
        <div className="search-box">
          <button className="btn-search"><i className="fas fa-search"></i></button>
          <input type="text" className="input-search" placeholder="Search here"></input>
        </div>
        </li>
        <li>
          <div className="login">
            <button className="login-btn" onClick={() => navigate('/sign-in')}>Login</button>
            <button className="signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        </li>
      </ul>
    </nav>
    )
}

export default Navbar;