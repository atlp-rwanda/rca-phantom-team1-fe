import React from "react";
import './contact.scss'
import { address1, address2, address3 } from "../../assets/images";
import { Button } from "../";

const Contact = () => {
    return (
        <section className="contacts">
            <h1>CONTACT US</h1>
            <section className="contacts-section-1">
                <div className="address-1">
                    <img src={address1} alt="image"/>
                    <h2>ADDRESS</h2>
                    <p>Kigali - Rwanda</p>
                </div>
                <div className="address-2">
                    <img src={address2} alt="image" />
                    <h2>PHONE NUMBER</h2>
                    <p>+250 7885902359</p>
                </div>
                <div className="address-3">
                    <img src={address3} alt="image"/>
                    <h2>EMAIL</h2>
                    <p>phantom@gmail.com</p>
                </div>
            </section>
            <section className="contacts-section-2">
                <div className="contacts-content-1">
                    <input type="text" name="name" placeholder="Your Name" id="name" />
                    <input type="email" name="email" placeholder="Your Email" id="email" />
                </div>
                <div className="contacts-content-2">
                    <input type="text" name="subject" placeholder="subject" id="subject" />
                    <textarea className="message-box" name="message" id="message" cols="30" rows="7" placeholder="Your Message"></textarea>
                    <Button className='blue-btn'>Send Message</Button>
                </div>
            </section>
        </section>
    )
}

export default Contact