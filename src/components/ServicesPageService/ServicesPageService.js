import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesPageService = (props) => {
    const { _id, photo, title, description, detail_picture } = props.service

    return (
        <div>
            <Col className="service-card">
                <Card className="border-0 shadow">
                    <Card.Img
                        variant="top"
                        style={{ width: '100%' }}
                        className="card-photo my-3 mx-auto"
                        src={detail_picture}
                    />
                    <Card.Body className="text-start">
                        <Card.Title className="mb-2">{title}</Card.Title>
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