import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

import { Button, Card, Col, Row } from 'react-bootstrap';

const SingleServiceDetails = (props) => {
    const { price, detail_picture, title, description } = props.serviceDetail;
    const { picture, name } = props.reviewer

    const star = <FontAwesomeIcon icon={faStar} />
    const starHalf = <FontAwesomeIcon icon={faStarHalf} />


    return (
        <div>
            <Row xs={1} md={2} className="my-5 align-items-center border border-info shadow">
                <Col><Card className="border-0"> <Card.Body> <h2>Service Descrition</h2> </Card.Body> </Card></Col>
                <Col>
                    <Card className="service-details border-0">
                        <Card.Img className="w-100" variant="top" src={detail_picture} />
                        <Card.Body className="text-start">
                            <Card.Title>{title}</Card.Title>
                            <h3 className="text-info">
                                ${price}
                            </h3>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button variant="primary mb-2">Get Appointment</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
            <h3 className="my-5 text-muted">See Reviews</h3>
            <br />
            <Row xs={1} md={2} className="my-5 align-items-center border border-info shadow">
                <Col><Card className="border-0"> <Card.Body> <h2>Reviews</h2> </Card.Body> </Card></Col>
                <Col className="">
                    <Card className="border-0">
                        <Card.Img variant="top" style={{ width: '150px', borderRadius: "50%" }} className="mx-auto my-4" src={picture?.large} />
                        <Card.Body className="text-start">
                            <Card.Title>{name?.title}. {name?.first} {name?.last}</Card.Title>
                            <Card.Text>
                                Partners in Dental Care has cared for my mother since the end of 2012. I received less than a days notice from another agency that they could no longer provide services for my mother who was living at home alone. I was out of the country on business and flew home immediately to meet with Bonnie and her care team. They have been caring for my mother at home, then in the hospital and now in a nursing home.  Their attention to detail such as shopping for her favorite foods or clothes has given me the peace of mind I need when I cannot be there. Although my mother lives in a nursing home my Partners care team provides the special care my mother deserves every day.  I highly recommend the Partners in Health care team!
                            </Card.Text>
                            <h5><span className="text-warning">{star}{star}{star}{star}{starHalf}</span></h5>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
        </div >
    );
};

export default SingleServiceDetails;