import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { createAccountWithEmail, updateUserName, emailPasswordSignIn, googleSignIn, facebookSignIn, logOut } = useAuth();

    // States
    const [doesExist, setDoesExist] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // const [user, setUser] = useState({})
    const [errorMessage, setErrorMessage] = useState('');

    // Toggle Login || Register
    const toggleLogin = e => {
        setDoesExist(e.target.checked)
    }

    // Set Name From Input Field
    const handleUserName = e => {
        setUserName(e.target.value);
    }

    // Set User Email
    const handleUserEmail = e => {
        setEmail(e.target.value)
    }

    // Set User Password
    const handleUserPassword = e => {
        setPassword(e.target.value)
    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
                setErrorMessage("")
            }).catch((error) => {
                setErrorMessage(error.message);
            });
    }

    // FaceBook Sign In
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then((result) => {
                // The signed-in user info.
                console.log(result.user);
                setErrorMessage("")
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }

    // handle email Registration || Create Account
    const handleEmailRegistration = () => {
        createAccountWithEmail(email, password)
            .then((result) => {
                // Signed in 
                console.log(result.user)
                // ...
            })
            .catch((error) => {
                setErrorMessage(error.message)
            });
    }

    // handle email sign in || Sign In
    const handleEmailSignIn = () => {
        emailPasswordSignIn(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // ...
            })
            .catch((error) => {
                setErrorMessage(error.message)
            });
    }

    // Email & Password Registration || Sign In
    const handleEmailRegistrationOrLogin = e => {
        e.preventDefault()
        // password strenth check
        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrorMessage('Password must contain two uppercase');
            return;
        }

        !doesExist ? handleEmailRegistration() : handleEmailSignIn()
        setErrorMessage('')
        // The code below will reset the input fields after clicking the submit button
        document.forms['myform'].reset()
        console.log('success')
    }

    return (
        <div>
            <Container className="my-5">
                <br />
                <h1 className="my-3">{!doesExist ? "Register" : "Login"}</h1>
                <div className="col-lg-5 mx-auto">
                    <Button onClick={handleGoogleSignIn} variant="success" size="lg" className="w-100 my-3">
                        Continue with Google
                    </Button>
                    <Button onClick={handleFacebookSignIn} variant="primary" size="lg" className="w-100">
                        Continue with Facebook
                    </Button>
                </div>
                <h2 className="my-3">OR</h2>
                <Form onSubmit={handleEmailRegistrationOrLogin} id="myform" className="mx-auto col-lg-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {!doesExist && <Form.Control onBlur={handleUserName} className="py-3 my-3" type="name" placeholder="Your Name" />}
                        <Form.Control onBlur={handleUserEmail} className="py-3 my-3" type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handleUserPassword} className="py-3 my-3" type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className="text-danger">{errorMessage}</p>
                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                        <Form.Check onClick={toggleLogin} type="checkbox" label="Already have an account ?" />
                    </Form.Group>
                    <Button variant="primary" size="lg" className="w-100" type="submit">
                        {!doesExist ? "Register" : "Login"}
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;