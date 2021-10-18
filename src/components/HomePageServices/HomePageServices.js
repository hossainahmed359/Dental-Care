import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
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
            <h2 className="home-services-header text-info pt-5">Services</h2>
            <Row xs={1} md={2} lg={3} className="g-5 my-5">
                {services.map(service => services.indexOf(service) < 6 && <Service key={service._id} service={service}></Service>)}
            </Row>
        </div>
    );
};

export default HomePageServices;