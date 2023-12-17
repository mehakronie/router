import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <ul>
                <li><NavLink to={'/'} style={({ isActive }) => {
                    return { color: isActive ? 'orange' : 'black' }
                }}>Home</NavLink></li>

                <li><NavLink to={'/about'} style={({ isActive }) =>
                    ({ color: isActive ? 'orange' : 'black' })} > About</NavLink></li>

                <li><NavLink to={'/contact'} style={({ isActive }) =>
                    ({ color: isActive ? 'orange' : 'black' })}>Contact</NavLink></li>

                <li><NavLink to={'/post/mobile'} style={({ isActive }) =>
                    ({ color: isActive ? 'orange' : 'black' })}>Post</NavLink></li>

                <li><NavLink to={'/dashboard'} style={({ isActive }) =>
                    ({ color: isActive ? 'orange' : 'black' })}>Dashboard</NavLink></li>

                <li><NavLink to={'/login'} style={({ isActive }) =>
                    ({ color: isActive ? 'orange' : 'black' })}>Login</NavLink></li>
            </ul >
        </>
    )
}

export default NavBar
