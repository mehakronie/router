import React from 'react'
import { useLocation } from 'react-router-dom'

function Logout() {
    let location = useLocation()
    return (
        <>
            <h2>Logout page</h2>
            <h3>{location.state.statment}</h3>
        </>
    )
}

export default Logout
