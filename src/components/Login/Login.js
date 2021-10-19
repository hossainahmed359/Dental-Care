import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { createAccountWithEmail, updateUserName, emailPasswordSignIn, googleSignIn, facebookSignIn, logOut } = useAuth();

    // States
    const [doesExist, setDoesExist] = useState(false);
    // const [user, setUser] = useState({})
    const [error, setError] = useState('')

    // Toggle Login || Register
    const toggleLogin = e => {
        setDoesExist(e.target.checked)
    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
            }).catch((error) => {
                setError(error.message);
            });
    }

    // FaceBook Sign In
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then((result) => {
                // The signed-in user info.
                console.log(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
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
                <Form className="mx-auto col-lg-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {!doesExist && <Form.Control className="py-3 my-3" type="name" placeholder="Your Name" />}
                        <Form.Control className="py-3 my-3" type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className="py-3 my-3" type="password" placeholder="Password" required />
                    </Form.Group>
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