import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Navigaion.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import icon from '../../Images/Icons/icon6.png'
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut, userName } = useAuth();
    // console.log("this is from nav", user)
    const avatarIcon = <FontAwesomeIcon icon={faUser} />

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
                        <Nav className="nav-links ms-auto align-items-center">
                            <Link to="/home">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/doctors">Doctors</Link>
                            <Link to="/aboutus">About Us</Link>
                            {(userName) &&
                                <Button variant="outline-light my-2 mx-2 text-dark" disabled><span className="text-white me-2">{avatarIcon}</span>{userName}</Button>
                            }
                            {!user?.email ? <Link to="/login">Log In</Link> : <Button onClick={logOut} variant="light">Log Out</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
