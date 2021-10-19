import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePageAboutUs.css'

const HomePageAboutUs = () => {
    return (
        <div className="my-5">
            <div className="home-services my-5"><Link to="/aboutus" className="text-info">About Us</Link></div>
            <Container>
                <Row xs={1} md={2} className="g-5">
                    <Col >
                        <Card className="about-card text-start border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1619988252418-a1e6ee10b122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                            <Card.Body>
                                <Card.Title>Dental Hygiene For All Age To Make Happy Smile</Card.Title>
                                <Card.Text>
                                    Your oral health affects your overall health from birth through adulthood.  Giving your child a foundation for taking care of their teeth, establishing routines, and understanding the importance of good dental care can lead to a healthy, happy smile that lasts a lifetime!
                                </Card.Text>
                                <Button variant="outline-primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="about-card text-start border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
                            <Card.Body>
                                <Card.Title>10 Dental Technology That Really Help People</Card.Title>
                                <Card.Text>
                                    One of the most common childhood fears is going to the dentist. Who would not relate? Sitting in a huge chair illuminated by blinding light; enduring lengthy seated sessions with someone looking and poking inside your mouth using edgy and frightening devices.
                                </Card.Text>
                                <Button variant="outline-primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePageAboutUs;