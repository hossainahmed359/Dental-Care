import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesPageService = (props) => {
    const { _id, photo, title, description } = props.service

    return (
        <div>
            <Col className="service-card">
                <Card className="border-0 shadow">
                    <Card.Img
                        variant="top"
                        style={{ width: '20%' }}
                        className="card-photo my-3 mx-auto"
                        src={photo}
                    />
                    <Card.Body className="text-start">
                        <Card.Title className="my-2">{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 120)}...
                        </Card.Text>
                        <Link to={`/servicedetails/${_id}`}>
                            <Button variant="primary mb-2">Read More</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServicesPageService;