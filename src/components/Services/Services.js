import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import ServicesPageService from '../ServicesPageService/ServicesPageService';

const Services = () => {
    // Load Services
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Container className="mb-5">
                <h1 className="my-5 text-muted">Our Services</h1>
                <Row xs={1} md={2} lg={3} className="g-5 my-5">
                    {services.map(service => <ServicesPageService key={service._id} service={service}></ServicesPageService>)}
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Services;