import React from "react";
import {passenger, whiteLogo} from '../../assets/images'
import './layout.scss'
import {Link, Navigate } from "react-router-dom";

const SignupLayout = props => {
    return(
        <div className="layout">
            <div className="layout-content">
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                </div>
                <img src={passenger} alt="passenger-img"/>
            </div>
            <div className="layout-form">
                <Link to='/'><img src={whiteLogo} alt="logo"/></Link>
                <ul>
                    <li className={props.action != "Register"? "active":""}><Link to='/signin'>Login</Link></li>
                    <li className={props.action == "Register"? "active":""}><Link to='/signup'>Register</Link></li>
                </ul>
                {props.children}
                <button type="submit"
                 disabled={!props.formisValid || props.ifEmpty}
                 onClick={props.handleSubmit} >{props.action} </button>
            </div>
        </div>
    )
}

export default SignupLayout