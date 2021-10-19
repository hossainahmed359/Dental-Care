import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const Doctors = () => {
    return (
        <div>
            <Container>
                <div className="home-services my-5 text-info"><h1>Doctors</h1></div>
                <br />
                <Row xs={1} md={2} lg={3} className="g-5 mb-5">
                    <Col>
                        <Card className="doctor-card border-0 ">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80" />
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
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1550831107-1553da8c8464?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
                            <Card.Body className="text-start">
                                <Card.Title>Dr. Edie Dee</Card.Title>
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
                    <Col>
                        <Card className="doctor-card border-0 ">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1550831106-f8d5b6f1abe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
                            <Card.Body className="text-start">
                                <Card.Title>Dr. Steve Wills</Card.Title>
                                <Card.Text className="text-info">
                                    gynecologist
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Doctors;