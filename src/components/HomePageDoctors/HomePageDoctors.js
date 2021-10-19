import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePageDoctors.css'

const HomePageDoctors = () => {
    return (
        <div className="my-5">
            <br />
            <Container>
                <div className="home-services my-5"><Link to="/doctors" className="text-info">Doctors</Link></div>
                <br />
                <Row xs={1} md={2} lg={4} className="g-4 ">
                    <Col>
                        <Card className="doctor-card border-0 ">
                            <Card.Img variant="top" className="" src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80" />
                            <Card.Body className="text-start">
                                <Card.Title>Dr. John Melborn</Card.Title>
                                <Card.Text className="text-info">
                                    Prosthodontics Dentist
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="doctor-card border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <Card.Body className="text-start">
                                <Card.Title>Dr. Daisy Gabriela</Card.Title>
                                <Card.Text className="text-info">
                                    Endocrinologists
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="doctor-card border-0 ">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1550831106-0994fe8abcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <Card.Body className="text-start">
                                <Card.Title>Dr. Aiken Ward</Card.Title>
                                <Card.Text className="text-info">
                                    Cardiologists
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="doctor-card border-0 ">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
                            <Card.Body className="text-start">
                                <Card.Title>Dr. Smith Johnson</Card.Title>
                                <Card.Text className="text-info">
                                    Therapist
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePageDoctors;