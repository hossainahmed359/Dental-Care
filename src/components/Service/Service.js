import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, title, description, detail_picture } = props.service
    return (
        <div>
            <Col className="service-card">
                <Card className="border-0 shadow">
                    <Card.Img
                        variant="top"
                        style={{ width: '100%' }}
                        // style={{ width: '20%' }}
                        className="card-photo mb-3 mx-auto"
                        src={detail_picture}
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

export default Service;