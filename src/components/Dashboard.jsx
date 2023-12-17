import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()
    const data = {
        'statment': 'successfully logged out '
    }
    return (
        <>
            <h2>dashboard page</h2>

            <button onClick={() => {
                navigate('/logout', { state: data })
            }}>logout</button>
        </>
    )
}

export default Dashboard
