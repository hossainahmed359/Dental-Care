import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigaion.css'
import { Link } from "react-router-dom";

import icon from '../Images/Icons/icon6.png'

const Navigation = () => {

    return (
        <div>
            <Navbar bg="info" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/home" className="d-flex align-items-center">
                        <img height="70" src={icon} alt="" />
                        <h2>Dental Care</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-links ms-auto ">
                            <Link to="/home">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/aboutus">About Us</Link>
                            <Link to="/doctors">Doctors</Link>
                            <Link to="/login">Log In</Link>
                            <Link to="/login">Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
