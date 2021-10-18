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
                        style={{ height: 200, width: 150 }}
                        className="card-photo mt-2 mx-auto shadow rounded-circle w-50"
                        src={picture}
                    />
                    <Card.Body>
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