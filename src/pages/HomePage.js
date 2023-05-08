import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    const nav = useNavigate()

    const handleGameStart = () => {
        // check if user is logged in
        nav('/admin')
    }

    return (
        <div>
            <div className='level2-main d-flex flex-row justify-content-center'>
                <h1 className='title'>Welcome to the Lost City Quest!</h1>
                
                <Button className="mx-2"
                    variant='info'
                    onClick={() => nav('/register')}
                >
                    Register
                </Button>
                <Button className="mx-2" variant='info'
                    onClick={() => nav('/login')}
                >
                    Login
                </Button>
                <Button className="mx-2" variant='info'
                    onClick={handleGameStart}
                >
                    Admin dashboard
                </Button>
            </div>
        </div>
    )

}

export default HomePage
