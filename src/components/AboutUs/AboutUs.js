import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <div className="home-services my-5"><h1 to="/aboutus" className="text-info">About Us</h1></div>
            <Container className="">
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
                    <Col >
                        <Card className="about-card text-start border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1629909615184-74f495363b67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80" />
                            <Card.Body>
                                <Card.Title>New Technology Make For Dental Operation</Card.Title>
                                <Card.Text>
                                    People have always avoided going to the dentist. There are a number of reasons for this trepidation. Some people have had an unpleasant, even painful experience. Others simply don’t like the idea of having strangers probing and prodding in their mouths.
                                </Card.Text>
                                <Button variant="outline-primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="about-card text-start border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1596740926849-2d473dee8d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                            <Card.Body>
                                <Card.Title>Regular Dental Care Make Your Smile Brighter</Card.Title>
                                <Card.Text>
                                    Flossing removes plaque between teeth and out from under the gumlines, where a toothbrush can’t reach. Daily flossing helps prevent tooth decay and gingivitis. When left alone, plaque and tartar build up under the surface of the gumlines. This can cause periodontal disease, which leads to bone destruction and tooth loss.
                                </Card.Text>
                                <Button variant="outline-primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="about-card text-start border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                            <Card.Body>
                                <Card.Title>World Best Dentist Meetup In Workshop</Card.Title>
                                <Card.Text>
                                    Your oral health affects your overall health from birth through adulthood.  Giving your child a foundation for taking care of their teeth, establishing routines, and understanding the importance of good dental care can lead to a healthy, happy smile that lasts a lifetime!his can cause periodontal disease, which leads to bone destruction and tooth loss.
                                </Card.Text>
                                <Button variant="outline-primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="about-card text-start border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1550985543-f1ea83691cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80" />
                            <Card.Body>
                                <Card.Title>Hygiene For All Age To Make Smile Brighter</Card.Title>
                                <Card.Text>
                                    A bright, confident smile looks good at every age. Unfortunately, many middle-aged adults and seniors have concerns about their oral health and even feel self-conscious about the wear-and-tear their smiles have gone through over the years. Thankfully, with the help of your dentist and by adopting some healthy lifestyle habits, you can keep your smile shining or get the beautiful smile you’ve always wanted.
                                </Card.Text>
                                <Button variant="outline-primary">Learn More</Button>
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

export default AboutUs;