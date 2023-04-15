import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/registerRBS">RegisterRBS</Link>
            <Link to="/registerBs">RegisterBS</Link>
        </div>
    );
};

export default Header;