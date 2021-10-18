import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigaion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'



import icon from '../Images/Icons/icon6.png'

const Navigation = () => {

    const tooth = <FontAwesomeIcon icon={faTooth} />
    return (
        <div>
            <Navbar bg="info" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/home" className="d-flex align-items-center">
                        <h1 className="display-inline-blok">De</h1>
                        <h5 className="d-inline-block mt-2 mx-auto">{tooth}</h5>
                        <h1 className="d-inline-block">tal Care</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-links ms-auto ">
                            <a href="/home">Home</a>
                            <a href="/services">Services</a>
                            <a href="/aboutus">About Us</a>
                            <a href="/doctors">Doctors</a>
                            <a href="/login">Log In</a>
                            <a href="/login">Register</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;