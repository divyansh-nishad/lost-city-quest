// Let us make the user registration page using Firebase. We will use the Firebase Auth API to create a user account with email and password.
import React from 'react'
import Navbar from '../components/Navbar'
// import the firebase auth module in components/firebase.js
import { auth } from '../components/firebase'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserRegister = () => {
    const nav = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                alert("User registered successfully");

                // Navigate to level 1
                nav('/level1');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }
    return (
        <>
            <div className='level2-main'>
                <div className='box'>
                    <h1>Register</h1>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button className="d-grid mx-auto" variant="success" type="submit">
                            Register
                        </Button>
                    </Form>

                </div>
            </div>
        </>
    )
}

export default UserRegister