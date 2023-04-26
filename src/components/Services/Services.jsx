import React from "react";
import './services.scss'
import { trackbus1, trackbus2, service1, service2, service3 } from "../../assets/images";
import { Button } from "../ui";

const Services = () => {
    return (
        <section className="services">
            <section className="services-section-1">
                <img className="services-bus" src={trackbus1} alt="bus" />
                <div className="services-content">
                    <h1>AUTOMATIC!</h1>
                    <h1>BUS TRACKING!</h1>
                    <p> <span>Phantom</span> tracking system focuse on providing an intuitive and user-friendly interface that allows passengers to easily access the information they need.Interactive maps is used to display the location of buses in real-time, allowing passengers to track the progress of their bus and plan their travel accordingly.</p>
                </div>
            </section>
            <h1>OUR SERVICES</h1>
            <section className="services-section-2">
                <div className="service-1">
                    <img src={service1} alt="image"/>
                    <h2>Using Routes</h2>
                    <p><a href="#">Read More &gt;</a></p>
                </div>
                <div className="service-2">
                    <img src={service2} alt="image" />
                    <h2>TRACKING OUR BUSES</h2>
                    <p>Phantom help users to track buses available on suggest routes to and from different places in Kigali - Rwanda</p>
                </div>
                <div className="service-3">
                    <img src={service3} alt="image"/>
                    <h2>Available on Mobile</h2>
                    <p><a href="#">Read More &gt;</a></p>
                </div>
            </section>
            <section className="services-section-3">
                <div className="services-content">
                    <h1><span>BEST</span> BUS TRACKING</h1>
                    <h1 className="title-2">SYSTEM IN RWANDA!</h1>
                    <Button className='black-btn'>GET STARTED</Button>
                </div>
                <img className="services-bus" src={trackbus2} alt="bus" />
            </section>
        </section>
    )
}

export default Services