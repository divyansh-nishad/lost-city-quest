import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const nav = useNavigate()

    const handleGameStart = () => {
        // check if user is logged in
        nav('/level1')
    }

    return (
        <div>
            <button
                onClick={() => nav('/register')}
            >
                Register
            </button>
            <button
                onClick={() => nav('/login')}
            >
                Login
            </button>
            <button
                onClick={handleGameStart}
            >
                Start
            </button>
        </div>
    )
}

export default HomePage