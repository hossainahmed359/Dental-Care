import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigaion.css'

import icon from '../Images/Icons/icon6.png'

const Navigation = () => {

    return (
        <div>
            <Navbar bg="info" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/home" className="d-flex align-items-center">
                        <img src={icon} alt="" />
                        <h2>Dental Care</h2>
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