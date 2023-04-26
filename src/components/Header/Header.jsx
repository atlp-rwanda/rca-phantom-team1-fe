import React from "react";
import './header.scss'
import { headerbus } from "../../assets/images";
import { Button } from "../ui";

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h1>STOP WAITING.</h1>
                <h1 className="title-2">START TRACKING!</h1>
                <p>Phantom is the largest Rwandan online bus tracking platform trusted by overa millions of Rwandans!</p>
                <Button className='green-btn'>GET STARTED</Button>
            </div>
            <img className="header-bus" src={headerbus} alt="bus" />
        </div>
    )
}

export default Header