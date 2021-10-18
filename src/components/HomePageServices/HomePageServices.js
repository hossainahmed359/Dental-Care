import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './HomePageServices.css'

const HomePageServices = () => {

    // Load Services
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-5 container">
            <div className="home-services pt-5"><Link to="/services" className="text-info">Services</Link></div>
            <Row xs={1} md={2} lg={3} className="g-5 my-5">
                {services.map(service => services.indexOf(service) < 6 && <Service key={service._id} service={service}></Service>)}
            </Row>
        </div>
    );
};

export default HomePageServices;