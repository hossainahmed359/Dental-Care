import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import SingleServiceDetails from '../SingleServiceDetails/SingleServiceDetails';


const ServiceDetails = () => {
    const { serviceId } = useParams([]);
    //Load and Set Data
    const [serviceDetails, setserviceDetails] = useState([]);
    useEffect(() => {
        fetch("../../services.json")
            .then(res => res.json())
            .then(data => setserviceDetails(data))
    }, [])

    //Load Reviewer
    const [reviewer, setReviewer] = useState({})
    useEffect(() => {
        fetch('https://randomuser.me/api/?gender=male')
            .then(res => res.json())
            .then(data => setReviewer(data.results[0]))
    }, [])

    return (
        <div>
            <br />
            <Container className="my-5">
                <h1 className="text-muted">Know About Our Service</h1>
                <br />
                {serviceDetails.map(serviceDetail =>
                    serviceDetail._id === serviceId
                    &&
                    <SingleServiceDetails
                        key={serviceId}
                        serviceDetail={serviceDetail}
                        reviewer={reviewer}
                    ></SingleServiceDetails>)}
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;

// ../../services.json