import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { picture, name, description } = props.service
    return (
        <div>
            <Col className="service-card">
                <Card className="border-0 shadow">
                    <Card.Img
                        variant="top"
                        style={{ width: '20%' }}
                        className="card-photo my-3 mx-auto"
                        src={picture}
                    />
                    <Card.Body className="text-start">
                        <Card.Title className="my-2">{name}</Card.Title>
                        <Card.Text>
                            <p>{description.slice(0, 120)}...</p>
                        </Card.Text>
                        <Button variant="primary mb-2">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;