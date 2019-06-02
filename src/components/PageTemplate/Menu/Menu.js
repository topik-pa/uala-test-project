import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
    color: "red"
}

const Menu = () => {
    return (
        <nav className="main-menu">
            <NavLink exact to="/" activeStyle={selectedStyle}>
                App
            </NavLink>
            <NavLink to="/about" activeStyle={selectedStyle}>
                About
            </NavLink>
        </nav>
    )    
}

export default Menu