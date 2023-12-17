import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Login({ islogged, setislogged }) {
    let location = useLocation()
    let navigate = useNavigate()
    const doneloggin = () => {
        navigate('/dashboard')
        setislogged(!islogged)
    }
    console.log(location)
    return (
        <>
            <h2>please Login</h2>
            <button onClick={doneloggin}>Login</button>
            {!islogged ? <h2>{location.state.st}</h2> : ''}
        </>
    )
}

export default Login
