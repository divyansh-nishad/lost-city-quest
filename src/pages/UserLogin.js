
import React from 'react'
import firebase from '../components/firebase'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserLogin = () => {
    const nav = useNavigate();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSignIn = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                alert("User logged in successfully");
                // Navigate to level 1
                nav('/level1');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    }

    return (
        <>

            <div className='level2-main'>
                <div className='box'>
                    <h1>Login</h1>
                    <Form onSubmit={handleSignIn}>
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
                        
                        <Button className="d-grid mx-auto" variant="success"type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>
        </>
    )
}

export default UserLogin